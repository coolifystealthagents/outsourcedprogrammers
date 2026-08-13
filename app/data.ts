export const site = {
  domain: 'OutsourcedProgrammers.com',
  slug: 'outsourcedprogrammers',
  brand: 'Outsourced Programmers',
  primary: 'outsourced programmers',
  audience: 'teams hiring outsourced programmers for app, web, QA, and maintenance work',
  angle: 'developer screening, sprint tasks, code review, documentation, and delivery QA',
  style: 'Programmer terminal grid',
  dark: '#030712',
  color: '#22c55e',
  accent: '#60a5fa',
  heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  alt: 'programmers writing code together on monitors',
  badge: 'Code bench',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Development operations support',
    desc: 'Ongoing programming support for small teams that need backlog cleanup, release notes, ticket updates, and careful code handoffs.',
    buyerProblem: 'The dev backlog keeps growing, but full-time local hiring is too slow for small fixes, QA follow-up, and maintenance work.',
    bestTasks: ['Backlog grooming and ticket cleanup', 'Small bug fixes with clear acceptance rules', 'Release notes, pull request notes, and handoff docs', 'Dependency update tracking for manager review'],
    qualityControls: ['Code-owner review before merge', 'Daily ticket notes with links to commits or pull requests', 'Definition of done for each ticket', 'No production access without written approval'],
    firstWeek: ['Pick 5 to 8 low-risk tickets', 'Share repo setup docs and sample pull requests', 'Create a daily handoff note', 'Review every pull request with the technical owner'],
    faqs: [
      { question: 'Can outsourced programmers own production releases?', answer: 'They can prepare release notes, test fixes, and open pull requests. A company technical owner should approve production releases.' },
      { question: 'What work should start first?', answer: 'Start with small tickets that already have examples, test steps, and a clear reviewer.' },
    ],
    sources: [
      { name: 'DORA research program', url: 'https://dora.dev/research/' },
      { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf' },
    ],
  },
  {
    slug: 'customer-support',
    title: 'App support and bug triage',
    desc: 'Developer-backed support for SaaS and web teams that need bugs sorted, repro steps written, and fixes routed to the right owner.',
    buyerProblem: 'Support tickets reach engineering without screenshots, repro steps, browser details, or clear severity. Programmers waste time rebuilding context.',
    bestTasks: ['Bug reproduction and screen capture notes', 'Severity tagging for product or engineering review', 'Support-to-engineering ticket cleanup', 'Simple customer-safe technical replies after approval'],
    qualityControls: ['No customer promise without owner approval', 'Repro template for every bug report', 'Severity labels that match your support policy', 'Escalation path for billing, security, and outage issues'],
    firstWeek: ['Review 10 closed support bugs', 'Write the bug report template', 'Triage tickets in a shared queue', 'Run a short daily review with support and engineering'],
    faqs: [
      { question: 'Is this customer support or programming work?', answer: 'It sits between both. The staff member helps turn messy customer reports into useful engineering tickets.' },
      { question: 'Should they reply directly to customers?', answer: 'Only after you approve the reply rules. Sensitive bugs, outages, refunds, and security issues should stay with your team.' },
    ],
    sources: [
      { name: 'Atlassian incident management guide', url: 'https://www.atlassian.com/incident-management' },
      { name: 'OWASP vulnerability disclosure guidance', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Code documentation support',
    desc: 'Programming admin support for teams that need setup docs, SOPs, changelog notes, and clearer developer handoffs.',
    buyerProblem: 'Good developers lose time because the same setup, access, and handoff questions get answered again and again.',
    bestTasks: ['README and setup doc cleanup', 'SOPs for common dev tasks', 'Pull request and changelog summaries', 'Internal wiki updates from approved notes'],
    qualityControls: ['Technical owner reviews docs before publishing', 'Docs link back to working commands or tickets', 'Sensitive credentials stay out of docs', 'Old instructions are marked before replacement'],
    firstWeek: ['Audit the README and onboarding notes', 'Fix one setup guide', 'Create a changelog template', 'List missing screenshots or commands for the technical owner'],
    faqs: [
      { question: 'Can a programmer assistant write technical docs?', answer: 'Yes, if the source is real project work and a technical owner checks the final instructions.' },
      { question: 'What docs are safest to outsource first?', answer: 'Start with setup steps, recurring task notes, pull request summaries, and release checklists.' },
    ],
    sources: [
      { name: 'Google technical writing courses', url: 'https://developers.google.com/tech-writing' },
      { name: 'GitHub Docs: About READMEs', url: 'https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes' },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'QA reporting and release checks',
    desc: 'QA support for outsourced programming teams that need test notes, bug logs, release checks, and manager-ready status reports.',
    buyerProblem: 'A build can look done while bugs, missed edge cases, and unclear release notes sit underneath it.',
    bestTasks: ['Manual QA passes for web and app flows', 'Bug logs with screenshots and repro steps', 'Release checklist updates', 'Daily status notes for project managers'],
    qualityControls: ['Test steps tied to acceptance criteria', 'Screenshots or screen recordings for failed checks', 'Severity labels before engineering review', 'Manager approval before release sign-off'],
    firstWeek: ['Choose one user flow to test', 'Write the pass/fail checklist', 'Log bugs with screenshots', 'Review the QA report before the next release'],
    faqs: [
      { question: 'Can outsourced QA replace engineering review?', answer: 'No. QA can find and document problems. Engineering still owns code decisions and release approval.' },
      { question: 'What should a useful QA report include?', answer: 'It should list the test steps, result, device or browser, screenshots, severity, and the next owner.' },
    ],
    sources: [
      { name: 'ISO/IEC/IEEE 29119 software testing overview', url: 'https://www.iso.org/standard/45142.html' },
      { name: 'NIST Software Quality Group', url: 'https://www.nist.gov/itl/ssd/software-quality-group' },
    ],
  },
] as const;

export const blogPosts: ReadonlyArray<{ slug: string; title: string; excerpt: string; minutes: number; published?: string }> = [
  {
    slug: 'hire-software-developers-philippines-code-review',
    title: 'Hire software developers in the Philippines with a clear code review plan',
    excerpt: 'A practical guide to hiring a Philippines-based developer while keeping tickets, access, code review, and release decisions clear.',
    minutes: 12,
  },
  {
    slug: 'outsourced-programmers-planning',
    title: 'How to plan an outsourced programmer role',
    excerpt: 'Turn real tickets, review rules, and access limits into a programmer brief your team can use.',
    minutes: 10,
  },
  { slug: "outsource-nextjs-maintenance-safely", title: "How to outsource Next.js maintenance safely", excerpt: "A practical handoff for small Next.js fixes, review, testing, and release approval.", minutes: 9 },
  { slug: "outsourced-react-developer-first-week", title: "Plan the first week with an outsourced React developer", excerpt: "Use a small ticket, a working setup, and a named reviewer to make the first week useful.", minutes: 8 },
  { slug: "outsource-nodejs-api-bug-fixes", title: "Outsource Node.js API bug fixes with clear controls", excerpt: "Set repro steps, test evidence, and access limits before an API maintenance handoff.", minutes: 9 },
  { slug: "hire-qa-automation-support", title: "When to hire outsourced QA automation support", excerpt: "Decide which test work is ready for help and which release decisions stay with your team.", minutes: 8 },
  { slug: "outsource-database-cleanup", title: "A safer plan for outsourcing database cleanup", excerpt: "Separate reversible cleanup work from high-risk data decisions with a practical review path.", minutes: 10 },
  { slug: "outsourced-programmer-technical-handoff", title: "Build a technical handoff for outsourced programmers", excerpt: "Give a programmer the context, commands, examples, and escalation rules needed to start well.", minutes: 7 },
  { slug: "outsource-legacy-code-maintenance", title: "How to outsource legacy code maintenance", excerpt: "Start with observability, a contained ticket, and a reviewer who understands the risk.", minutes: 10 },
  { slug: "philippines-developer-interview-work-sample", title: "Design a fair Philippines developer work sample", excerpt: "Test the real work without asking candidates to build an unpaid product.", minutes: 8 },
  { slug: "outsourced-programmer-access-checklist", title: "An access checklist for outsourced programmers", excerpt: "Use named accounts, least privilege, and an offboarding owner before sharing tools.", minutes: 7 },
  { slug: "outsource-frontend-performance-audit", title: "Outsource a frontend performance audit without losing control", excerpt: "Define the page, measurements, evidence, and change approval before the audit begins.", minutes: 9 },
  { slug: "outsourced-developer-daily-update-template", title: "A daily update template for outsourced developers", excerpt: "Ask for the ticket, change, tests, blocker, and next step in one readable note.", minutes: 6 },
  { slug: "outsource-technical-documentation", title: "When to outsource technical documentation", excerpt: "Turn setup notes and repeated answers into documentation a technical owner can approve.", minutes: 8 },
  { slug: "outsourced-programmer-code-review-rules", title: "Set code review rules before outsourcing programming work", excerpt: "Make review ownership, evidence, and merge authority clear before the first pull request.", minutes: 8 },
  { slug: "outsource-web-accessibility-testing", title: "Outsource web accessibility testing with useful evidence", excerpt: "Scope keyboard, screen reader, and markup checks so findings become actionable tickets.", minutes: 9 },
  { slug: "outsourced-programmer-incident-support", title: "Use outsourced programmers during incident support carefully", excerpt: "Define the narrow support lane while your incident owner keeps command and communication.", minutes: 8 },
  { slug: "outsource-dependency-updates", title: "A controlled way to outsource dependency updates", excerpt: "Separate routine updates from risky upgrades with tests, changelogs, and rollback notes.", minutes: 7 },
  { slug: "outsourced-developer-remote-collaboration", title: "Improve remote collaboration with outsourced developers", excerpt: "Replace meeting volume with clear tickets, written decisions, and review windows.", minutes: 7 },
  { slug: "outsource-saas-release-checklist", title: "Outsource SaaS release checklist work", excerpt: "Let support staff prepare release evidence while product and engineering retain approval.", minutes: 8 },
  { slug: "outsourced-programmer-offboarding", title: "Offboard an outsourced programmer without loose ends", excerpt: "Close access, capture handoff notes, and check open branches before the role ends.", minutes: 7 },
  { slug: "outsource-code-review-documentation", title: "Document outsourced code review decisions", excerpt: "Keep the reasoning behind changes visible so the next reviewer can work from context.", minutes: 7 },
  { slug: "outsource-typescript-migration", title: "Outsource a TypeScript migration with review controls", excerpt: "Break a TypeScript migration into small, testable changes with clear ownership and rollback notes.", minutes: 9 },
  { slug: "outsourced-programmer-sprint-planning", title: "Plan a sprint with outsourced programmers", excerpt: "Turn a mixed backlog into reviewable tickets, dependencies, and a practical handoff rhythm.", minutes: 8 },
  { slug: "outsource-api-documentation", title: "Outsource API documentation without stale examples", excerpt: "Use tested requests, named owners, and review gates to keep API documentation useful.", minutes: 7 },
  { slug: "outsourced-programmer-bug-triage", title: "Build a bug triage lane for outsourced programmers", excerpt: "Give bug reports a reproducible shape while keeping severity and product decisions with your team.", minutes: 8 },
  { slug: "outsource-react-testing", title: "Outsource React testing with a clear evidence trail", excerpt: "Scope component and flow tests around expected behavior, fixtures, and reviewable pull requests.", minutes: 8 },
  { slug: "outsource-cloud-cost-audit", title: "Outsource a cloud cost audit safely", excerpt: "Let a programmer gather evidence and options while billing and infrastructure changes remain controlled.", minutes: 8 },
  { slug: "outsourced-programmer-release-notes", title: "Create release notes with outsourced programming support", excerpt: "Convert merged work into accurate release notes without handing off release authority.", minutes: 6 },
  { slug: "outsource-docker-maintenance", title: "Outsource Docker maintenance with reproducible checks", excerpt: "Define image, environment, test, and rollback expectations before changing container workflows.", minutes: 8 },
  { slug: "outsourced-programmer-security-review", title: "Use outsourced programmers in a security review", excerpt: "Give security findings a narrow evidence-gathering lane and a named escalation owner.", minutes: 9 },
  { slug: "outsource-wordpress-maintenance", title: "Outsource WordPress maintenance without unsafe access", excerpt: "Start with backups, staging, defined changes, and an owner-controlled release path.", minutes: 8 },
  { slug: "outsourced-programmer-git-workflow", title: "Set a Git workflow for outsourced programmers", excerpt: "Make branches, commits, pull requests, reviews, and handoffs predictable from the first ticket.", minutes: 7 },
  { slug: "outsource-mobile-qa", title: "Outsource mobile QA with device coverage rules", excerpt: "Name devices, flows, evidence, and severity so mobile findings become actionable work.", minutes: 8 },
  { slug: "outsourced-programmer-technical-debt", title: "Use outsourced programmers for technical debt", excerpt: "Choose debt work with measurable outcomes, safe sequencing, and a reviewer who knows the system.", minutes: 8 },
  { slug: "outsource-data-import-testing", title: "Outsource data import testing with safe fixtures", excerpt: "Keep customer data protected while testing mappings, errors, retries, and reconciliation.", minutes: 9 },
  { slug: "outsourced-programmer-scope-change", title: "Control scope changes in outsourced programming work", excerpt: "Use written acceptance changes and owner approval before a small ticket becomes a new project.", minutes: 7 },
  { slug: "outsource-search-feature-qa", title: "Outsource search feature QA with useful test cases", excerpt: "Test relevance, empty states, permissions, and performance with a reviewable checklist.", minutes: 8 },
  { slug: "outsourced-programmer-documentation-handoff", title: "Make a durable documentation handoff", excerpt: "Capture commands, decisions, open questions, and ownership before a programming task closes.", minutes: 7 },
  { slug: "outsource-graphql-maintenance", title: "Outsource GraphQL maintenance with schema checks", excerpt: "Protect clients and contracts by pairing schema changes with fixtures, tests, and review.", minutes: 9 },
  { slug: "outsourced-programmer-estimation", title: "Estimate outsourced programming tickets", excerpt: "Ask for assumptions, unknowns, evidence, and a reviewable slice instead of false precision.", minutes: 7 },
  { slug: "outsource-email-integration", title: "Outsource email integration maintenance", excerpt: "Scope templates, providers, test delivery, privacy, and fallback behavior before work begins.", minutes: 8 },
  { slug: "outsourced-programmer-access-review", title: "Review outsourced programmer access regularly", excerpt: "Tie permissions to active tickets, owners, evidence, and an explicit offboarding check.", minutes: 7 },
  { slug: "outsource-logging-improvements", title: "Outsource logging improvements without exposing secrets", excerpt: "Improve diagnostic evidence while protecting tokens, personal data, and production access.", minutes: 8 },
  { slug: "outsource-observability-basics", title: "Outsource observability improvements with clear boundaries", excerpt: "Improve logs and metrics with safe test evidence, owner review, and no secret exposure.", minutes: 8 },
  { slug: "outsource-laravel-maintenance", title: "Outsource Laravel maintenance with a safe handoff", excerpt: "Scope Laravel fixes around reproducible tests, limited access, and owner-approved review.", minutes: 8 },
  { slug: "outsource-python-automation", title: "Outsource Python automation without losing control", excerpt: "Turn repetitive Python work into a bounded ticket with fixtures, checks, and a named reviewer.", minutes: 8 },
  { slug: "outsource-ruby-on-rails-maintenance", title: "Outsource Ruby on Rails maintenance with clear checks", excerpt: "Plan Rails maintenance around a narrow change, test evidence, and an owner-controlled release path.", minutes: 8 },
  { slug: "outsource-java-spring-qa", title: "Outsource Java and Spring QA with useful evidence", excerpt: "Define fixtures, service boundaries, failure evidence, and review ownership before Java QA begins.", minutes: 8 },
  { slug: "outsource-figma-to-react-handoff", title: "Outsource a Figma to React handoff with fewer surprises", excerpt: "Connect approved design states to React acceptance rules, fixtures, and a reviewable implementation task.", minutes: 8 },
  { slug: "outsource-payment-integration-testing", title: "Outsource payment integration testing safely", excerpt: "Use sandbox fixtures and explicit failure cases while keeping payment and release authority with your team.", minutes: 9 },
  { slug: "outsource-multi-tenant-qa", title: "Outsource multi-tenant QA with permission-aware cases", excerpt: "Test tenant isolation and role behavior with safe fixtures, clear evidence, and owner review.", minutes: 9 },
  { slug: "outsource-feature-flag-cleanup", title: "Outsource feature flag cleanup with rollback rules", excerpt: "Remove stale flags in small slices with an inventory, test evidence, and a clear stop condition.", minutes: 8 },
  { slug: "outsource-browser-compatibility-testing", title: "Outsource browser compatibility testing with a matrix", excerpt: "Name supported browsers, core flows, evidence, and severity so compatibility findings become actionable.", minutes: 8 },
  { slug: "outsource-webhook-reliability", title: "Outsource webhook reliability work with replay tests", excerpt: "Scope webhook fixes around retries, signatures, idempotency, and safe replay fixtures.", minutes: 9 },
  { slug: "outsource-cicd-pipeline-maintenance", title: "Outsource CI and CD pipeline maintenance carefully", excerpt: "Improve pipeline feedback with reproducible runs, least privilege, and owner-approved changes.", minutes: 8 },
  { slug: "outsource-graphql-client-migration", title: "Outsource a GraphQL client migration with contract checks", excerpt: "Break a client migration into compatible slices with fixtures, schema checks, and review ownership.", minutes: 9 },
  { slug: "outsource-frontend-design-system", title: "Outsource design system maintenance with acceptance rules", excerpt: "Keep shared components consistent by defining states, usage examples, tests, and review boundaries.", minutes: 8 },
  { slug: "outsource-mobile-deep-link-qa", title: "Outsource mobile deep-link QA with traceable cases", excerpt: "Test cold starts, authenticated routes, fallbacks, and device coverage with clear evidence.", minutes: 8 },
  { slug: "outsource-data-retention-audit", title: "Outsource a data retention audit with careful boundaries", excerpt: "Gather retention evidence and options without making unapproved privacy, legal, or deletion decisions.", minutes: 9 },
  { slug: "outsource-sql-query-performance", title: "Outsource SQL query performance work safely", excerpt: "Measure slow queries with representative fixtures while keeping schema and production changes controlled.", minutes: 8 },
  { slug: "outsource-analytics-event-qa", title: "Outsource analytics event QA with a measurement plan", excerpt: "Check event names, properties, consent behavior, and destinations without exposing customer data.", minutes: 8 },
  { slug: "outsource-localization-qa", title: "Outsource localization QA with content-safe fixtures", excerpt: "Test translated layouts, formatting, fallbacks, and right-to-left states with reviewable evidence.", minutes: 8 },
  { slug: "outsource-file-upload-security-testing", title: "Outsource file upload security testing with safe fixtures", excerpt: "Scope upload checks around type validation, size limits, storage, and evidence without handling real customer files.", minutes: 9 },
  { slug: "outsource-graphql-observability", title: "Outsource GraphQL observability improvements", excerpt: "Improve resolver and client visibility with masked data, bounded instrumentation, and owner review.", minutes: 8 },
  { slug: "outsource-user-permission-migration", title: "Outsource a user permission migration with staged checks", excerpt: "Plan permission changes around fixtures, reversibility, audit evidence, and explicit approval gates.", minutes: 9 },
  { slug: "outsource-cron-job-reliability", title: "Outsource cron job reliability with observable checks", excerpt: "Make scheduled work safer with fixtures, retries, logs, and an owner-approved change path.", minutes: 8 },
  { slug: "outsource-technical-discovery", title: "Outsource technical discovery with a decision-ready brief", excerpt: "Turn an uncertain engineering request into bounded questions, evidence, options, and owner decisions.", minutes: 8 },
  { slug: "outsource-product-analytics-implementation", title: "Outsource product analytics implementation with event contracts", excerpt: "Define events, properties, consent behavior, and review evidence before implementation begins.", minutes: 9 },
  { slug: "outsource-frontend-refactor", title: "Outsource a frontend refactor with behavior safeguards", excerpt: "Break frontend cleanup into observable slices with fixtures, regression checks, and a named reviewer.", minutes: 8 },
  { slug: "outsource-backend-test-coverage", title: "Outsource backend test coverage with useful boundaries", excerpt: "Choose high-value backend cases and require reproducible evidence instead of chasing a vanity percentage.", minutes: 8 },
  { slug: "outsource-scheduled-reporting", title: "Outsource scheduled reporting workflows safely", excerpt: "Improve recurring reports with test fixtures, ownership, privacy checks, and a controlled handoff.", minutes: 8 },
  { slug: "outsourced-programmer-pull-request-template", title: "Create a pull request template for outsourced programmers", excerpt: "Make summaries, tests, risks, screenshots, and reviewer questions consistent across outsourced work.", minutes: 7 },
  { slug: "outsource-frontend-bug-reproduction", title: "Outsource frontend bug reproduction with traceable evidence", excerpt: "Give browser bugs a repeatable intake, environment record, evidence set, and escalation path.", minutes: 8 },
  { slug: "outsource-codebase-onboarding", title: "Outsource codebase onboarding without sharing too much access", excerpt: "Use a staged setup, safe fixtures, and a small first ticket to make onboarding measurable.", minutes: 8 },
  { slug: "outsource-redis-maintenance", title: "Outsource Redis maintenance with data-safety checks", excerpt: "Scope cache and queue changes around fixtures, observability, reversibility, and owner approval.", minutes: 8 },
  { slug: "outsource-kubernetes-qa", title: "Outsource Kubernetes QA without handing over cluster control", excerpt: "Gather deployment evidence in a bounded lane while infrastructure and release decisions stay owned.", minutes: 9 },
  { slug: "outsource-privacy-request-workflow", title: "Outsource privacy request workflow testing carefully", excerpt: "Test intake, identity checks, records, and completion evidence without outsourcing legal decisions.", minutes: 9 },
  { slug: "outsourced-programmer-standup-alternative", title: "Replace outsourced programmer standups with useful written updates", excerpt: "Use concise ticket updates, blockers, evidence, and next steps to reduce meeting overhead.", minutes: 7 },
  { slug: "outsource-screenshot-regression-testing", title: "Outsource screenshot regression testing with reviewable baselines", excerpt: "Define stable pages, acceptable differences, fixtures, and approval rules for visual checks.", minutes: 8 },
  { slug: "outsource-authentication-qa", title: "Outsource authentication QA with safe test accounts", excerpt: "Test sign-in, recovery, sessions, and access boundaries without exposing real user credentials.", minutes: 9 },
  { slug: "outsource-customer-import", title: "Outsource customer import testing with reversible fixtures", excerpt: "Validate mapping, duplicates, failures, and reconciliation while protecting real customer data.", minutes: 9 },
  { slug: "outsource-website-content-updates", title: "Outsource website content updates with a review checklist", excerpt: "Keep routine content changes accurate, accessible, and reversible through a clear publishing handoff.", minutes: 7 },
  { slug: "outsource-ssl-certificate-monitoring", title: "Outsource SSL certificate monitoring with escalation rules", excerpt: "Turn certificate checks into observable work with named owners and no unapproved infrastructure changes.", minutes: 7 },
  { slug: "outsource-incident-retrospective", title: "Outsource incident retrospective preparation", excerpt: "Gather timelines, evidence, and follow-up tickets while incident accountability stays with your team.", minutes: 8 },
  { slug: "outsource-open-source-license-audit", title: "Outsource an open source license audit with owner review", excerpt: "Inventory dependencies and evidence without making legal conclusions or release decisions by default.", minutes: 9 },
  { slug: "outsource-queue-processing-qa", title: "Outsource queue processing QA with failure fixtures", excerpt: "Test retries, duplicates, dead letters, and observability with safe fixtures and clear stop conditions.", minutes: 9 },
  { slug: "outsourced-programmer-weekly-review", title: "Run a weekly review for outsourced programming work", excerpt: "Review shipped evidence, open risks, access, scope, and next tickets in one durable routine.", minutes: 7 },
  { slug: "outsource-release-readiness-review", title: "Outsource release readiness review preparation", excerpt: "Assemble test results, open risks, documentation, and owner decisions before a release review.", minutes: 8 },
  { slug: "outsourced-programmer-acceptance-criteria", title: "Write acceptance criteria for outsourced programming work", excerpt: "Turn a broad request into observable behavior, evidence, and a reviewable finish line.", minutes: 7, published: "2026-08-10" },
  { slug: "outsource-graphql-schema-review", title: "Outsource GraphQL schema review with client safeguards", excerpt: "Review schema changes against clients, fixtures, compatibility rules, and owner approval.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-api-rate-limit-testing", title: "Outsource API rate limit testing with safe fixtures", excerpt: "Test throttling, retry behavior, and error responses without exposing production credentials.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-nextjs-metadata-audit", title: "Outsource a Next.js metadata audit with route evidence", excerpt: "Check titles, canonicals, structured data, and sitemap inputs through a bounded review lane.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-react-accessibility-fixes", title: "Outsource React accessibility fixes with reproducible checks", excerpt: "Pair keyboard and assistive-technology findings with fixtures, acceptance rules, and review.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-database-migration-dry-run", title: "Outsource a database migration dry run safely", excerpt: "Use representative fixtures, rollback evidence, and owner approval before migration changes.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-queue-observability", title: "Outsource queue observability improvements", excerpt: "Make retries, dead letters, latency, and failure ownership easier to inspect.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-cypress-test-maintenance", title: "Outsource Cypress test maintenance with stable fixtures", excerpt: "Keep browser tests useful by defining behavior, fixtures, failure evidence, and review rules.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-frontend-form-validation", title: "Outsource frontend form validation with clear cases", excerpt: "Test required fields, errors, recovery, and submission behavior with safe fixtures.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-search-index-maintenance", title: "Outsource search index maintenance with measured checks", excerpt: "Scope indexing work around mappings, stale records, relevance evidence, and rollback.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-customer-portal-qa", title: "Outsource customer portal QA with permission-aware fixtures", excerpt: "Test important portal flows while protecting customer data and keeping release authority internal.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-auth-session-review", title: "Outsource authentication session review carefully", excerpt: "Check expiry, logout, renewal, and access boundaries with named test accounts.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-image-optimization", title: "Outsource image optimization with measurable page checks", excerpt: "Improve asset delivery while preserving visual behavior, accessibility, and owner review.", minutes: 7, published: "2026-08-10" },
  { slug: "outsource-billing-webhook-reconciliation", title: "Outsource billing webhook reconciliation testing", excerpt: "Use sandbox events and reconciliation evidence while payment decisions stay with your team.", minutes: 9, published: "2026-08-10" },
  { slug: "outsource-integration-contract-testing", title: "Outsource integration contract testing with fixtures", excerpt: "Protect service boundaries by pairing request examples, compatibility checks, and clear ownership.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-technical-debt-inventory", title: "Outsource a technical debt inventory with useful evidence", excerpt: "Turn scattered maintenance concerns into bounded items with impact, owner, and next action.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-staging-environment-parity", title: "Outsource staging environment parity checks", excerpt: "Compare safe configuration and behavior evidence without granting uncontrolled production access.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-error-boundary-testing", title: "Outsource React error boundary testing", excerpt: "Exercise failure states, recovery, logging, and user messaging with reviewable cases.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-marketing-site-seo-maintenance", title: "Outsource marketing site SEO maintenance with guardrails", excerpt: "Keep route metadata, internal links, and technical checks accurate through a controlled workflow.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-code-ownership-handoff", title: "Outsource a code ownership handoff without losing context", excerpt: "Capture decisions, reviewers, setup commands, and open risks before responsibility changes.", minutes: 7, published: "2026-08-10" },
  { slug: "outsource-feature-acceptance-testing", title: "Outsource feature acceptance testing with owner review", excerpt: "Convert product expectations into scenarios, evidence, and a clear approval path.", minutes: 8, published: "2026-08-10" },
  { slug: "outsource-backlog-cleanup", title: "Outsource backlog cleanup with decision boundaries", excerpt: "Improve ticket quality and remove stale work while product priorities remain with your team.", minutes: 7, published: "2026-08-10" },
  { slug: "outsource-mobile-app-release-checks", title: "Outsource mobile app release checks with a device matrix", excerpt: "Turn mobile release confidence into named devices, core flows, evidence, and an owner-approved checklist.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-sql-query-review", title: "Outsource SQL query review with measured safeguards", excerpt: "Review slow or risky queries using representative fixtures, explain plans, and a controlled approval path.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-figma-component-qa", title: "Outsource Figma component QA for consistent interfaces", excerpt: "Compare implemented components with approved states across responsive layouts and accessible interactions.", minutes: 7, published: "2026-08-12" },
  { slug: "outsource-redis-cache-testing", title: "Outsource Redis cache testing without hiding stale data", excerpt: "Test expiry, invalidation, fallback, and failure behavior with safe fixtures and observable results.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-web-performance-budget", title: "Outsource web performance budget checks", excerpt: "Make page speed work actionable with route-level budgets, repeatable measurements, and reviewable changes.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-customer-import-qa", title: "Outsource customer import QA with protected fixtures", excerpt: "Validate mappings, duplicate handling, failures, and recovery without exposing real customer records.", minutes: 9, published: "2026-08-12" },
  { slug: "outsource-oauth-integration-testing", title: "Outsource OAuth integration testing with safe test accounts", excerpt: "Exercise consent, callback, expiry, and denial paths while credentials and provider settings stay controlled.", minutes: 9, published: "2026-08-12" },
  { slug: "outsource-frontend-error-monitoring", title: "Outsource frontend error monitoring improvements", excerpt: "Turn noisy browser errors into useful ownership, reproduction clues, and prioritized maintenance tickets.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-api-pagination-testing", title: "Outsource API pagination testing with boundary cases", excerpt: "Check cursors, limits, empty pages, ordering, and duplicate results using predictable fixtures.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-email-template-qa", title: "Outsource email template QA across real clients", excerpt: "Review layout, links, plain-text fallbacks, and personalization with safe preview data.", minutes: 7, published: "2026-08-12" },
  { slug: "outsource-privacy-settings-qa", title: "Outsource privacy settings QA with permission-aware cases", excerpt: "Test consent, visibility, export, and account settings without turning QA into a data-access risk.", minutes: 9, published: "2026-08-12" },
  { slug: "outsource-cron-job-maintenance", title: "Outsource cron job maintenance with recovery evidence", excerpt: "Document schedules, retries, duplicate protection, and failure ownership before changing recurring work.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-typescript-type-cleanup", title: "Outsource TypeScript type cleanup in reviewable slices", excerpt: "Reduce type debt without masking runtime behavior, widening scope, or burying risky changes in a large diff.", minutes: 7, published: "2026-08-12" },
  { slug: "outsource-accessibility-regression-testing", title: "Outsource accessibility regression testing for key flows", excerpt: "Pair keyboard, focus, labels, and contrast checks with clear evidence and a named remediation owner.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-file-upload-testing", title: "Outsource file upload testing with safe boundaries", excerpt: "Test size limits, rejected formats, retries, progress, and storage behavior using non-sensitive fixtures.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-feature-flag-rollout-qa", title: "Outsource feature flag rollout QA with rollback rules", excerpt: "Verify enabled, disabled, targeted, and expired states before a feature reaches more users.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-analytics-event-audit", title: "Outsource analytics event audits without losing product meaning", excerpt: "Check event names, properties, privacy, and trigger conditions against a documented measurement plan.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-react-native-upgrade", title: "Outsource a React Native upgrade with device evidence", excerpt: "Break framework upgrades into tested slices with compatibility notes, fixtures, and a clear stop condition.", minutes: 9, published: "2026-08-12" },
  { slug: "outsource-logging-redaction-review", title: "Outsource logging redaction review with safe samples", excerpt: "Find tokens and personal data in diagnostic output while preserving the clues engineers need to debug.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-dashboard-qa", title: "Outsource dashboard QA with trustworthy data states", excerpt: "Test loading, empty, error, permissions, and date-range behavior against known fixtures and expected totals.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-translation-key-audit", title: "Outsource a translation key audit with release-safe evidence", excerpt: "Find missing, unused, and fallback translation keys across product flows without changing approved source copy.", minutes: 8, published: "2026-08-12" },
  { slug: "outsource-release-rollback-drill", title: "Outsource a release rollback drill with clear evidence", excerpt: "Practice detection, rollback steps, verification, and handoff without granting uncontrolled production authority.", minutes: 9, published: "2026-08-12" },
  { slug: "outsource-website-replatforming", title: "Outsource website replatforming with a staged cutover", excerpt: "Move a website deliberately by separating content, routing, redirects, and rollback decisions into reviewable stages.", minutes: 10, published: "2026-08-13" },
  { slug: "outsource-api-versioning", title: "Outsource API versioning without breaking existing clients", excerpt: "Plan compatible API evolution around consumer evidence, deprecation notes, and a named approval owner.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-user-search-qa", title: "Outsource user search QA with privacy-aware fixtures", excerpt: "Test search behavior, empty results, permissions, and ranking without exposing real user records.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-csv-export-testing", title: "Outsource CSV export testing with trustworthy fixtures", excerpt: "Check columns, encoding, escaping, permissions, and large exports using controlled sample data.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-role-based-access-review", title: "Outsource role-based access review with clear evidence", excerpt: "Map roles to allowed actions and test boundary cases while authorization decisions stay with the owner.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-background-job-migration", title: "Outsource background job migration with replay safeguards", excerpt: "Move worker jobs in controlled slices with duplicate protection, replay evidence, and recovery notes.", minutes: 10, published: "2026-08-13" },
  { slug: "outsource-cdn-cache-review", title: "Outsource CDN cache review without hiding fresh changes", excerpt: "Examine cache keys, invalidation, headers, and preview behavior with route-level evidence.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-database-index-review", title: "Outsource database index review with measured queries", excerpt: "Use query plans and representative fixtures to identify useful indexes without guessing at production changes.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-subscription-state-qa", title: "Outsource subscription state QA with safe scenarios", excerpt: "Exercise trials, renewals, pauses, and cancellations through sandbox scenarios and explicit ownership.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-notification-preferences", title: "Outsource notification preference testing", excerpt: "Verify opt-in choices, channel fallbacks, and quiet periods without sending messages to real customers.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-international-phone-validation", title: "Outsource international phone validation with regional cases", excerpt: "Test formatting, country rules, errors, and normalization across representative non-sensitive values.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-markdown-editor-qa", title: "Outsource Markdown editor QA with safe content cases", excerpt: "Check formatting, previews, links, escaping, and recovery using a deliberately varied fixture set.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-image-upload-ux", title: "Outsource image upload UX improvements with measurable checks", excerpt: "Improve previews, progress, errors, and retry behavior while preserving accessibility and file safety.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-sso-migration", title: "Outsource an SSO migration with a controlled fallback", excerpt: "Prepare identity-provider changes around test accounts, callback evidence, and a documented recovery path.", minutes: 10, published: "2026-08-13" },
  { slug: "outsource-pdf-generation-qa", title: "Outsource PDF generation QA with layout fixtures", excerpt: "Test fonts, page breaks, long values, links, and downloads against stable document examples.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-calendar-integration-qa", title: "Outsource calendar integration QA with timezone cases", excerpt: "Exercise invitations, updates, cancellations, and timezone boundaries with safe test calendars.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-invoice-pdf-review", title: "Outsource invoice PDF review with reconciliation evidence", excerpt: "Check totals, labels, tax fields, and download behavior while financial approval remains internal.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-webhook-signature-review", title: "Outsource webhook signature review with failure cases", excerpt: "Verify signing, timestamp windows, replay resistance, and useful failure evidence in a sandbox.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-search-filter-ux", title: "Outsource search filter UX testing with clear states", excerpt: "Test filters, combinations, reset behavior, loading, and empty results across the important user journeys.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-tenant-data-export", title: "Outsource tenant data export testing carefully", excerpt: "Validate scope, authorization, completeness, and file handling with isolated tenant fixtures.", minutes: 9, published: "2026-08-13" },
  { slug: "outsource-service-health-checks", title: "Outsource service health-check improvements", excerpt: "Make dependency health signals useful by separating startup checks, runtime readiness, and actionable failures.", minutes: 8, published: "2026-08-13" },
  { slug: "outsource-frontend-state-management", title: "Outsource frontend state-management cleanup", excerpt: "Reduce stale or duplicated UI state through small behavioral slices and regression evidence.", minutes: 9, published: "2026-08-13" },
] as const;

export type BlogDetail = {
  takeaways: readonly string[];
  readinessRows: readonly { area: string; ready: string; notReady: string }[];
  sections: readonly { id: string; title: string; paragraphs: readonly string[]; bullets?: readonly string[] }[];
  roleBrief: readonly { label: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
  sources: readonly { name: string; url: string; note: string }[];
  strictNoPricing?: boolean;
  stats?: readonly { value: string; label: string; note: string }[];
  chart?: { title: string; methodsNote: string; bars: readonly { label: string; value: number; display: string }[] };
  graphic?: { title: string; steps: readonly { label: string; note: string }[] };
  expertQuote?: { quote: string; name: string; role: string; sourceUrl: string };
  internalLinks?: readonly { label: string; url: string; note: string }[];
  banners?: readonly { label: string; title: string; text: string; url: string; cta: string }[];
};

export const blogDetails: Record<string, BlogDetail> = {
  'hire-software-developers-philippines-code-review': {
    strictNoPricing: true,
    takeaways: [
      'Start with real tickets that a reviewer can check in one sitting.',
      'Give each developer a named account and only the access needed for the first task.',
      'Keep merge and production release approval with a technical owner inside your company.',
      'Judge the first week by pull requests, test notes, questions, and handoffs, not by chat activity.',
    ],
    stats: [
      { value: '1.7M+', label: 'developers in the Philippines on GitHub', note: 'GitHub Octoverse 2024 reported more than 1.7 million developers.' },
      { value: '29%', label: 'year-over-year community growth', note: 'GitHub Octoverse 2024 reported 29% growth for the Philippines.' },
      { value: '82%', label: 'survey respondents who value secure-by-design projects', note: 'GitHub\'s 2024 open source survey asked project users about security.' },
      { value: '65%', label: 'respondents who value security when contributing', note: 'The same 2024 GitHub survey covered open source contributors.' },
    ],
    readinessRows: [
      { area: 'First ticket', ready: 'One contained change with examples and acceptance rules', notReady: 'A broad request to improve the whole app' },
      { area: 'Code review', ready: 'A named reviewer can request changes before merge', notReady: 'The new developer reviews and merges alone' },
      { area: 'Access', ready: 'Named account, limited permissions, and MFA where available', notReady: 'A shared owner login sent through chat' },
      { area: 'Test proof', ready: 'The ticket names the checks and expected result', notReady: 'The developer decides what good enough means' },
      { area: 'Release', ready: 'Your technical owner makes the final release decision', notReady: 'A merged branch goes live without a separate check' },
    ],
    chart: {
      title: 'Philippine developer growth and security signals in 2024',
      methodsNote: 'Method: the 29% bar is GitHub\'s year-over-year growth figure for the Philippine developer community. The 82% and 65% bars come from GitHub\'s separate 2024 open source survey. They describe different groups and should not be added together.',
      bars: [
        { label: 'Philippine developer growth', value: 29, display: '29%' },
        { label: 'Security matters when using a project', value: 82, display: '82%' },
        { label: 'Security matters when contributing', value: 65, display: '65%' },
      ],
    },
    graphic: {
      title: 'A safe path from ticket to release',
      steps: [
        { label: '1. Ticket', note: 'Your owner writes the outcome and limits.' },
        { label: '2. Branch', note: 'The developer works in a separate branch.' },
        { label: '3. Review', note: 'A named reviewer checks code and tests.' },
        { label: '4. Release', note: 'Your technical owner approves the change.' },
      ],
    },
    expertQuote: {
      quote: 'GitHub is like the air we breathe. It’s such a natural part of the way we work that sometimes we don’t even notice it. We cannot imagine living without GitHub.',
      name: 'Ryuzo Yamamoto',
      role: 'Software Engineer, Souzoh, quoted in GitHub Octoverse 2024',
      sourceUrl: 'https://github.blog/news-insights/octoverse/octoverse-2024/',
    },
    sections: [
      {
        id: 'start-with-role',
        title: 'Define the role before you search',
        paragraphs: [
          'Hiring a software developer in the Philippines works best when the role starts with real work. Pull six to ten recent tickets from your backlog and mark which ones a new person could handle without making a product or release decision. That gives you a job shape you can explain and test.',
          'Do not begin with a giant list of languages and tools. Name the part of the product, the kinds of changes, and the person who will answer technical questions. A front-end maintenance role, for example, needs a very different first week from a developer who will repair data imports.',

        ],
        bullets: [
          'List the product area and two examples of weekly work.',
          'Name the languages and tools the person will actually touch.',
          'Write down decisions that must stay with your company.',
          'Choose the reviewer before you interview anyone.',
        ],
      },
      {
        id: 'write-first-ticket',
        title: 'Write a first ticket you can check',
        paragraphs: [
          'A good first ticket is useful, small, and easy to reverse. It might repair a form validation bug, add a missing test, clean up a setup script, or document a repeatable support fix. Avoid a task that changes authentication, customer records, and several services at once.',
          'Write the expected result in plain words. Add screenshots, sample input, error logs, or a link to a similar change when they help. Then state which tests must run and who decides whether the result can merge.',
          'This ticket is part of the interview even when the person has already started. Watch how the developer handles missing context, explains a tradeoff, and responds when the reviewer asks for a change. Clean code matters, but so does a handoff that another person can follow tomorrow.',
        ],
      },
      {
        id: 'review-before-merge',
        title: 'Put code review before merge',
        paragraphs: [
          'The company needs a technical owner who can read the change and ask for more work. That person checks the approach, tests, edge cases, and any effect on customer data. A project manager can track the ticket, but should not have to approve code they cannot judge.',
          'GitHub explains that pull request reviews let collaborators comment, approve, or request changes before merge. Use that control for every new developer, whether the person sits in Manila, Cebu, Davao, or beside you. Location does not replace review, and review should not depend on whether someone happens to be online at the same time.',
          'Ask each pull request to include the ticket link, a short summary, tests run, screenshots when useful, and anything the developer could not verify. Keep the format short enough that people will use it. If the same question appears twice, repair the ticket template instead of blaming the new hire.',
        ],
      },
      {
        id: 'limit-access',
        title: 'Open access one step at a time',
        paragraphs: [
          'Create a named account for the developer and start with the few tools needed for the first ticket. A repository, issue board, approved docs, and test environment may be enough. Production data, cloud owner rights, customer exports, and company-wide admin tools should stay closed unless the task truly needs them.',
          'NIST\'s Secure Software Development Framework tells organizations to protect software from unauthorized access and tampering. CISA\'s secure-by-design guidance also asks software makers to own customer security outcomes. For a small hiring team, separate accounts, limited permissions, review rules, and a written offboarding check are practical starting points.',
          'The Philippines Data Privacy Act also matters when the work touches personal information. Tell the developer which data may be used in testing and which data must never leave an approved system. Use masked or made-up records in the test environment whenever the real records are not needed.',
        ],
        bullets: [
          'Use a separate account for each person.',
          'Turn on multi-factor authentication where the tool supports it.',
          'Keep secrets in the approved secrets manager, not in tickets.',
          'Record who can add access and who removes it.',
          'Review access when the role changes or ends.',
        ],
      },
      {
        id: 'plan-overlap',
        title: 'Plan the daily overlap around decisions',
        paragraphs: [
          'Philippine teams can work with many schedules, but more meetings do not fix a weak brief. Pick a short overlap window for blockers, product questions, and review. Let focused coding and testing happen outside that window when the ticket is clear.',
          'The daily note should name the active ticket, branch or pull request, completed checks, blocker, and next action. A message that only says work is in progress tells the reviewer almost nothing. Links and test results make the update useful even after people log off.',

        ],
      },
      {
        id: 'read-first-week',
        title: 'Read the first week through evidence',
        paragraphs: [
          'By the end of the first week, you should have more than a feeling about the hire. You should have tickets, pull requests, review comments, test notes, and a list of setup gaps. Read those records together with the developer and the reviewer.',
          'Look for repeated cleanup. One missed detail may come from a weak ticket, while the same missed detail across several changes may point to a skill or care gap. Fix the brief when the company left something unclear, and slow down the task load when the developer needs more review.',
          'Do not reward speed by itself. A fast change that hides a failing test or skips a question can cost the team more time later. A slower first ticket with clear notes may be a better sign if the person learns quickly and the next change is cleaner.',
        ],
      },
      {
        id: 'use-market-data',
        title: 'Use market data without turning it into proof',
        paragraphs: [
          'GitHub\'s 2024 open source survey found that 82% of respondents considered secure-by-design practices important when choosing a project, while 65% cared about them when contributing. The report also said 73% used AI tools for coding or documentation. These are broad GitHub survey findings, not a score for Filipino applicants.',
          'Use the figures to shape better interview questions. Ask how a candidate checks generated code, keeps secrets out of prompts, and proves that a change works. Then test the answer with one contained ticket rather than accepting a polished claim.',

        ],
      },
    ],
    roleBrief: [
      { label: 'Role', text: 'Philippines-based software developer for contained product fixes, tests, and maintenance work.' },
      { label: 'First work', text: 'Complete one approved low-risk ticket in a separate branch using the written acceptance rules.' },
      { label: 'Pull request', text: 'Include the ticket, summary, tests run, screenshots when useful, and any check that remains open.' },
      { label: 'Decision limits', text: 'Do not merge, release, change production data, or change customer-facing behavior without written approval.' },
      { label: 'Review owner', text: 'The company technical owner reviews code, requests changes, and makes the release decision.' },
      { label: 'Daily handoff', text: 'Send the ticket, branch or pull request, checks completed, blocker, and next action.' },
    ],
    internalLinks: [
      { label: 'Development operations support', url: '/services/operations-support', note: 'See the service lane for backlog fixes and careful handoffs.' },
      { label: 'QA reporting and release checks', url: '/services/reporting-and-qa', note: 'Plan test notes, bug logs, and release checks.' },
      { label: 'Plan an outsourced programmer role', url: '/blog/outsourced-programmers-planning', note: 'Turn backlog examples into a usable role brief.' },
      { label: 'First-week onboarding checklist', url: '/blog', note: 'Prepare access, setup, the first ticket, and the week-one review.' },
    ],
    banners: [
      { label: 'Plan the work', title: 'Bring one real ticket to the hiring call', text: 'A real example makes the role, review needs, and access limits easier to see.', url: '/contact', cta: 'Share the first ticket' },
      { label: 'Keep releases clear', title: 'Add a named reviewer before the new hire starts', text: 'The reviewer should have enough time and context to check the first pull requests.', url: '/services/operations-support', cta: 'See the support lane' },
      { label: 'Check the first week', title: 'Use the onboarding checklist after day five', text: 'Review the tickets, test notes, access record, and open questions before adding harder work.', url: '/blog', cta: 'Open the checklist' },
    ],
    faqs: [
      { question: 'Where in the Philippines should I hire a software developer?', answer: 'Choose the person and work setup before choosing a city. Manila, Cebu, Davao, and other areas have developers, but your decision should rest on skill, communication, availability, internet backup, and fit with the actual role.' },
      { question: 'Should a new developer receive production access?', answer: 'Not by default. Start with the repository, issue board, docs, and test tools needed for the first ticket. Add more access only when the work requires it and a company owner approves it.' },
      { question: 'What should I ask in the first technical interview?', answer: 'Use one of your own low-risk tickets. Ask the candidate to explain questions, test steps, risks, and the pull request handoff. This is more useful than a long quiz about tools the role will not use.' },
      { question: 'How should we handle time-zone overlap?', answer: 'Set a short daily window for blockers, decisions, and review. Use written ticket and pull request notes for the rest of the handoff so the team does not need meetings all day.' },
      { question: 'Can a Philippines-based developer approve a release?', answer: 'The developer can prepare the change and test evidence. Keep final release approval with a named technical owner in your company until your governance rules clearly assign that responsibility.' },
    ],
    sources: [
      { name: '1. GitHub Octoverse 2024', url: 'https://github.blog/news-insights/octoverse/octoverse-2024/', note: 'Published October 2024. Reports more than 1.7 million developers in the Philippines, 29% year-over-year growth, and the quoted 2024 open source survey findings.' },
      { name: '2. NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'NIST SP 800-218, version 1.1 published February 2022. Guidance for protecting software and reducing vulnerabilities during development.' },
      { name: '3. CISA Secure-by-Design', url: 'https://www.cisa.gov/resources-tools/resources/secure-by-design', note: 'Revised October 25, 2023. Guidance on customer security outcomes, transparency, and leadership responsibility.' },
      { name: '4. GitHub Docs: about pull request reviews', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews', note: 'First-party documentation for comments, approvals, and requested changes before merge.' },
      { name: '5. Official Gazette archive: Republic Act No. 10173', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'The Philippine Data Privacy Act of 2012, including duties around personal information and security safeguards.' },
    ],
  },
  'outsourced-programmers-planning': {
    takeaways: [
      'Plan the first month around real tickets, not a long list of technologies.',
      'Name the person who reviews code and the person who can approve a release.',
      'Give the programmer the least access needed for the first task, then expand it when the work is sound.',
      'Use a paid test ticket that looks like the work you need each week.',
    ],
    readinessRows: [
      { area: 'First tickets', ready: 'Small, useful, and backed by acceptance rules', notReady: '"Help with the app" or a blank backlog' },
      { area: 'Code review', ready: 'A named technical reviewer and pull request checklist', notReady: 'The programmer reviews and merges their own work' },
      { area: 'Access', ready: 'Separate account, limited permissions, and MFA', notReady: 'Shared admin login or production access on day one' },
      { area: 'Release control', ready: 'Your owner approves the release', notReady: 'Approval is assumed when a ticket moves to done' },
      { area: 'Daily handoff', ready: 'Ticket link, branch, test result, and blocker', notReady: 'A chat message that only says "working on it"' },
    ],
    sections: [
      {
        id: 'start-with-work',
        title: 'Start with the work, not the resume',
        paragraphs: [
          'A programmer brief should begin with the work sitting in your backlog. Pick a few examples: a bug with clear repro steps, a small page change, a test that needs repair, or a setup guide that no longer works. These examples tell a candidate more than a list of ten frameworks.',
          'Write down what "done" means for each example. A bug may be done when the fix passes an existing test, works in two named browsers, and has a pull request ready for review. The programmer should not have to guess whether they can change the database, edit a public API, or touch billing code.',
        ],
        bullets: [
          'Choose 5 to 8 low-risk tickets from the real backlog.',
          'Add screenshots, logs, or sample output where they help.',
          'Name the files, services, and customer flows that are off limits.',
          'State who can answer product and technical questions.',
        ],
      },
      {
        id: 'set-boundaries',
        title: 'Set review and release boundaries',
        paragraphs: [
          'Outsourced does not mean unsupervised. Your team still needs a technical owner. That person checks the approach, reviews the pull request, and decides whether the change can ship. A project manager can track dates, but they should not be forced to judge code they do not understand.',
          'Use the same pull request rules for outside and in-house programmers. Ask for a short summary, the ticket link, test evidence, screenshots for user-facing changes, and notes about risk. GitHub describes pull request reviews as a way for collaborators to comment on changes and approve or request more work before merge. Put that review step in the brief instead of leaving it as an unwritten habit.',
        ],
      },
      {
        id: 'limit-access',
        title: 'Limit access before the first login',
        paragraphs: [
          'List every tool the role may need, then cut the list down for the first week. A programmer working on a front-end bug may need the code repository, ticket board, test environment, and approved documentation. They may not need production logs, the cloud billing account, or customer exports.',
          'Create a separate account for the worker. Do not share an owner password. Turn on multi-factor authentication where the tool supports it, and keep production release rights with your technical owner. CISA recommends secure defaults, while the NIST Secure Software Development Framework calls for practices that reduce software risk throughout development. For a small team, limited access and required review are practical ways to put those ideas to work.',
        ],
        bullets: [
          'Use a named account instead of a shared login.',
          'Start with read access or a test environment when possible.',
          'Store secrets in the approved password or secrets tool, never in a ticket.',
          'Remove access on the worker\'s last day and record who checked it.',
        ],
      },
      {
        id: 'run-paid-test',
        title: 'Use one paid test ticket',
        paragraphs: [
          'A paid test is more useful than an unpaid sample that has nothing to do with your product. Pick a task that can be reviewed in a few hours and has a safe rollback. Give the same brief you would give after hiring. Watch how the candidate asks questions, handles missing context, writes the pull request, and responds to review.',
          'Do not score only for speed. A fast change that skips tests or hides a tradeoff creates more work for your team. Check whether the candidate followed the access rules, left the branch clean, explained what changed, and called out anything they could not verify. Pay for the test and make clear that it does not promise a longer contract.',
        ],
      },
      {
        id: 'first-week',
        title: 'Plan the first week',
        paragraphs: [
          'Day one is for setup, one small ticket, and a check that the programmer can run the project. On days two and three, review the first pull request and fix gaps in the brief. By the end of the week, you should know whether the worker can follow the ticket, communicate a blocker, and make a safe handoff.',
          'Keep the daily update short. Ask for the ticket, what changed, what was tested, and what is blocked. If the programmer needs a product decision, name the decision instead of letting them choose for the business. Add harder work only after the first tickets pass review without repeated cleanup.',
        ],
      },
    ],
    roleBrief: [
      { label: 'Role', text: 'Outsourced programmer for backlog fixes and maintenance' },
      { label: 'First work', text: 'Complete 5 to 8 approved low-risk tickets in the test environment.' },
      { label: 'Required handoff', text: 'Open a pull request with the ticket link, change summary, test result, screenshots when useful, and any known risk.' },
      { label: 'Decision limits', text: 'Do not merge, release, change production data, add paid tools, or change customer-facing behavior without written approval.' },
      { label: 'Review owner', text: 'The company technical owner reviews code and approves every release.' },
      { label: 'Daily note', text: 'Send the active ticket, branch or pull request, completed checks, blocker, and next task.' },
    ],
    faqs: [
      { question: 'How many tickets should an outsourced programmer start with?', answer: 'Start with a small set of 5 to 8 low-risk tickets. The exact number matters less than clear acceptance rules and time for your reviewer to check each change.' },
      { question: 'Should an outsourced programmer get production access?', answer: 'Not by default. Begin with the repository and test tools needed for the first task. Keep production release approval with a named person on your team.' },
      { question: 'What should be in a programmer job brief?', answer: 'Include real work examples, the stack they will touch, review rules, access limits, working hours, daily handoff fields, and decisions that stay with your company.' },
      { question: 'Is a freelancer an employee or an independent contractor?', answer: 'The contract label alone does not decide worker status. The IRS looks at the full relationship and the degree of control and independence. Get qualified advice for your situation.' },
    ],
    sources: [
      { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'Software development practices for reducing security risk.' },
      { name: 'CISA Secure by Design', url: 'https://www.cisa.gov/resources-tools/resources/secure-by-design', note: 'Guidance on secure defaults and reducing avoidable security burden.' },
      { name: 'GitHub Docs: reviewing changes in pull requests', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests', note: 'How review, approval, and requested changes work before merge.' },
      { name: 'IRS: Independent contractor defined', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined', note: 'Federal overview of control, independence, and worker classification.' },
    ],
  },
  'outsourced-programmers-tasks-to-outsource': {
    takeaways: [
      'Begin with work that has a clear finish line and a safe rollback.',
      'Keep product decisions, production releases, and security exceptions with your team.',
      'Use a small batch of real tickets to test code quality and communication.',
      'Do not hand off a broken process and expect a programmer to repair the management around it.',
    ],
    readinessRows: [
      { area: 'Bug fixes', ready: 'Repro steps, expected result, and a named reviewer', notReady: 'A screenshot with no context' },
      { area: 'Maintenance', ready: 'Supported versions, test steps, and rollback notes', notReady: 'Update everything and see what breaks' },
      { area: 'Documentation', ready: 'Working commands and a technical owner to check them', notReady: 'Write docs from memory' },
      { area: 'QA work', ready: 'Named browsers, devices, and pass or fail rules', notReady: 'Make sure it works' },
    ],
    sections: [
      {
        id: 'good-first-work',
        title: 'Choose work you can review',
        paragraphs: [
          'Good first tasks are small enough for your team to check without turning the review into a second project. A contained bug, a setup-script repair, or a manual QA pass can show whether the programmer follows the ticket and explains the result.',
          'Avoid a first assignment that changes several services, customer data, and billing behavior at once. If the work goes wrong, your team should be able to understand the change and roll it back.',
        ],
        bullets: ['Small bugs with reliable repro steps', 'Test repairs tied to an existing feature', 'README or setup fixes checked against a clean environment', 'Manual QA with named browsers and expected results'],
      },
      {
        id: 'keep-decisions-local',
        title: 'Keep business and release decisions local',
        paragraphs: [
          'A programmer can prepare options, but your product owner should decide how the product behaves. Your technical owner should decide what merges and ships. Write those limits into the ticket instead of hoping the worker knows where the line is.',
          'Security findings need their own route. Do not put sensitive details in an ordinary support ticket or ask an outside worker to decide whether a risk is acceptable. Use your security contact and disclosure rules.',
        ],
      },
      {
        id: 'score-the-work',
        title: 'Score the handoff, not just the speed',
        paragraphs: [
          'Review the code, test evidence, questions, and handoff note together. A fast patch is not useful if the next developer cannot understand it or if the programmer quietly skipped a failing test.',
          'After a few tickets, look for repeated cleanup. If your reviewer keeps fixing the same issue, update the brief or stop adding work until the gap is resolved.',
        ],
      },
    ],
    roleBrief: [
      { label: 'First task', text: 'Complete one low-risk ticket with written acceptance rules.' },
      { label: 'Required evidence', text: 'Link the pull request, tests run, screenshots when useful, and any check that could not be completed.' },
      { label: 'Owner decisions', text: 'Your team approves product behavior, security exceptions, merges, and releases.' },
      { label: 'Access', text: 'Use a named account and only the repository and test tools needed for the task.' },
    ],
    faqs: [
      { question: 'What programming task is easiest to outsource first?', answer: 'Choose a contained task with clear acceptance rules, a safe rollback, and someone on your team who can review the code.' },
      { question: 'Should an outsourced programmer build a new product first?', answer: 'Usually not as a test assignment. A new product hides too many decisions. Start with work your team already understands and can review.' },
      { question: 'Can QA be outsourced with programming?', answer: 'Yes, but keep the test rules specific. Name the flow, device or browser, expected result, and person who decides whether a release is ready.' },
    ],
    sources: [
      { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'Practices for reducing software risk during development.' },
      { name: 'GitHub Docs: reviewing changes in pull requests', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests', note: 'Review and approval controls before merge.' },
      { name: 'OWASP vulnerability disclosure guidance', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html', note: 'Guidance for receiving and handling vulnerability reports.' },
    ],
  },
  'outsourced-programmers-provider-questions': {
    takeaways: [
      'Ask who writes the code, who reviews it, and who can replace the assigned programmer.',
      'Require a plain answer about repository access, secrets, and offboarding.',
      'Use one paid ticket to test the provider\'s real handoff process.',
      'Put ownership, review, and release rules in the agreement before work starts.',
    ],
    readinessRows: [
      { area: 'Screening', ready: 'The provider explains the test and who reviews it', notReady: 'Every programmer is described as senior' },
      { area: 'Code review', ready: 'Your reviewer can request changes before merge', notReady: 'The provider merges its own work without your check' },
      { area: 'Access', ready: 'Named accounts, limited permissions, and an offboarding step', notReady: 'Shared passwords or immediate production access' },
      { area: 'Continuity', ready: 'The provider explains handoff and replacement records', notReady: 'The code lives only in one worker\'s head' },
    ],
    sections: [
      {
        id: 'ask-about-screening',
        title: 'Ask how programmers are screened',
        paragraphs: [
          'Do not stop at years of experience or a list of frameworks. Ask what the candidate had to build, how the work was reviewed, and whether the test resembles your role. A provider should be able to explain the process without exposing another client\'s code.',
          'Then ask who will actually work on your account. The person in the sales call may not be the programmer who receives your tickets.',
        ],
      },
      {
        id: 'ask-about-control',
        title: 'Who controls the repository and release?',
        paragraphs: [
          'Your company should know where the code is stored, who can approve a pull request, and who can release to production. If the provider uses its own tools, ask how you receive the full history and documentation when the engagement ends.',
          'Get a direct answer about secrets and production access. Named accounts and limited permissions make it easier to see who did what and to remove access later.',
        ],
      },
      {
        id: 'ask-about-replacement',
        title: 'What happens when the fit is wrong?',
        paragraphs: [
          'A replacement promise is not enough. Ask who documents open work, transfers repository context, and checks access when someone leaves. You also need to know whether you pay for overlap and how long your team must wait before work resumes.',
          'Use the answer to judge the operating process, not to collect a reassuring slogan.',
        ],
      },
      {
        id: 'run-real-ticket',
        title: 'Test one paid ticket first',
        paragraphs: [
          'Give the provider one safe ticket with the same review rules you plan to use later. Check the questions, branch hygiene, test notes, and response to review. This shows more than a polished sample project.',
          'Pay for the task and state that it is an evaluation, not a promise of future work.',
        ],
      },
    ],
    roleBrief: [
      { label: 'Ask', text: 'Who writes, reviews, and approves the work before it reaches our repository?' },
      { label: 'Ask', text: 'How do you create accounts, store secrets, and remove access at the end?' },
      { label: 'Ask', text: 'What records transfer if the assigned programmer changes?' },
      { label: 'Ask', text: 'Can we run one paid ticket using our normal pull request rules?' },
    ],
    faqs: [
      { question: 'Should I ask for client references?', answer: 'You can, but references do not replace a test of the process. Check how the provider screens, documents, reviews, and hands off your own work.' },
      { question: 'Who should own the code?', answer: 'The agreement should state ownership clearly. Your company should also control the repository, access records, and release approval needed to keep using the work.' },
      { question: 'What is a red flag in a provider call?', answer: 'Be careful when the provider cannot name the reviewer, avoids access questions, promises every skill at once, or will not explain what happens when a programmer leaves.' },
    ],
    sources: [
      { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'A reference for software development and security controls.' },
      { name: 'GitHub Docs: reviewing changes in pull requests', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests', note: 'How teams review and approve proposed changes.' },
      { name: 'IRS: Independent contractor defined', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined', note: 'A federal overview of control and worker classification.' },
    ],
  },
  'outsourced-programmers-onboarding-checklist': {
    takeaways: [
      'Create the account and access limits before the first working session.',
      'Use one small ticket to test setup, review, and handoff.',
      'Keep merges and production releases with a named technical owner.',
      'Write down open questions while the onboarding steps are still fresh.',
    ],
    readinessRows: [
      { area: 'Repository', ready: 'Named account, branch rules, and reviewer assigned', notReady: 'A shared login sent in chat' },
      { area: 'Local setup', ready: 'Current commands and sample environment values', notReady: 'An old README nobody has tested' },
      { area: 'First ticket', ready: 'Low risk, clear finish line, and test steps', notReady: 'Take a look around the codebase' },
      { area: 'Handoff', ready: 'Ticket, pull request, tests, blocker, and next step', notReady: 'A daily message that says work continues' },
    ],
    sections: [
      {
        id: 'prepare-access',
        title: 'Prepare access before day one',
        paragraphs: [
          'Create a named account for the programmer and grant only what the first task requires. A front-end fix may need the repository, ticket board, approved docs, and a test environment. It does not automatically require production data or cloud billing access.',
          'Record who can add permissions and who removes them. Keep secrets in the approved secrets tool, not in onboarding notes or chat.',
        ],
      },
      {
        id: 'test-setup',
        title: 'Test the setup instructions',
        paragraphs: [
          'Ask the programmer to follow the written setup steps and note each gap. If a command fails, fix the guide while the problem is visible. This turns onboarding into useful documentation work instead of a private troubleshooting call.',
          'Do not ask the new programmer to guess missing environment values. Provide safe examples and a named person who can answer access questions.',
        ],
      },
      {
        id: 'run-first-ticket',
        title: 'Run one small ticket through review',
        paragraphs: [
          'The first ticket should pass through the same branch, pull request, test, and review path you expect later. Keep it small enough that your technical owner can inspect the result closely.',
          'Ask for a short pull request summary, the ticket link, tests run, screenshots when they help, and any risk the programmer could not check.',
        ],
      },
      {
        id: 'close-week',
        title: 'Close the week with a real handoff',
        paragraphs: [
          'At the end of the week, review open work, access, documentation gaps, and repeated questions. Decide whether the next batch can be harder or whether the brief still needs repair.',
          'Keep the review about observable work. Look at tickets, pull requests, test notes, and blockers instead of relying on a vague sense that onboarding went well.',
        ],
      },
    ],
    roleBrief: [
      { label: 'Before day one', text: 'Create named accounts, confirm the reviewer, and test the setup guide.' },
      { label: 'First ticket', text: 'Use one low-risk task with acceptance rules and a safe rollback.' },
      { label: 'Review rule', text: 'The company technical owner reviews every pull request and approves releases.' },
      { label: 'End-of-week check', text: 'Review open work, access, documentation gaps, and the next task batch.' },
    ],
    faqs: [
      { question: 'Should an outsourced programmer get production access in the first week?', answer: 'Not by default. Start with the repository and test tools needed for the first ticket. Add access only when the work requires it and an owner approves it.' },
      { question: 'What should the first onboarding ticket be?', answer: 'Choose a useful, low-risk task with clear test steps, a safe rollback, and enough context for the programmer to ask good questions.' },
      { question: 'How often should the team check in during week one?', answer: 'Use a short daily handoff tied to the active ticket. Add a live call when a blocker needs discussion rather than scheduling meetings by habit.' },
    ],
    sources: [
      { name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'Practices for managing software development risk.' },
      { name: 'GitHub Docs: about pull request reviews', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews', note: 'How comments, approvals, and requested changes work.' },
      { name: 'Google technical writing courses', url: 'https://developers.google.com/tech-writing', note: 'Practical guidance for clear technical instructions.' },
    ],
  },
};

const dailyBlogDetails: Record<string, BlogDetail> = Object.fromEntries(blogPosts.slice(22).map((post, index) => [post.slug, { strictNoPricing: true, takeaways: ['Start with a contained ticket and a named reviewer.', 'Use least-privilege access and a test environment first.', 'Require a pull request with checks, evidence, and open risks.', 'Keep product, security, merge, and release decisions with the company owner.'], readinessRows: [{ area: 'Scope', ready: 'One outcome with acceptance rules', notReady: 'An open-ended improvement request' }, { area: 'Evidence', ready: 'Tests, screenshots, or measured output', notReady: 'A claim that the change works' }, { area: 'Access', ready: 'Named account and task-limited permissions', notReady: 'Shared credentials or owner access' }, { area: 'Review', ready: 'Technical owner approves the pull request', notReady: 'The worker merges and releases alone' }], sections: [{ id: 'prepare-the-work', title: 'Prepare the work before the handoff', paragraphs: [post.title + ' works best when the outcome, inputs, acceptance rules, test command, reviewer, and escalation path are written before the first task begins.', 'Use a separate branch and a safe fixture or test environment. Ask for a pull request summary, checks run, evidence, and anything the worker could not verify. Keep customer data, secrets, billing, and release authority with the company owner.', 'Use the NIST Secure Software Development Framework as an authoritative reference: https://csrc.nist.gov/Projects/ssdf. Apply the relevant control to the ticket without expanding the work beyond its approved scope.'], bullets: ['Name the first ticket and its definition of done.', 'List the tools and access required for that ticket.', 'Set the reviewer and escalation owner before work starts.', 'Record rollback or stop-work conditions.'] }, { id: 'review-and-handoff', title: 'Review the result and close the loop', paragraphs: ['The reviewer should be able to reproduce the result, inspect the change, and decide whether the acceptance rules were met. If the work reveals a new product or security decision, stop and escalate it rather than silently widening the task.', 'Close with a durable handoff: ticket, branch or pull request, tests, evidence, open risks, decisions needed, and next action. Repeated questions usually signal that the brief or documentation needs repair.'] }], roleBrief: [{ label: 'First task', text: 'Complete one low-risk ticket with written acceptance rules.' }, { label: 'Evidence', text: 'Link the pull request, checks, screenshots or measurements, and any unverified item.' }, { label: 'Access', text: 'Use a named account and only the repository and test tools needed for this task.' }, { label: 'Owner decisions', text: 'The company approves product behavior, security exceptions, merges, and releases.' }], faqs: [{ question: 'What should happen before work starts?', answer: 'Write the outcome, acceptance rules, access limits, test steps, reviewer, and escalation path.' }, { question: 'Who approves a production release?', answer: 'A named technical owner on the company side retains release approval.' }, { question: 'What belongs in the handoff?', answer: 'The ticket, change summary, checks, evidence, blocker, decisions needed, and next action.' }], sources: [{ name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'Authoritative guidance for reducing software development risk.' }], internalLinks: [{ label: 'Plan an outsourced programmer role', url: '/blog/outsourced-programmers-planning', note: 'Turn recurring work into a usable brief.' }, { label: 'Use a technical handoff', url: '/blog/outsourced-programmer-technical-handoff', note: 'Give the worker context and review rules.' }, { label: 'Review access controls', url: '/blog/outsourced-programmer-access-checklist', note: 'Limit tools and record offboarding.' }] }])); for (const [slug, detail] of Object.entries(dailyBlogDetails)) blogDetails[slug] = detail;

const aug13Focus: Record<string, { heading: string; paragraphs: [string, string, string]; bullets: [string, string, string, string] }> = {
  'outsource-website-replatforming': { heading: 'Stage the cutover', paragraphs: ['A replatforming handoff should begin with an inventory of routes, redirects, forms, integrations, and assets rather than a broad request to move the site.', 'The programmer can build a rehearsal on a safe host, compare representative pages, and record redirect results. Keep DNS, launch timing, and rollback approval with the site owner.', 'Review the cutover as a sequence: content freeze, verification, redirect check, owner approval, and a reversible launch window.'], bullets: ['Inventory routes and redirect rules.', 'Compare key pages on the rehearsal host.', 'Test forms without submitting live leads.', 'Write the rollback trigger before cutover.'] },
  'outsource-api-versioning': { heading: 'Protect existing consumers', paragraphs: ['API versioning is a compatibility exercise: identify current consumers, fields they depend on, and the smallest additive change that meets the new requirement.', 'A programmer can compare old and new responses with contract fixtures and document deprecation timing. The company owner decides which clients may move and when.', 'Require examples for success, validation failure, authentication failure, and unknown fields so client teams have a stable migration path.'], bullets: ['List consumers and protected fields.', 'Prefer additive changes first.', 'Compare response fixtures by version.', 'Assign deprecation decisions to an owner.'] },
  'outsource-user-search-qa': { heading: 'Test search without exposing people', paragraphs: ['User search needs more than a happy-path query. Test exact names, partial terms, no matches, duplicate-looking values, and results the viewer is not allowed to see.', 'Use synthetic accounts with deliberately overlapping attributes. Capture the query, role, expected result set, and reason for every mismatch.', 'Ranking can be reviewed separately from authorization: a relevant result is still a failure if it crosses a permission boundary.'], bullets: ['Create synthetic records with overlaps.', 'Test empty and partial searches.', 'Check role-specific result sets.', 'Separate ranking from authorization.'] },
  'outsource-csv-export-testing': { heading: 'Make exports dependable', paragraphs: ['CSV exports fail in mundane ways: a comma in a name, a newline in a note, a non-ASCII character, or a column that changes order without warning.', 'Give the programmer a fixture that includes these cases, plus a permission boundary and a large enough sample to expose pagination mistakes. Inspect the downloaded bytes, not only the browser preview.', 'The owner should approve column meaning and retention expectations; the test work should report evidence and mismatches.'], bullets: ['Include commas, quotes, and newlines.', 'Check encoding and header order.', 'Test permission-limited exports.', 'Inspect a large fixture for truncation.'] },
  'outsource-role-based-access-review': { heading: 'Map permissions to behavior', paragraphs: ['A role review becomes useful when each permission is tied to a concrete action, page, API operation, or state transition.', 'Ask the programmer to build a role-action matrix from safe fixtures and mark both allowed and denied cases. Do not rely on hidden buttons as proof that an operation is protected.', 'A technical owner should decide whether a role is intended; the review should show whether the implementation matches that decision.'], bullets: ['Name actions for every role.', 'Test direct requests as well as UI.', 'Record allowed and denied evidence.', 'Escalate ambiguous role intent.'] },
  'outsource-background-job-migration': { heading: 'Move workers without duplicate work', paragraphs: ['Background-job migrations need a clear identity for each job, a safe replay rule, and evidence that a retry cannot create a second customer-visible effect.', 'Use isolated queues and deterministic fixtures to exercise pause, retry, timeout, and dead-letter behavior. Measure what was processed before changing worker ownership.', 'The programmer can prepare migration notes and safeguards while the owner controls queue cutover and any data-affecting decision.'], bullets: ['Define job identity and idempotency.', 'Exercise retries in an isolated queue.', 'Record pause and resume behavior.', 'Set a stop condition for duplicates.'] },
  'outsource-cdn-cache-review': { heading: 'Keep cache behavior observable', paragraphs: ['A CDN review should connect cache headers and keys to the pages users actually receive. Check a fresh change, an unchanged asset, a personalized response, and an explicit invalidation.', 'Use route-level evidence that records request headers, response headers, and the expected freshness rule. Never treat a fast response as proof that the right content was served.', 'Keep provider credentials and production invalidation authority with the owner; the programmer supplies measured findings and a narrow recommendation.'], bullets: ['Compare fresh and cached responses.', 'Inspect cache keys and headers.', 'Test personalized content separately.', 'Document an owner-approved invalidation rule.'] },
  'outsource-database-index-review': { heading: 'Measure before adding indexes', paragraphs: ['Index review starts with a small set of slow or high-value queries and representative data. A list of columns alone cannot show whether an index helps the actual filter and sort pattern.', 'Ask for explain plans before and after a candidate change, plus the write cost and storage tradeoff. Keep production migration approval out of the review ticket unless explicitly assigned.', 'A useful handoff names the query, fixture shape, plan change, and remaining uncertainty.'], bullets: ['Choose queries from real symptoms.', 'Use representative fixture distributions.', 'Compare explain plans.', 'Record write and storage tradeoffs.'] },
  'outsource-subscription-state-qa': { heading: 'Exercise every state transition', paragraphs: ['Subscription behavior is easier to reason about as a state map than as a collection of screens. Include trial expiry, renewal success, failed renewal, pause, resume, and cancellation.', 'Use sandbox accounts and record the event, current state, next state, and customer-facing effect. Do not use real billing profiles or send live messages during QA.', 'The owner defines policy; the programmer verifies that each transition is represented consistently in the interface and API.'], bullets: ['Draw the permitted state map.', 'Test failed and successful renewals.', 'Use sandbox identities only.', 'Match UI and API state labels.'] },
  'outsource-notification-preferences': { heading: 'Respect the choices people make', paragraphs: ['Notification preference testing should cover the intersection of channel, event type, locale, quiet period, and account status.', 'Use preview or sink destinations with synthetic accounts. Verify that opting out suppresses the intended message while essential account notices follow the documented rule.', 'Keep policy decisions with the company; ask for a matrix showing which combinations were tested and what evidence was observed.'], bullets: ['List channels and event types.', 'Test quiet periods and time zones.', 'Use sink destinations for previews.', 'Separate policy gaps from code defects.'] },
  'outsource-international-phone-validation': { heading: 'Treat regional input as real input', paragraphs: ['Phone validation should distinguish display formatting, canonical storage, and whether a value is plausibly dialable. A single domestic example hides country-specific failures.', 'Provide non-sensitive fixtures for trunk prefixes, extensions, short numbers, and invalid country codes. Check error messages and normalization without attempting calls or texts.', 'The reviewer should confirm the supported-region policy before accepting an implementation that happens to pass one locale.'], bullets: ['Cover several country formats.', 'Separate display from storage.', 'Test extensions and trunk prefixes.', 'Confirm the supported-region policy.'] },
  'outsource-markdown-editor-qa': { heading: 'Test content boundaries', paragraphs: ['An editor needs fixtures that combine headings, lists, links, code, quotes, long lines, and characters that could be interpreted as markup.', 'Review source mode, preview mode, escaping, undo, and recovery after an invalid paste. Keep the examples safe and avoid using private customer text.', 'A good result explains what is preserved, what is sanitized, and how the user can recover when formatting is unexpected.'], bullets: ['Combine formatting in one fixture.', 'Test preview and source views.', 'Check escaping and unsafe links.', 'Verify recovery after bad input.'] },
  'outsource-image-upload-ux': { heading: 'Make upload progress honest', paragraphs: ['Image upload UX is a sequence of states: choosing a file, validating it, transferring it, processing it, previewing it, and recovering from failure.', 'Use safe fixtures at the size and format boundaries. Check keyboard operation, meaningful progress, cancellation, retry, and what happens when processing returns a different image shape.', 'The owner approves storage and retention behavior; the programmer should leave a route-by-route record of the user-visible states.'], bullets: ['Name every upload state.', 'Test size and format boundaries.', 'Check keyboard and screen-reader cues.', 'Verify cancellation and retry.'] },
  'outsource-sso-migration': { heading: 'Keep an identity fallback', paragraphs: ['An SSO migration is safest when test identities, callback URLs, claims, group mappings, and fallback access are documented before provider settings change.', 'Use a non-production identity provider or isolated tenant. Exercise first login, returning login, denied access, missing claim, and provider unavailability.', 'The organization owner controls identity policy and the cutover window; the programmer supplies evidence that the approved mapping behaves as expected.'], bullets: ['Inventory claims and group mappings.', 'Test first and returning login.', 'Exercise missing-claim behavior.', 'Prove the approved fallback path.'] },
  'outsource-pdf-generation-qa': { heading: 'Check documents at their edges', paragraphs: ['PDF generation often looks correct on a short example and fails when a name wraps, a table crosses a page, or a link becomes long.', 'Create stable fixtures for short and long values, multiple pages, missing optional fields, and different character sets. Compare the rendered document and extracted text where both matter.', 'The review should distinguish layout defects from decisions about which fields belong in the document.'], bullets: ['Use short and long values.', 'Test page breaks and tables.', 'Check links and extracted text.', 'Separate layout from field policy.'] },
  'outsource-calendar-integration-qa': { heading: 'Make time zones explicit', paragraphs: ['Calendar integrations need cases that cross midnight, daylight-saving changes, recurring events, and attendee updates. A single local-time test is not enough.', 'Use isolated calendars and record the source zone, displayed zone, stored instant, and expected invitation state. Test update and cancellation separately from creation.', 'Keep access to real calendars out of scope; the programmer should provide reproducible sandbox evidence for each transition.'], bullets: ['Cross a date boundary.', 'Include daylight-saving cases.', 'Test update and cancellation.', 'Record source and display zones.'] },
  'outsource-invoice-pdf-review': { heading: 'Reconcile what the document says', paragraphs: ['Invoice PDF review should compare the document with the approved calculation inputs: line items, totals, tax labels, currency, dates, and identifiers.', 'Use fixed examples that include rounding and missing optional fields. Check both the visible page and the download filename without using live financial records.', 'The owner decides accounting meaning and approval; the programmer reports any mismatch with the exact fixture and rendered evidence.'], bullets: ['Tie each field to an input.', 'Include rounding examples.', 'Check visible and downloaded output.', 'Use synthetic financial fixtures.'] },
  'outsource-webhook-signature-review': { heading: 'Reject untrustworthy events', paragraphs: ['Webhook signature review should cover the exact bytes signed, timestamp tolerance, missing headers, malformed signatures, and repeated delivery.', 'Use a sandbox sender and capture both accepted and rejected requests. Verify that an old valid signature is not accepted outside its allowed time window.', 'Keep signing secrets in the approved secret store; the handoff should contain method, fixture, result, and unresolved risk rather than secret values.'], bullets: ['Sign the exact request bytes.', 'Test stale and malformed signatures.', 'Exercise repeated delivery.', 'Never place secrets in evidence.'] },
  'outsource-search-filter-ux': { heading: 'Make filtering easy to understand', paragraphs: ['Filter UX is about state clarity as much as query correctness. Test combinations, no results, loading, failed requests, reset, and returning to a filtered page.', 'Use fixtures that make each filter visibly change the result set. Check URL or saved-state behavior only if it is part of the intended product experience.', 'The reviewer should be able to tell whether a mismatch is a data issue, a query issue, or an interaction issue.'], bullets: ['Give each filter a visible fixture effect.', 'Test combinations and reset.', 'Cover empty and failed states.', 'Classify mismatch causes.'] },
  'outsource-tenant-data-export': { heading: 'Prove export boundaries', paragraphs: ['Tenant export testing must establish whose records belong in the file and whose records must never appear, especially when shared resources or inherited data exist.', 'Use isolated tenants with deliberately similar identifiers. Check authorization, completeness, ordering, file expiry, and the behavior of a canceled export.', 'The owner approves retention and legal requirements; the programmer supplies evidence for scope and failure handling.'], bullets: ['Create neighboring tenant fixtures.', 'Test authorization before download.', 'Check completeness and ordering.', 'Verify canceled-export behavior.'] },
  'outsource-service-health-checks': { heading: 'Separate health from noise', paragraphs: ['A health check should answer a specific question: can the service start, can it accept traffic, or can it reach a dependency needed for a particular operation?', 'Test dependency latency, failure, recovery, and partial availability in an isolated environment. Ensure the response does not disclose secrets or implementation details to unauthenticated callers.', 'The result should map each signal to an owner and an action, not merely add another green endpoint.'], bullets: ['Define startup and readiness separately.', 'Test dependency failure and recovery.', 'Check unauthenticated output.', 'Map each signal to an action.'] },
  'outsource-frontend-state-management': { heading: 'Remove duplicated UI truth', paragraphs: ['State-management cleanup is valuable when it removes contradictory sources of truth without changing the user journey the product already promises.', 'Start with one flow where stale state is reproducible. Trace the owner of loading, error, selection, and saved values, then add regression cases before moving the state.', 'Keep the refactor in small slices so a reviewer can compare behavior before and after rather than approving a large structural rewrite on intuition.'], bullets: ['Choose one reproducible stale-state case.', 'Name each state owner.', 'Add behavior checks before refactoring.', 'Compare the user journey afterward.'] },
};
for (const post of blogPosts.filter((item) => item.published === '2026-08-13')) {
  const focus = aug13Focus[post.slug];
  blogDetails[post.slug] = { strictNoPricing: true, takeaways: focus.bullets, readinessRows: [{ area: 'Scope', ready: 'One named behavior with examples', notReady: 'A broad request to improve the system' }, { area: 'Evidence', ready: 'Fixtures and observed results', notReady: 'An unverified success claim' }, { area: 'Access', ready: 'Sandbox tools and task-limited permissions', notReady: 'Live credentials or real customer data' }, { area: 'Review', ready: 'Owner-approved acceptance decision', notReady: 'Unreviewed policy or release changes' }], sections: [{ id: 'topic-brief', title: focus.heading, paragraphs: focus.paragraphs, bullets: focus.bullets }, { id: 'handoff-evidence', title: 'Leave a decision-ready handoff', paragraphs: ['Record the fixture, expected behavior, observed result, and any condition that was not tested. That gives the technical owner a compact basis for deciding what is ready for review.', 'Keep product policy, customer impact, access exceptions, and release timing with the company owner. The programmer can identify the edge case and propose a bounded follow-up without deciding it unilaterally.'] }], roleBrief: [{ label: 'First slice', text: focus.bullets[0] }, { label: 'Evidence', text: focus.bullets[1] }, { label: 'Boundary', text: focus.bullets[2] }, { label: 'Owner review', text: focus.bullets[3] }], faqs: [{ question: 'What should the first task prove?', answer: focus.paragraphs[0] }, { question: 'What evidence belongs in the review?', answer: 'Include the safe fixture, expected result, observed result, and any untested condition.' }, { question: 'Who owns the final product decision?', answer: 'A named company owner retains product, access, policy, merge, and release decisions.' }], sources: [{ name: 'NIST Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf', note: 'Authoritative guidance for managing software development risk.' }, { name: 'Google Technical Writing', url: 'https://developers.google.com/tech-writing', note: 'Guidance for clear, reviewable technical explanations.' }] };
}

export const staffingOffer = {
  included: [
    'Turn backlog examples into a role with a clear first ticket and review owner',
    'Match the programmer to the codebase, schedule, and kind of work you need',
    'Set repository, test, merge, release, and offboarding rules before access is granted',
    'Plan the first week around setup, a small pull request, and a written handoff',
  ],
} as const;

export const leadQuestions = [
  'Which tickets or maintenance work should move first?',
  'What stack, repository, ticket board, and test tools will the programmer use?',
  'Who reviews pull requests and who approves a production release?',
  'Which systems or decisions must stay with your team?',
  'What should the daily handoff include?',
] as const;

export const staffingFitNote = 'The right setup depends on the work, codebase, review time, access limits, and release rules. Share those details so the first role is based on real tickets rather than a broad developer wish list.';
