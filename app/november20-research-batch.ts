import type { ResearchPost } from './fleet-content';

export const november20ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-outsourced-integrations-exceed-a-vendor-rate-limit-budget",
    "title": "How often do outsourced integrations exceed a vendor rate limit budget?",
    "excerpt": "A protocol for counting metered call paths, dating each throttle event, and separating a missing budget from a budget that was set too low.",
    "topic": "Vendor rate limit budgets",
    "published": "2026-11-20",
    "hero": "/nov20/research/how-often-do-outsourced-integrations-exceed-a-vendor-rate-limit-budget.webp",
    "body": [
      "This protocol measures how often an outsourced integration lane exceeds a vendor rate limit budget. The unit is one metered call path on one credential at the observation date. A budget means a written per-minute or per-window allowance with a protected customer share and a named owner. The study describes quota control evidence, not the reliability of the vendor.",
      "Define the vendors and the call paths in scope before collection. Include payment, messaging, identity, shipping, search, and any API that sits inside a customer action. Record the endpoint, the credential, and the work that consumes the quota. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define an exceedance by a recorded 429 or vendor-specific throttle response inside the observation window. Record the time, the call path, the credential, and the customer effect. Include the retries that followed the first throttle. A throttle without a recorded effect is still an exceedance, while a slow response is not unless the vendor reports a limit.",
      "Set the population as every metered call path in the agreed list on the observation date. Include paths that have not been throttled and paths whose budget was never written. Record the paths that could not be inspected and the reason. Report them separately from paths that exceeded a written budget.",
      "Classify each path by budget evidence. Use categories such as a written budget with a protected customer share, a written budget without a share, an informal estimate, and no budget. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the vendor meters by key, account, or endpoint, and whether the limit can be raised on request. Note the reset window and the burst allowance. Record the named owner and the backup who can change the budget. A path with a budget and no owner is still unmanaged during a spike.",
      "Report the number of paths, the number with a written budget, and the number that exceeded it in the window. Show counts by customer path and by batch source. Present the paths with no budget and the paths with a failed throttle test as separate rows. Use the same denominator for every rate.",
      "Separate a missing budget from a budget that was set too low. A missing budget has no written allowance, while a low budget has evidence and a miscalculation. Report the two categories separately because the fixes differ. Record the measured peak and the written limit beside each finding.",
      "Inspect the paths that share a credential or a batch scheduler. A cluster of exceedances may mean one nightly job consumes the quota for several customer paths. Compare the pattern with the batch calendar and the release history. A single spike can be a campaign, while a cluster is a planning gap.",
      "Do not treat a vendor's published limit as the budget the lane can use. The published number may apply per account, may exclude burst, or may change without notice. Record the plan and the contractual limit in scope. Report the difference beside the result.",
      "The record cannot show whether a customer abandoned a purchase or whether a retry succeeded. It can show only whether a metered path exceeded a written allowance in the inspected systems. A throttle is not proof of an outage, and a clean window is not proof of headroom. The protocol also cannot see a call made outside the agreed credentials.",
      "A useful additional view is the time from the first throttle to the first successful retry. Record the retry delay, the attempt count, and the queue depth at the peak. That field turns a yes-or-no count into a review of how long customers waited. Report the slowest path beside the count.",
      "Record the protected share and whether the batch lane respected it during the window. A batch job that stopped before the reserve is a control, while one that crossed it is a finding. Report the batch job name and the time it crossed. The protected share is only real when the logs show it held.",
      "Check the retry rule on each path for a cap and jitter. A path that retries forever can multiply load during the exact window the vendor is throttling. Record the attempt cap and the dead-letter path. Report the paths that can retry without a limit.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a protected share, a separate credential, a retry cap, a queue, or a campaign pre-brief. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest missing or low-budget group, not the easiest endpoint to document. Record the expected effect and the evidence that will prove it. A budget that is never measured is a guess about last year's traffic.",
      "Build the sample from the vendor usage export and the application call logs, not from the integration guide. The guide shows what the vendor allows, while the logs show what the lane actually calls. Compare the two and record the paths that appear in only one source. The mismatches are often the retries and the undocumented jobs.",
      "Use two evidence sources for each path, such as the vendor throttle report and the application error log. The vendor report proves the limit was hit, while the application log proves the customer path was affected. Record both timestamps on the same clock. A vendor count without an application timestamp is hard to act on.",
      "Paths with recent incidents are overrepresented because they are easy to remember. Include the path that has never been throttled and the one added last sprint. Record when the path entered the customer journey. A new integration often has no budget because nobody updated the list.",
      "Record the account tier and the contract renewal date for each vendor. A limit that is adequate today can change at renewal or when a plan is downgraded. Note the person who owns the commercial relationship. Report the paths whose headroom depends on a contract the team does not control.",
      "Report the result by customer path as well as by count. A payment call and a map widget do not carry the same consequence. Record the blocked action beside each finding. The reader should see which throttle would stop revenue first.",
      "Repeat the measure after a campaign, a batch schedule change, or a vendor limit change. Keep the same categories and the same observation window. Record the paths that moved between categories. A stable count with a changed traffic mix can still hide a new risk.",
      "Check the queue depth and the dead-letter count on each deferred path. A budget can hold while a queue grows past the point the team can clear. Record the peak depth and the time to drain. Report a path whose queue has no drain evidence.",
      "Treat the protocol as a review of quota planning, not a judgment of the integration engineers. An exceedance often means the batch calendar and the customer peak were never compared. Ask who set the budget and when it was last measured. The answer usually names the missing review rather than a careless call.",
      "Record the customer message used during a throttle and the person who approved it. A clear deferral message reduces support load while the retry runs. Note whether the message was sent before or after the first customer report. Report the gap between detection and communication.",
      "Keep the budget record with the release and vendor evidence so a reviewer can connect a limit to a real traffic change. Record the measured peak, the written allowance, and the protected share beside the result. A budget that cannot be tied to a measurement is only a preference. The record should survive a change of delivery lead.",
      "Set a review trigger for every new vendor, endpoint, or batch job. A path added after the last review will not appear in the old budget. Require a measured estimate and a named owner before the integration reaches production. Record the approval date. The trigger keeps the list from aging silently."
    ],
    "takeaways": [
      "Count one metered call path per credential, not one vendor.",
      "Treat a throttle without a written budget as a missing control.",
      "Report a low budget separately from a missing one.",
      "Record the queue depth and time to drain deferred calls.",
      "Re-measure after every campaign, batch change, or vendor change."
    ],
    "sources": [
      [
        "Stripe rate limits",
        "https://docs.stripe.com/rate-limits"
      ],
      [
        "RFC 6585: 429 Too Many Requests",
        "https://datatracker.ietf.org/doc/html/rfc6585"
      ],
      [
        "AWS API Gateway throttling",
        "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html"
      ],
      [
        "Google Cloud quotas",
        "https://cloud.google.com/docs/quota"
      ]
    ],
    "related": [
      "set-a-third-party-api-rate-limit-budget-for-an-outsourced-integration-lane",
      "how-often-do-third-party-api-outages-reach-an-offshore-support-queue-without-a-fallback"
    ]
  },
  {
    "slug": "what-share-of-outsourced-data-backfills-are-rehearsed-before-production",
    "title": "What share of outsourced data backfills are rehearsed before production?",
    "excerpt": "A protocol for counting backfill scripts, dating each rehearsal, and separating an unrehearsed backfill from one that failed its rehearsal.",
    "topic": "Data backfill rehearsals",
    "published": "2026-11-20",
    "hero": "/nov20/research/what-share-of-outsourced-data-backfills-are-rehearsed-before-production.webp",
    "body": [
      "This protocol measures the share of data backfills that are rehearsed before a production run in an outsourced delivery lane. The unit is one backfill script attached to one release at the observation date. A rehearsal means the real script ran against a production-like copy and the result was verified. The study describes change evidence, not the quality of the data model.",
      "Define the releases and repositories in scope before collection. Include schema migrations that change values, one-off repair scripts, and jobs that rewrite rows in bulk. Record the ticket and the environment for each. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a backfill by the row keys, the tables, the end value, the application version, and the expected count. Record the exclusions and the time boundary for inclusion. Note the rollback method and the point of no return. Test the definition on the first three scripts.",
      "Set the population as every backfill attached to a release in the agreed window. Include scripts that were run manually and scripts that are part of a deploy. Record the scripts that could not be inspected and the reason. Report them separately from scripts that failed a rehearsal.",
      "Classify each backfill by rehearsal evidence. Use categories such as rehearsed with recorded counts, rehearsed without customer-path checks, tested only on a sample, and not rehearsed. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the input was frozen with a snapshot and a timestamp. Note the schema version, the row count, and the batch size used in the rehearsal. Record the named owner and the person who verified the result. A rehearsal on a moving input cannot support a count comparison.",
      "Report the number of backfills, the number rehearsed with evidence, and the number in each category. Show counts by release type and by data sensitivity. Present the unrehearsed scripts and the failed rehearsals as separate rows. Use the same denominator for every rate.",
      "Separate an unrehearsed backfill from a failed rehearsal. An unrehearsed script has no evidence, while a failed rehearsal has evidence and a defect. Report the two categories separately because the fixes differ. Record the failed step and the date beside each finding.",
      "Inspect the scripts written around a former contractor or a compressed release. A cluster of unrehearsed backfills may mean the checklist never covered data repair. Compare the pattern with the repository history and the release calendar. A single omission can be an oversight, while a cluster is a process gap.",
      "Do not treat a successful syntax check as a rehearsal. A script can parse and still lock a table or rewrite the wrong rows. Check that the run produced counts and opened the screens that read the field. Report the difference between a parse and a rehearsal.",
      "The record cannot show whether a real run would meet the maintenance window or whether a customer saw the change. It can show only whether the script ran on a comparable copy and the result was verified. An unrehearsed backfill is not proof of an incident, and a rehearsed one is not proof of a safe change. The protocol also cannot see a repair run directly in a console.",
      "A useful additional view is the time from the first batch to the last batch at production row counts. Record the batch size, the pause, and the peak lock wait. That field turns a yes-or-no count into a review of whether the window is realistic. Report the slowest table beside the total.",
      "Record whether the rehearsal measured customer latency while the script ran. A backfill can finish inside the window and still block writes for the whole time. Note the read and write latency at the peak. Report the scripts that were never observed under application load.",
      "Check the rollback evidence for each script. A rollback that restores the snapshot is different from one that rewrites the old values. Record the tested method and the time it took. Report a script whose rollback has never been run.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a frozen snapshot, a production-size rehearsal, a pause threshold, or a rollback test. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unrehearsed or failed group, not the easiest script to document. Record the expected effect and the evidence that will prove it. A backfill plan that is never rehearsed is a document, not a change control.",
      "Build the sample from migrations and repository history, not from the tickets the team remembers. Search for scripts that update or insert in bulk, including one-off files outside the migration folder. Record how each script entered the sample. The forgotten script is often the one with no ticket.",
      "Use two evidence sources for each backfill, such as the rehearsal record and the database query count. The record proves the plan, while the query proves the rows changed as expected. Compare them on the same frozen input. A record without a count is only an intention.",
      "Scripts from recent incidents are overrepresented because they were discussed. Include a script that ran quietly last quarter and one that is still pending. Record the last run date. A quiet script can still hold elevated access or an outdated query.",
      "Record the database role used for the run and whether it can change schema as well as data. A backfill that needs schema permission is a broader change than the ticket suggests. Note the approval for that role. Report the scripts that used a broader role than the task required.",
      "Report the result by data sensitivity as well as by count. A backfill that rewrites payment records deserves a stricter rehearsal than one that updates a display label. Record the classification beside the finding. The reader should see which gap carries the most risk.",
      "Repeat the measure after the first rehearsed run and keep the definitions unchanged. A move from no rehearsal to one is progress, but it is not yet a habit. Compare the next window with the same categories. The trend matters more than a single release.",
      "Check the evidence that the rehearsal used the same application version as production. A script verified against an older screen can miss a new read path. Record the version and the commit. Report the backfills whose verification used a different build.",
      "Treat the protocol as a review of change planning, not a judgment of the engineer who wrote the script. An unrehearsed backfill often means the release calendar had no room for a copy. Ask what would have made the rehearsal possible. The answer points to the constraint to remove.",
      "Keep the rehearsal record with the release and audit evidence so a reviewer can connect the script to a real row count. Record the snapshot, the query, and the verification screenshot or output. A rehearsal that cannot be tied to a frozen input is only a demonstration. The record should survive a change of engineer.",
      "Set a rule that no backfill touching customer data runs without a rehearsal record and a named pause owner. Write the rule into the delivery agreement and the release checklist. Record the exception process and the approver. The rule turns a good intention into a gate that can be checked."
    ],
    "takeaways": [
      "Count one backfill script per release and data set.",
      "Require a frozen input before comparing row counts.",
      "Treat a sample-only run as partial evidence, not a rehearsal.",
      "Measure locks and customer latency at production row counts.",
      "Test the rollback before the production window opens."
    ],
    "sources": [
      [
        "PostgreSQL COPY",
        "https://www.postgresql.org/docs/current/sql-copy.html"
      ],
      [
        "Flyway database migrations",
        "https://documentation.red-gate.com/flyway"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "NIST SP 800-34 contingency planning",
        "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
      ]
    ],
    "related": [
      "write-a-data-backfill-rehearsal-plan-for-an-outsourced-release",
      "how-often-do-outsourced-maintenance-lanes-test-a-database-restore"
    ]
  },
  {
    "slug": "how-many-offshore-support-alerts-reach-a-named-responder",
    "title": "How many offshore support alerts reach a named responder?",
    "excerpt": "A protocol for counting paging alerts, testing whether a named person acknowledges, and separating a routing gap from an alert nobody can act on.",
    "topic": "Support alert routing",
    "published": "2026-11-20",
    "hero": "/nov20/research/how-many-offshore-support-alerts-reach-a-named-responder.webp",
    "body": [
      "This protocol measures how many support alerts reach a named responder in an offshore support pod. The unit is one paging alert on one shift at the observation date. A named responder means one person acknowledged the page and could act on it. The study describes routing evidence, not the quality of the monitoring vendor.",
      "Define the alert systems and shifts in scope before collection. Include the monitoring tool, cloud console, queue, payment provider, and vendor webhooks that can open a ticket. Record the shift hours and the time zone for each. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define an alert by its rule, threshold, route, and escalation policy. Record the customer symptom it protects and the runbook link it carries. Note whether the route is a named person, a team alias, or a shared channel. Test the definition on the first five alerts.",
      "Set the population as every alert that could page during the agreed shifts in the window. Include alerts that never fired and alerts that fired only once. Record the alerts that could not be inspected and the reason. Report them separately from alerts that failed the route test.",
      "Classify each alert by routing evidence. Use categories such as a named primary acknowledged, a team alias acknowledged, no acknowledgement, and no named route. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the message named the service, the environment, the customer symptom, and the runbook. Note the time from fire to delivery and from delivery to acknowledgement. Record the escalation step when the primary did not respond. A page that arrives without context still costs the responder minutes.",
      "Report the number of alerts, the number that reached a named responder, and the number in each category. Show counts by shift and by customer path. Present the alerts with no route and the alerts with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate a routing gap from an unactionable alert. A routing gap sends a good alert to nobody, while an unactionable alert reaches a person who can do nothing. Report the two categories separately because the fixes differ. Record the last responder's action beside each finding.",
      "Inspect the alerts that share a route or a rule owner. A cluster of missed acknowledgements may mean the rota changed without the route. Compare the pattern with the personnel record and the shift calendar. A single miss can be a phone issue, while a cluster is a handover gap.",
      "Do not treat a delivered notification as an acknowledgement. A message in a shared channel can sit unread while the customer waits. Check the acknowledgement record and the first action time. Report delivery and acknowledgement as separate counts.",
      "The record cannot show whether the responder made the right decision or whether the customer was satisfied. It can show only whether a named person received and acknowledged the page. A missed page is not proof of an outage, and an acknowledged one is not proof of a fix. The protocol also cannot see a page sent outside the agreed tools.",
      "A useful additional view is the time from the customer's first report to the first named responder action. Record the report time, the page time, and the action time on the same clock. That field turns a routing count into a review of customer response speed. Report the slowest path beside the rate.",
      "Record the quiet-hours rule and whether the alert was allowed to wait until morning. Compare the rule with the actual acknowledgement time. Note any alert that woke someone for a condition the rule said could wait. Report the mismatch and the owner who can change the rule.",
      "Check the escalation step for each route. A route that escalates to the same team alias has no second person. Record the next named contact and the channel. Test the escalation on a safe failure. Report the routes whose backup has never been reached.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a named primary, a backup, a message template, a quiet-hours rule, or a route test. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unrouted or unactionable group, not the easiest alert to rename. Record the expected effect and the evidence that will prove it. A route that is never tested is a configuration, not a capability.",
      "Build the sample from the paging tool export and the shift rota, not from the incidents the team remembers. The export shows what fired, while the rota shows who was on duty. Compare the two and record the alerts that fired outside a staffed shift. The gaps are often the quietest failures.",
      "Use two evidence sources for each alert, such as the delivery log and the acknowledgement record. The delivery log proves the message left the tool, while the acknowledgement proves a person responded. Record both times in the same zone. A delivered page with no acknowledgement is a routing finding.",
      "Alerts with recent incidents are overrepresented because they were discussed. Include a rule that fires monthly and one that has never fired. Record the last test date. A never-fired rule can still point at a former employee.",
      "Record the responder's role and whether they had the permission to act. A page to a person without console access is a routing gap even when the message arrives. Note the access check and the date it was confirmed. Report the alerts whose responder needed an escalation to act.",
      "Report the result by customer path as well as by count. A payment failure and a dashboard delay do not deserve the same wake-up. Record the path and the blocked action beside the finding. The reader should see which missed page would hurt first.",
      "Repeat the measure after a rota change, a handover, or a monitoring tool change. Keep the same categories and the same shift definition. Record the alerts that moved between categories. A stable count with a changed rota can still hide a new single point of failure.",
      "Check the message content for the customer symptom and the runbook link. A page that only says a host is down makes the responder start from zero. Record the fields present in the message. Report the rules that omit the service or the environment.",
      "Treat the protocol as a review of response routing, not a judgment of the support agents. A missed page often means the rota and the tool were never reconciled. Ask who updated the route at the last handover. The answer points to the process change.",
      "Record the customer message used while the alert is open and the person who approved it. A clear holding message reduces the pressure on the responder. Note whether support sent it before or after the first customer report. Report the gap between detection and communication.",
      "Set a review trigger for every rota change and every new alert rule. A route added after the last review will point at the old schedule. Require a named primary and backup and a tested delivery before the rule goes live. Record the approval date. The trigger keeps the route from aging silently."
    ],
    "takeaways": [
      "Count one paging alert per shift and customer path.",
      "Treat delivery and acknowledgement as separate events.",
      "Require a named primary and backup, not a team alias.",
      "Report an unrouted alert separately from an unactionable one.",
      "Test the route after every rota or tool change."
    ],
    "sources": [
      [
        "PagerDuty incident response",
        "https://response.pagerduty.com/"
      ],
      [
        "Google SRE Book: alerting",
        "https://sre.google/sre-book/monitoring-distributed-systems/"
      ],
      [
        "Atlassian incident management",
        "https://www.atlassian.com/incident-management"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ]
    ],
    "related": [
      "set-an-alert-routing-review-for-an-offshore-support-pod",
      "how-much-of-an-offshore-incident-is-spent-waiting-for-a-severity-decision"
    ]
  },
  {
    "slug": "how-often-do-outsourced-staging-environments-drift-from-production-config",
    "title": "How often do outsourced staging environments drift from production config?",
    "excerpt": "A protocol for comparing release-relevant settings, dating each accepted difference, and separating an intended difference from an unmanaged drift.",
    "topic": "Staging environment drift",
    "published": "2026-11-20",
    "hero": "/nov20/research/how-often-do-outsourced-staging-environments-drift-from-production-config.webp",
    "body": [
      "This protocol measures how often a staging environment drifts from production configuration in an outsourced delivery lane. The unit is one compared setting on one staging service at the observation date. Drift means a value that differs from production without a recorded reason. The study describes environment parity evidence, not the quality of the application.",
      "Define the services and the settings in scope before collection. Include runtime version, database engine, queue limits, timeouts, feature defaults, network paths, and access roles. Exclude secrets and record only the name and owner. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a comparison by the setting name, the production value, the staging value, and the source of each. Record the commit and the date of the comparison. Note whether the value comes from a file, a console, or a secret store. A value read from the wrong source can make a match look real.",
      "Set the population as every compared setting on the staging services in the agreed list. Include settings that match and settings that were never compared. Record the settings that could not be inspected and the reason. Report them separately from settings that drifted without a reason.",
      "Classify each setting by drift evidence. Use categories such as matching, an accepted difference with a reason, an unmanaged difference, and no comparison. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record the allowed-difference list and the owner who approved each entry. Note the review date and the compensating test for the difference. Record the named environment owner and the backup. A difference that nobody owns is drift even when someone remembers agreeing to it.",
      "Report the number of settings, the number matching, and the number in each category. Show counts by service and by release relevance. Present the unmanaged differences and the uncompared settings as separate rows. Use the same denominator for every rate.",
      "Separate an intended difference from an unmanaged drift. An intended difference has a written reason and an owner, while an unmanaged drift has neither. Report the two categories separately because the fixes differ. Record the evidence and the date beside each finding.",
      "Inspect the settings that changed around a recent deploy or a console hotfix. A cluster of unmanaged differences may mean changes were applied outside the configuration process. Compare the pattern with the deployment log and the ticket history. A single change can be a mistake, while a cluster is a process gap.",
      "Do not treat a matching commit as proof of matching configuration. The same code can run with a different pool size, flag default, or vendor endpoint. Compare the deployed values as well as the revision. Report the settings that were never compared because the team assumed the code was enough.",
      "The record cannot show whether a difference caused a specific bug or whether staging is a good test environment. It can show only whether the compared values matched or had a written reason. A drift is not proof of an incident, and a match is not proof of production readiness. The protocol also cannot see a setting changed after the comparison.",
      "A useful additional view is the age of each unmanaged difference. A value that changed last week is easier to trace than one that has been different for a year. Record the first known date and the last change. That field turns a count into a review of how long the team has been testing a different system.",
      "Record the data shape as well as the settings. Compare the schema version, the indexes, and the presence of edge-case fixtures. Note the masking rule for any production-like data. Report the services whose staging data cannot exercise the release.",
      "Check the network paths and the vendor endpoints used by staging. A sandbox endpoint can be an intended difference, while an unexplained private route is drift. Record the reason and the owner. Report the paths that reach a service production cannot reach.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a configuration source, an allowed-difference entry, a seed fixture, or a release check. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unmanaged group, not the easiest setting to copy. Record the expected effect and the evidence that will prove it. A parity claim that is never compared is an assumption.",
      "Build the sample from the deployment configuration and the runtime console, not from the environment README. The README describes the intention, while the console shows the current value. Compare the two and record the settings that appear in only one place. The mismatches are often the oldest overrides.",
      "Use two evidence sources for each setting, such as the configuration file and the running process. The file proves what was intended, while the process proves what is loaded. Compare them at the same time. A file that was edited but not deployed is still drift.",
      "Settings with recent incidents are overrepresented because they were inspected. Include a setting that has never caused a problem and one added by a new service. Record when the setting entered the environment. A new service often inherits a default nobody compared.",
      "Record the environment owner and the change process for each setting. A value changed in a console without a ticket is a process finding even when the value is correct. Note the audit log entry and the approval. Report the differences that cannot be explained by a change record.",
      "Report the result by release relevance as well as by count. A difference in a payment timeout matters more than a difference in a log level. Record the affected customer path beside the finding. The reader should see which drift could change a release decision.",
      "Repeat the measure after a platform change, a new service, or a configuration refactor. Keep the same categories and the same setting list. Record the settings that moved between categories. A stable count with a new service can still hide a new dependency.",
      "Check the allowed-difference list for entries whose reason has expired. A smaller instance size may be acceptable during a pilot and wrong after launch. Record the review date and the owner. Report the entries that no one has re-approved.",
      "Treat the protocol as a review of environment management, not a judgment of the release team. An unmanaged difference often means the configuration source was never agreed. Ask where the value is supposed to come from. The answer usually names the missing source of truth.",
      "Record the customer evidence used in the last release that passed staging. A passing test in a drifted environment is weaker evidence than the team thinks. Note the screens and paths that were checked. Report the release claims that depend on an uncompared setting.",
      "Set a review trigger for every new service, runtime upgrade, and vendor endpoint. A setting added after the last comparison will not appear in the old list. Require a recorded value and an owner before the service reaches staging. Record the approval date. The trigger keeps the comparison from aging silently."
    ],
    "takeaways": [
      "Count one compared setting per staging service.",
      "Separate an accepted difference from an unmanaged drift.",
      "Compare runtime values, not only the deployed commit.",
      "Record the age of every unmanaged difference.",
      "Re-compare after every new service or platform change."
    ],
    "sources": [
      [
        "The Twelve-Factor App: config",
        "https://12factor.net/config"
      ],
      [
        "Kubernetes configuration best practices",
        "https://kubernetes.io/docs/concepts/configuration/overview/"
      ],
      [
        "AWS Well-Architected operational excellence",
        "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "set-a-staging-drift-check-for-an-outsourced-delivery-lane",
      "how-often-do-outsourced-demo-environments-contain-live-customer-data"
    ]
  },
  {
    "slug": "what-share-of-outsourced-qa-test-accounts-are-disabled-after-a-sprint",
    "title": "What share of outsourced QA test accounts are disabled after a sprint?",
    "excerpt": "A protocol for counting test identities, checking disable evidence, and separating an account left active from one that was never owned.",
    "topic": "QA test account lifecycle",
    "published": "2026-11-20",
    "hero": "/nov20/research/what-share-of-outsourced-qa-test-accounts-are-disabled-after-a-sprint.webp",
    "body": [
      "This protocol measures the share of QA test accounts that are disabled after a sprint in an outsourced delivery lane. The unit is one test account on one environment at the observation date. Disabled means the login fails and the account cannot act, not merely that a ticket says it should. The study describes access lifecycle evidence, not the quality of the QA work.",
      "Define the environments and account types in scope before collection. Include personal logins, shared fixtures, service accounts, and credentials embedded in automated tests. Record the identity provider and the secret store for each. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define an account by its owner, purpose, environment, role, creation date, and expiry date. Record the sprint or release that justified it. Note whether it can approve a payment, send a message, or change a setting a customer would notice. Test the definition on the first five accounts.",
      "Set the population as every test account in the agreed environments on the observation date. Include accounts created for a closed sprint and accounts that no test currently uses. Record the accounts that could not be inspected and the reason. Report them separately from accounts that failed the disable check.",
      "Classify each account by lifecycle evidence. Use categories such as disabled with a verified failed login, disabled on paper only, active with a current purpose, and active with no owner. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record the named owner, the backup, and the date the purpose was last confirmed. Note the secret storage location and the last rotation. Record whether multi-factor authentication is enabled where the platform supports it. An account with an owner and no expiry is still a lifecycle gap.",
      "Report the number of accounts, the number disabled with evidence, and the number in each category. Show counts by environment and by role. Present the active accounts with no owner and the accounts with a failed disable check as separate rows. Use the same denominator for every rate.",
      "Separate an account left active from an account that was never owned. An active account may have a current purpose, while an unowned account has no one who can justify it. Report the two categories separately because the fixes differ. Record the evidence beside each finding.",
      "Inspect the accounts created around a closed sprint or a departing contractor. A cluster of active accounts may mean the close-out step was never run. Compare the pattern with the sprint calendar and the personnel record. A single leftover can be an oversight, while a cluster is a process gap.",
      "Do not treat a disabled flag in a spreadsheet as proof that the login fails. Test the login or query the identity provider for the account state. Check the sessions and tokens that were issued before the disable. Report the accounts whose disable step did not revoke existing access.",
      "The record cannot show whether an active account was used maliciously or whether a customer data set was reached. It can show only whether the account could act in the inspected environment. An active account is not proof of a breach, and a disabled one is not proof of good hygiene. The protocol also cannot see an account created outside the agreed identity provider.",
      "A useful additional view is the number of active accounts per closed sprint. A sprint with twelve surviving accounts is a different finding from one with a single fixture. Record the sprint and the count. That field turns a total into a review of which close-out failed.",
      "Record the role and the data each active account can reach. An admin fixture left active is a different risk from a read-only customer login. Note the approval for the role. Report the accounts whose role is broader than the test requires.",
      "Check the secret store for credentials that belong to disabled accounts. A disabled login with a live API token can still act. Record the token name, the last rotation, and the revocation evidence. Report the accounts whose tokens were not revoked with the login.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a default expiry, a close-out checklist, a fixture owner, or a token revocation step. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest active or unowned group, not the easiest account to delete. Record the expected effect and the evidence that will prove it. An expiry date that nobody checks is a suggestion, not a control.",
      "Build the sample from the identity provider export and the test repository, not from the test plan. The export shows what exists, while the repository shows what the automation still calls. Compare the two and record the accounts that appear in only one place. The mismatches are often the oldest fixtures.",
      "Use two evidence sources for each account, such as the identity provider state and a login attempt. The provider shows the configured state, while the attempt shows the effective result. Record both outcomes. A provider that says disabled and a login that succeeds is a finding.",
      "Accounts used in recent testing are overrepresented because the team remembers them. Include an account from a closed sprint and one created by a new service. Record the last login date. A dormant account with a live token is still a risk.",
      "Record the account creation path and the approval. An account created by asking a colleague in chat leaves no record and no expiry. Note the ticket and the approver. Report the accounts whose creation cannot be explained.",
      "Report the result by role and data access as well as by count. An admin account and a read-only fixture do not carry the same risk. Record the reachable data beside the status. The reader should see which active account carries the most exposure.",
      "Repeat the measure after a sprint close, a handover, or an identity provider change. Keep the same categories and the same environment list. Record the accounts that moved between categories. A stable count with a changed team can still hide a new ownerless login.",
      "Check the service accounts used by automated tests for a named owner and a rotation date. An automation identity with no owner is an orphan even when the tests are healthy. Record the rotation and the person who can perform it. Report the fixtures that share a secret with a human account.",
      "Treat the protocol as a review of access lifecycle, not a judgment of the QA engineers. An active account often means the sprint close-out never included identity cleanup. Ask who was supposed to disable it and when. The answer points to the missing step rather than a careless person.",
      "Record the customer data classes reachable from each active account and the masking rule applied. A test account that sees unmasked customer records is a privacy finding, not only an access finding. Note the rule and the owner. Report the accounts that reach data the test does not need.",
      "Set a rule that no test account outlives its sprint without a written extension and a named owner. Write the rule into the test guide and the sprint close-out checklist. Record the extension approver and the review date. The rule turns a good intention into a check that can be verified."
    ],
    "takeaways": [
      "Count one test identity per environment, including automation.",
      "Verify the login fails, not only that a flag says disabled.",
      "Separate an active account from an account with no owner.",
      "Revoke tokens and sessions, not only the login.",
      "Re-check accounts after every sprint close and handover."
    ],
    "sources": [
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "OWASP Web Security Testing Guide",
        "https://owasp.org/www-project-web-security-testing-guide/"
      ],
      [
        "CIS Controls",
        "https://www.cisecurity.org/controls"
      ]
    ],
    "related": [
      "write-a-test-account-lifecycle-rule-for-outsourced-qa",
      "how-long-do-revoked-offshore-credentials-stay-usable-after-an-exit"
    ]
  }
];
