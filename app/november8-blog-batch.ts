export const november8BlogBatch = [
  {
    "slug": "write-an-incident-handoff-brief-for-a-follow-the-sun-offshore-team",
    "title": "Write an incident handoff brief for a follow-the-sun offshore team",
    "excerpt": "An incident handoff brief that carries the timeline, the current hypothesis, the open decisions, and the next check across time zones.",
    "minutes": 8,
    "published": "2026-11-08",
    "body": [
      "## Open with the state of the service, not the story",
      "An incident handoff brief begins with the service state at the moment of transfer, not with a retelling of how the team got there. Name the affected service, the customer impact, the current severity, and whether the situation is improving, stable, or worsening. The incoming engineer should be able to brief a customer after one read. Put the timestamp and time zone beside every state statement so a stale note cannot masquerade as current.",
      "Write the brief while the incident is still open, not after it closes. A note written from memory the next morning loses the order of events and the uncertainty the team actually felt. Keep the draft in the incident channel so the next shift sees the same source of truth. Ask the outgoing engineer to update it ten minutes before the transfer, not at the moment they sign off.",
      "## Carry the timeline with evidence links",
      "A useful timeline lists the first alert, the first human response, each mitigation attempt, and the observed effect of each attempt. Link the dashboard, the deploy, the log query, and the ticket that produced the evidence. Do not paste a wall of raw logs into the brief. A reader should be able to open the link and confirm the claim within a minute.",
      "Mark the events that are confirmed and the events that are inferred. An inferred cause that is written as fact will be repeated as fact by the next shift. Use a short label such as confirmed or suspected beside each entry. When a later check overturns an earlier belief, add the correction instead of deleting the original line. The history of the belief is part of the incident record.",
      "## State the current hypothesis and its confidence",
      "Write one sentence that names the leading hypothesis and one sentence that names the evidence for it. Include the alternative that has not been ruled out, because the next engineer may recognize a signal the outgoing team missed. State the confidence in plain terms rather than a number that implies precision the team does not have. A named hypothesis gives the next shift something to test.",
      "Separate the cause hypothesis from the immediate trigger. A memory limit may be the underlying condition while a traffic spike is the trigger that exposed it. The next shift needs to know which one a mitigation should target. If the team has no hypothesis yet, say so and list the checks already ruled out. An honest blank is more useful than a confident guess.",
      "Keep the hypothesis tied to a test that could prove it wrong. A theory without a falsifying check invites the team to collect only supporting evidence. Write the check beside the hypothesis and the time it should run. If the team cannot name a check, the hypothesis is still a hunch and should be labeled that way.",
      "## List the decisions that are still open",
      "An incident handoff should name every decision that is waiting, the person who owns it, and the deadline attached to it. Examples include whether to roll back, whether to fail over, and whether to notify a customer. A decision that lives only in a call will be made twice or not at all. Put the owner's name and the channel where they can be reached.",
      "Record the options that were considered and the reason each was deferred. The next shift may face the same choice with new evidence and should not restart the analysis from zero. If a decision requires client approval, state the approval window and the fallback if no answer arrives. An open decision without a fallback becomes a stall.",
      "Record who has already been consulted and what they said. A decision that repeats a conversation with the same person wastes the next shift's time and erodes confidence. If a vendor or a client contact gave a verbal answer, note the name, the time, and whether it was binding. A verbal answer is evidence only when the brief says who gave it.",
      "## Name the next check and the rollback threshold",
      "The brief should end with the next concrete action: the check to run, the metric to watch, and the time it should be reviewed. A next action that says monitor the service is not a check. Write the threshold that would trigger a rollback or an escalation so the incoming engineer does not have to invent one under pressure. Put the exact command or dashboard link beside the threshold.",
      "Review the rollback path even when the service looks stable. Confirm that the previous artifact is still available and that the person with authority to deploy it is awake. If a data migration makes a code rollback unsafe, describe the forward fix and the evidence that would justify it. The rollback decision should be a tested path, not an improvisation.",
      "Choose thresholds that the incoming engineer can actually observe. A threshold based on a metric nobody is graphing is not a control. Link the chart, name the query, and state the normal range beside the trigger. If the metric is noisy, give a duration as well as a level so a momentary spike does not force a rollback.",
      "## Hand over the channel and the customer message",
      "Tell the incoming engineer which channel is authoritative, which channels are for updates only, and where the customer-facing message lives. Duplicate incident channels create conflicting timelines and split decisions. Archive the side channels at transfer and point everyone to the main one. Record who is responsible for the next customer update and when it is due.",
      "Keep the customer message aligned with the internal state. If the internal note says the cause is unknown, the external message should not claim a fix is imminent. Give the incoming engineer the approved wording and the name of the person who can change it. A handoff is complete when the next shift can act, brief, and escalate without calling the outgoing engineer.",
      "Keep the customer message short and factual, and separate it from the internal speculation. Customers need to know what is affected, what they should do, and when they will hear more. They do not need the team's current theory. Store the approved wording with the incident record so the next update starts from the last approved text.",
      "## Close the transfer with a read-back",
      "Ask the incoming engineer to repeat the service state, the leading hypothesis, the next check, and the open decisions in their own words. The read-back exposes gaps that a written brief alone will hide. Correct the brief immediately when the read-back reveals a misunderstanding. Record the time the handoff was accepted.",
      "After the incident closes, review the handoff brief as part of the post-incident work. Ask which line the next shift had to clarify and add that clarification to the template. Keep one excellent brief as an example for the next incident. The template improves only when real handoffs are used to revise it.",
      "Send the brief to a small distribution list rather than a wide one, and name the people who must read it before the transfer closes. A brief that nobody confirms is only a document. Record the confirmation time for each required reader. If a reader cannot be reached, name the substitute and the reason."
    ]
  },
  {
    "slug": "set-a-code-review-rotation-for-an-offshore-delivery-pod",
    "title": "Set a code review rotation for an offshore delivery pod",
    "excerpt": "A review rotation that spreads knowledge, protects review latency, and keeps the client's approval authority intact.",
    "minutes": 8,
    "published": "2026-11-08",
    "body": [
      "## Start from the review load, not the org chart",
      "A review rotation should be built from the actual review load: how many pull requests arrive each day, how long each takes, and which areas need a specialist. Count the reviews that wait for one person and the reviews that come back with the same comment. That count tells you where a rotation helps and where it only spreads confusion. Publish the baseline before you change the schedule.",
      "Separate the review types before assigning people. A dependency bump, a bug fix, a schema migration, and a new customer-facing feature need different attention. A rotation that treats them the same will send risky changes to the fastest reviewer rather than the right one. Name the review type in the pull request template so the rota can route it.",
      "Ask the client which reviews they expect to see before a release and which they delegate to the offshore rota. That answer sets the boundary the rota must respect. Write the list of client-mandatory reviews in the policy, with the named approver for each. A rota that ignores this list will look efficient while blocking the actual release.",
      "## Define the primary and secondary reviewer roles",
      "Each review day needs a primary reviewer who owns first response and a secondary who can step in when the primary is blocked. Publish both names in the same place the queue is visible. The primary should acknowledge a review request within an agreed window even if the full review comes later. An acknowledgement that says when the review will start is better than silence.",
      "The secondary role is not decorative. Give the secondary a specific duty, such as reviewing security-sensitive changes or covering the primary's leave. Rotate the secondary weekly so the coverage does not depend on one person's goodwill. Record who acted as secondary so the rota can be checked against actual work.",
      "Give the secondary a defined handoff at the end of each week. The handoff should list the open reviews, the pending questions, and the areas that need a specialist. Without it, the next secondary starts from zero and the queue waits for the primary to return. Keep the handoff short enough to read in five minutes.",
      "## Match reviewers to risk, then to growth",
      "Assign high-risk changes to a reviewer who has worked in that area, and use low-risk changes to widen experience. A junior engineer should review alongside a senior on a payment path before reviewing it alone. State the pairing rule in the rota so growth does not quietly reduce coverage. The goal is two people who understand each critical area, not one fast reviewer.",
      "Track who has reviewed which area over a quarter. A rotation that looks fair in the calendar can still concentrate knowledge in the same two people. Use the review history to choose the next pairing rather than rotating names at random. Record the areas where only one reviewer is qualified and treat that as a staffing risk.",
      "Record the reviewer's familiarity with the area so the pairing decision has evidence behind it. Familiarity can come from prior reviews, commits, or incident work, and each source should be dated. A reviewer who has only read about a payment path is not the same as one who has debugged it. The distinction matters when the change is risky.",
      "## Protect review latency across time zones",
      "Review latency grows when the author and reviewer work on opposite sides of the day. Set an overlap window when both are online, and route urgent reviews into that window. For everything else, require the reviewer to leave the first substantive comment before the overlap ends. A rota that ignores time zones produces a queue that waits twenty-four hours for a five-minute read.",
      "Publish the handoff between review shifts. The outgoing reviewer should note what they checked, what remains, and any concern that should not be lost. The incoming reviewer should start from that note rather than from the top of the pull request. Review handoffs fail when the second reviewer repeats the first review instead of continuing it.",
      "Do not let the rota become a reason to skip the author's own checks. The author should still run the tests, attach the evidence, and describe the risk before requesting review. A rota that promises a fast reviewer can tempt authors to send incomplete work. Keep the author checklist in the pull request template and review it first.",
      "## Keep client approval separate from the rota",
      "The offshore rotation decides who reviews, not who approves a production release. Keep merge and release authority with the client's named owner. The rotation can recommend and can block on technical grounds, but it must not become a path around the client's change control. Write that boundary in the review policy so a fast rota does not look like delegated release authority.",
      "When the client reviewer is unavailable, use a named backup rather than the offshore lead. Record the substitution and its duration. The separation protects both sides: the client keeps accountability, and the offshore team is not asked to approve its own risk. Review the arrangement whenever the client's team changes.",
      "If the client wants to join the rotation, give them a named slot and the same acknowledgement expectation as everyone else. A client reviewer who appears only at the end of a release creates a second, slower queue, so the slot needs the same backup rule as every other. Treat the client slot like any other and record when it is covered by a backup. Ask the client to name that backup before the first review cycle starts.",
      "## Measure the rotation after two sprints",
      "After two sprints, compare review latency, rework, and the number of areas with only one qualified reviewer. Ask authors whether the rota made the next step clear and reviewers whether the load was fair. Look for reviews that bounced between people without a decision. A rotation that adds handoffs without reducing wait has failed even if the calendar looks balanced.",
      "Change one variable at a time. If latency is the problem, adjust the overlap window before adding more reviewers. If knowledge concentration is the problem, change the pairing before changing the schedule. Record the change and the date of the next review. A rota is a working agreement, and it should be revised from evidence rather than seniority.",
      "Publish the rota where authors can see it before they open a pull request. A rota hidden in a wiki page that nobody opens will not change behaviour. Link it from the pull request template and the team channel. If authors still route around it, ask why before adding another rule."
    ]
  },
  {
    "slug": "define-a-shared-definition-of-done-for-an-outsourced-qa-lane",
    "title": "Define a shared definition of done for an outsourced QA lane",
    "excerpt": "A definition of done that names the evidence, the environment, the owner, and the conditions that send a ticket back.",
    "minutes": 8,
    "published": "2026-11-08",
    "body": [
      "## Write done as observable evidence",
      "A definition of done for an outsourced QA lane should describe what a reviewer can see, run, or read when the work is finished. Replace phrases such as tested and working with the exact evidence: the environment, the test data, the command, and the result. A definition that depends on the tester's judgment cannot be checked by the client. Write the evidence in the same ticket the work will close.",
      "Keep the definition short enough to read before starting a ticket. If it runs to a page, split it into a common core and a short addendum for special work. The common core should cover every ticket in the lane, including documentation and configuration changes. The addendum names the extra evidence a risky change requires.",
      "Anchor the definition to the customer outcome the ticket is meant to produce. A login fix that passes a test but leaves the reset link broken is not done for the customer. Ask the author to name the outcome and the check that proves it. The tester can then verify the outcome rather than only the changed lines.",
      "## Name the environments and data",
      "State which environment the verification must run in and how that environment differs from production. A pass on a developer machine is not evidence for a release. Name the browser, the device, the database version, and the feature flags used. If the test needs masked data, say where the dataset comes from and when it was refreshed.",
      "Record the data that must not be used, such as live customer records or unmasked payment details. A QA lane that copies production data into a shared environment creates a second incident while testing for the first. Give the tester a synthetic fixture or a documented masked extract. The definition should make the safe path the easy path.",
      "Record the environment build time and the data refresh time beside the evidence. A pass on an environment that is three releases behind production is weak evidence. If the environment cannot be brought current, state the gap and the reviewer who accepted it. The gap should be visible, not buried in a setup note.",
      "## Set the evidence format",
      "Decide in advance whether the evidence is a test run, a screenshot, a log excerpt, a recording, or a written reproduction. Each format has a purpose, and mixing them without a rule produces a folder nobody can review. Require the evidence to show the build identifier and the timestamp. A screenshot without a build tells the reviewer nothing about what was tested.",
      "For defects, require a minimal reproduction and the expected result. A bug report that says the page is broken sends the work back to the developer without a target. For fixes, require the failing test before the fix and the passing test after it. That pair is stronger evidence than a claim that the issue is resolved.",
      "Require the evidence to be attached to the ticket before the status changes. A link pasted after the ticket closes is easy to lose and hard to audit. If the evidence is a video, add a short index of the moments that matter. A reviewer should not have to watch twenty minutes to find the failure.",
      "## Define the return conditions",
      "List the conditions that send a ticket back to the author, such as a missing test, an unexplained environment difference, or a change that touches an unapproved area. Make the return reason a required field so the team can count why work comes back. A definition of done without return conditions becomes a negotiation at the end of every sprint, and that negotiation rarely produces a reusable answer. Record the answer in the definition so the next ticket starts from a rule.",
      "Distinguish a defect from a preference. A reviewer who returns work for style without citing a written rule creates rework that the definition cannot prevent. Record the rule that was violated, or accept the work and raise the style point separately. The lane should learn from returns, not absorb them silently.",
      "Review the return reasons monthly and look for repeats. A return reason that appears every week is usually a missing template field or an unclear requirement. Fix the cause in the definition or the intake form rather than coaching the tester again. Record the change and the date it takes effect.",
      "## Assign the sign-off and the audit sample",
      "Name who signs off inside the offshore team and who accepts the result on the client side. The offshore sign-off confirms the evidence exists; the client acceptance confirms the business result is right. Keeping those two decisions separate prevents the tester from approving their own interpretation of the requirement. Record both names on the ticket.",
      "Sample a share of completed tickets each week and re-check the evidence against the definition. A sample that finds missing evidence means the definition or the review failed, not that the tester was careless. Report the sample size and the findings. Use the findings to change one line of the definition at a time.",
      "Give the client owner a short acceptance note that names what was checked and what was not. The note should be readable without opening the test tool. If the client accepts based only on a green status, the evidence is not doing its job. Ask the client to confirm the outcome in one sentence.",
      "## Review the definition each quarter",
      "Bring the return reasons, the audit findings, and a sample of recent tickets to a quarterly review. Ask which line of the definition prevented a defect and which line only added paperwork. Remove the line that no longer earns its place. A definition of done that never shrinks becomes a ritual that the team routes around.",
      "Update the onboarding pack in the same change so a new tester learns the current version. Keep the previous version for tickets that started under it. Announce the effective date and the tickets it applies to. The definition is a control, and like any control it needs an owner and a review date.",
      "Keep a small set of example tickets that show a strong pass, a weak pass, and a justified return. Use them in onboarding and in the quarterly review. Examples make an abstract definition concrete without adding another page of rules. Update the examples when the definition changes."
    ]
  },
  {
    "slug": "run-a-quarterly-architecture-decision-review-with-an-offshore-team",
    "title": "Run a quarterly architecture decision review with an offshore team",
    "excerpt": "A quarterly review that revisits architecture decisions, records what changed, and keeps the client's technical authority visible.",
    "minutes": 8,
    "published": "2026-11-08",
    "body": [
      "## Collect the decisions that still shape the code",
      "Start the review from the architecture decision records that are still active, not from a fresh design debate. List each decision, the problem it solved, and the date it was made. Mark the decisions that have been superseded or quietly abandoned. A quarterly review is more useful when it begins with the decisions the team is actually living with.",
      "Ask the offshore lead and the client architect to nominate the decisions that cause the most questions during delivery. Those are often the ones with missing context rather than the ones with the highest risk. Put both lists together and remove duplicates before the meeting. A short, agreed list is better than a complete archive nobody reads.",
      "Record the business capability each decision supports, not only the technical mechanism. A message queue exists to keep orders moving, and that purpose should be visible beside the choice. When the business capability changes, the decision can be reviewed against the new goal. A decision record without a purpose is hard to retire.",
      "## Check each decision against current reality",
      "For each decision, record the assumptions that were true when it was made and whether they still hold. A cache choice may have been correct at one traffic level and wrong at another. A service split may have made sense before a team change. The review should compare the decision with the current load, team, and customer commitments.",
      "Look for decisions that were never revisited because nobody owned them. An unowned decision becomes a default that new engineers copy without understanding. Assign an owner and a review date to every active decision. If the owner has left, name a replacement before the meeting ends.",
      "Bring the incident and support history for the systems touched by each decision. A choice that looked clean in design may have created a recurring on-call burden. The review should see the cost as well as the elegance. If the cost is acceptable, say so and record why; if not, name the next experiment.",
      "## Separate reversible choices from irreversible ones",
      "Classify each decision by the cost of changing it. A logging format is easy to revise, while a public API contract or a data partition is expensive. Spend the review time on the expensive choices and treat the cheap ones as implementation detail. This keeps the meeting from turning into a style discussion.",
      "For irreversible decisions, require a written rationale and a trigger that would justify revisiting them. A trigger might be a traffic threshold, a regulatory change, or a new client requirement. Record the trigger beside the decision so a future team can see when the assumption expired. A decision with no trigger tends to be defended long after it stops fitting.",
      "Set a maximum review interval for decisions that cannot be reversed cheaply. Even a good decision deserves a scheduled look at the assumptions behind it. The interval should be short enough to catch drift and long enough to avoid churn. Record the next review date in the decision record itself.",
      "## Invite the people who feel the consequences",
      "Include the engineers who operate the system, not only the architects who designed it. On-call experience reveals costs that a design document hides. Invite one support or operations representative when the decision affects incident response. The review should hear from the people who will carry the outcome.",
      "Give each participant the decision list before the meeting and ask for one written concern per decision. Written concerns are easier to compare than a free-form discussion. The meeting should resolve or assign each concern rather than let it hang. Record the resolution and the person accountable.",
      "Ask each participant to bring one question rather than a general opinion. A question focuses the discussion and exposes missing information. The chair should either answer it, assign it, or record it as open. A meeting that collects opinions without resolving questions produces a longer document and no clearer design.",
      "## Keep client authority explicit",
      "The client's technical owner should chair the decisions that change a contract, a security boundary, or a public interface. The offshore team can present options and recommend one, but it should not ratify a decision that belongs to the client. Say who decides before the discussion starts. A clear chair prevents the review from producing a decision nobody can enforce.",
      "When the client and offshore team disagree, record both positions and the evidence each side used. Set a date for the decision rather than letting the disagreement drift. If the decision is deferred, name the interim behavior. An open architecture question should not be discovered again in the next incident.",
      "When the client and offshore team disagree, write the decision as a hypothesis and name the evidence that would settle it. A trial period with a defined measure is often better than an abstract debate. Set the date to review the trial and the person who will decide. This turns a conflict into a bounded experiment.",
      "## Publish the outcome and the follow-ups",
      "End the review with a short record per decision: keep, revise, supersede, or retire. Add the owner, the date, and the follow-up ticket. Publish the record where the repository and the client can both reach it. A review that produces only meeting notes has not changed the architecture.",
      "Check the follow-ups at the next quarterly review and report which ones closed. Retire the decisions that no longer apply instead of leaving them in the active list. Ask one engineer who did not attend to read the record and explain the current design back to the group. If they cannot, the record is incomplete.",
      "Keep the decision record in the same repository as the code so it travels with the work. A separate wiki can drift or lose access when a contract ends. Link the record from the pull request that implements it. The next engineer should find the reason beside the change."
    ]
  },
  {
    "slug": "set-up-a-client-owned-milestone-tracker-for-an-offshore-delivery-team",
    "title": "Set up a client-owned milestone tracker for an offshore delivery team",
    "excerpt": "A milestone tracker that the client owns, the offshore team updates, and both sides can audit without a status meeting.",
    "minutes": 8,
    "published": "2026-11-08",
    "body": [
      "## Decide what counts as a milestone",
      "A milestone should mark a decision or a deliverable that changes what the business can do, not a percentage of effort. Examples include a signed-off interface, a migration rehearsal, or a release that support can operate. Write the acceptance evidence beside the milestone. If the team cannot name the evidence, the milestone is probably a task in disguise.",
      "Keep the number of milestones small enough to remember. A tracker with forty milestones becomes a second backlog and stops communicating progress. Group the work into a handful of outcomes and let the task board carry the detail. The client should be able to see the next two milestones without opening a filter.",
      "Write the milestone description in the client's language, not the delivery team's shorthand. A milestone called phase two integration tells the client nothing about what will be usable. Describe the outcome, the users who benefit, and the evidence that will prove it. If the description needs a glossary, rewrite it.",
      "## Give the tracker one owner on each side",
      "Name a client owner who accepts a milestone and an offshore owner who maintains the record. The client owner decides whether the evidence meets the definition; the offshore owner keeps dates, links, and status current. Two owners prevent the tracker from becoming either a client wish list or a vendor report, and each can challenge a status the other has not verified. Write both names in the tracker before the first milestone is accepted.",
      "State how often the offshore owner updates the tracker and what triggers an immediate update. A milestone that slips should be updated the same day, not at the next weekly meeting. Record the update time beside the status. A tracker that is updated only when someone asks is not a control.",
      "Give the offshore owner a deputy who can update the tracker during leave. A tracker with one updater stops during a holiday and loses credibility. The deputy should know the status vocabulary and the evidence standard. Record the deputy in the tracker so the client knows who to ask.",
      "## Use a status vocabulary with fixed meanings",
      "Define a small set of statuses, such as not started, in progress, evidence ready, accepted, and blocked. Write the entry and exit condition for each status. Evidence ready means the deliverable exists and the link works; accepted means the client owner has reviewed it. Without fixed meanings, two people can read the same row and reach different conclusions.",
      "Do not use a percentage complete field unless the team can defend it with a rule. Percentages invite false precision and hide a milestone that has not started. Prefer a status plus the next action and the date it is due. The client can then see risk without interpreting a number.",
      "Show the last update time and the next review date on every row. A status without a timestamp cannot be trusted during a busy week. The review date tells the client when to expect a change even if nothing has moved. Both fields are cheap to maintain and expensive to reconstruct.",
      "## Attach evidence to every accepted milestone",
      "Require a link to the artifact, the test result, the decision record, or the release note before a milestone can be accepted. The evidence should be readable by someone who was not in the delivery meeting. Store it with the milestone rather than in a chat thread. An accepted milestone with no evidence is a promise, not a record.",
      "When the evidence is a demo, record what was shown and who attended. A recording is useful, but a short written summary with the acceptance decision is faster to audit. Note any condition attached to acceptance, such as a follow-up fix. The condition should have its own owner and date.",
      "When evidence is rejected, record the specific gap rather than a general request to improve it. A rejection that says not enough detail forces another round without a target. Name the missing artifact, the environment, or the acceptance check. The offshore owner can then fix the evidence once instead of guessing.",
      "## Make slippage visible without blame",
      "A tracker is useful only if a slip is visible early. Ask the offshore owner to record the reason, the new date, and the effect on the next milestone. The client owner should confirm whether the new date is acceptable. A tracker that hides slippage until the deadline destroys trust faster than the slip itself.",
      "Separate a scope change from a delay. If the client adds a requirement, record the change and its effect on the date rather than calling the original date late. If the offshore team underestimated, record that too. The history of changes is what makes the next estimate better.",
      "Keep a short risk list beside the milestones, with the trigger that would turn each risk into a delay. A risk without a trigger is a worry, not a control. Review the triggers monthly and close the ones that no longer apply. The client should see the top two risks without opening a separate register.",
      "## Review the tracker monthly and close it cleanly",
      "Hold a short monthly review of accepted milestones, open risks, and the next two dates. Use the tracker as the agenda rather than a separate status deck. Ask the client owner whether the evidence was sufficient and the offshore owner whether the dates are still credible. Record one improvement to the tracker itself.",
      "At the end of the engagement, export the tracker and the evidence links into the client's own system. Confirm that the client can open each link after the offshore accounts are closed. A tracker that dies with the vendor contract is not client-owned. Close the record with the final acceptance and the handover date.",
      "Ask the client to confirm in writing that the exported record is readable in their own tools. A CSV that loses links or a folder that requires vendor access is not a handover. Test one export before the final month so there is time to fix it. The handover date should appear in the tracker, not only in the contract."
    ]
  }
];

