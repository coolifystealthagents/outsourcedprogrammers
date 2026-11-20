export const november20BlogBatch = [
  {
    "slug": "set-a-third-party-api-rate-limit-budget-for-an-outsourced-integration-lane",
    "title": "Set a third-party API rate limit budget for an outsourced integration lane",
    "excerpt": "A budget that measures normal peak calls, splits customer traffic from batch work, and names the backoff, queue, and stop rules before the vendor throttles the lane.",
    "minutes": 8,
    "published": "2026-11-20",
    "body": [
      "## Name the vendors and the call paths that consume quota",
      "Start the budget with a list of every vendor that meters calls, not only the vendors that bill by the month. Include payment, messaging, identity, shipping, search, and any API that sits inside a customer action. Record the endpoint or method that consumes the quota and the unit the vendor counts. A budget written against vendors rather than call paths will miss the endpoint that actually runs out.",
      "Trace one real customer journey and one real batch job, then write down each external call in order. Note which calls repeat per user, per order, or per record in a nightly job. Record the account or credential that each call uses, because many vendors meter per key rather than per company. The trace gives the team the shape of the demand before anyone argues about limits.",
      "## Measure the normal peak before setting a budget",
      "Measure the traffic on the busiest normal day and the busiest expected campaign day. Record the peak per minute, the burst pattern, and the share of retries inside that peak. Use the vendor dashboard and the application metrics so a proxy or cache does not hide the real call count. A budget chosen from an average day will fail during the first launch.",
      "Separate the calls that a customer is waiting for from the calls that can wait. Record the latency target for the interactive path and the completion target for the batch path. Note the vendors that allow a higher limit on request and the ones that raise it only through a contract change. The separation tells the team which calls deserve the protected share of the quota.",
      "## Split the quota between customer traffic and batch work",
      "Reserve a protected share of the quota for the calls a customer is waiting on. Give the batch jobs a separate share, and make the batch share stop before it can consume the reserve. Record the percentage and the owner of each share in the delivery agreement. An unprotected batch job will always find a way to spend the last token at the worst moment.",
      "Use separate credentials or separate vendor projects where the platform supports them. That split makes the metering visible and lets the team throttle one lane without touching the other. Record which jobs and services use each credential and who can rotate it. A shared key hides the source of a spike until the vendor sends the bill.",
      "## Write the backoff and queue rule",
      "Write the rule for a 429 response and for the vendor-specific throttle codes. Require exponential backoff with jitter, a maximum attempt count, and a recorded reason for every retry. Name the queue or dead-letter path for calls that still fail after the limit. A retry loop without a cap turns a short throttle into a longer outage.",
      "Decide which calls may be queued and which must fail visibly to the customer. Record the customer message for a deferred action and the time when the team will retry. Give the queue a depth limit and an alert when it grows past the normal range. A queue that accepts unlimited work hides the failure until storage or patience runs out.",
      "## Watch the quota from the vendor and the application side",
      "Watch the vendor dashboard for the remaining quota and the reset window. Watch the application for call rate, error rate, retry count, and queue depth on the same dashboard. Record the threshold that triggers a page and the person who receives it. Two views are needed because a vendor can throttle before its dashboard shows a problem.",
      "Record the vendor's stated reset time and the clock the team uses. Compare the metric timestamps so a reviewer can line up a spike with a customer report. Note the calls that a cache absorbs so the team does not overstate the saving. A quota review that ignores time zones will misread the reset.",
      "## Decide what happens when the budget runs out",
      "Write a stop rule that names the feature the team will degrade and the person who can approve it. Examples include pausing a nightly sync, showing a pickup option, or delaying a nonessential enrichment. Record the customer message and the recovery step for the work that was deferred. A stop rule agreed in advance is faster than a debate during the incident.",
      "Name the escalation contact at the vendor and the contract term that applies to a limit increase. Record the expected lead time so nobody promises a fix the vendor cannot meet. Keep the request template with the current usage numbers ready to send. The escalation should start before the reserve is empty, not after.",
      "## Review the budget after a vendor or traffic change",
      "Review the budget when a vendor changes its limits, pricing, or endpoint behavior. Re-measure the peak after a new feature, a campaign, or a batch schedule change. Record the new headroom and the date of the measurement. A budget that is never re-measured slowly becomes a guess about last year's traffic.",
      "Check one month of 429 responses and one month of queue depth against the written rule. Record the calls that were retried and the calls that were dropped. Give the finding to the client technical owner with one change and an owner. The review should shorten the list of surprises, not lengthen the runbook."
    ]
  },
  {
    "slug": "write-a-data-backfill-rehearsal-plan-for-an-outsourced-release",
    "title": "Write a data backfill rehearsal plan for an outsourced release",
    "excerpt": "A rehearsal that freezes the input, runs the backfill on a production-like copy, proves counts and the customer path, and keeps a pause rule for the real run.",
    "minutes": 8,
    "published": "2026-11-20",
    "body": [
      "## Define the rows and the end state",
      "Write the exact set of rows the backfill must change and the value each row should hold at the end. Include the query or key range, the tables touched, and the rows that must not change. Record the application version that expects the new state. A backfill without a written end state cannot be verified, only hoped over.",
      "Name the source of truth for the new value and the time boundary for inclusion. Decide whether late-arriving rows are handled by the script or by a follow-up job. Record the rows that are intentionally excluded and why. The exclusion list is the part reviewers forget until a customer appears with an old record.",
      "## Freeze the input before the rehearsal",
      "Freeze the input by taking a snapshot or by recording the maximum identifier at a stated time. Write the snapshot identifier, the timestamp, and the storage location in the rehearsal note. Use a copy that the team can restore without touching production. A moving input turns every count comparison into an argument.",
      "Record the schema version, the indexes, and the constraints on the target copy. Note the extensions, collation, and time zone that affect comparisons. Confirm that the copy holds enough rows to exercise the largest batch and the slowest path. A small sample can pass while the production size fails on locks or timeouts.",
      "## Run the backfill against a production-like copy",
      "Run the real script, not a hand-edited version, against the production-like copy. Record the start time, the batch size, the pause between batches, and the finish time. Capture the query plan and the lock waits for the slowest statement. The rehearsal should measure the pressure the real run will place on the database.",
      "Watch the application while the backfill runs, because a long transaction can block customer writes. Record the read and write latency on the customer path during the run. Note the point where the batch size or pause needed a change. A backfill that only passes on an idle database has not been tested.",
      "## Compare counts and spot-check the customer path",
      "Compare the affected row count with the frozen input and with the expected end state. Reconcile the difference row by row, not only as a total, because two errors can cancel out. Record the checksum or a stable hash for the changed values. A count that matches while the values differ is still a failed rehearsal.",
      "Open the customer path on the copy and check the screens that read the new values. Test a search, a report, and one write that depends on the backfilled field. Record the account, the data, and the result of each check. A backfill that satisfies a database query but breaks a screen is not finished.",
      "## Set the pause and rollback rule",
      "Write the condition that pauses the real run, such as a lock wait over the agreed threshold or an error rate on the customer path. Name the person who can pause it and the person who can resume. Record the command and the check that confirms the pause worked. A pause rule known only to the script author is not a control.",
      "Decide whether the rollback rewrites the old values or restores the snapshot. Record the time and storage cost of each option and the point of no return. Keep the old values in a side table when an in-place rollback would be slow. The rollback should be chosen before the run, not improvised during it.",
      "## Schedule the production run with a named owner",
      "Schedule the run in a window when the customer traffic and the batch jobs leave enough headroom. Record the start time, the expected duration, the on-call engineer, and the client contact. Confirm that the database backup is recent and restorable before the run begins. A production backfill on an unverified backup is an avoidable risk.",
      "Announce the run to support with the customer symptom to watch and the message to use if a screen looks wrong. Give support a reference number and a named escalation contact. Record the confirmation from the client owner. The people who answer customers should hear about the change before the customers do.",
      "## Keep the evidence and retire the script",
      "Store the rehearsal record with the query, the timings, the counts, the diffs, and the pause test. Give the client technical owner the record and keep a copy in the delivery workspace. List the manual steps and the person who performed each one. The next engineer should be able to repeat the run without asking the author.",
      "Retire the backfill script when the release no longer needs it, and record the date and the final row count. Keep the script and the record for the retention period in the agreement. Remove any temporary table or elevated permission created for the run. A backfill script left in the repository becomes a tool that someone runs without the plan."
    ]
  },
  {
    "slug": "set-an-alert-routing-review-for-an-offshore-support-pod",
    "title": "Set an alert routing review for an offshore support pod",
    "excerpt": "A routing review that ties each alert to a customer symptom, names a primary and backup responder, removes unactionable pages, and tests the route with a safe failure.",
    "minutes": 8,
    "published": "2026-11-20",
    "body": [
      "## List the alerts that can page a person",
      "Export every alert rule that can page, message, or open a ticket for the support pod. Include the monitoring system, the cloud console, the queue, the payment provider, and any vendor that sends a webhook. Record the rule owner and the last time the alert fired. A list built from memory will miss the rules that fire rarely and matter most.",
      "Separate an alert that reaches a person from a dashboard that only changes color. Record the route, the escalation policy, and the channel for each alert. Note the alerts that page a group alias rather than a named person. The review is about who is woken up, not about how many charts exist.",
      "## Map each alert to a customer symptom",
      "Write the customer symptom that the alert is meant to catch, using the words a support agent would use. For example, checkout failures, missing confirmations, or slow account pages. Record the threshold and the time window that turn the metric into a page. An alert that cannot be tied to a symptom is a candidate for a dashboard.",
      "Check for alerts that describe an internal cause but not the customer effect. A high CPU alert may be harmless, while a queue age alert may be the real signal. Record the evidence the responder should look at first. The mapping should shorten the path from page to customer impact.",
      "## Name the primary and backup responder",
      "Give every paging alert a named primary and a named backup for each shift. Record the time zone and the handoff hour so the route follows the sun rather than a mailbox. Confirm that both people can access the console and the runbook. A route to a team alias has no accountable person at three in the morning.",
      "Record the escalation step when the primary does not acknowledge within the agreed minutes. Name the next person and the channel, and test that the step reaches them. Keep the schedule in the same place as the rota, not in a personal calendar. An escalation path that depends on one manager is a single point of failure.",
      "## Remove alerts that nobody can act on",
      "Remove or downgrade alerts that fire without a clear action or a customer symptom. Record the reason and the date, and move the signal to a dashboard if it still has diagnostic value. Ask the last responder what they did when the alert fired. If the answer was to silence it, the rule is noise.",
      "Group related alerts so one incident does not open twenty tickets. Record the grouping rule and the alert that represents the group. Keep a separate page for the condition that needs a different skill. Fewer, clearer pages are easier to trust than a wall of notifications.",
      "## Test the route with a safe failure",
      "Trigger a safe failure on a nonproduction service and follow the page from the monitoring system to the responder. Record the time to delivery, the channel, and the information in the message. Confirm that the message names the service, the environment, and the runbook link. A route that has never been tested is a configuration, not a capability.",
      "Test the backup and the escalation step on the same exercise, not only the primary. Record who acknowledged and how long it took. Check that the runbook link opens without a personal login. Fix the first broken step before the next drill.",
      "## Record the escalation path and the quiet hours",
      "Write the path from the first responder to the engineering owner, the vendor, and the client contact. Record the hours when each path is staffed and the number to use outside them. Note the alerts that may wait until morning and the ones that cannot. A quiet-hours rule should be written down, not inferred from who happens to answer.",
      "Record the customer message that support will use while the incident is open. Keep it beside the route, not in a separate policy page. Assign the person who approves a public status update. The routing review should leave support with the words as well as the number.",
      "## Review routing after every handover",
      "Review the routes when an engineer joins, leaves, or changes shift. Check that the primary, backup, and escalation names still resolve to people who can act. Record the date of the review and the changes made. A handover that skips the pager leaves a route pointing at someone who has already left.",
      "Sample one week of alerts each quarter and compare the pages with the customer incidents. Record the alerts that fired without a customer effect and the incidents that had no page. Give the finding to the delivery lead with one change and an owner. The route improves when the team reviews the misses, not only the noise."
    ]
  },
  {
    "slug": "set-a-staging-drift-check-for-an-outsourced-delivery-lane",
    "title": "Set a staging drift check for an outsourced delivery lane",
    "excerpt": "A drift check that records the production settings that matter, compares configuration and data shape, and triages differences without copying secrets into staging.",
    "minutes": 8,
    "published": "2026-11-20",
    "body": [
      "## Record the production settings that matter",
      "Choose the settings whose difference would change a release decision, such as runtime version, database engine, queue limits, feature defaults, and timeout values. Record where each value lives and who owns it. Exclude secrets from the record and store only the name and the rotation owner. A drift check that tries to copy everything will expose data and still miss the setting that broke the release.",
      "Write the expected staging value beside the production value and mark the ones allowed to differ. Record the reason for each allowed difference, such as a smaller instance or a sandbox vendor. Review the list when a new service or dependency arrives. The allowed-difference list is what keeps the check from crying wolf.",
      "## Compare configuration, not only code",
      "Compare the deployed configuration for the same commit in both environments. Include environment variables, feature flags, connection pool sizes, and worker counts. Record the source of each value, whether it comes from a file, a console, or a secret store. A matching commit with a different configuration can still behave differently in front of a customer.",
      "Check the build and runtime versions as well as the application settings. Record the language patch level, the database minor version, and the operating system image. Note the dependency versions that the lockfile pins and the ones installed at runtime. Small version differences are a common cause of a bug that only staging shows.",
      "## Check the data shape and the seed path",
      "Compare the schema version, the indexes, and the constraints in staging with production. Record the migrations that are applied and the ones that are pending. Check that the staging seed produces the same table shapes, even when the row counts are smaller. A schema that is one migration behind can hide a failure until the release reaches production.",
      "Record the data classes present in staging and the masking rule applied to each. Confirm that the seed includes the edge cases the release touches, such as a null optional field or a soft-deleted record. Note the stale fixtures that no longer match the current schema. A clean seed that lacks the awkward row is not a realistic test.",
      "## Diff the network and access rules",
      "Compare the network paths that the application uses, including private endpoints, allowed egress, and DNS names. Record the firewall rules and the service accounts that differ. Check that the staging path reaches the same vendor sandbox or a documented substitute. A release can pass in staging because a private route exists only there.",
      "Compare the access roles used by the application and the deploy job. Record the permissions that staging grants more broadly and the ones it lacks. Confirm that no production credential is present in staging. A staging environment with production keys is a drift check that creates its own incident.",
      "## Run the drift check before each release",
      "Run the check before the release branch is cut and again before the deploy. Record the commit, the time, and the person who ran it. Attach the result to the release ticket so the reviewer sees the differences. A check that runs only after a failure is a postmortem tool, not a control.",
      "Keep the check fast enough that people will actually run it, and script the parts that can be compared automatically. Record the manual checks that remain and the owner of each. Put the command in the release note. A long manual checklist will be skipped on the busiest day.",
      "## Triage a difference without copying secrets",
      "When the check finds a difference, decide whether it is intended, stale, or a defect. Record the decision and the owner, and update the allowed-difference list when the difference is accepted. Fix the staging value rather than copying a production secret. The goal is a comparable environment, not an identical copy of sensitive data.",
      "For a difference that cannot be removed, write the risk and the test that compensates for it. Record the customer path that the difference could affect and the evidence from the release. Give the risk to the client technical owner for acceptance. An accepted difference should be visible in the release record, not buried in a chat thread.",
      "## Keep the check small enough to repeat",
      "Review the drift check each quarter and remove the fields that no longer affect a release. Add the fields that caused the last incident and record why. Keep the output short enough to read in a release review. A check that produces a hundred lines of noise will be ignored.",
      "Sample one recent release and confirm that the check ran and that the recorded differences match what the team remembers. Record the gap and the owner of the fix. Share the result with the delivery lead. The check earns trust when its output is used in a real decision."
    ]
  },
  {
    "slug": "write-a-test-account-lifecycle-rule-for-outsourced-qa",
    "title": "Write a test account lifecycle rule for outsourced QA",
    "excerpt": "A lifecycle rule that inventories QA accounts, gives each a purpose and owner, sets creation and expiry, and disables access when a sprint or contract ends.",
    "minutes": 8,
    "published": "2026-11-20",
    "body": [
      "## Inventory the accounts the QA lane uses",
      "List every account the QA lane uses in staging, preview, and any vendor sandbox. Include personal logins, shared fixtures, service accounts, and the credentials inside automated tests. Record where each account is stored and who can read it. An inventory built only from the test plan will miss the accounts created during a previous sprint.",
      "Record the environment, the role, and the data each account can reach. Mark the accounts that can approve a payment, send a message, or change a setting that a customer would notice. Note the accounts that use a real person's email or phone number. The risky accounts are the ones that look ordinary in a test plan.",
      "## Give each account a purpose and an owner",
      "Write one sentence about the test the account supports and the person accountable for it. Record a backup owner who can disable the account when the primary is away. Name the sprint or release that justifies the account. An account described only by its email address has no owner in practice.",
      "Separate an account that tests a customer role from an account that tests an admin or support role. Use that distinction when the team reviews access. Record the date the purpose was last confirmed. A purpose nobody can confirm is a reason to disable the account.",
      "## Separate shared fixtures from personal logins",
      "Use shared fixture accounts for deterministic automated tests, and give them a clear label in the inventory. Use named personal accounts for exploratory testing so the team can trace who changed what. Record the rule in the test guide. Mixing the two hides both the automation dependency and the human action.",
      "Keep shared fixture passwords in the team secret store, not in a test file or a chat message. Rotate the fixture secret on a written schedule and record the last rotation. Give the personal accounts multi-factor authentication where the platform supports it. A shared login that everyone knows is a shared incident waiting to happen.",
      "## Set creation and expiry rules",
      "Require a ticket and a named owner before a new test account is created. Record the environment, the role, the expiry date, and the test it supports. Give the account the smallest role that still exercises the path. An account created by asking a colleague in chat leaves no record and no expiry.",
      "Set a default expiry that matches the sprint or the release, and require a new justification to extend it. Record the reminder date and the person who receives it. Disable rather than delete the account until the evidence is needed. An expiry date that nobody checks is a suggestion, not a rule.",
      "## Disable accounts when a sprint closes",
      "At the end of a sprint, list the accounts created for it and confirm each one with its owner. Disable the ones that are no longer needed and record the date and the person who did it. Check that the login fails after the disable step. A disabled flag that the identity provider ignores is not a disable.",
      "Check the accounts used by automated tests as well as the human ones. A fixture that stays active after the test is retired still holds a token. Record the test that used it and the ticket that retired it. Remove the secret from the test store when the fixture is disabled.",
      "## Audit the accounts that survive a handover",
      "Before a contractor or a pod leaves, compare the account list with the people who still work on the lane. Disable the accounts owned by people who are leaving and transfer the fixtures to a named owner. Record the transfer and the new owner. A handover that keeps the logins alive keeps the access alive too.",
      "Check the accounts created by the departing person but owned by nobody. Treat them as orphaned until a current owner claims them. Record the evidence and the decision. An orphaned test account with an admin role is a finding, even when the environment is not production.",
      "## Keep the inventory beside the test plan",
      "Store the inventory where the QA team already works, and link it from the test plan and the release checklist. Record the account, the owner, the environment, the role, the expiry, and the last review. Give read access to the delivery lead and the client technical owner. An inventory in one person's notes disappears when that person is unavailable.",
      "Review the inventory each month and after every sprint close. Record the accounts added, disabled, and still awaiting an owner. Report the oldest active account and the count with no expiry. A short monthly view is easier to act on than a long table nobody opens."
    ]
  }
];

