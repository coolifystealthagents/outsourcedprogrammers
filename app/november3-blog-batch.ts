// "heading": "Article sections"
export const november3BlogBatch = [
  {
    "slug": "database-migration-review-before-production",
    "title": "Scope a database migration review before production",
    "excerpt": "A review packet for outsourced database work that separates schema risk, data risk, compatibility, rehearsal evidence, and release authority.",
    "minutes": 11,
    "published": "2026-11-03",
    "body": [
      "## Separate the schema change from the data change",
      "A database migration ticket often mixes two different risks: changing the structure of a table and changing the data inside it. The schema change may be reversible with a rollback script. A backfill or a destructive rename may not be. Split the ticket so the reviewer can see which part creates the irreversible boundary and who accepts it.",
      "Ask the author to list every table, column, index, constraint. Job affected by the change. The list should distinguish additive changes from replacements and deletions. A column addition that allows nulls is not the same as a type change that rewrites every row, even when both appear in one migration file.",
      "## Write the compatibility window before deployment",
      "A migration that runs while old and new application versions are both live needs a compatibility window. Record which version writes the old shape, which version reads the new shape. How long both must coexist. If the application cannot tolerate both shapes, the deployment order becomes part of the migration risk rather than an implementation detail.",
      "The ticket should state the exact deploy order for the database, the application. Any background worker. It should also name the point at which the old code stops running. A reviewer who cannot see that sequence cannot judge whether the migration is safe to release during business hours.",
      "## Require a rehearsal on representative data",
      "A migration that works on an empty development database may fail on production volume, constraints, or duplicate values. Require a rehearsal against a masked copy or a representative dataset with the same shape and roughly the same scale. Record the rehearsal date, the row counts, the runtime. Every error the author had to resolve.",
      "The rehearsal should include the rollback or forward-recovery path, not only the forward migration. If the rollback script has never been executed, it is a plan rather than evidence. The reviewer should see the result of running it and the state of the data afterward. That check belongs in the require a rehearsal on representative data note, with the owner and the next action visible.",
      "## Define the stop and recovery conditions",
      "Before release, name the conditions that would stop the migration: lock waits beyond a threshold, replication lag, failed constraint checks, or an unexpected row count. Record who can stop the job and who decides whether to roll back or continue forward. A stop condition that nobody is authorized to invoke is not a control. The define the stop and recovery conditions record should be dated and linked so a second reviewer can reproduce the result.",
      "The recovery note should say what data may be lost, what must be restored from backup. How the team will verify that the application is healthy afterward. It should also state which steps are irreversible so a future incident reviewer does not assume a simple undo exists. That check belongs in the define the stop and recovery conditions note, with the owner and the next action visible.",
      "## Review the migration as an operations change",
      "The code reviewer should not be the only approver. Include the person who owns the database, the person who owns the application release. The person who will respond if the migration fails. Each should confirm the part they are accountable for rather than giving a general approval to the ticket.",
      "Record the approvals against the exact commit and the exact migration file. If the file changes after approval, the approval should be renewed. A migration review that points to an earlier commit is not evidence for the release that actually runs. That check belongs in the review the migration as an operations change note, with the owner and the next action visible.",
      "## Close with a post-migration check",
      "After the migration, verify the row counts, constraints, application health. The queries that depend on the changed structure. Record the check time and the person who performed it. A successful migration command is not proof that the application still works.",
      "If the check reveals a problem, preserve the evidence and route it through the recovery path rather than editing the migration history. The next review should use the finding to improve the rehearsal or the compatibility plan, not simply to add another approval box. That check belongs in the close with a post-migration check note, with the owner and the next action visible. The same check should be repeated when the migration plan changes, not only at the first release.",
      "## Make the migration observable during the window",
      "The release should emit the signals the team needs to judge whether the migration is behaving as expected. Record the lock waits, replication lag, error rate, and row counts that will be watched, and name the person watching them. A migration that runs without observation is a change made blind, even when the script itself is correct. The make the migration observable during the window record should be dated and linked so a second reviewer can reproduce the result.",
      "Set a short observation window after the migration before the team declares success. If the application depends on a background worker, include its queue depth and failure rate. The observation plan should say what normal looks like so an abnormal signal is not dismissed as noise. That check belongs in the make the migration observable during the window note, with the owner and the next action visible.",
      "## Keep the migration record with the release",
      "Store the approved migration file, the rehearsal result, the deploy order, and the post-migration check with the release record. A future responder should not have to search three systems to understand what changed. Link the record to the incident or change process the client already uses. The keep the migration record with the release record should be dated and linked so a second reviewer can reproduce the result.",
      "If the migration is later modified, preserve the earlier version and add the new approval. Overwriting the migration history destroys the evidence that the release was reviewed. The record should make the current state and the path to it equally visible. That check belongs in the keep the migration record with the release note, with the owner and the next action visible.",
      "## Agree on the definition of done",
      "Define what the migration must prove before the release is closed. The definition may include row counts, constraint checks, application health, and a successful query against the new structure. Without that definition, the team can argue about success after the fact instead of checking a written standard. The agree on the definition of done record should be dated and linked so a second reviewer can reproduce the result.",
      "The definition should be agreed before the migration runs, not written to match the result. If a check cannot be performed, record the gap and the owner who accepts it. That discipline makes the release decision easier and gives the next migration a reusable template. That check belongs in the agree on the definition of done note, with the owner and the next action visible."
    ]
  },
  {
    "slug": "dependency-upgrade-ticket-rollback-condition",
    "title": "Write a dependency upgrade ticket with a rollback condition",
    "excerpt": "A practical review format for outsourced maintenance work that names exposure, breaking changes, test evidence, and the condition that triggers a revert.",
    "minutes": 10,
    "published": "2026-11-03",
    "body": [
      "## Name the dependency and the exposure",
      "A dependency upgrade ticket should begin with the package, the current version, the proposed version. The reason for the change. The reason may be a security advisory, a compatibility requirement, or a feature the product needs. A ticket that says only upgrade dependencies gives the reviewer no way to judge urgency or scope.",
      "Record which applications, services, and build jobs use the package. A shared library may affect several repositories. A development-only tool may affect only the pipeline. The reviewer needs the exposure before deciding how much testing is proportionate.",
      "## Read the release notes for breaking changes",
      "The author should summarize the upstream release notes and identify anything that changes behavior, configuration, or supported runtime versions. Do not rely on the version number alone. A minor release can still change a default, remove a deprecated option, or alter peer-dependency requirements. The read the release notes for breaking changes record should be dated and linked so a second reviewer can reproduce the result.",
      "If the project publishes a migration guide, link it and note the steps that apply. If the release notes are incomplete, say so and describe the checks used to compensate. The reviewer should not have to rediscover the same information from a changelog during the approval. That check belongs in the read the release notes for breaking changes note, with the owner and the next action visible.",
      "## State the rollback condition",
      "A dependency upgrade needs a rollback condition before it reaches production. The condition may be a failed smoke test, an increase in error rate, a broken integration, or a performance regression beyond an agreed threshold. Record who monitors the condition and who decides to revert. The state the rollback condition record should be dated and linked so a second reviewer can reproduce the result.",
      "The rollback itself should be tested in a branch or staging environment. If the lockfile or build cache makes reverting difficult, that difficulty belongs in the ticket. A plan that says revert the commit without naming the lockfile, deployment step. Cache invalidation is incomplete.",
      "## Test the integration, not only the build",
      "A successful build proves that the package resolves, not that the application still behaves correctly. Require tests for the code paths that use the dependency, including error handling and configuration changes. If the package affects authentication, payments, file handling, or data serialization, raise the evidence standard. The test the integration, not only the build record should be dated and linked so a second reviewer can reproduce the result.",
      "Record which checks ran and which did not. A browser test that was skipped because the environment was unavailable is a known gap, not a pass. The reviewer should see the gap and decide whether it blocks the release. That check belongs in the test the integration, not only the build note, with the owner and the next action visible.",
      "## Keep the upgrade small",
      "A dependency upgrade should not carry unrelated refactors, feature work, or formatting changes. A focused diff makes the rollback easier and the review faster. If the upgrade requires code changes, keep them in the same ticket but separate them into logical commits with a clear reason. The keep the upgrade small record should be dated and linked so a second reviewer can reproduce the result.",
      "When several packages must move together, explain the dependency chain and the order. A broad upgrade can be valid. It needs a larger evidence plan and a more careful rollback. The size of the change should follow the risk, not the convenience of the author.",
      "## Record the decision and the next check",
      "Close the ticket with the approved version, the checks that passed, the known gaps. The date of the next review. If the upgrade is deferred, record the reason and the condition that would reopen it. A deferred security upgrade without an owner and a date tends to disappear.",
      "The next check should be specific: a monitoring window, a follow-up test, or a review of the upstream advisory. The client owner should know what would cause the team to revisit the decision. That record turns a one-time upgrade into a manageable maintenance practice. That check belongs in the record the decision and the next check note, with the owner and the next action visible.",
      "## Check the transitive dependency surface",
      "A package upgrade can move transitive dependencies that the ticket never names. Ask the author to show the lockfile diff and identify any new, removed, or materially changed transitive packages. A small direct version change can still pull in a different parser, crypto library, or network client. The check the transitive dependency surface record should be dated and linked so a second reviewer can reproduce the result.",
      "If the lockfile diff is large, explain which changes are expected and which need review. Do not hide a new transitive package behind a routine upgrade. The reviewer should know whether the application is shipping new code from an unfamiliar maintainer. That check belongs in the check the transitive dependency surface note, with the owner and the next action visible.",
      "## Record the monitoring window",
      "After deployment, watch the signals that would reveal a regression: error rate, latency, queue depth, and the specific integration that uses the package. Record the window and the person watching it. A rollback condition without an observation period is only a wish. The record the monitoring window record should be dated and linked so a second reviewer can reproduce the result.",
      "If the package affects a customer-facing path, include a synthetic check or a real transaction in the monitoring plan. The client owner should know when the window closes and what evidence supports keeping the change. That closes the loop between the upgrade decision and the production result. That check belongs in the record the monitoring window note, with the owner and the next action visible.",
      "## Make the rollback decision fast",
      "During an incident, the team should not debate who has authority to revert. Name the person, the backup, and the signal that triggers the decision. A short decision path is more valuable than a long rollback document that nobody can find under pressure. The make the rollback decision fast record should be dated and linked so a second reviewer can reproduce the result.",
      "Test the path with a tabletop exercise and record the time it takes to reach a decision. If the answer depends on someone who is unavailable, the path is incomplete. The client owner should fix that gap before the next production upgrade. That check belongs in the make the rollback decision fast note, with the owner and the next action visible."
    ]
  },
  {
    "slug": "read-only-incident-triage-shift",
    "title": "Run a read-only incident triage shift for an outsourced engineer",
    "excerpt": "A boundary-first format for letting an outsourced programmer gather incident evidence while the client incident owner keeps every production decision.",
    "minutes": 10,
    "published": "2026-11-03",
    "body": [
      "## Define read-only before the shift",
      "A read-only incident triage shift should start with a written boundary: which logs, dashboards, metrics, and repositories the programmer may inspect, and which systems they may not change. Read-only access is not a vague promise. It should be enforced by the account, the role. The tools available during the shift.",
      "Record the incident or symptom that triggered the triage, the affected service, and the customer impact known at the start. The programmer can gather evidence, correlate timestamps. Prepare hypotheses. The incident owner keeps the decision to roll back, scale, disable a feature, or communicate with customers.",
      "## Capture a timeline with sources",
      "Build a timeline from source records rather than memory. For each event, record the timestamp, the system that produced it, the relevant identifier, and the observed result. Keep raw links or query references so another responder can reproduce the finding. A timeline that says traffic dropped at some point is less useful than one that names the metric, the window, and the comparison baseline.",
      "The programmer should distinguish observation from inference. Write what the data shows, then write the hypothesis separately. If a dashboard is stale or a log source is missing, record that limitation instead of filling the gap with a plausible story. That check belongs in the capture a timeline with sources note, with the owner and the next action visible.",
      "## Prepare options without choosing",
      "A useful triage note gives the incident owner options with consequences. For each option, record the expected effect, the risk, the required authority, and the evidence that would confirm the result. The programmer can prepare the commands or the rollback steps. Should not execute a production change unless the incident owner explicitly authorizes it.",
      "This separation keeps the responder useful during pressure without turning a read-only shift into an unapproved change window. If the owner asks for an action outside the boundary, the programmer should pause and ask for a named approval rather than relying on an urgent chat message. That check belongs in the prepare options without choosing note, with the owner and the next action visible. A written boundary also protects the programmer from being asked to make an unauthorized change under pressure.",
      "## Hand off with the next check",
      "At the end of the shift, summarize the current state, the leading hypotheses, the evidence for and against each. The next check. Name the person who accepted the handoff and the time the next check is due. A handoff that ends with keep investigating leaves the next responder without a starting point.",
      "If the incident is stable, the handoff can propose a follow-up task for the next business day. If it is active, the handoff should identify the decision the incident owner needs to make and the latest safe time to make it. The next responder should not have to reconstruct the entire timeline. That check belongs in the hand off with the next check note, with the owner and the next action visible.",
      "## Review the shift afterward",
      "After the incident, review the triage record for missing sources, unclear ownership, and actions that required repeated clarification. Ask whether the read-only boundary helped or hindered the response. Whether the account permissions matched the task. Record the answer as a process change rather than a personal critique.",
      "The review should also check whether any sensitive customer or employee data appeared in a channel where it did not belong. If it did, route the issue through the privacy or security process and remove unnecessary copies. A good incident review improves both the technical response and the handling of restricted information. That check belongs in the review the shift afterward note, with the owner and the next action visible.",
      "## Keep the practice ready",
      "A read-only triage capability is only useful if the programmer can navigate the dashboards before an incident. Provide a short orientation, a list of the key services. A recent example of a normal request flow. Test the access during a calm period so the first use is not also the first login.",
      "Update the orientation when services, dashboards, or on-call contacts change. A stale runbook can send the responder to a dashboard that no longer exists. The client owner should confirm the access and the contacts at a fixed cadence. That check belongs in the keep the practice ready note, with the owner and the next action visible.",
      "## Keep a decision log during the shift",
      "Record each decision the incident owner makes, the evidence used, and the time. A decision log is not a transcript; it is a short record of what changed and why. It helps the next responder understand the current state without replaying every message. The keep a decision log during the shift record should be dated and linked so a second reviewer can reproduce the result.",
      "If a decision is reversed, preserve the earlier entry and add the new one. The log should show who had authority and what condition triggered the change. That history is useful in the incident review and in any later customer communication. That check belongs in the keep a decision log during the shift note, with the owner and the next action visible.",
      "## Protect the evidence from cleanup",
      "During recovery, teams often delete temporary resources, rotate credentials, or clear queues. Before cleanup, preserve the logs, metrics, and configuration that explain the failure. Assign an owner for the evidence and record where it lives. A tidy environment can erase the information needed to prevent the next incident.",
      "The programmer should follow the client evidence-retention instruction, not decide alone what to keep. If a system is about to be destroyed, pause and ask the incident owner. The cost of preserving a small evidence set is usually lower than reconstructing the incident later. That check belongs in the protect the evidence from cleanup note, with the owner and the next action visible.",
      "## Define the end of the shift",
      "The shift should end with an explicit handoff, not a gradual loss of attention. Record the current state, the next check, and the person who owns it. If the incident is stable, say so; if it is not, say what could change quickly. The define the end of the shift record should be dated and linked so a second reviewer can reproduce the result.",
      "A written end state prevents the next responder from assuming the incident is quieter than it is. It also gives the programmer a clean boundary for logging out of read-only access. The review can then compare the handoff with what happened next. That check belongs in the define the end of the shift note, with the owner and the next action visible."
    ]
  },
  {
    "slug": "api-contract-change-pull-request-packet",
    "title": "Keep API contract changes visible in a pull request packet",
    "excerpt": "A review packet for outsourced API work that names the contract change, consumer evidence, error behavior, rollout, and rollback.",
    "minutes": 10,
    "published": "2026-11-03",
    "body": [
      "## Make the contract change explicit",
      "An API contract change should be visible in the pull request title, the ticket. The changed files. The reviewer should not have to infer it from a modified response fixture. State which request fields, response fields, status codes, headers, or error shapes changed and which consumers are affected.",
      "If the change is additive, say so and explain why existing clients remain compatible. If it is breaking, name the versioning or migration path. A contract change that is hidden inside a refactor is a review failure even when the code works for the current client. That check belongs in the make the contract change explicit note, with the owner and the next action visible.",
      "## Link the consumer evidence",
      "The author should identify the applications, jobs, or external clients that call the endpoint and link the evidence that they still work. That evidence may be an integration test, a contract test, a staging request, or a documented consumer inventory. A green unit test on the server does not prove that a mobile client still parses the response. The link the consumer evidence record should be dated and linked so a second reviewer can reproduce the result.",
      "If the consumer list is incomplete, record the uncertainty and the plan to verify it. Do not claim that no other consumers exist because the repository search found none. External integrations and cached clients can outlive the code search. That check belongs in the link the consumer evidence note, with the owner and the next action visible.",
      "## Show the error path",
      "API changes often alter the error shape or the conditions that produce it. The pull request should show how validation failures, authorization failures, rate limits. Upstream timeouts appear to the caller. Include the status code and the response body for at least one failure case.",
      "A reviewer who sees only the happy path cannot judge whether a client will handle the new error correctly. If the error contract is unchanged, say that explicitly and point to the test that proves it. The expected behavior should be written before the implementation is reviewed. That check belongs in the show the error path note, with the owner and the next action visible.",
      "## Record the review against the commit",
      "Approve the exact commit that contains the contract change, not an earlier branch state. If the author pushes again after approval, the approval should be renewed or the new diff should be reviewed. A contract change can be small enough to miss in a later push, especially when the pull request already has many comments. The record the review against the commit record should be dated and linked so a second reviewer can reproduce the result.",
      "Use the repository review record to capture the approval and any follow-up. Link the contract test result to the same commit. The reviewer should be able to answer which version of the API was approved and when, without reading a chat history. That check belongs in the record the review against the commit note, with the owner and the next action visible.",
      "## Plan the rollout and rollback",
      "A contract change may need a staged rollout, a feature flag, or a deprecation window. Record the sequence and the condition for expanding the change. If the new behavior causes a consumer failure, name the rollback action and the person who can execute it. The plan should be proportionate to the number of consumers and the consequence of failure.",
      "For a breaking change, the rollback may be a version switch rather than a code revert. Record that distinction so the responder does not choose the wrong path. The client owner should approve the rollout plan, not only the code. That check belongs in the plan the rollout and rollback note, with the owner and the next action visible.",
      "## Close with a compatibility check",
      "After release, verify that the expected consumers still work, that the error path behaves as documented. That monitoring shows no unexplained change. Record the check time and the evidence. If a consumer fails, preserve the request and response details and route the issue through the rollback plan.",
      "The check should also confirm that the documentation and client examples match the released contract. A stale example can create the same failure as a code defect. Add the finding to the next review so the contract process improves. That check belongs in the close with a compatibility check note, with the owner and the next action visible.",
      "## Document the client migration path",
      "For a breaking change, write the steps a client must take before the old behavior is removed. Include the new field or endpoint, the compatibility period, and the date the old path will stop working. A migration guide that says update your client is not a plan. The document the client migration path record should be dated and linked so a second reviewer can reproduce the result.",
      "If the client controls the rollout, record who will communicate the change and how the team will confirm adoption. A deprecation window without a named owner tends to expire quietly. The review should show that the consumer has a realistic path, not only that the server supports a new shape. That check belongs in the document the client migration path note, with the owner and the next action visible.",
      "## Check the contract after release",
      "After deployment, verify the live response against the documented contract and the expected error behavior. Record the check time and the evidence. A contract test that ran before release is useful, but it does not prove that the deployed service is serving the approved shape. The check the contract after release record should be dated and linked so a second reviewer can reproduce the result.",
      "If a mismatch appears, treat it as a release issue and use the rollback plan rather than patching the documentation to match. The post-release check should also confirm that monitoring sees the new behavior and that no unexpected consumer errors appear. That check belongs in the check the contract after release note, with the owner and the next action visible. The check should be repeated after any follow-up deployment that changes the contract.",
      "## Keep the contract test reproducible",
      "A contract test should be runnable by someone other than the author. Document the command, the environment, and the fixture or sandbox it needs. A test that only works on one laptop is not strong evidence for a release that other people must support. The keep the contract test reproducible record should be dated and linked so a second reviewer can reproduce the result.",
      "Record the exact version of the test and the service it exercised. If the test depends on external state, note that and describe how the state was prepared. The reviewer should be able to rerun the check when the change is questioned later. That check belongs in the keep the contract test reproducible note, with the owner and the next action visible."
    ]
  },
  {
    "slug": "review-test-coverage-claims-qa-handoff",
    "title": "Review test coverage claims in an outsourced QA handoff",
    "excerpt": "A practical way to test the story behind a coverage number by checking acceptance mapping, test delta, environment gaps, and failed or skipped checks.",
    "minutes": 10,
    "published": "2026-11-03",
    "body": [
      "## Separate coverage from confidence",
      "A coverage percentage describes which lines or branches a test suite executed. It does not prove that the assertions were meaningful or that the behavior a customer cares about was tested. A handoff that reports ninety percent coverage without naming the tested behavior gives the reviewer a false sense of security. The separate coverage from confidence record should be dated and linked so a second reviewer can reproduce the result.",
      "Ask the QA contributor to map each acceptance criterion to the check that covers it. If a criterion has no check, record the gap. If a check exists but asserts only that the page loaded, describe that limitation rather than counting it as full coverage. That check belongs in the separate coverage from confidence note, with the owner and the next action visible.",
      "## Show the test delta",
      "The handoff should identify which tests are new, which changed, and which were removed. A suite can keep the same total count while losing an important assertion. The delta matters more than the headline number. Link the diff and the test names to the ticket.",
      "For each new test, record the behavior it protects and the failure it would catch. A test that passes for the wrong reason is harder to spot later. The reviewer should be able to see whether the new coverage matches the risk of the change. That check belongs in the show the test delta note, with the owner and the next action visible.",
      "## Name the environment and the gaps",
      "Record the browser, device, operating system, database. Service versions used for the test run. A check that passed on one environment may not cover the customer segment that matters. List the environments that were skipped and the reason, rather than implying that the suite covered everything.",
      "If a test depends on a third-party sandbox, record its state and any behavior that could not be reproduced. A sandbox limitation is a known gap, not a reason to overstate the result. The client owner decides whether the gap blocks release. That check belongs in the name the environment and the gaps note, with the owner and the next action visible.",
      "## Separate automated from manual evidence",
      "Automated checks and manual checks answer different questions. Keep the automated result, the manual exploration notes, and the screenshots or recordings in separate sections. A manual pass should say what was tried, what was observed. What was not covered.",
      "Manual evidence is not stronger simply because a person performed it. It needs a reproducible step and a clear expected result. If the tester cannot explain how to repeat the check, the evidence is an anecdote rather than a test. That check belongs in the separate automated from manual evidence note, with the owner and the next action visible.",
      "## Review the failed and skipped tests",
      "A handoff that lists only passing tests is incomplete. Record failed tests, the reason, the owner, and whether the failure is expected. Record skipped tests and the condition that would allow them to run. A skipped security or payment test is a material gap, not a neutral status.",
      "The reviewer should decide whether a failure blocks release or needs a documented exception. The QA contributor can prepare the evidence and the recommendation. The client owner keeps the release decision. That boundary prevents a test result from being treated as an automatic approval.",
      "## Close with a regression check",
      "After the release, verify the behavior that the tests were meant to protect and check for regressions in the surrounding workflow. Record the result against the same acceptance criteria. If a defect escapes, compare it with the test evidence to see whether the gap was coverage, assertion quality, environment, or review. The close with a regression check record should be dated and linked so a second reviewer can reproduce the result.",
      "The next handoff should include the lesson in a short note and a change to the test plan. A coverage number that rises while the same defect recurs is not an improvement. The goal is evidence that helps the client make a release decision, not a metric that looks good in a report. That check belongs in the close with a regression check note, with the owner and the next action visible.",
      "## Explain what the test does not cover",
      "Every test plan has a boundary. State which user segments, integrations, data states, and failure modes are outside the current suite. That honesty helps the client decide whether to accept the risk or invest in another check. A report that implies complete coverage is harder to trust than one that names its limits.",
      "If a critical path is untested, propose a manual check or a follow-up test with an owner. Do not leave the gap as an unspoken assumption. The next reviewer should see both the evidence and the boundary in the same handoff. That check belongs in the explain what the test does not cover note, with the owner and the next action visible.",
      "## Keep a regression sample",
      "After release, keep a small regression sample that exercises the behavior the change was meant to protect. Run it on a fixed cadence and compare the result with the original acceptance criteria. A sample that is never repeated becomes a historical artifact rather than a control. The keep a regression sample record should be dated and linked so a second reviewer can reproduce the result.",
      "If the sample fails, record whether the cause is the new change, an environment change, or a stale test. The QA contributor can investigate and prepare evidence, while the client owner decides whether to roll back. That division keeps the regression sample useful without turning QA into the release authority. That check belongs in the keep a regression sample note, with the owner and the next action visible.",
      "## Agree on the acceptable gap",
      "Some gaps are acceptable for a low-risk change and unacceptable for a payment or authentication path. Ask the client owner to state the acceptable gap before the test plan is finalized. That decision should be recorded, not inferred from a green suite. The agree on the acceptable gap record should be dated and linked so a second reviewer can reproduce the result.",
      "If the gap changes after review, reopen the decision rather than quietly expanding the release. The QA contributor can explain the consequence and the proposed mitigation, while the owner keeps the risk acceptance. This makes the coverage conversation honest and auditable. That check belongs in the agree on the acceptable gap note, with the owner and the next action visible."
    ]
  }
] as const;

