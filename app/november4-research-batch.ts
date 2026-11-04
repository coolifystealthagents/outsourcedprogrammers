// "heading": "Research sections"
import type { ResearchPost } from './fleet-content';

export const november4ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-reproducible-are-bug-reports-before-outsourced-triage-begins",
    "title": "How reproducible are bug reports before outsourced triage begins?",
    "excerpt": "A protocol for measuring whether a triage engineer can reproduce a reported defect from the ticket alone, with definitions, sampling, and reporting.",
    "topic": "Bug report reproducibility",
    "published": "2026-11-04",
    "hero": "/nov04/research/how-reproducible-are-bug-reports-before-outsourced-triage-begins.webp",
    "body": [
      "This protocol asks how often an outsourced triage engineer can reproduce a reported defect using only the ticket, without asking the reporter a question. The unit is one bug report that entered triage during the observation window. The study measures the first-attempt reproduction result, the missing fields, and the time to a confirmed reproduction. It does not evaluate whether the defect was severe or whether the fix was correct.",
      "Set the scope to one product area, one triage team, and one intake form version. Record the issue tracker, the environment definitions, and the reproduction standard in force at the start. If the intake form changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new required field can look like an improvement in reporter behavior when it is only a change in the form.",
      "Define the population as all bug reports that reached a triage decision during the window, including reports closed as cannot reproduce. The unit is the report, identified by the issue key. A report that is reopened after new evidence remains one unit with a revision history. A separate report about a different symptom is a new unit even when it references the same feature.",
      "A short intake template can improve reproduction without adding friction, but the template should be tested before it is enforced. Compare a sample of reports from before and after the change, and check whether the new fields contain usable values. A field that is present but says not sure is not an improvement. The review should measure the quality of the content, not the number of fields.",
      "Record the reporter role, the product area, the severity, and whether the report included a recording. These strata matter because an internal engineer and an external customer have different access to environment details. Include reports that were closed without an attempt, because the closure reason is part of the process. Test the unit definition on two ordinary reports before collection begins.",
      "Define a successful reproduction as the condition where a second engineer follows the written steps and observes the described failure in the stated environment. Define an incomplete report as one missing the steps, the environment, or the observed result. Define a confirmed reproduction as one where the failure was observed and the evidence was attached. Each definition should include one positive example and one boundary example.",
      "Do not count a report as reproducible when the engineer found the bug by reading the code instead of following the steps. Do not count a report as complete when the environment field contains only production. A report that reproduces intermittently should be recorded with the observed frequency, not forced into a yes or no category. The coding rules should be written before the sample is reviewed.",
      "Reporter training is often proposed as the fix, but training decays quickly when the reporter submits reports only occasionally. A better investment may be a recording tool that captures the environment automatically at the moment of failure. If the tool is not available, a short checklist embedded in the report form is more reliable than a separate training session. The team should choose the intervention that fits the reporter's actual workflow.",
      "For each report, capture the issue key, the reporter role, the product area, the severity, the intake channel, and the date received. Add the steps provided, the environment fields, the attachments, the first-attempt result, and the time to confirmation. Record whether the engineer had to ask the reporter a question and what was missing. Code each field as present, usable, missing, or not applicable.",
      "Also capture whether the report was linked to a customer ticket, a release, or a prior incident. These links help explain why a report was prioritized or closed. If a field was filled with a placeholder such as not sure, code it as missing rather than present. A second coder should be able to classify the report from the ticket without asking the triage engineer what happened.",
      "Draw the sample from the issue tracker rather than from a list of memorable bugs. Record the export date, the filters, the row count, and the selection rule. Include reports from every severity and every intake channel so the result is not dominated by one source. If the population is ordered by creation date, a fixed interval spreads the sample across the window.",
      "The sample should include reports from the same feature at different times, because a feature that was recently changed may produce a cluster of reports with similar gaps. A cluster is not proof that the feature is bad, but it is a reason to look at the release notes and the support conversations. Record the release window beside the report date so the analysis can separate a new defect from an old one. That separation keeps the analysis from blaming a stable feature for a recent regression.",
      "Collect the ticket content as it existed at the triage decision, not as it looks after later edits. If the reporter added details after the first attempt, record the edit time and analyze the first-attempt result separately. Do not reconstruct a missing step from the eventual fix. Note the collection date separately from the report date so the reader can see how much of the record has aged.",
      "Report the share of reports reproduced on the first attempt, the share that needed a question, and the share closed without an attempt. Show the counts by reporter role and by product area. Present the median time from receipt to confirmation and the median number of missing fields. Use the same denominator for every rate and show the number of reports with incomplete evidence.",
      "Inspect the reports that failed on the first attempt and describe the most common missing field. A pattern of missing environment details may point to the intake form, while a pattern of missing steps may point to the reporter's tooling. Compare the result with the severity, because a high-severity report that cannot be reproduced is a different risk from a low-severity one. Report the closure reasons separately.",
      "When a report is closed as cannot reproduce, record what would have changed the outcome. A missing environment detail, a missing recording, and a missing customer confirmation are different gaps with different fixes. The closure note should name the gap rather than saying not enough information. That note is the raw material for the next intake improvement.",
      "A useful additional view is the reproduction rate by feature area over time. A feature that consistently produces incomplete reports may need a dedicated template or a short recording tool. A feature that reproduces easily may not need the same investment. The comparison should guide the intake design rather than rank the reporters.",
      "The record cannot show whether the reporter was rushed, whether the product was hard to use, or whether the engineer had prior knowledge of the area. It can show only what the ticket contained and what happened on the first attempt. A low reproduction rate is not proof of a careless reporter, and a high rate is not proof of a good product. The protocol measures the ticket, not the people.",
      "Tickets can omit verbal reports, side conversations, and details that were shared in a call. A report that was clarified in a meeting may look incomplete in the tracker. Record those cases and their treatment instead of dropping them silently. If the triage engineer also wrote the report, note the independence limitation and analyze that subgroup separately.",
      "Give the result to the triage lead and the product owner and ask them to choose one observable change. The change might be a required recording field, a template for the weakest product area, or a rule that a report cannot enter triage without an environment. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the form and the triage standard at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If reproduction improved but time to confirmation did not, inspect whether the engineer is spending longer on each report. If the missing-field rate fell but the closure rate did not, the reports may be more complete but still not actionable. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "OWASP Web Security Testing Guide",
        "https://owasp.org/www-project-web-security-testing-guide/"
      ],
      [
        "GitHub Docs, about issues",
        "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues"
      ],
      [
        "ISO/IEC/IEEE 29119 software testing",
        "https://www.iso.org/standard/45142.html"
      ]
    ],
    "related": [
      "what-survives-a-code-handover-when-an-outsourced-engineer-rotates",
      "how-often-do-outsourced-debugging-sessions-expose-production-secrets"
    ]
  },
  {
    "slug": "how-often-do-outsourced-debugging-sessions-expose-production-secrets",
    "title": "How often do outsourced debugging sessions expose production secrets?",
    "excerpt": "An audit protocol for finding where secrets appear during production debugging, measuring exposure, and testing whether redaction and rotation actually work.",
    "topic": "Secret exposure in debugging",
    "published": "2026-11-04",
    "hero": "/nov04/research/how-often-do-outsourced-debugging-sessions-expose-production-secrets.webp",
    "body": [
      "This protocol asks how often a production debugging session creates a secret-exposure event and where in the session the exposure occurs. The unit is one debugging session tied to a ticket during the observation window. The study examines the commands, logs, screenshots, and shared artifacts produced by the session. It does not evaluate the engineer's intent or whether the secret was later misused.",
      "Set the scope to one service, one engineering team, and one access model. Record the debugging tools, the log pipeline, the identity provider, and the secret inventory in force at the start. If the team changes its tooling during the window, keep the earlier definition for the full sample or analyze the change separately. A new log viewer can change the exposure surface without changing the team's behavior.",
      "Define the population as all debugging sessions that were opened, worked, or closed during the window, including sessions that produced no finding. The unit is the session, identified by the ticket and the start time. A session that is resumed on a later day remains one unit with a pause note. A separate investigation for a different question is a new unit.",
      "The audit should distinguish a secret that was visible on the engineer's screen from one that was copied into a shared artifact. The first is a near miss that depends on the engineer's environment, while the second is an exposure that can spread. Record the artifact type and the audience, because a screenshot in a private ticket is different from one in a public channel. The classification should follow the distribution, not the intent.",
      "Record the service, the environment, the access role, the tools used, and whether the session was read-only. These strata matter because a read-only session in a staging environment carries a different risk from a write session in production. Include sessions that were opened but never used, because they still represent an access grant. Test the unit definition on two ordinary sessions before collection begins.",
      "Define a secret as any credential, token, key, password, or connection string that grants access to a system or protects sensitive data. Define an exposure event as the moment a secret appears in an artifact that leaves the secure boundary, such as a ticket, chat, screenshot, or shared document. Define a near miss as a secret that appeared in a local terminal but was not shared. Each definition should include one positive example and one boundary example.",
      "Do not count a masked value as an exposure when the mask cannot be reversed. Do not count a public identifier such as a client ID without a secret as an exposure. A secret that appears in a log retained by an approved system is still an exposure if the log is readable by people outside the approved group. The classification should follow the artifact's audience, not the engineer's intention.",
      "Tooling often captures more than the team expects, especially error trackers that store request headers and log aggregators that index everything. A short configuration review can remove a large part of the exposure surface without changing the debugging workflow. Check the default retention and the access list for each tool. A tool that keeps data for a year is a longer exposure window than one that keeps it for a day.",
      "For each session, capture the ticket, the environment, the access role, the start and end time, and the tools used. Add the commands or queries run, the artifacts shared, the redaction method, and any exposure or near miss. Record whether the secret was rotated and how long the rotation took. Code each field as present, missing, or not applicable.",
      "Also record whether the session used a shared account, whether the access expired as planned, and whether the engineer received a redaction reminder. These process fields help explain an exposure that was caused by tooling rather than by an individual. If a screenshot was shared, record the tool and whether it stripped metadata. A second coder should be able to classify the session from the record.",
      "Draw the sample from the ticket system and the access log rather than from a list of known incidents. Record the export date, the filters, the row count, and the selection rule. Include sessions from every access role and every tool so the result is not dominated by one path. If the population is ordered by start time, a fixed interval spreads the sample across the window.",
      "Rotation is only complete when the dependent systems use the new credential. A database password that is changed in the secret manager but not in the application will fail at the next deploy. Record the systems that consume each secret and verify one of them after rotation. The verification step is what separates a rotation from a change that looks like one.",
      "Collect the artifacts as they existed at the time of the session, not as they look after later redaction. If a message was edited, record the edit time and analyze the original separately. Do not reproduce a secret in the study record; use a placeholder and a hash. Note the collection date separately from the session date so the reader can see how much of the record has aged.",
      "Report the number of sessions, the share with at least one exposure, and the share with a near miss. Show the counts by tool, access role, and environment. Present the median time from exposure to rotation and the share of exposed secrets that were rotated. Use the same denominator for every rate and show the number of sessions with incomplete evidence.",
      "Inspect the exposures that reached a ticket or a chat and describe the path without naming the engineer. A cluster in one tool may point to a capture setting, while a cluster in one environment may point to an access gap. Compare the exposure rate with the redaction method, because a manual review may be less reliable than an automated filter. Report the near misses separately because they show where the control almost failed.",
      "The audit should also cover the engineer's local environment, because shell history, browser profiles, and downloaded files can hold secrets that never reached a shared system. A short checklist for the end of the session can reduce that risk. The checklist should name the files and the commands to clear, not just say clean up. Repeat the check when the engineer changes devices.",
      "A useful additional measure is the time between the session and the rotation. A secret that is rotated within an hour is a different risk from one that remains valid for a week. Plot the distribution rather than reporting only an average. If most rotations are fast but a few are very slow, the slow cases deserve a separate review.",
      "The record cannot show whether an exposed secret was actually used by an unauthorized person. It can show only that the secret left the secure boundary and whether it was rotated. A low exposure rate is not proof that the team is careful, and a high rate is not proof of negligence. The protocol also cannot capture secrets that were shared verbally or on a personal device.",
      "Logs can omit deleted messages, local terminal history, and artifacts that were never attached to a ticket. A session that was conducted entirely in a personal notes app may be invisible. Record those cases and their treatment instead of dropping them silently. If the same person approves access and reviews the session, note the independence limitation and analyze that subgroup separately.",
      "Give the result to the security lead and the engineering manager and ask them to choose one observable change. The change might be an automated redaction filter, a shorter access window, or a rule that screenshots require a review. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the tool and the access model at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If exposures fell but near misses did not, the filter may be catching artifacts after the engineer has already seen the secret. If rotation time improved but exposure did not, the response is faster but the prevention is unchanged. Close the review when the owner accepts the finding and the next audit is scheduled."
    ],
    "sources": [
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA Cybersecurity Performance Goals",
        "https://www.cisa.gov/cybersecurity-performance-goals"
      ],
      [
        "OWASP Secrets Management Cheat Sheet",
        "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
      ],
      [
        "NIST SP 800-61 incident handling",
        "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
      ]
    ],
    "related": [
      "how-reproducible-are-bug-reports-before-outsourced-triage-begins",
      "what-survives-a-code-handover-when-an-outsourced-engineer-rotates"
    ]
  },
  {
    "slug": "what-survives-a-code-handover-when-an-outsourced-engineer-rotates",
    "title": "What survives a code handover when an outsourced engineer rotates?",
    "excerpt": "A measurement protocol for testing whether a receiving engineer can change the code, explain the state, and own the open decisions after a handover.",
    "topic": "Code handover completeness",
    "published": "2026-11-04",
    "hero": "/nov04/research/what-survives-a-code-handover-when-an-outsourced-engineer-rotates.webp",
    "body": [
      "This protocol asks what knowledge and access actually survive when an outsourced engineer rotates off a codebase. The unit is one handover between a departing engineer and a named receiver. The study measures the receiver's ability to complete a small change, explain the environment state, and name the owner of each open decision. It does not evaluate the departing engineer's performance or the quality of the codebase.",
      "Set the scope to one repository, one team, and one handover period. Record the handover plan, the access model, and the review process in force at the start. If the plan changes during the window, keep the earlier definition for the full comparison or analyze the change separately. A new checklist can look like an improvement in handover quality when it is only a new form.",
      "Define the population as all handovers that started or completed during the window, including handovers that were extended. The unit is the handover, identified by the departing engineer and the receiver. A handover that is paused and resumed remains one unit with a timeline. A second handover for a different repository is a new unit.",
      "The receiver's first independent change should be chosen to exercise the parts of the handover that are hardest to document. A change that touches the build, the tests, and the deployment path is more informative than a text-only edit. Record the time and the help required, and compare it with the estimate in the handover plan. The gap between the estimate and the actual effort is a useful signal.",
      "Record the repository, the receiver's experience, the handover duration, and whether the receiver had prior work in the area. These strata matter because a receiver who already knows the code needs less transfer than one who has never seen it. Include handovers that ended early, because the reason is part of the evidence. Test the unit definition on two ordinary handovers before collection begins.",
      "Define a successful change as one the receiver completes without help from the departing engineer, with tests and a review. Define state knowledge as the receiver's ability to name the environments, flags, scheduled jobs, and open migrations that affect the area. Define decision ownership as a named person for each open item. Each definition should include one positive example and one boundary example.",
      "Do not count a change as independent when the receiver needed a hint about where to start. Do not count a document as state knowledge when the receiver cannot explain the current environment without rereading it. A handover that transfers code but not the reason behind a workaround is incomplete. The coding rules should distinguish a successful transfer from a successful meeting.",
      "A handover can look complete while the receiver still depends on the departing engineer's personal relationships with vendors and client contacts. Record the introductions that were made and the ones that were missed. A receiver who does not know who approves a production change is not independent, even if the code is understood. Include the contact map in the handover evidence.",
      "For each handover, capture the departing engineer, the receiver, the dates, the repository, and the areas covered. Add the change the receiver completed, the time taken, the help required, and the review result. Record the environments, flags, jobs, migrations, and open decisions the receiver could explain. Code each field as present, missing, or not applicable.",
      "Also record whether the receiver had access on the first day, whether the access was least-privilege, and whether the departing engineer's access was removed on schedule. These fields help explain a handover that looked complete but left the receiver unable to act. If the receiver needed to contact the former engineer, record the reason. A second coder should be able to classify the handover from the record.",
      "Draw the sample from the handover register and the repository access log rather than from a list of recent departures. Record the export date, the filters, the row count, and the selection rule. Include handovers of different sizes and durations so the result is not dominated by one easy case. If the population is ordered by start date, a fixed interval spreads the sample across the window.",
      "The departing engineer's access should be removed before the first independent change, not after it. If the receiver needs help, the help should come from the team rather than from a former account. Record the removal date and the confirmation, and check for indirect access through shared accounts. A handover that leaves the old account active undermines the whole exercise.",
      "Collect the evidence from the repository, the ticket system, and the access log as they existed at the end of the handover. Do not reconstruct a missing walkthrough from memory. If the receiver's first independent change happened after the window, record it as a follow-up rather than moving the handover date. Note the collection date separately from the handover date so the reader can see how much of the record has aged.",
      "Report the share of handovers where the receiver completed a change independently, the share where state knowledge was complete, and the share where every open item had an owner. Show the counts by receiver experience and handover duration. Present the median time to the first independent change and the number of help requests. Use the same denominator for every rate.",
      "Inspect the handovers with the most help requests and describe where the receiver stopped. A cluster around the build or release path may point to a missing runbook, while a cluster around the data model may point to a missing map. Compare the result with the handover duration, because a longer handover is not automatically a better one. Report the access-removal result separately.",
      "Review the handover again after the first independent release, because the pressure of a real release exposes gaps that a practice change does not. Ask the receiver what they had to look up, who they had to ask, and what they would change in the handover plan. Record the answers and update the plan for the next rotation. The second review is often more valuable than the first.",
      "A useful additional view is the receiver's confidence against the observed evidence. A receiver who says the handover was fine but cannot complete a change without help is a different case from one who says it was difficult and then acts independently. Record both and describe the gap. The comparison should guide the handover plan rather than judge the person.",
      "The record cannot show whether the receiver will remember the knowledge months later or whether the codebase will change in a way that invalidates it. It can show only what was demonstrated at the end of the handover. A successful change is not proof that every area was transferred, and a failed change is not proof that the handover was worthless. The protocol measures a sample of the work, not the whole relationship.",
      "Registers can omit informal conversations, pair sessions, and access that was granted outside the identity provider. A receiver who learned the code before the formal handover may look more successful than the plan deserves. Record those cases and their treatment instead of dropping them silently. If the departing engineer also performed the access removal, note the independence limitation.",
      "Give the result to the engineering manager and the receiving team lead and ask them to choose one observable change. The change might be a required live change during the handover, a named owner for every open item, or an access checklist. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the plan and the access model at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If independent changes improved but state knowledge did not, the handover may be too focused on tasks. If ownership improved but access removal did not, the plan may be treating the exit as an afterthought. Close the review when the owner accepts the finding and the next handover is scheduled."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "CISA Cybersecurity Performance Goals",
        "https://www.cisa.gov/cybersecurity-performance-goals"
      ],
      [
        "Google Engineering Practices, code review",
        "https://google.github.io/eng-practices/review/"
      ],
      [
        "NIST SP 800-53 access control",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      ]
    ],
    "related": [
      "how-often-do-outsourced-debugging-sessions-expose-production-secrets",
      "how-reproducible-are-bug-reports-before-outsourced-triage-begins"
    ]
  },
  {
    "slug": "how-much-third-party-sdk-risk-is-visible-before-adoption",
    "title": "How much third-party SDK risk is visible before adoption?",
    "excerpt": "A protocol for scoring the evidence a team has about an SDK's license, data access, maintenance, and failure behavior before it ships.",
    "topic": "Third-party SDK risk",
    "published": "2026-11-04",
    "hero": "/nov04/research/how-much-third-party-sdk-risk-is-visible-before-adoption.webp",
    "body": [
      "This protocol asks how much of a third-party SDK's risk is documented before the team adopts it. The unit is one SDK evaluated for a specific integration during the observation window. The study scores the evidence available for license, data access, maintenance, failure behavior, and exit planning. It does not judge whether the SDK is good, only whether the team can see the risk before shipping.",
      "Set the scope to one product, one engineering team, and one review process. Record the decision record template, the license policy, and the approval path in force at the start. If the template changes during the window, keep the earlier definition for the full sample or analyze the change separately. A new required field can look like better diligence when it is only a new form.",
      "Define the population as all SDKs that reached an adoption decision during the window, including SDKs that were rejected. The unit is the SDK and the specific integration, identified by the package and the feature. A later upgrade of the same SDK is a new unit if the major version changes. A different feature using the same SDK is a separate unit.",
      "The review should distinguish a risk that is unknown from a risk that is known and accepted. An unknown data practice is not the same as a documented telemetry call that the product owner approved. Record the status of each category as verified, claimed, or unknown. The decision should state which unknown risks the owner is willing to carry and why. A short table with one row per category makes that decision visible to the next reviewer.",
      "Record the package, the version, the feature, the team, and whether the SDK was already in use elsewhere. These strata matter because a package already approved for another feature has a different review burden. Include rejected SDKs, because the reason for rejection is part of the evidence. Test the unit definition on two ordinary evaluations before collection begins.",
      "Define license evidence as a recorded license name and version, with the obligations that apply to the distribution model. Define data evidence as a list of the data the SDK can access and the network calls observed in a test session. Define maintenance evidence as the release history, the issue response, and the security advisory record. Define failure evidence as the observed behavior under timeout, permission denial, and offline conditions.",
      "Do not count a marketing page as license evidence. Do not count a privacy policy as data evidence unless it is matched to the observed network calls. A package with a recent release but no response to security issues is not necessarily maintained. Each definition should include one positive example and one boundary example so a second coder can apply it consistently.",
      "A vendor's security page is not evidence of the SDK's behavior in the product. The team should test the package in the same build and runtime it will ship, because a browser bundle and a server bundle can expose different code. Record the environment and the test method. A test that runs only in a development sandbox may miss a production-only path.",
      "For each evaluation, capture the package, version, feature, license, distribution model, and the reviewer. Add the permissions requested, the network calls observed, the release history, the open advisories, and the failure tests. Record the bundle and startup measurements, the exit plan, and the decision. Code each field as present, missing, or not applicable.",
      "Also record whether the review happened before the integration code was written and whether the decision record was approved by the technical owner. These process fields help explain a risk that was visible but ignored. If a field was filled with a vendor claim rather than a test, mark it as claimed rather than verified. A second coder should be able to reproduce the score from the packet.",
      "Draw the sample from the dependency inventory and the decision records rather than from a list of recent incidents. Record the export date, the filters, the row count, and the selection rule. Include rejected and deferred SDKs so the result shows the full decision set. If the population is ordered by decision date, a fixed interval spreads the sample across the window.",
      "The exit plan should include the data the SDK stores, not only the code that calls it. A replacement may need to migrate local caches, queued events, or identifiers that the old SDK created. Record the storage locations and the migration step. If the data cannot be exported, that limitation belongs in the adoption decision.",
      "Collect the evidence as it existed at the adoption decision, not as it looks after a later incident. If the decision record was updated after the fact, record the update time and analyze the original separately. Do not reconstruct a missing test from the vendor's documentation. Note the collection date separately from the decision date so the reader can see how much of the record has aged.",
      "Report the share of evaluations with verified license, data, maintenance, failure, and exit evidence. Show the counts by feature area and by whether the SDK was new to the team. Present the median number of missing fields and the share of decisions made before the integration code was written. Use the same denominator for every rate.",
      "Inspect the evaluations with the weakest evidence and describe the missing category. A cluster of missing data evidence may point to the test process, while a cluster of missing maintenance evidence may point to the vendor research. Compare the result with the risk of the feature, because a low-risk integration may not need the same depth. Report the rejected decisions separately.",
      "The review should be repeated when the SDK's major version changes or when the vendor is acquired. A package that was acceptable last year may have different terms or a different maintenance team. Record the trigger for the next review rather than relying on a calendar reminder. The trigger makes the review part of the change process.",
      "A useful additional view is the time between the review and the first production release. A review that happens after the code is written is a ratification, not a decision. Plot the timing and describe the cases where the review came late. That pattern is often more actionable than the total score.",
      "The record cannot show whether the SDK will behave well in production or whether the vendor will remain reliable. It can show only what the team knew before adoption. A complete record is not proof of a safe choice, and an incomplete one is not proof of a bad choice. The protocol measures the visibility of risk, not the risk itself.",
      "Decision records can omit conversations, vendor calls, and tests that were run but not documented. An SDK that was approved through an architecture meeting may look undocumented in the file. Record those cases and their treatment instead of dropping them silently. If the same person wrote the integration and approved the record, note the independence limitation.",
      "Give the result to the engineering lead and the security reviewer and ask them to choose one observable change. The change might be a required network capture, a license field, or a rule that the review happens before the first commit. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the approval path at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If evidence improved but late reviews did not, the process may be producing better paperwork after the decision. If data evidence improved but failure evidence did not, the team may be testing the happy path only. Close the review when the owner accepts the finding and the next evaluation is scheduled."
    ],
    "sources": [
      [
        "Open Source Initiative, licenses",
        "https://opensource.org/licenses"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ]
    ],
    "related": [
      "what-survives-a-code-handover-when-an-outsourced-engineer-rotates",
      "do-accessibility-fixes-close-the-defect-or-only-the-reported-symptom"
    ]
  },
  {
    "slug": "do-accessibility-fixes-close-the-defect-or-only-the-reported-symptom",
    "title": "Do accessibility fixes close the defect or only the reported symptom?",
    "excerpt": "A re-test protocol that compares the original user barrier with the shipped fix, including shared components, assistive technology, and regression checks.",
    "topic": "Accessibility fix closure",
    "published": "2026-11-04",
    "hero": "/nov04/research/do-accessibility-fixes-close-the-defect-or-only-the-reported-symptom.webp",
    "body": [
      "This protocol asks whether an accessibility fix closes the original user barrier or only the symptom that was reported. The unit is one accessibility fix that shipped during the observation window. The study compares the original barrier, the code change, the assistive-technology evidence, and the re-test result. It does not evaluate the severity of the barrier or the quality of the design.",
      "Set the scope to one product area, one component library, and one accessibility standard. Record the assistive technologies, browsers, and test scripts in force at the start. If the standard changes during the window, keep the earlier definition for the full sample or analyze the change separately. A new success criterion can look like a new defect when it is only a new rule.",
      "Define the population as all accessibility fixes that were merged or released during the window, including fixes that were later reverted. The unit is the fix, identified by the ticket and the component. A fix that is reopened after a regression remains one unit with a revision history. A separate fix for a different barrier is a new unit.",
      "The re-test should include at least one task that was not in the original report, because a fix can solve the reported element while leaving a related control unusable. Choose a task that uses the same component in a different context, such as a second form or a different page family. Record the result beside the original evidence. The extra task is a small cost compared with a second round of fixes. The task should be chosen before the fix is merged so the re-test has a defined scope.",
      "Record the component, the page family, the assistive technology, and whether the component is shared. These strata matter because a shared component change can affect many flows while a page-specific fix affects one. Include fixes that were closed without a re-test, because the closure reason is part of the evidence. Test the unit definition on two ordinary fixes before collection begins.",
      "Define the original barrier as the user action that failed, the technology used, and the expected result recorded before the fix. Define closure as the condition where the same action succeeds with the same technology and the regression surface passes. Define a symptom-only fix as one where the reported element changed but the task still fails. Each definition should include one positive example and one boundary example.",
      "Do not count a scanner score as closure evidence. Do not count a code review as closure evidence unless the reviewer also ran the interaction. A fix that works with a mouse but not a keyboard is not closed for keyboard users. The coding rules should distinguish a partial improvement from a completed barrier.",
      "A shared component fix should update the component's documentation and examples, not only the code. The next engineer who uses the component needs to know the expected keyboard behavior and the focus style. Record the documentation change and the date it was published. A fix that lives only in the code will be undone by the next implementation.",
      "For each fix, capture the ticket, the component, the page family, the technology, the original evidence, and the change. Add the re-test evidence, the regression pages, the result, and the person who accepted it. Record whether the fix changed a shared component and whether the design system was updated. Code each field as present, missing, or not applicable.",
      "Also record whether the original reporter was involved in the re-test and whether the fix introduced a new barrier. These fields help explain a closure that looks complete but leaves a related problem. If the evidence is a recording, record the tool and the timestamp. A second coder should be able to reproduce the classification from the packet.",
      "Draw the sample from the accessibility backlog and the release log rather than from a list of notable fixes. Record the export date, the filters, the row count, and the selection rule. Include fixes from different components and page families so the result is not dominated by one easy case. If the population is ordered by release date, a fixed interval spreads the sample across the window.",
      "The acceptance record should include the user's perspective when the original report came from a customer. A short follow-up with the reporter can confirm that the task now works in their environment. If the reporter is not available, record that limitation. The team should not claim closure on behalf of a user it did not ask.",
      "Collect the evidence as it existed at the re-test, not as it looks after later edits. If the fix was amended after the first re-test, record the amendment and analyze the original result separately. Do not reconstruct a missing recording from memory. Note the collection date separately from the release date so the reader can see how much of the record has aged.",
      "Report the share of fixes with a completed re-test, the share that closed the original barrier, and the share that closed only the symptom. Show the counts by component type and by assistive technology. Present the share of shared-component fixes that updated the design system. Use the same denominator for every rate and show the number of fixes with incomplete evidence.",
      "Inspect the symptom-only fixes and describe the pattern. A cluster in one component may point to a markup pattern, while a cluster in one page family may point to a content problem. Compare the result with the regression surface, because a fix that holds on the reported page but fails on a reused flow is not closed. Report the reverted fixes separately.",
      "Accessibility regressions should be reviewed alongside other quality metrics, not as a separate annual project. Add the fixed flows to the regular regression suite and report the pass rate with the release notes. A metric that is reviewed every release is more likely to stay healthy. The review should name the owner and the next check.",
      "A useful additional view is the time between the fix and the re-test. A re-test performed months later may miss a regression that appeared in the meantime. Plot the timing and describe the cases where the re-test came late. The comparison should guide the release checklist rather than judge the engineer.",
      "The record cannot show whether the fix improved the experience for every user or whether a different barrier remains. It can show only whether the reported task succeeded with the tested technology. A closed ticket is not proof of accessibility, and an open ticket is not proof of failure. The protocol measures a specific barrier, not the whole product.",
      "Backlogs can omit fixes that were made without a ticket, and release logs can omit hotfixes. A component that was patched in a design-system release may not appear in the sample. Record those cases and their treatment instead of dropping them silently. If the same person wrote the fix and accepted it, note the independence limitation.",
      "Give the result to the accessibility lead and the engineering manager and ask them to choose one observable change. The change might be a required re-test recording, a shared-component checklist, or a design-system update. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the standard and the test script at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If closure improved but symptom-only fixes did not, the re-test may be catching the easy cases. If shared-component updates improved but regressions did not, the design system may be lagging the code. Close the review when the owner accepts the finding and the next release is scheduled. A regular review also gives the team a place to record fixes that were made without a ticket."
    ],
    "sources": [
      [
        "W3C Web Content Accessibility Guidelines 2.2",
        "https://www.w3.org/TR/WCAG22/"
      ],
      [
        "W3C WAI, test and evaluate",
        "https://www.w3.org/WAI/test-evaluate/"
      ],
      [
        "WebAIM, keyboard accessibility",
        "https://webaim.org/techniques/keyboard/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ]
    ],
    "related": [
      "how-much-third-party-sdk-risk-is-visible-before-adoption",
      "how-reproducible-are-bug-reports-before-outsourced-triage-begins"
    ]
  }
];
