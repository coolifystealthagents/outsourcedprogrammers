export const november17BlogBatch = [
  {
    "slug": "write-a-privileged-access-session-review-for-offshore-production-support",
    "title": "Write a privileged access session review for offshore production support",
    "excerpt": "A review routine that records who used privileged production access, what the session touched, and how a second person checks the evidence.",
    "minutes": 8,
    "published": "2026-11-17",
    "body": [
      "## Decide which sessions need a recording",
      "A privileged access session review starts with a list of access paths that can change production state. Include database consoles, cloud shells, admin panels, and deployment tools. Do not include read-only dashboards that cannot mutate a system. The list should be short enough to review at a weekly cadence.",
      "Record the reason each path is privileged and the data it can reach. A session that can read customer records is different from one that can restart a queue. Rank the paths by blast radius rather than by tool popularity. The ranking tells the reviewer where to spend attention.",
      "## Capture the session without capturing secrets",
      "Record the account, the start and end time, the command history, and the ticket reference. Mask tokens, passwords, and personal data before the record is stored. Keep a hash or a reference for values that must remain provable. The record should show the action without exposing the secret.",
      "Use the platform's native session recording where it exists, and add a written note where it does not. Do not ask the contractor to record a personal screen video for every task. A manual recording is hard to retain and easy to edit. Prefer a system log that the client controls.",
      "## Pair every session with a ticket",
      "Each session should point to an approved ticket with a stated scope. The ticket names the system, the change, the expected result, and the rollback step. A session without a ticket is a finding, not a routine exception. The reviewer should be able to match the log to the work without asking the engineer.",
      "Record the approval before the session begins, not after it ends. A retroactive approval hides the moment when the risk was accepted. If an emergency forces a retroactive record, mark it clearly and explain why. The review should treat that case separately.",
      "## Review the session against the ticket",
      "Compare the commands and the touched objects with the scope on the ticket. Look for reads of unrelated customer data, permission changes, or changes outside the named system. Note the difference rather than assuming it is harmless. A small unexplained read can matter more than a large planned change.",
      "Ask the engineer to explain any step that the log cannot make clear. Do not rewrite the log to make the story tidy. Attach the explanation to the review record with the date and the reviewer. The explanation is evidence about the process, not a substitute for the log.",
      "## Sample and escalate findings",
      "Review every session on the highest-risk paths and a sample of the rest. Set the sample size before the week starts so the choice is not driven by who is available. Record the sample method and the number reviewed. A sample that always covers the same engineer is not a sample.",
      "Escalate a session that touched data or systems outside the ticket. Separate a misunderstanding from a control failure, and record which one applies. Give the engineer a chance to correct the record before the finding is closed. The outcome should change a permission, a ticket template, or a review step.",
      "## Report the review without exposing the log",
      "Publish a short monthly summary with the number of sessions, the share reviewed, and the number of findings. Describe the findings by category rather than by person. Keep the raw log in the restricted store with its retention rule. The client should see the pattern without seeing customer data.",
      "Close each finding with an owner and a date. Confirm that the permission change or the ticket change is live before the finding is marked done. Recheck one closed finding in the next review to test the follow-through. A review that never confirms its own fixes becomes a ritual."
    ]
  },
  {
    "slug": "set-a-subprocessor-register-update-for-outsourced-delivery",
    "title": "Set a subprocessor register update for outsourced delivery",
    "excerpt": "A register that lists every subprocessor behind an outsourced lane, the data each one receives, and the date the client last confirmed it.",
    "minutes": 8,
    "published": "2026-11-17",
    "body": [
      "## Define what the register covers",
      "A subprocessor register lists every outside company that handles client data on behalf of the delivery team. Include hosting, monitoring, transcription, testing, and support tools. Do not limit the list to companies with a signed contract. The register should reflect what the work actually touches.",
      "Separate a subprocessor from a contractor who only writes code. A contractor with access to a repository may still be a processor, while a tool that stores no client data may not belong. Record the reasoning for each entry. A register without a rule becomes a list of vendors someone remembered.",
      "## Record the data and the purpose",
      "For each entry, record the data category, the purpose, the storage location, and the retention period. Name the client system that sends the data and the person who approved the use. A purpose such as support is too broad to review. Use a concrete description that a client can challenge.",
      "Mark any entry that handles personal data, credentials, or production records. Those entries need a higher review standard than a tool that only sees synthetic test data. Record the classification next to the entry. The reviewer should not have to infer the risk from the vendor name.",
      "## Name the owner and the confirmation date",
      "Give each entry an internal owner who can describe the data flow. Record the date the client last confirmed the entry and the date the vendor last confirmed its own downstream processors. A register without dates is a snapshot of an unknown moment. The reviewer should see how stale each line is.",
      "Require the owner to confirm the entry when the purpose, the data category, or the vendor changes. Store the previous version so a reviewer can see what moved. A silent edit is indistinguishable from an error. Version history is part of the control.",
      "## Review the register before a new tool",
      "Add the tool to the register before the first client record reaches it. A trial with real data is still processing, even if the team calls it a pilot. Record the trial scope and the expiry. A pilot that quietly becomes permanent is a register gap.",
      "Ask whether the client already approved the category of vendor or the specific vendor. A generic approval for cloud hosting may not cover a new analytics tool. Record the approval reference and the person who granted it. The delivery team should not decide the client's risk appetite.",
      "## Remove entries with evidence",
      "Remove an entry only when the data is deleted or the access is closed, and record the evidence. A vendor that is no longer used may still hold exports or backups. Record the deletion confirmation and the date. An entry that disappears without evidence is worse than an entry that stays.",
      "Keep a retired section rather than deleting history. Mark the entry as retired with the reason and the confirming person. The client may need the record for an audit or a customer question. History is cheaper than reconstructing it later.",
      "## Publish a client-facing summary",
      "Publish a short summary that lists the current subprocessors by data category. Remove internal notes, pricing, and personal contact details. Show the last confirmation date for each line. The client should be able to answer a customer question from the summary alone.",
      "Send the summary to the client on a fixed cadence and after any material change. Ask for a written acknowledgement rather than a verbal one. Record the acknowledgement date. A register that the client never sees is an internal wish."
    ]
  },
  {
    "slug": "write-a-loaner-device-handoff-checklist-for-remote-contractors",
    "title": "Write a loaner device handoff checklist for remote contractors",
    "excerpt": "A checklist that ties a loaner laptop to a named person, a clean baseline, a return date, and a wipe record at the end of the loan.",
    "minutes": 8,
    "published": "2026-11-17",
    "body": [
      "## Start with the reason for the loan",
      "A loaner device exists because the contractor's own machine cannot meet the baseline or has failed. Record the reason, the expected loan length, and the access tier the device will carry. A loan without an end date becomes a permanent asset with no owner. The checklist should make the return date visible from day one.",
      "Name the person who approves the loan and the person who prepares the device. Keep the two roles separate where possible. The approver owns the risk, while the preparer owns the configuration. Record both names on the handoff record.",
      "## Prepare a clean baseline",
      "Install the approved operating system image and apply the current patches before the device leaves the store. Enroll the device in the client's identity and device management systems. Confirm disk encryption and screen lock, and store the recovery key in the approved place. A loaner that skips the baseline is a new exception, not a shortcut.",
      "Remove local administrator rights, sample files, and any previous user profile. Check that the browser and the endpoint agent are on supported versions. Record the image name and the date it was built. The next reviewer should be able to reproduce the starting state.",
      "## Tie the device to a named person",
      "Record the serial number, the asset tag, the assigned person, and the date of handoff. Confirm that the login maps to that person and not to a shared account. Note the shipping carrier and the tracking reference where the device is sent. An asset without a person is a device nobody will return.",
      "Give the contractor a short guide for the first login, the support channel, and the return process. Keep the guide to one page with the steps in order. Ask the contractor to confirm receipt and the first successful login. The confirmation is the start of the loan record.",
      "## Set the return conditions",
      "State the return date, the condition expected, and the accessories included. Record the charger, the dock, the case, and any security key that travels with the device. A return that is missing an accessory creates a new ticket and a delay. List the items at handoff and check them at return.",
      "Explain what happens if the device is lost or stolen. Name the person to contact, the window for reporting, and the remote wipe step. Do not wait for the return date to discuss loss. The contractor should know the process before the risk occurs.",
      "## Wipe and verify at return",
      "On return, confirm the device is enrolled, then remove the contractor's account and revoke the sessions. Run the approved wipe and confirm the result from the management console. Record the wipe date, the operator, and the evidence reference. A returned device that was not wiped is still a data risk.",
      "Check the device for physical damage and missing accessories before it returns to the pool. Record the condition and any repair ticket. If the device will be reused, reapply the baseline and record the new image date. A device that sits in a drawer without a status is invisible inventory.",
      "## Reconcile the loan record monthly",
      "Compare the open loans with the asset list and the shipping records. Look for devices that are past due, unassigned, or missing a wipe record. Contact the owner before the device becomes a collection problem. The monthly check is cheaper than a quarterly audit.",
      "Close the loan only when the device is wiped, the accessories are accounted for, and the record shows the return date. Link the close to the ticket that started the loan. Review one closed loan each month to test the record. A closed loan that cannot be reconstructed is not closed."
    ]
  },
  {
    "slug": "plan-a-customer-demo-environment-reset-for-an-offshore-team",
    "title": "Plan a customer demo environment reset for an offshore team",
    "excerpt": "A reset plan that keeps a demo environment free of live customer data, reproducible before each session, and owned by a named person.",
    "minutes": 8,
    "published": "2026-11-17",
    "body": [
      "## Define what the demo must prove",
      "A demo environment exists to show a specific product behavior to a specific audience. Write the story, the screens, and the data the story needs. Do not copy the production dataset because it is convenient. The reset plan should start from the story, not from the database.",
      "Separate a sales demo from a technical proof. A sales demo needs a stable narrative, while a technical proof may need realistic edge cases. Record which one the environment serves. A single environment that tries to serve both becomes unstable for each.",
      "## Build the data from a safe source",
      "Generate or mask the records used in the demo, and keep the generation script under version control. Use names and values that cannot be mistaken for real customers. Record the seed and the date the data was created. A demo that needs a live export is a data leak waiting for a schedule.",
      "Check the data for personal information, real account numbers, and internal hostnames before each session. Search for known patterns rather than relying on a visual check. Record the check and the person who ran it. A clean rebuild is stronger evidence than a promise.",
      "## Make the reset reproducible",
      "Write the reset as a script that drops the demo schema and rebuilds it from the seed. Run the script in a test pass before the demo day. Record the run time and any manual steps. A reset that depends on one person's memory will fail at the worst moment.",
      "Keep the environment isolated from production networks, credentials, and queues. Confirm that the demo cannot send real email or charge a real card. Record the isolation check in the runbook. The demo should fail safely if someone clicks the wrong button.",
      "## Assign an owner and a window",
      "Name one owner for the environment and one backup who can run the reset. Publish the reset window and the freeze around a customer session. Do not let a routine deployment land an hour before the demo. The owner should be able to say who changed what.",
      "Record the version of the product that the demo runs and the date it was deployed. Freeze that version for the session and note the next allowed change. A demo that tracks the main branch is a test of luck. The audience should see the behavior that was approved.",
      "## Rehearse the session",
      "Walk through the demo end to end on the reset environment before the customer sees it. Time the steps and note every place the story depends on a manual action. Fix the environment or the script, not the story, when something breaks. A rehearsal that reveals a data problem is a success.",
      "Prepare a fallback for the most likely failure, such as a saved recording or a second environment. Name the person who decides to switch. A fallback that nobody is allowed to trigger is not a fallback. Record the decision in the session notes.",
      "## Retire the data after the demo",
      "Delete the demo records or reset the environment after the session ends. Record the deletion time and the person who confirmed it. Do not leave customer-like data in place for the next demo. A permanent demo dataset becomes an unowned copy of personal data.",
      "Review the environment quarterly against the current product and the current data rules. Remove screens and records that are no longer needed. Record the review date and the owner. A demo environment that nobody reviews drifts into a shadow system."
    ]
  },
  {
    "slug": "set-a-screen-share-redaction-rule-for-offshore-support-calls",
    "title": "Set a screen-share redaction rule for offshore support calls",
    "excerpt": "A rule that keeps customer data, credentials, and internal hostnames out of support screen shares without slowing the call to a stop.",
    "minutes": 8,
    "published": "2026-11-17",
    "body": [
      "## Name what must never appear",
      "A redaction rule starts with a short list of values that must never appear on a shared screen. Include passwords, tokens, full card numbers, government identifiers, and customer records outside the ticket. Add internal hostnames and cloud account identifiers where the client requires it. The list should fit on one card beside the agent.",
      "Separate a value that must be hidden from a value that only needs to be shortened. A ticket number may be safe to show, while the customer name beside it may not. Record the distinction in the rule. The agent should not have to guess under pressure.",
      "## Prepare the screen before the call",
      "Close unrelated tabs, chat windows, and notification pop-ups before sharing. Use a dedicated browser profile for support work so personal accounts do not appear. Set the notification mode to do not disturb for the session. A prepared screen is faster than a scramble after the share starts.",
      "Open the ticket, the approved record, and the tool you need in the order you will use them. Keep the customer record in a window that can be hidden in one click. Practice the hide action once before the customer joins. The rule should be a habit, not a recovery.",
      "## Share a window, not the whole desktop",
      "Share the specific application window rather than the desktop whenever the tool allows it. Confirm what the customer sees before you narrate the first step. Ask the customer to confirm the shared view when the call starts. A window share limits the damage of an accidental click.",
      "Use the platform's pause or blur feature for a short redaction instead of ending the call. If the feature is missing, prepare a static screenshot with the sensitive area removed. Record the fallback in the runbook. The agent should know the option before the call begins.",
      "## Mask the record, not the conversation",
      "Replace the customer name, account number, and address with a reference when the ticket allows it. Keep the real value in the restricted system and use the last four characters only where the customer needs to confirm. Do not read a full identifier aloud to compensate for a hidden field. The customer does not need the value repeated.",
      "Explain briefly why a field is hidden when the customer asks. A short statement such as this field is masked in shared screens keeps the call calm. Do not blame the tool or the client. The rule should sound like normal practice.",
      "## Handle a mistake without hiding it",
      "If a sensitive value appears, stop the share, note the time, and tell the call owner. Record what was exposed and who saw it. Do not delete the recording or the chat to make the record look clean. The response should follow the client's incident process.",
      "Rotate a credential that appeared on screen and confirm the rotation. Notify the client contact named in the rule. Record the notification and the closure. A quick, honest report is better than a silent cleanup.",
      "## Review the rule after real calls",
      "Sample a few recorded calls or session notes each month and check the redaction practice. Record the sample size, the findings, and the fix. A rule that is never observed is only a preference. The review should change one habit or one tool setting.",
      "Update the rule when a new tool, a new data category, or a new customer segment arrives. Remove steps that no longer match the platform. Record the change and the date. The agent should be able to learn the current rule in one sitting."
    ]
  }
];

