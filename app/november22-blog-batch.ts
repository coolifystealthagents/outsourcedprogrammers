export const november22BlogBatch = [
  {
    "slug": "build-a-code-review-evidence-log-for-delegated-developers",
    "title": "Build a code-review evidence log for delegated developers",
    "excerpt": "A code-review log that ties each pull request to the ticket, the reviewer, the test evidence, and the decision, so an outsourced change is reviewable after the merge.",
    "minutes": 8,
    "published": "2026-11-22",
    "body": [
      "## Open the record with the ticket and the change",
      "Start the log with the ticket identifier, the pull request, the author, and the date the change was opened. Read the ticket description to confirm the change matches the requested behavior. Record the files and the modules the diff touches. A reviewer who cannot find the ticket cannot judge whether the change is in scope.",
      "Record the risk level the team assigns, such as low, medium, or high, and the reason. A migration or an authentication change needs a different review than a copy edit. Note the reviewer who is qualified for that risk. The log should show why the review depth matches the change.",
      "## Record the test and the evidence",
      "Ask the author to record the tests that were run, the environment, and the result. Note any test that was skipped and the reason. Link the build or the CI run rather than pasting a screenshot that cannot be checked. Evidence should let the reviewer repeat the result.",
      "Check that the change has a test for the behavior it claims to add or fix. A refactor may rely on existing tests, but the log should say which ones. Record the coverage gap when a test is missing. The reviewer can then decide whether to block the merge.",
      "## Record the review decision and the comments",
      "Record each review comment with the file, the line, and whether it was resolved. A comment that is marked resolved without a reply is not evidence of a fix. Note the reviewer who resolved it. The log should show the conversation, not only the final approval.",
      "Record the final decision, the approver, and the time. Note any condition attached to the approval, such as a follow-up ticket. A conditional approval is not the same as a clean approval. The log should keep the condition visible until it closes.",
      "## Review the log for merges without evidence",
      "Sample merged pull requests each month and check them against the log. Record the missing ticket, test, or reviewer. A change that merged without evidence is the finding, even when the code looks correct. Report the count by team and risk level.",
      "Review the pattern with the delivery lead and choose one fix, such as a pull-request template or a required check. Record the change and the date. The next review should show whether the same gap repeats. A log that is never read is only a filing exercise."
    ]
  },
  {
    "slug": "set-a-staging-environment-access-checklist-for-an-outsourced-dev-team",
    "title": "Set a staging environment access checklist for an outsourced dev team",
    "excerpt": "A staging access checklist that names each environment, the role, the expiry, and the removal step, so a contractor can test without holding production-like access indefinitely.",
    "minutes": 8,
    "published": "2026-11-22",
    "body": [
      "## Name the environment and the test task",
      "Record the environment, the service, and the test task the access supports. A request for staging without a task is a request for general access. Note the release or ticket that needs the test. The checklist should connect the account to a specific piece of work.",
      "Separate a read-only test from a test that writes or deletes data. The write case needs a narrower window and a named reviewer. Record the permission level and the reason. A tester who can delete a shared staging database can block the whole team.",
      "## Create a named account with a scoped role",
      "Use the contractor's named identity and the team's role mapping. Record the account, the role, and the approver. Do not share a teammate's credential or a service account. The log should let the team disable one person without guessing.",
      "Grant the role on the specific project or namespace rather than the whole platform. Record the scope and the resources excluded. A staging grant that reaches production data is a production grant with a different label. The reviewer should check the boundary.",
      "## Set the expiry and the removal owner",
      "Give the grant an expiry date tied to the test window, even when the contract is open-ended. Record the date and the person who will remove the access. A staging account with no expiry becomes a permanent credential. The checklist should flag the grant before it lapses.",
      "Record the removal when the test ends, the contractor leaves, or the project closes. Note the method and the confirmation. A removal that is not dated cannot be distinguished from a forgotten account. The next access review should start from the removal record.",
      "## Review the access before each release",
      "Compare the staging access list with the active testers and the current release plan. Record the accounts with no active task and the ones that exceed the role. Remove or downgrade the access before the release window. The review should be short enough to run every cycle.",
      "Record the review date, the reviewer, and the changes. Share the list with the delivery lead and the client security contact. A staging environment that holds customer-like data deserves the same discipline as production. The next review should use the current list."
    ]
  },
  {
    "slug": "create-a-bug-triage-handoff-note-for-a-delegated-qa-desk",
    "title": "Create a bug-triage handoff note for a delegated QA desk",
    "excerpt": "A bug handoff note that records the environment, the reproduction steps, the evidence, the severity, and the owner, so a delegated tester can pass a defect without a second conversation.",
    "minutes": 7,
    "published": "2026-11-22",
    "body": [
      "## Record the build and the environment",
      "Start with the build number, the environment, the browser or device, and the account role used in the test. A defect that only appears on one build is not reproducible on another. Record the time and the data set. The note should let a developer rebuild the same conditions.",
      "Note any feature flag, configuration, or test data that affects the result. A defect that depends on a flag may be invisible in the default environment. Record the flag state and the person who set it. The note should separate the product behavior from the test setup.",
      "## Write reproduction steps a second person can follow",
      "Write each step as an action and an observed result, starting from a known state. Avoid a summary such as checkout fails. Record the expected result and the actual result side by side. A developer should be able to follow the steps without asking the tester.",
      "Record what was tried and did not reproduce the issue, such as a different browser or a fresh account. A negative result is useful evidence. Note the attempt and the outcome. The note should show the boundary of the defect, not only the first sighting.",
      "## Attach the evidence and set the severity",
      "Attach the log, the network trace, the screenshot, or the recording that shows the failure. Record the timestamp and the environment for each attachment. A capture without a time is hard to match to a build. The note should let the reader verify the failure.",
      "Set the severity from the team guide, using impact and frequency. Record the affected users, the workaround, and the business risk. A severity chosen by feel invites a debate at triage. The note should show the factors behind the level.",
      "## Name the owner and the next action",
      "Assign the note to the person who will act next, not to a general queue. Record the action, such as fix, investigate, or request more data, and the date. A note assigned to everyone is assigned to no one. The handoff should close with a clear next step.",
      "Record the response and the status at the next triage. Note whether the defect was reproduced, deferred, or closed. A note that is never updated leaves the tester unsure. The log should show the outcome, not only the original report."
    ]
  },
  {
    "slug": "build-a-release-readiness-checklist-with-named-approvers",
    "title": "Build a release readiness checklist with named approvers",
    "excerpt": "A release checklist that ties each change to a test result, a rollback plan, a named approver, and a communication step, so an outsourced release is not approved by silence.",
    "minutes": 8,
    "published": "2026-11-22",
    "body": [
      "## List the changes and their evidence",
      "Record each ticket and pull request included in the release, with the test result and the environment. A release that lists only a version number hides the changes inside it. Note any change that was added after the freeze. The checklist should show what is actually shipping.",
      "Mark the changes that touch authentication, payments, data migration, or permissions. Those changes need a named reviewer and a specific test. Record the reviewer and the evidence. A release checklist that treats every change the same misses the risk that matters.",
      "## Name the approver and the decision",
      "Record the person who approves the release, the time, and the scope of the approval. A team name is not an approver. Note any condition, such as a feature flag or a restricted rollout. The checklist should show who accepted the risk.",
      "Separate the technical approval from the product approval when the policy requires both. Record each decision and the person who made it. A release approved only by the delivery lead may lack the product view. The checklist should not merge two different accountabilities.",
      "## Record the rollback and the communication",
      "Write the rollback steps and the person who will run them. Record the time to roll back and the data that may need repair. A rollback plan that has never been tested is a hope. The checklist should show the last test date.",
      "Confirm the customer notice, the support briefing, and the status page update. Record the owner and the send time. A release that surprises support creates a second incident. The checklist should close the communication before the deploy starts.",
      "## Review the release after it ships",
      "Record the deploy time, the monitoring window, and the first error signal. Note any rollback or hotfix and the reason. A release record that ends at deploy misses the result. The checklist should show what happened after the change.",
      "Review the release for missing evidence, late changes, and approval gaps. Record one change and the owner. The next release should start from the improved checklist. A recurring review keeps the process from becoming a formality."
    ]
  },
  {
    "slug": "set-a-repository-access-review-cadence-for-contractor-accounts",
    "title": "Set a repository access review cadence for contractor accounts",
    "excerpt": "A repository access review that ties each contractor account to a role, a project, an expiry, and a reviewer, so code access does not outlive the engagement.",
    "minutes": 7,
    "published": "2026-11-22",
    "body": [
      "## List the account and the repository scope",
      "Record the contractor, the organization account, the repositories, and the role. Note the project and the client who owns it. A list that names only a vendor cannot show which code the person can read. The review should start from the actual repository permissions.",
      "Separate read access from write, admin, and secret access. Record each level and the reason. A contractor who can change branch protection or read production secrets has a different risk from one who can open a pull request. The review should treat the levels separately.",
      "## Tie the access to the engagement",
      "Record the start date, the expected end date, and the manager who owns the engagement. Note any renewal or extension. An account with no end date becomes permanent by default. The review should flag the accounts that pass their date.",
      "Record the offboarding step for the repository, including the removal of tokens, SSH keys, and app installations. A disabled user account can leave a deploy key active. Note the person who checks each credential. The access list should include the non-human credentials.",
      "## Review admin and secret access first",
      "Review the administrators, the owners, and the accounts that can read secrets before the general list. Those permissions can change code, pipeline, or infrastructure without a pull request. Record the reviewer and the justification. A quarterly review that starts with the largest list runs out of time.",
      "Check the personal access tokens and the deploy keys against the engagement. Record the owner, the scope, and the expiry. A token with no owner is a credential nobody will remove. The review should revoke or rotate it before the next cycle.",
      "## Record the review and the removal",
      "Record the date, the reviewer, the accounts changed, and the accounts removed. Note the evidence, such as a screenshot or a system export. A review without a record cannot show that it happened. The next reviewer should start from the same list.",
      "Remove access at the end of the engagement and confirm the removal with the client. Record the time and the person who confirmed it. An account disabled a month later is a month of unnecessary access. The review should close the loop with the offboarding record."
    ]
  }
];

