export const november5BlogBatch = [
  {
    "slug": "set-a-pull-request-size-limit-for-outsourced-feature-work",
    "title": "Set a pull request size limit for outsourced feature work",
    "excerpt": "A practical review limit that keeps an offshore feature branch small enough to inspect, test, and merge without hiding risk in a huge diff.",
    "minutes": 7,
    "published": "2026-11-05",
    "body": [
      "## Choose a limit the reviewer can actually inspect",
      "A pull request size limit should be based on the reviewer's ability to inspect the change, not on an arbitrary target that looks tidy in a dashboard. Ask the reviewer how many changed lines they can read with attention in one sitting, then subtract time for tests and questions. A useful starting point is a few hundred changed lines for a routine feature, with a lower limit for security-sensitive code. The number matters less than the shared expectation behind it.",
      "Separate generated files, lockfiles, and formatting churn from the lines a reviewer must understand. A large lockfile should not consume the same review budget as a hand-written authorization change. State which files count toward the limit and which are excluded as mechanical. A limit that treats every line equally will either block harmless dependency updates or let a dangerous change hide inside noise.",
      "## Split the work by behavior, not by file",
      "The most useful split is by behavior: one pull request adds the data model, the next exposes the endpoint, and the third adds the UI. Splitting by folder often produces pull requests that cannot be tested alone. Explain the sequence in the ticket so the reviewer understands how the parts fit. Each part should leave the application in a state that can be built and tested.",
      "Require the engineer to describe the user-visible outcome and the rollback path in the pull request description. If the branch cannot be rolled back without a second change, the split may be wrong. Keep the first change small enough to deploy behind a disabled flag. That pattern lets the team review and release incrementally without leaving the product in a broken state.",
      "## Make the test evidence part of the limit",
      "A pull request is not small if the reviewer cannot see the evidence that it works. Require the test command, the observed output, and the environment where it ran. For a UI change, include a before-and-after capture or a short recording. The evidence should fit in the pull request description rather than in a separate message that a future reviewer cannot find.",
      "If the change touches a shared contract, require a test that fails before the change and passes after it. Name the test in the description so the reviewer can run it directly. A change without a reproducible check is not ready for review, regardless of its line count. The limit should create room for that evidence, not replace it.",
      "## Set a review time box",
      "A size limit without a review time box still allows a pull request to sit for days. Agree on a first-response time, such as one business day, and a completion time for a routine change. If the reviewer cannot start within the window, the author should be told rather than left waiting. The time box is a commitment to the engineer as much as to the product.",
      "Use the time box to decide when to split further. If a pull request cannot be reviewed within the agreed time, it is probably too large or too vague. Do not solve the problem by asking the reviewer to work late. Split the change or narrow the question so the review fits the available time.",
      "## Handle urgent fixes without abandoning the limit",
      "An urgent production fix may need to bypass the normal size limit, but it should not bypass the evidence requirement. Allow a small hotfix with a named approver, a rollback note, and a follow-up review. Record why the normal process was shortened and who accepted the risk. The exception should be visible in the same system as the change.",
      "After the fix, schedule the follow-up review before the next release. The follow-up should check whether the hotfix introduced a shortcut that needs cleanup. Do not let an emergency become the default way of working. If urgent changes are frequent, the team has a planning problem rather than a review problem.",
      "## Teach the limit during onboarding",
      "A new remote engineer should see two example pull requests during onboarding: one that is the right size and one that was split after review. Explain why the second was split and what the reviewer could not verify. Use the examples in the first week's practice ticket. A written rule is easier to follow when the person has seen it applied.",
      "Ask the new engineer to estimate the size of a real ticket before starting work. Compare the estimate with the actual diff and discuss the difference. The exercise teaches the engineer to plan for reviewability rather than discovering it at the end. It also gives the reviewer an early chance to narrow the scope.",
      "Track the number of pull requests that are reopened after review because the scope changed. A reopened review is often a sign that the first slice was not independently testable. Record the reason and use it to improve the ticket template. The goal is fewer surprises at review, not fewer comments.",
      "## Measure the effect after a month",
      "After a month, compare review time, rework, and escaped defects for the new limit. Check whether small pull requests are reviewed faster and whether large ones are being split earlier. Look at the number of comments per change, because a very low count may mean the reviewer is not engaging. Use a small set of measures and keep the definition stable.",
      "Ask the reviewers whether the limit helped them find problems or merely added administrative work. If the limit is too tight, the team will spend more time on coordination than on review. Change one threshold and compare again. The goal is a review process that finds risk early, not a rule that looks good on a chart.",
      "A limit is easier to keep when the ticket includes a short split plan before coding starts. Ask the engineer to name the first reviewable slice, the test for that slice, and the parts that can wait. The plan can change, but writing it exposes a change that is really three changes in disguise. Review the plan with the same attention as the code."
    ]
  },
  {
    "slug": "control-a-database-migration-handoff-between-shifts",
    "title": "Control a database migration handoff between shifts",
    "excerpt": "A migration handoff that preserves the schema state, the rollback path, and the next decision when the engineer who started the change goes offline.",
    "minutes": 7,
    "published": "2026-11-05",
    "body": [
      "## Record the migration state before the handoff",
      "A migration handoff should begin with the current state of the schema, not a summary of what the engineer intended. Record the migration version applied to each environment, the pending scripts, and the checks that have run. Note the exact commit and the database snapshot used for the last rehearsal. The next engineer should be able to see whether the change is half-applied, fully applied, or still only planned.",
      "Separate the schema state from the application state, because a migration can be applied before the code that depends on it is deployed. Record which application version expects the new schema and whether that version is live. A handoff that says the migration is done without naming the application state can cause a deploy to fail. Use one shared record for both states.",
      "## Keep the rollback path executable",
      "A rollback plan is only useful if the next engineer can run it without reconstructing the original environment. Write the exact commands, the backup location, and the expected duration. Test the rollback in a staging copy and record the result. If the rollback depends on a person or a credential, name them and confirm availability before the handoff.",
      "Distinguish a reversible migration from one that destroys data. A column drop or a type change may not be reversible without a backup, so the handoff should state the backup time and the retention period. Do not describe a destructive change as reversible just because a down script exists. The reviewer should see the data consequence in plain language.",
      "## Name the next decision and owner",
      "The handoff should end with the next decision, the person who will make it, and the time by which it is needed. The decision might be to proceed to production, to run a second rehearsal, or to pause for a data check. Write the question in one sentence so the next engineer does not have to infer it. A migration that waits for an unnamed approval is a migration that will be rushed later.",
      "If the decision requires a business owner, include the evidence that owner needs. A schema change that affects reporting may need a finance review, while a change that affects access may need a security review. Record the review status and the contact. The next shift can then follow up with the right person instead of guessing.",
      "## Test the handoff with a second engineer",
      "Before the handoff, ask a second engineer to read the record and explain what they would do next. If they cannot state the current version, the rollback command, and the next decision, the record is incomplete. Fix the record before the original engineer goes offline. The test should use the same systems the next engineer will actually use.",
      "Run one dry-run command from the record in a non-production environment and confirm that the output matches the note. A command that works on the author's machine but fails in the shared environment is not a handoff. Record the result of the dry run and the time it was performed. That evidence gives the next shift confidence to act.",
      "## Freeze unrelated schema changes",
      "During a migration window, unrelated schema changes should wait. Two migrations that touch the same table can interact in ways that neither author anticipated. Publish the freeze window and the tables it covers. Ask the team to route new schema requests to the migration owner until the window closes.",
      "If an unrelated change cannot wait, review it with the migration owner before it is applied. Record the decision and the new sequence. Do not let a routine change slip in because it looks small. The freeze is a coordination tool, not a punishment, and it should end when the migration is verified.",
      "## Verify the destination after the handoff",
      "The receiving engineer should verify the destination state rather than trusting the note. Check the migration table, the schema version, and one application query that depends on the change. Record the verification time and the result. A handoff is not complete until the next person has observed the state for themselves.",
      "If the verification fails, stop and return to the last known good state. Do not attempt a second migration on top of an unverified first one. Record the failure, the rollback action, and the owner who decided to stop. The record should make the recovery path obvious to the next person.",
      "Keep the migration record in the same repository as the code so the next engineer can find it from the pull request. Link the runbook, the backup, and the verification query. A separate wiki page that nobody updates will drift. The repository record can be reviewed with the change that created it.",
      "## Review the handoff after the window",
      "After the migration window, review the handoff record with both engineers. Ask which field was most useful and which was missing. Check whether the rollback was tested and whether the destination verification caught anything. Record one change to the template for the next migration.",
      "Compare the actual duration with the estimate and the actual data impact with the plan. A migration that took twice as long may indicate an untested dependency rather than a slow engineer. Update the estimate method and the rehearsal checklist. The next handoff should be easier to verify, not longer to read.",
      "Keep one shared migration log that both shifts can write to, and timestamp each entry. The log should show who applied what, where, and what they observed. A private note on a laptop is not a handoff record. The log becomes the source of truth when the two engineers disagree about the state."
    ]
  },
  {
    "slug": "review-a-remote-engineers-on-call-runbook-before-handoff",
    "title": "Review a remote engineer's on-call runbook before handoff",
    "excerpt": "A runbook review that checks whether an offshore engineer can diagnose, escalate, and recover without depending on the original author.",
    "minutes": 7,
    "published": "2026-11-05",
    "body": [
      "## Start with the alerts the engineer will receive",
      "A runbook is only as good as the alerts it covers, so begin by listing the alerts the remote engineer will actually receive. Include the alert name, the service, the threshold, and the expected first action. If an alert can fire without a runbook entry, the on-call handoff is incomplete. The list should come from the monitoring system, not from memory.",
      "For each alert, record what a normal reading looks like and what would make it urgent. A threshold without context invites the engineer to guess. Include the time window and the aggregation method so the engineer knows whether a spike is real. The goal is a first decision, not a full diagnosis.",
      "## Test the first diagnostic step",
      "Ask the remote engineer to run the first diagnostic step in a staging environment while the author observes. The step might be a dashboard query, a log search, or a health check. Confirm that the engineer has access and that the output matches the runbook. A step that cannot be run is a documentation gap, not a training gap.",
      "Record the time it takes to find the relevant signal. If the engineer spends most of the time navigating tools, the runbook needs a direct link. If the engineer cannot interpret the output, the runbook needs an example. Fix the document before the next practice session.",
      "## Separate diagnosis from recovery authority",
      "The remote engineer may be able to diagnose an incident without being allowed to change production. Write the boundary explicitly: which actions are read-only, which require approval, and which are forbidden. Name the person who can approve a restart, a rollback, or a traffic shift. A runbook that implies authority the engineer does not have will lead to a blocked incident.",
      "For each recovery action, include the evidence the engineer must collect before and after. A restart without a before-and-after log is hard to review. A rollback without the deployed version and the rollback target is dangerous. The runbook should make the evidence part of the action, not an optional extra.",
      "## Write the escalation path with names",
      "Replace the general instruction to escalate with a named path for each severity. Include the primary contact, the backup, the channel, and the expected response window. State what information the engineer should send in the first message. A clear escalation template saves time when the incident is already stressful.",
      "Check the path against the actual on-call schedule for the next month. A name that is on vacation is not a path. Record the date the schedule was checked and the person who confirmed it. Update the runbook when the schedule changes, not after an escalation fails.",
      "## Practice one realistic incident",
      "Run a tabletop exercise using a recent incident with the customer data removed. Ask the engineer to follow the runbook and narrate each decision. Pause when the runbook is ambiguous and record the question. The exercise should end with the engineer proposing one change to the document.",
      "Do not use the exercise to test whether the engineer can solve the incident alone. Test whether the runbook gives them a safe next step. If the engineer needed to ask the author for information that should have been written down, add it. The goal is independence with evidence, not heroics.",
      "## Keep the runbook current",
      "Assign an owner and a review date to every runbook section. A runbook that is reviewed once and never again will drift from the system. Add a short change log so the engineer can see what changed and why. Link the runbook to the service repository so a code change can trigger a review.",
      "When an incident reveals a gap, update the runbook before closing the incident review. Record the change and the person who approved it. If the gap was caused by an architecture change, add the architecture dependency to the review. A runbook is a living control, not a one-time deliverable.",
      "Track the alerts that fire without a runbook entry and add the missing entry within the same week. An alert with no runbook is a gap that will be discovered at the worst time. Record the alert name and the owner. Review the list during the monthly on-call handoff.",
      "## Hand off with a shadow shift",
      "Before the remote engineer takes on-call alone, schedule a shadow shift where they follow the runbook while the author is available. The author should observe without taking over. Record the questions the engineer asked and the steps that were slow. Use the notes to improve the runbook and the training.",
      "End the shadow shift with a written confirmation that the engineer can find the alerts, run the diagnostics, and escalate to the right person. Name the date the engineer becomes primary and the backup for the first week. A shadow shift is not a formality, and the confirmation should be based on observed work. Keep the confirmation with the on-call schedule so the next rotation can see it.",
      "A useful runbook includes the queries that answer the first three diagnostic questions. Write the exact query and the expected shape of the result, not only the dashboard name. The engineer should be able to copy the query and interpret the output. Update the query when the schema changes."
    ]
  },
  {
    "slug": "keep-staging-credentials-out-of-a-shared-ticket",
    "title": "Keep staging credentials out of a shared ticket",
    "excerpt": "A practical control for sharing staging access with remote engineers without pasting passwords, tokens, or connection strings into tickets and chat.",
    "minutes": 6,
    "published": "2026-11-05",
    "body": [
      "## Inventory where credentials are shared today",
      "Start by finding the places where staging credentials are currently shared. Search tickets, chat channels, onboarding notes, and repository files for connection strings, passwords, and tokens. Record the system, the credential type, and the audience. You cannot remove a practice you have not located.",
      "Separate shared credentials from personal accounts. A shared staging password is harder to audit and rotate than a named account with a role. A personal token pasted into a ticket is still a leak, even if only one person used it. The inventory should show both the shared secret and the person who knows it.",
      "## Replace the shared secret with a named account",
      "Give each engineer a named account with the minimum role needed for staging. Use the identity provider to grant access through a group rather than a manually maintained password. Record the request, the approver, and the expiry. A named account makes it possible to know who accessed the environment and to remove one person without disrupting everyone.",
      "If the staging system cannot support named accounts, document the compensating control. That might be a shared credential stored in a secret manager with access logging and a short rotation period. Do not accept a shared password in a ticket as the permanent answer. The exception should have an owner and a review date.",
      "## Use a secret manager for the handoff",
      "When a credential must be shared, put it in the approved secret manager and send a reference, not the value. Set an expiry that matches the task and revoke it when the task ends. Record who requested the secret and which ticket it supports. The ticket should show the reference and the expiry, never the secret itself.",
      "Check that the secret manager is available from the engineer's environment before the handoff. A reference that the engineer cannot open is not a handoff. Test the access path during onboarding and record the result. If the manager is down, the fallback should be a time-bound access grant, not a pasted password.",
      "## Redact before pasting logs or screenshots",
      "Logs and screenshots are a common source of credential leaks because they capture more than the author intended. Use a redaction filter before attaching a log, and crop screenshots to the relevant region. Check the edges for tokens, email addresses, and connection strings. A manual glance is not a reliable redaction method.",
      "If the evidence cannot be redacted without destroying the point, describe the finding in text and keep the raw evidence in the approved incident system. Record that the raw evidence exists and who can access it. The ticket should contain only what the reviewer needs to understand the issue. Delete the raw copy from the ticket after the reference is recorded.",
      "## Rotate on any suspected exposure",
      "Treat a credential pasted into a ticket as compromised, even if the message was deleted quickly. Rotate the secret, revoke the old value, and confirm that dependent services still work. Record the exposure time, the audience, and the rotation time. Deleting the message is not a remediation.",
      "Check whether the secret was copied into a log, a backup, or a vendor tool that the team does not control. If it was, the rotation may need to include downstream systems. Notify the client security contact when the credential belongs to them. A quiet rotation without a record leaves the next responder without context.",
      "## Review the sharing pattern each quarter",
      "Review the credential inventory and the access grants each quarter. Look for secrets that are still shared, grants that outlived their ticket, and accounts that no one recognizes. Remove what is no longer needed and record the removal. The review should take less than an hour if the inventory is current.",
      "Compare the review with the incident log and the access log. A credential that was rotated after an incident should not reappear in a ticket. If the same practice keeps returning, change the onboarding material or the ticket template. The control is only working if the behavior changes.",
      "Check the ticket templates for fields that invite a pasted secret, such as a free-text access notes box. Replace the box with a secret-manager reference field and a short help link. A template that asks for a password will receive one. Change the form before reminding people not to paste.",
      "## Train the team on the handoff",
      "Include the credential handoff in onboarding and practice it with a fake secret. Ask the new engineer to request access, retrieve the secret, use it, and revoke it. Observe where they hesitate and fix the instructions. A practice run is safer than discovering the gap during an incident.",
      "Tell the team what to do if they see a secret in a ticket. Give them a short path to report it, rotate it, and record the exposure. Do not punish the person who reports a mistake. A culture that hides leaks will produce longer exposures.",
      "Make the secure path faster than the insecure one, or people will keep pasting secrets. A short request form that issues a time-bound credential in minutes is more likely to be used than a week-long approval. Measure the request time and remove unnecessary steps. Security improves when the compliant path is convenient."
    ]
  },
  {
    "slug": "plan-a-dependency-upgrade-window-with-an-offshore-team",
    "title": "Plan a dependency upgrade window with an offshore team",
    "excerpt": "An upgrade window that gives an offshore engineer a tested sequence, a rollback point, and a clear owner for the release decision.",
    "minutes": 7,
    "published": "2026-11-05",
    "body": [
      "## Choose the upgrade by risk, not by age",
      "Not every outdated dependency needs the same urgency. Rank the upgrades by security exposure, runtime support, and the amount of code that depends on the package. A package with a known vulnerability and broad use comes before a cosmetic upgrade with no security impact. Record the reason for the order so the team can defend the plan.",
      "Check the release notes and the migration guide for breaking changes before estimating the work. A major version may change behavior that the tests do not cover. Write the specific behavior changes that apply to this repository. The engineer should know which changes to look for, not just which version to install.",
      "## Freeze the branch and define the window",
      "Create a dedicated branch for the upgrade and freeze unrelated changes to the same files during the window. State the start and end time in both time zones and name the person who can approve an exception. A freeze that is not communicated will be broken by a well-meaning teammate. Publish it where the team already looks.",
      "Keep the window short enough to review but long enough to run the full test suite. If the suite takes hours, run it before the window and repeat only the affected checks. Record the baseline test result before the upgrade. The comparison is the evidence that the upgrade did not break existing behavior.",
      "## Run the upgrade in a staging copy first",
      "Apply the upgrade in a staging copy with production-like data and configuration. Record the install output, the lockfile change, and any peer-dependency warnings. Run the application and the integration tests, not only the unit tests. A dependency that installs cleanly can still fail at runtime.",
      "Check the behavior that the release notes flagged, even if the tests pass. A passing suite can miss a changed default or a removed feature. Record the manual check and the observed result. If a behavior changed, decide whether to adapt the code or pin the version.",
      "## Keep a rollback point",
      "Record the exact commit and lockfile before the upgrade so the team can return to a known state. Test the rollback in the staging copy and measure how long it takes. If the rollback requires a database change, document the reversal before the upgrade reaches production. A rollback plan that has never been run is a guess.",
      "Decide in advance what would trigger a rollback, such as a failed smoke test, a broken critical path, or an unexplained error rate. Name the person who makes the call. The engineer should not have to invent the threshold during the incident. Write the trigger beside the rollback command.",
      "## Schedule the production release with coverage",
      "Choose a release time when both the offshore engineer and the client owner are available. Avoid the end of the offshore shift or the start of a client holiday. Record the coverage window and the escalation contact. A release without coverage turns a small issue into a long outage.",
      "Deploy in the smallest safe increment and watch the same signals used in staging. Compare the error rate, latency, and dependency-specific logs with the baseline. If the signal moves outside the agreed threshold, stop and roll back. The engineer should report the result with evidence, not a general assurance.",
      "## Verify the runtime and the lockfile",
      "After the release, confirm the runtime version, the resolved dependency tree, and the lockfile in the deployed artifact. A local upgrade that did not reach the build is a common failure. Record the artifact version and the deployment time. Compare them with the ticket before closing the work.",
      "Check that the package manager did not resolve a different version than the one tested. Lockfile drift can reintroduce the old vulnerability or introduce a new one. Run the dependency audit and attach the result. The upgrade is complete only when the deployed artifact matches the reviewed change.",
      "Record the packages that were upgraded but not deployed, and close or schedule them before the next window. A partially applied upgrade leaves the lockfile and the deployed artifact out of sync. The next engineer should not have to guess which changes are live. Review the list at the start of every window.",
      "## Review the window after the release",
      "After the release, compare the planned duration with the actual duration and the planned risk with what happened. Ask the engineer which step took longer than expected and why. Record one change to the upgrade checklist. The next window should be more predictable, not just faster.",
      "Check whether the freeze held and whether any unrelated change slipped in. If it did, review the communication rather than blaming the person. Update the freeze notice and the approval path. A dependency upgrade is a coordination exercise as much as a technical one.",
      "Keep a short list of packages that are allowed to upgrade without a window, such as development-only tools with no runtime effect. The list should be reviewed when the build or deployment process changes. A clear exception list prevents the freeze from becoming a blanket rule that the team ignores. Record the reason for each exception."
    ]
  }
];

