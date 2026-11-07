import type { ResearchPost } from './fleet-content';

export const november7ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-long-does-access-provisioning-take-for-a-new-offshore-developer",
    "title": "How long does access provisioning take for a new offshore developer?",
    "excerpt": "A measurement protocol that separates approval time, account creation, first login, and first successful use of each tool.",
    "topic": "Access provisioning time",
    "published": "2026-11-07",
    "hero": "/nov07/research/how-long-does-access-provisioning-take-for-a-new-offshore-developer.webp",
    "body": [
      "This protocol asks how long access provisioning takes for a new offshore developer and where the wait accumulates. The unit is one access request for one engineer and one tool, identified by the request record and the tool name. The study measures approval time, account creation time, first login, and the first successful use of the tool. It does not evaluate the engineer's skill or the quality of the access decision.",
      "Set the scope to one client organization, one engineering lane, and one access catalog. Record the tools, the approvers, the identity provider, and the provisioning method at the start. If the access policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new approval step can look like a slower team when it is only a different rule.",
      "Define the population as every access request for engineers who started in the lane during the window. The unit is the request, not the engineer, because one person can need many tools. A request that was cancelled remains in the sample with a cancellation reason. A request that was reopened after a denial is a new unit with a link to the original.",
      "Record the tool category, the risk tier, the approver group, and the request channel. These strata matter because a production database and a documentation site carry different review expectations. Include requests made through chat, because those are often the slowest and the least visible. Test the unit definition on two recent onboarding records before collection begins. Use one category list for every request.",
      "Define the request time as the moment the engineer or the manager submits a complete request, not the moment someone mentions a need. Define approval as the state that satisfies every required approver. Define account creation as the time the identity provider or tool shows the account. Define first successful use as the first recorded action that proves the engineer can perform the intended task.",
      "Do not count an email that asks whether access is needed as a complete request. Do not count an account that exists but has no role as provisioned. A login that reaches an error page is not first successful use. Each definition should include one positive example and one boundary example so a second reviewer classifies the same record the same way. Write those examples in the protocol.",
      "For each request, capture the engineer, tool, category, risk tier, requester, approver, request time, approval time, creation time, and first successful use. Add the number of reminders and the number of times the request was returned for missing information. Record whether the engineer was billed before access worked. Keep the timeline with the onboarding record so another reviewer can rebuild it.",
      "Also capture the onboarding start date and the first ticket that depended on the tool. These fields show whether the access delay actually blocked work or only sat open while the engineer did something else. If a ticket was reassigned because access was missing, record the reassignment and the time. A second reviewer should be able to see the work impact from the timeline.",
      "Draw the sample from the access system and the onboarding roster rather than from a list of known delays. Record the export date, the filters, the row count, and the selection rule. Include requests from every tool category and every approver group so the result is not dominated by one easy path. If the roster is ordered by start date, include every engineer in the window. Do not sample only engineers who stayed past ninety days.",
      "Collect timestamps from the systems as they existed on the observation date. If an approval happened in a meeting and was recorded later, use the recorded time and note the gap. Do not reconstruct a missing timestamp from memory. Note the collection date separately from the request date so the reader can see how much of the record has aged. Keep the raw export with the analysis file.",
      "A useful additional measure is the share of requests that were complete on the first submission. A complete request names the tool, the role, the business purpose, and the manager. Record the missing fields and the time spent collecting them. That view separates an approver bottleneck from a requester-preparation problem. Show the missing fields beside the total wait.",
      "Report the number of requests, the median approval time, the median creation time, and the median time to first successful use. Show the counts by tool category, risk tier, and approver group. Present the share of requests that waited more than one business day at any stage. Use the same denominator for every rate and show the number of requests with incomplete records. Show the raw times beside each median.",
      "Inspect the slowest requests and describe which stage dominated without naming the engineer. A wait before approval may point to a missing manager or an unclear policy. A wait after approval may point to an identity provider or a tool owner who must create the role. Compare the result with the risk tier and the request channel. Report cancelled requests separately so their partial timelines do not distort the stages.",
      "A useful additional view is the time from first login to first successful use. An account that can log in but cannot reach the required data is not provisioned for the work. Show the gap and the role or permission that was missing. That view helps the owner fix the access template rather than adding more approvers. Name the permission in the request record.",
      "The review should separate a policy delay from an operational delay. A request that waits for a weekly access committee is a policy choice, while one that waits for a tool owner who forgot is an operational failure. Record the reason for each wait and the person who held the request. That split prevents the team from rewriting the policy when the real gap is a reminder or a backup owner. Keep the wait reason in the record.",
      "The record cannot show whether the approver made a good decision or whether the engineer needed the access immediately. It can show only the request, approval, creation, and use times. A fast approval is not proof of good security, and a slow approval is not proof of neglect. The protocol also cannot capture access granted informally through a shared account, which is a separate control problem.",
      "Access systems can omit requests made in chat, and identity providers can merge accounts in ways that hide a delay. A tool may have been usable before the account record was updated. Record those gaps and their treatment instead of dropping them silently. If the requester and approver are the same person, note the independence limitation and analyze that group separately. Keep the original request version with the sample.",
      "A useful check is whether a new engineer can follow the access guide and predict which requests to make on day one. Ask the last two hires which request they missed and when they discovered it. That answer tests the guide, not the person. Update the onboarding pack with the missing request and the owner. A guide that assumes a manager knows every tool is incomplete.",
      "Give the result to the access owner and the engineering lead and ask them to choose one observable change. The change might be a pre-approved role bundle, a named backup approver, a complete-request template, or a weekly provisioning review. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the approval policy and the tooling at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If approval time fell but first successful use did not, the bottleneck may have moved to role assignment. If creation time fell but the engineer still could not work, the role template may be wrong. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "The final view is the engineer's first-week calendar. Show how many hours were spent waiting, training, or doing work that did not need the missing tool. That context helps the owner see the cost of a slow request beyond the ticket age. Record the calendar view with the timeline. The measure is not how fast a ticket closed, but how soon the engineer could do the job."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub Docs, getting started with a repository",
        "https://docs.github.com/en/get-started"
      ],
      [
        "Google Technical Writing courses",
        "https://developers.google.com/tech-writing"
      ],
      [
        "U.S. Bureau of Labor Statistics, employer-provided training",
        "https://www.bls.gov/opub/btn/"
      ]
    ],
    "related": [
      "what-share-of-offshore-pull-requests-need-a-second-review-round",
      "how-often-does-an-offshore-release-wait-on-client-approval"
    ]
  },
  {
    "slug": "what-share-of-offshore-pull-requests-need-a-second-review-round",
    "title": "What share of offshore pull requests need a second review round?",
    "excerpt": "A measurement protocol for review rework that separates a missing test, an unclear requirement, and a reviewer preference.",
    "topic": "Pull request review rework",
    "published": "2026-11-07",
    "hero": "/nov07/research/what-share-of-offshore-pull-requests-need-a-second-review-round.webp",
    "body": [
      "This protocol asks what share of offshore pull requests need a second review round and why. The unit is one pull request that received a substantive review decision during the window. The study measures whether the change returned for another round, the reason for the return, the time added, and whether the second round found a defect or only a preference. It does not evaluate the engineer's overall performance.",
      "Set the scope to one repository, one review policy, and one engineering lane. Record the branch protection rules, the required reviewers, and the definition of a substantive review at the start. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required check can look like more rework when it is only a different gate.",
      "Define the population as every pull request that reached a review decision during the window, including changes that were closed without merge. The unit is the pull request, not the commit, because a force-push can create many commits inside one review. A pull request that is reopened after being closed is a new unit with a link to the original. A stacked series counts as separate units.",
      "Record the change type, risk tier, size band, author, reviewer, and whether the change touched a test. These strata matter because a dependency bump and an authentication change carry different review needs. Include changes from every author and reviewer so the result is not dominated by one pairing. Test the unit definition on two ordinary pull requests before collection begins. Use one size band scheme for the whole sample.",
      "Define a review round as a reviewer decision that requests changes or approves with comments that require a new push. Define a second round as the next substantive review after that push. A comment that only asks a question and does not block merge is not a round. A rebase or a merge from main is not a round unless it changes the reviewed behavior. Each definition needs a positive and a boundary example.",
      "Do not count an automated check failure as a review round unless a human reviewer also requested changes. Do not count a title edit or a label change as a new round. A reviewer who approves and then comments on a later line has still completed one round. Record the rule in the protocol so two reviewers classify the same history consistently. The unit is the human review decision, not every event in the timeline.",
      "For each pull request, capture the author, reviewer, size, files changed, risk tier, first review time, decision, second review time, and final merge time. Add the reason for the second round, the number of comments, and whether a test changed between rounds. Record whether the change was eventually closed without merge. Keep the review history with the sample so a second reviewer can repeat the count.",
      "Also capture whether the first review named the exact change required. A comment that says this needs work without naming the gap often produces another round that a clearer request would have avoided. Record the category of the first blocking comment. A second reviewer should be able to classify the cause from the comment text and the diff.",
      "Draw the sample from the repository rather than from a list of known rework. Record the export date, the filters, the row count, and the selection rule. Include pull requests from every author and reviewer so the result is not dominated by one difficult area. If the history is ordered by creation date, include every pull request in the window. Exclude drafts that never reached review and state that exclusion.",
      "Collect the pull request as it existed at the final decision, not as it looks after later edits. If a review comment was deleted, record the deletion and treat the round as incomplete. Do not infer a second round from a long comment thread without a decision. Note the collection date separately from the review date so the reader can see how much of the record has aged. Keep the raw export with the analysis.",
      "A useful additional measure is the time from the first review request to the first substantive comment. A quick first response can still lead to rework if the reviewer only looked at the title. Show the response time beside the rework rate. That view separates a slow queue from a review that starts late and then asks for a rewrite. Report both measures together.",
      "Report the number of pull requests, the share with a second round, and the median time added by the second round. Show the counts by risk tier, size band, author, and reviewer. Present the share of second rounds caused by a missing test, an unclear requirement, a defect, and a preference. Use the same denominator for every rate and show the number of requests with incomplete history. Show the raw counts beside each rate.",
      "Inspect the second rounds and describe the pattern without naming the engineer. A cluster in one area may point to an unstable test environment, while a cluster in one reviewer may point to an unwritten preference. Compare the result with the risk tier and the presence of a test change. Report closed-without-merge pull requests separately because they carry a different cost.",
      "A useful additional view is whether the second round changed the behavior or only the style. A style-only round suggests the first review did not state the standard early. A behavior-changing round may be a healthy catch. Record the category and the line of code that changed. That view helps the owner decide whether to invest in a review checklist or in earlier design review.",
      "The review should separate rework from iteration. A second round that catches a real defect is a success, while one that repeats an earlier comment is a process failure. Record the reason and the reviewer who requested it. That split prevents the team from optimizing for a low round count while missing defects. Keep the defect category in the record.",
      "The record cannot show whether the reviewer had enough context or whether the author understood the requirement. It can show only the comments, pushes, and decisions. A second round is not proof of poor work, and a single round is not proof of quality. The protocol also cannot capture a review that happened in a call and left no written trace.",
      "Repository history can omit comments from deleted accounts, force-pushes that erase a round, and reviews conducted in another tool. A pull request that was rebased may look shorter than it was. Record those gaps and their treatment instead of dropping them silently. If the author and reviewer are the same person, note the independence limitation and analyze that group separately. Keep the original review version with the sample.",
      "A useful check is whether the review packet named the acceptance evidence before the first review. Ask the reviewer what they had to infer. That answer tests the packet, not the person. Add the missing evidence field to the template. A packet that lets the reviewer start without a call is the goal.",
      "Give the result to the engineering lead and the review group and ask them to choose one observable change. The change might be a required test note, a smaller size band, a named reviewer backup, or a clearer comment template. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the size rule and the review template at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If second rounds fell but escaped defects rose, the first review may have become too shallow. If review time rose but rework fell, the team may be trading speed for a better first pass. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the author's time to a merged change, not only the reviewer's queue. A pull request that waits two days and then needs one round may be slower than one that gets a fast first review and two rounds. Record both the wait and the rounds. That view keeps the team focused on delivery rather than on a single metric."
    ],
    "sources": [
      [
        "GitHub Docs, about pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "Google Technical Writing courses",
        "https://developers.google.com/tech-writing"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "how-long-does-access-provisioning-take-for-a-new-offshore-developer",
      "what-share-of-outsourced-qa-defects-are-reopened-after-a-fix"
    ]
  },
  {
    "slug": "how-much-of-an-offshore-sprint-goes-to-unplanned-production-support",
    "title": "How much of an offshore sprint goes to unplanned production support?",
    "excerpt": "A measurement protocol for interrupt load that separates true incidents, customer requests, and work that should have been planned.",
    "topic": "Unplanned support load",
    "published": "2026-11-07",
    "hero": "/nov07/research/how-much-of-an-offshore-sprint-goes-to-unplanned-production-support.webp",
    "body": [
      "This protocol asks how much of an offshore sprint goes to unplanned production support and what kind of work creates the load. The unit is one engineer-day in a sprint, allocated to planned delivery, unplanned support, or waiting. The study measures the share of time spent on interrupts, the source of each interrupt, and whether the work could have been planned. It does not evaluate the engineer's productivity.",
      "Set the scope to one team, one sprint cadence, and one support policy. Record the on-call rotation, the ticket sources, and the definition of an incident at the start. If the support policy changes during the window, keep the earlier definition for the full sprint or analyze the change as a separate period. A new escalation rule can look like more incidents when it is only a different intake path.",
      "Define the population as every engineer-day in the sprint for engineers assigned to the lane. The unit is the engineer-day, not the ticket, because one incident can consume several people for part of a day. A day split between planned and unplanned work is recorded as a share, not forced into one category. A holiday or a leave day is excluded and stated. Keep the allocation rule for every day.",
      "Record the sprint, engineer, role, on-call status, and planned allocation. These strata matter because an on-call engineer is expected to absorb interrupts while a feature engineer is not. Include the days when the team had no on-call owner, because that absence is part of the finding. Test the allocation rule on two recent sprints before collection begins. Use one category list for the whole sample.",
      "Define planned delivery as work that was in the sprint commitment at the start. Define unplanned support as work that arrived after the commitment and required action during the sprint. Define true incident as a production failure that affected customers or a critical internal service. Define avoidable support as a request that could have been planned, such as a configuration change or a data fix. Each definition needs an example and a boundary case.",
      "Do not count a code review or a normal pull request comment as unplanned support. Do not count a scheduled deployment as an incident even when it happens outside core hours. A customer question that support answers without engineering is not an engineer interrupt. Record those exclusions so the rate is not inflated by ordinary collaboration. The unit is engineering time, not message volume.",
      "For each engineer-day, capture the planned items, the interrupts, the time spent, and the source of each interrupt. Add the ticket id, the requester, the severity, and whether the work was repeatable. Record whether the interrupt was resolved on the same day or carried into the next. Keep the daily log with the sprint record so a second reviewer can rebuild the allocation. Use one log format for every engineer.",
      "Also capture the number of interrupts handled outside the engineer's working hours. These events matter because they consume recovery time even when the hours are not counted in the sprint. If the team uses a follow-the-sun rotation, record the handoff time and the next owner. A second reviewer should be able to see the load that the sprint report hides.",
      "Draw the sample from the sprint board and the support queue rather than from a list of known incidents. Record the export date, the filters, the row count, and the selection rule. Include every sprint in the window and every engineer in the lane. If the team changed membership during the window, record the change and analyze it as a separate period. Do not drop a sprint because it looks unusual without stating why.",
      "Collect the work log as it existed at the end of each sprint, not as it was reconstructed later. If an engineer updated the log a week after the sprint, note the delay. Do not infer unplanned work from a missed commitment alone, because the cause may be an estimate error. Note the collection date separately from the sprint date so the reader can see the age of the record. Keep the raw export with the analysis.",
      "A useful additional measure is the share of interrupts that repeated the same root cause. A recurring data fix or a recurring certificate renewal is a planning gap, not an incident. Record the root cause and whether a permanent fix exists. That view helps the owner decide whether to fund a fix or accept the load. Show the repeat count beside the interrupt hours.",
      "Report the number of engineer-days, the share of time on unplanned support, and the share on true incidents. Show the counts by sprint, role, and on-call status. Present the median interrupts per engineer-week and the share of interrupts that recurred. Use the same denominator for every rate and show the number of days with incomplete logs. Show the raw hours beside each share.",
      "Inspect the heaviest days and describe the source without naming the engineer. A cluster after a release may point to a weak smoke test, while a cluster on one customer may point to a configuration problem. Compare the result with the on-call rotation and the sprint commitment. Report planned absence separately so it does not look like lost capacity.",
      "A useful additional view is the time to acknowledge and the time to resolve an interrupt. A team that acknowledges fast but resolves slowly may have a triage problem rather than a capacity problem. Show the two times beside the volume. That view helps the owner decide whether to add people, improve the runbook, or change the intake rule. Keep the definitions stable across sprints.",
      "The review should separate support that protects customers from support that compensates for a missing product feature. A manual data fix may be necessary, but if it happens every week the product needs a change. Record the reason and the owner. That split keeps the team from normalizing a permanent workaround as part of the sprint. Name the product owner for each recurring item.",
      "The record cannot show whether the engineer could have prevented the interrupt or whether the customer was satisfied. It can show only the logged time, source, and resolution. A high interrupt share is not proof of poor planning, and a low share is not proof that support is healthy. The protocol also cannot capture work that the engineer did without logging it.",
      "Support queues can omit requests made in chat, and sprint boards can hide work added after the planning meeting. An engineer may resolve an incident without opening a ticket. Record those gaps and their treatment instead of dropping them silently. If the same person is on call every sprint, note the rotation limitation and analyze that period separately. Keep the original queue export with the sample.",
      "A useful check is whether the team can name the top three interrupt sources and the owner of each permanent fix. If the list is vague, the team is treating the load as weather rather than as work. Ask for the fix date and the evidence. That answer turns the review into a plan. A source without an owner will keep returning.",
      "Give the result to the engineering lead and the product owner and ask them to choose one observable change. The change might be a planned support budget, a permanent fix for the top recurring cause, a better on-call rotation, or a stricter intake rule. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the sprint length and the support policy at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If incident time fell but planned delivery did not rise, the team may be filling the gap with other work. If planned delivery rose but customer satisfaction fell, the support budget may be too small. Close the review when the owner accepts the finding and the next sprint is scheduled.",
      "The final view is the customer's experience during the sprint. A fast internal resolution is not enough if the customer waited for a workaround. Record the customer-facing time and the number of updates. That context helps the owner see the cost of unplanned work beyond the engineer's hours. Keep the customer timeline with the sprint record."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ],
      [
        "U.S. Bureau of Labor Statistics, productivity and costs",
        "https://www.bls.gov/lpc/"
      ]
    ],
    "related": [
      "how-often-does-an-outsourced-release-roll-back-after-deployment",
      "what-share-of-offshore-pull-requests-need-a-second-review-round"
    ]
  },
  {
    "slug": "how-often-do-outsourced-releases-roll-back-after-deployment",
    "title": "How often do outsourced releases roll back after deployment?",
    "excerpt": "A measurement protocol for rollback rate that separates a failed code change, a data problem, and a deployment platform fault.",
    "topic": "Release rollback rate",
    "published": "2026-11-07",
    "hero": "/nov07/research/how-often-do-outsourced-releases-roll-back-after-deployment.webp",
    "body": [
      "This protocol asks how often outsourced releases roll back after deployment and what causes the rollback. The unit is one production deployment of a release artifact, identified by the deploy record and the artifact digest. The study measures the rollback rate, the time from deploy to rollback, the cause, and whether the team recovered service. It does not evaluate the quality of the release plan.",
      "Set the scope to one service, one deployment platform, and one release process. Record the rollback policy, the approval rules, and the definition of a production deployment at the start. If the platform changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new canary step can look like a lower rollback rate when it is only a different gate.",
      "Define the population as every production deployment that completed in the window, including deployments that were later rolled back. The unit is the deployment, not the release, because one release can deploy several times. A redeploy of the same artifact after a platform failure is a new unit. A rollback that is itself rolled forward is a new deployment with a link to the original.",
      "Record the service, release type, change size, deploy window, and deployer. These strata matter because a database migration and a copy change carry different recovery risks. Include deployments from every environment that serves production traffic. Test the unit definition on two ordinary releases before collection begins. Use one release type list for the whole sample.",
      "Define a rollback as a deployment that restores a previous artifact or reverses a production change to recover service. Define a failed deployment as one that never served production traffic and was stopped during rollout. Define a hotfix as a new artifact deployed to correct a production defect. Define a platform fault as a failure in the deploy system rather than the application. Each definition needs an example and a boundary case.",
      "Do not count a feature flag being turned off as a rollback unless it restores the prior production behavior and is recorded as recovery. Do not count a planned blue-green switch as a rollback. A deploy that is stopped before traffic reaches it is a failed deployment, not a rollback. Record those distinctions so the rate reflects actual recovery work.",
      "For each deployment, capture the release id, artifact digest, service, deployer, deploy time, traffic time, and rollback time. Add the cause category, the time to detect, the time to recover, and the person who approved the rollback. Record whether a post-incident review exists. Keep the deploy record with the sample so a second reviewer can repeat the classification.",
      "Also capture the test evidence attached before deploy and whether the failure was covered by a test. These fields help explain a rollback that happened because the test checked a nearby behavior. If a test existed but did not run, record the pipeline gap. A second reviewer should be able to tell whether the release evidence supported the deploy.",
      "Draw the sample from the deployment system rather than from a list of known bad releases. Record the export date, the filters, the row count, and the selection rule. Include deployments from every service and deployer so the result is not dominated by one large release. If the history is ordered by deploy time, include every deployment in the window. State any excluded service and why.",
      "Collect the deployment as it existed at the deploy decision, not as it looks after later edits. If the rollback reason was written days later, record the delay. Do not infer a rollback from a later redeploy without a recovery record. Note the collection date separately from the deploy date so the reader can see how much of the record has aged. Keep the raw export with the analysis.",
      "A useful additional measure is the share of rollbacks that happened within the first hour. A fast rollback may indicate good detection, while a late rollback may indicate a weak monitoring signal. Show the detection time beside the rollback time. That view helps the owner decide whether to invest in canaries, smoke tests, or alerting. Report the two times separately.",
      "Report the number of deployments, the rollback rate, and the median time to recovery. Show the counts by service, release type, change size, and deployer. Present the share of rollbacks caused by a code defect, a data problem, a configuration error, and a platform fault. Use the same denominator for every rate and show the number of deployments with incomplete records. Show the raw counts beside each rate.",
      "Inspect the rollbacks and describe the pattern without naming the deployer. A cluster after a particular release type may point to a missing migration check, while a cluster on one platform may point to an infrastructure issue. Compare the result with the test evidence and the deploy window. Report failed deployments separately so they do not inflate the rollback count.",
      "A useful additional view is the share of rollbacks that had a written recovery note before deploy. A team that improvises recovery under pressure is more likely to extend the outage. Show the note status beside the recovery time. That view helps the owner decide whether the gap is planning or execution. Name the approver in the deploy record.",
      "The review should separate a code defect from a release-control failure. A change that was never tested is a control gap, while a tested change that fails in production is a product risk. Record the evidence and the decision. That split prevents the team from adding more tests when the real problem is a skipped check. Keep the test status in the record.",
      "The record cannot show whether the rollback was the best choice or whether a forward fix would have been faster. It can show only the timestamps, cause, and evidence. A rollback is not proof of a bad release, and a smooth deploy is not proof of quality. The protocol also cannot capture a rollback that happened outside the deployment system.",
      "Deployment systems can omit manually triggered changes, and rollback records can be merged with incident tickets. A deploy that was reverted by a platform automation may never appear as a human action. Record those gaps and their treatment instead of dropping them silently. If the deployer and the rollback approver are the same person, note the independence limitation. Keep the original deploy version with the sample.",
      "A useful check is whether the team can restore the previous artifact from a clean environment without the original deployer. Ask for the command and the time it takes. That test measures the recovery path, not the person. Update the runbook with the result. A rollback plan that depends on one engineer is a single point of failure.",
      "Give the result to the release owner and the engineering lead and ask them to choose one observable change. The change might be a canary stage, a migration check, a tested rollback command, or a stricter deploy window. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the test suite and the deploy process at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If rollbacks fell but recovery time rose, the team may be avoiding rollback when it should recover. If recovery time fell but failed deployments rose, the deploy gate may have become too loose. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the customer impact, not only the internal rollback. Record how long customers saw the failure and how many were affected. That context helps the owner prioritize the fix that prevents the next outage. Keep the customer timeline with the deploy record. A rollback rate without impact is only half the story."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ],
      [
        "GitHub Docs, about releases",
        "https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases"
      ]
    ],
    "related": [
      "how-much-of-an-offshore-sprint-goes-to-unplanned-production-support",
      "what-share-of-offshore-handoff-notes-are-usable-without-a-meeting"
    ]
  },
  {
    "slug": "what-share-of-offshore-handoff-notes-are-usable-without-a-meeting",
    "title": "What share of offshore handoff notes are usable without a meeting?",
    "excerpt": "A measurement protocol for handoff quality that tests whether the next engineer can act from the written note alone.",
    "topic": "Handoff note usability",
    "published": "2026-11-07",
    "hero": "/nov07/research/what-share-of-offshore-handoff-notes-are-usable-without-a-meeting.webp",
    "body": [
      "This protocol asks what share of offshore handoff notes are usable without a meeting. The unit is one handoff note written at the end of a shift or a work block for one work lane. The study measures whether the next engineer could identify the next action, the evidence, the owner, and the blocker from the note alone. It does not evaluate the writer's communication style.",
      "Set the scope to one team, one handoff cadence, and one work lane. Record the note template, the shift schedule, and the definition of a usable note at the start. If the template changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new template can look like better writing when it is only a different form.",
      "Define the population as every handoff note written for the lane during the window, including notes written before a holiday or a long break. The unit is the note, not the shift, because one shift can hand off several lanes. A note that is edited after the handoff is analyzed in its original version. A note that covers several unrelated tickets is still one unit.",
      "Record the writer, the receiver, the work lane, the note length, and the number of linked tickets. These strata matter because a short note about one blocked ticket is different from a long note about a release. Include notes written by engineers who usually work alone, because their handoffs may be the least practiced. Test the unit definition on two recent notes before collection begins. Use one template version per note.",
      "Define a usable note as one where the receiver can state the next action, the evidence to check, the owner, and the blocker without asking the writer. Define a partial note as one where the receiver can act only after one clarifying question. Define an unusable note as one where the receiver needs a meeting or cannot find the work. Each definition needs a positive and a boundary example.",
      "Do not count a link to a ticket as a next action unless the note says what to do in the ticket. Do not count a status phrase such as in progress as evidence. A note that lists completed work but no next step is unusable for the next shift even if it is accurate. Record those distinctions so the rate reflects actionability, not length.",
      "For each note, capture the writer, receiver, lane, creation time, original text, linked tickets, and the receiver's rating. Add the time from handoff to the receiver's first action and the number of clarifying questions. Record whether the receiver had worked the lane before. Keep the note and the follow-up with the sample so a second reviewer can repeat the judgment.",
      "Also capture whether the note named the environment, the build, and the current blocker. These fields help explain a note that looks complete but cannot be acted on. If the receiver had to open three systems to find the state, record that effort. A second reviewer should be able to see why the note was rated usable or not.",
      "Draw the sample from the handoff channel rather than from a list of notes the team remembers as good. Record the export date, the filters, the row count, and the selection rule. Include notes from every writer and every receiver so the result is not dominated by one careful pair. If the channel is ordered by time, include every note in the window. State any excluded lane and why.",
      "Collect the note as it was sent, not as it looks after later edits. If the receiver replied with a question, record the question and the time. Do not infer usability from a smooth shift where no question happened to be asked. Note the collection date separately from the handoff date so the reader can see how much of the record has aged. Keep the raw export with the analysis.",
      "A useful additional measure is the time from handoff to the receiver's first substantive action. A note that is complete but buried in a long thread still delays action. Show the note location beside the first-action time. That view helps the owner decide whether the problem is content, placement, or notification. Report both measures together.",
      "Report the number of notes, the share rated usable, the share partial, and the share unusable. Show the counts by writer, receiver, lane, and template version. Present the median clarifying questions and the median time to first action. Use the same denominator for every rate and show the number of notes with incomplete follow-up. Show the raw counts beside each rate.",
      "Inspect the unusable notes and describe the pattern without naming the writer. A cluster from one lane may point to a missing status system, while a cluster from one shift may point to a rushed handoff time. Compare the result with the note length and the number of linked tickets. Report notes written during an active incident separately because they face different constraints.",
      "A useful additional view is the share of notes that would still be usable a week later. A note tied to a live chat thread may be clear only in the moment. Ask a third engineer to read the note after seven days and state the next action. That test measures durability, not just the immediate handoff. Record the result with the note.",
      "The review should separate a content gap from a timing gap. A note written five minutes before the shift ends may be thin because the writer had no time, not because they cannot write. Record the time the note was created relative to the handoff. That split prevents the team from rewriting the template when the real fix is to protect the handoff window. Keep the creation time in the record.",
      "The record cannot show whether the receiver understood the note or whether the writer had the full context. It can show only the text, the questions, and the first action. A short note can be complete, and a long note can be unusable. The protocol also cannot capture a handoff that happened verbally and was never written.",
      "Handoff channels can omit direct messages, and edited notes can lose the original wording. A receiver may have asked a question in a call that left no trace. Record those gaps and their treatment instead of dropping them silently. If the writer and receiver are the same person, note the limitation and exclude that note from the main rate. Keep the original message with the sample.",
      "A useful check is whether a new engineer can take the next shift using only the note and the linked evidence. Ask them to read it aloud and name the first command. That test measures the note and the onboarding pack together. Update the template with the missing field. A note that only works for someone who already knows the lane is not a handoff.",
      "Give the result to the engineering lead and the shift leads and ask them to choose one observable change. The change might be a required next-action field, a protected handoff window, a single status page, or a read-back from the receiver. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the shift schedule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If usability rose but first-action time did not, the note may be clear but hard to find. If first-action time fell but revision time rose, the receiver may be fixing the note instead of acting. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the receiver's confidence at the start of the shift. Ask for a one-to-five rating and the reason. A confident receiver still checks the evidence, but does not need a meeting to begin. Record the rating with the note. That view keeps the measure connected to the person who has to act on the handoff."
    ],
    "sources": [
      [
        "Google Technical Writing courses",
        "https://developers.google.com/tech-writing"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "U.S. Bureau of Labor Statistics, employer-provided training",
        "https://www.bls.gov/opub/btn/"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "where-does-onboarding-time-go-for-a-new-outsourced-engineer",
      "how-long-does-access-provisioning-take-for-a-new-offshore-developer"
    ]
  }
];
