const Stripe = require('stripe');
const { neon } = require('@neondatabase/serverless');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const sql = neon(process.env.DATABASE_URL);

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed');
    return;
  }

  const signature = req.headers['stripe-signature'];
  const rawBody = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    try {
      await sql`
        INSERT INTO registrations
          (stripe_session_id, email, name, product, amount_cents, currency, payment_status)
        VALUES (
          ${session.id},
          ${session.customer_details?.email || session.customer_email || ''},
          ${session.customer_details?.name || null},
          ${'self-paced-program'},
          ${session.amount_total},
          ${session.currency},
          ${session.payment_status}
        )
        ON CONFLICT (stripe_session_id) DO NOTHING
      `;
    } catch (dbErr) {
      console.error('Failed to record registration:', dbErr);
    }
  }

  res.status(200).json({ received: true });
}

handler.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = handler;
