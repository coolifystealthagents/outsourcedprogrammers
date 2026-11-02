// "heading": "Research sections"
import type { ResearchPost } from './fleet-content';

export const november2ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "outsourcedprogrammers-review-evidence-sufficiency-research",
    "title": "How much review evidence does an outsourced pull request need?",
    "excerpt": "A study protocol for judging whether a pull request review packet contains enough evidence to support a merge decision, without treating volume as quality.",
    "topic": "Review evidence sufficiency",
    "body": [
      "## Question and scope\n\nThis protocol asks a narrow question: when a client reviewer approves an outsourced pull request, can a second reviewer reconstruct the basis for that decision from the recorded packet? The study examines the review record and the linked artifacts, not the reviewer's competence, the product outcome, or whether the code was elegant. A packet may be complete and still contain a poor decision; the protocol is designed to detect missing or unusable evidence, not to certify judgment.\n\nSet the scope to one repository, one work stream, and a fixed observation window. Record the review workflow version, the required checks, and the branch rules in force at the start. If the team changes its review template during the window, either keep the earlier definition for the full sample or treat the change as a separate period. Mixing two definitions makes a change in evidence practice look like a change in reviewer behavior.",
      "## Population and unit\n\nDefine the unit as one pull request that reached a merge or reject decision inside the window. A pull request with several commits remains one unit unless the team explicitly reopened it under a new requirement. Record drafts, abandoned branches, and review-only experiments as outside the population, with counts and reasons. If a pull request is reopened after a revert, count the original and the reopened review separately only when the second decision has its own review record.\n\nUse the pull request number plus repository as the stable key. Record the authoring organization, reviewer role, changed-file count, and whether the change touched a high-risk area such as authentication, payments, migrations, or deployment configuration. These strata matter because a documentation-only pull request and a permission change should not be judged against the same evidence standard. The unit definition should be testable on one ordinary and one high-risk example before collection begins.",
      "## Evidence fields\n\nBuild a field list from the decision the reviewer had to make. The packet should identify the linked ticket, the reviewed commit, the changed surface, the checks that ran, the checks that did not run, the observed results, and the named approver. A usable record also says what was assumed and what remains unverified. These fields can be present but empty, so code each one as present-and-usable, present-but-empty, missing, or not applicable.\n\nAvoid collapsing a missing screenshot, a failed test, and a test that was never attempted into one negative category. The reviewer needs to know whether the evidence shows a problem or simply does not exist. For each field, record the source location such as a pull request description, a check run, an attachment, or a linked issue. If the evidence lives only in a chat thread that will expire, mark it as fragile and note the retention limit.\n\nA second coder should be able to classify the same packet without asking the author what they meant. Pilot the field list on three pull requests, compare classifications, and rewrite any field that produces disagreement. The final dictionary should include one positive example and one boundary example for each code.",
      "## Sampling and collection\n\nDraw the sample from the repository's review export, not from a list of memorable pull requests. Record the export date, the filter, the row count, and the random or systematic start rule. If the population is ordered by merge time, a fixed interval can spread the sample across the window. Include merged and rejected decisions, because a rejected pull request can reveal whether the review recorded a reason or simply ended without explanation.\n\nCollect the packet from the repository and the systems it links to, then stop at the recorded decision. Do not reconstruct evidence that was never captured at the time, because later reconstruction measures the investigator's effort rather than the original review. If a linked attachment has expired, record the expiry as a finding and preserve the link metadata. Note the collection date separately from the review date so the reader can see how much of the record has aged.\n\nUse a short pilot to estimate how long each packet takes to classify. If the sample cannot be completed in the available review window, reduce the scope to one work stream rather than cutting corners on the fields. A smaller complete sample is more useful than a large sample with inconsistent coding.",
      "## Analysis and reporting\n\nReport the count of pull requests by stratum, the share with a usable ticket link, the share with a reviewed commit, and the share with a result for each required check. Present missing, blocked, and failed evidence separately. A rate should always include its numerator, denominator, and observation window. If the team wants a simple headline, choose the field most likely to change a merge decision and report it beside the overall packet completeness.\n\nDo not rank reviewers by the number of comments or the speed of approval. Those measures reward volume and speed, not evidence. Compare packets within the same risk stratum and inspect the cases that lack a required field. A high completeness rate on low-risk documentation changes does not tell you whether high-risk changes are adequately reviewed.\n\nWhere the data permits, show the distribution of packet completeness rather than only an average. A team with most packets complete and a small tail of missing evidence has a different problem from a team with uniformly thin records. Describe the tail cases and the reason they were difficult to document, then propose one process change that could address that reason.",
      "## Limitations\n\nThe review record cannot show whether the reviewer actually read the material or understood the risk. It can show only what was available to a later reader. A complete packet may coexist with a bad decision, and an incomplete packet may accompany a sound one. The study should state that distinction plainly rather than implying that documentation equals quality.\n\nRepository exports can omit review comments, force-pushed commits, deleted branches, and attachments that expired before collection. A pull request that was approved before the window but merged inside it may belong to a different process version. Record those cases and their treatment instead of silently dropping them. If the reviewer and the author are the same person, note the independence limitation and analyze that subgroup separately.\n\nPublic guidance on secure development and code review describes practices, not a benchmark for this repository. The protocol therefore produces a local description, not an industry score. Any comparison across teams should be presented as a prompt for inspection, not proof that one team is better.",
      "## Review and next action\n\nGive the result to the people who own the review workflow and ask them to select one change: add a required field to the template, link the reviewed commit automatically, retain attachments longer, or split high-risk changes into a separate review path. Choose a change that can be observed in the next sample. Record the owner, the effective date, and the measure that will show whether the packet improved.\n\nRepeat the protocol with the same definitions and window after the change. Compare the same fields, not a new dashboard that happens to look better. If the change did not move the result, report that honestly and inspect whether the field was ignored, the template was bypassed, or the underlying workflow made the evidence hard to capture. Close the review when the owner accepts the finding and the next check is scheduled."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub Docs: About pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "Google Engineering Practices: Code Review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "DORA research program",
        "https://dora.dev/research/"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/"
      ]
    ],
    "published": "2026-11-02",
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "campaignDate": "2026-11-02",
    "sourceDate": "2026-11-02",
    "related": [
      "outsourcedprogrammers-review-comment-sampling-research",
      "outsourcedprogrammers-maintenance-rework-measurement-research"
    ],
    "hero": "/nov02/research/outsourcedprogrammers-review-evidence-sufficiency-research.webp"
  },
  {
    "slug": "outsourcedprogrammers-review-comment-sampling-research",
    "title": "Sampling review comments for repeated defect patterns",
    "excerpt": "A method for turning pull request review comments into a small, reproducible sample of recurring defect patterns instead of a pile of anecdotal feedback.",
    "topic": "Review comment patterns",
    "body": [
      "## Question and scope\n\nThis study asks which kinds of defect or risk recur in review comments on outsourced pull requests, and whether those patterns point to a fixable gap in the brief, the test suite, or the review checklist. It examines written review comments and their linked code context. It does not measure reviewer diligence, developer skill, or the number of comments per person. A reviewer who writes one decisive comment may be more effective than one who writes twenty stylistic notes.\n\nDefine the work stream and the review period before collection. Record the repository, the types of changes included, and the review workflow version. Exclude comments that are purely social, scheduling-related, or generated by a bot unless the study separately asks about automation. If the team changes its review rubric during the window, keep the earlier classification for the sampled period so the pattern count reflects one process.",
      "## Population and unit\n\nThe unit is one review thread attached to a specific code location or pull request discussion. A thread with several replies remains one unit, with the final resolution recorded separately. A single comment that raises two unrelated defects should be split into two coded findings only when the code context and resolution clearly separate them. Record the pull request, file, line or hunk, author, reviewer, and whether the thread blocked merge.\n\nDecide in advance how to treat duplicate comments on the same issue across files. Count the issue once at the pull request level and keep the related threads as evidence, rather than inflating the pattern count. If the same underlying problem appears in three pull requests, keep three pull request-level findings and note the recurrence. That distinction preserves both prevalence and repetition without double-counting a single conversation.",
      "## Taxonomy and coding\n\nStart with a small taxonomy: correctness, security or privacy, data integrity, test coverage, operability, performance, accessibility, maintainability, and documentation. Add a separate flag for questions, preferences, and blocking versus non-blocking comments. A comment can carry more than one code only when the reviewer explicitly raises more than one risk; otherwise choose the code that best matches the action requested.\n\nWrite one example and one non-example for each category. For example, a missing null check can be correctness, while an unvalidated permission check is security. A request to rename a variable is maintainability unless the name exposes a secret or changes a public contract. Reviewers and coders should pilot the taxonomy on a small batch and reconcile disagreements before coding the full sample.\n\nRecord the resolution: changed, explained, deferred, disputed, or unresolved at merge. A pattern of deferred security comments is different from a pattern of corrected test gaps. The resolution field lets the analysis distinguish detection from follow-through. If the thread was resolved in a separate pull request, link that follow-up instead of marking it closed by default.",
      "## Sampling and collection\n\nExport the review comments by date and pull request, then sample pull requests before sampling comments. This two-stage approach prevents one long review with dozens of comments from dominating the result. Stratify by risk area and by authoring organization if the program has more than one supplier. Use a random start within each stratum and record the export date, filter, and row count.\n\nCollect the comment text, the code context, the thread resolution, and the pull request metadata in one row per unit. Remove or mask personal information and customer data before analysis. If a comment references an external ticket or a private document, record the reference and access status rather than copying the content. Note whether the comment was edited after the review, because an edited thread may not reflect what the author originally saw.\n\nPilot the collection form on five pull requests and time it. If a category produces frequent disagreement, simplify it before scaling. Keep a change log for every taxonomy adjustment and the date it took effect. A later reader should be able to tell whether a pattern reflects the code, the review practice, or a change in how the team labeled comments.",
      "## Analysis and reporting\n\nReport the number of pull requests, threads, and distinct findings at each stage. Show the share of findings by category, the share that blocked merge, and the share that were unresolved at merge. Include the number of pull requests that had no comments at all, because a low comment count can mean a clean change or a review that did not happen. Pair every percentage with its denominator and the observation window.\n\nLook for repeated patterns within the same risk stratum. A cluster of missing authorization checks in one module is more actionable than a general statement that security comments are common. Select two or three examples that show the pattern without exposing customer data, and describe the context that made the issue easy to miss. Avoid turning a pattern into a claim about a person or a supplier.\n\nIf the team wants to compare periods, first check whether the change mix, review rubric, or author population changed. A decline in comments after a checklist update may mean fewer defects, fewer reviewers, or a quieter review culture. Present the comparison as a reason to inspect, not as proof that the change caused the difference.",
      "## Limitations\n\nWritten comments are an incomplete trace of a review. Reviewers may discuss an issue in a call, fix it directly, or decide not to comment because the author already knows the context. A study of comments therefore undercounts some findings and overrepresents issues that are easy to express in text. State this limitation before reporting a pattern.\n\nComment volume can be influenced by reviewer style, pull request size, and the team's norm about blocking versus suggesting. A large pull request generates more opportunities for comment without necessarily containing more defects per changed line. If changed lines are available, report them as context, but do not treat a comment-to-line ratio as a quality score.\n\nThe cited review and secure-development guidance describes practices, not a local benchmark. The study can show what this team recorded and where the record is thin. It cannot prove that an unrecorded issue did not occur, and it should not be used to rank individual reviewers without additional evidence.",
      "## Review and next action\n\nChoose one action tied to the strongest repeated pattern: clarify a requirement in the ticket template, add a test to the acceptance checklist, split a risky change type into its own review path, or add a short review prompt for a specific failure mode. Name the owner and the date the change starts. Pick one measure that should move and one guardrail that should not get worse, such as review turnaround or the number of reopened threads.\n\nRepeat the sample after the change with the same taxonomy and a comparable window. Report what changed, what stayed the same, and what remains uncertain. If a pattern persists, inspect whether the new prompt is being used or whether the underlying code or brief still creates the same ambiguity. End with a decision, not a recommendation to keep watching."
    ],
    "sources": [
      [
        "Google Engineering Practices: Code Review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "GitHub Docs: About pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "ISO/IEC/IEEE 29119-3 software testing",
        "https://www.iso.org/standard/45142.html"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "published": "2026-11-02",
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "campaignDate": "2026-11-02",
    "sourceDate": "2026-11-02",
    "related": [
      "outsourcedprogrammers-maintenance-rework-measurement-research",
      "outsourcedprogrammers-test-evidence-escaped-defects-research"
    ],
    "hero": "/nov02/research/outsourcedprogrammers-review-comment-sampling-research.webp"
  },
  {
    "slug": "outsourcedprogrammers-maintenance-rework-measurement-research",
    "title": "Measuring rework in an outsourced maintenance queue",
    "excerpt": "A protocol for counting reopened or repeated maintenance work without confusing a new requirement, a failed verification, and a genuinely unstable change.",
    "topic": "Maintenance rework",
    "body": [
      "## Question and scope\n\nThis protocol asks how often completed maintenance work requires correction or repeat effort within a fixed follow-up window, and what the record shows about the reason. The unit is a maintenance ticket or change that was accepted as complete. The study is about the stability of the delivered outcome and the clarity of the handoff, not about individual developer speed or the number of story points completed.\n\nSet the observation window before looking at the data. A fourteen-day window may fit a fast-moving web application but miss a monthly batch process. Choose the window based on how quickly the affected behavior would normally be exercised, and apply the same window to every ticket in the sample. Record the cutoff time and the date of the final follow-up check so a later reader can reproduce the count.",
      "## Population and unit\n\nUse the completed ticket as the primary unit. A ticket that is reopened keeps the same key and adds a rework event; a new ticket for the same underlying problem is linked to the original rather than counted as an unrelated success. If one ticket produces several follow-up changes, count the rework event once per distinct acceptance failure and retain the linked tickets as evidence. The unit definition should be piloted on a case that was reopened, a case that received a new requirement, and a case that failed only because the deployment environment was wrong.\n\nInclude tickets completed by the outsourced team and by the client team when the same queue and acceptance standard apply. If the two groups use different definitions of done, report them separately. Record the work type, risk class, reviewer, and whether the ticket touched shared infrastructure or a customer-facing path. These fields help explain a difference without turning the rate into a league table.\n\nExclude a ticket only with a recorded reason, such as duplicate, cancelled before work, or completed outside the study window. Do not remove a difficult case because its follow-up is hard to classify. A high exclusion count is itself a finding about the queue or the record.",
      "## Rework definition\n\nRework exists when the accepted outcome does not hold and the team must change the same behavior again within the follow-up window. Typical events include reopening the original ticket, a linked corrective ticket, a revert, a hotfix, or a follow-up pull request that changes the same acceptance condition. A new feature request, a changed business rule, or a cosmetic preference is not rework unless the original acceptance standard already required the behavior.\n\nClassify the reason using a short list: incomplete requirement, implementation defect, test gap, environment or deployment mismatch, data problem, dependency change, or unclear ownership. Add a separate flag for whether the original reviewer could have detected the issue with the evidence available. That flag is not a blame measure; it helps distinguish a review gap from a requirement that changed after approval.\n\nRecord the time from completion to the rework event. A correction on the same day and a correction three weeks later may have different causes. If the follow-up window extends beyond the available data, mark the ticket as censored rather than assuming it was stable. Censoring is especially important for slow-moving maintenance queues where a defect may not be exercised during the study.",
      "## Data collection\n\nJoin the ticket system, repository, release record, and incident log using a stable ticket key. For each completed ticket, capture the completion time, the acceptance evidence, the reviewer, the linked pull request, the deployment identifier, and any follow-up event inside the window. If the systems use different identifiers, keep an approved crosswalk and record how it was built. Do not rely on title matching to connect a fix to a reopen.\n\nExtract the data at one point in time and record the extract date. Queue exports change as tickets are edited, so a later reader needs to know when the snapshot was taken. Preserve the original status and the later status instead of overwriting history. If a ticket was moved between projects or renamed, note the move and keep the original key.\n\nMask customer names and personal data before analysis. Store the evidence reference rather than a copy of sensitive ticket content. A small sample with reliable links is better than a large export that cannot be traced back to the acceptance decision.",
      "## Analysis and reporting\n\nReport the number of completed tickets, the number with a rework event, the number censored before the end of the window, and the number excluded. Present the rework count per hundred completed tickets with the window and the denominator. If the team needs a second view, show the median time to rework and the share of events that were detected by a customer rather than by the team.\n\nBreak the result down by work type and reason only when each group has enough cases to be interpretable. A rate based on three tickets can be a useful case study but not a stable estimate. Show the actual cases behind an unusual result and describe what happened. Compare periods only after checking whether the work mix, acceptance standard, or follow-up window changed.\n\nDo not describe a lower rework rate as proof of better quality until the team checks whether the follow-up window was long enough and whether difficult cases were excluded. A queue that closes tickets faster but receives fewer follow-up reports may simply have weaker detection. Pair the rework measure with a second signal, such as reopened defects, customer-reported issues, or the share of tickets with reproducible acceptance evidence.",
      "## Limitations\n\nA ticket that is never reopened may still have failed; the customer may have stopped reporting it, moved to another channel, or worked around the problem. The queue is a record of what was captured, not a complete census of product behavior. Rework can also be invisible when a developer fixes the issue in the same pull request before merge, or when a client team member makes a small correction without opening a ticket.\n\nDefinitions of done vary across teams and over time. A change in the ticket template, the reviewer, or the deployment process can move the rework rate without changing the underlying defect rate. The study should report those changes and avoid attributing the movement to a single cause. If the sample is small, present the case count and avoid percentage claims that imply precision.\n\nThe cited secure-development and delivery sources describe practices, not a local benchmark. The result is a description of this queue during this window. It should inform a review conversation, not become a performance rating for a supplier or an individual.",
      "## Review and next action\n\nPick one correction that matches the dominant reason: clarify acceptance evidence, add a missing regression check, fix a deployment step, or change the ownership of a recurring dependency. Assign an owner and a start date. Decide in advance which measure should improve and which guardrail should remain stable, such as review turnaround or the share of tickets completed without a follow-up.\n\nRe-run the protocol after the change with the same window and definitions. Inspect the cases again rather than relying only on the new rate. If the change did not work, report it and choose a different action. Close the review when the owner accepts the result and the next sample is scheduled."
    ],
    "sources": [
      [
        "DORA research program",
        "https://dora.dev/research/"
      ],
      [
        "GitHub Docs: About issues",
        "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "ISO/IEC/IEEE 29119-3 software testing",
        "https://www.iso.org/standard/45142.html"
      ],
      [
        "Google Engineering Practices: Code Review",
        "https://google.github.io/eng-practices/review/"
      ]
    ],
    "published": "2026-11-02",
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "campaignDate": "2026-11-02",
    "sourceDate": "2026-11-02",
    "related": [
      "outsourcedprogrammers-test-evidence-escaped-defects-research",
      "outsourcedprogrammers-offboarding-access-removal-research"
    ],
    "hero": "/nov02/research/outsourcedprogrammers-maintenance-rework-measurement-research.webp"
  },
  {
    "slug": "outsourcedprogrammers-test-evidence-escaped-defects-research",
    "title": "Testing whether test evidence predicts escaped defects",
    "excerpt": "A prospective study design for asking whether the quality of pull request test evidence is associated with defects found after release.",
    "topic": "Test evidence and escaped defects",
    "body": [
      "## Question and scope\n\nThis study asks whether the test evidence attached to a pull request is associated with defects discovered after the change reaches its intended environment. It is a local, prospective question. The study does not claim that a particular test practice prevents defects in every organization, and it does not reduce quality to a single metric. It looks for a pattern that can guide one bounded improvement in an outsourced delivery workflow.\n\nDefine the release boundary and the follow-up period before data collection. A release may be a production deployment, a customer-facing build, or a batch job run. The follow-up period should be long enough for the affected behavior to be exercised, but short enough that unrelated changes do not dominate the record. Record the start and end timestamps and apply them consistently to every release in the cohort.",
      "## Population and cohort\n\nBuild a cohort of changes that share a release path and a definition of done. Include changes from more than one contributor or supplier if the workflow is shared, but record the group so the analysis can show whether the pattern holds across them. Exclude emergency changes that bypassed the normal review path unless the study explicitly compares normal and emergency lanes. A mixed cohort can hide the effect of the process being studied.\n\nUse the pull request as the unit for evidence and the deployed change as the unit for defect follow-up. Link them with the reviewed commit and the deployment identifier. If one release contains several pull requests, keep the pull request evidence separate and attribute a later defect to the smallest change that could have caused it. If attribution is uncertain, record the uncertainty instead of forcing a single owner.\n\nThe cohort should be fixed at the start of follow-up. Do not add changes because they have unusually good or bad evidence. If a change is reverted before release, record it as excluded with a reason. If a release is delayed, keep it in the cohort and note the delay so the follow-up window still starts from the actual release time.",
      "## Evidence attributes\n\nCode test evidence with attributes that can be observed in the pull request: whether a failing check preceded the fix, whether the changed path has an automated test, whether the test asserts behavior rather than implementation detail, whether edge cases named in the ticket are covered, and whether the evidence identifies the environment and build. Add a flag for manual checks and a flag for known gaps. These attributes describe the packet, not the reviewer's opinion of the developer.\n\nDefine an escaped defect as a defect found after release that meets the team's severity threshold and can be linked to the released change or its immediate integration surface. Record the detection source, the time to detection, the customer impact, and whether the defect was caught by monitoring, support, a later test, or a user report. A defect found in a pre-release smoke test is not an escape; keep it in a separate category so the two events are not conflated.\n\nUse a data dictionary with examples and train the coders on the same small pilot. If two coders disagree about whether a test asserts behavior, simplify the field or keep both classifications until the definition is resolved. The goal is a reproducible description of the evidence, not a perfect ontology.",
      "## Collection and linkage\n\nCollect the pull request evidence at merge time, before the release outcome is known. That ordering is what makes the study prospective. If evidence is coded after defects are discovered, the coder may unconsciously look for weaknesses in the packets that failed. Store the coded evidence with the merge timestamp and a hash or link to the reviewed commit so it cannot be silently replaced.\n\nFollow the release through the observation window using the deployment log, incident system, support queue, and defect tracker. Record every candidate event, then apply the escaped-defect definition. Do not count the same defect twice because it appears in two channels. Keep the source links and the detection time for each event. If a defect cannot be attributed to a specific change, record it against the release and explain the attribution limit.\n\nMask customer data and keep the analysis table separate from the raw evidence. Record the extract dates for both the pull request data and the defect data. A later reader should be able to see which records were available at each stage and which were added after the window closed.",
      "## Analysis and reporting\n\nStart with descriptive counts: releases, pull requests, evidence attributes, candidate defects, confirmed escapes, and exclusions. Report the escape rate per release and per pull request only when the denominator is meaningful. Show the evidence attributes by escape status, but avoid presenting a strong causal claim from a small sample. If the cohort is small, use case pairs and describe the pattern without a false precision.\n\nCheck obvious confounders before interpreting the association: change size, risk area, contributor group, reviewer, release type, and the amount of traffic or usage during the follow-up. A well-tested change in a low-traffic area may have fewer detected defects simply because fewer people used it. A high-risk area may attract more testing and more reporting at the same time.\n\nIf the team wants a comparison, use the same observation window and the same defect definition for both periods. Report what changed in the workflow and what did not. Do not call an association a cause. The useful conclusion is usually narrower: in this cohort, packets with a reproducible failing check and an explicit edge-case test were less often followed by a confirmed escape, or they were not, and the next step is to test one change.",
      "## Limitations\n\nThe study can miss defects that are never reported or that appear after the follow-up window. It can also overcount a defect that is attributed to the wrong change in a large release. Detection intensity varies by channel, customer, and season, so the measured escape rate is partly a measure of watching as well as of product quality. A quiet period is not proof that no defect exists.\n\nThe evidence attributes are proxies. A test that looks behavior-focused may still be weak, and a manual check may be stronger than its label suggests. The coder's judgment is part of the instrument. Report inter-coder agreement or a second review for a subsample, and preserve the original evidence so a later reviewer can challenge the classification.\n\nPublic secure-development and testing guidance supports the general practices, not a local effect size. This protocol produces evidence for one team's decision. It should not be used to certify a supplier, rank an individual, or claim an industry benchmark.",
      "## Review and next action\n\nShare the result with the engineering owner and the quality lead, then choose one test-evidence change to trial: require a failing check for bug fixes, add an edge-case field to the pull request template, or review one high-risk path with a second tester. Define the expected movement and the guardrail before the trial. The guardrail might be review turnaround, test runtime, or the share of changes that ship without a manual check.\n\nRun the cohort again after the change with the same definitions. Compare the evidence attributes first, then the escape outcome. If the trial did not work, report it and stop or redesign it. The value of the study is a better decision about one practice, not a permanent dashboard that nobody uses."
    ],
    "sources": [
      [
        "DORA research program",
        "https://dora.dev/research/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "ISO/IEC/IEEE 29119-3 software testing",
        "https://www.iso.org/standard/45142.html"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "Google Engineering Practices: Code Review",
        "https://google.github.io/eng-practices/review/"
      ]
    ],
    "published": "2026-11-02",
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "campaignDate": "2026-11-02",
    "sourceDate": "2026-11-02",
    "related": [
      "outsourcedprogrammers-offboarding-access-removal-research",
      "outsourcedprogrammers-review-evidence-sufficiency-research"
    ],
    "hero": "/nov02/research/outsourcedprogrammers-test-evidence-escaped-defects-research.webp"
  },
  {
    "slug": "outsourcedprogrammers-offboarding-access-removal-research",
    "title": "Auditing access removal after contractor offboarding",
    "excerpt": "A protocol for checking whether an outsourced contributor's repository, cloud, and support access was removed when the engagement ended.",
    "topic": "Contractor access removal",
    "body": [
      "## Question and scope\n\nThis protocol asks whether access granted to an outsourced contributor was removed after the engagement ended, and how long the removal took. It covers repository access, cloud roles, support tools, package registries, deployment systems, and credentials that can act on the client's behalf. The study examines the access record and the offboarding evidence; it does not evaluate the person's conduct or the quality of their work.\n\nSet the scope to one engagement type and one observation window. An individual contractor, a supplier team, and a staff-augmentation seat have different account models, so mixing them without strata can hide a systemic gap. Record the systems in scope, the identity provider, and the person responsible for each system. If a system is outside the team's control, mark it as dependent rather than pretending the audit covered it.",
      "## Population and unit\n\nThe unit is one offboarded person-system relationship, not one person and not one ticket. A contributor with repository access, a cloud role, and a support seat produces three units, each with its own removal evidence. This granularity prevents a single closed ticket from making every access path look complete. Link the units with a stable engagement identifier while keeping the system-specific status separate.\n\nDefine the effective end time from the contract, the manager's instruction, or the supplier's notification, whichever the policy uses. Record the date the access was actually removed and the date the removal was verified. If the person never had access to a system, record not applicable rather than a pass. A blank cell should not be treated as evidence that access was absent.",
      "## Access inventory\n\nBuild the inventory from authoritative sources: the identity provider's group membership, the repository's collaborator list, cloud role assignments, the support platform's agent list, package registry owners, and deployment system users. Do not rely only on the onboarding ticket, because access may have been granted later through a group or an integration. Check personal accounts, shared service accounts, personal access tokens, SSH keys, deploy keys, and OAuth applications that can act without an interactive login.\n\nFor each system, record the account identifier, the access level, how it was granted, and the authoritative source used to verify removal. A group membership removal is not the same as deleting a direct collaborator; the audit should check both. A token owned by the person but used by a pipeline is still a credential that needs an owner and a rotation decision.\n\nKeep the inventory in an approved system with restricted access. Do not copy secrets or full token values into the audit record. A hash, a token identifier, and the revocation time are enough to support the finding without creating a new exposure.",
      "## Offboarding record\n\nA useful offboarding record names the person, the engagement, the effective end time, the systems covered, the person who performed each removal, and the verification method. It should also name the backup owner for each system so a single unavailable administrator does not leave access in place. If the supplier is responsible for removing access, the client still needs a verification step and a named client owner for the residual risk.\n\nSeparate the request from the evidence. A ticket that says access was removed is a claim; a screenshot of the collaborator list after removal, a role assignment export, or an identity provider log is evidence. For systems that cannot produce an export, record a manual check with the reviewer and the time. The record should let a later auditor repeat the check, not just read that someone else did it.\n\nInclude the handover of client-owned artifacts: repositories, documents, design files, package ownership, and any credentials shared during the engagement. Access removal is incomplete if the former contributor remains the owner of a package, a domain, or an integration that the client depends on. That ownership is a separate finding with a separate remediation path.",
      "## Measurement and analysis\n\nMeasure removal time from the effective end of access to the verified removal timestamp. Report the median and the distribution by system, along with the count still open at the audit date. A single average can hide a long tail in one critical system, so show the systems with the slowest removal and the reason. If the policy allows a grace period, state it and measure against that rule rather than against zero.\n\nReport residual access by system, access level, and whether the account was interactive or non-interactive. A former contributor with read access to a public repository is a different risk from one with an active deploy key or an organization owner role. Do not collapse those into one count. If a token was rotated rather than deleted, record the rotation and the new owner.\n\nCompare engagements only when the account model and the offboarding process are similar. A difference in removal time may reflect the system's tooling, the supplier's cooperation, or the client's verification practice. Inspect the cases behind the difference before proposing a cause. The purpose is to find the system that needs a better removal path, not to rank people.",
      "## Limitations\n\nAn audit can verify only the systems in its inventory. Access through a personal cloud account, a locally stored token, or a vendor portal outside the identity provider may be invisible. A clean repository export does not prove that a copied credential is unusable. The study should state which systems were not observable and what evidence would be needed to close that gap.\n\nThe effective end time may be ambiguous when a contract ends on a weekend, a notice period is disputed, or a supplier reassigns the person to another client. Record the interpretation and apply it consistently. If the removal was performed before the formal end time, that is not necessarily a failure; note the reason and the authorization.\n\nPublic control frameworks describe access management and offboarding practices, not a local benchmark. The result is a description of this engagement sample. It should trigger remediation and a follow-up check, not a claim that the organization is secure or insecure in general.",
      "## Review and next action\n\nPrioritize residual access that can change code, deploy software, read customer data, or administer identity. Assign an owner and a deadline for each. For a systemic gap, choose one change: add the system to the offboarding checklist, automate group removal, require a client verification step, or rotate shared credentials when a contributor leaves. Test the change on the next offboarding rather than waiting for the next annual audit.\n\nRepeat the protocol on a small sample after the change. Report the time to removal, the residual count, and the systems that still lack evidence. Close the review when the owner accepts the remaining risk and the next verification date is on the calendar. Keep the audit record with the engagement so a future reviewer can see what was checked and what was not."
    ],
    "sources": [
      [
        "NIST SP 800-53 Rev. 5",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      ],
      [
        "CISA Zero Trust Maturity Model",
        "https://www.cisa.gov/zero-trust-maturity-model"
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
        "GitHub Docs: Removing an outside collaborator",
        "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/removing-an-outside-collaborator-from-a-repository"
      ]
    ],
    "published": "2026-11-02",
    "datePublished": "2026-11-02",
    "dateModified": "2026-11-02",
    "campaignDate": "2026-11-02",
    "sourceDate": "2026-11-02",
    "related": [
      "outsourcedprogrammers-review-evidence-sufficiency-research",
      "outsourcedprogrammers-review-comment-sampling-research"
    ],
    "hero": "/nov02/research/outsourcedprogrammers-offboarding-access-removal-research.webp"
  }
];
