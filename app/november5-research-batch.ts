import type { ResearchPost } from './fleet-content';

export const november5ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test",
    "title": "How often do outsourced pull requests arrive without a reproducible test?",
    "excerpt": "A measurement protocol for checking whether an outsourced pull request includes a test a reviewer can run, with definitions, sampling, and reporting.",
    "topic": "Pull request test evidence",
    "published": "2026-11-05",
    "hero": "/nov05/research/how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test.webp",
    "body": [
      "This protocol asks how often an outsourced pull request arrives without a reproducible test that a reviewer can run. The unit is one pull request submitted for review during the observation window. The study measures whether the change includes a test, whether the test fails before the change, and whether the reviewer can reproduce the result from the description. It does not evaluate the quality of the implementation or the severity of the underlying defect.",
      "Set the scope to one repository, one review team, and one test framework version. Record the branch protection rules, the continuous integration configuration, and the pull request template in force at the start. If the template changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required field can look like an improvement in engineer behavior when it is only a change in the form.",
      "Define the population as every pull request that reached a review decision during the window, including requests that were closed without merging. The unit is the pull request, identified by the repository and the pull request number. A request that is reopened after new commits remains one unit with a revision history. A separate request for a different behavior is a new unit.",
      "Record the author's team, the change type, the size band, and whether the change touches security-sensitive code. These strata matter because a documentation change and an authentication change carry different evidence expectations. Include draft pull requests that were reviewed, because early review is part of the process. Test the unit definition on two ordinary requests before collection begins.",
      "Define a reproducible test as one a reviewer can run from the pull request description using the stated command, environment, and data. Define a failing-first test as one that fails on the parent commit and passes on the change. Define a reviewable test as one that checks the behavior named in the description rather than an unrelated internal detail. Define a missing test as a change with no automated check for the stated behavior.",
      "Do not count a screenshot of a passing test run as a reproducible test unless the command and environment are also stated. Do not count a test that passes before the change as evidence of the fix. A test that only checks that the application starts is not a test of the behavior. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "For each pull request, capture the repository, the number, the author team, the change type, the size band, and the test command. Add whether a test was added, whether it was run in continuous integration, and whether the failing-first result was recorded. Record the reviewer's reproduction result and the time spent trying to reproduce it. Keep the record with the review packet for the next sample.",
      "Also capture whether the description names the expected behavior and the environment. These fields help explain a request that has a test but no usable instructions. If the test was run only locally, record the local environment and the reason it was not run in the shared pipeline. A second reviewer should be able to repeat the classification from the pull request record. Keep the record with the review packet for the next sample.",
      "Draw the sample from the review system rather than from a list of memorable bugs. Record the export date, the filters, the row count, and the selection rule. Include requests from every author team and every size band so the result is not dominated by one group. If the population is ordered by review date, a fixed interval spreads the sample across the window.",
      "Collect the pull request as it existed at the review decision, not as it looks after later force-pushes. If the description or test changed after the review, record the edit time and analyze the reviewed version separately. Do not infer a missing test from the eventual fix. Note the collection date separately from the review date so the reader can see how much of the record has aged.",
      "A useful additional measure is the reviewer's confidence in the test. Ask the reviewer to rate whether the test would catch the behavior if it regressed. A test that runs but does not assert the behavior is weak evidence. Record the rating, the reason, and the date of the check. That signal helps the owner target the weakest part of the test suite and compare it with the reproduction rate.",
      "Report the number of pull requests, the share with a test, the share with a failing-first test, and the share the reviewer could reproduce. Show the counts by author team and change type. Present the median reviewer time spent reproducing and the share of requests that required a question. Use the same denominator for every rate and show the number of requests with incomplete evidence.",
      "Inspect the requests without a reproducible test and describe the pattern without naming the author. A cluster in one change type may point to a missing template, while a cluster in one team may point to a different definition of done. Compare the result with the size band, because a large change may be harder to test than a small one. Report the drafts and the closed requests separately.",
      "A useful additional view is the share of tests that failed in continuous integration before the change was merged. A test that exists but never runs is not evidence. Show the pipeline result beside the test presence and describe the gap. That view helps the owner distinguish a missing test from a test that is not enforced.",
      "A second view is the age of the test relative to the code. A test added months after the behavior can still be useful, but it may not prove that the change caused the fix. Record the test creation date and whether it was added in the same pull request. That detail separates a regression test from a retrospective check.",
      "The record cannot show whether the engineer understood the behavior or whether the test covers the real risk. It can show only what was written, run, and observed. A missing test is not proof of a careless engineer, and a present test is not proof of correctness. The protocol also cannot capture a manual verification that was discussed in a call and never written down.",
      "Pull request systems can omit force-pushed commits, deleted branches, and review comments that were resolved. A test that was removed before the review decision may leave no trace. Record those cases and their treatment instead of dropping them silently. If the reviewer also wrote the change, note the independence limitation and analyze that subgroup separately.",
      "The review should also distinguish a missing test from a test that cannot run in the reviewer's environment. A test that requires a private dataset or a production credential is not reproducible for most reviewers. Record the dependency and the workaround. That gap is a tooling problem as much as an engineer problem.",
      "Give the result to the engineering lead and the client reviewer and ask them to choose one observable change. The change might be a required test command field, a failing-first check in the pipeline, or a rule that a change cannot enter review without a reproducible case. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the pipeline at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If test presence improved but reproduction did not, the instructions may still be unclear. If reproduction improved but escaped defects did not, the tests may be checking the wrong behavior. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "A final view is the share of tests that were changed in the same pull request as the behavior. A test that was weakened to pass is different from a test that was added to prove the change. Record whether assertions were removed or skipped. The owner can then decide whether the test policy or the review practice needs attention. Record the next review date with the sample."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub Docs, reviewing changes in pull requests",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "ISO/IEC/IEEE 29119 software testing",
        "https://www.iso.org/standard/45142.html"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "related": [
      "where-does-review-time-accumulate-in-a-distributed-engineering-team",
      "how-complete-is-migration-rollback-evidence-before-release"
    ]
  },
  {
    "slug": "where-does-review-time-accumulate-in-a-distributed-engineering-team",
    "title": "Where does review time accumulate in a distributed engineering team?",
    "excerpt": "A protocol for locating review delay by stage, reviewer, and time zone so an offshore team can fix the real bottleneck instead of adding meetings.",
    "topic": "Review time distribution",
    "published": "2026-11-05",
    "hero": "/nov05/research/where-does-review-time-accumulate-in-a-distributed-engineering-team.webp",
    "body": [
      "This protocol asks where review time accumulates in a distributed engineering team and which stage contributes most to the delay. The unit is one review cycle, identified by the pull request and the first review request. The study measures the time from ready-for-review to first response, from first response to approval, and from approval to merge. It does not evaluate the quality of the review comments or the correctness of the change.",
      "Set the scope to one repository, one reviewer group, and one time-zone arrangement. Record the review policy, the working hours, and the merge rules at the start. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new review requirement can look like a change in reviewer behavior when it is only a change in the rule.",
      "Define the population as every pull request that became ready for review during the window, including requests that were closed without merging. The unit is the review cycle, not the pull request, because a request can be reviewed, changed, and reviewed again. A second review after a substantial change is a new cycle with a link to the first. A comment-only review that does not change the code is part of the same cycle.",
      "Record the author's time zone, the reviewer's time zone, the change size, and the review type. These strata matter because a round-the-clock handoff and an overlapping-hours review carry different delays. Include drafts that were reviewed early, because early feedback is part of the cycle. Test the unit definition on two ordinary pull requests before collection begins.",
      "Define ready-for-review as the time the author removes the draft flag or requests review, not the time the branch was created. Define first response as the first substantive review comment or approval, not an automated check. Define approval as the state that satisfies the branch protection rule. Define merge as the time the change enters the main branch.",
      "Do not count a bot comment as a first response. Do not count a review request sent to a group as a named reviewer response. A review that is paused because the author is offline should be recorded with the pause and the resume time. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "For each cycle, capture the pull request number, the author, the reviewer, the time zones, the ready time, the first response time, the approval time, and the merge time. Add the change size, the number of review rounds, and the number of comments. Record whether the review was synchronous or asynchronous and whether a meeting was held. Keep the timestamp packet with the review sample.",
      "Also capture the wait time caused by automated checks and the wait time caused by missing information. These fields help explain a delay that is not the reviewer's fault. If a timestamp comes from a chat message rather than the review system, record the source and the message time. A second reviewer should be able to rebuild the cycle from the record. Keep the timestamp packet with the review sample.",
      "Draw the sample from the review system rather than from a list of slow pull requests. Record the export date, the filters, the row count, and the selection rule. Include cycles from every reviewer and every size band so the result is not dominated by one large change. If the population is ordered by ready time, a fixed interval spreads the sample across the window.",
      "Collect the timestamps as recorded by the system, not as remembered by the team. If a review happened in a meeting, record the meeting time and the participants. Do not reconstruct a missing response from the eventual approval. Note the collection date separately from the review date so the reader can see how much of the record has aged.",
      "A final measure is the share of review cycles that required a synchronous meeting to resolve. Meetings can be useful, but a high share may indicate an unclear written request. Show the meeting count beside the stage times, the attendees, and the outcome of each meeting. The owner can then decide whether to improve the request, the review guidance, or the meeting habit itself.",
      "Report the median and range for each stage: ready to first response, first response to approval, and approval to merge. Show the counts by reviewer time zone and change size. Present the share of cycles that waited more than one business day at each stage. Use the same denominator for every rate and show the number of cycles with incomplete timestamps.",
      "Inspect the longest cycles and describe which stage dominated without naming the reviewer. A cycle that waits mostly for first response points to reviewer capacity or notification, while one that waits after approval points to merge rules or release windows. Compare the result with the time-zone overlap, because a short overlap can concentrate delay. Report the meeting-driven reviews separately.",
      "A useful additional view is the number of review rounds per cycle. A cycle with many rounds may indicate an unclear initial request rather than a slow reviewer. Show the rounds beside the stage times and describe the pattern. That view helps the owner decide whether to improve the request, the review, or the merge path.",
      "The review should also separate time spent waiting for the author from time spent waiting for the reviewer. A request that is returned with questions and then waits for an answer is a different bottleneck from one that sits untouched. Record the handoff direction for each wait. That split prevents the team from optimizing the wrong stage.",
      "The record cannot show whether the reviewer was thinking about the change during the wait or whether the author was unavailable. It can show only the recorded timestamps. A long first-response time is not proof of neglect, and a short one is not proof of a thorough review. The protocol also cannot capture informal review that happened in a call and left no comment.",
      "Review systems can omit comments from deleted accounts, force-pushed commits, and approvals that were later dismissed. A cycle that was reset by a new commit may look longer than it felt. Record those cases and their treatment instead of dropping them silently. If the author and reviewer are the same person, note the independence limitation and analyze that subgroup separately.",
      "A useful comparison is the review time for changes that touch the same files as recent incidents. A hotspot file may attract more scrutiny and legitimately take longer. Show the hotspot status beside the stage times and describe the pattern. That context keeps a slow review from being treated as a performance problem.",
      "Give the result to the engineering lead and the reviewer group and ask them to choose one observable change. The change might be a notification rule, a reviewer rotation, a smaller change size, or a merge window. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the notification and the merge rule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If first response improved but approval did not, the review may be starting faster without finishing. If approval improved but merge did not, the release process may be the real constraint. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the reviewer's overall queue, including other repositories and meetings. A reviewer who looks slow on one pull request may be covering three services. Record the concurrent review load and describe the relationship. The owner can then decide whether to rotate reviewers or reduce the queue. Record the next review date with the sample."
    ],
    "sources": [
      [
        "GitHub Docs, reviewing changes in pull requests",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "ISO/IEC/IEEE 29119 software testing",
        "https://www.iso.org/standard/45142.html"
      ]
    ],
    "related": [
      "how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test",
      "how-complete-is-migration-rollback-evidence-before-release"
    ]
  },
  {
    "slug": "how-complete-is-migration-rollback-evidence-before-release",
    "title": "How complete is migration rollback evidence before release?",
    "excerpt": "A protocol for checking whether a database migration has a tested, documented rollback before it reaches production.",
    "topic": "Migration rollback evidence",
    "published": "2026-11-05",
    "hero": "/nov05/research/how-complete-is-migration-rollback-evidence-before-release.webp",
    "body": [
      "This protocol asks how complete the rollback evidence is for a database migration before release. The unit is one migration release, identified by the migration version and the target environment. The study measures whether the rollback plan exists, whether it was tested, and whether the backup and data-loss consequences are recorded. It does not evaluate whether the migration itself was necessary or well designed.",
      "Set the scope to one service, one database engine, and one release process. Record the migration tool, the backup policy, and the approval roles at the start. If the release process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new approval step can look like better evidence when it is only a new gate.",
      "Define the population as every migration that reached a production release decision during the window, including migrations that were postponed. The unit is the migration release, not the individual script, because a release can contain several ordered scripts. A migration that is reapplied after a rollback is a new unit with a link to the earlier release. A separate release for a different service is a new unit.",
      "Record the service, the migration type, the data volume, and the release window. These strata matter because a schema-only change and a data transformation carry different rollback risk. Include migrations that were released without a rollback plan, because the base rate is part of the finding. Test the unit definition on two ordinary releases before collection begins.",
      "Define a complete rollback plan as one that names the trigger, the commands, the backup, the expected duration, and the owner. Define a tested rollback as one that was executed in a staging copy with production-like data and a recorded result. Define a destructive change as one that removes or rewrites data in a way that cannot be reversed without the backup. Define a rollback gap as a missing element of the plan.",
      "Do not count a down script as a tested rollback. Do not count a backup that has never been restored as verified. A rollback that requires a manual step by a person who is not available is not complete. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "For each migration, capture the version, the service, the environment, the migration type, and the release date. Add the rollback plan reference, the backup time, the restore test result, the expected duration, and the named owner. Record whether the plan was tested and whether the data-loss consequence was documented. Store the packet with the migration release.",
      "Also capture the application version that depends on the migration and the deployment order. These fields help explain a rollback that would fail because the application still expects the new schema. If the backup is stored off-site, record the location and the retrieval time. A second reviewer should be able to reconstruct the release and the rollback path from the record. Store the packet with the migration release.",
      "Draw the sample from the migration system and the release log rather than from a list of incidents. Record the export date, the filters, the row count, and the selection rule. Include migrations from every service and every migration type so the result is not dominated by one team. If the population is ordered by release date, a fixed interval spreads the sample across the window.",
      "Collect the rollback plan as it existed at the release decision, not as it looks after later edits. If the plan was changed after an incident, record the change time and analyze the original separately. Do not infer a tested rollback from the absence of an incident. Note the collection date separately from the release date.",
      "A useful additional measure is the number of migrations that required an unplanned manual step during release. A manual step is not always a failure, but an unrecorded one is a gap. Record the step, the person, the time, and the system where the manual change was applied. That evidence helps the owner decide whether the pipeline, the runbook, or the release approval needs the change.",
      "Report the number of migrations, the share with a rollback plan, the share with a tested rollback, and the share with a verified backup. Show the counts by service and migration type. Present the median expected rollback duration and the share of plans that named an owner. Use the same denominator for every rate.",
      "Inspect the migrations with incomplete evidence and describe the pattern without naming the engineer. A cluster in one service may point to a missing template, while a cluster in one migration type may point to untested data transformations. Compare the result with the data volume, because a large transformation carries more risk. Report the postponed migrations separately.",
      "A useful additional view is the gap between the backup time and the release time. A backup taken days before the release may not reflect the latest data, especially if the service is active. Show the gap and describe the consequence. That view helps the owner decide whether the backup policy or the release window needs to change.",
      "The review should also compare the rollback plan with the application deploy order. A rollback that restores the schema before the old application version is live can still fail. Record the order and the person who confirms each step. That sequence is part of the evidence, not an implementation detail.",
      "The record cannot show whether the rollback would actually work under production load. It can show only what was planned and tested. A tested rollback in staging is not proof of a safe production recovery, and an untested one is not proof of failure. The protocol also cannot capture a manual recovery that was improvised during an incident.",
      "Migration systems can omit manual scripts, data fixes, and changes applied by a database administrator outside the pipeline. A release that looks complete may have an undocumented step. Record those cases and their treatment instead of dropping them silently. If the same person wrote the migration and approved the rollback, note the independence limitation and analyze that subgroup separately.",
      "A useful check is whether the rollback was rehearsed with a realistic data volume. A small staging table may restore in seconds while the production table takes hours. Record the row count and the restore duration. The owner can then judge whether the window is realistic.",
      "Give the result to the database owner and the release manager and ask them to choose one observable change. The change might be a required restore test, a backup freshness rule, or a release gate that blocks a destructive change without a plan. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the backup policy and the release gate at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If rollback plans improved but restore tests did not, the team may be writing documents without practicing recovery. If restore tests improved but release time rose, the new gate may need a faster path for low-risk changes. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the backup verification date, not only the backup creation date. A backup that has never been restored is an assumption. Show the last restore test and the result beside the backup time. That evidence turns a backup policy into a recovery capability. Record the next review date with the sample."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ],
      [
        "ISO/IEC/IEEE 29119 software testing",
        "https://www.iso.org/standard/45142.html"
      ]
    ],
    "related": [
      "how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test",
      "where-does-review-time-accumulate-in-a-distributed-engineering-team"
    ]
  },
  {
    "slug": "what-share-of-staging-access-grants-outlive-their-ticket",
    "title": "What share of staging access grants outlive their ticket?",
    "excerpt": "A protocol for measuring temporary staging access that remains active after the task closes, with a clear unit and a dated access review.",
    "topic": "Staging access lifetime",
    "published": "2026-11-05",
    "hero": "/nov05/research/what-share-of-staging-access-grants-outlive-their-ticket.webp",
    "body": [
      "This protocol asks what share of temporary staging access grants remain active after the ticket that justified them is closed. The unit is one access grant, identified by the person, the system, and the grant start time. The study measures the grant duration, the ticket close time, and whether the access was removed or reviewed at the expected date. It does not evaluate whether the person used the access appropriately.",
      "Set the scope to one staging environment, one identity provider, and one access request process. Record the role definitions, the approval rules, and the ticket system at the start. If the process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new expiry default can look like better behavior when it is only a new setting.",
      "Define the population as every temporary staging grant created during the window, including grants that were denied or withdrawn. The unit is the grant, not the person, because one person can hold several grants for different tasks. A grant that is extended remains one unit with a revision history. A new grant for a different system is a new unit.",
      "Record the role, the system, the requesting team, and whether the grant was time-bound at creation. These strata matter because a read-only grant and an administrative grant carry different risk. Include grants that were never used, because an unused grant is still standing access. Test the unit definition on two ordinary grants before collection begins.",
      "Define a temporary grant as one created for a specific ticket with an expected end date. Define the ticket close time as the time the work was marked complete or cancelled, not the last comment. Define an overdue grant as one that remains active more than a stated grace period after the ticket closes. Define a reviewed grant as one with a recorded decision to keep, reduce, or remove the access.",
      "Do not count a grant as removed when the account is disabled but the role remains assigned. Do not count a review as complete when the reviewer only opened the access page. A grant that is extended needs a new approval and a new end date. Each definition should include one positive example and one boundary example.",
      "For each grant, capture the person, the role, the system, the ticket, the request time, the approval time, the expected end date, and the actual removal time. Add whether the grant was reviewed and whether the ticket closed before or after the expected end date. Record the source system for each field and whether the value was observed or inferred. Keep the packet with the access review evidence.",
      "Also capture whether the grant was used during the period and whether it was broader than the task required. These fields help explain an overdue grant that was harmless in practice but still a control failure. If the removal was recorded in a ticket rather than the identity system, record both times. A second reviewer should be able to reconstruct the grant lifetime from the record. Keep the packet with the access review evidence.",
      "Draw the sample from the identity provider and the access request system rather than from a list of known exceptions. Record the export date, the filters, the row count, and the selection rule. Include grants from every role and every requesting team so the result is not dominated by one group. If the population is ordered by request time, a fixed interval spreads the sample across the window.",
      "Collect the grant as it existed at the ticket close, not as it looks after a later cleanup. If the access was removed during an audit, record the audit date and analyze the original overdue period separately. Do not reconstruct a missing removal from the absence of activity. Note the collection date separately from the grant date.",
      "A useful additional measure is the share of grants that were never used. An unused grant is an unnecessary exposure even when it is removed on time. Show the usage flag, the role, and the duration beside the request and describe the pattern. The owner can then decide whether the request form is too permissive or the role definition is too broad.",
      "Report the number of grants, the share removed by the expected date, the share overdue at ticket close, and the share still active at collection. Show the counts by role and requesting team. Present the median days overdue and the share of grants with a recorded review. Use the same denominator for every rate.",
      "Inspect the overdue grants and describe the pattern without naming the person. A cluster in one role may point to a default that is too broad, while a cluster in one team may point to a missing close step. Compare the result with the ticket type, because a long-running project may legitimately need a longer grant. Report the unused grants separately.",
      "A useful additional view is the gap between the expected end date and the actual removal. A grant that is removed a few days late is a different problem from one that remains for months. Show the distribution and describe the tail. That view helps the owner decide whether to change the default expiry or the close checklist.",
      "The review should also compare the grant with the role the ticket actually required. A read-only task served by an administrative grant is a least-privilege gap even when the grant was removed on time. Record the requested role and the granted role. That comparison shows whether the approval process is too broad.",
      "The record cannot show whether the person used the access outside the ticket or whether the access was necessary for the work. It can show only the grant and the removal timestamps. An overdue grant is not proof of misuse, and a timely removal is not proof of least privilege. The protocol also cannot capture access granted through a shared account or a direct database connection.",
      "Identity systems can omit role assignments inherited from a group, and tickets can be reopened after closure. A grant that looks overdue may belong to a reopened ticket. Record those cases and their treatment instead of dropping them silently. If the approver and the requester are the same person, note the independence limitation and analyze that subgroup separately.",
      "A useful check is whether the removal was confirmed in the identity system or only in the ticket. A ticket that says removed while the role remains assigned is a false close. Record both states and the person who verified the removal. That evidence prevents a clean-looking audit from hiding a standing grant.",
      "Give the result to the security owner and the access administrator and ask them to choose one observable change. The change might be a default expiry, a close-ticket reminder, or a weekly overdue report. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the default and the reminder at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If overdue grants fell but access requests rose, the default may be too short for legitimate work. If reviews improved but removals did not, the review may not include the removal action. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the access review cadence and who participates. A review that only the requester attends is not independent. Show the reviewer and the review date beside the grant. That context helps the owner decide whether the review is a real control or a formality. Record the next review date with the sample."
    ],
    "sources": [
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ]
    ],
    "related": [
      "how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test",
      "where-does-review-time-accumulate-in-a-distributed-engineering-team"
    ]
  },
  {
    "slug": "how-often-do-dependency-upgrades-change-supported-runtime-versions",
    "title": "How often do dependency upgrades change supported runtime versions?",
    "excerpt": "A protocol for checking whether a dependency upgrade silently changes the runtime or platform versions a service supports.",
    "topic": "Runtime version drift",
    "published": "2026-11-05",
    "hero": "/nov05/research/how-often-do-dependency-upgrades-change-supported-runtime-versions.webp",
    "body": [
      "This protocol asks how often a dependency upgrade changes the runtime or platform versions that a service supports. The unit is one dependency upgrade release, identified by the package, the old version, and the new version. The study measures whether the release notes declare a runtime change, whether the build and deployment configuration changed, and whether the change was verified in the target environment. It does not evaluate whether the upgrade was worth doing.",
      "Set the scope to one service, one package manager, and one deployment platform. Record the runtime versions in the build image, the production image, and the developer documentation at the start. If the platform changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A platform migration can look like dependency drift when it is only a separate change.",
      "Define the population as every dependency upgrade that reached a release decision during the window, including upgrades that were postponed. The unit is the upgrade release, not the package version, because a release can include several packages. A security patch applied separately is a new unit. A rollback and re-release is a new unit with a link to the earlier release.",
      "Record the package, the version change, the runtime, and the deployment platform. These strata matter because a patch upgrade and a major upgrade carry different compatibility risk. Include upgrades that were reverted, because the reversal is part of the process. Test the unit definition on two ordinary upgrades before collection begins.",
      "Define a runtime change as a change to the minimum or maximum supported version of the language, framework, operating system, or database. Define a declared change as one stated in the release notes or migration guide. Define a verified change as one observed in the build, deployment, or target environment. Define silent drift as a runtime change that was neither declared nor verified.",
      "Do not count a change to a development-only tool as a runtime change unless it affects the build output. Do not count a change that only updates a type definition without a runtime effect. A change that is declared but not verified is not silent, but it is still incomplete. Each definition should include one positive example and one boundary example.",
      "For each upgrade, capture the package, the old and new versions, the release date, the runtime before and after, and the platform before and after. Add whether the release notes declared a runtime change and whether the build configuration changed. Record the verification environment and the observed result. Keep the packet with the release record.",
      "Also capture whether the development documentation was updated and whether the change affected a supported customer environment. These fields help explain a runtime change that was technically valid but unsupported for a customer. If the version was inferred from a lockfile, record the lockfile date. A second reviewer should be able to reconstruct the compatibility change from the record. Keep the packet with the release record.",
      "Draw the sample from the dependency update system and the release log rather than from a list of incidents. Record the export date, the filters, the row count, and the selection rule. Include upgrades from every package group and every runtime so the result is not dominated by one ecosystem. If the population is ordered by release date, a fixed interval spreads the sample across the window.",
      "Collect the lockfile and build configuration as they existed at the release, not as they look after later edits. If the runtime was changed after the upgrade, record the separate change and analyze it independently. Do not infer a runtime change from the absence of an error. Note the collection date separately from the release date.",
      "A useful additional measure is the number of services that share the same runtime constraint. One upgrade can affect several services even when only one repository changes. Record the shared constraint, the services it covers, and the owner of the upgrade plan. That view helps the owner plan a coordinated upgrade instead of discovering the dependency during the next release window.",
      "Report the number of upgrades, the share with a declared runtime change, the share with a verified runtime change, and the share with silent drift. Show the counts by package group and runtime. Present the share of upgrades that updated the documentation and the share that affected a supported customer environment. Use the same denominator for every rate.",
      "Inspect the silent drift cases and describe the pattern without naming the engineer. A cluster in one package group may point to a missing release-note check, while a cluster in one runtime may point to a platform dependency. Compare the result with the upgrade type, because a major upgrade is more likely to change compatibility. Report the reverted upgrades separately.",
      "A useful additional view is the time between the upgrade and the documentation update. A runtime change that is verified but undocumented can surprise the next engineer or a customer. Show the gap and describe the consequence. That view helps the owner decide whether the documentation step belongs in the release gate.",
      "The review should also compare the declared support policy with the customer environments the service actually serves. A runtime version can be supported by the vendor but unsupported by a customer. Record the customer support matrix and the change. That comparison shows whether the upgrade needs a customer communication.",
      "The record cannot show whether the runtime change actually broke a customer workflow. It can show only whether the change was declared, verified, and documented. A declared change is not proof of compatibility, and a silent change is not proof of breakage. The protocol also cannot capture a customer environment that the team does not control.",
      "Release notes can be incomplete, and a package can change behavior without changing the declared runtime range. A lockfile update can resolve a different transitive version than the one reviewed. Record those cases and their treatment instead of dropping them silently. If the same person upgraded the package and verified the runtime, note the independence limitation.",
      "A useful check is whether the build image and the production image use the same runtime. A build that passes on a newer runtime can still fail in production if the images differ. Record both versions and the verification environment. That gap is a deployment problem that a dependency review can catch early.",
      "Give the result to the engineering lead and the platform owner and ask them to choose one observable change. The change might be a required runtime check, a documentation update in the release template, or a supported-version matrix review. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the runtime policy at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If declared changes improved but verification did not, the team may be reading notes without testing the target environment. If verification improved but documentation did not, the handoff may still be incomplete. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the time between the dependency release and the team's adoption. A very old dependency may carry unpatched vulnerabilities, while a very new one may not have ecosystem support. Show the age and the support status beside the upgrade decision. That context helps the owner choose a sustainable cadence. Record the next review date with the sample."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test",
      "where-does-review-time-accumulate-in-a-distributed-engineering-team"
    ]
  }
];
