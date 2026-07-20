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
    title: 'Outsourced Programmers: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
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

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
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
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
