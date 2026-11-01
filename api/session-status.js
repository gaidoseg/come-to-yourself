const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  const sessionId = req.query?.session_id;
  if (!sessionId) {
    res.status(400).json({ error: 'Missing session_id' });
    return;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.status(200).json({
      status: session.payment_status,
      email: session.customer_details?.email || null,
    });
  } catch (err) {
    console.error('session-status error:', err);
    res.status(500).json({ error: 'Could not retrieve session.' });
  }
};
