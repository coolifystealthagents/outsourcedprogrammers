export const november10BlogBatch = [
  {
    "slug": "write-a-production-access-revocation-checklist-for-an-offshore-contractor-exit",
    "title": "Write a production access revocation checklist for an offshore contractor exit",
    "excerpt": "A checklist that inventories every access path, revokes production credentials first, and proves the old login no longer works.",
    "minutes": 8,
    "published": "2026-11-10",
    "body": [
      "## Start the exit before the last working day",
      "An access revocation checklist should begin before the contractor's final day, not after the badge is returned. The client owner should name the exit date, the systems in scope, and the person who will confirm each revocation. Waiting until the last hour turns a routine offboarding into an emergency. A written date also gives the contractor time to hand over open work without keeping access alive.",
      "Separate a planned exit from an immediate removal. A planned exit can follow a short handover window, while a termination for cause may require same-hour removal. Write both paths and the person who can choose between them. The checklist should not assume that every exit follows the same timetable.",
      "## Inventory every access path",
      "List the accounts, groups, tokens, and integrations the contractor can use, including the ones created for a single project. Include the source control account, cloud console, database reader, ticket system, chat workspace, and any vendor portal. A checklist that covers only the company directory will miss the credentials that matter most. Add the owner of each system and the command or screen used to revoke access.",
      "Check for indirect access through shared groups, delegated mailboxes, and service accounts that the contractor helped create. A personal account can be disabled while a personal access token remains valid for months. Record the token identifier and the revocation step. The same review should look at SSH keys, CI secrets, and package registry tokens.",
      "## Revoke credentials in a fixed order",
      "Revoke the highest-risk access first, such as production consoles, database credentials, and deployment tokens. Then remove the source control account and the identity provider session. Finally remove the lower-risk collaboration tools and distribution lists. A fixed order prevents the team from closing the ticket before the dangerous access is gone. Record the time of each step.",
      "Invalidate active sessions as well as the password. Many systems keep a session alive after an account is disabled, and a refresh token can outlive the visible login. Force a sign-out, revoke the refresh tokens, and rotate any shared secret the contractor could read. Confirm the result by trying the old credential from a test machine.",
      "## Reassign ownership of work and artifacts",
      "Find the branches, repositories, dashboards, and documents that still name the contractor as owner. Transfer each one to a named employee and record the date. A dashboard that only the departed contractor can edit becomes an orphan within a week. Include scheduled jobs and webhooks that use the contractor's personal token.",
      "Review the commit history for email addresses and signing keys tied to the contractor. Replace any personal address in automation with a team address. Check that the contractor is not the only approver on a protected branch or a production environment. The handover is complete when no critical path depends on the departing account.",
      "## Verify with evidence, not a checklist tick",
      "Ask a second person to test the old credentials after revocation. The test should cover the identity provider, source control, cloud console, database, and one collaboration tool. Record the result, the tester, and the time. A checklist marked complete without a test is only a claim.",
      "Compare the revoked account list with the access inventory from the first step. Any account without a revocation record should stay on the open list. Store the evidence with the exit record so an auditor can reconstruct the process. The next exit should start from this evidence, not from a blank form.",
      "## Review the exit and close the gaps",
      "After the exit, review which step took the longest and which access path was missed. Ask the handover owner whether anything was unclear. Record one change to the checklist and a date to test it. An exit that produces no change is either perfect or not being examined honestly.",
      "Run a quarterly sample of recent exits and try one old credential from each. The sample should include a planned exit and an urgent removal. Report the result to the client owner with the number tested and the number still active. A revocation process that is never sampled drifts quietly."
    ]
  },
  {
    "slug": "set-a-shared-admin-account-ban-for-outsourced-production-work",
    "title": "Set a shared admin account ban for outsourced production work",
    "excerpt": "A ban that defines the shared credential, replaces human use with named roles, and proves the retired login cannot return.",
    "minutes": 8,
    "published": "2026-11-10",
    "body": [
      "## Define what counts as a shared admin account",
      "A shared admin account is any login that more than one person can use without a named identity behind it. It includes a generic administrator login, a posted password in a vault, and a service account that people borrow for convenience. Write the definition so the team can classify an account without debate. The ban should cover production, staging with customer data, and any system that can reach them.",
      "Distinguish a shared account from a shared role. A role can be assigned to several named users, while an account is a single credential that hides who acted. The ban targets the credential, not the collaboration. Record the difference in the policy so the team does not disable a legitimate group by mistake.",
      "## Find the accounts already in use",
      "Search the password manager, runbooks, and chat history for logins that are not tied to a person. Ask each engineer which account they used for the last production change. Compare the answer with the access log and note every mismatch. The search should include vendor portals and legacy systems that predate the identity provider.",
      "Check the service accounts that humans can log into. A service account used by an application is legitimate, while the same account used by an engineer for a manual fix is a shared admin path. Record the purpose, the owner, and the interactive login flag. The review should mark every account that can be used by a person.",
      "## Replace the account with named access",
      "Create a named account for each person who needs production access, with the smallest role that lets them do the work. Use the identity provider group to grant the role and remove it when the task ends. A named account makes the audit log useful and the offboarding step simple. Do not replace one shared password with a personal account that has permanent admin rights.",
      "For a task that truly needs a shared service identity, use a short-lived credential issued to a named requester. Record who requested it, why, and when it expires. The application can keep its service account while the human path moves to a temporary role. That split keeps automation working without preserving a shared login.",
      "## Remove the old credential and prove it is gone",
      "Rotate the password, revoke the sessions, and disable the account after the named path is ready. Test the old credential from a separate machine and record the failure. Check the applications that used the shared account before deleting it, because a hidden integration may break. The removal is complete only when the old login cannot be used and the dependent services still work.",
      "Search for the old password in configuration files, scripts, and documentation. A credential that is disabled in the identity provider can still sit in a repository and be re-enabled by a future change. Remove the value and replace it with a reference to the secret manager. Record the commit that removed it so the cleanup is traceable.",
      "## Monitor for the account returning",
      "Add an alert for any login attempt using a retired shared account. The alert should go to the security owner, not a general queue. A failed attempt may be a stale script, while a successful attempt is a control failure. Record the source and the response time.",
      "Review new accounts monthly for generic names such as admin, ops, or support. A new shared account often appears during an incident when the team is under pressure. Ask the creator to justify it or convert it to a named role. The review should be short enough to run every month.",
      "## Make the ban part of change review",
      "Add a question to the change template that asks whether the change needs a new credential. If the answer is yes, the reviewer should require a named owner and an expiry. A ban that lives only in a policy document will be ignored during a busy release. Put the check where the work is approved.",
      "Review the ban with the client owner each quarter and report the number of shared accounts found and removed. Ask whether any business process still depends on one. If it does, name the exception, the compensating control, and the removal date. A permanent exception without a date is a quiet repeal of the ban."
    ]
  },
  {
    "slug": "write-a-client-owned-incident-severity-matrix-for-an-offshore-support-pod",
    "title": "Write a client-owned incident severity matrix for an offshore support pod",
    "excerpt": "A severity matrix that anchors levels in customer impact, keeps the decision with the client, and survives a real incident.",
    "minutes": 8,
    "published": "2026-11-10",
    "body": [
      "## Start from customer impact, not internal labels",
      "A severity matrix should begin with what the customer experiences, such as a failed payment, a blank dashboard, or a slow report. Map each symptom to a severity and a response target. The offshore pod can then classify a report without guessing what the client means by critical. Use examples from the product, not generic definitions.",
      "Separate severity from priority and from effort. Severity describes the impact, priority describes the order of work, and effort describes the size of the fix. A cosmetic defect can be high priority before a launch while remaining low severity. Write all three fields so the team does not collapse them into one argument.",
      "## Name the decision owner and the backup",
      "The client owns the severity decision because the client owns the customer relationship and the commercial risk. Name the person who can set or change a severity and a backup for nights and holidays. The offshore pod can recommend a level with evidence, but it should not invent a commitment. Record the owner in the matrix and in the incident channel.",
      "Give the offshore lead authority to raise a severity temporarily when the evidence is clear. The temporary level should expire unless the client confirms it within a stated window. That rule protects customers during a fast-moving incident without letting the pod set policy. Record the temporary change and the confirmation.",
      "## Write examples for each level",
      "Write at least two examples for every severity level using real product terms. Include a boundary case such as a workaround that exists but is slow, or a failure that affects one large account. The examples should let two responders reach the same level from the same evidence. Review them after every major release.",
      "State what evidence is required before a level can be raised or lowered. A screenshot, an error count, and the affected account list are more useful than an opinion. The matrix should say who gathers the evidence and how quickly. A severity change without evidence becomes a negotiation.",
      "## Set response and update targets",
      "Define the acknowledgement, the first substantive update, and the update cadence for each level. A critical incident needs a shorter acknowledgement and a named communicator, while a minor issue can wait for the next business day. Put the targets in the matrix and in the support tool. The pod should not promise a fix time when it only controls the response.",
      "Write the customer message template for each level and the person who approves it. The message should state the impact, the next update time, and whether a workaround exists. Do not include a cause until the team has evidence. Store the approved wording with the incident record so the next update starts from a known text.",
      "## Handle disagreement and downgrade",
      "When the client and the pod disagree, record both positions and the evidence. Set a time to resolve the disagreement rather than letting the ticket sit at the higher level. If the client accepts a lower level, record the accepted risk and the review date. A downgrade is a decision, not a silent edit.",
      "Review every downgrade at the next incident review. A pattern of downgrades may mean the matrix is too strict or the pod is escalating too early. Change one example or one target at a time and measure the effect. The goal is a decision the team can repeat under pressure.",
      "## Test the matrix with a drill",
      "Run a tabletop drill with a realistic symptom and ask the pod to classify it. Ask the client owner to confirm or correct the level and to walk through the communication step. Record the time to a decision and the questions that required a call. A matrix that has never been used in a drill is only a document.",
      "After the drill, update one example, one owner, or one target and set a date to test again. Keep the matrix short enough to read during an incident. Report the drill result to the client owner with the gaps and the changes. The next drill should start from the revised matrix, not the first draft."
    ]
  },
  {
    "slug": "set-an-asynchronous-decision-log-for-an-offshore-delivery-team",
    "title": "Set an asynchronous decision log for an offshore delivery team",
    "excerpt": "A decision log that names the owner, keeps the context, and turns a distributed conversation into a record the team can use.",
    "minutes": 8,
    "published": "2026-11-10",
    "body": [
      "## Decide which decisions need a written record",
      "Not every message deserves a decision record, so define the categories that do. Scope changes, production exceptions, access grants, architecture choices, and customer commitments should be written down. A daily stand-up note or a chat reaction is not a decision record. Write the categories and the person who can classify a decision.",
      "Separate a decision from a discussion. A discussion can stay in chat, while a decision needs an owner, a date, the options considered, and the reason. The record should be short enough that someone will write it during the meeting. A long template will be completed only after the decision has already been forgotten.",
      "## Choose one place and one format",
      "Put the decision log in a tool the client and the offshore team can both reach. Use a fixed format with the date, the owner, the decision, the alternatives, and the review date. Do not keep half the log in chat and half in a document. A single place makes the search reliable.",
      "Keep the format stable for a quarter before changing it. A new field every week makes the old entries hard to compare. If a field is missing, add it at the next quarterly review and backfill only the decisions that still matter. Consistency is more valuable than completeness.",
      "## Write the decision while the context is fresh",
      "Assign a scribe for each decision meeting and give them time to write the record before the call ends. The scribe should confirm the wording with the owner in the meeting, not days later. A record written from memory loses the alternatives and the reason. The owner should approve the entry before it is filed.",
      "Include the evidence that supported the decision, such as a test result, a cost estimate, or a customer message. Link the ticket or document rather than copying it. The evidence lets a later reviewer understand why the choice made sense at the time. Without it, the record becomes a claim.",
      "## Close the loop with the people affected",
      "Send the decision to the people who must act on it, not only to the people who attended. Name the action, the owner, and the date in the same message. A decision that is filed but not assigned is only a note. Ask the recipients to confirm that the action is clear.",
      "Review open decisions at the weekly delivery meeting and close the ones that are done. A log full of open items loses credibility. Record the closure and any follow-up decision. The review should take minutes, not an hour.",
      "## Use the log to onboard and to audit",
      "Give a new engineer the last quarter of decisions as part of onboarding. The log explains why the code and the process look the way they do. It also shows which decisions are still open and who owns them. A new team member should not have to ask for the history in a call.",
      "During an audit, sample ten decisions and check whether the action was completed. A decision without evidence of follow-through is a gap. Report the sample size and the exceptions to the client owner. The log is useful only when it changes what the team does.",
      "## Review the log quarterly",
      "At the end of the quarter, count the decisions by category and the share that were closed on time. Ask the scribes which entry was hardest to write and why. Look for a category with many open items, because that may mean the owner or the process is unclear. Change one part of the format or the cadence and measure the effect.",
      "Remove or archive decisions that no longer apply, but keep the history searchable. A log that grows without review becomes a storage problem rather than a memory aid. Publish the review summary to the client and the team. The next quarter should start with a shorter, clearer log."
    ]
  },
  {
    "slug": "write-an-acceptance-criteria-checklist-for-an-offshore-review-queue",
    "title": "Write an acceptance criteria checklist for an offshore review queue",
    "excerpt": "A checklist that makes each criterion testable, requires named evidence, and separates review capacity from missing information.",
    "minutes": 8,
    "published": "2026-11-10",
    "body": [
      "## Start with the outcome the reviewer must verify",
      "Acceptance criteria should describe the observable result, not the activity the engineer performed. A reviewer needs to know what a customer will see, which environment was used, and what evidence proves it. Write the criteria before the work starts so the engineer and the reviewer share the same target. A criterion added after the review begins is a moving goal.",
      "Separate the must-have criteria from the nice-to-have criteria. The must-have set determines whether the work can merge or ship, while the rest can become follow-up tickets. A long list of optional items slows the review and hides the real blocker. Mark the mandatory items clearly.",
      "## Make each criterion testable",
      "Replace vague words such as works, fast, and secure with a test the reviewer can run. State the input, the expected output, and the environment. A criterion that says the page loads quickly is not testable, while a stated response target on a named page is. The reviewer should not have to invent the test.",
      "Include the negative cases that matter, such as an expired session, a missing permission, or a duplicate request. A happy-path check can pass while the failure path breaks the customer experience. Write the expected error and the evidence that shows it. The engineer should run the same cases before requesting review.",
      "## Require evidence in the ticket",
      "Name the evidence the reviewer will accept: a test output, a screenshot with a timestamp, a log line with a request identifier, or a short recording. Put the evidence requirement in the ticket template so it is not a surprise. A reviewer who must ask for basics adds a day to the queue. The evidence should be attached before the review starts.",
      "Distinguish evidence produced by the engineer from evidence produced by an independent check. A screenshot from the developer's machine is useful, while a run in the shared environment is stronger. For a high-risk change, require both. Record which evidence was independent.",
      "## Define the review states and the hand-back",
      "Use a small set of states, such as ready for review, changes requested, approved, and blocked. Each state should have an owner and a maximum age. A ticket that sits in ready for review without a reviewer is not progressing. Publish the states in the queue so the team can see where time accumulates.",
      "Write the hand-back rule for missing evidence. The reviewer should return the ticket with the exact missing item and the person who can supply it. A comment that says not ready is not enough. The hand-back should not restart the whole review if only one field is missing.",
      "## Measure queue time and rework",
      "Record the time from ready for review to the first reviewer action and from that action to approval. Separate the wait caused by missing evidence from the wait caused by reviewer capacity. A single average hides the difference. Report the two intervals beside the number of review rounds.",
      "Sample the tickets that needed more than one round and describe the missing criterion. A repeated gap may mean the template is incomplete, while a one-off gap may mean the engineer missed it. Change one field or one example at a time. The review should get shorter without lowering the bar.",
      "## Review the checklist with both sides",
      "Ask the reviewers and the engineers which criterion caused the most confusion. The answer often reveals a word that means different things to each side. Rewrite that criterion with a concrete example. Keep the checklist short enough to use at the start of every ticket.",
      "Review the checklist quarterly and remove criteria that no longer reflect the product. A stale checklist creates busywork and teaches the team to ignore it. Record the change and the date. The next review should start from the revised list, not from memory."
    ]
  }
];

