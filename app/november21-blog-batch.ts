export const november21BlogBatch = [
  {
    "slug": "set-a-database-index-review-rule-for-outsourced-query-tickets",
    "title": "Set a database index review rule for outsourced query tickets",
    "excerpt": "A review rule that captures the query plan, measures read and write cost, names the index shape, and keeps a rollback path before an outsourced ticket ships.",
    "minutes": 8,
    "published": "2026-11-21",
    "body": [
      "## Capture the query and the plan before adding an index",
      "Start the ticket with the exact query, the parameter values, and the screen or job that runs it. Record the database engine and version, because the planner behavior changes between releases. Save the current execution plan and the time it takes on a production-sized data set. An index added to a query nobody captured is a guess that will be hard to review.",
      "Record the row counts for the tables in the plan and the selectivity of the filter columns. Note whether the query sorts, groups, or joins on the same columns. Capture the plan again after the index so the reviewer can compare the two. The before and after plans are the evidence that the change did what the ticket claims.",
      "## Measure the current read and write cost",
      "Measure the read latency of the slow query on a representative data set before the change. Record the percentile that matters, such as the median, the ninety-fifth, and the slowest observed run. Note the frequency of the query so a small gain on a rare report does not outrank a daily page. A fast query that runs twice a month is not the same win as a slow checkout read.",
      "Measure the write cost on every table the index will touch. Record the insert, update, and delete rate and the current write latency during the busiest hour. Note the batch jobs that rewrite the same rows. An index that speeds one report can slow every write on a busy table, and the review must see both sides.",
      "## Choose the index shape and write the name down",
      "Choose the column order from the filter and sort pattern in the plan, not from the order the columns appear in the ticket. Record why each leading column is included and which queries share the index. Name the index with the table, the purpose, and a short suffix that fits the team convention. A name that describes the purpose survives a review better than an auto-generated string.",
      "Decide whether a partial, covering, or expression index is justified and record the trade-off. Note the queries that would not use it and the ones that would lose a better plan. Keep the index count visible so the reviewer can see whether the table is accumulating redundant copies. Every index has a maintenance cost even when it looks free in a single query test.",
      "## Check the migration and rollback path",
      "Write the migration with the lock behavior of the chosen engine in mind. Record whether the index can be built without blocking writes and how long the build takes at production size. Note the migration window and the person who will watch it. A blocking build during peak traffic turns a performance ticket into an outage.",
      "Write the rollback statement and test that it removes the index cleanly. Record the time to roll back and any dependent query that would regress. Keep the old plan and the old metric with the rollback note. A reviewer should be able to reverse the change without reconstructing the reason from chat.",
      "## Watch write amplification and storage",
      "Record the expected storage growth and the disk headroom on the target database. Note the backup size change and any retention policy that depends on it. Check the write latency during the first busy hour after the deploy. A storage surprise on a small managed instance can block the next migration.",
      "Watch the cache hit ratio and the buffer pool behavior after the index lands. Note whether the new index evicts a hotter page and shifts latency elsewhere. Record the queries that became slower after the change, not only the one that became faster. The review is complete only when the rest of the workload is checked.",
      "## Set the verification evidence the ticket must carry",
      "Require the after plan, the read timing, and the write timing in the ticket before it closes. Record the data set used for the measurement and the date it was taken. Note the query frequency and the expected monthly saving. Evidence with no data set and no date cannot be repeated by the next reviewer.",
      "Ask the reviewer to run one query that should use the index and one that should not. Record both plans and confirm the planner chose as expected. Note any hint, statistic update, or configuration change that the plan depends on. A plan that only works after a manual analyze is a fragile result.",
      "## Review the index set on a schedule",
      "Review the table index list each quarter and compare it with the queries the application actually runs. Record the indexes with no observed use and the ones that duplicate a longer index. Remove the dead indexes with the same migration discipline used to add them. An index register that is never pruned becomes a tax on every write.",
      "Review the rule when the engine version, the data volume, or the query mix changes. Record the date of the last review and the owner who signed it. Add the new slow query to the next cycle rather than to an emergency change. A predictable review keeps the database from accumulating one-off decisions."
    ]
  },
  {
    "slug": "write-a-browser-support-matrix-for-an-outsourced-frontend-handoff",
    "title": "Write a browser support matrix for an outsourced frontend handoff",
    "excerpt": "A matrix that names supported browsers and versions, records test evidence, defines a support defect, and keeps the frontend contract current as analytics change.",
    "minutes": 8,
    "published": "2026-11-21",
    "body": [
      "## Name the browsers and versions in scope",
      "List the browser families the product supports and the oldest version in each family. Record whether the support is full, functional, or best effort for each entry. Note the operating systems and device classes that change rendering or input. A matrix that says only modern browsers leaves the reviewer to guess what that means for an old tablet.",
      "Use the analytics the client already collects to set priorities, and record the date of the export. Note the browsers with meaningful traffic and the ones with almost none. Keep a deliberate entry for assistive technology and keyboard-only use where the client requires it. The matrix should describe real users, not only the browsers the team happens to own.",
      "## Record the evidence for each support tier",
      "For each full-support entry, record the browser version, the operating system, and the date of the last real test. Note whether the test used a device, a virtual machine, or an emulator. Keep the screenshot or the test run identifier beside the entry. A tier with no dated evidence is a claim rather than a commitment.",
      "For each functional entry, record the features that may degrade and the features that must still work. Note the fallback that the team accepts, such as a native control instead of a custom widget. Record who approved the fallback and when it will be reviewed. The degradation list is the part that prevents an argument after a customer report.",
      "## Tie the matrix to the design and component library",
      "Map each component in the design system to the browsers where it has been verified. Record the components that rely on newer platform features and the polyfill that supports them. Note the components with no fallback and the pages where they appear. A component that works in one browser can fail on a checkout path that nobody re-tested.",
      "Record the CSS and JavaScript features that set the minimum browser level, such as container queries, newer selectors, or module support. Note the build targets that produce the shipped bundles. Keep the list beside the matrix so a dependency upgrade can be checked against it. The support contract and the build target should agree, not drift apart.",
      "## Define what counts as a support defect",
      "Write the definition of a defect that the support matrix covers, separating a broken core action from a cosmetic difference. Record the actions that must work in every full-support browser, such as sign in, checkout, and form submission. Note the differences the team will accept, such as font rendering or scrollbar styling. A vague definition turns every visual difference into a new argument.",
      "Record the severity rule and the response time for a supported-browser defect. Note the owner who triages a report and the evidence the reporter must provide. Keep the customer message for a known degradation beside the rule. The support contract should tell an agent what to promise without asking an engineer.",
      "## Set the test devices and emulation limits",
      "List the real devices and operating-system versions the team can test and the ones it can only emulate. Record the emulator or cloud device service and the login owner. Note the browsers that cannot be emulated faithfully, such as a mobile browser with a vendor-specific rendering engine. Emulation is useful evidence but it is not the same as a real device.",
      "Schedule one real-device pass before a major release and record the result. Note the devices that were unavailable and the risk that the gap creates. Record the date when a device leaves support and needs replacement. A device list that is never refreshed slowly stops representing the customers it was meant to cover.",
      "## Put the matrix in the handoff packet",
      "Place the matrix where the offshore frontend team starts work, and link it from the definition of done and the release checklist. Record the owner, the version, and the last review date at the top. Note the process for adding a browser or dropping a version. A matrix buried in a chat thread will not be consulted during a ticket.",
      "Include the matrix in the acceptance criteria for frontend work, with the browsers the reviewer must check. Record the evidence the reviewer expects, such as a screenshot per tier or a test-run link. Note the exceptions that need client approval. The handoff packet should make the support level checkable at review time.",
      "## Review after analytics, vendor, or platform changes",
      "Review the matrix when traffic shifts, when a browser vendor drops a version, or when a major dependency changes its targets. Record the new version floor and the pages that need a retest. Note the customers who would lose support and the notice the client wants to give. A browser policy that changes silently surprises the customers who relied on the old one.",
      "Sample one month of browser-related support tickets and compare them with the matrix. Record the reports from supported browsers that the team missed and the reports from unsupported browsers that consumed time. Give the finding to the client owner with one change and a re-measure date. The matrix improves when it is checked against real customer reports."
    ]
  },
  {
    "slug": "write-a-payment-retry-idempotency-rule-for-an-outsourced-integration",
    "title": "Write a payment retry idempotency rule for an outsourced integration",
    "excerpt": "A rule that gives every payment write a durable key, separates safe retries from duplicate charges, and proves the behavior under timeout and replay.",
    "minutes": 8,
    "published": "2026-11-21",
    "body": [
      "## Separate safe retries from duplicate charges",
      "List the payment calls that create or change money, such as a charge, a refund, a capture, and a payout. Record which calls are safe to repeat and which must never run twice for the same intent. Note the provider endpoints that accept a client-supplied key. A retry rule that treats every call the same will eventually duplicate a charge.",
      "Write the definition of one payment intent and the record that represents it. Note the order, invoice, or subscription that the intent belongs to and the amount it authorizes. Record the state that means the intent is final and the states that may still be retried. The key is only meaningful when the intent behind it is defined.",
      "## Require a durable idempotency key on every write",
      "Generate the key before the first provider call and store it with the payment intent. Record the key, the request body hash, the provider, and the creation time. Reuse that key for every retry of the same intent, including retries from a different worker. A key generated at retry time is a new request and defeats the protection.",
      "Store the key in durable storage that survives a process restart and a queue redelivery. Record the database row or table and the retention period. Note the rule for a key that is older than the provider retention window. A key held only in memory disappears exactly when a crash makes the retry necessary.",
      "## Record the key lifecycle and the conflict behavior",
      "Write what happens when the provider reports a key conflict or returns the stored response for a repeated key. Record the fields the team compares before accepting the stored result, such as amount, currency, and customer. Note the path for a conflict that represents a different request with the same key. A conflict is a signal to stop and reconcile, not to generate a new key and try again.",
      "Record the retention and cleanup rule for keys and their responses. Note the period when a late retry could still match the original intent. Keep the key and the outcome together so support can answer a customer question. A key that is deleted before the provider forgets it creates a window for a duplicate.",
      "## Define the retry and reconciliation window",
      "Write the retry schedule with a maximum attempt count and a clear backoff. Record which error classes are retried, such as a timeout or a provider server error, and which are final, such as a declined card. Note the point when the system stops retrying and moves the intent to manual review. An uncapped retry loop can turn a provider delay into a flood.",
      "Write the reconciliation job that compares local payment state with the provider after a timeout. Record the interval, the matching key, and the person who reviews a mismatch. Note how the job handles a payment that succeeded at the provider but failed locally. Reconciliation is the control that catches the case the retry logic cannot see.",
      "## Test duplicate delivery and partial failure",
      "Run a test that sends the same request twice with the same key and confirm the provider returns one result. Record the response, the local state, and the customer-visible outcome. Note the worker that handled each request and the timing. A test that only checks the happy path does not exercise the protection.",
      "Simulate a timeout after the provider accepted the request and before the application stored the response. Record the reconciliation path and the final state of the intent. Repeat the test across a process restart and a queue redelivery. The rule is proven when the system recovers without a second charge.",
      "## Alert on duplicate attempts and orphaned keys",
      "Alert when the same intent produces more than one provider request with different keys. Record the alert owner and the first evidence to collect. Note the dashboard that shows intent, key, and provider request together. A duplicate key alert that no one owns is only a log line.",
      "Alert on intents that have a key but no final state after the agreed window. Record the age threshold and the reconciliation owner. Note the customer message for a payment that is still pending. The alert should reach a person who can finish the reconciliation, not a shared queue.",
      "## Review after a provider or flow change",
      "Review the rule when the provider changes its idempotency behavior, its retention window, or its error codes. Record the new behavior and the date of the change. Re-run the duplicate and timeout tests against the new behavior. A rule written for the old provider version can fail silently after an upgrade.",
      "Review the rule when a new payment method, currency, or checkout flow is added. Record the new intent shape and the key fields that must match. Note the test that proves the new flow is idempotent. New payment paths are where duplicate charges most often appear."
    ]
  },
  {
    "slug": "write-an-app-store-release-checklist-for-an-outsourced-mobile-lane",
    "title": "Write an app store release checklist for an outsourced mobile lane",
    "excerpt": "A checklist that freezes the build, records signing and metadata, checks store policy early, stages the rollout, and keeps a rejection path ready.",
    "minutes": 8,
    "published": "2026-11-21",
    "body": [
      "## Freeze the build and record the version",
      "Freeze the release branch and record the commit, the build number, and the version name. Note the dependency lockfile and the toolchain versions used for the build. Keep the artifact and its checksum in a place the client can retrieve. A store release that cannot be rebuilt from a recorded commit is impossible to audit.",
      "Record the device and operating-system versions used for the release test. Note the features gated by the app version and the server version they require. Check that the store build points at the production API and not a staging host. A build with the wrong endpoint is the classic release failure that the checklist exists to catch.",
      "## Prepare store metadata and screenshots",
      "Record the title, subtitle, description, keywords, and category for each store listing. Note the screenshots and preview videos with their device sizes and the date captured. Check that the text matches the current feature set and the legal disclosures the client requires. Metadata that describes a removed feature invites a review rejection.",
      "Record the privacy questionnaire, data-collection disclosure, and tracking permission text. Note the account-deletion path and the support contact that the store requires. Check that the policy URLs resolve without a login. A listing that points at a stale privacy page can delay the whole release.",
      "## Confirm signing keys and entitlements",
      "Record which signing key and provisioning profile built the release and who holds the key. Note the certificate expiry date and the backup location under client control. Check that the entitlement list matches the features in the build. A signing key held by one contractor is a release risk that outlives the contract.",
      "Record the app identifier, bundle version, and any associated domains or push configuration. Note the store account owner and the role used to upload the build. Check that the upload account has the minimum role needed and that the client can revoke it. The release should not depend on a personal account nobody can recover.",
      "## Run the policy checklist before submission",
      "Check the store rules that most often affect the product, such as payments, health claims, location use, and account deletion. Record the rule, the screen that satisfies it, and the person who verified it. Note the features that need a disclosure or an age rating. A policy check after submission turns a small fix into a review cycle.",
      "Check that every permission has a visible purpose string and a path that works when permission is denied. Note the screens that request background location, contacts, or notifications. Record the test result on a clean install. A permission prompt with no explanation is a common and avoidable rejection.",
      "## Stage the rollout and watch the first days",
      "Choose the rollout percentage and record the reason and the owner who approved it. Note the crash-rate and support-ticket thresholds that pause the rollout. Keep the previous build available for a fast revert where the store supports it. A staged rollout is only useful when the pause rule is written before the release.",
      "Watch the first-day crash rate, startup time, and the top support contacts by version. Record the baseline from the previous version so the comparison has meaning. Note the store review status and the release time in each region. The first day is when a device-specific failure appears, not in the internal test pass.",
      "## Keep a rejection and hotfix path ready",
      "Record the reviewer contact, the store appeal path, and the evidence the team will send for a disputed rejection. Note the person who can authorize a resubmission and the customer message for a delay. Keep the build and metadata versions that were submitted. A rejection handled from memory loses the exact text that caused it.",
      "Write the hotfix rule for a release that must ship outside the normal train. Record the approver, the test scope, and the store review time the team expects. Note the rollback if the hotfix fails review. A hotfix path without a rollback is a second release risk stacked on the first.",
      "## Close the release record",
      "Store the final build, the store listing version, the review outcome, and the rollout history in one release record. Record the date each store approved the build and the version that reached production. Note any policy warning that should be fixed before the next release. The record should answer what shipped, when, and to whom.",
      "Review the checklist after the release with the offshore mobile lead and the client owner. Record the steps that were skipped and the step that caught a real problem. Update the checklist with one change and an owner. A checklist that never changes after a release is a formality rather than a control."
    ]
  },
  {
    "slug": "set-a-ci-cache-invalidation-rule-for-an-outsourced-build-pipeline",
    "title": "Set a CI cache invalidation rule for an outsourced build pipeline",
    "excerpt": "A rule that names what the cache stores, keys it to real inputs, bounds the fallback, and proves a cold build still passes before the cache is trusted.",
    "minutes": 8,
    "published": "2026-11-21",
    "body": [
      "## List what the cache actually stores",
      "List every cache the pipeline uses, including package downloads, compiler output, test fixtures, and container layers. Record the tool, the storage location, and the person who can purge it. Note the size limit and the retention policy for each cache. A cache that nobody has listed cannot be invalidated on purpose.",
      "Separate a cache that only saves time from a cache that changes the build result. Record the caches that contain generated code, environment-specific binaries, or credentials. Mark those as sensitive and give them a stricter key and purge rule. A cache that silently changes output is a correctness risk, not a speed feature.",
      "## Key the cache to inputs that change behavior",
      "Write the key from the lockfile, the toolchain version, the build flags, and the operating-system image. Record which inputs the key covers and which it deliberately ignores. Note the branch or environment scope so a production build never restores a test cache. A key built only from the branch name will serve a stale compiler after an upgrade.",
      "Record the fallback order when an exact key is missing, such as a restore key that matches the lockfile prefix. Note the risk that a partial match restores incompatible output. Set the rule for when the pipeline must rebuild instead of restoring. A fallback that quietly uses an older cache hides the very change the build was testing.",
      "## Set the invalidation and purge rule",
      "Write the triggers that force a clean cache, such as a toolchain upgrade, a lockfile change, or a corrupted artifact report. Record who can purge the cache and how the purge is announced. Note the jobs that must rerun after a purge. An invalidation that happens only when someone remembers is not a rule.",
      "Record the maximum age for each cache and the cleanup job that enforces it. Note the storage cost and the effect on the slowest job. Keep the purge command in the pipeline documentation. A cache with no age limit grows until quota or cost forces an emergency cleanup.",
      "## Measure hit rate and rebuild cost",
      "Record the cache hit rate for each job and the time saved per hit. Note the jobs whose hit rate is low because the key changes too often. Compare the saved time with the cost of storing and restoring the cache. A cache that saves seconds but costs minutes to download is a net loss.",
      "Record the cold-build duration and the warm-build duration on the same runner class. Note the variance across runs and the jobs that dominate the total. Use the cold number to set the timeout and the patience of the team. A pipeline tuned only to warm builds will time out on the day the cache is empty.",
      "## Protect secrets and artifacts in the cache",
      "Check that no cache contains tokens, credentials, or customer data from a test run. Record the scan that looks for secrets and the owner who responds to a finding. Note the caches that are shared across repositories or teams. A poisoned or leaky cache spreads farther than the job that created it.",
      "Record which build artifacts must never come from a cache, such as a signed release or a published container image. Note the step that re-creates the artifact from source for a release. Keep the provenance record for the artifact that ships. A release is not reproducible when its binary came from an untrusted cache.",
      "## Prove a cold build on a schedule",
      "Run a scheduled cold build with the cache disabled and record the result. Note the duration, the failing step, and the dependency that was only present in the cache. Fix the pipeline rather than the cache when the cold build fails. A cold build that nobody runs is discovered during an incident.",
      "Record the date of the last cold build and the owner who reviewed it. Note the jobs excluded from the test and the reason. Keep the cold-build log beside the cache configuration. The evidence should show that the pipeline can rebuild the product from source alone.",
      "## Review the cache when dependencies change",
      "Review the keys when a package manager, compiler, or base image changes. Record the new input and the date the key changed. Purge the old cache and run the cold build against the new toolchain. A key that was correct last quarter may restore incompatible output after an upgrade.",
      "Review the cache list when a new service or job joins the pipeline. Record the new cache, its owner, and its size budget. Note the jobs that share a key by mistake. The review keeps the cache inventory aligned with the pipeline it serves."
    ]
  }
];

