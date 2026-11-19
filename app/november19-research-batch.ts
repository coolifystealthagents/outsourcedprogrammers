import type { ResearchPost } from './fleet-content';

export const november19ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-outsourced-maintenance-lanes-test-a-database-restore",
    "title": "How often do outsourced maintenance lanes test a database restore?",
    "excerpt": "A protocol for dating each database restore rehearsal, classifying the untested and failed cases, and separating a missing test from a broken backup.",
    "topic": "Database restore drills",
    "published": "2026-11-19",
    "hero": "/nov19/research/how-often-do-outsourced-maintenance-lanes-test-a-database-restore.webp",
    "body": [
      "This protocol measures how often an outsourced maintenance lane tests a database restore. The unit is one production database named in the delivery agreement at the observation date. A tested database means the team restored a real backup into an isolated environment and verified the application path within the agreed review window. The study describes restore evidence, not the quality of the backup vendor.",
      "Define the databases and the review window before collection. Include the primary application database, reporting stores, and any database that holds state the customer depends on. Record the backup system, the schedule, and the retention period for each. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a test by the backup identifier, the restore start and finish time, the environment, and the verification result. Require at least one read and one write against the restored copy. Record the application version used for the check. A file copy without an application check does not count as a tested restore.",
      "Set the population as every database in the agreed list on the observation date. Include databases that are small, old, or rarely changed because those are often skipped. Record the databases that could not be tested and the reason. Report them separately from databases that failed a test.",
      "Classify each database by the time since its last verified restore test. Use bands such as within ninety days, ninety to one hundred eighty days, one hundred eighty to three hundred sixty-five days, and more than a year. Do not merge the bands after seeing the result. The bands make month-to-month comparison meaningful.",
      "Record whether the restore is rehearsed on a schedule and who owns the rehearsal. Note the storage account, the encryption key owner, and the person who can approve an isolated environment. Record the named owner and a backup. A database with no owner is reported separately from one with an owner and no rehearsal.",
      "Report the number of databases, the number tested in the window, and the number inside each band. Show counts by environment and by data sensitivity. Present the databases with no test record and the databases with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate an untested database from a failed restore. An untested database has no rehearsal in the window, while a failed restore has evidence and a defect. Report the two categories separately because the fixes differ. Record the evidence beside each finding and keep the failed backup identifier.",
      "Inspect the databases that share a backup system or a platform team. A cluster of untested databases may mean the rehearsal depends on one engineer or one maintenance window. Compare the pattern with the team roster and the release calendar. A single gap can be an oversight, while a cluster is a planning gap.",
      "Do not treat a successful restore as proof that the recovery plan works for every failure. The test may cover a deleted table but not a lost region or a corrupted backup chain. Record which failure type the test represented. Report the limits in the same section as the result.",
      "The record cannot show whether a real recovery would meet the customer promise under pressure. It can show only whether a named backup was restored and verified in a controlled environment. A tested database is not proof of a resilient service, and an untested one is not proof of a broken backup. The protocol also cannot see a database restored by a vendor outside the agreed list.",
      "A useful additional view is the time from the restore decision to the first verified request. A team that restores in an hour is in a different position from one that takes a day. Record the decision time, the load time, and the verification time for each test. That field turns a yes-or-no count into a review of recovery speed.",
      "Record the age of the backup used in each test. A team that only tests the newest backup may never discover that older media or keys have expired. Test one backup near the retention edge each year. Report the result beside the normal test.",
      "Check whether the isolated environment truly cannot reach production. Record the network rule, the credentials, and the data handling rule used for the restored copy. A test that runs inside production is a different risk. Report any test that could not be isolated.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a scheduled rehearsal, a backup copy in a separate account, a named backup owner, or a written verification step. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest untested or failed group, not the easiest database to restore. Record the expected effect and the evidence that will prove it. A restore plan that is never rehearsed is a document, not a recovery capability.",
      "Select the sample from the database inventory rather than from recent restore tickets. Ticket-based samples overrepresent databases that already had a problem. Include the database that has never caused an incident but holds the customer record. Record how each database entered the sample.",
      "Use two evidence sources for each database, such as the backup console and the drill record. A console entry proves a backup ran, while the drill record proves a restore worked. Compare the two before assigning a status. A mismatch is a finding even when both sources look healthy.",
      "A team that only tests the primary database will overstate readiness for reporting stores and archives. Report the primary and secondary databases separately. Show the count of databases that have no rehearsal at all. The distinction keeps one strong result from covering a weak one.",
      "Record the test window and the person who ran it. A test run during a quiet week may avoid the lock contention of a month-end close. Note the data volume and the concurrent traffic during the drill. The conditions belong beside the pass or fail result.",
      "Report the result by data sensitivity as well as by count. A database with customer payment data deserves a stricter rehearsal schedule than an internal metrics store. Record the classification with the finding. The reader should see which gaps carry the most risk.",
      "Repeat the measure after the first rehearsal and keep the definitions unchanged. A jump from no test to one test is progress, but it is not yet a habit. Compare the next window with the same bands. The trend matters more than a single quarter.",
      "Check that the encryption key or the key custodian is available during the drill. A backup that cannot be decrypted is not a recovery option. Record the key owner and the time to obtain access. Report the key as part of the restore evidence.",
      "Treat the protocol as a review of the rehearsal process rather than a score for the database team. A low count can reflect a missing calendar slot or an approval delay. Ask why the test did not happen before proposing a fix. The answer usually names the constraint to remove.",
      "Keep the restore record with the release and audit evidence so a reviewer can connect the test to a real backup. Record the backup identifier, the checksum, and the storage location beside the result. A drill that cannot be tied to a real backup is only a demonstration. The record should survive a change of engineer.",
      "Set a maximum interval between rehearsals and write it into the delivery agreement. A quarterly interval is common for the primary database, while an archive may need a longer cycle. Record the interval and the date of the next test. The rule turns a good intention into a calendar commitment."
    ],
    "takeaways": [
      "Count one database per production store, not one backup job.",
      "Treat a restore without a verified application request as untested.",
      "Report a missing rehearsal separately from a failed restore.",
      "Record the decision, load, and verification times for each test.",
      "Test one backup near the retention edge every year."
    ],
    "sources": [
      [
        "PostgreSQL backup and restore",
        "https://www.postgresql.org/docs/current/backup.html"
      ],
      [
        "NIST SP 800-34 contingency planning",
        "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
      ],
      [
        "AWS Well-Architected reliability pillar",
        "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "set-a-database-restore-drill-for-an-outsourced-maintenance-lane",
      "what-share-of-offshore-scheduled-jobs-have-a-named-owner"
    ]
  },
  {
    "slug": "what-share-of-offshore-scheduled-jobs-have-a-named-owner",
    "title": "What share of offshore scheduled jobs have a named owner?",
    "excerpt": "A protocol for counting unattended jobs, testing whether a person can explain each one, and separating an unowned job from a job with no failure signal.",
    "topic": "Scheduled job ownership",
    "published": "2026-11-19",
    "hero": "/nov19/research/what-share-of-offshore-scheduled-jobs-have-a-named-owner.webp",
    "body": [
      "This protocol measures the share of scheduled jobs that have a named owner in an offshore maintenance lane. The unit is one job on one environment at the observation date. A named owner means one person can explain the job, change its schedule, and respond when it fails. The study describes ownership evidence, not the quality of the code inside the job.",
      "Define the job types and the systems in scope before collection. Include cron entries, systemd timers, cloud schedulers, queue workers, and report generators. Record the server, platform, and repository used to build the list. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a job by its schedule, command or function, environment, and repository. Record the identity it runs as and the resources it can reach. Note the expected duration and the output it produces. Test the definition on the first five jobs before collecting the rest.",
      "Set the population as every job in the agreed systems on the observation date. Include jobs that have not run recently because those are often dormant rather than retired. Record the jobs that could not be inspected and the reason. Report them separately from jobs that ran and failed.",
      "Classify each job by ownership. Use categories such as a named owner and backup, a named owner without a backup, a team alias, and no owner. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the job has a failure alert, a known expected duration, and a retry limit. Note whether the alert reaches a named person or only a shared channel. Record the last successful run and the last review of the job purpose. A job with an owner and no alert is still a blind spot.",
      "Report the number of jobs, the number with a named owner and backup, and the number in each ownership category. Show counts by platform and by data sensitivity. Present the jobs with no alert and the jobs with no recent run as separate rows. Use the same denominator for every rate.",
      "Separate an unowned job from an orphaned one. An unowned job has no accountable person, while an orphaned job has an owner who has left or a repository that no longer exists. Report the two categories separately because the fixes differ. Record the evidence beside each finding.",
      "Inspect the jobs created around a former contractor or a temporary project. A cluster of unowned jobs may mean the handover never covered scheduled work. Compare the pattern with the personnel record and the repository history. A single orphan can be an oversight, while a cluster is a handover gap.",
      "Do not treat a job that runs successfully as proof that it is needed. A job may send duplicate messages or rewrite data that nobody reads. Sample one successful run and check its output with the owner. Report what the sample showed.",
      "The record cannot show whether a job would fail silently under a new platform or whether its output is used by a customer. It can show only whether a named person can explain the job and change it. An unowned job is not proof of an incident, and an owned job is not proof of a good design. The protocol also cannot see a job scheduled outside the agreed systems.",
      "A useful additional view is the time since the last successful run for each job. A job that has not run in months may be dormant, broken, or no longer scheduled. Record the last run time and the last output review. That field turns an ownership count into a review of whether the job still matters.",
      "Record the failure signal and the retry limit for each job. A job that retries forever can multiply load or duplicate a payment. Compare the retry rule with the job purpose. Report the jobs that could cause a duplicate side effect.",
      "Check the credentials each job uses and whether the secret has a rotation date. A job with a shared account or a personal token is an ownership problem even when a name is listed. Record the account owner and the last rotation. Report shared-account jobs as a separate finding.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a named backup owner, a failure alert, a job account, or a quarterly register review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unowned or orphaned group, not the easiest job to document. Record the expected effect and the evidence that will prove it. A register that is never reviewed is a list of guesses.",
      "Build the sample from scheduler exports and a repository search, not from a hand-written list. Scheduler exports show what is registered, while the repository shows what the code does. Compare the two and record the jobs that appear in only one place. The mismatches are often the oldest jobs.",
      "Use two pieces of evidence for each job, such as the schedule entry and a short conversation with the named owner. The entry proves the job exists, while the conversation proves someone can explain it. Record the date of the conversation. A name in a spreadsheet is not evidence of ownership.",
      "Active jobs are overrepresented in most registers because failures bring them to attention. Dormant jobs are skipped even though they may still hold credentials and data access. Include them in the sample and mark the last successful run. A dormant job with production credentials is still a risk.",
      "Record the run history and the alert routing for each job. A job that has failed silently for weeks may look healthy in the register. Compare the last success time with the expected schedule. Report the gap and the alert destination.",
      "Report the result by customer impact as well as by count. A newsletter job and a payment reconciliation job do not deserve the same response time. Record the impact beside the owner status. The reader should see where an unowned job would hurt first.",
      "Repeat the measure after a handover or a platform change, because those events create new orphans. Keep the same categories so the comparison is honest. Record the jobs that moved between owners. A stable count with a stable list can still hide a reshuffled risk.",
      "Check the secret rotation for each job account. A job with a named owner and a shared token is only half governed. Record the last rotation and the person who can perform it. Report the shared-account jobs as a separate finding.",
      "Treat the protocol as a review of handover and operations, not a judgment of the engineers. An unowned job often means the handover checklist never included scheduled work. Ask what would have made the job visible earlier. The answer points to the process change.",
      "Record the time zone of each schedule in the register, not only the cron expression. A job that runs at midnight in one zone can collide with a batch window in another. Note the local time that matters to the business. Report the jobs whose schedule crosses a daylight-saving change.",
      "Give the register a small data dictionary for status and impact so two reviewers classify the same job the same way. Record the definition beside the columns. Review the dictionary when the register changes owners. A shared vocabulary is what makes the counts comparable across quarters.",
      "Record the last change to each job and the ticket that approved it. A job edited outside the change process may have lost its alert or gained a broader account. Compare the schedule and the command with the repository history. Report the jobs whose current state cannot be explained."
    ],
    "takeaways": [
      "Count one job per environment, not one code path.",
      "Require a named person and a backup, not a team mailbox.",
      "Report an unowned job separately from an orphaned one.",
      "Record the failure alert, retry limit, and last successful run.",
      "Check the job account and secret rotation as part of ownership."
    ],
    "sources": [
      [
        "crontab manual",
        "https://man7.org/linux/man-pages/man5/crontab.5.html"
      ],
      [
        "systemd.timer manual",
        "https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "write-a-scheduled-job-ownership-register-for-offshore-maintenance-work",
      "how-often-do-outsourced-maintenance-lanes-test-a-database-restore"
    ]
  },
  {
    "slug": "how-often-do-third-party-api-outages-reach-an-offshore-support-queue-without-a-fallback",
    "title": "How often do third-party API outages reach an offshore support queue without a fallback?",
    "excerpt": "A protocol for mapping vendor dependencies, checking whether a runnable fallback exists, and reporting the outages that arrive with no prepared response.",
    "topic": "Third-party outage fallback",
    "published": "2026-11-19",
    "hero": "/nov19/research/how-often-do-third-party-api-outages-reach-an-offshore-support-queue-without-a-fallback.webp",
    "body": [
      "This protocol measures how often a third-party API outage reaches an offshore support queue without a prepared fallback. The unit is one vendor dependency on one customer path at the observation date. A fallback means a written, runnable response that names the owner, the degraded mode, and the customer message. The study describes outage preparedness, not the reliability of the vendor.",
      "Define the vendor list before collection. Include payment, messaging, identity, mapping, shipping, and any API that sits inside checkout, login, or support. Record the contract owner and the support channel for each. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a fallback by the customer symptom it addresses, the degraded mode, the decision owner, and the evidence of a test. Require the degraded mode to be usable by the people on shift without extra approval. Record the customer message and the update cadence. A contact number alone is not a fallback.",
      "Set the population as every vendor on the agreed customer path on the observation date. Include vendors with a recent incident and vendors with no incident in the window. Record the vendors that could not be assessed and the reason. Report them separately from vendors that failed the check.",
      "Classify each vendor by fallback evidence. Use categories such as no written note, a note never tested, a note tested within the review window, and a test that failed. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the vendor publishes a status page and whether the team monitors it. Note the contract response terms and the escalation path. Record the named decision owner and the backup. A vendor with a status page and no internal owner is still unprepared.",
      "Report the number of vendors, the number with a tested fallback, and the number in each category. Show counts by customer path and by contract size. Present the vendors with no note and the vendors with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate a missing fallback from a fallback that failed in a drill. A missing fallback has no written response, while a failed fallback has evidence and a defect. Report the two categories separately because the fixes differ. Record the drill date and the failed step beside each finding.",
      "Inspect the vendors that share a customer path or a contract owner. A cluster of unprepared vendors may mean the team never mapped the path end to end. Compare the pattern with the incident history. A single gap can be an oversight, while a cluster is a planning gap.",
      "Do not treat a vendor's uptime claim as proof that the customer path is safe. The claim may exclude the endpoint the application uses or the region the customers reach. Record the specific service and region in scope. Report the limits beside the result.",
      "The record cannot show whether a real outage would be handled well under pressure. It can show only whether a written fallback existed and whether a drill exercised it. A missing fallback is not proof of a past failure, and a tested one is not proof of a fast recovery. The protocol also cannot see a vendor added outside the contract process.",
      "A useful additional view is the time from the first customer report to the first public message. Record the detection time, the declaration time, and the message time for each drill. That field turns a preparedness count into a review of customer communication speed. Record both times on the same clock and with the same incident reference so a later reviewer can compare them.",
      "Record the data the degraded mode cannot accept and how the team recovers it. A fallback that queues payments must have a reconciliation step and an owner. Test the recovery path, not only the blocked state. Report any mode that loses an order or sends a duplicate.",
      "Check the tabletop record for the roles that attended. A drill without support or the client owner may miss the customer message and the approval path. Record the attendees and the gaps they found. Report a drill that only engineering attended as partial evidence.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a vendor contact card, a degraded mode, a decision owner, or a quarterly tabletop. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest missing or failed group, not the easiest vendor to document. Record the expected effect and the evidence that will prove it. A fallback note that is never rehearsed is a document, not a capability.",
      "Build the vendor sample from the customer path rather than from the procurement list. A contract may cover a service the application never calls, while a free API may sit inside checkout. Trace one real order or login and record every external call. Use that trace to correct the list.",
      "Use two evidence sources for each vendor, such as the fallback note and a drill record. The note proves a response was written, while the drill proves someone tried it. Record the date and the roles that attended. A note with no drill is a plan, not a capability.",
      "Vendors with recent incidents are overrepresented because they are easy to remember. Include the vendor that has never failed and the one added last quarter. Record when the vendor entered the customer path. A new vendor often has no fallback because nobody updated the note.",
      "Record the detection source and the alert route for each vendor. A status page that nobody watches does not shorten detection. Compare the first report time with the first internal alert. Report the gap and the owner of the monitoring rule.",
      "Report the result by customer path as well as by count. A payment vendor and a map widget do not carry the same consequence. Record the path and the blocked action beside each finding. The reader should see which gap would stop revenue.",
      "Repeat the measure after a tabletop and after any vendor change. A drill can turn a missing note into a tested one, but only if the team records the fix. Compare the categories with the earlier window. The trend shows whether the drills are changing the response.",
      "Check the data the degraded mode cannot accept and the reconciliation owner. A fallback that queues payments without a replay step creates a second backlog. Record the replay test and the duplicate check. Report the mode as partial when recovery is unproven.",
      "Treat the protocol as a review of customer communication and dependency planning. A missing fallback often means nobody mapped the path end to end. Ask who would have written the note and when. The answer usually reveals an ownership gap rather than a documentation gap.",
      "Record the vendor's own incident history for the service and the region in scope. A vendor with a strong overall record can still fail repeatedly on the endpoint the application uses. Note the last incident that affected the customer path. Report the history beside the fallback status.",
      "Set a review trigger for every new vendor or new integration. A vendor added after the last drill will not appear in the old fallback note. Require a contact, a symptom, and a degraded mode before the integration reaches production. Record the approval date. The trigger keeps the list from aging silently.",
      "Record the last time the degraded mode was used in a real event as well as in a drill. A mode used under pressure may have been changed by the people on shift. Compare the note with what they actually did. Report the difference and update the note."
    ],
    "takeaways": [
      "Count one vendor dependency per customer path.",
      "Require a runnable degraded mode, not just a support number.",
      "Report a missing fallback separately from a failed drill.",
      "Measure detection, declaration, and first customer message time.",
      "Test the recovery path as well as the blocked state."
    ],
    "sources": [
      [
        "AWS Well-Architected reliability pillar",
        "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
      ],
      [
        "Google SRE Book",
        "https://sre.google/sre-book/table-of-contents/"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "write-a-third-party-api-outage-fallback-note-for-an-offshore-support-pod",
      "how-long-do-production-logs-retain-customer-data-in-an-outsourced-debugging-lane"
    ]
  },
  {
    "slug": "how-long-do-production-logs-retain-customer-data-in-an-outsourced-debugging-lane",
    "title": "How long do production logs retain customer data in an outsourced debugging lane?",
    "excerpt": "A protocol for dating log retention, locating sensitive fields, and separating a retention overrun from a redaction failure.",
    "topic": "Production log retention",
    "published": "2026-11-19",
    "hero": "/nov19/research/how-long-do-production-logs-retain-customer-data-in-an-outsourced-debugging-lane.webp",
    "body": [
      "This protocol measures how long production logs retain customer data in an outsourced debugging lane. The unit is one log stream on one environment at the observation date. Customer data means any field that identifies a person or reveals a private transaction, including email, phone, address, and payment details. The study describes log hygiene, not the quality of the application.",
      "Define the log streams and the systems in scope before collection. Include application logs, proxy logs, queue logs, scheduled job output, and any vendor log the team can query. Record the retention setting and the storage owner for each. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a stream by its source, environment, retention period, access role, and export path. Record whether redaction happens in the application, the collector, or only the viewer. Note the encryption key owner and the deletion mechanism. Test the definition on the first three streams.",
      "Set the population as every stream in the agreed list on the observation date. Include streams that are rarely queried because those often keep the oldest data. Record the streams that could not be inspected and the reason. Report them separately from streams that failed the check.",
      "Classify each stream by retention period. Use bands such as seven days or less, eight to thirty days, thirty-one to ninety days, and more than ninety days. Do not merge the bands after seeing the result. The bands make comparison across months meaningful.",
      "Record whether sensitive fields are redacted before storage and who approved the field list. Note the last test of the redaction rule and the result. Record the named access owner and the export approver. A stream with a short retention and no redaction is still a risk.",
      "Report the number of streams, the number within the written retention policy, and the number in each band. Show counts by environment and by data category. Present the streams with no redaction test and the streams with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate a retention overrun from a redaction failure. A retention overrun keeps data longer than the policy allows, while a redaction failure stores a sensitive field it should have removed. Report the two categories separately because the fixes differ. Record the policy date and the evidence beside each finding.",
      "Inspect the streams that share a framework or a logging library. A cluster of failures may mean a default writes the full request on an exception. Compare the pattern with the library versions and the deployment history. A single leak can be a mistake, while a cluster is a design gap.",
      "Do not treat a short retention as proof that the stream is safe. A seven-day stream can still expose a token to everyone with query access. Check the access role and the export path as well as the retention. Report the access finding beside the retention result.",
      "The record cannot show whether a customer was harmed or whether an exported file still exists on a laptop. It can show only the configured retention and the redaction evidence in the inspected systems. A long retention is not proof of a breach, and a short one is not proof of good hygiene. The protocol also cannot see a log written by a vendor outside the agreed list.",
      "A useful additional view is the number of open exports and their destinations. An export that lands in a shared drive or a personal download folder escapes the retention rule. Record the export date, the destination, and the ticket. That field turns a configuration count into a review of data movement.",
      "Record how the team handles an incident hold. A hold can extend retention for evidence, but it needs an owner, a scope, and an end date. Check that the hold does not keep unrelated customer data. Report holds that have no review date.",
      "Sample one stream and search for patterns the rule should have removed. Use a test account and a synthetic record rather than a real customer. Record the query, the result, and the person who ran it. Report a sample that could not be run because access was missing.",
      "Give the result to the client data owner and the offshore delivery lead with one observable change. The change might be a field rule, a structured logger, a retention setting, an export control, or a monthly sample. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest retention overrun or redaction failure, not the easiest stream to shorten. Record the expected effect and the evidence that will prove it. A retention rule that is never sampled is a setting, not a control.",
      "Build the sample from the logging configuration and the storage console, not from the dashboards the team uses. A stream can exist without a dashboard and still hold sensitive fields. Include the error stream and the scheduled job output. Record how each stream entered the sample.",
      "Use two evidence sources for each stream, such as the stored record and the logger configuration. The record shows what was written, while the configuration shows what the rule intended. Compare them on the same timestamp. A mismatch is a finding even when the rule looks correct.",
      "Streams with recent incidents are overrepresented because they were queried. Include a stream that nobody has opened in months and a stream created by a new service. Record the last query date. An unread stream can still retain customer data.",
      "Record the retention setting, the deletion job, and the access role for each stream. A policy on paper does not prove that old data was removed. Sample the oldest record and check its date. Report the result with the policy version.",
      "Report the result by data category as well as by count. A stream with authentication tokens deserves a stricter finding than one with request timings. Record the field list beside the stream. The reader should see which retention gap carries the most exposure.",
      "Repeat the measure after a logger or framework upgrade, because defaults change. Keep the same bands and the same sample method. Record the streams that moved categories. A stable policy with a changed library can still produce a new leak.",
      "Check every export destination and every open export ticket. An export can outlive the stream and sit on a laptop or a shared drive. Record the export date, the destination, and the retention rule applied. Report open exports as a separate finding.",
      "Treat the protocol as a review of data handling, not a judgment of the support team. A long retention often comes from a default nobody reviewed. Ask who set the value and when it was last checked. The answer points to the configuration change.",
      "Record the log level used in production for each stream. A debug level enabled for one investigation can multiply the data and the exposure. Note who can change the level and whether the change expires. Report any stream left at a verbose level after the ticket closed.",
      "Check the vendor and platform logs that the team can query but does not own. A support tool or a proxy may retain request bodies under a separate policy. Record the vendor, the retention, and the access path. Report the streams that have no review owner on the client side.",
      "Record who can change the retention policy and how a change is approved. A policy edited by one engineer during an incident can leave the stream outside the agreed rule. Check the audit log for recent changes. Report the change and the approval beside the policy."
    ],
    "takeaways": [
      "Count one log stream per environment and source.",
      "Check redaction before storage as well as the retention period.",
      "Report a retention overrun separately from a redaction failure.",
      "Record every open export and its destination.",
      "Sample one stream monthly with synthetic data."
    ],
    "sources": [
      [
        "OWASP Logging Cheat Sheet",
        "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"
      ],
      [
        "NIST SP 800-92 log management",
        "https://csrc.nist.gov/pubs/sp/800/92/final"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ]
    ],
    "related": [
      "set-a-log-redaction-rule-for-outsourced-production-debugging",
      "how-often-do-third-party-api-outages-reach-an-offshore-support-queue-without-a-fallback"
    ]
  },
  {
    "slug": "what-share-of-outsourced-feature-flag-kill-switches-are-tested-before-a-release",
    "title": "What share of outsourced feature flag kill switches are tested before a release?",
    "excerpt": "A protocol for counting kill switches, proving the off state, and separating an untested switch from one that failed its test.",
    "topic": "Feature flag kill switches",
    "published": "2026-11-19",
    "hero": "/nov19/research/what-share-of-outsourced-feature-flag-kill-switches-are-tested-before-a-release.webp",
    "body": [
      "This protocol measures the share of feature flag kill switches that are tested before a release in an outsourced delivery lane. The unit is one switch on one release at the observation date. A tested switch means the team proved the off state on a production-like copy and measured the time to effect. The study describes release control evidence, not the quality of the feature behind the flag.",
      "Define the releases and the flag systems in scope before collection. Include server flags, client flags, configuration switches, and any emergency control that can stop a customer path. Record the flag provider and the repository that evaluates each switch. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a switch by its name, owner, default state, protected path, and removal date. Record the server and client behavior when the flag service is unavailable. Note the background jobs and messages the switch must also stop. Test the definition on the first five switches.",
      "Set the population as every switch attached to a release in the agreed window. Include switches that were created but never enabled because those still carry a default. Record the switches that could not be inspected and the reason. Report them separately from switches that failed a test.",
      "Classify each switch by test evidence. Use categories such as tested with recorded evidence, tested on the client only, not tested, and no named owner. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the off state was tested on the server path and in the background jobs. Note the test environment, the accounts, and the time from flip to effect. Record the person who verified the permission to flip the switch. A switch that only hides a button is not fully tested.",
      "Report the number of switches, the number tested with evidence, and the number in each category. Show counts by customer path and by release. Present the switches with no owner and the switches with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate an untested switch from a switch that failed its test. An untested switch has no evidence, while a failed switch has evidence and a defect. Report the two categories separately because the fixes differ. Record the failed step and the test date beside each finding.",
      "Inspect the switches that protect checkout, payments, and access. A cluster of untested switches may mean the release process treats flags as a development convenience rather than a control. Compare the pattern with the release history. A single gap can be a mistake, while a cluster is a process gap.",
      "Do not treat a flag that exists as proof that it can stop the risk. The switch may depend on the same provider as the feature or may only affect the browser. Check the fallback path when evaluation fails. Report the dependency beside the result.",
      "The record cannot show whether an incident would be handled well or whether the switch would be flipped in time. It can show only whether the off state was tested and measured before the release. An untested switch is not proof of an outage, and a tested one is not proof of a safe feature. The protocol also cannot see a switch created outside the flag system.",
      "A useful additional view is the time from flipping the switch to the customer-visible effect. Record the cache layer, the polling interval, and the instance count. A switch that takes twenty minutes changes the response plan. That field turns a yes-or-no count into a review of incident speed.",
      "Record the removal date and the owner for each switch. A switch that stays after the risk ends becomes an untested branch. Check the inventory against the code paths each quarter. Report the switches that have no removal date.",
      "Check the default state when the flag service is unavailable. A default that enables the risky path turns a provider outage into a feature outage. Test the fallback with the provider blocked. Report the switches whose safe state depends on the provider being healthy.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be an off-state test, a safe default, a named owner, a permission check, or a removal review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest untested or ownerless group, not the easiest switch to test. Record the expected effect and the evidence that will prove it. A kill switch that is never tested is a configuration setting, not a control.",
      "Build the switch sample from the flag provider and the release records, not from the code alone. The provider shows what is evaluated, while the release record shows what was tested. Compare the two and record the switches that appear in only one place. The mismatches are often the oldest flags.",
      "Use two evidence sources for each switch, such as the release ticket and the off-state test result. The ticket proves the switch was part of the release, while the result proves someone tried the off state. Record the test environment and the account used. A switch without evidence is untested by definition.",
      "Switches on the checkout path are overrepresented in incident reviews because failures are visible. Include a switch that protects a quiet internal path and one that was never enabled. Record the last evaluation date. An unused switch with an unsafe default is still a risk.",
      "Record the default state, the fallback path, and the time to effect for each switch. A switch that depends on the provider being healthy may fail open during the outage it was meant to handle. Test the fallback with the provider blocked. Report the dependency beside the result.",
      "Report the result by customer path as well as by count. A switch around a payment action deserves a stricter test than one around a recommendation widget. Record the protected path beside the category. The reader should see where an untested switch would hurt first.",
      "Repeat the measure after a flag provider change or a release process change. Keep the same categories and the same test definition. Record the switches that moved between categories. A stable count can still hide a new dependency.",
      "Check the removal date and the owner for each switch. A switch that stays after the risk ends becomes an untested branch that future engineers must reason about. Record the last review and the code path it protects. Report the switches with no removal plan.",
      "Treat the protocol as a review of release control, not a judgment of the feature team. An untested switch often means the release checklist treats flags as development tools. Ask which switch would be flipped first in an incident and who has permission. The answer shows whether the control is real.",
      "Record the flag evaluation logs for the release window. The logs show whether the switch was actually evaluated by the path the team expected. A switch that never appears in the logs may be bypassed by a cache or a client build. Report the evidence beside the test result.",
      "Set a quarterly test calendar for the emergency switches and keep it with the release schedule. A calendar makes the test visible before an incident rather than after one. Record the owner and the result for each entry. The calendar is the difference between a control and a document.",
      "Record the person who last reviewed the switch and the evidence they saw. A review that only reads the flag name is not a review of the protected behavior. Ask them to describe the customer effect of the off state. Report the switches whose reviewer could not explain it."
    ],
    "takeaways": [
      "Count one switch per release and protected customer path.",
      "Treat a browser-only test as partial evidence, not a pass.",
      "Report an untested switch separately from a failed test.",
      "Measure the time from flip to customer-visible effect.",
      "Require a removal date and a safe default for every switch."
    ],
    "sources": [
      [
        "Martin Fowler: feature toggles",
        "https://martinfowler.com/articles/feature-toggles.html"
      ],
      [
        "OpenFeature specification",
        "https://openfeature.dev/specification/"
      ],
      [
        "Google SRE Book: release engineering",
        "https://sre.google/sre-book/release-engineering/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ]
    ],
    "related": [
      "test-a-feature-flag-kill-switch-before-an-outsourced-release",
      "set-a-log-redaction-rule-for-outsourced-production-debugging"
    ]
  }
];
