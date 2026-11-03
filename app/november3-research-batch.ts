// "heading": "Research sections"
import type { ResearchPost } from './fleet-content';

export const november3ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "outsourced-pr-scope-drift-research",
    "title": "How often do outsourced pull requests change files outside the ticket?",
    "excerpt": "A measurement protocol for comparing changed files with authorized ticket scope, including review detection and high-risk file categories.",
    "topic": "Pull request scope drift",
    "body": [
      "## Research question and scope",
      "This protocol asks how often an outsourced pull request changes files that the linked ticket did not authorize. The unit is one merged or rejected pull request inside a defined window. The study examines the diff, the ticket, and the review record; it does not evaluate the programmer, the reviewer, or whether the change was technically good. A small out-of-scope edit can be harmless, while a large in-scope edit can still be risky.",
      "Set the scope to one repository, one work stream, and one review workflow version. Record the branch rules, required checks, and ticket template in force at the start. If the team changes its review process during the window, keep the earlier definition for the full sample or analyze the change as a separate period. Record the result against the research question and scope evidence before the case is closed.",
      "## Population and unit",
      "Define the population as pull requests that reached a merge or reject decision in the window. Exclude drafts and abandoned branches, but record their count. A pull request with several commits remains one unit unless the team reopened it under a new requirement. Use the repository and pull request number as the stable key.",
      "Record the authoring organization, reviewer role, changed-file count, and whether the change touched a high-risk area such as authentication, payments, migrations, or deployment configuration. These strata matter because a documentation pull request and a permission change should not be judged against the same scope standard. That check belongs in the population and unit note, with the owner and the next action visible. The same strata should be applied in the next sample so the comparison remains meaningful.",
      "## Definitions that make the measure reproducible",
      "Define the authorized scope as the files, modules, or surfaces named in the linked ticket. Define an out-of-scope file as one that the ticket does not name and that a reviewer cannot reasonably infer as required. Define a review flag as a comment or recorded decision that notices the extra file before merge. Each definition needs a positive example and a boundary example.",
      "Do not treat every formatting change as out of scope if the repository enforces formatting on changed files. Do not treat a generated lockfile as unauthorized if the ticket requires a dependency change. The data dictionary should distinguish necessary side effects from unrelated work, and a second coder should be able to apply the same rule. The definitions that make the measure reproducible record should be dated and linked so a second reviewer can reproduce the result.",
      "## Evidence and data dictionary",
      "For each pull request, capture the ticket link, the reviewed commit, the changed files, the review comments, and the final merge decision. Record the file category, the risk area, and whether the file was named in the ticket. Code the evidence as present and usable, present but ambiguous, missing, or not applicable. Record the result against the evidence and data dictionary evidence before the case is closed.",
      "Add a field for the reviewer response: accepted with a note, split into another branch, removed, or merged without comment. Also record whether the extra file changed after approval. That field matters because a later push can alter the approved scope without a new review. The evidence and data dictionary owner should confirm this at the next review.",
      "## Sampling and collection",
      "Draw the sample from the repository review export rather than from a list of memorable pull requests. Record the export date, filter, row count, and selection rule. Include merged and rejected decisions, because a rejected request can show whether scope was noticed before closure. If the repository is ordered by merge time, a fixed interval spreads the sample across the window.",
      "Collect the evidence from the systems that existed at review time. Do not reconstruct a missing review comment later. If a branch was deleted, note the limitation and use the merge diff if it is still available. Record the collection date separately from the review date.",
      "## Analysis and reporting",
      "Report the share of pull requests with at least one out-of-scope file, the categories of those files, and the share where the reviewer noticed the change. Present merged and rejected requests separately, and show the numerator and denominator for every rate. A single percentage without the categories does not tell the owner what to fix. The analysis and reporting record should be dated and linked so a second reviewer can reproduce the result.",
      "Inspect the cases that changed high-risk files without a ticket reference. Describe the specific file and the decision, not the person. If the same category recurs, the ticket template or the review checklist may need a new required field. Avoid ranking authors by scope count without adjusting for the size and type of work.",
      "## Limitations",
      "The protocol cannot show whether an out-of-scope change was beneficial or whether the reviewer understood it. It can show only whether the record linked the file to the authorized work. A complete ticket can still accompany a poor change, and an incomplete one can accompany a harmless cleanup. State that distinction in the report.",
      "Repository exports can omit force-pushed commits, deleted branches, and comments that were edited. A ticket may also be updated after the review to include a file that was originally out of scope. Record the ticket version used and note any later changes. If the reviewer and author are the same person, analyze that subgroup separately.",
      "## Review cadence and next action",
      "Ask the review owner to choose one observable change: require a file inventory in the ticket, add a scope check to the pull request template, or split high-risk changes into a separate review path. Record the owner and the effective date. Choose a change that can be measured in the next sample. Record the result against the review cadence and next action evidence before the case is closed.",
      "Repeat the protocol with the same definitions and compare the same fields. If scope findings fall but review time rises, decide whether the trade-off is acceptable. Close the review when the owner accepts the finding and the next check is scheduled. The review cadence and next action owner should confirm this at the next review.",
      "## How to present a scope finding",
      "Present the finding as a file-category table with the ticket reference, the reviewed commit, and the reviewer response. Use counts rather than a vague description, and show the high-risk categories separately. The owner should be able to see whether the problem is a stray formatting file or an unreviewed permission change. That check belongs in the how to present a scope finding note, with the owner and the next action visible.",
      "If the same author appears repeatedly, do not turn the report into a performance ranking. Describe the pattern in the process and ask whether the ticket template or the review checklist is failing. A scope problem is usually a system problem before it is a people problem. Record the result against the how to present a scope finding evidence before the case is closed.",
      "## Choosing the next sample",
      "The next sample should use the same window and strata so the comparison is meaningful. If the team changes its template, collect a fresh baseline rather than mixing old and new definitions. Record the change date and the number of pull requests affected by it. The choosing the next sample record should be dated and linked so a second reviewer can reproduce the result.",
      "Expand the sample only when the decision requires more precision. A small sample that is complete and well coded is more useful than a large sample with inconsistent categories. The owner should know what the next sample can and cannot answer. That check belongs in the choosing the next sample note, with the owner and the next action visible.",
      "## Keeping the review usable",
      "A scope check should not become a second approval layer for every file. Add it where the consequence is high, such as authentication, payments, migrations, and deployment configuration. For low-risk work, a lightweight ticket reference may be enough. The keeping the review usable owner should confirm this at the next review.",
      "The rule should be written where contributors can see it before they open the pull request. The reviewer can then focus on the exceptions rather than repeating the same explanation. A usable rule is better than a perfect rule that is ignored. The keeping the review usable record should be dated and linked so a second reviewer can reproduce the result.",
      "## A short reporting template",
      "Use a one-page template: observation window, repository, number of pull requests, share with out-of-scope files, high-risk categories, reviewer response, and the chosen next action. Keep the definitions beside the numbers so the reader does not have to guess what counted as out of scope. The template should be stable enough to compare across two samples. Record the result against the a short reporting template evidence before the case is closed.",
      "Add a short limitations section and a list of the systems that could not be checked. If a category has fewer than five cases, show the count and describe the cases instead of presenting a percentage. The owner can still act on a clear pattern without a misleading rate. The a short reporting template owner should confirm this at the next review.",
      "End with the owner, the change, and the date of the next sample. A report without a next action becomes an archive. The follow-up should be small enough to observe and specific enough that a different reviewer could verify it. The a short reporting template record should be dated and linked so a second reviewer can reproduce the result."
    ],
    "sources": [
      [
        "NIST SP 800-218",
        "https://csrc.nist.gov/pubs/sp/800/218/final"
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
        "SLSA specification",
        "https://slsa.dev/spec/"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ]
    ],
    "published": "2026-11-03",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "campaignDate": "2026-11-03",
    "sourceDate": "2026-11-03",
    "related": [
      "outsourced-rollback-readiness-research",
      "outsourced-code-review-incident-research"
    ],
    "hero": "/nov03/research/outsourced-pr-scope-drift-research.webp"
  },
  {
    "slug": "outsourced-rollback-readiness-research",
    "title": "How much rollback evidence does an outsourced release packet contain?",
    "excerpt": "A protocol for judging release rollback readiness, including rehearsal evidence, trigger ownership, and irreversible data steps.",
    "topic": "Release rollback readiness",
    "body": [
      "## Research question and scope",
      "This protocol asks whether a release packet contains enough evidence to judge rollback readiness before an outsourced change reaches production. The unit is one release or deployment that included a code or configuration change. The study examines the packet and the rehearsal record; it does not decide whether the release should have been approved. That check belongs in the research question and scope note, with the owner and the next action visible.",
      "Set the scope to one application, one deployment pipeline, and one release window. Record the rollback method, the database migration policy, and the feature-flag system in force at the start. If the team changes its release process during the window, keep the earlier definition for the full sample or analyze the change separately. Record the result against the research question and scope evidence before the case is closed.",
      "## Population and unit",
      "Define the population as releases that deployed a change to a shared environment during the window. Exclude pure documentation releases, but record them. A release with several changes remains one unit if it was approved and deployed as one packet. A hotfix that bypassed the normal packet is still in scope and should be analyzed separately.",
      "Record the change type, the affected service, the number of consumers, and whether the release included a database migration. These strata matter because a static content change and a payment-service change need different rollback evidence. Test the unit definition on one ordinary release and one hotfix before collection. That check belongs in the population and unit note, with the owner and the next action visible.",
      "## Definitions that make the measure reproducible",
      "Define rollback readiness as the condition where an authorized operator can restore the prior service state using recorded steps and verified artifacts. Define a complete packet as one containing the release version, the rollback steps, the data considerations, the decision owner, and the rehearsal result. A rollback script without an execution record is a plan, not evidence. The definitions that make the measure reproducible owner should confirm this at the next review.",
      "Distinguish code rollback from data recovery. A code revert may restore the application binary while leaving a migrated column or a backfilled row in place. The protocol should code each release for whether the data path is reversible, requires forward recovery, or cannot be restored without a backup. The definitions that make the measure reproducible record should be dated and linked so a second reviewer can reproduce the result.",
      "## Evidence and data dictionary",
      "For each release, capture the artifact version, the deployment target, the rollback command or procedure, the database state, the feature-flag state, and the named authority. Record whether the rollback was rehearsed, the environment used, the time to restore, and any checks that failed. Link the evidence rather than copying a summary. Record the result against the evidence and data dictionary evidence before the case is closed.",
      "Add a field for the condition that would trigger a rollback and the person who monitors it. A packet can contain a rollback procedure but no trigger, which leaves the team debating during an incident. Also record whether the release changed secrets, permissions, or external integrations, because those may need separate recovery steps. The evidence and data dictionary owner should confirm this at the next review.",
      "## Sampling and collection",
      "Draw the sample from the deployment system export, not from a list of releases the team remembers. Record the export date, filters, and selection rule. Include failed deployments and hotfixes, because those are the cases where rollback evidence is most likely to be missing. If the release volume is low, review all releases and report counts.",
      "Collect the packet as it existed at approval and preserve later changes as revisions. Do not reconstruct a missing rehearsal from a later incident. If an artifact has expired, record the expiry and the link metadata. Note the collection date so the reader can see how much of the evidence has aged.",
      "## Analysis and reporting",
      "Report the share of releases with a complete rollback packet, the share with a rehearsed rollback, and the share with an irreversible data step. Separate code-only releases from releases that included a migration or a permission change. Show the time to restore where a rehearsal was recorded. The analysis and reporting record should be dated and linked so a second reviewer can reproduce the result.",
      "Inspect the releases that lacked a trigger or a named authority. Those gaps matter even when the rollback steps are technically correct. Avoid presenting a high packet-completeness rate as proof that the team can recover; the packet may be complete and the procedure may still fail. Use the rehearsal result as the stronger signal.",
      "## Limitations",
      "A rehearsal in staging cannot reproduce every production condition, including data volume, traffic, and third-party state. The protocol measures recorded readiness, not actual recovery under pressure. A team can have a complete packet and still make a poor decision during an incident. State that boundary in the report.",
      "Deployment exports may omit manual steps, expired artifacts, and changes made outside the pipeline. A rollback that worked for one release may not work for the next if dependencies changed. Record the release version and the environment so the reader does not generalize across versions. The limitations record should be dated and linked so a second reviewer can reproduce the result.",
      "## Review cadence and next action",
      "Ask the release owner to choose one change: require a rehearsal result before approval, add a data-recovery field for migrations, or name the rollback trigger in the packet. Record the owner and the effective date. If the finding involves an irreversible data step, route it to the database owner before the next release. Record the result against the review cadence and next action evidence before the case is closed.",
      "Repeat the protocol with the same definitions and compare the same fields. If rehearsal coverage improves but restore time does not, inspect whether the rehearsals are realistic. Close the review when the owner accepts the finding and the next check is scheduled. The review cadence and next action owner should confirm this at the next review.",
      "## Testing the rollback trigger",
      "A rollback procedure is only useful if the team can recognize the condition that triggers it. Test the trigger with a tabletop exercise: describe a signal, ask who would notice it, and record the decision that follows. A trigger that requires a meeting to interpret is too slow for an active incident. That check belongs in the testing the rollback trigger note, with the owner and the next action visible.",
      "Record the result of the exercise and update the packet if the decision path is unclear. The exercise does not need to simulate a full outage; it needs to test whether the evidence and authority are available when the signal appears. Record the result against the testing the rollback trigger evidence before the case is closed. That exercise should be repeated after the rollback procedure or the deployment pipeline changes.",
      "## Separating rehearsal from production",
      "A staging rehearsal is evidence about the procedure, not proof that production will behave the same way. Record the differences in data volume, traffic, dependencies, and permissions. The reviewer should know which parts of the rehearsal transfer to production and which remain assumptions. The separating rehearsal from production record should be dated and linked so a second reviewer can reproduce the result.",
      "If a production rehearsal is too risky, use a canary or a limited-scope deployment with the same rollback path. The goal is to learn before the full release, not to create a second production incident. The evidence standard should match the consequence of failure. That check belongs in the separating rehearsal from production note, with the owner and the next action visible.",
      "## Keeping the packet current",
      "A release packet ages quickly when dependencies, infrastructure, or deploy tools change. Review the rollback procedure when the pipeline changes, not only when a release fails. Record the review date and the person who confirmed the steps still work. The keeping the packet current owner should confirm this at the next review.",
      "A stale packet can be worse than no packet because it creates false confidence. If the team cannot verify a step, mark it unverified and assign an owner. The next release owner should see the gap before approval. The keeping the packet current record should be dated and linked so a second reviewer can reproduce the result.",
      "## A short reporting template",
      "Report the release count, the share with a complete packet, the share with a rehearsed rollback, the share with an irreversible data step, and the restore time where measured. Separate code-only releases from releases with migrations or permission changes. Keep the definitions and the observation window beside the numbers. Record the result against the a short reporting template evidence before the case is closed.",
      "For each gap, name the missing field and the risk it creates rather than ranking the release team. A missing trigger and a missing rehearsal are different problems with different fixes. If the sample is small, use counts and short case descriptions instead of a rate. The a short reporting template owner should confirm this at the next review.",
      "End with one change, one owner, and one follow-up date. The next sample should use the same definitions so the comparison is meaningful. If the procedure changes, record the change date and treat the next period as a new baseline. The a short reporting template record should be dated and linked so a second reviewer can reproduce the result."
    ],
    "sources": [
      [
        "DORA research program",
        "https://dora.dev/research/"
      ],
      [
        "NIST SP 800-218",
        "https://csrc.nist.gov/pubs/sp/800/218/final"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/"
      ],
      [
        "GitHub Actions documentation",
        "https://docs.github.com/en/actions"
      ],
      [
        "Google SRE Book: Release Engineering",
        "https://sre.google/sre-book/release-engineering/"
      ]
    ],
    "published": "2026-11-03",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "campaignDate": "2026-11-03",
    "sourceDate": "2026-11-03",
    "related": [
      "outsourced-pr-scope-drift-research",
      "outsourced-timezone-handoff-research"
    ],
    "hero": "/nov03/research/outsourced-rollback-readiness-research.webp"
  },
  {
    "slug": "outsourced-code-review-incident-research",
    "title": "Which review comments precede production incidents in outsourced code?",
    "excerpt": "A protocol for linking review threads to incidents and separating detection, resolution, and decision-right gaps.",
    "topic": "Review comments and incidents",
    "body": [
      "## Research question and scope",
      "This protocol asks which kinds of review comments precede production incidents in outsourced code, and whether those comments point to a fixable gap in the ticket, the tests, or the review process. The unit is one review thread linked to a pull request that later contributed to an incident. The study examines the comment and the incident record; it does not evaluate the reviewer's skill or the programmer's intent. That check belongs in the research question and scope note, with the owner and the next action visible.",
      "Set the scope to one repository, one incident definition, and one observation window. Record the severity scale, the incident review process, and the review workflow version in force at the start. If the team changes its severity scale during the window, keep the earlier definition for the full sample or analyze the change separately. Record the result against the research question and scope evidence before the case is closed.",
      "## Population and unit",
      "Define an incident as a production event that met the team's written severity threshold and required a response beyond routine monitoring. Link the incident to the pull request or change that most likely introduced the condition, using the incident review record. Do not infer causation from timing alone; record the evidence and the uncertainty. The population and unit record should be dated and linked so a second reviewer can reproduce the result.",
      "The unit is the review thread attached to the linked change. A thread with several replies remains one unit, with the resolution recorded separately. Exclude purely social or scheduling comments, but count bot-generated comments separately. Record the file, the risk area, the comment category, and whether the thread blocked the merge.",
      "## Definitions and taxonomy",
      "Start with a small taxonomy: correctness, security or privacy, data integrity, test coverage, operability, performance, accessibility, maintainability, and documentation. Add a separate flag for questions, preferences, and blocking versus non-blocking comments. A comment can carry more than one code only when the reviewer explicitly raises more than one risk. The definitions and taxonomy owner should confirm this at the next review.",
      "Write one example and one non-example for each category. A missing null check is correctness, while an unvalidated permission check is security. A request to rename a variable is maintainability unless the name exposes a secret or changes a public contract. Pilot the taxonomy on a small batch and reconcile disagreements before coding the full sample.",
      "## Evidence and data dictionary",
      "For each thread, capture the comment text, the file and line, the author role, the reviewer role, the resolution, and the incident link. Record whether the comment was resolved before merge, deferred, disputed, or left open. Link the incident review and the exact code version rather than a summary from memory. Record the result against the evidence and data dictionary evidence before the case is closed.",
      "Add a field for the action that followed: code changed, test added, documentation updated, risk accepted, or no action recorded. A pattern of security comments with no action is different from a pattern of security comments that were fixed. The resolution field lets the analysis separate detection from follow-through. The evidence and data dictionary owner should confirm this at the next review.",
      "## Sampling and collection",
      "Draw the sample from the incident register and the linked pull requests, not from a list of interesting review comments. Record the incident selection rule and the number of incidents that could not be linked to a change. Include incidents with a known root cause and incidents where the cause remains uncertain, but code the uncertainty separately. That check belongs in the sampling and collection note, with the owner and the next action visible.",
      "Collect the review thread as it existed at merge and preserve later edits. If a comment was deleted, record the limitation. Use the repository export for the code context and the incident system for the outcome. Note the collection date and any retention limits on incident records.",
      "## Analysis and reporting",
      "Report the number of linked incidents, the comment categories that preceded them, and the share of those comments that were unresolved at merge. Separate incidents by risk area and by whether the change had a test covering the affected path. Present counts and rates with the denominator, not a ranked list of reviewers. The analysis and reporting record should be dated and linked so a second reviewer can reproduce the result.",
      "Inspect the cases where a reviewer raised the exact risk and the team merged anyway. Those cases may point to a decision-right problem rather than a review-quality problem. Also inspect the incidents with no related comment, because they may reveal a missing check or a gap in the taxonomy. That check belongs in the analysis and reporting note, with the owner and the next action visible.",
      "## Limitations",
      "The review thread cannot show whether the reviewer anticipated the incident or simply raised a related concern. The incident review may identify a contributing change with uncertainty, and the protocol should preserve that uncertainty. A comment linked to an incident is not proof that the comment would have prevented it. The limitations owner should confirm this at the next review.",
      "Repository exports can omit deleted comments, force-pushed code, and discussions held outside the review. Incident records may be incomplete or written after the fact. If the sample is small, report cases and categories rather than rates. The protocol describes patterns in one environment, not an industry benchmark.",
      "## Review cadence and next action",
      "Ask the review and incident owners to choose one change: add a required check for the recurring category, clarify the authority to block a merge, or add a test that covers the affected path. Record the owner and the effective date. Choose a change that can be observed in the next sample. Record the result against the review cadence and next action evidence before the case is closed.",
      "Repeat the protocol with the same taxonomy and compare the same fields. If the same category recurs after the change, inspect whether the new check is being used or bypassed. Close the review when the owner accepts the finding and the next check is scheduled. The review cadence and next action owner should confirm this at the next review.",
      "## Connecting comments to decisions",
      "A review comment is only one part of the decision record. Link it to the approval, the merge, and the incident outcome so the analysis can see whether the concern was resolved. A comment that was raised and fixed is different from one that was raised and ignored. That check belongs in the connecting comments to decisions note, with the owner and the next action visible.",
      "If the decision was made outside the review thread, record where it happened and who made it. That context prevents the study from treating a silent thread as a missing concern. The report should describe the decision path, not just the comment text. Record the result against the connecting comments to decisions evidence before the case is closed.",
      "## Reading the incident timeline",
      "Place the review comment on the incident timeline so the reader can see how close the concern was to the failure. A comment that named the exact risk is stronger evidence than a general request for more tests. Record the time between the comment and the merge. The reading the incident timeline record should be dated and linked so a second reviewer can reproduce the result.",
      "If the incident happened long after the merge, other changes may have contributed. Record the intervening changes and the uncertainty. The protocol should not claim that an earlier comment would have prevented an incident that depended on later conditions. That check belongs in the reading the incident timeline note, with the owner and the next action visible.",
      "## Using the result without blaming",
      "The result should help the team improve its review and decision rights, not rank reviewers. Present categories and process gaps, and avoid naming individuals in the summary. If a specific case needs follow-up, route it through the normal management process. The using the result without blaming owner should confirm this at the next review.",
      "The owner should choose one change that can be observed in the next sample. A new required check, a clearer blocking rule, or a test for the affected path are all more useful than a general reminder to be careful. The using the result without blaming record should be dated and linked so a second reviewer can reproduce the result. The next report should use the same categories so the owner can compare the result.",
      "## A short reporting template",
      "Report the number of linked incidents, the comment categories, the share unresolved at merge, and the action that followed. Separate high-risk code paths from low-risk changes and show the counts behind every rate. Describe the incident linkage and the uncertainty rather than implying a precise cause. Record the result against the a short reporting template evidence before the case is closed.",
      "Use short case notes to explain the pattern, not to name individuals. A comment that named the exact risk and was overridden points to a different fix from a risk that was never noticed. The owner needs that distinction before choosing a process change. The a short reporting template owner should confirm this at the next review.",
      "End with one change, one owner, and the next sample date. If the change is a new required check, say where it appears and who can waive it. A check without a waiver path tends to be bypassed under deadline pressure. The a short reporting template record should be dated and linked so a second reviewer can reproduce the result."
    ],
    "sources": [
      [
        "Google Engineering Practices: Code Review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "NIST SP 800-218",
        "https://csrc.nist.gov/pubs/sp/800/218/final"
      ],
      [
        "DORA research program",
        "https://dora.dev/research/"
      ],
      [
        "GitHub Docs: About pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "published": "2026-11-03",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "campaignDate": "2026-11-03",
    "sourceDate": "2026-11-03",
    "related": [
      "outsourced-pr-scope-drift-research",
      "outsourced-dependency-upgrade-audit-research"
    ],
    "hero": "/nov03/research/outsourced-code-review-incident-research.webp"
  },
  {
    "slug": "outsourced-timezone-handoff-research",
    "title": "Where does time-zone delay accumulate in outsourced engineering handoffs?",
    "excerpt": "A protocol for measuring handoff wait, review time, dependency time, and fallback coverage across distributed engineering teams.",
    "topic": "Time-zone handoff delay",
    "body": [
      "## Research question and scope",
      "This protocol asks how much elapsed time in an outsourced engineering handoff is caused by time-zone mismatch rather than by the work itself. The unit is one handoff between a programmer and a reviewer, product owner, or operations contact. The study measures waiting and rework around the handoff; it does not evaluate the programmer's productivity or the reviewer's responsiveness as a personal trait. That check belongs in the research question and scope note, with the owner and the next action visible.",
      "Set the scope to one team, one handoff path, and one observation window. Record the working hours, the communication channels, and the expected response times in force at the start. If the team changes its overlap or escalation policy during the window, keep the earlier definition for the full sample or analyze the change separately. Record the result against the research question and scope evidence before the case is closed.",
      "## Population and unit",
      "Define a handoff as a request for review, clarification, access, or a decision that must cross from one person to another before work can continue. The unit is the handoff event, identified by the ticket, the requesting person, the receiving role, and the time the request was sent. A handoff that is reopened after a partial answer remains one unit with a revision history. The population and unit record should be dated and linked so a second reviewer can reproduce the result.",
      "Record the handoff type, the urgency, the time zone of each side, the channel, and whether the receiver was named. These strata matter because a routine code review and an access request during an incident have different time pressure. Test the unit definition on one ordinary and one urgent handoff before collection. That check belongs in the population and unit note, with the owner and the next action visible.",
      "## Definitions that make the measure reproducible",
      "Define the start as the timestamp when the request is sent to a named receiver. Define the end as the timestamp when the receiver provides an actionable answer, not when they acknowledge the message. Define avoidable waiting as time that passed because the request was sent outside the receiver's working hours without a documented fallback. The definitions that make the measure reproducible owner should confirm this at the next review.",
      "Distinguish waiting from work in progress. A reviewer may need time to read the code, run a test, or consult another owner. That time is not automatically waste. Record the reason for the delay so the analysis can separate queue time, review time, and dependency time.",
      "## Evidence and data dictionary",
      "For each handoff, capture the ticket, the request time, the receiver, the receiver time zone, the first response, the actionable response, and the outcome. Record whether the request included the information the receiver needed. Also record any rework caused by an incomplete request. Record the result against the evidence and data dictionary evidence before the case is closed.",
      "Add a field for the fallback used when the receiver was unavailable: a backup reviewer, a documented decision, a delayed start, or an escalation. That field shows whether the team has a real coverage plan or only an expectation of responsiveness. A second coder should be able to classify the case from the evidence. The evidence and data dictionary owner should confirm this at the next review.",
      "## Sampling and collection",
      "Draw the sample from the ticket and communication exports, including handoffs that were resolved quickly. Record the export date, filters, and selection rule. If the team uses several channels, state which channels were included and which were not. A sample drawn only from escalations will overstate the delay.",
      "Collect timestamps from the systems that recorded them at the time. If an answer was given in a meeting and written later, record the reconstruction and mark it as weaker evidence. Note the collection date and any retention limits on chat or meeting records. Record the result against the sampling and collection evidence before the case is closed.",
      "## Analysis and reporting",
      "Report the median and distribution of time to an actionable answer by handoff type and time-zone gap. Separate queue time from review time and dependency time. Show the share of handoffs that required a fallback and the share that required rework because the request was incomplete. The analysis and reporting record should be dated and linked so a second reviewer can reproduce the result.",
      "Compare cases within the same urgency and complexity stratum. Avoid ranking individuals by response time without context. If the slowest cases all involve one dependency, the fix may be an ownership change rather than a request for faster replies. Present the tail cases as well as the median.",
      "## Limitations",
      "The timestamps may not capture the moment a person actually saw the request, especially across channels. A fast reply can be a shallow answer, while a slower one can be a careful review. The protocol measures elapsed time and recorded outcomes, not the quality of the decision or the fairness of the schedule. The limitations owner should confirm this at the next review.",
      "Small samples limit precision, and a change in workload can affect both the number of handoffs and the response time. If the team has no reliable timestamps, use counts and case descriptions instead of a rate. Local labor rules and contractual response expectations need separate review. The limitations record should be dated and linked so a second reviewer can reproduce the result.",
      "## Review cadence and next action",
      "Ask the engineering owner to choose one change: define an overlap window, name a backup reviewer, or add a required field to the handoff request. Record the owner and the effective date. Choose a change that can be observed in the next sample and that does not quietly expand someone's availability. Record the result against the review cadence and next action evidence before the case is closed.",
      "Repeat the protocol with the same definitions and compare the same strata. If the median improves but the tail does not, inspect the urgent cases individually. Close the review when the owner accepts the finding and the next check is scheduled. The review cadence and next action owner should confirm this at the next review.",
      "## Separating urgency from importance",
      "An urgent handoff is not always the most important one. Record the consequence of delay separately from the sender's urgency label. A routine review that blocks a release may matter more than a same-day question about a cosmetic issue. That check belongs in the separating urgency from importance note, with the owner and the next action visible.",
      "Use a small consequence scale that the team can apply consistently. The scale should describe the customer or operational effect, not the emotional tone of the message. That distinction helps the owner prioritize without rewarding loud requests. Record the result against the separating urgency from importance evidence before the case is closed.",
      "## Designing a real fallback",
      "A fallback is only real if the receiver has the authority and context to act. Record who the backup is, what they may decide, and how they will know the case is theirs. A backup name without authority just moves the wait to another person. The designing a real fallback record should be dated and linked so a second reviewer can reproduce the result.",
      "Test the fallback on a routine handoff before an incident. If the backup cannot find the ticket or the evidence, fix the handoff format. The team should not discover a broken fallback during a production emergency. That check belongs in the designing a real fallback note, with the owner and the next action visible.",
      "## Keeping handoffs humane",
      "Time-zone coverage should not quietly become an expectation of always-on availability. Record the expected response window and the escalation path, and respect the receiver's off-hours. A team that treats every message as urgent will create fatigue and worse decisions. The keeping handoffs humane owner should confirm this at the next review.",
      "If the work genuinely requires extended coverage, staff it explicitly rather than relying on informal responsiveness. The protocol measures the process, not the willingness of an individual to answer at night. That boundary protects both service quality and the people doing the work. The keeping handoffs humane record should be dated and linked so a second reviewer can reproduce the result.",
      "## A short reporting template",
      "Report the handoff count, the median and tail of time to an actionable answer, the queue and review components, and the share requiring a fallback. Separate routine handoffs from urgent ones and show the time-zone gap for each. Keep the definitions available beside the result. Record the result against the a short reporting template evidence before the case is closed.",
      "Describe the slowest cases and the dependency involved without ranking individuals. If the same approval or access step dominates the tail, the fix may be an ownership change rather than a request for faster replies. A short case note is more useful than a long narrative. The a short reporting template owner should confirm this at the next review.",
      "End with one change, one owner, and a follow-up date. If the change expands availability, record the expected coverage and the trade-off explicitly. The next sample should show whether the delay moved or merely changed shape. The a short reporting template record should be dated and linked so a second reviewer can reproduce the result."
    ],
    "sources": [
      [
        "NIST SP 800-218",
        "https://csrc.nist.gov/pubs/sp/800/218/final"
      ],
      [
        "Google Engineering Practices: Code Review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "GitLab Handbook: All-remote",
        "https://handbook.gitlab.com/handbook/company/culture/all-remote/"
      ],
      [
        "DORA research program",
        "https://dora.dev/research/"
      ],
      [
        "ILO: Digital labour platforms",
        "https://www.ilo.org/digital-labour-platforms"
      ]
    ],
    "published": "2026-11-03",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "campaignDate": "2026-11-03",
    "sourceDate": "2026-11-03",
    "related": [
      "outsourced-rollback-readiness-research",
      "outsourced-dependency-upgrade-audit-research"
    ],
    "hero": "/nov03/research/outsourced-timezone-handoff-research.webp"
  },
  {
    "slug": "outsourced-dependency-upgrade-audit-research",
    "title": "Can outsourced dependency upgrade decisions be reconstructed?",
    "excerpt": "An audit protocol for dependency upgrades that checks release-note evidence, consumer impact, rollback conditions, and post-deployment verification.",
    "topic": "Dependency upgrade decisions",
    "body": [
      "## Research question and scope",
      "This protocol asks whether a dependency upgrade decision in outsourced maintenance work can be reconstructed from the ticket, the release notes, the test evidence, and the approval record. The unit is one upgrade decision inside a defined window. The study examines the decision record; it does not determine whether the chosen version was the best technical option. That check belongs in the research question and scope note, with the owner and the next action visible.",
      "Set the scope to one repository or service and record the dependency policy, the review workflow, and the release process in force at the start. If the team changes its upgrade policy during the window, keep the earlier definition for the full sample or analyze the change separately. A deferred upgrade is still a decision and should be in scope. Record the result against the research question and scope evidence before the case is closed.",
      "## Population and unit",
      "Define the population as dependency upgrade decisions that were approved, rejected, or deferred during the window. The unit is the decision, identified by the package, the current version, the proposed version, and the ticket. A package that is upgraded in several services has one decision per service if the approvals and evidence differ. The population and unit record should be dated and linked so a second reviewer can reproduce the result.",
      "Record the dependency type, the exposure, the risk area, and whether the upgrade was driven by a security advisory. These strata matter because a development-only formatting package and an authentication library should not be judged against the same evidence standard. Test the unit definition on one security upgrade and one routine maintenance upgrade. That check belongs in the population and unit note, with the owner and the next action visible.",
      "## Definitions that make the measure reproducible",
      "Define a traceable decision as one where a reviewer can identify the package, the version change, the reason, the affected services, the test evidence, the rollback condition, and the decision owner. Define a complete packet as one containing the release-note summary, the consumer impact, the checks run, and the known gaps. A version bump alone is not a decision record. The definitions that make the measure reproducible owner should confirm this at the next review.",
      "Separate the decision to upgrade from the decision to deploy. A team may approve an upgrade for a future release while deferring the production change. Record both states so the analysis does not treat a deferred deployment as a rejected upgrade or an approved upgrade as a completed release. The definitions that make the measure reproducible record should be dated and linked so a second reviewer can reproduce the result.",
      "## Evidence and data dictionary",
      "For each decision, capture the ticket, the package, the versions, the advisory or feature reason, the exposed services, the test results, the rollback condition, and the approver. Record whether the release notes were read and summarized, and whether a migration guide was linked. Code each field as present and usable, present but vague, missing, or not applicable. Record the result against the evidence and data dictionary evidence before the case is closed.",
      "Add a field for the post-deployment check and the date it was completed. An upgrade without a post-deployment check may be technically deployed but not verified. Also record whether the upgrade was later reverted, and the reason, because a revert is evidence about the quality of the original decision. The evidence and data dictionary owner should confirm this at the next review.",
      "## Sampling and collection",
      "Draw the sample from the dependency or ticket system, not from a list of security alerts. Record the export date, filters, and selection rule. Include approved, rejected, deferred, and reverted decisions. If the repository uses automated dependency bots, separate bot-created tickets from human-created tickets so the review process is visible.",
      "Collect the packet as it existed at the decision point and preserve later updates as revisions. Do not fill a missing release-note summary with the current upstream documentation, because the product may have changed. Note the collection date and any expiring links or advisories. Record the result against the sampling and collection evidence before the case is closed.",
      "## Analysis and reporting",
      "Report the number of decisions by state, the share with a complete packet, the share with a rollback condition, and the share with a post-deployment check. Separate security-driven upgrades from routine maintenance and show the evidence gaps for each. Present counts and rates with the denominator and the observation window. The analysis and reporting record should be dated and linked so a second reviewer can reproduce the result.",
      "Inspect the deferred and reverted decisions separately. A deferred security upgrade may be a conscious risk acceptance, or it may be an unowned item that disappeared. A revert may show that the test evidence missed a consumer. Describe the specific gap rather than ranking the team by upgrade count.",
      "## Limitations",
      "The record cannot show whether the reviewer understood the release notes or whether the chosen version was technically optimal. It can show only what was documented and approved. A complete packet may accompany a poor decision, and an incomplete packet may accompany a sound one. State that boundary in the report.",
      "Dependency metadata can change after the decision, and advisories can be revised. A bot may open a ticket without the context a human reviewer would need. If the sample is small, report cases and categories rather than rates. The protocol describes one environment, not an industry benchmark.",
      "## Review cadence and next action",
      "Ask the maintenance owner to choose one change: require a release-note summary in the ticket, add a rollback condition for production upgrades, or require a post-deployment check for security updates. Record the owner and the effective date. If a security upgrade is deferred, require a named risk owner and a revisit date. Record the result against the review cadence and next action evidence before the case is closed.",
      "Repeat the protocol with the same definitions and compare the same fields. If packet completeness improves but reverts do not fall, inspect whether the tests cover the real consumers. Close the review when the owner accepts the finding and the next check is scheduled. The review cadence and next action owner should confirm this at the next review.",
      "## Reading the advisory carefully",
      "A security advisory should be read for the affected versions and the conditions required for exploitation. Record whether the application meets those conditions and whether a compensating control exists. A vulnerable package that is never loaded on an exposed path may carry a different urgency from one in the request path. That check belongs in the reading the advisory carefully note, with the owner and the next action visible.",
      "Do not use the severity label as the only input. Record the evidence and the decision owner, especially when the team decides to defer. A deferral with a named risk owner and a revisit date is a different decision from an unowned alert. Record the result against the reading the advisory carefully evidence before the case is closed.",
      "## Tracking the post-upgrade result",
      "After deployment, check the service behavior and the dependency version that is actually running. A lockfile change that did not reach the deployed artifact is not an upgrade. Record the artifact version and the check time so the evidence points to the running system. The tracking the post-upgrade result record should be dated and linked so a second reviewer can reproduce the result.",
      "If the upgrade is reverted, preserve the reason and the version that was restored. The next reviewer should know whether the revert was caused by a compatibility issue, a performance change, or a missing test. That history improves the next decision. That check belongs in the tracking the post-upgrade result note, with the owner and the next action visible.",
      "## Building a maintenance cadence",
      "Dependency review should happen on a cadence, not only when an alert arrives. Choose a review interval that matches the exposure and record the scope for each pass. A regular review makes deferred items visible before they become emergencies. The building a maintenance cadence owner should confirm this at the next review.",
      "The cadence should include a way to close or re-justify deferred work. An item that stays open forever is not being managed. The owner should see the age of deferred decisions and the reason each remains open. The building a maintenance cadence record should be dated and linked so a second reviewer can reproduce the result.",
      "## A short reporting template",
      "Report the decisions by state, the share with a complete packet, the share with a rollback condition, and the share with a post-deployment check. Separate security-driven upgrades from routine maintenance and show the evidence gap for each. Keep the observation window and the policy version beside the numbers. Record the result against the a short reporting template evidence before the case is closed.",
      "Describe deferred and reverted decisions individually, including the reason and the owner. A deferred security upgrade without a revisit date is an open risk, not a closed decision. A revert may show that the test evidence missed a consumer, which is useful for the next review. The a short reporting template owner should confirm this at the next review.",
      "End with one change, one owner, and the next sample date. If the change is a required post-deployment check, say who performs it and where the result is stored. The next sample should show whether the check is actually used, not only whether it exists. The a short reporting template record should be dated and linked so a second reviewer can reproduce the result."
    ],
    "sources": [
      [
        "NIST SP 800-218",
        "https://csrc.nist.gov/pubs/sp/800/218/final"
      ],
      [
        "CISA Software Bill of Materials",
        "https://www.cisa.gov/sbom"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "Semantic Versioning 2.0.0",
        "https://semver.org/"
      ],
      [
        "GitHub Docs: Dependabot",
        "https://docs.github.com/en/code-security/dependabot"
      ]
    ],
    "published": "2026-11-03",
    "datePublished": "2026-11-03",
    "dateModified": "2026-11-03",
    "campaignDate": "2026-11-03",
    "sourceDate": "2026-11-03",
    "related": [
      "outsourced-pr-scope-drift-research",
      "outsourced-code-review-incident-research"
    ],
    "hero": "/nov03/research/outsourced-dependency-upgrade-audit-research.webp"
  }
];
