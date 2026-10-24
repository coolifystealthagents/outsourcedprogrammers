import type { ResearchPost } from './fleet-content';

export const october22ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "defect-escape-attribution-method",
    "title": "Defect Escape Attribution: A Method for Bounded Records",
    "excerpt": "A protocol for attributing escaped defects to a stage without inventing rates, with declared units, denominators, review blinding, and explicit limits.",
    "topic": "Defect escape attribution",
    "published": "2026-10-22",
    "body": [
      "The question this protocol addresses is narrow: for a defect found after a release, can a reviewer assign the earliest stage where an existing control should have caught it, using records that a second reviewer can inspect and rebuild? Attribution is often requested in a performance conversation, which is exactly why the method has to be fixed before anyone reads a case. A study designed after the results are visible is a justification exercise, not a measurement.",
      "A defect escape is a defect present in a released artifact that a declared control did not detect before release. That sentence contains three judgements that must be tested separately: the defect existed in the artifact, the artifact reached the released state, and the named control was in scope for that change. Teams that skip the third judgement end up attributing every escape to whichever stage is least popular that quarter, usually review or QA, without checking whether the control was ever designed to detect that class of defect.",
      "The population is every defect reported against a released artifact in a frozen window, limited to one product or service and one severity band. The observation unit is one defect report linked to a release, a change set, and the control evidence that existed at the moment of release. Defects found before release are outside the population even when they are interesting, because the method studies escapes rather than the entire defect flow.",
      "Inclusion rules should be written before extraction begins. Include defects with a reproducible report, a release identifier that resolves to an artifact, and a change set within a declared lookback. Exclude duplicates, reports later withdrawn, and environment failures with no product change. Record every exclusion with the reason and the reviewer who applied the rule, because a shrinking denominator is the simplest way to improve an attribution rate without improving anything real.",
      "The source chain matters more than the final label. Build it from the defect tracker, the release record, the change set, the review record, and the test evidence attached to the change. If any link is missing, the case is incomplete rather than attributable. A label derived from a partial chain is a guess stored in a form field, and it will be treated as fact by whoever reads the summary next quarter.",
      "Use a small closed set of attribution labels. A workable set is introduced in the change set, present before the change set, environment or data condition, requirement ambiguity, and unknown. Keep a separate field for the control that should have caught it, because the introducing change and the missing control are different findings with different repair actions. A defect introduced by an older change but caught by no test at release is not evidence that the current author wrote poor code.",
      "Denominators need the same care as labels. Report eligible defects, attributed defects, incomplete cases, and exclusions. A rate of escapes attributed to one stage divided by all attributed defects is not the same as that stage divided by all eligible defects, and the difference matters whenever the incomplete count is material. Publish both ratios when they diverge, and never present the first as if it were the second.",
      "Time states belong in the record even though this is not a speed study. Separate the defect introduction window, the detection point, the triage decision, the fix, and the release that carried the fix. A slow fix and a late detection are different control failures with different owners, and combining them into one interval hides the repair action. Record the timestamps that actually exist rather than reconstructing them from memory later.",
      "Reviewer independence is the central control. Two reviewers read the same case without seeing each other's label, using the same codebook and the same source access. Compare the labels and the evidence each cited. Disagreement is data about the codebook, not a tie to break by seniority, and a case where one reviewer cites a missing test while the other cites a missing requirement is revealing even when both chose the same label.",
      "Blinding has limits in a small team. The reviewer may know who wrote the change, and may have discussed the incident. Ask them to record the label and the evidence before opening the author field, then report that the blinding was partial. Pretending to a double blind design that the team cannot support is worse than stating the constraint plainly, because a reader will otherwise over-trust the agreement statistic.",
      "Build the codebook from examples rather than adjectives. Each label needs two positive examples and one boundary example drawn from closed cases. A label called missed review is useless until the team agrees whether it covers a reviewer who commented on the file but not the failing line, a reviewer who approved without opening the diff, and a change that had no reviewer assigned at all.",
      "Run a known-good and known-bad control before the real sample. Seed two synthetic cases: one where the control evidence clearly exists and one where it clearly does not, both with plausible comments and links. If either reviewer labels the known-bad case as properly controlled, the method is not ready for real records and the codebook needs another pass before extraction.",
      "Recompute a protected subset from source artifacts. Choose cases where the original label is stored, hide it, and rebuild the chain from the tracker and the release record without the first reviewer's notes. A label that cannot be rebuilt from sources is a personal opinion in a database, and it will not survive the first challenge from an engineering manager who disagrees with the conclusion.",
      "Alternative explanations should be listed before results are read. Change mix, release frequency, test selection, reviewer capacity, tool migration, and improved detection can all move the attribution pattern. This method describes where records point under a declared codebook. It does not establish that a stage caused an escape, and it cannot separate a weaker process from a harder quarter without a design that supports that comparison.",
      "Defect records contain customer data, reproduction steps, and sometimes security detail. Use named least-privilege access, stable study keys, redacted extracts, and an approved storage location with a retention date. A study folder copied to a personal drive defeats the access control around the tracker, and a shared spreadsheet with customer names is a second incident waiting for an audience.",
      "The published table should separate observed fields from reviewer classifications. Observed fields are release, artifact digest, change set, detection date, severity, and linked evidence. Classifications are attribution label, missing control, and a confidence note. Each classification cites the codebook rule in force, so a later reader can see whether a change in the rule or a change in the system produced a shift in the numbers.",
      "Sensitivity checks are required. Recalculate with duplicates included, with the lowest severity band removed, and with incomplete cases assigned to the most common label. If the headline changes under a defensible alternative, report both readings and name the decision that depends on the definition. A result that only survives one arrangement of the data is a preference, not a finding.",
      "State a stopping rule. Stop when the window closes, when source integrity fails, or when a security condition requires a protected review path. Extending the window because early cases look inconvenient creates a different study with a different denominator, and it should receive a new version, a new owner, and a written rationale rather than a quiet date change.",
      "Refresh the study when the release process, the review policy, the test suite, or the tracker changes. Compare like with like across periods, and mark a tracker migration as a break in the series. A trend line drawn across a change in how defects are recorded is a drawing, not a measurement, and it will mislead anyone who was not present for the migration.",
      "The practical output is one bounded repair action: add a fixture, change a review checklist item, fix a release gate, or clarify a requirement template. Name the owner, the expected signal, the review date, and the condition for reversing the action if it slows review without improving detection. The method reports no local escape rate, no benchmark, and no causal claim about outsourced work; the sources describe secure development and review practice, and they do not measure any team using this method. Reproducibility is the acceptance test, and a second reviewer should be able to rebuild the chain for a sample, reach the same labels or record a documented disagreement, and identify who retained the final decision."
    ],
    "sources": [
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "NIST SP 800-53 Rev. 5",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification v1.0",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "review-turnaround-evidence-protocol",
      "queue-retry-policy-effectiveness-study",
      "test-isolation-contamination-analysis"
    ],
    "hero": "/oct22/research/defect-escape-attribution-method.png",
    "nextStep": {
      "heading": "Apply the method to one service",
      "href": "/contact",
      "label": "Scope a defect review lane",
      "copy": "Bring one service, its tracker export, and the release record. The company owner keeps the attribution decision; the review lane prepares reproducible evidence."
    }
  },
  {
    "slug": "review-turnaround-evidence-protocol",
    "title": "Review Turnaround Evidence: A Protocol With Declared Clocks",
    "excerpt": "A protocol for measuring code review turnaround with explicit start and stop events, counted hours, wait ownership, and denominators that survive a rerun.",
    "topic": "Review turnaround evidence",
    "published": "2026-10-22",
    "body": [
      "Review turnaround is one of the easiest engineering numbers to produce and one of the easiest to mislead with. This protocol fixes the clock, the population, the strata, and the quality pairing before any pull request is counted, so a later reviewer can rebuild the same result from the same events. The purpose is a decision aid about queue design, not a score for a person.",
      "The question is descriptive: for a declared repository and period, how long do eligible pull requests wait between the start event and the first substantive review, and who owns that wait? It is not a question about individual productivity, and the readout should say so in its first paragraph. A measurement that is used for a purpose it was not designed for will produce confident answers to the wrong question.",
      "The population is pull requests in one repository that became ready for review during the window and were eventually merged or closed. The observation unit is one pull request with its full event chain. Draft periods, abandoned branches, and automated dependency updates are handled by explicit rules rather than silently included or excluded, because the choice changes both the count and the median.",
      "Start and stop events must be declared. Common choices are ready for review to first review submitted, or opened to approval. Each produces a different number and a different story. Pick one primary pair, publish the definition beside every chart, and keep any secondary pair clearly labelled rather than mixing them in one line.",
      "Counted hours need a rule. Elapsed clock time is simple and includes nights and weekends. Business hours need a time zone and a holiday calendar. If the reviewer and the author work in different zones, state whether the clock follows the repository, the author, or the reviewer, because the same event can move by a full working day depending on that choice.",
      "Build the event table from the platform rather than from memory. Required fields are pull request identifier, author role, ready time, first review time, review state, approval time, merge time, change size, files touched, and whether a protected path was involved. Bot events are marked, and each event keeps its actor so the later analysis can separate a reviewer from an automation account.",
      "Define a substantive review. An automated comment, a label change, or a one word approval is not the same event as a review with comments that led to a code change. Record the definition and count the borderline cases separately, so a reader can see how much of the result depends on whether a rubber stamp counts as a review.",
      "Strata make the number interpretable. Report by change size band, by protected area, and by whether the pull request was a re-review. A median across all sizes hides the fact that large changes wait longer, and a target applied without strata rewards splitting work into trivial pieces. Size bands should be declared in lines changed or files touched, not by a subjective label.",
      "Wait ownership is the useful output. Split the interval into author hands, reviewer queue, rework, dependency wait, and merge approval wait. Do not add overlapping intervals. The dominant cause is the only part a manager can repair, and it is often a queue design problem rather than a person moving slowly, especially when one reviewer holds most of the protected area knowledge. A reviewer who holds most of the context for a service becomes a queue of one, and the protocol should show that concentration as a system risk rather than as an individual trait. When the same name appears on most reviews in a stratum, the repair is a second reviewer with enough context, not a reminder to work faster.",
      "Re-reviews need their own interval. A pull request reviewed quickly and then returned three times is not a fast review. Count the number of review rounds and report the median rounds beside the first review latency. A team that improves first response while increasing rounds has improved a metric and not the flow.",
      "Time zone handling should be tested with a known case. Take a pull request opened late in one office and reviewed early in another, then compute the interval under both conventions. If the two answers differ by a working day, the readout must say which convention it uses, and the published number must not be compared with a report that used the other one.",
      "The denominator is every eligible pull request in the window. Report the count, the exclusions with reasons, and the number with a missing event. A percentage without the eligible count is not reproducible, and a missing event is not a zero. Silent imputation is how a report becomes a rumour.",
      "Pair latency with a quality signal. Options include post merge defects linked to the pull request, review comments that changed the code, and rework rounds. Fast approval with no comments and a later defect is a worse result than a slower review that caught the issue, and the protocol should prevent the chart from implying that the fastest queue is the best one.",
      "Check for gaming patterns before publishing. Watch for very small pull requests opened to reset a clock, approvals by reviewers who did not open the diff, and review events split to create an early timestamp. These patterns are visible in the event table and belong in the caveats, not in a private note that disappears when the analyst changes role.",
      "Independence is limited but useful. Have a second analyst recompute one week from the raw events and compare counts, not only medians. A median can match while the underlying eligibility differs, which means the definition is not stable enough to survive a change of analyst or a question from a sceptical reviewer.",
      "Report a distribution, not only a centre. The ninety fifth percentile and the count above the target carry more decision value than a median. A service target that is met on average and missed on the urgent path is not met, and the urgent path is usually the one the customer notices.",
      " Holidays, incidents, and platform outages distort short windows and can move a monthly median by hours, so the chart should label each one rather than leaving a reader to infer it from an unexpected dip. Either exclude them by a written rule or publish the effect. Silent exclusion looks like manipulation when a colleague recomputes the period, and a written exclusion with a visible effect is much easier to defend.",
      "Access and privacy rules apply to the extract. Pull request metadata can reveal project names, customer names in branch titles, and individual working patterns. Use least-privilege access, redact titles in published tables, and set a retention date for raw event data. A dashboard that is convenient to build and impossible to retire becomes a permanent copy of staff activity.",
      "The method has clear limits, and every published rate carries its denominator. It describes one repository in one period under one clock definition. It does not measure review quality, does not establish that a turnaround target improves delivery, and does not support a comparison between individuals or between outsourced and in-house staff. Run a sensitivity check on the clock and the strata before drawing a conclusion: recompute with elapsed hours, with drafts included, and with the largest size band removed. If the conclusion flips, present the range and name the decision that depends on the choice.",
      "The practical output is one change to the review system: a reviewer rotation, a scheduled review window, a smaller default change size, a clearer template, or a named backup reviewer. State the expected signal and re-measure after the change rather than declaring success from one month. Keep the target advisory, because review latency is shaped by queue design, change size, reviewer availability, and the number of concurrent requests. Acceptance is reproducibility: another analyst should rebuild the extract from the recorded query, reach the same eligible count, apply the same exclusions, and explain any difference. The company owner retains the decision about targets, staffing, and whether the number is used at all."
    ],
    "sources": [
      [
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "Google Technical Writing",
        "https://developers.google.com/tech-writing"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "SLSA specification v1.0",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "defect-escape-attribution-method",
      "code-review-sla-evidence",
      "api-contract-drift-detection-study"
    ],
    "hero": "/oct22/research/review-turnaround-evidence-protocol.png",
    "nextStep": {
      "heading": "Measure one repository honestly",
      "href": "/services/reporting-and-qa",
      "label": "Review reporting and QA support",
      "copy": "Use one repository and one quarter to test the clock definition before expanding the measurement."
    }
  },
  {
    "slug": "test-coverage-claim-verification",
    "title": "Verifying Test Coverage Claims Without Invented Numbers",
    "excerpt": "A verification protocol for coverage claims, requirement traceability, exclusion lists, and the difference between executed lines and tested behaviour.",
    "topic": "Test coverage claim verification",
    "published": "2026-10-22",
    "body": [
      "A coverage claim usually arrives as one sentence: the change is fully covered. This protocol turns that sentence into a set of records a reviewer can verify, including the tool and version, the configuration, the command, the report, the exclusions, and the behaviour the tests actually assert. Without those records the claim is a statement of confidence rather than a measurement.",
      "The question is not whether a coverage percentage is high. It is whether the claim attached to a specific change is supported by a reproducible measurement, and whether that measurement relates to the behaviour the change introduces. A repository can report a healthy number while the new error path, permission check, or boundary case has never been executed by a test.",
      "Define the claim type first. Line coverage, branch coverage, function coverage, and requirement coverage answer different questions. A claim of full coverage with no type is not falsifiable, and the first verification step is to ask the author to name the type, the tool, and the scope. If the author cannot name them, the claim should be restated before anyone spends time checking it.",
      "The population is the changed files in one pull request, with the tests that ran against that revision. The observation unit is one changed file with its coverage report entry, the test command, and the relevant assertions. A repository wide percentage is context, not the unit, and it can rise while the new code is entirely untested if the change is small relative to the codebase.",
      "Tool configuration belongs in the evidence. Coverage tools exclude files by default pattern, ignore generated code, and sometimes skip lines with special comments. Record the configuration revision and the exclusion list, because an exclusion can turn a red file green without a new test. A configuration change in the same pull request as the claim deserves a direct question about why.",
      "Generated code, migrations, and vendored libraries are common exclusions. Each exclusion needs a reason and an owner. Some exclusions are entirely reasonable, such as a generated client with no branching logic, while others quietly remove the hardest file in the change. The reviewer should see the list and the reason, not just the adjusted percentage.",
      "The command must be reproducible. Record the package manager, the test runner, the filter, the environment variables that affect selection, and the report path. A claim produced by a local command that nobody else can run is not evidence, and it is usually a command that skipped a suite because an environment variable was missing or a database was unavailable.",
      "Denominators are the changed executable lines in the declared scope. Report measured lines, covered lines, excluded lines, and files with no report entry. A file missing from the report is not the same as a file with zero coverage, and conflating them hides a configuration gap. When a report is incomplete, the honest claim is partial rather than complete.",
      "Coverage measures execution, not assertion. A test that calls a function and checks nothing can cover every line in it. Ask for the assertions attached to the changed behaviour, and check at least one case where the assertion would fail if the behaviour regressed. A reviewer who reads only the percentage is reading an activity log, not a test result.",
      "Build an adverse fixture. Introduce a deliberate defect in a copy of the changed code, such as an inverted condition or a removed null check, and confirm the test suite fails. If the suite still passes, the coverage number describes execution and not protection, and the claim should be restated as execution coverage with a note about the assertion gap.",
      "Requirement coverage needs its own table. List the acceptance rules from the ticket and the test that demonstrates each one. A rule with no test is an open item even when line coverage is complete, and a test that covers two rules should say so. This table is usually more useful to a product owner than any percentage, because it maps to behaviour they recognise.",
      "Review the boundary cases. Coverage reports do not distinguish an input at the boundary from an input in the middle. Ask which test covers the empty value, the maximum length, the permission denial, and the error path introduced by the change. If the boundary case is covered by accident rather than by a named test, the protection is fragile.",
      " Snapshot and visual tests deserve a note, because they can raise a line count without testing a decision, a permission, or an error message. They can cover rendering paths without asserting behaviour that matters to a user. Count them as evidence for the surface they check and not as evidence for logic in the same file. A snapshot that updates automatically on change is a record of output, not a check of intent.",
      "Flaky tests distort the claim. If a test was skipped, retried until green, or marked pending in the same revision, the effective coverage is lower than the report suggests. Record skipped and retried tests in the evidence table, and treat a retry that only passes on the second attempt as an unresolved signal rather than a clean pass. Record the retry count and the reason in the same row as the result, because a suite that needs two attempts has an unresolved flake and a coverage claim that depends on it is weaker than the report suggests. The reviewer does not need to fix the flake in the same change, but the claim should carry the caveat.",
      "Check the merge result, not only the branch. Coverage measured before the merge can differ after conflict resolution. Rerun on the merged revision when the change touches shared modules, because a conflict resolved by deleting a test is exactly the case a pre-merge report cannot see.",
      "Independence is practical rather than perfect. A second reviewer reruns the command on the same revision and compares the report hash or the per file numbers. They do not need to read every test, but they should sample the assertions for the highest risk file and confirm the adverse fixture fails as expected on their own run.",
      "Report a small table: file, claim type, covered lines, total lines, exclusions, assertion sample, adverse fixture result, and reviewer note. The table is more useful than a badge because it shows where the claim is thin, and it gives the next reviewer a place to start rather than a single number to trust.",
      "Limits must be stated. Coverage does not measure whether the tests are meaningful, does not prove the absence of defects, and does not transfer across languages or frameworks. A high number on one service says nothing about another service or another team. Security and privacy apply to test artifacts as well: reports can include file paths and code fragments, so keep them in the repository or approved storage and avoid customer data in fixtures.",
      "The stopping rule is simple. Stop when the claim type is undefined, when the command cannot be rerun, or when the report is missing files in scope. An unverifiable claim should be restated as unverified rather than accepted with a caveat in a comment. Sensitivity checks are useful before publishing: recompute with exclusions treated as uncovered, with generated files included, and with skipped tests counted as failures. If the conclusion changes, the claim depends on a definition that the reviewer should see.",
      "The repair action is usually small: add a boundary test, remove an unnecessary exclusion, fix a report path, or restate the claim as partial. Name the owner and the date, and recheck the specific file rather than rerunning the whole suite for a headline. The method reports no local coverage percentage and cites no benchmark. The sources describe verification, review, and secure development practice; they do not measure this team. Acceptance is a reviewer who can rerun the command, match the per file numbers, see the exclusion list, and find the assertion that would fail if the behaviour broke."
    ],
    "sources": [
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "Google Technical Writing",
        "https://developers.google.com/tech-writing"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification v1.0",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "defect-escape-attribution-method",
      "review-turnaround-evidence-protocol",
      "test-isolation-contamination-analysis"
    ],
    "hero": "/oct22/research/test-coverage-claim-verification.png",
    "nextStep": {
      "heading": "Verify one change before expanding",
      "href": "/blog/hire-qa-automation-support",
      "label": "Plan QA automation support",
      "copy": "Start with one pull request, one command, and one adverse fixture. Broaden only when the claim survives a rerun by another reviewer."
    }
  },
  {
    "slug": "dependency-vulnerability-triage-reliability",
    "title": "Dependency Vulnerability Triage: Reliability of a Declared Queue",
    "excerpt": "A protocol for checking whether vulnerability alerts are triaged consistently, with dedupe rules, reachability evidence, clocks, and exception handling.",
    "topic": "Dependency vulnerability triage",
    "published": "2026-10-22",
    "body": [
      "Dependency alerts are plentiful, noisy, and easy to close without reading. This protocol asks a bounded question: for a declared period and a declared dependency inventory, are alerts triaged consistently against a written rule, and can a reviewer reconstruct each decision from records? It does not ask whether the codebase is secure. A closed alert is a workflow state, not proof that a vulnerable path is unreachable or that an upgrade is safe.",
      "The population is alerts raised against direct and transitive dependencies of the declared services during the window. The observation unit is one alert on one package version affecting one service, linked to the advisory, the dependency path, and the triage decision. A package used by several services produces several units even when the advisory is identical, because the exposure and the owner can differ.",
      "Deduplicate before counting, and state that the denominator is distinct advisory and service pairs rather than raw alerts. One advisory can appear once per lockfile, once per branch, and once per scanner. A count of alerts is not a count of risk, and the first table in the readout should show raw alerts, distinct advisory and service pairs, and duplicates removed. Keep the dedupe rule in the record so a later reviewer can test it on a sample rather than trusting the number.",
      "Record the severity source. The advisory database, the package registry, and an internal rating can disagree. State which source drives the service target and whether an internal override exists, because a queue sorted by a different severity than the one reported is inconsistent by design. An override needs an owner and a reason, not a silent edit in a spreadsheet.",
      "Build the dependency path. For a transitive alert, the path from the service manifest to the vulnerable package determines both reachability and the upgrade option. A path that runs through a build tool has a different exposure from one that runs in a request handler, and a path that exists only in a development dependency has a different owner as well.",
      "Reachability evidence should be proportionate. For a low severity package used only in tests, a written statement and a path listing may be enough. For an internet facing service, ask for the route, the call site, and the configuration that enables the affected function. The evidence should be attached to the alert rather than summarised in a meeting note.",
      "The triage clock needs a start and a stop. Start at alert creation or at the first assignment, stop at a decision or at the upgrade merge. Report both if they differ, and state whether the clock counts business hours. A queue that looks slow because alerts sit unassigned is a routing problem, while one that looks slow after assignment is a capacity or decision problem.",
      "Decisions should come from a closed set: upgrade, patch, mitigate with configuration, accept with expiry, or false positive with evidence. A free text field produces plausible sentences that cannot be compared across reviewers. A closed set also makes disagreement visible, which is the point of a reliability study rather than a compliance report.",
      "Acceptances need an expiry and an owner. An accepted risk with no date is an unowned decision that will reappear in the next audit with no rationale. The protocol should treat a missing expiry as an incomplete case rather than an acceptance, and the readout should show the count of incomplete acceptances beside the closure rate.",
      "The upgrade record needs more than a version number. Include the target version, the changelog reference, the test evidence, the rollback path, and the release identifier. A dependency bump merged without a passing test run is a state change, not a verified fix, and the next alert may reopen the same package because the vulnerable path remains.",
      "Check for version range tricks. Updating a lockfile without changing the manifest can be reverted by the next install, and pinning a fork can move the package outside the advisory feed. Record the manifest and lockfile revisions together, and treat a change that only touches the lockfile as provisional until the next clean install is tested.",
      "Independence is measured with agreement. Two reviewers triage a sample of distinct alerts using the same codebook. Compare the decision, the severity source, the reachability claim, and the expiry. Disagreement on severity is common and should be reported rather than averaged away, because the average hides the cases where one reviewer saw exploitability and the other saw a test only dependency.",
      "Alternative explanations belong in the readout. A closure spike may follow a scanner upgrade, a bulk bot pull request, a change in advisory volume, or a holiday period. Without those notes, a trend becomes a story about team behaviour. The readout should also separate alerts closed by an automated upgrade from those closed after a manual review.",
      "Time states should separate scanner ingestion, assignment, reviewer work, owner decision, upgrade build, and release. A queue that looks slow because one owner holds ten acceptances is a different problem from a scanner that delivers late. Report the median for each state separately, with the count of items that never reached the next state.",
      "Source systems are the package manifest, the lockfile, the advisory database, the scanner, the pull request history, and the release record. Each field in the evidence table should name its source. A severity copied by hand without a source cannot be checked later, and a reachability claim with no call site is an opinion about architecture.",
      " Access control matters because dependency data reveals architecture, and the same export that helps a triage queue can help an attacker map internal services, package versions, and release cadence. Use least-privilege access to the scanner and the repository, redact service names in published tables where needed, and keep the raw extract in approved storage with a retention date. An alert export that lists every internal package name is a map of the system for anyone who finds it. If the scanner cannot state which service introduced a transitive package, that gap is part of the finding and should be listed as an evidence limitation rather than filled with an assumption about the dependency tree.",
      "Exceptions accumulate. Report the count of open acceptances by age band and owner. An acceptance older than its review date is a finding, and the protocol should not let it disappear into a dashboard filter. The same applies to a repeatedly deferred upgrade: count the deferrals rather than only the final decision date.",
      "Sensitivity checks are required. Recompute with duplicates included, with acceptances counted as unresolved, and with transitive alerts excluded. If the queue reliability changes, publish both readings and the decision that depends on the definition. The method has limits: it evaluates workflow consistency, not exploitability. Advisory severity is not a local risk score, reachability evidence can be wrong, and a passing test run does not prove that an upgrade is behaviour preserving. The same discipline applies to deferred upgrades that never receive a decision, because silence is not an acceptance and it should not be counted as one.",
      "Refresh the protocol when the scanner, advisory source, dependency manager, or release process changes. Compare periods only when the alert generation rule is comparable, and mark a scanner migration as a break in the series. The practical output is one repair: a dedupe rule, a severity mapping table, an expiry default, a reachability template, or a named owner for the acceptance queue. A reader who cannot reproduce the break in the series will compare two numbers that were generated under different rules and draw a conclusion the data cannot support.",
      "No local alert counts, resolution times, or benchmarks are reported here. The sources describe secure development, access control, and dependency scoring practice; they do not measure any queue using this protocol. Acceptance is reproducibility. A second reviewer should rebuild the distinct advisory and service pairs, apply the same dedupe and severity rules, and reach the same decision set or a documented disagreement with cited evidence."
    ],
    "sources": [
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "NIST SP 800-53 Rev. 5",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ],
      [
        "SLSA specification v1.0",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "OpenTelemetry documentation",
        "https://opentelemetry.io/docs/"
      ]
    ],
    "related": [
      "test-coverage-claim-verification",
      "secret-exposure-response-completeness",
      "review-turnaround-evidence-protocol"
    ],
    "hero": "/oct22/research/dependency-vulnerability-triage-reliability.png",
    "nextStep": {
      "heading": "Audit one dependency queue",
      "href": "/services/operations-support",
      "label": "Review operations support",
      "copy": "Use one service and one advisory source to test the dedupe and decision rules before widening the queue."
    }
  },
  {
    "slug": "offboarding-access-closure-audit",
    "title": "Offboarding Access Closure: An Audit Method for Grant Records",
    "excerpt": "An audit protocol for proving that grants are closed at the source system, including shared accounts, tokens, vendor seats, and verification ownership.",
    "topic": "Offboarding access closure",
    "published": "2026-10-22",
    "body": [
      "Access closure is usually reported as a completed checklist. This protocol treats it as an evidence question: for a declared offboarding event, which grants existed, which were removed, and what source system record proves the removal? A checklist can be completed while a token, a vendor seat, or a shared credential remains active, and the difference only appears when someone queries the system instead of reading the form.",
      "The unit of observation is one grant held by one identity on one system. A grant is a role binding, a repository permission, a database account, a vendor seat, a token, a key, or a shared credential the identity could use. The identity is the person or service account being offboarded. Counting identities rather than grants hides the fact that one person can hold many paths into the estate.",
      "The grant universe must be built from multiple sources. Start with the identity provider, then repository and cloud role bindings, then the application database, then the vendor inventory, then secret stores and CI configuration. No single console holds the complete picture, and the audit should record which sources were available and which were not.",
      "Indirect grants are the most common gap. A personal access token in a laptop keychain, an SSH key in an agent, a deploy key on a repository, and a saved session on a mobile device all survive an account disable. The audit should name these paths even when it cannot inspect the device, and it should record the owner who can confirm the device state.",
      "The offboarding event has a stop signal. Record who sent it, when, and through which channel. The clock starts at the signal, not at the ticket creation that may follow hours later, and the audit should report both if they differ. A closure that looks fast against the ticket and slow against the signal is a routing problem worth naming.",
      "Closure has three states: removed, not held, and unresolved. A grant marked not held needs a source query that returned zero rows, not a recollection that the person never used the tool. A grant marked unresolved needs an owner, a reason, and a date. Treating unresolved as removed is the failure mode this protocol is designed to detect, and it should be counted explicitly in the readout.",
      "Verification belongs to someone other than the person who removed the access. The verifier runs a query in the source system and records the query text, the timestamp, and the result. An admin summary screen is not sufficient because it can hide role bindings and tokens, and it may show a deleted user while an active key issued by that user remains valid.",
      "Timing is descriptive rather than punitive. Report minutes from the stop signal to the first removal, to the last verified removal, and to the closure of the identity record. Separate the waits caused by vendor support, owner approval, and tooling downtime. The interesting number is usually the gap between the last removal and the verification, because that is where a hidden grant surfaces.",
      "Shared accounts need their own rule. If a credential is shared, removing one person does not remove access. The audit records the shared account, the rotation event, and the owner of the next rotation. A shared password that was not rotated is an open finding even when the person no longer uses it, and it will remain open until the credential changes.",
      "Tokens and keys need a search by issuer. Look for tokens created by the departing identity, deploy keys added to repositories, CI variables changed in the period, and cloud access keys. A token list is more reliable than a hunch about which tools were used, and it should include tokens that were created for a temporary project and never revoked.",
      "Vendor seats are often outside single sign on. Where no administrative interface exists, the evidence is a seat list export plus a screenshot with a date, and the audit should mark the verification as manual rather than pretending it is automated. The manual finding needs a named owner and a recheck date, because a seat can be reassigned without a new audit.",
      " Sampling is acceptable for large estates if the sampling rule is declared, because an undeclared convenience sample tends to select the systems that are easiest to query rather than the ones that carry the most risk. Stratify by system criticality and grant type, include every production and customer data grant, and sample the rest with a fixed method. Report the sample size and the population, and do not describe a small sample as a full audit of the estate.",
      "Independence check: have a second auditor pick three closed grants and verify them from the source system. If any is still active, the whole closure set is suspect and the audit should return to the population rather than patching one row. One false closure is evidence about the checking process, not an isolated error. Include the source query and the date on every sampled row so a later auditor can repeat the check without asking the original team which export was used or which filter was applied.",
      "Access after the stop signal is the most important finding. Query the audit log for activity by the identity after the signal. A single successful call is evidence that at least one path remained open, and it should be traced to a grant. The trace is more useful than the log line alone, because it names the control that failed and the system that owns it.",
      "Exceptions require an expiry and an owner. A temporary vendor seat for knowledge transfer is reasonable, but it must have a date and a person who will remove it. The audit reports exceptions by age band, and an exception past its date should be treated as unresolved access rather than a documented decision.",
      "Report the population and the denominators. Grants inventoried, grants verified removed, grants not held, unresolved grants, and exceptions. A closure rate without the population and the unresolved count is not auditable, and a percentage that excludes vendor seats should say so in the same line as the number.",
      "The method has limits. It can verify records, not intent. A removed grant does not prove the credential was never copied, and a vendor without an audit interface cannot provide strong evidence. Those limits belong next to the conclusion rather than in a footnote, because a reader will otherwise treat a closure rate as a security guarantee. A closure rate is only meaningful when the reader can see which systems were in scope and which were not reached.",
      "Security of the audit itself matters. The register contains system names, roles, and sometimes token identifiers. Use least-privilege access, redact identifiers in published excerpts, and set a retention date that matches the company policy. A register that is convenient to share is also convenient to leak, and it maps the estate for anyone who obtains it. The register should name that owner before the next quarter, not after the next incident.",
      "Refresh the protocol when the identity provider, a major vendor, or the repository hosting changes. A new system added to the estate is a new population, and an audit that omits it will report a closure rate that is too high. The practical output is one repair: a rotation for a shared credential, an owner for a vendor seat, a query added to the closure script, or an expiry default for exceptions.",
      "The method reports no local closure times, seat counts, or benchmark figures are reported here. The sources describe access control frameworks and privacy practice; they do not measure this estate or certify any offboarding process. Acceptance is a reviewer who can choose three grants and confirm from the source system that each is gone, and who can find an owner and a date for every exception that remains."
    ],
    "sources": [
      [
        "NIST Role Based Access Control",
        "https://csrc.nist.gov/projects/role-based-access-control"
      ],
      [
        "CISA Zero Trust Maturity Model",
        "https://www.cisa.gov/zero-trust-maturity-model"
      ],
      [
        "NIST SP 800-53 Rev. 5",
        "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      ],
      [
        "NIST Privacy Framework",
        "https://www.nist.gov/privacy-framework"
      ],
      [
        "NIST Cybersecurity Framework 2.0",
        "https://www.nist.gov/cyberframework"
      ],
      [
        "NIST Secure Software Development Framework",
        "https://csrc.nist.gov/Projects/ssdf"
      ],
      [
        "CISA Secure Our World",
        "https://www.cisa.gov/secure-our-world"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ],
      [
        "CISA Secure by Design",
        "https://www.cisa.gov/securebydesign"
      ]
    ],
    "related": [
      "offboarding-access-revocation-drill",
      "secret-exposure-response-completeness",
      "dependency-vulnerability-triage-reliability"
    ],
    "hero": "/oct22/research/offboarding-access-closure-audit.png",
    "nextStep": {
      "heading": "Audit one offboarding event",
      "href": "/blog/outsourced-programmer-access-checklist",
      "label": "Review the access checklist",
      "copy": "Choose one completed offboarding, rebuild the grant universe, and verify three closures at the source before extending the method."
    }
  }
];
