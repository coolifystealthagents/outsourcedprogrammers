import type { ResearchPost } from './fleet-content';

export const november24ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-api-client-reviews-lack-a-timeout-check",
    "title": "How often do API client reviews lack a timeout check?",
    "excerpt": "A bounded method for measuring API client changes that lack a recorded timeout and retry review.",
    "topic": "Api Client Record records",
    "published": "2026-11-24",
    "hero": "/nov24/research/how-often-do-api-client-reviews-lack-a-timeout-check.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the API client record includes a timeout and retry review. The unit is one record for one case. Evidence is the API client record, the supporting note, and the pull request entry. The result describes one operation and one window.",
      "Include records created in the window for this process. Leave out records that cannot be matched to a case. State the source and the date. If the procedure changes mid-window, split the sample at that point.",
      "## Definitions and evidence",
      "Define a timeout and retry review before reading any record. A value with no a date, an owner, or a source is incomplete. Count a missing element separately from one that is present but weak. The reviewer keeps the working note beside the pull request for the sprint.",
      "Measure the number of records, the share carrying a timeout and retry review, and the share with a dated source. Report the split by team and by month. The supervisor reviews the note before the next handoff. The database owner files the rollback page with the migration ticket.",
      "## Sampling and collection",
      "Draw the sample from the pull request export, not from the cases the code reviewer remembers. State the export date and the filter. Include more than one shift and more than one week. The QA desk stores the packet with the defect entry.",
      "Collect the record and the note behind it for each case. Where one is missing, treat the gap as a finding. The study cannot rest on the code reviewer's recollection. The incident lead pins the handoff in the channel until the next shift.",
      "## Findings and reporting",
      "Show the distribution before assigning a cause. A cluster under one code reviewer may point to a template, while a cluster in one week may point to a busy stretch. Read a few records behind the largest group. The release manager attaches the draft to the release ticket.",
      "Report the exceptions and one action with an owner. A report with no an action is description, not control. The supervisor reviews the note before the next handoff. A second reader checks the sample before the result is shared.",
      "## Limits and next action",
      "The review measures the record, not the outcome for the customer. A complete entry can hide a serious problem, and a missing one does not prove harm. Keep the result local to this operation. The export date is written on the summary so the window is clear.",
      "Choose one repair, name the owner, and test it on the next set of records. Hold the definitions steady so the next review compares like with like. The aim is a API client record that a dependency failure that hangs a request path. Any record excluded from the sample is listed with its reason."
    ],
    "takeaways": [
      "Use the pull request as the unit.",
      "Separate a missing timeout from a weak one.",
      "Record the reviewer and the date.",
      "Keep the sample inside one repository."
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
    "slug": "what-share-of-database-migrations-lack-a-rollback-note",
    "title": "What share of database migrations lack a rollback note?",
    "excerpt": "A bounded method for measuring migrations that lack a reverse script and a verified backup point.",
    "topic": "Migration Record records",
    "published": "2026-11-24",
    "hero": "/nov24/research/what-share-of-database-migrations-lack-a-rollback-note.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the migration record includes a reverse script and backup point. The unit is one record for one case. Evidence is the migration record, the supporting note, and the migration log entry. The result describes one operation and one window.",
      "Include records created in the window for this process. Leave out records that cannot be matched to a case. State the source and the date. If the procedure changes mid-window, split the sample at that point.",
      "## Definitions and evidence",
      "Define a reverse script and backup point before reading any record. A value with no a date, an owner, or a source is incomplete. Count a missing element separately from one that is present but weak. The reviewer keeps the working note beside the pull request for the sprint.",
      "Measure the number of records, the share carrying a reverse script and backup point, and the share with a dated source. Report the split by team and by month. The supervisor reviews the note before the next handoff. The database owner files the rollback page with the migration ticket.",
      "## Sampling and collection",
      "Draw the sample from the migration log export, not from the cases the database owner remembers. State the export date and the filter. Include more than one shift and more than one week. The QA desk stores the packet with the defect entry.",
      "Collect the record and the note behind it for each case. Where one is missing, treat the gap as a finding. The study cannot rest on the database owner's recollection. The incident lead pins the handoff in the channel until the next shift.",
      "## Findings and reporting",
      "Show the distribution before assigning a cause. A cluster under one database owner may point to a template, while a cluster in one week may point to a busy stretch. Read a few records behind the largest group. The release manager attaches the draft to the release ticket.",
      "Report the exceptions and one action with an owner. A report with no an action is description, not control. The supervisor reviews the note before the next handoff. A second reader checks the sample before the result is shared.",
      "## Limits and next action",
      "The review measures the record, not the outcome for the customer. A complete entry can hide a serious problem, and a missing one does not prove harm. Keep the result local to this operation. The export date is written on the summary so the window is clear.",
      "Choose one repair, name the owner, and test it on the next set of records. Hold the definitions steady so the next review compares like with like. The aim is a migration record that a schema change that cannot be undone. Any record excluded from the sample is listed with its reason."
    ],
    "takeaways": [
      "Count the migration, not the table.",
      "Separate a missing script from an untested one.",
      "Record the backup point.",
      "Treat the result as local evidence."
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
    "slug": "how-often-do-bug-reports-lack-a-reproduction-step",
    "title": "How often do bug reports lack a reproduction step?",
    "excerpt": "A bounded method for measuring defect reports that lack ordered reproduction steps and build information.",
    "topic": "Bug Report records",
    "published": "2026-11-24",
    "hero": "/nov24/research/how-often-do-bug-reports-lack-a-reproduction-step.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the bug report includes ordered reproduction steps. The unit is one record for one case. Evidence is the bug report, the supporting note, and the issue tracker entry. The result describes one operation and one window.",
      "Include records created in the window for this process. Leave out records that cannot be matched to a case. State the source and the date. If the procedure changes mid-window, split the sample at that point.",
      "## Definitions and evidence",
      "Define ordered reproduction steps before reading any record. A value with no a date, an owner, or a source is incomplete. Count a missing element separately from one that is present but weak. The reviewer keeps the working note beside the pull request for the sprint.",
      "Measure the number of records, the share carrying ordered reproduction steps, and the share with a dated source. Report the split by team and by month. The supervisor reviews the note before the next handoff. The database owner files the rollback page with the migration ticket.",
      "## Sampling and collection",
      "Draw the sample from the issue tracker export, not from the cases the QA lead remembers. State the export date and the filter. Include more than one shift and more than one week. The QA desk stores the packet with the defect entry.",
      "Collect the record and the note behind it for each case. Where one is missing, treat the gap as a finding. The study cannot rest on the QA lead's recollection. The incident lead pins the handoff in the channel until the next shift.",
      "## Findings and reporting",
      "Show the distribution before assigning a cause. A cluster under one QA lead may point to a template, while a cluster in one week may point to a busy stretch. Read a few records behind the largest group. The release manager attaches the draft to the release ticket.",
      "Report the exceptions and one action with an owner. A report with no an action is description, not control. The supervisor reviews the note before the next handoff. A second reader checks the sample before the result is shared.",
      "## Limits and next action",
      "The review measures the record, not the outcome for the customer. A complete entry can hide a serious problem, and a missing one does not prove harm. Keep the result local to this operation. The export date is written on the summary so the window is clear.",
      "Choose one repair, name the owner, and test it on the next set of records. Hold the definitions steady so the next review compares like with like. The aim is a bug report that a defect bouncing between reporter and developer. Any record excluded from the sample is listed with its reason."
    ],
    "takeaways": [
      "Use the defect report as the unit.",
      "Separate a missing step from an unclear one.",
      "Check the build and environment fields.",
      "Do not generalize beyond one product."
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
    "slug": "what-share-of-on-call-handoffs-lack-a-current-incident-owner",
    "title": "What share of on-call handoffs lack a current incident owner?",
    "excerpt": "A bounded method for measuring shift handoffs that lack a named incident owner and next check.",
    "topic": "Handoff Record records",
    "published": "2026-11-24",
    "hero": "/nov24/research/what-share-of-on-call-handoffs-lack-a-current-incident-owner.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the handoff record includes a named incident owner. The unit is one record for one case. Evidence is the handoff record, the supporting note, and the incident channel entry. The result describes one operation and one window.",
      "Include records created in the window for this process. Leave out records that cannot be matched to a case. State the source and the date. If the procedure changes mid-window, split the sample at that point.",
      "## Definitions and evidence",
      "Define a named incident owner before reading any record. A value with no a date, an owner, or a source is incomplete. Count a missing element separately from one that is present but weak. The reviewer keeps the working note beside the pull request for the sprint.",
      "Measure the number of records, the share carrying a named incident owner, and the share with a dated source. Report the split by team and by month. The supervisor reviews the note before the next handoff. The database owner files the rollback page with the migration ticket.",
      "## Sampling and collection",
      "Draw the sample from the incident channel export, not from the cases the incident lead remembers. State the export date and the filter. Include more than one shift and more than one week. The QA desk stores the packet with the defect entry.",
      "Collect the record and the note behind it for each case. Where one is missing, treat the gap as a finding. The study cannot rest on the incident lead's recollection. The incident lead pins the handoff in the channel until the next shift.",
      "## Findings and reporting",
      "Show the distribution before assigning a cause. A cluster under one incident lead may point to a template, while a cluster in one week may point to a busy stretch. Read a few records behind the largest group. The release manager attaches the draft to the release ticket.",
      "Report the exceptions and one action with an owner. A report with no an action is description, not control. The supervisor reviews the note before the next handoff. A second reader checks the sample before the result is shared.",
      "## Limits and next action",
      "The review measures the record, not the outcome for the customer. A complete entry can hide a serious problem, and a missing one does not prove harm. Keep the result local to this operation. The export date is written on the summary so the window is clear.",
      "Choose one repair, name the owner, and test it on the next set of records. Hold the definitions steady so the next review compares like with like. The aim is a handoff record that two responders working the same alert. Any record excluded from the sample is listed with its reason."
    ],
    "takeaways": [
      "Count the handoff, not the alert.",
      "Separate a missing owner from a stale one.",
      "Record the next check and time.",
      "Keep the review inside one rotation."
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
    "slug": "how-often-do-release-notes-lack-a-linked-pull-request",
    "title": "How often do release notes lack a linked pull request?",
    "excerpt": "A bounded method for measuring release note lines that lack a linked merged pull request and a named reviewer.",
    "topic": "Release Note Line records",
    "published": "2026-11-24",
    "hero": "/nov24/research/how-often-do-release-notes-lack-a-linked-pull-request.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the release note line includes a linked merged pull request. The unit is one record for one case. Evidence is the release note line, the supporting note, and the merge log entry. The result describes one operation and one window.",
      "Include records created in the window for this process. Leave out records that cannot be matched to a case. State the source and the date. If the procedure changes mid-window, split the sample at that point.",
      "## Definitions and evidence",
      "Define a linked merged pull request before reading any record. A value with no a date, an owner, or a source is incomplete. Count a missing element separately from one that is present but weak. The reviewer keeps the working note beside the pull request for the sprint.",
      "Measure the number of records, the share carrying a linked merged pull request, and the share with a dated source. Report the split by team and by month. The supervisor reviews the note before the next handoff. The database owner files the rollback page with the migration ticket.",
      "## Sampling and collection",
      "Draw the sample from the merge log export, not from the cases the release manager remembers. State the export date and the filter. Include more than one shift and more than one week. The QA desk stores the packet with the defect entry.",
      "Collect the record and the note behind it for each case. Where one is missing, treat the gap as a finding. The study cannot rest on the release manager's recollection. The incident lead pins the handoff in the channel until the next shift.",
      "## Findings and reporting",
      "Show the distribution before assigning a cause. A cluster under one release manager may point to a template, while a cluster in one week may point to a busy stretch. Read a few records behind the largest group. The release manager attaches the draft to the release ticket.",
      "Report the exceptions and one action with an owner. A report with no an action is description, not control. The supervisor reviews the note before the next handoff. A second reader checks the sample before the result is shared.",
      "## Limits and next action",
      "The review measures the record, not the outcome for the customer. A complete entry can hide a serious problem, and a missing one does not prove harm. Keep the result local to this operation. The export date is written on the summary so the window is clear.",
      "Choose one repair, name the owner, and test it on the next set of records. Hold the definitions steady so the next review compares like with like. The aim is a release note line that a change shipping without a traceable description. Any record excluded from the sample is listed with its reason."
    ],
    "takeaways": [
      "Use the note line as the unit.",
      "Separate a missing link from a broken one.",
      "Check the reviewer field.",
      "Treat the finding as a local check."
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
