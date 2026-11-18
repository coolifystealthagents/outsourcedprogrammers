export const november18BlogBatch = [
  {
    "slug": "set-a-tls-certificate-expiry-watch-for-an-outsourced-maintenance-lane",
    "title": "Set a TLS certificate expiry watch for an outsourced maintenance lane",
    "excerpt": "A watch that lists every certificate on a client domain, names the renewal owner, and turns an expiry date into a scheduled test rather than a surprise.",
    "minutes": 8,
    "published": "2026-11-18",
    "body": [
      "## Inventory every certificate the lane owns",
      "A certificate watch starts with a list of every domain, subdomain, and service endpoint that terminates TLS for the client. Include the marketing site, the application, the API, the mail gateway, and any internal endpoint the offshore team can reach. Do not trust a single spreadsheet that someone built a year ago. Walk the DNS zone and the load balancer configuration to find the certificates that are actually served.",
      "Record the issuer, the subject, the expiry date, and the automation that renews each certificate. Mark the certificates that are renewed by hand because those are the ones that fail during a holiday. Note the environment where each certificate is installed. A staging certificate that expires is a smaller risk than a production one, but it still blocks a release.",
      "## Record the owner and the renewal path",
      "Give every certificate a named owner who can renew it and a backup who can act when the owner is unavailable. Record the account that controls the DNS record and the account that controls the certificate authority. Keep those two accounts in the client's identity system rather than a contractor's personal login. A certificate with no owner is a date waiting to become an incident.",
      "Write the renewal path as ordered steps with the person who performs each one. Include the validation method, the DNS change, the deploy step, and the check that the new certificate is served. Note where the private key is stored and who can read it. The path should be short enough to rehearse in one sitting.",
      "## Set alert windows before expiry",
      "Set alerts at thirty days, fourteen days, and three days before expiry, and send them to the owner and the delivery lead. Use the monitoring system that already pages the team rather than a separate calendar reminder. Test the alert by setting a temporary threshold on a staging certificate. An alert that nobody has seen fire is a guess.",
      "Escalate automatically when a certificate crosses the three-day mark without a renewal ticket. Name the person who receives the escalation and the action they take. Do not rely on the certificate authority reminder email, because it may go to an address that no longer exists. The watch should fail loudly before a customer sees an error.",
      "## Stage the renewal and test the chain",
      "Renew on staging first and confirm that the full chain is served, including the intermediate certificates. Check the protocol versions and the cipher suites that the client requires. Run the same client that real users run rather than a browser on the engineer laptop. A chain that works in one client can fail in another.",
      "Record the fingerprint of the new certificate and the time it went live. Keep the previous certificate until the new one has served traffic for a full day. Note the rollback step in the ticket in case a client rejects the new chain. The renewal is complete only when the served certificate matches the record.",
      "## Handle a missed renewal without panic",
      "When a certificate expires, the first step is to confirm whether the renewal can complete automatically. Check the DNS challenge, the authority account, and the deploy pipeline in that order. Tell the client contact what is affected and what is not, without guessing at a fix time. A short, accurate note is better than a silent scramble.",
      "Renew, deploy, and verify the chain as in a normal renewal, then record the timeline from detection to recovery. Identify the step that failed and the alert that should have caught it earlier. Add a check or a backup owner rather than a promise to be more careful. Review the incident in the next weekly delivery call.",
      "## Review the watch after every change",
      "Add a certificate check to the change process for any new domain, load balancer, or service endpoint. Review the list when a vendor changes, when a domain moves, or when the team hands a lane to a new engineer. Remove certificates that are no longer served and record why. A list that only grows becomes noise.",
      "Sample one certificate each quarter and walk its renewal path end to end. Confirm that the owner, the DNS account, and the authority account are still correct. Record the date of the test and the person who ran it. The watch is only as good as the last rehearsal."
    ]
  },
  {
    "slug": "write-a-build-artifact-retention-rule-for-offshore-release-trains",
    "title": "Write a build artifact retention rule for offshore release trains",
    "excerpt": "A retention rule that keeps a rebuildable artifact for every released commit, records where it lives, and proves a restore before the pipeline changes.",
    "minutes": 8,
    "published": "2026-11-18",
    "body": [
      "## Define what a rebuildable artifact must contain",
      "A rebuildable artifact is a packaged output that can be deployed without re-running an uncertain local build. It should contain the compiled code, the locked dependency list, the build configuration, and the commit identifier that produced it. Record the toolchain version and the environment variables that affect the output. An artifact without that context is a file, not a release record.",
      "Decide which artifact types the lane produces, such as a container image, a static bundle, or a signed mobile package. Write the definition for each type in the delivery agreement. Do not assume that a source tag is enough, because a tag can point at a commit that no longer builds. The artifact should be the thing the team deploys.",
      "## Tie each artifact to a commit and a pipeline run",
      "Record the commit hash, the pipeline run, the artifact digest, and the deploy time for every release. Store the digest rather than a mutable tag so two builds cannot be confused. Link the record to the ticket that approved the release. The reviewer should be able to answer what is running in production from one page.",
      "Require the pipeline to publish the artifact and the record together, so a missing record blocks the release. Do not allow a manual upload that skips the pipeline unless an incident ticket explains why. Record the exception with an owner and an expiry. The exception should be visible in the next release review.",
      "## Set the retention period and the storage owner",
      "Choose a retention period that covers the client audit window and the longest rollback the team would attempt. Keep at least the last several releases and every release that is still deployed. Name the person who owns the storage account and the person who can delete an artifact. Delete permission should be narrower than publish permission.",
      "Record where each artifact lives, its size, and its cost when that matters. Move old artifacts to cheaper storage rather than deleting them on a hunch. Set a review date before the first deletion. A retention rule that nobody reviews becomes either a hoard or a gap.",
      "## Protect the artifact index from silent edits",
      "Keep the artifact index in a repository or a system with an audit log, not in a shared spreadsheet. Require a change record for any edit to a digest, a path, or a retention date. Review the log for edits made outside the pipeline. A silent edit to an index can point a release at the wrong build.",
      "Restrict write access to the pipeline identity and to one named human backup. Rotate the pipeline credentials on the same schedule as other machine secrets. Alert on a manual upload or a digest mismatch. The index should show who changed what and when.",
      "## Test a rebuild from a retained artifact",
      "Pick one past release each quarter and redeploy it into an isolated environment from the retained artifact. Confirm that it starts, serves the expected version, and passes the smoke checks. Record the time it took and any step that needed tribal knowledge. A rebuild that fails is a finding about the record, not about the old code.",
      "Also test one rebuild from source using the recorded commit and lockfile. Compare the new digest with the retained digest where the build is reproducible. Investigate a difference before assuming it is harmless. Report both results to the client technical owner.",
      "## Retire artifacts with evidence",
      "Delete an artifact only when the retention date has passed and the release is no longer deployed anywhere. Check the deployment inventory before deleting, including disaster recovery and demo environments. Record the deletion date, the operator, and the ticket. An artifact that disappears while still in use turns a routine cleanup into an outage.",
      "Keep a small metadata record after the artifact is gone, with the commit, the digest, and the reason for deletion. The metadata is cheaper than the artifact and answers most audit questions. Review the retirement list once a quarter for mistakes. A clean retirement process makes the retention period trustworthy."
    ]
  },
  {
    "slug": "set-a-mobile-signing-key-custody-note-for-outsourced-app-builds",
    "title": "Set a mobile signing key custody note for outsourced app builds",
    "excerpt": "A custody note that keeps signing keys with the client, records every build that uses one, and stages a rotation before a key is lost or leaked.",
    "minutes": 8,
    "published": "2026-11-18",
    "body": [
      "## List the keys and what each one signs",
      "A signing key custody note starts with every key that authenticates a build or an update. Include the Android upload key, the app signing key held by the store, the iOS distribution certificate, and any enterprise or internal distribution key. Record the platform, the account, and the artifact each key signs. Do not assume that one key covers one app.",
      "Note which keys are managed by the client and which, if any, were created by the contractor. Mark any key that exists only in a personal account or a local keystore file. Those are the keys that disappear when a laptop is replaced. The list should be short enough to review each quarter.",
      "## Keep the keystore with the client",
      "Store the keystore, the certificate, and the password in the client secret manager or a hardware token. Give the offshore team a build identity that can use the key without exporting it. Do not send a keystore file through chat or attach it to a ticket. A key that travels as an attachment is already exposed.",
      "Separate the permission to build from the permission to change the key. The build identity should sign and publish to the internal track, while the client owner approves a production release. Record who holds the recovery material and where the second copy lives. A single copy in one person's possession is a continuity risk.",
      "## Record every build that uses a key",
      "Log the key identifier, the app version, the commit, the build number, and the operator for every signed artifact. Store the log where the client can read it without asking the contractor. Link the record to the release ticket and the store submission. The log should answer which build used which key without opening the store console.",
      "Compare the build log with the store submissions each month. Investigate a submission that has no matching build record. Record the investigation and its outcome. A gap in the log is a finding even when the build looks correct.",
      "## Rotate a key with a staged release",
      "Plan a rotation as a release with its own ticket and rollback note. Confirm that the store accepts the new key and that the old key still verifies existing installs. Test the update path on an internal track before the production rollout. A rotation that skips the update path can strand users on a version that cannot upgrade.",
      "Record the rotation date, the new key fingerprint, and the person who approved it. Keep the old key available for verification until the store and the install base have moved. Do not delete the old key on the same day as the rotation. The retention period should be written before the rotation starts.",
      "## Respond to a lost or leaked key",
      "Treat a lost laptop, a shared keystore, or a public repository leak as a key compromise until proven otherwise. Revoke the build identity, rotate the key, and notify the store and the client contact. Preserve the logs before changing the pipeline. The first hour is about containment, not about explaining how it happened.",
      "Record the timeline, the affected versions, and the recovery steps in one incident note. Decide with the client whether existing installs need a forced update. Add a control that would have caught the exposure earlier. Review the incident with the security owner before closing it.",
      "## Review custody on a fixed cadence",
      "Review the key inventory every quarter against the apps that are actually published. Remove keys for retired apps and record why. Confirm that the client still controls the accounts and the recovery material. Check that the build identity still has only the permissions it needs.",
      "Test one recovery path each year by signing an internal build with the backup material. Record the result and the time it took. Update the custody note with any change in personnel or platform. A custody note that is never tested describes an intention, not a control."
    ]
  },
  {
    "slug": "plan-a-load-test-window-that-stays-away-from-production-customers",
    "title": "Plan a load test window that stays away from production customers",
    "excerpt": "A planning routine for load tests that uses synthetic identities, a separate environment, and a named stop owner before any traffic reaches production.",
    "minutes": 8,
    "published": "2026-11-18",
    "body": [
      "## Define the question the load test answers",
      "A load test should answer a specific question, such as whether checkout holds at twice the current peak or whether a new endpoint stays inside its latency target. Write the question and the threshold before the test starts. Do not run a generic stress test and interpret the graph afterward. A test without a question produces a number without a decision.",
      "Name the user journey, the endpoints, and the data each step needs. Separate a capacity test from a soak test and from a failure test. Each one needs a different duration and a different stop condition. Record the choice and the reason in the test ticket.",
      "## Size the environment before the window",
      "Size the test environment so that the result says something about production. Match the application version, the database size, and the network path closely enough for the question. Record every difference from production in the test note. A small environment with a large claim is misleading.",
      "Check the quotas on the load generator, the database, and any third-party API before the window. Request an increase early if the test needs one. Confirm that the test cannot exhaust a shared production quota. The environment should fail inside the test, not in a customer account.",
      "## Book the window and name a stop owner",
      "Book the window with the client, the on-call engineer, and any vendor whose service the test touches. Publish the start time, the duration, and the expected load. Name one person who can stop the test without asking for permission. A stop that needs a meeting is not a stop.",
      "Agree on the signals that trigger a stop, such as error rate, database latency, or a support queue spike. Write the thresholds and the person who watches each one. Keep a shared channel open for the whole window. Record the time of every stop decision.",
      "## Use synthetic identities and masked data",
      "Generate test accounts and records rather than copying production customers. Keep the generation script under version control and record the seed. Check the dataset for real email addresses, phone numbers, and payment values before the run. A load test that uses live data is a data incident with a graph.",
      "Make sure the test cannot send real email, charge a card, or ship a parcel. Disable outbound integrations or point them at a sandbox. Confirm the isolation with a test order before the load starts. Record the check and the person who ran it.",
      "## Watch shared dependencies during the run",
      "Monitor the database, the cache, the queue, and any external API alongside the application. A latency problem may sit in a dependency that the test does not own. Record the dependency versions and the quotas in effect. Keep the dashboards in one view for the stop owner.",
      "Watch for retries that multiply load and for queues that grow after the test ends. Let the system drain before declaring success. Capture the logs and the metrics for the test window. A clean chart during the run can hide a backlog after it.",
      "## Publish results without overstating them",
      "Report the question, the environment, the load profile, the result, and the differences from production. State what the test did not cover and which dependencies were mocked. Give the raw data to the client technical owner. A summary without the method invites a wrong decision.",
      "Turn each result into a decision, such as a capacity change, a code fix, or a follow-up test. Record the owner and the date. Do not publish a headline number without the conditions that produced it. The next team should be able to repeat the test from the record."
    ]
  },
  {
    "slug": "set-a-read-replica-access-rule-for-offshore-reporting-work",
    "title": "Set a read replica access rule for offshore reporting work",
    "excerpt": "A rule that gives offshore reporting work access to a read replica, bounds the query cost, and closes the grant when the reporting ticket ends.",
    "minutes": 8,
    "published": "2026-11-18",
    "body": [
      "## Name the reporting questions the replica serves",
      "A read replica exists to move reporting and analytical queries away from the primary database. Write the questions the replica must answer and the freshness the answers need. A dashboard that tolerates an hour of lag is a different request from a support screen that needs the last second. Record the tolerance next to each question.",
      "List the tables and the columns each question needs, and mark any personal data. Do not grant a whole schema because one report needs three columns. A narrow grant is easier to review and easier to close. The list becomes the scope of the access ticket.",
      "## Grant access to the replica, not the primary",
      "Create a separate database account that can connect only to the replica endpoint. Confirm the account cannot write, cannot change settings, and cannot reach the primary. Record the host, the port, the database, and the role in the ticket. Test the grant from the same network the offshore team uses.",
      "Do not share the application database account or a personal account with the contractor. Use a named account per person or per reporting service. Record the owner of the account and the ticket it serves. A shared account hides who ran a query and makes revocation impossible.",
      "## Bound the data and the query cost",
      "Set a statement timeout and a row limit for the reporting role, and require a date range on large tables. Check the query plan for a sequential scan over the largest table before approving a new report. Record the expected run time and the schedule. A report that runs every minute can starve the replica for everyone else.",
      "Exclude sensitive columns unless the question requires them, and mask values where a partial view is enough. Record the masking rule and the person who approved it. Review the rule when the report changes. The grant should be as narrow as the current question, not the next one.",
      "## Log each query and its owner",
      "Enable query logging on the replica with enough detail to identify the account, the statement, and the time. Keep the log in the client logging system with a retention rule. Review a sample each week for queries outside the approved tables. A log that nobody reads is storage, not oversight.",
      "Alert on a query that scans a sensitive table or runs longer than the agreed limit. Send the alert to the reporting owner and the delivery lead. Record the response and any change to the grant. The alert should lead to a conversation, not an automatic block that nobody understands.",
      "## Review grants on a fixed cadence",
      "Review every replica grant each month against the open reporting tickets. Confirm that the account is still needed and the query scope still matches. Remove accounts that belong to a finished project. Record the review date and the reviewer.",
      "Compare the grant list with the identity provider so a departed contractor cannot keep a database login. Check for accounts created outside the ticket process. Record any exception with an owner and an expiry. The review should be short enough to finish in one sitting.",
      "## Close a grant when the ticket ends",
      "Close the grant on the same day the reporting ticket closes, and record the revocation time. Confirm that the login fails before marking the ticket done. Check for scheduled jobs that still use the account. A job that breaks is easier to fix than a login that stays open for months.",
      "Keep the query log for the retention period after the grant closes. Note the final review and any data that was exported. Remove the account from the identity provider as well as the database. A closed grant with a live identity is not closed."
    ]
  }
];