export const november20BlogDetails = {
  "set-a-third-party-api-rate-limit-budget-for-an-outsourced-integration-lane": {
    "takeaways": [
      "Budget by call path and credential, not by vendor name alone.",
      "Measure the busiest normal day and the busiest campaign day.",
      "Protect a customer share of the quota from batch jobs.",
      "Cap retries and give deferred calls a visible queue.",
      "Re-measure the budget after every vendor or traffic change."
    ],
    "readinessRows": [
      {
        "area": "Call-path inventory",
        "ready": "List each metered endpoint, its credential, and the customer or batch path it serves.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Peak measurement",
        "ready": "Record per-minute peak, burst shape, and retry share on a normal and a campaign day.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Quota split",
        "ready": "Reserve a customer share, separate batch credentials, and name the owner of each share.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Stop rule",
        "ready": "Name the degraded feature, the approver, the customer message, and the recovery step.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "name-the-vendors-and-the-call-paths-that-consume-quota",
        "title": "Name the vendors and the call paths that consume quota",
        "paragraphs": [
          "Start the budget with a list of every vendor that meters calls, not only the vendors that bill by the month. Include payment, messaging, identity, shipping, search, and any API that sits inside a customer action. Record the endpoint or method that consumes the quota and the unit the vendor counts. A budget written against vendors rather than call paths will miss the endpoint that actually runs out.",
          "Trace one real customer journey and one real batch job, then write down each external call in order. Note which calls repeat per user, per order, or per record in a nightly job. Record the account or credential that each call uses, because many vendors meter per key rather than per company. The trace gives the team the shape of the demand before anyone argues about limits."
        ]
      },
      {
        "id": "measure-the-normal-peak-before-setting-a-budget",
        "title": "Measure the normal peak before setting a budget",
        "paragraphs": [
          "Measure the traffic on the busiest normal day and the busiest expected campaign day. Record the peak per minute, the burst pattern, and the share of retries inside that peak. Use the vendor dashboard and the application metrics so a proxy or cache does not hide the real call count. A budget chosen from an average day will fail during the first launch.",
          "Separate the calls that a customer is waiting for from the calls that can wait. Record the latency target for the interactive path and the completion target for the batch path. Note the vendors that allow a higher limit on request and the ones that raise it only through a contract change. The separation tells the team which calls deserve the protected share of the quota."
        ]
      },
      {
        "id": "split-the-quota-between-customer-traffic-and-batch-work",
        "title": "Split the quota between customer traffic and batch work",
        "paragraphs": [
          "Reserve a protected share of the quota for the calls a customer is waiting on. Give the batch jobs a separate share, and make the batch share stop before it can consume the reserve. Record the percentage and the owner of each share in the delivery agreement. An unprotected batch job will always find a way to spend the last token at the worst moment.",
          "Use separate credentials or separate vendor projects where the platform supports them. That split makes the metering visible and lets the team throttle one lane without touching the other. Record which jobs and services use each credential and who can rotate it. A shared key hides the source of a spike until the vendor sends the bill."
        ]
      },
      {
        "id": "write-the-backoff-and-queue-rule",
        "title": "Write the backoff and queue rule",
        "paragraphs": [
          "Write the rule for a 429 response and for the vendor-specific throttle codes. Require exponential backoff with jitter, a maximum attempt count, and a recorded reason for every retry. Name the queue or dead-letter path for calls that still fail after the limit. A retry loop without a cap turns a short throttle into a longer outage.",
          "Decide which calls may be queued and which must fail visibly to the customer. Record the customer message for a deferred action and the time when the team will retry. Give the queue a depth limit and an alert when it grows past the normal range. A queue that accepts unlimited work hides the failure until storage or patience runs out."
        ]
      },
      {
        "id": "watch-the-quota-from-the-vendor-and-the-application-side",
        "title": "Watch the quota from the vendor and the application side",
        "paragraphs": [
          "Watch the vendor dashboard for the remaining quota and the reset window. Watch the application for call rate, error rate, retry count, and queue depth on the same dashboard. Record the threshold that triggers a page and the person who receives it. Two views are needed because a vendor can throttle before its dashboard shows a problem.",
          "Record the vendor's stated reset time and the clock the team uses. Compare the metric timestamps so a reviewer can line up a spike with a customer report. Note the calls that a cache absorbs so the team does not overstate the saving. A quota review that ignores time zones will misread the reset."
        ]
      },
      {
        "id": "decide-what-happens-when-the-budget-runs-out",
        "title": "Decide what happens when the budget runs out",
        "paragraphs": [
          "Write a stop rule that names the feature the team will degrade and the person who can approve it. Examples include pausing a nightly sync, showing a pickup option, or delaying a nonessential enrichment. Record the customer message and the recovery step for the work that was deferred. A stop rule agreed in advance is faster than a debate during the incident.",
          "Name the escalation contact at the vendor and the contract term that applies to a limit increase. Record the expected lead time so nobody promises a fix the vendor cannot meet. Keep the request template with the current usage numbers ready to send. The escalation should start before the reserve is empty, not after."
        ]
      },
      {
        "id": "review-the-budget-after-a-vendor-or-traffic-change",
        "title": "Review the budget after a vendor or traffic change",
        "paragraphs": [
          "Review the budget when a vendor changes its limits, pricing, or endpoint behavior. Re-measure the peak after a new feature, a campaign, or a batch schedule change. Record the new headroom and the date of the measurement. A budget that is never re-measured slowly becomes a guess about last year's traffic.",
          "Check one month of 429 responses and one month of queue depth against the written rule. Record the calls that were retried and the calls that were dropped. Give the finding to the client technical owner with one change and an owner. The review should shorten the list of surprises, not lengthen the runbook."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Metered paths",
        "text": "List each vendor endpoint, credential, and the work that consumes its quota."
      },
      {
        "label": "Protected share",
        "text": "Reserve quota for customer-facing calls and cap the batch lane below it."
      },
      {
        "label": "Backoff rule",
        "text": "Cap retries, add jitter, and route exhausted calls to a bounded queue."
      },
      {
        "label": "Stop and escalate",
        "text": "Name the degraded feature, the approver, and the vendor contact before the limit is hit."
      }
    ],
    "faqs": [
      {
        "question": "Can the team rely on the vendor dashboard alone?",
        "answer": "No. The application must also record call rate, errors, retries, and queue depth on the same timeline."
      },
      {
        "question": "Should every failed call be retried?",
        "answer": "No. Retry only calls that are safe to repeat, with a cap, jitter, and a recorded reason."
      },
      {
        "question": "When should the vendor be asked for a higher limit?",
        "answer": "Before the reserve is empty, using measured peak numbers and the contract escalation path."
      },
      {
        "question": "Who approves a degraded mode?",
        "answer": "A named client technical owner or delegate, recorded with the date and the customer message."
      }
    ],
    "sources": [
      {
        "name": "Stripe rate limits",
        "url": "https://docs.stripe.com/rate-limits",
        "note": "How a payment API meters requests and signals throttling."
      },
      {
        "name": "RFC 6585: 429 Too Many Requests",
        "url": "https://datatracker.ietf.org/doc/html/rfc6585",
        "note": "The standard status code and retry semantics."
      },
      {
        "name": "AWS API Gateway throttling",
        "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
        "note": "Quota, burst, and per-client throttling behavior."
      },
      {
        "name": "Google Cloud quotas",
        "url": "https://cloud.google.com/docs/quota",
        "note": "How cloud services measure and enforce quotas."
      }
    ],
    "heroImage": "/nov20/blog/set-a-third-party-api-rate-limit-budget-for-an-outsourced-integration-lane.webp"
  },
  "write-a-data-backfill-rehearsal-plan-for-an-outsourced-release": {
    "takeaways": [
      "Write the row set, the end value, and the exclusions before coding.",
      "Freeze the input with a snapshot and a recorded timestamp.",
      "Run the real script and measure locks and customer latency.",
      "Reconcile values row by row, not only with a total count.",
      "Name the pause owner and choose the rollback before the run."
    ],
    "readinessRows": [
      {
        "area": "Row definition",
        "ready": "Name the keys, tables, end values, and rows that must not change.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Frozen input",
        "ready": "Record the snapshot identifier, timestamp, schema, and storage location.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Rehearsal evidence",
        "ready": "Measure duration, batch size, locks, customer latency, and query plan.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Pause and rollback",
        "ready": "Name the pause owner, thresholds, rollback method, and point of no return.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "define-the-rows-and-the-end-state",
        "title": "Define the rows and the end state",
        "paragraphs": [
          "Write the exact set of rows the backfill must change and the value each row should hold at the end. Include the query or key range, the tables touched, and the rows that must not change. Record the application version that expects the new state. A backfill without a written end state cannot be verified, only hoped over.",
          "Name the source of truth for the new value and the time boundary for inclusion. Decide whether late-arriving rows are handled by the script or by a follow-up job. Record the rows that are intentionally excluded and why. The exclusion list is the part reviewers forget until a customer appears with an old record."
        ]
      },
      {
        "id": "freeze-the-input-before-the-rehearsal",
        "title": "Freeze the input before the rehearsal",
        "paragraphs": [
          "Freeze the input by taking a snapshot or by recording the maximum identifier at a stated time. Write the snapshot identifier, the timestamp, and the storage location in the rehearsal note. Use a copy that the team can restore without touching production. A moving input turns every count comparison into an argument.",
          "Record the schema version, the indexes, and the constraints on the target copy. Note the extensions, collation, and time zone that affect comparisons. Confirm that the copy holds enough rows to exercise the largest batch and the slowest path. A small sample can pass while the production size fails on locks or timeouts."
        ]
      },
      {
        "id": "run-the-backfill-against-a-production-like-copy",
        "title": "Run the backfill against a production-like copy",
        "paragraphs": [
          "Run the real script, not a hand-edited version, against the production-like copy. Record the start time, the batch size, the pause between batches, and the finish time. Capture the query plan and the lock waits for the slowest statement. The rehearsal should measure the pressure the real run will place on the database.",
          "Watch the application while the backfill runs, because a long transaction can block customer writes. Record the read and write latency on the customer path during the run. Note the point where the batch size or pause needed a change. A backfill that only passes on an idle database has not been tested."
        ]
      },
      {
        "id": "compare-counts-and-spot-check-the-customer-path",
        "title": "Compare counts and spot-check the customer path",
        "paragraphs": [
          "Compare the affected row count with the frozen input and with the expected end state. Reconcile the difference row by row, not only as a total, because two errors can cancel out. Record the checksum or a stable hash for the changed values. A count that matches while the values differ is still a failed rehearsal.",
          "Open the customer path on the copy and check the screens that read the new values. Test a search, a report, and one write that depends on the backfilled field. Record the account, the data, and the result of each check. A backfill that satisfies a database query but breaks a screen is not finished."
        ]
      },
      {
        "id": "set-the-pause-and-rollback-rule",
        "title": "Set the pause and rollback rule",
        "paragraphs": [
          "Write the condition that pauses the real run, such as a lock wait over the agreed threshold or an error rate on the customer path. Name the person who can pause it and the person who can resume. Record the command and the check that confirms the pause worked. A pause rule known only to the script author is not a control.",
          "Decide whether the rollback rewrites the old values or restores the snapshot. Record the time and storage cost of each option and the point of no return. Keep the old values in a side table when an in-place rollback would be slow. The rollback should be chosen before the run, not improvised during it."
        ]
      },
      {
        "id": "schedule-the-production-run-with-a-named-owner",
        "title": "Schedule the production run with a named owner",
        "paragraphs": [
          "Schedule the run in a window when the customer traffic and the batch jobs leave enough headroom. Record the start time, the expected duration, the on-call engineer, and the client contact. Confirm that the database backup is recent and restorable before the run begins. A production backfill on an unverified backup is an avoidable risk.",
          "Announce the run to support with the customer symptom to watch and the message to use if a screen looks wrong. Give support a reference number and a named escalation contact. Record the confirmation from the client owner. The people who answer customers should hear about the change before the customers do."
        ]
      },
      {
        "id": "keep-the-evidence-and-retire-the-script",
        "title": "Keep the evidence and retire the script",
        "paragraphs": [
          "Store the rehearsal record with the query, the timings, the counts, the diffs, and the pause test. Give the client technical owner the record and keep a copy in the delivery workspace. List the manual steps and the person who performed each one. The next engineer should be able to repeat the run without asking the author.",
          "Retire the backfill script when the release no longer needs it, and record the date and the final row count. Keep the script and the record for the retention period in the agreement. Remove any temporary table or elevated permission created for the run. A backfill script left in the repository becomes a tool that someone runs without the plan."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Scope",
        "text": "List the row keys, tables, end values, and explicit exclusions."
      },
      {
        "label": "Frozen copy",
        "text": "Record the snapshot, schema version, and the production-like target."
      },
      {
        "label": "Proof",
        "text": "Reconcile values row by row and open the screens that read the field."
      },
      {
        "label": "Run control",
        "text": "Name the pause owner, rollback method, and the customer message for support."
      }
    ],
    "faqs": [
      {
        "question": "Can the team rehearse on a sample of rows?",
        "answer": "A sample can catch logic errors, but the final rehearsal must exercise production size, locks, and timing."
      },
      {
        "question": "What counts as a successful backfill?",
        "answer": "Matching values, a working customer path, and recorded timing inside the agreed window."
      },
      {
        "question": "Who can pause the production run?",
        "answer": "A named on-call engineer with a written threshold and a tested pause command."
      },
      {
        "question": "When should the script be deleted?",
        "answer": "After the release no longer needs it and the retention period in the agreement ends."
      }
    ],
    "sources": [
      {
        "name": "PostgreSQL COPY",
        "url": "https://www.postgresql.org/docs/current/sql-copy.html",
        "note": "Bulk data movement and its transaction behavior."
      },
      {
        "name": "Flyway database migrations",
        "url": "https://documentation.red-gate.com/flyway",
        "note": "Versioned schema change and repeatable migration practice."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Change management and canarying production work."
      },
      {
        "name": "NIST SP 800-34 contingency planning",
        "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
        "note": "Recovery planning and tested restore evidence."
      }
    ],
    "heroImage": "/nov20/blog/write-a-data-backfill-rehearsal-plan-for-an-outsourced-release.webp"
  },
  "set-an-alert-routing-review-for-an-offshore-support-pod": {
    "takeaways": [
      "List every rule that can page a person, including vendor webhooks.",
      "Tie each alert to a customer symptom and a first check.",
      "Name a primary and backup responder for every shift.",
      "Remove or downgrade alerts with no clear action.",
      "Test the primary route, the backup, and the escalation step."
    ],
    "readinessRows": [
      {
        "area": "Alert inventory",
        "ready": "List every paging rule, its owner, route, and last fired date.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Symptom mapping",
        "ready": "Write the customer symptom, threshold, window, and first diagnostic check.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Responder names",
        "ready": "Name a primary and backup per shift with a tested escalation step.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Route test",
        "ready": "Record the delivery time, message contents, and runbook access from a safe failure.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "list-the-alerts-that-can-page-a-person",
        "title": "List the alerts that can page a person",
        "paragraphs": [
          "Export every alert rule that can page, message, or open a ticket for the support pod. Include the monitoring system, the cloud console, the queue, the payment provider, and any vendor that sends a webhook. Record the rule owner and the last time the alert fired. A list built from memory will miss the rules that fire rarely and matter most.",
          "Separate an alert that reaches a person from a dashboard that only changes color. Record the route, the escalation policy, and the channel for each alert. Note the alerts that page a group alias rather than a named person. The review is about who is woken up, not about how many charts exist."
        ]
      },
      {
        "id": "map-each-alert-to-a-customer-symptom",
        "title": "Map each alert to a customer symptom",
        "paragraphs": [
          "Write the customer symptom that the alert is meant to catch, using the words a support agent would use. For example, checkout failures, missing confirmations, or slow account pages. Record the threshold and the time window that turn the metric into a page. An alert that cannot be tied to a symptom is a candidate for a dashboard.",
          "Check for alerts that describe an internal cause but not the customer effect. A high CPU alert may be harmless, while a queue age alert may be the real signal. Record the evidence the responder should look at first. The mapping should shorten the path from page to customer impact."
        ]
      },
      {
        "id": "name-the-primary-and-backup-responder",
        "title": "Name the primary and backup responder",
        "paragraphs": [
          "Give every paging alert a named primary and a named backup for each shift. Record the time zone and the handoff hour so the route follows the sun rather than a mailbox. Confirm that both people can access the console and the runbook. A route to a team alias has no accountable person at three in the morning.",
          "Record the escalation step when the primary does not acknowledge within the agreed minutes. Name the next person and the channel, and test that the step reaches them. Keep the schedule in the same place as the rota, not in a personal calendar. An escalation path that depends on one manager is a single point of failure."
        ]
      },
      {
        "id": "remove-alerts-that-nobody-can-act-on",
        "title": "Remove alerts that nobody can act on",
        "paragraphs": [
          "Remove or downgrade alerts that fire without a clear action or a customer symptom. Record the reason and the date, and move the signal to a dashboard if it still has diagnostic value. Ask the last responder what they did when the alert fired. If the answer was to silence it, the rule is noise.",
          "Group related alerts so one incident does not open twenty tickets. Record the grouping rule and the alert that represents the group. Keep a separate page for the condition that needs a different skill. Fewer, clearer pages are easier to trust than a wall of notifications."
        ]
      },
      {
        "id": "test-the-route-with-a-safe-failure",
        "title": "Test the route with a safe failure",
        "paragraphs": [
          "Trigger a safe failure on a nonproduction service and follow the page from the monitoring system to the responder. Record the time to delivery, the channel, and the information in the message. Confirm that the message names the service, the environment, and the runbook link. A route that has never been tested is a configuration, not a capability.",
          "Test the backup and the escalation step on the same exercise, not only the primary. Record who acknowledged and how long it took. Check that the runbook link opens without a personal login. Fix the first broken step before the next drill."
        ]
      },
      {
        "id": "record-the-escalation-path-and-the-quiet-hours",
        "title": "Record the escalation path and the quiet hours",
        "paragraphs": [
          "Write the path from the first responder to the engineering owner, the vendor, and the client contact. Record the hours when each path is staffed and the number to use outside them. Note the alerts that may wait until morning and the ones that cannot. A quiet-hours rule should be written down, not inferred from who happens to answer.",
          "Record the customer message that support will use while the incident is open. Keep it beside the route, not in a separate policy page. Assign the person who approves a public status update. The routing review should leave support with the words as well as the number."
        ]
      },
      {
        "id": "review-routing-after-every-handover",
        "title": "Review routing after every handover",
        "paragraphs": [
          "Review the routes when an engineer joins, leaves, or changes shift. Check that the primary, backup, and escalation names still resolve to people who can act. Record the date of the review and the changes made. A handover that skips the pager leaves a route pointing at someone who has already left.",
          "Sample one week of alerts each quarter and compare the pages with the customer incidents. Record the alerts that fired without a customer effect and the incidents that had no page. Give the finding to the delivery lead with one change and an owner. The route improves when the team reviews the misses, not only the noise."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Paging rules",
        "text": "Inventory the rules that wake a person and the vendor hooks that open tickets."
      },
      {
        "label": "Customer link",
        "text": "State the symptom each page protects and the first evidence to inspect."
      },
      {
        "label": "Named route",
        "text": "Assign a primary and backup per shift, with a tested escalation contact."
      },
      {
        "label": "Quiet hours",
        "text": "Record what may wait until morning and who approves the customer message."
      }
    ],
    "faqs": [
      {
        "question": "Is a team alias enough for a paging route?",
        "answer": "No. A paging route needs a named primary and backup who can act during the shift."
      },
      {
        "question": "Should every metric become an alert?",
        "answer": "No. Keep diagnostic signals on a dashboard and page only on something a responder can act on."
      },
      {
        "question": "How often should the route be tested?",
        "answer": "At least quarterly, and after any change to the rota, the escalation policy, or the monitoring tool."
      },
      {
        "question": "Who owns the customer message?",
        "answer": "A named support lead, with the client technical owner approving any public status update."
      }
    ],
    "sources": [
      {
        "name": "PagerDuty incident response",
        "url": "https://response.pagerduty.com/",
        "note": "On-call roles, escalation policies, and incident practice."
      },
      {
        "name": "Google SRE Book: alerting",
        "url": "https://sre.google/sre-book/monitoring-distributed-systems/",
        "note": "Symptom-based alerting and paging hygiene."
      },
      {
        "name": "Atlassian incident management",
        "url": "https://www.atlassian.com/incident-management",
        "note": "Severity, communication, and responder roles."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Incident response and audit controls."
      }
    ],
    "heroImage": "/nov20/blog/set-an-alert-routing-review-for-an-offshore-support-pod.webp"
  },
  "set-a-staging-drift-check-for-an-outsourced-delivery-lane": {
    "takeaways": [
      "List the production settings whose difference changes a release decision.",
      "Compare configuration, build versions, and runtime images, not only code.",
      "Check schema, seed edge cases, network paths, and access roles.",
      "Run the check before the branch cut and before the deploy.",
      "Never copy a production secret into staging to remove a difference."
    ],
    "readinessRows": [
      {
        "area": "Setting list",
        "ready": "Record each release-relevant value, its source, and its owner.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Allowed differences",
        "ready": "Write the reason for every accepted difference and review it quarterly.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Data shape",
        "ready": "Compare schema, indexes, seed edge cases, and masking rules.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Release evidence",
        "ready": "Attach the check result to the release ticket before the deploy.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "record-the-production-settings-that-matter",
        "title": "Record the production settings that matter",
        "paragraphs": [
          "Choose the settings whose difference would change a release decision, such as runtime version, database engine, queue limits, feature defaults, and timeout values. Record where each value lives and who owns it. Exclude secrets from the record and store only the name and the rotation owner. A drift check that tries to copy everything will expose data and still miss the setting that broke the release.",
          "Write the expected staging value beside the production value and mark the ones allowed to differ. Record the reason for each allowed difference, such as a smaller instance or a sandbox vendor. Review the list when a new service or dependency arrives. The allowed-difference list is what keeps the check from crying wolf."
        ]
      },
      {
        "id": "compare-configuration-not-only-code",
        "title": "Compare configuration, not only code",
        "paragraphs": [
          "Compare the deployed configuration for the same commit in both environments. Include environment variables, feature flags, connection pool sizes, and worker counts. Record the source of each value, whether it comes from a file, a console, or a secret store. A matching commit with a different configuration can still behave differently in front of a customer.",
          "Check the build and runtime versions as well as the application settings. Record the language patch level, the database minor version, and the operating system image. Note the dependency versions that the lockfile pins and the ones installed at runtime. Small version differences are a common cause of a bug that only staging shows."
        ]
      },
      {
        "id": "check-the-data-shape-and-the-seed-path",
        "title": "Check the data shape and the seed path",
        "paragraphs": [
          "Compare the schema version, the indexes, and the constraints in staging with production. Record the migrations that are applied and the ones that are pending. Check that the staging seed produces the same table shapes, even when the row counts are smaller. A schema that is one migration behind can hide a failure until the release reaches production.",
          "Record the data classes present in staging and the masking rule applied to each. Confirm that the seed includes the edge cases the release touches, such as a null optional field or a soft-deleted record. Note the stale fixtures that no longer match the current schema. A clean seed that lacks the awkward row is not a realistic test."
        ]
      },
      {
        "id": "diff-the-network-and-access-rules",
        "title": "Diff the network and access rules",
        "paragraphs": [
          "Compare the network paths that the application uses, including private endpoints, allowed egress, and DNS names. Record the firewall rules and the service accounts that differ. Check that the staging path reaches the same vendor sandbox or a documented substitute. A release can pass in staging because a private route exists only there.",
          "Compare the access roles used by the application and the deploy job. Record the permissions that staging grants more broadly and the ones it lacks. Confirm that no production credential is present in staging. A staging environment with production keys is a drift check that creates its own incident."
        ]
      },
      {
        "id": "run-the-drift-check-before-each-release",
        "title": "Run the drift check before each release",
        "paragraphs": [
          "Run the check before the release branch is cut and again before the deploy. Record the commit, the time, and the person who ran it. Attach the result to the release ticket so the reviewer sees the differences. A check that runs only after a failure is a postmortem tool, not a control.",
          "Keep the check fast enough that people will actually run it, and script the parts that can be compared automatically. Record the manual checks that remain and the owner of each. Put the command in the release note. A long manual checklist will be skipped on the busiest day."
        ]
      },
      {
        "id": "triage-a-difference-without-copying-secrets",
        "title": "Triage a difference without copying secrets",
        "paragraphs": [
          "When the check finds a difference, decide whether it is intended, stale, or a defect. Record the decision and the owner, and update the allowed-difference list when the difference is accepted. Fix the staging value rather than copying a production secret. The goal is a comparable environment, not an identical copy of sensitive data.",
          "For a difference that cannot be removed, write the risk and the test that compensates for it. Record the customer path that the difference could affect and the evidence from the release. Give the risk to the client technical owner for acceptance. An accepted difference should be visible in the release record, not buried in a chat thread."
        ]
      },
      {
        "id": "keep-the-check-small-enough-to-repeat",
        "title": "Keep the check small enough to repeat",
        "paragraphs": [
          "Review the drift check each quarter and remove the fields that no longer affect a release. Add the fields that caused the last incident and record why. Keep the output short enough to read in a release review. A check that produces a hundred lines of noise will be ignored.",
          "Sample one recent release and confirm that the check ran and that the recorded differences match what the team remembers. Record the gap and the owner of the fix. Share the result with the delivery lead. The check earns trust when its output is used in a real decision."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Compared values",
        "text": "Record runtime, configuration, schema, network, and access settings that affect a release."
      },
      {
        "label": "Allowed list",
        "text": "Write the reason and owner for each difference the team accepts."
      },
      {
        "label": "Secret rule",
        "text": "Compare names and owners, never copy a production secret into staging."
      },
      {
        "label": "Release hook",
        "text": "Run the check before the branch cut and attach the result to the ticket."
      }
    ],
    "faqs": [
      {
        "question": "Should staging be an exact copy of production?",
        "answer": "No. It should be comparable on the settings that change a release decision, with accepted differences recorded."
      },
      {
        "question": "May the team copy production data into staging?",
        "answer": "Only under a written masking rule that removes or replaces customer data before use."
      },
      {
        "question": "What if a difference cannot be removed?",
        "answer": "Record the risk, the compensating test, and the client owner who accepts it."
      },
      {
        "question": "How often should the allowed-difference list be reviewed?",
        "answer": "At least quarterly, and whenever a new service, vendor, or runtime is added."
      }
    ],
    "sources": [
      {
        "name": "The Twelve-Factor App: config",
        "url": "https://12factor.net/config",
        "note": "Configuration stored in the environment and separated from code."
      },
      {
        "name": "Kubernetes configuration best practices",
        "url": "https://kubernetes.io/docs/concepts/configuration/overview/",
        "note": "Configuration objects, images, and environment parity concerns."
      },
      {
        "name": "AWS Well-Architected operational excellence",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html",
        "note": "Environment parity and change management practice."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Release validation and production readiness review."
      }
    ],
    "heroImage": "/nov20/blog/set-a-staging-drift-check-for-an-outsourced-delivery-lane.webp"
  },
  "write-a-test-account-lifecycle-rule-for-outsourced-qa": {
    "takeaways": [
      "Inventory personal, shared, and automated test accounts together.",
      "Give every account a purpose, an owner, and a backup.",
      "Set a default expiry tied to the sprint or release.",
      "Disable accounts at sprint close and confirm the login fails.",
      "Transfer or disable accounts before a contractor leaves."
    ],
    "readinessRows": [
      {
        "area": "Account inventory",
        "ready": "List each account, environment, role, storage location, and owner.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Purpose record",
        "ready": "Write the test each account supports and the date it was confirmed.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Expiry rule",
        "ready": "Set a default expiry, a reminder owner, and an extension ticket.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Close-out check",
        "ready": "Disable unused accounts at sprint close and verify the login fails.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "inventory-the-accounts-the-qa-lane-uses",
        "title": "Inventory the accounts the QA lane uses",
        "paragraphs": [
          "List every account the QA lane uses in staging, preview, and any vendor sandbox. Include personal logins, shared fixtures, service accounts, and the credentials inside automated tests. Record where each account is stored and who can read it. An inventory built only from the test plan will miss the accounts created during a previous sprint.",
          "Record the environment, the role, and the data each account can reach. Mark the accounts that can approve a payment, send a message, or change a setting that a customer would notice. Note the accounts that use a real person's email or phone number. The risky accounts are the ones that look ordinary in a test plan."
        ]
      },
      {
        "id": "give-each-account-a-purpose-and-an-owner",
        "title": "Give each account a purpose and an owner",
        "paragraphs": [
          "Write one sentence about the test the account supports and the person accountable for it. Record a backup owner who can disable the account when the primary is away. Name the sprint or release that justifies the account. An account described only by its email address has no owner in practice.",
          "Separate an account that tests a customer role from an account that tests an admin or support role. Use that distinction when the team reviews access. Record the date the purpose was last confirmed. A purpose nobody can confirm is a reason to disable the account."
        ]
      },
      {
        "id": "separate-shared-fixtures-from-personal-logins",
        "title": "Separate shared fixtures from personal logins",
        "paragraphs": [
          "Use shared fixture accounts for deterministic automated tests, and give them a clear label in the inventory. Use named personal accounts for exploratory testing so the team can trace who changed what. Record the rule in the test guide. Mixing the two hides both the automation dependency and the human action.",
          "Keep shared fixture passwords in the team secret store, not in a test file or a chat message. Rotate the fixture secret on a written schedule and record the last rotation. Give the personal accounts multi-factor authentication where the platform supports it. A shared login that everyone knows is a shared incident waiting to happen."
        ]
      },
      {
        "id": "set-creation-and-expiry-rules",
        "title": "Set creation and expiry rules",
        "paragraphs": [
          "Require a ticket and a named owner before a new test account is created. Record the environment, the role, the expiry date, and the test it supports. Give the account the smallest role that still exercises the path. An account created by asking a colleague in chat leaves no record and no expiry.",
          "Set a default expiry that matches the sprint or the release, and require a new justification to extend it. Record the reminder date and the person who receives it. Disable rather than delete the account until the evidence is needed. An expiry date that nobody checks is a suggestion, not a rule."
        ]
      },
      {
        "id": "disable-accounts-when-a-sprint-closes",
        "title": "Disable accounts when a sprint closes",
        "paragraphs": [
          "At the end of a sprint, list the accounts created for it and confirm each one with its owner. Disable the ones that are no longer needed and record the date and the person who did it. Check that the login fails after the disable step. A disabled flag that the identity provider ignores is not a disable.",
          "Check the accounts used by automated tests as well as the human ones. A fixture that stays active after the test is retired still holds a token. Record the test that used it and the ticket that retired it. Remove the secret from the test store when the fixture is disabled."
        ]
      },
      {
        "id": "audit-the-accounts-that-survive-a-handover",
        "title": "Audit the accounts that survive a handover",
        "paragraphs": [
          "Before a contractor or a pod leaves, compare the account list with the people who still work on the lane. Disable the accounts owned by people who are leaving and transfer the fixtures to a named owner. Record the transfer and the new owner. A handover that keeps the logins alive keeps the access alive too.",
          "Check the accounts created by the departing person but owned by nobody. Treat them as orphaned until a current owner claims them. Record the evidence and the decision. An orphaned test account with an admin role is a finding, even when the environment is not production."
        ]
      },
      {
        "id": "keep-the-inventory-beside-the-test-plan",
        "title": "Keep the inventory beside the test plan",
        "paragraphs": [
          "Store the inventory where the QA team already works, and link it from the test plan and the release checklist. Record the account, the owner, the environment, the role, the expiry, and the last review. Give read access to the delivery lead and the client technical owner. An inventory in one person's notes disappears when that person is unavailable.",
          "Review the inventory each month and after every sprint close. Record the accounts added, disabled, and still awaiting an owner. Report the oldest active account and the count with no expiry. A short monthly view is easier to act on than a long table nobody opens."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Test identities",
        "text": "List personal, shared, and automated accounts with their environments and roles."
      },
      {
        "label": "Owner and purpose",
        "text": "Name the person and the test that justify each account."
      },
      {
        "label": "Expiry",
        "text": "Tie the default lifetime to the sprint and require a ticket to extend it."
      },
      {
        "label": "Handover",
        "text": "Disable or transfer accounts before a contractor or pod leaves."
      }
    ],
    "faqs": [
      {
        "question": "Can the team use one shared login for all QA?",
        "answer": "No. Shared logins hide who acted and cannot be revoked for one person."
      },
      {
        "question": "Should unused accounts be deleted right away?",
        "answer": "Disable first, confirm the login fails, and delete after the evidence retention period."
      },
      {
        "question": "Who owns an automated test fixture?",
        "answer": "A named engineer on the QA lane, with a backup who can rotate or disable it."
      },
      {
        "question": "What happens to accounts when a contractor leaves?",
        "answer": "They are disabled or transferred before the last day, and the change is recorded."
      }
    ],
    "sources": [
      {
        "name": "OWASP Application Security Verification Standard",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Authentication, session, and access control requirements."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Account management and access review controls."
      },
      {
        "name": "OWASP Web Security Testing Guide",
        "url": "https://owasp.org/www-project-web-security-testing-guide/",
        "note": "Testing authentication and authorization paths."
      },
      {
        "name": "CIS Controls",
        "url": "https://www.cisecurity.org/controls",
        "note": "Account inventory and access lifecycle safeguards."
      }
    ],
    "heroImage": "/nov20/blog/write-a-test-account-lifecycle-rule-for-outsourced-qa.webp"
  }
};
