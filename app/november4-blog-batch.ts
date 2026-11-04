export const november4BlogBatch = [
  {
    "slug": "set-a-bug-reproduction-standard-before-outsourced-triage",
    "title": "Set a bug-reproduction standard before outsourced triage",
    "excerpt": "A triage standard that turns a vague report into a minimal reproduction, a known environment, and a clear owner before anyone starts debugging.",
    "minutes": 7,
    "published": "2026-11-04",
    "body": [
      "## Start with the report the triage engineer receives",
      "A triage engineer can only work with the report in front of them, so the quality of the report sets the ceiling for the whole investigation. Start by reading the report as if you had never seen the product, and ask whether you could reproduce the failure without asking a question. If the answer is no, the first task is to improve the report rather than to open the code. That order protects the engineer's time and gives the reporter a clear standard.",
      "The report should name the user action, the expected result, and the actual result in separate sentences. It should also say whether the failure is constant or intermittent and how many times the reporter tried. A report that mixes three problems into one paragraph is not ready for triage. Split it into separate items before assigning an owner.",
      "## Require a minimal reproduction, not a narrative",
      "A minimal reproduction is the smallest sequence that still produces the failure, and it is more valuable than a long description of the customer's day. Ask the reporter to remove unrelated steps until the failure disappears, then add back the last step that caused it. Record the exact input values, the account type, and any feature flag that was active. A reproduction that depends on hidden state is not reproducible by anyone else.",
      "If the reporter cannot reduce the steps, ask for a screen recording with the network panel visible and the timestamp noted. Do not accept a recording that shows only the final error, because the cause may be several steps earlier. Store the recording with the ticket and note the tool used to capture it. The goal is evidence another engineer can replay, not a story that sounds convincing.",
      "## Record the environment before the first attempt",
      "Environment details are cheap to collect at the start and expensive to reconstruct later. Record the browser or device, the operating system version, the application version or commit, the account role, and the data state that matters. If the failure depends on a specific tenant, plan, or locale, say so explicitly. An environment note that says only production is not enough to reproduce anything.",
      "Ask the triage engineer to add their own environment when they attempt the reproduction, because a difference between the two environments may explain the result. If the failure does not reproduce, record that outcome with the same detail as a successful reproduction. A clean attempt that fails to reproduce is still useful evidence. It tells the team where the problem is not.",
      "## Separate a reproduction from a diagnosis",
      "Reproduction answers whether the failure can be observed, while diagnosis answers why it happens. Keeping the two separate prevents triage from turning into an unbounded debugging session. The triage engineer should confirm the steps, capture the evidence, and identify the affected area. The fix owner then decides how deep to investigate and what change to make.",
      "A triage note that jumps to a cause without a reproduction is a guess, even when the guess is correct. Require the engineer to mark the cause as suspected rather than confirmed until the evidence supports it. That distinction matters when the ticket is handed to a different team or reopened months later. It also keeps the original observation separate from later interpretation.",
      "## Set a time box and a stop condition",
      "Triage can absorb unlimited time if nobody defines when to stop. Set a short box, such as thirty or sixty minutes, for the first reproduction attempt. Stop when the failure is reproduced with evidence, when the report is clearly insufficient, or when the investigation requires access the engineer does not have. Record which stop condition applied and what the next owner should do.",
      "A time box is not a target for closing the ticket. It is a boundary that protects the rest of the queue and makes the handoff predictable. If the box expires without a result, the ticket should move to a named owner with the evidence collected so far. Do not leave it in triage with a note that says still looking.",
      "## Capture the failing and passing evidence",
      "A reproduction is stronger when it includes both the failing case and a nearby case that works. Capture the same action with a valid input and with the input that fails, and note the difference. That contrast often reveals whether the problem is data, permissions, timing, or code. It also gives the fix owner a ready-made regression check.",
      "Save the evidence in the ticket rather than in a personal folder or a temporary chat upload. Use timestamps and short labels so a later reviewer can match each artifact to a step. If the evidence contains customer data, redact it before attaching and record that the redaction happened. A reproduction packet that cannot be shared safely is not usable by the team.",
      "## Route the report to the right owner",
      "The triage result should end with a named owner and a specific decision, not a general queue. Decide whether the item is a defect, a data issue, a configuration problem, or a request that needs product judgment. Route it to the person who can make that decision and state what you need from them. A ticket that is routed to a team without a named person tends to wait.",
      "Include the reproduction steps, the environment, the evidence, and the suspected area in the handoff. Do not make the next owner reread the entire thread to find the relevant details. If the report is incomplete, say exactly which field is missing and who can supply it. The handoff should be short enough to read in one sitting and complete enough to act on.",
      "## Review the standard against escaped defects",
      "A triage standard is only useful if it catches the defects that matter. After a release, compare the defects that escaped with the reports that were triaged in the same period. Ask whether a better reproduction or environment note would have changed the outcome. Record the pattern rather than blaming the reporter or the engineer.",
      "Update the standard one field at a time and keep the earlier version for comparison. If the same kind of report keeps arriving incomplete, improve the intake form rather than sending another reminder. If the same area keeps producing escaped defects, the problem may be test coverage rather than triage. Close the review with one owner and one date for the next check."
    ]
  },
  {
    "slug": "keep-production-secrets-out-of-outsourced-debugging-sessions",
    "title": "Keep production secrets out of outsourced debugging sessions",
    "excerpt": "A practical control set for debugging production issues with remote engineers without exposing API keys, customer data, or privileged credentials.",
    "minutes": 7,
    "published": "2026-11-04",
    "body": [
      "## Map where production secrets can appear",
      "Secrets rarely appear only in the configuration file that is supposed to hold them. They show up in logs, error traces, database dumps, browser storage, CI output, and screenshots of a terminal. Before a debugging session, list the places the engineer might look and the secrets each place could reveal. That map tells you what to redact and which access to withhold.",
      "Include the credentials used by the application itself, such as API keys, signing keys, database passwords, and webhook secrets. Add the credentials used by the team, such as cloud roles, SSH keys, and personal access tokens. The two categories need different controls because one is embedded in the product and the other belongs to a person. A single instruction to avoid secrets does not distinguish them.",
      "## Redact before sharing logs or screenshots",
      "Redaction should happen in the environment where the data lives, before the file is copied to a ticket or a chat. Use a log filter or a script that replaces known secret patterns with a stable placeholder. Record which filter was used and what it covered. A manual review of a long log is not a reliable redaction method.",
      "Screenshots need the same treatment, because a terminal window can show an environment variable or a response body. Crop the image to the relevant region and check the edges for tokens, email addresses, and account identifiers. If the image cannot be redacted without destroying the evidence, describe the finding in text instead. A picture is not worth a leaked key.",
      "## Use a separate debugging identity",
      "A debugging session should use a named identity created for that purpose, not a shared admin account. Grant only the permissions needed to answer the question, and set an expiry before the session starts. Record who approved the access and which ticket it supports. The identity should be easy to revoke and easy to trace.",
      "If the engineer needs to reproduce a user-specific problem, use a test account or a masked record rather than a real customer login. When a real record is unavoidable, limit the fields exposed and log the access. Do not let the debugging identity persist after the session. A role that stays active becomes a standing backdoor.",
      "## Constrain the session to the ticket",
      "Write the question the session is meant to answer before anyone opens a terminal. A narrow question keeps the engineer from browsing unrelated tables or services out of curiosity. It also makes the session easier to review afterward. If the investigation needs a new question, open a new ticket rather than expanding the old one silently.",
      "Record the commands or queries the engineer ran and the data they touched. You do not need a full keylogger, but you do need enough detail to reconstruct the session. If a command could change production state, require a second approval before it runs. Read-only access is the default for debugging, and write access needs a separate decision.",
      "## Handle a secret that was already exposed",
      "Assume that any secret pasted into a ticket, chat, or screenshot is compromised, even if the message was deleted quickly. Rotate the credential, revoke the old value, and confirm that the dependent services still work. Record the exposure time, the people who could see it, and the rotation time. Deleting the message is not a remediation.",
      "Check whether the secret was also written to a log or a backup that the team does not control. If it was, the rotation may need to include downstream systems and vendor integrations. Tell the client security contact if the secret belongs to them, and follow their incident process. A quiet rotation without a record leaves the next responder without context.",
      "## Record the session without recording the secret",
      "The session record should show what was investigated, what was found, and what changed, without reproducing the secret itself. Use placeholders such as redacted-api-key and note where the real value is stored. Attach the redacted evidence and the ticket reference. A future reviewer should be able to follow the reasoning without gaining access.",
      "Store the record in the approved system with the same retention rule as other incident evidence. Do not keep a personal copy on a laptop or in a notes app. If the record includes customer data, apply the same masking rule as the logs. The goal is an audit trail that is useful and safe to share.",
      "## Review vendor and tool access",
      "Every debugging tool is another place a secret can leak, including error trackers, APM services, and log aggregators. Check what each tool captures by default and whether it stores request bodies or headers. Disable capture for sensitive endpoints or add a scrubber before the data leaves the service. A tool that records everything is a secret store nobody intended to create.",
      "Review the vendors who can see the data and the contract terms that apply. If a vendor cannot meet the redaction requirement, do not route production traffic through it for the debugging session. Record the decision and the compensating control. The same review applies when a new tool is added to the stack.",
      "## Test the procedure with a tabletop exercise",
      "A secret-handling procedure that has never been tested will fail at the first real incident. Run a short exercise in which a fake key appears in a log and the team has to redact, rotate, and record it. Time each step and note where the team hesitated. The exercise should include the person who approves access and the person who talks to the client.",
      "After the exercise, change one weak point and repeat it later. Keep the exercise notes with the procedure so new team members can see how it works. Do not use a real secret in the exercise, even a revoked one. A simulated exposure is enough to test the process without creating a real incident."
    ]
  },
  {
    "slug": "plan-a-code-handover-when-an-outsourced-engineer-rotates-off",
    "title": "Plan a code handover when an outsourced engineer rotates off",
    "excerpt": "A handover plan that transfers code knowledge, environment state, open decisions, and access ownership before the last working day.",
    "minutes": 7,
    "published": "2026-11-04",
    "body": [
      "## Define what the handover must transfer",
      "A code handover is not a repository transfer, because the repository already belongs to the client. The handover must transfer the knowledge needed to change the code safely, the state of the environments, and the ownership of open decisions. Write those three categories down before the last week. A handover that covers only file locations leaves the receiver unable to act.",
      "Include the unwritten parts: why a workaround exists, which test is flaky, which migration is pending, and which vendor contact answers which question. These details are usually the first to disappear when an engineer leaves. Ask the departing engineer to list them explicitly rather than assuming the receiver will infer them. The list becomes the agenda for the handover sessions.",
      "## Start the handover before the last week",
      "A handover compressed into the final week becomes a tour of unfinished work. Start at least two or three weeks before the last day, and name the receiving owner at the start. Give the receiver time to run a real change while the departing engineer is still available. That practice is more valuable than another document.",
      "Schedule the sessions around actual work rather than around a slide deck. Each session should end with the receiver doing something and the departing engineer reviewing it. Record the questions the receiver had to ask, because those questions show where the written material is weak. Update the material before the next session.",
      "## Map the code, not only the tickets",
      "Walk through the main entry points, the data flow, and the places where the code makes an assumption about the environment. Mark the modules that are fragile, the tests that are slow, and the areas with no coverage. A map that shows only directories is less useful than one that shows where a change is likely to break something. Mark the files that changed most often in the last two releases, because those are the places the receiver will touch first.",
      "Include the build and release path, the feature flag system, and the observability tools the team uses. Show the receiver how to find a specific request in the logs and how to correlate it with a deployment. If the team uses a runbook, test it during the handover rather than reading it aloud. A runbook that has not been followed is a hypothesis.",
      "## Record the environment and access state",
      "List every environment the team uses, including staging, preview, and any shared sandbox. Record the accounts, the roles, and the owner of each environment. Note which credentials are personal and which are shared, because shared credentials are a risk that should be removed during the handover. The receiver should know how to request access through the approved process.",
      "Check the state of feature flags, scheduled jobs, and open migrations. A flag that was left on for a test can change behavior long after the engineer leaves. Record the intended state and the person who can approve a change. If the state is unknown, mark it as unknown rather than guessing.",
      "## Walk through one live change together",
      "Choose a small, real change in the area the receiver will own, and run it end to end with both engineers present. The change should include a branch, a review, a test run, and a deployment to a non-production environment. The receiver should drive while the departing engineer observes. This exercise exposes gaps that a document cannot.",
      "After the change, ask the receiver to explain the decisions and the rollback path without prompting. If the explanation is incomplete, repeat the exercise with a different change. Record what was practiced and what remains untested. The goal is confidence based on evidence, not a signature on a checklist.",
      "## Name the new owner for each open item",
      "Every open ticket, incident, and decision needs a named owner before the departing engineer leaves. A general queue is not an owner. Record the owner, the next action, and the date the item was transferred. If an item has no owner, escalate it rather than leaving it in the handover document.",
      "Include the decisions that are waiting on a client or a vendor, because those can outlast the engineer's tenure. Record the contact, the question, and the last response. The receiver should be able to continue the conversation without reconstructing it. A decision log that ends with the engineer's departure is not a handover.",
      "## Remove access on a written schedule",
      "Access removal is part of the handover, not an afterthought. List every account, token, and group membership the departing engineer holds, and set a removal date. The date should be tied to the last working day or earlier if the role changes. Record who will perform the removal and who will confirm it.",
      "Check for indirect access through shared accounts, CI secrets, and vendor portals. Those are often missed because they are not in the identity provider. Revoke or rotate them according to the risk, and record the action. A handover that leaves a former engineer with production access is incomplete regardless of how good the documentation is.",
      "## Test the handover with a small change",
      "After the departing engineer has left, ask the receiver to complete a small change in the area without help. Time the change and record where the receiver had to stop. Those stops are the remaining gaps in the handover. Fix the documentation or the access before the next larger change.",
      "Review the result with the technical owner and decide whether the handover is complete. If the receiver needed to contact the former engineer, record why and whether that contact was appropriate. A handover is complete when the receiver can act independently, not when the last meeting ends. Record the owner's decision and the date, and keep it with the handover notes."
    ]
  },
  {
    "slug": "review-a-third-party-sdk-before-an-outsourced-integration",
    "title": "Review a third-party SDK before an outsourced integration",
    "excerpt": "A due-diligence checklist for SDKs that covers license terms, data access, failure behavior, update path, and the exit plan before code is written.",
    "minutes": 7,
    "published": "2026-11-04",
    "body": [
      "## Name the capability the SDK provides",
      "Start with the capability the product needs, such as payments, maps, analytics, or authentication. Then ask whether a direct API call or a small internal module would meet the need with less dependency. An SDK is justified when it removes meaningful complexity, not when it merely saves an afternoon. Write the justification in the ticket before the integration begins.",
      "List the SDK surface the team actually plans to use, including the initialization, the main calls, and the error handling. A large SDK often exposes far more than the product needs, and every exposed surface is another thing to review. Ask the vendor whether the unused modules can be excluded from the build. The smallest useful surface is easier to secure and easier to replace.",
      "## Check the license and distribution terms",
      "Read the license that applies to the exact version the team plans to ship, not the marketing page. Check whether the license requires attribution, disclosure, or a particular distribution model. Some licenses are compatible with a hosted service but not with a mobile app that embeds the code. Record the license name and the version in the integration ticket.",
      "Review the vendor's terms for data use, telemetry, and support. A free tier may include usage analytics that the client has not approved. If the terms allow the vendor to change the data practice with notice, record how the team will monitor that change. A license review that stops at the word open source is incomplete.",
      "## Review the data the SDK can access",
      "List the data the SDK can read from the device or the application, including identifiers, location, contacts, and files. Compare that list with the data the feature actually needs. If the SDK requests more than the feature uses, disable the extra permissions or choose a different tool. Record the permission configuration in the code review.",
      "Inspect the network calls the SDK makes during a test session. A tool that phones home on initialization may send data before the user has consented. Use a proxy or the platform's network inspector and save the redacted results. If the calls cannot be explained, do not ship the integration until the vendor provides an answer.",
      "## Test the failure and offline behavior",
      "An SDK that works only on a fast, authenticated network is a production risk. Test what happens when the network is slow, the token expires, the permission is denied, and the service returns an error. Record the behavior and the message the user sees. The integration should fail in a way the product can recover from.",
      "Test the offline path if the feature is used on a mobile device or in a location with unreliable connectivity. Decide whether the SDK queues work, drops it, or blocks the interface. A queue that grows without a limit can become a data problem later. Record the chosen behavior and the owner who approved it.",
      "## Check the update and support path",
      "Ask how often the SDK releases, whether it follows semantic versioning, and how breaking changes are announced. Check the issue tracker and the release notes for the last year. A package with no recent maintenance is a liability even if it works today. Record the maintenance signal and the date it was checked.",
      "Name the person who will own upgrades and the cadence for reviewing them. An SDK that is installed once and never updated becomes a security and compatibility problem. Add the upgrade to the maintenance calendar before the first release. If the vendor requires a paid support plan for security fixes, include that cost in the decision.",
      "## Measure the bundle and runtime cost",
      "Measure the size the SDK adds to the build and the time it adds to startup. Compare the result with the product's performance budget and with the cost of a direct integration. A small feature that doubles the bundle may not be worth the dependency. Record the measurement method and the environment.",
      "Check the runtime cost during the operations the feature performs, not only at startup. A library that blocks the main thread during a common action will hurt the user experience. If the cost is acceptable, record the budget and the monitoring that will catch a regression. If it is not, revisit the direct API option.",
      "## Record the decision and the exit plan",
      "Write a short decision record that names the capability, the alternatives considered, the license, the data access, the measured cost, and the owner. Include the conditions under which the team would replace the SDK. A decision record is more useful than a comment in a pull request because it survives the integration. Link the record from the integration ticket so the next engineer can find it.",
      "Define the exit plan: which module wraps the SDK, which tests cover the integration, and what a replacement would need to implement. Keep the SDK behind an internal interface so the rest of the code does not depend on its types. An exit plan written before adoption is cheaper than a migration written after a vendor change. Review the wrapper boundary at the first code review, before the SDK leaks into unrelated modules.",
      "## Re-review after the first production month",
      "After a month in production, review the SDK's actual behavior against the assumptions in the decision record. Check the error rates, the network calls, the bundle size, and the support tickets. If the assumptions were wrong, update the record and decide whether to keep, constrain, or replace the SDK. If the review finds no issues, record that result as well so the next review has a baseline.",
      "Review the vendor's release notes and security advisories for the period. If a new version is available, decide whether to upgrade now or schedule it. Record the decision and the next review date. A due-diligence review that ends at adoption becomes stale as soon as the vendor ships a change."
    ]
  },
  {
    "slug": "write-a-definition-of-done-for-outsourced-accessibility-fixes",
    "title": "Write a definition of done for outsourced accessibility fixes",
    "excerpt": "A definition of done that ties an accessibility fix to the original barrier, real assistive-technology evidence, and a regression check.",
    "minutes": 7,
    "published": "2026-11-04",
    "body": [
      "## Start from the reported barrier, not the code",
      "An accessibility fix should begin with the user action that fails and the technology that exposed it. Record the page, the control, the input method, and the expected result. A ticket that says the form is inaccessible gives the engineer nothing to verify. The barrier description is the acceptance criterion.",
      "Ask the reporter to include the assistive technology and version, the browser, and the steps that lead to the failure. If the report came from an automated scan, reproduce the finding with a real interaction before writing the fix. A scanner can point to a rule, but it cannot confirm that the user can complete the task. If the report came from a customer, ask support to collect the same details before the ticket reaches engineering.",
      "## Write the expected behavior for each input method",
      "Accessibility is not one behavior, so the definition of done should cover keyboard, screen reader, zoom, and pointer input where they apply. State what the user should be able to do with each method. For a modal, that might mean focus moves into the dialog, the escape key closes it, and focus returns to the trigger. Each behavior is a testable line.",
      "Include the visual requirements that affect the interaction, such as focus visibility and contrast. A control that works with a keyboard but has no visible focus is still difficult to use. Record the expected focus style and the contrast target. The reviewer should not have to infer the standard from a design file.",
      "## Require evidence from a real assistive technology",
      "An automated scan is a useful first pass, but it does not prove that a screen reader announces the control correctly. Require a short recording or a written transcript of the screen reader interaction. Include the browser, the screen reader version, and the exact steps. The evidence should show the before and after states.",
      "Keyboard testing should show the full path, including the escape route and the focus return. Zoom testing should show the layout at the target magnification without horizontal scrolling for the main task. If a test cannot be performed, record the gap and the owner who accepted it. A definition of done that allows untested claims is not a standard.",
      "## Separate a code fix from a content fix",
      "Some barriers are caused by markup, and some are caused by the words or the structure of the content. A missing label may be a code fix, while an ambiguous error message may be a content fix. Decide which kind of change is needed before assigning the work. Mixing the two in one ticket makes the acceptance unclear.",
      "If the fix requires a design decision, such as a new focus style or a different layout, route it to the design owner. The engineer should not invent a visual standard that the product has not approved. Record the decision and the reason so the next component follows the same pattern. A one-off fix that is not reflected in the system will recur.",
      "## Check the regression surface",
      "A shared component change can affect every page that uses it, so the definition of done should name the regression surface. List the screens and flows that reuse the component and add them to the test plan. If the component is used in a checkout or a login flow, include the full task, not only the component. Name the regression pages in the ticket before the change is merged.",
      "Run the regression check with the same assistive technology used for the original report. A fix that works on the reported page but breaks another page is not done. Record the pages tested and the result. If a page could not be tested, say so and name the risk.",
      "## Record what was not fixed and why",
      "Not every barrier can be fixed in the same release, and pretending otherwise damages trust. Record the items that remain, the reason, and the owner who accepted the deferral. Include the user impact and the planned date if one exists. A transparent backlog is better than a closed ticket that hides the problem.",
      "If the deferral is due to a dependency or a vendor, name it and the date it will be reviewed. If the deferral is due to a design decision, record the decision and the person who made it. The next reviewer should be able to see why the item is still open without reopening the whole investigation. Review the deferral at the next accessibility meeting rather than leaving it in a closed sprint.",
      "## Get acceptance from the owner, not only the developer",
      "The engineer can confirm that the code changed, but the product owner or accessibility lead should confirm that the barrier is gone. Ask that person to run the same task with the same assistive technology. Record their confirmation and the date. This step prevents a technically correct change from being accepted when the user experience is still broken.",
      "If the owner cannot test, provide the recording and a short script so they can repeat it. Do not accept the developer's summary as the only evidence. The acceptance record should name the person, the method, and the result. That record is what makes the definition of done meaningful.",
      "## Re-test after the next release",
      "Accessibility regressions often appear after a later change to the same component or design system. Add the fixed flow to the regression suite and re-test it after the next release. Use the same assistive technology and the same task. Record the result beside the original fix.",
      "If the regression returns, reopen the item and link it to the change that caused it. If the fix holds, note the release and keep the test in the suite. Review the pattern at the next accessibility review and update the component guidance. A fix that is not re-tested is a temporary repair."
    ]
  }
];

