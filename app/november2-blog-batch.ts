// "heading": "Article sections"
export const november2BlogBatch = [
  {
    "slug": "outsourcedprogrammers-pull-request-scope-review",
    "title": "Review pull request scope before merging outsourced work",
    "excerpt": "A field guide for managers who need the diff, the ticket, and the release record to describe the same change before a pull request is merged.",
    "minutes": 9,
    "published": "2026-11-02"
  },
  {
    "slug": "outsourcedprogrammers-legacy-code-read-only-recon",
    "title": "Open legacy code with a read-only reconnaissance ticket",
    "excerpt": "Use a bounded, read-only first assignment to map an unfamiliar system before an outsourced programmer changes a line of production code.",
    "minutes": 9,
    "published": "2026-11-02"
  },
  {
    "slug": "outsourcedprogrammers-production-hotfix-approval-lane",
    "title": "Run a production hotfix lane without moving release authority",
    "excerpt": "A practical hotfix path for outsourced programmers that keeps diagnosis fast while merge, production access, and release approval stay with the client.",
    "minutes": 9,
    "published": "2026-11-02"
  },
  {
    "slug": "outsourcedprogrammers-release-rollback-rehearsal",
    "title": "Rehearse rollback before an outsourced release",
    "excerpt": "Test the recovery path, not just the release checklist, so an outsourced change can be reversed with known data, access, and timing constraints.",
    "minutes": 8,
    "published": "2026-11-02"
  },
  {
    "slug": "outsourcedprogrammers-qa-evidence-sprint-handoff",
    "title": "Make QA evidence survive the next sprint handoff",
    "excerpt": "A durable evidence format for outsourced QA work so a new reviewer can reproduce a result without asking the original tester what happened.",
    "minutes": 8,
    "published": "2026-11-02"
  }
] as const;

