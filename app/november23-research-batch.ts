import type { ResearchPost } from './fleet-content';

export const november23ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-dependency-upgrades-lack-a-rollback-tag",
    "title": "How often do dependency upgrades lack a rollback tag?",
    "excerpt": "A local method for measuring dependency upgrades that lack a tested rollback tag.",
    "topic": "Dependency records",
    "published": "2026-11-23",
    "hero": "/nov23/research/how-often-do-dependency-upgrades-lack-a-rollback-tag.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the record includes the element named in the title. The unit is one record for one change. The evidence is the log, the pull request, and the review note. The result describes one repository and one period.",
      "Include records created during the review window for the process in scope. Exclude records that cannot be matched to a change. Record the source and the date. If the team changes its procedure, split the sample.",
      "## Definitions and evidence",
      "Define the element before reviewing any record. A value without a date, an owner, or a source is not complete. Record a missing element separately from an element that is present but weak. The entry should be dated and signed by the reviewer.",
      "Measure the number of records, the share with the element, and the share with a dated source. Report the counts by repository and by month. The reviewer should keep the raw list. The entry should be dated and signed by the reviewer.",
      "## Sampling and collection",
      "Draw the sample from the merge or deploy log, not from the changes the team remembers. Record the export date and the filter. Include more than one service and one month. The entry should be dated and signed by the reviewer.",
      "Collect the record and the supporting note for each case. If one is missing, record that gap as a finding. The study should not rely on the lead's memory. The entry should be dated and signed by the reviewer.",
      "## Findings and reporting",
      "Present the distribution before naming a cause. A cluster with one service may point to a template, while a cluster in one month may point to a busy period. Read a few records behind the largest group. The entry should be dated and signed by the reviewer.",
      "Report the exceptions and one action with an owner. A report without an action is a description, not a control. The entry should be dated and signed by the reviewer. The source note should stay with the record.",
      "## Limits and next action",
      "The review measures the record, not the code quality. A complete entry can still hide a problem, and a missing one does not prove one. The sample is local and should not be generalized. The entry should be dated and signed by the reviewer.",
      "Choose one repair, name the owner, and test it on the next set of records. Keep the definitions stable so the next review can compare like with like. The entry should be dated and signed by the reviewer. The source note should stay with the record."
    ],
    "takeaways": [
      "Use the record as the unit.",
      "Separate a missing element from a weak one.",
      "Require a dated source.",
      "Test one repair."
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
    "slug": "what-share-of-feature-flags-lack-an-owner",
    "title": "What share of feature flags lack an owner?",
    "excerpt": "A local method for measuring feature flags that lack a named owner.",
    "topic": "Feature flag records",
    "published": "2026-11-23",
    "hero": "/nov23/research/what-share-of-feature-flags-lack-an-owner.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the record includes the element named in the title. The unit is one record for one change. The evidence is the log, the pull request, and the review note. The result describes one repository and one period.",
      "Include records created during the review window for the process in scope. Exclude records that cannot be matched to a change. Record the source and the date. If the team changes its procedure, split the sample.",
      "## Definitions and evidence",
      "Define the element before reviewing any record. A value without a date, an owner, or a source is not complete. Record a missing element separately from an element that is present but weak. The entry should be dated and signed by the reviewer.",
      "Measure the number of records, the share with the element, and the share with a dated source. Report the counts by repository and by month. The reviewer should keep the raw list. The entry should be dated and signed by the reviewer.",
      "## Sampling and collection",
      "Draw the sample from the merge or deploy log, not from the changes the team remembers. Record the export date and the filter. Include more than one service and one month. The entry should be dated and signed by the reviewer.",
      "Collect the record and the supporting note for each case. If one is missing, record that gap as a finding. The study should not rely on the lead's memory. The entry should be dated and signed by the reviewer.",
      "## Findings and reporting",
      "Present the distribution before naming a cause. A cluster with one service may point to a template, while a cluster in one month may point to a busy period. Read a few records behind the largest group. The entry should be dated and signed by the reviewer.",
      "Report the exceptions and one action with an owner. A report without an action is a description, not a control. The entry should be dated and signed by the reviewer. The source note should stay with the record.",
      "## Limits and next action",
      "The review measures the record, not the code quality. A complete entry can still hide a problem, and a missing one does not prove one. The sample is local and should not be generalized. The entry should be dated and signed by the reviewer.",
      "Choose one repair, name the owner, and test it on the next set of records. Keep the definitions stable so the next review can compare like with like. The entry should be dated and signed by the reviewer. The source note should stay with the record."
    ],
    "takeaways": [
      "Use the record as the unit.",
      "Separate a missing element from a weak one.",
      "Require a dated source.",
      "Test one repair."
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
    "slug": "how-often-do-database-migrations-lack-a-dry-run-record",
    "title": "How often do database migrations lack a dry-run record?",
    "excerpt": "A local method for measuring migrations that lack a dry-run record.",
    "topic": "Migration records",
    "published": "2026-11-23",
    "hero": "/nov23/research/how-often-do-database-migrations-lack-a-dry-run-record.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the record includes the element named in the title. The unit is one record for one change. The evidence is the log, the pull request, and the review note. The result describes one repository and one period.",
      "Include records created during the review window for the process in scope. Exclude records that cannot be matched to a change. Record the source and the date. If the team changes its procedure, split the sample.",
      "## Definitions and evidence",
      "Define the element before reviewing any record. A value without a date, an owner, or a source is not complete. Record a missing element separately from an element that is present but weak. The entry should be dated and signed by the reviewer.",
      "Measure the number of records, the share with the element, and the share with a dated source. Report the counts by repository and by month. The reviewer should keep the raw list. The entry should be dated and signed by the reviewer.",
      "## Sampling and collection",
      "Draw the sample from the merge or deploy log, not from the changes the team remembers. Record the export date and the filter. Include more than one service and one month. The entry should be dated and signed by the reviewer.",
      "Collect the record and the supporting note for each case. If one is missing, record that gap as a finding. The study should not rely on the lead's memory. The entry should be dated and signed by the reviewer.",
      "## Findings and reporting",
      "Present the distribution before naming a cause. A cluster with one service may point to a template, while a cluster in one month may point to a busy period. Read a few records behind the largest group. The entry should be dated and signed by the reviewer.",
      "Report the exceptions and one action with an owner. A report without an action is a description, not a control. The entry should be dated and signed by the reviewer. The source note should stay with the record.",
      "## Limits and next action",
      "The review measures the record, not the code quality. A complete entry can still hide a problem, and a missing one does not prove one. The sample is local and should not be generalized. The entry should be dated and signed by the reviewer.",
      "Choose one repair, name the owner, and test it on the next set of records. Keep the definitions stable so the next review can compare like with like. The entry should be dated and signed by the reviewer. The source note should stay with the record."
    ],
    "takeaways": [
      "Use the record as the unit.",
      "Separate a missing element from a weak one.",
      "Require a dated source.",
      "Test one repair."
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
    "slug": "what-share-of-repositories-lack-a-code-ownership-map",
    "title": "What share of repositories lack a code ownership map?",
    "excerpt": "A local method for measuring repositories that lack a current ownership map.",
    "topic": "Ownership records",
    "published": "2026-11-23",
    "hero": "/nov23/research/what-share-of-repositories-lack-a-code-ownership-map.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the record includes the element named in the title. The unit is one record for one change. The evidence is the log, the pull request, and the review note. The result describes one repository and one period.",
      "Include records created during the review window for the process in scope. Exclude records that cannot be matched to a change. Record the source and the date. If the team changes its procedure, split the sample.",
      "## Definitions and evidence",
      "Define the element before reviewing any record. A value without a date, an owner, or a source is not complete. Record a missing element separately from an element that is present but weak. The entry should be dated and signed by the reviewer.",
      "Measure the number of records, the share with the element, and the share with a dated source. Report the counts by repository and by month. The reviewer should keep the raw list. The entry should be dated and signed by the reviewer.",
      "## Sampling and collection",
      "Draw the sample from the merge or deploy log, not from the changes the team remembers. Record the export date and the filter. Include more than one service and one month. The entry should be dated and signed by the reviewer.",
      "Collect the record and the supporting note for each case. If one is missing, record that gap as a finding. The study should not rely on the lead's memory. The entry should be dated and signed by the reviewer.",
      "## Findings and reporting",
      "Present the distribution before naming a cause. A cluster with one service may point to a template, while a cluster in one month may point to a busy period. Read a few records behind the largest group. The entry should be dated and signed by the reviewer.",
      "Report the exceptions and one action with an owner. A report without an action is a description, not a control. The entry should be dated and signed by the reviewer. The source note should stay with the record.",
      "## Limits and next action",
      "The review measures the record, not the code quality. A complete entry can still hide a problem, and a missing one does not prove one. The sample is local and should not be generalized. The entry should be dated and signed by the reviewer.",
      "Choose one repair, name the owner, and test it on the next set of records. Keep the definitions stable so the next review can compare like with like. The entry should be dated and signed by the reviewer. The source note should stay with the record."
    ],
    "takeaways": [
      "Use the record as the unit.",
      "Separate a missing element from a weak one.",
      "Require a dated source.",
      "Test one repair."
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
    "slug": "how-often-do-staging-bugs-lack-a-release-reference",
    "title": "How often do staging bugs lack a release reference?",
    "excerpt": "A local method for measuring staging bugs closed without a release reference.",
    "topic": "Bug records",
    "published": "2026-11-23",
    "hero": "/nov23/research/how-often-do-staging-bugs-lack-a-release-reference.webp",
    "body": [
      "## Question and scope",
      "This review asks how often the record includes the element named in the title. The unit is one record for one change. The evidence is the log, the pull request, and the review note. The result describes one repository and one period.",
      "Include records created during the review window for the process in scope. Exclude records that cannot be matched to a change. Record the source and the date. If the team changes its procedure, split the sample.",
      "## Definitions and evidence",
      "Define the element before reviewing any record. A value without a date, an owner, or a source is not complete. Record a missing element separately from an element that is present but weak. The entry should be dated and signed by the reviewer.",
      "Measure the number of records, the share with the element, and the share with a dated source. Report the counts by repository and by month. The reviewer should keep the raw list. The entry should be dated and signed by the reviewer.",
      "## Sampling and collection",
      "Draw the sample from the merge or deploy log, not from the changes the team remembers. Record the export date and the filter. Include more than one service and one month. The entry should be dated and signed by the reviewer.",
      "Collect the record and the supporting note for each case. If one is missing, record that gap as a finding. The study should not rely on the lead's memory. The entry should be dated and signed by the reviewer.",
      "## Findings and reporting",
      "Present the distribution before naming a cause. A cluster with one service may point to a template, while a cluster in one month may point to a busy period. Read a few records behind the largest group. The entry should be dated and signed by the reviewer.",
      "Report the exceptions and one action with an owner. A report without an action is a description, not a control. The entry should be dated and signed by the reviewer. The source note should stay with the record.",
      "## Limits and next action",
      "The review measures the record, not the code quality. A complete entry can still hide a problem, and a missing one does not prove one. The sample is local and should not be generalized. The entry should be dated and signed by the reviewer.",
      "Choose one repair, name the owner, and test it on the next set of records. Keep the definitions stable so the next review can compare like with like. The entry should be dated and signed by the reviewer. The source note should stay with the record."
    ],
    "takeaways": [
      "Use the record as the unit.",
      "Separate a missing element from a weak one.",
      "Require a dated source.",
      "Test one repair."
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
