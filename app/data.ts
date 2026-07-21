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

export const blogPosts = [
  {
    slug: 'outsourced-programmers-planning',
    title: 'How to plan an outsourced programmer role',
    excerpt: 'Turn real tickets, review rules, and access limits into a programmer brief your team can use.',
    minutes: 10,
  },
  {
    slug: 'outsourced-programmers-tasks-to-outsource',
    title: 'Which programming tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-programmers-provider-questions',
    title: 'Questions for an outsourced programming provider',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsourced-programmers-onboarding-checklist',
    title: 'First-week onboarding checklist for outsourced programmers',
    excerpt: 'Set up repository access, review rules, test work, and daily handoffs without giving away production control.',
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
