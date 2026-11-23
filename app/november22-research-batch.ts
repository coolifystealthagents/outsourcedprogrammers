import type { ResearchPost } from './fleet-content';

export const november22ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-code-reviews-lack-a-linked-ticket",
    "title": "How often do code reviews lack a linked ticket?",
    "excerpt": "A local method for measuring how often merged code reviews lack a linked ticket, with separate checks for the test evidence, the reviewer, and the merge decision.",
    "topic": "Code review evidence",
    "published": "2026-11-22",
    "hero": "/nov22/research/how-often-do-code-reviews-lack-a-linked-ticket.webp",
    "body": [
      "This protocol measures how often a merged code review lacks a linked ticket in an outsourced development lane. The unit is one merged pull request. A linked ticket means the request names the work item it implements, and the reviewer can open it. The result describes review evidence for one repository and one period.",
      "## Question and scope",
      "Include merged pull requests from the agreed window across the repositories in scope. Exclude automated dependency updates and reverts that were merged by a bot. Record the repository, the author role, and the merge date. If the team changed its review template during the period, split the sample at the change.",
      "A request that links a ticket but not the correct one is reported as mismatched rather than linked. A request with no ticket is missing. State that rule before scoring. The distinction matters because a mismatched link can send a reviewer to the wrong requirement.",
      "## Definitions and evidence standard",
      "Define a linked ticket as a resolvable identifier that names the requested behavior and is open or recently closed at the merge date. A generic project board link is not a ticket. Record the identifier and the source. The rule should be fixed before any request is coded.",
      "Define a complete review as one with a linked ticket, a named reviewer, a test result, and a merge decision. A request missing any of the four is incomplete. Record the missing fields for each request. The study should not treat an approval click as a complete review.",
      "## Sampling and measurement",
      "Draw the sample from the merge log, not from the reviews the team remembers. Record the export date, the filter, and the row count. Include a mix of repositories and authors. A sample built from recent incidents will overstate the gap.",
      "Measure the number of merged requests, the share with a linked ticket, the share with test evidence, and the share with a named reviewer. Report the counts by repository and by change type. A single percentage hides the repository that uses a different template. The reviewer should keep the raw counts.",
      "## Findings and interpretation",
      "Present the distribution before suggesting a cause. A cluster in one repository may point to a template or a bot, while a cluster in one author group may point to onboarding. Read a few requests behind the largest group before naming a reason. The reviewer should keep the individual cases behind the count.",
      "Separate a missing link from a link to the wrong ticket. The first is an intake problem, while the second is a traceability problem. Report both counts. The fix for one is a required field, and the fix for the other is a review step.",
      "## Limitations",
      "The measure cannot show whether the code was correct or whether the reviewer understood the ticket. It shows only whether the record links the change to a work item. A complete link is not proof of quality, and a missing link is not proof of a defect. Keep the evidence result separate from the code outcome.",
      "The sample is local to one delivery lane and one period. A different repository mix or review tool can produce a different share. Report the definitions and the counts so another team can repeat the work. Do not use the result as an industry benchmark.",
      "## Practical next step",
      "Choose one repair that matches the most common gap, such as a pull-request template with a required ticket field. Write the owner and the start date. Define the measure that will show whether it worked, using the same categories. Keep the working list separate from the official record.",
      "Test the repair on the next batch of merged requests before applying it to every repository. Record the test group and the result. If the repair adds a step without improving the link, simplify it. A small test is enough to show whether the template is being used."
    ],
    "takeaways": [
      "Count a review as linked only when the pull request names the ticket it implements.",
      "Report test evidence and reviewer approval separately from the ticket link.",
      "Sample merged changes, not only the reviews that were discussed.",
      "Test one pull-request template change and recheck the share."
    ],
    "sources": [
      [
        "NIST, Secure Software Development Framework",
        "https://csrc.nist.gov/projects/ssdf"
      ],
      [
        "Open Web Application Security Project",
        "https://owasp.org/"
      ],
      [
        "U.S. Bureau of Labor Statistics, Software Developers",
        "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
      ]
    ],
    "related": []
  },
  {
    "slug": "what-share-of-staging-access-grants-lack-an-expiry-date",
    "title": "What share of staging access grants lack an expiry date?",
    "excerpt": "A local method for measuring how often staging access grants lack an expiry date, with separate checks for the role, the environment, and the removal owner.",
    "topic": "Environment access evidence",
    "published": "2026-11-22",
    "hero": "/nov22/research/what-share-of-staging-access-grants-lack-an-expiry-date.webp",
    "body": [
      "This protocol measures how often a staging access grant lacks an expiry date in an outsourced development lane. The unit is one grant to one named account. The evidence is the access record, the role mapping, and the removal note. The result describes one team and one period.",
      "## Question and scope",
      "Include grants to staging, test, and preview environments made during the window. Exclude service accounts that are managed by the platform team. Record the environment, the account, and the grant date. If the team changed its access tool during the period, split the sample.",
      "A grant that is waiting for a scheduled removal is reported as pending, while a grant with no date is missing. State that rule before scoring. The distinction keeps a normal removal queue from looking like a permanent grant. The reviewer should record the status beside each grant.",
      "## Definitions and evidence standard",
      "Define an expiry date as a calendar date recorded in the access system and visible to the reviewer. A note in a ticket is not an expiry date. Record the date and the removal owner. The rule should be fixed before any grant is coded.",
      "Define a complete grant as one with a named account, an environment, a role, an expiry, and a removal owner. A grant missing any of the five is incomplete. Record the missing fields. The study should not treat a role assignment email as a complete grant.",
      "## Sampling and measurement",
      "Draw the sample from the access system export, not from the requests the team remembers. Record the export date and the filter. Include read, write, and admin roles. A sample of read-only grants will understate the risk.",
      "Measure the number of grants, the share with an expiry, the share with a named owner, and the share above the least-privilege role. Report the counts by environment and role. A single percentage hides the admin grant that has no date. The reviewer should keep the raw counts.",
      "## Findings and interpretation",
      "Present the distribution before suggesting a cause. A cluster in one environment may point to a tool that does not require a date, while a cluster in one role may point to a broad template. Read the grants behind the largest group before naming a reason. The reviewer should keep the individual cases behind the count.",
      "Separate a missing expiry from a missing owner. The first is a policy gap, while the second is an accountability gap. Report both counts. The fix for one is a required field, and the fix for the other is a named reviewer.",
      "## Limitations",
      "The measure cannot show whether the account was used or whether the role was appropriate for the task. It shows only whether the grant has a date and an owner. A complete grant can still be too broad, and a missing date can still belong to an account that was removed. Keep the evidence result separate from the access decision.",
      "The sample is local to one team and one access tool. A different environment mix can produce a different share. Report the definitions and the counts so the review can be repeated. Do not present the result as a benchmark.",
      "## Practical next step",
      "Choose one repair that matches the most common gap, such as a required expiry field in the access request. Write the owner and the start date. Define the measure that will show whether it worked, using the same categories. Keep the working list separate from the official record.",
      "Test the repair on the next set of grants before applying it to every environment. Record the test group and the result. If the repair adds a step without improving the record, simplify it. A small test is enough to show whether the field is being used."
    ],
    "takeaways": [
      "Count a grant as expiring only when it has a date and a removal owner.",
      "Separate a read-only grant from a write or admin grant.",
      "Sample every environment in scope, not only production-like staging.",
      "Test one expiry field and recheck the next access review."
    ],
    "sources": [
      [
        "NIST, Secure Software Development Framework",
        "https://csrc.nist.gov/projects/ssdf"
      ],
      [
        "Open Web Application Security Project",
        "https://owasp.org/"
      ],
      [
        "U.S. Bureau of Labor Statistics, Software Developers",
        "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
      ]
    ],
    "related": []
  },
  {
    "slug": "how-often-do-bug-handoffs-miss-reproduction-steps",
    "title": "How often do bug handoffs miss reproduction steps?",
    "excerpt": "A local method for measuring how often a bug handoff lacks reproduction steps, with separate checks for the environment, the evidence, and the severity.",
    "topic": "QA handoff evidence",
    "published": "2026-11-22",
    "hero": "/nov22/research/how-often-do-bug-handoffs-miss-reproduction-steps.webp",
    "body": [
      "This protocol measures how often a bug handoff lacks reproduction steps in a delegated QA lane. The unit is one defect report handed to a developer. The evidence is the report, the attachments, and the triage note. The result describes one desk and one period.",
      "## Question and scope",
      "Include defects reported during the window that reached a developer. Exclude duplicates that were closed at intake and reports that were withdrawn. Record the build, the source, and the severity. If the team changed its tracker template during the period, split the sample.",
      "A report that is waiting for a log is pending, while a report that was handed over without steps is missing. State that rule before scoring. A pending report may still be timely, so keep the two states separate. The reviewer should record the status beside each report.",
      "## Definitions and evidence standard",
      "Define reproduction as a set of steps that a second person can follow from a known state to the observed failure. A summary such as login broken is not reproduction. Record the steps, the environment, and the expected result. The rule should be fixed before any report is coded.",
      "Define a complete handoff as one with reproduction, environment, evidence, severity, and a named owner. A report missing any of the five is incomplete. Record the missing fields for each report. The study should not treat a screenshot alone as a complete handoff.",
      "## Sampling and measurement",
      "Draw the sample from the tracker export, not from the reports the team remembers. Record the export date and the filter. Include reports from different testers and severity levels. A sample of high-severity reports may look better because they received more attention.",
      "Measure the number of reports, the share with reproduction, the share with evidence, and the share with a named owner. Report the counts by severity and source. A single percentage hides the low-severity reports that still consume developer time. The reviewer should keep the raw counts.",
      "## Findings and interpretation",
      "Present the distribution before suggesting a cause. A cluster in one tester may point to training, while a cluster in one source may point to a user-report intake form. Read the reports behind the largest group before naming a reason. The reviewer should keep the individual cases behind the count.",
      "Separate a missing step from a missing attachment. The first is a writing problem, while the second is a capture problem. Report both counts. The fix for one is a template, and the fix for the other is a recording tool.",
      "## Limitations",
      "The measure cannot show whether the defect was real or whether the developer could reproduce it with extra context. It shows only whether the written handoff was complete. A complete report can still describe a non-issue, and a missing step can still be obvious to the developer. Keep the evidence result separate from the defect outcome.",
      "The sample is local to one desk and one tracker. A different product or tester mix can produce a different share. Report the definitions and counts so the work can be repeated. Do not use the result as a benchmark.",
      "## Practical next step",
      "Choose one repair that matches the most common gap, such as a required reproduction field in the intake form. Write the owner and the start date. Define the measure that will show whether it worked, using the same categories. Keep the working list separate from the official record.",
      "Test the repair on the next batch of reports before applying it to every queue. Record the test group and the result. If the repair adds a step without improving the handoff, simplify it. A small test is enough to show whether the field is being used."
    ],
    "takeaways": [
      "Count a handoff as reproducible only when the steps, environment, and evidence are present.",
      "Separate a missing step from a missing attachment.",
      "Report the severity and the report source beside the gap.",
      "Test one intake template and recheck the next batch."
    ],
    "sources": [
      [
        "NIST, Secure Software Development Framework",
        "https://csrc.nist.gov/projects/ssdf"
      ],
      [
        "Open Web Application Security Project",
        "https://owasp.org/"
      ],
      [
        "U.S. Bureau of Labor Statistics, Software Developers",
        "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
      ]
    ],
    "related": []
  },
  {
    "slug": "what-share-of-releases-lack-a-named-approver",
    "title": "What share of releases lack a named approver?",
    "excerpt": "A local method for measuring how often a release record lacks a named approver, with separate checks for the change list, the test evidence, and the rollback plan.",
    "topic": "Release approval evidence",
    "published": "2026-11-22",
    "hero": "/nov22/research/what-share-of-releases-lack-a-named-approver.webp",
    "body": [
      "This protocol measures what share of releases lack a named approver in an outsourced development lane. The unit is one release record for one deploy window. The evidence is the change list, the approval note, and the deploy log. The result describes one team and one period.",
      "## Question and scope",
      "Include production releases during the window, including hotfixes and scheduled deploys. Exclude development previews that never reached customers. Record the risk level, the window, and the deploy owner. If the approval policy changed during the period, split the sample.",
      "A release with a conditional approval is reported as conditional rather than fully approved. A release with no person named is missing. State that rule before scoring. A conditional approval may still be valid, so keep the two states separate. The reviewer should record the status beside each release.",
      "## Definitions and evidence standard",
      "Define a named approver as a person who accepted the release scope and risk, recorded in the release ticket or an approved system. A team name or a chat message with no author is not an approver. Record the name and the decision time. The source of the approval should be linked in the record.",
      "Define a complete release record as one with a change list, test evidence, a rollback plan, a named approver, and a communication step. A record missing any of the five is incomplete. Record the missing fields for each release. The study should not treat a deploy log as an approval.",
      "## Sampling and measurement",
      "Draw the sample from the deploy log, not from the releases the team remembers. Record the export date and the filter. Include scheduled and emergency releases. A sample of planned releases may look better because they had more time.",
      "Measure the number of releases, the share with a named approver, the share with test evidence, and the share with a rollback owner. Report the counts by risk level and window. A single percentage hides the hotfix that shipped with no approval. The reviewer should keep the raw counts.",
      "## Findings and interpretation",
      "Present the distribution before suggesting a cause. A cluster in one window may point to an on-call process, while a cluster in one team may point to a template. Read the releases behind the largest group before naming a reason. The reviewer should keep the individual cases behind the count.",
      "Separate a missing approver from a missing rollback owner. The first is an accountability gap, while the second is an operational gap. Report both counts. The fix for one is an approval step, and the fix for the other is a tested plan.",
      "## Limitations",
      "The measure cannot show whether the release was safe or whether the approver understood the risk. It shows only whether a person was named and the record was complete. A named approver is not proof of quality, and a missing name is not proof of an incident. Keep the evidence result separate from the release outcome.",
      "The sample is local to one team and one deploy pipeline. A different release cadence can produce a different share. Report the definitions and counts so the work can be repeated. Do not present the result as a benchmark.",
      "## Practical next step",
      "Choose one repair that matches the most common gap, such as a required approver field in the release template. Write the owner and the start date. Define the measure that will show whether it worked, using the same categories. Keep the working list separate from the official record.",
      "Test the repair on the next release cycle before applying it to every team. Record the test group and the result. If the repair adds a step without improving the record, simplify it. A small test is enough to show whether the field is being used."
    ],
    "takeaways": [
      "Count a release as approved only when a person, not a team, is named.",
      "Separate a missing approver from a missing test result.",
      "Report the risk level and the deploy window beside the share.",
      "Test one release template and recheck the next cycle."
    ],
    "sources": [
      [
        "NIST, Secure Software Development Framework",
        "https://csrc.nist.gov/projects/ssdf"
      ],
      [
        "Open Web Application Security Project",
        "https://owasp.org/"
      ],
      [
        "U.S. Bureau of Labor Statistics, Software Developers",
        "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
      ]
    ],
    "related": []
  },
  {
    "slug": "how-often-do-contractor-repository-permissions-exceed-the-role",
    "title": "How often do contractor repository permissions exceed the role?",
    "excerpt": "A local method for measuring how often contractor repository permissions exceed the role, with separate checks for the scope, the secret access, and the review date.",
    "topic": "Repository access evidence",
    "published": "2026-11-22",
    "hero": "/nov22/research/how-often-do-contractor-repository-permissions-exceed-the-role.webp",
    "body": [
      "This protocol measures how often a contractor's repository permission exceeds the written role in an outsourced development lane. The unit is one contractor account on one repository. The evidence is the role definition, the access export, and the engagement record. The result describes one team and one period.",
      "## Question and scope",
      "Include contractor accounts with access during the window, including read, write, admin, and secret access. Exclude vendor bots that are owned by the platform team. Record the repository, the account, and the engagement. If the role mapping changed during the period, split the sample.",
      "A grant that matches the role is in scope, while a grant that is being downgraded is reported as pending. State that rule before scoring. A pending downgrade should not be counted as a current excess permission. The reviewer should record the status beside each grant.",
      "## Definitions and evidence standard",
      "Define the written role as the permission set in the engagement or the team role matrix. A verbal expectation is not a role definition. Record the source and the version. The reviewer should be able to compare the grant with the same document.",
      "Define an excess permission as a grant that includes a capability the written role does not require, such as admin, delete, or secret read. Record the capability and the reason. The study should not treat a broader read scope as excess when the role requires it. The reviewer should record the matching capability.",
      "## Sampling and measurement",
      "Draw the sample from the repository access export and the secret manager list. Record the export date and the filter. Include tokens and deploy keys, not only user accounts. A sample of user accounts will miss the credential that outlives the contractor.",
      "Measure the number of grants, the share that match the role, the share with excess write, and the share with admin or secret access. Report the counts by repository and engagement. A single percentage hides the one admin grant on the most sensitive repository. The reviewer should keep the raw counts.",
      "## Findings and interpretation",
      "Present the distribution before suggesting a cause. A cluster in one repository may point to a default team permission, while a cluster in one engagement may point to an onboarding shortcut. Read the grants behind the largest group before naming a reason. The reviewer should keep the individual cases behind the count.",
      "Separate an excess read from an excess admin or secret permission. The first is a scope problem, while the second is a high-risk capability. Report both counts. The fix for one is a role review, and the fix for the other is immediate removal.",
      "## Limitations",
      "The measure cannot show whether the contractor used the excess permission or whether the role itself was well designed. It shows only the gap between the written role and the grant. A matching grant can still be too broad, and an excess grant can still be unused. Keep the evidence result separate from the access decision.",
      "The sample is local to one team and one repository set. A different engagement mix can produce a different share. Report the definitions and counts so the review can be repeated. Do not use the result as a benchmark.",
      "## Practical next step",
      "Choose one repair that matches the most common gap, such as a role template applied at onboarding. Write the owner and the start date. Define the measure that will show whether it worked, using the same categories. Keep the working list separate from the official record.",
      "Test the repair on the next set of contractor accounts before applying it to every repository. Record the test group and the result. If the repair adds a step without improving the match, simplify it. A small test is enough to show whether the template is being used."
    ],
    "takeaways": [
      "Compare each grant with the written role before judging the permission.",
      "Report admin and secret access separately from read and write.",
      "Include tokens and deploy keys, not only user accounts.",
      "Test one role template and recheck the next access review."
    ],
    "sources": [
      [
        "NIST, Secure Software Development Framework",
        "https://csrc.nist.gov/projects/ssdf"
      ],
      [
        "Open Web Application Security Project",
        "https://owasp.org/"
      ],
      [
        "U.S. Bureau of Labor Statistics, Software Developers",
        "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm"
      ]
    ],
    "related": []
  }
];
