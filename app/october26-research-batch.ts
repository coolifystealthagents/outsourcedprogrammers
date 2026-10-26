import type { ResearchPost } from './fleet-content';

export const october26ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "outsourcedprogrammers-auditing-access-changes-around-qa-evidence",
    "title": "Auditing access changes around QA evidence",
    "excerpt": "A source-bounded offshore software development control note for engineering managers: QA evidence with clear ownership and evidence.",
    "published": "2026-10-26",
    "datePublished": "2026-10-26",
    "dateModified": "2026-10-26",
    "topic": "QA evidence",
    "body": [
      "## Question and scope\n\nThis protocol asks how QA evidence can be described from the operational record in offshore software development. It measures the record, not the person or the legal outcome.\n\nState the population, the observation window, and the exclusions before collecting data.\n\nThe result should be repeatable by another reviewer using the same definitions.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.",
      "## Unit and denominator\n\nThe unit is one QA evidence case, from the opening event through the recorded close.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items. A count without a denominator is not a measure.\n\nDo not merge linked events into one case unless the process defines them as one requirement.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the QA evidence queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the QA evidence source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.",
      "## Definitions\n\nWrite the start event, the stop event, the pause rule, and the treatment of missing evidence.\n\nDefine the primary measure and one supporting measure. Use the same definitions for every case.\n\nIf a definition changes, keep the earlier classification and apply the new rule only to later cases.\n\nReview one QA evidence case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.",
      "## Evidence and data dictionary\n\nEach case needs the source, the time observed, the field supported, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous key and keep the identity crosswalk in an approved system.\n\nRecord the source version so a later reviewer can tell what was known at the first action.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the QA evidence queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the QA evidence source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.",
      "## Sampling\n\nUse consecutive cases where possible and stratify by channel, owner, or risk class.\n\nInclude adverse cases: missing source, conflicting instruction, unavailable owner, and a tight deadline.\n\nRecord the eligible count, sample size, and every exclusion so the sample can be reproduced.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one QA evidence case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.",
      "## Analysis\n\nReport the missing-field rate, the exception rate, the unresolved count, and the age of open cases.\n\nSeparate observation from interpretation. A small easy sample is not evidence of a strong control.\n\nKeep case-level detail available for review. A summary chart without records cannot support a decision.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the QA evidence queue separate from the general inbox. A queue without an owner hides the oldest item.",
      "## Limitations\n\nThe record may be incomplete or delayed. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case; report the instability instead of a precise-looking percentage.\n\nPublic sources frame recordkeeping and control practice but do not provide a result for this sample.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one QA evidence case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.",
      "## Review and next action\n\nName the owner who will read the result and set a review date.\n\nChoose one action: fix the source, simplify the field, change the queue, or pause the work until the owner decides.\n\nRepeat the protocol after the change and report what moved and what remains unknown.\n\nRecord the QA evidence source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases."
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
    "related": [],
    "hero": "/oct26-heroes/outsourcedprogrammers-auditing-access-changes-around-qa-evidence.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and reviewer."
    }
  },
  {
    "slug": "outsourcedprogrammers-estimating-rework-cost-in-dependency-update",
    "title": "Estimating rework cost in dependency update",
    "excerpt": "A source-bounded offshore software development control note for engineering managers: dependency update with clear ownership and evidence.",
    "published": "2026-10-26",
    "datePublished": "2026-10-26",
    "dateModified": "2026-10-26",
    "topic": "dependency update",
    "body": [
      "## Question and scope\n\nThis protocol asks how dependency update can be described from the operational record in offshore software development. It measures the record, not the person or the legal outcome.\n\nState the population, the observation window, and the exclusions before collecting data.\n\nThe result should be repeatable by another reviewer using the same definitions.\n\nKeep the dependency update queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the dependency update source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.",
      "## Unit and denominator\n\nThe unit is one dependency update case, from the opening event through the recorded close.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items. A count without a denominator is not a measure.\n\nDo not merge linked events into one case unless the process defines them as one requirement.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.",
      "## Definitions\n\nWrite the start event, the stop event, the pause rule, and the treatment of missing evidence.\n\nDefine the primary measure and one supporting measure. Use the same definitions for every case.\n\nIf a definition changes, keep the earlier classification and apply the new rule only to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the dependency update queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the dependency update source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.",
      "## Evidence and data dictionary\n\nEach case needs the source, the time observed, the field supported, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous key and keep the identity crosswalk in an approved system.\n\nRecord the source version so a later reviewer can tell what was known at the first action.\n\nReview one dependency update case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.",
      "## Sampling\n\nUse consecutive cases where possible and stratify by channel, owner, or risk class.\n\nInclude adverse cases: missing source, conflicting instruction, unavailable owner, and a tight deadline.\n\nRecord the eligible count, sample size, and every exclusion so the sample can be reproduced.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the dependency update queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the dependency update source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.",
      "## Analysis\n\nReport the missing-field rate, the exception rate, the unresolved count, and the age of open cases.\n\nSeparate observation from interpretation. A small easy sample is not evidence of a strong control.\n\nKeep case-level detail available for review. A summary chart without records cannot support a decision.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one dependency update case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.",
      "## Limitations\n\nThe record may be incomplete or delayed. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case; report the instability instead of a precise-looking percentage.\n\nPublic sources frame recordkeeping and control practice but do not provide a result for this sample.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.",
      "## Review and next action\n\nName the owner who will read the result and set a review date.\n\nChoose one action: fix the source, simplify the field, change the queue, or pause the work until the owner decides.\n\nRepeat the protocol after the change and report what moved and what remains unknown.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one dependency update case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation."
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
    "related": [],
    "hero": "/oct26-heroes/outsourcedprogrammers-estimating-rework-cost-in-dependency-update.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and reviewer."
    }
  },
  {
    "slug": "outsourcedprogrammers-measuring-backlog-age-in-deployment-window",
    "title": "Measuring backlog age in deployment window",
    "excerpt": "A source-bounded offshore software development control note for engineering managers: deployment window with clear ownership and evidence.",
    "published": "2026-10-26",
    "datePublished": "2026-10-26",
    "dateModified": "2026-10-26",
    "topic": "deployment window",
    "body": [
      "## Question and scope\n\nThis protocol asks how deployment window can be described from the operational record in offshore software development. It measures the record, not the person or the legal outcome.\n\nState the population, the observation window, and the exclusions before collecting data.\n\nThe result should be repeatable by another reviewer using the same definitions.\n\nRecord the deployment window source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.",
      "## Unit and denominator\n\nThe unit is one deployment window case, from the opening event through the recorded close.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items. A count without a denominator is not a measure.\n\nDo not merge linked events into one case unless the process defines them as one requirement.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one deployment window case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.",
      "## Definitions\n\nWrite the start event, the stop event, the pause rule, and the treatment of missing evidence.\n\nDefine the primary measure and one supporting measure. Use the same definitions for every case.\n\nIf a definition changes, keep the earlier classification and apply the new rule only to later cases.\n\nKeep the deployment window queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the deployment window source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.",
      "## Evidence and data dictionary\n\nEach case needs the source, the time observed, the field supported, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous key and keep the identity crosswalk in an approved system.\n\nRecord the source version so a later reviewer can tell what was known at the first action.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.",
      "## Sampling\n\nUse consecutive cases where possible and stratify by channel, owner, or risk class.\n\nInclude adverse cases: missing source, conflicting instruction, unavailable owner, and a tight deadline.\n\nRecord the eligible count, sample size, and every exclusion so the sample can be reproduced.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the deployment window queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the deployment window source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.",
      "## Analysis\n\nReport the missing-field rate, the exception rate, the unresolved count, and the age of open cases.\n\nSeparate observation from interpretation. A small easy sample is not evidence of a strong control.\n\nKeep case-level detail available for review. A summary chart without records cannot support a decision.\n\nReview one deployment window case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.",
      "## Limitations\n\nThe record may be incomplete or delayed. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case; report the instability instead of a precise-looking percentage.\n\nPublic sources frame recordkeeping and control practice but do not provide a result for this sample.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the deployment window queue separate from the general inbox. A queue without an owner hides the oldest item.",
      "## Review and next action\n\nName the owner who will read the result and set a review date.\n\nChoose one action: fix the source, simplify the field, change the queue, or pause the work until the owner decides.\n\nRepeat the protocol after the change and report what moved and what remains unknown.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one deployment window case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different."
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
    "related": [],
    "hero": "/oct26-heroes/outsourcedprogrammers-measuring-backlog-age-in-deployment-window.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and reviewer."
    }
  },
  {
    "slug": "outsourcedprogrammers-testing-handoff-completeness-in-rollback-plan",
    "title": "Testing handoff completeness in rollback plan",
    "excerpt": "A source-bounded offshore software development control note for engineering managers: rollback plan with clear ownership and evidence.",
    "published": "2026-10-26",
    "datePublished": "2026-10-26",
    "dateModified": "2026-10-26",
    "topic": "rollback plan",
    "body": [
      "## Question and scope\n\nThis protocol asks how rollback plan can be described from the operational record in offshore software development. It measures the record, not the person or the legal outcome.\n\nState the population, the observation window, and the exclusions before collecting data.\n\nThe result should be repeatable by another reviewer using the same definitions.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one rollback plan case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.",
      "## Unit and denominator\n\nThe unit is one rollback plan case, from the opening event through the recorded close.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items. A count without a denominator is not a measure.\n\nDo not merge linked events into one case unless the process defines them as one requirement.\n\nKeep the rollback plan queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the rollback plan source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.",
      "## Definitions\n\nWrite the start event, the stop event, the pause rule, and the treatment of missing evidence.\n\nDefine the primary measure and one supporting measure. Use the same definitions for every case.\n\nIf a definition changes, keep the earlier classification and apply the new rule only to later cases.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.",
      "## Evidence and data dictionary\n\nEach case needs the source, the time observed, the field supported, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous key and keep the identity crosswalk in an approved system.\n\nRecord the source version so a later reviewer can tell what was known at the first action.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the rollback plan queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the rollback plan source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.",
      "## Sampling\n\nUse consecutive cases where possible and stratify by channel, owner, or risk class.\n\nInclude adverse cases: missing source, conflicting instruction, unavailable owner, and a tight deadline.\n\nRecord the eligible count, sample size, and every exclusion so the sample can be reproduced.\n\nReview one rollback plan case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.",
      "## Analysis\n\nReport the missing-field rate, the exception rate, the unresolved count, and the age of open cases.\n\nSeparate observation from interpretation. A small easy sample is not evidence of a strong control.\n\nKeep case-level detail available for review. A summary chart without records cannot support a decision.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the rollback plan queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the rollback plan source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.",
      "## Limitations\n\nThe record may be incomplete or delayed. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case; report the instability instead of a precise-looking percentage.\n\nPublic sources frame recordkeeping and control practice but do not provide a result for this sample.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one rollback plan case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.",
      "## Review and next action\n\nName the owner who will read the result and set a review date.\n\nChoose one action: fix the source, simplify the field, change the queue, or pause the work until the owner decides.\n\nRepeat the protocol after the change and report what moved and what remains unknown.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person."
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
    "related": [],
    "hero": "/oct26-heroes/outsourcedprogrammers-testing-handoff-completeness-in-rollback-plan.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and reviewer."
    }
  },
  {
    "slug": "outsourcedprogrammers-testing-monitoring-coverage-for-incident-handoff",
    "title": "Testing monitoring coverage for incident handoff",
    "excerpt": "A source-bounded offshore software development control note for engineering managers: incident handoff with clear ownership and evidence.",
    "published": "2026-10-26",
    "datePublished": "2026-10-26",
    "dateModified": "2026-10-26",
    "topic": "incident handoff",
    "body": [
      "## Question and scope\n\nThis protocol asks how incident handoff can be described from the operational record in offshore software development. It measures the record, not the person or the legal outcome.\n\nState the population, the observation window, and the exclusions before collecting data.\n\nThe result should be repeatable by another reviewer using the same definitions.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the incident handoff queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the incident handoff source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.",
      "## Unit and denominator\n\nThe unit is one incident handoff case, from the opening event through the recorded close.\n\nRecord the opening count, additions, withdrawals, resolutions, and unresolved items. A count without a denominator is not a measure.\n\nDo not merge linked events into one case unless the process defines them as one requirement.\n\nReview one incident handoff case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.",
      "## Definitions\n\nWrite the start event, the stop event, the pause rule, and the treatment of missing evidence.\n\nDefine the primary measure and one supporting measure. Use the same definitions for every case.\n\nIf a definition changes, keep the earlier classification and apply the new rule only to later cases.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the incident handoff queue separate from the general inbox. A queue without an owner hides the oldest item.\n\nRecord the incident handoff source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.",
      "## Evidence and data dictionary\n\nEach case needs the source, the time observed, the field supported, and the reviewer. Mark missing, unavailable, and confirmed negative values separately.\n\nUse a pseudonymous key and keep the identity crosswalk in an approved system.\n\nRecord the source version so a later reviewer can tell what was known at the first action.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one incident handoff case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.",
      "## Sampling\n\nUse consecutive cases where possible and stratify by channel, owner, or risk class.\n\nInclude adverse cases: missing source, conflicting instruction, unavailable owner, and a tight deadline.\n\nRecord the eligible count, sample size, and every exclusion so the sample can be reproduced.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.\n\nUse a short reason code for each exception. The code should describe the evidence problem, not the person.\n\nKeep the incident handoff queue separate from the general inbox. A queue without an owner hides the oldest item.",
      "## Analysis\n\nReport the missing-field rate, the exception rate, the unresolved count, and the age of open cases.\n\nSeparate observation from interpretation. A small easy sample is not evidence of a strong control.\n\nKeep case-level detail available for review. A summary chart without records cannot support a decision.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine.\n\nReview one incident handoff case end to end in the weekly meeting. Check the source, decision, destination record, and confirmation.\n\nWhen evidence is unavailable, record that state instead of leaving a blank. Missing and confirmed negative are different.",
      "## Limitations\n\nThe record may be incomplete or delayed. The method cannot infer missing work from a clean summary.\n\nSmall samples are sensitive to one case; report the instability instead of a precise-looking percentage.\n\nPublic sources frame recordkeeping and control practice but do not provide a result for this sample.\n\nRecord the incident handoff source and observation time. A later reviewer should be able to tell whether the value was current when the first action was taken.\n\nDo not copy a value because it looks familiar. Reopen the source and record what changed.\n\nIf the rule changes, keep the earlier classification and apply the new rule to later cases.",
      "## Review and next action\n\nName the owner who will read the result and set a review date.\n\nChoose one action: fix the source, simplify the field, change the queue, or pause the work until the owner decides.\n\nRepeat the protocol after the change and report what moved and what remains unknown.\n\nWrite the next action with an owner and a time. \"Review the exception\" is not a next action; a named person checking a named source by a stated time is.\n\nClose the loop with the requester. Internal completeness without confirmation is only half closed.\n\nName a backup owner for leave and time-zone gaps. Coverage should be written into the routine."
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
    "related": [],
    "hero": "/oct26-heroes/outsourcedprogrammers-testing-monitoring-coverage-for-incident-handoff.png",
    "nextStep": {
      "heading": "Review the method with the technical owner",
      "href": "/contact-us",
      "label": "Discuss the role brief",
      "copy": "Use the evidence model to define a bounded lane and reviewer."
    }
  }
];
