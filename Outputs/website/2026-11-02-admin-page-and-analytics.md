# Admin Page + Analytics — 2026-11-02

## Registrations admin page
- URL: `/admin.html` (password-protected, not linked from the public site, `noindex` meta tag)
- Shows every self-paced-program registration (date, email, name, amount, payment status) pulled live from the Neon `registrations` table
- "Mark enrolled" button per row — lets Emilie track which buyers she's manually added to Kajabi, since there's no Kajabi API integration yet
- Auth: a single shared admin password, checked server-side in `api/admin-registrations.js` against the `ADMIN_PASSWORD` env var — **needs to be set in Vercel** (Preview + Development, same as the other secrets):
  - Key: `ADMIN_PASSWORD`
  - Value: `EAjCgjj5kJKDVoYw0gVt77Gd`
  - (Change this to something Emilie chooses, if preferred — it's just a placeholder generated value)

## Why not a Stripe admin clone
Stripe's own dashboard already covers payments/refunds/disputes/customer lookup well — duplicating that would be wasted effort. The one gap Stripe's dashboard doesn't fill is "who do I still need to manually enroll in Kajabi," which is what this page is for.

## Why not a custom CMS
Nobody other than Emilie edits this site today, and Claude can edit content directly on request faster than any UI could. A CMS only pays for itself once a non-technical second person needs to edit without a developer/AI in the loop — revisit if that changes.

## Analytics — using proven tools instead of building custom tracking
- **Vercel Web Analytics**: script added to `index.html` (`/_vercel/insights/script.js` + a `va()` queue). Needs Emilie to **enable Web Analytics in the Vercel dashboard** (Project → Analytics tab → Enable) for data to actually start flowing — the script alone won't record anything until that's on.
- **Custom events already wired**: `calendly_open` (fires on every "Book a Free Call" / "Book Your Free Clarity Call" click), `instagram_click` (footer icon), `self_paced_checkout_started` (buy button click). These show up in Vercel Analytics' custom events view.
- **Scroll-depth / heatmap / "where visitors never looked" data**: Vercel Analytics doesn't do this. Recommended: [Microsoft Clarity](https://clarity.microsoft.com) (free, one script tag, gives heatmaps + scroll maps + session recordings). Emilie needs to create a free account there and give Claude the project ID/script snippet to embed — not something Claude can do without her creating the account first.

## Still open
- Vercel Authentication (Deployment Protection) needs to be turned off for Preview deployments — this was blocking the Stripe webhook from ever reaching `/api/webhook` (confirmed via direct test: 401 "Protected deployment"). Fix: Project Settings → Deployment Protection → disable Vercel Authentication for Preview.
- `ADMIN_PASSWORD` env var needs to be added (see above).
- Microsoft Clarity needs Emilie's own account + snippet.
