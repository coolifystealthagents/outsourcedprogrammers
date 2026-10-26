import type { ResearchPost } from './fleet-content';

export const october25ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "outsourcedprogrammers-attributing-rework-in-dependency-update",
    "title": "Attributing rework in dependency update",
    "excerpt": "A source-bounded offshore software development guide for engineering managers: dependency update without unsupported decisions.",
    "published": "2026-10-25",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "topic": "dependency update",
    "body": [
      "## Research question and scope\n\nThis protocol asks how dependency update can be described from the operational record in offshore software development. It is a measurement method, not a performance score or a legal conclusion.\n\nThe scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.\n\nThe method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that an owner can review.\n\nKeep the dependency update queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.\n\nRecord the exact dependency update source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.",
      "## Population and unit of analysis\n\nThe unit is one dependency update case, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.\n\nExclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.\n\nWrite the next action as a sentence with an owner and a time. \"Review the dependency update exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is.",
      "## Definitions that make the measure reproducible\n\nWrite down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.\n\nDefine the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.\n\nIf a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.\n\nUse a short reason code for every dependency update exception. The code should describe the evidence problem, not the person who found it.\n\nKeep the dependency update queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
      "## Evidence standard and data dictionary\n\nEach case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.\n\nRecord the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.\n\nReview one dependency update case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
      "## Sampling and collection\n\nUse consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.\n\nInclude adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.\n\nRecord the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.\n\nIf the dependency update rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.\n\nUse a short reason code for every dependency update exception. The code should describe the evidence problem, not the person who found it.",
      "## Analysis and reporting\n\nReport the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.\n\nSeparate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.\n\nKeep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.\n\nKeep a named backup for the dependency update owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.\n\nReview one dependency update case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.",
      "## Limitations and sources of error\n\nThe record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.\n\nThe cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.\n\nDo not copy a value from a prior dependency update record because it looks familiar. Reopen the source, confirm the version, and record what changed.\n\nIf the dependency update rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.",
      "## Review cadence and next action\n\nSet a review date and name the owner who will read the result. A report without a review owner is an archive, not a control.\n\nChoose one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Record the decision and the next check.\n\nRepeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.\n\nClose the loop with the person who raised the dependency update issue. A record that is internally complete but never confirmed by the requester is only half closed."
    ],
    "sources": [
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA",
        "https://www.cisa.gov/"
      ],
      [
        "Microsoft Learn",
        "https://learn.microsoft.com/"
      ],
      [
        "SANS Institute",
        "https://www.sans.org/"
      ]
    ],
    "related": [
      "/research/outsourcedprogrammers-capacity-planning-for-qa-evidence",
      "/research/outsourcedprogrammers-early-warning-signals-in-incident-handoff",
      "/research/outsourcedprogrammers-measuring-response-time-for-deployment-window"
    ],
    "hero": "/oct25-heroes/outsourcedprogrammers-attributing-rework-in-dependency-update.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and a named reviewer before expanding scope."
    }
  },
  {
    "slug": "outsourcedprogrammers-capacity-planning-for-qa-evidence",
    "title": "Capacity planning for QA evidence",
    "excerpt": "A source-bounded offshore software development guide for engineering managers: QA evidence without unsupported decisions.",
    "published": "2026-10-25",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "topic": "QA evidence",
    "body": [
      "## Research question and scope\n\nThis protocol asks how QA evidence can be described from the operational record in offshore software development. It is a measurement method, not a performance score or a legal conclusion.\n\nThe scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.\n\nThe method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that an owner can review.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.\n\nWrite the next action as a sentence with an owner and a time. \"Review the QA evidence exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is.",
      "## Population and unit of analysis\n\nThe unit is one QA evidence case, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.\n\nExclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.\n\nUse a short reason code for every QA evidence exception. The code should describe the evidence problem, not the person who found it.\n\nKeep the QA evidence queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
      "## Definitions that make the measure reproducible\n\nWrite down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.\n\nDefine the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.\n\nIf a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.\n\nReview one QA evidence case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
      "## Evidence standard and data dictionary\n\nEach case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.\n\nRecord the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.\n\nIf the QA evidence rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.\n\nUse a short reason code for every QA evidence exception. The code should describe the evidence problem, not the person who found it.",
      "## Sampling and collection\n\nUse consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.\n\nInclude adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.\n\nRecord the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.\n\nKeep a named backup for the QA evidence owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.\n\nReview one QA evidence case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.",
      "## Analysis and reporting\n\nReport the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.\n\nSeparate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.\n\nKeep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.\n\nDo not copy a value from a prior QA evidence record because it looks familiar. Reopen the source, confirm the version, and record what changed.\n\nIf the QA evidence rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.",
      "## Limitations and sources of error\n\nThe record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.\n\nThe cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.\n\nClose the loop with the person who raised the QA evidence issue. A record that is internally complete but never confirmed by the requester is only half closed.\n\nKeep a named backup for the QA evidence owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.",
      "## Review cadence and next action\n\nSet a review date and name the owner who will read the result. A report without a review owner is an archive, not a control.\n\nChoose one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Record the decision and the next check.\n\nRepeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.\n\nRecord the exact QA evidence source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since."
    ],
    "sources": [
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA",
        "https://www.cisa.gov/"
      ],
      [
        "Microsoft Learn",
        "https://learn.microsoft.com/"
      ],
      [
        "SANS Institute",
        "https://www.sans.org/"
      ]
    ],
    "related": [
      "/research/outsourcedprogrammers-attributing-rework-in-dependency-update",
      "/research/outsourcedprogrammers-early-warning-signals-in-incident-handoff",
      "/research/outsourcedprogrammers-measuring-response-time-for-deployment-window"
    ],
    "hero": "/oct25-heroes/outsourcedprogrammers-capacity-planning-for-qa-evidence.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and a named reviewer before expanding scope."
    }
  },
  {
    "slug": "outsourcedprogrammers-early-warning-signals-in-incident-handoff",
    "title": "Early-warning signals in incident handoff",
    "excerpt": "A source-bounded offshore software development guide for engineering managers: incident handoff without unsupported decisions.",
    "published": "2026-10-25",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "topic": "incident handoff",
    "body": [
      "## Research question and scope\n\nThis protocol asks how incident handoff can be described from the operational record in offshore software development. It is a measurement method, not a performance score or a legal conclusion.\n\nThe scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.\n\nThe method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that an owner can review.\n\nUse a short reason code for every incident handoff exception. The code should describe the evidence problem, not the person who found it.\n\nKeep the incident handoff queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
      "## Population and unit of analysis\n\nThe unit is one incident handoff case, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.\n\nExclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.\n\nReview one incident handoff case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
      "## Definitions that make the measure reproducible\n\nWrite down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.\n\nDefine the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.\n\nIf a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.\n\nIf the incident handoff rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.\n\nUse a short reason code for every incident handoff exception. The code should describe the evidence problem, not the person who found it.",
      "## Evidence standard and data dictionary\n\nEach case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.\n\nRecord the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.\n\nKeep a named backup for the incident handoff owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.\n\nReview one incident handoff case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.",
      "## Sampling and collection\n\nUse consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.\n\nInclude adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.\n\nRecord the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.\n\nDo not copy a value from a prior incident handoff record because it looks familiar. Reopen the source, confirm the version, and record what changed.\n\nIf the incident handoff rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.",
      "## Analysis and reporting\n\nReport the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.\n\nSeparate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.\n\nKeep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.\n\nClose the loop with the person who raised the incident handoff issue. A record that is internally complete but never confirmed by the requester is only half closed.\n\nKeep a named backup for the incident handoff owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.",
      "## Limitations and sources of error\n\nThe record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.\n\nThe cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.\n\nRecord the exact incident handoff source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.\n\nDo not copy a value from a prior incident handoff record because it looks familiar. Reopen the source, confirm the version, and record what changed.",
      "## Review cadence and next action\n\nSet a review date and name the owner who will read the result. A report without a review owner is an archive, not a control.\n\nChoose one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Record the decision and the next check.\n\nRepeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.\n\nWrite the next action as a sentence with an owner and a time. \"Review the incident handoff exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is."
    ],
    "sources": [
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA",
        "https://www.cisa.gov/"
      ],
      [
        "Microsoft Learn",
        "https://learn.microsoft.com/"
      ],
      [
        "SANS Institute",
        "https://www.sans.org/"
      ]
    ],
    "related": [
      "/research/outsourcedprogrammers-attributing-rework-in-dependency-update",
      "/research/outsourcedprogrammers-capacity-planning-for-qa-evidence",
      "/research/outsourcedprogrammers-measuring-response-time-for-deployment-window"
    ],
    "hero": "/oct25-heroes/outsourcedprogrammers-early-warning-signals-in-incident-handoff.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and a named reviewer before expanding scope."
    }
  },
  {
    "slug": "outsourcedprogrammers-measuring-response-time-for-deployment-window",
    "title": "Measuring response time for deployment window",
    "excerpt": "A source-bounded offshore software development guide for engineering managers: deployment window without unsupported decisions.",
    "published": "2026-10-25",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "topic": "deployment window",
    "body": [
      "## Research question and scope\n\nThis protocol asks how deployment window can be described from the operational record in offshore software development. It is a measurement method, not a performance score or a legal conclusion.\n\nThe scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.\n\nThe method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that an owner can review.\n\nRecord the exact deployment window source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.\n\nDo not copy a value from a prior deployment window record because it looks familiar. Reopen the source, confirm the version, and record what changed.",
      "## Population and unit of analysis\n\nThe unit is one deployment window case, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.\n\nExclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.\n\nWrite the next action as a sentence with an owner and a time. \"Review the deployment window exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is.\n\nClose the loop with the person who raised the deployment window issue. A record that is internally complete but never confirmed by the requester is only half closed.",
      "## Definitions that make the measure reproducible\n\nWrite down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.\n\nDefine the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.\n\nIf a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.\n\nKeep the deployment window queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.\n\nRecord the exact deployment window source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.",
      "## Evidence standard and data dictionary\n\nEach case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.\n\nRecord the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.\n\nWrite the next action as a sentence with an owner and a time. \"Review the deployment window exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is.",
      "## Sampling and collection\n\nUse consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.\n\nInclude adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.\n\nRecord the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.\n\nUse a short reason code for every deployment window exception. The code should describe the evidence problem, not the person who found it.\n\nKeep the deployment window queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
      "## Analysis and reporting\n\nReport the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.\n\nSeparate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.\n\nKeep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.\n\nReview one deployment window case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
      "## Limitations and sources of error\n\nThe record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.\n\nThe cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.\n\nIf the deployment window rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.",
      "## Review cadence and next action\n\nSet a review date and name the owner who will read the result. A report without a review owner is an archive, not a control.\n\nChoose one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Record the decision and the next check.\n\nRepeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.\n\nKeep a named backup for the deployment window owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable."
    ],
    "sources": [
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA",
        "https://www.cisa.gov/"
      ],
      [
        "Microsoft Learn",
        "https://learn.microsoft.com/"
      ],
      [
        "SANS Institute",
        "https://www.sans.org/"
      ]
    ],
    "related": [
      "/research/outsourcedprogrammers-attributing-rework-in-dependency-update",
      "/research/outsourcedprogrammers-capacity-planning-for-qa-evidence",
      "/research/outsourcedprogrammers-early-warning-signals-in-incident-handoff"
    ],
    "hero": "/oct25-heroes/outsourcedprogrammers-measuring-response-time-for-deployment-window.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and a named reviewer before expanding scope."
    }
  },
  {
    "slug": "outsourcedprogrammers-testing-completeness-in-rollback-plan",
    "title": "Testing completeness in rollback plan",
    "excerpt": "A source-bounded offshore software development guide for engineering managers: rollback plan without unsupported decisions.",
    "published": "2026-10-25",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "topic": "rollback plan",
    "body": [
      "## Research question and scope\n\nThis protocol asks how rollback plan can be described from the operational record in offshore software development. It is a measurement method, not a performance score or a legal conclusion.\n\nThe scope is one defined population and one observation window. State what is excluded before looking at results so the denominator cannot drift.\n\nThe method does not estimate an industry rate and does not compare staffing models. It produces a repeatable description that an owner can review.\n\nWrite the next action as a sentence with an owner and a time. \"Review the rollback plan exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is.\n\nClose the loop with the person who raised the rollback plan issue. A record that is internally complete but never confirmed by the requester is only half closed.",
      "## Population and unit of analysis\n\nThe unit is one rollback plan case, from the opening event through the recorded close. Keep the unit explicit so linked events are not counted as independent cases.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window. A count without a denominator is not a measurement.\n\nExclude reopened cases only when the reopening did not create a new requirement. Preserve the exclusion count and the reason.\n\nKeep the rollback plan queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.\n\nRecord the exact rollback plan source and the time it was observed. A later reviewer should be able to tell whether the value was current when the first action was taken, even if the record has changed since.",
      "## Definitions that make the measure reproducible\n\nWrite down the start event, the stop event, the pause rule, and the treatment of missing evidence before collecting data.\n\nDefine the primary measure and one or two supporting measures. A measure without a stated denominator or observation window is not yet a measure.\n\nIf a definition changes during the review, keep the earlier classification and apply the new rule only to later cases.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.\n\nWrite the next action as a sentence with an owner and a time. \"Review the rollback plan exception\" is not a next action; \"Mina checks the missing source by 2pm and routes it to the owner\" is.",
      "## Evidence standard and data dictionary\n\nEach case needs the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous case key. Keep the crosswalk between the key and the identity in an approved system with restricted access.\n\nRecord the version or date of every source. A current screenshot cannot prove what the record said when the first action was taken.\n\nUse a short reason code for every rollback plan exception. The code should describe the evidence problem, not the person who found it.\n\nKeep the rollback plan queue separate from the general inbox. A shared queue without a named owner hides the oldest item and makes the weekly report look cleaner than the work.",
      "## Sampling and collection\n\nUse consecutive cases where possible, then stratify by channel, owner, or risk class. Convenience samples hide the cases that fail the control.\n\nInclude adverse cases: a missing source, a conflicting instruction, an unavailable owner, and a tight deadline. These cases show whether the process stops safely.\n\nRecord the collection window, the eligible count, the sample size, and every exclusion. The reviewer should be able to reproduce the sample.\n\nReview one rollback plan case end to end in the weekly meeting. Check the source, the decision, the destination record, and the confirmation rather than only the completion count.\n\nWhen a source is unavailable, record that fact instead of leaving the field blank. Missing, unavailable, and confirmed negative are three different states and should not be collapsed.",
      "## Analysis and reporting\n\nReport the eligible count, the sample, the missing-field rate, the exception rate, and the unresolved count at the close of the window.\n\nSeparate observation from interpretation. A high completion rate on a small easy sample is not evidence of a strong control.\n\nKeep the case-level detail available for review. Summary charts without the underlying records cannot support a decision.\n\nIf the rollback plan rule changes, keep the earlier classification and apply the new rule to later cases. A definition that changes quietly makes the trend unreadable.\n\nUse a short reason code for every rollback plan exception. The code should describe the evidence problem, not the person who found it.",
      "## Limitations and sources of error\n\nThe record may be incomplete, delayed, or maintained by someone outside the team. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case. Report the instability instead of presenting a precise-looking percentage.\n\nThe cited public sources frame recordkeeping, privacy, security, and internal control practice. They do not provide a result for this sample.\n\nKeep a named backup for the rollback plan owner. Coverage during leave or a time-zone gap should be written into the routine, not improvised when the owner is unavailable.",
      "## Review cadence and next action\n\nSet a review date and name the owner who will read the result. A report without a review owner is an archive, not a control.\n\nChoose one next action: fix the source, simplify the field, change the queue, or stop the work until the owner decides. Record the decision and the next check.\n\nRepeat the protocol after the change. Compare the same definitions and report what moved, what did not, and what remains unknown.\n\nDo not copy a value from a prior rollback plan record because it looks familiar. Reopen the source, confirm the version, and record what changed."
    ],
    "sources": [
      [
        "NIST Cybersecurity Framework",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA",
        "https://www.cisa.gov/"
      ],
      [
        "Microsoft Learn",
        "https://learn.microsoft.com/"
      ],
      [
        "SANS Institute",
        "https://www.sans.org/"
      ]
    ],
    "related": [
      "/research/outsourcedprogrammers-attributing-rework-in-dependency-update",
      "/research/outsourcedprogrammers-capacity-planning-for-qa-evidence",
      "/research/outsourcedprogrammers-early-warning-signals-in-incident-handoff"
    ],
    "hero": "/oct25-heroes/outsourcedprogrammers-testing-completeness-in-rollback-plan.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and a named reviewer before expanding scope."
    }
  }
];