export const november8BlogDetails = {
  "write-an-incident-handoff-brief-for-a-follow-the-sun-offshore-team": {
    "takeaways": [
      "Lead with service state, impact, and trend, each with a timestamp.",
      "Link evidence instead of pasting raw logs into the brief.",
      "Name the leading hypothesis, the alternative, and the confidence.",
      "Give every open decision an owner, a deadline, and a fallback.",
      "End with the next check, the rollback threshold, and a read-back."
    ],
    "readinessRows": [
      {
        "area": "State",
        "ready": "Service, impact, severity, and trend are dated.",
        "notReady": "A narrative that starts with the first alert."
      },
      {
        "area": "Evidence",
        "ready": "Each claim links to a dashboard, deploy, or log query.",
        "notReady": "Screenshots with no source."
      },
      {
        "area": "Decisions",
        "ready": "Every open choice has an owner and a fallback.",
        "notReady": "A note that says waiting on client."
      },
      {
        "area": "Transfer",
        "ready": "The incoming engineer repeats the state and next check.",
        "notReady": "A sign-off with no read-back."
      }
    ],
    "sections": [
      {
        "id": "open-with-the-state-of-the-service-not-the-story",
        "title": "Open with the state of the service, not the story",
        "paragraphs": [
          "An incident handoff brief begins with the service state at the moment of transfer, not with a retelling of how the team got there. Name the affected service, the customer impact, the current severity, and whether the situation is improving, stable, or worsening. The incoming engineer should be able to brief a customer after one read. Put the timestamp and time zone beside every state statement so a stale note cannot masquerade as current.",
          "Write the brief while the incident is still open, not after it closes. A note written from memory the next morning loses the order of events and the uncertainty the team actually felt. Keep the draft in the incident channel so the next shift sees the same source of truth. Ask the outgoing engineer to update it ten minutes before the transfer, not at the moment they sign off."
        ]
      },
      {
        "id": "carry-the-timeline-with-evidence-links",
        "title": "Carry the timeline with evidence links",
        "paragraphs": [
          "A useful timeline lists the first alert, the first human response, each mitigation attempt, and the observed effect of each attempt. Link the dashboard, the deploy, the log query, and the ticket that produced the evidence. Do not paste a wall of raw logs into the brief. A reader should be able to open the link and confirm the claim within a minute.",
          "Mark the events that are confirmed and the events that are inferred. An inferred cause that is written as fact will be repeated as fact by the next shift. Use a short label such as confirmed or suspected beside each entry. When a later check overturns an earlier belief, add the correction instead of deleting the original line. The history of the belief is part of the incident record."
        ]
      },
      {
        "id": "state-the-current-hypothesis-and-its-confidence",
        "title": "State the current hypothesis and its confidence",
        "paragraphs": [
          "Write one sentence that names the leading hypothesis and one sentence that names the evidence for it. Include the alternative that has not been ruled out, because the next engineer may recognize a signal the outgoing team missed. State the confidence in plain terms rather than a number that implies precision the team does not have. A named hypothesis gives the next shift something to test.",
          "Separate the cause hypothesis from the immediate trigger. A memory limit may be the underlying condition while a traffic spike is the trigger that exposed it. The next shift needs to know which one a mitigation should target. If the team has no hypothesis yet, say so and list the checks already ruled out. An honest blank is more useful than a confident guess.",
          "Keep the hypothesis tied to a test that could prove it wrong. A theory without a falsifying check invites the team to collect only supporting evidence. Write the check beside the hypothesis and the time it should run. If the team cannot name a check, the hypothesis is still a hunch and should be labeled that way."
        ]
      },
      {
        "id": "list-the-decisions-that-are-still-open",
        "title": "List the decisions that are still open",
        "paragraphs": [
          "An incident handoff should name every decision that is waiting, the person who owns it, and the deadline attached to it. Examples include whether to roll back, whether to fail over, and whether to notify a customer. A decision that lives only in a call will be made twice or not at all. Put the owner's name and the channel where they can be reached.",
          "Record the options that were considered and the reason each was deferred. The next shift may face the same choice with new evidence and should not restart the analysis from zero. If a decision requires client approval, state the approval window and the fallback if no answer arrives. An open decision without a fallback becomes a stall.",
          "Record who has already been consulted and what they said. A decision that repeats a conversation with the same person wastes the next shift's time and erodes confidence. If a vendor or a client contact gave a verbal answer, note the name, the time, and whether it was binding. A verbal answer is evidence only when the brief says who gave it."
        ]
      },
      {
        "id": "name-the-next-check-and-the-rollback-threshold",
        "title": "Name the next check and the rollback threshold",
        "paragraphs": [
          "The brief should end with the next concrete action: the check to run, the metric to watch, and the time it should be reviewed. A next action that says monitor the service is not a check. Write the threshold that would trigger a rollback or an escalation so the incoming engineer does not have to invent one under pressure. Put the exact command or dashboard link beside the threshold.",
          "Review the rollback path even when the service looks stable. Confirm that the previous artifact is still available and that the person with authority to deploy it is awake. If a data migration makes a code rollback unsafe, describe the forward fix and the evidence that would justify it. The rollback decision should be a tested path, not an improvisation.",
          "Choose thresholds that the incoming engineer can actually observe. A threshold based on a metric nobody is graphing is not a control. Link the chart, name the query, and state the normal range beside the trigger. If the metric is noisy, give a duration as well as a level so a momentary spike does not force a rollback."
        ]
      },
      {
        "id": "hand-over-the-channel-and-the-customer-message",
        "title": "Hand over the channel and the customer message",
        "paragraphs": [
          "Tell the incoming engineer which channel is authoritative, which channels are for updates only, and where the customer-facing message lives. Duplicate incident channels create conflicting timelines and split decisions. Archive the side channels at transfer and point everyone to the main one. Record who is responsible for the next customer update and when it is due.",
          "Keep the customer message aligned with the internal state. If the internal note says the cause is unknown, the external message should not claim a fix is imminent. Give the incoming engineer the approved wording and the name of the person who can change it. A handoff is complete when the next shift can act, brief, and escalate without calling the outgoing engineer.",
          "Keep the customer message short and factual, and separate it from the internal speculation. Customers need to know what is affected, what they should do, and when they will hear more. They do not need the team's current theory. Store the approved wording with the incident record so the next update starts from the last approved text."
        ]
      },
      {
        "id": "close-the-transfer-with-a-read-back",
        "title": "Close the transfer with a read-back",
        "paragraphs": [
          "Ask the incoming engineer to repeat the service state, the leading hypothesis, the next check, and the open decisions in their own words. The read-back exposes gaps that a written brief alone will hide. Correct the brief immediately when the read-back reveals a misunderstanding. Record the time the handoff was accepted.",
          "After the incident closes, review the handoff brief as part of the post-incident work. Ask which line the next shift had to clarify and add that clarification to the template. Keep one excellent brief as an example for the next incident. The template improves only when real handoffs are used to revise it.",
          "Send the brief to a small distribution list rather than a wide one, and name the people who must read it before the transfer closes. A brief that nobody confirms is only a document. Record the confirmation time for each required reader. If a reader cannot be reached, name the substitute and the reason."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Outgoing",
        "text": "Updates state, evidence, and open decisions before sign-off."
      },
      {
        "label": "Incoming",
        "text": "Reads back the state and accepts the next check."
      },
      {
        "label": "Incident lead",
        "text": "Confirms authority, customer message, and rollback threshold."
      }
    ],
    "faqs": [
      {
        "question": "How long should an incident handoff brief be?",
        "answer": "One screen of state and decisions, plus linked evidence; a reader should brief a customer after one read."
      },
      {
        "question": "Should the brief include a suspected cause?",
        "answer": "Yes, labeled as suspected with its evidence and the alternative that remains open."
      },
      {
        "question": "When is the handoff finished?",
        "answer": "When the incoming engineer can state the next check and the rollback threshold without asking."
      }
    ],
    "sources": [
      {
        "name": "Google SRE Book, managing incidents",
        "url": "https://sre.google/sre-book/managing-incidents/",
        "note": "Incident roles, communication, and handoff practice."
      },
      {
        "name": "Atlassian incident management handbook",
        "url": "https://www.atlassian.com/incident-management/handbook",
        "note": "Severity, communication, and post-incident review structure."
      },
      {
        "name": "NIST SP 800-61 incident handling guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Incident response lifecycle and evidence handling."
      }
    ],
    "heroImage": "/nov08/blog/write-an-incident-handoff-brief-for-a-follow-the-sun-offshore-team.webp"
  },
  "set-a-code-review-rotation-for-an-offshore-delivery-pod": {
    "takeaways": [
      "Build the rota from measured review load and review types.",
      "Name a primary and a secondary, with a defined acknowledgement window.",
      "Pair juniors on risky areas before giving them solo review duty.",
      "Use the time-zone overlap for first response and explicit handoffs.",
      "Keep client release approval outside the offshore rotation."
    ],
    "readinessRows": [
      {
        "area": "Baseline",
        "ready": "Review volume, latency, and hot spots are measured.",
        "notReady": "A rota copied from another team."
      },
      {
        "area": "Coverage",
        "ready": "Each critical area has two qualified reviewers.",
        "notReady": "One architect reviews every migration."
      },
      {
        "area": "Handoff",
        "ready": "The outgoing reviewer leaves a written continuation note.",
        "notReady": "The next reviewer starts over."
      },
      {
        "area": "Authority",
        "ready": "Client merge and release approval stays named.",
        "notReady": "The offshore lead approves production."
      }
    ],
    "sections": [
      {
        "id": "start-from-the-review-load-not-the-org-chart",
        "title": "Start from the review load, not the org chart",
        "paragraphs": [
          "A review rotation should be built from the actual review load: how many pull requests arrive each day, how long each takes, and which areas need a specialist. Count the reviews that wait for one person and the reviews that come back with the same comment. That count tells you where a rotation helps and where it only spreads confusion. Publish the baseline before you change the schedule.",
          "Separate the review types before assigning people. A dependency bump, a bug fix, a schema migration, and a new customer-facing feature need different attention. A rotation that treats them the same will send risky changes to the fastest reviewer rather than the right one. Name the review type in the pull request template so the rota can route it.",
          "Ask the client which reviews they expect to see before a release and which they delegate to the offshore rota. That answer sets the boundary the rota must respect. Write the list of client-mandatory reviews in the policy, with the named approver for each. A rota that ignores this list will look efficient while blocking the actual release."
        ]
      },
      {
        "id": "define-the-primary-and-secondary-reviewer-roles",
        "title": "Define the primary and secondary reviewer roles",
        "paragraphs": [
          "Each review day needs a primary reviewer who owns first response and a secondary who can step in when the primary is blocked. Publish both names in the same place the queue is visible. The primary should acknowledge a review request within an agreed window even if the full review comes later. An acknowledgement that says when the review will start is better than silence.",
          "The secondary role is not decorative. Give the secondary a specific duty, such as reviewing security-sensitive changes or covering the primary's leave. Rotate the secondary weekly so the coverage does not depend on one person's goodwill. Record who acted as secondary so the rota can be checked against actual work.",
          "Give the secondary a defined handoff at the end of each week. The handoff should list the open reviews, the pending questions, and the areas that need a specialist. Without it, the next secondary starts from zero and the queue waits for the primary to return. Keep the handoff short enough to read in five minutes."
        ]
      },
      {
        "id": "match-reviewers-to-risk-then-to-growth",
        "title": "Match reviewers to risk, then to growth",
        "paragraphs": [
          "Assign high-risk changes to a reviewer who has worked in that area, and use low-risk changes to widen experience. A junior engineer should review alongside a senior on a payment path before reviewing it alone. State the pairing rule in the rota so growth does not quietly reduce coverage. The goal is two people who understand each critical area, not one fast reviewer.",
          "Track who has reviewed which area over a quarter. A rotation that looks fair in the calendar can still concentrate knowledge in the same two people. Use the review history to choose the next pairing rather than rotating names at random. Record the areas where only one reviewer is qualified and treat that as a staffing risk.",
          "Record the reviewer's familiarity with the area so the pairing decision has evidence behind it. Familiarity can come from prior reviews, commits, or incident work, and each source should be dated. A reviewer who has only read about a payment path is not the same as one who has debugged it. The distinction matters when the change is risky."
        ]
      },
      {
        "id": "protect-review-latency-across-time-zones",
        "title": "Protect review latency across time zones",
        "paragraphs": [
          "Review latency grows when the author and reviewer work on opposite sides of the day. Set an overlap window when both are online, and route urgent reviews into that window. For everything else, require the reviewer to leave the first substantive comment before the overlap ends. A rota that ignores time zones produces a queue that waits twenty-four hours for a five-minute read.",
          "Publish the handoff between review shifts. The outgoing reviewer should note what they checked, what remains, and any concern that should not be lost. The incoming reviewer should start from that note rather than from the top of the pull request. Review handoffs fail when the second reviewer repeats the first review instead of continuing it.",
          "Do not let the rota become a reason to skip the author's own checks. The author should still run the tests, attach the evidence, and describe the risk before requesting review. A rota that promises a fast reviewer can tempt authors to send incomplete work. Keep the author checklist in the pull request template and review it first."
        ]
      },
      {
        "id": "keep-client-approval-separate-from-the-rota",
        "title": "Keep client approval separate from the rota",
        "paragraphs": [
          "The offshore rotation decides who reviews, not who approves a production release. Keep merge and release authority with the client's named owner. The rotation can recommend and can block on technical grounds, but it must not become a path around the client's change control. Write that boundary in the review policy so a fast rota does not look like delegated release authority.",
          "When the client reviewer is unavailable, use a named backup rather than the offshore lead. Record the substitution and its duration. The separation protects both sides: the client keeps accountability, and the offshore team is not asked to approve its own risk. Review the arrangement whenever the client's team changes.",
          "If the client wants to join the rotation, give them a named slot and the same acknowledgement expectation as everyone else. A client reviewer who appears only at the end of a release creates a second, slower queue, so the slot needs the same backup rule as every other. Treat the client slot like any other and record when it is covered by a backup. Ask the client to name that backup before the first review cycle starts."
        ]
      },
      {
        "id": "measure-the-rotation-after-two-sprints",
        "title": "Measure the rotation after two sprints",
        "paragraphs": [
          "After two sprints, compare review latency, rework, and the number of areas with only one qualified reviewer. Ask authors whether the rota made the next step clear and reviewers whether the load was fair. Look for reviews that bounced between people without a decision. A rotation that adds handoffs without reducing wait has failed even if the calendar looks balanced.",
          "Change one variable at a time. If latency is the problem, adjust the overlap window before adding more reviewers. If knowledge concentration is the problem, change the pairing before changing the schedule. Record the change and the date of the next review. A rota is a working agreement, and it should be revised from evidence rather than seniority.",
          "Publish the rota where authors can see it before they open a pull request. A rota hidden in a wiki page that nobody opens will not change behaviour. Link it from the pull request template and the team channel. If authors still route around it, ask why before adding another rule."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Review lead",
        "text": "Publishes the weekly rota and tracks the review queue."
      },
      {
        "label": "Primary reviewer",
        "text": "Acknowledges requests and leaves the first substantive comment."
      },
      {
        "label": "Client owner",
        "text": "Keeps merge and production release authority."
      }
    ],
    "faqs": [
      {
        "question": "How often should the review rota change?",
        "answer": "Weekly for the primary and secondary roles, with a quarterly check on coverage and latency."
      },
      {
        "question": "Can a junior reviewer approve a risky change?",
        "answer": "Only alongside a qualified reviewer; approval authority remains with the client's named owner."
      },
      {
        "question": "What if the primary reviewer is on leave?",
        "answer": "The named secondary covers, and the substitution is recorded in the rota."
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs, about pull request reviews",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Review states, required reviewers, and approval rules."
      },
      {
        "name": "Google Engineering Practices, code review",
        "url": "https://google.github.io/eng-practices/review/",
        "note": "Reviewer and author responsibilities and review speed."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Review and change-control practices for outsourced delivery."
      }
    ],
    "heroImage": "/nov08/blog/set-a-code-review-rotation-for-an-offshore-delivery-pod.webp"
  },
  "define-a-shared-definition-of-done-for-an-outsourced-qa-lane": {
    "takeaways": [
      "Replace tested and working with environment, data, command, and result.",
      "Require build identifiers and timestamps on every piece of evidence.",
      "Make return reasons a required field so rework can be counted.",
      "Separate offshore evidence sign-off from client business acceptance.",
      "Audit a weekly sample and retire rules that no longer prevent defects."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "Build, environment, data, and result are named.",
        "notReady": "A comment that says looks good."
      },
      {
        "area": "Safety",
        "ready": "Masked or synthetic data is the documented default.",
        "notReady": "A shared copy of live customer records."
      },
      {
        "area": "Returns",
        "ready": "Every return cites a written rule.",
        "notReady": "Rework driven by reviewer preference."
      },
      {
        "area": "Ownership",
        "ready": "Offshore sign-off and client acceptance are separate.",
        "notReady": "The tester approves the requirement."
      }
    ],
    "sections": [
      {
        "id": "write-done-as-observable-evidence",
        "title": "Write done as observable evidence",
        "paragraphs": [
          "A definition of done for an outsourced QA lane should describe what a reviewer can see, run, or read when the work is finished. Replace phrases such as tested and working with the exact evidence: the environment, the test data, the command, and the result. A definition that depends on the tester's judgment cannot be checked by the client. Write the evidence in the same ticket the work will close.",
          "Keep the definition short enough to read before starting a ticket. If it runs to a page, split it into a common core and a short addendum for special work. The common core should cover every ticket in the lane, including documentation and configuration changes. The addendum names the extra evidence a risky change requires.",
          "Anchor the definition to the customer outcome the ticket is meant to produce. A login fix that passes a test but leaves the reset link broken is not done for the customer. Ask the author to name the outcome and the check that proves it. The tester can then verify the outcome rather than only the changed lines."
        ]
      },
      {
        "id": "name-the-environments-and-data",
        "title": "Name the environments and data",
        "paragraphs": [
          "State which environment the verification must run in and how that environment differs from production. A pass on a developer machine is not evidence for a release. Name the browser, the device, the database version, and the feature flags used. If the test needs masked data, say where the dataset comes from and when it was refreshed.",
          "Record the data that must not be used, such as live customer records or unmasked payment details. A QA lane that copies production data into a shared environment creates a second incident while testing for the first. Give the tester a synthetic fixture or a documented masked extract. The definition should make the safe path the easy path.",
          "Record the environment build time and the data refresh time beside the evidence. A pass on an environment that is three releases behind production is weak evidence. If the environment cannot be brought current, state the gap and the reviewer who accepted it. The gap should be visible, not buried in a setup note."
        ]
      },
      {
        "id": "set-the-evidence-format",
        "title": "Set the evidence format",
        "paragraphs": [
          "Decide in advance whether the evidence is a test run, a screenshot, a log excerpt, a recording, or a written reproduction. Each format has a purpose, and mixing them without a rule produces a folder nobody can review. Require the evidence to show the build identifier and the timestamp. A screenshot without a build tells the reviewer nothing about what was tested.",
          "For defects, require a minimal reproduction and the expected result. A bug report that says the page is broken sends the work back to the developer without a target. For fixes, require the failing test before the fix and the passing test after it. That pair is stronger evidence than a claim that the issue is resolved.",
          "Require the evidence to be attached to the ticket before the status changes. A link pasted after the ticket closes is easy to lose and hard to audit. If the evidence is a video, add a short index of the moments that matter. A reviewer should not have to watch twenty minutes to find the failure."
        ]
      },
      {
        "id": "define-the-return-conditions",
        "title": "Define the return conditions",
        "paragraphs": [
          "List the conditions that send a ticket back to the author, such as a missing test, an unexplained environment difference, or a change that touches an unapproved area. Make the return reason a required field so the team can count why work comes back. A definition of done without return conditions becomes a negotiation at the end of every sprint, and that negotiation rarely produces a reusable answer. Record the answer in the definition so the next ticket starts from a rule.",
          "Distinguish a defect from a preference. A reviewer who returns work for style without citing a written rule creates rework that the definition cannot prevent. Record the rule that was violated, or accept the work and raise the style point separately. The lane should learn from returns, not absorb them silently.",
          "Review the return reasons monthly and look for repeats. A return reason that appears every week is usually a missing template field or an unclear requirement. Fix the cause in the definition or the intake form rather than coaching the tester again. Record the change and the date it takes effect."
        ]
      },
      {
        "id": "assign-the-sign-off-and-the-audit-sample",
        "title": "Assign the sign-off and the audit sample",
        "paragraphs": [
          "Name who signs off inside the offshore team and who accepts the result on the client side. The offshore sign-off confirms the evidence exists; the client acceptance confirms the business result is right. Keeping those two decisions separate prevents the tester from approving their own interpretation of the requirement. Record both names on the ticket.",
          "Sample a share of completed tickets each week and re-check the evidence against the definition. A sample that finds missing evidence means the definition or the review failed, not that the tester was careless. Report the sample size and the findings. Use the findings to change one line of the definition at a time.",
          "Give the client owner a short acceptance note that names what was checked and what was not. The note should be readable without opening the test tool. If the client accepts based only on a green status, the evidence is not doing its job. Ask the client to confirm the outcome in one sentence."
        ]
      },
      {
        "id": "review-the-definition-each-quarter",
        "title": "Review the definition each quarter",
        "paragraphs": [
          "Bring the return reasons, the audit findings, and a sample of recent tickets to a quarterly review. Ask which line of the definition prevented a defect and which line only added paperwork. Remove the line that no longer earns its place. A definition of done that never shrinks becomes a ritual that the team routes around.",
          "Update the onboarding pack in the same change so a new tester learns the current version. Keep the previous version for tickets that started under it. Announce the effective date and the tickets it applies to. The definition is a control, and like any control it needs an owner and a review date.",
          "Keep a small set of example tickets that show a strong pass, a weak pass, and a justified return. Use them in onboarding and in the quarterly review. Examples make an abstract definition concrete without adding another page of rules. Update the examples when the definition changes."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "QA lead",
        "text": "Maintains the definition and signs off on evidence completeness."
      },
      {
        "label": "Tester",
        "text": "Attaches the build, environment, data, and result to each ticket."
      },
      {
        "label": "Client owner",
        "text": "Accepts the business result against the written requirement."
      }
    ],
    "faqs": [
      {
        "question": "Does every ticket need the same evidence?",
        "answer": "A common core applies to all work, with a short addendum for risky or regulated changes."
      },
      {
        "question": "Who decides whether a ticket is done?",
        "answer": "The offshore lead confirms evidence, and the client owner accepts the business result."
      },
      {
        "question": "How do we stop endless rework?",
        "answer": "Require a written rule for every return and review the reasons quarterly."
      }
    ],
    "sources": [
      {
        "name": "ISTQB glossary, definition of done",
        "url": "https://glossary.istqb.org/",
        "note": "Testing terminology and completion criteria."
      },
      {
        "name": "Google Testing Blog",
        "url": "https://testing.googleblog.com/",
        "note": "Practical test evidence and flaky-test guidance."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Test data protection and configuration control context."
      }
    ],
    "heroImage": "/nov08/blog/define-a-shared-definition-of-done-for-an-outsourced-qa-lane.webp"
  },
  "run-a-quarterly-architecture-decision-review-with-an-offshore-team": {
    "takeaways": [
      "Start from active decision records, not a fresh design debate.",
      "Test each decision against current load, team, and commitments.",
      "Spend review time on expensive, hard-to-reverse choices.",
      "Give every decision an owner, a trigger, and a review date.",
      "Publish keep, revise, supersede, or retire outcomes with follow-ups."
    ],
    "readinessRows": [
      {
        "area": "Inventory",
        "ready": "Active decisions are listed with owners and dates.",
        "notReady": "A wiki page last edited a year ago."
      },
      {
        "area": "Assumptions",
        "ready": "Each decision records the conditions it depended on.",
        "notReady": "A rationale that says it seemed right."
      },
      {
        "area": "Authority",
        "ready": "The client chair is named for contract and security changes.",
        "notReady": "The offshore lead ratifies a public API change."
      },
      {
        "area": "Follow-up",
        "ready": "Every outcome has a ticket and a review date.",
        "notReady": "Meeting notes with no owners."
      }
    ],
    "sections": [
      {
        "id": "collect-the-decisions-that-still-shape-the-code",
        "title": "Collect the decisions that still shape the code",
        "paragraphs": [
          "Start the review from the architecture decision records that are still active, not from a fresh design debate. List each decision, the problem it solved, and the date it was made. Mark the decisions that have been superseded or quietly abandoned. A quarterly review is more useful when it begins with the decisions the team is actually living with.",
          "Ask the offshore lead and the client architect to nominate the decisions that cause the most questions during delivery. Those are often the ones with missing context rather than the ones with the highest risk. Put both lists together and remove duplicates before the meeting. A short, agreed list is better than a complete archive nobody reads.",
          "Record the business capability each decision supports, not only the technical mechanism. A message queue exists to keep orders moving, and that purpose should be visible beside the choice. When the business capability changes, the decision can be reviewed against the new goal. A decision record without a purpose is hard to retire."
        ]
      },
      {
        "id": "check-each-decision-against-current-reality",
        "title": "Check each decision against current reality",
        "paragraphs": [
          "For each decision, record the assumptions that were true when it was made and whether they still hold. A cache choice may have been correct at one traffic level and wrong at another. A service split may have made sense before a team change. The review should compare the decision with the current load, team, and customer commitments.",
          "Look for decisions that were never revisited because nobody owned them. An unowned decision becomes a default that new engineers copy without understanding. Assign an owner and a review date to every active decision. If the owner has left, name a replacement before the meeting ends.",
          "Bring the incident and support history for the systems touched by each decision. A choice that looked clean in design may have created a recurring on-call burden. The review should see the cost as well as the elegance. If the cost is acceptable, say so and record why; if not, name the next experiment."
        ]
      },
      {
        "id": "separate-reversible-choices-from-irreversible-ones",
        "title": "Separate reversible choices from irreversible ones",
        "paragraphs": [
          "Classify each decision by the cost of changing it. A logging format is easy to revise, while a public API contract or a data partition is expensive. Spend the review time on the expensive choices and treat the cheap ones as implementation detail. This keeps the meeting from turning into a style discussion.",
          "For irreversible decisions, require a written rationale and a trigger that would justify revisiting them. A trigger might be a traffic threshold, a regulatory change, or a new client requirement. Record the trigger beside the decision so a future team can see when the assumption expired. A decision with no trigger tends to be defended long after it stops fitting.",
          "Set a maximum review interval for decisions that cannot be reversed cheaply. Even a good decision deserves a scheduled look at the assumptions behind it. The interval should be short enough to catch drift and long enough to avoid churn. Record the next review date in the decision record itself."
        ]
      },
      {
        "id": "invite-the-people-who-feel-the-consequences",
        "title": "Invite the people who feel the consequences",
        "paragraphs": [
          "Include the engineers who operate the system, not only the architects who designed it. On-call experience reveals costs that a design document hides. Invite one support or operations representative when the decision affects incident response. The review should hear from the people who will carry the outcome.",
          "Give each participant the decision list before the meeting and ask for one written concern per decision. Written concerns are easier to compare than a free-form discussion. The meeting should resolve or assign each concern rather than let it hang. Record the resolution and the person accountable.",
          "Ask each participant to bring one question rather than a general opinion. A question focuses the discussion and exposes missing information. The chair should either answer it, assign it, or record it as open. A meeting that collects opinions without resolving questions produces a longer document and no clearer design."
        ]
      },
      {
        "id": "keep-client-authority-explicit",
        "title": "Keep client authority explicit",
        "paragraphs": [
          "The client's technical owner should chair the decisions that change a contract, a security boundary, or a public interface. The offshore team can present options and recommend one, but it should not ratify a decision that belongs to the client. Say who decides before the discussion starts. A clear chair prevents the review from producing a decision nobody can enforce.",
          "When the client and offshore team disagree, record both positions and the evidence each side used. Set a date for the decision rather than letting the disagreement drift. If the decision is deferred, name the interim behavior. An open architecture question should not be discovered again in the next incident.",
          "When the client and offshore team disagree, write the decision as a hypothesis and name the evidence that would settle it. A trial period with a defined measure is often better than an abstract debate. Set the date to review the trial and the person who will decide. This turns a conflict into a bounded experiment."
        ]
      },
      {
        "id": "publish-the-outcome-and-the-follow-ups",
        "title": "Publish the outcome and the follow-ups",
        "paragraphs": [
          "End the review with a short record per decision: keep, revise, supersede, or retire. Add the owner, the date, and the follow-up ticket. Publish the record where the repository and the client can both reach it. A review that produces only meeting notes has not changed the architecture.",
          "Check the follow-ups at the next quarterly review and report which ones closed. Retire the decisions that no longer apply instead of leaving them in the active list. Ask one engineer who did not attend to read the record and explain the current design back to the group. If they cannot, the record is incomplete.",
          "Keep the decision record in the same repository as the code so it travels with the work. A separate wiki can drift or lose access when a contract ends. Link the record from the pull request that implements it. The next engineer should find the reason beside the change."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Offshore lead",
        "text": "Prepares the active decision list and the delivery concerns."
      },
      {
        "label": "Client architect",
        "text": "Chairs decisions that change contracts or security boundaries."
      },
      {
        "label": "Operations rep",
        "text": "Reports the operational cost of each active decision."
      }
    ],
    "faqs": [
      {
        "question": "What belongs in an architecture decision review?",
        "answer": "Active decisions, their assumptions, their owners, and the evidence that the assumptions still hold."
      },
      {
        "question": "Who chairs the review?",
        "answer": "The client technical owner for contract, security, or public-interface decisions."
      },
      {
        "question": "How do we stop decisions from going stale?",
        "answer": "Give each one an owner, a trigger, and a review date, and retire it when it no longer applies."
      }
    ],
    "sources": [
      {
        "name": "Architecture decision records",
        "url": "https://adr.github.io/",
        "note": "Decision record format and lifecycle."
      },
      {
        "name": "AWS Well-Architected Framework",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
        "note": "Reviewing architecture against current requirements."
      },
      {
        "name": "NIST SP 800-160 systems security engineering",
        "url": "https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final",
        "note": "Lifecycle review and technical decision authority."
      }
    ],
    "heroImage": "/nov08/blog/run-a-quarterly-architecture-decision-review-with-an-offshore-team.webp"
  },
  "set-up-a-client-owned-milestone-tracker-for-an-offshore-delivery-team": {
    "takeaways": [
      "Define milestones by business outcome and acceptance evidence.",
      "Name one owner on each side for acceptance and record keeping.",
      "Use fixed status meanings instead of percentage-complete fields.",
      "Require linked evidence before a milestone is marked accepted.",
      "Record slippage and scope changes so the next estimate improves."
    ],
    "readinessRows": [
      {
        "area": "Definition",
        "ready": "Each milestone names the outcome and the evidence.",
        "notReady": "A list of tasks renamed as milestones."
      },
      {
        "area": "Ownership",
        "ready": "Client acceptance and offshore upkeep are named.",
        "notReady": "A shared document nobody updates."
      },
      {
        "area": "Status",
        "ready": "Each status has a written entry and exit condition.",
        "notReady": "Percentages with no rule."
      },
      {
        "area": "Handover",
        "ready": "Evidence links still work after vendor access closes.",
        "notReady": "A tracker that lives only in the vendor tenant."
      }
    ],
    "sections": [
      {
        "id": "decide-what-counts-as-a-milestone",
        "title": "Decide what counts as a milestone",
        "paragraphs": [
          "A milestone should mark a decision or a deliverable that changes what the business can do, not a percentage of effort. Examples include a signed-off interface, a migration rehearsal, or a release that support can operate. Write the acceptance evidence beside the milestone. If the team cannot name the evidence, the milestone is probably a task in disguise.",
          "Keep the number of milestones small enough to remember. A tracker with forty milestones becomes a second backlog and stops communicating progress. Group the work into a handful of outcomes and let the task board carry the detail. The client should be able to see the next two milestones without opening a filter.",
          "Write the milestone description in the client's language, not the delivery team's shorthand. A milestone called phase two integration tells the client nothing about what will be usable. Describe the outcome, the users who benefit, and the evidence that will prove it. If the description needs a glossary, rewrite it."
        ]
      },
      {
        "id": "give-the-tracker-one-owner-on-each-side",
        "title": "Give the tracker one owner on each side",
        "paragraphs": [
          "Name a client owner who accepts a milestone and an offshore owner who maintains the record. The client owner decides whether the evidence meets the definition; the offshore owner keeps dates, links, and status current. Two owners prevent the tracker from becoming either a client wish list or a vendor report, and each can challenge a status the other has not verified. Write both names in the tracker before the first milestone is accepted.",
          "State how often the offshore owner updates the tracker and what triggers an immediate update. A milestone that slips should be updated the same day, not at the next weekly meeting. Record the update time beside the status. A tracker that is updated only when someone asks is not a control.",
          "Give the offshore owner a deputy who can update the tracker during leave. A tracker with one updater stops during a holiday and loses credibility. The deputy should know the status vocabulary and the evidence standard. Record the deputy in the tracker so the client knows who to ask."
        ]
      },
      {
        "id": "use-a-status-vocabulary-with-fixed-meanings",
        "title": "Use a status vocabulary with fixed meanings",
        "paragraphs": [
          "Define a small set of statuses, such as not started, in progress, evidence ready, accepted, and blocked. Write the entry and exit condition for each status. Evidence ready means the deliverable exists and the link works; accepted means the client owner has reviewed it. Without fixed meanings, two people can read the same row and reach different conclusions.",
          "Do not use a percentage complete field unless the team can defend it with a rule. Percentages invite false precision and hide a milestone that has not started. Prefer a status plus the next action and the date it is due. The client can then see risk without interpreting a number.",
          "Show the last update time and the next review date on every row. A status without a timestamp cannot be trusted during a busy week. The review date tells the client when to expect a change even if nothing has moved. Both fields are cheap to maintain and expensive to reconstruct."
        ]
      },
      {
        "id": "attach-evidence-to-every-accepted-milestone",
        "title": "Attach evidence to every accepted milestone",
        "paragraphs": [
          "Require a link to the artifact, the test result, the decision record, or the release note before a milestone can be accepted. The evidence should be readable by someone who was not in the delivery meeting. Store it with the milestone rather than in a chat thread. An accepted milestone with no evidence is a promise, not a record.",
          "When the evidence is a demo, record what was shown and who attended. A recording is useful, but a short written summary with the acceptance decision is faster to audit. Note any condition attached to acceptance, such as a follow-up fix. The condition should have its own owner and date.",
          "When evidence is rejected, record the specific gap rather than a general request to improve it. A rejection that says not enough detail forces another round without a target. Name the missing artifact, the environment, or the acceptance check. The offshore owner can then fix the evidence once instead of guessing."
        ]
      },
      {
        "id": "make-slippage-visible-without-blame",
        "title": "Make slippage visible without blame",
        "paragraphs": [
          "A tracker is useful only if a slip is visible early. Ask the offshore owner to record the reason, the new date, and the effect on the next milestone. The client owner should confirm whether the new date is acceptable. A tracker that hides slippage until the deadline destroys trust faster than the slip itself.",
          "Separate a scope change from a delay. If the client adds a requirement, record the change and its effect on the date rather than calling the original date late. If the offshore team underestimated, record that too. The history of changes is what makes the next estimate better.",
          "Keep a short risk list beside the milestones, with the trigger that would turn each risk into a delay. A risk without a trigger is a worry, not a control. Review the triggers monthly and close the ones that no longer apply. The client should see the top two risks without opening a separate register."
        ]
      },
      {
        "id": "review-the-tracker-monthly-and-close-it-cleanly",
        "title": "Review the tracker monthly and close it cleanly",
        "paragraphs": [
          "Hold a short monthly review of accepted milestones, open risks, and the next two dates. Use the tracker as the agenda rather than a separate status deck. Ask the client owner whether the evidence was sufficient and the offshore owner whether the dates are still credible. Record one improvement to the tracker itself.",
          "At the end of the engagement, export the tracker and the evidence links into the client's own system. Confirm that the client can open each link after the offshore accounts are closed. A tracker that dies with the vendor contract is not client-owned. Close the record with the final acceptance and the handover date.",
          "Ask the client to confirm in writing that the exported record is readable in their own tools. A CSV that loses links or a folder that requires vendor access is not a handover. Test one export before the final month so there is time to fix it. The handover date should appear in the tracker, not only in the contract."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Client owner",
        "text": "Accepts milestones against the written evidence."
      },
      {
        "label": "Offshore owner",
        "text": "Keeps status, dates, links, and slippage current."
      },
      {
        "label": "Delivery lead",
        "text": "Reviews the next two milestones and the open risks monthly."
      }
    ],
    "faqs": [
      {
        "question": "How many milestones should a tracker hold?",
        "answer": "Only as many as the client can remember; group work into a few outcomes and keep tasks on the board."
      },
      {
        "question": "What proves a milestone is done?",
        "answer": "A linked artifact, test result, decision record, or release note accepted by the client owner."
      },
      {
        "question": "How should a slip be recorded?",
        "answer": "With the reason, the new date, the effect on the next milestone, and the client's acceptance of the change."
      }
    ],
    "sources": [
      {
        "name": "Project Management Institute, scope and schedule",
        "url": "https://www.pmi.org/learning/library",
        "note": "Milestone definition and acceptance concepts."
      },
      {
        "name": "U.S. GAO, internal control standards",
        "url": "https://www.gao.gov/greenbook",
        "note": "Evidence, ownership, and monitoring controls."
      },
      {
        "name": "Atlassian, project tracking guidance",
        "url": "https://www.atlassian.com/agile/project-management",
        "note": "Status models and delivery visibility."
      }
    ],
    "heroImage": "/nov08/blog/set-up-a-client-owned-milestone-tracker-for-an-offshore-delivery-team.webp"
  }
};
