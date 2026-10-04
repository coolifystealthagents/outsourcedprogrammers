# Service-led topical authority ledger

**Scope:** OutsourcedProgrammers.com only. This source-only planning record maps existing Philippines-based software service pages to existing research pages. It does not claim that a reader-facing link already exists. Each future link must be added only after the source page, target page, rendered anchor, Article schema, canonical URL, and sitemap entry are checked again.

## Pillars and supporting pages

| Service pillar | Existing service URL | Reader question already covered by an existing research page | Supporting research URL | Controlled next handoff |
| --- | --- | --- | --- | --- |
| Next.js development | `/services/nextjs-development` | How can a team set safe controls before giving an outsourced developer Next.js maintenance work? | `/research/research-nextjs-outsourcing-controls` | Delivered in the rendered article on 2026-09-11; retain its one route-local Next.js development handoff and do not add another CTA. |
| React application development | `/services/react-application-development` | What should a first React developer task include before it goes to review? | `/research/research-react-developer-onboarding` | Delivered locally in rendered source `086bb65d2facfba602d5543f0d4c58421f732ed4` on 2026-09-14. One route-local handoff answers the React work-lane question; public verification remains pending by repository policy. |
| Node.js API development | `/services/nodejs-api-development` | What proof should an API maintenance ticket contain? | `/research/research-node-api-maintenance` | Delivered in the rendered article on 2026-08-23; retain the route-local handoff and do not add another CTA. |
| WordPress engineering | `/services/wordpress-engineering` | How can a team check content-management changes before they go live? | `/research/outsourced-content-management-qa` | Delivered in rendered source `0f35172bd1155f54875533ec42899fa35e41e91c` on 2026-10-02. The research route has one route-local, staging-only WordPress engineering handoff; the technical owner keeps plugin, publishing, access, and production authority. Public verification is pending because repository policy prohibits it. |
| Shopify development | `/services/shopify-development` | What should a checkout QA brief cover before a store change is accepted? | `/research/outsourced-ecommerce-checkout-qa` | Delivered in rendered source `3c61919f09cc2716af323ac5b6f0f685cf6abbca` on 2026-10-04. Keep its one route-local Shopify development handoff; public verification is pending by repository policy. |
| QA automation | `/services/qa-automation` | How can an owner keep release control while assigning QA automation work? | `/research/research-qa-automation-outsourcing` | Delivered in the rendered article on 2026-09-08; retain its one route-local QA automation handoff and do not add another CTA. |
| DevOps support | `/services/devops-support` | What makes a software handoff reliable when deployment and runbook work is involved? | `/research/software-development-handoff-reliability-research` | Already rendered and publicly verified on 2026-08-20; retain the existing narrow handoff. |
| Database engineering | `/services/database-engineering` | What controls make database cleanup reversible and reviewable? | `/research/research-database-cleanup-outsourcing` | Link from backup, schema, or cleanup evidence that calls for a dry run and owner-approved window. |
| Mobile app development | `/services/mobile-app-development` | How should a distributed team plan browser and device checks before accepting front-end work? | `/research/remote-programmer-browser-compatibility-matrix` | Link only after confirming the supporting page stays specific to mobile acceptance criteria. |
| Legacy application maintenance | `/services/legacy-application-maintenance` | How can a team make legacy maintenance observable before it expands the queue? | `/research/research-legacy-code-maintenance` | Link from a bounded legacy maintenance decision with a test that captures the bug. |

## Imminent execution queue

1. Do not add a second Next.js development CTA. The route-local article already renders one handoff; source provenance is `3e2fbc18a9b75c11541089477ec2b61ea86f679c`.
2. Do not add a second React application development CTA. The rendered source already has one route-local handoff (`086bb65d2facfba602d5543f0d4c58421f732ed4`); public verification is pending because the repository routine prohibits live-site verification.
3. Do not add a second WordPress engineering CTA. The rendered-source commit `0f35172bd1155f54875533ec42899fa35e41e91c` added exactly one route-local next step in `/research/outsourced-content-management-qa`; preserve that source commit while deployment and public verification remain pending by policy.
4. Do not add a second Shopify development CTA. The rendered-source commit `3c61919f09cc2716af323ac5b6f0f685cf6abbca` added one route-local checkout QA handoff; public verification is pending because policy prohibits it.
5. Leave the database, mobile, and legacy rows as unpromoted research candidates. Their generated source pages currently have zero links to their mapped services, but this audit does not authorize multiple same-run CTAs.
6. Do not add a generic service carousel or sitewide related-links block. Each handoff must answer the research page's specific next question.
7. Keep `/research/research-node-api-maintenance` → `/services/nodejs-api-development` non-duplicable: its rendered article already has one route-local CTA.

## Release guardrails

- The company technical owner keeps architecture, merge, production, secrets, and commercial authority.
- Do not publish rankings, rates, testimonials, or claims about staffing outcomes without real on-site evidence.
- Follow the repository routine boundary: a source-only ledger can be validated, committed, and pushed, but it does not trigger Coolify or public-route verification.

## Delivery status — 2026-10-02

- Rendered source: `0f35172bd1155f54875533ec42899fa35e41e91c`.
- Local proof: a fresh production build emitted the content-management QA research artifact with its expected H1, one self-canonical link, updated date `2026-10-02`, one route-local WordPress engineering href, the staging-only marker, and the owner boundary. The generated sitemap includes the canonical research route.
- Deployment/public state: `deployment_pending_public_verification`. `ops/recurring-routines.json` prohibits Coolify deployment, deployment monitoring, and live-site verification for the approved routine. No deployment or public probe was attempted, so this source delivery is not represented as live.
- Preserve rendered-source commit `0f35172bd1155f54875533ec42899fa35e41e91c`; this status-only record must remain separate from the rendered source.

## Delivery status — 2026-10-04

- Rendered source: `3c61919f09cc2716af323ac5b6f0f685cf6abbca`.
- Local proof: a fresh production build emitted `/research/outsourced-ecommerce-checkout-qa` with its expected H1, self-canonical link, updated date `2026-10-04`, one route-local Shopify development href, the checkout-test marker, and the store-owner boundary. The Shopify service artifact has its own canonical and H1, and both routes appear in the generated sitemap; this sitemap intentionally has no `<lastmod>` values.
- Deployment/public state: `deployment_pending_public_verification`. `ops/recurring-routines.json` prohibits Coolify deployment, deployment monitoring, and live-site verification for the approved publishing routines. No deployment or public probe was attempted, so this source delivery is not represented as live.
- Preserve rendered-source commit `3c61919f09cc2716af323ac5b6f0f685cf6abbca`; do not add another Shopify CTA. This status-only record must remain separate from the rendered source.
