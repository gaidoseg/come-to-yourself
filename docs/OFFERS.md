# Programs & Pricing

> Read by: Marketing, Sales, Deploy agents — the source of truth for what's actually sold.
> Source: `Reference/brand-assets/Come Home to Yourself - landing page.html`

## Offer 1: Come Home to Yourself
- **Format:** 1:1, online
- **Price:** €2,400 full-pay (≈27,000 SEK), or 6 monthly installments of €450 (€2,700 total) — **founding-client/early pricing**, decided 2026-10-31. Positioned low-mid relative to market comparables (see `Reference/competitors/subconscious-reprogramming-coaches-2026.md`) since Emilie is early-stage and building her testimonial base; expected to rise as more results/testimonials come in.
- **Length:** 6 months
- **Sessions:** Bi-weekly 1:1 sessions
- **Support between sessions:** 24/7 WhatsApp
- **Curriculum:** 12 modules, delivered on Kajabi
- **Method:** 12-step subconscious transformation process (Human Instrument® Mastery methodology) — rewiring subconscious patterns, releasing stored emotional blocks, building self-trust/inner safety, reconnecting with authentic self
- **Who it's for:** Women stuck in overthinking, people-pleasing, self-doubt, anxiety/disconnection — ready for deep change, not a quick fix
- **Outcome promised:** Moving from "stuck, overwhelmed, disconnected" to "grounded, clear, and confident" — deep self-trust, inner peace, emotional freedom

## Offer 2: Self-Paced Program (name TBD)
- **Format:** Self-paced, online, self-checkout — built 2026-11-01
- **Price:** €450 one-time payment (public, shown on-site — unlike Offer 1, this price IS public since it's a direct self-serve purchase)
- **What's included:** The same 12-module curriculum as "Come Home to Yourself," for self-coaching. No live sessions, no 24/7 WhatsApp support.
- **Brand name:** Not yet decided by Emilie — site currently shows "Self-Paced Program (name coming soon)" as a placeholder. Update `api/create-checkout-session.js` (PRODUCT_NAME) and the site copy once named.
- **Purchase flow:** Stripe Checkout (test mode as of 2026-11-01) → webhook records registration in Neon Postgres (`registrations` table) → customer sees confirmation on `/success.html`. Kajabi enrollment is manual for now (no Kajabi API wired up yet) — Emilie checks new registrations and enrolls manually until that's automated.
- **Add-on:** Live 1:1 sessions on top of the self-paced modules are available as a **custom/curated-priced add-on**, arranged via the existing free Clarity Call (Calendly) — not a fixed public price.

## Offer 3: _In-person workshops / sessions_
- _Not yet defined — part of the "online + in-person" goal. Fill in once format/location/pricing is decided._

## Lead Magnet / Free Offer
- **What:** Free Clarity Call (discovery call)
- **Secondary CTA:** DM "READY" on Instagram @emiliegaidos
- **Goal:** Get the lead on a call to be assessed/sold into the 6-month program

## Pricing Notes
- Payment plans available: Yes — 6 x €450/month (€2,700 total) vs. €2,400 full-pay
- Discounts/promotions policy: Current price itself functions as early/founding pricing; no additional discounts defined. Revisit price upward once testimonial base grows beyond the current 3.
- Upsell/downsell path between offers: only one online offer currently; in-person offer would need its own path
