# First Live Deploy — 2026-10-31

**Live URL:** https://come-to-yourself.vercel.app

## What's live
The full "Come Home to Yourself" landing page — hero, "who this is for," the shift (where it starts / where you're headed), Emilie's story, the program breakdown, testimonials, vision/values, and the closing invitation. Content and design match `Reference/brand-assets/Come Home to Yourself - landing page.html` exactly; only cleanup was fixing a malformed `<head>` in the source file.

## How it's wired
- GitHub repo: [github.com/gaidoseg/come-to-yourself](https://github.com/gaidoseg/come-to-yourself) (SSH auth set up on this Mac)
- Vercel project: `come-to-yourself` under team `EG` (`eg-0eae`), connected to the GitHub repo — **every push to `main` auto-deploys**
- Site file lives at repo root (`index.html`) so Vercel serves it with zero build config

## CTAs
"Book a Free Call" / "Book Your Free Clarity Call" buttons link to `https://www.instagram.com/emiliegaidos/` (DM "READY" flow) — there's no booking tool connected yet.

## Still missing
- Custom domain (not connected — needs Emilie's go-ahead to buy/connect one)
- Real booking tool (Calendly/Cal.com or similar) to replace the Instagram-DM fallback
- Pricing (not yet set in `docs/OFFERS.md`, so none is shown on the page)

## Notes for future deploys
Vercel's `create_deployment` and `update_project` MCP tools are broken in this environment (object body params get serialized as strings and rejected) — `create_project`/`create_git_project` work fine with flat parameters. **To ship any future change: just commit + push to `main` on GitHub** (git push needs to be run by Emilie directly — this session's auto-mode classifier blocks `git push`/`git remote` from running automatically) — the Vercel webhook handles the rest.