export const november2BlogDetails = {
  "outsourcedprogrammers-pull-request-scope-review": {
    "takeaways": [
      "Compare the changed files and exported interfaces with the ticket before reading style comments.",
      "Treat dependency, migration, configuration, and permission edits as scope changes that need an explicit owner decision.",
      "Split unrelated improvements into a follow-up branch instead of hiding them in an approved fix.",
      "Record the merge decision against the reviewed commit so a later push cannot silently replace the evidence."
    ],
    "readinessRows": [
      {
        "area": "Ticket link",
        "ready": "The pull request names the ticket, expected behavior, and affected surface.",
        "notReady": "The description says only that a fix or cleanup was requested."
      },
      {
        "area": "Diff boundary",
        "ready": "Changed files match the named module, route, or job.",
        "notReady": "Unrelated formatting, dependency, or infrastructure edits appear in the same diff."
      },
      {
        "area": "Test delta",
        "ready": "New or updated checks cover the behavior that changed.",
        "notReady": "The only evidence is a green pipeline that did not exercise the changed path."
      },
      {
        "area": "Merge authority",
        "ready": "The client reviewer approves the exact commit and records any follow-up.",
        "notReady": "A bot, a shared account, or the author alone closes the change."
      }
    ],
    "sections": [
      {
        "id": "map-the-diff-to-the-ticket",
        "title": "Map the diff to the ticket",
        "paragraphs": [
          "Begin with a file-level inventory rather than the pull request title. The reviewer should see which routes, components, jobs, migrations, configuration files, and tests moved, then compare that list with the work the ticket authorized. A title can summarize a change in five words; the file list shows whether the branch also touched authentication, billing, data retention, or deployment settings that nobody discussed. Ask the author to mark every changed file as required by the ticket, required by a test, or unrelated. That three-way split is more useful than a line count because a small edit to a permission map can carry more risk than a large rename in one component. If the author cannot explain why a file is in the diff, stop the review and resolve the boundary before discussing implementation quality. The ticket should name the user-visible behavior and the system boundary. A pull request that changes both an API response and the client rendering of that response needs evidence for both sides, even when the same developer wrote them. Reviewers who inspect only the final screen can miss a contract change that breaks another consumer."
        ]
      },
      {
        "id": "find-hidden-scope-in-configuration",
        "title": "Find hidden scope in configuration",
        "paragraphs": [
          "Configuration and dependency edits deserve their own review pass. A package upgrade can change transitive behavior, a timeout can alter retry volume, and a feature flag can expose a path that was never tested. The author should identify the version change, the reason, the affected environments, and the rollback condition instead of leaving the change inside a broad maintenance commit. Database migrations are similarly easy to misfile as implementation detail. A reversible column addition is not the same as a backfill, a constraint change, or a destructive rename. The review should state whether the migration runs before, during, or after the application deploy, who can stop it, and what evidence proves the old and new code can coexist during the transition. Permission and infrastructure files should name the role, resource, and duration involved. If the pull request expands a service account, creates a public route, or changes a scheduled job, the client owner needs a separate decision even when the code itself is small. Hidden scope is not only extra work; it is often extra authority."
        ]
      },
      {
        "id": "test-the-boundary-not-only-the-happy-path",
        "title": "Test the boundary, not only the happy path",
        "paragraphs": [
          "A green pipeline is useful only when it exercised the changed behavior. Ask which test failed before the fix, which test now passes, and which neighboring behavior could regress. For a form validation change, the evidence should include invalid values, server-side rejection, keyboard behavior, and the error message a user sees. A screenshot of the successful submission is not enough.",
          "The reviewer should also inspect what the tests do not cover. Browser-specific behavior, time-zone transitions, large payloads, permission failures, and retry exhaustion often sit outside a fast unit suite. If those conditions matter to the ticket, record a manual check or a follow-up test rather than implying that the entire path is proven. Keep the evidence attached to the commit under review. A test run from an earlier commit, a local screenshot without a branch name, or a chat message that says everything works cannot support the merge decision. The reviewer needs a reproducible link between the code, the environment, and the observed result."
        ]
      },
      {
        "id": "decide-between-split-and-accept",
        "title": "Decide between split and accept",
        "paragraphs": [
          "When the extra change is small, safe, and directly enables the ticket, accepting it may be reasonable. The decision still needs a sentence in the review that names the addition and the reason it belongs here. That sentence protects the next reviewer from discovering an undocumented dependency between two apparently unrelated edits. When the addition changes a public contract, a data model, a security control, or a release process, split it. A follow-up branch gives the team a smaller review surface, a separate rollout decision, and a cleaner rollback point. Splitting is not bureaucracy when the alternative is an approval that technically covers work nobody examined. Set a practical threshold in advance: any new dependency, migration, infrastructure resource, or permission change requires a separate approval path. The team can then review ordinary fixes quickly without pretending that every line has equal risk. The rule should be written in the repository guide so an outsourced contributor can apply it before opening the pull request."
        ]
      },
      {
        "id": "close-with-a-merge-record",
        "title": "Close with a merge record",
        "paragraphs": [
          "The merge record should identify the reviewed commit, the approver, the checks that passed, and the follow-up items that remain. If the branch changes after approval, the approval should not automatically carry forward. Protected branches and required reviews help, but they do not replace a human check that the reviewed commit is the commit being merged. After merge, verify the deployed artifact or release note points to the same change. A commit hash in the repository and a version in the release system are different pieces of evidence; the team should be able to connect them. If the deployment system builds from a tag or a different branch, record that path explicitly. Finally, compare the completed work with the ticket's acceptance notes. A merged pull request is not a closed outcome if the behavior was never observed in the intended environment. Close the loop with one line about what was verified, what was deferred, and who owns the next check."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "First pass",
        "text": "Read the file inventory and confirm that every changed area belongs to the ticket."
      },
      {
        "label": "Evidence",
        "text": "Link the failing check, the passing check, the reviewed commit, and any manual observation."
      },
      {
        "label": "Boundary",
        "text": "Dependency, migration, infrastructure, permission, and public-contract changes need a separate owner decision."
      },
      {
        "label": "Close",
        "text": "Record the approved commit and verify that the deployed artifact came from it."
      }
    ],
    "faqs": [
      {
        "question": "Should a reviewer reject every unrelated edit?",
        "answer": "No. A small enabling edit can stay when the review names it and the owner accepts the added risk. Contract, data, permission, and infrastructure changes should normally move to a separate branch."
      },
      {
        "question": "What if the author cannot explain a changed file?",
        "answer": "Pause the merge. An unexplained file is an unresolved scope question, not a documentation nicety, because the reviewer cannot assess the change or its rollback."
      },
      {
        "question": "Does a green pipeline replace manual review?",
        "answer": "No. The pipeline proves only the checks it ran. The reviewer still needs to confirm that the changed behavior and its important edge cases were exercised."
      }
    ],
    "sources": [
      {
        "name": "GitHub Docs: About pull request reviews",
        "url": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
        "note": "Review workflow and approval concepts used to frame the merge record."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Risk-based development and review practices referenced for change control."
      },
      {
        "name": "SLSA specification",
        "url": "https://slsa.dev/spec/",
        "note": "Provenance concepts used when connecting a reviewed commit to a built artifact."
      },
      {
        "name": "OpenSSF Scorecard",
        "url": "https://scorecard.dev/",
        "note": "Repository hygiene checks that inform branch and review controls."
      }
    ],
    "heroImage": "/nov02/blog/outsourcedprogrammers-pull-request-scope-review.webp",
    "strictNoPricing": true
  },
  "outsourcedprogrammers-legacy-code-read-only-recon": {
    "takeaways": [
      "Make the first legacy assignment an investigation with a named artifact, not an open-ended request to understand the system.",
      "Keep the reconnaissance read-only so access can be limited and the result can be reviewed without a deployment.",
      "Map entry points, data stores, configuration, tests, and ownership before proposing a code change.",
      "End with a decision-ready brief that separates confirmed behavior from assumptions and open questions."
    ],
    "readinessRows": [
      {
        "area": "Question",
        "ready": "One named flow, failure, or module with a reason to inspect it.",
        "notReady": "A request to modernize or understand the whole legacy system."
      },
      {
        "area": "Access",
        "ready": "Read-only repository, logs, and diagrams scoped to the named flow.",
        "notReady": "Production write access or shared administrator credentials."
      },
      {
        "area": "Artifact",
        "ready": "A map, call path, data dictionary, and question log delivered in the repository.",
        "notReady": "An oral summary that disappears after the call."
      },
      {
        "area": "Exit",
        "ready": "A reviewed finding and one bounded next ticket.",
        "notReady": "An immediate rewrite proposal without evidence."
      }
    ],
    "sections": [
      {
        "id": "define-one-question",
        "title": "Define one question",
        "paragraphs": [
          "A legacy reconnaissance ticket works best when it names a single question the business can recognize. For example: why does an invoice export omit credit notes, or which service owns the retry that duplicates email notifications? A question tied to an observed symptom gives the investigator a trail to follow and gives the reviewer a way to judge whether the investigation is complete. Avoid assigning the entire repository as the subject. Broad discovery produces long notes with no decision and invites access that the team does not need. Start with one route, job, integration, or batch process and name the environments where it runs. The smaller boundary does not prevent the specialist from noticing adjacent problems; it gives those observations a place to be logged rather than folded into an invisible expansion. Write down what is already believed and label it as a hypothesis. The investigator can then confirm, contradict, or leave the belief unresolved. That structure is more useful than asking for a fresh explanation with no baseline, because it exposes where the team's mental model and the code disagree."
        ]
      },
      {
        "id": "keep-the-first-pass-read-only",
        "title": "Keep the first pass read-only",
        "paragraphs": [
          "Read-only access reduces both operational risk and review burden. The specialist can inspect source, commit history, issue links, sanitized logs, configuration names, and database schema without changing a record or deploying a branch. If the investigation needs a query, define it against a read replica or an approved export rather than production credentials with broad write scope. A read-only assignment also makes the evidence easier to trust. The reviewer does not have to wonder whether the system changed during the investigation or whether a test record was created by the investigator. The output is a description of the system as it existed at a recorded time, plus a list of what could not be observed.",
          "Some legacy systems make even read access sensitive. Customer records, payment details, health information, and credentials may appear in logs or fixtures. Use masked extracts and record the access path instead of copying sensitive values into the deliverable. The reconnaissance note should say what was reviewed and what was deliberately excluded."
        ]
      },
      {
        "id": "map-five-artifacts",
        "title": "Map five artifacts",
        "paragraphs": [
          "Ask for five compact artifacts: the entry point, the call path, the data touched, the configuration that changes behavior, and the tests or checks that currently cover the path. The entry point may be a route, queue consumer, cron job, webhook, or manual admin action. The call path should name the services and modules in order without reproducing the entire codebase. The data section should identify stores, tables, queues, buckets, and external APIs, including which fields are read and written. Configuration should list environment variables, feature flags, timeouts, and limits by name and purpose, never by secret value. The test section should distinguish automated coverage from manual checks and note the last known evidence date. Add a sixth artifact only if the system requires it, such as a deployment diagram or a list of scheduled jobs. Keeping the template small makes the result comparable across investigations and prevents the deliverable from becoming a second, stale documentation project."
        ]
      },
      {
        "id": "separate-fact-from-assumption",
        "title": "Separate fact from assumption",
        "paragraphs": [
          "A useful reconnaissance note marks each statement as observed in code, observed in a runtime record, reported by an owner, or inferred. Those labels matter because legacy behavior is often maintained by a workaround that no current developer designed. An inference can be a good lead, but it should not be presented with the same confidence as a log line or a test result. Record the commit, build, or environment version used for the review. Legacy systems often have long-lived branches, patched deployments, and configuration that differs from the repository default. Without a version marker, a later reader cannot tell whether the map describes the system in production or an older copy.",
          "Keep an open-questions list with an owner for each item. Some questions need a current employee, some need a vendor, and some need a controlled experiment. The list is a sign of a careful investigation, not a failure to finish. It gives the client a concrete choice about what to resolve before authorizing a code change."
        ]
      },
      {
        "id": "end-with-one-bounded-next-step",
        "title": "End with one bounded next step",
        "paragraphs": [
          "The reconnaissance should conclude with a recommendation that fits the evidence. That may be a small fix, a test that reproduces the symptom, a monitoring gap to close, or a decision to leave the behavior alone. Avoid turning the first read-only ticket into a stealth rewrite proposal; a rewrite needs its own scope, risk review, and funding decision. Review the artifact with the technical owner and the person who operates the flow. Their corrections are part of the evidence and should be recorded with a date. If the map changes their understanding, capture the change rather than quietly updating the diagram and losing the reason for the next decision. Close by opening one follow-up ticket with explicit acceptance criteria and a named reviewer. The legacy map then becomes an input to controlled work instead of a document that is filed and forgotten."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "First assignment",
        "text": "Investigate one named flow and produce a versioned map, not a code change."
      },
      {
        "label": "Access",
        "text": "Read-only repository, sanitized logs, schema, and diagrams; no production writes."
      },
      {
        "label": "Evidence",
        "text": "Label observed facts, owner statements, inferences, and unresolved questions."
      },
      {
        "label": "Exit",
        "text": "The client owner reviews the map and approves one bounded follow-up ticket."
      }
    ],
    "faqs": [
      {
        "question": "How long should reconnaissance take?",
        "answer": "Set a short fixed window tied to one flow. If the map is incomplete at the end, report the gaps and decide whether a second pass is worth the access and time."
      },
      {
        "question": "Can the specialist propose a rewrite?",
        "answer": "They can record the option and the evidence for it, but a rewrite needs a separate scope and business decision. The read-only ticket should not become an implicit authorization."
      },
      {
        "question": "What if the system has no tests?",
        "answer": "Record that as a finding. Identify the nearest manual check, monitoring signal, or reproduction path, and treat test creation as a possible follow-up rather than pretending coverage exists."
      }
    ],
    "sources": [
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Practices for understanding and managing software risk before change."
      },
      {
        "name": "Microsoft Security Development Lifecycle",
        "url": "https://www.microsoft.com/en-us/securityengineering/sdl/practices",
        "note": "Secure development practices referenced for legacy assessment."
      },
      {
        "name": "Google Technical Writing courses",
        "url": "https://developers.google.com/tech-writing",
        "note": "Guidance for producing a concise, reviewable technical artifact."
      },
      {
        "name": "GitHub Docs: About repositories",
        "url": "https://docs.github.com/en/repositories",
        "note": "Repository and history concepts used to scope read-only inspection."
      }
    ],
    "heroImage": "/nov02/blog/outsourcedprogrammers-legacy-code-read-only-recon.webp",
    "strictNoPricing": true
  },
  "outsourcedprogrammers-production-hotfix-approval-lane": {
    "takeaways": [
      "Separate the emergency diagnosis path from the normal feature queue, but keep the same ownership of merge and release.",
      "Start from the deployed artifact and a named severity so the hotfix cannot drift into unrelated cleanup.",
      "Require one reproducible check, one rollback note, and one client approver before production access expands.",
      "Run a follow-up review after the incident so speed does not permanently weaken the normal control set."
    ],
    "readinessRows": [
      {
        "area": "Trigger",
        "ready": "A named severity, customer impact, and incident owner.",
        "notReady": "A general request to fix something quickly."
      },
      {
        "area": "Branch point",
        "ready": "The hotfix starts from the deployed tag or commit.",
        "notReady": "The branch starts from an unreviewed local main."
      },
      {
        "area": "Evidence",
        "ready": "A focused reproduction, test result, and rollback note.",
        "notReady": "A verbal assurance that the change is small."
      },
      {
        "area": "Authority",
        "ready": "A named client approver authorizes merge and production action.",
        "notReady": "The outsourced author deploys because the incident feels urgent."
      }
    ],
    "sections": [
      {
        "id": "name-the-emergency-boundary",
        "title": "Name the emergency boundary",
        "paragraphs": [
          "A hotfix lane needs an entry rule that is more specific than urgency. Define which severity levels, customer effects, or failed controls qualify, and name the person who can declare the lane active. The declaration should include the incident identifier, the affected service, the observed start time, and the current workaround. Without that record, every inconvenient bug becomes an emergency and the normal review path quietly disappears.",
          "The person who diagnoses the issue does not have to be the person who approves the production change. An outsourced programmer can gather logs, reproduce the failure, and prepare a narrow patch while the client incident owner coordinates communication and release. Keeping those roles separate preserves speed without transferring accountability to the contributor. Write down what the hotfix may not touch. Authentication policy, billing rules, customer data deletion, and organization-wide permissions should stay outside an emergency patch unless the incident owner explicitly expands the scope. The safe default is to restore service with the smallest reversible change and handle structural cleanup later."
        ]
      },
      {
        "id": "branch-from-what-is-deployed",
        "title": "Branch from what is deployed",
        "paragraphs": [
          "A hotfix should start from the artifact currently serving traffic, not from whatever happens to be newest in the main branch. Use the release tag, deployed commit, or build identifier recorded by the deployment system. Starting elsewhere can mix unreleased features into the emergency change and make rollback ambiguous. Confirm the relationship between the repository commit and the running artifact before editing. If the deploy pipeline adds generated files, environment-specific configuration, or a separate frontend build, record those steps. The reviewer needs to know that the patch will produce the intended artifact, not merely that the source compiles locally. Create a branch with a name tied to the incident and keep the diff minimal. Formatting changes, dependency upgrades, and opportunistic refactors should wait. If the patch requires a dependency change, the incident owner should approve it as a distinct risk decision with its own verification and rollback path."
        ]
      },
      {
        "id": "prove-the-failure-and-the-fix",
        "title": "Prove the failure and the fix",
        "paragraphs": [
          "The diagnosis should show the failure before the patch and the intended behavior after it. That may be a failing regression test, a captured response from a staging reproduction, or a log pattern that changes under a controlled condition. The evidence should identify the environment and the input that triggered the problem so another reviewer can repeat the observation. One focused check is usually better than a broad test sweep during an incident. Choose the check that exercises the broken path and the nearest boundary that could be affected by the fix. If the change touches a shared component, add a smoke check for one consumer outside the incident path. Record what was not tested so the later review can decide whether more evidence is needed. Write the rollback note before release. It should name the previous artifact, the data or configuration condition that would make rollback unsafe, and the person who can authorize it. A hotfix without a rollback path is not faster; it simply moves the decision to the most stressful moment."
        ]
      },
      {
        "id": "keep-approval-with-the-client",
        "title": "Keep approval with the client",
        "paragraphs": [
          "The client approver should review the exact patch, the reproduction, the check result, and the rollback note. Approval can be quick, but it should be explicit and recorded in the incident or pull request. A message that says proceed without identifying the commit leaves the release system and the review record disconnected. Production credentials and deployment actions remain client-controlled. If the outsourced contributor needs to observe production, grant a time-limited, read-only role with an audit trail. If the client asks the contributor to press the deploy button, that is a separate access decision, not an automatic part of the hotfix lane. After release, verify the user-visible behavior and the service signals that defined the incident. Record the deployment identifier, the check time, and the result. If the fix restores one path but leaves a related error unresolved, keep the incident open with an owner rather than declaring success from a single green signal."
        ]
      },
      {
        "id": "review-the-lane-after-the-incident",
        "title": "Review the lane after the incident",
        "paragraphs": [
          "Hold a short follow-up review within a few days. Ask whether the trigger was accurate, whether the diff stayed within scope, whether the evidence was sufficient, and whether the rollback note would have worked. The goal is not to blame the person who responded; it is to find where the normal process failed to prevent or detect the issue. Move structural cleanup into ordinary tickets with normal review and testing. A hotfix often reveals a missing test, a weak alert, an unclear owner, or a deployment step that exists only in someone's memory. Those findings should become bounded work, not permanent exceptions justified by the next emergency. Update the lane only when the review shows a specific gap. Adding more approvals to every hotfix can slow response without improving safety. A better change might be a clearer severity rule, a prebuilt rollback command, or a read-only observability role that lets the contributor diagnose without waiting for access."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Incident entry",
        "text": "Use a named severity and incident owner; do not let schedule pressure define an emergency."
      },
      {
        "label": "Patch boundary",
        "text": "Branch from the deployed artifact and keep the diff limited to service restoration."
      },
      {
        "label": "Evidence",
        "text": "Show the failure, the focused fix check, and the rollback condition before release."
      },
      {
        "label": "Authority",
        "text": "The client approves the exact commit and controls production deployment and access."
      }
    ],
    "faqs": [
      {
        "question": "Can a hotfix skip tests?",
        "answer": "It can skip a broad regression suite when time is critical, but it should not skip a focused reproduction and a check of the changed path. Record what was deferred."
      },
      {
        "question": "Who should deploy the patch?",
        "answer": "The client retains production deployment authority. A contributor may prepare the patch, verify it in an approved environment, and observe the release if access is explicitly granted."
      },
      {
        "question": "What belongs in the post-incident review?",
        "answer": "The trigger, scope, evidence, release timing, rollback result, and the normal-process gap that allowed the incident. Convert the gap into a bounded follow-up ticket."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-61 Rev. 2: Incident Handling Guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final",
        "note": "Incident response concepts used to define the emergency lane and follow-up review."
      },
      {
        "name": "GitHub Docs: About protected branches",
        "url": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
        "note": "Branch protection and review controls referenced for the merge boundary."
      },
      {
        "name": "DORA research program",
        "url": "https://dora.dev/research/",
        "note": "Delivery performance research used to frame recovery and learning practices."
      },
      {
        "name": "OWASP Application Security Verification Standard",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Security verification concepts relevant to emergency changes."
      }
    ],
    "heroImage": "/nov02/blog/outsourcedprogrammers-production-hotfix-approval-lane.webp",
    "strictNoPricing": true
  },
  "outsourcedprogrammers-release-rollback-rehearsal": {
    "takeaways": [
      "Rehearse against the same artifact and configuration path used for release, not an idealized local build.",
      "Check data compatibility before testing the application rollback; older code may not read a newer schema safely.",
      "Time the full recovery path, including approval and verification, rather than only the deploy command.",
      "Record one failed assumption as a finding and assign a fix before the production release."
    ],
    "readinessRows": [
      {
        "area": "Artifact",
        "ready": "The previous and candidate builds are both identifiable and available.",
        "notReady": "The team plans to rebuild an old version from an approximate commit."
      },
      {
        "area": "Data",
        "ready": "Migration compatibility and restore points are known.",
        "notReady": "Rollback is assumed to work because the code can be redeployed."
      },
      {
        "area": "Access",
        "ready": "A named operator can perform the rollback with documented approval.",
        "notReady": "The only person with access is unavailable during the release window."
      },
      {
        "area": "Verification",
        "ready": "A small set of service and user signals confirms recovery.",
        "notReady": "Success is judged only by a deployment status of finished."
      }
    ],
    "sections": [
      {
        "id": "define-what-rollback-means",
        "title": "Define what rollback means",
        "paragraphs": [
          "Rollback is not one action. It may mean redeploying the previous application artifact, reversing a configuration change, restoring a database snapshot, disabling a feature flag, or replaying a compensating transaction. A release plan should name which of those actions applies, who can authorize each one, and what evidence shows the system has returned to a known state. Write the definition in user and service terms. A web release may roll back by serving the previous container image, while a background job change may need the old handler to drain the queue before it can be removed. A data migration may have no clean reverse path and require a forward repair instead. Pretending that every release has the same rollback motion produces false confidence. Name the point of no return. Some changes become difficult to reverse after the first write, the first customer notification, or the first dependent service call. The release owner should know that boundary before approving the window, not discover it while reading logs during an incident."
        ]
      },
      {
        "id": "rehearse-with-the-real-artifact",
        "title": "Rehearse with the real artifact",
        "paragraphs": [
          "Use the same build process, container image, environment configuration, and deployment path that production will use. A local checkout that starts successfully is not a rollback rehearsal. If the production pipeline injects environment variables, runs a migration step, or serves assets from a separate store, those details belong in the rehearsal. Capture the starting version and the target version before the exercise. After the rollback, verify that the running application reports the expected version and that the expected configuration is active. A deployment tool can finish successfully while an old replica remains in service or a cache continues to serve the new asset. Run the rehearsal in an environment with representative data shapes, permissions, and network boundaries. If a production-only integration cannot be exercised, record that limitation and substitute a controlled mock with the same contract. The point is to expose the steps that fail when they are performed under real conditions."
        ]
      },
      {
        "id": "test-data-compatibility-first",
        "title": "Test data compatibility first",
        "paragraphs": [
          "Application rollback can fail even when the previous image is healthy. A new code path may have written a column, event type, or status value that the old code does not understand. Before the release, identify every schema or data-shape change and decide whether the old application can read the new state safely. Use the expand-and-contract pattern where possible: add compatible structures first, deploy code that can tolerate both shapes, and remove the old path in a later release. That sequencing turns a risky binary rollback into a controlled transition. When a destructive migration is unavoidable, rehearse the restore or forward repair separately and state the data-loss boundary. Record the backup or snapshot time and the restore verification. A backup that exists but has never been restored is only a hope. The rehearsal should show that the selected recovery point contains the expected records and that the restored system can serve the critical path."
        ]
      },
      {
        "id": "time-the-human-path",
        "title": "Time the human path",
        "paragraphs": [
          "Measure the whole recovery path, including detection, decision, approval, execution, and verification. The deploy command may take two minutes while the decision and access steps take forty. If the release window assumes a recovery time that excludes the human path, the plan is not operationally honest. Assign a backup operator and test their ability to perform the procedure. The primary engineer may be the author of the change or may be unavailable during the actual incident. A rehearsal that only works for one person is a single point of failure, especially when the release crosses time zones. Write the exact approval channel and the minimum information needed to authorize rollback. The approver should not have to reconstruct the release context from several dashboards while customers are affected. A short rollback card with the artifact, data condition, command, verification signal, and escalation contact is more useful than a long runbook nobody opens."
        ]
      },
      {
        "id": "turn-gaps-into-release-work",
        "title": "Turn gaps into release work",
        "paragraphs": [
          "A rehearsal should produce findings, not a pass or fail badge. Maybe the previous artifact was not retained, the migration could not be reversed, the backup restore was slower than expected, or the verification signal was ambiguous. Each finding needs an owner and a deadline before the production window opens. Decide which gaps block release and which are acceptable with a documented mitigation. A missing restore test on a low-risk static site is different from an unverified rollback on a payment path. The release owner should make that risk decision explicitly, with the evidence in front of them. After the release, compare the actual recovery path with the rehearsal. Update the rollback card and the release checklist with what changed. A rehearsal is valuable only when it improves the next response; otherwise it becomes a ceremonial exercise that consumes time without reducing uncertainty."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Define",
        "text": "Name the rollback motion, the point of no return, and the recovery evidence."
      },
      {
        "label": "Rehearse",
        "text": "Use the production artifact, configuration path, representative data, and a backup operator."
      },
      {
        "label": "Data",
        "text": "Verify old code can read new data, or document the restore and repair boundary."
      },
      {
        "label": "Decide",
        "text": "The client release owner accepts or blocks release based on rehearsal findings."
      }
    ],
    "faqs": [
      {
        "question": "Can a rollback rehearsal run in production?",
        "answer": "A controlled production exercise is possible for some systems, but it needs its own approval, observability, and abort conditions. Most teams should start in a production-like environment and reserve production for a narrow verification."
      },
      {
        "question": "What if the migration cannot be reversed?",
        "answer": "Plan a forward repair or restore path, state the possible data loss, and decide whether the release can proceed. Do not describe the release as reversible if it is not."
      },
      {
        "question": "How often should the rehearsal repeat?",
        "answer": "Repeat it when the deployment path, data model, access model, or critical dependency changes. A quarterly cadence can keep the card current for stable systems, but the evidence should match the release being planned."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-34 Rev. 1: Contingency Planning Guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
        "note": "Contingency planning and recovery concepts used to structure the rehearsal."
      },
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "note": "Reliability and incident response practices referenced for recovery verification."
      },
      {
        "name": "DORA research program",
        "url": "https://dora.dev/research/",
        "note": "Delivery and recovery research used to frame release learning."
      },
      {
        "name": "GitHub Docs: Managing a release",
        "url": "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
        "note": "Release artifact concepts used when identifying the prior build."
      }
    ],
    "heroImage": "/nov02/blog/outsourcedprogrammers-release-rollback-rehearsal.webp",
    "strictNoPricing": true
  },
  "outsourcedprogrammers-qa-evidence-sprint-handoff": {
    "takeaways": [
      "Tie every result to a build, environment, test data set, and observation time.",
      "Record expected and actual behavior separately so a later reader can judge the result.",
      "Keep sensitive screenshots and customer data in approved storage and link rather than paste.",
      "Close the handoff with unresolved risks and a named next owner, not only a pass count."
    ],
    "readinessRows": [
      {
        "area": "Build",
        "ready": "The tested commit, artifact, or deployment identifier is recorded.",
        "notReady": "The note says only that the latest version was tested."
      },
      {
        "area": "Reproduction",
        "ready": "Steps, data, role, and environment are sufficient to repeat the check.",
        "notReady": "A screenshot without the path that produced it."
      },
      {
        "area": "Result",
        "ready": "Expected and actual outcomes are separate and linked to evidence.",
        "notReady": "A single word such as passed or failed."
      },
      {
        "area": "Handoff",
        "ready": "Open defects, blocked checks, and next owners are listed.",
        "notReady": "The report ends with a total count and no follow-up."
      }
    ],
    "sections": [
      {
        "id": "anchor-evidence-to-a-build",
        "title": "Anchor evidence to a build",
        "paragraphs": [
          "A QA note without a build identifier is a story about an unknown version of the product. Record the commit, artifact, deployment identifier, or release tag that was tested, plus the environment and the observation time. If the build changes during the test window, stop and record the new identifier rather than mixing results from two versions. The same discipline applies to configuration and data. A feature flag, tenant setting, browser version, or seeded role can change the result. Name the values that matter and use a fixture identifier for the data set. A later tester should be able to recreate the conditions without reading the original tester's browser history. When the product is delivered through a shared staging environment, note other changes that landed during the session. A failure observed after an unrelated deploy may belong to that deploy. The evidence should make the uncertainty visible instead of forcing the next person to guess."
        ]
      },
      {
        "id": "write-reproducible-steps",
        "title": "Write reproducible steps",
        "paragraphs": [
          "A reproducible step names the starting state, the action, the input, and the expected observation. Instead of saying to test checkout, describe the signed-in role, the cart contents, the payment method, the address condition, and the confirmation signal. The goal is not exhaustive prose; it is enough precision that another tester can reach the same decision. Include the boundary cases that define the risk. For a permissions change, test the allowed role, the denied role, and the expired-session path. For an upload, test the accepted type, the rejected type, the size limit, and the interrupted transfer. The chosen cases should connect to the acceptance criteria or a known production failure. Keep the test data separate from the evidence. A screenshot can show the result, but it should not become the only record of the input. If the data is sensitive, use a masked fixture and record its identifier rather than reproducing customer values in the report."
        ]
      },
      {
        "id": "separate-expected-from-actual",
        "title": "Separate expected from actual",
        "paragraphs": [
          "The expected result comes from an approved requirement, design, or contract. The actual result is what the tester observed. Keeping them separate makes disagreement visible and prevents the tester from grading the product against a personal preference. If the requirement is ambiguous, mark the check as blocked or needing a decision rather than inventing an expected result.",
          "Use a small result vocabulary such as pass, fail, blocked, and not run. Add a reason code for blocked checks: missing fixture, unavailable environment, unclear requirement, or dependency failure. A blocked check is not a pass, and a missing check is not evidence of absence. The distinction matters when a manager reads only the summary.",
          "Attach evidence at the smallest useful granularity. One screenshot can support several steps, but the report should say which assertion it supports. A video may be necessary for animation, focus, or timing behavior. Logs may be the primary evidence for a background job. Use the medium that lets a reviewer verify the claim."
        ]
      },
      {
        "id": "make-the-handoff-readable",
        "title": "Make the handoff readable",
        "paragraphs": [
          "Start the handoff with the scope, build, environment, and overall risk state. Follow with the failures that block release, then the checks that were not run, then the passing evidence. A reader should not have to scroll through a hundred green checks to find the one unresolved permission failure. List every open defect with an identifier, severity, affected path, and owner. If a defect is accepted for release, record the acceptance decision and the customer impact. The next sprint should inherit a decision, not a mysterious annotation that says known issue. Include a short note on what changed since the previous handoff. New fixtures, environment quirks, feature flags, and test-data limitations are easy to lose. The next tester needs the delta, especially when the sprint boundary also changes the people doing the work."
        ]
      },
      {
        "id": "close-with-an-owner",
        "title": "Close with an owner",
        "paragraphs": [
          "A QA handoff is complete when every unresolved item has a named owner and a next action. That may be a developer who needs to fix a defect, a product owner who must clarify acceptance, or an environment owner who must restore a dependency. The report should not end with a request for someone to look into it. Schedule the next check when the evidence will expire. A test result from three builds ago may still be useful context, but it is not proof of the current artifact. State the build or date after which the evidence must be refreshed, and make the dependency visible in the release checklist. Finally, review a sample of the handoff with the person who will receive it. If they cannot reproduce one result or explain one blocked check, the format needs repair. The measure of a QA handoff is not how much it contains; it is whether the next owner can make a decision without reopening the original conversation."
        ]
      }
    ],
    "roleBrief": [
      {
        "label": "Anchor",
        "text": "Record the build, environment, fixture, role, and observation time for each result."
      },
      {
        "label": "Reproduce",
        "text": "Write steps and inputs precise enough for a different tester to repeat the check."
      },
      {
        "label": "Report",
        "text": "Separate expected from actual, and never turn blocked or not-run into a pass."
      },
      {
        "label": "Hand off",
        "text": "List open defects, accepted risks, evidence expiry, and a named next owner."
      }
    ],
    "faqs": [
      {
        "question": "Is a screenshot enough evidence?",
        "answer": "Only when it shows the assertion and the context needed to trust it. Pair it with the build, path, input, and expected result so the next reviewer can reproduce the observation."
      },
      {
        "question": "How should blocked tests be reported?",
        "answer": "Report blocked as its own result with a reason and an owner. Do not count it as passed, and do not omit it from the release summary."
      },
      {
        "question": "What should the next sprint inherit?",
        "answer": "The current build, open defects, accepted risks, unresolved requirements, fixture limitations, and the date when the evidence must be refreshed."
      }
    ],
    "sources": [
      {
        "name": "ISO/IEC/IEEE 29119-3 software testing",
        "url": "https://www.iso.org/standard/45142.html",
        "note": "Test documentation concepts used to structure the evidence record."
      },
      {
        "name": "NIST Secure Software Development Framework",
        "url": "https://csrc.nist.gov/Projects/ssdf",
        "note": "Verification and review practices referenced for release evidence."
      },
      {
        "name": "GitHub Docs: Storing workflow data as artifacts",
        "url": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/store-and-share-data",
        "note": "Artifact retention concepts used when linking build output to test evidence."
      },
      {
        "name": "OWASP Application Security Verification Standard",
        "url": "https://owasp.org/www-project-application-security-verification-standard/",
        "note": "Security verification requirements relevant to test coverage and evidence."
      }
    ],
    "heroImage": "/nov02/blog/outsourcedprogrammers-qa-evidence-sprint-handoff.webp",
    "strictNoPricing": true
  }
} as const;
