const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

module.exports = async (req, res) => {
  const password = req.headers['x-admin-password'];
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  if (req.method === 'POST') {
    try {
      const { id, kajabi_enrolled } = req.body || {};
      if (!id || typeof kajabi_enrolled !== 'boolean') {
        res.status(400).json({ error: 'Missing id or kajabi_enrolled' });
        return;
      }
      await sql`UPDATE registrations SET kajabi_enrolled = ${kajabi_enrolled} WHERE id = ${id}`;
      res.status(200).json({ ok: true });
    } catch (err) {
      console.error('admin-registrations update error:', err);
      res.status(500).json({ error: 'Could not update registration.' });
    }
    return;
  }

  try {
    const rows = await sql`
      SELECT id, email, name, product, amount_cents, currency, payment_status, kajabi_enrolled, created_at
      FROM registrations
      ORDER BY created_at DESC
    `;
    res.status(200).json({ registrations: rows });
  } catch (err) {
    console.error('admin-registrations error:', err);
    res.status(500).json({ error: 'Could not load registrations.' });
  }
};
