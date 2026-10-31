# 🤖 Coaching Business — Agents Guide

How AI agents run this coaching business — online and in person — their roles, tools, workflows, and how they hand work to each other. Adapted from a dev-team agent pattern (Code / Docs / Test / Deploy / Research) into a sales-and-growth pattern for a coaching business.

## 01 📋 Overview

We use AI agents to automate repetitive marketing/sales work, do research, draft and publish content, run outreach, and help deploy the online storefront (website, booking, funnels) — so the business can run on social media and in-person with less manual effort.

| Research Agent | Content Agent | Marketing Agent | Sales Agent | Client Success Agent | Website Agent |
|---|---|---|---|---|---|
| Finds audience, competitor, and trend insights | Writes posts, scripts, emails in brand voice | Plans campaigns, funnels, ad copy | Handles outreach, proposals, objections, booking | Onboards clients, preps sessions, collects testimonials | Builds/publishes website, booking pages, landing pages |

## 02 👥 Agent Roles

Specialized agents for different parts of the business.

| Agent Name | Role | Key Inputs | Key Outputs | Trigger |
|---|---|---|---|---|
| [Research Agent](.claude/agents/research-agent.md) | Market, competitor, audience & trend research | `docs/ICP.md`, web search | Findings in `Reference/research/`, `Reference/competitors/` | On demand, before campaigns/offers |
| [Content Agent](.claude/agents/content-agent.md) | Social media posts, captions, scripts, newsletters | `docs/BRAND.md`, `docs/CONTENT_STRATEGY.md` | Drafts in `Outputs/content/` | Weekly / on content calendar |
| [Marketing Agent](.claude/agents/marketing-agent.md) | Campaigns, funnels, ad copy, email sequences, SEO | `docs/OFFERS.md`, `docs/MARKETING_CHANNELS.md` | Plans/copy in `Outputs/marketing/` | On launch, on demand |
| [Sales Agent](.claude/agents/sales-agent.md) | DM/email scripts, proposals, objection handling, booking | `docs/OFFERS.md`, `docs/SALES_PROCESS.md` | Scripts/sequences in `Outputs/sales/` | On new lead, on demand |
| [Client Success Agent](.claude/agents/client-success-agent.md) | Onboarding, session prep, in-person scheduling, testimonials/referrals | `My profile/`, client notes | Onboarding docs, prep notes in `Outputs/client-success/` | On new client, before sessions |
| [Website Agent](.claude/agents/website-agent.md) | Publish/update website, booking pages, landing pages, link-in-bio | `Outputs/marketing/`, `Outputs/content/` | Live pages, deploy notes in `Outputs/website/` | On release |

## 03 🔁 Agent Workflow

How agents collaborate to complete a task. The main Claude session acts as the **orchestrator** — it reads the request, decides which agent(s) apply, runs them (in sequence or parallel), and reviews output before it's used or published.

```
Task Received → Research (if needed) → Plan & Draft (Content/Marketing/Sales) → Review & Validate → Save to Outputs/ → Deploy (if applicable) → Report to Emilie
```

Agents can call each other through the orchestrator — e.g. Sales Agent asks Research Agent for competitor pricing before drafting a proposal, or Marketing Agent hands finished copy to Website Agent to publish.

## 04 📝 Example Task

Example prompt to run an agent:

```
/agent sales
Draft a 5-message DM follow-up sequence for Instagram leads who downloaded
the free discovery-call guide but haven't booked yet.
Requirements:
- Use docs/OFFERS.md and docs/SALES_PROCESS.md for program details and tone
- Address the top 2 objections from docs/ICP.md
- End each message with one clear next step
- Save result to Outputs/sales/
```

## 05 🛠️ Tools & Integrations

Tools available to agents.

| Category | Tools |
|---|---|
| Research | Web search, web fetch, `Reference/` folder |
| Docs & Strategy | `docs/` folder (read/write), `My profile/` |
| Content & Outputs | `Outputs/` subfolders per agent |
| Deployment | Website/hosting tools (e.g. Vercel), domains, booking/calendar tools |
| Scheduling | Calendar tools for in-person sessions and content calendars |
| Comms | Email/DM drafting (sending always confirmed with Emilie first) |

## 06 ⭐ Best Practices

- Keep every agent's output tied to `docs/BRAND.md` and `docs/ICP.md` so voice and targeting stay consistent.
- Review and approve drafts before anything is posted, sent, or published — agents draft, Emilie (or an explicit go-ahead) approves.
- Keep tasks focused: one agent, one deliverable, saved to its own `Outputs/` subfolder.
- Update `docs/` whenever the offer, pricing, or positioning changes — every agent reads from these files.
- Reuse what's in `Reference/` instead of re-researching the same thing twice.

## 07 🛡️ Safety & Limitations

- Agents never send messages, publish posts, or make purchases/payments on Emilie's behalf without explicit confirmation first.
- No real client financial, health, or personal data goes into `Reference/` or `Outputs/` beyond what's needed for coaching notes.
- Pricing, discounts, and contracts are drafted by agents but confirmed by Emilie before going out.

## 08 📈 Future Enhancements

- Add a Client Success → Sales feedback loop (referrals/testimonials feeding new outreach).
- Connect a CRM or lead list so Sales Agent can track follow-up state.
- Add analytics review (which content/campaigns actually convert) to close the loop back to Content/Marketing Agents.

---

## Documentation Progress

- [x] [docs/PRD.md](docs/PRD.md) — business plan & goals (drafted from source material, some targets still TBD)
- [x] [docs/ICP.md](docs/ICP.md) — ideal client profile (drafted from landing page copy, pending Research Agent validation)
- [x] [docs/OFFERS.md](docs/OFFERS.md) — programs & pricing (program structure filled in, pricing TBD)
- [x] [docs/BRAND.md](docs/BRAND.md) — brand voice & positioning
- [x] [docs/CONTENT_STRATEGY.md](docs/CONTENT_STRATEGY.md) — content pillars & cadence (informed by research findings)
- [ ] [docs/SALES_PROCESS.md](docs/SALES_PROCESS.md) — funnel & follow-up
- [x] [docs/MARKETING_CHANNELS.md](docs/MARKETING_CHANNELS.md) — channel strategy (Instagram + TikTok confirmed; email/paid ads still TBD)
- [x] [.claude/agents/research-agent.md](.claude/agents/research-agent.md) — Research Agent (done, ran first research pass)
- [x] [.claude/agents/website-agent.md](.claude/agents/website-agent.md) — Website Agent (built site, live deploy pending — Vercel connector issue, manual deploy in progress)
- [x] [.claude/agents/content-agent.md](.claude/agents/content-agent.md) — Content Agent (built)
- [ ] `.claude/agents/marketing-agent.md`, `sales-agent.md`, `client-success-agent.md` — not yet built
