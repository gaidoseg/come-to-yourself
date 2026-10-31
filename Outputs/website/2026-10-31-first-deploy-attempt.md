# 2026-10-31 — First live build attempt: "Come Home to Yourself" landing page

## Status: BUILT, NOT YET DEPLOYED (blocked — see below)

## What I built
- Source: `Reference/brand-assets/Come Home to Yourself - landing page.html` (the approved single-page
  editorial design — Lora + Jost fonts, brown/beige palette, alternating beige/white bands).
- Cleaned it up into a standalone, production-ready static file: `site/index.html`.
  - The original reference file had an extra outer `<html><head>...</head><body>` wrapper with a
    non-standard `<meta name="claude:viewport-fit-sides">` tag and a misplaced `<title>` sitting in
    the body (artifacts of whatever tool/preview it was last saved from). I rebuilt it as one clean
    HTML document: proper `<head>` with charset, viewport, a real `<title>` ("Come Home to Yourself |
    Emilie Gaidos Coaching"), a meta description, the Google Fonts preconnect/stylesheet links, and
    the original `<style>` block; then the original `<body>` content (header through footer)
    unchanged.
  - No copy, layout, colors, or structure were changed — only the document shell.
- Checked all CTAs and pricing:
  - "Book a Free Call" (header button), "Book Your Free Clarity Call" (mid-page and closing-section
    buttons) all already link to `https://www.instagram.com/emiliegaidos/` with `target="_blank"` —
    i.e. the reference file already had the working Instagram-DM fallback wired in. I did not need to
    change these; I verified them rather than invent new links.
  - Confirmed no price/dollar figures or placeholder ("TBD"/"lorem") text anywhere on the page —
    matches `docs/OFFERS.md`, which has no confirmed price yet.
- File lives at: `/Users/emilie/My Coaching Busiess/site/index.html` (single self-contained file,
  ~186KB, includes one inline base64 JPEG).

## Deployment — BLOCKED
I was unable to complete the Vercel deployment step in this session:
- No Vercel MCP tools were available to call (no `ToolSearch` tool and no `mcp__vercel__*` tools were
  present in my toolset this session — only Read/Write/Edit/Bash).
- No Vercel CLI installed (`vercel` not found) and no Node/npm/npx available to install one.
- No Vercel auth token or credentials present in the environment (`~/.vercel` doesn't exist, no
  `VERCEL_*`/token env vars set).
- Confirmed Vercel's API is reachable over the network (`api.vercel.com` returns HTTP 403 for an
  unauthenticated request), so this is a credentials/tooling access problem, not a network problem.

**Nothing was deployed. There is no live URL yet.** I did not fabricate or guess at a URL.

## What's needed to finish this
- Vercel MCP tools (or CLI + a valid token for the "EG" team, `team_VQkzU2AsAFd1T0IGJoAs1luN`) need to
  be available in a future session so I can:
  1. Create a new Vercel project (suggested name: `come-home-to-yourself`) under team `eg-0eae`.
  2. Deploy `site/index.html` as a static site.
  3. Fetch the resulting preview URL and verify it renders correctly before reporting it as live.

## Still missing / open items (unchanged regardless of deploy)
- **Booking tool:** none exists yet. Instagram DM is the only working CTA path for now, by design —
  do not wire up a fake "Book a Free Call" tool until Emilie sets one up.
- **Pricing:** not in `docs/OFFERS.md` yet, so intentionally left off the page.
- **Custom domain:** not purchased/connected — needs Emilie's explicit go-ahead later, out of scope
  for this deploy.

## Judgment calls made
- Rebuilt the document `<head>`/shell rather than deploying the reference file verbatim, since the
  original wrapper markup was non-standard and risked rendering a stray `<meta>` tag reference or
  tab title oddly in production. All visible content/design is unchanged.
- Left the CTA links exactly as found (pointing to Instagram) since they already satisfied the "no
  fake booking link" requirement — no changes needed there.
