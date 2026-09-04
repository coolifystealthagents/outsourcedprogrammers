import type { BlogDetail } from "./data";

type Topic = {
  slug: string;
  title: string;
  excerpt: string;
  focus: string;
  problem: string;
  fixture: string;
  evidence: string;
  owner: string;
};
const topics: Topic[] = [
  {
    slug: "outsource-webhook-delivery-ledger-review",
    title: "Review a webhook delivery ledger with an outsourced programmer",
    excerpt:
      "Build a safe record of attempts, acknowledgements, retries, and terminal outcomes for one webhook.",
    focus: "webhook delivery",
    problem:
      "A provider says an event was delivered, but the application cannot explain which attempt produced the final state.",
    fixture:
      "signed sandbox events for success, timeout, rejection, replay, and exhausted retries",
    evidence:
      "event ID, payload hash, attempt, response class, retry time, and final disposition",
    owner:
      "The integration owner approves retry policy, signing secrets, and production replay.",
  },
  {
    slug: "outsource-database-lock-contention-review",
    title: "Investigate database lock contention in a bounded outsourced task",
    excerpt:
      "Give a remote programmer a reproducible lock case without opening access to live customer records.",
    focus: "database lock contention",
    problem:
      "A slow request looks like a query problem even though it is waiting behind another transaction.",
    fixture:
      "synthetic rows and two scripted transactions that acquire locks in a controlled order",
    evidence:
      "query label, transaction start, lock wait, blocker, timeout, and rollback result",
    owner:
      "The database owner approves production diagnostics, index changes, and transaction policy.",
  },
  {
    slug: "outsource-session-expiry-warning-qa",
    title: "Test session-expiry warnings without using real accounts",
    excerpt:
      "Check warning timing, renewal, logout, and unsaved work with isolated test identities.",
    focus: "session expiry",
    problem:
      "A warning appears too late, renews the wrong session, or lets unsaved work disappear.",
    fixture:
      "test identities with short sessions, an idle tab, an active tab, and an interrupted renewal",
    evidence:
      "server expiry, warning time, user action, renewal response, authentication state, and draft state",
    owner:
      "Security and product owners set session duration, renewal rules, and warning copy.",
  },
  {
    slug: "outsource-file-preview-isolation-review",
    title: "Check file-preview isolation before delegating upload QA",
    excerpt:
      "Test generated previews, direct URLs, deletion, and tenant boundaries with harmless sample files.",
    focus: "file preview isolation",
    problem:
      "A preview worker or cached URL exposes a file beyond the account that uploaded it.",
    fixture:
      "plain sample files assigned to two synthetic tenants in allowed, denied, deleted, and expired states",
    evidence:
      "requesting identity, source owner, preview job, authorization result, and cache response",
    owner:
      "Privacy and security owners decide retention, storage, and download policy.",
  },
  {
    slug: "outsource-pagination-cursor-contract-review",
    title: "Review pagination cursor contracts across changing data",
    excerpt:
      "Exercise inserts, deletions, expiry, and invalid cursors against a known test collection.",
    focus: "pagination cursors",
    problem:
      "Users see duplicates or miss records when the collection changes between page requests.",
    fixture:
      "a dated collection with duplicate sort values, inserts, deletions, and damaged cursors",
    evidence:
      "request cursor, sort keys, returned IDs, next cursor, collection change, and error response",
    owner:
      "The API owner approves ordering, cursor lifetime, compatibility, and errors.",
  },
  {
    slug: "outsource-cache-key-tenant-boundary-review",
    title: "Audit cache-key tenant boundaries with contrasting fixtures",
    excerpt:
      "Prove that cached responses keep account, locale, role, and query scope separate.",
    focus: "cache key boundaries",
    problem:
      "A cached response returns content created for another tenant, role, language, or query.",
    fixture:
      "two synthetic tenants with overlapping IDs and different roles, locales, and filters",
    evidence:
      "request identity, normalized key parts, cache outcome, origin response, and purge behavior",
    owner:
      "The platform owner approves cache scope, lifetime, purge controls, and production observation.",
  },
  {
    slug: "outsource-feature-flag-cleanup-handoff",
    title: "Prepare a feature-flag cleanup handoff for owner approval",
    excerpt:
      "Trace callers, fallbacks, stored values, and rollback before removing an old flag.",
    focus: "feature flag cleanup",
    problem:
      "Removing an apparently finished flag revives a stale default or breaks a worker that still reads it.",
    fixture:
      "test configuration for both variations, missing configuration, stale cache, and a queued job",
    evidence:
      "flag reference, evaluated value, affected path, fallback, test result, and rollback commit",
    owner:
      "Product and release owners confirm the permanent behavior and removal window.",
  },
  {
    slug: "outsource-api-error-envelope-review",
    title: "Compare API error envelopes before assigning client fixes",
    excerpt:
      "Map status, code, message, field errors, and request IDs across representative failures.",
    focus: "API error envelopes",
    problem:
      "Client code branches on message text because services disagree about an error shape.",
    fixture:
      "requests for validation failure, missing authorization, missing record, conflict, rate limit, and server fault",
    evidence:
      "endpoint, request class, status, machine code, field details, request ID, and client result",
    owner:
      "The API owner decides compatibility, public wording, and deprecation.",
  },
  {
    slug: "outsource-background-job-cancellation-review",
    title: "Test background-job cancellation at each work boundary",
    excerpt:
      "Find where cancellation stops new work, interrupts active work, or arrives after completion.",
    focus: "job cancellation",
    problem:
      "The interface says canceled while a worker continues writing records or producing side effects.",
    fixture:
      "synthetic jobs paused before pickup, during processing, before commit, and after completion",
    evidence:
      "job ID, cancellation time, worker checkpoint, durable writes, status, and cleanup result",
    owner:
      "The operations owner defines cancellation promises and approves production worker controls.",
  },
  {
    slug: "outsource-audit-export-redaction-review",
    title: "Review audit-export redaction with an outsourced programmer",
    excerpt:
      "Keep useful audit evidence while removing secrets and unnecessary personal data.",
    focus: "audit export redaction",
    problem:
      "An investigation export includes tokens, raw request bodies, or unrelated personal fields.",
    fixture:
      "synthetic events with ordinary values, token-like strings, multiline input, and nested fields",
    evidence:
      "event type, columns, applied redaction, exported value category, count, and access decision",
    owner:
      "Privacy and security owners approve fields, recipients, retention, and exceptions.",
  },
  {
    slug: "outsource-browser-storage-migration-qa",
    title: "Test a browser-storage migration across old application states",
    excerpt:
      "Exercise upgrades, interruption, quota failure, and logout with disposable browser profiles.",
    focus: "browser storage migration",
    problem:
      "A returning user loads stale data or loses a draft when a new client reads an older shape.",
    fixture:
      "profiles with empty, current, old, malformed, oversized, and partly migrated records",
    evidence:
      "starting schema, application revision, migration step, visible state, stored result, and recovery",
    owner:
      "Product and release owners decide retention, rollout, and rollback.",
  },
  {
    slug: "outsource-dependency-license-inventory-handoff",
    title: "Build a dependency-license inventory for counsel review",
    excerpt:
      "Collect package identity, version, source, license files, and unresolved cases without giving legal advice.",
    focus: "dependency license inventory",
    problem:
      "A package list hides dependency paths or repeats an unverified registry label as a conclusion.",
    fixture:
      "the locked tree for one revision plus license files shipped with installed packages",
    evidence:
      "package, version, dependency path, registry metadata, included license file, and mismatch",
    owner:
      "Company counsel interprets obligations and approves distribution decisions.",
  },
];
const sources = [
  {
    name: "NIST Secure Software Development Framework",
    url: "https://csrc.nist.gov/Projects/ssdf",
    note: "NIST guidance for managing software development risk.",
  },
  {
    name: "GitHub pull request reviews",
    url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
    note: "First-party documentation for review and approval.",
  },
  {
    name: "Google Technical Writing",
    url: "https://developers.google.com/tech-writing",
    note: "Guidance for instructions another person can follow.",
  },
];
function makeDetail(t: Topic, i: number): BlogDetail {
  return {
    strictNoPricing: true,
    heroImage:
      i % 2
        ? "/illustrations/getillustrations/inkdex-saas/code-control.webp"
        : "/programmer-workbench.jpg",
    takeaways: [
      `Define the expected ${t.focus} behavior first.`,
      `Use ${t.fixture}.`,
      "Keep failed and untested cases in the record.",
      t.owner,
    ],
    readinessRows: [
      {
        area: "Question",
        ready: `One observable ${t.focus} decision`,
        notReady: "A request to inspect everything",
      },
      {
        area: "Fixture",
        ready: t.fixture,
        notReady: "Customer data or shared credentials",
      },
      {
        area: "Evidence",
        ready: t.evidence,
        notReady: "A pass label without context",
      },
      {
        area: "Approval",
        ready: t.owner,
        notReady: "The contractor releases alone",
      },
    ],
    sections: [
      {
        id: "name-the-problem",
        title: `Name the ${t.focus} problem`,
        paragraphs: [
          `${t.problem} Turn that concern into one case with an expected result. Name the environment, source revision, and person who will accept or reject the outcome.`,
          `Write what may change and what must stay untouched. ${t.owner} The programmer can investigate inside that boundary without inheriting a company policy decision.`,
        ],
      },
      {
        id: "build-the-fixture",
        title: "Build a fixture that can fail safely",
        paragraphs: [
          `Use ${t.fixture}. Label each starting state and expected outcome before the run. Awkward transitions often explain more than a tidy success case.`,
          `Work in an approved test environment. Do not copy production data or use an owner credential. If a case cannot be reproduced safely, record the gap and the access it would require.`,
        ],
      },
      {
        id: "follow-the-state",
        title: "Follow the state, not just the screen",
        paragraphs: [
          `Capture ${t.evidence}. Compare the first disagreement across every participating interface, API, worker, data store, or cache.`,
          `Use one stated time convention and attach the exact revision. Mark an inference as an inference. A plausible explanation is not a measured result.`,
        ],
      },
      {
        id: "make-one-change",
        title: "Make one defensible change",
        paragraphs: [
          `If the fixture proves a defect, correct the narrowest boundary that explains it. Add a regression case that fails before the patch and passes afterward.`,
          `The pull request should describe the old result, new result, commands run, and remaining uncertainty. A standards link can inform the method, but it cannot prove what this application did.`,
        ],
      },
      {
        id: "hand-back-the-decision",
        title: "Hand the decision back to its owner",
        paragraphs: [
          `Close with the fixture, observations, patch, test output, exclusions, and next owner. An unresolved product or security decision is a useful finding when it is stated plainly.`,
          `The outsourced programmer owns an accurate technical record. The company owns access, customer impact, merge, release, and residual risk.`,
        ],
      },
    ],
    roleBrief: [
      {
        label: "Assignment",
        text: `Review one ${t.focus} path against written results.`,
      },
      { label: "Fixture", text: t.fixture },
      { label: "Evidence", text: t.evidence },
      { label: "Owner boundary", text: t.owner },
    ],
    faqs: [
      {
        question: "Can this use production data?",
        answer:
          "Use synthetic records in an approved environment. Escalate any case that requires customer data or a live action.",
      },
      {
        question: "Who accepts the change?",
        answer:
          "A named company owner reviews the evidence and retains merge and release authority.",
      },
      {
        question: "What belongs in the handoff?",
        answer:
          "Include the revision, fixture, expected and observed results, failed or untested cases, checks, and next owner.",
      },
    ],
    sources,
    internalLinks: [
      {
        label: "Plan an outsourced programmer role",
        url: "/blog/outsourced-programmers-planning",
        note: "Define the work lane.",
      },
      {
        label: "Use a technical handoff",
        url: "/blog/outsourced-programmer-technical-handoff",
        note: "Package evidence.",
      },
      {
        label: "Review access controls",
        url: "/blog/outsourced-programmer-access-checklist",
        note: "Limit permissions.",
      },
    ],
  };
}
export const september4BlogBatch = topics.map(({ slug, title, excerpt }) => ({
  slug,
  title,
  excerpt,
  minutes: 10,
  published: "2026-09-04",
}));
export const september4BlogDetails: Record<string, BlogDetail> =
  Object.fromEntries(topics.map((t, i) => [t.slug, makeDetail(t, i)]));
