export const november24BlogBatch = [
  {
    "slug": "build-an-api-client-review-checklist-for-an-outsourced-developer",
    "title": "Build an API client review checklist for an outsourced developer",
    "excerpt": "A review checklist that records the timeout, the retry policy, the error mapping, and the reviewer, so a delegated API client fails in a predictable way.",
    "minutes": 8,
    "published": "2026-11-24",
    "body": [
      "## Start the API client review at the point of work",
      "Capture the case, the date, and the person handling it. State the source request and the pull request reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
      "Capture the the timeout and retry setting before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check.",
      "## Match the API client review to the evidence",
      "Compare the written entry with the pull request record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
      "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision.",
      "## Record the handoff and the owner",
      "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
      "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message.",
      "## Review the API client review each sprint",
      "Review the entries by code reviewer, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the timeout and retry setting, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner API client review and less a silent retry loop that hides a failing dependency."
    ],
    "takeaways": [
      "Check the timeout before the retry policy.",
      "Record the error mapping for each status code.",
      "Name the reviewer who accepted the failure path.",
      "Run one failure test against a stub service."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the timeout and retry setting and the date."
      },
      {
        "area": "Owner",
        "ready": "A named code reviewer owns the next step."
      }
    ],
    "sections": [
      {
        "id": "start-the-api-client-review-at-the-point-of-work",
        "title": "Start the API client review at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the pull request reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the timeout and retry setting before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-api-client-review-to-the-evidence",
        "title": "Match the API client review to the evidence",
        "paragraphs": [
          "Compare the written entry with the pull request record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-api-client-review-each-sprint",
        "title": "Review the API client review each sprint",
        "paragraphs": [
          "Review the entries by code reviewer, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the timeout and retry setting, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner API client review and less a silent retry loop that hides a failing dependency."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The API client review and the current pull request entry."
      },
      {
        "label": "Output",
        "text": "A dated API client review with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the timeout and retry setting, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/build-an-api-client-review-checklist-for-an-outsourced-developer.webp"
  },
  {
    "slug": "set-a-database-migration-rollback-note",
    "title": "Set a database migration rollback note",
    "excerpt": "A rollback note that records the schema change, the data backup, the reverse script, and the owner, so a delegated migration can be undone without guesswork.",
    "minutes": 8,
    "published": "2026-11-24",
    "body": [
      "## Start the migration rollback note at the point of work",
      "Capture the case, the date, and the person handling it. State the source request and the migration log reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
      "Capture the the reverse script and backup point before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check.",
      "## Match the migration rollback note to the evidence",
      "Compare the written entry with the migration log record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
      "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision.",
      "## Record the handoff and the owner",
      "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
      "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message.",
      "## Review the migration rollback note each release",
      "Review the entries by database owner, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the reverse script and backup point, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner migration rollback note and less a migration applied without a tested way back."
    ],
    "takeaways": [
      "Test the reverse script on a copy before the release.",
      "Record the backup point and who verified it.",
      "Name the person who may authorize the rollback.",
      "Keep the note with the migration ticket."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the reverse script and backup point and the date."
      },
      {
        "area": "Owner",
        "ready": "A named database owner owns the next step."
      }
    ],
    "sections": [
      {
        "id": "start-the-migration-rollback-note-at-the-point-of-work",
        "title": "Start the migration rollback note at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the migration log reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the reverse script and backup point before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-migration-rollback-note-to-the-evidence",
        "title": "Match the migration rollback note to the evidence",
        "paragraphs": [
          "Compare the written entry with the migration log record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-migration-rollback-note-each-release",
        "title": "Review the migration rollback note each release",
        "paragraphs": [
          "Review the entries by database owner, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the reverse script and backup point, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner migration rollback note and less a migration applied without a tested way back."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The migration rollback note and the current migration log entry."
      },
      {
        "label": "Output",
        "text": "A dated migration rollback note with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the reverse script and backup point, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/set-a-database-migration-rollback-note.webp"
  },
  {
    "slug": "create-a-bug-reproduction-packet-for-a-delegated-qa-desk",
    "title": "Create a bug reproduction packet for a delegated QA desk",
    "excerpt": "A reproduction packet that records the build, the steps, the expected result, and the evidence, so a defect reaches the developer without another round of questions.",
    "minutes": 8,
    "published": "2026-11-24",
    "body": [
      "## Start the bug reproduction packet at the point of work",
      "Capture the case, the date, and the person handling it. State the source request and the issue tracker reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
      "Capture the the build number and steps before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check.",
      "## Match the bug reproduction packet to the evidence",
      "Compare the written entry with the issue tracker record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
      "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision.",
      "## Record the handoff and the owner",
      "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
      "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message.",
      "## Review the bug reproduction packet each ticket",
      "Review the entries by QA lead, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the build number and steps, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner bug reproduction packet and less a defect returned to the reporter for missing detail."
    ],
    "takeaways": [
      "Write the steps from a clean session.",
      "Record the build, environment, and account used.",
      "Attach the log or screenshot that shows the failure.",
      "State the expected result in one sentence."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the build number and steps and the date."
      },
      {
        "area": "Owner",
        "ready": "A named QA lead owns the next step."
      }
    ],
    "sections": [
      {
        "id": "start-the-bug-reproduction-packet-at-the-point-of-work",
        "title": "Start the bug reproduction packet at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the issue tracker reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the build number and steps before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-bug-reproduction-packet-to-the-evidence",
        "title": "Match the bug reproduction packet to the evidence",
        "paragraphs": [
          "Compare the written entry with the issue tracker record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-bug-reproduction-packet-each-ticket",
        "title": "Review the bug reproduction packet each ticket",
        "paragraphs": [
          "Review the entries by QA lead, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the build number and steps, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner bug reproduction packet and less a defect returned to the reporter for missing detail."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The bug reproduction packet and the current issue tracker entry."
      },
      {
        "label": "Output",
        "text": "A dated bug reproduction packet with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the build number and steps, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/create-a-bug-reproduction-packet-for-a-delegated-qa-desk.webp"
  },
  {
    "slug": "record-an-on-call-escalation-handoff",
    "title": "Record an on-call escalation handoff",
    "excerpt": "An escalation handoff that records the incident, the current owner, the next check, and the time, so a delegated responder does not restart the investigation.",
    "minutes": 8,
    "published": "2026-11-24",
    "body": [
      "## Start the on-call handoff note at the point of work",
      "Capture the case, the date, and the person handling it. State the source request and the incident channel reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
      "Capture the the incident owner and next check before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check.",
      "## Match the on-call handoff note to the evidence",
      "Compare the written entry with the incident channel record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
      "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision.",
      "## Record the handoff and the owner",
      "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
      "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message.",
      "## Review the on-call handoff note each shift",
      "Review the entries by incident lead, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the incident owner and next check, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner on-call handoff note and less a responder repeating checks already completed."
    ],
    "takeaways": [
      "Name the current incident owner in the channel.",
      "List checks already completed and their results.",
      "Write the next check and its expected time.",
      "Keep the handoff note in the incident record."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the incident owner and next check and the date."
      },
      {
        "area": "Owner",
        "ready": "A named incident lead owns the next step."
      }
    ],
    "sections": [
      {
        "id": "start-the-on-call-handoff-note-at-the-point-of-work",
        "title": "Start the on-call handoff note at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the incident channel reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the incident owner and next check before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-on-call-handoff-note-to-the-evidence",
        "title": "Match the on-call handoff note to the evidence",
        "paragraphs": [
          "Compare the written entry with the incident channel record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-on-call-handoff-note-each-shift",
        "title": "Review the on-call handoff note each shift",
        "paragraphs": [
          "Review the entries by incident lead, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the incident owner and next check, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner on-call handoff note and less a responder repeating checks already completed."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The on-call handoff note and the current incident channel entry."
      },
      {
        "label": "Output",
        "text": "A dated on-call handoff note with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the incident owner and next check, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/record-an-on-call-escalation-handoff.webp"
  },
  {
    "slug": "build-release-notes-from-merged-pull-requests",
    "title": "Build release notes from merged pull requests",
    "excerpt": "A release note draft that records the merged change, the user impact, the linked pull request, and the reviewer, so a release is described without rewriting the changelog.",
    "minutes": 8,
    "published": "2026-11-24",
    "body": [
      "## Start the release note draft at the point of work",
      "Capture the case, the date, and the person handling it. State the source request and the merge log reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
      "Capture the the linked pull request and user impact before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check.",
      "## Match the release note draft to the evidence",
      "Compare the written entry with the merge log record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
      "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision.",
      "## Record the handoff and the owner",
      "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
      "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message.",
      "## Review the release note draft each release",
      "Review the entries by release manager, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the linked pull request and user impact, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner release note draft and less a user-facing change shipping without a description."
    ],
    "takeaways": [
      "Link every note line to a merged pull request.",
      "Describe the user impact, not the file change.",
      "Group internal refactors away from customer changes.",
      "Have the release manager approve the final wording."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the linked pull request and user impact and the date."
      },
      {
        "area": "Owner",
        "ready": "A named release manager owns the next step."
      }
    ],
    "sections": [
      {
        "id": "start-the-release-note-draft-at-the-point-of-work",
        "title": "Start the release note draft at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the merge log reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the linked pull request and user impact before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-release-note-draft-to-the-evidence",
        "title": "Match the release note draft to the evidence",
        "paragraphs": [
          "Compare the written entry with the merge log record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-release-note-draft-each-release",
        "title": "Review the release note draft each release",
        "paragraphs": [
          "Review the entries by release manager, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the linked pull request and user impact, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner release note draft and less a user-facing change shipping without a description."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The release note draft and the current merge log entry."
      },
      {
        "label": "Output",
        "text": "A dated release note draft with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the linked pull request and user impact, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/build-release-notes-from-merged-pull-requests.webp"
  }
];
export const november24BlogDetails = {
  "build-an-api-client-review-checklist-for-an-outsourced-developer": {
    "takeaways": [
      "Check the timeout before the retry policy.",
      "Record the error mapping for each status code.",
      "Name the reviewer who accepted the failure path.",
      "Run one failure test against a stub service."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the timeout and retry setting and the date.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Owner",
        "ready": "A named code reviewer owns the next step.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "start-the-api-client-review-at-the-point-of-work",
        "title": "Start the API client review at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the pull request reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the timeout and retry setting before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-api-client-review-to-the-evidence",
        "title": "Match the API client review to the evidence",
        "paragraphs": [
          "Compare the written entry with the pull request record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-api-client-review-each-sprint",
        "title": "Review the API client review each sprint",
        "paragraphs": [
          "Review the entries by code reviewer, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the timeout and retry setting, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner API client review and less a silent retry loop that hides a failing dependency."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The API client review and the current pull request entry."
      },
      {
        "label": "Output",
        "text": "A dated API client review with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the timeout and retry setting, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/build-an-api-client-review-checklist-for-an-outsourced-developer.webp"
  },
  "set-a-database-migration-rollback-note": {
    "takeaways": [
      "Test the reverse script on a copy before the release.",
      "Record the backup point and who verified it.",
      "Name the person who may authorize the rollback.",
      "Keep the note with the migration ticket."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the reverse script and backup point and the date.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Owner",
        "ready": "A named database owner owns the next step.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "start-the-migration-rollback-note-at-the-point-of-work",
        "title": "Start the migration rollback note at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the migration log reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the reverse script and backup point before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-migration-rollback-note-to-the-evidence",
        "title": "Match the migration rollback note to the evidence",
        "paragraphs": [
          "Compare the written entry with the migration log record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-migration-rollback-note-each-release",
        "title": "Review the migration rollback note each release",
        "paragraphs": [
          "Review the entries by database owner, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the reverse script and backup point, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner migration rollback note and less a migration applied without a tested way back."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The migration rollback note and the current migration log entry."
      },
      {
        "label": "Output",
        "text": "A dated migration rollback note with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the reverse script and backup point, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/set-a-database-migration-rollback-note.webp"
  },
  "create-a-bug-reproduction-packet-for-a-delegated-qa-desk": {
    "takeaways": [
      "Write the steps from a clean session.",
      "Record the build, environment, and account used.",
      "Attach the log or screenshot that shows the failure.",
      "State the expected result in one sentence."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the build number and steps and the date.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Owner",
        "ready": "A named QA lead owns the next step.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "start-the-bug-reproduction-packet-at-the-point-of-work",
        "title": "Start the bug reproduction packet at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the issue tracker reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the build number and steps before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-bug-reproduction-packet-to-the-evidence",
        "title": "Match the bug reproduction packet to the evidence",
        "paragraphs": [
          "Compare the written entry with the issue tracker record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-bug-reproduction-packet-each-ticket",
        "title": "Review the bug reproduction packet each ticket",
        "paragraphs": [
          "Review the entries by QA lead, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the build number and steps, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner bug reproduction packet and less a defect returned to the reporter for missing detail."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The bug reproduction packet and the current issue tracker entry."
      },
      {
        "label": "Output",
        "text": "A dated bug reproduction packet with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the build number and steps, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/create-a-bug-reproduction-packet-for-a-delegated-qa-desk.webp"
  },
  "record-an-on-call-escalation-handoff": {
    "takeaways": [
      "Name the current incident owner in the channel.",
      "List checks already completed and their results.",
      "Write the next check and its expected time.",
      "Keep the handoff note in the incident record."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the incident owner and next check and the date.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Owner",
        "ready": "A named incident lead owns the next step.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "start-the-on-call-handoff-note-at-the-point-of-work",
        "title": "Start the on-call handoff note at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the incident channel reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the incident owner and next check before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-on-call-handoff-note-to-the-evidence",
        "title": "Match the on-call handoff note to the evidence",
        "paragraphs": [
          "Compare the written entry with the incident channel record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-on-call-handoff-note-each-shift",
        "title": "Review the on-call handoff note each shift",
        "paragraphs": [
          "Review the entries by incident lead, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the incident owner and next check, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner on-call handoff note and less a responder repeating checks already completed."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The on-call handoff note and the current incident channel entry."
      },
      {
        "label": "Output",
        "text": "A dated on-call handoff note with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the incident owner and next check, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/record-an-on-call-escalation-handoff.webp"
  },
  "build-release-notes-from-merged-pull-requests": {
    "takeaways": [
      "Link every note line to a merged pull request.",
      "Describe the user impact, not the file change.",
      "Group internal refactors away from customer changes.",
      "Have the release manager approve the final wording."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the linked pull request and user impact and the date.",
        "notReady": "The lane has no written record for this check."
      },
      {
        "area": "Owner",
        "ready": "A named release manager owns the next step.",
        "notReady": "The lane has no written record for this check."
      }
    ],
    "sections": [
      {
        "id": "start-the-release-note-draft-at-the-point-of-work",
        "title": "Start the release note draft at the point of work",
        "paragraphs": [
          "Capture the case, the date, and the person handling it. State the source request and the merge log reference. An entry with no a source is not easy to trace. The form ought to hold the origin.",
          "Capture the the linked pull request and user impact before the item moves. State the time and the condition found. A later reconstruction leaves the question open. The form ought to hold the first check."
        ]
      },
      {
        "id": "match-the-release-note-draft-to-the-evidence",
        "title": "Match the release note draft to the evidence",
        "paragraphs": [
          "Compare the written entry with the merge log record and the physical item. State every difference and who checked it. A mismatch found after handoff costs more to fix. The form ought to hold the comparison.",
          "Capture the exception and the reason it occurred. State the person who approved the exception. An exception with no an approver becomes a precedent. The form ought to hold the decision."
        ]
      },
      {
        "id": "record-the-handoff-and-the-owner",
        "title": "Record the handoff and the owner",
        "paragraphs": [
          "Capture the handoff time, the receiving person, and any open item. State the next action and its deadline. A handoff with no a named owner leaves the question open. The form ought to hold the transfer.",
          "Capture the customer or internal message that went out. State the channel and the time. A verbal promise is not easy to prove later. The form ought to hold the message."
        ]
      },
      {
        "id": "review-the-release-note-draft-each-release",
        "title": "Review the release note draft each release",
        "paragraphs": [
          "Review the entries by release manager, reason, and outcome. A cluster may point to a template or a training gap. State the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the linked pull request and user impact, an owner, and a close. An entry missing any of them is the finding. Capture the gap and assign it. The next review should show a cleaner release note draft and less a user-facing change shipping without a description."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The release note draft and the current merge log entry."
      },
      {
        "label": "Output",
        "text": "A dated release note draft with an owner and a close."
      }
    ],
    "faqs": [
      {
        "question": "What makes the record complete?",
        "answer": "A dated entry with the linked pull request and user impact, a named owner, and a recorded outcome."
      }
    ],
    "sources": [
      {
        "name": "NIST, Secure Software Development Framework",
        "url": "https://csrc.nist.gov/projects/ssdf",
        "note": "publishes practices for secure software development"
      },
      {
        "name": "Open Web Application Security Project",
        "url": "https://owasp.org/",
        "note": "publishes application security guidance"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, Software Developers",
        "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
        "note": "describes the software development role"
      }
    ],
    "heroImage": "/nov24/blog/build-release-notes-from-merged-pull-requests.webp"
  }
};