export const november21BlogDetails = {
  "set-a-database-index-review-rule-for-outsourced-query-tickets": {
    "takeaways": [
      "Capture the query, parameters, and before plan in the ticket.",
      "Measure write cost on every table the index touches.",
      "Choose the column order from the plan, not the request.",
      "Test the rollback and the build lock behavior before deploy.",
      "Prune unused indexes on a recorded quarterly cycle."
    ],
    "readinessRows": [
      {
        "area": "Query evidence",
        "ready": "Attach the query, parameters, before plan, and data-set date to the ticket.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Read and write cost",
        "ready": "Record read percentiles and write latency on the busiest table hour.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Index shape",
        "ready": "Name the column order, index type, and the queries expected to use it.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Rollback",
        "ready": "Keep a tested drop statement, the old plan, and the rollback timing.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "capture-the-query-and-the-plan-before-adding-an-index",
        "title": "Capture the query and the plan before adding an index",
        "paragraphs": [
          "Start the ticket with the exact query, the parameter values, and the screen or job that runs it. Record the database engine and version, because the planner behavior changes between releases. Save the current execution plan and the time it takes on a production-sized data set. An index added to a query nobody captured is a guess that will be hard to review.",
          "Record the row counts for the tables in the plan and the selectivity of the filter columns. Note whether the query sorts, groups, or joins on the same columns. Capture the plan again after the index so the reviewer can compare the two. The before and after plans are the evidence that the change did what the ticket claims."
        ]
      },
      {
        "id": "measure-the-current-read-and-write-cost",
        "title": "Measure the current read and write cost",
        "paragraphs": [
          "Measure the read latency of the slow query on a representative data set before the change. Record the percentile that matters, such as the median, the ninety-fifth, and the slowest observed run. Note the frequency of the query so a small gain on a rare report does not outrank a daily page. A fast query that runs twice a month is not the same win as a slow checkout read.",
          "Measure the write cost on every table the index will touch. Record the insert, update, and delete rate and the current write latency during the busiest hour. Note the batch jobs that rewrite the same rows. An index that speeds one report can slow every write on a busy table, and the review must see both sides."
        ]
      },
      {
        "id": "choose-the-index-shape-and-write-the-name-down",
        "title": "Choose the index shape and write the name down",
        "paragraphs": [
          "Choose the column order from the filter and sort pattern in the plan, not from the order the columns appear in the ticket. Record why each leading column is included and which queries share the index. Name the index with the table, the purpose, and a short suffix that fits the team convention. A name that describes the purpose survives a review better than an auto-generated string.",
          "Decide whether a partial, covering, or expression index is justified and record the trade-off. Note the queries that would not use it and the ones that would lose a better plan. Keep the index count visible so the reviewer can see whether the table is accumulating redundant copies. Every index has a maintenance cost even when it looks free in a single query test."
        ]
      },
      {
        "id": "check-the-migration-and-rollback-path",
        "title": "Check the migration and rollback path",
        "paragraphs": [
          "Write the migration with the lock behavior of the chosen engine in mind. Record whether the index can be built without blocking writes and how long the build takes at production size. Note the migration window and the person who will watch it. A blocking build during peak traffic turns a performance ticket into an outage.",
          "Write the rollback statement and test that it removes the index cleanly. Record the time to roll back and any dependent query that would regress. Keep the old plan and the old metric with the rollback note. A reviewer should be able to reverse the change without reconstructing the reason from chat."
        ]
      },
      {
        "id": "watch-write-amplification-and-storage",
        "title": "Watch write amplification and storage",
        "paragraphs": [
          "Record the expected storage growth and the disk headroom on the target database. Note the backup size change and any retention policy that depends on it. Check the write latency during the first busy hour after the deploy. A storage surprise on a small managed instance can block the next migration.",
          "Watch the cache hit ratio and the buffer pool behavior after the index lands. Note whether the new index evicts a hotter page and shifts latency elsewhere. Record the queries that became slower after the change, not only the one that became faster. The review is complete only when the rest of the workload is checked."
        ]
      },
      {
        "id": "set-the-verification-evidence-the-ticket-must-carry",
        "title": "Set the verification evidence the ticket must carry",
        "paragraphs": [
          "Require the after plan, the read timing, and the write timing in the ticket before it closes. Record the data set used for the measurement and the date it was taken. Note the query frequency and the expected monthly saving. Evidence with no data set and no date cannot be repeated by the next reviewer.",
          "Ask the reviewer to run one query that should use the index and one that should not. Record both plans and confirm the planner chose as expected. Note any hint, statistic update, or configuration change that the plan depends on. A plan that only works after a manual analyze is a fragile result."
        ]
      },
      {
        "id": "review-the-index-set-on-a-schedule",
        "title": "Review the index set on a schedule",
        "paragraphs": [
          "Review the table index list each quarter and compare it with the queries the application actually runs. Record the indexes with no observed use and the ones that duplicate a longer index. Remove the dead indexes with the same migration discipline used to add them. An index register that is never pruned becomes a tax on every write.",
          "Review the rule when the engine version, the data volume, or the query mix changes. Record the date of the last review and the owner who signed it. Add the new slow query to the next cycle rather than to an emergency change. A predictable review keeps the database from accumulating one-off decisions."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Plan capture",
        "text": "Save the before and after execution plans with the data set and date."
      },
      {
        "label": "Write budget",
        "text": "Show insert, update, and delete latency before and after the index."
      },
      {
        "label": "Migration safety",
        "text": "Record the lock mode, build time, and the window owner."
      },
      {
        "label": "Prune rule",
        "text": "List unused indexes and schedule removal with the same review."
      }
    ],
    "faqs": [
      {
        "question": "Should every slow query get an index?",
        "answer": "No. Some slow queries need a rewrite, a statistic update, or a smaller result set before an index helps."
      },
      {
        "question": "Who approves the production migration?",
        "answer": "The client technical owner approves the window and the rollback plan, while the delivery lead owns the evidence."
      },
      {
        "question": "How long should the measurement run?",
        "answer": "Measure at production size during a normal busy period and record the percentiles, not a single best run."
      },
      {
        "question": "What happens to an index nobody uses?",
        "answer": "List it in the quarterly review and remove it with a tested migration after the owner confirms no query depends on it."
      }
    ],
    "sources": [
      {
        "name": "PostgreSQL index documentation",
        "url": "https://www.postgresql.org/docs/current/indexes.html",
        "note": "How indexes are chosen, maintained, and costed by the planner."
      },
      {
        "name": "PostgreSQL CREATE INDEX",
        "url": "https://www.postgresql.org/docs/current/sql-createindex.html",
        "note": "Concurrent build behavior and lock considerations."
      },
      {
        "name": "MySQL EXPLAIN output",
        "url": "https://dev.mysql.com/doc/refman/8.0/en/explain-output.html",
        "note": "Reading access type, key choice, and row estimates."
      },
      {
        "name": "Use The Index, Luke",
        "url": "https://use-the-index-luke.com/",
        "note": "Practical guidance on index column order and query patterns."
      }
    ],
    "heroImage": "/nov21/blog/set-a-database-index-review-rule-for-outsourced-query-tickets.webp"
  },
  "write-a-browser-support-matrix-for-an-outsourced-frontend-handoff": {
    "takeaways": [
      "Name each browser family and the oldest supported version.",
      "Record dated evidence for every full-support entry.",
      "Define the core actions that must work in each tier.",
      "Separate real-device testing from emulator coverage.",
      "Re-measure the matrix against traffic and support tickets."
    ],
    "readinessRows": [
      {
        "area": "Browser list",
        "ready": "List families, oldest versions, operating systems, and support tiers.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Evidence",
        "ready": "Attach a dated test or screenshot to every full-support entry.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Degradation",
        "ready": "Name the accepted fallbacks and the owner who approved them.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Defect rule",
        "ready": "Define a support defect, its severity, and the response owner.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "name-the-browsers-and-versions-in-scope",
        "title": "Name the browsers and versions in scope",
        "paragraphs": [
          "List the browser families the product supports and the oldest version in each family. Record whether the support is full, functional, or best effort for each entry. Note the operating systems and device classes that change rendering or input. A matrix that says only modern browsers leaves the reviewer to guess what that means for an old tablet.",
          "Use the analytics the client already collects to set priorities, and record the date of the export. Note the browsers with meaningful traffic and the ones with almost none. Keep a deliberate entry for assistive technology and keyboard-only use where the client requires it. The matrix should describe real users, not only the browsers the team happens to own."
        ]
      },
      {
        "id": "record-the-evidence-for-each-support-tier",
        "title": "Record the evidence for each support tier",
        "paragraphs": [
          "For each full-support entry, record the browser version, the operating system, and the date of the last real test. Note whether the test used a device, a virtual machine, or an emulator. Keep the screenshot or the test run identifier beside the entry. A tier with no dated evidence is a claim rather than a commitment.",
          "For each functional entry, record the features that may degrade and the features that must still work. Note the fallback that the team accepts, such as a native control instead of a custom widget. Record who approved the fallback and when it will be reviewed. The degradation list is the part that prevents an argument after a customer report."
        ]
      },
      {
        "id": "tie-the-matrix-to-the-design-and-component-library",
        "title": "Tie the matrix to the design and component library",
        "paragraphs": [
          "Map each component in the design system to the browsers where it has been verified. Record the components that rely on newer platform features and the polyfill that supports them. Note the components with no fallback and the pages where they appear. A component that works in one browser can fail on a checkout path that nobody re-tested.",
          "Record the CSS and JavaScript features that set the minimum browser level, such as container queries, newer selectors, or module support. Note the build targets that produce the shipped bundles. Keep the list beside the matrix so a dependency upgrade can be checked against it. The support contract and the build target should agree, not drift apart."
        ]
      },
      {
        "id": "define-what-counts-as-a-support-defect",
        "title": "Define what counts as a support defect",
        "paragraphs": [
          "Write the definition of a defect that the support matrix covers, separating a broken core action from a cosmetic difference. Record the actions that must work in every full-support browser, such as sign in, checkout, and form submission. Note the differences the team will accept, such as font rendering or scrollbar styling. A vague definition turns every visual difference into a new argument.",
          "Record the severity rule and the response time for a supported-browser defect. Note the owner who triages a report and the evidence the reporter must provide. Keep the customer message for a known degradation beside the rule. The support contract should tell an agent what to promise without asking an engineer."
        ]
      },
      {
        "id": "set-the-test-devices-and-emulation-limits",
        "title": "Set the test devices and emulation limits",
        "paragraphs": [
          "List the real devices and operating-system versions the team can test and the ones it can only emulate. Record the emulator or cloud device service and the login owner. Note the browsers that cannot be emulated faithfully, such as a mobile browser with a vendor-specific rendering engine. Emulation is useful evidence but it is not the same as a real device.",
          "Schedule one real-device pass before a major release and record the result. Note the devices that were unavailable and the risk that the gap creates. Record the date when a device leaves support and needs replacement. A device list that is never refreshed slowly stops representing the customers it was meant to cover."
        ]
      },
      {
        "id": "put-the-matrix-in-the-handoff-packet",
        "title": "Put the matrix in the handoff packet",
        "paragraphs": [
          "Place the matrix where the offshore frontend team starts work, and link it from the definition of done and the release checklist. Record the owner, the version, and the last review date at the top. Note the process for adding a browser or dropping a version. A matrix buried in a chat thread will not be consulted during a ticket.",
          "Include the matrix in the acceptance criteria for frontend work, with the browsers the reviewer must check. Record the evidence the reviewer expects, such as a screenshot per tier or a test-run link. Note the exceptions that need client approval. The handoff packet should make the support level checkable at review time."
        ]
      },
      {
        "id": "review-after-analytics-vendor-or-platform-changes",
        "title": "Review after analytics, vendor, or platform changes",
        "paragraphs": [
          "Review the matrix when traffic shifts, when a browser vendor drops a version, or when a major dependency changes its targets. Record the new version floor and the pages that need a retest. Note the customers who would lose support and the notice the client wants to give. A browser policy that changes silently surprises the customers who relied on the old one.",
          "Sample one month of browser-related support tickets and compare them with the matrix. Record the reports from supported browsers that the team missed and the reports from unsupported browsers that consumed time. Give the finding to the client owner with one change and a re-measure date. The matrix improves when it is checked against real customer reports."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Support tiers",
        "text": "Publish full, functional, and best-effort tiers with their browser versions."
      },
      {
        "label": "Component map",
        "text": "Link each design-system component to the browsers where it was verified."
      },
      {
        "label": "Device plan",
        "text": "Record real devices, emulators, and the date each device leaves support."
      },
      {
        "label": "Ticket sample",
        "text": "Compare monthly browser tickets with the matrix and assign one fix."
      }
    ],
    "faqs": [
      {
        "question": "Do we need to support every browser with any traffic?",
        "answer": "No. Set the floor from client requirements and real traffic, then record the reason for each exclusion."
      },
      {
        "question": "Is emulator testing enough for mobile browsers?",
        "answer": "No. Use emulation for broad coverage and a real-device pass for the browsers that differ most."
      },
      {
        "question": "Who decides an accepted visual difference?",
        "answer": "The client design owner records the acceptance, the date, and the pages where it applies."
      },
      {
        "question": "When should the matrix change?",
        "answer": "Review it after a traffic shift, a vendor version drop, a major dependency upgrade, or a support-ticket sample."
      }
    ],
    "sources": [
      {
        "name": "MDN browser compatibility data",
        "url": "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables",
        "note": "How compatibility tables are maintained and read."
      },
      {
        "name": "Can I use",
        "url": "https://caniuse.com/",
        "note": "Feature support tables by browser and version."
      },
      {
        "name": "web.dev Baseline",
        "url": "https://web.dev/baseline",
        "note": "A shared signal for cross-browser feature availability."
      },
      {
        "name": "W3C Web Content Accessibility Guidelines",
        "url": "https://www.w3.org/WAI/standards-guidelines/wcag/",
        "note": "Accessibility requirements that affect browser and assistive-technology support."
      }
    ],
    "heroImage": "/nov21/blog/write-a-browser-support-matrix-for-an-outsourced-frontend-handoff.webp"
  },
  "write-a-payment-retry-idempotency-rule-for-an-outsourced-integration": {
    "takeaways": [
      "Name the calls that create money and must never repeat.",
      "Generate the key before the first call and store it durably.",
      "Treat a key conflict as a reason to reconcile, not to retry.",
      "Prove the rule with a timeout and a redelivery test.",
      "Alert on duplicate intents and orphaned keys."
    ],
    "readinessRows": [
      {
        "area": "Intent model",
        "ready": "Define the payment intent, amount, and final states in writing.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Key storage",
        "ready": "Store the key, request hash, provider, and creation time durably.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Reconciliation",
        "ready": "Run a scheduled comparison of local and provider payment state.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Failure test",
        "ready": "Simulate timeout, restart, and redelivery without a duplicate charge.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "separate-safe-retries-from-duplicate-charges",
        "title": "Separate safe retries from duplicate charges",
        "paragraphs": [
          "List the payment calls that create or change money, such as a charge, a refund, a capture, and a payout. Record which calls are safe to repeat and which must never run twice for the same intent. Note the provider endpoints that accept a client-supplied key. A retry rule that treats every call the same will eventually duplicate a charge.",
          "Write the definition of one payment intent and the record that represents it. Note the order, invoice, or subscription that the intent belongs to and the amount it authorizes. Record the state that means the intent is final and the states that may still be retried. The key is only meaningful when the intent behind it is defined."
        ]
      },
      {
        "id": "require-a-durable-idempotency-key-on-every-write",
        "title": "Require a durable idempotency key on every write",
        "paragraphs": [
          "Generate the key before the first provider call and store it with the payment intent. Record the key, the request body hash, the provider, and the creation time. Reuse that key for every retry of the same intent, including retries from a different worker. A key generated at retry time is a new request and defeats the protection.",
          "Store the key in durable storage that survives a process restart and a queue redelivery. Record the database row or table and the retention period. Note the rule for a key that is older than the provider retention window. A key held only in memory disappears exactly when a crash makes the retry necessary."
        ]
      },
      {
        "id": "record-the-key-lifecycle-and-the-conflict-behavior",
        "title": "Record the key lifecycle and the conflict behavior",
        "paragraphs": [
          "Write what happens when the provider reports a key conflict or returns the stored response for a repeated key. Record the fields the team compares before accepting the stored result, such as amount, currency, and customer. Note the path for a conflict that represents a different request with the same key. A conflict is a signal to stop and reconcile, not to generate a new key and try again.",
          "Record the retention and cleanup rule for keys and their responses. Note the period when a late retry could still match the original intent. Keep the key and the outcome together so support can answer a customer question. A key that is deleted before the provider forgets it creates a window for a duplicate."
        ]
      },
      {
        "id": "define-the-retry-and-reconciliation-window",
        "title": "Define the retry and reconciliation window",
        "paragraphs": [
          "Write the retry schedule with a maximum attempt count and a clear backoff. Record which error classes are retried, such as a timeout or a provider server error, and which are final, such as a declined card. Note the point when the system stops retrying and moves the intent to manual review. An uncapped retry loop can turn a provider delay into a flood.",
          "Write the reconciliation job that compares local payment state with the provider after a timeout. Record the interval, the matching key, and the person who reviews a mismatch. Note how the job handles a payment that succeeded at the provider but failed locally. Reconciliation is the control that catches the case the retry logic cannot see."
        ]
      },
      {
        "id": "test-duplicate-delivery-and-partial-failure",
        "title": "Test duplicate delivery and partial failure",
        "paragraphs": [
          "Run a test that sends the same request twice with the same key and confirm the provider returns one result. Record the response, the local state, and the customer-visible outcome. Note the worker that handled each request and the timing. A test that only checks the happy path does not exercise the protection.",
          "Simulate a timeout after the provider accepted the request and before the application stored the response. Record the reconciliation path and the final state of the intent. Repeat the test across a process restart and a queue redelivery. The rule is proven when the system recovers without a second charge."
        ]
      },
      {
        "id": "alert-on-duplicate-attempts-and-orphaned-keys",
        "title": "Alert on duplicate attempts and orphaned keys",
        "paragraphs": [
          "Alert when the same intent produces more than one provider request with different keys. Record the alert owner and the first evidence to collect. Note the dashboard that shows intent, key, and provider request together. A duplicate key alert that no one owns is only a log line.",
          "Alert on intents that have a key but no final state after the agreed window. Record the age threshold and the reconciliation owner. Note the customer message for a payment that is still pending. The alert should reach a person who can finish the reconciliation, not a shared queue."
        ]
      },
      {
        "id": "review-after-a-provider-or-flow-change",
        "title": "Review after a provider or flow change",
        "paragraphs": [
          "Review the rule when the provider changes its idempotency behavior, its retention window, or its error codes. Record the new behavior and the date of the change. Re-run the duplicate and timeout tests against the new behavior. A rule written for the old provider version can fail silently after an upgrade.",
          "Review the rule when a new payment method, currency, or checkout flow is added. Record the new intent shape and the key fields that must match. Note the test that proves the new flow is idempotent. New payment paths are where duplicate charges most often appear."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Writes to protect",
        "text": "List charge, refund, capture, and payout calls that change money."
      },
      {
        "label": "Key rule",
        "text": "Generate once per intent, store before the call, and reuse on every retry."
      },
      {
        "label": "Conflict rule",
        "text": "Compare amount and customer before accepting a stored response."
      },
      {
        "label": "Evidence",
        "text": "Keep the duplicate test, timeout test, and reconciliation output."
      }
    ],
    "faqs": [
      {
        "question": "Can the retry job generate a fresh key?",
        "answer": "No. A fresh key creates a new intent at the provider and can duplicate the charge."
      },
      {
        "question": "What if the provider stores the response but the app crashed?",
        "answer": "The reconciliation job must match the stored key and apply the provider outcome locally."
      },
      {
        "question": "Should a declined card be retried?",
        "answer": "Usually no. Classify final declines separately from timeouts and provider server errors."
      },
      {
        "question": "How long should keys be kept?",
        "answer": "Keep them at least as long as the provider retention window and the reconciliation period."
      }
    ],
    "sources": [
      {
        "name": "Stripe idempotent requests",
        "url": "https://docs.stripe.com/api/idempotent_requests",
        "note": "Key behavior, retention, and replay semantics."
      },
      {
        "name": "IETF Idempotency-Key header draft",
        "url": "https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/",
        "note": "A proposed cross-vendor idempotency header."
      },
      {
        "name": "PayPal idempotency",
        "url": "https://developer.paypal.com/api/rest/reference/idempotency/",
        "note": "How a second provider describes key reuse and conflicts."
      },
      {
        "name": "RFC 9110 HTTP semantics",
        "url": "https://www.rfc-editor.org/rfc/rfc9110.html",
        "note": "Method safety and idempotence definitions."
      }
    ],
    "heroImage": "/nov21/blog/write-a-payment-retry-idempotency-rule-for-an-outsourced-integration.webp"
  },
  "write-an-app-store-release-checklist-for-an-outsourced-mobile-lane": {
    "takeaways": [
      "Record the commit, build number, artifact, and checksum.",
      "Check policy, privacy, and permissions before submission.",
      "Keep signing keys and store accounts under client control.",
      "Write the rollout pause rule before the first install.",
      "Close the release with the review outcome and rollout history."
    ],
    "readinessRows": [
      {
        "area": "Build record",
        "ready": "Attach commit, build number, toolchain, artifact, and checksum.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Listing",
        "ready": "Record metadata, screenshots, privacy answers, and policy URLs.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Signing",
        "ready": "Name the key owner, expiry date, and client-controlled backup.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Rollout",
        "ready": "Set the percentage, pause thresholds, and revert path in advance.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "freeze-the-build-and-record-the-version",
        "title": "Freeze the build and record the version",
        "paragraphs": [
          "Freeze the release branch and record the commit, the build number, and the version name. Note the dependency lockfile and the toolchain versions used for the build. Keep the artifact and its checksum in a place the client can retrieve. A store release that cannot be rebuilt from a recorded commit is impossible to audit.",
          "Record the device and operating-system versions used for the release test. Note the features gated by the app version and the server version they require. Check that the store build points at the production API and not a staging host. A build with the wrong endpoint is the classic release failure that the checklist exists to catch."
        ]
      },
      {
        "id": "prepare-store-metadata-and-screenshots",
        "title": "Prepare store metadata and screenshots",
        "paragraphs": [
          "Record the title, subtitle, description, keywords, and category for each store listing. Note the screenshots and preview videos with their device sizes and the date captured. Check that the text matches the current feature set and the legal disclosures the client requires. Metadata that describes a removed feature invites a review rejection.",
          "Record the privacy questionnaire, data-collection disclosure, and tracking permission text. Note the account-deletion path and the support contact that the store requires. Check that the policy URLs resolve without a login. A listing that points at a stale privacy page can delay the whole release."
        ]
      },
      {
        "id": "confirm-signing-keys-and-entitlements",
        "title": "Confirm signing keys and entitlements",
        "paragraphs": [
          "Record which signing key and provisioning profile built the release and who holds the key. Note the certificate expiry date and the backup location under client control. Check that the entitlement list matches the features in the build. A signing key held by one contractor is a release risk that outlives the contract.",
          "Record the app identifier, bundle version, and any associated domains or push configuration. Note the store account owner and the role used to upload the build. Check that the upload account has the minimum role needed and that the client can revoke it. The release should not depend on a personal account nobody can recover."
        ]
      },
      {
        "id": "run-the-policy-checklist-before-submission",
        "title": "Run the policy checklist before submission",
        "paragraphs": [
          "Check the store rules that most often affect the product, such as payments, health claims, location use, and account deletion. Record the rule, the screen that satisfies it, and the person who verified it. Note the features that need a disclosure or an age rating. A policy check after submission turns a small fix into a review cycle.",
          "Check that every permission has a visible purpose string and a path that works when permission is denied. Note the screens that request background location, contacts, or notifications. Record the test result on a clean install. A permission prompt with no explanation is a common and avoidable rejection."
        ]
      },
      {
        "id": "stage-the-rollout-and-watch-the-first-days",
        "title": "Stage the rollout and watch the first days",
        "paragraphs": [
          "Choose the rollout percentage and record the reason and the owner who approved it. Note the crash-rate and support-ticket thresholds that pause the rollout. Keep the previous build available for a fast revert where the store supports it. A staged rollout is only useful when the pause rule is written before the release.",
          "Watch the first-day crash rate, startup time, and the top support contacts by version. Record the baseline from the previous version so the comparison has meaning. Note the store review status and the release time in each region. The first day is when a device-specific failure appears, not in the internal test pass."
        ]
      },
      {
        "id": "keep-a-rejection-and-hotfix-path-ready",
        "title": "Keep a rejection and hotfix path ready",
        "paragraphs": [
          "Record the reviewer contact, the store appeal path, and the evidence the team will send for a disputed rejection. Note the person who can authorize a resubmission and the customer message for a delay. Keep the build and metadata versions that were submitted. A rejection handled from memory loses the exact text that caused it.",
          "Write the hotfix rule for a release that must ship outside the normal train. Record the approver, the test scope, and the store review time the team expects. Note the rollback if the hotfix fails review. A hotfix path without a rollback is a second release risk stacked on the first."
        ]
      },
      {
        "id": "close-the-release-record",
        "title": "Close the release record",
        "paragraphs": [
          "Store the final build, the store listing version, the review outcome, and the rollout history in one release record. Record the date each store approved the build and the version that reached production. Note any policy warning that should be fixed before the next release. The record should answer what shipped, when, and to whom.",
          "Review the checklist after the release with the offshore mobile lead and the client owner. Record the steps that were skipped and the step that caught a real problem. Update the checklist with one change and an owner. A checklist that never changes after a release is a formality rather than a control."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Version freeze",
        "text": "Record the release commit, build number, and production endpoint check."
      },
      {
        "label": "Policy check",
        "text": "Match each store rule to a screen and a verifier before submission."
      },
      {
        "label": "Account control",
        "text": "Use a client-owned store account with the minimum upload role."
      },
      {
        "label": "Release record",
        "text": "Keep the submitted build, listing version, review outcome, and rollout."
      }
    ],
    "faqs": [
      {
        "question": "Who should own the signing key?",
        "answer": "The client should own and back up the key, with the delivery team granted the narrowest role it needs."
      },
      {
        "question": "Can the team skip the staged rollout?",
        "answer": "Only with a recorded reason and a faster pause rule, because a full release reaches every device at once."
      },
      {
        "question": "What if the store rejects the build?",
        "answer": "Use the recorded appeal path and the exact submitted metadata, then resubmit with the fix and a new build number."
      },
      {
        "question": "Do screenshots need to match every device?",
        "answer": "Match the sizes the store requires for the devices in the support matrix and date each capture."
      }
    ],
    "sources": [
      {
        "name": "Apple App Store Review Guidelines",
        "url": "https://developer.apple.com/app-store/review/guidelines/",
        "note": "The policy rules a submitted build must satisfy."
      },
      {
        "name": "Google Play Developer Policy Center",
        "url": "https://play.google.com/about/developer-content-policy/",
        "note": "Play policy areas including payments, privacy, and permissions."
      },
      {
        "name": "Apple provisioning and code signing",
        "url": "https://developer.apple.com/documentation/technotes/tn3125-inside-code-signing-provisioning-profiles",
        "note": "How profiles, entitlements, and signing keys relate."
      },
      {
        "name": "Android app signing",
        "url": "https://developer.android.com/studio/publish/app-signing",
        "note": "Key management and upload signing for Android releases."
      }
    ],
    "heroImage": "/nov21/blog/write-an-app-store-release-checklist-for-an-outsourced-mobile-lane.webp"
  },
  "set-a-ci-cache-invalidation-rule-for-an-outsourced-build-pipeline": {
    "takeaways": [
      "Inventory every cache and mark the ones that affect output.",
      "Key the cache to lockfile, toolchain, flags, and image.",
      "Write the purge triggers and the maximum cache age.",
      "Run a scheduled cold build to prove source-only recovery.",
      "Review keys after every toolchain or dependency change."
    ],
    "readinessRows": [
      {
        "area": "Inventory",
        "ready": "List each cache, its tool, owner, size, and retention.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Key inputs",
        "ready": "Record lockfile, toolchain, flags, image, and branch scope.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Purge rule",
        "ready": "Name the triggers, the operator, and the jobs to rerun.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Cold build",
        "ready": "Schedule and log a cache-disabled build with its duration.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "list-what-the-cache-actually-stores",
        "title": "List what the cache actually stores",
        "paragraphs": [
          "List every cache the pipeline uses, including package downloads, compiler output, test fixtures, and container layers. Record the tool, the storage location, and the person who can purge it. Note the size limit and the retention policy for each cache. A cache that nobody has listed cannot be invalidated on purpose.",
          "Separate a cache that only saves time from a cache that changes the build result. Record the caches that contain generated code, environment-specific binaries, or credentials. Mark those as sensitive and give them a stricter key and purge rule. A cache that silently changes output is a correctness risk, not a speed feature."
        ]
      },
      {
        "id": "key-the-cache-to-inputs-that-change-behavior",
        "title": "Key the cache to inputs that change behavior",
        "paragraphs": [
          "Write the key from the lockfile, the toolchain version, the build flags, and the operating-system image. Record which inputs the key covers and which it deliberately ignores. Note the branch or environment scope so a production build never restores a test cache. A key built only from the branch name will serve a stale compiler after an upgrade.",
          "Record the fallback order when an exact key is missing, such as a restore key that matches the lockfile prefix. Note the risk that a partial match restores incompatible output. Set the rule for when the pipeline must rebuild instead of restoring. A fallback that quietly uses an older cache hides the very change the build was testing."
        ]
      },
      {
        "id": "set-the-invalidation-and-purge-rule",
        "title": "Set the invalidation and purge rule",
        "paragraphs": [
          "Write the triggers that force a clean cache, such as a toolchain upgrade, a lockfile change, or a corrupted artifact report. Record who can purge the cache and how the purge is announced. Note the jobs that must rerun after a purge. An invalidation that happens only when someone remembers is not a rule.",
          "Record the maximum age for each cache and the cleanup job that enforces it. Note the storage cost and the effect on the slowest job. Keep the purge command in the pipeline documentation. A cache with no age limit grows until quota or cost forces an emergency cleanup."
        ]
      },
      {
        "id": "measure-hit-rate-and-rebuild-cost",
        "title": "Measure hit rate and rebuild cost",
        "paragraphs": [
          "Record the cache hit rate for each job and the time saved per hit. Note the jobs whose hit rate is low because the key changes too often. Compare the saved time with the cost of storing and restoring the cache. A cache that saves seconds but costs minutes to download is a net loss.",
          "Record the cold-build duration and the warm-build duration on the same runner class. Note the variance across runs and the jobs that dominate the total. Use the cold number to set the timeout and the patience of the team. A pipeline tuned only to warm builds will time out on the day the cache is empty."
        ]
      },
      {
        "id": "protect-secrets-and-artifacts-in-the-cache",
        "title": "Protect secrets and artifacts in the cache",
        "paragraphs": [
          "Check that no cache contains tokens, credentials, or customer data from a test run. Record the scan that looks for secrets and the owner who responds to a finding. Note the caches that are shared across repositories or teams. A poisoned or leaky cache spreads farther than the job that created it.",
          "Record which build artifacts must never come from a cache, such as a signed release or a published container image. Note the step that re-creates the artifact from source for a release. Keep the provenance record for the artifact that ships. A release is not reproducible when its binary came from an untrusted cache."
        ]
      },
      {
        "id": "prove-a-cold-build-on-a-schedule",
        "title": "Prove a cold build on a schedule",
        "paragraphs": [
          "Run a scheduled cold build with the cache disabled and record the result. Note the duration, the failing step, and the dependency that was only present in the cache. Fix the pipeline rather than the cache when the cold build fails. A cold build that nobody runs is discovered during an incident.",
          "Record the date of the last cold build and the owner who reviewed it. Note the jobs excluded from the test and the reason. Keep the cold-build log beside the cache configuration. The evidence should show that the pipeline can rebuild the product from source alone."
        ]
      },
      {
        "id": "review-the-cache-when-dependencies-change",
        "title": "Review the cache when dependencies change",
        "paragraphs": [
          "Review the keys when a package manager, compiler, or base image changes. Record the new input and the date the key changed. Purge the old cache and run the cold build against the new toolchain. A key that was correct last quarter may restore incompatible output after an upgrade.",
          "Review the cache list when a new service or job joins the pipeline. Record the new cache, its owner, and its size budget. Note the jobs that share a key by mistake. The review keeps the cache inventory aligned with the pipeline it serves."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Cache map",
        "text": "Separate speed-only caches from caches that can change the build result."
      },
      {
        "label": "Key rule",
        "text": "Include the lockfile, toolchain, build flags, and runner image."
      },
      {
        "label": "Safety",
        "text": "Scan for secrets and never restore a signed release from cache."
      },
      {
        "label": "Proof",
        "text": "Keep the cold-build log and the date of the last review."
      }
    ],
    "faqs": [
      {
        "question": "Is a high hit rate always good?",
        "answer": "No. A high rate on a stale key can hide a toolchain change, so pair the metric with a cold-build check."
      },
      {
        "question": "Who should be allowed to purge the cache?",
        "answer": "A named pipeline owner with a recorded reason, because an unexplained purge slows every team that shares it."
      },
      {
        "question": "Can release artifacts come from the cache?",
        "answer": "No. Rebuild and sign the release from source, then record the provenance of the shipped artifact."
      },
      {
        "question": "How often should the cold build run?",
        "answer": "At least once per release cycle and after any change to the cache key or the runner image."
      }
    ],
    "sources": [
      {
        "name": "GitHub Actions dependency caching",
        "url": "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows",
        "note": "Cache keys, restore keys, and scope behavior."
      },
      {
        "name": "Docker build cache",
        "url": "https://docs.docker.com/build/cache/",
        "note": "Layer cache invalidation and cache backends."
      },
      {
        "name": "npm ci",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-ci",
        "note": "Clean installs from a lockfile for reproducible dependency state."
      },
      {
        "name": "Turborepo caching",
        "url": "https://turborepo.com/docs/crafting-your-repository/caching",
        "note": "Task hashing and remote cache inputs."
      }
    ],
    "heroImage": "/nov21/blog/set-a-ci-cache-invalidation-rule-for-an-outsourced-build-pipeline.webp"
  }
};
