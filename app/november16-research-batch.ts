import type { ResearchPost } from './fleet-content';

export const november16ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "how-often-do-offshore-release-freezes-get-bypassed-by-emergency-changes",
    "title": "How often do offshore release freezes get bypassed by emergency changes?",
    "excerpt": "A protocol for measuring freeze exceptions, separating a justified emergency from a planning failure, and reporting the result against the freeze scope.",
    "topic": "Release freeze exceptions",
    "published": "2026-11-16",
    "hero": "/nov16/research/how-often-do-offshore-release-freezes-get-bypassed-by-emergency-changes.webp",
    "body": [
      "This protocol measures how often a release freeze is bypassed by a change that enters production during the freeze window. The unit is one production change record in the window, identified by the change identifier and the deployed artifact. A bypass means the change reached production without an approved exception. The study describes the control around the freeze, not the quality of the change itself.",
      "Define the freeze window from the published notice, including the start time, the end time, and the time zone. Record the systems and the change categories in scope. If the scope changes during the window, split the sample at the effective date. A wider scope creates a larger denominator and a different result.",
      "Define an approved exception as a written request with a named approver, a stated scope, and at least one compensating control. A chat approval without a record is not an approved exception for this measure. Record the evidence used to classify the approval. The definition should be tested on two historical changes before collection begins.",
      "Define an emergency as a change that addresses an active customer-impacting failure or a known exploitable vulnerability. A late request, a missed deadline, or an executive preference is not an emergency for this measure. Record the reason code and the evidence. The distinction keeps the study from treating every bypass as a discipline problem.",
      "Set the population as every production change in the window, including changes that were later rolled back or completed by a vendor. The unit is the change record, not the deployment or the ticket. One deployment can contain several changes, and each should be counted once if it can be identified. Test the unit on a multi-change release before the full sample.",
      "Record the change identifier, the system, the requester, the approver, the deployment time, the exception status, and the rollback result. Add the customer impact and the detection source. Keep the change record linked to the deployment log and the freeze notice. A second reviewer should be able to reconstruct the decision without asking the team.",
      "Separate a change that was approved before the freeze from one that was approved during it. The first is a planned release that may have been scheduled inside the window by mistake, while the second is a live exception. Report the two groups separately. Combining them hides the difference between planning and control.",
      "Check the changes that were deployed but not recorded in the change system. A hotfix applied directly in a console may appear only in the application log. Record the source and the missing record. The study should report the share of changes that could not be classified because the record was absent.",
      "Report the number of changes, the number of approved exceptions, the number of bypasses, and the share of bypasses by reason. Show the counts by system and by change type. Present the number of bypasses that were later rolled back. Use the same denominator for every rate and show the changes with incomplete records.",
      "Separate a bypass caused by a missing approval path from one caused by a deliberate decision to skip the path. A team that cannot reach an approver has a process gap, while a team that chooses not to ask has a control gap. Report the two categories separately so the client can choose the right response. Keep the reason code beside every bypass in the extract.",
      "Inspect the bypasses around the start and end of the freeze. A cluster at the boundary may mean the notice was unclear or the freeze started before the team could finish planned work. A cluster in the middle may mean the exception path is too slow. Compare the pattern with the change volume.",
      "Do not treat a low bypass count as proof that the freeze worked. A team may delay a change until after the window and create a larger release, or it may avoid the change system entirely. Report the change volume before and after the freeze. A quiet window with a large backlog is not necessarily a controlled one.",
      "The record cannot show whether the bypassed change caused an incident or whether the approver would have denied it. It can show only whether the change reached production without a recorded exception. A bypass is not proof of harm, and an approval is not proof of safety. The protocol also cannot capture a change made in a vendor console that exports no log.",
      "A useful additional view is the share of exceptions that included a rollback plan and a named watcher. An exception without either is weaker evidence of control even when the approver was named. Record the presence of the plan and the watcher. That field turns the count into a review of the quality of the exception.",
      "Give the result to the client release owner and the offshore delivery lead with one observable change. The change might be a named on-call approver, a shorter exception form, a pre-freeze planning review, or a post-freeze change review. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change. Repeat the protocol with the same definitions.",
      "Close the review with one change and a date to re-measure. The change should address the most common bypass reason, not the easiest one to fix. Record the expected effect and the evidence that will prove it. A freeze that is never measured is a calendar note, not a control."
    ],
    "takeaways": [
      "Count the change record, not the deployment or the ticket.",
      "Separate an approved exception from an unrecorded bypass.",
      "Report boundary clusters and missing records.",
      "Distinguish a missing approval path from a deliberate skip.",
      "Test one exception-path change before changing the freeze."
    ],
    "sources": [
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-128 configuration management",
        "https://csrc.nist.gov/pubs/sp/800/128/final"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "write-a-blameless-postmortem-action-tracker-for-an-offshore-incident-pod",
      "set-a-release-freeze-exception-register-for-outsourced-delivery"
    ]
  },
  {
    "slug": "what-share-of-outsourced-postmortems-close-their-action-items",
    "title": "What share of outsourced postmortems close their action items?",
    "excerpt": "A protocol for measuring postmortem action completion, the age of open actions, and the difference between a merged change and a verified fix.",
    "topic": "Postmortem action completion",
    "published": "2026-11-16",
    "hero": "/nov16/research/what-share-of-outsourced-postmortems-close-their-action-items.webp",
    "body": [
      "This protocol measures the share of postmortem action items that are completed and verified within a stated period. The unit is one action item from one postmortem, identified by the postmortem and the action identifier. Completion means the change is live and the evidence is recorded. The study describes follow-through, not the quality of the incident review.",
      "Define the postmortem population as every review completed in the window, including reviews with no actions. The unit is the action, not the postmortem, because one review can produce several actions with different owners. A postmortem with no actions is a separate finding and should be reported. Test the unit on two reviews before collection begins.",
      "Define an action as a concrete change with an owner, a due date, and a stated evidence standard. A general recommendation without an owner is not an action for this measure. Record the wording and the owner. The definition should distinguish an action from a discussion note.",
      "Define completion as the change being live and verified by the evidence named at creation. A merged pull request, a ticket marked done, or a meeting note is not completion by itself. Record the evidence and the verifier. The definition should be applied the same way to every action.",
      "Set the scope to one delivery team, one incident process, and a fixed window. Record the postmortem template, the review cadence, and the person who accepts actions. If the template changes during the window, split the sample at the change date. A new template can change the number and quality of actions.",
      "Record the postmortem identifier, the action text, the owner, the due date, the status, the evidence, the verifier, and the close date. Add the incident severity and the customer impact. Keep the action linked to the postmortem and the change record. A second reviewer should be able to confirm the status without asking the owner.",
      "Separate an action that is complete from one that is partially complete. A partial action may have a merged change that is not deployed or a deployed change with no test. Record the missing step. The study should not count a partial action as complete.",
      "Check the actions that were reassigned or had their due date moved. Record the original owner, the new owner, and the number of date changes. A reassignment is not a completion, and a moving due date can hide a stalled action. Report the count separately.",
      "Report the number of postmortems, the number of actions, the share completed on time, the share completed late, and the share still open. Show the counts by severity and by owner group. Present the median age of open actions and the oldest open action. Use the same denominator for every rate and show actions with missing evidence.",
      "Separate an action that is open because the work is hard from one that is open because nobody owns it. A hard action may need a design decision or a budget, while an unowned action needs a name. Report the two categories separately so the client can choose the right response. Record the blocking dependency beside each open action.",
      "Inspect the actions that repeat across postmortems. A repeated action may mean the earlier change was never verified or did not address the cause. Treat the repeat as a finding about follow-through. Compare the wording and the owner with the earlier action.",
      "Do not treat a high completion rate as proof that the incidents will not recur. An action can be completed and still fail to change the outcome. Report the actions that were completed but followed by a similar incident. The study measures follow-through, not effectiveness.",
      "The record cannot show whether an action was the right response or whether the postmortem identified the true cause. It can show only whether the team completed and verified the change it committed to. A completed action is not proof of safety, and an open action is not proof of negligence. The protocol also cannot capture work that was done without a ticket.",
      "A useful additional view is the share of actions that were closed by the same person who wrote them without a second verifier. That share describes the independence of the close, not the quality of the change. Record the verifier and the relationship to the owner. The field helps a reviewer interpret the completion rate.",
      "Give the result to the client technical owner and the offshore delivery lead with one observable change. The change might be a weekly action review, a named verifier for high-severity actions, a shorter action template, or a rule that closes only with evidence. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the most common reason an action stays open, not the one that is easiest to report. Record the expected effect and the evidence that will prove it. A postmortem process that never checks its own actions is a writing exercise."
    ],
    "takeaways": [
      "Count the action, not the postmortem.",
      "Treat a merged change as partial until it is live and verified.",
      "Report the age of open actions, not only the completion rate.",
      "Reopen repeated actions instead of adding duplicates.",
      "Check whether the person who closed the action was independent."
    ],
    "sources": [
      [
        "Google SRE Book, postmortem culture",
        "https://sre.google/sre-book/postmortem-culture/"
      ],
      [
        "PagerDuty incident response",
        "https://response.pagerduty.com/"
      ],
      [
        "Atlassian incident management",
        "https://www.atlassian.com/incident-management"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ]
    ],
    "related": [
      "how-long-does-a-vendor-escalation-take-to-reach-a-named-owner",
      "write-a-blameless-postmortem-action-tracker-for-an-offshore-incident-pod"
    ]
  },
  {
    "slug": "how-often-do-remote-contractor-laptops-fail-a-baseline-device-check",
    "title": "How often do remote contractor laptops fail a baseline device check?",
    "excerpt": "A protocol for measuring device posture failures, separating an unreadable setting from a failed control, and reporting repair time by check.",
    "topic": "Device posture failures",
    "published": "2026-11-16",
    "hero": "/nov16/research/how-often-do-remote-contractor-laptops-fail-a-baseline-device-check.webp",
    "body": [
      "This protocol measures how often a remote contractor laptop fails a required device posture check. The unit is one device check for one contractor on one scheduled review date. A failure means a blocking setting is off or unreadable at the check time. The study describes the recorded posture, not the security of the person using the device.",
      "Define the baseline from the client policy, including identity enrollment, disk encryption, supported operating system, screen lock, and the required endpoint agent. Record the policy version and the date it became effective. If the baseline changes during the window, split the sample at that date. A new check item changes the denominator.",
      "Define a pass as a recorded value that meets the baseline for every blocking item. Define a failure as a blocking item that is off, and define unknown as a blocking item the tool could not read. Keep failure and unknown separate in the report. The two states need different responses.",
      "Set the scope to one client, one contractor group, and one inventory source. Record the device models, the operating systems, and the check tool version. If a new tool is introduced during the window, analyze the earlier and later cohorts separately. A new tool can change what is visible.",
      "Set the population as every scheduled device check in the window, including devices that were offline or replaced. The unit is the check, not the contractor, because one person can have more than one device. A replacement device creates a new unit linked to the same contractor. Test the definition on two devices before collection begins.",
      "Record the device identifier, the contractor group, the check time, the baseline version, the result for each blocking item, the repair action, and the retest time. Add the person who verified the repair. Keep the check linked to the inventory record and the policy. A second reviewer should be able to reconstruct the result.",
      "Separate a failure found before access was granted from one found during an existing session. The first is a gate, while the second is a detection event. Report the two groups separately. Combining them hides whether the control stops access or only observes it.",
      "Check the devices that were never checked because they were offline or not enrolled. Record them as unknown rather than excluding them. A device outside the inventory is a different risk from a device that failed a setting. Report the count with the reason.",
      "Report the number of checks, the pass rate, the failure rate, and the unknown rate. Show the counts by check item, device model, and contractor group. Present the median and longest repair time. Use the same denominator for every rate and show the checks with incomplete records.",
      "Separate a failure caused by the device from one caused by the inventory tool. A tool that cannot read an encrypted disk is different from a disk that is not encrypted. Report the two categories separately so the client can choose the right fix. A new tool will not solve a policy that the device cannot meet.",
      "Inspect the failures that repeat on the same device or model. A repeated encryption failure may point to a provisioning image, while a repeated update failure may point to a maintenance window. Compare the pattern with the repair path. Report the device models without naming the contractors.",
      "Do not treat a pass as proof that the device stayed compliant after the check. A contractor can change a setting or install an unapproved tool later. Report the time since the last check and the sampling rule. The study describes a point-in-time result, not continuous compliance.",
      "The record cannot show whether a failed device was used for production work before the check or whether the contractor intended to bypass the rule. It can show only what the inventory reported at the check time. A failure is not proof of a breach, and a pass is not proof of safe use. The protocol also cannot capture a personal device that was never enrolled.",
      "A useful additional view is the share of failures that were repaired within the stated window. A fast repair may indicate a healthy support path, while a slow repair may indicate a missing administrator. Record the repair time and the owner. That field turns the failure count into a service measure.",
      "Give the result to the client security owner and the offshore lead with one observable change. The change might be a pre-access device check, a standard provisioning image, a named repair administrator, or a quarterly manual sample. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should target the check item with the most failures or the longest repair time, not the item that is easiest to automate. Record the expected effect and the evidence that will prove it. A device baseline that is never sampled is a claim, not a control."
    ],
    "takeaways": [
      "Count the device check, not the contractor.",
      "Keep a failed setting separate from an unreadable one.",
      "Report devices that were never checked as unknown.",
      "Measure repair time beside the failure rate.",
      "Sample devices manually to test the inventory."
    ],
    "sources": [
      [
        "CIS Benchmarks",
        "https://www.cisecurity.org/cis-benchmarks"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-40 Rev. 4 patch management",
        "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "set-a-device-posture-check-for-remote-contractor-laptops",
      "what-share-of-outsourced-postmortems-close-their-action-items"
    ]
  },
  {
    "slug": "how-long-does-a-vendor-escalation-take-to-reach-a-named-owner",
    "title": "How long does a vendor escalation take to reach a named owner?",
    "excerpt": "A protocol for measuring vendor escalation latency, separating queue time from ownership time, and reporting the result by vendor and issue type.",
    "topic": "Vendor escalation latency",
    "published": "2026-11-16",
    "hero": "/nov16/research/how-long-does-a-vendor-escalation-take-to-reach-a-named-owner.webp",
    "body": [
      "This protocol measures how long it takes a vendor escalation to reach a named owner who can act. The unit is one escalation from one client team to one vendor, identified by the escalation record. The clock starts when the client sends the first escalation message. The clock stops when a named owner acknowledges ownership and states the next action.",
      "Define the start event as the timestamp of the first message that contains the account, the issue, the impact, and the requested action. A message that only says the service is down does not start the clock until the required information is sent. Record both times if they differ. The definition should be tested on two historical escalations before collection begins.",
      "Define the stop event as a response from a named individual who accepts ownership and gives a next action or a substantive update. An automated acknowledgement, a ticket number, or a request for more information is not the stop event. Record the response text and the sender. The study measures ownership, not the first machine reply.",
      "Set the scope to one client, one vendor, and one escalation path. Record the contract, the support tier, and the contact card version at the start. If the vendor changes its support model during the window, split the sample at the change date. A new portal can change the queue time without changing the vendor's intent.",
      "Set the population as every escalation sent in the window, including escalations that were later withdrawn or resolved by the client. The unit is the escalation, not the vendor ticket, because one ticket can contain several escalations. A reopened escalation is a new unit linked to the original. Test the definition before the full sample.",
      "Record the escalation identifier, the vendor, the issue type, the severity, the start time, the acknowledgement time, the ownership time, the named owner, and the evidence. Add the follow-up times and the resolution time. Keep the escalation linked to the support ticket and the contact card. A second reviewer should be able to rebuild the timeline.",
      "Separate queue time from ownership time. Queue time runs from the client message to the vendor's first response, while ownership time runs from that response to a named owner. Report both intervals. A fast queue with a slow owner is a different problem from a slow queue with a fast owner.",
      "Check the escalations that were sent outside the documented path. A direct message to an account manager may reach an owner quickly but bypass the support record. Record the path and the result. The study should not compare a bypass with the documented path without noting the difference.",
      "Report the number of escalations, the median and longest time to ownership, and the share that reached a named owner within the contracted response time. Show the counts by vendor, severity, and issue type. Present the share with no recorded owner. Use the same denominator for every rate and show escalations with incomplete records.",
      "Separate a delay caused by the vendor from one caused by the client's message. A missing account number or a vague impact statement can slow the response. Report the two categories separately so the client can fix its own side first. A vendor score without that distinction can be unfair.",
      "Inspect the escalations that took the longest and describe the pattern without naming individuals. A cluster at night may point to a coverage gap, while a cluster in one issue type may point to a queue that lacks the right specialist. Compare the result with the severity and the support tier. Report the pattern beside the median time.",
      "Do not treat a fast ownership time as proof that the issue was resolved quickly. A named owner can accept a case and still take days to fix it. Report the resolution time beside the ownership time. The two measures answer different questions.",
      "The record cannot show whether the vendor's owner had the skill or authority to fix the issue or whether the client's message was complete. It can show only the time to a named owner and the next action. A fast response is not proof of a good outcome, and a slow response is not proof of neglect. The protocol also cannot capture a phone call that left no record.",
      "A useful additional view is the share of escalations that required a second contact before reaching an owner. A high share may mean the first path is broken or the contact card is stale. Record the second contact and the reason. That field turns the latency measure into a review of the path.",
      "Give the result to the client vendor owner and the offshore support lead with one observable change. The change might be a named on-call owner, a shorter escalation template, a new support tier, or a quarterly contact-card test. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the step that consumed the most time, not the step that is easiest to report. Record the expected effect and the evidence that will prove it. An escalation path that is never timed is a hope, not a service."
    ],
    "takeaways": [
      "Start the clock when the first useful message is sent.",
      "Stop the clock at a named owner with a next action.",
      "Report queue time and ownership time separately.",
      "Distinguish a vendor delay from an incomplete client message.",
      "Measure resolution time beside ownership time."
    ],
    "sources": [
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "Google SRE Book",
        "https://sre.google/sre-book/table-of-contents/"
      ],
      [
        "Atlassian incident management",
        "https://www.atlassian.com/incident-management"
      ]
    ],
    "related": [
      "write-a-vendor-escalation-contact-card-for-an-offshore-support-lane",
      "what-share-of-outsourced-postmortems-close-their-action-items"
    ]
  },
  {
    "slug": "what-share-of-shared-component-releases-have-a-recorded-client-sign-off",
    "title": "What share of shared component releases have a recorded client sign-off?",
    "excerpt": "A protocol for measuring shared component sign-off coverage, separating a technical review from a consumer acceptance, and reporting gaps by surface.",
    "topic": "Shared component sign-off",
    "published": "2026-11-16",
    "hero": "/nov16/research/what-share-of-shared-component-releases-have-a-recorded-client-sign-off.webp",
    "body": [
      "This protocol measures the share of shared component releases that have a recorded client sign-off before deployment. The unit is one component release to one consumer surface, identified by the component version and the consumer route. A sign-off means a named consumer owner accepted the version with the required evidence. The study describes release control, not the visual quality of the component.",
      "Define the component boundary from the package or source path and the list of consumer surfaces. Record the version, the commit, and the routes that depend on it. If the consumer list changes during the window, split the sample at the change date. A new consumer changes the denominator.",
      "Define a sign-off as a record that names the consumer owner, the version checked, the route or viewport, the result, and the acceptance date. A technical review by the component author is not a consumer sign-off. Record the evidence used for the classification. The definition should be tested on two past releases before collection begins.",
      "Set the scope to one client, one shared component library, and a fixed release window. Record the review process, the release authority, and the evidence standard. If the process changes during the window, keep the earlier definition for releases already in progress. A new template can change the number of recorded sign-offs.",
      "Set the population as every component release in the window that reached at least one consumer surface, including releases that were later rolled back. The unit is the release-to-consumer pair, not the package version. One version can ship to five surfaces with five different decisions. Test the unit on a multi-surface release before the full sample.",
      "Record the component, version, commit, consumer, consumer owner, check date, check result, sign-off date, release date, and rollback result. Add the evidence link and the person who verified it. Keep the record linked to the pull request and the deployment log. A second reviewer should be able to reconstruct the decision.",
      "Separate a sign-off recorded before release from one recorded after release. A retroactive approval is a different control from a gate. Report the two groups separately. Combining them hides whether the sign-off prevented an unreviewed release.",
      "Check the consumer surfaces that were missed by the component owner's list. A shared header may appear on a route that nobody named. Record the missing surface and how it was found. The study should report the share of releases with an incomplete consumer list.",
      "Report the number of releases, the number of consumer pairs, the sign-off rate, the rate of retroactive sign-off, and the number with missing evidence. Show the counts by component and by consumer group. Present the number of releases that shipped to a surface without a named owner. Use the same denominator for every rate.",
      "Separate a missing sign-off caused by an unknown consumer from one caused by a missed review. An unknown consumer is a mapping problem, while a missed review is a scheduling or authority problem. Report the two categories separately so the client can choose the right fix. Keep the discovery method beside each missing surface.",
      "Inspect the releases with the lowest sign-off coverage and describe the pattern without naming individuals. A component used by many surfaces may need a different review path from a small internal widget. Compare the result with the release frequency and the consumer count. Report emergency releases separately.",
      "Do not treat a signed record as proof that the consumer checked the real surface. A record can be complete and still describe a storybook-only review. Report whether the evidence shows the production route. The study measures the record and the evidence, not the reviewer's intent.",
      "The record cannot show whether a consumer owner understood the change or whether the component behaved correctly in every browser. It can show only whether a named acceptance exists for the version that shipped. A missing sign-off is not proof of a defect, and a present sign-off is not proof of quality. The protocol also cannot capture a hotfix applied outside the release process.",
      "A useful additional view is the share of sign-offs that included an accessibility check. An accessibility check is not required for every component, but its presence helps interpret the quality of the acceptance. Record the check and the assistive technology used. The field should be reported separately from the sign-off rate.",
      "Give the result to the client technical owner and the offshore frontend lead with one observable change. The change might be a consumer map, a release checklist, a named sign-off owner per surface, or a gate that blocks release without acceptance. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should target the consumer group with the most missing sign-offs, not the component that is easiest to document. Record the expected effect and the evidence that will prove it. A sign-off that is never sampled is a form, not a release control."
    ],
    "takeaways": [
      "Count the release-to-consumer pair, not the package version.",
      "Separate a technical review from a consumer acceptance.",
      "Report retroactive sign-offs separately from pre-release gates.",
      "Find consumers that the component owner's list missed.",
      "Check whether the evidence shows the real surface."
    ],
    "sources": [
      [
        "WAI WCAG 2.2",
        "https://www.w3.org/TR/WCAG22/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "Google Technical Writing",
        "https://developers.google.com/tech-writing"
      ]
    ],
    "related": [
      "write-a-shared-component-sign-off-record-for-outsourced-frontend-work",
      "how-often-do-remote-contractor-laptops-fail-a-baseline-device-check"
    ]
  }
];
