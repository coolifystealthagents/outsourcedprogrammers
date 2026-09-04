import type { ResearchPost } from "./fleet-content";
export const september4ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    slug: "research-outsourced-code-review-queue-health",
    title: "What code review queue data can and cannot tell an outsourced team",
    excerpt:
      "A source-led method for measuring review delay without turning response time into a developer score.",
    topic: "Review queue health",
    published: "2026-09-04",
    hero: "/research-heroes/2026-08-23/outsourced-release-observability-evidence-2026.png",
    body: [
      "A pull request can wait because its submission is incomplete, its reviewer is unavailable, or the change needs a product decision. One elapsed-time number hides those different causes.",
      "GitHub documents reviews as comments, approvals, and requests for changes. DORA research treats delivery as a system. Together, those sources support measuring state changes and ownership rather than watching whether a remote programmer appears online.",
      "Record when the author says the change is ready, whether required checks and context are present, when a named reviewer first acts, and when the author responds. Classify a returned submission separately from a complete submission waiting in the queue.",
      "Use medians and an upper percentile with the number of reviewed changes. Split urgent fixes from ordinary work. A small sample, mixed risk levels, or missing timestamps limits any conclusion.",
      "The data may reveal unclear ownership, missing evidence, or reviewer capacity. It cannot establish individual effort, code quality, or intent on its own.",
    ],
    sources: [
      [
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
      ],
      ["DORA research", "https://dora.dev/research/"],
    ],
  },
  {
    slug: "research-synthetic-test-data-for-outsourced-qa",
    title:
      "Synthetic test data for outsourced QA: evidence, limits, and ownership",
    excerpt:
      "Research on test fixtures that reduce exposure to customer data while preserving important edge cases.",
    topic: "Synthetic test data",
    published: "2026-09-04",
    hero: "/research-heroes/2026-08-23/outsourced-database-migration-rehearsal-evidence-2026.png",
    body: [
      "Synthetic data is created for testing instead of copied from a customer record. It reduces direct exposure, but it is useful only when the fixture represents the states and relationships the test needs.",
      "NIST SSDF calls for protected development environments. OWASP ASVS supplies testable application security requirements. Neither source says synthetic data automatically proves privacy, security, or production behavior.",
      "Start with a data dictionary for the selected flow. Include valid values, boundaries, missing fields, conflicting relationships, and denied identities. Give every fixture an owner and expected result.",
      "Do not make a supposedly synthetic set by lightly editing production exports. Logs, screenshots, recordings, and failed-test artifacts can leak the same values the fixture was meant to avoid.",
      "Rare production combinations, volume behavior, provider responses, and migration history may not exist in the test set. Record those gaps. The company retains data classification, access, and retention decisions.",
    ],
    sources: [
      ["NIST SSDF", "https://csrc.nist.gov/Projects/ssdf"],
      [
        "OWASP ASVS",
        "https://owasp.org/www-project-application-security-verification-standard/",
      ],
    ],
  },
  {
    slug: "research-outsourced-dependency-update-evidence",
    title: "Evidence standards for outsourced dependency updates",
    excerpt:
      "A practical reading of provenance, change scope, testing, and residual uncertainty in package updates.",
    topic: "Dependency updates",
    published: "2026-09-04",
    hero: "/research-heroes/2026-08-23/outsourced-dependency-provenance-review-2026.png",
    body: [
      "A green build says selected commands passed on one revision. It does not explain why a dependency changed, where the package came from, or whether untested runtime paths remain compatible.",
      "OpenSSF Scorecard reports signals about open source project practices. NIST SSDF addresses third-party components and software integrity. A score or checklist is not a warranty for a package.",
      "Retain old and new locked versions, package source, dependency path, release notes, known advisories, license metadata, and the reason for changing now. Separate routine patches from major work.",
      "Run repository checks and exercise application paths that use the package. If those paths are unknown, say so. A build tool needs a different test from a database client used during requests.",
      "Incomplete advisories, missing notes, platform-specific behavior, and untested paths limit the evidence. A remote programmer can prepare the patch; the technical owner approves risk, merge, and release.",
    ],
    sources: [
      ["OpenSSF Scorecard", "https://scorecard.dev/"],
      ["NIST SSDF", "https://csrc.nist.gov/Projects/ssdf"],
    ],
  },
  {
    slug: "research-remote-incident-handoff-completeness",
    title:
      "Measuring incident handoff completeness in remote engineering teams",
    excerpt:
      "Research on whether the next owner receives enough evidence to act without confusing documentation volume with readiness.",
    topic: "Incident handoffs",
    published: "2026-09-04",
    hero: "/research-heroes/2026-08-23/outsourced-api-contract-drift-evidence-2026.png",
    body: [
      "An incident handoff is complete when the next accountable person can identify the affected service, current impact, actions taken, evidence, unresolved risk, and requested decision. A long chat transcript may still omit one item.",
      "Google technical writing focuses on the reader and task. OpenTelemetry documents traces, metrics, and logs as distinct signals. Those sources support concise records tied to evidence, not a universal template.",
      "Sample closed incidents and check what was present when ownership changed. Preserve the handoff time, owner, service state, relevant signal, tested mitigation, and next checkpoint.",
      "Measure returns for missing context and time until the next owner can act responsibly. More messages are not automatically better. Repeated clarification about one field suggests a template or training problem.",
      "Severity, unfamiliar systems, and restricted evidence change what a reasonable handoff contains. The company incident lead keeps command authority, external communication, and recovery approval.",
    ],
    sources: [
      [
        "Google Technical Writing",
        "https://developers.google.com/tech-writing",
      ],
      ["OpenTelemetry", "https://opentelemetry.io/docs/"],
    ],
  },
  {
    slug: "research-access-removal-latency-outsourced-programmers",
    title: "Access removal latency after an outsourced programming assignment",
    excerpt:
      "A source-led framework for measuring account closure and token revocation after role changes or offboarding.",
    topic: "Access lifecycle",
    published: "2026-09-04",
    hero: "/research-heroes/2026-08-23/outsourced-accessibility-regression-evidence-2026.png",
    body: [
      "Access removal starts with an event: an assignment ends, a role changes, elevated access expires, or an account owner requests closure. The clock means little unless the team records its trigger.",
      "NIST SP 800-53 includes account management and access control practices. CISA Secure by Design argues for reducing avoidable exposure. The sources do not prescribe one target for every privilege level.",
      "Inventory named accounts, repository memberships, cloud roles, support tools, local credentials, API tokens, and shared resources. Record the trigger, owner, request, confirmed revocation, and verification method.",
      "Separate account disablement from active-session invalidation and secret rotation. Closing a dashboard account may leave a token, cached session, deploy key, or copied credential usable elsewhere.",
      "Report results by privilege and trigger type, plus unresolved accounts. Login history alone does not prove removal. Authorized company owners approve removals and decide when broader rotation is required.",
    ],
    sources: [
      [
        "NIST SP 800-53 Rev. 5",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
      ],
      ["CISA Secure by Design", "https://www.cisa.gov/securebydesign"],
    ],
  },
];
