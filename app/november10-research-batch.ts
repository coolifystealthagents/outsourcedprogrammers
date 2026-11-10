import type { ResearchPost } from './fleet-content';

export const november10ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-long-do-revoked-offshore-credentials-stay-usable-after-an-exit",
    "title": "How long do revoked offshore credentials stay usable after an exit?",
    "excerpt": "A protocol for measuring revocation latency, the credentials that survive an exit, and the evidence that the old login has stopped working.",
    "topic": "Credential revocation latency",
    "published": "2026-11-10",
    "hero": "/nov10/research/how-long-do-revoked-offshore-credentials-stay-usable-after-an-exit.webp",
    "body": [
      "This protocol asks how long an offshore credential remains usable after the account owner has left the engagement. The unit is one credential in scope for one exit, identified by the account identifier and the exit record. The study measures the time from the exit decision to the last successful use of the old credential. It does not judge whether the exit was planned or whether the credential was exposed before removal.",
      "Define the exit decision time as the timestamp recorded by the client owner, not the time the contractor stopped working. A person can stop working before the formal exit, and the gap matters for the risk window. Record both times and report the difference. The decision time is the fair start of the revocation clock.",
      "Set the scope to one client, one identity provider, and one offboarding policy. Record the credential types, the systems in scope, and the person who confirms each revocation at the start. If the policy changes during the window, keep the earlier definition for exits already in progress and analyze the later cohort separately. A new tool can look like a faster process when it is only a different queue.",
      "Measure successful authentication attempts as well as the formal disable event. A credential is usable if a system accepts it, even when the directory says the account is disabled. Record the last successful use and the source address. If the system cannot log the source, state the limitation and use the application log instead.",
      "Define the population as every exit in the window, including exits that were planned, urgent, or later reversed. The unit is the credential, not the person, because one person can hold several credentials with different owners. A credential created during the exit process is a new unit linked to the same exit. Test the definition on two recent exits before collection begins.",
      "Record the credential type, the system, the owner, the last use before the exit, the revocation method, the revocation time, and the first failed authentication. Add the person who verified the result and the evidence they used. Keep the exit record and the access log linked. A second reviewer should be able to rebuild the timeline without asking the team.",
      "Separate a credential that was disabled from one that was also revoked at the provider. Disabling an account in the directory may not invalidate a token that the provider issued earlier. Record the provider revocation and the session invalidation separately. The two steps answer different questions and should not be collapsed into one checkbox.",
      "Check the indirect credentials, such as personal access tokens, SSH keys, package registry tokens, and delegated mailboxes. These are often created outside the identity provider and are missed by a directory-only review. Record the token identifier and the owner who can revoke it. The study should say which credential types were not visible.",
      "Report the number of exits, the number of credentials in scope, the median revocation time, and the share that remained usable after the exit date. Show the counts by credential type and by revocation method. Present the share with no recorded verification and the longest observed delay. Use the same denominator for every rate and show exits with incomplete records.",
      "Separate a delay caused by a missing owner from one caused by a technical limitation. A vendor portal with no administrative API is a different problem from a system whose owner was on leave. Report the two categories separately so the client can choose the right fix. A new tool will not solve an ownership gap.",
      "Inspect the slowest revocations and describe the pattern without naming the engineer. A cluster around a particular system may point to a shared password, while a cluster around a particular day may point to a batch process. Compare the result with the exit type and the number of credentials. Report urgent exits separately because they may use a different path.",
      "Do not treat a fast disable as proof that the credential is gone. An active session or a refresh token can outlive the visible account state. Record the session invalidation and the token revocation as separate evidence. A fast directory change with no provider check is an incomplete result.",
      "The record cannot show whether the credential was used for an unauthorized action before revocation. It can show only that the system accepted a login after the exit. A late revocation is not proof of a breach, and an on-time disable is not proof of safe access. The protocol also cannot capture a credential that was copied outside the monitored systems.",
      "A useful additional view is the share of exits where the contractor reported a credential that the client had not inventoried. A self-report is not a control, but it can reveal a shadow integration. Record the reported credential and whether it was revoked. That field turns the exit into a small discovery exercise.",
      "Give the result to the client security owner and the offshore lead and ask them to choose one observable change. The change might be a same-hour provider revocation, a named owner per credential type, a pre-exit inventory, or a quarterly old-credential test. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Close the review with one change and a date to re-measure. The change should address the credential type that caused the longest delay, not the one that is easiest to fix. Record the expected effect and the evidence that will prove it. A revocation program that never tests an old credential is relying on a policy, not a control."
    ],
    "sources": [
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-63B digital identity guidelines",
        "https://csrc.nist.gov/pubs/sp/800/63b/final"
      ],
      [
        "CIS Benchmarks",
        "https://www.cisecurity.org/cis-benchmarks"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "what-share-of-outsourced-production-work-uses-a-shared-admin-account",
      "what-share-of-offshore-delivery-decisions-are-recorded-in-writing"
    ]
  },
  {
    "slug": "what-share-of-outsourced-production-work-uses-a-shared-admin-account",
    "title": "What share of outsourced production work uses a shared admin account?",
    "excerpt": "A protocol for finding human-used service accounts, measuring their exposure, and separating automation from borrowed admin access.",
    "topic": "Shared admin account use",
    "published": "2026-11-10",
    "hero": "/nov10/research/what-share-of-outsourced-production-work-uses-a-shared-admin-account.webp",
    "body": [
      "This protocol asks what share of outsourced production work is performed through an account that more than one person can use. The unit is one production change record in the window, identified by the change identifier and the actor account. The study measures whether the actor was a named person, a shared human-used account, or an application service account. It does not judge whether the change itself was correct.",
      "Define the three actor types before collection begins. A named account belongs to one person, a shared human-used account can be opened by several people, and an application account is used only by software with no interactive login. Record the evidence for the classification, such as the account owner field and the login source. A vague label will produce an unreliable share.",
      "Set the scope to one client, one production environment, and one change policy. Record the systems, the account inventory, and the review window at the start. If a new identity tool is introduced during the window, keep the earlier definition for changes already recorded and analyze the later cohort separately. A migration can look like an improvement when it is only a different account model.",
      "Define the population as every production change in the window, including changes that were later reverted or completed by a vendor. The unit is the change record, not the account, because one account can perform many changes. A change executed by a script under a shared human account is still a shared-account event. Test the definition on two recent changes before collection begins.",
      "Record the change identifier, the system, the actor account, the account type, the change type, the timestamp, the approver, and the evidence used for classification. Add the account owner and the last access review date. Keep the access inventory and the change log linked. A second reviewer should be able to confirm the type from the record.",
      "Ask the engineers how they would perform the same change without the shared account. If the answer is that the named path does not exist, the finding is a tooling gap rather than a discipline problem. Record the missing role or permission. The review should distinguish a shortcut from a forced workaround.",
      "Check the emergency path separately. A shared break-glass account may be legitimate during an incident, but it should be rare, logged, and rotated after use. Record the incident identifier and the post-use review. A high share of emergency use may mean the normal named path is too slow.",
      "Report the number of changes, the share by actor type, and the share of shared-account changes that were approved by the same person who executed them. Show the counts by system and change type. Present the number of distinct people who used each shared account. Use the same denominator for every rate and show incomplete records.",
      "A useful additional view is the share of shared-account changes that could not be attributed to a person after the fact. An unattributable change is the core risk of the shared credential, even when the change was safe. Record whether the team could name the operator from logs or memory. The review should report that share beside the usage share.",
      "Inspect the systems with the highest shared-account use and describe the pattern without naming individuals. A legacy console may lack single sign-on, while a vendor portal may charge per named user. Compare the result with the change volume and the approval path. Report emergency changes separately because they follow a different rule.",
      "Do not assume that a service account is safe because it is not used by a person. A service account with interactive login enabled and a password in a wiki is a shared admin account in practice. Record the interactive flag and the secret storage location. The classification should follow the actual use, not the account label.",
      "The record cannot show whether a shared account was used maliciously or whether the change would have been safer under a named login. It can show only which account executed the change and whether a person could be identified. A high shared-account share is not proof of an incident, but it is proof of weak attribution. The protocol also cannot capture a change made directly in a vendor console that exports no log.",
      "Check whether the client has a contractual rule about named access. A contract clause can make the finding easier to act on, while a missing clause may require a policy change first. Record the clause and the owner who can enforce it. The study should not assume that a technical fix is the only available response.",
      "Give the result to the client security owner and the offshore lead and ask them to choose one observable change. The change might be a named role for one system, a short-lived credential, a break-glass process, or a monthly account review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Close the review with one change and a date to re-measure. The change should target the system with the most unattributable changes, not the account that is easiest to rename. Record the expected effect and the evidence that will prove it. A ban that is not measured will be replaced by a new shared login during the next busy release."
    ],
    "sources": [
      [
        "NIST SP 800-53 access control",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-63B digital identity guidelines",
        "https://csrc.nist.gov/pubs/sp/800/63b/final"
      ],
      [
        "OWASP secrets management cheat sheet",
        "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
      ],
      [
        "CIS Benchmarks",
        "https://www.cisecurity.org/cis-benchmarks"
      ]
    ],
    "related": [
      "how-long-do-revoked-offshore-credentials-stay-usable-after-an-exit",
      "how-much-review-queue-time-comes-from-missing-acceptance-criteria"
    ]
  },
  {
    "slug": "how-much-of-an-offshore-incident-is-spent-waiting-for-a-severity-decision",
    "title": "How much of an offshore incident is spent waiting for a severity decision?",
    "excerpt": "A protocol for measuring the gap between detection, severity decision, and the first substantive response in a distributed support pod.",
    "topic": "Severity decision delay",
    "published": "2026-11-10",
    "hero": "/nov10/research/how-much-of-an-offshore-incident-is-spent-waiting-for-a-severity-decision.webp",
    "body": [
      "This protocol asks how much of an offshore incident is spent waiting for a severity decision. The unit is one incident in the window, identified by the incident identifier and the detection time. The study measures the time from detection to the first severity assignment, from assignment to the first substantive response, and from response to resolution. It does not judge whether the final severity was correct.",
      "Define detection as the first evidence that a customer-visible symptom occurred, not the time the ticket was created. A support agent may notice a pattern before a ticket exists, and that earlier time changes the delay. Record the source of detection and the person who saw it. The decision clock should start from the earliest reliable evidence.",
      "Set the scope to one client, one support queue, and one severity policy. Record the levels, the decision owners, the on-call hours, and the channels at the start. If the policy changes during the window, keep the earlier definition for open incidents and analyze the later cohort separately. A new severity label can look like a faster decision when it is only a different scale.",
      "Measure the decision as a recorded event, not a recollection. A severity set in a call and written down two hours later has a different delay from one recorded at the moment of the call. Record both the verbal time and the recorded time where they differ. The gap is a data quality finding in its own right.",
      "Define the population as every incident created in the window, including incidents that were downgraded, merged, or still open at the observation date. The unit is the incident, not the ticket, because one ticket can produce several incidents. A second severity decision after new evidence is a new event linked to the same incident. Test the definition on two recent incidents before collection begins.",
      "Record the detection time, the source, the initial symptom, the first severity, the decision owner, the decision time, the first substantive response, and the resolution time. Add the shift, the responder, and whether the decision required a call. Keep the incident timeline with the record. A second reviewer should be able to rebuild the sequence.",
      "Separate a delay caused by missing evidence from one caused by an unavailable decision owner. A clear symptom with no owner is a staffing problem, while a vague symptom with an owner is an evidence problem. Report the two categories separately so the client can choose the right fix. A new severity guide will not solve an unavailable approver.",
      "Check whether the offshore pod had authority to set a temporary severity. A pod that must wait for the client on every incident will show a longer decision time even when its classification is correct. Record the temporary rule and whether it was used. The review should distinguish authority from speed.",
      "Report the number of incidents, the median time to severity, the median time to first response, and the share that waited longer than the policy target. Show the counts by severity and by shift. Present the share of decisions that required a call and the share with no recorded owner. Use the same denominator for every rate.",
      "A useful additional view is the share of incidents where the severity changed after the first response. A later change can be correct, but a pattern may mean the first decision was rushed or the evidence was incomplete. Record the old level, the new level, and the reason. The review should separate a learning update from a correction of a bad first call.",
      "Inspect the slowest decisions and describe the stage without naming the responder. A cluster at shift handoff may point to a missing summary, while a cluster in one symptom may point to an unclear example. Compare the result with the on-call hours and the incident volume. Report incidents that were detected outside business hours separately.",
      "Do not compare decision times across severity levels without showing the mix. A critical incident may be decided faster because it is obvious, while a minor issue may wait for a weekly review. Report the level and the policy target beside the median. A single average can hide the area that needs attention.",
      "The record cannot show whether the customer was satisfied or whether the severity was appropriate. It can show only the timestamps and the recorded decisions. A fast decision is not proof of good judgment, and a slow one is not proof of neglect. The protocol also cannot capture a severity agreed in a side conversation and never written down.",
      "Check whether the incident had a named communicator separate from the decision owner. A single person who decides and communicates can delay both steps. Record the roles and the first customer update. The review should show whether the communication waited for the severity or proceeded in parallel.",
      "Give the result to the support lead and the client owner and ask them to choose one observable change. The change might be a temporary severity authority, a named backup, a clearer example for one symptom, or a parallel communication template. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Close the review with one change and a date to re-measure. The change should address the stage that consumed the most time, not the stage that is easiest to document. Record the expected effect and the evidence that will prove it. A severity matrix that is never timed is only a policy document."
    ],
    "sources": [
      [
        "NIST SP 800-61 incident handling guide",
        "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      ],
      [
        "Google SRE Book, managing incidents",
        "https://sre.google/sre-book/managing-incidents/"
      ],
      [
        "Atlassian incident management handbook",
        "https://www.atlassian.com/incident-management/handbook"
      ],
      [
        "AWS Well-Architected operational excellence",
        "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html"
      ]
    ],
    "related": [
      "what-share-of-offshore-delivery-decisions-are-recorded-in-writing",
      "how-long-do-revoked-offshore-credentials-stay-usable-after-an-exit"
    ]
  },
  {
    "slug": "what-share-of-offshore-delivery-decisions-are-recorded-in-writing",
    "title": "What share of offshore delivery decisions are recorded in writing?",
    "excerpt": "A protocol for sampling delivery decisions, checking the owner and evidence, and measuring how often an action is closed.",
    "topic": "Written decision coverage",
    "published": "2026-11-10",
    "hero": "/nov10/research/what-share-of-offshore-delivery-decisions-are-recorded-in-writing.webp",
    "body": [
      "This protocol asks what share of offshore delivery decisions are recorded in writing with an owner and a date. The unit is one decision in the window, identified by the decision topic and the date it was made. The study measures whether a written record exists, whether it names the owner and the evidence, and whether the action was closed. It does not judge whether the decision was wise.",
      "Define a decision as a choice that changes scope, risk, access, architecture, or a customer commitment. A status update or a task assignment is not a decision for this study. Record the categories and the person who classifies an event. Without a shared definition, two reviewers will count different things.",
      "Set the scope to one client, one delivery team, and one quarter. Record the tools, meeting cadence, and decision categories at the start. If a new tool is introduced during the quarter, keep the earlier definition for decisions already recorded and analyze the later cohort separately. A move to a new log can look like better coverage when it is only a different place to search.",
      "Define the population from the meeting notes, chat channels, and ticket history rather than from the decision log alone. Starting from the log would count only the decisions that were already written down. The review should search for decisions that left no record and include them as missing. Test the search on two recent weeks before collection begins.",
      "Record the decision topic, the category, the date, the owner, the options considered, the evidence link, the action, and the closure date. Add whether the record was written during the meeting or later. Keep the source message or meeting note with the record. A second reviewer should be able to confirm the decision from the evidence.",
      "Separate a decision that was recorded but not assigned from one that was assigned but not closed. The first is a documentation gap, while the second is a follow-through gap. Report the two shares separately. A team can look good on coverage and poor on completion, or the reverse.",
      "Check whether the record includes the alternative that was rejected and the reason. A decision log that records only the chosen option cannot explain a later reversal. Record the alternatives where they were discussed. The study should not require a long rationale for a small decision.",
      "Report the number of decisions, the share with a written record, the share with a named owner, and the share with a linked evidence item. Show the counts by category and by team. Present the share closed by the due date and the median days to closure. Use the same denominator for every rate and show decisions with incomplete records.",
      "A useful additional view is the share of decisions that were reopened within the quarter. A reopened decision may mean the context changed, the evidence was weak, or the owner was not empowered. Record the reason and the new decision. The review should distinguish learning from churn.",
      "Inspect the missing records and describe the pattern without naming the person. A cluster in one meeting may point to a missing scribe, while a cluster in one category may point to a category that the team does not recognize as a decision. Compare the result with the meeting cadence and the number of attendees. Report decisions made in side conversations separately.",
      "Do not treat a chat message as a written decision unless it names the owner and the action. A message that says let us go with option B is a discussion until someone records the commitment. The review should apply the same evidence rule to every tool. A low threshold will inflate the coverage number.",
      "The record cannot show whether the decision was correct or whether the team followed it. It can show only whether the decision was written down and whether the action was closed. A missing record is not proof of a bad decision, but it is a gap in accountability. The protocol also cannot capture a decision that was made and reversed before anyone wrote it down.",
      "Check whether the client and the offshore team use the same log. Two logs can each look complete while a decision falls between them. Record the tool and the audience for each entry. The review should count a decision once, using the client-facing record when both exist.",
      "Give the result to the delivery lead and the client owner and ask them to choose one observable change. The change might be a named scribe, a shorter template, a weekly closure review, or a single shared log. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Close the review with one change and a date to re-measure. The change should address the category with the most missing records, not the category that is easiest to write. Record the expected effect and the evidence that will prove it. A decision log that is never sampled becomes an archive rather than a management tool."
    ],
    "sources": [
      [
        "Google Technical Writing courses",
        "https://developers.google.com/tech-writing"
      ],
      [
        "Atlassian team playbook",
        "https://www.atlassian.com/team-playbook/plays"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "U.S. GAO internal control standards",
        "https://www.gao.gov/greenbook"
      ]
    ],
    "related": [
      "how-much-of-an-offshore-incident-is-spent-waiting-for-a-severity-decision",
      "how-much-review-queue-time-comes-from-missing-acceptance-criteria"
    ]
  },
  {
    "slug": "how-much-review-queue-time-comes-from-missing-acceptance-criteria",
    "title": "How much review queue time comes from missing acceptance criteria?",
    "excerpt": "A protocol for separating reviewer capacity from missing information, measuring rework, and finding the criteria that cause repeat rounds.",
    "topic": "Review queue delay",
    "published": "2026-11-10",
    "hero": "/nov10/research/how-much-review-queue-time-comes-from-missing-acceptance-criteria.webp",
    "body": [
      "This protocol asks how much of an offshore review queue delay is caused by missing acceptance criteria rather than reviewer capacity. The unit is one review request in the window, identified by the ticket and the ready-for-review timestamp. The study measures the time to the first reviewer action, the time to approval, and the number of review rounds. It does not judge the quality of the code or the reviewer.",
      "Define ready for review as the moment the author claims the work meets the published criteria, not the moment the branch is opened. A branch can sit for days before the author considers it ready. Record the claim time and the evidence attached at that moment. The queue clock should start when the reviewer could reasonably begin.",
      "Set the scope to one client, one repository, and one review policy. Record the required checks, the reviewer group, and the working hours at the start. If the policy changes during the window, keep the earlier definition for open requests and analyze the later cohort separately. A new required check can look like a slower review when it is only a different gate.",
      "Classify the first pause as missing evidence, reviewer capacity, a failing check, or a product question. A request can have more than one pause, so record the first one and the total time in each category. The classification should use the reviewer comment and the ticket history. A second reviewer should be able to confirm the category.",
      "Define the population as every review request created in the window, including requests that were closed without merge and requests still open at the observation date. The unit is the request, not the commit, because one request can contain several commits. A reopened request after a rejected review is a new unit linked to the original. Test the definition on two recent requests before collection begins.",
      "Record the ticket, the author, the reviewer, the ready time, the first action time, the approval time, the number of rounds, the missing items, and the checks that failed. Add the queue depth on the day of the first action. Keep the review thread with the record. A second reviewer should be able to rebuild the timeline.",
      "Separate a missing acceptance criterion from a missing test result. A criterion that was never written is a template problem, while a test that was not run is an execution problem. Report the two categories separately. The fix for one is a clearer checklist, and the fix for the other is a stricter evidence rule.",
      "Check whether the reviewer asked for the same item on more than one request in the same week. A repeated question is a strong signal that the template is incomplete. Record the item and the number of requests. The review should fix the template before asking the team to be more careful.",
      "Report the number of requests, the median time to first action, the median time to approval, and the share with a pause caused by missing evidence. Show the counts by reviewer group and by change type. Present the share that needed more than one round and the median added time per round. Use the same denominator for every rate.",
      "A useful additional view is the share of requests where the reviewer had to ask for information that the ticket template did not request. That share is the clearest measure of a template gap. Record the missing field and the number of occurrences. The owner can then change one field instead of rewriting the whole process.",
      "Inspect the requests with the longest queue time and describe the stage without naming the reviewer. A wait before first action may point to capacity, while a wait after the first action may point to missing evidence. Compare the result with the change size and the queue depth. Report requests closed without merge separately.",
      "Do not compare review times across teams with different risk policies. A team that requires two approvals and a security check is not measuring the same process as a team with one reviewer. Keep the comparison inside one policy or state the difference clearly. A single average can make a careful team look slow.",
      "The record cannot show whether the review was thorough or whether the merged change was correct. It can show only the timestamps, the rounds, and the recorded missing items. A fast approval is not proof of good review, and a slow one is not proof of a blocker. The protocol also cannot capture a review that happened in a call and left no comment.",
      "Check whether the author had access to a staging environment where the criteria could be tested. An author who cannot run the check will attach weaker evidence and trigger a round. Record the environment and the evidence source. The review should fix access before tightening the checklist.",
      "Give the result to the delivery lead and the client owner and ask them to choose one observable change. The change might be a required evidence field, a named reviewer per area, a smaller review batch, or a shared staging environment. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions.",
      "Close the review with one change and a date to re-measure. The change should address the most common missing item, not the item that is easiest to add to a form. Record the expected effect and the evidence that will prove it. A checklist that is never measured becomes another document the team learns to skip."
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
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "Atlassian agile coach",
        "https://www.atlassian.com/agile"
      ]
    ],
    "related": [
      "what-share-of-offshore-delivery-decisions-are-recorded-in-writing",
      "what-share-of-outsourced-production-work-uses-a-shared-admin-account"
    ]
  }
];
