export const november23BlogBatch = [
  {
    "slug": "build-a-dependency-upgrade-log-with-a-rollback-tag",
    "title": "Build a dependency upgrade log with a rollback tag",
    "excerpt": "A dependency upgrade log that records the version, the test evidence, the rollback tag, and the owner, so a package change can be reversed without a search.",
    "minutes": 8,
    "published": "2026-11-23",
    "body": [
      "## Record the package and the version",
      "Record the package, the old version, the new version, and the reason for the upgrade. Note the security advisory or the feature that prompted it. A version without a reason is hard to prioritize. The log should show the source.",
      "Record the lockfile change and the direct and transitive dependencies affected. Note the person who reviewed the diff. A major upgrade can change more than the named package. The log should show the scope.",
      "## Record the test evidence",
      "Record the test suite, the environment, and the result. Note the cases that failed and the fix. An upgrade that passes unit tests may still break an integration. The log should show the evidence.",
      "Record the staging or canary result and the time. Note the metric that was checked. A green build is not the same as a healthy service. The log should show the runtime check.",
      "## Record the rollback tag and the path",
      "Record the tag or commit to return to and the command or pipeline that will run it. Note the person who tested the rollback. An untested rollback is a hope. The log should show the evidence.",
      "Record the data or schema dependency that could block a rollback. Note the owner and the mitigation. A package rollback that cannot reverse a migration is not safe. The log should show the boundary.",
      "## Review the upgrades each month",
      "Review the upgrades by package, result, and rollback test. A cluster may point to a stale dependency or a missing test. Record the pattern and one change. The review should not expose secrets.",
      "Check that every upgrade has a rollback tag and a test result. An upgrade without either is the finding. Record the gap and the owner. The next review should show a cleaner log."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-package-and-the-version",
        "title": "Record the package and the version",
        "paragraphs": [
          "Record the package, the old version, the new version, and the reason for the upgrade. Note the security advisory or the feature that prompted it. A version without a reason is hard to prioritize. The log should show the source.",
          "Record the lockfile change and the direct and transitive dependencies affected. Note the person who reviewed the diff. A major upgrade can change more than the named package. The log should show the scope."
        ]
      },
      {
        "id": "record-the-test-evidence",
        "title": "Record the test evidence",
        "paragraphs": [
          "Record the test suite, the environment, and the result. Note the cases that failed and the fix. An upgrade that passes unit tests may still break an integration. The log should show the evidence.",
          "Record the staging or canary result and the time. Note the metric that was checked. A green build is not the same as a healthy service. The log should show the runtime check."
        ]
      },
      {
        "id": "record-the-rollback-tag-and-the-path",
        "title": "Record the rollback tag and the path",
        "paragraphs": [
          "Record the tag or commit to return to and the command or pipeline that will run it. Note the person who tested the rollback. An untested rollback is a hope. The log should show the evidence.",
          "Record the data or schema dependency that could block a rollback. Note the owner and the mitigation. A package rollback that cannot reverse a migration is not safe. The log should show the boundary."
        ]
      },
      {
        "id": "review-the-upgrades-each-month",
        "title": "Review the upgrades each month",
        "paragraphs": [
          "Review the upgrades by package, result, and rollback test. A cluster may point to a stale dependency or a missing test. Record the pattern and one change. The review should not expose secrets.",
          "Check that every upgrade has a rollback tag and a test result. An upgrade without either is the finding. Record the gap and the owner. The next review should show a cleaner log."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/build-a-dependency-upgrade-log-with-a-rollback-tag.webp"
  },
  {
    "slug": "set-a-feature-flag-cleanup-checklist",
    "title": "Set a feature flag cleanup checklist",
    "excerpt": "A feature flag cleanup checklist that records the flag, the owner, the expiry, and the removal, so old flags do not become permanent branches.",
    "minutes": 8,
    "published": "2026-11-23",
    "body": [
      "## Record the flag and the owner",
      "Record the flag name, the service, the purpose, and the owner. Note the creation date and the planned removal. A flag without an owner is a permanent switch. The checklist should show the responsibility.",
      "Record the default state and the environments where it is enabled. Note the risk if the flag is left on or off. A flag that is unknown in production is a hidden branch. The checklist should show the state.",
      "## Record the rollout and the evidence",
      "Record the rollout percentage, the audience, and the monitoring. Note the metric that proves the feature works. A flag that is enabled without a check is a guess. The checklist should show the evidence.",
      "Record the decision to keep, expand, or remove the flag. Note the approver and the date. A flag that stays after the decision is technical debt. The checklist should show the outcome.",
      "## Remove the flag and the dead code",
      "Record the removal date, the pull request, and the test result. Note the old path that was deleted. A flag that is disabled but still in code is not removed. The checklist should show the code change.",
      "Record the cleanup of the configuration, the dashboards, and the tests. Note the owner. A removed flag that still appears in alerts confuses the next responder. The checklist should show the cleanup.",
      "## Review the flag list each quarter",
      "Review the active flags by owner, age, and state. A cluster of old flags may point to a release process problem. Record the pattern and one change. The review should not expose customer data.",
      "Check that every flag has an owner and a removal plan. A flag without either is the finding. Record the gap and the owner. The next review should show a shorter list."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-flag-and-the-owner",
        "title": "Record the flag and the owner",
        "paragraphs": [
          "Record the flag name, the service, the purpose, and the owner. Note the creation date and the planned removal. A flag without an owner is a permanent switch. The checklist should show the responsibility.",
          "Record the default state and the environments where it is enabled. Note the risk if the flag is left on or off. A flag that is unknown in production is a hidden branch. The checklist should show the state."
        ]
      },
      {
        "id": "record-the-rollout-and-the-evidence",
        "title": "Record the rollout and the evidence",
        "paragraphs": [
          "Record the rollout percentage, the audience, and the monitoring. Note the metric that proves the feature works. A flag that is enabled without a check is a guess. The checklist should show the evidence.",
          "Record the decision to keep, expand, or remove the flag. Note the approver and the date. A flag that stays after the decision is technical debt. The checklist should show the outcome."
        ]
      },
      {
        "id": "remove-the-flag-and-the-dead-code",
        "title": "Remove the flag and the dead code",
        "paragraphs": [
          "Record the removal date, the pull request, and the test result. Note the old path that was deleted. A flag that is disabled but still in code is not removed. The checklist should show the code change.",
          "Record the cleanup of the configuration, the dashboards, and the tests. Note the owner. A removed flag that still appears in alerts confuses the next responder. The checklist should show the cleanup."
        ]
      },
      {
        "id": "review-the-flag-list-each-quarter",
        "title": "Review the flag list each quarter",
        "paragraphs": [
          "Review the active flags by owner, age, and state. A cluster of old flags may point to a release process problem. Record the pattern and one change. The review should not expose customer data.",
          "Check that every flag has an owner and a removal plan. A flag without either is the finding. Record the gap and the owner. The next review should show a shorter list."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/set-a-feature-flag-cleanup-checklist.webp"
  },
  {
    "slug": "create-a-database-migration-dry-run-record",
    "title": "Create a database migration dry-run record",
    "excerpt": "A migration dry-run record that captures the schema change, the data volume, the timing, and the rollback, so a production migration is tested before it runs.",
    "minutes": 8,
    "published": "2026-11-23",
    "body": [
      "## Record the migration and the target",
      "Record the migration name, the database, the environment, and the schema change. Note the person who wrote it and the ticket. A migration without a target is hard to review. The record should show the change.",
      "Record the tables, the indexes, and the estimated row counts. Note the lock risk and the expected duration. A migration on a large table needs a different plan. The record should show the scale.",
      "## Run the dry run and record the result",
      "Record the dry-run environment, the data set, and the time. Note each step and the result. A dry run on an empty database proves very little. The record should show the data.",
      "Record the errors, the warnings, and the timing. Note the person who reviewed them. A warning that is ignored in the dry run becomes an incident in production. The record should show the response.",
      "## Record the rollback and the cutover",
      "Record the rollback statement and the time it takes on the test data. Note whether it was tested. A rollback that has never run is not a plan. The record should show the evidence.",
      "Record the cutover window, the owner, and the monitoring. Note the first check after the migration. A migration without a post-check is incomplete. The record should show the verification.",
      "## Review the migrations each month",
      "Review the migrations by table, duration, and rollback result. A cluster may point to a schema or a data problem. Record the pattern and one change. The review should not expose customer data.",
      "Check that every migration has a dry run and a rollback test. A migration without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-migration-and-the-target",
        "title": "Record the migration and the target",
        "paragraphs": [
          "Record the migration name, the database, the environment, and the schema change. Note the person who wrote it and the ticket. A migration without a target is hard to review. The record should show the change.",
          "Record the tables, the indexes, and the estimated row counts. Note the lock risk and the expected duration. A migration on a large table needs a different plan. The record should show the scale."
        ]
      },
      {
        "id": "run-the-dry-run-and-record-the-result",
        "title": "Run the dry run and record the result",
        "paragraphs": [
          "Record the dry-run environment, the data set, and the time. Note each step and the result. A dry run on an empty database proves very little. The record should show the data.",
          "Record the errors, the warnings, and the timing. Note the person who reviewed them. A warning that is ignored in the dry run becomes an incident in production. The record should show the response."
        ]
      },
      {
        "id": "record-the-rollback-and-the-cutover",
        "title": "Record the rollback and the cutover",
        "paragraphs": [
          "Record the rollback statement and the time it takes on the test data. Note whether it was tested. A rollback that has never run is not a plan. The record should show the evidence.",
          "Record the cutover window, the owner, and the monitoring. Note the first check after the migration. A migration without a post-check is incomplete. The record should show the verification."
        ]
      },
      {
        "id": "review-the-migrations-each-month",
        "title": "Review the migrations each month",
        "paragraphs": [
          "Review the migrations by table, duration, and rollback result. A cluster may point to a schema or a data problem. Record the pattern and one change. The review should not expose customer data.",
          "Check that every migration has a dry run and a rollback test. A migration without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/create-a-database-migration-dry-run-record.webp"
  },
  {
    "slug": "build-a-code-ownership-map-for-a-delegated-repo",
    "title": "Build a code ownership map for a delegated repo",
    "excerpt": "A code ownership map that names the owner, the backup, and the review rule for each area, so a delegated change reaches the right reviewer.",
    "minutes": 8,
    "published": "2026-11-23",
    "body": [
      "## Record the areas and the owners",
      "Record the repository, the directory, and the owner for each area. Note the backup and the escalation path. An area without an owner becomes an orphan. The map should show the responsibility.",
      "Record the review rule, such as one owner approval or a security review. Note the exception and the approver. A rule that is not written is applied inconsistently. The map should show the requirement.",
      "## Keep the map current",
      "Record the change when a person joins, leaves, or moves teams. Note the date and the person who updated the map. A stale map sends a review to the wrong person. The map should show the change.",
      "Record the areas with no recent reviewer and the reason. Note the owner who will fix it. An orphan area is a delivery risk. The map should show the gap.",
      "## Use the map in the review",
      "Record the owner who reviewed each change and the time. Note any change reviewed outside the map. An exception that is not recorded is a finding. The map should show the practice.",
      "Record the review load by owner and the backlog. Note the owner who is overloaded. A map that ignores capacity creates a bottleneck. The map should show the load.",
      "## Review the map each quarter",
      "Review the owners, the orphans, and the exceptions. Record the count and one change. A map that is never reviewed drifts. The review should not expose performance data.",
      "Check that every area has an owner and a backup. An area without either is the finding. Record the gap and the owner. The next review should show a cleaner map."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-areas-and-the-owners",
        "title": "Record the areas and the owners",
        "paragraphs": [
          "Record the repository, the directory, and the owner for each area. Note the backup and the escalation path. An area without an owner becomes an orphan. The map should show the responsibility.",
          "Record the review rule, such as one owner approval or a security review. Note the exception and the approver. A rule that is not written is applied inconsistently. The map should show the requirement."
        ]
      },
      {
        "id": "keep-the-map-current",
        "title": "Keep the map current",
        "paragraphs": [
          "Record the change when a person joins, leaves, or moves teams. Note the date and the person who updated the map. A stale map sends a review to the wrong person. The map should show the change.",
          "Record the areas with no recent reviewer and the reason. Note the owner who will fix it. An orphan area is a delivery risk. The map should show the gap."
        ]
      },
      {
        "id": "use-the-map-in-the-review",
        "title": "Use the map in the review",
        "paragraphs": [
          "Record the owner who reviewed each change and the time. Note any change reviewed outside the map. An exception that is not recorded is a finding. The map should show the practice.",
          "Record the review load by owner and the backlog. Note the owner who is overloaded. A map that ignores capacity creates a bottleneck. The map should show the load."
        ]
      },
      {
        "id": "review-the-map-each-quarter",
        "title": "Review the map each quarter",
        "paragraphs": [
          "Review the owners, the orphans, and the exceptions. Record the count and one change. A map that is never reviewed drifts. The review should not expose performance data.",
          "Check that every area has an owner and a backup. An area without either is the finding. Record the gap and the owner. The next review should show a cleaner map."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/build-a-code-ownership-map-for-a-delegated-repo.webp"
  },
  {
    "slug": "track-a-staging-bug-from-report-to-release",
    "title": "Track a staging bug from report to release",
    "excerpt": "A staging bug record that ties the report, the reproduction, the fix, and the release, so a defect is not closed before it reaches production.",
    "minutes": 8,
    "published": "2026-11-23",
    "body": [
      "## Record the report and the reproduction",
      "Record the build, the environment, the steps, and the observed result. Note the reporter and the time. A bug without a build is hard to reproduce. The record should show the version.",
      "Record the expected result and the impact. Note the severity and the owner. A severity chosen by feel invites a debate. The record should show the reason.",
      "## Record the fix and the test",
      "Record the fix, the pull request, and the test that covers the case. Note the reviewer and the time. A fix without a test can return. The record should show the evidence.",
      "Record the staging retest and the result. Note the person who verified it. A fix that is not retested is not confirmed. The record should show the check.",
      "## Record the release and the production check",
      "Record the release version and the date the fix reached production. Note the person who confirmed it. A bug closed at staging may never ship. The record should show the release.",
      "Record the production verification and the metric. Note any regression. A release without a check leaves the fix unproven. The record should show the result.",
      "## Review the bugs each month",
      "Review the bugs by area, severity, and time to release. A cluster may point to a test or a process gap. Record the pattern and one change. The review should not rank developers.",
      "Check that every closed bug has a release reference. A bug closed without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-report-and-the-reproduction",
        "title": "Record the report and the reproduction",
        "paragraphs": [
          "Record the build, the environment, the steps, and the observed result. Note the reporter and the time. A bug without a build is hard to reproduce. The record should show the version.",
          "Record the expected result and the impact. Note the severity and the owner. A severity chosen by feel invites a debate. The record should show the reason."
        ]
      },
      {
        "id": "record-the-fix-and-the-test",
        "title": "Record the fix and the test",
        "paragraphs": [
          "Record the fix, the pull request, and the test that covers the case. Note the reviewer and the time. A fix without a test can return. The record should show the evidence.",
          "Record the staging retest and the result. Note the person who verified it. A fix that is not retested is not confirmed. The record should show the check."
        ]
      },
      {
        "id": "record-the-release-and-the-production-check",
        "title": "Record the release and the production check",
        "paragraphs": [
          "Record the release version and the date the fix reached production. Note the person who confirmed it. A bug closed at staging may never ship. The record should show the release.",
          "Record the production verification and the metric. Note any regression. A release without a check leaves the fix unproven. The record should show the result."
        ]
      },
      {
        "id": "review-the-bugs-each-month",
        "title": "Review the bugs each month",
        "paragraphs": [
          "Review the bugs by area, severity, and time to release. A cluster may point to a test or a process gap. Record the pattern and one change. The review should not rank developers.",
          "Check that every closed bug has a release reference. A bug closed without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/track-a-staging-bug-from-report-to-release.webp"
  }
];

export const november23BlogDetails = {
  "build-a-dependency-upgrade-log-with-a-rollback-tag": {
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-package-and-the-version",
        "title": "Record the package and the version",
        "paragraphs": [
          "Record the package, the old version, the new version, and the reason for the upgrade. Note the security advisory or the feature that prompted it. A version without a reason is hard to prioritize. The log should show the source.",
          "Record the lockfile change and the direct and transitive dependencies affected. Note the person who reviewed the diff. A major upgrade can change more than the named package. The log should show the scope."
        ]
      },
      {
        "id": "record-the-test-evidence",
        "title": "Record the test evidence",
        "paragraphs": [
          "Record the test suite, the environment, and the result. Note the cases that failed and the fix. An upgrade that passes unit tests may still break an integration. The log should show the evidence.",
          "Record the staging or canary result and the time. Note the metric that was checked. A green build is not the same as a healthy service. The log should show the runtime check."
        ]
      },
      {
        "id": "record-the-rollback-tag-and-the-path",
        "title": "Record the rollback tag and the path",
        "paragraphs": [
          "Record the tag or commit to return to and the command or pipeline that will run it. Note the person who tested the rollback. An untested rollback is a hope. The log should show the evidence.",
          "Record the data or schema dependency that could block a rollback. Note the owner and the mitigation. A package rollback that cannot reverse a migration is not safe. The log should show the boundary."
        ]
      },
      {
        "id": "review-the-upgrades-each-month",
        "title": "Review the upgrades each month",
        "paragraphs": [
          "Review the upgrades by package, result, and rollback test. A cluster may point to a stale dependency or a missing test. Record the pattern and one change. The review should not expose secrets.",
          "Check that every upgrade has a rollback tag and a test result. An upgrade without either is the finding. Record the gap and the owner. The next review should show a cleaner log."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/build-a-dependency-upgrade-log-with-a-rollback-tag.webp"
  },
  "set-a-feature-flag-cleanup-checklist": {
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-flag-and-the-owner",
        "title": "Record the flag and the owner",
        "paragraphs": [
          "Record the flag name, the service, the purpose, and the owner. Note the creation date and the planned removal. A flag without an owner is a permanent switch. The checklist should show the responsibility.",
          "Record the default state and the environments where it is enabled. Note the risk if the flag is left on or off. A flag that is unknown in production is a hidden branch. The checklist should show the state."
        ]
      },
      {
        "id": "record-the-rollout-and-the-evidence",
        "title": "Record the rollout and the evidence",
        "paragraphs": [
          "Record the rollout percentage, the audience, and the monitoring. Note the metric that proves the feature works. A flag that is enabled without a check is a guess. The checklist should show the evidence.",
          "Record the decision to keep, expand, or remove the flag. Note the approver and the date. A flag that stays after the decision is technical debt. The checklist should show the outcome."
        ]
      },
      {
        "id": "remove-the-flag-and-the-dead-code",
        "title": "Remove the flag and the dead code",
        "paragraphs": [
          "Record the removal date, the pull request, and the test result. Note the old path that was deleted. A flag that is disabled but still in code is not removed. The checklist should show the code change.",
          "Record the cleanup of the configuration, the dashboards, and the tests. Note the owner. A removed flag that still appears in alerts confuses the next responder. The checklist should show the cleanup."
        ]
      },
      {
        "id": "review-the-flag-list-each-quarter",
        "title": "Review the flag list each quarter",
        "paragraphs": [
          "Review the active flags by owner, age, and state. A cluster of old flags may point to a release process problem. Record the pattern and one change. The review should not expose customer data.",
          "Check that every flag has an owner and a removal plan. A flag without either is the finding. Record the gap and the owner. The next review should show a shorter list."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/set-a-feature-flag-cleanup-checklist.webp"
  },
  "create-a-database-migration-dry-run-record": {
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-migration-and-the-target",
        "title": "Record the migration and the target",
        "paragraphs": [
          "Record the migration name, the database, the environment, and the schema change. Note the person who wrote it and the ticket. A migration without a target is hard to review. The record should show the change.",
          "Record the tables, the indexes, and the estimated row counts. Note the lock risk and the expected duration. A migration on a large table needs a different plan. The record should show the scale."
        ]
      },
      {
        "id": "run-the-dry-run-and-record-the-result",
        "title": "Run the dry run and record the result",
        "paragraphs": [
          "Record the dry-run environment, the data set, and the time. Note each step and the result. A dry run on an empty database proves very little. The record should show the data.",
          "Record the errors, the warnings, and the timing. Note the person who reviewed them. A warning that is ignored in the dry run becomes an incident in production. The record should show the response."
        ]
      },
      {
        "id": "record-the-rollback-and-the-cutover",
        "title": "Record the rollback and the cutover",
        "paragraphs": [
          "Record the rollback statement and the time it takes on the test data. Note whether it was tested. A rollback that has never run is not a plan. The record should show the evidence.",
          "Record the cutover window, the owner, and the monitoring. Note the first check after the migration. A migration without a post-check is incomplete. The record should show the verification."
        ]
      },
      {
        "id": "review-the-migrations-each-month",
        "title": "Review the migrations each month",
        "paragraphs": [
          "Review the migrations by table, duration, and rollback result. A cluster may point to a schema or a data problem. Record the pattern and one change. The review should not expose customer data.",
          "Check that every migration has a dry run and a rollback test. A migration without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/create-a-database-migration-dry-run-record.webp"
  },
  "build-a-code-ownership-map-for-a-delegated-repo": {
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-areas-and-the-owners",
        "title": "Record the areas and the owners",
        "paragraphs": [
          "Record the repository, the directory, and the owner for each area. Note the backup and the escalation path. An area without an owner becomes an orphan. The map should show the responsibility.",
          "Record the review rule, such as one owner approval or a security review. Note the exception and the approver. A rule that is not written is applied inconsistently. The map should show the requirement."
        ]
      },
      {
        "id": "keep-the-map-current",
        "title": "Keep the map current",
        "paragraphs": [
          "Record the change when a person joins, leaves, or moves teams. Note the date and the person who updated the map. A stale map sends a review to the wrong person. The map should show the change.",
          "Record the areas with no recent reviewer and the reason. Note the owner who will fix it. An orphan area is a delivery risk. The map should show the gap."
        ]
      },
      {
        "id": "use-the-map-in-the-review",
        "title": "Use the map in the review",
        "paragraphs": [
          "Record the owner who reviewed each change and the time. Note any change reviewed outside the map. An exception that is not recorded is a finding. The map should show the practice.",
          "Record the review load by owner and the backlog. Note the owner who is overloaded. A map that ignores capacity creates a bottleneck. The map should show the load."
        ]
      },
      {
        "id": "review-the-map-each-quarter",
        "title": "Review the map each quarter",
        "paragraphs": [
          "Review the owners, the orphans, and the exceptions. Record the count and one change. A map that is never reviewed drifts. The review should not expose performance data.",
          "Check that every area has an owner and a backup. An area without either is the finding. Record the gap and the owner. The next review should show a cleaner map."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/build-a-code-ownership-map-for-a-delegated-repo.webp"
  },
  "track-a-staging-bug-from-report-to-release": {
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "readinessRows": [
      {
        "area": "Evidence",
        "ready": "The record names the source and date."
      },
      {
        "area": "Owner",
        "ready": "A named person owns the next step."
      }
    ],
    "sections": [
      {
        "id": "record-the-report-and-the-reproduction",
        "title": "Record the report and the reproduction",
        "paragraphs": [
          "Record the build, the environment, the steps, and the observed result. Note the reporter and the time. A bug without a build is hard to reproduce. The record should show the version.",
          "Record the expected result and the impact. Note the severity and the owner. A severity chosen by feel invites a debate. The record should show the reason."
        ]
      },
      {
        "id": "record-the-fix-and-the-test",
        "title": "Record the fix and the test",
        "paragraphs": [
          "Record the fix, the pull request, and the test that covers the case. Note the reviewer and the time. A fix without a test can return. The record should show the evidence.",
          "Record the staging retest and the result. Note the person who verified it. A fix that is not retested is not confirmed. The record should show the check."
        ]
      },
      {
        "id": "record-the-release-and-the-production-check",
        "title": "Record the release and the production check",
        "paragraphs": [
          "Record the release version and the date the fix reached production. Note the person who confirmed it. A bug closed at staging may never ship. The record should show the release.",
          "Record the production verification and the metric. Note any regression. A release without a check leaves the fix unproven. The record should show the result."
        ]
      },
      {
        "id": "review-the-bugs-each-month",
        "title": "Review the bugs each month",
        "paragraphs": [
          "Review the bugs by area, severity, and time to release. A cluster may point to a test or a process gap. Record the pattern and one change. The review should not rank developers.",
          "Check that every closed bug has a release reference. A bug closed without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Input",
        "text": "The ticket and the current record."
      },
      {
        "label": "Output",
        "text": "A dated note with an owner and an action."
      }
    ],
    "faqs": [
      {
        "question": "What counts as complete?",
        "answer": "A record with the source, the date, the owner, and the outcome."
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
    "heroImage": "/nov23/blog/track-a-staging-bug-from-report-to-release.webp"
  }
};
