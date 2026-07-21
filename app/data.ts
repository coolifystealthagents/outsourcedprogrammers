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
    firstWeek: ['Review 10 closed support bugs', 'Write the bug report template', 'Triages tickets in a shared queue', 'Run a 20-minute daily review with support and engineering'],
    faqs: [
      { question: 'Is this customer support or programming work?', answer: 'It sits between both. The staff member helps turn messy customer reports into useful engineering tickets.' },
      { question: 'Should they reply directly to customers?', answer: 'Only after you approve the reply rules. Sensitive bugs, outages, refunds, and security issues should stay with your team.' },
    ],
    sources: [
      { name: 'Atlassian incident management guide', url: 'https://www.atlassian.com/incident-management' },
      { name: 'OWASP vulnerability disclosure guidance', url: 'https://owasp.org/www-project-vulnerability-disclosure-cheat-sheet/' },
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
      { name: 'NIST software testing publication archive', url: 'https://www.nist.gov/itl/ssd/software-quality-group/software-testing' },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-programmers-planning',
    title: 'How to plan an outsourced programmer role',
    excerpt: 'Turn real tickets, review rules, and access limits into a programmer brief your team can use.',
    minutes: 10,
  },
  {
    slug: 'outsourced-programmers-tasks-to-outsource',
    title: 'Outsourced Programmers: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-programmers-provider-questions',
    title: 'Outsourced Programmers: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsourced-programmers-onboarding-checklist',
    title: 'Outsourced Programmers: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export type BlogDetail = {
  takeaways: readonly string[];
  readinessRows: readonly { area: string; ready: string; notReady: string }[];
  sections: readonly { id: string; title: string; paragraphs: readonly string[]; bullets?: readonly string[] }[];
  roleBrief: readonly { label: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
  sources: readonly { name: string; url: string; note: string }[];
};

export const blogDetails: Record<string, BlogDetail> = {
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
};

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
