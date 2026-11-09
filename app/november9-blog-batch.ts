export const november9BlogBatch = [
  {
    "slug": "write-a-rollback-rehearsal-plan-for-an-offshore-release-train",
    "title": "Write a rollback rehearsal plan for an offshore release train",
    "excerpt": "A rehearsal plan that proves the previous build can be restored, the data can survive, and the on-call engineer knows who decides.",
    "minutes": 8,
    "published": "2026-11-09",
    "body": [
      "## Pick the release that deserves a rehearsal",
      "Not every release needs a full rollback rehearsal, so choose the one with the highest cost of a failed restore. A schema change, a new payment path, or a dependency upgrade that touches the login flow are good candidates. Write the release identifier, the owner, and the reason it was chosen. A rehearsal that is scheduled for every trivial deploy will be skipped within a month.",
      "Choose a release that is already in production or in a staging environment that matches production. A rehearsal on a different runtime proves nothing about the artifact that will ship. Record the build digest and the environment configuration. If the staging environment cannot match production, state the difference and who accepted it.",
      "## Write the restore steps before the rehearsal",
      "The plan should list the previous artifact, the database state, the feature flags, and the order in which they are restored. Each step needs a command or a link to the runbook. A plan that says restore the service is not a plan. The on-call engineer should be able to follow it without the release author on the call.",
      "Decide whether the restore is a code rollback, a data rollback, or both. A code rollback that leaves a migrated schema in place may fail silently. A data rollback that overwrites customer changes may be worse than the incident. Write the decision rule and the person who can approve a data restore. The rule should be visible before the rehearsal starts.",
      "Keep the previous build available for the full monitoring window, not only for the deploy. A rollback that is possible for an hour and impossible by the next morning is a partial control. Record the retention period and the person who can extend it. Test the artifact download as part of the rehearsal.",
      "## Run the rehearsal on a copy with real constraints",
      "Run the rehearsal on a copy that uses the same database engine, the same runtime, and the same access model. A copy that runs on a developer laptop can pass while the production restore fails. Give the rehearsal a time limit and a customer-impact rule. The team should practice under a constraint that resembles the real incident.",
      "Include the people who would be on the bridge: the offshore operator, the client approver, and the support lead. Ask each person to perform their own step rather than watch the author. The operator should run the restore command, not repeat it from a slide. The approver should make the decision in the rehearsal, not only in the plan.",
      "Record the time from the decision to the restored service, the time to verify the customer path, and the time to close the rehearsal. Compare the result with the target in the release plan. A rehearsal that takes twice as long as the allowed window has found a real problem, not a training issue. Record that time in the release log so the next rehearsal starts from a real baseline.",
      "## Test the data and the customer path",
      "A restore is not complete when the service starts. Check the login, the main transaction, the admin action, and the report that depends on the changed data. Use a test account that exercises the same permissions as a real customer. Record the result with a timestamp and the build digest.",
      "If the release changed a schema, verify that the previous application can read the current data. A backward-compatible migration is the goal, but the rehearsal should prove it. If the old code cannot read the new schema, the rollback plan must include a data path or a forward fix. Write that decision in the plan.",
      "Check the background jobs and the queue consumers as well as the web path. A service that serves pages but cannot process payments is not restored. Record the job names and the evidence that each one processed a message. The support lead should confirm that the customer-visible symptom is gone.",
      "## Assign the decision and the communication",
      "Name the person who decides to roll back and the backup who can decide when the first person is unavailable. The decision should be based on a written trigger, such as an error rate above a threshold for ten minutes. Record the trigger, the approver, and the channel. A rehearsal without a decision owner becomes a debate during the incident.",
      "Write the customer message and the internal update before the rehearsal. The message should say what is affected, what the team is doing, and when the next update will come. Do not include a cause until the team has evidence. Store the approved wording with the release record so the next update starts from a known text.",
      "Practice the handoff between the incident lead and the support lead. Support needs to know which customers to contact and what to say. The incident lead needs to know which support questions require an engineering answer. A short read-back at the end of the rehearsal exposes gaps in both directions.",
      "## Review the rehearsal and change one thing",
      "After the rehearsal, review the timeline, the failures, and the questions that required a call. Ask the operator which step was unclear and the approver which decision was hard. Record one change to the plan and a date to test it. A rehearsal that produces no change is either perfect or too easy.",
      "Repeat the rehearsal after a major architecture change, not only once a year. A restore path that worked before a service split may no longer be valid. Keep the previous rehearsal record with the release plan. The next team should be able to see what was tested and what was assumed."
    ]
  },
  {
    "slug": "set-a-defect-triage-rota-for-an-outsourced-maintenance-team",
    "title": "Set a defect triage rota for an outsourced maintenance team",
    "excerpt": "A triage rota that names the first responder, the severity rule, the client decision, and the evidence required before a fix starts.",
    "minutes": 8,
    "published": "2026-11-09",
    "body": [
      "## Define what triage decides",
      "Triage decides whether a report is a defect, a support question, a duplicate, or a change request. It also decides the severity and the next owner. A rota without that decision becomes a forwarding queue. Write the four outcomes and the evidence needed for each. The first responder should be able to classify a report without asking the whole team.",
      "Separate the severity from the priority. Severity describes the customer impact, while priority describes when the team will work on it. A billing error may be high severity and high priority, while a cosmetic issue may be low severity but still urgent for a launch. Record both fields and the person who set them.",
      "Publish the triage window and the expected first response. A report that arrives after the window should go to the next shift with a note. Do not let an after-hours report sit without an acknowledgement. The acknowledgement can be separate from the fix.",
      "## Name the first responder and the backup",
      "The rota should name one first responder and one backup for each day. The first responder owns the initial classification and the response. The backup covers leave, illness, and a queue spike. Publish both names where the support team can see them. A rota that names only a team, not a person, has no owner.",
      "Give the first responder the authority to ask for more information, close a duplicate, and assign a severity within the written rule. Do not require approval for every classification. Keep the escalation for a severity disagreement or a customer commitment. Record the authority in the triage guide so the team does not invent it.",
      "Rotate the role weekly rather than daily. A daily rotation spreads context too thin and produces inconsistent classifications. The weekly owner should review the previous week's decisions before starting. That review is the handoff.",
      "## Write the severity examples",
      "Write one example for each severity level using the product's real terms. A login outage for all customers is critical, while a broken report for one account may be major. A typo in an email is minor. The examples should be specific enough that two responders classify the same report the same way.",
      "Include the boundary cases that cause arguments, such as a workaround that exists but is slow. A workaround may lower the priority but not the severity if the customer impact is still high. Record the rule and the exception. The triage guide should explain the reasoning, not only the label.",
      "Review the examples after a release that changes the product. A new feature may create a failure mode that the old examples do not cover. Add one example and remove one that no longer applies. Keep the guide short enough to use during a busy day.",
      "## Require evidence before the fix",
      "A defect should move to a fix only when the report has a reproduction, the affected version, the customer impact, and the expected result. The triage owner can gather the missing evidence or send it back. A fix that starts without a reproduction often becomes a guess. The evidence is part of the ticket, not a separate message.",
      "For a customer-reported defect, record the account, the environment, and the time. For an internal report, record the build and the test that failed. A screenshot without a build tells the engineer very little. The triage owner should reject the report politely and ask for the missing field.",
      "Link the defect to the change that may have introduced it when the link is supported by evidence. Do not blame a release without a check. If the link is unknown, mark it unknown and let the fix team investigate. A false link sends the team down the wrong path.",
      "## Keep the client decision separate",
      "The offshore team can classify and fix, but the client owns the decision to change scope, delay a release, or accept a known issue. Write the decisions that require client approval and the person who can make them. A triage owner who promises a fix date without approval creates a commitment the team may not meet. Give the client a decision template that names the scope, date, and accepted risk.",
      "When the client disagrees with the severity, record both positions and the evidence. Set a time to resolve the disagreement rather than letting it stall the ticket. If the client accepts a workaround, record the acceptance and the review date. The acceptance is a decision, not a silent downgrade.",
      "Give the client a short daily summary of new critical and major defects. The summary should include the customer impact, the owner, and the next update. A client who hears about a critical issue three days later loses confidence in the triage process. Ask the client to confirm the summary format once, then keep it stable.",
      "## Review the rota monthly",
      "Review the number of reports by outcome, the time to first response, and the share that required a second classification. Ask the responders which report was hardest and why. Look for a category that repeatedly needs escalation, because that may mean the guide is missing an example. Add the repeated category to the guide instead of escalating it again.",
      "Change one rule or one example at a time and measure the effect. A rota that is revised every week becomes unstable, while one that is never revised becomes stale. Record the change and the next review date. The goal is a triage decision the team can repeat without a meeting."
    ]
  },
  {
    "slug": "define-a-client-approval-window-for-offshore-database-changes",
    "title": "Define a client approval window for offshore database changes",
    "excerpt": "An approval window that separates schema review, data review, deploy authority, and the emergency path for a production fix.",
    "minutes": 8,
    "published": "2026-11-09",
    "body": [
      "## Separate the change types",
      "A database change can be a schema migration, a data correction, a permission change, or a backup restore. Each type carries a different risk and needs a different approver. Write the four types and the evidence required for each. A single approval window for everything either blocks small changes or waves through risky ones.",
      "Classify the change before the approval meeting, not during it. The offshore team should submit the type, the affected tables, the estimated row count, and the rollback plan. The client reviewer should see the classification and the evidence in one place. A change that cannot be classified should not be approved.",
      "Record the environment and the data source for the change. A correction on a staging copy is not the same as a correction on production. The approval should name the environment and the person who will run the change. A generic approval that does not name the environment is too broad.",
      "## Set the review window and the cut-off",
      "Publish a weekly approval window with a submission cut-off and a decision date. A change submitted after the cut-off waits for the next window unless it meets the emergency rule. The window should be long enough for the client to review and short enough that the offshore team can plan. Put the dates in both calendars.",
      "Record the reviewer's decision as approved, approved with conditions, or rejected. A conditional approval should name the condition and the person who will verify it. Do not let a verbal approval become a production change without a written record. The record is the evidence for the next audit.",
      "Keep an emergency path for a production incident, with a named on-call approver and a shorter review. The emergency path should still require a rollback step and a post-change review. An emergency that skips every control becomes the normal path within a month. Test the emergency path once a quarter so the shortcut does not become a blind spot.",
      "## Require a schema and data impact note",
      "The impact note should name the tables, the columns, the indexes, and the queries that will be affected. Include the estimated lock time and the expected row count. A migration that locks a large table during business hours can cause an outage even when the change is correct. The client reviewer needs that information to choose a window.",
      "Describe the backward compatibility of the change. Can the previous application version read the new schema? Can the new version read the old data? If the answer is no, the change needs a coordinated deploy or a two-step migration. Write the sequence and the person who owns each step.",
      "Include the data retention and privacy impact. A change that copies personal data to a new table needs a retention rule and an access review. A change that deletes data needs a backup and a restore test. The approval should not proceed without those answers.",
      "## Keep deploy authority with the client",
      "The offshore team can prepare the migration and run it in staging, but the production execution should be approved by the client owner. Write who can press the button, who can approve an emergency, and who can stop the change. A team that can approve and execute its own production change has no independent control. Record the execution approval separately from the change approval.",
      "Use a named account for the execution and record the session. The client owner should be reachable during the window, not only before it. If the owner is unavailable, the change waits or the named backup approves. Do not infer approval from silence.",
      "After the change, the client owner should confirm the result against the acceptance check. A migration that ran without error but broke a report is not successful. Record the confirmation and the time. The approval is complete only when the result is accepted.",
      "## Test the rollback and the restore",
      "Every schema change needs a rollback or a forward fix. A down migration that has never been run is a guess. Test the rollback on a copy with production-like data and record the time. If the rollback is unsafe because of data loss, write the forward fix and the conditions that would trigger it.",
      "Test the backup restore separately from the schema rollback. A backup that cannot be restored is not a backup. Record the restore time and the person who verified it. The client should know how long a full restore would take before approving a risky change.",
      "Keep the previous schema and the previous application artifact available for the monitoring window. A rollback that depends on a build that has already been deleted is not available. Record the retention period and the owner. Add the artifact location to the release checklist so nobody has to ask.",
      "## Review the window quarterly",
      "Review the number of changes by type, the time from submission to decision, and the number that required an emergency path. Ask the client reviewer which change was hardest and why. Look for a type that repeatedly misses the window, because that may mean the evidence requirement is unclear. Add the missing evidence field to the request template.",
      "Change one part of the process at a time. If the review is slow, add a pre-review checklist before changing the approver. If the emergency path is used often, fix the normal window rather than tightening the exception. Record the change and the next review date.",
      "Keep the approval record with the migration file so a later reviewer can see why the change was allowed. A record stored only in an email is hard to find during an audit. Link the approval identifier from the migration and the release note. The next change should start from the last approved example, not from a blank page."
    ]
  },
  {
    "slug": "run-a-quarterly-secrets-rotation-review-for-an-offshore-team",
    "title": "Run a quarterly secrets rotation review for an offshore team",
    "excerpt": "A quarterly review that finds stale credentials, tests the rotation path, and keeps emergency access accountable.",
    "minutes": 8,
    "published": "2026-11-09",
    "body": [
      "## Inventory the secrets that matter",
      "Start with an inventory of the secrets the offshore team can reach: API keys, database passwords, signing keys, webhook secrets, and service accounts. Group them by system and by owner. Do not try to inventory every secret in the company in the first review. A short, accurate list is more useful than a complete list that nobody maintains.",
      "Record the last rotation date, the expiry date, and the person who can rotate each secret. Include the secrets that are shared with a client system, because those often have a different owner. Mark the secrets that have no expiry, since they are the ones most likely to be forgotten. Add the owner and the review date to the inventory.",
      "Keep the inventory in the client's secret manager or a protected document, not in a repository. Record only the secret identifier and the metadata, never the value. The review should be possible without exposing the secret to the reviewer. Store the inventory under the same access rule as the secret manager.",
      "## Find the stale and over-privileged credentials",
      "Look for secrets that have not been rotated within the policy window, secrets that belong to a person who has left, and secrets that grant more access than the integration needs. A key that can read and write every bucket is a finding even if it was rotated yesterday. Record the finding and the owner. Group the finding by system so the owner can see the pattern.",
      "Check the service accounts and the CI tokens as well as the human accounts. A build token that can deploy to production is a high-risk secret, even when it is not used by a person. Record the scope and the last use. A token that has not been used for ninety days may be a candidate for removal.",
      "Review the emergency access accounts separately. They should be few, named, and monitored. A shared emergency password that nobody rotates is a standing risk. Record who can use it and how the use is logged.",
      "## Test the rotation path, not only the policy",
      "Pick one secret from each system and rotate it in a test environment. Record the time, the person, and the services that needed an update. A rotation that breaks an integration is a finding about the documentation, not a reason to skip the rotation. Fix the runbook before the next quarterly review.",
      "Check that the old secret stops working after the rotation. A rotation that creates a new key but leaves the old one valid does not reduce risk. Record the revocation step and the verification. If the system cannot revoke immediately, write the window and the compensating control.",
      "Test the emergency rotation path with the on-call engineer. The person who rotates at 2 a.m. should be able to find the runbook and the approver. Record the time to rotate and the questions that required a call. A path that only the security team can run is not resilient.",
      "## Separate duties and approvals",
      "The person who can read a secret should not always be the person who can rotate it. Define the roles for requesting, approving, rotating, and verifying. In a small team, one person may hold two roles, but the review should record the exception. A single person who can rotate and verify without a check has no independent control.",
      "Keep the production rotation approval with the client owner or the security lead. The offshore team can prepare and execute, but the approval should be recorded. For an emergency, name the on-call approver and the post-event review. Do not let the emergency path become the normal path.",
      "Log every rotation with the secret identifier, the time, the actor, and the reason. Do not log the value. The log is the evidence for the next review and for an incident investigation. Review one log entry each quarter to confirm it is still readable and complete.",
      "## Plan the remediation with dates",
      "For each finding, name the owner, the action, and the date. A finding that says rotate soon is not a plan. Prioritize the secrets that are exposed to the most systems or the least trusted network. A stale key on a public endpoint is more urgent than an unused key in a closed environment.",
      "Track the remediation in the same place as the inventory. Close a finding only when the old secret is revoked and the dependent services are confirmed working. Record the verification. A finding closed because a ticket was updated is not closed.",
      "Review the exceptions at the next quarter. If the same exception appears twice, decide whether to fix the system or change the policy. A permanent exception should be documented as an accepted risk with an owner. Set a review date even when the exception is accepted.",
      "## Report to the client in plain language",
      "The report should state the number of secrets reviewed, the number rotated, the number stale, and the number with excessive access. Add the remediation dates and the one risk that needs a client decision. Keep it short enough that the client owner will read it. Add the top risk and the requested decision to the first page.",
      "Do not include secret values, internal hostnames, or unnecessary system details. Share the identifiers the client needs to act and keep the rest in the protected inventory. The report is a management document, not a technical dump. State the audience on the cover so the report is not forwarded blindly.",
      "Ask the client for one decision at the end, such as approving a rotation window or removing an unused integration. A report without a decision tends to be filed and forgotten. The next review should show whether the decision was implemented. Record the decision in the client meeting notes.",
      "Give the client a short decision list rather than a long findings report. One page with the top three risks, the owner, and the requested decision is enough to start a conversation. The detailed inventory can stay in the protected system. A decision list is more likely to produce an action before the next quarter."
    ]
  },
  {
    "slug": "write-a-support-escalation-map-for-an-offshore-application-team",
    "title": "Write a support escalation map for an offshore application team",
    "excerpt": "An escalation map that separates a product question, a defect, an outage, and a security report before the ticket reaches engineering.",
    "minutes": 8,
    "published": "2026-11-09",
    "body": [
      "## Start from the customer symptom",
      "An escalation map should begin with what the customer sees, not with the internal team name. A login failure, a wrong balance, a slow report, and a missing email are four different paths. Write the symptom and the first check for each. A support agent should be able to choose a path without understanding the architecture.",
      "Group the symptoms into a small number of categories: access, data accuracy, performance, notification, and security. Each category has a different first responder and a different evidence requirement. A map with twenty categories is a menu; a map with five is a decision aid. Ask one support agent to test the categories with two real tickets.",
      "Record the customer impact and the urgency beside each path. A wrong balance may be low volume but high severity, while a slow report may affect many users but have a workaround. The map should help the agent choose the response, not only the team. Add the customer impact to the path description, not only the severity.",
      "## Name the first responder and the time target",
      "Each path should name a first responder and a response target. The first responder may be the support lead, the on-call engineer, or the security contact. The target should be realistic for the team's hours and time zones. Publish both in the same place as the map.",
      "Separate the acknowledgement target from the fix target. A support agent needs to know when the customer will hear, not only when the defect will be fixed. Record the next-update time and the person who owns it. A missed acknowledgement is often worse than a slow fix.",
      "Give the first responder the authority to ask for logs, open an incident, and reassign the ticket. Do not require a manager approval for every escalation. Keep the approval for a customer credit, a public statement, or a production change. Write the list of approvals that stay with the client so the boundary is explicit.",
      "## Require evidence at each step",
      "The map should list the evidence the next team needs: the account, the time, the build, the request identifier, and the exact error. A screenshot without a timestamp is weak. A log line without the request identifier is hard to trace. The support agent should gather the evidence before the handoff.",
      "For a performance issue, record the page, the region, the device, and whether the problem is constant or intermittent. For a data issue, record the expected and actual values and the source of the expectation. For a security report, do not ask the customer to send sensitive data through the ticket; use the approved secure channel. Test the secure channel with a harmless sample before an incident.",
      "Make the evidence requirement part of the ticket form. A required field is easier to enforce than a reminder in a meeting. If the field is missing, the ticket can still be accepted, but the escalation should state what is missing and who will gather it. Make the missing field a required input in the ticket form.",
      "## Keep the on-call path short",
      "The on-call path should be one page: the trigger, the person, the channel, and the backup. Include the customer-facing update template and the incident channel. An on-call engineer should not have to search a wiki during an outage. Test the path with a drill once a quarter.",
      "Define the trigger for waking the on-call engineer. A single customer report may not justify a page, while a rise in errors across accounts may. Write the threshold and the person who can override it. Record the decision in the incident record.",
      "Give the on-call engineer a way to hand back to support when the issue is not a defect. A misrouted ticket should return with a reason and a suggested next step, not a silent reassignment. The map should make the return path as clear as the escalation path. Test the return path with a misrouted ticket before the next release.",
      "## Protect security and privacy escalations",
      "A security report should go to a named security contact, not a general engineering queue. Record the channel, the acknowledgement target, and the evidence rule. Do not ask the reporter to send passwords or full customer records. Use the approved secure upload and redact what is not needed.",
      "Keep the distribution list small. A security escalation that is posted in a wide channel can expose the customer and the business. Record who needs to know and who does not. The incident lead should control the updates.",
      "Review the security path with the client owner each quarter. A change in the client's security team or tooling can make the old contact obsolete. Record the review date and the current contact. Put the review date in the security calendar with a named owner.",
      "Test the security path with a tabletop exercise rather than a real report. Walk through who receives the report, who acknowledges it, and who decides whether to notify the client. Record the gaps and fix the contact list. A path that has never been walked through is a diagram, not a control.",
      "## Review the map after every major incident",
      "After an incident, ask which path the team used and where the map was wrong. A path that required a call to find the right person is a gap. Update the contact, the trigger, or the evidence field. Record the change and the date.",
      "Check the map against the actual ticket categories each quarter. A new product area may need a new path, while an old path may no longer have a customer. Remove the stale path rather than leaving it as a trap. The map should reflect the current product and team.",
      "Ask the support team which path they use most and which one causes the most confusion. The answer may point to a missing category or a stale contact. Fix the top confusion before adding another page to the map. A short map that people use is better than a complete map that they ignore."
    ]
  }
];

