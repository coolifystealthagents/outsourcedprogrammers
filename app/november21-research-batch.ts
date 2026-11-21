import type { ResearchPost } from './fleet-content';

export const november21ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-outsourced-query-tickets-change-an-index-without-a-rollback-plan",
    "title": "How often do outsourced query tickets change an index without a rollback plan?",
    "excerpt": "A protocol for counting index changes, dating the evidence, and separating a tested rollback from a migration that cannot be reversed.",
    "topic": "Index change evidence",
    "published": "2026-11-21",
    "hero": "/nov21/research/how-often-do-outsourced-query-tickets-change-an-index-without-a-rollback-plan.webp",
    "body": [
      "This protocol measures how often a query performance ticket changes a database index without a tested rollback plan in an outsourced delivery lane. The unit is one index change attached to one ticket at the observation date. A rollback plan means a written, tested statement that removes the change and restores the prior behavior. The study describes change evidence, not the skill of the database engineer.",
      "Define the repositories, databases, and ticket systems in scope before collection. Include migrations, console changes, and scripts that create or drop an index. Record the engine and version for each database. Publish the scope with a version so a later reviewer can reproduce it.",
      "Define an index change by the table, the columns, the index type, and the migration or console action that applied it. Record the ticket, the environment, and the date. Note whether the change also altered a query, a statistic, or a configuration value. Test the definition on the first five tickets.",
      "Set the population as every index change attached to a finished ticket in the agreed window. Include changes that were later reverted and changes applied directly in a console. Record the changes that could not be inspected and the reason. Report them separately from changes that failed the rollback test.",
      "Classify each change by rollback evidence. Use categories such as tested rollback with a recorded statement, written rollback never tested, rollback omitted, and no record. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the before and after execution plans were captured with a production-sized data set. Note the read and write measurements and the date they were taken. Record the named owner and the reviewer who approved the migration. A plan captured on an empty table does not support a production claim.",
      "Report the number of index changes, the number with a tested rollback, and the number in each category. Show counts by engine and by table size band. Present the changes with no record and the changes with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate an untested rollback from an omitted one. An untested rollback has a statement but no evidence, while an omitted rollback has neither. Report the two categories separately because the fixes differ. Record the missing step and the date beside each finding.",
      "Inspect the changes written during a compressed release or after a contractor handover. A cluster of untested rollbacks may mean the migration checklist never covered index reversal. Compare the pattern with the ticket calendar and the repository history. A single omission can be an oversight, while a cluster is a process gap.",
      "Do not treat a successful migration as proof that the index can be removed. A drop that blocks writes or leaves a dependent query slow is not a safe rollback. Check that the rollback runs on a copy and that the old plan returns. Report the difference between an applied change and a reversible one.",
      "The record cannot show whether the index improved the customer experience or whether a later query regressed. It can show only whether a written rollback existed and was tested. A missing rollback is not proof of an incident, and a tested one is not proof of good performance. The protocol also cannot see an index created outside the tracked systems.",
      "A useful additional view is the time from the ticket opening to the first production measurement. Record the wait for a data set, a window, or an approval. That field turns a yes-or-no count into a review of where the evidence was delayed. Report the slowest step beside the total.",
      "Record whether the change was built concurrently where the engine allows it. Note the lock mode and the build duration at production size. Report the changes that required a blocking build without a recorded window. A rollback is harder when the original build already caused an outage.",
      "Check the index register for duplicate or overlapping indexes on the same table. A new index that repeats an existing prefix adds write cost without a new plan. Record the overlap and the owner who accepted it. Report the tables whose index count grew without a matching query change.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a rollback template, a plan-capture step, a production-size measurement, or a review gate. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest untested or omitted group, not the easiest ticket to document. Record the expected effect and the evidence that will prove it. An index policy that is never audited is a document, not a control.",
      "Build the sample from migrations and database audit logs, not from the tickets the team remembers. Search for index creation and deletion statements, including one-off scripts outside the migration folder. Record how each change entered the sample. The forgotten console change is often the one with no rollback.",
      "Use two evidence sources for each change, such as the migration file and the database catalog. The file proves the intent, while the catalog proves the index exists. Compare them on the same date. A file that was never applied is not a change, and a catalog entry with no file is a finding.",
      "Changes from recent incidents are overrepresented because they were discussed. Include a quiet change from last quarter and one that is still pending. Record the last review date. A quiet index can still hold storage and write cost that nobody measured.",
      "Record the database role used to apply the change and whether it could alter schema as well as data. A role with broader permission than the ticket requires is a separate finding. Note the approval for that role. Report the changes that used a role the client did not intend.",
      "Report the result by table write rate as well as by count. An index on a table with heavy writes carries more risk than one on a read-mostly reference table. Record the write rate band beside the finding. The reader should see which missing rollback could hurt the busiest path.",
      "Repeat the measure after the first round of fixes and keep the definitions unchanged. A move from no rollback to a tested one is progress, but it is not yet a habit. Compare the next window with the same categories. The trend matters more than a single ticket.",
      "Check whether the ticket recorded the query frequency and the expected saving. A change with no frequency estimate cannot be prioritized against another slow query. Record the estimate and the measured result. Report the tickets whose claimed gain was never checked.",
      "Treat the protocol as a review of change planning, not a judgment of the engineer who wrote the migration. An untested rollback often means the release calendar had no room for a copy. Ask what would have made the test possible. The answer points to the constraint to remove.",
      "Keep the index evidence with the release and audit record so a reviewer can connect the change to a real plan and measurement. Record the data-set date, the before and after plans, and the rollback output. A change that cannot be tied to a measurement is only a preference. The record should survive a change of delivery lead.",
      "Set a rule that no index reaches production without a before plan, a write-cost measurement, and a tested drop statement. Write the rule into the delivery agreement and the migration checklist. Record the exception process and the approver. The rule turns a good intention into a gate that can be checked."
    ],
    "takeaways": [
      "Count one index change per finished ticket and database.",
      "Require a tested drop statement, not only a written one.",
      "Measure read and write cost at production data size.",
      "Report overlapping indexes as a separate finding.",
      "Re-measure after the first round of rollback fixes."
    ],
    "sources": [
      [
        "PostgreSQL CREATE INDEX",
        "https://www.postgresql.org/docs/current/sql-createindex.html"
      ],
      [
        "PostgreSQL DROP INDEX",
        "https://www.postgresql.org/docs/current/sql-dropindex.html"
      ],
      [
        "MySQL EXPLAIN output",
        "https://dev.mysql.com/doc/refman/8.0/en/explain-output.html"
      ],
      [
        "Use The Index, Luke",
        "https://use-the-index-luke.com/"
      ]
    ],
    "related": [
      "set-a-database-index-review-rule-for-outsourced-query-tickets",
      "how-complete-is-migration-rollback-evidence-before-release"
    ]
  },
  {
    "slug": "what-share-of-offshore-frontend-handoffs-name-a-browser-support-matrix",
    "title": "What share of offshore frontend handoffs name a browser support matrix?",
    "excerpt": "A protocol for counting frontend handoffs, dating the browser evidence, and separating a written matrix from a support claim nobody tested.",
    "topic": "Browser support coverage",
    "published": "2026-11-21",
    "hero": "/nov21/research/what-share-of-offshore-frontend-handoffs-name-a-browser-support-matrix.webp",
    "body": [
      "This protocol measures the share of frontend handoffs that name a browser support matrix in an offshore delivery lane. The unit is one frontend handoff at the observation date. A matrix means a written list of browser families, oldest versions, support tiers, and dated evidence. The study describes handoff documentation, not the quality of the frontend code.",
      "Define the repositories and handoff documents in scope before collection. Include design-system repositories, application frontends, and the acceptance records attached to them. Record the client and the delivery pod for each. Publish the scope with a version so a later reviewer can reproduce it.",
      "Define a handoff by the code scope, the design version, the acceptance criteria, and the named reviewer. Record the date the receiving team started work. Note whether the handoff includes a link to a browser policy. Test the definition on the first three handoffs.",
      "Set the population as every frontend handoff in the agreed window. Include handoffs that were later paused and handoffs with no written acceptance. Record the handoffs that could not be inspected and the reason. Report them separately from handoffs that failed the evidence check.",
      "Classify each handoff by browser evidence. Use categories such as a dated matrix with per-tier evidence, a written list without dated tests, a verbal or chat reference, and no browser policy. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record whether the matrix names the operating systems and device classes, not only the browser names. Note the assistive-technology requirement where the client has one. Record the owner, the version, and the last review date. A matrix with no owner is a snapshot that will age without notice.",
      "Report the number of handoffs, the number with a dated matrix, and the number in each category. Show counts by application and by client. Present the handoffs with no policy and the handoffs with an untested list as separate rows. Use the same denominator for every rate.",
      "Separate a missing matrix from an untested one. A missing matrix has no list, while an untested matrix has a list and no evidence. Report the two categories separately because the fixes differ. Record the missing evidence and the date beside each finding.",
      "Inspect the handoffs that followed a design-system upgrade or a framework change. A cluster of missing matrices may mean the template never carried the browser section. Compare the pattern with the release calendar and the repository history. A single omission can be an oversight, while a cluster is a template gap.",
      "Do not treat a successful build as proof of browser support. A bundle can compile and still fail on an older rendering engine. Check that a real test or a dated screenshot exists for each full-support entry. Report the difference between a build target and a tested browser.",
      "The record cannot show whether a customer on an unsupported browser had a broken experience. It can show only whether the handoff named a policy and the evidence behind it. A missing matrix is not proof of a defect, and a written one is not proof of coverage. The protocol also cannot see a browser policy agreed in a call and never written down.",
      "A useful additional view is the age of the oldest dated test in each matrix. A matrix tested two years ago describes a different web platform. Record the test date and the browser version. Report the handoffs whose evidence is older than the support window.",
      "Record whether the matrix names the features that may degrade and the fallback the team accepts. Note the owner who approved each fallback. Check that the fallback is written beside the browser tier rather than in a separate note. Report the handoffs that list a browser name without saying what functional support means.",
      "Check whether the acceptance criteria require a browser check before a ticket closes. A matrix that is not tied to review is easy to ignore. Record the checklist item and the reviewer. Report the handoffs whose definition of done has no browser step.",
      "Give the result to the client design owner and the offshore delivery lead with one observable change. The change might be a matrix template, a dated evidence column, a fallback approval, or a review checklist item. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest missing or untested group, not the easiest page to screenshot. Record the expected effect and the evidence that will prove it. A support claim that is never tested is a preference, not a contract.",
      "Build the sample from handoff repositories and acceptance records, not from the slides the team remembers. Search for browser, support, and device terms across the documents. Record how each handoff entered the sample. The forgotten document is often the one with no owner.",
      "Use two evidence sources for each matrix, such as the written list and a dated test run. The list proves the intent, while the run proves the browser was exercised. Compare them on the same version. A list with no run is a plan rather than coverage.",
      "Handoffs with recent incidents are overrepresented because they were discussed. Include a quiet handoff from last quarter and one that is still in progress. Record the last review date. A quiet handoff can still carry a browser policy that no longer matches the traffic.",
      "Record the traffic source and the export date used to set the browser floor. A floor chosen from a vendor default can exclude customers the client still serves. Note the export owner. Report the handoffs whose floor cannot be traced to data.",
      "Report the result by customer journey as well as by count. A checkout flow and an internal admin page do not carry the same browser risk. Record the journey beside the finding. The reader should see which gap could block revenue first.",
      "Repeat the measure after the first matrix template lands and keep the categories unchanged. A move from no policy to a written list is progress, but it is not yet coverage. Compare the next window with the same definitions. The trend matters more than a single handoff.",
      "Check whether the matrix is linked from the code repository and the acceptance record. A policy stored only in a shared drive is easy to miss during a ticket. Record the link and the person who maintains it. Report the handoffs whose policy cannot be found from the work.",
      "Treat the protocol as a review of handoff documentation, not a judgment of the frontend engineers. A missing matrix often means the client never stated the support requirement. Ask who owns the browser policy. The answer usually names the missing agreement rather than a careless developer.",
      "Keep the matrix evidence with the handoff record so a reviewer can connect a support claim to a real test. Record the browser versions, the device, and the date. A claim that cannot be tied to evidence is only an assumption. The record should survive a change of delivery lead.",
      "Set a rule that no frontend handoff is accepted without a browser matrix, a dated test per full-support tier, and a named owner. Write the rule into the delivery agreement and the review checklist. Record the exception process and the approver. The rule turns a good intention into a check that can be verified."
    ],
    "takeaways": [
      "Count one frontend handoff per application and client.",
      "Separate a missing matrix from an untested one.",
      "Require dated evidence for every full-support tier.",
      "Tie the matrix to the definition of done and review.",
      "Re-measure after the first template lands."
    ],
    "sources": [
      [
        "MDN browser compatibility data",
        "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables"
      ],
      [
        "Can I use",
        "https://caniuse.com/"
      ],
      [
        "web.dev Baseline",
        "https://web.dev/baseline"
      ],
      [
        "W3C Web Content Accessibility Guidelines",
        "https://www.w3.org/WAI/standards-guidelines/wcag/"
      ]
    ],
    "related": [
      "write-a-browser-support-matrix-for-an-outsourced-frontend-handoff",
      "write-a-definition-of-done-for-outsourced-accessibility-fixes"
    ]
  },
  {
    "slug": "what-share-of-outsourced-payment-retries-are-idempotent",
    "title": "What share of outsourced payment retries are idempotent?",
    "excerpt": "A protocol for counting payment intents, dating the retry evidence, and separating a durable key from a retry that can duplicate a charge.",
    "topic": "Payment retry idempotency",
    "published": "2026-11-21",
    "hero": "/nov21/research/what-share-of-outsourced-payment-retries-are-idempotent.webp",
    "body": [
      "This protocol measures the share of payment retries that are protected by idempotency in an outsourced integration lane. The unit is one payment intent and its retry path at the observation date. Idempotent means the same intent can be retried without creating a second charge. The study describes retry evidence, not the reliability of the payment provider.",
      "Define the payment endpoints and flows in scope before collection. Include charges, captures, refunds, payouts, and any call that moves money. Record the provider and the SDK version for each. Publish the scope with a version so a later reviewer can reproduce it.",
      "Define a payment intent by the order, invoice, or subscription, the amount, the currency, and the customer. Record the state that means the intent is final. Note the provider request that creates or changes money. Test the definition on the first five intents.",
      "Set the population as every payment intent that had at least one retry in the agreed window. Include intents retried by a queue, a worker restart, and a manual support action. Record the intents that could not be inspected and the reason. Report them separately from intents that failed the duplicate test.",
      "Classify each intent by idempotency evidence. Use categories such as a durable key with a duplicate test, a key without a test, a key generated at retry time, and no key. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record where the key is stored and whether it survives a process restart. Note the provider retention window and the local retention rule. Record the person who owns the integration and the person who owns reconciliation. A key in memory is not a key after a crash.",
      "Report the number of intents, the number with a durable tested key, and the number in each category. Show counts by payment method and by provider. Present the intents with no key and the intents with a failed test as separate rows. Use the same denominator for every rate.",
      "Separate an untested key from a key generated too late. An untested key has no evidence, while a late key is created after the first call and cannot protect the retry. Report the two categories separately because the fixes differ. Record the code path and the date beside each finding.",
      "Inspect the intents that failed during a provider incident or a worker deploy. A cluster of duplicate attempts may mean the retry policy ignores the key. Compare the pattern with the incident timeline and the deploy history. A single duplicate can be a race, while a cluster is a design gap.",
      "Do not treat a provider error as proof that the charge failed. A timeout can leave the charge in an unknown state while the application retries. Check the reconciliation job and the provider lookup by key. Report the intents whose local state was set without a provider confirmation.",
      "The record cannot show whether a customer was charged twice or whether a refund was delayed. It can show only whether the intent carried a durable key and passed a duplicate test. A missing key is not proof of a duplicate charge, and a key is not proof that reconciliation ran. The protocol also cannot see a manual action in the provider dashboard.",
      "A useful additional view is the time from the first provider timeout to the reconciliation result. Record the attempt count, the key, and the final state. That field turns a yes-or-no count into a review of how long a customer waited. Report the slowest intent beside the total.",
      "Record whether a key conflict is handled as a stop-and-reconcile signal. A team that generates a new key on conflict defeats the protection. Note the code path and the alert. Report the intents whose conflict path created a new key.",
      "Check the alerting for duplicate attempts and orphaned intents. A retry policy without an alert can duplicate a charge quietly. Record the threshold, the owner, and the first evidence to collect. Report the flows whose duplicate signal reaches no person.",
      "Give the result to the client finance owner and the offshore delivery lead with one observable change. The change might be a key store, a conflict rule, a reconciliation job, or a duplicate alert. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unkeyed or late-key group, not the easiest intent to document. Record the expected effect and the evidence that will prove it. A retry rule that is never tested is a hope, not a control.",
      "Build the sample from provider request logs and application intent records, not from the integration guide. The guide shows the intended flow, while the logs show the calls that happened. Compare the two and record the intents that appear in only one source. The mismatches are often the manual retries and the queue redeliveries.",
      "Use two evidence sources for each intent, such as the stored key and the provider response. The key proves the intent was identified, while the response proves the provider deduplicated the call. Compare them on the same clock. A key with no provider record is only a local intention.",
      "Intents from recent incidents are overrepresented because they were investigated. Include an intent from a quiet week and one created by a new payment method. Record the last test date. A quiet flow can still carry a key generated in the wrong place.",
      "Record the provider account and mode used in the test, such as sandbox or production. A duplicate test that ran only in sandbox does not prove production behavior. Note the test data and the date. Report the intents whose evidence comes from a different mode.",
      "Report the result by money impact as well as by count. A charge and a small refund do not carry the same exposure. Record the amount band beside the finding. The reader should see which gap could cost the most.",
      "Repeat the measure after the first key store lands and keep the categories unchanged. A move from no key to a stored key is progress, but it is not yet a tested retry. Compare the next window with the same definitions. The trend matters more than a single flow.",
      "Check whether the reconciliation job runs on a schedule and records its matches. A job that exists but never records a result cannot prove the intent was checked. Record the schedule and the last run. Report the intents whose reconciliation output is missing.",
      "Treat the protocol as a review of retry design, not a judgment of the integration engineer. A missing key often means the provider's behavior was never tested under timeout. Ask what evidence the team had before the flow shipped. The answer points to the missing test rather than a careless developer.",
      "Keep the key evidence with the release and finance record so a reviewer can connect a retry to a real provider request. Record the intent, the key, the response, and the reconciliation result. A claim that cannot be tied to a provider record is only an assumption. The record should survive a change of delivery lead.",
      "Set a rule that no money-moving call ships without a durable key, a conflict rule, and a duplicate test in the provider mode that will run in production. Write the rule into the delivery agreement and the release checklist. Record the exception process and the approver. The rule turns a good intention into a gate that can be checked."
    ],
    "takeaways": [
      "Count one payment intent per retry path and provider.",
      "Require a key stored before the first provider call.",
      "Separate an untested key from a key generated too late.",
      "Prove the rule with a timeout and a redelivery test.",
      "Re-measure after the first key store lands."
    ],
    "sources": [
      [
        "Stripe idempotent requests",
        "https://docs.stripe.com/api/idempotent_requests"
      ],
      [
        "IETF Idempotency-Key header draft",
        "https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/"
      ],
      [
        "PayPal idempotency",
        "https://developer.paypal.com/api/rest/reference/idempotency/"
      ],
      [
        "RFC 9110 HTTP semantics",
        "https://www.rfc-editor.org/rfc/rfc9110.html"
      ]
    ],
    "related": [
      "write-a-payment-retry-idempotency-rule-for-an-outsourced-integration",
      "how-often-do-third-party-api-outages-reach-an-offshore-support-queue-without-a-fallback"
    ]
  },
  {
    "slug": "how-much-time-do-outsourced-ci-pipelines-lose-to-cold-caches",
    "title": "How much time do outsourced CI pipelines lose to cold caches?",
    "excerpt": "A protocol for counting cache-miss builds, timing the rebuild, and separating a cold cache from a pipeline that never used one correctly.",
    "topic": "CI cache performance",
    "published": "2026-11-21",
    "hero": "/nov21/research/how-much-time-do-outsourced-ci-pipelines-lose-to-cold-caches.webp",
    "body": [
      "This protocol measures how much build time an outsourced delivery lane loses when its CI caches are cold. The unit is one pipeline run on one job at the observation date. A cold cache means the run restored no usable cache and rebuilt the dependencies or artifacts from source. The study describes pipeline timing, not the productivity of the engineering team.",
      "Define the pipelines and jobs in scope before collection. Include package installs, compilation, test setup, and container builds. Record the runner class and the cache backend for each. Publish the scope with a version so a later reviewer can reproduce it.",
      "Define a cold run by the cache key, the restore result, and the steps that executed from source. Record the job, the commit, and the trigger. Note whether the run was a pull request, a merge, or a scheduled build. Test the definition on the first ten runs.",
      "Set the population as every pipeline run in the agreed window. Include runs that hit the cache, runs that missed, and runs that were cancelled after the build step. Record the runs that could not be inspected and the reason. Report them separately from runs that failed the cold-build test.",
      "Classify each run by cache evidence. Use categories such as full hit, partial restore, clean miss, and cache disabled. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record the job duration, the time spent restoring the cache, and the time spent rebuilding. Note the download size and the runner's network class. Record the named pipeline owner and the cache size budget. A restore that takes longer than the rebuild is a net loss.",
      "Report the number of runs, the number that were cold, and the median and slowest cold duration. Show counts by job and by trigger type. Present the clean misses and the disabled-cache runs as separate rows. Use the same denominator for every rate.",
      "Separate a cold cache caused by a key change from one caused by an expiry or a failed store. A key change may be correct, while an expiry is a policy problem. Report the two categories separately because the fixes differ. Record the trigger and the date beside each finding.",
      "Inspect the runs around a toolchain upgrade or a lockfile change. A cluster of cold builds may be expected, while a cluster with no change is a cache defect. Compare the pattern with the dependency history and the runner image updates. A single miss can be normal, while a cluster is a gap.",
      "Do not treat a long build as proof that the cache is cold. A cold run can be fast on a small project, and a warm run can be slow on a large one. Compare the same job and commit range across runs. Report the difference between a slow pipeline and a missing cache.",
      "The record cannot show whether the delay blocked a release or whether an engineer waited idle. It can show only the time spent rebuilding when a cache was unavailable. A cold build is not proof of waste, and a warm build is not proof of correctness. The protocol also cannot see a local build that bypassed the pipeline.",
      "A useful additional view is the share of cold time spent on each dependency group. Record the package manager, the compiler, and the image layer. That field turns a total into a review of which cache is worth fixing first. Report the largest group beside the total.",
      "Record whether the pipeline still passes when the cache is disabled. A fast pipeline that depends on a stale cache can hide a missing dependency. Note the last cold-build result and its date. Report the jobs that have never run without a cache.",
      "Check the cache key for the lockfile, toolchain, flags, and runner image. A key that omits one input restores the wrong output after a change. Record the key inputs and the owner. Report the jobs whose key cannot be traced to those inputs.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a key input, a size budget, a scheduled cold build, or a restore timeout. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest cold-time group, not the easiest job to adjust. Record the expected effect and the evidence that will prove it. A cache policy that is never measured is a guess about last quarter's pipeline.",
      "Build the sample from pipeline logs and cache service records, not from the build script. The script shows the intended steps, while the logs show the time each step consumed. Compare the two and record the jobs that appear in only one source. The mismatches are often the restore steps that fail silently.",
      "Use two evidence sources for each run, such as the pipeline log and the cache hit record. The log proves the step ran, while the cache record proves whether a restore happened. Compare them on the same clock. A log without a cache record is hard to classify.",
      "Runs around a release are overrepresented because they are watched. Include a routine pull-request run and a nightly job. Record the trigger and the branch. A nightly job often carries the worst cold-cache cost because nobody waits for it.",
      "Record the runner image version and the toolchain version for each job. A new image can invalidate every cache without a code change. Note the date of the image update and the owner. Report the jobs whose cold runs started on an image update day.",
      "Report the result by wall-clock time and by engineer wait time as well as by count. A nightly cold build costs machine time, while a pull-request cold build costs a person waiting. Record the difference beside the finding. The reader should see which delay matters most.",
      "Repeat the measure after the first key fix and keep the categories unchanged. A drop in clean misses is progress, but it is not yet a stable pipeline. Compare the next window with the same definitions. The trend matters more than a single release.",
      "Check whether the cache stores secrets or production data. A cache that leaks credentials is a security finding even when the timing is good. Record the scan result and the owner. Report the jobs whose cache has never been inspected.",
      "Treat the protocol as a review of pipeline design, not a judgment of the engineers who wait on it. A cold cache often means the key was copied from a template without the toolchain input. Ask who owns the pipeline file. The answer points to the missing review rather than a slow team.",
      "Keep the cache evidence with the pipeline configuration so a reviewer can connect a delay to a real key change. Record the key, the restore result, and the job duration. A claim that cannot be tied to a run is only an impression. The record should survive a change of pipeline owner.",
      "Set a rule that every cache key names its inputs and every release cycle includes one cache-disabled build. Write the rule into the pipeline documentation and the release checklist. Record the exception process and the approver. The rule turns a good intention into a check that can be verified."
    ],
    "takeaways": [
      "Count one pipeline run per job and trigger type.",
      "Separate a key change from an expiry or failed store.",
      "Compare cold and warm duration on the same job class.",
      "Run a cache-disabled build every release cycle.",
      "Re-measure after the first key fix lands."
    ],
    "sources": [
      [
        "GitHub Actions dependency caching",
        "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows"
      ],
      [
        "Docker build cache",
        "https://docs.docker.com/build/cache/"
      ],
      [
        "npm ci",
        "https://docs.npmjs.com/cli/v10/commands/npm-ci"
      ],
      [
        "Turborepo caching",
        "https://turborepo.com/docs/crafting-your-repository/caching"
      ]
    ],
    "related": [
      "set-a-ci-cache-invalidation-rule-for-an-outsourced-build-pipeline",
      "how-often-does-an-offshore-release-wait-on-client-approval"
    ]
  },
  {
    "slug": "how-often-do-offshore-scheduled-jobs-cross-a-timezone-boundary-without-a-contract",
    "title": "How often do offshore scheduled jobs cross a timezone boundary without a contract?",
    "excerpt": "A protocol for counting scheduled jobs, dating the timezone evidence, and separating a written schedule contract from a cron line that depends on server defaults.",
    "topic": "Job timezone contracts",
    "published": "2026-11-21",
    "hero": "/nov21/research/how-often-do-offshore-scheduled-jobs-cross-a-timezone-boundary-without-a-contract.webp",
    "body": [
      "This protocol measures how often a scheduled job crosses a timezone or daylight-saving boundary without a written schedule contract in an offshore maintenance lane. The unit is one scheduled job at the observation date. A contract means a written statement of the intended local time, the reference zone, and the behavior when the clock shifts. The study describes schedule evidence, not the reliability of the job code.",
      "Define the schedulers and job definitions in scope before collection. Include cron entries, cloud scheduler jobs, workflow timers, and application-level schedulers. Record the runtime and the host timezone for each. Publish the scope with a version so a later reviewer can reproduce it.",
      "Define a job by its name, schedule expression, reference zone, and the business event it supports. Record the owner and the environment. Note whether the expression is interpreted in the server zone or a named zone. Test the definition on the first five jobs.",
      "Set the population as every recurring job in the agreed systems on the observation date. Include jobs that have never run in the window and jobs that are paused. Record the jobs that could not be inspected and the reason. Report them separately from jobs that failed the boundary test.",
      "Classify each job by schedule evidence. Use categories such as a written contract with a named zone, a contract without a daylight-saving rule, a server-default schedule, and no documentation. Do not merge the categories after seeing the result. The categories point to different fixes.",
      "Record the host or scheduler timezone and whether it can change without the team knowing. Note the jobs that run in a region with daylight saving and the jobs that do not. Record the owner and the backup who can change the schedule. A job owned by nobody is a job nobody will notice when it shifts.",
      "Report the number of jobs, the number with a written contract, and the number in each category. Show counts by scheduler and by business process. Present the server-default jobs and the failed boundary tests as separate rows. Use the same denominator for every rate.",
      "Separate a missing contract from a contract that ignores daylight saving. A missing contract has no stated zone, while a daylight gap has a contract that did not consider the shift. Report the two categories separately because the fixes differ. Record the date and the affected run beside each finding.",
      "Inspect the jobs that run near midnight, month end, or quarter end. A job scheduled close to a boundary is more likely to run twice or skip when the clock changes. Compare the pattern with the business calendar and the incident history. A single missed run can be a host issue, while a cluster is a schedule design gap.",
      "Do not treat a passing run as proof that the schedule is correct. A job can run at the wrong local hour and still succeed. Check the intended business time against the actual run time on a daylight-saving transition day. Report the difference between a successful run and an on-time run.",
      "The record cannot show whether a late run delayed a report or whether a duplicate run charged a customer. It can show only whether a written contract existed and the boundary behavior was tested. A missing contract is not proof of an incident, and a written one is not proof of correct timing. The protocol also cannot see a manual run outside the scheduler.",
      "A useful additional view is the number of runs that duplicate or skip on the transition day. Record the job, the intended local time, and the observed runs. That field turns a yes-or-no count into a review of customer-visible effects. Report the jobs with the largest gap between intended and observed runs.",
      "Record whether the schedule uses a named timezone such as a region identifier rather than a fixed offset. A fixed offset drifts by an hour when the zone shifts. Note the library or platform setting that interprets it. Report the jobs that depend on a fixed offset across a daylight boundary.",
      "Check the alerting for a missed run and a duplicate run. A scheduler that never signals a skipped job leaves the failure to a customer report. Record the threshold, the channel, and the owner. Report the jobs whose failure reaches no person.",
      "Give the result to the client operations owner and the offshore delivery lead with one observable change. The change might be a named zone, a daylight rule, a duplicate guard, or a missed-run alert. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest missing or daylight-ignorant group, not the easiest job to edit. Record the expected effect and the evidence that will prove it. A schedule that is never tested at the boundary is a guess about the clock.",
      "Build the sample from scheduler exports and job repositories, not from the runbook the team remembers. The export shows the configured expression, while the repository shows the intended business time. Compare the two and record the jobs that appear in only one source. The mismatches are often the oldest cron entries.",
      "Use two evidence sources for each job, such as the schedule definition and the run history around a transition. The definition proves the intent, while the history proves the actual time. Compare them on the same clock. A definition without a transition run is only a plan.",
      "Jobs around a release or a finance close are overrepresented because they are watched. Include a quiet reporting job and one that was added last sprint. Record when the job entered service. A new job often inherits a default zone from the host.",
      "Record the business calendar and the reference zone the client uses. A client that reports in one zone and schedules in another needs the contract to say which one wins. Note the owner who confirms the choice. Report the jobs whose intended zone cannot be traced to the client.",
      "Report the result by business process as well as by count. A payroll job and a cache refresh do not carry the same consequence. Record the process beside the finding. The reader should see which schedule gap would hurt first.",
      "Repeat the measure after the first contract lands and keep the categories unchanged. A move from a server default to a written zone is progress, but it is not yet a tested boundary. Compare the next daylight transition with the same definitions. The trend matters more than a single job.",
      "Check whether the job has a duplicate guard for the case when the scheduler fires twice. A guard that uses a date key can fail when the local date differs from the server date. Record the guard and the key. Report the jobs whose guard depends on a local clock.",
      "Treat the protocol as a review of schedule documentation, not a judgment of the maintenance engineer. A missing contract often means the job was copied from an old host without a zone decision. Ask who owns the business time. The answer usually names the missing agreement rather than a careless developer.",
      "Keep the schedule evidence with the job repository and the operations record so a reviewer can connect a run to a real business time. Record the expression, the zone, the transition test, and the observed runs. A claim that cannot be tied to a run is only an assumption. The record should survive a change of delivery lead.",
      "Set a rule that every scheduled job names its reference zone, its daylight behavior, and its missed-run owner. Write the rule into the delivery agreement and the operations checklist. Record the exception process and the approver. The rule turns a good intention into a check that can be verified."
    ],
    "takeaways": [
      "Count one scheduled job per scheduler and business process.",
      "Require a named zone, not a fixed offset or host default.",
      "Test both the spring and autumn transition runs.",
      "Separate a missing contract from a daylight gap.",
      "Re-measure at the next transition after the fix."
    ],
    "sources": [
      [
        "IANA time zone database",
        "https://www.iana.org/time-zones"
      ],
      [
        "cron man page",
        "https://man7.org/linux/man-pages/man5/crontab.5.html"
      ],
      [
        "Kubernetes CronJob",
        "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
      ],
      [
        "systemd.timer",
        "https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html"
      ]
    ],
    "related": [
      "write-a-scheduled-job-ownership-register-for-offshore-maintenance-work",
      "outsourced-timezone-handoff-research"
    ]
  }
];