export const november3BlogDetails = {
  "database-migration-review-before-production": {
    "takeaways": [
      "Separate additive schema changes from data rewrites and destructive replacements.",
      "Record the deploy order and the compatibility window for old and new application versions.",
      "Require rehearsal and rollback evidence against representative data, not an empty database.",
      "Keep the production release decision with the client database and application owners."
    ],
    "readinessRows": [
      {
        "area": "Schema versus data",
        "ready": "The ticket separates structural changes from backfills, rewrites, and deletions.",
        "notReady": "One migration file mixes a column addition, a type change, and a data update."
      },
      {
        "area": "Compatibility",
        "ready": "The deploy order and the period when both application versions run are written down.",
        "notReady": "The reviewer is told only that the migration is backward compatible."
      },
      {
        "area": "Rehearsal",
        "ready": "The migration ran on representative data with recorded runtime and errors.",
        "notReady": "The only evidence is a successful run on an empty local database."
      },
      {
        "area": "Recovery",
        "ready": "The rollback or forward-recovery path was executed and the result was recorded.",
        "notReady": "The rollback script exists but has never been run."
      }
    ],
    "sections": [
      {
        "id": "separate-schema-change-from-data-change",
        "title": "Separate the schema change from the data change",
        "paragraphs": [
          "A database migration ticket often mixes two different risks: changing the structure of a table and changing the data inside it. The schema change may be reversible with a rollback script. A backfill or a destructive rename may not be. Split the ticket so the reviewer can see which part creates the irreversible boundary and who accepts it.",
          "Ask the author to list every table, column, index, constraint. Job affected by the change. The list should distinguish additive changes from replacements and deletions. A column addition that allows nulls is not the same as a type change that rewrites every row, even when both appear in one migration file."
        ]
      },
      {
        "id": "write-the-compatibility-window",
        "title": "Write the compatibility window before deployment",
        "paragraphs": [
          "A migration that runs while old and new application versions are both live needs a compatibility window. Record which version writes the old shape, which version reads the new shape. How long both must coexist. If the application cannot tolerate both shapes, the deployment order becomes part of the migration risk rather than an implementation detail.",
          "The ticket should state the exact deploy order for the database, the application. Any background worker. It should also name the point at which the old code stops running. A reviewer who cannot see that sequence cannot judge whether the migration is safe to release during business hours."
        ]
      },
      {
        "id": "require-a-rehearsal-on-representative-data",
        "title": "Require a rehearsal on representative data",
        "paragraphs": [
          "A migration that works on an empty development database may fail on production volume, constraints, or duplicate values. Require a rehearsal against a masked copy or a representative dataset with the same shape and roughly the same scale. Record the rehearsal date, the row counts, the runtime. Every error the author had to resolve.",
          "The rehearsal should include the rollback or forward-recovery path, not only the forward migration. If the rollback script has never been executed, it is a plan rather than evidence. The reviewer should see the result of running it and the state of the data afterward. That check belongs in the require a rehearsal on representative data note, with the owner and the next action visible."
        ]
      },
      {
        "id": "define-the-stop-and-recovery-conditions",
        "title": "Define the stop and recovery conditions",
        "paragraphs": [
          "Before release, name the conditions that would stop the migration: lock waits beyond a threshold, replication lag, failed constraint checks, or an unexpected row count. Record who can stop the job and who decides whether to roll back or continue forward. A stop condition that nobody is authorized to invoke is not a control. The define the stop and recovery conditions record should be dated and linked so a second reviewer can reproduce the result.",
          "The recovery note should say what data may be lost, what must be restored from backup. How the team will verify that the application is healthy afterward. It should also state which steps are irreversible so a future incident reviewer does not assume a simple undo exists. That check belongs in the define the stop and recovery conditions note, with the owner and the next action visible."
        ]
      },
      {
        "id": "review-the-migration-as-an-operations-change",
        "title": "Review the migration as an operations change",
        "paragraphs": [
          "The code reviewer should not be the only approver. Include the person who owns the database, the person who owns the application release. The person who will respond if the migration fails. Each should confirm the part they are accountable for rather than giving a general approval to the ticket.",
          "Record the approvals against the exact commit and the exact migration file. If the file changes after approval, the approval should be renewed. A migration review that points to an earlier commit is not evidence for the release that actually runs. That check belongs in the review the migration as an operations change note, with the owner and the next action visible."
        ]
      },
      {
        "id": "close-with-a-post-migration-check",
        "title": "Close with a post-migration check",
        "paragraphs": [
          "After the migration, verify the row counts, constraints, application health. The queries that depend on the changed structure. Record the check time and the person who performed it. A successful migration command is not proof that the application still works.",
          "If the check reveals a problem, preserve the evidence and route it through the recovery path rather than editing the migration history. The next review should use the finding to improve the rehearsal or the compatibility plan, not simply to add another approval box. That check belongs in the close with a post-migration check note, with the owner and the next action visible. The same check should be repeated when the migration plan changes, not only at the first release."
        ]
      },
      {
        "id": "make-the-migration-observable-during-the-window",
        "title": "Make the migration observable during the window",
        "paragraphs": [
          "The release should emit the signals the team needs to judge whether the migration is behaving as expected. Record the lock waits, replication lag, error rate, and row counts that will be watched, and name the person watching them. A migration that runs without observation is a change made blind, even when the script itself is correct. The make the migration observable during the window record should be dated and linked so a second reviewer can reproduce the result.",
          "Set a short observation window after the migration before the team declares success. If the application depends on a background worker, include its queue depth and failure rate. The observation plan should say what normal looks like so an abnormal signal is not dismissed as noise. That check belongs in the make the migration observable during the window note, with the owner and the next action visible."
        ]
      },
      {
        "id": "keep-the-migration-record-with-the-release",
        "title": "Keep the migration record with the release",
        "paragraphs": [
          "Store the approved migration file, the rehearsal result, the deploy order, and the post-migration check with the release record. A future responder should not have to search three systems to understand what changed. Link the record to the incident or change process the client already uses. The keep the migration record with the release record should be dated and linked so a second reviewer can reproduce the result.",
          "If the migration is later modified, preserve the earlier version and add the new approval. Overwriting the migration history destroys the evidence that the release was reviewed. The record should make the current state and the path to it equally visible. That check belongs in the keep the migration record with the release note, with the owner and the next action visible."
        ]
      },
      {
        "id": "agree-on-the-definition-of-done",
        "title": "Agree on the definition of done",
        "paragraphs": [
          "Define what the migration must prove before the release is closed. The definition may include row counts, constraint checks, application health, and a successful query against the new structure. Without that definition, the team can argue about success after the fact instead of checking a written standard. The agree on the definition of done record should be dated and linked so a second reviewer can reproduce the result.",
          "The definition should be agreed before the migration runs, not written to match the result. If a check cannot be performed, record the gap and the owner who accepts it. That discipline makes the release decision easier and gives the next migration a reusable template. That check belongs in the agree on the definition of done note, with the owner and the next action visible."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Scope",
        "text": "Change the named tables and columns only; list every backfill, index, and constraint in the ticket."
      },
      {
        "label": "Evidence",
        "text": "Attach the rehearsal result, row counts, runtime, errors, and the executed recovery check."
      },
      {
        "label": "Authority",
        "text": "The client database owner approves the migration file and the release owner approves the deploy window."
      },
      {
        "label": "Stop rule",
        "text": "Pause on lock waits, replication lag, failed constraints, or a row count outside the agreed range."
      }
    ],
    "faqs": [
      {
        "question": "Can an outsourced programmer run the production migration?",
        "answer": "Only if the client explicitly grants that authority for a named window and keeps a rollback decision with an authorized operator. Preparing and rehearsing the migration is a separate permission."
      },
      {
        "question": "What if the migration is small?",
        "answer": "A small change can still be irreversible. Match the evidence to the consequence, not to the number of lines in the file."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-218, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/pubs/sp/800/218/final",
        "note": "Supports planning, review, and verification of changes before release."
      },
      {
        "name": "PostgreSQL documentation: ALTER TABLE",
        "url": "https://www.postgresql.org/docs/current/sql-altertable.html",
        "note": "Documents locking and rewrite behavior for structural changes."
      },
      {
        "name": "GitHub Docs: About pull request reviews",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Supports review against a specific commit and recorded approval."
      }
    ],
    "heroImage": "/nov03/blog/database-migration-review-before-production.webp"
  },
  "dependency-upgrade-ticket-rollback-condition": {
    "takeaways": [
      "Name the package, version change, reason, and every service or build job exposed to it.",
      "Summarize upstream breaking changes and link the migration guide instead of relying on the version number.",
      "State the rollback condition, the person who decides, and the steps that actually revert the release.",
      "Keep unrelated refactors out of the upgrade so the diff and the rollback stay small."
    ],
    "readinessRows": [
      {
        "area": "Exposure",
        "ready": "The ticket lists every service, repository, and pipeline that uses the package.",
        "notReady": "The ticket says only that the package is used somewhere in the product."
      },
      {
        "area": "Release notes",
        "ready": "Breaking changes and required migration steps are summarized with a source link.",
        "notReady": "The author assumes a minor version cannot change behavior."
      },
      {
        "area": "Rollback",
        "ready": "The revert steps, lockfile change, deployment action, and decision owner are recorded.",
        "notReady": "The plan is to revert the commit without naming the deployment or cache steps."
      },
      {
        "area": "Test evidence",
        "ready": "Checks cover the code paths that use the package and list any skipped environment.",
        "notReady": "The only evidence is a green build that never exercised the dependency."
      }
    ],
    "sections": [
      {
        "id": "name-the-dependency-and-the-exposure",
        "title": "Name the dependency and the exposure",
        "paragraphs": [
          "A dependency upgrade ticket should begin with the package, the current version, the proposed version. The reason for the change. The reason may be a security advisory, a compatibility requirement, or a feature the product needs. A ticket that says only upgrade dependencies gives the reviewer no way to judge urgency or scope.",
          "Record which applications, services, and build jobs use the package. A shared library may affect several repositories. A development-only tool may affect only the pipeline. The reviewer needs the exposure before deciding how much testing is proportionate."
        ]
      },
      {
        "id": "read-the-release-notes-for-breaking-changes",
        "title": "Read the release notes for breaking changes",
        "paragraphs": [
          "The author should summarize the upstream release notes and identify anything that changes behavior, configuration, or supported runtime versions. Do not rely on the version number alone. A minor release can still change a default, remove a deprecated option, or alter peer-dependency requirements. The read the release notes for breaking changes record should be dated and linked so a second reviewer can reproduce the result.",
          "If the project publishes a migration guide, link it and note the steps that apply. If the release notes are incomplete, say so and describe the checks used to compensate. The reviewer should not have to rediscover the same information from a changelog during the approval. That check belongs in the read the release notes for breaking changes note, with the owner and the next action visible."
        ]
      },
      {
        "id": "state-the-rollback-condition",
        "title": "State the rollback condition",
        "paragraphs": [
          "A dependency upgrade needs a rollback condition before it reaches production. The condition may be a failed smoke test, an increase in error rate, a broken integration, or a performance regression beyond an agreed threshold. Record who monitors the condition and who decides to revert. The state the rollback condition record should be dated and linked so a second reviewer can reproduce the result.",
          "The rollback itself should be tested in a branch or staging environment. If the lockfile or build cache makes reverting difficult, that difficulty belongs in the ticket. A plan that says revert the commit without naming the lockfile, deployment step. Cache invalidation is incomplete."
        ]
      },
      {
        "id": "test-the-integration-not-only-the-build",
        "title": "Test the integration, not only the build",
        "paragraphs": [
          "A successful build proves that the package resolves, not that the application still behaves correctly. Require tests for the code paths that use the dependency, including error handling and configuration changes. If the package affects authentication, payments, file handling, or data serialization, raise the evidence standard. The test the integration, not only the build record should be dated and linked so a second reviewer can reproduce the result.",
          "Record which checks ran and which did not. A browser test that was skipped because the environment was unavailable is a known gap, not a pass. The reviewer should see the gap and decide whether it blocks the release. That check belongs in the test the integration, not only the build note, with the owner and the next action visible."
        ]
      },
      {
        "id": "keep-the-upgrade-small",
        "title": "Keep the upgrade small",
        "paragraphs": [
          "A dependency upgrade should not carry unrelated refactors, feature work, or formatting changes. A focused diff makes the rollback easier and the review faster. If the upgrade requires code changes, keep them in the same ticket but separate them into logical commits with a clear reason. The keep the upgrade small record should be dated and linked so a second reviewer can reproduce the result.",
          "When several packages must move together, explain the dependency chain and the order. A broad upgrade can be valid. It needs a larger evidence plan and a more careful rollback. The size of the change should follow the risk, not the convenience of the author."
        ]
      },
      {
        "id": "record-the-decision-and-the-next-check",
        "title": "Record the decision and the next check",
        "paragraphs": [
          "Close the ticket with the approved version, the checks that passed, the known gaps. The date of the next review. If the upgrade is deferred, record the reason and the condition that would reopen it. A deferred security upgrade without an owner and a date tends to disappear.",
          "The next check should be specific: a monitoring window, a follow-up test, or a review of the upstream advisory. The client owner should know what would cause the team to revisit the decision. That record turns a one-time upgrade into a manageable maintenance practice. That check belongs in the record the decision and the next check note, with the owner and the next action visible."
        ]
      },
      {
        "id": "check-the-transitive-dependency-surface",
        "title": "Check the transitive dependency surface",
        "paragraphs": [
          "A package upgrade can move transitive dependencies that the ticket never names. Ask the author to show the lockfile diff and identify any new, removed, or materially changed transitive packages. A small direct version change can still pull in a different parser, crypto library, or network client. The check the transitive dependency surface record should be dated and linked so a second reviewer can reproduce the result.",
          "If the lockfile diff is large, explain which changes are expected and which need review. Do not hide a new transitive package behind a routine upgrade. The reviewer should know whether the application is shipping new code from an unfamiliar maintainer. That check belongs in the check the transitive dependency surface note, with the owner and the next action visible."
        ]
      },
      {
        "id": "record-the-monitoring-window",
        "title": "Record the monitoring window",
        "paragraphs": [
          "After deployment, watch the signals that would reveal a regression: error rate, latency, queue depth, and the specific integration that uses the package. Record the window and the person watching it. A rollback condition without an observation period is only a wish. The record the monitoring window record should be dated and linked so a second reviewer can reproduce the result.",
          "If the package affects a customer-facing path, include a synthetic check or a real transaction in the monitoring plan. The client owner should know when the window closes and what evidence supports keeping the change. That closes the loop between the upgrade decision and the production result. That check belongs in the record the monitoring window note, with the owner and the next action visible."
        ]
      },
      {
        "id": "make-the-rollback-decision-fast",
        "title": "Make the rollback decision fast",
        "paragraphs": [
          "During an incident, the team should not debate who has authority to revert. Name the person, the backup, and the signal that triggers the decision. A short decision path is more valuable than a long rollback document that nobody can find under pressure. The make the rollback decision fast record should be dated and linked so a second reviewer can reproduce the result.",
          "Test the path with a tabletop exercise and record the time it takes to reach a decision. If the answer depends on someone who is unavailable, the path is incomplete. The client owner should fix that gap before the next production upgrade. That check belongs in the make the rollback decision fast note, with the owner and the next action visible."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Scope",
        "text": "Upgrade only the named package and the minimum code required to keep the application compatible."
      },
      {
        "label": "Evidence",
        "text": "Attach the release-note summary, test results, skipped checks, and the rollback rehearsal."
      },
      {
        "label": "Authority",
        "text": "The client technical owner approves the production release and the decision to revert."
      },
      {
        "label": "Stop rule",
        "text": "Pause on a failed integration test, an unexplained error-rate change, or a rollback step that cannot be executed."
      }
    ],
    "faqs": [
      {
        "question": "Should every dependency upgrade have a rollback rehearsal?",
        "answer": "Rehearse the rollback when the package affects production behavior or when reverting requires more than a single commit. A development-only tool may need less."
      },
      {
        "question": "Who decides whether a skipped test blocks the release?",
        "answer": "The client technical owner decides with the evidence in front of them. The outsourced programmer should surface the gap rather than decide it is unimportant."
      }
    ],
    "sources": [
      {
        "name": "Semantic Versioning 2.0.0",
        "url": "https://semver.org/",
        "note": "Explains version semantics but does not replace reading the release notes."
      },
      {
        "name": "NIST SP 800-218, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/pubs/sp/800/218/final",
        "note": "Supports reviewed and verified changes to software components."
      },
      {
        "name": "GitHub Docs: Managing a merge queue",
        "url": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue",
        "note": "Useful context for controlling the order of reviewed changes."
      }
    ],
    "heroImage": "/nov03/blog/dependency-upgrade-ticket-rollback-condition.webp"
  },
  "read-only-incident-triage-shift": {
    "takeaways": [
      "Define read-only access by system and account before the shift starts.",
      "Separate observed facts from hypotheses and link each event to its source.",
      "Prepare options and rollback steps without executing production changes.",
      "Hand off with a named owner, the next check, and the decision that is still open."
    ],
    "readinessRows": [
      {
        "area": "Access",
        "ready": "The programmer has named read-only roles for the logs, metrics, and repositories in scope.",
        "notReady": "The programmer is using a shared account with broad production access."
      },
      {
        "area": "Timeline",
        "ready": "Each event has a timestamp, source, identifier, and observed result.",
        "notReady": "The timeline is a narrative based on memory and chat messages."
      },
      {
        "area": "Authority",
        "ready": "The incident owner authorizes any production action explicitly and records it.",
        "notReady": "The programmer is expected to fix the issue if they find the cause."
      },
      {
        "area": "Handoff",
        "ready": "The next responder receives the state, hypotheses, evidence, and next check time.",
        "notReady": "The shift ends with a message that says keep looking."
      }
    ],
    "sections": [
      {
        "id": "define-read-only-before-the-shift",
        "title": "Define read-only before the shift",
        "paragraphs": [
          "A read-only incident triage shift should start with a written boundary: which logs, dashboards, metrics, and repositories the programmer may inspect, and which systems they may not change. Read-only access is not a vague promise. It should be enforced by the account, the role. The tools available during the shift.",
          "Record the incident or symptom that triggered the triage, the affected service, and the customer impact known at the start. The programmer can gather evidence, correlate timestamps. Prepare hypotheses. The incident owner keeps the decision to roll back, scale, disable a feature, or communicate with customers."
        ]
      },
      {
        "id": "capture-a-timeline-with-sources",
        "title": "Capture a timeline with sources",
        "paragraphs": [
          "Build a timeline from source records rather than memory. For each event, record the timestamp, the system that produced it, the relevant identifier, and the observed result. Keep raw links or query references so another responder can reproduce the finding. A timeline that says traffic dropped at some point is less useful than one that names the metric, the window, and the comparison baseline.",
          "The programmer should distinguish observation from inference. Write what the data shows, then write the hypothesis separately. If a dashboard is stale or a log source is missing, record that limitation instead of filling the gap with a plausible story. That check belongs in the capture a timeline with sources note, with the owner and the next action visible."
        ]
      },
      {
        "id": "prepare-options-without-choosing",
        "title": "Prepare options without choosing",
        "paragraphs": [
          "A useful triage note gives the incident owner options with consequences. For each option, record the expected effect, the risk, the required authority, and the evidence that would confirm the result. The programmer can prepare the commands or the rollback steps. Should not execute a production change unless the incident owner explicitly authorizes it.",
          "This separation keeps the responder useful during pressure without turning a read-only shift into an unapproved change window. If the owner asks for an action outside the boundary, the programmer should pause and ask for a named approval rather than relying on an urgent chat message. That check belongs in the prepare options without choosing note, with the owner and the next action visible. A written boundary also protects the programmer from being asked to make an unauthorized change under pressure."
        ]
      },
      {
        "id": "hand-off-with-the-next-check",
        "title": "Hand off with the next check",
        "paragraphs": [
          "At the end of the shift, summarize the current state, the leading hypotheses, the evidence for and against each. The next check. Name the person who accepted the handoff and the time the next check is due. A handoff that ends with keep investigating leaves the next responder without a starting point.",
          "If the incident is stable, the handoff can propose a follow-up task for the next business day. If it is active, the handoff should identify the decision the incident owner needs to make and the latest safe time to make it. The next responder should not have to reconstruct the entire timeline. That check belongs in the hand off with the next check note, with the owner and the next action visible."
        ]
      },
      {
        "id": "review-the-shift-afterward",
        "title": "Review the shift afterward",
        "paragraphs": [
          "After the incident, review the triage record for missing sources, unclear ownership, and actions that required repeated clarification. Ask whether the read-only boundary helped or hindered the response. Whether the account permissions matched the task. Record the answer as a process change rather than a personal critique.",
          "The review should also check whether any sensitive customer or employee data appeared in a channel where it did not belong. If it did, route the issue through the privacy or security process and remove unnecessary copies. A good incident review improves both the technical response and the handling of restricted information. That check belongs in the review the shift afterward note, with the owner and the next action visible."
        ]
      },
      {
        "id": "keep-the-practice-ready",
        "title": "Keep the practice ready",
        "paragraphs": [
          "A read-only triage capability is only useful if the programmer can navigate the dashboards before an incident. Provide a short orientation, a list of the key services. A recent example of a normal request flow. Test the access during a calm period so the first use is not also the first login.",
          "Update the orientation when services, dashboards, or on-call contacts change. A stale runbook can send the responder to a dashboard that no longer exists. The client owner should confirm the access and the contacts at a fixed cadence. That check belongs in the keep the practice ready note, with the owner and the next action visible."
        ]
      },
      {
        "id": "keep-a-decision-log-during-the-shift",
        "title": "Keep a decision log during the shift",
        "paragraphs": [
          "Record each decision the incident owner makes, the evidence used, and the time. A decision log is not a transcript; it is a short record of what changed and why. It helps the next responder understand the current state without replaying every message. The keep a decision log during the shift record should be dated and linked so a second reviewer can reproduce the result.",
          "If a decision is reversed, preserve the earlier entry and add the new one. The log should show who had authority and what condition triggered the change. That history is useful in the incident review and in any later customer communication. That check belongs in the keep a decision log during the shift note, with the owner and the next action visible."
        ]
      },
      {
        "id": "protect-the-evidence-from-cleanup",
        "title": "Protect the evidence from cleanup",
        "paragraphs": [
          "During recovery, teams often delete temporary resources, rotate credentials, or clear queues. Before cleanup, preserve the logs, metrics, and configuration that explain the failure. Assign an owner for the evidence and record where it lives. A tidy environment can erase the information needed to prevent the next incident.",
          "The programmer should follow the client evidence-retention instruction, not decide alone what to keep. If a system is about to be destroyed, pause and ask the incident owner. The cost of preserving a small evidence set is usually lower than reconstructing the incident later. That check belongs in the protect the evidence from cleanup note, with the owner and the next action visible."
        ]
      },
      {
        "id": "define-the-end-of-the-shift",
        "title": "Define the end of the shift",
        "paragraphs": [
          "The shift should end with an explicit handoff, not a gradual loss of attention. Record the current state, the next check, and the person who owns it. If the incident is stable, say so; if it is not, say what could change quickly. The define the end of the shift record should be dated and linked so a second reviewer can reproduce the result.",
          "A written end state prevents the next responder from assuming the incident is quieter than it is. It also gives the programmer a clean boundary for logging out of read-only access. The review can then compare the handoff with what happened next. That check belongs in the define the end of the shift note, with the owner and the next action visible."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Scope",
        "text": "Inspect the named services and logs; do not change production, secrets, customer records, or feature flags."
      },
      {
        "label": "Evidence",
        "text": "Attach timestamped queries, dashboard links, log excerpts, and the limitations of each source."
      },
      {
        "label": "Authority",
        "text": "The client incident owner decides on rollback, scaling, feature changes, and customer communication."
      },
      {
        "label": "Stop rule",
        "text": "Pause when a requested action leaves the read-only boundary or requires access the programmer does not have."
      }
    ],
    "faqs": [
      {
        "question": "Can a read-only programmer prepare a rollback command?",
        "answer": "Yes, preparing and reviewing the command is useful. Executing it requires explicit authorization from the client incident owner."
      },
      {
        "question": "What should the handoff contain?",
        "answer": "The current state, leading hypotheses, evidence for and against them, open decisions, and the next check time."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-61, Computer Security Incident Handling Guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Provides incident handling context for preparation, detection, and response."
      },
      {
        "name": "Google SRE Book: Incident Management",
        "url": "https://sre.google/sre-book/managing-incidents/",
        "note": "Describes incident roles and clear decision ownership."
      },
      {
        "name": "GitHub Docs: About pull request reviews",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Supports review evidence tied to a specific change."
      }
    ],
    "heroImage": "/nov03/blog/read-only-incident-triage-shift.webp"
  },
  "api-contract-change-pull-request-packet": {
    "takeaways": [
      "State the request, response, status, header, or error change instead of hiding it in a refactor.",
      "Link evidence that each known consumer still parses and handles the contract.",
      "Show at least one failure path with the status code and response body.",
      "Approve the exact commit and record the rollout and rollback authority."
    ],
    "readinessRows": [
      {
        "area": "Contract surface",
        "ready": "The pull request names every changed field, status code, header, and error shape.",
        "notReady": "The reviewer is expected to infer the change from a modified fixture."
      },
      {
        "area": "Consumers",
        "ready": "Known consumers are listed with a test, staging request, or inventory link.",
        "notReady": "The author says no other consumers exist because a repository search found none."
      },
      {
        "area": "Error path",
        "ready": "At least one failure case shows the status code and response body.",
        "notReady": "Only the successful response is demonstrated."
      },
      {
        "area": "Release",
        "ready": "The rollout order, rollback action, and named authority are recorded.",
        "notReady": "The change is expected to deploy like any other code change."
      }
    ],
    "sections": [
      {
        "id": "make-the-contract-change-explicit",
        "title": "Make the contract change explicit",
        "paragraphs": [
          "An API contract change should be visible in the pull request title, the ticket. The changed files. The reviewer should not have to infer it from a modified response fixture. State which request fields, response fields, status codes, headers, or error shapes changed and which consumers are affected.",
          "If the change is additive, say so and explain why existing clients remain compatible. If it is breaking, name the versioning or migration path. A contract change that is hidden inside a refactor is a review failure even when the code works for the current client. That check belongs in the make the contract change explicit note, with the owner and the next action visible."
        ]
      },
      {
        "id": "link-the-consumer-evidence",
        "title": "Link the consumer evidence",
        "paragraphs": [
          "The author should identify the applications, jobs, or external clients that call the endpoint and link the evidence that they still work. That evidence may be an integration test, a contract test, a staging request, or a documented consumer inventory. A green unit test on the server does not prove that a mobile client still parses the response. The link the consumer evidence record should be dated and linked so a second reviewer can reproduce the result.",
          "If the consumer list is incomplete, record the uncertainty and the plan to verify it. Do not claim that no other consumers exist because the repository search found none. External integrations and cached clients can outlive the code search. That check belongs in the link the consumer evidence note, with the owner and the next action visible."
        ]
      },
      {
        "id": "show-the-error-path",
        "title": "Show the error path",
        "paragraphs": [
          "API changes often alter the error shape or the conditions that produce it. The pull request should show how validation failures, authorization failures, rate limits. Upstream timeouts appear to the caller. Include the status code and the response body for at least one failure case.",
          "A reviewer who sees only the happy path cannot judge whether a client will handle the new error correctly. If the error contract is unchanged, say that explicitly and point to the test that proves it. The expected behavior should be written before the implementation is reviewed. That check belongs in the show the error path note, with the owner and the next action visible."
        ]
      },
      {
        "id": "record-the-review-against-the-commit",
        "title": "Record the review against the commit",
        "paragraphs": [
          "Approve the exact commit that contains the contract change, not an earlier branch state. If the author pushes again after approval, the approval should be renewed or the new diff should be reviewed. A contract change can be small enough to miss in a later push, especially when the pull request already has many comments. The record the review against the commit record should be dated and linked so a second reviewer can reproduce the result.",
          "Use the repository review record to capture the approval and any follow-up. Link the contract test result to the same commit. The reviewer should be able to answer which version of the API was approved and when, without reading a chat history. That check belongs in the record the review against the commit note, with the owner and the next action visible."
        ]
      },
      {
        "id": "plan-the-rollout-and-rollback",
        "title": "Plan the rollout and rollback",
        "paragraphs": [
          "A contract change may need a staged rollout, a feature flag, or a deprecation window. Record the sequence and the condition for expanding the change. If the new behavior causes a consumer failure, name the rollback action and the person who can execute it. The plan should be proportionate to the number of consumers and the consequence of failure.",
          "For a breaking change, the rollback may be a version switch rather than a code revert. Record that distinction so the responder does not choose the wrong path. The client owner should approve the rollout plan, not only the code. That check belongs in the plan the rollout and rollback note, with the owner and the next action visible."
        ]
      },
      {
        "id": "close-with-a-compatibility-check",
        "title": "Close with a compatibility check",
        "paragraphs": [
          "After release, verify that the expected consumers still work, that the error path behaves as documented. That monitoring shows no unexplained change. Record the check time and the evidence. If a consumer fails, preserve the request and response details and route the issue through the rollback plan.",
          "The check should also confirm that the documentation and client examples match the released contract. A stale example can create the same failure as a code defect. Add the finding to the next review so the contract process improves. That check belongs in the close with a compatibility check note, with the owner and the next action visible."
        ]
      },
      {
        "id": "document-the-client-migration-path",
        "title": "Document the client migration path",
        "paragraphs": [
          "For a breaking change, write the steps a client must take before the old behavior is removed. Include the new field or endpoint, the compatibility period, and the date the old path will stop working. A migration guide that says update your client is not a plan. The document the client migration path record should be dated and linked so a second reviewer can reproduce the result.",
          "If the client controls the rollout, record who will communicate the change and how the team will confirm adoption. A deprecation window without a named owner tends to expire quietly. The review should show that the consumer has a realistic path, not only that the server supports a new shape. That check belongs in the document the client migration path note, with the owner and the next action visible."
        ]
      },
      {
        "id": "check-the-contract-after-release",
        "title": "Check the contract after release",
        "paragraphs": [
          "After deployment, verify the live response against the documented contract and the expected error behavior. Record the check time and the evidence. A contract test that ran before release is useful, but it does not prove that the deployed service is serving the approved shape. The check the contract after release record should be dated and linked so a second reviewer can reproduce the result.",
          "If a mismatch appears, treat it as a release issue and use the rollback plan rather than patching the documentation to match. The post-release check should also confirm that monitoring sees the new behavior and that no unexpected consumer errors appear. That check belongs in the check the contract after release note, with the owner and the next action visible. The check should be repeated after any follow-up deployment that changes the contract."
        ]
      },
      {
        "id": "keep-the-contract-test-reproducible",
        "title": "Keep the contract test reproducible",
        "paragraphs": [
          "A contract test should be runnable by someone other than the author. Document the command, the environment, and the fixture or sandbox it needs. A test that only works on one laptop is not strong evidence for a release that other people must support. The keep the contract test reproducible record should be dated and linked so a second reviewer can reproduce the result.",
          "Record the exact version of the test and the service it exercised. If the test depends on external state, note that and describe how the state was prepared. The reviewer should be able to rerun the check when the change is questioned later. That check belongs in the keep the contract test reproducible note, with the owner and the next action visible."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Scope",
        "text": "Change the named endpoint and contract surface; list every consumer and error path affected."
      },
      {
        "label": "Evidence",
        "text": "Attach contract tests, consumer checks, and the failure response the client will see."
      },
      {
        "label": "Authority",
        "text": "The client API owner approves the contract and the release owner approves the rollout."
      },
      {
        "label": "Stop rule",
        "text": "Pause when a consumer cannot be identified, a breaking change lacks a migration path, or the rollback action is unclear."
      }
    ],
    "faqs": [
      {
        "question": "Is an additive field always safe?",
        "answer": "Not automatically. A client that rejects unknown fields or validates a strict schema can still break, so the consumer evidence matters."
      },
      {
        "question": "Who owns the API contract?",
        "answer": "The client technical or product owner owns the contract decision. The outsourced programmer can prepare the change and the evidence."
      }
    ],
    "sources": [
      {
        "name": "OpenAPI Specification",
        "url": "https://spec.openapis.org/oas/latest.html",
        "note": "Provides a machine-readable contract format for review and testing."
      },
      {
        "name": "NIST SP 800-218, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/pubs/sp/800/218/final",
        "note": "Supports review and verification of software changes."
      },
      {
        "name": "GitHub Docs: About pull request reviews",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Supports approval tied to a specific commit."
      }
    ],
    "heroImage": "/nov03/blog/api-contract-change-pull-request-packet.webp"
  },
  "review-test-coverage-claims-qa-handoff": {
    "takeaways": [
      "Treat coverage as a map of executed code, not proof of meaningful assertions.",
      "Show the test delta and the behavior each new check protects.",
      "List environment gaps, failed tests, and skipped checks with an owner.",
      "Keep the release decision with the client owner after reviewing the evidence."
    ],
    "readinessRows": [
      {
        "area": "Acceptance mapping",
        "ready": "Each acceptance criterion maps to a named automated or manual check.",
        "notReady": "The handoff reports a percentage without naming the behavior tested."
      },
      {
        "area": "Test delta",
        "ready": "New, changed, and removed tests are listed with the failure each would catch.",
        "notReady": "The total test count is unchanged, so the author implies nothing changed."
      },
      {
        "area": "Environment",
        "ready": "Browser, device, service, and sandbox versions are recorded with skipped environments.",
        "notReady": "The report says the tests passed without naming where they ran."
      },
      {
        "area": "Release",
        "ready": "Failed and skipped tests have an owner and an explicit client decision.",
        "notReady": "A green suite is treated as automatic release approval."
      }
    ],
    "sections": [
      {
        "id": "separate-coverage-from-confidence",
        "title": "Separate coverage from confidence",
        "paragraphs": [
          "A coverage percentage describes which lines or branches a test suite executed. It does not prove that the assertions were meaningful or that the behavior a customer cares about was tested. A handoff that reports ninety percent coverage without naming the tested behavior gives the reviewer a false sense of security. The separate coverage from confidence record should be dated and linked so a second reviewer can reproduce the result.",
          "Ask the QA contributor to map each acceptance criterion to the check that covers it. If a criterion has no check, record the gap. If a check exists but asserts only that the page loaded, describe that limitation rather than counting it as full coverage. That check belongs in the separate coverage from confidence note, with the owner and the next action visible."
        ]
      },
      {
        "id": "show-the-test-delta",
        "title": "Show the test delta",
        "paragraphs": [
          "The handoff should identify which tests are new, which changed, and which were removed. A suite can keep the same total count while losing an important assertion. The delta matters more than the headline number. Link the diff and the test names to the ticket.",
          "For each new test, record the behavior it protects and the failure it would catch. A test that passes for the wrong reason is harder to spot later. The reviewer should be able to see whether the new coverage matches the risk of the change. That check belongs in the show the test delta note, with the owner and the next action visible."
        ]
      },
      {
        "id": "name-the-environment-and-the-gaps",
        "title": "Name the environment and the gaps",
        "paragraphs": [
          "Record the browser, device, operating system, database. Service versions used for the test run. A check that passed on one environment may not cover the customer segment that matters. List the environments that were skipped and the reason, rather than implying that the suite covered everything.",
          "If a test depends on a third-party sandbox, record its state and any behavior that could not be reproduced. A sandbox limitation is a known gap, not a reason to overstate the result. The client owner decides whether the gap blocks release. That check belongs in the name the environment and the gaps note, with the owner and the next action visible."
        ]
      },
      {
        "id": "separate-automated-from-manual-evidence",
        "title": "Separate automated from manual evidence",
        "paragraphs": [
          "Automated checks and manual checks answer different questions. Keep the automated result, the manual exploration notes, and the screenshots or recordings in separate sections. A manual pass should say what was tried, what was observed. What was not covered.",
          "Manual evidence is not stronger simply because a person performed it. It needs a reproducible step and a clear expected result. If the tester cannot explain how to repeat the check, the evidence is an anecdote rather than a test. That check belongs in the separate automated from manual evidence note, with the owner and the next action visible."
        ]
      },
      {
        "id": "review-the-failed-and-skipped-tests",
        "title": "Review the failed and skipped tests",
        "paragraphs": [
          "A handoff that lists only passing tests is incomplete. Record failed tests, the reason, the owner, and whether the failure is expected. Record skipped tests and the condition that would allow them to run. A skipped security or payment test is a material gap, not a neutral status.",
          "The reviewer should decide whether a failure blocks release or needs a documented exception. The QA contributor can prepare the evidence and the recommendation. The client owner keeps the release decision. That boundary prevents a test result from being treated as an automatic approval."
        ]
      },
      {
        "id": "close-with-a-regression-check",
        "title": "Close with a regression check",
        "paragraphs": [
          "After the release, verify the behavior that the tests were meant to protect and check for regressions in the surrounding workflow. Record the result against the same acceptance criteria. If a defect escapes, compare it with the test evidence to see whether the gap was coverage, assertion quality, environment, or review. The close with a regression check record should be dated and linked so a second reviewer can reproduce the result.",
          "The next handoff should include the lesson in a short note and a change to the test plan. A coverage number that rises while the same defect recurs is not an improvement. The goal is evidence that helps the client make a release decision, not a metric that looks good in a report. That check belongs in the close with a regression check note, with the owner and the next action visible."
        ]
      },
      {
        "id": "explain-what-the-test-does-not-cover",
        "title": "Explain what the test does not cover",
        "paragraphs": [
          "Every test plan has a boundary. State which user segments, integrations, data states, and failure modes are outside the current suite. That honesty helps the client decide whether to accept the risk or invest in another check. A report that implies complete coverage is harder to trust than one that names its limits.",
          "If a critical path is untested, propose a manual check or a follow-up test with an owner. Do not leave the gap as an unspoken assumption. The next reviewer should see both the evidence and the boundary in the same handoff. That check belongs in the explain what the test does not cover note, with the owner and the next action visible."
        ]
      },
      {
        "id": "keep-a-regression-sample",
        "title": "Keep a regression sample",
        "paragraphs": [
          "After release, keep a small regression sample that exercises the behavior the change was meant to protect. Run it on a fixed cadence and compare the result with the original acceptance criteria. A sample that is never repeated becomes a historical artifact rather than a control. The keep a regression sample record should be dated and linked so a second reviewer can reproduce the result.",
          "If the sample fails, record whether the cause is the new change, an environment change, or a stale test. The QA contributor can investigate and prepare evidence, while the client owner decides whether to roll back. That division keeps the regression sample useful without turning QA into the release authority. That check belongs in the keep a regression sample note, with the owner and the next action visible."
        ]
      },
      {
        "id": "agree-on-the-acceptable-gap",
        "title": "Agree on the acceptable gap",
        "paragraphs": [
          "Some gaps are acceptable for a low-risk change and unacceptable for a payment or authentication path. Ask the client owner to state the acceptable gap before the test plan is finalized. That decision should be recorded, not inferred from a green suite. The agree on the acceptable gap record should be dated and linked so a second reviewer can reproduce the result.",
          "If the gap changes after review, reopen the decision rather than quietly expanding the release. The QA contributor can explain the consequence and the proposed mitigation, while the owner keeps the risk acceptance. This makes the coverage conversation honest and auditable. That check belongs in the agree on the acceptable gap note, with the owner and the next action visible."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Scope",
        "text": "Test the acceptance criteria for the named change and the surrounding regression path."
      },
      {
        "label": "Evidence",
        "text": "Attach the test delta, environment, failed and skipped results, and manual reproduction steps."
      },
      {
        "label": "Authority",
        "text": "The client product or technical owner decides whether the evidence supports release."
      },
      {
        "label": "Stop rule",
        "text": "Pause when a critical check is skipped, a failure has no owner, or the environment does not represent the customer."
      }
    ],
    "faqs": [
      {
        "question": "Is high coverage a good sign?",
        "answer": "It can be, but only when the assertions are meaningful and the important behavior is covered. Coverage alone does not prove that."
      },
      {
        "question": "Should QA approve the release?",
        "answer": "QA can recommend based on evidence. The client owner keeps the release decision and the exception authority."
      }
    ],
    "sources": [
      {
        "name": "ISO/IEC/IEEE 29119-3, Test documentation",
        "url": "https://www.iso.org/standard/81254.html",
        "note": "Provides a structure for test documentation and evidence."
      },
      {
        "name": "Google Testing Blog",
        "url": "https://testing.googleblog.com/",
        "note": "Practical discussion of test quality and coverage limits."
      },
      {
        "name": "NIST SP 800-218, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/pubs/sp/800/218/final",
        "note": "Supports verification evidence for software changes."
      }
    ],
    "heroImage": "/nov03/blog/review-test-coverage-claims-qa-handoff.webp"
  }
} as const;
