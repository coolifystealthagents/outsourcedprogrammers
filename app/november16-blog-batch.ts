export const november16BlogBatch = [
  {
    "slug": "write-a-vendor-escalation-contact-card-for-an-offshore-support-lane",
    "title": "Write a vendor escalation contact card for an offshore support lane",
    "excerpt": "A contact card that names the vendor owner, the technical path, the trigger, and the evidence the vendor will ask for before an incident starts.",
    "minutes": 8,
    "published": "2026-11-16",
    "body": [
      "## Define what the card must answer",
      "A vendor escalation card should answer who to contact, when to contact them, and what the caller must bring to the conversation. The card is not a directory of every support address, because a long list slows the moment when speed matters. Write it for the person who is already in an incident and has no time to search. Keep the first screen to one vendor and one path.",
      "Start with the service the vendor provides and the failure that would require escalation. Name the product, the environment, and the customer impact that qualifies. A card without a trigger becomes a general complaint line. The reader should know within seconds whether this is the right path.",
      "## Name the vendor owner and the backup",
      "Name the person who owns the vendor relationship and the person who covers when they are unavailable. Include the role, the time zone, and the channel that reaches them. A name without a backup is only useful during one shift. Record the date the contacts were confirmed.",
      "Separate the account manager from the technical support path. The account manager can help with a commercial problem, while an engineer needs the support queue that can inspect logs. Put both on the card with the kind of issue each handles. The reader should not guess which door to knock on.",
      "## Record the escalation path, not just a number",
      "Write the order of contacts from the first support ticket to the named escalation owner. Include the ticket portal, the support phone line, and the contact who can reopen a stalled case. A single mobile number hides the step where most delays happen. The card should show the path, not only the destination.",
      "Add the information the vendor will ask for before it can act. Record the account identifier, the service name, the error reference, and the business impact. Give one example of a complete escalation message. The reader can then send a useful request on the first attempt.",
      "## Set the trigger and the response expectation",
      "Define the condition that turns a normal ticket into an escalation. A production outage, a missed security patch, or a repeated failure may qualify, while a cosmetic request may not. Write the threshold with a concrete example. The card should not leave the decision to whoever is most frustrated.",
      "Record the response the vendor has committed to and the point at which the team should escalate again. A commitment without a clock is hard to enforce. Note the difference between an acknowledgement and a fix. The reader should know what to expect at each step.",
      "## Test the card before an incident",
      "Run a tabletop test with a realistic failure and ask a person who did not write the card to use it. Time how long it takes to find the right contact and send the first message. Record every question the tester had to ask. A card that needs a guide is not finished.",
      "Send a low-risk test message through the support path and confirm that the vendor receives it. Ask the vendor to confirm the account details on file. Correct any stale name or number before a real incident. The test is also a chance to meet the person behind the queue.",
      "## Keep the card current",
      "Review the card when the vendor contract changes, when a contact leaves, or when the support portal moves. Put the review date on the card and the owner who confirms it. A quarterly check is enough for a stable service. A card without a date is assumed to be current until it fails.",
      "Store one copy in the place the on-call person will look, and link to it from the incident template. Do not keep a personal copy in a chat thread. Remove old versions so nobody follows a retired number. The source of truth should be obvious.",
      "## Review escalations for gaps",
      "After each escalation, record the time to the first response, the time to the named owner, and the time to resolution. Ask whether the card helped or whether the team found the path another way. A gap in the card is a finding, not a failure of the person. Update the card with the answer.",
      "Look for repeat escalations to the same vendor or the same contact. A pattern may mean the normal support path is too slow or the trigger is too narrow. Share the pattern with the vendor owner and the client. The review should change one part of the card, not just add a note."
    ]
  },
  {
    "slug": "set-a-device-posture-check-for-remote-contractor-laptops",
    "title": "Set a device posture check for remote contractor laptops",
    "excerpt": "A device check that confirms identity, disk encryption, updates, and screen lock before a remote contractor receives production work.",
    "minutes": 8,
    "published": "2026-11-16",
    "body": [
      "## Start with the baseline the work requires",
      "A device posture check should begin with the work the contractor will perform and the data the device can reach. A production support role needs a different baseline from a design review that uses public screenshots. Write the baseline for each access tier rather than one rule for everyone. The check should be strict where the risk is high and simple where it is not.",
      "Reference an established benchmark where the client already uses one. The CIS Benchmarks and the operating system vendor guidance are useful starting points for encryption, patching, and screen lock. Record the version and the date of the reference. A baseline without a source becomes a personal preference.",
      "## Check identity, disk, and updates first",
      "Confirm that the device is enrolled in the client's identity system and that the login is tied to the named contractor. Check that full-disk encryption is on and that the recovery key is stored in the approved place. Confirm the operating system and browser are on a supported version. These three checks block most avoidable exposure.",
      "Verify that the device has a screen lock, a firewall, and an approved endpoint protection agent where the client requires one. Check the agent's last check-in time rather than the icon in the tray. A stale agent is not protection. Record the version and the result for each item.",
      "## Treat missing evidence as a failed check",
      "A check that cannot read a setting should fail closed for production access. An older operating system may hide the encryption state from the inventory tool. A missing result is not a pass. Record the reason and route the device to the repair path.",
      "Separate a setting that is off from a setting that is unknown. The first needs a fix, while the second needs a diagnostic step. Write the response for each case. The reviewer should not have to interpret an empty field.",
      "## Give the contractor a repair path",
      "Tell the contractor what failed, what the expected state is, and how to fix it without exposing the whole baseline. Link to the vendor's instructions for encryption or updates. Name the person who can approve a temporary exception. A failed check without a next step becomes a lost day.",
      "Set a short window for the repair and a date to retest. If the device cannot meet the baseline, provide an approved alternative rather than letting the contractor use a personal machine outside the rules. Record the alternative and its expiry. The work should not proceed on an unverified device.",
      "## Separate a blocking failure from a warning",
      "Mark the checks that block production access and the checks that only require a plan. Missing encryption or a stale operating system should block, while an outdated optional tool may be a warning. Publish the distinction. A warning that is treated as a block slows the team, and a block that is treated as a warning defeats the check.",
      "Review the warning list each month and remove items that never lead to action. A long list of warnings trains people to ignore the result. Keep the blocking list short and defensible. The posture report should fit on one page.",
      "## Review failures by cause",
      "Group failures by device model, operating system, and contractor group. A cluster on one model may point to a driver or an inventory bug. A cluster on new contractors may point to onboarding. The pattern matters more than a single failed device.",
      "Compare the failure rate with the repair time. A high failure rate with a fast repair may be acceptable, while a low rate with a week-long repair is not. Report both numbers. The client can then decide whether to change the baseline or the support path.",
      "## Retest after a device change",
      "Run the check again after an operating system upgrade, a device replacement, or a change in the contractor's role. A new device may inherit an old profile that no longer matches the baseline. Record the retest date and the result. The posture record should follow the device, not the person's memory.",
      "Sample a small number of devices each quarter and check them manually against the inventory. Automation can report a setting that the user has since changed. A manual sample keeps the report honest. Record the sample size and any difference."
    ]
  },
  {
    "slug": "write-a-blameless-postmortem-action-tracker-for-an-offshore-incident-pod",
    "title": "Write a blameless postmortem action tracker for an offshore incident pod",
    "excerpt": "An action tracker that turns a postmortem timeline into owned, dated changes and closes each one with evidence rather than a meeting note.",
    "minutes": 8,
    "published": "2026-11-16",
    "body": [
      "## Start the review from the timeline",
      "A postmortem action tracker should begin with a shared timeline of the incident, not with a list of things someone wishes had happened. Record the detection time, the first response, the escalation, the mitigation, and the close. Add the customer impact at each stage. The timeline gives every action a place to attach.",
      "Separate what the team knew from what the team learned later. A decision that looked wrong at the end may have been reasonable with the information available at the time. Mark the information available at each step. This keeps the review honest and reduces defensiveness.",
      "## Separate cause from blame",
      "Describe the cause in terms of system conditions, missing information, and competing priorities. Avoid naming a person as the cause, because that ends the inquiry without changing the system. Ask what made the error easy to make. The answer is usually a design or process gap.",
      "Write a short statement that the review is blameless and explain what that means in practice. People can describe what they saw without fear of punishment for an honest mistake. The review still holds the team accountable for completing the actions. Blameless does not mean consequence-free.",
      "## Write actions a person can complete",
      "An action should name a concrete change such as a new alert, a permission removal, a test, or a runbook step. Avoid vague actions like improve communication or be more careful. A reader should be able to tell when the action is done. If the action is too large, split it.",
      "Tie each action to the timeline event that it addresses. Explain how the change would have changed the outcome or shortened the response. An action without a link to the incident becomes general improvement work. The team should be able to drop actions that do not address a real gap.",
      "## Give every action an owner and a due date",
      "Assign one owner per action, even when several people will help. The owner is accountable for the change and the evidence. Set a due date that fits the risk, with a shorter date for a production safety issue. Record the date the action was accepted.",
      "Put the actions in the same tracker the delivery team already reviews. A separate spreadsheet will be forgotten after the postmortem meeting. Show the open actions in the weekly review and the client report. Visibility is part of the commitment.",
      "## Close an action with evidence",
      "Close an action only when the change is live and the evidence shows it works. A merged pull request is not enough if the deploy is pending. A new alert is not enough if it has never fired in a test. Attach the link, the test result, or the screenshot that proves the change.",
      "Ask a second person to confirm the evidence for high-risk actions. The reviewer should be able to see the change without asking the owner to explain it. Record the reviewer and the date. The close should be reproducible.",
      "## Review repeat actions",
      "Compare the new actions with the actions from the last few postmortems. A repeated action means the earlier change did not stick or was never completed. Treat the repeat as a finding about the follow-through, not just the incident. Reopen the old action or replace it with a stronger one.",
      "Look for actions that are always assigned to the same person or team. A bottleneck may be hiding behind a long list. Ask whether the owner has the authority and the time to complete the work. An action without capacity is a wish.",
      "## Publish the learning without raw details",
      "Share a short summary with the offshore pod and the client that explains what changed and what remains open. Remove customer names, credentials, and unnecessary technical detail. The summary should help people recognize the pattern in their own work. Keep the full record in the restricted incident repository.",
      "Review the summary with the client before publishing it outside the delivery team. The client may need to control a customer message or a regulatory disclosure. Record the approval. A useful summary that creates a new risk is not a good outcome."
    ]
  },
  {
    "slug": "set-a-release-freeze-exception-register-for-outsourced-delivery",
    "title": "Set a release freeze exception register for outsourced delivery",
    "excerpt": "A register that defines what a release freeze protects, who can grant an exception, and how the compensating controls are recorded and closed.",
    "minutes": 8,
    "published": "2026-11-16",
    "body": [
      "## Define what the freeze protects",
      "A release freeze exists to protect a period when a change could cause disproportionate harm. It may cover a holiday, a financial close, a customer launch, or a regulatory window. Write the dates and the systems in scope. A freeze without a reason becomes an arbitrary pause.",
      "Separate a full freeze from a limited one. A full freeze blocks all production changes, while a limited freeze may allow a security fix or a content update. Name the exception categories before the freeze begins. The team should not invent the rules during the window.",
      "## Name who can grant an exception",
      "Name the person who can approve an exception and the backup who acts when they are unavailable. The approver should own the customer or technical risk, not just the calendar. Record the authority in the register. A verbal approval from a passerby is not enough.",
      "Require the requester and the approver to be different people. This separation makes the decision visible and reduces a rushed approval. For a small team, name an alternate approver outside the delivery pod. Record the conflict rule in the freeze notice.",
      "## Require a written case before approval",
      "Ask for the change, the reason it cannot wait, the systems affected, and the customer impact if it fails. Require a rollback plan and a named person who will execute it. A request that says urgent without evidence should be returned. The register should show the case, not just the outcome.",
      "Record the alternatives considered, including waiting until after the freeze. The requester should explain why the delay is worse than the risk. Add the evidence that supports the claim. The approver can then make a decision that is easy to review later.",
      "## Record the compensating controls",
      "List the controls that make the exception safer, such as a canary release, a feature flag, extra monitoring, or a rollback rehearsal. Name the person who will watch the change and the time window. A control that nobody owns is not a control. Record the evidence that the control is active.",
      "Set the maximum scope of the exception. Limit the change to one service, one customer, or one time window where possible. A broad exception becomes a second release window. The register should show the boundary and the expiry.",
      "## Close the exception when the freeze ends",
      "Mark the exception closed when the change is stable or rolled back and the freeze period has ended. Record the result, including any customer impact. Do not leave the exception open as a permanent permission. The close should name the person who confirmed it.",
      "Review the change after the freeze with the same evidence standard as a normal release. A successful exception is not proof that the freeze was unnecessary. Record what was learned about the risk and the controls. The next freeze should start with that knowledge.",
      "## Review exceptions by pattern",
      "Count the exceptions by reason, system, requester, and approver. A cluster in one system may mean the freeze scope is wrong. A cluster from one team may mean planning starts too late. The pattern is more useful than a single dramatic approval.",
      "Compare the exception rate with the change volume and the incident rate during the freeze. A high rate with no incidents may still be a planning problem, while a low rate with one bad change may be a control gap. Report both. Avoid using the count as a score for the approver.",
      "## Publish the register to the delivery team",
      "Keep the register in a place the delivery team and the client can read during the freeze. Show the pending requests, the decisions, the controls, and the expiry. A private register creates rumors and repeat requests. The team should know the current state without asking.",
      "Publish a short summary after the freeze with the number of requests, approvals, denials, and incidents. Remove sensitive customer detail. The summary should explain one change for the next freeze. A register that is never reviewed becomes paperwork."
    ]
  },
  {
    "slug": "write-a-shared-component-sign-off-record-for-outsourced-frontend-work",
    "title": "Write a shared component sign-off record for outsourced frontend work",
    "excerpt": "A sign-off record that ties a shared component version to its consumers, the checks they ran, and the release authority that accepted the change.",
    "minutes": 8,
    "published": "2026-11-16",
    "body": [
      "## Define the component and its consumers",
      "A shared component sign-off starts with a clear boundary around the component and the products that use it. Name the package, the version, and the routes or applications that depend on it. A change to a button may reach a checkout flow that the author never opened. The record should make that reach visible.",
      "List the consumer owners and the person who can accept a change for each one. A consumer without an owner cannot sign off, so the gap should be resolved before the release. Record the contact and the date. The list is part of the release evidence.",
      "## Record the version and the diff",
      "Record the commit, the package version, and the exact diff that will be released. Link the pull request and the visual comparison rather than describing the change from memory. A version number without a commit can point to a different build. The reviewer should be able to reproduce the artifact.",
      "Describe the intended behavior change and the parts that should not change. A refactor that claims no visual difference still needs a check. Note any dependency upgrade that travels with the component. The record should separate the intended change from the side effects.",
      "## Require consumer checks before sign-off",
      "Ask each consumer owner to run the component in the context where it appears. A storybook page is useful, but it does not replace the checkout or account screen. Record the route, the viewport, and the result. A check that only covers the happy path should be marked as partial.",
      "Include keyboard, focus, and screen-reader checks where the component supports them. A visual match can hide a broken tab order or a missing label. Record the assistive technology and the browser used. The consumer owner decides whether the result is acceptable for their surface.",
      "## Separate technical approval from release authority",
      "The component author or reviewer can confirm the code and the tests, while the client technical owner keeps release authority. Write both roles in the record. A technical approval is not permission to deploy to every consumer. The boundary should be explicit.",
      "Name the person who can approve a release to each consumer and the person who can stop it. A consumer owner should be able to hold the release for their surface without blocking every other surface. Record the decision and the reason. This keeps one team from speaking for another.",
      "## Capture visual and access evidence",
      "Store before-and-after screenshots at the agreed viewports, with the route and the build identifier in the caption. A screenshot without a build can be mistaken for the wrong version. Add the browser and the operating system. The evidence should let a reviewer see what the user sees.",
      "Record the access used for the check, such as a test account or a seeded environment. Confirm that no production personal data appears in the screenshots. Remove the data or mask it before attaching the image. The sign-off record is not a place to store customer information.",
      "## Handle a late change after sign-off",
      "A change after sign-off invalidates the record for the affected consumers. Require a new diff, a new check, and a new acceptance. Do not append a note and keep the old approval. The version that ships should match the version that was signed.",
      "If the late change is urgent, use the freeze exception or the emergency path rather than bypassing the record. Record the approver, the scope, and the follow-up check. The exception should expire with the release. A permanent shortcut is a missing control.",
      "## Close the record and notify consumers",
      "Close the record when every consumer has accepted or explicitly deferred the version. Record the release date and the person who deployed it. Send a short notice to the consumer owners with the version and the rollback path. The notice should not require them to open the full record.",
      "Review the record after the release for missing consumers or checks that were marked partial. A component that reaches more surfaces than the list shows is a boundary failure. Update the consumer map before the next release. The record should get shorter and more accurate over time."
    ]
  }
];