export const november9BlogDetails = {
  "write-a-rollback-rehearsal-plan-for-an-offshore-release-train": {
    "takeaways": [
      "Choose the release with the highest cost of a failed restore.",
      "Write the commands before the rehearsal, not after.",
      "Make the operator run the restore and the approver make the call.",
      "Verify the customer path and background jobs, not only the home page.",
      "Record one plan change and a date to test it."
    ],
    "readinessRows": [
      {
        "area": "Artifact",
        "ready": "The previous build is available and tested.",
        "notReady": "A note that says redeploy last week."
      },
      {
        "area": "Data",
        "ready": "The schema compatibility path is written and owned.",
        "notReady": "A hope that the old code still works."
      },
      {
        "area": "Decision",
        "ready": "A trigger, an approver, and a backup are named.",
        "notReady": "A debate during the incident."
      },
      {
        "area": "Evidence",
        "ready": "The customer path and jobs are verified after restore.",
        "notReady": "The service starts, so it is declared fixed."
      }
    ],
    "sections": [
      {
        "id": "pick-the-release-that-deserves-a-rehearsal",
        "title": "Pick the release that deserves a rehearsal",
        "paragraphs": [
          "Not every release needs a full rollback rehearsal, so choose the one with the highest cost of a failed restore. A schema change, a new payment path, or a dependency upgrade that touches the login flow are good candidates. Write the release identifier, the owner, and the reason it was chosen. A rehearsal that is scheduled for every trivial deploy will be skipped within a month.",
          "Choose a release that is already in production or in a staging environment that matches production. A rehearsal on a different runtime proves nothing about the artifact that will ship. Record the build digest and the environment configuration. If the staging environment cannot match production, state the difference and who accepted it."
        ]
      },
      {
        "id": "write-the-restore-steps-before-the-rehearsal",
        "title": "Write the restore steps before the rehearsal",
        "paragraphs": [
          "The plan should list the previous artifact, the database state, the feature flags, and the order in which they are restored. Each step needs a command or a link to the runbook. A plan that says restore the service is not a plan. The on-call engineer should be able to follow it without the release author on the call.",
          "Decide whether the restore is a code rollback, a data rollback, or both. A code rollback that leaves a migrated schema in place may fail silently. A data rollback that overwrites customer changes may be worse than the incident. Write the decision rule and the person who can approve a data restore. The rule should be visible before the rehearsal starts.",
          "Keep the previous build available for the full monitoring window, not only for the deploy. A rollback that is possible for an hour and impossible by the next morning is a partial control. Record the retention period and the person who can extend it. Test the artifact download as part of the rehearsal."
        ]
      },
      {
        "id": "run-the-rehearsal-on-a-copy-with-real-constraints",
        "title": "Run the rehearsal on a copy with real constraints",
        "paragraphs": [
          "Run the rehearsal on a copy that uses the same database engine, the same runtime, and the same access model. A copy that runs on a developer laptop can pass while the production restore fails. Give the rehearsal a time limit and a customer-impact rule. The team should practice under a constraint that resembles the real incident.",
          "Include the people who would be on the bridge: the offshore operator, the client approver, and the support lead. Ask each person to perform their own step rather than watch the author. The operator should run the restore command, not repeat it from a slide. The approver should make the decision in the rehearsal, not only in the plan.",
          "Record the time from the decision to the restored service, the time to verify the customer path, and the time to close the rehearsal. Compare the result with the target in the release plan. A rehearsal that takes twice as long as the allowed window has found a real problem, not a training issue. Record that time in the release log so the next rehearsal starts from a real baseline."
        ]
      },
      {
        "id": "test-the-data-and-the-customer-path",
        "title": "Test the data and the customer path",
        "paragraphs": [
          "A restore is not complete when the service starts. Check the login, the main transaction, the admin action, and the report that depends on the changed data. Use a test account that exercises the same permissions as a real customer. Record the result with a timestamp and the build digest.",
          "If the release changed a schema, verify that the previous application can read the current data. A backward-compatible migration is the goal, but the rehearsal should prove it. If the old code cannot read the new schema, the rollback plan must include a data path or a forward fix. Write that decision in the plan.",
          "Check the background jobs and the queue consumers as well as the web path. A service that serves pages but cannot process payments is not restored. Record the job names and the evidence that each one processed a message. The support lead should confirm that the customer-visible symptom is gone."
        ]
      },
      {
        "id": "assign-the-decision-and-the-communication",
        "title": "Assign the decision and the communication",
        "paragraphs": [
          "Name the person who decides to roll back and the backup who can decide when the first person is unavailable. The decision should be based on a written trigger, such as an error rate above a threshold for ten minutes. Record the trigger, the approver, and the channel. A rehearsal without a decision owner becomes a debate during the incident.",
          "Write the customer message and the internal update before the rehearsal. The message should say what is affected, what the team is doing, and when the next update will come. Do not include a cause until the team has evidence. Store the approved wording with the release record so the next update starts from a known text.",
          "Practice the handoff between the incident lead and the support lead. Support needs to know which customers to contact and what to say. The incident lead needs to know which support questions require an engineering answer. A short read-back at the end of the rehearsal exposes gaps in both directions."
        ]
      },
      {
        "id": "review-the-rehearsal-and-change-one-thing",
        "title": "Review the rehearsal and change one thing",
        "paragraphs": [
          "After the rehearsal, review the timeline, the failures, and the questions that required a call. Ask the operator which step was unclear and the approver which decision was hard. Record one change to the plan and a date to test it. A rehearsal that produces no change is either perfect or too easy.",
          "Repeat the rehearsal after a major architecture change, not only once a year. A restore path that worked before a service split may no longer be valid. Keep the previous rehearsal record with the release plan. The next team should be able to see what was tested and what was assumed."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Release owner",
        "text": "Writes the restore steps and the compatibility decision."
      },
      {
        "label": "On-call operator",
        "text": "Runs the restore and verifies the customer path."
      },
      {
        "label": "Client approver",
        "text": "Owns the rollback decision and the customer message."
      }
    ],
    "faqs": [
      {
        "question": "How often should a rollback rehearsal run?",
        "answer": "For every high-risk release and after any architecture change that alters the restore path."
      },
      {
        "question": "Who decides to roll back during an incident?",
        "answer": "A named approver using a written trigger, with a named backup."
      },
      {
        "question": "What proves the restore worked?",
        "answer": "The customer path, the background jobs, and the data compatibility check all pass."
      }
    ],
    "sources": [
      {
        "name": "Google SRE Book, release engineering",
        "url": "https://sre.google/sre-book/release-engineering/",
        "note": "Release and rollback practice."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Change control and secure release evidence."
      },
      {
        "name": "Atlassian incident management handbook",
        "url": "https://www.atlassian.com/incident-management/handbook",
        "note": "Decision roles and incident communication."
      }
    ],
    "heroImage": "/nov09/blog/write-a-rollback-rehearsal-plan-for-an-offshore-release-train.webp"
  },
  "set-a-defect-triage-rota-for-an-outsourced-maintenance-team": {
    "takeaways": [
      "Name the four triage outcomes and the evidence for each.",
      "Separate customer severity from work priority.",
      "Publish a weekly first responder and a named backup.",
      "Require a reproduction and build before a fix starts.",
      "Keep client scope and release decisions outside the rota."
    ],
    "readinessRows": [
      {
        "area": "Outcome",
        "ready": "Defect, question, duplicate, and change are defined.",
        "notReady": "Everything is forwarded to engineering."
      },
      {
        "area": "Severity",
        "ready": "Real examples and boundary cases are written.",
        "notReady": "A label chosen by whoever is loudest."
      },
      {
        "area": "Evidence",
        "ready": "Reproduction, build, impact, and expected result are required.",
        "notReady": "A screenshot with no context."
      },
      {
        "area": "Authority",
        "ready": "Client decisions have a named owner.",
        "notReady": "The triage owner promises a fix date."
      }
    ],
    "sections": [
      {
        "id": "define-what-triage-decides",
        "title": "Define what triage decides",
        "paragraphs": [
          "Triage decides whether a report is a defect, a support question, a duplicate, or a change request. It also decides the severity and the next owner. A rota without that decision becomes a forwarding queue. Write the four outcomes and the evidence needed for each. The first responder should be able to classify a report without asking the whole team.",
          "Separate the severity from the priority. Severity describes the customer impact, while priority describes when the team will work on it. A billing error may be high severity and high priority, while a cosmetic issue may be low severity but still urgent for a launch. Record both fields and the person who set them.",
          "Publish the triage window and the expected first response. A report that arrives after the window should go to the next shift with a note. Do not let an after-hours report sit without an acknowledgement. The acknowledgement can be separate from the fix."
        ]
      },
      {
        "id": "name-the-first-responder-and-the-backup",
        "title": "Name the first responder and the backup",
        "paragraphs": [
          "The rota should name one first responder and one backup for each day. The first responder owns the initial classification and the response. The backup covers leave, illness, and a queue spike. Publish both names where the support team can see them. A rota that names only a team, not a person, has no owner.",
          "Give the first responder the authority to ask for more information, close a duplicate, and assign a severity within the written rule. Do not require approval for every classification. Keep the escalation for a severity disagreement or a customer commitment. Record the authority in the triage guide so the team does not invent it.",
          "Rotate the role weekly rather than daily. A daily rotation spreads context too thin and produces inconsistent classifications. The weekly owner should review the previous week's decisions before starting. That review is the handoff."
        ]
      },
      {
        "id": "write-the-severity-examples",
        "title": "Write the severity examples",
        "paragraphs": [
          "Write one example for each severity level using the product's real terms. A login outage for all customers is critical, while a broken report for one account may be major. A typo in an email is minor. The examples should be specific enough that two responders classify the same report the same way.",
          "Include the boundary cases that cause arguments, such as a workaround that exists but is slow. A workaround may lower the priority but not the severity if the customer impact is still high. Record the rule and the exception. The triage guide should explain the reasoning, not only the label.",
          "Review the examples after a release that changes the product. A new feature may create a failure mode that the old examples do not cover. Add one example and remove one that no longer applies. Keep the guide short enough to use during a busy day."
        ]
      },
      {
        "id": "require-evidence-before-the-fix",
        "title": "Require evidence before the fix",
        "paragraphs": [
          "A defect should move to a fix only when the report has a reproduction, the affected version, the customer impact, and the expected result. The triage owner can gather the missing evidence or send it back. A fix that starts without a reproduction often becomes a guess. The evidence is part of the ticket, not a separate message.",
          "For a customer-reported defect, record the account, the environment, and the time. For an internal report, record the build and the test that failed. A screenshot without a build tells the engineer very little. The triage owner should reject the report politely and ask for the missing field.",
          "Link the defect to the change that may have introduced it when the link is supported by evidence. Do not blame a release without a check. If the link is unknown, mark it unknown and let the fix team investigate. A false link sends the team down the wrong path."
        ]
      },
      {
        "id": "keep-the-client-decision-separate",
        "title": "Keep the client decision separate",
        "paragraphs": [
          "The offshore team can classify and fix, but the client owns the decision to change scope, delay a release, or accept a known issue. Write the decisions that require client approval and the person who can make them. A triage owner who promises a fix date without approval creates a commitment the team may not meet. Give the client a decision template that names the scope, date, and accepted risk.",
          "When the client disagrees with the severity, record both positions and the evidence. Set a time to resolve the disagreement rather than letting it stall the ticket. If the client accepts a workaround, record the acceptance and the review date. The acceptance is a decision, not a silent downgrade.",
          "Give the client a short daily summary of new critical and major defects. The summary should include the customer impact, the owner, and the next update. A client who hears about a critical issue three days later loses confidence in the triage process. Ask the client to confirm the summary format once, then keep it stable."
        ]
      },
      {
        "id": "review-the-rota-monthly",
        "title": "Review the rota monthly",
        "paragraphs": [
          "Review the number of reports by outcome, the time to first response, and the share that required a second classification. Ask the responders which report was hardest and why. Look for a category that repeatedly needs escalation, because that may mean the guide is missing an example. Add the repeated category to the guide instead of escalating it again.",
          "Change one rule or one example at a time and measure the effect. A rota that is revised every week becomes unstable, while one that is never revised becomes stale. Record the change and the next review date. The goal is a triage decision the team can repeat without a meeting."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "First responder",
        "text": "Classifies the report and gathers the missing evidence."
      },
      {
        "label": "Backup",
        "text": "Covers leave and queue spikes with the same authority."
      },
      {
        "label": "Client owner",
        "text": "Decides scope, release timing, and accepted workarounds."
      }
    ],
    "faqs": [
      {
        "question": "Who sets severity?",
        "answer": "The weekly first responder, using written examples, with escalation for disagreements."
      },
      {
        "question": "Can a fix start without a reproduction?",
        "answer": "Only for a critical outage where the evidence is being gathered in parallel; record why."
      },
      {
        "question": "How often should the rota change?",
        "answer": "Weekly for the responder role, with a monthly review of the rules and examples."
      }
    ],
    "sources": [
      {
        "name": "ISTQB glossary",
        "url": "https://glossary.istqb.org/",
        "note": "Defect and severity terminology."
      },
      {
        "name": "Google Testing Blog",
        "url": "https://testing.googleblog.com/",
        "note": "Reproduction and test evidence practice."
      },
      {
        "name": "Atlassian incident management handbook",
        "url": "https://www.atlassian.com/incident-management/handbook",
        "note": "Severity and response roles."
      }
    ],
    "heroImage": "/nov09/blog/set-a-defect-triage-rota-for-an-outsourced-maintenance-team.webp"
  },
  "define-a-client-approval-window-for-offshore-database-changes": {
    "takeaways": [
      "Classify schema, data, permission, and restore changes separately.",
      "Publish a submission cut-off and a decision date.",
      "Require lock time, row count, compatibility, and privacy impact.",
      "Keep production execution authority with the named client owner.",
      "Test the rollback and the backup restore before approval."
    ],
    "readinessRows": [
      {
        "area": "Classification",
        "ready": "Change type, tables, rows, and environment are named.",
        "notReady": "A general request to update the database."
      },
      {
        "area": "Impact",
        "ready": "Lock time, compatibility, and privacy are written.",
        "notReady": "A migration with no row estimate."
      },
      {
        "area": "Authority",
        "ready": "Execution and emergency approval are separate.",
        "notReady": "The offshore team approves its own change."
      },
      {
        "area": "Recovery",
        "ready": "Rollback and restore are tested and timed.",
        "notReady": "A down migration that was never run."
      }
    ],
    "sections": [
      {
        "id": "separate-the-change-types",
        "title": "Separate the change types",
        "paragraphs": [
          "A database change can be a schema migration, a data correction, a permission change, or a backup restore. Each type carries a different risk and needs a different approver. Write the four types and the evidence required for each. A single approval window for everything either blocks small changes or waves through risky ones.",
          "Classify the change before the approval meeting, not during it. The offshore team should submit the type, the affected tables, the estimated row count, and the rollback plan. The client reviewer should see the classification and the evidence in one place. A change that cannot be classified should not be approved.",
          "Record the environment and the data source for the change. A correction on a staging copy is not the same as a correction on production. The approval should name the environment and the person who will run the change. A generic approval that does not name the environment is too broad."
        ]
      },
      {
        "id": "set-the-review-window-and-the-cut-off",
        "title": "Set the review window and the cut-off",
        "paragraphs": [
          "Publish a weekly approval window with a submission cut-off and a decision date. A change submitted after the cut-off waits for the next window unless it meets the emergency rule. The window should be long enough for the client to review and short enough that the offshore team can plan. Put the dates in both calendars.",
          "Record the reviewer's decision as approved, approved with conditions, or rejected. A conditional approval should name the condition and the person who will verify it. Do not let a verbal approval become a production change without a written record. The record is the evidence for the next audit.",
          "Keep an emergency path for a production incident, with a named on-call approver and a shorter review. The emergency path should still require a rollback step and a post-change review. An emergency that skips every control becomes the normal path within a month. Test the emergency path once a quarter so the shortcut does not become a blind spot."
        ]
      },
      {
        "id": "require-a-schema-and-data-impact-note",
        "title": "Require a schema and data impact note",
        "paragraphs": [
          "The impact note should name the tables, the columns, the indexes, and the queries that will be affected. Include the estimated lock time and the expected row count. A migration that locks a large table during business hours can cause an outage even when the change is correct. The client reviewer needs that information to choose a window.",
          "Describe the backward compatibility of the change. Can the previous application version read the new schema? Can the new version read the old data? If the answer is no, the change needs a coordinated deploy or a two-step migration. Write the sequence and the person who owns each step.",
          "Include the data retention and privacy impact. A change that copies personal data to a new table needs a retention rule and an access review. A change that deletes data needs a backup and a restore test. The approval should not proceed without those answers."
        ]
      },
      {
        "id": "keep-deploy-authority-with-the-client",
        "title": "Keep deploy authority with the client",
        "paragraphs": [
          "The offshore team can prepare the migration and run it in staging, but the production execution should be approved by the client owner. Write who can press the button, who can approve an emergency, and who can stop the change. A team that can approve and execute its own production change has no independent control. Record the execution approval separately from the change approval.",
          "Use a named account for the execution and record the session. The client owner should be reachable during the window, not only before it. If the owner is unavailable, the change waits or the named backup approves. Do not infer approval from silence.",
          "After the change, the client owner should confirm the result against the acceptance check. A migration that ran without error but broke a report is not successful. Record the confirmation and the time. The approval is complete only when the result is accepted."
        ]
      },
      {
        "id": "test-the-rollback-and-the-restore",
        "title": "Test the rollback and the restore",
        "paragraphs": [
          "Every schema change needs a rollback or a forward fix. A down migration that has never been run is a guess. Test the rollback on a copy with production-like data and record the time. If the rollback is unsafe because of data loss, write the forward fix and the conditions that would trigger it.",
          "Test the backup restore separately from the schema rollback. A backup that cannot be restored is not a backup. Record the restore time and the person who verified it. The client should know how long a full restore would take before approving a risky change.",
          "Keep the previous schema and the previous application artifact available for the monitoring window. A rollback that depends on a build that has already been deleted is not available. Record the retention period and the owner. Add the artifact location to the release checklist so nobody has to ask."
        ]
      },
      {
        "id": "review-the-window-quarterly",
        "title": "Review the window quarterly",
        "paragraphs": [
          "Review the number of changes by type, the time from submission to decision, and the number that required an emergency path. Ask the client reviewer which change was hardest and why. Look for a type that repeatedly misses the window, because that may mean the evidence requirement is unclear. Add the missing evidence field to the request template.",
          "Change one part of the process at a time. If the review is slow, add a pre-review checklist before changing the approver. If the emergency path is used often, fix the normal window rather than tightening the exception. Record the change and the next review date.",
          "Keep the approval record with the migration file so a later reviewer can see why the change was allowed. A record stored only in an email is hard to find during an audit. Link the approval identifier from the migration and the release note. The next change should start from the last approved example, not from a blank page."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Offshore lead",
        "text": "Prepares the change note and the rollback evidence."
      },
      {
        "label": "Client reviewer",
        "text": "Approves the window and the production execution."
      },
      {
        "label": "On-call approver",
        "text": "Handles the emergency path and the post-change review."
      }
    ],
    "faqs": [
      {
        "question": "Who can approve a production database change?",
        "answer": "The named client owner, with a named backup for the emergency path."
      },
      {
        "question": "What must be in the impact note?",
        "answer": "Tables, rows, lock time, compatibility, privacy, rollback, and restore evidence."
      },
      {
        "question": "Can a change skip the window?",
        "answer": "Only through the written emergency path, with a rollback step and a post-change review."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Change control and access separation."
      },
      {
        "name": "AWS Well-Architected Framework, operational excellence",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html",
        "note": "Change management and rollback planning."
      },
      {
        "name": "PostgreSQL documentation, backup and restore",
        "url": "https://www.postgresql.org/docs/current/backup.html",
        "note": "Backup and restore verification."
      }
    ],
    "heroImage": "/nov09/blog/define-a-client-approval-window-for-offshore-database-changes.webp"
  },
  "run-a-quarterly-secrets-rotation-review-for-an-offshore-team": {
    "takeaways": [
      "Inventory secrets by system, owner, last rotation, and expiry.",
      "Find stale keys, departed-user credentials, and over-privileged tokens.",
      "Rotate one secret per system in a test and verify the old key fails.",
      "Keep approval separate from execution for production secrets.",
      "Close a finding only after revocation and dependent-service checks."
    ],
    "readinessRows": [
      {
        "area": "Inventory",
        "ready": "Owner, last rotation, expiry, and scope are recorded.",
        "notReady": "A list of key names with no owner."
      },
      {
        "area": "Revocation",
        "ready": "The old secret is disabled and verified.",
        "notReady": "A new key created while the old one still works."
      },
      {
        "area": "Duty",
        "ready": "Request, approve, rotate, and verify are separate.",
        "notReady": "One person rotates and verifies alone."
      },
      {
        "area": "Remediation",
        "ready": "Each finding has an owner and a date.",
        "notReady": "A ticket marked done without a check."
      }
    ],
    "sections": [
      {
        "id": "inventory-the-secrets-that-matter",
        "title": "Inventory the secrets that matter",
        "paragraphs": [
          "Start with an inventory of the secrets the offshore team can reach: API keys, database passwords, signing keys, webhook secrets, and service accounts. Group them by system and by owner. Do not try to inventory every secret in the company in the first review. A short, accurate list is more useful than a complete list that nobody maintains.",
          "Record the last rotation date, the expiry date, and the person who can rotate each secret. Include the secrets that are shared with a client system, because those often have a different owner. Mark the secrets that have no expiry, since they are the ones most likely to be forgotten. Add the owner and the review date to the inventory.",
          "Keep the inventory in the client's secret manager or a protected document, not in a repository. Record only the secret identifier and the metadata, never the value. The review should be possible without exposing the secret to the reviewer. Store the inventory under the same access rule as the secret manager."
        ]
      },
      {
        "id": "find-the-stale-and-over-privileged-credentials",
        "title": "Find the stale and over-privileged credentials",
        "paragraphs": [
          "Look for secrets that have not been rotated within the policy window, secrets that belong to a person who has left, and secrets that grant more access than the integration needs. A key that can read and write every bucket is a finding even if it was rotated yesterday. Record the finding and the owner. Group the finding by system so the owner can see the pattern.",
          "Check the service accounts and the CI tokens as well as the human accounts. A build token that can deploy to production is a high-risk secret, even when it is not used by a person. Record the scope and the last use. A token that has not been used for ninety days may be a candidate for removal.",
          "Review the emergency access accounts separately. They should be few, named, and monitored. A shared emergency password that nobody rotates is a standing risk. Record who can use it and how the use is logged."
        ]
      },
      {
        "id": "test-the-rotation-path-not-only-the-policy",
        "title": "Test the rotation path, not only the policy",
        "paragraphs": [
          "Pick one secret from each system and rotate it in a test environment. Record the time, the person, and the services that needed an update. A rotation that breaks an integration is a finding about the documentation, not a reason to skip the rotation. Fix the runbook before the next quarterly review.",
          "Check that the old secret stops working after the rotation. A rotation that creates a new key but leaves the old one valid does not reduce risk. Record the revocation step and the verification. If the system cannot revoke immediately, write the window and the compensating control.",
          "Test the emergency rotation path with the on-call engineer. The person who rotates at 2 a.m. should be able to find the runbook and the approver. Record the time to rotate and the questions that required a call. A path that only the security team can run is not resilient."
        ]
      },
      {
        "id": "separate-duties-and-approvals",
        "title": "Separate duties and approvals",
        "paragraphs": [
          "The person who can read a secret should not always be the person who can rotate it. Define the roles for requesting, approving, rotating, and verifying. In a small team, one person may hold two roles, but the review should record the exception. A single person who can rotate and verify without a check has no independent control.",
          "Keep the production rotation approval with the client owner or the security lead. The offshore team can prepare and execute, but the approval should be recorded. For an emergency, name the on-call approver and the post-event review. Do not let the emergency path become the normal path.",
          "Log every rotation with the secret identifier, the time, the actor, and the reason. Do not log the value. The log is the evidence for the next review and for an incident investigation. Review one log entry each quarter to confirm it is still readable and complete."
        ]
      },
      {
        "id": "plan-the-remediation-with-dates",
        "title": "Plan the remediation with dates",
        "paragraphs": [
          "For each finding, name the owner, the action, and the date. A finding that says rotate soon is not a plan. Prioritize the secrets that are exposed to the most systems or the least trusted network. A stale key on a public endpoint is more urgent than an unused key in a closed environment.",
          "Track the remediation in the same place as the inventory. Close a finding only when the old secret is revoked and the dependent services are confirmed working. Record the verification. A finding closed because a ticket was updated is not closed.",
          "Review the exceptions at the next quarter. If the same exception appears twice, decide whether to fix the system or change the policy. A permanent exception should be documented as an accepted risk with an owner. Set a review date even when the exception is accepted."
        ]
      },
      {
        "id": "report-to-the-client-in-plain-language",
        "title": "Report to the client in plain language",
        "paragraphs": [
          "The report should state the number of secrets reviewed, the number rotated, the number stale, and the number with excessive access. Add the remediation dates and the one risk that needs a client decision. Keep it short enough that the client owner will read it. Add the top risk and the requested decision to the first page.",
          "Do not include secret values, internal hostnames, or unnecessary system details. Share the identifiers the client needs to act and keep the rest in the protected inventory. The report is a management document, not a technical dump. State the audience on the cover so the report is not forwarded blindly.",
          "Ask the client for one decision at the end, such as approving a rotation window or removing an unused integration. A report without a decision tends to be filed and forgotten. The next review should show whether the decision was implemented. Record the decision in the client meeting notes.",
          "Give the client a short decision list rather than a long findings report. One page with the top three risks, the owner, and the requested decision is enough to start a conversation. The detailed inventory can stay in the protected system. A decision list is more likely to produce an action before the next quarter."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Offshore lead",
        "text": "Maintains the inventory and runs the test rotation."
      },
      {
        "label": "Client security owner",
        "text": "Approves production rotation and accepted exceptions."
      },
      {
        "label": "On-call engineer",
        "text": "Runs the emergency path and records the evidence."
      }
    ],
    "faqs": [
      {
        "question": "How often should secrets be rotated?",
        "answer": "According to the client policy, with a quarterly review of stale and over-privileged credentials."
      },
      {
        "question": "What proves a rotation worked?",
        "answer": "The new secret works, the old secret fails, and the dependent services are checked."
      },
      {
        "question": "Who approves a production rotation?",
        "answer": "The named client security owner, with a separate emergency approver."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-57 key management",
        "url": "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final",
        "note": "Key lifecycle and rotation guidance."
      },
      {
        "name": "OWASP secrets management cheat sheet",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
        "note": "Storage, rotation, and revocation practice."
      },
      {
        "name": "CIS Benchmarks",
        "url": "https://www.cisecurity.org/cis-benchmarks",
        "note": "Credential and service-account hardening."
      }
    ],
    "heroImage": "/nov09/blog/run-a-quarterly-secrets-rotation-review-for-an-offshore-team.webp"
  },
  "write-a-support-escalation-map-for-an-offshore-application-team": {
    "takeaways": [
      "Start the map from the customer symptom, not the org chart.",
      "Use five categories with a named first responder and target.",
      "Separate acknowledgement time from fix time.",
      "Require account, time, build, and request evidence at handoff.",
      "Keep the security path narrow, named, and reviewed quarterly."
    ],
    "readinessRows": [
      {
        "area": "Symptom",
        "ready": "Paths begin with what the customer sees.",
        "notReady": "A list of team names."
      },
      {
        "area": "Owner",
        "ready": "Each path has a first responder and backup.",
        "notReady": "A general engineering queue."
      },
      {
        "area": "Evidence",
        "ready": "Account, time, build, and request ID are required.",
        "notReady": "A screenshot with no context."
      },
      {
        "area": "Security",
        "ready": "A named contact and secure channel are current.",
        "notReady": "Security reports in the general queue."
      }
    ],
    "sections": [
      {
        "id": "start-from-the-customer-symptom",
        "title": "Start from the customer symptom",
        "paragraphs": [
          "An escalation map should begin with what the customer sees, not with the internal team name. A login failure, a wrong balance, a slow report, and a missing email are four different paths. Write the symptom and the first check for each. A support agent should be able to choose a path without understanding the architecture.",
          "Group the symptoms into a small number of categories: access, data accuracy, performance, notification, and security. Each category has a different first responder and a different evidence requirement. A map with twenty categories is a menu; a map with five is a decision aid. Ask one support agent to test the categories with two real tickets.",
          "Record the customer impact and the urgency beside each path. A wrong balance may be low volume but high severity, while a slow report may affect many users but have a workaround. The map should help the agent choose the response, not only the team. Add the customer impact to the path description, not only the severity."
        ]
      },
      {
        "id": "name-the-first-responder-and-the-time-target",
        "title": "Name the first responder and the time target",
        "paragraphs": [
          "Each path should name a first responder and a response target. The first responder may be the support lead, the on-call engineer, or the security contact. The target should be realistic for the team's hours and time zones. Publish both in the same place as the map.",
          "Separate the acknowledgement target from the fix target. A support agent needs to know when the customer will hear, not only when the defect will be fixed. Record the next-update time and the person who owns it. A missed acknowledgement is often worse than a slow fix.",
          "Give the first responder the authority to ask for logs, open an incident, and reassign the ticket. Do not require a manager approval for every escalation. Keep the approval for a customer credit, a public statement, or a production change. Write the list of approvals that stay with the client so the boundary is explicit."
        ]
      },
      {
        "id": "require-evidence-at-each-step",
        "title": "Require evidence at each step",
        "paragraphs": [
          "The map should list the evidence the next team needs: the account, the time, the build, the request identifier, and the exact error. A screenshot without a timestamp is weak. A log line without the request identifier is hard to trace. The support agent should gather the evidence before the handoff.",
          "For a performance issue, record the page, the region, the device, and whether the problem is constant or intermittent. For a data issue, record the expected and actual values and the source of the expectation. For a security report, do not ask the customer to send sensitive data through the ticket; use the approved secure channel. Test the secure channel with a harmless sample before an incident.",
          "Make the evidence requirement part of the ticket form. A required field is easier to enforce than a reminder in a meeting. If the field is missing, the ticket can still be accepted, but the escalation should state what is missing and who will gather it. Make the missing field a required input in the ticket form."
        ]
      },
      {
        "id": "keep-the-on-call-path-short",
        "title": "Keep the on-call path short",
        "paragraphs": [
          "The on-call path should be one page: the trigger, the person, the channel, and the backup. Include the customer-facing update template and the incident channel. An on-call engineer should not have to search a wiki during an outage. Test the path with a drill once a quarter.",
          "Define the trigger for waking the on-call engineer. A single customer report may not justify a page, while a rise in errors across accounts may. Write the threshold and the person who can override it. Record the decision in the incident record.",
          "Give the on-call engineer a way to hand back to support when the issue is not a defect. A misrouted ticket should return with a reason and a suggested next step, not a silent reassignment. The map should make the return path as clear as the escalation path. Test the return path with a misrouted ticket before the next release."
        ]
      },
      {
        "id": "protect-security-and-privacy-escalations",
        "title": "Protect security and privacy escalations",
        "paragraphs": [
          "A security report should go to a named security contact, not a general engineering queue. Record the channel, the acknowledgement target, and the evidence rule. Do not ask the reporter to send passwords or full customer records. Use the approved secure upload and redact what is not needed.",
          "Keep the distribution list small. A security escalation that is posted in a wide channel can expose the customer and the business. Record who needs to know and who does not. The incident lead should control the updates.",
          "Review the security path with the client owner each quarter. A change in the client's security team or tooling can make the old contact obsolete. Record the review date and the current contact. Put the review date in the security calendar with a named owner.",
          "Test the security path with a tabletop exercise rather than a real report. Walk through who receives the report, who acknowledges it, and who decides whether to notify the client. Record the gaps and fix the contact list. A path that has never been walked through is a diagram, not a control."
        ]
      },
      {
        "id": "review-the-map-after-every-major-incident",
        "title": "Review the map after every major incident",
        "paragraphs": [
          "After an incident, ask which path the team used and where the map was wrong. A path that required a call to find the right person is a gap. Update the contact, the trigger, or the evidence field. Record the change and the date.",
          "Check the map against the actual ticket categories each quarter. A new product area may need a new path, while an old path may no longer have a customer. Remove the stale path rather than leaving it as a trap. The map should reflect the current product and team.",
          "Ask the support team which path they use most and which one causes the most confusion. The answer may point to a missing category or a stale contact. Fix the top confusion before adding another page to the map. A short map that people use is better than a complete map that they ignore."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Support agent",
        "text": "Chooses the path and gathers the required evidence."
      },
      {
        "label": "On-call engineer",
        "text": "Owns the outage path and the hand-back decision."
      },
      {
        "label": "Security contact",
        "text": "Owns the security path and the disclosure list."
      }
    ],
    "faqs": [
      {
        "question": "How many escalation categories should the map have?",
        "answer": "A small set based on customer symptoms, usually access, data, performance, notification, and security."
      },
      {
        "question": "When should the on-call engineer be paged?",
        "answer": "When the written threshold is met, or when the incident lead overrides it."
      },
      {
        "question": "Who owns a security report?",
        "answer": "The named security contact, using the approved secure channel."
      }
    ],
    "sources": [
      {
        "name": "Atlassian incident management handbook",
        "url": "https://www.atlassian.com/incident-management/handbook",
        "note": "Escalation and incident roles."
      },
      {
        "name": "NIST SP 800-61 incident handling guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Incident reporting and evidence handling."
      },
      {
        "name": "Google SRE Book, managing incidents",
        "url": "https://sre.google/sre-book/managing-incidents/",
        "note": "On-call and communication practice."
      }
    ],
    "heroImage": "/nov09/blog/write-a-support-escalation-map-for-an-offshore-application-team.webp"
  }
};