export const november5BlogDetails = {
  "set-a-pull-request-size-limit-for-outsourced-feature-work": {
    "takeaways": [
      "Set the limit from the reviewer's attention, not a vanity target.",
      "Split by behavior so each pull request can be built and tested.",
      "Require test evidence inside the pull request description.",
      "Time-box review and treat urgent bypasses as visible exceptions."
    ],
    "readinessRows": [
      {
        "area": "Scope",
        "ready": "One behavior with a testable outcome.",
        "notReady": "A branch that mixes refactor, feature, and unrelated cleanup."
      },
      {
        "area": "Evidence",
        "ready": "Test command and observed output are attached.",
        "notReady": "A claim that it works locally without a reproducible check."
      },
      {
        "area": "Rollback",
        "ready": "The change can be reverted or disabled alone.",
        "notReady": "A rollback that depends on a second unreviewed change."
      },
      {
        "area": "Ownership",
        "ready": "A named reviewer and a response window exist.",
        "notReady": "A pull request in a general queue with no owner."
      }
    ],
    "sections": [
      {
        "id": "choose-a-limit-the-reviewer-can-actually-inspect",
        "title": "Choose a limit the reviewer can actually inspect",
        "paragraphs": [
          "A pull request size limit should be based on the reviewer's ability to inspect the change, not on an arbitrary target that looks tidy in a dashboard. Ask the reviewer how many changed lines they can read with attention in one sitting, then subtract time for tests and questions. A useful starting point is a few hundred changed lines for a routine feature, with a lower limit for security-sensitive code. The number matters less than the shared expectation behind it.",
          "Separate generated files, lockfiles, and formatting churn from the lines a reviewer must understand. A large lockfile should not consume the same review budget as a hand-written authorization change. State which files count toward the limit and which are excluded as mechanical. A limit that treats every line equally will either block harmless dependency updates or let a dangerous change hide inside noise."
        ]
      },
      {
        "id": "split-the-work-by-behavior-not-by-file",
        "title": "Split the work by behavior, not by file",
        "paragraphs": [
          "The most useful split is by behavior: one pull request adds the data model, the next exposes the endpoint, and the third adds the UI. Splitting by folder often produces pull requests that cannot be tested alone. Explain the sequence in the ticket so the reviewer understands how the parts fit. Each part should leave the application in a state that can be built and tested.",
          "Require the engineer to describe the user-visible outcome and the rollback path in the pull request description. If the branch cannot be rolled back without a second change, the split may be wrong. Keep the first change small enough to deploy behind a disabled flag. That pattern lets the team review and release incrementally without leaving the product in a broken state."
        ]
      },
      {
        "id": "make-the-test-evidence-part-of-the-limit",
        "title": "Make the test evidence part of the limit",
        "paragraphs": [
          "A pull request is not small if the reviewer cannot see the evidence that it works. Require the test command, the observed output, and the environment where it ran. For a UI change, include a before-and-after capture or a short recording. The evidence should fit in the pull request description rather than in a separate message that a future reviewer cannot find.",
          "If the change touches a shared contract, require a test that fails before the change and passes after it. Name the test in the description so the reviewer can run it directly. A change without a reproducible check is not ready for review, regardless of its line count. The limit should create room for that evidence, not replace it."
        ]
      },
      {
        "id": "set-a-review-time-box",
        "title": "Set a review time box",
        "paragraphs": [
          "A size limit without a review time box still allows a pull request to sit for days. Agree on a first-response time, such as one business day, and a completion time for a routine change. If the reviewer cannot start within the window, the author should be told rather than left waiting. The time box is a commitment to the engineer as much as to the product.",
          "Use the time box to decide when to split further. If a pull request cannot be reviewed within the agreed time, it is probably too large or too vague. Do not solve the problem by asking the reviewer to work late. Split the change or narrow the question so the review fits the available time."
        ]
      },
      {
        "id": "handle-urgent-fixes-without-abandoning-the-limit",
        "title": "Handle urgent fixes without abandoning the limit",
        "paragraphs": [
          "An urgent production fix may need to bypass the normal size limit, but it should not bypass the evidence requirement. Allow a small hotfix with a named approver, a rollback note, and a follow-up review. Record why the normal process was shortened and who accepted the risk. The exception should be visible in the same system as the change.",
          "After the fix, schedule the follow-up review before the next release. The follow-up should check whether the hotfix introduced a shortcut that needs cleanup. Do not let an emergency become the default way of working. If urgent changes are frequent, the team has a planning problem rather than a review problem."
        ]
      },
      {
        "id": "teach-the-limit-during-onboarding",
        "title": "Teach the limit during onboarding",
        "paragraphs": [
          "A new remote engineer should see two example pull requests during onboarding: one that is the right size and one that was split after review. Explain why the second was split and what the reviewer could not verify. Use the examples in the first week's practice ticket. A written rule is easier to follow when the person has seen it applied.",
          "Ask the new engineer to estimate the size of a real ticket before starting work. Compare the estimate with the actual diff and discuss the difference. The exercise teaches the engineer to plan for reviewability rather than discovering it at the end. It also gives the reviewer an early chance to narrow the scope."
        ]
      },
      {
        "id": "measure-the-effect-after-a-month",
        "title": "Measure the effect after a month",
        "paragraphs": [
          "After a month, compare review time, rework, and escaped defects for the new limit. Check whether small pull requests are reviewed faster and whether large ones are being split earlier. Look at the number of comments per change, because a very low count may mean the reviewer is not engaging. Use a small set of measures and keep the definition stable.",
          "Ask the reviewers whether the limit helped them find problems or merely added administrative work. If the limit is too tight, the team will spend more time on coordination than on review. Change one threshold and compare again. The goal is a review process that finds risk early, not a rule that looks good on a chart."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Prepare",
        "text": "The engineer prepares the branch, the test evidence, and the split plan."
      },
      {
        "label": "Review",
        "text": "The client reviewer inspects behavior, risk, and rollback, then approves or requests a change."
      },
      {
        "label": "Release",
        "text": "The client technical owner keeps merge and production authority."
      }
    ],
    "faqs": [
      {
        "question": "What is a reasonable pull request size limit?",
        "answer": "Start with a few hundred changed hand-written lines for a routine feature and lower it for security-sensitive areas. Measure review time and adjust one threshold at a time."
      },
      {
        "question": "Do generated files count toward the limit?",
        "answer": "No. Exclude lockfiles and generated output, but require the author to identify them so the reviewer knows what was mechanical."
      },
      {
        "question": "Can an urgent fix bypass the limit?",
        "answer": "Yes, with a named approver, a rollback note, and a follow-up review. The exception should be recorded, not hidden."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "GitHub Docs, reviewing changes in pull requests",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "ISO/IEC/IEEE 29119 software testing",
        "url": "https://www.iso.org/standard/45142.html",
        "note": "Authoritative guidance used to frame this field guide."
      }
    ],
    "heroImage": "/nov05/blog/set-a-pull-request-size-limit-for-outsourced-feature-work.webp"
  },
  "control-a-database-migration-handoff-between-shifts": {
    "takeaways": [
      "Record schema and application state, not just the migration script.",
      "Keep an executable rollback path with a tested backup.",
      "Name the next decision, owner, and deadline before the handoff.",
      "Have a second engineer verify the record in a shared environment."
    ],
    "readinessRows": [
      {
        "area": "State",
        "ready": "Migration version and application version are recorded for each environment.",
        "notReady": "A note that says the migration is done without naming the app version."
      },
      {
        "area": "Rollback",
        "ready": "Commands, backup location, and duration are tested.",
        "notReady": "A down script that has never been run."
      },
      {
        "area": "Decision",
        "ready": "The next question, owner, and deadline are written.",
        "notReady": "A migration waiting for an unnamed approval."
      },
      {
        "area": "Verification",
        "ready": "A destination query and its result are attached.",
        "notReady": "A status label with no observed output."
      }
    ],
    "sections": [
      {
        "id": "record-the-migration-state-before-the-handoff",
        "title": "Record the migration state before the handoff",
        "paragraphs": [
          "A migration handoff should begin with the current state of the schema, not a summary of what the engineer intended. Record the migration version applied to each environment, the pending scripts, and the checks that have run. Note the exact commit and the database snapshot used for the last rehearsal. The next engineer should be able to see whether the change is half-applied, fully applied, or still only planned.",
          "Separate the schema state from the application state, because a migration can be applied before the code that depends on it is deployed. Record which application version expects the new schema and whether that version is live. A handoff that says the migration is done without naming the application state can cause a deploy to fail. Use one shared record for both states."
        ]
      },
      {
        "id": "keep-the-rollback-path-executable",
        "title": "Keep the rollback path executable",
        "paragraphs": [
          "A rollback plan is only useful if the next engineer can run it without reconstructing the original environment. Write the exact commands, the backup location, and the expected duration. Test the rollback in a staging copy and record the result. If the rollback depends on a person or a credential, name them and confirm availability before the handoff.",
          "Distinguish a reversible migration from one that destroys data. A column drop or a type change may not be reversible without a backup, so the handoff should state the backup time and the retention period. Do not describe a destructive change as reversible just because a down script exists. The reviewer should see the data consequence in plain language."
        ]
      },
      {
        "id": "name-the-next-decision-and-owner",
        "title": "Name the next decision and owner",
        "paragraphs": [
          "The handoff should end with the next decision, the person who will make it, and the time by which it is needed. The decision might be to proceed to production, to run a second rehearsal, or to pause for a data check. Write the question in one sentence so the next engineer does not have to infer it. A migration that waits for an unnamed approval is a migration that will be rushed later.",
          "If the decision requires a business owner, include the evidence that owner needs. A schema change that affects reporting may need a finance review, while a change that affects access may need a security review. Record the review status and the contact. The next shift can then follow up with the right person instead of guessing."
        ]
      },
      {
        "id": "test-the-handoff-with-a-second-engineer",
        "title": "Test the handoff with a second engineer",
        "paragraphs": [
          "Before the handoff, ask a second engineer to read the record and explain what they would do next. If they cannot state the current version, the rollback command, and the next decision, the record is incomplete. Fix the record before the original engineer goes offline. The test should use the same systems the next engineer will actually use.",
          "Run one dry-run command from the record in a non-production environment and confirm that the output matches the note. A command that works on the author's machine but fails in the shared environment is not a handoff. Record the result of the dry run and the time it was performed. That evidence gives the next shift confidence to act."
        ]
      },
      {
        "id": "freeze-unrelated-schema-changes",
        "title": "Freeze unrelated schema changes",
        "paragraphs": [
          "During a migration window, unrelated schema changes should wait. Two migrations that touch the same table can interact in ways that neither author anticipated. Publish the freeze window and the tables it covers. Ask the team to route new schema requests to the migration owner until the window closes.",
          "If an unrelated change cannot wait, review it with the migration owner before it is applied. Record the decision and the new sequence. Do not let a routine change slip in because it looks small. The freeze is a coordination tool, not a punishment, and it should end when the migration is verified."
        ]
      },
      {
        "id": "verify-the-destination-after-the-handoff",
        "title": "Verify the destination after the handoff",
        "paragraphs": [
          "The receiving engineer should verify the destination state rather than trusting the note. Check the migration table, the schema version, and one application query that depends on the change. Record the verification time and the result. A handoff is not complete until the next person has observed the state for themselves.",
          "If the verification fails, stop and return to the last known good state. Do not attempt a second migration on top of an unverified first one. Record the failure, the rollback action, and the owner who decided to stop. The record should make the recovery path obvious to the next person."
        ]
      },
      {
        "id": "review-the-handoff-after-the-window",
        "title": "Review the handoff after the window",
        "paragraphs": [
          "After the migration window, review the handoff record with both engineers. Ask which field was most useful and which was missing. Check whether the rollback was tested and whether the destination verification caught anything. Record one change to the template for the next migration.",
          "Compare the actual duration with the estimate and the actual data impact with the plan. A migration that took twice as long may indicate an untested dependency rather than a slow engineer. Update the estimate method and the rehearsal checklist. The next handoff should be easier to verify, not longer to read."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Prepare",
        "text": "The engineer records state, rollback, and evidence before going offline."
      },
      {
        "label": "Review",
        "text": "The client reviewer confirms the data consequence and the release decision."
      },
      {
        "label": "Release",
        "text": "The client technical owner runs or approves the production migration."
      }
    ],
    "faqs": [
      {
        "question": "Who should own a migration handoff?",
        "answer": "The engineer who started the change owns the record until a named receiver confirms the state and the next decision."
      },
      {
        "question": "Is a down script enough for rollback?",
        "answer": "No. Test the rollback in a staging copy and record the backup, duration, and any data loss."
      },
      {
        "question": "Can unrelated schema changes continue during the window?",
        "answer": "Only with the migration owner's review and a recorded decision. A freeze is the safer default."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "OpenTelemetry documentation",
        "url": "https://opentelemetry.io/docs/",
        "note": "Authoritative guidance used to frame this field guide."
      }
    ],
    "heroImage": "/nov05/blog/control-a-database-migration-handoff-between-shifts.webp"
  },
  "review-a-remote-engineers-on-call-runbook-before-handoff": {
    "takeaways": [
      "Map the runbook to the alerts the engineer will actually receive.",
      "Test the first diagnostic step in a shared environment.",
      "Separate read-only diagnosis from production recovery authority.",
      "Use a shadow shift and a written confirmation before solo on-call."
    ],
    "readinessRows": [
      {
        "area": "Alerts",
        "ready": "Every alert has an owner, threshold, and first action.",
        "notReady": "An alert that fires with no runbook entry."
      },
      {
        "area": "Access",
        "ready": "The engineer can run the first diagnostic step.",
        "notReady": "A runbook that points to a tool the engineer cannot open."
      },
      {
        "area": "Authority",
        "ready": "Recovery actions and approvers are named.",
        "notReady": "A runbook that implies production write access."
      },
      {
        "area": "Escalation",
        "ready": "Names, channels, and response windows are current.",
        "notReady": "A contact list that has not been checked this month."
      }
    ],
    "sections": [
      {
        "id": "start-with-the-alerts-the-engineer-will-receive",
        "title": "Start with the alerts the engineer will receive",
        "paragraphs": [
          "A runbook is only as good as the alerts it covers, so begin by listing the alerts the remote engineer will actually receive. Include the alert name, the service, the threshold, and the expected first action. If an alert can fire without a runbook entry, the on-call handoff is incomplete. The list should come from the monitoring system, not from memory.",
          "For each alert, record what a normal reading looks like and what would make it urgent. A threshold without context invites the engineer to guess. Include the time window and the aggregation method so the engineer knows whether a spike is real. The goal is a first decision, not a full diagnosis."
        ]
      },
      {
        "id": "test-the-first-diagnostic-step",
        "title": "Test the first diagnostic step",
        "paragraphs": [
          "Ask the remote engineer to run the first diagnostic step in a staging environment while the author observes. The step might be a dashboard query, a log search, or a health check. Confirm that the engineer has access and that the output matches the runbook. A step that cannot be run is a documentation gap, not a training gap.",
          "Record the time it takes to find the relevant signal. If the engineer spends most of the time navigating tools, the runbook needs a direct link. If the engineer cannot interpret the output, the runbook needs an example. Fix the document before the next practice session."
        ]
      },
      {
        "id": "separate-diagnosis-from-recovery-authority",
        "title": "Separate diagnosis from recovery authority",
        "paragraphs": [
          "The remote engineer may be able to diagnose an incident without being allowed to change production. Write the boundary explicitly: which actions are read-only, which require approval, and which are forbidden. Name the person who can approve a restart, a rollback, or a traffic shift. A runbook that implies authority the engineer does not have will lead to a blocked incident.",
          "For each recovery action, include the evidence the engineer must collect before and after. A restart without a before-and-after log is hard to review. A rollback without the deployed version and the rollback target is dangerous. The runbook should make the evidence part of the action, not an optional extra."
        ]
      },
      {
        "id": "write-the-escalation-path-with-names",
        "title": "Write the escalation path with names",
        "paragraphs": [
          "Replace the general instruction to escalate with a named path for each severity. Include the primary contact, the backup, the channel, and the expected response window. State what information the engineer should send in the first message. A clear escalation template saves time when the incident is already stressful.",
          "Check the path against the actual on-call schedule for the next month. A name that is on vacation is not a path. Record the date the schedule was checked and the person who confirmed it. Update the runbook when the schedule changes, not after an escalation fails."
        ]
      },
      {
        "id": "practice-one-realistic-incident",
        "title": "Practice one realistic incident",
        "paragraphs": [
          "Run a tabletop exercise using a recent incident with the customer data removed. Ask the engineer to follow the runbook and narrate each decision. Pause when the runbook is ambiguous and record the question. The exercise should end with the engineer proposing one change to the document.",
          "Do not use the exercise to test whether the engineer can solve the incident alone. Test whether the runbook gives them a safe next step. If the engineer needed to ask the author for information that should have been written down, add it. The goal is independence with evidence, not heroics."
        ]
      },
      {
        "id": "keep-the-runbook-current",
        "title": "Keep the runbook current",
        "paragraphs": [
          "Assign an owner and a review date to every runbook section. A runbook that is reviewed once and never again will drift from the system. Add a short change log so the engineer can see what changed and why. Link the runbook to the service repository so a code change can trigger a review.",
          "When an incident reveals a gap, update the runbook before closing the incident review. Record the change and the person who approved it. If the gap was caused by an architecture change, add the architecture dependency to the review. A runbook is a living control, not a one-time deliverable."
        ]
      },
      {
        "id": "hand-off-with-a-shadow-shift",
        "title": "Hand off with a shadow shift",
        "paragraphs": [
          "Before the remote engineer takes on-call alone, schedule a shadow shift where they follow the runbook while the author is available. The author should observe without taking over. Record the questions the engineer asked and the steps that were slow. Use the notes to improve the runbook and the training.",
          "End the shadow shift with a written confirmation that the engineer can find the alerts, run the diagnostics, and escalate to the right person. Name the date the engineer becomes primary and the backup for the first week. A shadow shift is not a formality, and the confirmation should be based on observed work. Keep the confirmation with the on-call schedule so the next rotation can see it."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Prepare",
        "text": "The engineer studies the alerts, diagnostics, and escalation path."
      },
      {
        "label": "Review",
        "text": "The client owner confirms authority, access, and the current on-call schedule."
      },
      {
        "label": "Release",
        "text": "The client technical owner approves production recovery actions."
      }
    ],
    "faqs": [
      {
        "question": "Can a remote engineer restart production?",
        "answer": "Only if the runbook grants that authority with a named approver and an evidence requirement. Otherwise the engineer diagnoses and escalates."
      },
      {
        "question": "How often should the runbook be reviewed?",
        "answer": "At least quarterly and after every incident, architecture change, or on-call schedule change."
      },
      {
        "question": "What does a shadow shift prove?",
        "answer": "That the engineer can find alerts, run diagnostics, and escalate using the written runbook while support is available."
      }
    ],
    "sources": [
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "OpenTelemetry documentation",
        "url": "https://opentelemetry.io/docs/",
        "note": "Authoritative guidance used to frame this field guide."
      }
    ],
    "heroImage": "/nov05/blog/review-a-remote-engineers-on-call-runbook-before-handoff.webp"
  },
  "keep-staging-credentials-out-of-a-shared-ticket": {
    "takeaways": [
      "Inventory every place staging credentials are shared today.",
      "Use named accounts and short-lived secret references, not pasted values.",
      "Redact logs and screenshots before attaching them.",
      "Rotate and record any credential that may have been exposed."
    ],
    "readinessRows": [
      {
        "area": "Account",
        "ready": "Each engineer has a named staging account.",
        "notReady": "A shared password used by the whole team."
      },
      {
        "area": "Handoff",
        "ready": "A secret-manager reference and expiry are recorded.",
        "notReady": "A password pasted into a ticket or chat."
      },
      {
        "area": "Evidence",
        "ready": "Logs and screenshots are redacted before sharing.",
        "notReady": "A raw log with tokens attached to the ticket."
      },
      {
        "area": "Review",
        "ready": "Access is removed when the ticket closes.",
        "notReady": "A grant that remains active after the work ends."
      }
    ],
    "sections": [
      {
        "id": "inventory-where-credentials-are-shared-today",
        "title": "Inventory where credentials are shared today",
        "paragraphs": [
          "Start by finding the places where staging credentials are currently shared. Search tickets, chat channels, onboarding notes, and repository files for connection strings, passwords, and tokens. Record the system, the credential type, and the audience. You cannot remove a practice you have not located.",
          "Separate shared credentials from personal accounts. A shared staging password is harder to audit and rotate than a named account with a role. A personal token pasted into a ticket is still a leak, even if only one person used it. The inventory should show both the shared secret and the person who knows it."
        ]
      },
      {
        "id": "replace-the-shared-secret-with-a-named-account",
        "title": "Replace the shared secret with a named account",
        "paragraphs": [
          "Give each engineer a named account with the minimum role needed for staging. Use the identity provider to grant access through a group rather than a manually maintained password. Record the request, the approver, and the expiry. A named account makes it possible to know who accessed the environment and to remove one person without disrupting everyone.",
          "If the staging system cannot support named accounts, document the compensating control. That might be a shared credential stored in a secret manager with access logging and a short rotation period. Do not accept a shared password in a ticket as the permanent answer. The exception should have an owner and a review date."
        ]
      },
      {
        "id": "use-a-secret-manager-for-the-handoff",
        "title": "Use a secret manager for the handoff",
        "paragraphs": [
          "When a credential must be shared, put it in the approved secret manager and send a reference, not the value. Set an expiry that matches the task and revoke it when the task ends. Record who requested the secret and which ticket it supports. The ticket should show the reference and the expiry, never the secret itself.",
          "Check that the secret manager is available from the engineer's environment before the handoff. A reference that the engineer cannot open is not a handoff. Test the access path during onboarding and record the result. If the manager is down, the fallback should be a time-bound access grant, not a pasted password."
        ]
      },
      {
        "id": "redact-before-pasting-logs-or-screenshots",
        "title": "Redact before pasting logs or screenshots",
        "paragraphs": [
          "Logs and screenshots are a common source of credential leaks because they capture more than the author intended. Use a redaction filter before attaching a log, and crop screenshots to the relevant region. Check the edges for tokens, email addresses, and connection strings. A manual glance is not a reliable redaction method.",
          "If the evidence cannot be redacted without destroying the point, describe the finding in text and keep the raw evidence in the approved incident system. Record that the raw evidence exists and who can access it. The ticket should contain only what the reviewer needs to understand the issue. Delete the raw copy from the ticket after the reference is recorded."
        ]
      },
      {
        "id": "rotate-on-any-suspected-exposure",
        "title": "Rotate on any suspected exposure",
        "paragraphs": [
          "Treat a credential pasted into a ticket as compromised, even if the message was deleted quickly. Rotate the secret, revoke the old value, and confirm that dependent services still work. Record the exposure time, the audience, and the rotation time. Deleting the message is not a remediation.",
          "Check whether the secret was copied into a log, a backup, or a vendor tool that the team does not control. If it was, the rotation may need to include downstream systems. Notify the client security contact when the credential belongs to them. A quiet rotation without a record leaves the next responder without context."
        ]
      },
      {
        "id": "review-the-sharing-pattern-each-quarter",
        "title": "Review the sharing pattern each quarter",
        "paragraphs": [
          "Review the credential inventory and the access grants each quarter. Look for secrets that are still shared, grants that outlived their ticket, and accounts that no one recognizes. Remove what is no longer needed and record the removal. The review should take less than an hour if the inventory is current.",
          "Compare the review with the incident log and the access log. A credential that was rotated after an incident should not reappear in a ticket. If the same practice keeps returning, change the onboarding material or the ticket template. The control is only working if the behavior changes."
        ]
      },
      {
        "id": "train-the-team-on-the-handoff",
        "title": "Train the team on the handoff",
        "paragraphs": [
          "Include the credential handoff in onboarding and practice it with a fake secret. Ask the new engineer to request access, retrieve the secret, use it, and revoke it. Observe where they hesitate and fix the instructions. A practice run is safer than discovering the gap during an incident.",
          "Tell the team what to do if they see a secret in a ticket. Give them a short path to report it, rotate it, and record the exposure. Do not punish the person who reports a mistake. A culture that hides leaks will produce longer exposures."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Prepare",
        "text": "The engineer requests a named account and a short-lived secret reference."
      },
      {
        "label": "Review",
        "text": "The client owner approves the minimum role and the expiry."
      },
      {
        "label": "Release",
        "text": "The client security owner confirms rotation and removal."
      }
    ],
    "faqs": [
      {
        "question": "Is a shared staging password acceptable?",
        "answer": "Only as a documented exception with a compensating control, a short rotation period, and a named review date."
      },
      {
        "question": "What should be pasted into a ticket?",
        "answer": "A secret-manager reference and expiry, never the credential value. Redact logs and screenshots before attaching them."
      },
      {
        "question": "What if a secret was already exposed?",
        "answer": "Rotate it, revoke the old value, verify dependent services, and record the exposure and rotation times."
      }
    ],
    "sources": [
      {
        "name": "OWASP Application Security Verification Standard",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Authoritative guidance used to frame this field guide."
      }
    ],
    "heroImage": "/nov05/blog/keep-staging-credentials-out-of-a-shared-ticket.webp"
  },
  "plan-a-dependency-upgrade-window-with-an-offshore-team": {
    "takeaways": [
      "Rank upgrades by security exposure, runtime support, and code impact.",
      "Freeze the branch and record a baseline test result before the window.",
      "Test the upgrade and the rollback in a staging copy.",
      "Verify the deployed artifact and lockfile before closing the ticket."
    ],
    "readinessRows": [
      {
        "area": "Risk",
        "ready": "The upgrade is ranked with a written reason.",
        "notReady": "A list ordered only by release date."
      },
      {
        "area": "Baseline",
        "ready": "The pre-upgrade test result is recorded.",
        "notReady": "A test run only after the upgrade."
      },
      {
        "area": "Rollback",
        "ready": "Commit, lockfile, and rollback time are tested.",
        "notReady": "A rollback plan that has never been run."
      },
      {
        "area": "Artifact",
        "ready": "The deployed version matches the reviewed lockfile.",
        "notReady": "A local upgrade that never reached the build."
      }
    ],
    "sections": [
      {
        "id": "choose-the-upgrade-by-risk-not-by-age",
        "title": "Choose the upgrade by risk, not by age",
        "paragraphs": [
          "Not every outdated dependency needs the same urgency. Rank the upgrades by security exposure, runtime support, and the amount of code that depends on the package. A package with a known vulnerability and broad use comes before a cosmetic upgrade with no security impact. Record the reason for the order so the team can defend the plan.",
          "Check the release notes and the migration guide for breaking changes before estimating the work. A major version may change behavior that the tests do not cover. Write the specific behavior changes that apply to this repository. The engineer should know which changes to look for, not just which version to install."
        ]
      },
      {
        "id": "freeze-the-branch-and-define-the-window",
        "title": "Freeze the branch and define the window",
        "paragraphs": [
          "Create a dedicated branch for the upgrade and freeze unrelated changes to the same files during the window. State the start and end time in both time zones and name the person who can approve an exception. A freeze that is not communicated will be broken by a well-meaning teammate. Publish it where the team already looks.",
          "Keep the window short enough to review but long enough to run the full test suite. If the suite takes hours, run it before the window and repeat only the affected checks. Record the baseline test result before the upgrade. The comparison is the evidence that the upgrade did not break existing behavior."
        ]
      },
      {
        "id": "run-the-upgrade-in-a-staging-copy-first",
        "title": "Run the upgrade in a staging copy first",
        "paragraphs": [
          "Apply the upgrade in a staging copy with production-like data and configuration. Record the install output, the lockfile change, and any peer-dependency warnings. Run the application and the integration tests, not only the unit tests. A dependency that installs cleanly can still fail at runtime.",
          "Check the behavior that the release notes flagged, even if the tests pass. A passing suite can miss a changed default or a removed feature. Record the manual check and the observed result. If a behavior changed, decide whether to adapt the code or pin the version."
        ]
      },
      {
        "id": "keep-a-rollback-point",
        "title": "Keep a rollback point",
        "paragraphs": [
          "Record the exact commit and lockfile before the upgrade so the team can return to a known state. Test the rollback in the staging copy and measure how long it takes. If the rollback requires a database change, document the reversal before the upgrade reaches production. A rollback plan that has never been run is a guess.",
          "Decide in advance what would trigger a rollback, such as a failed smoke test, a broken critical path, or an unexplained error rate. Name the person who makes the call. The engineer should not have to invent the threshold during the incident. Write the trigger beside the rollback command."
        ]
      },
      {
        "id": "schedule-the-production-release-with-coverage",
        "title": "Schedule the production release with coverage",
        "paragraphs": [
          "Choose a release time when both the offshore engineer and the client owner are available. Avoid the end of the offshore shift or the start of a client holiday. Record the coverage window and the escalation contact. A release without coverage turns a small issue into a long outage.",
          "Deploy in the smallest safe increment and watch the same signals used in staging. Compare the error rate, latency, and dependency-specific logs with the baseline. If the signal moves outside the agreed threshold, stop and roll back. The engineer should report the result with evidence, not a general assurance."
        ]
      },
      {
        "id": "verify-the-runtime-and-the-lockfile",
        "title": "Verify the runtime and the lockfile",
        "paragraphs": [
          "After the release, confirm the runtime version, the resolved dependency tree, and the lockfile in the deployed artifact. A local upgrade that did not reach the build is a common failure. Record the artifact version and the deployment time. Compare them with the ticket before closing the work.",
          "Check that the package manager did not resolve a different version than the one tested. Lockfile drift can reintroduce the old vulnerability or introduce a new one. Run the dependency audit and attach the result. The upgrade is complete only when the deployed artifact matches the reviewed change."
        ]
      },
      {
        "id": "review-the-window-after-the-release",
        "title": "Review the window after the release",
        "paragraphs": [
          "After the release, compare the planned duration with the actual duration and the planned risk with what happened. Ask the engineer which step took longer than expected and why. Record one change to the upgrade checklist. The next window should be more predictable, not just faster.",
          "Check whether the freeze held and whether any unrelated change slipped in. If it did, review the communication rather than blaming the person. Update the freeze notice and the approval path. A dependency upgrade is a coordination exercise as much as a technical one."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Prepare",
        "text": "The engineer ranks the upgrade, records the baseline, and tests the rollback."
      },
      {
        "label": "Review",
        "text": "The client reviewer checks behavior changes and the release window."
      },
      {
        "label": "Release",
        "text": "The client technical owner approves the production deploy and rollback trigger."
      }
    ],
    "faqs": [
      {
        "question": "Who decides when to roll back an upgrade?",
        "answer": "The named release owner, using the trigger written before the window. The engineer can recommend a rollback but should not invent the threshold."
      },
      {
        "question": "Do we need a freeze for a patch upgrade?",
        "answer": "Yes for shared files and the lockfile. A patch can still change resolution or runtime behavior."
      },
      {
        "question": "What proves the upgrade reached production?",
        "answer": "The deployed artifact version and the resolved dependency tree, compared with the reviewed lockfile."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "OWASP Application Security Verification Standard",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Authoritative guidance used to frame this field guide."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Authoritative guidance used to frame this field guide."
      }
    ],
    "heroImage": "/nov05/blog/plan-a-dependency-upgrade-window-with-an-offshore-team.webp"
  }
};