export const november16BlogDetails = {
  "write-a-vendor-escalation-contact-card-for-an-offshore-support-lane": {
    "takeaways": [
      "Name one vendor path with an owner and a backup.",
      "Write the trigger and the response the vendor committed to.",
      "Give the reader the account details the vendor will request.",
      "Test the card with someone who did not write it.",
      "Review every escalation and update the card."
    ],
    "readinessRows": [
      {
        "area": "Path",
        "ready": "The support queue, named owner, and backup are on one screen.",
        "notReady": "A list of addresses with no order."
      },
      {
        "area": "Trigger",
        "ready": "A concrete failure and impact define when to escalate.",
        "notReady": "Escalate whenever the ticket feels slow."
      },
      {
        "area": "Evidence",
        "ready": "Account, service, error reference, and impact travel together.",
        "notReady": "A one-line message that says it is broken."
      },
      {
        "area": "Review",
        "ready": "A named owner confirms the card each quarter.",
        "notReady": "Contacts change and nobody notices."
      }
    ],
    "sections": [
      {
        "id": "define-what-the-card-must-answer",
        "title": "Define what the card must answer",
        "paragraphs": [
          "A vendor escalation card should answer who to contact, when to contact them, and what the caller must bring to the conversation. The card is not a directory of every support address, because a long list slows the moment when speed matters. Write it for the person who is already in an incident and has no time to search. Keep the first screen to one vendor and one path.",
          "Start with the service the vendor provides and the failure that would require escalation. Name the product, the environment, and the customer impact that qualifies. A card without a trigger becomes a general complaint line. The reader should know within seconds whether this is the right path."
        ]
      },
      {
        "id": "name-the-vendor-owner-and-the-backup",
        "title": "Name the vendor owner and the backup",
        "paragraphs": [
          "Name the person who owns the vendor relationship and the person who covers when they are unavailable. Include the role, the time zone, and the channel that reaches them. A name without a backup is only useful during one shift. Record the date the contacts were confirmed.",
          "Separate the account manager from the technical support path. The account manager can help with a commercial problem, while an engineer needs the support queue that can inspect logs. Put both on the card with the kind of issue each handles. The reader should not guess which door to knock on."
        ]
      },
      {
        "id": "record-the-escalation-path-not-just-a-number",
        "title": "Record the escalation path, not just a number",
        "paragraphs": [
          "Write the order of contacts from the first support ticket to the named escalation owner. Include the ticket portal, the support phone line, and the contact who can reopen a stalled case. A single mobile number hides the step where most delays happen. The card should show the path, not only the destination.",
          "Add the information the vendor will ask for before it can act. Record the account identifier, the service name, the error reference, and the business impact. Give one example of a complete escalation message. The reader can then send a useful request on the first attempt."
        ]
      },
      {
        "id": "set-the-trigger-and-the-response-expectation",
        "title": "Set the trigger and the response expectation",
        "paragraphs": [
          "Define the condition that turns a normal ticket into an escalation. A production outage, a missed security patch, or a repeated failure may qualify, while a cosmetic request may not. Write the threshold with a concrete example. The card should not leave the decision to whoever is most frustrated.",
          "Record the response the vendor has committed to and the point at which the team should escalate again. A commitment without a clock is hard to enforce. Note the difference between an acknowledgement and a fix. The reader should know what to expect at each step."
        ]
      },
      {
        "id": "test-the-card-before-an-incident",
        "title": "Test the card before an incident",
        "paragraphs": [
          "Run a tabletop test with a realistic failure and ask a person who did not write the card to use it. Time how long it takes to find the right contact and send the first message. Record every question the tester had to ask. A card that needs a guide is not finished.",
          "Send a low-risk test message through the support path and confirm that the vendor receives it. Ask the vendor to confirm the account details on file. Correct any stale name or number before a real incident. The test is also a chance to meet the person behind the queue."
        ]
      },
      {
        "id": "keep-the-card-current",
        "title": "Keep the card current",
        "paragraphs": [
          "Review the card when the vendor contract changes, when a contact leaves, or when the support portal moves. Put the review date on the card and the owner who confirms it. A quarterly check is enough for a stable service. A card without a date is assumed to be current until it fails.",
          "Store one copy in the place the on-call person will look, and link to it from the incident template. Do not keep a personal copy in a chat thread. Remove old versions so nobody follows a retired number. The source of truth should be obvious."
        ]
      },
      {
        "id": "review-escalations-for-gaps",
        "title": "Review escalations for gaps",
        "paragraphs": [
          "After each escalation, record the time to the first response, the time to the named owner, and the time to resolution. Ask whether the card helped or whether the team found the path another way. A gap in the card is a finding, not a failure of the person. Update the card with the answer.",
          "Look for repeat escalations to the same vendor or the same contact. A pattern may mean the normal support path is too slow or the trigger is too narrow. Share the pattern with the vendor owner and the client. The review should change one part of the card, not just add a note."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "First message",
        "text": "Send the account identifier, the service, the error reference, the business impact, and the requested action."
      },
      {
        "label": "Escalation trigger",
        "text": "Escalate when the committed response time passes without a substantive update on a production issue."
      },
      {
        "label": "Backup rule",
        "text": "If the named owner does not answer within the stated window, contact the backup and record the handoff."
      },
      {
        "label": "Review date",
        "text": "Confirm the contacts and the response commitment every quarter and after any vendor change."
      }
    ],
    "faqs": [
      {
        "question": "What belongs on the first screen?",
        "answer": "One vendor, one escalation trigger, one named owner, one backup, and the information the vendor will ask for."
      },
      {
        "question": "Should the card include every support number?",
        "answer": "No, the card should show the ordered path for the issue type and keep unrelated contacts in a linked directory."
      },
      {
        "question": "How often should the card be tested?",
        "answer": "Test it at least quarterly and after any vendor, contract, or contact change."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Incident response and third-party control expectations."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Vendor accountability and incident communication practice."
      },
      {
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/",
        "note": "Incident response and escalation practice."
      },
      {
        "name": "Atlassian incident management",
        "url": "https://www.atlassian.com/incident-management",
        "note": "Severity, escalation, and communication roles."
      }
    ],
    "heroImage": "/nov16/blog/write-a-vendor-escalation-contact-card-for-an-offshore-support-lane.webp"
  },
  "set-a-device-posture-check-for-remote-contractor-laptops": {
    "takeaways": [
      "Write a baseline for each access tier.",
      "Block production access when encryption, patching, or identity fails.",
      "Treat an unreadable setting as unknown, not as a pass.",
      "Give the contractor a repair path and a retest date.",
      "Sample devices quarterly to test the inventory."
    ],
    "readinessRows": [
      {
        "area": "Identity",
        "ready": "The device is enrolled and the login maps to a named contractor.",
        "notReady": "A shared local account opens the machine."
      },
      {
        "area": "Disk",
        "ready": "Full-disk encryption is on and the recovery key is escrowed.",
        "notReady": "Encryption is unknown or the key is only on the device."
      },
      {
        "area": "Updates",
        "ready": "The operating system and browser are supported and patched.",
        "notReady": "An end-of-life version remains in use."
      },
      {
        "area": "Evidence",
        "ready": "Each setting has a timestamp and a named reviewer.",
        "notReady": "A screenshot from last quarter."
      }
    ],
    "sections": [
      {
        "id": "start-with-the-baseline-the-work-requires",
        "title": "Start with the baseline the work requires",
        "paragraphs": [
          "A device posture check should begin with the work the contractor will perform and the data the device can reach. A production support role needs a different baseline from a design review that uses public screenshots. Write the baseline for each access tier rather than one rule for everyone. The check should be strict where the risk is high and simple where it is not.",
          "Reference an established benchmark where the client already uses one. The CIS Benchmarks and the operating system vendor guidance are useful starting points for encryption, patching, and screen lock. Record the version and the date of the reference. A baseline without a source becomes a personal preference."
        ]
      },
      {
        "id": "check-identity-disk-and-updates-first",
        "title": "Check identity, disk, and updates first",
        "paragraphs": [
          "Confirm that the device is enrolled in the client's identity system and that the login is tied to the named contractor. Check that full-disk encryption is on and that the recovery key is stored in the approved place. Confirm the operating system and browser are on a supported version. These three checks block most avoidable exposure.",
          "Verify that the device has a screen lock, a firewall, and an approved endpoint protection agent where the client requires one. Check the agent's last check-in time rather than the icon in the tray. A stale agent is not protection. Record the version and the result for each item."
        ]
      },
      {
        "id": "treat-missing-evidence-as-a-failed-check",
        "title": "Treat missing evidence as a failed check",
        "paragraphs": [
          "A check that cannot read a setting should fail closed for production access. An older operating system may hide the encryption state from the inventory tool. A missing result is not a pass. Record the reason and route the device to the repair path.",
          "Separate a setting that is off from a setting that is unknown. The first needs a fix, while the second needs a diagnostic step. Write the response for each case. The reviewer should not have to interpret an empty field."
        ]
      },
      {
        "id": "give-the-contractor-a-repair-path",
        "title": "Give the contractor a repair path",
        "paragraphs": [
          "Tell the contractor what failed, what the expected state is, and how to fix it without exposing the whole baseline. Link to the vendor's instructions for encryption or updates. Name the person who can approve a temporary exception. A failed check without a next step becomes a lost day.",
          "Set a short window for the repair and a date to retest. If the device cannot meet the baseline, provide an approved alternative rather than letting the contractor use a personal machine outside the rules. Record the alternative and its expiry. The work should not proceed on an unverified device."
        ]
      },
      {
        "id": "separate-a-blocking-failure-from-a-warning",
        "title": "Separate a blocking failure from a warning",
        "paragraphs": [
          "Mark the checks that block production access and the checks that only require a plan. Missing encryption or a stale operating system should block, while an outdated optional tool may be a warning. Publish the distinction. A warning that is treated as a block slows the team, and a block that is treated as a warning defeats the check.",
          "Review the warning list each month and remove items that never lead to action. A long list of warnings trains people to ignore the result. Keep the blocking list short and defensible. The posture report should fit on one page."
        ]
      },
      {
        "id": "review-failures-by-cause",
        "title": "Review failures by cause",
        "paragraphs": [
          "Group failures by device model, operating system, and contractor group. A cluster on one model may point to a driver or an inventory bug. A cluster on new contractors may point to onboarding. The pattern matters more than a single failed device.",
          "Compare the failure rate with the repair time. A high failure rate with a fast repair may be acceptable, while a low rate with a week-long repair is not. Report both numbers. The client can then decide whether to change the baseline or the support path."
        ]
      },
      {
        "id": "retest-after-a-device-change",
        "title": "Retest after a device change",
        "paragraphs": [
          "Run the check again after an operating system upgrade, a device replacement, or a change in the contractor's role. A new device may inherit an old profile that no longer matches the baseline. Record the retest date and the result. The posture record should follow the device, not the person's memory.",
          "Sample a small number of devices each quarter and check them manually against the inventory. Automation can report a setting that the user has since changed. A manual sample keeps the report honest. Record the sample size and any difference."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Blocking checks",
        "text": "Identity enrollment, disk encryption, supported operating system, screen lock, and the required endpoint agent."
      },
      {
        "label": "Warning checks",
        "text": "Optional tools, minor version drift, and settings that do not expose production data."
      },
      {
        "label": "Repair owner",
        "text": "The contractor fixes the device, the client administrator confirms the exception, and the reviewer records the retest."
      },
      {
        "label": "Retest trigger",
        "text": "Retest after a device replacement, an operating system upgrade, or a change in the contractor's access tier."
      }
    ],
    "faqs": [
      {
        "question": "Does a personal device automatically fail?",
        "answer": "It fails when the client baseline excludes personal devices or the required controls cannot be verified on that device."
      },
      {
        "question": "What if the inventory tool cannot read a setting?",
        "answer": "Treat it as unknown and block production access until a diagnostic or manual check confirms the state."
      },
      {
        "question": "How long can a repair take?",
        "answer": "Set a short window for the access tier, and provide an approved alternative if the device cannot meet the baseline in time."
      }
    ],
    "sources": [
      {
        "name": "CIS Benchmarks",
        "url": "https://www.cisecurity.org/cis-benchmarks",
        "note": "Operating system and application hardening baselines."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Configuration management and endpoint control expectations."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Secure configuration and least privilege principles."
      },
      {
        "name": "NIST SP 800-40 Rev. 4 patch management",
        "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final",
        "note": "Patch management planning and verification."
      }
    ],
    "heroImage": "/nov16/blog/set-a-device-posture-check-for-remote-contractor-laptops.webp"
  },
  "write-a-blameless-postmortem-action-tracker-for-an-offshore-incident-pod": {
    "takeaways": [
      "Build the timeline before writing actions.",
      "Describe system conditions rather than naming a person.",
      "Give every action one owner and a due date.",
      "Close only with evidence that the change is live.",
      "Reopen repeat actions instead of adding a duplicate."
    ],
    "readinessRows": [
      {
        "area": "Timeline",
        "ready": "Detection, response, mitigation, and close are timestamped.",
        "notReady": "A narrative written from memory a week later."
      },
      {
        "area": "Actions",
        "ready": "Each action names a change, an owner, and a due date.",
        "notReady": "A list of general improvements."
      },
      {
        "area": "Evidence",
        "ready": "The completed change is linked and tested.",
        "notReady": "A ticket marked done with no proof."
      },
      {
        "area": "Follow-through",
        "ready": "Open actions appear in the weekly review.",
        "notReady": "The tracker is opened only after the next incident."
      }
    ],
    "sections": [
      {
        "id": "start-the-review-from-the-timeline",
        "title": "Start the review from the timeline",
        "paragraphs": [
          "A postmortem action tracker should begin with a shared timeline of the incident, not with a list of things someone wishes had happened. Record the detection time, the first response, the escalation, the mitigation, and the close. Add the customer impact at each stage. The timeline gives every action a place to attach.",
          "Separate what the team knew from what the team learned later. A decision that looked wrong at the end may have been reasonable with the information available at the time. Mark the information available at each step. This keeps the review honest and reduces defensiveness."
        ]
      },
      {
        "id": "separate-cause-from-blame",
        "title": "Separate cause from blame",
        "paragraphs": [
          "Describe the cause in terms of system conditions, missing information, and competing priorities. Avoid naming a person as the cause, because that ends the inquiry without changing the system. Ask what made the error easy to make. The answer is usually a design or process gap.",
          "Write a short statement that the review is blameless and explain what that means in practice. People can describe what they saw without fear of punishment for an honest mistake. The review still holds the team accountable for completing the actions. Blameless does not mean consequence-free."
        ]
      },
      {
        "id": "write-actions-a-person-can-complete",
        "title": "Write actions a person can complete",
        "paragraphs": [
          "An action should name a concrete change such as a new alert, a permission removal, a test, or a runbook step. Avoid vague actions like improve communication or be more careful. A reader should be able to tell when the action is done. If the action is too large, split it.",
          "Tie each action to the timeline event that it addresses. Explain how the change would have changed the outcome or shortened the response. An action without a link to the incident becomes general improvement work. The team should be able to drop actions that do not address a real gap."
        ]
      },
      {
        "id": "give-every-action-an-owner-and-a-due-date",
        "title": "Give every action an owner and a due date",
        "paragraphs": [
          "Assign one owner per action, even when several people will help. The owner is accountable for the change and the evidence. Set a due date that fits the risk, with a shorter date for a production safety issue. Record the date the action was accepted.",
          "Put the actions in the same tracker the delivery team already reviews. A separate spreadsheet will be forgotten after the postmortem meeting. Show the open actions in the weekly review and the client report. Visibility is part of the commitment."
        ]
      },
      {
        "id": "close-an-action-with-evidence",
        "title": "Close an action with evidence",
        "paragraphs": [
          "Close an action only when the change is live and the evidence shows it works. A merged pull request is not enough if the deploy is pending. A new alert is not enough if it has never fired in a test. Attach the link, the test result, or the screenshot that proves the change.",
          "Ask a second person to confirm the evidence for high-risk actions. The reviewer should be able to see the change without asking the owner to explain it. Record the reviewer and the date. The close should be reproducible."
        ]
      },
      {
        "id": "review-repeat-actions",
        "title": "Review repeat actions",
        "paragraphs": [
          "Compare the new actions with the actions from the last few postmortems. A repeated action means the earlier change did not stick or was never completed. Treat the repeat as a finding about the follow-through, not just the incident. Reopen the old action or replace it with a stronger one.",
          "Look for actions that are always assigned to the same person or team. A bottleneck may be hiding behind a long list. Ask whether the owner has the authority and the time to complete the work. An action without capacity is a wish."
        ]
      },
      {
        "id": "publish-the-learning-without-raw-details",
        "title": "Publish the learning without raw details",
        "paragraphs": [
          "Share a short summary with the offshore pod and the client that explains what changed and what remains open. Remove customer names, credentials, and unnecessary technical detail. The summary should help people recognize the pattern in their own work. Keep the full record in the restricted incident repository.",
          "Review the summary with the client before publishing it outside the delivery team. The client may need to control a customer message or a regulatory disclosure. Record the approval. A useful summary that creates a new risk is not a good outcome."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Timeline owner",
        "text": "The incident commander confirms the sequence and the information available at each decision."
      },
      {
        "label": "Action owner",
        "text": "One named person is accountable for the change, the evidence, and the due date."
      },
      {
        "label": "Reviewer",
        "text": "A second person confirms high-risk actions are live before the tracker marks them closed."
      },
      {
        "label": "Client summary",
        "text": "The client approves any external summary and the level of technical detail it contains."
      }
    ],
    "faqs": [
      {
        "question": "Does blameless mean nobody is accountable?",
        "answer": "No, the team is accountable for the timeline and the actions, while honest mistakes are not punished as individual failures."
      },
      {
        "question": "How many actions should a postmortem produce?",
        "answer": "Only the actions that address a real gap, usually a small set with clear owners and dates."
      },
      {
        "question": "When can an action be closed?",
        "answer": "When the change is live and the linked evidence shows it works, not when the ticket is merely assigned or merged."
      }
    ],
    "sources": [
      {
        "name": "Google SRE Book, postmortem culture",
        "url": "https://sre.google/sre-book/postmortem-culture/",
        "note": "Blameless review and action tracking practice."
      },
      {
        "name": "PagerDuty incident response",
        "url": "https://response.pagerduty.com/",
        "note": "Incident roles, timelines, and follow-up."
      },
      {
        "name": "Atlassian incident management",
        "url": "https://www.atlassian.com/incident-management",
        "note": "Post-incident review and action ownership."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Incident response and corrective action expectations."
      }
    ],
    "heroImage": "/nov16/blog/write-a-blameless-postmortem-action-tracker-for-an-offshore-incident-pod.webp"
  },
  "set-a-release-freeze-exception-register-for-outsourced-delivery": {
    "takeaways": [
      "Write the freeze dates, systems, and reason.",
      "Separate the requester from the approver.",
      "Require a rollback plan and compensating controls.",
      "Limit each exception in scope and time.",
      "Review the pattern after the freeze ends."
    ],
    "readinessRows": [
      {
        "area": "Scope",
        "ready": "The freeze names dates, systems, and exception categories.",
        "notReady": "Everyone is told to be careful."
      },
      {
        "area": "Authority",
        "ready": "A named approver and backup own the risk decision.",
        "notReady": "Whoever is online approves."
      },
      {
        "area": "Case",
        "ready": "The request includes impact, rollback, and alternatives.",
        "notReady": "A chat message that says urgent."
      },
      {
        "area": "Close",
        "ready": "The exception expires and the result is recorded.",
        "notReady": "An open permission that outlives the freeze."
      }
    ],
    "sections": [
      {
        "id": "define-what-the-freeze-protects",
        "title": "Define what the freeze protects",
        "paragraphs": [
          "A release freeze exists to protect a period when a change could cause disproportionate harm. It may cover a holiday, a financial close, a customer launch, or a regulatory window. Write the dates and the systems in scope. A freeze without a reason becomes an arbitrary pause.",
          "Separate a full freeze from a limited one. A full freeze blocks all production changes, while a limited freeze may allow a security fix or a content update. Name the exception categories before the freeze begins. The team should not invent the rules during the window."
        ]
      },
      {
        "id": "name-who-can-grant-an-exception",
        "title": "Name who can grant an exception",
        "paragraphs": [
          "Name the person who can approve an exception and the backup who acts when they are unavailable. The approver should own the customer or technical risk, not just the calendar. Record the authority in the register. A verbal approval from a passerby is not enough.",
          "Require the requester and the approver to be different people. This separation makes the decision visible and reduces a rushed approval. For a small team, name an alternate approver outside the delivery pod. Record the conflict rule in the freeze notice."
        ]
      },
      {
        "id": "require-a-written-case-before-approval",
        "title": "Require a written case before approval",
        "paragraphs": [
          "Ask for the change, the reason it cannot wait, the systems affected, and the customer impact if it fails. Require a rollback plan and a named person who will execute it. A request that says urgent without evidence should be returned. The register should show the case, not just the outcome.",
          "Record the alternatives considered, including waiting until after the freeze. The requester should explain why the delay is worse than the risk. Add the evidence that supports the claim. The approver can then make a decision that is easy to review later."
        ]
      },
      {
        "id": "record-the-compensating-controls",
        "title": "Record the compensating controls",
        "paragraphs": [
          "List the controls that make the exception safer, such as a canary release, a feature flag, extra monitoring, or a rollback rehearsal. Name the person who will watch the change and the time window. A control that nobody owns is not a control. Record the evidence that the control is active.",
          "Set the maximum scope of the exception. Limit the change to one service, one customer, or one time window where possible. A broad exception becomes a second release window. The register should show the boundary and the expiry."
        ]
      },
      {
        "id": "close-the-exception-when-the-freeze-ends",
        "title": "Close the exception when the freeze ends",
        "paragraphs": [
          "Mark the exception closed when the change is stable or rolled back and the freeze period has ended. Record the result, including any customer impact. Do not leave the exception open as a permanent permission. The close should name the person who confirmed it.",
          "Review the change after the freeze with the same evidence standard as a normal release. A successful exception is not proof that the freeze was unnecessary. Record what was learned about the risk and the controls. The next freeze should start with that knowledge."
        ]
      },
      {
        "id": "review-exceptions-by-pattern",
        "title": "Review exceptions by pattern",
        "paragraphs": [
          "Count the exceptions by reason, system, requester, and approver. A cluster in one system may mean the freeze scope is wrong. A cluster from one team may mean planning starts too late. The pattern is more useful than a single dramatic approval.",
          "Compare the exception rate with the change volume and the incident rate during the freeze. A high rate with no incidents may still be a planning problem, while a low rate with one bad change may be a control gap. Report both. Avoid using the count as a score for the approver."
        ]
      },
      {
        "id": "publish-the-register-to-the-delivery-team",
        "title": "Publish the register to the delivery team",
        "paragraphs": [
          "Keep the register in a place the delivery team and the client can read during the freeze. Show the pending requests, the decisions, the controls, and the expiry. A private register creates rumors and repeat requests. The team should know the current state without asking.",
          "Publish a short summary after the freeze with the number of requests, approvals, denials, and incidents. Remove sensitive customer detail. The summary should explain one change for the next freeze. A register that is never reviewed becomes paperwork."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Requester",
        "text": "Provides the change, the reason it cannot wait, the impact, the rollback, and the alternatives."
      },
      {
        "label": "Approver",
        "text": "Owns the customer or technical risk and records the decision with the compensating controls."
      },
      {
        "label": "Watcher",
        "text": "Monitors the change during the exception window and confirms the rollback if needed."
      },
      {
        "label": "Reviewer",
        "text": "Closes the exception after the freeze and reports the result to the delivery team."
      }
    ],
    "faqs": [
      {
        "question": "Is a security fix always exempt?",
        "answer": "No, it still needs a written case and an approver, although the freeze policy may give it a faster path."
      },
      {
        "question": "Can an approver approve their own change?",
        "answer": "No, the requester and approver should be different people, with a named alternate for a small team."
      },
      {
        "question": "What happens when the freeze ends?",
        "answer": "The exception expires, the result is recorded, and the register is reviewed for patterns."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Change control and configuration management expectations."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Risk-based change and accountability principles."
      },
      {
        "name": "Google SRE Workbook, release engineering",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Release risk, canaries, and rollback practice."
      },
      {
        "name": "NIST SP 800-128 configuration management",
        "url": "https://csrc.nist.gov/pubs/sp/800/128/final",
        "note": "Configuration control and change documentation."
      }
    ],
    "heroImage": "/nov16/blog/set-a-release-freeze-exception-register-for-outsourced-delivery.webp"
  },
  "write-a-shared-component-sign-off-record-for-outsourced-frontend-work": {
    "takeaways": [
      "Name the component version and every consumer surface.",
      "Record the commit, the diff, and the intended behavior.",
      "Require a consumer check in the real surface.",
      "Keep technical approval separate from release authority.",
      "Invalidate the sign-off after a late change."
    ],
    "readinessRows": [
      {
        "area": "Boundary",
        "ready": "The package, version, and consumer routes are listed.",
        "notReady": "Only the component package is named."
      },
      {
        "area": "Diff",
        "ready": "The commit, pull request, and visual comparison are linked.",
        "notReady": "A version number with no build."
      },
      {
        "area": "Checks",
        "ready": "Each consumer records the route, viewport, and result.",
        "notReady": "A storybook check only."
      },
      {
        "area": "Authority",
        "ready": "Each consumer owner accepts or defers the release.",
        "notReady": "The author approves for everyone."
      }
    ],
    "sections": [
      {
        "id": "define-the-component-and-its-consumers",
        "title": "Define the component and its consumers",
        "paragraphs": [
          "A shared component sign-off starts with a clear boundary around the component and the products that use it. Name the package, the version, and the routes or applications that depend on it. A change to a button may reach a checkout flow that the author never opened. The record should make that reach visible.",
          "List the consumer owners and the person who can accept a change for each one. A consumer without an owner cannot sign off, so the gap should be resolved before the release. Record the contact and the date. The list is part of the release evidence."
        ]
      },
      {
        "id": "record-the-version-and-the-diff",
        "title": "Record the version and the diff",
        "paragraphs": [
          "Record the commit, the package version, and the exact diff that will be released. Link the pull request and the visual comparison rather than describing the change from memory. A version number without a commit can point to a different build. The reviewer should be able to reproduce the artifact.",
          "Describe the intended behavior change and the parts that should not change. A refactor that claims no visual difference still needs a check. Note any dependency upgrade that travels with the component. The record should separate the intended change from the side effects."
        ]
      },
      {
        "id": "require-consumer-checks-before-sign-off",
        "title": "Require consumer checks before sign-off",
        "paragraphs": [
          "Ask each consumer owner to run the component in the context where it appears. A storybook page is useful, but it does not replace the checkout or account screen. Record the route, the viewport, and the result. A check that only covers the happy path should be marked as partial.",
          "Include keyboard, focus, and screen-reader checks where the component supports them. A visual match can hide a broken tab order or a missing label. Record the assistive technology and the browser used. The consumer owner decides whether the result is acceptable for their surface."
        ]
      },
      {
        "id": "separate-technical-approval-from-release-authority",
        "title": "Separate technical approval from release authority",
        "paragraphs": [
          "The component author or reviewer can confirm the code and the tests, while the client technical owner keeps release authority. Write both roles in the record. A technical approval is not permission to deploy to every consumer. The boundary should be explicit.",
          "Name the person who can approve a release to each consumer and the person who can stop it. A consumer owner should be able to hold the release for their surface without blocking every other surface. Record the decision and the reason. This keeps one team from speaking for another."
        ]
      },
      {
        "id": "capture-visual-and-access-evidence",
        "title": "Capture visual and access evidence",
        "paragraphs": [
          "Store before-and-after screenshots at the agreed viewports, with the route and the build identifier in the caption. A screenshot without a build can be mistaken for the wrong version. Add the browser and the operating system. The evidence should let a reviewer see what the user sees.",
          "Record the access used for the check, such as a test account or a seeded environment. Confirm that no production personal data appears in the screenshots. Remove the data or mask it before attaching the image. The sign-off record is not a place to store customer information."
        ]
      },
      {
        "id": "handle-a-late-change-after-sign-off",
        "title": "Handle a late change after sign-off",
        "paragraphs": [
          "A change after sign-off invalidates the record for the affected consumers. Require a new diff, a new check, and a new acceptance. Do not append a note and keep the old approval. The version that ships should match the version that was signed.",
          "If the late change is urgent, use the freeze exception or the emergency path rather than bypassing the record. Record the approver, the scope, and the follow-up check. The exception should expire with the release. A permanent shortcut is a missing control."
        ]
      },
      {
        "id": "close-the-record-and-notify-consumers",
        "title": "Close the record and notify consumers",
        "paragraphs": [
          "Close the record when every consumer has accepted or explicitly deferred the version. Record the release date and the person who deployed it. Send a short notice to the consumer owners with the version and the rollback path. The notice should not require them to open the full record.",
          "Review the record after the release for missing consumers or checks that were marked partial. A component that reaches more surfaces than the list shows is a boundary failure. Update the consumer map before the next release. The record should get shorter and more accurate over time."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Component owner",
        "text": "Provides the version, the diff, the tests, and the visual evidence."
      },
      {
        "label": "Consumer owner",
        "text": "Runs the component in the real surface and accepts or defers the version."
      },
      {
        "label": "Technical reviewer",
        "text": "Confirms the code, tests, and accessibility evidence without speaking for the consumer."
      },
      {
        "label": "Release owner",
        "text": "Deploys the accepted version and records the rollback path for each consumer."
      }
    ],
    "faqs": [
      {
        "question": "Is a storybook check enough?",
        "answer": "No, each consumer should check the component in the route and context where customers actually see it."
      },
      {
        "question": "Who can approve for a consumer?",
        "answer": "The named consumer owner, not the component author or a general reviewer."
      },
      {
        "question": "What happens after a late change?",
        "answer": "The sign-off is invalid for affected consumers until a new diff, check, and acceptance are recorded."
      }
    ],
    "sources": [
      {
        "name": "WAI WCAG 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Accessibility checks for shared interface components."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Traceable review and release evidence."
      },
      {
        "name": "GitHub pull request reviews",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Review and approval workflow."
      },
      {
        "name": "Google Technical Writing",
        "url": "https://developers.google.com/tech-writing",
        "note": "Clear release notes and reviewer instructions."
      }
    ],
    "heroImage": "/nov16/blog/write-a-shared-component-sign-off-record-for-outsourced-frontend-work.webp"
  }
};
