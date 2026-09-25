import type { ResearchPost } from './fleet-content';

type Study = {
  slug: string; title: string; excerpt: string; topic: string;
  service: string; href: string; question: string; scope: string;
  evidence: string; tests: string; risks: string; owner: string;
  sources: readonly (readonly [string, string])[];
};

const studies: readonly Study[] = [
  {
    slug: 'outsourced-programmer-production-deployment-separation-research-2026',
    title: 'Should an outsourced programmer approve their own production deployment?',
    excerpt: 'A decision study of repository review, deployment gates, secret boundaries, and independent release evidence for outsourced programming teams.',
    topic: 'Production deployment separation', service: 'Development operations support', href: '/services/operations-support',
    question: 'Which controls let an outside programmer prepare a release while a company owner keeps an independent, usable production decision?',
    scope: 'one repository change from reviewed commit through build, protected environment approval, deployment record, public verification, and recovery decision',
    evidence: 'base and head revisions; review identity and state; required checks; artifact digest; environment; approving identity; deployment identifier; deployed revision; public result; recovery trigger; and exception record',
    tests: 'a normal reviewed release, a new commit after approval, a failed required check, an unapproved actor, a protected-secret request, a deployment of the wrong revision, a failed public check, and recovery from the prior immutable artifact',
    risks: 'self-approval, stale approval after code changes, repository rules that do not govern the deployment system, early secret exposure, mutable artifacts, ambiguous deployed revisions, bypass privileges, or a successful platform state with a broken public route',
    owner: 'The company release owner approves the production environment, secrets, timing, exceptions, recovery, and final acceptance; the programmer may prepare the change and evidence without self-approving the release.',
    sources: [['GitHub deployments and environments', 'https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments'], ['GitHub reviewing deployments', 'https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments'], ['GitHub rulesets', 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets'], ['NIST Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final'], ['OWASP Secrets Management Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html']]
  },
  {
    slug: 'outsourced-programmer-dependency-change-acceptance-research-2026',
    title: 'What evidence makes an outsourced dependency update reviewable?',
    excerpt: 'Research on direct and transitive dependency changes, lockfiles, vulnerability signals, licenses, provenance, testing, and owner acceptance.',
    topic: 'Dependency change acceptance', service: 'Development operations support', href: '/services/operations-support',
    question: 'What should a company reviewer require before accepting an outside programmer’s dependency update as a controlled software change?',
    scope: 'one dependency-change pull request, including manifests, lockfiles, transitive changes, package provenance, advisories, licenses, build output, behavioral checks, and rollback boundary',
    evidence: 'ecosystem; old and new versions; requested reason; manifest and lockfile diff; direct and transitive packages; registry and digest; advisory result; license result; release notes; supported runtime; tests; artifact digest; and revision',
    tests: 'a clean install from the lockfile, production build, targeted behavior, dependency review, vulnerability scan, license-policy check, supported-runtime matrix, removal of the package cache, rollback to the prior lockfile, and a deliberately disallowed fixture in a safe test repository',
    risks: 'reviewing only the named package, regenerated lockfiles with unexplained changes, package-name confusion, unpinned downloads, stale advisory data, unapproved license conclusions, install scripts, runtime incompatibility, or tests that reuse a contaminated dependency cache',
    owner: 'The technical owner approves supported versions, policy exceptions, lockfile changes, merge, release, and rollback; legal or security owners decide questions within their remit.',
    sources: [['GitHub dependency review', 'https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review'], ['GitHub dependency review configuration', 'https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action'], ['NIST Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final'], ['OpenSSF Scorecard', 'https://scorecard.dev/'], ['npm package-lock.json', 'https://docs.npmjs.com/cli/configuring-npm/package-lock-json']]
  },
  {
    slug: 'outsourced-programmer-secret-exposure-response-research-2026',
    title: 'How should a team respond when an outsourced work lane exposes a secret?',
    excerpt: 'A bounded response method for containment, rotation, evidence, repository history, downstream access, and safe continuation after credential exposure.',
    topic: 'Secret exposure response', service: 'Development operations support', href: '/services/operations-support',
    question: 'What evidence supports a safe decision to resume outsourced programming work after a token, key, password, or certificate may have been exposed?',
    scope: 'one suspected secret from first report through classification, revocation or rotation, access review, history and artifact checks, replacement delivery, validation, and controlled resumption',
    evidence: 'secret type without its value; owner; systems and privileges; exposure location; first and last possible exposure; revocation time; replacement identifier; access logs; repository and artifact findings; notifications; validation; and resumption approval',
    tests: 'rejection of the old credential, successful least-privilege use of the replacement, log review across the exposure window, repository-history search, CI log and artifact review, dependent-service checks, alert behavior, account-session invalidation where applicable, and recovery from an unavailable secrets manager',
    risks: 'deleting a file without revocation, copying the secret into the incident record, incomplete scope discovery, rotating only one of several copies, overlooking forks or artifacts, treating absence of a log event as proof of no use, excessive replacement privilege, or resuming before ownership is clear',
    owner: 'The company security or system owner directs containment, rotation, notification, evidence retention, and resumption; the programmer reports promptly and assists only within an authorized response lane.',
    sources: [['OWASP Secrets Management Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html'], ['GitHub secret scanning', 'https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning'], ['CISA Incident Response Playbooks', 'https://www.cisa.gov/news-events/news/incident-and-vulnerability-response-playbooks'], ['NIST Incident Response Project', 'https://csrc.nist.gov/projects/incident-response'], ['NIST Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final']]
  },
  {
    slug: 'outsourced-programmer-test-data-boundary-research-2026',
    title: 'Can realistic test data be used without copying production records?',
    excerpt: 'A research framework for synthetic fixtures, masked datasets, referential integrity, access, retention, and decision limits in outsourced QA and development.',
    topic: 'Test data boundaries', service: 'QA automation', href: '/services/qa-automation',
    question: 'How can a company provide useful test data to an outside programmer without treating a production copy as the default path to realism?',
    scope: 'one bounded application workflow and the minimum dataset needed to reproduce normal, boundary, authorization, failure, and recovery behavior in an isolated environment',
    evidence: 'test purpose; required fields and relationships; data source; classification; transformation method; residual re-identification assessment; synthetic edge cases; approved identities; environment; access expiry; retention; deletion result; and test coverage',
    tests: 'normal and boundary fixtures, referential integrity, uniqueness and formatting constraints, authorization isolation, missing and malformed records, deterministic reset, export restrictions, access expiry, deletion, backup exclusion, and comparison of fixture behavior with an owner-approved production symptom rather than copied customer content',
    risks: 'assuming masking makes data anonymous, retaining free-text or attachments, preserving rare combinations that identify people, production credentials in fixtures, uncontrolled downloads, unrealistic synthetic distributions, non-repeatable generation, or backups surviving the declared deletion date',
    owner: 'The company privacy and system owners classify data, approve any transformation and environment, set retention, and accept residual risk; the programmer uses only the approved fixture and reports gaps.',
    sources: [['NIST Privacy Framework', 'https://www.nist.gov/privacy-framework'], ['NIST de-identification guidance', 'https://csrc.nist.gov/pubs/sp/800/188/final'], ['OWASP Web Security Testing Guide', 'https://owasp.org/www-project-web-security-testing-guide/'], ['PostgreSQL row security', 'https://www.postgresql.org/docs/current/ddl-rowsecurity.html'], ['NIST Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final']]
  },
  {
    slug: 'outsourced-programmer-small-paid-pilot-research-2026',
    title: 'How should a company evaluate a small paid programming pilot?',
    excerpt: 'Decision-grade research on choosing a representative task, controlling access, measuring handoff quality, and avoiding false confidence from a showcase exercise.',
    topic: 'Paid programming pilot design', service: 'Development operations support', href: '/services/operations-support',
    question: 'What can a small paid pilot validly show about an outsourced programming work lane, and what should remain undecided until repeated delivery evidence exists?',
    scope: 'one representative, reversible, non-production task with a written problem, repository boundary, synthetic fixture, acceptance tests, communication cadence, reviewer, handoff package, and closeout',
    evidence: 'selection rationale; task brief; starting revision; granted access; assumptions and questions; intermediate state; changed files; test results; review findings; rework; elapsed owner wait; handoff completeness; revoked access; and final decision with limitations',
    tests: 'fresh setup from documentation, reproduction of the problem, normal and failure acceptance cases, review against the diff, another person running the handoff, correction of one review finding, clean rollback, access revocation, and confirmation that no production secret or customer record entered the lane',
    risks: 'choosing an unrepresentative toy, scoring speed while owner inputs are late, changing requirements mid-pilot, hidden coaching, granting broad access for convenience, accepting screenshots instead of reproducible evidence, using one success as a staffing forecast, or converting paid work into an unpaid audition',
    owner: 'The company owner chooses the representative risk, supplies decisions on time, pays for the agreed pilot, reviews evidence, controls production, and decides whether a second bounded task is justified.',
    sources: [['NIST Secure Software Development Framework', 'https://csrc.nist.gov/pubs/sp/800/218/final'], ['GitHub pull request reviews', 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews'], ['Google Engineering Practices: small changes', 'https://google.github.io/eng-practices/review/developer/small-cls.html'], ['Google Technical Writing', 'https://developers.google.com/tech-writing'], ['CISA Secure by Design', 'https://www.cisa.gov/securebydesign']]
  }
];

const body = (study: Study): readonly string[] => [
  `Research question. ${study.question} The decision is not whether a programmer can present one successful screen or command. It is whether a company reviewer can inspect a bounded result, reproduce meaningful evidence, identify exclusions, and retain authority over sensitive systems. This study is written for OutsourcedProgrammers.com readers establishing a Philippines-based programming lane with explicit owner controls.`,
  `Finding. Acceptance becomes more defensible when the review unit is written before work starts: ${study.scope}. A broad instruction to fix, improve, or handle the system makes success elastic and pushes risk decisions into implementation. A bounded unit does not guarantee quality, but it gives both parties the same object for scope, evidence, exceptions, and approval.`,
  `A demonstration and an acceptance decision answer different questions. A demonstration shows that one path produced one visible result. Acceptance also considers identity, environment, failure behavior, dependencies, recovery, data handling, and the exact revision under review. Asynchronous work increases the value of durable evidence because the reviewer may not share the author’s session, tools, timezone, or unstated assumptions.`,
  `Method. Define the unit and decision owner, freeze the initial acceptance criteria, use synthetic or specifically approved data, and record ${study.evidence}. Preserve the first meaningful failure and connect every later correction to a revision. Ask a reviewer other than the author to reproduce one ordinary case and the highest-impact failure case from the handoff.`,
  `Minimum test matrix. Exercise ${study.tests}. This matrix is a starting point, not universal certification. Remove a case only with a recorded reason and add cases when data sensitivity, system privilege, reversibility, or business impact requires them. Each row should include precondition, actor, action, expected result, observed result, evidence location, revision, time, and reviewer disposition.`,
  `Source basis. The primary and authoritative sources listed below were checked on September 25, 2026. They describe platform behavior, security practices, testing principles, or governance relevant to this question. They do not certify OutsourcedProgrammers.com, any programmer, or any implementation. A documented control is a constraint to inspect in the configured system, not proof that the system uses it correctly.`,
  `Fact, analysis, inference, and uncertainty should remain separate. A fact is a directly observed artifact or an explicit statement in a cited source. Analysis compares those facts with the agreed criteria. An inference is a plausible explanation that still needs a focused test. Uncertainty names evidence that is missing, inaccessible, or conflicting. This separation prevents a likely story from being reported as an established result.`,
  `Evidence quality depends on traceability more than volume. Strong evidence is revision-specific, time-bounded, reproducible, and proportionate to the decision. It may include structured test output, a sanitized request trace, an immutable artifact digest, a contextual screenshot, or a concise reviewer note. Long logs can conceal the decisive event and expose credentials or personal data, so retain only approved material.`,
  `The principal false-confidence risks are ${study.risks}. None of these conditions alone proves defective work. They explain why a narrow success cannot support an unrestricted claim. The handoff should identify which risks were tested, which were excluded, who accepted each exclusion, and what event would require the decision to be revisited.`,
  `Review sequence. Compare the brief with the changed surface and question unexplained expansion. Confirm identity, environment, data, and revision. Inspect automated checks and reproduce a result. Exercise the most consequential failure and the recovery boundary. Review access and dependency changes. Then record an explicit decision: accepted for the named next step, returned with evidence needed, or blocked on a named owner.`,
  `Access should follow the unit of work rather than convenience. Give a named account only the repository, test system, and evidence store required for the bounded task. Prefer short-lived access and synthetic fixtures. Do not place production credentials in tickets, source files, screenshots, or test logs. Record who grants, reviews, and revokes access, and close temporary privileges when the unit ends.`,
  `Ownership boundary. A Philippines-based programmer can clarify the brief, prepare fixtures, implement an authorized change, run checks, assemble evidence, and explain unresolved behavior. ${study.owner} This division keeps commercial, security, privacy, and production context with accountable company owners while giving the programmer a visible finish line and escalation path.`,
  `Measurement should improve the work system rather than rank people from a small sample. Useful signals include first-pass acceptance, review turnaround, returned work by cause, escaped defects tied to the unit, incomplete evidence, and time blocked on owner decisions. Report the sample and exclusions. Repository complexity, inherited defects, environment stability, and reviewer availability can dominate a single result.`,
  `Recovery requires its own evidence. Identify the last known state, reversible action, data consequence, operator, trigger, and post-recovery checks. Rehearse in an approved non-production environment when feasible. A successful forward path does not show that rollback works. If rollback is unsafe or impossible, document the reason, the approved forward-repair path, and the person authorized to invoke it.`,
  `Negative results are useful when they remain visible. A failed check may reveal an ambiguous contract, weak fixture, environment difference, unsupported assumption, or implementation defect. Preserve the first clear failure and its conditions, correct the relevant layer or narrow the claim, and rerun affected cases. The correction trail shows why confidence changed; erasing it produces a cleaner report but weaker evidence.`,
  `Limitations. This is a decision framework, not an audit, certification, benchmark, warranty, legal opinion, privacy determination, or security assessment. It does not inspect a reader’s contracts, repository, hosting, production telemetry, threat model, or obligations. Documentation can change after the checked date. A passing sample cannot prove that hidden defects do not exist, and a failing sample does not establish root cause by itself.`,
  `A practical handoff can be concise: scope, revision, environment, data classification, access used, checks and results, exceptions, recovery path, and decision requested. Link approved artifacts instead of pasting sensitive output. End with a plain state and named next owner. This makes the package usable across timezones and prevents a status message from being mistaken for acceptance evidence.`,
  `Niche conclusion. Outsourced programming works best as a controlled engineering lane rather than a transfer of organizational judgment. The useful deliverable is a bounded change plus enough evidence for the company owner to make the next decision. For ${study.service}, begin with one representative unit, repair gaps in the handoff template, and expand only after repeated results remain reviewable.`,
  `The next decision is to name one representative task, its accountable reviewer, the highest-impact failure to exercise, and the evidence required before work begins. If those items cannot be named, the task is not ready to delegate. This conclusion is an inference from the cited guidance and the method above, not a claim that one control set fits every company or removes the need for expert judgment.`
];

export const september25ResearchBatch: ReadonlyArray<ResearchPost> = studies.map((study, index) => ({
  slug: study.slug,
  route: `/research/${study.slug}`,
  title: study.title,
  excerpt: study.excerpt,
  topic: study.topic,
  published: '2026-09-25',
  datePublished: '2026-09-25',
  body: body(study),
  sources: study.sources,
  related: studies.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map(item => item.slug),
  nextStep: {
    heading: `Define a controlled ${study.service} work lane`,
    href: study.href,
    label: `Review ${study.service}`,
    copy: 'Begin with a bounded assignment, named reviewer, explicit evidence, and a company-owned production boundary.'
  }
}));
