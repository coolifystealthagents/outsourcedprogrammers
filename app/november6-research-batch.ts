import type { ResearchPost } from './fleet-content';

export const november6ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "where-does-onboarding-time-go-for-a-new-outsourced-engineer",
    "title": "Where does onboarding time go for a new outsourced engineer?",
    "excerpt": "A measurement protocol that separates access delays, environment setup, domain learning, and review waiting during an offshore engineer's first month.",
    "topic": "Onboarding time distribution",
    "published": "2026-11-06",
    "hero": "/nov06/research/where-does-onboarding-time-go-for-a-new-outsourced-engineer.webp",
    "body": [
      "This protocol asks where onboarding time goes for a new outsourced engineer during the first thirty days. The unit is one new engineer, identified by the start date and the assigned work lane. The study measures time spent waiting for access, setting up the environment, learning the domain, completing a first ticket, and waiting for review. It does not evaluate the engineer's ability or the quality of the hiring decision.",
      "Set the scope to one client team, one engineering lane, and one onboarding plan. Record the repositories, tools, environments, and reviewers assigned at the start. If the plan changes during the window, keep the original definition for the full cohort or analyze the change as a separate period. A new onboarding checklist can look like faster learning when it is only a different form.",
      "Define the population as every engineer who started in the lane during the window and reached the end of the thirty-day plan. The unit is the engineer, not the ticket, because the same person can work on several tasks. An engineer who leaves before day thirty remains in the sample with a termination date and a reason category. A contractor extension is not a new unit.",
      "Record the engineer's prior experience, the assigned mentor, the time-zone overlap, and the access tier. These strata matter because a senior engineer with repository access and a junior engineer waiting for a database account face different delays. Include engineers who joined remotely and those who joined an existing cohort. Test the unit definition on two recent onboarding records before collection begins.",
      "Define access delay as the time from the approved request to the first successful use of the tool. Define environment setup as the time until the engineer can run the application and its tests locally or in a preview environment. Define domain learning as time spent with documentation, walkthroughs, and supervised ticket work. Define first independent ticket as a reviewed change that the engineer completed without taking over someone else's branch.",
      "Do not count waiting for a scheduled orientation as access delay unless the orientation was required before the tool could be used. Do not count a test that passed on someone else's machine as environment setup. A ticket that was reassigned is not a completed first ticket. Each definition should include one positive example and one boundary example so two reviewers classify the same record consistently.",
      "For each engineer, capture the start date, role, prior experience band, mentor, and time-zone overlap. Add the request and approval times for each tool, the first successful command, the first passing test, and the first reviewed ticket. Record the reviewer and the review wait separately. Keep the timeline with the onboarding record so a second reviewer can rebuild it. Use one timeline format for every engineer.",
      "Also capture the number of questions the engineer asked and the number that required a client answer. These fields help explain a delay that looks like slow learning but is actually an unanswered dependency. If a question was answered in a call, record the call time and the person who answered. A second reviewer should be able to classify the delay from the timeline.",
      "Draw the sample from the onboarding roster rather than from a list of successful hires. Record the export date, the filters, and the number of engineers excluded. Include every lane and every mentor so the result is not dominated by one supportive manager. If the cohort is ordered by start date, include all engineers in the window rather than a convenience sample.",
      "Collect timestamps from the access system, the repository, and the ticket tracker as they existed on the day. If a mentor recorded a walkthrough in a private note, ask for the date and the topic rather than the note itself. Do not reconstruct a missing timestamp from memory. Note the collection date separately from the onboarding date so the reader can see how much of the record has aged.",
      "A useful additional measure is the share of onboarding time that the mentor spent answering questions that the documentation should have answered. Record the question topic and whether the answer was added to the guide. That view separates a documentation gap from a genuinely complex domain. The owner can then decide whether to fix the guide or change the first ticket.",
      "Report the median and range for each stage: access, environment, domain learning, first ticket, and review. Show the counts by prior experience, mentor, and time-zone overlap. Present the share of engineers who reached a first reviewed ticket within the plan and the share with an unresolved access request. Use the same denominator for every rate and show incomplete records. Show the raw stage times beside the medians.",
      "Inspect the slowest cases and describe which stage dominated without naming the engineer. A delay concentrated in access may point to provisioning, while a delay after the first ticket may point to review capacity. Compare the result with the mentor's other work and the time-zone overlap. Report engineers who left early separately so their partial timelines do not distort the stages.",
      "A useful additional view is the time from the first question to the first written answer. An engineer who waits two days for a domain answer loses more than the answer itself, because the next ticket also stalls. Show the question wait beside the stage times. That view helps the owner decide whether to add office hours, a written FAQ, or a named domain contact.",
      "The review should separate onboarding work from productive work. A first ticket that takes three weeks because it is a critical migration is not a fair measure of onboarding speed. Record the ticket's risk and scope, then compare the engineer's next two tickets. That context prevents the first assignment from becoming a misleading benchmark. A first ticket is a sample, not a verdict.",
      "The record cannot show whether the engineer understood the domain or whether the mentor was effective. It can show only the recorded requests, commands, questions, and reviews. A fast setup is not proof of readiness, and a slow first ticket is not proof of poor ability. The protocol also cannot capture informal help that left no written trace. It measures the recorded process, not the person.",
      "Access systems can omit requests made in chat, and repository logs can miss a local setup that never reached the shared environment. A mentor may have answered questions in a call and recorded nothing. Record those gaps and their treatment instead of dropping them silently. If the mentor also reviewed the first ticket, note the independence limitation and analyze that pair separately.",
      "A useful check is whether the engineer could repeat the setup from the written guide without help. Ask them to follow the guide on a second machine or a clean profile and record where it failed. That test measures the artifact, not the person. A guide that only works with a mentor beside the engineer is not yet an onboarding asset.",
      "Give the result to the engineering lead and the onboarding owner and ask them to choose one observable change. The change might be a pre-provisioned access bundle, a recorded environment walkthrough, a shorter first ticket, or a named domain contact. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the checklist and the first ticket at the same time.",
      "Repeat the protocol with the same definitions for the next cohort and compare the same fields. If access time fell but first-ticket time did not, the bottleneck may have moved to review or domain learning. If first-ticket time fell but rework rose, the first assignment may have become too easy. Close the review when the owner accepts the finding and the next cohort is scheduled.",
      "The final view is the engineer's own estimate of where the time went. Ask for a short ranking at day thirty and compare it with the recorded timeline. A mismatch is useful evidence about what the engineer could not see, not proof that one account is wrong. Record the estimate with the timeline. That comparison helps the owner improve the next onboarding conversation."
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
      "where-does-review-time-accumulate-in-a-distributed-engineering-team",
      "how-often-does-an-offshore-release-wait-on-client-approval"
    ]
  },
  {
    "slug": "how-often-does-an-offshore-release-wait-on-client-approval",
    "title": "How often does an offshore release wait on client approval?",
    "excerpt": "A protocol for measuring approval latency in an offshore release window, including request completeness, reviewer availability, and time-zone gaps.",
    "topic": "Release approval latency",
    "published": "2026-11-06",
    "hero": "/nov06/research/how-often-does-an-offshore-release-wait-on-client-approval.webp",
    "body": [
      "This protocol asks how often an offshore release waits on client approval and where that wait accumulates. The unit is one release request, identified by the deployment record and the first approval request. The study measures the time from ready-for-approval to the first reviewer response, from response to approval, and from approval to deployment. It does not evaluate whether the release was technically sound.",
      "Set the scope to one service, one release process, and one approval group. Record the branch protection rules, the deployment calendar, and the approval policy at the start. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required approver can look like a slower team when it is only a different rule.",
      "Define the population as every release request that reached a deployment decision during the window, including requests that were cancelled. The unit is the release request, not the deployment, because a request can be approved and then rescheduled. A second deployment of the same artifact is a new unit. A rollback is a new unit with a link to the original release.",
      "Record the service, the release type, the change size, the requested window, and the approver group. These strata matter because a security release and a routine copy change carry different review expectations. Include releases that were withdrawn, because the withdrawal is part of the process. Test the unit definition on two ordinary releases before collection begins. Use the same categories for every request.",
      "Define ready-for-approval as the time the release owner submits the complete request, not the time the branch was created. Define first response as the first substantive reviewer comment or approval, not an automated check. Define approval as the state that satisfies every required approver. Define deployment as the time the artifact reaches the target environment. Record those four timestamps from one system clock.",
      "Do not count an acknowledgement that does not grant or deny approval as a response. Do not count a request sent to a group as a named reviewer action. A release paused for a missing test should be recorded with the pause and the resume time. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "For each request, capture the release id, service, requester, approver group, ready time, first response, approval time, and deployment time. Add the change size, the number of approval rounds, and the number of missing fields in the first request. Record whether the request arrived during the client's working hours. Keep the timestamp packet with the release record. Store the packet with the deployment record.",
      "Also capture the reason for each wait: reviewer unavailable, missing evidence, conflicting change, or deployment platform issue. These fields help explain a delay that looks like approval latency but is actually a release-readiness problem. If a wait was resolved in a chat message, record the message time and the person who answered. A second reviewer should be able to rebuild the timeline.",
      "Draw the sample from the deployment system rather than from a list of late releases. Record the export date, the filters, the row count, and the selection rule. Include requests from every service and every approver group so the result is not dominated by one large release. If the population is ordered by request date, a fixed interval spreads the sample across the window.",
      "Collect the request as it existed at the approval decision, not as it looks after later edits. If the evidence was added after the first response, record the edit time and analyze the first version separately. Do not infer a missing approval from a delayed deployment. Note the collection date separately from the release date so the reader can see how much of the record has aged.",
      "A useful additional measure is the share of requests that were complete on the first submission. A complete request names the artifact, the test evidence, the rollback plan, and the monitoring window. Record the missing fields and the time spent collecting them. That view separates a reviewer bottleneck from a requester-preparation problem. Show the missing fields beside the wait time.",
      "Report the number of requests, the median time to first response, the median time to approval, and the share deployed within the requested window. Show the counts by approver group, change size, and time-zone overlap. Present the share of requests with missing evidence and the share that required a second approval round. Use the same denominator for every rate. Show the request count beside each rate.",
      "Inspect the longest waits and describe which stage dominated without naming the reviewer. A wait concentrated before first response may point to notification or capacity, while a wait after approval may point to the deployment platform. Compare the result with the requested window and the time-zone overlap. Report withdrawn requests separately so their partial timelines do not distort the stages.",
      "A useful additional view is the time between the first response and the final approval. A request that gets a quick comment but waits days for the final signature is not approved quickly. Show the number of approvers and the sequence of responses. That view helps the owner decide whether to simplify the approver group or split the request. Name the approvers in the request record.",
      "The review should separate a client-side wait from an offshore-side wait. A request that is returned with questions and then waits for the offshore engineer to answer is a different bottleneck from one that sits untouched. Record the handoff direction for each wait. That split prevents the team from optimizing the wrong side of the process. Record who held the request at each stage.",
      "The record cannot show whether the approver was thinking about the request or whether the requester was unavailable. It can show only the recorded timestamps and fields. A long approval is not proof of neglect, and a short approval is not proof of a thorough review. The protocol also cannot capture an approval given verbally in a meeting and recorded later.",
      "Deployment systems can omit cancelled requests, edited approvals, and comments from deleted accounts. A request that was reset by a new commit may look longer than it felt. Record those cases and their treatment instead of dropping them silently. If the requester and approver are the same person, note the independence limitation and analyze that subgroup separately. Keep the original request version with the sample.",
      "A useful check is whether the approval requirements match the release risk. A low-risk copy change that needs three approvers may be over-controlled, while a database migration with one approver may be under-controlled. Record the risk tier and the number of required approvers. That comparison helps the owner adjust the policy without guessing. Use the risk tier to set the approver count.",
      "Give the result to the release owner and the approval group and ask them to choose one observable change. The change might be a complete-request checklist, a named backup approver, a shorter approval group, or a scheduled window for low-risk releases. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the checklist and the approver group at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If first response improved but final approval did not, the queue may be starting faster without finishing. If approval improved but deployment did not, the platform may be the real constraint. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the approver's concurrent queue, including other services and releases. An approver who looks slow on one request may be covering three products. Record the queue size and the requested windows during the wait. That context helps the owner decide whether to rotate approvers or reduce the number of required signatures. Record the next review date with the sample."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub Docs, about protected branches",
        "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "where-does-review-time-accumulate-in-a-distributed-engineering-team",
      "what-share-of-outsourced-qa-defects-are-reopened-after-a-fix"
    ]
  },
  {
    "slug": "what-share-of-outsourced-qa-defects-are-reopened-after-a-fix",
    "title": "What share of outsourced QA defects are reopened after a fix?",
    "excerpt": "A measurement protocol for reopen rates that separates a failed fix, a new symptom, and a changed acceptance rule.",
    "topic": "Defect reopen rate",
    "published": "2026-11-06",
    "hero": "/nov06/research/what-share-of-outsourced-qa-defects-are-reopened-after-a-fix.webp",
    "body": [
      "This protocol asks what share of outsourced QA defects are reopened after a fix and why. The unit is one defect that reached a verified-fix state during the observation window. The study measures whether it was reopened, the reason for the reopen, the time between close and reopen, and whether the fix evidence covered the reported behavior. It does not evaluate the severity of the original defect.",
      "Set the scope to one product area, one QA team, and one defect workflow. Record the status definitions, the required fix evidence, and the reopen rules at the start. If the workflow changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required field can look like a change in defect quality when it is only a change in the form.",
      "Define the population as every defect that moved to verified-fix during the window, including defects that were later reopened and those that stayed closed. The unit is the defect, not the status transition, because one defect can be reopened several times. A duplicate merged into the primary defect remains one unit. A separate report of a different behavior is a new unit.",
      "Record the reporter, the engineer, the QA owner, the severity, and the affected area. These strata matter because a payment failure and a label alignment carry different reopen costs. Include defects that were closed as cannot-reproduce, because that outcome is part of the quality signal. Test the unit definition on two ordinary defects before collection begins. Use the same severity scale as the queue.",
      "Define a verified fix as a change that passed the stated acceptance check and was closed by the QA owner. Define a reopen as a new defect record or status change that cites the original fix and shows the behavior still failing. Define a new symptom as a related but distinct failure that does not reproduce the original steps. Define a changed rule as a reopen caused by a new acceptance criterion rather than a failed fix.",
      "Do not count a reopen caused by a deployment that never included the fix unless the record shows the fix was claimed as deployed. Do not count a customer request for a new feature as a reopen. A test that passes only on the engineer's machine is not verified evidence. Each definition should include one positive example and one boundary example so a second reviewer can classify consistently.",
      "For each defect, capture the id, reporter, engineer, QA owner, severity, area, close date, and reopen date. Add the acceptance check, the evidence attached, and the deployment containing the fix. Record the reason category and whether the original steps still fail. Keep the defect packet with the sample so a second reviewer can repeat the classification. Store the packet with the defect record.",
      "Also capture whether the fix changed a test and whether that test fails on the pre-fix commit. These fields help explain a reopen that happened because the original test checked a nearby behavior. If the evidence was a screenshot, record the environment and the build. A second reviewer should be able to tell whether the original close was supported by the record.",
      "Draw the sample from the defect tracker rather than from a list of known bad fixes. Record the export date, the filters, the row count, and the selection rule. Include defects from every severity and every QA owner so the result is not dominated by one noisy area. If the population is ordered by close date, a fixed interval spreads the sample across the window.",
      "Collect the defect as it existed at the close decision, not as it looks after later comments. If the acceptance check changed after the close, record the change time and analyze the review separately. Do not infer a failed fix from a later unrelated incident. Note the collection date separately from the close date so the reader can see how much of the record has aged.",
      "A useful additional measure is the share of fixes that included a regression test. A fix without a test may still be correct, but the team has less evidence that it will stay correct. Show the test status beside the reopen rate and describe the relationship. That view helps the owner decide whether the gap is in testing, deployment, or the acceptance rule.",
      "Report the number of defects, the reopen rate, and the median time to reopen. Show the counts by severity, area, engineer, and QA owner. Present the share of reopens caused by a failed fix, a new symptom, and a changed rule. Use the same denominator for every rate and show the number of defects with incomplete evidence. Show the reopen count beside each rate.",
      "Inspect the reopens and describe the pattern without naming the engineer. A cluster in one area may point to an unstable environment, while a cluster in one QA owner may point to a different definition of verified. Compare the result with the severity and the presence of a regression test. Report cannot-reproduce closures separately because they carry a different risk.",
      "A useful additional view is the time between close and reopen. A reopen within one day may indicate a deployment mismatch, while a reopen after two weeks may indicate a test that missed a slower failure. Show the distribution and describe the pattern. That view helps the owner decide whether to add a monitoring window before closing. Name the deployment in the reopen record.",
      "The review should separate a failed fix from a fix that was never deployed. A defect closed against a branch that did not reach production is a release-control problem, not a QA problem. Record the deployed artifact and the close time. That split prevents the team from rewriting tests when the real gap is in deployment verification. Record the deployed artifact for every close.",
      "The record cannot show whether the engineer understood the root cause or whether the QA owner tested the right path. It can show only the acceptance check, the evidence, and the later status. A reopen is not proof of a careless fix, and a closed defect is not proof of correctness. The protocol also cannot capture a customer who experienced the failure but did not report it.",
      "Defect trackers can omit comments from deleted accounts, merged duplicates, and status changes made by automation. A defect that was reopened and closed again within an hour may leave a thin record. Record those cases and their treatment instead of dropping them silently. If the engineer and QA owner are the same person, note the independence limitation. Keep the original status history with the sample.",
      "A useful check is whether the acceptance evidence names the environment and the build. A fix verified only in a local environment cannot support a production close. Record the build and the deployment. That gap is a release-verification issue that the reopen review can surface before a customer does. Record both fields in the evidence attached to the defect close.",
      "Give the result to the QA lead and the engineering lead and ask them to choose one observable change. The change might be a required regression test, a monitoring window before close, a deployment check, or a clearer acceptance template. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the deployment rule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If reopens fell but close time rose, the team may be adding a useful monitoring window. If reopens fell but escaped defects rose, the QA check may have become too narrow. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the reporter's experience after the fix. Ask whether the customer was told what changed and how to confirm it. A defect can be technically closed while the reporter still cannot use the product. Record the confirmation method and the date. That view keeps the reopen measure connected to the customer outcome rather than the tracker status."
    ],
    "sources": [
      [
        "ISO/IEC/IEEE 29119 software testing",
        "https://www.iso.org/standard/45142.html"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "GitHub Docs, about pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ]
    ],
    "related": [
      "how-often-do-outsourced-pull-requests-arrive-without-a-reproducible-test",
      "where-does-onboarding-time-go-for-a-new-outsourced-engineer"
    ]
  },
  {
    "slug": "how-much-stale-feature-flag-debt-accumulates-in-an-outsourced-codebase",
    "title": "How much stale feature-flag debt accumulates in an outsourced codebase?",
    "excerpt": "A protocol for counting flags that outlive their removal condition, with exposure, ownership, and cleanup evidence separated from raw flag totals.",
    "topic": "Feature-flag debt",
    "published": "2026-11-06",
    "hero": "/nov06/research/how-much-stale-feature-flag-debt-accumulates-in-an-outsourced-codebase.webp",
    "body": [
      "This protocol asks how much stale feature-flag debt accumulates in an outsourced codebase and what kind of risk it carries. The unit is one feature flag that exists at the observation date. The study measures age, ownership, removal condition, current default, and whether the flag still changes a production path. It does not evaluate whether the feature behind the flag was successful.",
      "Set the scope to one repository, one deployment platform, and one flag service. Record the flag SDK, the evaluation model, and the inventory source at the start. If the team changes flag providers during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A migration can look like a reduction in debt when it is only a different inventory.",
      "Define the population as every flag that can be evaluated in the production application during the window, including flags that are always on or always off. The unit is the flag key, not the code reference, because one flag can appear in several services. A flag that is removed and later re-added is a new unit. A renamed flag with the same behavior is a new unit.",
      "Record the flag type, owner, creation date, default value, and affected services. These strata matter because a release flag and a permanent kill switch carry different lifetimes. Include flags with no owner, because the absence is part of the finding. Test the unit definition on two ordinary flags before collection begins. Use the same categories for every single inventory row.",
      "Define a removal condition as a written event or date after which the flag should be deleted. Define stale as a flag past its removal condition or older than the team's maximum release-flag age with no documented reason to keep it. Define active exposure as a flag whose value can still differ between environments or customers. Define orphaned as a flag with no named owner in the inventory or the repository.",
      "Do not count a configuration value as a feature flag unless it changes application behavior through a flag evaluator. Do not count a database column that records a user preference as a flag. A flag that is permanently on but still read at runtime is not automatically stale if it supports an operational control. Each definition should include one positive example and one boundary example.",
      "For each flag, capture the key, type, owner, creation date, default, affected services, and last change date. Add the removal condition, the current evaluation state, and the number of code references. Record whether the flag is documented in the runbook. Keep the inventory extract with the sample so a second reviewer can repeat the count. Store the extract date with the inventory.",
      "Also capture whether the flag was used in the last quarter and whether its off state has a test. These fields help explain a flag that is old but still valuable. If usage is unknown, record the gap rather than assuming the flag is dead. A second reviewer should be able to classify the flag from the inventory and the repository.",
      "Draw the sample from the flag service and the repository rather than from a list of known cleanup candidates. Record the export date, the filters, the row count, and the selection rule. Include flags from every service and every owner so the result is not dominated by one neglected area. If the inventory is ordered by creation date, include every flag in the window.",
      "Collect the flag as it existed at the observation date, not as it looks after a later cleanup. If a flag was removed during the study, record the removal date and analyze it as a separate event. Do not infer staleness from the feature name alone. Note the collection date separately from the flag creation date so the reader can see the age distribution.",
      "A useful additional measure is the share of stale flags that still have a production code path. A stale flag that is always on may be harmless, while one that can still route traffic is a live control with no owner. Show the code-path count beside the age. That view helps the owner prioritize removal by exposure rather than by count.",
      "Report the number of flags, the share stale, the share orphaned, and the share with active exposure. Show the counts by type, service, and owner. Present the median age and the number of flags past their removal condition. Use the same denominator for every rate and show the number of flags with missing metadata. Show the raw flag count beside every rate.",
      "Inspect the stale flags and describe the pattern without naming the engineer. A cluster in one service may point to a missing cleanup step in the release template, while a cluster in one owner may point to a team that changed. Compare the result with the flag type and the last change date. Report permanent controls separately so they do not inflate the debt count.",
      "A useful additional view is the time between the last code change and the flag creation date. A flag added during a large migration may be intentionally long-lived, while one added for a one-week rollout should be gone. Show the age and the original release note. That context prevents a simple age threshold from misclassifying a legitimate control. Quote that note in the inventory row.",
      "The review should separate flag debt from configuration drift. A flag that is always on because the default changed may be dead code, while a flag that is always off because a customer segment never launched may still be a product decision. Record the reason and the owner. That split prevents the team from deleting a path that a contract still requires.",
      "The record cannot show whether a flag is safe to remove without reading the code and testing the off state. It can show only the metadata, references, and stated removal condition. A stale flag is not proof of a bug, and a young flag is not proof of good hygiene. The protocol also cannot capture flags evaluated outside the application, such as in a CDN or a vendor console.",
      "Flag inventories can omit flags created directly in the vendor console, and repository searches can miss dynamically constructed keys. A flag may also be referenced in a mobile build that the server inventory does not see. Record those gaps and their treatment instead of dropping them silently. If the same person owns the flag and approves its removal, note the independence limitation.",
      "A useful check is whether the off state is tested in the same environment where the flag is evaluated. A unit test with a mocked evaluator does not prove that the production fallback works. Record the test level and the environment. That gap is a control problem that the cleanup review can surface before a release. Record the test level and the environment.",
      "Give the result to the engineering lead and the service owners and ask them to choose one observable change. The change might be a required removal date on every release flag, a quarterly cleanup review, an owner field in the flag template, or a dashboard for stale flags. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the cleanup cadence at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If stale flags fell but orphaned flags did not, the team may be deleting code without assigning ownership. If orphaned flags fell but active exposure did not, the inventory may be improving without the runtime risk. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the cost of keeping the flag, not only the risk of removing it. A flag that requires a test matrix, a dashboard, and a runbook entry consumes attention even when it is always on. Record the maintenance work attached to each stale flag. That view helps the owner decide whether the next cleanup should start with the oldest flag or the most expensive one."
    ],
    "sources": [
      [
        "Martin Fowler, feature toggles",
        "https://martinfowler.com/articles/feature-toggles.html"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub Docs, about protected branches",
        "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "audit-feature-flag-cleanup-before-an-outsourced-release",
      "where-does-review-time-accumulate-in-a-distributed-engineering-team"
    ]
  },
  {
    "slug": "how-often-do-offshore-test-environments-contain-production-personal-data",
    "title": "How often do offshore test environments contain production personal data?",
    "excerpt": "A measurement protocol for detecting production personal data in offshore test environments, with sampling, masking evidence, and ethical limits.",
    "topic": "Test-data privacy",
    "published": "2026-11-06",
    "hero": "/nov06/research/how-often-do-offshore-test-environments-contain-production-personal-data.webp",
    "body": [
      "This protocol asks how often offshore test environments contain production personal data. The unit is one environment snapshot, identified by the environment, the dataset, and the observation date. The study measures whether personal data is present, whether it is masked, whether an owner approved the dataset, and whether the data is past its retention date. It does not evaluate the security of the application that produced the data.",
      "Set the scope to one organization, one test environment, and one data classification scheme. Record the systems that copy data into the environment, the masking tools, and the retention policy at the start. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new masking tool can look like an improvement when it is only a different process.",
      "Define the population as every dataset that is present in the test environment during the observation window, including datasets that are not currently used by a test. The unit is the dataset, not the table, because one load can create several related tables. A dataset refreshed from the same source is a new unit with a new creation time. A backup of the same dataset is a separate unit.",
      "Record the data source, the owner, the creation date, the retention date, and the masking method. These strata matter because a synthetic dataset and a raw production extract carry different risk. Include datasets with no owner, because the absence is part of the finding. Test the unit definition on two ordinary environments before collection begins. Use one classification label per dataset.",
      "Define personal data as information that can identify a living person directly or in combination with other records. Define production personal data as personal data copied from a production system or a customer export. Define masked as a state in which direct identifiers are replaced and the re-identification risk has been reviewed. Define approved as a dataset with an owner, a purpose, and a retention date recorded before the load.",
      "Do not count a synthetic record that resembles a real person as production personal data without evidence that it came from production. Do not count an email address in a test fixture that belongs to the test team. A dataset with a masking label but no rule or review is not automatically masked. Each definition should include one positive example and one boundary example.",
      "For each dataset, capture the environment, source, owner, creation date, retention date, masking method, and row count. Add the field categories that contain personal data and the evidence that masking was applied. Record whether the dataset is used by an active test. Keep the evidence in a restricted store rather than in the general test documentation. Store the packet in the restricted evidence store.",
      "Also capture the access list and the last access date. These fields help explain a dataset that is old but still reachable by a broad group. If the access list comes from a group rather than a named user, record the group owner. A second reviewer should be able to classify the dataset without opening the raw personal records. Keep named users separate from group access.",
      "Draw the sample from the environment inventory and the data-loading system rather than from a list of known incidents. Record the export date, the filters, the row count, and the selection rule. Include datasets from every source and every owner so the result is not dominated by one team. If the inventory is ordered by creation date, include every dataset in the window.",
      "Collect the dataset metadata as it existed at the observation date, not as it looks after a later cleanup. If a dataset was deleted during the study, record the deletion date and the evidence. Do not inspect raw personal records to prove a point when metadata can answer the question. Note the collection date separately from the load date so the reader can see the age distribution.",
      "A useful additional measure is the share of datasets whose masking rule was applied by an automated job and verified by a second person. A manual masking step can be correct, but it is harder to reproduce. Show the method beside the approval status. That view helps the owner decide whether the gap is in tooling, review, or the data request process.",
      "Report the number of datasets, the share with production personal data, the share that is masked, and the share with a current approval. Show the counts by source, owner, and environment. Present the median age and the number of datasets past their retention date. Use the same denominator for every rate and show the number of datasets with incomplete metadata.",
      "Inspect the findings and describe the pattern without naming individuals or exposing records. A cluster in one source may point to a copy job that bypasses the masking tool, while a cluster in one owner may point to a missing request process. Compare the result with the retention date and the access list. Report synthetic datasets separately so they do not distort the rate.",
      "A useful additional view is the number of people who can restore a backup of the test environment. A dataset can be deleted from the live database and still be reachable through a snapshot. Show the restore access beside the live access. That view helps the owner decide whether the retention rule covers the backup path as well as the primary store.",
      "The review should separate a policy gap from a tooling gap. A team that knows the rule but cannot mask a nested document needs a better tool, while a team that copies data because the request takes too long needs a faster approved path. Record the reason for each finding. That split prevents the same problem from returning after a training session.",
      "The record cannot prove that a dataset contains no personal data just because no identifier field was found. Free-text notes, file attachments, and combined fields can hide personal information. It also cannot prove that a masked dataset is safe without a re-identification review. The protocol measures presence and evidence, not the probability of harm. It measures evidence, not the chance of harm.",
      "Environment inventories can omit datasets created by an engineer outside the approved pipeline. A local copy, a downloaded export, or a vendor sandbox may never appear in the inventory. Record those gaps and their treatment instead of dropping them silently. If the person who loaded the data also approved it, note the independence limitation. Ask the platform owner to confirm the list.",
      "A useful check is whether the environment can be rebuilt from synthetic data without losing the test coverage that made the production copy attractive. Ask the test owner which cases require realistic volume or edge distributions. That answer shows whether the copy is necessary or merely convenient. The finding should inform the data request process, not just the cleanup list.",
      "Give the result to the data owner and the engineering lead and ask them to choose one observable change. The change might be a pre-load approval, an automated masking job, a shorter retention default, a restore-access review, or a synthetic-data path for common tests. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the tool and the policy at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If production data fell but unapproved synthetic data rose, the team may be avoiding the request process rather than improving privacy. If approvals improved but retention did not, the deletion job may be the real gap. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "The final view is the customer promise attached to the data. A privacy notice or contract may limit where personal data can be processed and who can access it. Record the relevant promise and the environment location. That context helps the owner decide whether a finding is a policy breach, a control gap, or both. Record the next review date with the sample."
    ],
    "sources": [
      [
        "NIST Privacy Framework",
        "https://www.nist.gov/privacy-framework"
      ],
      [
        "FTC, protecting personal information",
        "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "set-a-data-retention-rule-for-outsourced-test-environments",
      "what-share-of-outsourced-qa-defects-are-reopened-after-a-fix"
    ]
  }
];