export const november4BlogDetails = {
  "set-a-bug-reproduction-standard-before-outsourced-triage": {
    "takeaways": [
      "Require a minimal reproduction with exact steps, inputs, and observed output.",
      "Record the environment and version before the first attempt to reproduce.",
      "Separate reproduction from diagnosis so triage does not become open-ended debugging.",
      "Time-box the attempt and route the report with the evidence already collected."
    ],
    "readinessRows": [
      {
        "area": "Reproduction",
        "ready": "A fresh reviewer can follow the steps and see the same failure.",
        "notReady": "The report says it is broken but cannot say where or when."
      },
      {
        "area": "Environment",
        "ready": "Browser, device, version, account type, and data state are recorded.",
        "notReady": "The only detail is that it works on the reporter's machine."
      },
      {
        "area": "Evidence",
        "ready": "Logs, screenshots, and network traces are attached with timestamps.",
        "notReady": "A single sentence describes the outcome without evidence."
      },
      {
        "area": "Ownership",
        "ready": "The next owner and the expected decision are named.",
        "notReady": "The ticket sits in a general queue with no decision point."
      }
    ],
    "sections": [
      {
        "id": "start-with-the-report-the-triage-engineer-receives",
        "title": "Start with the report the triage engineer receives",
        "paragraphs": [
          "A triage engineer can only work with the report in front of them, so the quality of the report sets the ceiling for the whole investigation. Start by reading the report as if you had never seen the product, and ask whether you could reproduce the failure without asking a question. If the answer is no, the first task is to improve the report rather than to open the code. That order protects the engineer's time and gives the reporter a clear standard.",
          "The report should name the user action, the expected result, and the actual result in separate sentences. It should also say whether the failure is constant or intermittent and how many times the reporter tried. A report that mixes three problems into one paragraph is not ready for triage. Split it into separate items before assigning an owner."
        ]
      },
      {
        "id": "require-a-minimal-reproduction-not-a-narrative",
        "title": "Require a minimal reproduction, not a narrative",
        "paragraphs": [
          "A minimal reproduction is the smallest sequence that still produces the failure, and it is more valuable than a long description of the customer's day. Ask the reporter to remove unrelated steps until the failure disappears, then add back the last step that caused it. Record the exact input values, the account type, and any feature flag that was active. A reproduction that depends on hidden state is not reproducible by anyone else.",
          "If the reporter cannot reduce the steps, ask for a screen recording with the network panel visible and the timestamp noted. Do not accept a recording that shows only the final error, because the cause may be several steps earlier. Store the recording with the ticket and note the tool used to capture it. The goal is evidence another engineer can replay, not a story that sounds convincing."
        ]
      },
      {
        "id": "record-the-environment-before-the-first-attempt",
        "title": "Record the environment before the first attempt",
        "paragraphs": [
          "Environment details are cheap to collect at the start and expensive to reconstruct later. Record the browser or device, the operating system version, the application version or commit, the account role, and the data state that matters. If the failure depends on a specific tenant, plan, or locale, say so explicitly. An environment note that says only production is not enough to reproduce anything.",
          "Ask the triage engineer to add their own environment when they attempt the reproduction, because a difference between the two environments may explain the result. If the failure does not reproduce, record that outcome with the same detail as a successful reproduction. A clean attempt that fails to reproduce is still useful evidence. It tells the team where the problem is not."
        ]
      },
      {
        "id": "separate-a-reproduction-from-a-diagnosis",
        "title": "Separate a reproduction from a diagnosis",
        "paragraphs": [
          "Reproduction answers whether the failure can be observed, while diagnosis answers why it happens. Keeping the two separate prevents triage from turning into an unbounded debugging session. The triage engineer should confirm the steps, capture the evidence, and identify the affected area. The fix owner then decides how deep to investigate and what change to make.",
          "A triage note that jumps to a cause without a reproduction is a guess, even when the guess is correct. Require the engineer to mark the cause as suspected rather than confirmed until the evidence supports it. That distinction matters when the ticket is handed to a different team or reopened months later. It also keeps the original observation separate from later interpretation."
        ]
      },
      {
        "id": "set-a-time-box-and-a-stop-condition",
        "title": "Set a time box and a stop condition",
        "paragraphs": [
          "Triage can absorb unlimited time if nobody defines when to stop. Set a short box, such as thirty or sixty minutes, for the first reproduction attempt. Stop when the failure is reproduced with evidence, when the report is clearly insufficient, or when the investigation requires access the engineer does not have. Record which stop condition applied and what the next owner should do.",
          "A time box is not a target for closing the ticket. It is a boundary that protects the rest of the queue and makes the handoff predictable. If the box expires without a result, the ticket should move to a named owner with the evidence collected so far. Do not leave it in triage with a note that says still looking."
        ]
      },
      {
        "id": "capture-the-failing-and-passing-evidence",
        "title": "Capture the failing and passing evidence",
        "paragraphs": [
          "A reproduction is stronger when it includes both the failing case and a nearby case that works. Capture the same action with a valid input and with the input that fails, and note the difference. That contrast often reveals whether the problem is data, permissions, timing, or code. It also gives the fix owner a ready-made regression check.",
          "Save the evidence in the ticket rather than in a personal folder or a temporary chat upload. Use timestamps and short labels so a later reviewer can match each artifact to a step. If the evidence contains customer data, redact it before attaching and record that the redaction happened. A reproduction packet that cannot be shared safely is not usable by the team."
        ]
      },
      {
        "id": "route-the-report-to-the-right-owner",
        "title": "Route the report to the right owner",
        "paragraphs": [
          "The triage result should end with a named owner and a specific decision, not a general queue. Decide whether the item is a defect, a data issue, a configuration problem, or a request that needs product judgment. Route it to the person who can make that decision and state what you need from them. A ticket that is routed to a team without a named person tends to wait.",
          "Include the reproduction steps, the environment, the evidence, and the suspected area in the handoff. Do not make the next owner reread the entire thread to find the relevant details. If the report is incomplete, say exactly which field is missing and who can supply it. The handoff should be short enough to read in one sitting and complete enough to act on."
        ]
      },
      {
        "id": "review-the-standard-against-escaped-defects",
        "title": "Review the standard against escaped defects",
        "paragraphs": [
          "A triage standard is only useful if it catches the defects that matter. After a release, compare the defects that escaped with the reports that were triaged in the same period. Ask whether a better reproduction or environment note would have changed the outcome. Record the pattern rather than blaming the reporter or the engineer.",
          "Update the standard one field at a time and keep the earlier version for comparison. If the same kind of report keeps arriving incomplete, improve the intake form rather than sending another reminder. If the same area keeps producing escaped defects, the problem may be test coverage rather than triage. Close the review with one owner and one date for the next check."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The reporter, the affected user, the exact action, and the observed result."
      },
      {
        "label": "Reproduction",
        "text": "The smallest step sequence, input values, and the number of attempts."
      },
      {
        "label": "Environment",
        "text": "Browser or device, version, account role, tenant, locale, and feature flags."
      },
      {
        "label": "Handoff",
        "text": "The named owner, the decision needed, and the evidence already attached."
      }
    ],
    "faqs": [
      {
        "question": "Should triage fix simple bugs directly?",
        "answer": "A small fix can be appropriate when the cause is obvious and the change is covered by a test, but the triage standard should still record the reproduction and the owner. Do not let a quick fix bypass the evidence."
      },
      {
        "question": "What if the reporter cannot provide a reproduction?",
        "answer": "Ask for a screen recording, the exact timestamp, and the environment details, then time-box one attempt. If the report remains insufficient, route it back with the specific missing field."
      },
      {
        "question": "How do we handle intermittent failures?",
        "answer": "Record the frequency, the conditions, and any correlation with time, load, or data. A flaky reproduction is still useful if the team knows how often it occurs and what makes it more likely."
      },
      {
        "question": "Who owns the decision to close as cannot reproduce?",
        "answer": "The named triage owner should make that call after the time box and record the evidence. A closure without an attempt note is not a decision, it is a disappearance."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Practices for reproducible builds, testing, and defect handling."
      },
      {
        "name": "OWASP Web Security Testing Guide",
        "url": "https://owasp.org/www-project-web-security-testing-guide/",
        "note": "Structured reproduction and evidence practices for web defects."
      },
      {
        "name": "GitHub Docs, about issues",
        "url": "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues",
        "note": "Issue tracking conventions used in the handoff examples."
      }
    ],
    "heroImage": "/nov04/blog/set-a-bug-reproduction-standard-before-outsourced-triage.webp"
  },
  "keep-production-secrets-out-of-outsourced-debugging-sessions": {
    "takeaways": [
      "Map where secrets appear before the session starts, including logs and config dumps.",
      "Redact at the source rather than relying on a verbal instruction to be careful.",
      "Use a separate debugging identity with the smallest access that answers the question.",
      "Treat any exposed secret as an incident with a rotation and a written record."
    ],
    "readinessRows": [
      {
        "area": "Secret inventory",
        "ready": "The team knows which keys, tokens, and connection strings the service uses.",
        "notReady": "Nobody can list the credentials without opening the production config."
      },
      {
        "area": "Redaction",
        "ready": "Logs and screenshots are filtered before they leave the secure environment.",
        "notReady": "The engineer is told to be careful and given raw output."
      },
      {
        "area": "Access",
        "ready": "A named debugging role grants read-only access for a defined window.",
        "notReady": "The engineer uses a shared admin account because it is faster."
      },
      {
        "area": "Response",
        "ready": "An exposed secret triggers rotation and an incident note.",
        "notReady": "The team deletes the message and hopes nobody saved it."
      }
    ],
    "sections": [
      {
        "id": "map-where-production-secrets-can-appear",
        "title": "Map where production secrets can appear",
        "paragraphs": [
          "Secrets rarely appear only in the configuration file that is supposed to hold them. They show up in logs, error traces, database dumps, browser storage, CI output, and screenshots of a terminal. Before a debugging session, list the places the engineer might look and the secrets each place could reveal. That map tells you what to redact and which access to withhold.",
          "Include the credentials used by the application itself, such as API keys, signing keys, database passwords, and webhook secrets. Add the credentials used by the team, such as cloud roles, SSH keys, and personal access tokens. The two categories need different controls because one is embedded in the product and the other belongs to a person. A single instruction to avoid secrets does not distinguish them."
        ]
      },
      {
        "id": "redact-before-sharing-logs-or-screenshots",
        "title": "Redact before sharing logs or screenshots",
        "paragraphs": [
          "Redaction should happen in the environment where the data lives, before the file is copied to a ticket or a chat. Use a log filter or a script that replaces known secret patterns with a stable placeholder. Record which filter was used and what it covered. A manual review of a long log is not a reliable redaction method.",
          "Screenshots need the same treatment, because a terminal window can show an environment variable or a response body. Crop the image to the relevant region and check the edges for tokens, email addresses, and account identifiers. If the image cannot be redacted without destroying the evidence, describe the finding in text instead. A picture is not worth a leaked key."
        ]
      },
      {
        "id": "use-a-separate-debugging-identity",
        "title": "Use a separate debugging identity",
        "paragraphs": [
          "A debugging session should use a named identity created for that purpose, not a shared admin account. Grant only the permissions needed to answer the question, and set an expiry before the session starts. Record who approved the access and which ticket it supports. The identity should be easy to revoke and easy to trace.",
          "If the engineer needs to reproduce a user-specific problem, use a test account or a masked record rather than a real customer login. When a real record is unavoidable, limit the fields exposed and log the access. Do not let the debugging identity persist after the session. A role that stays active becomes a standing backdoor."
        ]
      },
      {
        "id": "constrain-the-session-to-the-ticket",
        "title": "Constrain the session to the ticket",
        "paragraphs": [
          "Write the question the session is meant to answer before anyone opens a terminal. A narrow question keeps the engineer from browsing unrelated tables or services out of curiosity. It also makes the session easier to review afterward. If the investigation needs a new question, open a new ticket rather than expanding the old one silently.",
          "Record the commands or queries the engineer ran and the data they touched. You do not need a full keylogger, but you do need enough detail to reconstruct the session. If a command could change production state, require a second approval before it runs. Read-only access is the default for debugging, and write access needs a separate decision."
        ]
      },
      {
        "id": "handle-a-secret-that-was-already-exposed",
        "title": "Handle a secret that was already exposed",
        "paragraphs": [
          "Assume that any secret pasted into a ticket, chat, or screenshot is compromised, even if the message was deleted quickly. Rotate the credential, revoke the old value, and confirm that the dependent services still work. Record the exposure time, the people who could see it, and the rotation time. Deleting the message is not a remediation.",
          "Check whether the secret was also written to a log or a backup that the team does not control. If it was, the rotation may need to include downstream systems and vendor integrations. Tell the client security contact if the secret belongs to them, and follow their incident process. A quiet rotation without a record leaves the next responder without context."
        ]
      },
      {
        "id": "record-the-session-without-recording-the-secret",
        "title": "Record the session without recording the secret",
        "paragraphs": [
          "The session record should show what was investigated, what was found, and what changed, without reproducing the secret itself. Use placeholders such as redacted-api-key and note where the real value is stored. Attach the redacted evidence and the ticket reference. A future reviewer should be able to follow the reasoning without gaining access.",
          "Store the record in the approved system with the same retention rule as other incident evidence. Do not keep a personal copy on a laptop or in a notes app. If the record includes customer data, apply the same masking rule as the logs. The goal is an audit trail that is useful and safe to share."
        ]
      },
      {
        "id": "review-vendor-and-tool-access",
        "title": "Review vendor and tool access",
        "paragraphs": [
          "Every debugging tool is another place a secret can leak, including error trackers, APM services, and log aggregators. Check what each tool captures by default and whether it stores request bodies or headers. Disable capture for sensitive endpoints or add a scrubber before the data leaves the service. A tool that records everything is a secret store nobody intended to create.",
          "Review the vendors who can see the data and the contract terms that apply. If a vendor cannot meet the redaction requirement, do not route production traffic through it for the debugging session. Record the decision and the compensating control. The same review applies when a new tool is added to the stack."
        ]
      },
      {
        "id": "test-the-procedure-with-a-tabletop-exercise",
        "title": "Test the procedure with a tabletop exercise",
        "paragraphs": [
          "A secret-handling procedure that has never been tested will fail at the first real incident. Run a short exercise in which a fake key appears in a log and the team has to redact, rotate, and record it. Time each step and note where the team hesitated. The exercise should include the person who approves access and the person who talks to the client.",
          "After the exercise, change one weak point and repeat it later. Keep the exercise notes with the procedure so new team members can see how it works. Do not use a real secret in the exercise, even a revoked one. A simulated exposure is enough to test the process without creating a real incident."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Before",
        "text": "List the secrets in scope, the redaction filter, the debugging identity, and the approval."
      },
      {
        "label": "During",
        "text": "Stay within the ticket question, prefer read-only access, and capture redacted evidence."
      },
      {
        "label": "If exposed",
        "text": "Rotate, revoke, verify dependencies, and record the exposure and the fix."
      },
      {
        "label": "After",
        "text": "Close the access window, store the record, and review the tool capture settings."
      }
    ],
    "faqs": [
      {
        "question": "Can we just tell the engineer not to share secrets?",
        "answer": "A verbal instruction is not a control. Use redaction, least-privilege access, and a named identity so the safe path is also the easy path."
      },
      {
        "question": "Is a deleted chat message enough after a leak?",
        "answer": "No. Treat the secret as compromised, rotate it, and record the exposure. Deletion does not remove copies from caches, notifications, or backups."
      },
      {
        "question": "Should debugging use production data?",
        "answer": "Prefer masked or synthetic data. When a real record is required, limit the fields, log the access, and remove the data after the session."
      },
      {
        "question": "Who approves write access during an incident?",
        "answer": "A named incident commander or technical owner should approve it for a specific command and time window. Read-only remains the default."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Identify, protect, detect, respond, and recover outcomes for credential handling."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Practical controls for access, logging, and incident response."
      },
      {
        "name": "OWASP Secrets Management Cheat Sheet",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
        "note": "Storage, rotation, and exposure-response guidance."
      }
    ],
    "heroImage": "/nov04/blog/keep-production-secrets-out-of-outsourced-debugging-sessions.webp"
  },
  "plan-a-code-handover-when-an-outsourced-engineer-rotates-off": {
    "takeaways": [
      "Start the handover weeks before the last day and name the receiving owner early.",
      "Transfer code knowledge through a live change, not only a document.",
      "Record environment state, open decisions, and the reason behind each workaround.",
      "Remove access on a written schedule and confirm the removal."
    ],
    "readinessRows": [
      {
        "area": "Owner",
        "ready": "A named receiving engineer owns each open area before the handover starts.",
        "notReady": "The work returns to a general queue with no individual owner."
      },
      {
        "area": "Knowledge",
        "ready": "The receiver has run a change in the area with the departing engineer present.",
        "notReady": "The only transfer is a recorded walkthrough nobody has replayed."
      },
      {
        "area": "State",
        "ready": "Environment, feature flags, and open decisions are written down.",
        "notReady": "The receiver is told to read the commit history."
      },
      {
        "area": "Access",
        "ready": "The removal date and the approver are recorded for every account.",
        "notReady": "Access stays active because nobody remembers which accounts exist."
      }
    ],
    "sections": [
      {
        "id": "define-what-the-handover-must-transfer",
        "title": "Define what the handover must transfer",
        "paragraphs": [
          "A code handover is not a repository transfer, because the repository already belongs to the client. The handover must transfer the knowledge needed to change the code safely, the state of the environments, and the ownership of open decisions. Write those three categories down before the last week. A handover that covers only file locations leaves the receiver unable to act.",
          "Include the unwritten parts: why a workaround exists, which test is flaky, which migration is pending, and which vendor contact answers which question. These details are usually the first to disappear when an engineer leaves. Ask the departing engineer to list them explicitly rather than assuming the receiver will infer them. The list becomes the agenda for the handover sessions."
        ]
      },
      {
        "id": "start-the-handover-before-the-last-week",
        "title": "Start the handover before the last week",
        "paragraphs": [
          "A handover compressed into the final week becomes a tour of unfinished work. Start at least two or three weeks before the last day, and name the receiving owner at the start. Give the receiver time to run a real change while the departing engineer is still available. That practice is more valuable than another document.",
          "Schedule the sessions around actual work rather than around a slide deck. Each session should end with the receiver doing something and the departing engineer reviewing it. Record the questions the receiver had to ask, because those questions show where the written material is weak. Update the material before the next session."
        ]
      },
      {
        "id": "map-the-code-not-only-the-tickets",
        "title": "Map the code, not only the tickets",
        "paragraphs": [
          "Walk through the main entry points, the data flow, and the places where the code makes an assumption about the environment. Mark the modules that are fragile, the tests that are slow, and the areas with no coverage. A map that shows only directories is less useful than one that shows where a change is likely to break something. Mark the files that changed most often in the last two releases, because those are the places the receiver will touch first.",
          "Include the build and release path, the feature flag system, and the observability tools the team uses. Show the receiver how to find a specific request in the logs and how to correlate it with a deployment. If the team uses a runbook, test it during the handover rather than reading it aloud. A runbook that has not been followed is a hypothesis."
        ]
      },
      {
        "id": "record-the-environment-and-access-state",
        "title": "Record the environment and access state",
        "paragraphs": [
          "List every environment the team uses, including staging, preview, and any shared sandbox. Record the accounts, the roles, and the owner of each environment. Note which credentials are personal and which are shared, because shared credentials are a risk that should be removed during the handover. The receiver should know how to request access through the approved process.",
          "Check the state of feature flags, scheduled jobs, and open migrations. A flag that was left on for a test can change behavior long after the engineer leaves. Record the intended state and the person who can approve a change. If the state is unknown, mark it as unknown rather than guessing."
        ]
      },
      {
        "id": "walk-through-one-live-change-together",
        "title": "Walk through one live change together",
        "paragraphs": [
          "Choose a small, real change in the area the receiver will own, and run it end to end with both engineers present. The change should include a branch, a review, a test run, and a deployment to a non-production environment. The receiver should drive while the departing engineer observes. This exercise exposes gaps that a document cannot.",
          "After the change, ask the receiver to explain the decisions and the rollback path without prompting. If the explanation is incomplete, repeat the exercise with a different change. Record what was practiced and what remains untested. The goal is confidence based on evidence, not a signature on a checklist."
        ]
      },
      {
        "id": "name-the-new-owner-for-each-open-item",
        "title": "Name the new owner for each open item",
        "paragraphs": [
          "Every open ticket, incident, and decision needs a named owner before the departing engineer leaves. A general queue is not an owner. Record the owner, the next action, and the date the item was transferred. If an item has no owner, escalate it rather than leaving it in the handover document.",
          "Include the decisions that are waiting on a client or a vendor, because those can outlast the engineer's tenure. Record the contact, the question, and the last response. The receiver should be able to continue the conversation without reconstructing it. A decision log that ends with the engineer's departure is not a handover."
        ]
      },
      {
        "id": "remove-access-on-a-written-schedule",
        "title": "Remove access on a written schedule",
        "paragraphs": [
          "Access removal is part of the handover, not an afterthought. List every account, token, and group membership the departing engineer holds, and set a removal date. The date should be tied to the last working day or earlier if the role changes. Record who will perform the removal and who will confirm it.",
          "Check for indirect access through shared accounts, CI secrets, and vendor portals. Those are often missed because they are not in the identity provider. Revoke or rotate them according to the risk, and record the action. A handover that leaves a former engineer with production access is incomplete regardless of how good the documentation is."
        ]
      },
      {
        "id": "test-the-handover-with-a-small-change",
        "title": "Test the handover with a small change",
        "paragraphs": [
          "After the departing engineer has left, ask the receiver to complete a small change in the area without help. Time the change and record where the receiver had to stop. Those stops are the remaining gaps in the handover. Fix the documentation or the access before the next larger change.",
          "Review the result with the technical owner and decide whether the handover is complete. If the receiver needed to contact the former engineer, record why and whether that contact was appropriate. A handover is complete when the receiver can act independently, not when the last meeting ends. Record the owner's decision and the date, and keep it with the handover notes."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Receiver",
        "text": "A named engineer who owns the area and has practiced a real change."
      },
      {
        "label": "Knowledge",
        "text": "Entry points, data flow, fragile modules, tests, flags, and observability."
      },
      {
        "label": "State",
        "text": "Environments, accounts, scheduled jobs, open migrations, and intended flag values."
      },
      {
        "label": "Exit",
        "text": "Access removal dates, confirmations, and the first independent change."
      }
    ],
    "faqs": [
      {
        "question": "How long should a handover take?",
        "answer": "It depends on the area, but two to three weeks is a reasonable minimum for a single engineer with active work. A complex area needs longer and should start earlier."
      },
      {
        "question": "Is documentation enough?",
        "answer": "No. Documentation is necessary but not sufficient. The receiver should run a real change with the departing engineer present and then repeat it alone."
      },
      {
        "question": "What about knowledge held by a vendor?",
        "answer": "Include the vendor contact, the contract owner, and the support path in the handover. The client should not depend on one engineer's personal relationship with a vendor."
      },
      {
        "question": "When should access be removed?",
        "answer": "On or before the last working day, with a recorded confirmation. Any shared secret the engineer could see should be rotated if the risk warrants it."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Practices for maintaining software and transferring knowledge."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Access removal and credential hygiene expectations."
      },
      {
        "name": "Google Engineering Practices, code review",
        "url": "https://google.github.io/eng-practices/review/",
        "note": "Review and knowledge-sharing practices used in the walkthrough."
      }
    ],
    "heroImage": "/nov04/blog/plan-a-code-handover-when-an-outsourced-engineer-rotates-off.webp"
  },
  "review-a-third-party-sdk-before-an-outsourced-integration": {
    "takeaways": [
      "Name the capability and the smallest SDK surface that provides it.",
      "Check the license, the distribution terms, and the data the SDK can access.",
      "Test failure, offline, and permission-denied behavior before adoption.",
      "Record the update owner and the exit plan in the integration ticket."
    ],
    "readinessRows": [
      {
        "area": "Need",
        "ready": "The team can state why the SDK is better than a direct API call.",
        "notReady": "The SDK is chosen because a tutorial used it."
      },
      {
        "area": "Terms",
        "ready": "The license, attribution, and redistribution terms are reviewed.",
        "notReady": "Nobody has opened the license file."
      },
      {
        "area": "Data",
        "ready": "The SDK's network calls and stored data are documented.",
        "notReady": "The integration sends device and user data by default."
      },
      {
        "area": "Exit",
        "ready": "A replacement path and a removal plan exist.",
        "notReady": "The SDK is treated as permanent after the first release."
      }
    ],
    "sections": [
      {
        "id": "name-the-capability-the-sdk-provides",
        "title": "Name the capability the SDK provides",
        "paragraphs": [
          "Start with the capability the product needs, such as payments, maps, analytics, or authentication. Then ask whether a direct API call or a small internal module would meet the need with less dependency. An SDK is justified when it removes meaningful complexity, not when it merely saves an afternoon. Write the justification in the ticket before the integration begins.",
          "List the SDK surface the team actually plans to use, including the initialization, the main calls, and the error handling. A large SDK often exposes far more than the product needs, and every exposed surface is another thing to review. Ask the vendor whether the unused modules can be excluded from the build. The smallest useful surface is easier to secure and easier to replace."
        ]
      },
      {
        "id": "check-the-license-and-distribution-terms",
        "title": "Check the license and distribution terms",
        "paragraphs": [
          "Read the license that applies to the exact version the team plans to ship, not the marketing page. Check whether the license requires attribution, disclosure, or a particular distribution model. Some licenses are compatible with a hosted service but not with a mobile app that embeds the code. Record the license name and the version in the integration ticket.",
          "Review the vendor's terms for data use, telemetry, and support. A free tier may include usage analytics that the client has not approved. If the terms allow the vendor to change the data practice with notice, record how the team will monitor that change. A license review that stops at the word open source is incomplete."
        ]
      },
      {
        "id": "review-the-data-the-sdk-can-access",
        "title": "Review the data the SDK can access",
        "paragraphs": [
          "List the data the SDK can read from the device or the application, including identifiers, location, contacts, and files. Compare that list with the data the feature actually needs. If the SDK requests more than the feature uses, disable the extra permissions or choose a different tool. Record the permission configuration in the code review.",
          "Inspect the network calls the SDK makes during a test session. A tool that phones home on initialization may send data before the user has consented. Use a proxy or the platform's network inspector and save the redacted results. If the calls cannot be explained, do not ship the integration until the vendor provides an answer."
        ]
      },
      {
        "id": "test-the-failure-and-offline-behavior",
        "title": "Test the failure and offline behavior",
        "paragraphs": [
          "An SDK that works only on a fast, authenticated network is a production risk. Test what happens when the network is slow, the token expires, the permission is denied, and the service returns an error. Record the behavior and the message the user sees. The integration should fail in a way the product can recover from.",
          "Test the offline path if the feature is used on a mobile device or in a location with unreliable connectivity. Decide whether the SDK queues work, drops it, or blocks the interface. A queue that grows without a limit can become a data problem later. Record the chosen behavior and the owner who approved it."
        ]
      },
      {
        "id": "check-the-update-and-support-path",
        "title": "Check the update and support path",
        "paragraphs": [
          "Ask how often the SDK releases, whether it follows semantic versioning, and how breaking changes are announced. Check the issue tracker and the release notes for the last year. A package with no recent maintenance is a liability even if it works today. Record the maintenance signal and the date it was checked.",
          "Name the person who will own upgrades and the cadence for reviewing them. An SDK that is installed once and never updated becomes a security and compatibility problem. Add the upgrade to the maintenance calendar before the first release. If the vendor requires a paid support plan for security fixes, include that cost in the decision."
        ]
      },
      {
        "id": "measure-the-bundle-and-runtime-cost",
        "title": "Measure the bundle and runtime cost",
        "paragraphs": [
          "Measure the size the SDK adds to the build and the time it adds to startup. Compare the result with the product's performance budget and with the cost of a direct integration. A small feature that doubles the bundle may not be worth the dependency. Record the measurement method and the environment.",
          "Check the runtime cost during the operations the feature performs, not only at startup. A library that blocks the main thread during a common action will hurt the user experience. If the cost is acceptable, record the budget and the monitoring that will catch a regression. If it is not, revisit the direct API option."
        ]
      },
      {
        "id": "record-the-decision-and-the-exit-plan",
        "title": "Record the decision and the exit plan",
        "paragraphs": [
          "Write a short decision record that names the capability, the alternatives considered, the license, the data access, the measured cost, and the owner. Include the conditions under which the team would replace the SDK. A decision record is more useful than a comment in a pull request because it survives the integration. Link the record from the integration ticket so the next engineer can find it.",
          "Define the exit plan: which module wraps the SDK, which tests cover the integration, and what a replacement would need to implement. Keep the SDK behind an internal interface so the rest of the code does not depend on its types. An exit plan written before adoption is cheaper than a migration written after a vendor change. Review the wrapper boundary at the first code review, before the SDK leaks into unrelated modules."
        ]
      },
      {
        "id": "re-review-after-the-first-production-month",
        "title": "Re-review after the first production month",
        "paragraphs": [
          "After a month in production, review the SDK's actual behavior against the assumptions in the decision record. Check the error rates, the network calls, the bundle size, and the support tickets. If the assumptions were wrong, update the record and decide whether to keep, constrain, or replace the SDK. If the review finds no issues, record that result as well so the next review has a baseline.",
          "Review the vendor's release notes and security advisories for the period. If a new version is available, decide whether to upgrade now or schedule it. Record the decision and the next review date. A due-diligence review that ends at adoption becomes stale as soon as the vendor ships a change."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Need",
        "text": "The capability, the alternative, and the reason an SDK is justified."
      },
      {
        "label": "Terms",
        "text": "License, attribution, telemetry, data use, and support commitments."
      },
      {
        "label": "Evidence",
        "text": "Permissions, network calls, failure behavior, bundle size, and startup cost."
      },
      {
        "label": "Exit",
        "text": "The wrapper interface, the tests, the replacement path, and the review date."
      }
    ],
    "faqs": [
      {
        "question": "Is a popular SDK automatically safe?",
        "answer": "No. Popularity is not a review. Check the license, the data access, the maintenance signal, and the failure behavior for the exact version you plan to ship."
      },
      {
        "question": "Can we skip the review for a small library?",
        "answer": "Use a proportionate review. A small library still needs a license check, a data check, and an owner. The depth can vary, but the decision should be recorded."
      },
      {
        "question": "What if the vendor will not explain its network calls?",
        "answer": "Treat that as a finding. Do not ship the integration until the behavior is understood or the SDK is replaced. An unexplained call is an unmanaged risk."
      },
      {
        "question": "Who owns SDK upgrades?",
        "answer": "A named engineer or team should own the upgrade cadence and the security review. The owner should be recorded in the decision record, not assumed."
      }
    ],
    "sources": [
      {
        "name": "Open Source Initiative, licenses",
        "url": "https://opensource.org/licenses",
        "note": "License texts and compatibility considerations."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Supply-chain and third-party component practices."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Expectations for secure defaults and vendor transparency."
      }
    ],
    "heroImage": "/nov04/blog/review-a-third-party-sdk-before-an-outsourced-integration.webp"
  },
  "write-a-definition-of-done-for-outsourced-accessibility-fixes": {
    "takeaways": [
      "Start from the user barrier and the assistive technology that exposed it.",
      "Require evidence from a real interaction, not only an automated scan.",
      "Separate the code fix, the content fix, and the design decision.",
      "Re-test the surrounding flow after the next release."
    ],
    "readinessRows": [
      {
        "area": "Barrier",
        "ready": "The ticket names the user action that fails and the technology used.",
        "notReady": "The ticket says the page is not accessible."
      },
      {
        "area": "Evidence",
        "ready": "A screen reader, keyboard, or zoom session shows the failure and the fix.",
        "notReady": "The only evidence is a scanner score."
      },
      {
        "area": "Scope",
        "ready": "The fix covers the component and the flows that reuse it.",
        "notReady": "One page is patched while the shared component stays broken."
      },
      {
        "area": "Acceptance",
        "ready": "The owner confirms the barrier is gone and the regression check passes.",
        "notReady": "The pull request is merged because the code looks right."
      }
    ],
    "sections": [
      {
        "id": "start-from-the-reported-barrier-not-the-code",
        "title": "Start from the reported barrier, not the code",
        "paragraphs": [
          "An accessibility fix should begin with the user action that fails and the technology that exposed it. Record the page, the control, the input method, and the expected result. A ticket that says the form is inaccessible gives the engineer nothing to verify. The barrier description is the acceptance criterion.",
          "Ask the reporter to include the assistive technology and version, the browser, and the steps that lead to the failure. If the report came from an automated scan, reproduce the finding with a real interaction before writing the fix. A scanner can point to a rule, but it cannot confirm that the user can complete the task. If the report came from a customer, ask support to collect the same details before the ticket reaches engineering."
        ]
      },
      {
        "id": "write-the-expected-behavior-for-each-input-method",
        "title": "Write the expected behavior for each input method",
        "paragraphs": [
          "Accessibility is not one behavior, so the definition of done should cover keyboard, screen reader, zoom, and pointer input where they apply. State what the user should be able to do with each method. For a modal, that might mean focus moves into the dialog, the escape key closes it, and focus returns to the trigger. Each behavior is a testable line.",
          "Include the visual requirements that affect the interaction, such as focus visibility and contrast. A control that works with a keyboard but has no visible focus is still difficult to use. Record the expected focus style and the contrast target. The reviewer should not have to infer the standard from a design file."
        ]
      },
      {
        "id": "require-evidence-from-a-real-assistive-technology",
        "title": "Require evidence from a real assistive technology",
        "paragraphs": [
          "An automated scan is a useful first pass, but it does not prove that a screen reader announces the control correctly. Require a short recording or a written transcript of the screen reader interaction. Include the browser, the screen reader version, and the exact steps. The evidence should show the before and after states.",
          "Keyboard testing should show the full path, including the escape route and the focus return. Zoom testing should show the layout at the target magnification without horizontal scrolling for the main task. If a test cannot be performed, record the gap and the owner who accepted it. A definition of done that allows untested claims is not a standard."
        ]
      },
      {
        "id": "separate-a-code-fix-from-a-content-fix",
        "title": "Separate a code fix from a content fix",
        "paragraphs": [
          "Some barriers are caused by markup, and some are caused by the words or the structure of the content. A missing label may be a code fix, while an ambiguous error message may be a content fix. Decide which kind of change is needed before assigning the work. Mixing the two in one ticket makes the acceptance unclear.",
          "If the fix requires a design decision, such as a new focus style or a different layout, route it to the design owner. The engineer should not invent a visual standard that the product has not approved. Record the decision and the reason so the next component follows the same pattern. A one-off fix that is not reflected in the system will recur."
        ]
      },
      {
        "id": "check-the-regression-surface",
        "title": "Check the regression surface",
        "paragraphs": [
          "A shared component change can affect every page that uses it, so the definition of done should name the regression surface. List the screens and flows that reuse the component and add them to the test plan. If the component is used in a checkout or a login flow, include the full task, not only the component. Name the regression pages in the ticket before the change is merged.",
          "Run the regression check with the same assistive technology used for the original report. A fix that works on the reported page but breaks another page is not done. Record the pages tested and the result. If a page could not be tested, say so and name the risk."
        ]
      },
      {
        "id": "record-what-was-not-fixed-and-why",
        "title": "Record what was not fixed and why",
        "paragraphs": [
          "Not every barrier can be fixed in the same release, and pretending otherwise damages trust. Record the items that remain, the reason, and the owner who accepted the deferral. Include the user impact and the planned date if one exists. A transparent backlog is better than a closed ticket that hides the problem.",
          "If the deferral is due to a dependency or a vendor, name it and the date it will be reviewed. If the deferral is due to a design decision, record the decision and the person who made it. The next reviewer should be able to see why the item is still open without reopening the whole investigation. Review the deferral at the next accessibility meeting rather than leaving it in a closed sprint."
        ]
      },
      {
        "id": "get-acceptance-from-the-owner-not-only-the-developer",
        "title": "Get acceptance from the owner, not only the developer",
        "paragraphs": [
          "The engineer can confirm that the code changed, but the product owner or accessibility lead should confirm that the barrier is gone. Ask that person to run the same task with the same assistive technology. Record their confirmation and the date. This step prevents a technically correct change from being accepted when the user experience is still broken.",
          "If the owner cannot test, provide the recording and a short script so they can repeat it. Do not accept the developer's summary as the only evidence. The acceptance record should name the person, the method, and the result. That record is what makes the definition of done meaningful."
        ]
      },
      {
        "id": "re-test-after-the-next-release",
        "title": "Re-test after the next release",
        "paragraphs": [
          "Accessibility regressions often appear after a later change to the same component or design system. Add the fixed flow to the regression suite and re-test it after the next release. Use the same assistive technology and the same task. Record the result beside the original fix.",
          "If the regression returns, reopen the item and link it to the change that caused it. If the fix holds, note the release and keep the test in the suite. Review the pattern at the next accessibility review and update the component guidance. A fix that is not re-tested is a temporary repair."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Barrier",
        "text": "The user action, the assistive technology, the browser, and the expected result."
      },
      {
        "label": "Evidence",
        "text": "Before and after recordings or transcripts for each input method."
      },
      {
        "label": "Scope",
        "text": "The component, the reused flows, and the pages that need regression checks."
      },
      {
        "label": "Acceptance",
        "text": "The owner's confirmation, the deferrals, and the next re-test date."
      }
    ],
    "faqs": [
      {
        "question": "Can an automated scan close an accessibility ticket?",
        "answer": "No. A scan can find some issues, but it cannot confirm that a person can complete the task with a screen reader or keyboard. Use it as a first pass, then test the interaction."
      },
      {
        "question": "Who should accept the fix?",
        "answer": "The product owner or accessibility lead who understands the user barrier. The developer can provide evidence, but should not be the only approver."
      },
      {
        "question": "What if the fix changes the visual design?",
        "answer": "Route the change to the design owner and record the decision. A focus style or layout change should be consistent with the design system, not invented per ticket."
      },
      {
        "question": "How do we handle a fix we cannot ship yet?",
        "answer": "Record the remaining barrier, the user impact, the reason for deferral, and the owner. Keep it visible in the backlog rather than closing the ticket."
      }
    ],
    "sources": [
      {
        "name": "W3C Web Content Accessibility Guidelines 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Success criteria used to define the expected behavior."
      },
      {
        "name": "W3C WAI, testing with screen readers",
        "url": "https://www.w3.org/WAI/test-evaluate/tools/",
        "note": "Guidance on assistive-technology evaluation."
      },
      {
        "name": "WebAIM, keyboard accessibility",
        "url": "https://webaim.org/techniques/keyboard/",
        "note": "Practical keyboard and focus testing guidance."
      }
    ],
    "heroImage": "/nov04/blog/write-a-definition-of-done-for-outsourced-accessibility-fixes.webp"
  }
};
