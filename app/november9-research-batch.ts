import type { ResearchPost } from './fleet-content';

export const november9ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-offshore-releases-need-a-rollback-rehearsal",
    "title": "How often do offshore releases need a rollback rehearsal?",
    "excerpt": "A protocol for measuring rehearsal coverage, the releases that skip it, and the restore failures found before an incident.",
    "topic": "Rollback rehearsal coverage",
    "published": "2026-11-09",
    "hero": "/nov09/research/how-often-do-offshore-releases-need-a-rollback-rehearsal.webp",
    "body": [
      "This protocol asks how often offshore releases need a rollback rehearsal and how often the rehearsal finds a restore failure. The unit is one production release in the window, identified by the release identifier and the build digest. The study measures whether a rehearsal was required, whether it happened, and what it found. It does not judge whether a release should have been rolled back in production.",
      "Record whether the rehearsal used the same artifact that will be deployed, not a rebuilt copy. A rebuilt artifact can have a different dependency resolution and hide a restore failure. Compare the build digest before and after the rehearsal. If the team cannot use the same artifact, state the limitation and the reason.",
      "Set the scope to one client, one release process, and one rollback policy. Record the risk tiers, the rehearsal requirement, and the environments used. If the policy changes during the window, keep the earlier definition for releases already in progress and analyze the later cohort separately. A new risk tier can look like a coverage improvement when it is only a different label.",
      "Measure the time from the rollback decision to the first customer-visible recovery, not only the time to restart the service. A service can start while the customer path is still broken. Record the first successful login or transaction after the restore. That interval is the number the business actually experiences.",
      "Define the population as every production release in the window, including releases that were cancelled or deployed without a rehearsal. The unit is the release, not the deploy, because one release can have several stages. A hotfix is a separate unit linked to the release it repairs. Test the definition on two recent releases before collection begins.",
      "Ask the on-call engineer whether they had to call anyone to find a credential, a runbook, or an approver. A call is a hidden dependency that the release plan did not account for. Record the call and the person who answered. The next rehearsal should remove that dependency or name it in the plan.",
      "Record the release type, the risk tier, the services changed, the data migration flag, the rehearsal date, the participants, and the result. Add the time from the decision to the restored service and the checks that failed. Keep the rehearsal record and the release record linked. A second reviewer should be able to rebuild the rehearsal from the evidence.",
      "Separate a rehearsal failure caused by the plan from one caused by the environment. A missing command is a documentation problem, while a broken test environment is an infrastructure problem. Report the two categories separately so the owner can choose the right fix. A plan rewrite will not fix a broken database copy.",
      "Report the number of releases, the share that required a rehearsal, the share that completed one, and the share where the rehearsal found a failure. Show the counts by risk tier and release type. Present the median time to restore in the rehearsal. Use the same denominator for every rate and show releases with incomplete records.",
      "A useful additional view is the share of releases that changed the rollback path without updating the rehearsal plan. A new service, a new queue, or a new data store can make the old steps incomplete. Record the architecture change and the plan revision. The review should catch the gap before an incident does.",
      "Inspect the releases that skipped a required rehearsal and describe the reason without naming the engineer. A cluster before a holiday may point to a scheduling conflict, while a cluster in one team may point to a missing owner. Compare the result with the release size and the data migration flag. Report cancelled releases separately.",
      "Do not treat a successful rehearsal as permission to skip monitoring. A restore can work in a test and fail under production load. Record the monitoring window and the checks that would trigger a second rollback. The rehearsal reduces uncertainty but does not remove the need to watch the release.",
      "The record cannot show whether a rehearsal would have prevented a production incident. It can show only that the restore path was tested and what it found. A completed rehearsal is not proof of a safe release, and a skipped one is not proof of risk. The protocol also cannot capture a restore that was tested in a different environment from production.",
      "Check whether the client approver was available during the rehearsal at the same time they would be available during a real incident. A rehearsal on a Tuesday afternoon may not reflect a Friday night decision. Record the time zone and the on-call schedule. If the approver cannot be reached, the plan needs a backup.",
      "Give the result to the release manager and the client owner and ask them to choose one observable change. The change might be a mandatory rehearsal for schema changes, a named rehearsal owner, a shorter restore target, or a shared test environment. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Keep the rehearsal record short enough to read before an incident. The full timeline can live in the appendix, but the first page should show the restore commands, the decision trigger, and the contact. A record that takes twenty minutes to read will not be used under pressure. Review the rehearsal result with the support lead as well as engineering. Support needs to know what customers will see during a rollback and how long the degraded state will last. Record the customer message and the expected recovery time. A technically successful restore can still produce a poor customer experience.",
      "Close the review with one change and a date to test it. The change might be a new command, a named backup, a shorter target, or a different artifact. Record the owner and the evidence that will prove the change. A rehearsal program that never changes its plan is not learning from the failures it finds.",
      "A useful additional view is the share of rehearsals that were run by someone other than the release author. A independent operator is more likely to find a missing step because they do not carry the author's assumptions. Record the operator and whether they had run the restore before. That field turns the rehearsal into a real transfer of knowledge, not a demonstration.",
      "Check whether the rehearsal included the client approver's decision, not only the technical restore. A technical team can restore the service while the business decision remains unclear. Record the decision time and the person who made it. A rehearsal that skips the approval path has not tested the full incident response.",
      "Ask the support lead whether the customer message was usable during the rehearsal. A message that is full of internal terms will not help a customer. Record the message and the changes the support lead requested. The next rehearsal should start from the revised text, not the first draft.",
      "Do not count a tabletop discussion as a completed rehearsal unless the team actually ran the restore. A discussion can find missing roles, but it cannot prove the command works. Record the format and the evidence produced. The report should separate a discussion from a technical rehearsal so the coverage number is honest.",
      "Close the loop with the client owner by naming the one risk the rehearsal did not cover. Every rehearsal has a limit, whether it is a data restore or a third-party integration. Record the limitation and the compensating check. A report that claims complete coverage is less credible than one that names its boundary.",
      "Keep a short list of the assumptions that the rehearsal did not test, such as a third-party provider's restore time or a regional failover. A rehearsal is only as broad as its environment, and the report should say where the boundary sits. Record the assumption, the owner, and the check that would cover it in a future rehearsal. The client should know which risks remain outside the tested path, because a silent assumption is the one that fails during an incident."
    ],
    "sources": [
      [
        "Google SRE Book, release engineering",
        "https://sre.google/sre-book/release-engineering/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "AWS Well-Architected Framework, operational excellence",
        "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
      ],
      [
        "Atlassian incident management handbook",
        "https://www.atlassian.com/incident-management/handbook"
      ]
    ],
    "related": [
      "what-share-of-offshore-defects-are-reopened-after-a-fix",
      "how-long-does-a-client-database-change-approval-take"
    ]
  },
  {
    "slug": "what-share-of-offshore-defects-are-reopened-after-a-fix",
    "title": "What share of offshore defects are reopened after a fix?",
    "excerpt": "A protocol for measuring reopened defects, the reason, the time to reopen, and whether the first fix addressed the cause.",
    "topic": "Reopened defects",
    "published": "2026-11-09",
    "hero": "/nov09/research/what-share-of-offshore-defects-are-reopened-after-a-fix.webp",
    "body": [
      "This protocol asks what share of offshore defect fixes are reopened and why. The unit is one defect that was marked fixed during the window, identified by the defect identifier and the fix build. The study measures the share reopened within thirty days, the reason, and the time between the fix and the reopen. It does not judge the engineer's skill or assume that every reopen is a failed fix.",
      "Record whether the reopen was reported by the same customer or by a different one. A different customer may indicate that the fix addressed only the reported symptom. A same-customer reopen may indicate a communication gap. The source changes the interpretation and the next action.",
      "Set the scope to one product, one defect process, and one definition of fixed. Record the environments, the acceptance evidence, and the reopen window at the start. If the process changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new verification step can look like more rework when it is only a different gate.",
      "Measure the time from the first fix to the reopen in business days, not only calendar days. A defect reopened after a weekend may have been waiting for a customer test rather than for the engineer. Report both when the gap is large. The reader should see the customer's experience, not only the timestamp difference.",
      "Define the population as every defect marked fixed in the window, including fixes that were later reopened or reverted. The unit is the defect, not the commit, because one fix can touch several commits. A duplicate defect that is linked to the original is a separate unit with a link. Test the definition on two recent fixes before collection begins.",
      "Check whether the fix included a regression test that reproduced the original defect. A fix without a test is more likely to be reopened because the team cannot prove the behavior stayed fixed. Record the test identifier and whether it ran in the release pipeline. That field turns the reopen rate into a test-coverage finding.",
      "Record the defect severity, the area, the fix size, the verifier, the evidence attached, and the time to close. Add the reopen date, the reason, and the second fix. Keep the original report and the fix record together. A second reviewer should be able to classify the reopen from the evidence without reading a chat thread.",
      "Ask the verifier what evidence they used before closing the defect. A verifier who relied on a developer's note is less independent than one who ran the reproduction. Record the verification method and the person. The reopen review should distinguish a verification gap from a coding gap.",
      "Report the number of fixed defects, the share reopened within thirty days, the median time to reopen, and the share reopened more than once. Show the counts by severity, area, and verifier. Present the share of reopens caused by an incomplete fix, a regression, a misunderstood requirement, or a test gap. Use the same denominator for every rate.",
      "Separate a reopen caused by a new defect from one caused by the same defect. A new defect in the same area is a regression risk, while the same defect is a failed fix. Report the two categories separately. Pooling them hides whether the team is fixing the cause or chasing new symptoms.",
      "Inspect the reopened defects and describe the pattern without naming the engineer. A cluster in one area may point to a fragile test or a missing environment, while a cluster in one severity may point to a rushed fix. Compare the result with the fix size and the evidence attached. Report defects reopened after a customer report separately.",
      "A useful additional view is the share of reopened defects that were closed again without a code change. A documentation or configuration fix may be legitimate, but a pattern of no-code reopens suggests the first fix was incomplete. Record the second resolution and its evidence. The pattern is often more useful than a single case.",
      "The record cannot show whether the first fix was reasonable given the information available. It can show only that the defect was reopened and what reason was recorded. A reopen is not proof of poor work, because new evidence can change the expected behavior. The protocol also cannot capture a defect that was never reported again but remained broken.",
      "Do not use the reopen rate as an individual performance metric. A team that discourages reopening will leave defects marked fixed and lose trust with the customer. The measure is useful at the process level, where it can reveal a weak verification step or a missing test. Keep individual data out of the summary.",
      "Give the result to the QA lead and the client owner and ask them to choose one observable change. The change might be a required reproduction before closing, a second verifier for high-severity fixes, a regression test for every reopen, or a shorter reopen window. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Compare the reopen rate with the defect severity and the fix size. A small fix in a critical path may deserve more scrutiny than a large cosmetic change. Report the groups separately and describe the cases. A single overall rate can make a safe area look risky or a risky area look safe.",
      "Review the defects that were reopened after the customer reported them again. That sequence means the customer experienced the same problem twice, which is worse than a late first fix. Record the customer impact and the apology. The owner should see the cost of a weak verification step.",
      "End the review with one change and a date to re-measure. The change might be a required reproduction, a second verifier for critical defects, a regression test, or a shorter review window. Record the owner and the expected effect. Repeat the protocol with the same definitions so the comparison is honest.",
      "A useful additional view is the share of reopens that happened after the fix had already passed a code review. A review is not a substitute for running the reproduction, and a reopen after review points to a verification gap rather than a coding gap. Record the review and the verification separately. Check whether the fix changed more than the reported behavior. A broad fix can introduce a regression in a nearby path, which then appears as a reopen. Record the lines changed and the tests that cover the area. A smaller fix is easier to verify and easier to reverse.",
      "Ask the customer who reported the reopen whether the second fix was faster than the first. A slow second fix compounds the frustration and may damage the relationship more than the original defect. Record the time to the second fix. The owner should see the full customer cost, not only the internal reopen rate.",
      "Do not pool a reopen caused by a failed deployment with one caused by a coding error. A deployment that did not include the fix is a release problem, not a fix problem. Record the build that reached production and the build that contained the fix. The pattern can reveal a pipeline gap.",
      "A useful additional view is the share of reopened defects that were caught by an automated test before the customer reported them. A test that catches the reopen is a success even though the defect returned. Record the test and the time it ran. That view separates a detection win from a quality failure.",
      "Ask the customer support team whether the reopened defect produced a second complaint or a refund request. A reopen that reaches support again has a customer cost that the engineering record does not show. Record the customer contact and the remedy. That view helps the owner prioritize the verification work by impact rather than by ticket count alone."
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
      "how-often-do-offshore-releases-need-a-rollback-rehearsal",
      "how-often-do-offshore-support-escalations-miss-their-response-target"
    ]
  },
  {
    "slug": "how-long-does-a-client-database-change-approval-take",
    "title": "How long does a client database change approval take?",
    "excerpt": "A protocol for measuring approval delay by change type, reviewer, and the time spent waiting for missing evidence.",
    "topic": "Database change approval time",
    "published": "2026-11-09",
    "hero": "/nov09/research/how-long-does-a-client-database-change-approval-take.webp",
    "body": [
      "This protocol asks how long a client database change approval takes from submission to decision. The unit is one change request for one production database, identified by the change identifier and the target environment. The study measures the time in review, the time waiting for missing evidence, and the time to execution. It does not judge whether the change was necessary or whether the reviewer was careful enough.",
      "Record whether the request included a rollback plan at submission or only after the reviewer asked. A request that arrives incomplete creates a second queue and inflates the apparent review time. Measure the time to a complete request separately from the time to a decision. That split shows whether the delay is preparation or approval.",
      "Set the scope to one client, one database platform, and one change policy. Record the change types, the approvers, and the review window at the start. If the policy changes during the window, keep the earlier definition for requests already submitted and analyze the later cohort separately. A new reviewer can look like a slower process when it is only a different queue.",
      "Check whether the reviewer had delegated authority for the change type. A reviewer who must consult another person for every schema change adds a hidden stage. Record the delegation and the person consulted. The approval time should reflect the actual decision path, not an assumed one.",
      "Define the population as every change request submitted in the window, including requests that were cancelled, rejected, or still pending at the observation date. The unit is the request, not the migration file, because one request can include several statements. A resubmitted request after missing evidence is a new unit linked to the original. Test the definition on two recent requests before collection.",
      "Measure the time from approval to execution as its own interval. A fast approval that waits days for a deploy window still delays the business. Record the window and the reason for the wait. The client may prefer a faster execution path over a faster approval.",
      "Record the change type, the affected tables, the estimated row count, the risk tier, the reviewer, the submission time, the first review time, the decision time, and the execution time. Add the number of times the request was returned for missing evidence and the evidence that was missing. Keep the change record with the approval thread. Ask the reviewer which part of the request was hardest to assess. The answer may point to a missing row estimate, an unclear rollback, or an unfamiliar table. Record the answer and update the template. A small template change can remove a recurring question.",
      "Report the number of requests, the median time to first review, the median time to decision, and the median time to execution. Show the counts by change type, risk tier, and reviewer. Present the share that waited more than one review window and the share that required an emergency path. Use the same denominator for every rate.",
      "A useful additional view is the share of requests that were approved with conditions. A conditional approval can be a good control, but it can also hide an unresolved question. Record the condition, the owner, and the verification date. The review should show whether the condition was closed before execution.",
      "Inspect the slowest requests and describe which stage dominated without naming the reviewer. A wait before first review may point to a missing reviewer or an unclear queue, while a wait after review may point to missing rollback evidence. Compare the result with the change type and the row count. Report cancelled and pending requests separately.",
      "Do not compare approval times across clients with different change policies. A client with a weekly committee and one with a daily delegate are not measuring the same process. Keep the comparison inside one client and one policy, or state the difference clearly. The record cannot show whether the reviewer made a good decision or whether the change was safe. It can show only the submission, review, and decision times. A fast approval is not proof of good control, and a slow one is not proof of neglect. The protocol also cannot capture an approval given in a meeting and recorded later.",
      "Check whether the request was submitted during a holiday or a release freeze. A long wait in that period is a scheduling effect, not a review failure. Record the calendar context and report it beside the median. The reader should not attribute a planned pause to the reviewer.",
      "Give the result to the client owner and the offshore lead and ask them to choose one observable change. The change might be a pre-review checklist, a named backup reviewer, a weekly approval slot, or a smaller change template. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "A useful additional view is the number of requests that were withdrawn before a decision. A withdrawn request may indicate that the requester found a simpler path or that the process was too heavy. Record the reason where it is known. The pattern can reveal unnecessary changes as well as unnecessary delays.",
      "Review the emergency path separately from the normal window. An emergency that is used often may mean the normal window is too slow, not that the team is careless. Record the emergency reason and the post-change review. The owner should fix the normal path before tightening the exception.",
      "Close the review with one change and a date to re-measure. The change might be a pre-review checklist, a delegate for low-risk changes, a weekly slot, or a clearer rollback template. Record the owner and the expected effect. Repeat the protocol with the same definitions and compare the same fields.",
      "A useful additional view is the share of change requests that were submitted with a tested rollback. A request without a tested rollback often returns for more evidence, which inflates the approval time. Record the rollback evidence and the reviewer's question. The pattern can point to a template that is missing a required field.",
      "Check whether the reviewer had access to a staging copy that matched production. A reviewer who cannot see the result must rely on the description, which adds a round of questions. Record the environment and the evidence. A shared staging environment can shorten the review without weakening the control.",
      "Ask the offshore lead which change was easiest to approve and why. The answer often reveals a template or an example that worked. Reuse that example for the next request instead of writing a new format. Consistency is a cheap way to reduce review time.",
      "Do not treat a rejected request as a failure of the process. A rejection can prevent a risky change, which is a success for the control. Record the rejection reason and whether the requester submitted a safer alternative. The review should value the catch, not only the speed.",
      "A useful additional view is the share of requests that were approved by a backup reviewer. A backup can keep the window moving, but a high share may mean the primary is overloaded. Record the backup and the reason. The owner can then decide whether to add a reviewer or redistribute the queue.",
      "Record the reviewer's queue depth on the day of the decision. A reviewer with ten pending changes will take longer than one with two, even when the request is identical. The queue depth is context, not an excuse, but it helps the owner decide whether to add a reviewer or reduce the volume. Report it beside the median so the number is not read as a personal performance measure. A queue-depth note is context, not an excuse, and it belongs in the same sentence as the review window."
    ],
    "sources": [
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "AWS Well-Architected Framework, operational excellence",
        "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
      ],
      [
        "PostgreSQL documentation, backup and restore",
        "https://www.postgresql.org/docs/current/backup.html"
      ],
      [
        "U.S. GAO, internal control standards",
        "https://www.gao.gov/greenbook"
      ]
    ],
    "related": [
      "how-often-do-offshore-releases-need-a-rollback-rehearsal",
      "what-share-of-offshore-teams-rotate-secrets-on-schedule"
    ]
  },
  {
    "slug": "what-share-of-offshore-teams-rotate-secrets-on-schedule",
    "title": "What share of offshore teams rotate secrets on schedule?",
    "excerpt": "A protocol for measuring rotation coverage, the stale credentials that remain live, and the evidence that old keys stop working.",
    "topic": "Secrets rotation coverage",
    "published": "2026-11-09",
    "hero": "/nov09/research/what-share-of-offshore-teams-rotate-secrets-on-schedule.webp",
    "body": [
      "This protocol asks what share of offshore teams rotate their secrets on the schedule the client policy requires. The unit is one secret in scope for one team, identified by the secret identifier and the system it protects. The study measures whether the secret was rotated within the policy window and whether the old value was revoked. It does not judge whether the secret was exposed or whether the policy itself is sensible.",
      "Record whether the rotation was manual or automated. A manual process can be on time in a quiet month and late during a release, while an automated process may fail silently. Report the method and the last failure. That view helps the owner choose between more automation and better monitoring.",
      "Set the scope to one client, one secret manager, and one rotation policy. Record the secret categories, the required intervals, and the systems that consume each secret. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new interval can look like a coverage improvement when it is only a different rule.",
      "Check whether the rotation included every environment, not only production. A staging key that is never rotated can still reach a shared database or a third-party sandbox. Record the environment and the data it can access. The scope of the secret matters as much as the rotation date.",
      "Define the population as every secret in the inventory that the team can access, including secrets that were created during the window and secrets that are no longer used. The unit is the secret, not the system, because one system can have several credentials. A rotated secret that is recreated under the same identifier is a new unit with a link. Test the definition on two ordinary secrets before collection.",
      "Ask the team how they would know a rotation failed. A process without an alert can leave a service broken until a customer reports it. Record the monitoring and the person who receives the alert. A rotation that succeeds technically but breaks an integration is still a failure.",
      "Record the secret category, the owner, the last rotation date, the required interval, the expiry date, and whether the old value was revoked. Add the number of dependent services and whether each was verified after rotation. Keep the rotation log with the inventory. A second reviewer should be able to tell whether the rotation was complete from the record.",
      "A useful additional view is the share of secrets that were removed rather than rotated. An unused integration should be retired instead of given a new key. Record the last use date and the owner. Removal reduces the attack surface in a way that rotation cannot.",
      "Report the number of secrets, the share rotated on schedule, the share rotated late, and the share with no rotation record. Show the counts by category and by owner group. Present the share where the old value remained valid after rotation and the median days overdue. Use the same denominator for every rate.",
      "Do not treat a long expiry as proof of good practice. A secret with a one-year expiry may be rotated on schedule and still be too powerful. Review the scope and the number of systems that use it. Rotation frequency and least privilege are separate controls.",
      "Inspect the stale secrets and describe the pattern without naming the person. A cluster in one category may point to a system without an API, while a cluster in one owner group may point to a missing runbook. Compare the result with the number of dependent services and the last use date. Report unused secrets separately because they may be candidates for removal.",
      "Check whether the team can rotate a secret without the original creator. A runbook that depends on one person is a single point of failure. Record the person who ran the test and whether they had done it before. The review should test the runbook, not only the secret.",
      "The record cannot show whether a secret was compromised or whether the rotation prevented an incident. It can show only that the rotation happened and whether the old value was revoked. A late rotation is not proof of a breach, and an on-time rotation is not proof of good hygiene. The protocol also cannot capture a secret that was rotated outside the secret manager.",
      "A useful additional view is the time from a rotation to the confirmation that every dependent service works. A fast rotation that leaves a service broken for a day is not a fast recovery. Record the verification time and the checks used. The owner should see the whole path.",
      "Give the result to the security owner and the offshore lead and ask them to choose one observable change. The change might be an automated rotation, a named owner per category, a quarterly revocation test, or a shorter interval for high-risk secrets. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Review the inventory for secrets that are shared between clients. A shared key makes rotation riskier and blame harder to assign. Record the clients and the owner. If a shared key cannot be removed, write the compensating control and the review date.",
      "Ask the client security owner which secret worries them most. The answer may differ from the inventory risk ranking and can reveal a business dependency that the team did not see. Record the answer and the follow-up. The review should include the owner's judgment, not only the scan.",
      "Close the review with one change and a date to re-measure. The change might be automated rotation for one category, a removal of an unused integration, a shorter interval, or a better alert. Record the owner and the expected effect. Repeat the protocol with the same definitions.",
      "A useful additional view is the share of secrets that were rotated without a service interruption. A rotation that meets the date but breaks an integration is not a successful control. Record the interruption and the recovery time. The owner should see the operational cost beside the compliance rate.",
      "Check whether the secret inventory includes the credentials stored in CI variables and deployment tools. These are often outside the secret manager and are easy to forget. Record the location and the owner. A rotation program that covers only the vault leaves a parallel set of stale keys.",
      "Ask the engineer who performed the last rotation what they would change about the runbook. A runbook that assumes a specific console or a specific person will fail when either changes. Record the answer and update the steps. The next review should test the revised runbook.",
      "Do not use the number of rotations as a proxy for security. A secret can be rotated every month and still be shared across ten services. Review the scope and the number of consumers. Rotation and least privilege are separate questions, and both belong in the report.",
      "A useful additional view is the share of secrets with a named owner who is still employed. An orphaned secret has no one to rotate it and no one to remove it. Record the owner and the last confirmation. The review should assign an owner or schedule the removal.",
      "Check whether the team has a documented owner for the secret manager itself, not only for the individual secrets. A system without an owner can drift into an old version or an expired certificate while every individual secret looks fine. Record the system owner and the last review. The report should include the platform that holds the secrets, because a gap there affects every rotation beneath it. Add the platform owner to the quarterly invitation so the review covers the system and the secrets together."
    ],
    "sources": [
      [
        "NIST SP 800-57 key management",
        "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final"
      ],
      [
        "OWASP secrets management cheat sheet",
        "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
      ],
      [
        "CIS Benchmarks",
        "https://www.cisecurity.org/cis-benchmarks"
      ],
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ]
    ],
    "related": [
      "how-long-does-a-client-database-change-approval-take",
      "how-often-do-offshore-support-escalations-miss-their-response-target"
    ]
  },
  {
    "slug": "how-often-do-offshore-support-escalations-miss-their-response-target",
    "title": "How often do offshore support escalations miss their response target?",
    "excerpt": "A protocol for measuring missed response targets, the reason, the stage, and whether the customer was told about the delay.",
    "topic": "Escalation response targets",
    "published": "2026-11-09",
    "hero": "/nov09/research/how-often-do-offshore-support-escalations-miss-their-response-target.webp",
    "body": [
      "This protocol asks how often offshore support escalations miss their response target and why. The unit is one escalation recorded during the window, identified by the ticket identifier and the escalation time. The study measures the time to acknowledgement, the time to the first substantive response, and the time to resolution. It does not judge whether the target itself was realistic.",
      "Record whether the customer was told about the delay before the target passed or only after they asked. A proactive update is a different service experience from a silent miss. Measure the update time separately from the response time. The owner can then fix communication without changing the target.",
      "Set the scope to one client, one support queue, and one escalation policy. Record the categories, the response targets, the on-call hours, and the channels at the start. If the policy changes during the window, keep the earlier definition for tickets already open and analyze the later cohort separately. A new target can look like a performance change when it is only a different clock.",
      "Check whether the escalation was routed to the correct queue on the first attempt. A misrouted escalation can miss the target while the right team never sees it. Record the queue and the reroute count. That field separates a routing problem from a capacity problem.",
      "Define the population as every escalation created in the window, including escalations that were downgraded, cancelled, or still open at the observation date. The unit is the escalation, not the ticket, because one ticket can be escalated more than once. A second escalation for the same issue is a new unit linked to the first. Test the definition on two recent escalations before collection.",
      "A useful additional view is the share of escalations that were resolved by the first responder without a handoff. A high share may indicate a clear runbook, while a low share may indicate that the first responder lacks access or authority. Record the handoff count and the reason. The pattern is useful for training.",
      "Record the ticket category, the severity, the channel, the escalation time, the first acknowledgement, the first substantive response, and the resolution time. Add the on-call shift, the responder, and whether the customer was told about the delay. Keep the ticket thread with the record. A second reviewer should be able to rebuild the timeline.",
      "Ask the on-call engineer which escalation was hardest to assess at 2 a.m. The answer often points to a missing log, a stale dashboard, or an unclear severity rule. Record the gap and fix one item. A night-time review is more honest than a daytime retrospective. Ask the engineer what they would put on the first screen of the runbook.",
      "Report the number of escalations, the share that met the acknowledgement target, the share that met the substantive-response target, and the share that met the resolution target. Show the counts by category, severity, and shift. Present the median delay for each missed target. Use the same denominator for every rate.",
      "Separate a missed acknowledgement from a missed substantive response. An automated acknowledgement can meet the first target while the customer still waits for an answer. Report both targets and the median gap. A team can look good on one measure and poor on the other.",
      "Inspect the missed targets and describe the stage without naming the responder. A cluster at shift handoff may point to a handoff gap, while a cluster in one category may point to a missing runbook. Compare the result with the on-call hours and the ticket volume. Report escalations that were acknowledged but never received a substantive response separately.",
      "Do not compare response targets across categories with different complexity. A password reset and a data corruption report are not the same service. Keep the comparison inside one category, or report the category mix beside the overall rate. A single average can hide the area that needs help.",
      "The record cannot show whether the customer was satisfied or whether the target was appropriate for the severity. It can show only the timestamps and the recorded communication. A missed target is not proof of poor support, because a complex issue may need more time. The protocol also cannot capture an escalation handled in a call that left no ticket note.",
      "Check whether the escalation was created after the customer had already waited on a normal ticket. A late escalation can inherit a long wait that the on-call team did not cause. Record the time from the customer's first message to the escalation. The owner should see the whole customer journey.",
      "Give the result to the support lead and the client owner and ask them to choose one observable change. The change might be a handoff template, a named backup responder, a revised target for one category, or a customer delay message. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "A useful additional view is the share of escalations that were downgraded after triage. A downgrade can be correct, but a pattern may mean the support team is escalating too early or the severity guide is unclear. Record the downgrade reason. The review should improve the first decision, not blame the on-call team.",
      "Review the handoff between shifts for the escalations that missed a target. A ticket that changes hands without a summary often loses time. Record the handoff note and whether the next responder had to ask a question. A short template can remove a recurring delay.",
      "Close the review with one change and a date to re-measure. The change might be a handoff template, a backup responder, a category-specific target, or a proactive delay message. Record the owner and the expected effect. Repeat the protocol with the same definitions and compare the same fields.",
      "A useful additional view is the share of missed targets that occurred during a shift handoff. A handoff without a written summary is a common source of delay and duplicate work. Record the handoff time and the note. The owner can fix the template before changing the target.",
      "Check whether the escalation included the customer's original message and the steps already tried. A responder who must reconstruct the history loses time and may repeat a failed step. Record the evidence at escalation. A short required field can remove that delay.",
      "Ask the support agent which escalation they hesitated to send because they were unsure of the severity. The answer points to a gap in the guide, not a lack of courage. Record the case and add an example. The next review should show whether the hesitation decreased.",
      "Do not compare a target met by an automated acknowledgement with one met by a human response. The customer experience is different even when the timestamp looks the same. Report the two measures separately and describe the automated share. A target that can be met by a bot is not a service target.",
      "A useful additional view is the share of escalations that were closed without a customer confirmation. A ticket can be resolved from the team's perspective while the customer still has the problem. Record the confirmation and the time. The closure rate is more meaningful when it includes the customer's view.",
      "Compare the missed-target rate with the number of open tickets per responder during the same shift. A spike in volume can explain a miss that looks like a process failure. Record the volume and the staffing. The owner should fix capacity before changing the target, because a tighter target on an understaffed shift only produces more missed targets and less trust. Record the staffing change beside the target change so the next review can tell which one mattered. Keep the staffing note in the same record as the target miss so the owner can compare the two without a second export. Add the scheduled headcount and the actual headcount for the shift, because an absence can explain a miss that the roster alone does not show. That pair of numbers gives the next review a fair basis for deciding whether the target, the capacity, or the handoff needs to change."
    ],
    "sources": [
      [
        "Atlassian incident management handbook",
        "https://www.atlassian.com/incident-management/handbook"
      ],
      [
        "Google SRE Book, managing incidents",
        "https://sre.google/sre-book/managing-incidents/"
      ],
      [
        "NIST SP 800-61 incident handling guide",
        "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      ],
      [
        "U.S. Bureau of Labor Statistics, occupational employment and wage statistics",
        "https://www.bls.gov/oes/"
      ]
    ],
    "related": [
      "what-share-of-offshore-defects-are-reopened-after-a-fix",
      "what-share-of-offshore-teams-rotate-secrets-on-schedule"
    ]
  }
];
