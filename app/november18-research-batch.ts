import type { ResearchPost } from './fleet-content';

export const november18ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-tls-certificates-expire-inside-an-outsourced-maintenance-lane",
    "title": "How often do TLS certificates expire inside an outsourced maintenance lane?",
    "excerpt": "A protocol for dating each certificate, classifying the ones nearing expiry, and separating an unowned certificate from an unmonitored one.",
    "topic": "TLS certificate expiry",
    "published": "2026-11-18",
    "hero": "/nov18/research/how-often-do-tls-certificates-expire-inside-an-outsourced-maintenance-lane.webp",
    "body": [
      "This protocol measures how often TLS certificates reach expiry inside one outsourced maintenance lane. The unit is one certificate served by one endpoint on the agreed observation date. An expired certificate means the served certificate passed its not-after date before the check. The study describes certificate hygiene, not the quality of the application behind the endpoint.",
      "Define the endpoint list before collection. Include the marketing site, the application, the API, the mail gateway, and every internal endpoint the offshore team can reach. Record the inventory source for each endpoint, such as the DNS zone, the load balancer, or the service mesh. Publish the list with a version so a later reviewer can reproduce the scope.",
      "Define a certificate by its fingerprint and its hostname. Capture the issuer, the subject, the not-before date, the not-after date, and the chain served to a real client. Test the chain rather than reading a dashboard that may show a cached result. Record the client and the network used for the check.",
      "Set the population as every certificate in the agreed list on the observation date, including certificates that are not currently in use. A certificate on a parked domain still belongs if the domain can be reached. Record the certificates that could not be checked and the reason. Report them separately from the certificates that passed.",
      "Classify each certificate by days remaining at the observation date. Use bands such as more than ninety days, thirty to ninety days, seven to thirty days, and less than seven days. Do not merge the bands after seeing the result. The bands make the comparison across months meaningful.",
      "Record whether the renewal is automated and where the automation runs. Note the account that controls the DNS challenge and the account that controls the certificate authority. Record the named owner and the backup. A certificate with no owner is reported separately from one with an owner and no automation.",
      "Report the number of certificates, the number expired, and the number inside each band. Show the counts by environment and by domain group. Present the certificates with no owner and the certificates with no automation as separate rows. Use the same denominator for every rate in the study.",
      "Separate an unowned certificate from an unmonitored one. An unowned certificate has no named renewal owner, while an unmonitored one has an owner but no alert before expiry. Report the two categories separately because the fixes differ. Record the evidence beside each finding.",
      "Inspect the certificates that expire around holidays and release freezes. A cluster may mean the renewal depends on one person or one calendar. Compare the pattern with the team leave record. A single expiry can be a mistake, while a cluster is a planning gap.",
      "Do not treat a long not-after date as proof that the certificate is safe. A certificate issued for a year can still be revoked, misconfigured, or replaced without a record. Check one recent renewal for a matching ticket and a recorded fingerprint. Report what the check showed.",
      "The record cannot show whether a client rejected the certificate or whether a customer saw an error. It can show only whether the served certificate had already expired on the observation date. An expired certificate is not proof of a breach, and a valid one is not proof of a good renewal process. The protocol also cannot see a certificate that is served by a vendor outside the agreed inventory.",
      "A useful additional view is the time each certificate spends inside the thirty-day alert band. A certificate that is renewed promptly shows a short dwell time, while one that waits for a manual step shows a long one. Record the first alert date and the renewal date. That field turns a snapshot into a review of the process.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a named backup owner, an automated renewal, a monitoring alert, or a quarterly inventory walk. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unowned or unmonitored group, not the easiest certificate to report. Record the expected effect and the evidence that will prove it. A certificate watch that is never re-measured is a calendar with good intentions."
    ],
    "takeaways": [
      "Count certificates by endpoint and fingerprint, not by renewal vendor.",
      "Treat a certificate without a named owner as the highest-risk finding.",
      "Report days remaining in fixed bands before looking at the result.",
      "Separate an unowned certificate from an unmonitored one.",
      "Measure the dwell time inside the thirty-day alert band."
    ],
    "sources": [
      [
        "Let's Encrypt documentation",
        "https://letsencrypt.org/docs/"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "set-a-tls-certificate-expiry-watch-for-an-outsourced-maintenance-lane",
      "write-a-build-artifact-retention-rule-for-offshore-release-trains"
    ]
  },
  {
    "slug": "what-share-of-offshore-releases-keep-a-rebuildable-build-artifact",
    "title": "What share of offshore releases keep a rebuildable build artifact?",
    "excerpt": "A protocol for pairing a released commit with an artifact, testing a rebuild, and reporting the releases that cannot be reproduced.",
    "topic": "Build artifact retention",
    "published": "2026-11-18",
    "hero": "/nov18/research/what-share-of-offshore-releases-keep-a-rebuildable-build-artifact.webp",
    "body": [
      "This protocol measures the share of offshore releases that keep a rebuildable build artifact. The unit is one released version on a named environment inside the observation window. A release counts as rebuildable when a retained artifact can be deployed again and the recorded commit can reproduce it. The study describes release evidence, not the quality of the code in the release.",
      "Define the release window and the environments in scope. Record the repository, the pipeline, and the deployment inventory used to build the list. If the pipeline changes during the window, split the sample at the change date. A new pipeline can change the artifact format and the result.",
      "Define an artifact by its digest and its type, such as a container image, a static bundle, or a signed mobile package. Record the commit, the pipeline run, the build time, and the deploy time for each release. Store the digest rather than a mutable tag. Test the definition on the first five releases.",
      "Observe the artifact store rather than the release notes alone. Look for a release that is deployed but has no retained artifact, and a retained artifact that no release references. Record the discovery source for each mismatch. The study should report the orphans as well as the gaps.",
      "Test a rebuild from one retained artifact per release group. Deploy it into an isolated environment and confirm that it starts and serves the expected version. Record the time taken and the manual steps needed. A rebuild that needs tribal knowledge is a partial result, not a pass.",
      "Check whether the recorded commit still builds from a clean checkout with the locked dependencies. Compare the new digest with the retained digest where the build is reproducible. Record a difference and investigate it before calling it harmless. Report the releases that could not be tested and why.",
      "Report the number of releases, the number with a retained artifact, the number that redeployed, and the number that rebuilt from source. Show the counts by environment and by artifact type. Present the releases with no record and the releases with an expired artifact separately. Use the same denominator for every rate.",
      "Separate a missing artifact from an expired one. A missing artifact was never retained, while an expired artifact was retained and then removed under a retention rule. Report the two categories separately because the fixes differ. Record the retention date and the deletion ticket beside each expired case.",
      "Inspect the releases around a pipeline migration or a storage change. A cluster of gaps may mean the new pipeline publishes to a different bucket that the index does not read. Compare the pattern with the change log. A single gap can be a mistake, while a cluster is a design gap.",
      "Do not treat a retained artifact as proof that the release can be rebuilt. The artifact may start while the recorded commit no longer builds because a dependency disappeared. Sample one release and attempt the source rebuild. Report what the attempt showed.",
      "The record cannot show whether the deployed build is the build that was approved or whether it was tampered with after publication. It can show only whether an artifact exists and whether one rebuild succeeded. A missing artifact is not proof of a bad release, and a present artifact is not proof of provenance. The protocol also cannot see an artifact that was deployed by a vendor outside the pipeline.",
      "A useful additional view is the number of releases whose artifact digest matches the digest recorded at deploy time. That match is a simple provenance check. Record the deploy-time digest and the stored digest for each release. That field turns a count into a review of integrity.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a pipeline publish step, a retention period, a storage owner, or a quarterly redeploy test. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest missing or expired group, not the easiest release to test. Record the expected effect and the evidence that will prove it. A retention rule that is never tested is a storage setting, not a control."
    ],
    "takeaways": [
      "Pair every release with one commit, one pipeline run, and one digest.",
      "Treat a source tag without a retained artifact as incomplete.",
      "Redeploy a retained artifact before the retention period ends.",
      "Report a missing artifact separately from an expired one.",
      "Check that the deploy-time digest matches the stored digest."
    ],
    "sources": [
      [
        "SLSA specification",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub Actions artifact storage",
        "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "write-a-build-artifact-retention-rule-for-offshore-release-trains",
      "set-a-mobile-signing-key-custody-note-for-outsourced-app-builds"
    ]
  },
  {
    "slug": "how-many-outsourced-mobile-builds-share-one-signing-key",
    "title": "How many outsourced mobile builds share one signing key?",
    "excerpt": "A protocol for counting signing keys, mapping each key to its builds, and reporting the ones with no rotation record.",
    "topic": "Mobile signing key custody",
    "published": "2026-11-18",
    "hero": "/nov18/research/how-many-outsourced-mobile-builds-share-one-signing-key.webp",
    "body": [
      "This protocol measures how many mobile builds depend on one signing key in an outsourced delivery lane. The unit is one key on one platform account at the observation date. A shared key means two or more apps or build tracks use the same key identifier. The study describes key concentration and custody, not the security of the apps themselves.",
      "Define the platform accounts and the apps in scope before collection. Include the store accounts, the internal distribution accounts, and any enterprise account the team can reach. Record the account owner and the recovery contact for each. Publish the list with the observation date so a later reviewer can reproduce it.",
      "Define a key by its identifier, its certificate fingerprint, and its platform. Record the apps and tracks that use the key, and the build identities allowed to sign with it. Note the storage location and who can read the key material. Test the definition on the first two accounts.",
      "Observe the store console and the build pipeline rather than the key inventory alone. Look for a build identity that can sign with a key that is not in the inventory. Record the discovery source for each mismatch. The study should report the keys that the inventory missed.",
      "Count the builds and the apps per key for the observation window. A key used by one app on one track is different from a key used by several apps across several tracks. Record the count and the platform. Report the keys with no recorded rotation and the keys with no named custodian.",
      "Check whether the client or the contractor controls the keystore and the recovery material. Record the account, the storage system, and the person who can export the key. A key held in a personal account is reported separately from one held in a client secret store. The distinction matters more than the raw count.",
      "Report the number of keys, the number of apps, and the number of builds that depend on each key. Show the counts by platform and by account type. Present the keys with no rotation record and the keys with no custodian separately. Use the same denominator for every rate.",
      "Separate a shared key from a shared account. A shared key signs several apps, while a shared account lets several people use one identity. Report the two categories separately because the fixes differ. Record the evidence beside each finding.",
      "Inspect the keys around a team change or a store policy change. A cluster of unrotated keys may mean the rotation step depended on the engineer who left. Compare the pattern with the personnel record. A single stale key can be an oversight, while a cluster is a continuity gap.",
      "Do not treat a key that still works as proof that custody is sound. The key may be valid while the storage location is a personal laptop or a shared drive. Sample one key and trace who can read it. Report what the trace showed.",
      "The record cannot show whether a key was copied or misused. It can show only whether the key exists, who can reach it, and which builds depend on it. A shared key is not proof of a compromise, and a unique key is not proof of good custody. The protocol also cannot see a key held by a store on the client behalf.",
      "A useful additional view is the number of days since the last rotation for each key. A key that has never been rotated is a different finding from one rotated last quarter. Record the rotation date and the approving person. That field turns a count into a review of lifecycle practice.",
      "Give the result to the client security owner and the offshore delivery lead with one observable change. The change might be a client-held keystore, a per-app key, a rotation calendar, or a build-log check. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest shared-key or unowned-key group, not the easiest app to report. Record the expected effect and the evidence that will prove it. A custody note that is never tested is a document, not a control."
    ],
    "takeaways": [
      "Count keys, not apps, as the unit of the study.",
      "Map each key to the apps, tracks, and build identities that use it.",
      "Report a key held in a personal account separately from one in a client store.",
      "Record the last rotation date and the approving person for each key.",
      "Trace who can export one key and report what the trace showed."
    ],
    "sources": [
      [
        "OWASP Mobile Application Security",
        "https://mas.owasp.org/MASVS/"
      ],
      [
        "Android application signing",
        "https://source.android.com/docs/security/features/apksigning"
      ],
      [
        "NIST SP 800-57 Part 1",
        "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "set-a-mobile-signing-key-custody-note-for-outsourced-app-builds",
      "plan-a-load-test-window-that-stays-away-from-production-customers"
    ]
  },
  {
    "slug": "what-share-of-offshore-load-tests-run-against-production-data",
    "title": "What share of offshore load tests run against production data?",
    "excerpt": "A protocol for classifying each load test by environment and data source, and reporting the runs that touch live records.",
    "topic": "Load test data safety",
    "published": "2026-11-18",
    "hero": "/nov18/research/what-share-of-offshore-load-tests-run-against-production-data.webp",
    "body": [
      "This protocol measures the share of offshore load tests that run against production data. The unit is one load test window with a stated target and a stated data source. A production-data run means the test read or wrote live customer records, even if the target was a staging system. The study describes test isolation, not the accuracy of the performance result.",
      "Define the load tests in scope before collection. Include capacity tests, soak tests, and failure tests that the team ran for the client in the window. Record the ticket, the date, the target environment, and the data source for each. Publish the list with a version so a later reviewer can reproduce it.",
      "Define the target environment from the deployment inventory rather than the test script name. A test that points at a production host is a production test even when the file is called staging. Record the host, the account, and the database used. Test the classification on the first three tests.",
      "Define the data source from the accounts and the connection strings used during the run. A copy of production data restored into staging is still production data. So is a read replica used for the test. Record the source and the date of the copy.",
      "Check whether the test used synthetic identities or real customer records. Look for real email addresses, phone numbers, and payment values in the test dataset. Record the check method and the person who ran it. Report the tests that could not be checked.",
      "Check whether the integrations were sandboxed. A test that can send real email, charge a card, or ship a parcel is a production-data run even with synthetic records. Record the integration state for each test. Report the tests with an unknown integration state separately.",
      "Report the number of tests, the number on production data, and the number on a production host. Show the counts by test type and by team. Present the tests with no recorded data source and the tests with no stop owner separately. Use the same denominator for every rate.",
      "Separate a production-data run from a production-target run. A staging test with a restored production copy is one category, while a test against a production endpoint is another. Report the two categories separately because the controls differ. Record the evidence beside each finding.",
      "Inspect the tests around a release deadline or a performance incident. A cluster may mean the team skipped the data preparation to save time. Compare the pattern with the release calendar. A single run can be a mistake, while a cluster is a scheduling gap.",
      "Do not treat a clean test result as proof that the data was safe. A test can complete without an incident while still exposing live records to the load generator and its logs. Sample the test artifacts for real values. Report what the sample showed.",
      "The record cannot show whether a customer was affected or whether the data was copied outside the environment. It can show only whether the test used production records and whether the integrations were sandboxed. A production-data run is not proof of harm, and a synthetic run is not proof of isolation. The protocol also cannot see a test run by a vendor outside the ticket process.",
      "A useful additional view is the share of tests with a named stop owner and a written stop signal. That share describes the ability to stop a run before it affects customers. Record the owner and the signal for each test. That field turns a data count into a review of operational control.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a synthetic data generator, a sandbox integration, a stop-owner rule, or a test ticket template. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest production-data category, not the easiest test to classify. Record the expected effect and the evidence that will prove it. A load test that is never checked for data source is a performance exercise with an unmeasured risk."
    ],
    "takeaways": [
      "Count one load test per window with a stated target and data source.",
      "Classify the target from the deployment inventory, not the test file name.",
      "Treat a restored production copy as production data even in staging.",
      "Report a production-data run separately from a production-target run.",
      "Check whether the run had a named stop owner and a stop signal."
    ],
    "sources": [
      [
        "Grafana k6 documentation",
        "https://grafana.com/docs/k6/latest/"
      ],
      [
        "OWASP ASVS",
        "https://owasp.org/www-project-application-security-verification-standard/"
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
      "plan-a-load-test-window-that-stays-away-from-production-customers",
      "set-a-read-replica-access-rule-for-offshore-reporting-work"
    ]
  },
  {
    "slug": "how-often-do-read-replica-grants-outlive-a-reporting-ticket",
    "title": "How often do read replica grants outlive a reporting ticket?",
    "excerpt": "A protocol for dating each replica grant, comparing it with the ticket window, and reporting the accounts that remain after closure.",
    "topic": "Read replica access",
    "published": "2026-11-18",
    "hero": "/nov18/research/how-often-do-read-replica-grants-outlive-a-reporting-ticket.webp",
    "body": [
      "This protocol measures how often read replica grants outlive the reporting ticket they serve. The unit is one grant for one account on one replica tied to one ticket. An outliving grant means the account could still connect after the ticket closed. The study describes access closure, not whether the reporter used the data appropriately.",
      "Define the replica endpoints and the ticket system in scope before collection. Record the database host, the role, and the review window. If the ticket process changes during the window, split the sample at the change date. A new process can change the closure evidence and the result.",
      "Define a grant by the account, the replica, the role, and the ticket. Record the grant date, the expected close date, and the actual revoke time. A grant with no ticket is reported separately. Test the definition on the first five accounts.",
      "Observe the database roles and the identity provider rather than the ticket alone. Look for an account that still authenticates after its ticket closed. Record the discovery source for each outliving grant. The study should report grants that the ticket system never knew about.",
      "Check the query log for each grant to confirm that the account was used during the ticket window. A grant that was never used is a different finding from one that was used heavily. Record the last query time and the tables touched. Report the grants with no usable log.",
      "Check whether the account could reach the primary database or write to any table. A read-only grant that can reach the primary is a scope finding. Record the host, the role, and the tested permission. Report it separately from an account that stayed open too long.",
      "Report the number of grants, the number still open past the close date, and the number with no ticket. Show the counts by team and by month. Present the grants with no revoke record and the grants with no log separately. Use the same denominator for every rate.",
      "Separate a stale grant from a shared account. A stale grant has a named owner and an old ticket, while a shared account serves several people with no single owner. Report the two categories separately because the fixes differ. Record the evidence beside each finding.",
      "Inspect the grants around a project handover or a team departure. A cluster may mean the closure step depends on a person who has moved on. Compare the pattern with the personnel record. A single stale grant can be an oversight, while a cluster is a process gap.",
      "Do not treat a revoked grant as proof that the access ended. The account may still exist in the identity provider and regain access through another role. Test the login after revocation. Report what the test showed.",
      "The record cannot show whether the account was used for an unapproved purpose or whether data was exported. It can show only whether the login still worked after the ticket closed. An outliving grant is not proof of misuse, and a closed grant is not proof of good oversight. The protocol also cannot see an account created outside the ticket process.",
      "A useful additional view is the number of days between ticket close and revoke. A grant revoked the same day is a different control from one revoked a quarter later. Record both dates for each grant. That field turns a yes-or-no count into a review of closure speed.",
      "Give the result to the client data owner and the offshore delivery lead with one observable change. The change might be a revoke-on-close step, a monthly grant review, a named owner per account, or a database and identity check. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest outliving or shared-account group, not the easiest account to close. Record the expected effect and the evidence that will prove it. A grant review that is never re-measured is a cleanup, not a control."
    ],
    "takeaways": [
      "Count one grant per account, replica, and ticket.",
      "Compare the revoke time with the ticket close date, not the project end.",
      "Report grants with no ticket at all as a separate category.",
      "Test the login after revocation as well as the database role.",
      "Measure the days between ticket close and revoke."
    ],
    "sources": [
      [
        "PostgreSQL hot standby",
        "https://www.postgresql.org/docs/current/hot-standby.html"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-92 log management",
        "https://csrc.nist.gov/pubs/sp/800/92/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "set-a-read-replica-access-rule-for-offshore-reporting-work",
      "how-often-do-tls-certificates-expire-inside-an-outsourced-maintenance-lane"
    ]
  }
];