export const november22BlogDetails = {
  "build-a-code-review-evidence-log-for-delegated-developers": {
    "takeaways": [
      "Record the ticket, the diff, the reviewer, and the test evidence for every change.",
      "Separate a review comment from an approved change.",
      "Require the author and reviewer to name the risk they checked.",
      "Review the log monthly for merges without evidence."
    ],
    "readinessRows": [
      {
        "area": "Ticket link",
        "ready": "Every pull request names the ticket it implements.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Test evidence",
        "ready": "The author records the test run and the result.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Reviewer",
        "ready": "A named reviewer approves or requests changes.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "open-the-record-with-the-ticket-and-the-change",
        "title": "Open the record with the ticket and the change",
        "paragraphs": [
          "Start the log with the ticket identifier, the pull request, the author, and the date the change was opened. Read the ticket description to confirm the change matches the requested behavior. Record the files and the modules the diff touches. A reviewer who cannot find the ticket cannot judge whether the change is in scope.",
          "Record the risk level the team assigns, such as low, medium, or high, and the reason. A migration or an authentication change needs a different review than a copy edit. Note the reviewer who is qualified for that risk. The log should show why the review depth matches the change."
        ]
      },
      {
        "id": "record-the-test-and-the-evidence",
        "title": "Record the test and the evidence",
        "paragraphs": [
          "Ask the author to record the tests that were run, the environment, and the result. Note any test that was skipped and the reason. Link the build or the CI run rather than pasting a screenshot that cannot be checked. Evidence should let the reviewer repeat the result.",
          "Check that the change has a test for the behavior it claims to add or fix. A refactor may rely on existing tests, but the log should say which ones. Record the coverage gap when a test is missing. The reviewer can then decide whether to block the merge."
        ]
      },
      {
        "id": "record-the-review-decision-and-the-comments",
        "title": "Record the review decision and the comments",
        "paragraphs": [
          "Record each review comment with the file, the line, and whether it was resolved. A comment that is marked resolved without a reply is not evidence of a fix. Note the reviewer who resolved it. The log should show the conversation, not only the final approval.",
          "Record the final decision, the approver, and the time. Note any condition attached to the approval, such as a follow-up ticket. A conditional approval is not the same as a clean approval. The log should keep the condition visible until it closes."
        ]
      },
      {
        "id": "review-the-log-for-merges-without-evidence",
        "title": "Review the log for merges without evidence",
        "paragraphs": [
          "Sample merged pull requests each month and check them against the log. Record the missing ticket, test, or reviewer. A change that merged without evidence is the finding, even when the code looks correct. Report the count by team and risk level.",
          "Review the pattern with the delivery lead and choose one fix, such as a pull-request template or a required check. Record the change and the date. The next review should show whether the same gap repeats. A log that is never read is only a filing exercise."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "Pull requests and linked tickets."
      },
      {
        "label": "Output",
        "text": "A review log with evidence and a decision."
      },
      {
        "label": "Boundary",
        "text": "The reviewer does not approve product scope."
      }
    ],
    "faqs": [
      {
        "question": "q",
        "answer": "a"
      },
      {
        "question": "q",
        "answer": "a"
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development and review"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance used in code review"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role and its typical work"
      }
    ],
    "heroImage": "/nov22/blog/build-a-code-review-evidence-log-for-delegated-developers.webp"
  },
  "set-a-staging-environment-access-checklist-for-an-outsourced-dev-team": {
    "takeaways": [
      "Record the environment, the role, and the business reason for each grant.",
      "Use named accounts and the narrowest permission that supports testing.",
      "Give every staging grant an expiry date and a removal owner.",
      "Review the access list before each release cycle."
    ],
    "readinessRows": [
      {
        "area": "Environment",
        "ready": "The grant names staging and not production.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Role",
        "ready": "The permission matches the test task.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Expiry",
        "ready": "The grant has a date and an owner.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "name-the-environment-and-the-test-task",
        "title": "Name the environment and the test task",
        "paragraphs": [
          "Record the environment, the service, and the test task the access supports. A request for staging without a task is a request for general access. Note the release or ticket that needs the test. The checklist should connect the account to a specific piece of work.",
          "Separate a read-only test from a test that writes or deletes data. The write case needs a narrower window and a named reviewer. Record the permission level and the reason. A tester who can delete a shared staging database can block the whole team."
        ]
      },
      {
        "id": "create-a-named-account-with-a-scoped-role",
        "title": "Create a named account with a scoped role",
        "paragraphs": [
          "Use the contractor's named identity and the team's role mapping. Record the account, the role, and the approver. Do not share a teammate's credential or a service account. The log should let the team disable one person without guessing.",
          "Grant the role on the specific project or namespace rather than the whole platform. Record the scope and the resources excluded. A staging grant that reaches production data is a production grant with a different label. The reviewer should check the boundary."
        ]
      },
      {
        "id": "set-the-expiry-and-the-removal-owner",
        "title": "Set the expiry and the removal owner",
        "paragraphs": [
          "Give the grant an expiry date tied to the test window, even when the contract is open-ended. Record the date and the person who will remove the access. A staging account with no expiry becomes a permanent credential. The checklist should flag the grant before it lapses.",
          "Record the removal when the test ends, the contractor leaves, or the project closes. Note the method and the confirmation. A removal that is not dated cannot be distinguished from a forgotten account. The next access review should start from the removal record."
        ]
      },
      {
        "id": "review-the-access-before-each-release",
        "title": "Review the access before each release",
        "paragraphs": [
          "Compare the staging access list with the active testers and the current release plan. Record the accounts with no active task and the ones that exceed the role. Remove or downgrade the access before the release window. The review should be short enough to run every cycle.",
          "Record the review date, the reviewer, and the changes. Share the list with the delivery lead and the client security contact. A staging environment that holds customer-like data deserves the same discipline as production. The next review should use the current list."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "Test plans and environment requests."
      },
      {
        "label": "Output",
        "text": "A named account with a scoped role and expiry."
      },
      {
        "label": "Boundary",
        "text": "The lead does not grant production access."
      }
    ],
    "faqs": [
      {
        "question": "q",
        "answer": "a"
      },
      {
        "question": "q",
        "answer": "a"
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development and review"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance used in code review"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role and its typical work"
      }
    ],
    "heroImage": "/nov22/blog/set-a-staging-environment-access-checklist-for-an-outsourced-dev-team.webp"
  },
  "create-a-bug-triage-handoff-note-for-a-delegated-qa-desk": {
    "takeaways": [
      "Record the build, the environment, and the exact steps to reproduce.",
      "Attach the log, the screenshot, or the recording that shows the failure.",
      "State the severity and the user impact, not only the symptom.",
      "Name the owner and the next action before closing the note."
    ],
    "readinessRows": [
      {
        "area": "Reproduction",
        "ready": "A second person can follow the steps.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Evidence",
        "ready": "The failure is visible in a log or capture.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Owner",
        "ready": "The next action has a named person.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "record-the-build-and-the-environment",
        "title": "Record the build and the environment",
        "paragraphs": [
          "Start with the build number, the environment, the browser or device, and the account role used in the test. A defect that only appears on one build is not reproducible on another. Record the time and the data set. The note should let a developer rebuild the same conditions.",
          "Note any feature flag, configuration, or test data that affects the result. A defect that depends on a flag may be invisible in the default environment. Record the flag state and the person who set it. The note should separate the product behavior from the test setup."
        ]
      },
      {
        "id": "write-reproduction-steps-a-second-person-can-follow",
        "title": "Write reproduction steps a second person can follow",
        "paragraphs": [
          "Write each step as an action and an observed result, starting from a known state. Avoid a summary such as checkout fails. Record the expected result and the actual result side by side. A developer should be able to follow the steps without asking the tester.",
          "Record what was tried and did not reproduce the issue, such as a different browser or a fresh account. A negative result is useful evidence. Note the attempt and the outcome. The note should show the boundary of the defect, not only the first sighting."
        ]
      },
      {
        "id": "attach-the-evidence-and-set-the-severity",
        "title": "Attach the evidence and set the severity",
        "paragraphs": [
          "Attach the log, the network trace, the screenshot, or the recording that shows the failure. Record the timestamp and the environment for each attachment. A capture without a time is hard to match to a build. The note should let the reader verify the failure.",
          "Set the severity from the team guide, using impact and frequency. Record the affected users, the workaround, and the business risk. A severity chosen by feel invites a debate at triage. The note should show the factors behind the level."
        ]
      },
      {
        "id": "name-the-owner-and-the-next-action",
        "title": "Name the owner and the next action",
        "paragraphs": [
          "Assign the note to the person who will act next, not to a general queue. Record the action, such as fix, investigate, or request more data, and the date. A note assigned to everyone is assigned to no one. The handoff should close with a clear next step.",
          "Record the response and the status at the next triage. Note whether the defect was reproduced, deferred, or closed. A note that is never updated leaves the tester unsure. The log should show the outcome, not only the original report."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "Test results and user reports."
      },
      {
        "label": "Output",
        "text": "A reproducer with evidence and an owner."
      },
      {
        "label": "Boundary",
        "text": "QA does not set the release date."
      }
    ],
    "faqs": [
      {
        "question": "q",
        "answer": "a"
      },
      {
        "question": "q",
        "answer": "a"
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development and review"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance used in code review"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role and its typical work"
      }
    ],
    "heroImage": "/nov22/blog/create-a-bug-triage-handoff-note-for-a-delegated-qa-desk.webp"
  },
  "build-a-release-readiness-checklist-with-named-approvers": {
    "takeaways": [
      "List the changes in the release and the test evidence for each one.",
      "Name the person who approves the release, not the team.",
      "Record the rollback plan and the person who will run it.",
      "Confirm the customer and support communication before deploy."
    ],
    "readinessRows": [
      {
        "area": "Change list",
        "ready": "Every change has a ticket and a test result.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Rollback",
        "ready": "A tested path exists and has an owner.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Approval",
        "ready": "A named person accepts the release.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "list-the-changes-and-their-evidence",
        "title": "List the changes and their evidence",
        "paragraphs": [
          "Record each ticket and pull request included in the release, with the test result and the environment. A release that lists only a version number hides the changes inside it. Note any change that was added after the freeze. The checklist should show what is actually shipping.",
          "Mark the changes that touch authentication, payments, data migration, or permissions. Those changes need a named reviewer and a specific test. Record the reviewer and the evidence. A release checklist that treats every change the same misses the risk that matters."
        ]
      },
      {
        "id": "name-the-approver-and-the-decision",
        "title": "Name the approver and the decision",
        "paragraphs": [
          "Record the person who approves the release, the time, and the scope of the approval. A team name is not an approver. Note any condition, such as a feature flag or a restricted rollout. The checklist should show who accepted the risk.",
          "Separate the technical approval from the product approval when the policy requires both. Record each decision and the person who made it. A release approved only by the delivery lead may lack the product view. The checklist should not merge two different accountabilities."
        ]
      },
      {
        "id": "record-the-rollback-and-the-communication",
        "title": "Record the rollback and the communication",
        "paragraphs": [
          "Write the rollback steps and the person who will run them. Record the time to roll back and the data that may need repair. A rollback plan that has never been tested is a hope. The checklist should show the last test date.",
          "Confirm the customer notice, the support briefing, and the status page update. Record the owner and the send time. A release that surprises support creates a second incident. The checklist should close the communication before the deploy starts."
        ]
      },
      {
        "id": "review-the-release-after-it-ships",
        "title": "Review the release after it ships",
        "paragraphs": [
          "Record the deploy time, the monitoring window, and the first error signal. Note any rollback or hotfix and the reason. A release record that ends at deploy misses the result. The checklist should show what happened after the change.",
          "Review the release for missing evidence, late changes, and approval gaps. Record one change and the owner. The next release should start from the improved checklist. A recurring review keeps the process from becoming a formality."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "Merged changes and test results."
      },
      {
        "label": "Output",
        "text": "A signed release record with a rollback owner."
      },
      {
        "label": "Boundary",
        "text": "The delivery lead does not approve product risk alone."
      }
    ],
    "faqs": [
      {
        "question": "q",
        "answer": "a"
      },
      {
        "question": "q",
        "answer": "a"
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development and review"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance used in code review"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role and its typical work"
      }
    ],
    "heroImage": "/nov22/blog/build-a-release-readiness-checklist-with-named-approvers.webp"
  },
  "set-a-repository-access-review-cadence-for-contractor-accounts": {
    "takeaways": [
      "List each contractor account, the repositories, and the role.",
      "Remove access at the end of the engagement, not after the next audit.",
      "Review admin and secret access separately from read access.",
      "Record the reviewer and the date for every change."
    ],
    "readinessRows": [
      {
        "area": "Account",
        "ready": "The contractor has a named identity.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Scope",
        "ready": "Access matches the project and the role.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Expiry",
        "ready": "The engagement end date is recorded.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "list-the-account-and-the-repository-scope",
        "title": "List the account and the repository scope",
        "paragraphs": [
          "Record the contractor, the organization account, the repositories, and the role. Note the project and the client who owns it. A list that names only a vendor cannot show which code the person can read. The review should start from the actual repository permissions.",
          "Separate read access from write, admin, and secret access. Record each level and the reason. A contractor who can change branch protection or read production secrets has a different risk from one who can open a pull request. The review should treat the levels separately."
        ]
      },
      {
        "id": "tie-the-access-to-the-engagement",
        "title": "Tie the access to the engagement",
        "paragraphs": [
          "Record the start date, the expected end date, and the manager who owns the engagement. Note any renewal or extension. An account with no end date becomes permanent by default. The review should flag the accounts that pass their date.",
          "Record the offboarding step for the repository, including the removal of tokens, SSH keys, and app installations. A disabled user account can leave a deploy key active. Note the person who checks each credential. The access list should include the non-human credentials."
        ]
      },
      {
        "id": "review-admin-and-secret-access-first",
        "title": "Review admin and secret access first",
        "paragraphs": [
          "Review the administrators, the owners, and the accounts that can read secrets before the general list. Those permissions can change code, pipeline, or infrastructure without a pull request. Record the reviewer and the justification. A quarterly review that starts with the largest list runs out of time.",
          "Check the personal access tokens and the deploy keys against the engagement. Record the owner, the scope, and the expiry. A token with no owner is a credential nobody will remove. The review should revoke or rotate it before the next cycle."
        ]
      },
      {
        "id": "record-the-review-and-the-removal",
        "title": "Record the review and the removal",
        "paragraphs": [
          "Record the date, the reviewer, the accounts changed, and the accounts removed. Note the evidence, such as a screenshot or a system export. A review without a record cannot show that it happened. The next reviewer should start from the same list.",
          "Remove access at the end of the engagement and confirm the removal with the client. Record the time and the person who confirmed it. An account disabled a month later is a month of unnecessary access. The review should close the loop with the offboarding record."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "Contracts and project assignments."
      },
      {
        "label": "Output",
        "text": "A current access list with a reviewer."
      },
      {
        "label": "Boundary",
        "text": "The reviewer does not change the contract."
      }
    ],
    "faqs": [
      {
        "question": "q",
        "answer": "a"
      },
      {
        "question": "q",
        "answer": "a"
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development and review"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance used in code review"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role and its typical work"
      }
    ],
    "heroImage": "/nov22/blog/set-a-repository-access-review-cadence-for-contractor-accounts.webp"
  }
};