export const november17BlogDetails = {
  "write-a-privileged-access-session-review-for-offshore-production-support": {
    "takeaways": [
      "Name the privileged paths before reviewing any session.",
      "Record the action, mask the secret, and keep the log client-controlled.",
      "Match every session to a pre-approved ticket and scope.",
      "Review all high-risk sessions and a declared sample of the rest.",
      "Close findings by changing a permission, a template, or a review step."
    ],
    "readinessRows": [
      {
        "area": "Scope",
        "ready": "The privileged paths and their blast radius are listed.",
        "notReady": "Every admin tool is treated the same."
      },
      {
        "area": "Evidence",
        "ready": "Each session has a time, an account, commands, and a ticket.",
        "notReady": "A verbal note that the work was approved."
      },
      {
        "area": "Masking",
        "ready": "Secrets and personal data are masked before storage.",
        "notReady": "Raw tokens sit in a shared transcript."
      },
      {
        "area": "Review",
        "ready": "A named reviewer samples sessions on a published schedule.",
        "notReady": "Sessions are opened only after an incident."
      }
    ],
    "sections": [
      {
        "id": "decide-which-sessions-need-a-recording",
        "title": "Decide which sessions need a recording",
        "paragraphs": [
          "A privileged access session review starts with a list of access paths that can change production state. Include database consoles, cloud shells, admin panels, and deployment tools. Do not include read-only dashboards that cannot mutate a system. The list should be short enough to review at a weekly cadence.",
          "Record the reason each path is privileged and the data it can reach. A session that can read customer records is different from one that can restart a queue. Rank the paths by blast radius rather than by tool popularity. The ranking tells the reviewer where to spend attention."
        ]
      },
      {
        "id": "capture-the-session-without-capturing-secrets",
        "title": "Capture the session without capturing secrets",
        "paragraphs": [
          "Record the account, the start and end time, the command history, and the ticket reference. Mask tokens, passwords, and personal data before the record is stored. Keep a hash or a reference for values that must remain provable. The record should show the action without exposing the secret.",
          "Use the platform's native session recording where it exists, and add a written note where it does not. Do not ask the contractor to record a personal screen video for every task. A manual recording is hard to retain and easy to edit. Prefer a system log that the client controls."
        ]
      },
      {
        "id": "pair-every-session-with-a-ticket",
        "title": "Pair every session with a ticket",
        "paragraphs": [
          "Each session should point to an approved ticket with a stated scope. The ticket names the system, the change, the expected result, and the rollback step. A session without a ticket is a finding, not a routine exception. The reviewer should be able to match the log to the work without asking the engineer.",
          "Record the approval before the session begins, not after it ends. A retroactive approval hides the moment when the risk was accepted. If an emergency forces a retroactive record, mark it clearly and explain why. The review should treat that case separately."
        ]
      },
      {
        "id": "review-the-session-against-the-ticket",
        "title": "Review the session against the ticket",
        "paragraphs": [
          "Compare the commands and the touched objects with the scope on the ticket. Look for reads of unrelated customer data, permission changes, or changes outside the named system. Note the difference rather than assuming it is harmless. A small unexplained read can matter more than a large planned change.",
          "Ask the engineer to explain any step that the log cannot make clear. Do not rewrite the log to make the story tidy. Attach the explanation to the review record with the date and the reviewer. The explanation is evidence about the process, not a substitute for the log."
        ]
      },
      {
        "id": "sample-and-escalate-findings",
        "title": "Sample and escalate findings",
        "paragraphs": [
          "Review every session on the highest-risk paths and a sample of the rest. Set the sample size before the week starts so the choice is not driven by who is available. Record the sample method and the number reviewed. A sample that always covers the same engineer is not a sample.",
          "Escalate a session that touched data or systems outside the ticket. Separate a misunderstanding from a control failure, and record which one applies. Give the engineer a chance to correct the record before the finding is closed. The outcome should change a permission, a ticket template, or a review step."
        ]
      },
      {
        "id": "report-the-review-without-exposing-the-log",
        "title": "Report the review without exposing the log",
        "paragraphs": [
          "Publish a short monthly summary with the number of sessions, the share reviewed, and the number of findings. Describe the findings by category rather than by person. Keep the raw log in the restricted store with its retention rule. The client should see the pattern without seeing customer data.",
          "Close each finding with an owner and a date. Confirm that the permission change or the ticket change is live before the finding is marked done. Recheck one closed finding in the next review to test the follow-through. A review that never confirms its own fixes becomes a ritual."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Session record",
        "text": "Capture the account, the ticket, the start and end time, the commands, and the objects touched."
      },
      {
        "label": "Masking rule",
        "text": "Replace tokens, passwords, and customer values with references before the record leaves the controlled store."
      },
      {
        "label": "Review sample",
        "text": "Review every session on a top-risk path and a declared sample of the remaining paths."
      },
      {
        "label": "Finding close",
        "text": "Close a finding only after the permission, ticket, or review change is live and confirmed."
      }
    ],
    "faqs": [
      {
        "question": "Which sessions should be recorded?",
        "answer": "Every path that can change production state or read customer records, ranked by blast radius."
      },
      {
        "question": "Should the contractor record a personal screen video?",
        "answer": "No, prefer a client-controlled system log that is hard to edit and follows a retention rule."
      },
      {
        "question": "What counts as a closed finding?",
        "answer": "A live change to a permission, a ticket template, or a review step, confirmed by a second person."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Access control and audit expectations."
      },
      {
        "name": "NIST SP 800-92 log management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final",
        "note": "Log retention and review practice."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Accountability and least privilege."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Review and operational evidence."
      }
    ],
    "heroImage": "/nov17/blog/write-a-privileged-access-session-review-for-offshore-production-support.webp"
  },
  "set-a-subprocessor-register-update-for-outsourced-delivery": {
    "takeaways": [
      "List every outside company that touches client data, not just signed vendors.",
      "Record the data category, purpose, location, and retention for each entry.",
      "Put an owner and a confirmation date on every line.",
      "Add a tool before the first client record reaches it, including trials.",
      "Retire an entry only with deletion or access-closure evidence."
    ],
    "readinessRows": [
      {
        "area": "Coverage",
        "ready": "Every tool and vendor that touches client data is listed.",
        "notReady": "Only the vendors with a contract are listed."
      },
      {
        "area": "Data map",
        "ready": "Category, purpose, location, and retention are explicit.",
        "notReady": "The purpose says support and nothing more."
      },
      {
        "area": "Dates",
        "ready": "Each entry shows the client and vendor confirmation dates.",
        "notReady": "Nobody knows when the list was last checked."
      },
      {
        "area": "Retirement",
        "ready": "Removal requires deletion or access-closure evidence.",
        "notReady": "Entries vanish when the invoice stops."
      }
    ],
    "sections": [
      {
        "id": "define-what-the-register-covers",
        "title": "Define what the register covers",
        "paragraphs": [
          "A subprocessor register lists every outside company that handles client data on behalf of the delivery team. Include hosting, monitoring, transcription, testing, and support tools. Do not limit the list to companies with a signed contract. The register should reflect what the work actually touches.",
          "Separate a subprocessor from a contractor who only writes code. A contractor with access to a repository may still be a processor, while a tool that stores no client data may not belong. Record the reasoning for each entry. A register without a rule becomes a list of vendors someone remembered."
        ]
      },
      {
        "id": "record-the-data-and-the-purpose",
        "title": "Record the data and the purpose",
        "paragraphs": [
          "For each entry, record the data category, the purpose, the storage location, and the retention period. Name the client system that sends the data and the person who approved the use. A purpose such as support is too broad to review. Use a concrete description that a client can challenge.",
          "Mark any entry that handles personal data, credentials, or production records. Those entries need a higher review standard than a tool that only sees synthetic test data. Record the classification next to the entry. The reviewer should not have to infer the risk from the vendor name."
        ]
      },
      {
        "id": "name-the-owner-and-the-confirmation-date",
        "title": "Name the owner and the confirmation date",
        "paragraphs": [
          "Give each entry an internal owner who can describe the data flow. Record the date the client last confirmed the entry and the date the vendor last confirmed its own downstream processors. A register without dates is a snapshot of an unknown moment. The reviewer should see how stale each line is.",
          "Require the owner to confirm the entry when the purpose, the data category, or the vendor changes. Store the previous version so a reviewer can see what moved. A silent edit is indistinguishable from an error. Version history is part of the control."
        ]
      },
      {
        "id": "review-the-register-before-a-new-tool",
        "title": "Review the register before a new tool",
        "paragraphs": [
          "Add the tool to the register before the first client record reaches it. A trial with real data is still processing, even if the team calls it a pilot. Record the trial scope and the expiry. A pilot that quietly becomes permanent is a register gap.",
          "Ask whether the client already approved the category of vendor or the specific vendor. A generic approval for cloud hosting may not cover a new analytics tool. Record the approval reference and the person who granted it. The delivery team should not decide the client's risk appetite."
        ]
      },
      {
        "id": "remove-entries-with-evidence",
        "title": "Remove entries with evidence",
        "paragraphs": [
          "Remove an entry only when the data is deleted or the access is closed, and record the evidence. A vendor that is no longer used may still hold exports or backups. Record the deletion confirmation and the date. An entry that disappears without evidence is worse than an entry that stays.",
          "Keep a retired section rather than deleting history. Mark the entry as retired with the reason and the confirming person. The client may need the record for an audit or a customer question. History is cheaper than reconstructing it later."
        ]
      },
      {
        "id": "publish-a-client-facing-summary",
        "title": "Publish a client-facing summary",
        "paragraphs": [
          "Publish a short summary that lists the current subprocessors by data category. Remove internal notes, pricing, and personal contact details. Show the last confirmation date for each line. The client should be able to answer a customer question from the summary alone.",
          "Send the summary to the client on a fixed cadence and after any material change. Ask for a written acknowledgement rather than a verbal one. Record the acknowledgement date. A register that the client never sees is an internal wish."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Entry",
        "text": "Record the vendor, the service, the data category, the purpose, the location, and the retention."
      },
      {
        "label": "Owner",
        "text": "Name the internal owner who can describe the data flow and confirm the entry."
      },
      {
        "label": "Change rule",
        "text": "Update the register before a new tool receives its first client record."
      },
      {
        "label": "Retirement",
        "text": "Retire an entry only with deletion or access-closure evidence and a confirming person."
      }
    ],
    "faqs": [
      {
        "question": "Does a free trial belong in the register?",
        "answer": "Yes, if any client record reaches the tool during the trial."
      },
      {
        "question": "How often should the client confirm it?",
        "answer": "At least quarterly and after any material change to a vendor or a data flow."
      },
      {
        "question": "Can an entry be deleted?",
        "answer": "No, move it to a retired section with the reason and evidence instead of erasing history."
      }
    ],
    "sources": [
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Data inventory and processing purpose."
      },
      {
        "name": "NIST SP 800-161r1 supply chain risk",
        "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final",
        "note": "Third-party and supplier risk practice."
      },
      {
        "name": "CISA ICT supply chain",
        "url": "https://www.cisa.gov/topics/cyber-threats-and-advisories/advanced-persistent-threats/ict-supply-chain",
        "note": "Supplier visibility expectations."
      },
      {
        "name": "ISO/IEC 27001",
        "url": "https://www.iso.org/standard/27001",
        "note": "Supplier relationship controls."
      }
    ],
    "heroImage": "/nov17/blog/set-a-subprocessor-register-update-for-outsourced-delivery.webp"
  },
  "write-a-loaner-device-handoff-checklist-for-remote-contractors": {
    "takeaways": [
      "Record the reason, the approver, and the return date before shipping.",
      "Prepare and record a clean baseline for every loaner.",
      "Tie the serial number to one named person and one login.",
      "List the accessories and the loss process at handoff.",
      "Close the loan only after a verified wipe and accessory check."
    ],
    "readinessRows": [
      {
        "area": "Reason",
        "ready": "The loan has a reason, an access tier, and an end date.",
        "notReady": "A spare laptop goes out because someone asked."
      },
      {
        "area": "Baseline",
        "ready": "Image, patches, encryption, and enrollment are recorded.",
        "notReady": "The previous profile is still on the disk."
      },
      {
        "area": "Identity",
        "ready": "Serial, asset tag, and named login match one person.",
        "notReady": "A shared local account opens the machine."
      },
      {
        "area": "Return",
        "ready": "Wipe and accessory checks are recorded before close.",
        "notReady": "The device returns to the drawer unverified."
      }
    ],
    "sections": [
      {
        "id": "start-with-the-reason-for-the-loan",
        "title": "Start with the reason for the loan",
        "paragraphs": [
          "A loaner device exists because the contractor's own machine cannot meet the baseline or has failed. Record the reason, the expected loan length, and the access tier the device will carry. A loan without an end date becomes a permanent asset with no owner. The checklist should make the return date visible from day one.",
          "Name the person who approves the loan and the person who prepares the device. Keep the two roles separate where possible. The approver owns the risk, while the preparer owns the configuration. Record both names on the handoff record."
        ]
      },
      {
        "id": "prepare-a-clean-baseline",
        "title": "Prepare a clean baseline",
        "paragraphs": [
          "Install the approved operating system image and apply the current patches before the device leaves the store. Enroll the device in the client's identity and device management systems. Confirm disk encryption and screen lock, and store the recovery key in the approved place. A loaner that skips the baseline is a new exception, not a shortcut.",
          "Remove local administrator rights, sample files, and any previous user profile. Check that the browser and the endpoint agent are on supported versions. Record the image name and the date it was built. The next reviewer should be able to reproduce the starting state."
        ]
      },
      {
        "id": "tie-the-device-to-a-named-person",
        "title": "Tie the device to a named person",
        "paragraphs": [
          "Record the serial number, the asset tag, the assigned person, and the date of handoff. Confirm that the login maps to that person and not to a shared account. Note the shipping carrier and the tracking reference where the device is sent. An asset without a person is a device nobody will return.",
          "Give the contractor a short guide for the first login, the support channel, and the return process. Keep the guide to one page with the steps in order. Ask the contractor to confirm receipt and the first successful login. The confirmation is the start of the loan record."
        ]
      },
      {
        "id": "set-the-return-conditions",
        "title": "Set the return conditions",
        "paragraphs": [
          "State the return date, the condition expected, and the accessories included. Record the charger, the dock, the case, and any security key that travels with the device. A return that is missing an accessory creates a new ticket and a delay. List the items at handoff and check them at return.",
          "Explain what happens if the device is lost or stolen. Name the person to contact, the window for reporting, and the remote wipe step. Do not wait for the return date to discuss loss. The contractor should know the process before the risk occurs."
        ]
      },
      {
        "id": "wipe-and-verify-at-return",
        "title": "Wipe and verify at return",
        "paragraphs": [
          "On return, confirm the device is enrolled, then remove the contractor's account and revoke the sessions. Run the approved wipe and confirm the result from the management console. Record the wipe date, the operator, and the evidence reference. A returned device that was not wiped is still a data risk.",
          "Check the device for physical damage and missing accessories before it returns to the pool. Record the condition and any repair ticket. If the device will be reused, reapply the baseline and record the new image date. A device that sits in a drawer without a status is invisible inventory."
        ]
      },
      {
        "id": "reconcile-the-loan-record-monthly",
        "title": "Reconcile the loan record monthly",
        "paragraphs": [
          "Compare the open loans with the asset list and the shipping records. Look for devices that are past due, unassigned, or missing a wipe record. Contact the owner before the device becomes a collection problem. The monthly check is cheaper than a quarterly audit.",
          "Close the loan only when the device is wiped, the accessories are accounted for, and the record shows the return date. Link the close to the ticket that started the loan. Review one closed loan each month to test the record. A closed loan that cannot be reconstructed is not closed."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Handoff record",
        "text": "Serial, asset tag, assigned person, access tier, ship date, and return date."
      },
      {
        "label": "Baseline",
        "text": "Image name, patch date, encryption state, enrollment, and recovery key location."
      },
      {
        "label": "Accessories",
        "text": "Charger, dock, case, and security key listed at handoff and checked at return."
      },
      {
        "label": "Close rule",
        "text": "Close only after a verified wipe, an accessory check, and a linked ticket."
      }
    ],
    "faqs": [
      {
        "question": "Can a contractor use a personal machine instead?",
        "answer": "Only with an approved exception that meets the same baseline and expiry rules."
      },
      {
        "question": "Who owns the recovery key?",
        "answer": "The client's approved escrow location, never the contractor and never the device."
      },
      {
        "question": "What if the device is lost?",
        "answer": "Report through the named channel, then revoke sessions and run the remote wipe."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Asset and access control expectations."
      },
      {
        "name": "NIST SP 800-124r1 mobile device security",
        "url": "https://csrc.nist.gov/pubs/sp/800/124/r1/final",
        "note": "Device baseline and management practice."
      },
      {
        "name": "CIS Controls",
        "url": "https://www.cisecurity.org/controls",
        "note": "Asset inventory and data protection."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Accountability for managed devices."
      }
    ],
    "heroImage": "/nov17/blog/write-a-loaner-device-handoff-checklist-for-remote-contractors.webp"
  },
  "plan-a-customer-demo-environment-reset-for-an-offshore-team": {
    "takeaways": [
      "Start the reset from the demo story, not from a production copy.",
      "Generate or mask data and keep the seed under version control.",
      "Script the reset and rehearse it before the customer session.",
      "Isolate the environment from production email, payments, and networks.",
      "Delete or reset the data after the session and record the evidence."
    ],
    "readinessRows": [
      {
        "area": "Story",
        "ready": "The demo screens and the data they need are written down.",
        "notReady": "The environment is whatever was left from the last call."
      },
      {
        "area": "Data",
        "ready": "Records are generated or masked, with a seed and a check.",
        "notReady": "A production export was imported for convenience."
      },
      {
        "area": "Reset",
        "ready": "A scripted reset runs in a rehearsal before the session.",
        "notReady": "One person remembers the manual steps."
      },
      {
        "area": "Isolation",
        "ready": "Production email, payments, and networks are blocked.",
        "notReady": "A demo click can send a real message."
      }
    ],
    "sections": [
      {
        "id": "define-what-the-demo-must-prove",
        "title": "Define what the demo must prove",
        "paragraphs": [
          "A demo environment exists to show a specific product behavior to a specific audience. Write the story, the screens, and the data the story needs. Do not copy the production dataset because it is convenient. The reset plan should start from the story, not from the database.",
          "Separate a sales demo from a technical proof. A sales demo needs a stable narrative, while a technical proof may need realistic edge cases. Record which one the environment serves. A single environment that tries to serve both becomes unstable for each."
        ]
      },
      {
        "id": "build-the-data-from-a-safe-source",
        "title": "Build the data from a safe source",
        "paragraphs": [
          "Generate or mask the records used in the demo, and keep the generation script under version control. Use names and values that cannot be mistaken for real customers. Record the seed and the date the data was created. A demo that needs a live export is a data leak waiting for a schedule.",
          "Check the data for personal information, real account numbers, and internal hostnames before each session. Search for known patterns rather than relying on a visual check. Record the check and the person who ran it. A clean rebuild is stronger evidence than a promise."
        ]
      },
      {
        "id": "make-the-reset-reproducible",
        "title": "Make the reset reproducible",
        "paragraphs": [
          "Write the reset as a script that drops the demo schema and rebuilds it from the seed. Run the script in a test pass before the demo day. Record the run time and any manual steps. A reset that depends on one person's memory will fail at the worst moment.",
          "Keep the environment isolated from production networks, credentials, and queues. Confirm that the demo cannot send real email or charge a real card. Record the isolation check in the runbook. The demo should fail safely if someone clicks the wrong button."
        ]
      },
      {
        "id": "assign-an-owner-and-a-window",
        "title": "Assign an owner and a window",
        "paragraphs": [
          "Name one owner for the environment and one backup who can run the reset. Publish the reset window and the freeze around a customer session. Do not let a routine deployment land an hour before the demo. The owner should be able to say who changed what.",
          "Record the version of the product that the demo runs and the date it was deployed. Freeze that version for the session and note the next allowed change. A demo that tracks the main branch is a test of luck. The audience should see the behavior that was approved."
        ]
      },
      {
        "id": "rehearse-the-session",
        "title": "Rehearse the session",
        "paragraphs": [
          "Walk through the demo end to end on the reset environment before the customer sees it. Time the steps and note every place the story depends on a manual action. Fix the environment or the script, not the story, when something breaks. A rehearsal that reveals a data problem is a success.",
          "Prepare a fallback for the most likely failure, such as a saved recording or a second environment. Name the person who decides to switch. A fallback that nobody is allowed to trigger is not a fallback. Record the decision in the session notes."
        ]
      },
      {
        "id": "retire-the-data-after-the-demo",
        "title": "Retire the data after the demo",
        "paragraphs": [
          "Delete the demo records or reset the environment after the session ends. Record the deletion time and the person who confirmed it. Do not leave customer-like data in place for the next demo. A permanent demo dataset becomes an unowned copy of personal data.",
          "Review the environment quarterly against the current product and the current data rules. Remove screens and records that are no longer needed. Record the review date and the owner. A demo environment that nobody reviews drifts into a shadow system."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Environment owner",
        "text": "One owner and one backup can run the reset and explain the last change."
      },
      {
        "label": "Data rule",
        "text": "Use generated or masked records, keep the seed, and check for personal data."
      },
      {
        "label": "Reset evidence",
        "text": "Record the run time, the manual steps, and the rehearsal result."
      },
      {
        "label": "Retirement",
        "text": "Delete or reset the demo data after the session and record the confirmation."
      }
    ],
    "faqs": [
      {
        "question": "Can we copy production data for realism?",
        "answer": "No, use generated or masked records so the demo never becomes a second copy of customer data."
      },
      {
        "question": "Who can change the demo version?",
        "answer": "The named owner, inside a published freeze around the session."
      },
      {
        "question": "What happens after the demo?",
        "answer": "Delete or reset the records and record the time and the confirming person."
      }
    ],
    "sources": [
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Data minimization and purpose limitation."
      },
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "System and data separation controls."
      },
      {
        "name": "OWASP ASVS",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Environment and data handling checks."
      },
      {
        "name": "ISO/IEC 27701",
        "url": "https://www.iso.org/standard/71670.html",
        "note": "Privacy information management practice."
      }
    ],
    "heroImage": "/nov17/blog/plan-a-customer-demo-environment-reset-for-an-offshore-team.webp"
  },
  "set-a-screen-share-redaction-rule-for-offshore-support-calls": {
    "takeaways": [
      "Write a short never-show list and keep it beside the agent.",
      "Prepare the screen and share one window, not the desktop.",
      "Mask identifiers in the record and keep the real value restricted.",
      "Report an exposure, rotate the credential, and notify the client.",
      "Sample real calls and update the rule when tools change."
    ],
    "readinessRows": [
      {
        "area": "List",
        "ready": "The never-show values fit on one card beside the agent.",
        "notReady": "The rule is a long policy nobody reads on a call."
      },
      {
        "area": "Setup",
        "ready": "A dedicated profile and do-not-disturb mode are standard.",
        "notReady": "Personal tabs and notifications appear on the share."
      },
      {
        "area": "Share",
        "ready": "Agents share one window and confirm the view.",
        "notReady": "The whole desktop goes live by default."
      },
      {
        "area": "Response",
        "ready": "Exposure is reported, rotated, and recorded.",
        "notReady": "The recording is deleted to hide the mistake."
      }
    ],
    "sections": [
      {
        "id": "name-what-must-never-appear",
        "title": "Name what must never appear",
        "paragraphs": [
          "A redaction rule starts with a short list of values that must never appear on a shared screen. Include passwords, tokens, full card numbers, government identifiers, and customer records outside the ticket. Add internal hostnames and cloud account identifiers where the client requires it. The list should fit on one card beside the agent.",
          "Separate a value that must be hidden from a value that only needs to be shortened. A ticket number may be safe to show, while the customer name beside it may not. Record the distinction in the rule. The agent should not have to guess under pressure."
        ]
      },
      {
        "id": "prepare-the-screen-before-the-call",
        "title": "Prepare the screen before the call",
        "paragraphs": [
          "Close unrelated tabs, chat windows, and notification pop-ups before sharing. Use a dedicated browser profile for support work so personal accounts do not appear. Set the notification mode to do not disturb for the session. A prepared screen is faster than a scramble after the share starts.",
          "Open the ticket, the approved record, and the tool you need in the order you will use them. Keep the customer record in a window that can be hidden in one click. Practice the hide action once before the customer joins. The rule should be a habit, not a recovery."
        ]
      },
      {
        "id": "share-a-window-not-the-whole-desktop",
        "title": "Share a window, not the whole desktop",
        "paragraphs": [
          "Share the specific application window rather than the desktop whenever the tool allows it. Confirm what the customer sees before you narrate the first step. Ask the customer to confirm the shared view when the call starts. A window share limits the damage of an accidental click.",
          "Use the platform's pause or blur feature for a short redaction instead of ending the call. If the feature is missing, prepare a static screenshot with the sensitive area removed. Record the fallback in the runbook. The agent should know the option before the call begins."
        ]
      },
      {
        "id": "mask-the-record-not-the-conversation",
        "title": "Mask the record, not the conversation",
        "paragraphs": [
          "Replace the customer name, account number, and address with a reference when the ticket allows it. Keep the real value in the restricted system and use the last four characters only where the customer needs to confirm. Do not read a full identifier aloud to compensate for a hidden field. The customer does not need the value repeated.",
          "Explain briefly why a field is hidden when the customer asks. A short statement such as this field is masked in shared screens keeps the call calm. Do not blame the tool or the client. The rule should sound like normal practice."
        ]
      },
      {
        "id": "handle-a-mistake-without-hiding-it",
        "title": "Handle a mistake without hiding it",
        "paragraphs": [
          "If a sensitive value appears, stop the share, note the time, and tell the call owner. Record what was exposed and who saw it. Do not delete the recording or the chat to make the record look clean. The response should follow the client's incident process.",
          "Rotate a credential that appeared on screen and confirm the rotation. Notify the client contact named in the rule. Record the notification and the closure. A quick, honest report is better than a silent cleanup."
        ]
      },
      {
        "id": "review-the-rule-after-real-calls",
        "title": "Review the rule after real calls",
        "paragraphs": [
          "Sample a few recorded calls or session notes each month and check the redaction practice. Record the sample size, the findings, and the fix. A rule that is never observed is only a preference. The review should change one habit or one tool setting.",
          "Update the rule when a new tool, a new data category, or a new customer segment arrives. Remove steps that no longer match the platform. Record the change and the date. The agent should be able to learn the current rule in one sitting."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Never-show list",
        "text": "Passwords, tokens, full card numbers, government identifiers, and unapproved customer records."
      },
      {
        "label": "Share rule",
        "text": "Share one application window, confirm the view, and keep a redacted screenshot ready."
      },
      {
        "label": "Masking rule",
        "text": "Use a reference or the last four characters and never read the full value aloud."
      },
      {
        "label": "Exposure rule",
        "text": "Stop the share, record the time, rotate the credential, and notify the client contact."
      }
    ],
    "faqs": [
      {
        "question": "Is a window share enough?",
        "answer": "No, it limits exposure but does not replace a prepared screen and a never-show list."
      },
      {
        "question": "Should the agent read a masked value aloud?",
        "answer": "No, use a reference or the last four characters the customer can confirm."
      },
      {
        "question": "What if a credential appears?",
        "answer": "Stop the share, record it, rotate the credential, and notify the client contact."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/final",
        "note": "Access and incident response expectations."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Accountability and secure support practice."
      },
      {
        "name": "OWASP ASVS",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Sensitive data handling checks."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Incident communication and learning."
      }
    ],
    "heroImage": "/nov17/blog/set-a-screen-share-redaction-rule-for-offshore-support-calls.webp"
  }
};
