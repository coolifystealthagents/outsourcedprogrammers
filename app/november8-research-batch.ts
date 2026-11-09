import type { ResearchPost } from './fleet-content';

export const november8ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-long-does-a-new-offshore-engineer-take-to-make-a-first-production-change",
    "title": "How long does a new offshore engineer take to make a first production change?",
    "excerpt": "A protocol for measuring the time from contract start to a first merged, deployed, and monitored production change.",
    "topic": "Time to first production change",
    "published": "2026-11-08",
    "hero": "/nov08/research/how-long-does-a-new-offshore-engineer-take-to-make-a-first-production-change.webp",
    "body": [
      "This protocol asks how long a new offshore engineer takes to make a first production change after starting on a client codebase. The unit is one engineer on one client engagement, followed from the contract start date to the first change that is merged, deployed, and monitored. The study measures elapsed calendar time and the stages inside it. It does not judge the engineer's ability or the quality of the onboarding program.",
      "A first production change is a useful milestone because it combines access, context, review, and release in one event. An engineer can have every account and still be unable to ship because the test environment is broken or the reviewer is unknown. The measure should therefore record the whole path rather than a single gate. That is why the protocol keeps the stages separate and reports them together.",
      "Set the scope to one client, one engineering lane, and one deployment model. Record the repository, the review policy, the access process, and the release cadence at the start. If the client changes the review or access process during the window, keep the original definition for engineers already in progress and analyze the later cohort separately. A policy change can look like faster onboarding when it is only a different gate.",
      "Measure the onboarding work that happens before day one as its own interval. A client that prepares the repository guide, the starter ticket, and the access request before the contract starts is doing work that the engineer should not have to repeat. Record the date each preparation item was completed. The comparison between prepared and unprepared cohorts is often more useful than the overall median.",
      "Define the population as every engineer who starts on the lane during the window and is expected to contribute production code. Include engineers who leave before their first change, because their absence is part of the result. Exclude engineers hired only for incident support or pure analysis, and state that exclusion. Test the unit definition on two recent onboarding records before collection begins.",
      "A first change can be deliberately small, such as a documentation fix or a test-only commit. Record the change type and whether it touched production behavior. A small first change may be the right onboarding choice even though it does not prove the engineer can handle a complex feature. The protocol should not reward a risky first change over a safe one.",
      "Record the start date, the contract date, the first repository access, the first development environment, the first assigned ticket, the first pull request, the first approval, the first deployment, and the end of the first monitoring window. Add the engineer's time zone and the client's review hours, because a short task can still wait a day for overlap. Record whether the first change was a feature, a fix, or a configuration edit. A second reviewer should be able to rebuild the timeline from these fields.",
      "Use calendar days for the headline and working days for the stage detail. Calendar days show the customer's experience, while working days show the team's capacity. Report both when the two differ by more than a week. A long calendar gap over a holiday is not the same as a slow review.",
      "Report the median and the range for each stage: access, environment, first ticket, first pull request, first approval, first deployment, and monitoring. Show the number of engineers and the number of calendar days. Present the share of the total time that was controlled by the client and the share controlled by the offshore team. Use the same denominator for every stage rate.",
      "Record whether the engineer had a named onboarding buddy and how often they met. The buddy relationship is hard to measure but easy to describe, and it often explains a fast or slow start. Ask the engineer at the end of the first month which person or document helped most. That answer is qualitative evidence that the timeline alone cannot provide.",
      "Inspect the slowest cases and describe which stage dominated without naming the engineer. A long access stage may point to a missing client owner, while a long first-ticket stage may point to an unclear backlog. Compare the result with the time zone overlap and the review policy. Report engineers who left before a first change separately so their timelines do not distort the stage medians.",
      "Keep the first-change definition stable when the client changes the release cadence. If releases move from weekly to daily, the deployment stage will shrink without any change in onboarding quality. Note the cadence in the scope and analyze the cohorts separately. Otherwise the reader will attribute a process change to the engineer.",
      "The record cannot show whether the engineer understood the code or merely made a small change. It can show only the sequence and duration of the gates. A fast first change is not proof of readiness, and a slow one is not proof of poor onboarding. The protocol also cannot capture informal help that moved the work forward without appearing in the ticket history.",
      "A useful additional view is the number of attempts before the first merge. An engineer who needs three review rounds is having a different experience from one who needs one, even if both ship on the same day. Record the review rounds and the reasons. The count helps the lead decide whether the gap is context, standards, or access.",
      "Give the result to the engineering lead and the client owner and ask them to choose one observable change. The change might be a pre-provisioned developer role, a starter ticket prepared before day one, a named onboarding buddy, or a review slot reserved for new engineers. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Ask the client reviewer how long the first review took and what they had to explain. The reviewer's time is part of the onboarding cost and rarely appears in the engineer's timeline. Record the minutes spent on explanation and the number of comments that repeated a written guideline. A high explanation cost may point to a missing guide rather than a weak engineer.",
      "Do not compare engineers who joined different lanes without stating the lane. A data platform and a marketing site have different review and release paths. If the sample mixes lanes, report the result by lane and keep the overall figure as context only. The comparison should be like with like.",
      "Close the review by choosing one change and naming the date of the next cohort. A protocol that produces a chart but no decision becomes an annual ritual. The owner should be able to say which stage will change and how the next measurement will show it. Keep the raw timeline so a later reviewer can test a different question.",
      "Record the size and risk of the first change so a fast timeline is not confused with a hard one. A one-line configuration fix and a payment-path feature both count as a first production change, but they carry different review and monitoring needs. Put the change type and the risk tier beside the elapsed time. The owner should compare engineers who faced similar first tasks.",
      "Check whether the engineer was blocked by a missing non-production tool, such as a design file, a test account, or a product contact. These dependencies rarely appear in an access matrix, yet they can add days before the first ticket moves. Record the missing item and the date it arrived. The pattern often reveals a reusable onboarding kit that the client can prepare once.",
      "Ask the client reviewer to record the number of comments that could have been answered by the repository guide. A guide that does not cover local setup or test commands creates review comments that look like engineer mistakes. The count is a cheap measure of documentation quality. Use it to improve the guide before the next cohort starts."
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
        "Google Engineering Practices, code review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "U.S. Bureau of Labor Statistics, employer-provided training",
        "https://www.bls.gov/opub/btn/"
      ]
    ],
    "related": [
      "what-share-of-offshore-pull-requests-are-abandoned-before-merge",
      "how-much-of-an-offshore-engineers-week-goes-to-client-meetings"
    ]
  },
  {
    "slug": "what-share-of-offshore-pull-requests-are-abandoned-before-merge",
    "title": "What share of offshore pull requests are abandoned before merge?",
    "excerpt": "A measurement protocol for pull requests that close without merging, with reasons, age, and the review stages they reached.",
    "topic": "Abandoned pull requests",
    "published": "2026-11-08",
    "hero": "/nov08/research/what-share-of-offshore-pull-requests-are-abandoned-before-merge.webp",
    "body": [
      "This protocol asks what share of offshore pull requests are abandoned before merge and why. The unit is one pull request opened by an offshore engineer during the window, whether it was merged, closed without merge, or left open past the observation date. The study measures the share closed without merge, the review stage reached, and the reason recorded. It does not evaluate the engineer's performance or the wisdom of every rejection.",
      "A closed pull request is not automatically a failure. It may have prevented a risky merge, duplicated a change that shipped elsewhere, or been replaced by a smaller branch. The protocol should preserve that possibility instead of treating every closure as waste. The close reason is therefore as important as the count.",
      "Set the scope to one repository, one review policy, and one offshore team. Record the branch protection rules, the required reviewers, and the definition of an abandoned pull request. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required check can look like more abandonment when it is only a different gate.",
      "Measure the age at closure in business hours rather than calendar days when the team works across time zones. A branch closed after a two-week holiday may have been active for only a few working days. Report both if the difference is large. The reader should see the queue experience, not just the timestamp difference.",
      "Define abandonment as a pull request closed without merge, or open for more than the agreed review window with no activity and no owner. A pull request that is replaced by a smaller successor is one unit linked to the successor, not two independent failures. A draft that never reached review is excluded and counted separately. Each definition needs a positive and a boundary example so two reviewers classify the same case the same way.",
      "Record whether the author was still assigned to the client when the pull request closed. A change abandoned after a reassignment is a staffing event, not necessarily a review failure. If the author left, name the replacement owner and whether the work was transferred. That context prevents a misleading abandonment rate.",
      "Record the author, the change type, the size band, the risk tier, the reviewers, the first review time, the last activity time, and the close reason. Add whether the change was superseded, deferred, duplicated, or rejected on technical grounds. Keep the pull request history as it existed at the observation date. A second reviewer should be able to repeat the classification from the record.",
      "Separate bot-generated pull requests from human ones. Dependency bots can open and close many branches that say nothing about the team's review behaviour. If bots are included, report them as a separate category and exclude them from the headline rate. The same rule applies to generated code and lockfile-only changes.",
      "Report the number of pull requests, the share closed without merge, the share still open past the window, and the share superseded. Show the counts by change type, size band, and author. Present the median age at closure and the review stage reached. Use the same denominator for every rate and show the number of records with missing close reasons.",
      "Look at the review comments on abandoned pull requests to see whether the author received a clear next step. A closure after a vague comment may indicate a process gap rather than a decision to stop. Record whether the last comment named an action, a question, or a rejection. That field turns a count into a diagnosis.",
      "Inspect the abandoned pull requests and group the reasons without naming the engineer. A cluster of stale branches may point to a queue that nobody owns, while a cluster of rejected changes may point to an unclear requirement. Compare the result with the review latency and the number of reviewers. Report drafts and bot-generated pull requests separately because they carry different intent.",
      "Track the share of abandoned pull requests that were later reopened or recreated. A reopened change suggests the work was still needed and the closure was procedural. A change never recreated may have been genuinely obsolete. The two cases should be reported separately because they imply different fixes.",
      "The record cannot show whether the author lost interest, was reassigned, or received a verbal instruction to stop. It can show only that the pull request closed or stalled. Abandonment is not proof of waste, because a closed change can prevent a worse merge. The protocol also cannot capture work that was moved to another branch without a link.",
      "Do not use abandonment as a individual performance metric. A team that discourages closing bad work will accumulate stale branches and call it productivity. The measure is useful at the queue and policy level, where it can reveal unclear ownership or an unrealistic review limit. Keep the individual data out of the summary.",
      "Give the result to the engineering lead and the client owner and ask them to choose one observable change. The change might be a stale-branch sweep, a required close reason, a smaller review limit, or a weekly queue review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions and compare the same fields.",
      "Ask two reviewers to classify a sample of closed pull requests independently and compare their labels. A low agreement rate means the definitions are still ambiguous. Revise the examples before collecting the full sample. The exercise is cheap and prevents a confident report built on inconsistent categories.",
      "A useful additional view is the time from the last review comment to closure. A branch that sits for weeks after a clear rejection is a queue hygiene problem, not a review problem. Report the median and the longest cases. The owner can then decide whether a stale-branch sweep is worth the effort.",
      "End with one policy change and a date to re-measure. The change might be a required close reason, a weekly stale-branch review, or a smaller default pull request size. Record the owner and the expected effect. Repeat the protocol with the same definitions so the comparison is honest.",
      "Record the pull request size and the number of files changed. A large branch is more likely to be abandoned because the review cannot finish before the work becomes stale. If the largest branches dominate the abandoned set, the fix may be a smaller default change size rather than more reviewer discipline. Report the size distribution beside the closure rate.",
      "Check whether the branch was based on an old main and never rebased. A branch that conflicts with months of changes may be closed because merging it would be riskier than rewriting it. Record the age of the base commit at closure. That field separates a process problem from a technical one.",
      "Ask the author, when available, whether the closed work was replaced or dropped. A short note turns a silent closure into a usable lesson. If the author has left the engagement, ask the reviewer who handled the closure. The goal is to understand the decision, not to assign blame for a branch that no longer mattered.",
      "Report the number of open pull requests at the end of the window as a separate queue measure. A team can close few branches and still carry a large review backlog, which the abandonment rate alone will hide. Show the open count, the age of the oldest branch, and the number with no reviewer assigned. That view tells the owner whether closure is the right problem to solve first.",
      "Ask whether the repository has a rule for stale branches and whether anyone enforces it. A written rule with no owner is only a suggestion, and a bot that closes branches without a reason can hide useful work. Record the rule, the owner, and the last enforcement date. If no rule exists, propose one with a grace period and a clear notification before closure."
    ],
    "sources": [
      [
        "GitHub Docs, about pull requests",
        "https://docs.github.com/en/pull-requests"
      ],
      [
        "Google Engineering Practices, code review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "Open Source Guides, contributing guidance",
        "https://opensource.guide/how-to-contribute/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ]
    ],
    "related": [
      "how-long-does-a-new-offshore-engineer-take-to-make-a-first-production-change",
      "what-share-of-offshore-defects-are-found-after-release"
    ]
  },
  {
    "slug": "how-often-does-an-offshore-estimate-change-after-refinement",
    "title": "How often does an offshore estimate change after refinement?",
    "excerpt": "A measurement protocol for estimate movement between first sizing and sprint commitment, with reasons and the cost of the change.",
    "topic": "Estimate movement after refinement",
    "published": "2026-11-08",
    "hero": "/nov08/research/how-often-does-an-offshore-estimate-change-after-refinement.webp",
    "body": [
      "This protocol asks how often an offshore estimate changes after refinement and before commitment. The unit is one work item that received an initial estimate and a later refined estimate during the window. The study measures the direction and size of the change, the reason recorded, and the schedule effect. It does not judge whether the first estimate was honest or whether the team is fast.",
      "An estimate change is not automatically an error. Refinement exists to replace uncertainty with information, and a changed number can be the sign that the process worked. The protocol should distinguish a change caused by new evidence from a change caused by pressure or a forgotten requirement. The reason field is what makes that distinction possible.",
      "Set the scope to one offshore team, one backlog, and one refinement process. Record the estimation scale, the participants, and the definition of commitment at the start. If the scale or the ceremony changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new planning cadence can look like better estimation when it is only a different rhythm.",
      "Record who requested the change and when. A change requested by the client after a scope discussion has a different meaning from one requested by the delivery lead the day before commitment. The requester and the timing are part of the evidence. Without them, the team can only guess why the number moved.",
      "Define the initial estimate as the value recorded at the first sizing session, and the refined estimate as the value accepted at commitment. A work item that is split creates new units linked to the original. A work item removed from the backlog remains in the sample with a removal reason. Each definition needs a positive and a boundary example so two reviewers classify the same item the same way.",
      "Measure the size of the change in steps rather than only in hours. A move from three to five points is easier to compare across items than a move from twelve to nineteen hours. If the team uses hours, define the band boundaries in advance. Consistent bands make the report readable without a statistics lesson.",
      "Record the item type, the initial size, the refined size, the number of refinement sessions, the participants, and the stated reason for the change. Add the sprint in which it was committed and whether it shipped. Keep the original estimate visible rather than overwriting it. A second reviewer should be able to see the movement without reconstructing it from memory.",
      "Separate the first estimate from the commitment estimate in the backlog history. Many tools overwrite the original value, which makes the movement invisible. Keep the first value in a custom field or a linked note. A team that cannot see the original number cannot learn from the change.",
      "Report the number of items, the share that changed, the median absolute change, and the share that changed by more than one size step. Show the counts by item type and by initial size. Present the share of changes attributed to missing information, hidden dependency, scope change, and technical discovery. Use the same denominator for every rate and show items with missing reasons.",
      "Check whether the refined estimate included a contingency that the first estimate omitted. A deliberate buffer is not the same as a discovery, and the two should not be pooled. Record the reason as contingency when that is what happened. The distinction matters when the client asks why the total grew.",
      "Inspect the largest movements and describe the pattern without naming the engineer. A cluster in one item type may point to a recurring unknown, such as data migration or third-party access. A cluster at the end of a sprint may point to pressure to commit before refinement is finished. Report items that were split separately because a split is a legitimate response to new information.",
      "Look for items that changed size more than once. A single revision may be healthy, while repeated changes suggest the item is not ready for commitment. Record the number of revisions per item and report the distribution. An item with three revisions may need a spike or a smaller scope before it enters a sprint.",
      "The record cannot show whether the refined estimate was more accurate or whether the team simply added contingency. It can show only that the number moved and what reason was recorded. Estimate movement is not proof of poor planning, because new information should change a plan. The protocol also cannot capture pressure that was applied in a conversation and never written down.",
      "Do not compare estimates across teams with different scales or definitions of done. A five in one team may be a three in another. Keep the analysis inside one team and one scale, or normalize with a documented rule. Cross-team comparisons without that work are misleading.",
      "Give the result to the delivery lead and the client owner and ask them to choose one observable change. The change might be a required spike before sizing, a definition of ready, a refinement checklist, or a rule that committed items cannot change size without a scope note. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Ask the engineers who did the work whether the refined estimate matched the effort they experienced. The answer is subjective, but it can reveal a systematic gap that the numbers hide. Record the response as a short note rather than a score. Use it to choose the next refinement improvement.",
      "A useful additional view is the share of changed items that still shipped in the committed sprint. An estimate that moved but did not affect delivery may be a sign of healthy re-planning. An estimate that moved and pushed the item out is a schedule event. Report both so the reader can see the consequence.",
      "Close the review with one change to the refinement process and a date for the next sample. The change might be a definition of ready, a required spike, or a rule that scope changes need a written note. Record the owner and the measure. Repeat the protocol with the same definitions and compare the same fields.",
      "Record whether the item had a written acceptance criterion at the first estimate. An estimate made before the criterion exists is a guess about scope, and a later change is expected. If most large movements come from items without criteria, the fix belongs in the definition of ready rather than the estimation session. Show the split in the report.",
      "Compare the refined estimate with the actual effort for items that shipped during the window. The comparison is not a performance score, because actual effort includes interruptions and waiting. It is a check on whether the team's scale is stable enough to learn from. Report the median absolute difference and the number of items with no actuals.",
      "Check whether the same few people dominate the refinement discussion. A session where one architect speaks for most of the time may produce estimates that the implementers do not share. Record who estimated and who will do the work. If those groups differ, ask the implementers to confirm the number before commitment.",
      "Record the number of participants in each refinement session and whether the implementer was present. A session that estimates work without the person who will do it can produce a number that nobody owns. If the implementer was absent, mark the estimate as provisional. The report can then show whether provisional estimates move more often than shared ones.",
      "Check whether the team uses a reference story or a fixed scale anchor. Without an anchor, each session can drift and a five can mean different things in different months. Record the anchor used and whether it was visible during the session. A stable anchor is a cheap improvement that does not require a new tool."
    ],
    "sources": [
      [
        "Scrum Guide",
        "https://scrumguides.org/scrum-guide.html"
      ],
      [
        "Project Management Institute, estimating guidance",
        "https://www.pmi.org/learning/library"
      ],
      [
        "NASA Cost Estimating Handbook",
        "https://www.nasa.gov/ost/cost-estimating-handbook/"
      ],
      [
        "U.S. GAO, cost estimating and assessment guide",
        "https://www.gao.gov/products/gao-20-195g"
      ]
    ],
    "related": [
      "how-long-does-a-new-offshore-engineer-take-to-make-a-first-production-change",
      "what-share-of-offshore-sprint-capacity-goes-to-rework"
    ]
  },
  {
    "slug": "what-share-of-offshore-defects-are-found-after-release",
    "title": "What share of offshore defects are found after release?",
    "excerpt": "A measurement protocol that separates defects found in review, in pre-release testing, and by customers after deployment.",
    "topic": "Defect escape rate",
    "published": "2026-11-08",
    "hero": "/nov08/research/what-share-of-offshore-defects-are-found-after-release.webp",
    "body": [
      "This protocol asks what share of defects in offshore-delivered software are found after release rather than in review or pre-release testing. The unit is one confirmed defect associated with a change delivered during the window. The study measures the stage of discovery, the time to discovery, and the severity. It does not judge the offshore team's skill or assume that every escaped defect was preventable.",
      "A defect found after release is not automatically a testing failure. Some behaviors only appear with real traffic, real data, or a customer's device. The protocol should record the conditions that made discovery possible, such as load, locale, or a third-party integration. That context helps the team decide whether a test could reasonably have caught it.",
      "Set the scope to one product, one release process, and one defect taxonomy. Record the environments, the test gates, and the definition of a confirmed defect at the start. If the release process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new test gate can look like a quality improvement when it is only a different filter.",
      "Measure the time from deployment to discovery in business hours as well as calendar days. A defect found on a Monday after a Friday release had less exposure than the calendar suggests. Report both and state the release time. The reader should see how long customers were affected, not only the date difference.",
      "Define a confirmed defect as a reported behavior that a named owner reproduced and accepted as unintended. Exclude duplicates and reports that were closed as working as designed. Link each defect to the change that introduced it when the link can be established, and mark the link as unknown when it cannot. Do not force a link that the evidence does not support.",
      "Record whether the defect was reported by a customer, by monitoring, or by an internal review. A customer-reported defect carries a different cost from one caught by an alert before anyone noticed. The source of discovery is part of the severity picture. Report the counts by source and severity together.",
      "Record the discovery stage, the discovery date, the severity, the customer impact, the time from deployment to discovery, and the change or release that introduced the behavior. Add the test that would have caught it, if one can be named. Keep the original report and the resolution together. A second reviewer should be able to classify the stage from the record.",
      "Separate a regression from a defect in new behavior. A regression breaks something that worked before, while a new feature may have a gap that no one specified. The two imply different fixes: regression prevention versus requirement clarity. Record the category and review the pattern separately.",
      "Report the number of defects, the share found in review, the share found in pre-release testing, and the share found after release. Show the counts by severity and by product area. Present the median time from deployment to discovery for escaped defects. Use the same denominator for every rate and show the number of defects with unknown introduction points.",
      "Check whether the change had a feature flag and whether the flag limited the exposure. A defect behind a flag that never reached all users is a different event from one that shipped to everyone. Record the rollout stage at discovery. The same bug can have very different customer impact depending on the stage.",
      "Inspect the escaped defects and group the missing checks by type: missing test, missing environment, unclear requirement, or data condition. Compare the pattern with the release size and the test coverage of the changed area. Report low-severity cosmetic issues separately from defects that affected a customer's ability to complete a task. The split keeps the headline rate from being dominated by trivia.",
      "Ask the person who found the defect what they were trying to do. The answer often reveals a missing scenario that the test plan did not consider. Record the user goal in one sentence and link it to the test case if one exists. That link is more useful than a general note to test more.",
      "The record cannot show whether a defect would have been caught by a reasonable test or whether the team chose to ship with a known risk. It can show only where the defect was found and how long it took. A low escape rate is not proof of quality if the reporting channel is weak. The protocol also cannot capture defects that customers never report.",
      "Do not report a single escape rate without the severity mix. A team with many cosmetic escapes may look worse than a team with one severe escape, even though the customer impact is lower. Show the severity distribution beside the rate. The owner should make decisions from the impact, not the headline.",
      "Give the result to the QA lead and the client owner and ask them to choose one observable change. The change might be a pre-release checklist for a risky area, a test-data improvement, a smaller release batch, or a customer-report review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions and compare the same fields.",
      "A useful additional view is the share of escaped defects that were caught by the same test after a fix was added. A defect that can be reproduced by an automated test is a candidate for prevention. A defect that cannot be reproduced may need better observability rather than another test. Record the outcome of the fix.",
      "Review the defect taxonomy with the team before collecting the next sample. If two people disagree about whether a missing requirement is a defect or a scope change, the rate will be noisy. Write the examples and revise them once. A stable taxonomy is worth more than a larger sample.",
      "End with one change to the release or test process and a date to re-measure. The change might be a pre-release checklist for a risky area, a smaller release batch, or a monitoring alert. Record the owner and the expected effect. Repeat the protocol with the same definitions and compare the same fields.",
      "Record the deployment method and the rollout percentage at the time of discovery. A canary release that reached five percent of traffic limits the customer impact even when the defect is severe. A full release exposes everyone at once. Report the rollout stage with the defect count so the reader can see the exposure, not only the volume.",
      "Check whether the defect was found in a part of the product with automated tests or only manual checks. A gap in an area with no tests is a different finding from a test that existed but did not cover the condition. Record the test coverage status and the closest existing test. The owner can then decide whether to add coverage or improve the test design.",
      "Ask whether the defect report included enough detail for the team to reproduce it on the first attempt. A report that requires three rounds of questions adds cost after release and delays the fix. Record the number of clarification rounds. That measure shows whether the customer-facing intake form is doing its job.",
      "Record the time between the defect report and the first engineer response, separately from the time to fix. A fast fix with a slow acknowledgement still leaves the customer waiting and may generate duplicate reports. Show both intervals in the report. The owner can then decide whether the gap is triage capacity or communication.",
      "Ask whether the defect was included in the release notes or known issues list. A known issue that is documented gives support a script and gives the customer an explanation. An undocumented issue discovered after release creates a harder conversation. Record the documentation status and use it to improve the release checklist."
    ],
    "sources": [
      [
        "ISTQB glossary",
        "https://glossary.istqb.org/"
      ],
      [
        "Google Testing Blog",
        "https://testing.googleblog.com/"
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
      "what-share-of-offshore-pull-requests-are-abandoned-before-merge",
      "how-often-does-an-offshore-estimate-change-after-refinement"
    ]
  },
  {
    "slug": "how-much-of-an-offshore-engineers-week-goes-to-client-meetings",
    "title": "How much of an offshore engineer's week goes to client meetings?",
    "excerpt": "A time-use protocol that separates scheduled meetings, ad hoc calls, waiting time, and the work that actually moves a ticket.",
    "topic": "Client meeting load",
    "published": "2026-11-08",
    "hero": "/nov08/research/how-much-of-an-offshore-engineers-week-goes-to-client-meetings.webp",
    "body": [
      "This protocol asks how much of an offshore engineer's working week goes to meetings with the client and what those meetings displace. The unit is one engineer-week, with time classified into scheduled meetings, ad hoc calls, waiting for a meeting, and focused delivery work. The study measures the share of paid hours in each class. It does not judge whether a meeting was necessary.",
      "A meeting count alone does not show the cost. Two thirty-minute calls can fragment a morning more than one hour-long review, because each interruption requires context to rebuild. The protocol should record the gaps around meetings as well as their duration. Fragmentation is part of the time-use picture.",
      "Set the scope to one offshore team, one client, and one standard working week. Record the contractual hours, the time zone difference, and the meeting policy at the start. If the meeting policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new daily stand-up can look like more collaboration when it is only a different schedule.",
      "Record whether the engineer was expected to prepare for the meeting. Preparation can take longer than the call and rarely appears on a calendar. Ask the engineer for an estimate of preparation time each day and record it as a separate class. A meeting that looks short may carry a hidden hour of work.",
      "Define a meeting as a synchronous conversation with a client participant, whether scheduled or ad hoc. Define waiting time as the gap between a meeting's scheduled start and the resumption of focused work. Define focused delivery as time on a ticket, a review, or a test with no client call in progress. Each definition needs a positive and a boundary example.",
      "Separate recurring meetings from one-off meetings. A daily stand-up is a standing cost that can be planned, while an ad hoc escalation is a disruption. Report the two categories separately and note the recurrence pattern. The owner can then decide whether the standing cost is earning its place.",
      "Record the engineer, the week, the total paid hours, the minutes in each class, and the number of meetings. Add the meeting purpose, the number of attendees, and whether the engineer spoke or only listened. Keep the calendar export and the ticket activity together. A second reviewer should be able to reconstruct the week from the two sources.",
      "Look at the distribution, not only the average. One engineer with a heavy client-facing role can raise the team average while the rest of the team has little meeting load. Report the median and the range by engineer role. A role-based view is more actionable than a single team number.",
      "Report the number of engineer-weeks, the median share of time in client meetings, the median share in ad hoc calls, and the median share in focused work. Show the counts by meeting purpose and by team. Present the share of meetings with more than five attendees and the share where the engineer had no speaking role. Use the same denominator for every rate.",
      "Record the meeting owner and the decision each meeting is meant to produce. A meeting without a decision is a candidate for a written update. If a meeting produces decisions that are not recorded, the cost is likely to repeat. The owner field turns the time-use data into a governance question.",
      "Inspect the weeks with the highest meeting load and describe what was displaced without naming the engineer. A cluster of status meetings may point to a reporting habit that could be replaced by a written update. A cluster of ad hoc calls may point to an unclear escalation path. Compare the result with the delivery output for the same weeks, but do not claim that one caused the other.",
      "Ask the client which meetings they consider essential and which they attend out of habit. The answer may differ from the offshore team's assumption. Record both views and compare them with the time data. A short conversation can remove a recurring call without any policy change.",
      "The record cannot show whether a meeting prevented a misunderstanding or whether the engineer was distracted. It can show only the time allocated and the calendar evidence. Meeting load is not proof of poor focus, because some collaboration is necessary. The protocol also cannot capture interruptions that were never added to a calendar.",
      "Do not treat focused work as automatically productive. A long block of uninterrupted time can still be spent on the wrong task. Pair the time-use data with the delivery result for the same week, but describe the relationship carefully. The protocol measures allocation, not output.",
      "Give the result to the delivery lead and the client owner and ask them to choose one observable change. The change might be a meeting budget, a written status update, a named decision channel, or a no-meeting block for delivery work. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions and compare the same fields.",
      "A useful additional view is the time from a meeting to the first related code or ticket update. A meeting that produces no follow-up may have been informational, which is not necessarily bad. A meeting that produces a decision but no recorded action is a gap. Report the follow-up rate for meetings that were meant to decide something.",
      "Check the meeting load during a release week separately from a normal week. Release weeks often add coordination calls that do not reflect the steady state. Mixing them into one average hides the peak. Report both so the owner can plan for the release rhythm.",
      "Close with one change to the meeting pattern and a date to re-measure. The change might be a written status update, a named decision channel, or a no-meeting block. Record the owner and the expected effect. Repeat the protocol with the same definitions and compare the same fields.",
      "Record the start time of the engineer's first deep-work block and whether a meeting interrupted it. A week with the same meeting hours can feel very different if the calls are scattered across the morning. Report the number of days with a block of at least two uninterrupted hours. That field is often more useful to the team than the total meeting share.",
      "Check whether the engineer is expected to attend meetings outside contractual hours. A late call that repeats every week is a schedule design problem, not a one-off. Record the after-hours minutes and whether time off in lieu was given. The owner should see the cost before it becomes a retention issue.",
      "Ask the client which decisions could move to a written comment or a short recorded update. A decision that needs discussion should stay a meeting, while a status report can usually be written. Record the candidate meetings and the client's response. A small change in format can free a meaningful block of delivery time.",
      "Compare the meeting load of engineers who joined recently with those who have been on the engagement for a year. A new engineer often attends more calls to learn context, while a senior engineer may attend more to make decisions. Report the groups separately so the average does not hide either pattern. The onboarding plan can then set an explicit meeting budget.",
      "Ask whether the client records meetings and shares the notes with people who could not attend. A good record can replace attendance for some participants, but only if the decision and the owner are written down. Sample a few meeting notes and check for those fields. A note that summarizes discussion without decisions will not reduce the call load, so the note template should require a decision and an owner field."
    ],
    "sources": [
      [
        "Microsoft Work Trend Index",
        "https://www.microsoft.com/en-us/worklab/work-trend-index"
      ],
      [
        "Atlassian, asynchronous collaboration guidance",
        "https://www.atlassian.com/blog/productivity"
      ],
      [
        "U.S. Bureau of Labor Statistics, time use",
        "https://www.bls.gov/tus/"
      ],
      [
        "Google re:Work, team effectiveness",
        "https://rework.withgoogle.com/"
      ]
    ],
    "related": [
      "how-long-does-a-new-offshore-engineer-take-to-make-a-first-production-change",
      "how-often-does-an-offshore-estimate-change-after-refinement"
    ]
  }
];
