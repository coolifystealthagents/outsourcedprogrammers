# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the public marketing and editorial copy in:

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## What changed

- Replaced the three repeated generic guide fallbacks with separate guides about first programming tasks, provider questions, and first-week onboarding.
- Kept each guide tied to real software handoffs: tickets, repositories, pull requests, test evidence, access limits, review ownership, release approval, and offboarding.
- Removed dormant unsupported savings, pilot-length, and task-count claims from shared data.
- Replaced broad staffing copy about admin, phones, bookkeeping, and marketing with programmer-specific intake questions and role-planning copy.
- Fixed an awkward service onboarding step, generic blog index language, repetitive article titles, image alt text, footer copy, shared CTA copy, contact microcopy, and the placeholder thank-you message.
- Repaired two stale source links and confirmed the cited source URLs returned HTTP 200.

## Final anti-AI pass

The remaining copy was checked for significance puffery, vague corporate claims, forced contrasts, repeated rules of three, em-dash abuse, robotic fragments, empty conclusions, and chatbot language. The site now uses direct instructions and concrete software-team decisions instead of generic staffing promises. Lists remain where they work as checklists, tables, or role-brief fields rather than decorative grouping.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were not edited. No legal meaning was changed. The audit did not add testimonials, client stories, savings claims, credentials, ratings, or performance statistics. Existing route slugs, schema types, citations, and conversion paths were preserved.