export const november18BlogDetails = {
  "set-a-tls-certificate-expiry-watch-for-an-outsourced-maintenance-lane": {
    "takeaways": [
      "List every served certificate before choosing an alert date.",
      "Give each certificate a named owner and a backup.",
      "Test the alert and the renewal path on staging first.",
      "Record the fingerprint and the go-live time of every renewal.",
      "Rehearse one renewal each quarter and fix the slow step."
    ],
    "readinessRows": [
      {
        "area": "Inventory",
        "ready": "Every served endpoint and its expiry date is listed.",
        "notReady": "The list comes from memory or an old spreadsheet."
      },
      {
        "area": "Owner",
        "ready": "A named owner and backup can renew each certificate.",
        "notReady": "The renewal depends on one contractor login."
      },
      {
        "area": "Alerting",
        "ready": "Alerts fire at thirty, fourteen, and three days.",
        "notReady": "The authority reminder email is the only warning."
      },
      {
        "area": "Rehearsal",
        "ready": "One renewal is walked end to end each quarter.",
        "notReady": "The path is assumed to work until it fails."
      }
    ],
    "sections": [
      {
        "id": "inventory-every-certificate-the-lane-owns",
        "title": "Inventory every certificate the lane owns",
        "paragraphs": [
          "A certificate watch starts with a list of every domain, subdomain, and service endpoint that terminates TLS for the client. Include the marketing site, the application, the API, the mail gateway, and any internal endpoint the offshore team can reach. Do not trust a single spreadsheet that someone built a year ago. Walk the DNS zone and the load balancer configuration to find the certificates that are actually served.",
          "Record the issuer, the subject, the expiry date, and the automation that renews each certificate. Mark the certificates that are renewed by hand because those are the ones that fail during a holiday. Note the environment where each certificate is installed. A staging certificate that expires is a smaller risk than a production one, but it still blocks a release."
        ]
      },
      {
        "id": "record-the-owner-and-the-renewal-path",
        "title": "Record the owner and the renewal path",
        "paragraphs": [
          "Give every certificate a named owner who can renew it and a backup who can act when the owner is unavailable. Record the account that controls the DNS record and the account that controls the certificate authority. Keep those two accounts in the client's identity system rather than a contractor's personal login. A certificate with no owner is a date waiting to become an incident.",
          "Write the renewal path as ordered steps with the person who performs each one. Include the validation method, the DNS change, the deploy step, and the check that the new certificate is served. Note where the private key is stored and who can read it. The path should be short enough to rehearse in one sitting."
        ]
      },
      {
        "id": "set-alert-windows-before-expiry",
        "title": "Set alert windows before expiry",
        "paragraphs": [
          "Set alerts at thirty days, fourteen days, and three days before expiry, and send them to the owner and the delivery lead. Use the monitoring system that already pages the team rather than a separate calendar reminder. Test the alert by setting a temporary threshold on a staging certificate. An alert that nobody has seen fire is a guess.",
          "Escalate automatically when a certificate crosses the three-day mark without a renewal ticket. Name the person who receives the escalation and the action they take. Do not rely on the certificate authority reminder email, because it may go to an address that no longer exists. The watch should fail loudly before a customer sees an error."
        ]
      },
      {
        "id": "stage-the-renewal-and-test-the-chain",
        "title": "Stage the renewal and test the chain",
        "paragraphs": [
          "Renew on staging first and confirm that the full chain is served, including the intermediate certificates. Check the protocol versions and the cipher suites that the client requires. Run the same client that real users run rather than a browser on the engineer laptop. A chain that works in one client can fail in another.",
          "Record the fingerprint of the new certificate and the time it went live. Keep the previous certificate until the new one has served traffic for a full day. Note the rollback step in the ticket in case a client rejects the new chain. The renewal is complete only when the served certificate matches the record."
        ]
      },
      {
        "id": "handle-a-missed-renewal-without-panic",
        "title": "Handle a missed renewal without panic",
        "paragraphs": [
          "When a certificate expires, the first step is to confirm whether the renewal can complete automatically. Check the DNS challenge, the authority account, and the deploy pipeline in that order. Tell the client contact what is affected and what is not, without guessing at a fix time. A short, accurate note is better than a silent scramble.",
          "Renew, deploy, and verify the chain as in a normal renewal, then record the timeline from detection to recovery. Identify the step that failed and the alert that should have caught it earlier. Add a check or a backup owner rather than a promise to be more careful. Review the incident in the next weekly delivery call."
        ]
      },
      {
        "id": "review-the-watch-after-every-change",
        "title": "Review the watch after every change",
        "paragraphs": [
          "Add a certificate check to the change process for any new domain, load balancer, or service endpoint. Review the list when a vendor changes, when a domain moves, or when the team hands a lane to a new engineer. Remove certificates that are no longer served and record why. A list that only grows becomes noise.",
          "Sample one certificate each quarter and walk its renewal path end to end. Confirm that the owner, the DNS account, and the authority account are still correct. Record the date of the test and the person who ran it. The watch is only as good as the last rehearsal."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Certificate list",
        "text": "Record the host, issuer, expiry, environment, and renewal method for every served certificate."
      },
      {
        "label": "Owner pair",
        "text": "Name the primary owner and a backup who can reach the DNS and authority accounts."
      },
      {
        "label": "Alert ladder",
        "text": "Notify at thirty, fourteen, and three days, and escalate when no ticket exists."
      },
      {
        "label": "Renewal record",
        "text": "Store the fingerprint, the go-live time, and the rollback step with the ticket."
      }
    ],
    "faqs": [
      {
        "question": "What if the certificate authority reminder goes to an old address?",
        "answer": "Treat the reminder as a backup only and alert from the monitoring system the team already pages on."
      },
      {
        "question": "Should the contractor hold the authority account?",
        "answer": "No, keep the DNS and authority accounts in the client identity system with a named backup."
      },
      {
        "question": "How do we know a renewal worked?",
        "answer": "The served certificate fingerprint and chain match the record, checked from a real client."
      }
    ],
    "sources": [
      {
        "name": "Let's Encrypt documentation",
        "url": "https://letsencrypt.org/docs/",
        "note": "Certificate lifecycle and automation practice."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Configuration and contingency planning expectations."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Ownership and secure operations guidance."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Alerting and operational readiness practice."
      }
    ],
    "heroImage": "/nov18/blog/set-a-tls-certificate-expiry-watch-for-an-outsourced-maintenance-lane.webp"
  },
  "write-a-build-artifact-retention-rule-for-offshore-release-trains": {
    "takeaways": [
      "Define what a rebuildable artifact must contain for each release type.",
      "Pair every artifact with a commit, a pipeline run, and a digest.",
      "Name the storage owner and keep delete rights narrower than publish rights.",
      "Test one redeploy from a retained artifact each quarter.",
      "Retire artifacts only with deployment and deletion evidence."
    ],
    "readinessRows": [
      {
        "area": "Definition",
        "ready": "Each artifact type and its required contents are written down.",
        "notReady": "A source tag is treated as the release record."
      },
      {
        "area": "Traceability",
        "ready": "Commit, pipeline run, and digest are stored with the release.",
        "notReady": "The artifact is a mutable tag with no owner."
      },
      {
        "area": "Retention",
        "ready": "The period, the storage owner, and the delete rule are agreed.",
        "notReady": "Old files are deleted when storage looks full."
      },
      {
        "area": "Restore",
        "ready": "One retained artifact is redeployed and checked each quarter.",
        "notReady": "Nobody has tried a rebuild since launch."
      }
    ],
    "sections": [
      {
        "id": "define-what-a-rebuildable-artifact-must-contain",
        "title": "Define what a rebuildable artifact must contain",
        "paragraphs": [
          "A rebuildable artifact is a packaged output that can be deployed without re-running an uncertain local build. It should contain the compiled code, the locked dependency list, the build configuration, and the commit identifier that produced it. Record the toolchain version and the environment variables that affect the output. An artifact without that context is a file, not a release record.",
          "Decide which artifact types the lane produces, such as a container image, a static bundle, or a signed mobile package. Write the definition for each type in the delivery agreement. Do not assume that a source tag is enough, because a tag can point at a commit that no longer builds. The artifact should be the thing the team deploys."
        ]
      },
      {
        "id": "tie-each-artifact-to-a-commit-and-a-pipeline-run",
        "title": "Tie each artifact to a commit and a pipeline run",
        "paragraphs": [
          "Record the commit hash, the pipeline run, the artifact digest, and the deploy time for every release. Store the digest rather than a mutable tag so two builds cannot be confused. Link the record to the ticket that approved the release. The reviewer should be able to answer what is running in production from one page.",
          "Require the pipeline to publish the artifact and the record together, so a missing record blocks the release. Do not allow a manual upload that skips the pipeline unless an incident ticket explains why. Record the exception with an owner and an expiry. The exception should be visible in the next release review."
        ]
      },
      {
        "id": "set-the-retention-period-and-the-storage-owner",
        "title": "Set the retention period and the storage owner",
        "paragraphs": [
          "Choose a retention period that covers the client audit window and the longest rollback the team would attempt. Keep at least the last several releases and every release that is still deployed. Name the person who owns the storage account and the person who can delete an artifact. Delete permission should be narrower than publish permission.",
          "Record where each artifact lives, its size, and its cost when that matters. Move old artifacts to cheaper storage rather than deleting them on a hunch. Set a review date before the first deletion. A retention rule that nobody reviews becomes either a hoard or a gap."
        ]
      },
      {
        "id": "protect-the-artifact-index-from-silent-edits",
        "title": "Protect the artifact index from silent edits",
        "paragraphs": [
          "Keep the artifact index in a repository or a system with an audit log, not in a shared spreadsheet. Require a change record for any edit to a digest, a path, or a retention date. Review the log for edits made outside the pipeline. A silent edit to an index can point a release at the wrong build.",
          "Restrict write access to the pipeline identity and to one named human backup. Rotate the pipeline credentials on the same schedule as other machine secrets. Alert on a manual upload or a digest mismatch. The index should show who changed what and when."
        ]
      },
      {
        "id": "test-a-rebuild-from-a-retained-artifact",
        "title": "Test a rebuild from a retained artifact",
        "paragraphs": [
          "Pick one past release each quarter and redeploy it into an isolated environment from the retained artifact. Confirm that it starts, serves the expected version, and passes the smoke checks. Record the time it took and any step that needed tribal knowledge. A rebuild that fails is a finding about the record, not about the old code.",
          "Also test one rebuild from source using the recorded commit and lockfile. Compare the new digest with the retained digest where the build is reproducible. Investigate a difference before assuming it is harmless. Report both results to the client technical owner."
        ]
      },
      {
        "id": "retire-artifacts-with-evidence",
        "title": "Retire artifacts with evidence",
        "paragraphs": [
          "Delete an artifact only when the retention date has passed and the release is no longer deployed anywhere. Check the deployment inventory before deleting, including disaster recovery and demo environments. Record the deletion date, the operator, and the ticket. An artifact that disappears while still in use turns a routine cleanup into an outage.",
          "Keep a small metadata record after the artifact is gone, with the commit, the digest, and the reason for deletion. The metadata is cheaper than the artifact and answers most audit questions. Review the retirement list once a quarter for mistakes. A clean retirement process makes the retention period trustworthy."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Artifact record",
        "text": "Store the commit, pipeline run, digest, deploy time, and ticket for every release."
      },
      {
        "label": "Storage owner",
        "text": "Name the account owner and restrict deletion to one role with an audit log."
      },
      {
        "label": "Retention window",
        "text": "Keep every deployed release plus the last several versions for rollback."
      },
      {
        "label": "Restore test",
        "text": "Redeploy one past release into an isolated environment and record the result."
      }
    ],
    "faqs": [
      {
        "question": "Is a Git tag enough for a release record?",
        "answer": "No, a tag can point at code that no longer builds, so pair it with a retained artifact and digest."
      },
      {
        "question": "How long should artifacts be kept?",
        "answer": "At least the client audit window and every release still deployed, with a review before first deletion."
      },
      {
        "question": "What if the retained artifact will not start?",
        "answer": "Record it as a finding about the release record and test a rebuild from the recorded commit."
      }
    ],
    "sources": [
      {
        "name": "SLSA specification",
        "url": "https://slsa.dev/spec/v1.0/",
        "note": "Build provenance and artifact integrity levels."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Release and provenance evidence practice."
      },
      {
        "name": "GitHub Actions artifact storage",
        "url": "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts",
        "note": "Artifact retention and pipeline storage behavior."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Release engineering and rollback practice."
      }
    ],
    "heroImage": "/nov18/blog/write-a-build-artifact-retention-rule-for-offshore-release-trains.webp"
  },
  "set-a-mobile-signing-key-custody-note-for-outsourced-app-builds": {
    "takeaways": [
      "List every signing key and the artifact it authenticates.",
      "Keep the keystore in the client secret store, not a contractor laptop.",
      "Log the key, version, commit, and operator for every signed build.",
      "Rotate a key through an internal track before production.",
      "Rehearse the recovery path once a year and update the note."
    ],
    "readinessRows": [
      {
        "area": "Inventory",
        "ready": "Every key, account, and signed artifact is listed.",
        "notReady": "Keys are known only by the engineer who created them."
      },
      {
        "area": "Custody",
        "ready": "The client controls the keystore and the recovery copy.",
        "notReady": "A keystore file sits in a personal folder."
      },
      {
        "area": "Build log",
        "ready": "Each signed build names the key, version, and operator.",
        "notReady": "Store submissions have no matching build record."
      },
      {
        "area": "Rotation",
        "ready": "The rotation path is tested on an internal track.",
        "notReady": "No key has been rotated since launch."
      }
    ],
    "sections": [
      {
        "id": "list-the-keys-and-what-each-one-signs",
        "title": "List the keys and what each one signs",
        "paragraphs": [
          "A signing key custody note starts with every key that authenticates a build or an update. Include the Android upload key, the app signing key held by the store, the iOS distribution certificate, and any enterprise or internal distribution key. Record the platform, the account, and the artifact each key signs. Do not assume that one key covers one app.",
          "Note which keys are managed by the client and which, if any, were created by the contractor. Mark any key that exists only in a personal account or a local keystore file. Those are the keys that disappear when a laptop is replaced. The list should be short enough to review each quarter."
        ]
      },
      {
        "id": "keep-the-keystore-with-the-client",
        "title": "Keep the keystore with the client",
        "paragraphs": [
          "Store the keystore, the certificate, and the password in the client secret manager or a hardware token. Give the offshore team a build identity that can use the key without exporting it. Do not send a keystore file through chat or attach it to a ticket. A key that travels as an attachment is already exposed.",
          "Separate the permission to build from the permission to change the key. The build identity should sign and publish to the internal track, while the client owner approves a production release. Record who holds the recovery material and where the second copy lives. A single copy in one person's possession is a continuity risk."
        ]
      },
      {
        "id": "record-every-build-that-uses-a-key",
        "title": "Record every build that uses a key",
        "paragraphs": [
          "Log the key identifier, the app version, the commit, the build number, and the operator for every signed artifact. Store the log where the client can read it without asking the contractor. Link the record to the release ticket and the store submission. The log should answer which build used which key without opening the store console.",
          "Compare the build log with the store submissions each month. Investigate a submission that has no matching build record. Record the investigation and its outcome. A gap in the log is a finding even when the build looks correct."
        ]
      },
      {
        "id": "rotate-a-key-with-a-staged-release",
        "title": "Rotate a key with a staged release",
        "paragraphs": [
          "Plan a rotation as a release with its own ticket and rollback note. Confirm that the store accepts the new key and that the old key still verifies existing installs. Test the update path on an internal track before the production rollout. A rotation that skips the update path can strand users on a version that cannot upgrade.",
          "Record the rotation date, the new key fingerprint, and the person who approved it. Keep the old key available for verification until the store and the install base have moved. Do not delete the old key on the same day as the rotation. The retention period should be written before the rotation starts."
        ]
      },
      {
        "id": "respond-to-a-lost-or-leaked-key",
        "title": "Respond to a lost or leaked key",
        "paragraphs": [
          "Treat a lost laptop, a shared keystore, or a public repository leak as a key compromise until proven otherwise. Revoke the build identity, rotate the key, and notify the store and the client contact. Preserve the logs before changing the pipeline. The first hour is about containment, not about explaining how it happened.",
          "Record the timeline, the affected versions, and the recovery steps in one incident note. Decide with the client whether existing installs need a forced update. Add a control that would have caught the exposure earlier. Review the incident with the security owner before closing it."
        ]
      },
      {
        "id": "review-custody-on-a-fixed-cadence",
        "title": "Review custody on a fixed cadence",
        "paragraphs": [
          "Review the key inventory every quarter against the apps that are actually published. Remove keys for retired apps and record why. Confirm that the client still controls the accounts and the recovery material. Check that the build identity still has only the permissions it needs.",
          "Test one recovery path each year by signing an internal build with the backup material. Record the result and the time it took. Update the custody note with any change in personnel or platform. A custody note that is never tested describes an intention, not a control."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Key inventory",
        "text": "Record the platform, account, key identifier, and the artifact each key signs."
      },
      {
        "label": "Client custody",
        "text": "Keep the keystore and recovery copy in the client secret store or hardware token."
      },
      {
        "label": "Build evidence",
        "text": "Log the key, app version, commit, build number, and operator for every signed artifact."
      },
      {
        "label": "Rotation plan",
        "text": "Stage the new key on an internal track and keep the old key for verification."
      }
    ],
    "faqs": [
      {
        "question": "Can the offshore team keep a copy of the keystore?",
        "answer": "No, give the build pipeline a signing identity that uses the key without exporting it."
      },
      {
        "question": "How often should a key be rotated?",
        "answer": "Set a fixed cadence and rotate immediately after any suspected exposure."
      },
      {
        "question": "What if a signing key is lost?",
        "answer": "Treat it as a compromise, revoke the build identity, and follow the store recovery process."
      }
    ],
    "sources": [
      {
        "name": "OWASP Mobile Application Security",
        "url": "https://mas.owasp.org/MASVS/",
        "note": "Mobile key and build security controls."
      },
      {
        "name": "Android application signing",
        "url": "https://source.android.com/docs/security/features/apksigning",
        "note": "Signing key roles and rotation behavior."
      },
      {
        "name": "NIST SP 800-57 Part 1",
        "url": "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final",
        "note": "Key management lifecycle guidance."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Secret ownership and accountability."
      }
    ],
    "heroImage": "/nov18/blog/set-a-mobile-signing-key-custody-note-for-outsourced-app-builds.webp"
  },
  "plan-a-load-test-window-that-stays-away-from-production-customers": {
    "takeaways": [
      "Write the question and threshold before the test starts.",
      "Size a separate environment and record every difference from production.",
      "Book the window with a named stop owner and agreed stop signals.",
      "Use synthetic identities and sandboxed integrations, never live records.",
      "Report the method and the limits with every result."
    ],
    "readinessRows": [
      {
        "area": "Question",
        "ready": "The test names a threshold and the decision it informs.",
        "notReady": "The team runs a generic stress test and reads the graph later."
      },
      {
        "area": "Environment",
        "ready": "The target is separate and its differences are recorded.",
        "notReady": "The test points at the production cluster to save time."
      },
      {
        "area": "Stop control",
        "ready": "One named person can stop the run without approval.",
        "notReady": "Stopping requires a meeting or a vendor ticket."
      },
      {
        "area": "Data",
        "ready": "Synthetic records and sandbox integrations are verified.",
        "notReady": "The run copies live customer records."
      }
    ],
    "sections": [
      {
        "id": "define-the-question-the-load-test-answers",
        "title": "Define the question the load test answers",
        "paragraphs": [
          "A load test should answer a specific question, such as whether checkout holds at twice the current peak or whether a new endpoint stays inside its latency target. Write the question and the threshold before the test starts. Do not run a generic stress test and interpret the graph afterward. A test without a question produces a number without a decision.",
          "Name the user journey, the endpoints, and the data each step needs. Separate a capacity test from a soak test and from a failure test. Each one needs a different duration and a different stop condition. Record the choice and the reason in the test ticket."
        ]
      },
      {
        "id": "size-the-environment-before-the-window",
        "title": "Size the environment before the window",
        "paragraphs": [
          "Size the test environment so that the result says something about production. Match the application version, the database size, and the network path closely enough for the question. Record every difference from production in the test note. A small environment with a large claim is misleading.",
          "Check the quotas on the load generator, the database, and any third-party API before the window. Request an increase early if the test needs one. Confirm that the test cannot exhaust a shared production quota. The environment should fail inside the test, not in a customer account."
        ]
      },
      {
        "id": "book-the-window-and-name-a-stop-owner",
        "title": "Book the window and name a stop owner",
        "paragraphs": [
          "Book the window with the client, the on-call engineer, and any vendor whose service the test touches. Publish the start time, the duration, and the expected load. Name one person who can stop the test without asking for permission. A stop that needs a meeting is not a stop.",
          "Agree on the signals that trigger a stop, such as error rate, database latency, or a support queue spike. Write the thresholds and the person who watches each one. Keep a shared channel open for the whole window. Record the time of every stop decision."
        ]
      },
      {
        "id": "use-synthetic-identities-and-masked-data",
        "title": "Use synthetic identities and masked data",
        "paragraphs": [
          "Generate test accounts and records rather than copying production customers. Keep the generation script under version control and record the seed. Check the dataset for real email addresses, phone numbers, and payment values before the run. A load test that uses live data is a data incident with a graph.",
          "Make sure the test cannot send real email, charge a card, or ship a parcel. Disable outbound integrations or point them at a sandbox. Confirm the isolation with a test order before the load starts. Record the check and the person who ran it."
        ]
      },
      {
        "id": "watch-shared-dependencies-during-the-run",
        "title": "Watch shared dependencies during the run",
        "paragraphs": [
          "Monitor the database, the cache, the queue, and any external API alongside the application. A latency problem may sit in a dependency that the test does not own. Record the dependency versions and the quotas in effect. Keep the dashboards in one view for the stop owner.",
          "Watch for retries that multiply load and for queues that grow after the test ends. Let the system drain before declaring success. Capture the logs and the metrics for the test window. A clean chart during the run can hide a backlog after it."
        ]
      },
      {
        "id": "publish-results-without-overstating-them",
        "title": "Publish results without overstating them",
        "paragraphs": [
          "Report the question, the environment, the load profile, the result, and the differences from production. State what the test did not cover and which dependencies were mocked. Give the raw data to the client technical owner. A summary without the method invites a wrong decision.",
          "Turn each result into a decision, such as a capacity change, a code fix, or a follow-up test. Record the owner and the date. Do not publish a headline number without the conditions that produced it. The next team should be able to repeat the test from the record."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Test question",
        "text": "State the journey, the load profile, the threshold, and the decision the result will inform."
      },
      {
        "label": "Environment note",
        "text": "Record the version, data size, network path, and every difference from production."
      },
      {
        "label": "Stop plan",
        "text": "Name the stop owner, the signals, the thresholds, and the shared channel."
      },
      {
        "label": "Data check",
        "text": "Confirm synthetic records, masked values, and disabled outbound integrations."
      }
    ],
    "faqs": [
      {
        "question": "Can a load test run against production if the load is small?",
        "answer": "Only with explicit client approval, a stop plan, and synthetic accounts, and the test note should say so."
      },
      {
        "question": "Who decides to stop the test?",
        "answer": "One named stop owner with the authority to halt without asking for permission."
      },
      {
        "question": "What belongs in the report?",
        "answer": "The question, environment, load profile, result, limits, and the decision that follows."
      }
    ],
    "sources": [
      {
        "name": "Grafana k6 documentation",
        "url": "https://grafana.com/docs/k6/latest/",
        "note": "Load test design and threshold practice."
      },
      {
        "name": "OWASP ASVS",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Sensitive data handling and environment checks."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Capacity and contingency planning expectations."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Capacity planning and incident response practice."
      }
    ],
    "heroImage": "/nov18/blog/plan-a-load-test-window-that-stays-away-from-production-customers.webp"
  },
  "set-a-read-replica-access-rule-for-offshore-reporting-work": {
    "takeaways": [
      "Write the reporting question, the freshness need, and the exact columns.",
      "Grant a named account on the replica endpoint only.",
      "Set a timeout, a row limit, and a masking rule for sensitive values.",
      "Log queries and review a sample against the approved scope.",
      "Revoke the grant on the day the ticket closes and confirm the login fails."
    ],
    "readinessRows": [
      {
        "area": "Scope",
        "ready": "The question, freshness, tables, and columns are written.",
        "notReady": "The account can read the whole schema."
      },
      {
        "area": "Target",
        "ready": "The account reaches only the replica endpoint.",
        "notReady": "The application account is shared with the reporter."
      },
      {
        "area": "Cost",
        "ready": "A timeout, a row limit, and a schedule are enforced.",
        "notReady": "Ad hoc queries run unbounded on the replica."
      },
      {
        "area": "Closure",
        "ready": "The grant closes with the ticket and the login is tested.",
        "notReady": "Old reporting accounts stay open for months."
      }
    ],
    "sections": [
      {
        "id": "name-the-reporting-questions-the-replica-serves",
        "title": "Name the reporting questions the replica serves",
        "paragraphs": [
          "A read replica exists to move reporting and analytical queries away from the primary database. Write the questions the replica must answer and the freshness the answers need. A dashboard that tolerates an hour of lag is a different request from a support screen that needs the last second. Record the tolerance next to each question.",
          "List the tables and the columns each question needs, and mark any personal data. Do not grant a whole schema because one report needs three columns. A narrow grant is easier to review and easier to close. The list becomes the scope of the access ticket."
        ]
      },
      {
        "id": "grant-access-to-the-replica-not-the-primary",
        "title": "Grant access to the replica, not the primary",
        "paragraphs": [
          "Create a separate database account that can connect only to the replica endpoint. Confirm the account cannot write, cannot change settings, and cannot reach the primary. Record the host, the port, the database, and the role in the ticket. Test the grant from the same network the offshore team uses.",
          "Do not share the application database account or a personal account with the contractor. Use a named account per person or per reporting service. Record the owner of the account and the ticket it serves. A shared account hides who ran a query and makes revocation impossible."
        ]
      },
      {
        "id": "bound-the-data-and-the-query-cost",
        "title": "Bound the data and the query cost",
        "paragraphs": [
          "Set a statement timeout and a row limit for the reporting role, and require a date range on large tables. Check the query plan for a sequential scan over the largest table before approving a new report. Record the expected run time and the schedule. A report that runs every minute can starve the replica for everyone else.",
          "Exclude sensitive columns unless the question requires them, and mask values where a partial view is enough. Record the masking rule and the person who approved it. Review the rule when the report changes. The grant should be as narrow as the current question, not the next one."
        ]
      },
      {
        "id": "log-each-query-and-its-owner",
        "title": "Log each query and its owner",
        "paragraphs": [
          "Enable query logging on the replica with enough detail to identify the account, the statement, and the time. Keep the log in the client logging system with a retention rule. Review a sample each week for queries outside the approved tables. A log that nobody reads is storage, not oversight.",
          "Alert on a query that scans a sensitive table or runs longer than the agreed limit. Send the alert to the reporting owner and the delivery lead. Record the response and any change to the grant. The alert should lead to a conversation, not an automatic block that nobody understands."
        ]
      },
      {
        "id": "review-grants-on-a-fixed-cadence",
        "title": "Review grants on a fixed cadence",
        "paragraphs": [
          "Review every replica grant each month against the open reporting tickets. Confirm that the account is still needed and the query scope still matches. Remove accounts that belong to a finished project. Record the review date and the reviewer.",
          "Compare the grant list with the identity provider so a departed contractor cannot keep a database login. Check for accounts created outside the ticket process. Record any exception with an owner and an expiry. The review should be short enough to finish in one sitting."
        ]
      },
      {
        "id": "close-a-grant-when-the-ticket-ends",
        "title": "Close a grant when the ticket ends",
        "paragraphs": [
          "Close the grant on the same day the reporting ticket closes, and record the revocation time. Confirm that the login fails before marking the ticket done. Check for scheduled jobs that still use the account. A job that breaks is easier to fix than a login that stays open for months.",
          "Keep the query log for the retention period after the grant closes. Note the final review and any data that was exported. Remove the account from the identity provider as well as the database. A closed grant with a live identity is not closed."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Question brief",
        "text": "Record the report question, freshness tolerance, tables, and columns before access is granted."
      },
      {
        "label": "Replica account",
        "text": "Create a named read-only account that cannot reach the primary database."
      },
      {
        "label": "Query limits",
        "text": "Apply a statement timeout, a row limit, and a masking rule for sensitive columns."
      },
      {
        "label": "Close-out",
        "text": "Revoke on ticket close and confirm the login fails before marking the work done."
      }
    ],
    "faqs": [
      {
        "question": "Why not let reporting use the primary database?",
        "answer": "Heavy analytical queries compete with application traffic, so a replica keeps reporting away from customers."
      },
      {
        "question": "How fresh is replica data?",
        "answer": "It depends on replication lag, so record the tolerance and check the lag for time-sensitive questions."
      },
      {
        "question": "Can a contractor reuse one account for several reports?",
        "answer": "Prefer a named account per person or service so the owner and the scope stay visible."
      }
    ],
    "sources": [
      {
        "name": "PostgreSQL hot standby",
        "url": "https://www.postgresql.org/docs/current/hot-standby.html",
        "note": "Read replica behavior and lag considerations."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Least privilege and access review expectations."
      },
      {
        "name": "NIST SP 800-92 log management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final",
        "note": "Query logging and retention practice."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Accountability and secure access design."
      }
    ],
    "heroImage": "/nov18/blog/set-a-read-replica-access-rule-for-offshore-reporting-work.webp"
  }
};
