import type { ResearchPost } from './fleet-content';

export const november17ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "what-share-of-offshore-production-sessions-receive-a-recorded-review",
    "title": "What share of offshore production sessions receive a recorded review?",
    "excerpt": "A protocol for counting privileged production sessions, classifying the ones with a recorded review, and separating a missing log from a missing reviewer.",
    "topic": "Privileged session review",
    "published": "2026-11-17",
    "hero": "/nov17/research/what-share-of-offshore-production-sessions-receive-a-recorded-review.webp",
    "body": [
      "This protocol measures the share of privileged production sessions that receive a recorded review. The unit is one session on a named privileged path, identified by the account, the start time, and the ticket. A recorded review means a second person inspected the session evidence and left a dated note. The study describes review coverage, not the quality of the work in the session.",
      "Define the privileged paths before collection. Include database consoles, cloud shells, admin panels, and deployment tools that can change production state. Exclude read-only dashboards that cannot mutate a record. Publish the path list with the version and the date so a later reviewer can reproduce the scope.",
      "Define a session from the platform log. Use the login time, the logout time, and the account, and split a long session when the ticket changes. A session that spans two tickets should be counted twice with the matching portion of the log. Test the split rule on one long session before the full sample.",
      "Define a recorded review as a dated note by a person other than the session user. The note should name the ticket, the reviewed window, the findings, and the reviewer. A comment that says looks fine without a window is not a review for this measure. Test the definition on three historical sessions.",
      "Set the population as every privileged session in the window, including sessions with no ticket and sessions that changed nothing. A session that only read data still belongs if the path can read customer records. Record the path, the account, the ticket, the duration, and the review status. Show the sessions that could not be matched to a ticket.",
      "Record the evidence source for each session. A platform recording, a command log, and a ticket note are different levels of evidence. Classify the session by the strongest source available and note the missing sources. The study should report how many sessions had no usable log.",
      "Report the number of sessions, the number reviewed, and the share reviewed by path. Show the counts by account and by week. Present the sessions with no ticket separately from the sessions with a ticket and no review. Use the same denominator for every rate.",
      "Separate a missing reviewer from a missing log. A session with a clear log but no review is a process gap, while a session with no log is an observability gap. Report the two categories separately so the client can choose the right fix. Record the reason code beside each unreviewed session.",
      "Inspect the unreviewed sessions around weekends and holidays. A cluster may mean the reviewer rota has a gap or the review step depends on one person. Compare the pattern with the session volume. A coverage number that hides a weekly hole is not useful.",
      "Do not treat a high review share as proof that the sessions were safe. A reviewer may approve every session without checking the window. Sample a few reviewed sessions and compare the note with the log. Report the share of reviews that name a specific finding or a specific check.",
      "The record cannot show whether the reviewer understood the system or whether the session caused harm. It can show only whether a second person left a dated note for a defined window. A missing review is not proof of misuse, and a present review is not proof of control. The protocol also cannot capture a session on a path that exports no log.",
      "A useful additional view is the median time between the session and the review. A review that happens a month later is weaker evidence than one that happens the next day. Record the session end time and the review time. That field turns a coverage count into a review of timeliness.",
      "Give the result to the client security owner and the offshore delivery lead with one observable change. The change might be a reviewer rota, a session-to-ticket link, a shorter review window, or a log export from a missing path. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest unreviewed category, not the easiest one to report. Record the expected effect and the evidence that will prove it. A review share that is never re-measured is a one-time snapshot."
    ],
    "takeaways": [
      "Count one session per account, window, and ticket.",
      "Treat a dated note with a defined window as the review, not a general comment.",
      "Report a missing reviewer separately from a missing log.",
      "Sample reviewed sessions to see whether the note names a finding.",
      "Measure the delay between the session and its review."
    ],
    "sources": [
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-92 log management",
        "https://csrc.nist.gov/pubs/sp/800/92/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "write-a-privileged-access-session-review-for-offshore-production-support",
      "set-a-subprocessor-register-update-for-outsourced-delivery"
    ]
  },
  {
    "slug": "how-current-is-the-subprocessor-register-for-an-outsourced-delivery-team",
    "title": "How current is the subprocessor register for an outsourced delivery team?",
    "excerpt": "A protocol for dating each register entry, testing it against real data flows, and reporting the entries the client has not confirmed.",
    "topic": "Subprocessor register freshness",
    "published": "2026-11-17",
    "hero": "/nov17/research/how-current-is-the-subprocessor-register-for-an-outsourced-delivery-team.webp",
    "body": [
      "This protocol measures how current a subprocessor register is for one outsourced delivery lane. The unit is one register entry for one outside company that handles client data. Currency means the entry matches the observed data flow and has a client confirmation inside the stated period. The study describes register maintenance, not the vendor's security posture.",
      "Define the register version and the observation date. Record the owner, the template, and the confirmation period the client requires. If the template changes during the window, split the sample at the change date. A different template can change the fields and the result.",
      "Define an entry as a named company, service, data category, purpose, storage location, and retention period. An entry with a missing field is incomplete and should be reported separately. Do not merge two services from one vendor if they handle different data. Test the definition on the first five entries.",
      "Observe the real data flow from the tools, contracts, and billing records rather than from the register alone. Look for a tool that receives client records but has no entry. Record the discovery source for every new entry. The study should report the tools that were invisible to the register.",
      "Check the client confirmation date for each entry. A confirmation older than the required period is stale even when the vendor has not changed. Record the confirmation reference and the person who gave it. Report the entries with no confirmation at all.",
      "Check the vendor confirmation of downstream processors. A vendor may use its own subprocessors that the client never sees. Record the date and the source of the vendor statement. Report the vendors that would not confirm a current list.",
      "Report the number of entries, the number complete, the number with a current client confirmation, and the number discovered outside the register. Show the counts by data category. Present the oldest confirmation date and the entries with no owner. Use the same denominator for every rate.",
      "Separate a stale entry from a wrong entry. A stale entry has the right fields with an old date, while a wrong entry names the wrong data category or location. Report the two categories separately because the fixes differ. Record the evidence beside each finding.",
      "Inspect the entries around a recent tool change or a vendor renewal. A cluster of stale entries may mean the update step depends on a contract event that nobody owns. Compare the pattern with the change log. A register that is updated only at renewal is not current between renewals.",
      "Do not treat a complete register as proof that the data flow is safe. A complete entry can still describe a purpose that is too broad or a retention period that nobody follows. Sample two entries and trace a record through the vendor. Report what the trace showed.",
      "The record cannot show whether the client would approve the vendor or whether the contract covers the data category. It can show only whether the register matches the observed flow and carries a current confirmation. A missing entry is not proof of unauthorized processing, and a present entry is not proof of approval. The protocol also cannot see a tool that receives data through a manual export.",
      "A useful additional view is the number of entries with a named internal owner who can explain the data flow. An entry without an owner is unlikely to be updated. Record the owner and the date they last confirmed the entry. That field turns a count into a review of maintainability.",
      "Give the result to the client privacy owner and the offshore delivery lead with one observable change. The change might be a quarterly confirmation step, an entry template with required fields, a tool-discovery check, or a named owner per entry. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the largest category of stale or missing entries. Record the expected effect and the evidence that will prove it. A register that is never tested against the real flow is a document, not a control."
    ],
    "takeaways": [
      "Observe the real data flow, not only the register.",
      "Require data category, purpose, location, retention, and an owner per entry.",
      "Date the client confirmation and report the entries with none.",
      "Separate a stale entry from an entry with wrong fields.",
      "Trace one record through the vendor to test the entry."
    ],
    "sources": [
      [
        "NIST Privacy Framework",
        "https://www.nist.gov/privacy-framework"
      ],
      [
        "NIST SP 800-161r1 supply chain risk",
        "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
      ],
      [
        "CISA ICT supply chain",
        "https://www.cisa.gov/topics/cyber-threats-and-advisories/advanced-persistent-threats/ict-supply-chain"
      ],
      [
        "ISO/IEC 27001",
        "https://www.iso.org/standard/27001"
      ]
    ],
    "related": [
      "set-a-subprocessor-register-update-for-outsourced-delivery",
      "write-a-privileged-access-session-review-for-offshore-production-support"
    ]
  },
  {
    "slug": "what-share-of-loaner-devices-are-returned-with-data-intact",
    "title": "What share of loaner devices are returned with data intact?",
    "excerpt": "A protocol for tracking loaner devices from handoff to wipe, counting the returns with residual data, and separating a missed wipe from an unreadable disk.",
    "topic": "Loaner device return",
    "published": "2026-11-17",
    "hero": "/nov17/research/what-share-of-loaner-devices-are-returned-with-data-intact.webp",
    "body": [
      "This protocol measures the share of loaner devices that return with residual data still readable. The unit is one loaned device, identified by the asset tag and the loan record. Residual data means any client record, credential, or user profile that remains accessible after the return process. The study describes return hygiene, not the security of the device model.",
      "Define the loan population as every device issued in the window, including replacements and short loans. Record the asset tag, the assigned person, the issue date, and the expected return date. Exclude a device that never left the store. Test the population against the asset list before sampling.",
      "Define the return process as the approved steps in the runbook, including account removal, session revocation, and the wipe. Record the runbook version and the date it took effect. If the process changes during the window, split the sample at the change date. A different process can change the result.",
      "Define residual data by category, such as a signed-in browser profile, a local file, a saved credential, or a cached record. Test for each category with an approved method. Do not open customer records during the check. Record the category and the evidence rather than the content.",
      "Record the device state at return, including the enrollment status, the last sync time, and the wipe result from the management console. A console that reports success is not enough if the local disk still opens a profile. Compare the console result with a local check on a sample. Report the difference.",
      "Report the number of devices returned, the number with a recorded wipe, the number with residual data, and the number that could not be checked. Show the counts by loan length and by return channel. Present the devices that returned late. Use the same denominator for every rate.",
      "Separate a missed wipe from an unreadable disk. A missed wipe is a process gap, while a disk that cannot be read may be a hardware failure or a check limitation. Report the two categories separately. Record the reason beside each device that could not be checked.",
      "Inspect the devices returned in the last week before a holiday or a contract end. A cluster may mean the return check is skipped when the office is busy. Compare the pattern with the loan volume. A quarterly average can hide a monthly gap.",
      "Do not treat a low residual count as proof that the process works. A device may be wiped by the previous user before return, or the check may miss a category. Report the check method and the categories covered. A narrow check produces a narrow result.",
      "The record cannot show whether data was copied off the device before return or whether a cloud service still holds a session. It can show only whether the local check found residual data. A clean disk is not proof that no copy exists, and a dirty disk is not proof that data was used. The protocol also cannot inspect an encrypted disk that will not mount.",
      "A useful additional view is the share of devices with a named return confirmation from the contractor. A device that arrives without a confirmation is harder to trace. Record the confirmation date and the person who sent it. That field turns a count into a review of the handoff.",
      "Give the result to the client asset owner and the offshore delivery lead with one observable change. The change might be a return checklist, a wipe verification step, a shorter loan period, or a named return contact. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the most common residual category rather than the easiest device to check. Record the expected effect and the evidence that will prove it. A return process that is never checked is only an assumption.",
      "Report the devices that never came back as a separate count. A missing device is a different risk from a dirty disk. Record the last contact date and the asset owner. The study should not fold a lost device into the return rate."
    ],
    "takeaways": [
      "Count the device, not the ticket or the shipping label.",
      "Check residual categories locally, not only the console result.",
      "Report a missed wipe separately from an unreadable disk.",
      "Look for clusters at holidays and contract ends.",
      "Record a named return confirmation from the contractor."
    ],
    "sources": [
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "NIST SP 800-124r1 mobile device security",
        "https://csrc.nist.gov/pubs/sp/800/124/r1/final"
      ],
      [
        "CIS Controls",
        "https://www.cisecurity.org/controls"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "write-a-loaner-device-handoff-checklist-for-remote-contractors",
      "plan-a-customer-demo-environment-reset-for-an-offshore-team"
    ]
  },
  {
    "slug": "how-often-do-outsourced-demo-environments-contain-live-customer-data",
    "title": "How often do outsourced demo environments contain live customer data?",
    "excerpt": "A protocol for sampling demo environments, classifying live customer data, and reporting the environments that cannot be rebuilt without a production export.",
    "topic": "Demo environment data",
    "published": "2026-11-17",
    "hero": "/nov17/research/how-often-do-outsourced-demo-environments-contain-live-customer-data.webp",
    "body": [
      "This protocol measures how often an outsourced demo environment contains live customer data. The unit is one demo environment at one observation time, identified by the environment name and the owner. Live customer data means a record that matches a real customer, account, or person. The study describes data hygiene in demo systems, not the quality of the demo.",
      "Define the environment population before sampling. Include sales demos, technical proofs, training systems, and partner sandboxes that an offshore team maintains. Exclude a local mock that contains only synthetic records. Record the owner and the product version for each environment.",
      "Define the observation method. Use a read-only inventory of tables, files, and search indexes, then sample records against an approved matching method. Do not export customer data to make the comparison. Record the sample size and the matching rule. The method should be repeatable by another reviewer.",
      "Classify a record as live only when the match is strong. A name alone is weak, while an account identifier and an email together are strong. Record the evidence category and the confidence. Weak matches should be reported separately rather than counted as confirmed.",
      "Record the environment source, including whether it was built from a production export, a seed script, or a manual import. A production export is a risk signal even when the current sample looks clean. Record the date and the person who ran the import. The source explains how the data arrived.",
      "Check the reset and deletion history for each environment. An environment that is reset weekly has less exposure than one that has run for a year. Record the last reset date and the evidence. Report the environments with no reset record.",
      "Report the number of environments, the number with confirmed live data, the number with weak matches, and the number that could not be checked. Show the counts by environment type and owner. Present the environments built from a production export. Use the same denominator for every rate.",
      "Separate a live record that is still reachable from one that exists only in a backup or a log. The first is an active exposure, while the second is a retention question. Report the two categories separately. Record the location and the access path for each finding.",
      "Inspect the environments around a sales event or a product launch. A cluster of live data may mean the team copied production to meet a deadline. Compare the pattern with the import log. A single bad demo can be a mistake, while a cluster is a process.",
      "Do not treat a clean sample as proof that the environment is safe. A small sample can miss a table, and a search index can hold a copy that the database no longer has. Report the surfaces covered and the ones that were not. A narrow check produces a narrow result.",
      "The record cannot show whether a customer saw the data or whether the data left the environment. It can show only whether a live record was present at the observation time. A live record is not proof of a breach, and a clean sample is not proof of isolation. The protocol also cannot read an encrypted backup.",
      "A useful additional view is the share of environments that can be rebuilt from a seed without a production export. That share describes the design, not just the current state. Record the rebuild method and the last successful run. That field turns a point check into a review of repeatability.",
      "Give the result to the client privacy owner and the offshore delivery lead with one observable change. The change might be a seed-based rebuild, a pre-demo data check, a shorter environment lifetime, or an import approval step. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the environment type with the most confirmed live data. Record the expected effect and the evidence that will prove it. A demo environment that is never checked is a shadow copy of production."
    ],
    "takeaways": [
      "Count the environment at one observation time, with a named owner.",
      "Match records with a strong identifier and report weak matches separately.",
      "Record whether the environment came from a production export.",
      "Check tables, files, and search indexes, not only the database.",
      "Track which environments can be rebuilt without production data."
    ],
    "sources": [
      [
        "NIST Privacy Framework",
        "https://www.nist.gov/privacy-framework"
      ],
      [
        "NIST SP 800-53 security and privacy controls",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/final"
      ],
      [
        "OWASP ASVS",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "ISO/IEC 27701",
        "https://www.iso.org/standard/71670.html"
      ]
    ],
    "related": [
      "plan-a-customer-demo-environment-reset-for-an-offshore-team",
      "write-a-loaner-device-handoff-checklist-for-remote-contractors"
    ]
  },
  {
    "slug": "what-share-of-offshore-support-calls-expose-unmasked-customer-data",
    "title": "What share of offshore support calls expose unmasked customer data?",
    "excerpt": "A protocol for sampling support calls, classifying screen exposure, and separating a brief masked field from a full customer record left visible.",
    "topic": "Support call screen exposure",
    "published": "2026-11-17",
    "hero": "/nov17/research/what-share-of-offshore-support-calls-expose-unmasked-customer-data.webp",
    "body": [
      "This protocol measures the share of offshore support calls where an unmasked customer record appears on a shared screen. The unit is one support call with a screen share, identified by the session record and the ticket. Exposure means a value visible long enough to be read or captured. The study describes screen hygiene, not the intent of the agent.",
      "Define the call population from the support platform, including calls with a customer and internal calls that use a shared screen. Record the session identifier, the agent, the ticket, and the share duration. Exclude a call with no screen share. Test the population against the platform export before sampling.",
      "Define exposure by category, such as a full name with an account number, a card number, a credential, or an internal hostname. A masked field with the last four characters is not exposure for this measure. Record the category and the duration. The definition should be tested on two recorded calls.",
      "Use a sample that covers agents, shifts, and call types. Set the sample size and the selection method before watching any call. Record the sampling frame and the calls that could not be reviewed. A sample drawn only from convenient calls is not a sample.",
      "Record the evidence for each call, including the recording reference, the time code, and the visible field. Do not copy the customer value into the study file. Use a category and a short description instead. The reviewer should be able to confirm the finding without seeing the data.",
      "Distinguish a brief exposure from a sustained one. A field that appears for a second during a window switch is different from a record left open for the call. Record the duration and whether the customer could see the screen. Report the two groups separately.",
      "Report the number of calls reviewed, the number with exposure, and the share by category. Show the counts by agent group and by call type. Present the calls with no recording and the calls that could not be classified. Use the same denominator for every rate.",
      "Separate a missing tool control from a missed habit. A platform without a window share or a blur feature is a tool gap, while an agent who shares the desktop is a habit gap. Report the two categories separately. Record the evidence beside each finding.",
      "Inspect the exposures around new-hire periods and tool changes. A cluster may mean the training did not cover the current platform. Compare the pattern with the onboarding dates. A single call can be a mistake, while a cluster is a training gap.",
      "Do not treat a low exposure count as proof that the practice is safe. Agents may avoid sharing screens when they know a review is running, or the sample may miss the calls that matter. Report the sampling method and the limitation. A narrow review produces a narrow result.",
      "The record cannot show whether a customer captured the screen or whether the data was used. It can show only whether an unmasked value was visible during the reviewed call. A visible field is not proof of harm, and a clean call is not proof of control. The protocol also cannot review a call that was not recorded.",
      "A useful additional view is the share of calls where the agent used a window share or a blur control. That share describes the available practice rather than the outcome. Record the tool and the action. That field turns a count into a review of the control.",
      "Give the result to the client support owner and the offshore delivery lead with one observable change. The change might be a window-share default, a blur shortcut, a pre-call checklist, or a redaction drill for new agents. Record the owner, the effective date, and the measure that will show whether the change worked. Repeat the protocol with the same definitions after the change.",
      "Close the review with one change and a date to re-measure. The change should address the most common exposure category, not the easiest call to review. Record the expected effect and the evidence that will prove it. A screen rule that is never observed is only a poster."
    ],
    "takeaways": [
      "Count one call with a screen share, not the whole support day.",
      "Use a sample that covers agents, shifts, and call types.",
      "Separate a brief switch exposure from a record left open.",
      "Report a tool gap separately from a missed habit.",
      "Track whether agents use window share or a blur control."
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
        "OWASP ASVS",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "Google SRE Workbook",
        "https://sre.google/workbook/table-of-contents/"
      ]
    ],
    "related": [
      "set-a-screen-share-redaction-rule-for-offshore-support-calls",
      "write-a-privileged-access-session-review-for-offshore-production-support"
    ]
  }
];
