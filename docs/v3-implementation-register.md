# V3 implementation register

## Design controls

- DESIGN_VARIANCE: 8
- MOTION_INTENSITY: 3
- VISUAL_DENSITY: 8
- Redesign mode: evolve
- Primary theme: light
- Design concept: Release Control Room
- Registry: `design-registry.json`

## Shared interface

- Exact top navigation labels are `Home`, `Services`, and `Contact Us` in `app/site-navigation.tsx`.
- Sticky desktop navigation and keyboard-contained mobile dialog share one source of truth.
- Subsidiary and parent-brand relationship appears in the header, footer, contact copy, and approved assets.
- Skip navigation, focus behavior, reduced-motion handling, and responsive containment are defined in `app/globals.css`.

## Conversion journey

- Canonical form route: `/contact-us`.
- Permanent legacy redirect: `/contact` to `/contact-us`.
- Form endpoint: `/api/contact` with required server validation, origin and content-type checks, body limits, honeypot, and rate limits.
- Form success: `/thank-you`.
- Booking confirmation: `/thanks-whats-next`.
- Parent team image appears immediately after the contact hero and form.

## Reviews and claims

- Review records: `app/reviews.ts`.
- Review provenance and limits: `app/reviews-provenance.json`.
- Review rail has no user controls and duplicates the approved set only to make a seamless visual loop.
- Asset approval and checksums: `app/asset-provenance.json`.

## Services

- Service source data: `app/fleet-content.ts`.
- Page-specific audience, problem, inputs, deliverables, boundaries, scenarios, and FAQs: `app/service-details.ts`.
- Shared deep renderer and schema: `app/services/[slug]/page.tsx`.

## Editorial

- Blog renderer: `app/blog/[slug]/page.tsx`.
- Research renderer: `app/research/[slug]/page.tsx`.
- August 19 markdown renderer: `app/aug19-content.tsx`.
- Sticky desktop and collapsible mobile TOCs: `app/editorial-toc.tsx`.
- Topic-aware release-control hero diagrams: `app/topic-hero.tsx`.
- Editorial layouts expose clear title, summary, author, publish date, reading time, hero visual, content hierarchy, support links, CTA, and structured data.

## Platform, SEO, and security

- Canonical HTTP and `www` redirects: `lib/canonical-https.mjs` and `middleware.js`.
- Security headers and permanent `/contact` redirect: `next.config.mjs`.
- Canonical route inventory: `app/sitemap.xml/route.ts`.
- Exact deployment evidence: `app/api/revision/route.ts`.
- ACR tracking remains installed in `app/layout.tsx`.

## Regression evidence

- V3 source contracts: `tests/v3-contract.test.mjs`.
- Canonical behavior: `tests/https-canonicalization.test.mjs`.
- Legacy route-specific content tests remain active.