export const november10BlogDetails = {
  "write-a-production-access-revocation-checklist-for-an-offshore-contractor-exit": {
    "takeaways": [
      "Name the exit date and the owner before the final working day.",
      "Inventory direct, delegated, and token-based access.",
      "Revoke production access first and invalidate live sessions.",
      "Test one old credential and store the evidence.",
      "Review one gap after every exit."
    ],
    "readinessRows": [
      {
        "area": "Scope",
        "ready": "The exit date, systems, and owner are named.",
        "notReady": "A plan to clean up after the last day."
      },
      {
        "area": "Inventory",
        "ready": "Accounts, tokens, keys, and delegated access are listed.",
        "notReady": "Only the company directory is checked."
      },
      {
        "area": "Revocation",
        "ready": "Production access goes first and sessions are cancelled.",
        "notReady": "The password changes but old tokens still work."
      },
      {
        "area": "Evidence",
        "ready": "A second person tests the old credentials and records the result.",
        "notReady": "A checkbox with no test."
      }
    ],
    "sections": [
      {
        "id": "start-the-exit-before-the-last-working-day",
        "title": "Start the exit before the last working day",
        "paragraphs": [
          "An access revocation checklist should begin before the contractor's final day, not after the badge is returned. The client owner should name the exit date, the systems in scope, and the person who will confirm each revocation. Waiting until the last hour turns a routine offboarding into an emergency. A written date also gives the contractor time to hand over open work without keeping access alive.",
          "Separate a planned exit from an immediate removal. A planned exit can follow a short handover window, while a termination for cause may require same-hour removal. Write both paths and the person who can choose between them. The checklist should not assume that every exit follows the same timetable."
        ]
      },
      {
        "id": "inventory-every-access-path",
        "title": "Inventory every access path",
        "paragraphs": [
          "List the accounts, groups, tokens, and integrations the contractor can use, including the ones created for a single project. Include the source control account, cloud console, database reader, ticket system, chat workspace, and any vendor portal. A checklist that covers only the company directory will miss the credentials that matter most. Add the owner of each system and the command or screen used to revoke access.",
          "Check for indirect access through shared groups, delegated mailboxes, and service accounts that the contractor helped create. A personal account can be disabled while a personal access token remains valid for months. Record the token identifier and the revocation step. The same review should look at SSH keys, CI secrets, and package registry tokens."
        ]
      },
      {
        "id": "revoke-credentials-in-a-fixed-order",
        "title": "Revoke credentials in a fixed order",
        "paragraphs": [
          "Revoke the highest-risk access first, such as production consoles, database credentials, and deployment tokens. Then remove the source control account and the identity provider session. Finally remove the lower-risk collaboration tools and distribution lists. A fixed order prevents the team from closing the ticket before the dangerous access is gone. Record the time of each step.",
          "Invalidate active sessions as well as the password. Many systems keep a session alive after an account is disabled, and a refresh token can outlive the visible login. Force a sign-out, revoke the refresh tokens, and rotate any shared secret the contractor could read. Confirm the result by trying the old credential from a test machine."
        ]
      },
      {
        "id": "reassign-ownership-of-work-and-artifacts",
        "title": "Reassign ownership of work and artifacts",
        "paragraphs": [
          "Find the branches, repositories, dashboards, and documents that still name the contractor as owner. Transfer each one to a named employee and record the date. A dashboard that only the departed contractor can edit becomes an orphan within a week. Include scheduled jobs and webhooks that use the contractor's personal token.",
          "Review the commit history for email addresses and signing keys tied to the contractor. Replace any personal address in automation with a team address. Check that the contractor is not the only approver on a protected branch or a production environment. The handover is complete when no critical path depends on the departing account."
        ]
      },
      {
        "id": "verify-with-evidence-not-a-checklist-tick",
        "title": "Verify with evidence, not a checklist tick",
        "paragraphs": [
          "Ask a second person to test the old credentials after revocation. The test should cover the identity provider, source control, cloud console, database, and one collaboration tool. Record the result, the tester, and the time. A checklist marked complete without a test is only a claim.",
          "Compare the revoked account list with the access inventory from the first step. Any account without a revocation record should stay on the open list. Store the evidence with the exit record so an auditor can reconstruct the process. The next exit should start from this evidence, not from a blank form."
        ]
      },
      {
        "id": "review-the-exit-and-close-the-gaps",
        "title": "Review the exit and close the gaps",
        "paragraphs": [
          "After the exit, review which step took the longest and which access path was missed. Ask the handover owner whether anything was unclear. Record one change to the checklist and a date to test it. An exit that produces no change is either perfect or not being examined honestly.",
          "Run a quarterly sample of recent exits and try one old credential from each. The sample should include a planned exit and an urgent removal. Report the result to the client owner with the number tested and the number still active. A revocation process that is never sampled drifts quietly."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Client owner",
        "text": "Sets the exit date and confirms the access scope."
      },
      {
        "label": "Offshore lead",
        "text": "Completes the handover and transfers artifact ownership."
      },
      {
        "label": "Security reviewer",
        "text": "Tests the old credentials and stores the evidence."
      }
    ],
    "faqs": [
      {
        "question": "When should revocation start?",
        "answer": "Before the final working day for a planned exit, and immediately for a removal for cause."
      },
      {
        "question": "What access is easiest to miss?",
        "answer": "Personal access tokens, SSH keys, CI secrets, and delegated mailboxes."
      },
      {
        "question": "What proves access is gone?",
        "answer": "A second person tries the old credential after revocation and records the failure."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Access control and account management controls."
      },
      {
        "name": "NIST SP 800-63B digital identity guidelines",
        "url": "https://csrc.nist.gov/pubs/sp/800/63b/final",
        "note": "Authenticator and session lifecycle guidance."
      },
      {
        "name": "CIS Benchmarks",
        "url": "https://www.cisecurity.org/cis-benchmarks",
        "note": "Account and credential hardening practice."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Least privilege and secure defaults."
      }
    ],
    "heroImage": "/nov10/blog/write-a-production-access-revocation-checklist-for-an-offshore-contractor-exit.webp"
  },
  "set-a-shared-admin-account-ban-for-outsourced-production-work": {
    "takeaways": [
      "Define shared accounts by credential, not by role.",
      "Inventory vault, runbook, and legacy logins.",
      "Replace human use with named roles and short-lived credentials.",
      "Rotate, disable, and test the old credential.",
      "Alert on retired accounts and review new generic names monthly."
    ],
    "readinessRows": [
      {
        "area": "Definition",
        "ready": "A shared credential is distinguished from a shared role.",
        "notReady": "Any login that feels generic is treated as shared."
      },
      {
        "area": "Inventory",
        "ready": "Human-usable service accounts are marked.",
        "notReady": "Only the password vault is searched."
      },
      {
        "area": "Replacement",
        "ready": "Named roles and short-lived credentials are ready first.",
        "notReady": "The old password is shared with fewer people."
      },
      {
        "area": "Monitoring",
        "ready": "Retired accounts raise an alert on any attempt.",
        "notReady": "The account is disabled with no follow-up."
      }
    ],
    "sections": [
      {
        "id": "define-what-counts-as-a-shared-admin-account",
        "title": "Define what counts as a shared admin account",
        "paragraphs": [
          "A shared admin account is any login that more than one person can use without a named identity behind it. It includes a generic administrator login, a posted password in a vault, and a service account that people borrow for convenience. Write the definition so the team can classify an account without debate. The ban should cover production, staging with customer data, and any system that can reach them.",
          "Distinguish a shared account from a shared role. A role can be assigned to several named users, while an account is a single credential that hides who acted. The ban targets the credential, not the collaboration. Record the difference in the policy so the team does not disable a legitimate group by mistake."
        ]
      },
      {
        "id": "find-the-accounts-already-in-use",
        "title": "Find the accounts already in use",
        "paragraphs": [
          "Search the password manager, runbooks, and chat history for logins that are not tied to a person. Ask each engineer which account they used for the last production change. Compare the answer with the access log and note every mismatch. The search should include vendor portals and legacy systems that predate the identity provider.",
          "Check the service accounts that humans can log into. A service account used by an application is legitimate, while the same account used by an engineer for a manual fix is a shared admin path. Record the purpose, the owner, and the interactive login flag. The review should mark every account that can be used by a person."
        ]
      },
      {
        "id": "replace-the-account-with-named-access",
        "title": "Replace the account with named access",
        "paragraphs": [
          "Create a named account for each person who needs production access, with the smallest role that lets them do the work. Use the identity provider group to grant the role and remove it when the task ends. A named account makes the audit log useful and the offboarding step simple. Do not replace one shared password with a personal account that has permanent admin rights.",
          "For a task that truly needs a shared service identity, use a short-lived credential issued to a named requester. Record who requested it, why, and when it expires. The application can keep its service account while the human path moves to a temporary role. That split keeps automation working without preserving a shared login."
        ]
      },
      {
        "id": "remove-the-old-credential-and-prove-it-is-gone",
        "title": "Remove the old credential and prove it is gone",
        "paragraphs": [
          "Rotate the password, revoke the sessions, and disable the account after the named path is ready. Test the old credential from a separate machine and record the failure. Check the applications that used the shared account before deleting it, because a hidden integration may break. The removal is complete only when the old login cannot be used and the dependent services still work.",
          "Search for the old password in configuration files, scripts, and documentation. A credential that is disabled in the identity provider can still sit in a repository and be re-enabled by a future change. Remove the value and replace it with a reference to the secret manager. Record the commit that removed it so the cleanup is traceable."
        ]
      },
      {
        "id": "monitor-for-the-account-returning",
        "title": "Monitor for the account returning",
        "paragraphs": [
          "Add an alert for any login attempt using a retired shared account. The alert should go to the security owner, not a general queue. A failed attempt may be a stale script, while a successful attempt is a control failure. Record the source and the response time.",
          "Review new accounts monthly for generic names such as admin, ops, or support. A new shared account often appears during an incident when the team is under pressure. Ask the creator to justify it or convert it to a named role. The review should be short enough to run every month."
        ]
      },
      {
        "id": "make-the-ban-part-of-change-review",
        "title": "Make the ban part of change review",
        "paragraphs": [
          "Add a question to the change template that asks whether the change needs a new credential. If the answer is yes, the reviewer should require a named owner and an expiry. A ban that lives only in a policy document will be ignored during a busy release. Put the check where the work is approved.",
          "Review the ban with the client owner each quarter and report the number of shared accounts found and removed. Ask whether any business process still depends on one. If it does, name the exception, the compensating control, and the removal date. A permanent exception without a date is a quiet repeal of the ban."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Client security owner",
        "text": "Approves the ban and the named production roles."
      },
      {
        "label": "Offshore lead",
        "text": "Finds legacy logins and moves the team to named access."
      },
      {
        "label": "Platform engineer",
        "text": "Rotates credentials and adds the retired-account alert."
      }
    ],
    "faqs": [
      {
        "question": "Is a shared service account always forbidden?",
        "answer": "No, an application service account is allowed when no person can log into it interactively."
      },
      {
        "question": "What replaces a shared admin login?",
        "answer": "A named account with a limited role, or a short-lived credential issued to a named requester."
      },
      {
        "question": "How do we know the old account is gone?",
        "answer": "The credential fails from a separate machine and the dependent services still work."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 access control",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Least privilege and account management."
      },
      {
        "name": "NIST SP 800-63B digital identity guidelines",
        "url": "https://csrc.nist.gov/pubs/sp/800/63b/final",
        "note": "Authenticator binding and session management."
      },
      {
        "name": "OWASP secrets management cheat sheet",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
        "note": "Storage, rotation, and revocation practice."
      },
      {
        "name": "CIS Benchmarks",
        "url": "https://www.cisecurity.org/cis-benchmarks",
        "note": "Administrative account hardening."
      }
    ],
    "heroImage": "/nov10/blog/set-a-shared-admin-account-ban-for-outsourced-production-work.webp"
  },
  "write-a-client-owned-incident-severity-matrix-for-an-offshore-support-pod": {
    "takeaways": [
      "Anchor severity in customer impact and real product examples.",
      "Keep the decision with a named client owner and backup.",
      "Separate severity, priority, and effort.",
      "Set response and update targets for each level.",
      "Drill the matrix and revise one item at a time."
    ],
    "readinessRows": [
      {
        "area": "Impact",
        "ready": "Levels are written as customer symptoms.",
        "notReady": "Levels are internal words such as critical."
      },
      {
        "area": "Owner",
        "ready": "A client decision owner and backup are named.",
        "notReady": "The pod decides the level alone."
      },
      {
        "area": "Targets",
        "ready": "Acknowledgement and update times are set per level.",
        "notReady": "Every incident gets the same response."
      },
      {
        "area": "Practice",
        "ready": "The pod has classified a realistic drill.",
        "notReady": "The matrix has never been used."
      }
    ],
    "sections": [
      {
        "id": "start-from-customer-impact-not-internal-labels",
        "title": "Start from customer impact, not internal labels",
        "paragraphs": [
          "A severity matrix should begin with what the customer experiences, such as a failed payment, a blank dashboard, or a slow report. Map each symptom to a severity and a response target. The offshore pod can then classify a report without guessing what the client means by critical. Use examples from the product, not generic definitions.",
          "Separate severity from priority and from effort. Severity describes the impact, priority describes the order of work, and effort describes the size of the fix. A cosmetic defect can be high priority before a launch while remaining low severity. Write all three fields so the team does not collapse them into one argument."
        ]
      },
      {
        "id": "name-the-decision-owner-and-the-backup",
        "title": "Name the decision owner and the backup",
        "paragraphs": [
          "The client owns the severity decision because the client owns the customer relationship and the commercial risk. Name the person who can set or change a severity and a backup for nights and holidays. The offshore pod can recommend a level with evidence, but it should not invent a commitment. Record the owner in the matrix and in the incident channel.",
          "Give the offshore lead authority to raise a severity temporarily when the evidence is clear. The temporary level should expire unless the client confirms it within a stated window. That rule protects customers during a fast-moving incident without letting the pod set policy. Record the temporary change and the confirmation."
        ]
      },
      {
        "id": "write-examples-for-each-level",
        "title": "Write examples for each level",
        "paragraphs": [
          "Write at least two examples for every severity level using real product terms. Include a boundary case such as a workaround that exists but is slow, or a failure that affects one large account. The examples should let two responders reach the same level from the same evidence. Review them after every major release.",
          "State what evidence is required before a level can be raised or lowered. A screenshot, an error count, and the affected account list are more useful than an opinion. The matrix should say who gathers the evidence and how quickly. A severity change without evidence becomes a negotiation."
        ]
      },
      {
        "id": "set-response-and-update-targets",
        "title": "Set response and update targets",
        "paragraphs": [
          "Define the acknowledgement, the first substantive update, and the update cadence for each level. A critical incident needs a shorter acknowledgement and a named communicator, while a minor issue can wait for the next business day. Put the targets in the matrix and in the support tool. The pod should not promise a fix time when it only controls the response.",
          "Write the customer message template for each level and the person who approves it. The message should state the impact, the next update time, and whether a workaround exists. Do not include a cause until the team has evidence. Store the approved wording with the incident record so the next update starts from a known text."
        ]
      },
      {
        "id": "handle-disagreement-and-downgrade",
        "title": "Handle disagreement and downgrade",
        "paragraphs": [
          "When the client and the pod disagree, record both positions and the evidence. Set a time to resolve the disagreement rather than letting the ticket sit at the higher level. If the client accepts a lower level, record the accepted risk and the review date. A downgrade is a decision, not a silent edit.",
          "Review every downgrade at the next incident review. A pattern of downgrades may mean the matrix is too strict or the pod is escalating too early. Change one example or one target at a time and measure the effect. The goal is a decision the team can repeat under pressure."
        ]
      },
      {
        "id": "test-the-matrix-with-a-drill",
        "title": "Test the matrix with a drill",
        "paragraphs": [
          "Run a tabletop drill with a realistic symptom and ask the pod to classify it. Ask the client owner to confirm or correct the level and to walk through the communication step. Record the time to a decision and the questions that required a call. A matrix that has never been used in a drill is only a document.",
          "After the drill, update one example, one owner, or one target and set a date to test again. Keep the matrix short enough to read during an incident. Report the drill result to the client owner with the gaps and the changes. The next drill should start from the revised matrix, not the first draft."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Client owner",
        "text": "Owns the severity decision and the customer message."
      },
      {
        "label": "Offshore lead",
        "text": "Classifies the incident and recommends a temporary level."
      },
      {
        "label": "Support lead",
        "text": "Runs the update cadence and the customer communication."
      }
    ],
    "faqs": [
      {
        "question": "Who sets the final severity?",
        "answer": "The named client owner, with a backup for nights and holidays."
      },
      {
        "question": "Can the offshore pod raise a severity?",
        "answer": "Yes, temporarily, when the evidence is clear and the client confirms within a stated window."
      },
      {
        "question": "What belongs in a severity example?",
        "answer": "A real customer symptom, the affected scope, and the evidence that proves it."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-61 incident handling guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Incident classification and response practice."
      },
      {
        "name": "Google SRE Book, managing incidents",
        "url": "https://sre.google/sre-book/managing-incidents/",
        "note": "Incident roles and communication."
      },
      {
        "name": "Atlassian incident management handbook",
        "url": "https://www.atlassian.com/incident-management/handbook",
        "note": "Severity and escalation examples."
      },
      {
        "name": "AWS Well-Architected operational excellence",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html",
        "note": "Operational readiness and response."
      }
    ],
    "heroImage": "/nov10/blog/write-a-client-owned-incident-severity-matrix-for-an-offshore-support-pod.webp"
  },
  "set-an-asynchronous-decision-log-for-an-offshore-delivery-team": {
    "takeaways": [
      "Define which decisions require a written record.",
      "Use one searchable place and a stable format.",
      "Write the record during the meeting and link the evidence.",
      "Assign actions and close them in the weekly review.",
      "Sample the log quarterly and adjust one thing."
    ],
    "readinessRows": [
      {
        "area": "Scope",
        "ready": "Decision categories and the classifier are named.",
        "notReady": "Every chat message is treated as a decision."
      },
      {
        "area": "Format",
        "ready": "One stable template holds owner, options, reason, and date.",
        "notReady": "The format changes with each meeting."
      },
      {
        "area": "Action",
        "ready": "Every decision has an owner and a due date.",
        "notReady": "The record is filed and never assigned."
      },
      {
        "area": "Review",
        "ready": "Open decisions close in the weekly meeting.",
        "notReady": "The log grows without a review."
      }
    ],
    "sections": [
      {
        "id": "decide-which-decisions-need-a-written-record",
        "title": "Decide which decisions need a written record",
        "paragraphs": [
          "Not every message deserves a decision record, so define the categories that do. Scope changes, production exceptions, access grants, architecture choices, and customer commitments should be written down. A daily stand-up note or a chat reaction is not a decision record. Write the categories and the person who can classify a decision.",
          "Separate a decision from a discussion. A discussion can stay in chat, while a decision needs an owner, a date, the options considered, and the reason. The record should be short enough that someone will write it during the meeting. A long template will be completed only after the decision has already been forgotten."
        ]
      },
      {
        "id": "choose-one-place-and-one-format",
        "title": "Choose one place and one format",
        "paragraphs": [
          "Put the decision log in a tool the client and the offshore team can both reach. Use a fixed format with the date, the owner, the decision, the alternatives, and the review date. Do not keep half the log in chat and half in a document. A single place makes the search reliable.",
          "Keep the format stable for a quarter before changing it. A new field every week makes the old entries hard to compare. If a field is missing, add it at the next quarterly review and backfill only the decisions that still matter. Consistency is more valuable than completeness."
        ]
      },
      {
        "id": "write-the-decision-while-the-context-is-fresh",
        "title": "Write the decision while the context is fresh",
        "paragraphs": [
          "Assign a scribe for each decision meeting and give them time to write the record before the call ends. The scribe should confirm the wording with the owner in the meeting, not days later. A record written from memory loses the alternatives and the reason. The owner should approve the entry before it is filed.",
          "Include the evidence that supported the decision, such as a test result, a cost estimate, or a customer message. Link the ticket or document rather than copying it. The evidence lets a later reviewer understand why the choice made sense at the time. Without it, the record becomes a claim."
        ]
      },
      {
        "id": "close-the-loop-with-the-people-affected",
        "title": "Close the loop with the people affected",
        "paragraphs": [
          "Send the decision to the people who must act on it, not only to the people who attended. Name the action, the owner, and the date in the same message. A decision that is filed but not assigned is only a note. Ask the recipients to confirm that the action is clear.",
          "Review open decisions at the weekly delivery meeting and close the ones that are done. A log full of open items loses credibility. Record the closure and any follow-up decision. The review should take minutes, not an hour."
        ]
      },
      {
        "id": "use-the-log-to-onboard-and-to-audit",
        "title": "Use the log to onboard and to audit",
        "paragraphs": [
          "Give a new engineer the last quarter of decisions as part of onboarding. The log explains why the code and the process look the way they do. It also shows which decisions are still open and who owns them. A new team member should not have to ask for the history in a call.",
          "During an audit, sample ten decisions and check whether the action was completed. A decision without evidence of follow-through is a gap. Report the sample size and the exceptions to the client owner. The log is useful only when it changes what the team does."
        ]
      },
      {
        "id": "review-the-log-quarterly",
        "title": "Review the log quarterly",
        "paragraphs": [
          "At the end of the quarter, count the decisions by category and the share that were closed on time. Ask the scribes which entry was hardest to write and why. Look for a category with many open items, because that may mean the owner or the process is unclear. Change one part of the format or the cadence and measure the effect.",
          "Remove or archive decisions that no longer apply, but keep the history searchable. A log that grows without review becomes a storage problem rather than a memory aid. Publish the review summary to the client and the team. The next quarter should start with a shorter, clearer log."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Client owner",
        "text": "Approves decisions that change scope or risk."
      },
      {
        "label": "Offshore lead",
        "text": "Keeps the log current and assigns follow-up actions."
      },
      {
        "label": "Scribe",
        "text": "Writes the record during the meeting and links the evidence."
      }
    ],
    "faqs": [
      {
        "question": "Which decisions belong in the log?",
        "answer": "Scope changes, production exceptions, access grants, architecture choices, and customer commitments."
      },
      {
        "question": "How long should an entry be?",
        "answer": "Short enough to write during the meeting, with the owner, options, reason, and review date."
      },
      {
        "question": "What makes the log useful?",
        "answer": "Actions that are assigned and closed, not a growing archive of untracked notes."
      }
    ],
    "sources": [
      {
        "name": "Google Technical Writing courses",
        "url": "https://developers.google.com/tech-writing",
        "note": "Clear written communication for technical teams."
      },
      {
        "name": "Atlassian team playbook",
        "url": "https://www.atlassian.com/team-playbook/plays",
        "note": "Decision and team agreement practices."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Traceable decisions and change evidence."
      },
      {
        "name": "U.S. GAO internal control standards",
        "url": "https://www.gao.gov/greenbook",
        "note": "Documentation and accountability practice."
      }
    ],
    "heroImage": "/nov10/blog/set-an-asynchronous-decision-log-for-an-offshore-delivery-team.webp"
  },
  "write-an-acceptance-criteria-checklist-for-an-offshore-review-queue": {
    "takeaways": [
      "Write observable outcomes before work starts.",
      "Make each criterion testable and include negative cases.",
      "Require named evidence in the ticket template.",
      "Track queue time separately from reviewer capacity.",
      "Review the checklist with both reviewers and engineers."
    ],
    "readinessRows": [
      {
        "area": "Outcome",
        "ready": "The customer-visible result and environment are stated.",
        "notReady": "The criterion describes the work performed."
      },
      {
        "area": "Tests",
        "ready": "Positive and negative cases are written.",
        "notReady": "Only the happy path is checked."
      },
      {
        "area": "Evidence",
        "ready": "The ticket names the accepted evidence before review.",
        "notReady": "The reviewer asks for basics after a day."
      },
      {
        "area": "States",
        "ready": "Every review state has an owner and an age limit.",
        "notReady": "A ticket can sit in review with no owner."
      }
    ],
    "sections": [
      {
        "id": "start-with-the-outcome-the-reviewer-must-verify",
        "title": "Start with the outcome the reviewer must verify",
        "paragraphs": [
          "Acceptance criteria should describe the observable result, not the activity the engineer performed. A reviewer needs to know what a customer will see, which environment was used, and what evidence proves it. Write the criteria before the work starts so the engineer and the reviewer share the same target. A criterion added after the review begins is a moving goal.",
          "Separate the must-have criteria from the nice-to-have criteria. The must-have set determines whether the work can merge or ship, while the rest can become follow-up tickets. A long list of optional items slows the review and hides the real blocker. Mark the mandatory items clearly."
        ]
      },
      {
        "id": "make-each-criterion-testable",
        "title": "Make each criterion testable",
        "paragraphs": [
          "Replace vague words such as works, fast, and secure with a test the reviewer can run. State the input, the expected output, and the environment. A criterion that says the page loads quickly is not testable, while a stated response target on a named page is. The reviewer should not have to invent the test.",
          "Include the negative cases that matter, such as an expired session, a missing permission, or a duplicate request. A happy-path check can pass while the failure path breaks the customer experience. Write the expected error and the evidence that shows it. The engineer should run the same cases before requesting review."
        ]
      },
      {
        "id": "require-evidence-in-the-ticket",
        "title": "Require evidence in the ticket",
        "paragraphs": [
          "Name the evidence the reviewer will accept: a test output, a screenshot with a timestamp, a log line with a request identifier, or a short recording. Put the evidence requirement in the ticket template so it is not a surprise. A reviewer who must ask for basics adds a day to the queue. The evidence should be attached before the review starts.",
          "Distinguish evidence produced by the engineer from evidence produced by an independent check. A screenshot from the developer's machine is useful, while a run in the shared environment is stronger. For a high-risk change, require both. Record which evidence was independent."
        ]
      },
      {
        "id": "define-the-review-states-and-the-hand-back",
        "title": "Define the review states and the hand-back",
        "paragraphs": [
          "Use a small set of states, such as ready for review, changes requested, approved, and blocked. Each state should have an owner and a maximum age. A ticket that sits in ready for review without a reviewer is not progressing. Publish the states in the queue so the team can see where time accumulates.",
          "Write the hand-back rule for missing evidence. The reviewer should return the ticket with the exact missing item and the person who can supply it. A comment that says not ready is not enough. The hand-back should not restart the whole review if only one field is missing."
        ]
      },
      {
        "id": "measure-queue-time-and-rework",
        "title": "Measure queue time and rework",
        "paragraphs": [
          "Record the time from ready for review to the first reviewer action and from that action to approval. Separate the wait caused by missing evidence from the wait caused by reviewer capacity. A single average hides the difference. Report the two intervals beside the number of review rounds.",
          "Sample the tickets that needed more than one round and describe the missing criterion. A repeated gap may mean the template is incomplete, while a one-off gap may mean the engineer missed it. Change one field or one example at a time. The review should get shorter without lowering the bar."
        ]
      },
      {
        "id": "review-the-checklist-with-both-sides",
        "title": "Review the checklist with both sides",
        "paragraphs": [
          "Ask the reviewers and the engineers which criterion caused the most confusion. The answer often reveals a word that means different things to each side. Rewrite that criterion with a concrete example. Keep the checklist short enough to use at the start of every ticket.",
          "Review the checklist quarterly and remove criteria that no longer reflect the product. A stale checklist creates busywork and teaches the team to ignore it. Record the change and the date. The next review should start from the revised list, not from memory."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Engineer",
        "text": "Runs the criteria and attaches the named evidence."
      },
      {
        "label": "Reviewer",
        "text": "Checks the evidence and returns the exact missing item."
      },
      {
        "label": "Delivery lead",
        "text": "Tracks queue time and removes stale criteria."
      }
    ],
    "faqs": [
      {
        "question": "What makes a criterion testable?",
        "answer": "A stated input, expected output, environment, and the evidence the reviewer can inspect."
      },
      {
        "question": "Should optional items block a review?",
        "answer": "No, only the must-have criteria block a merge or release; the rest become follow-up tickets."
      },
      {
        "question": "What belongs in a hand-back?",
        "answer": "The exact missing item and the person who can supply it, not a general not-ready comment."
      }
    ],
    "sources": [
      {
        "name": "ISTQB glossary",
        "url": "https://glossary.istqb.org/",
        "note": "Acceptance criteria and verification terminology."
      },
      {
        "name": "Google Testing Blog",
        "url": "https://testing.googleblog.com/",
        "note": "Test design and evidence practice."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Traceable review and acceptance evidence."
      },
      {
        "name": "Atlassian agile coach",
        "url": "https://www.atlassian.com/agile",
        "note": "Definition of done and acceptance practice."
      }
    ],
    "heroImage": "/nov10/blog/write-an-acceptance-criteria-checklist-for-an-offshore-review-queue.webp"
  }
};
