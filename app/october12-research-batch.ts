import type { ResearchPost } from './fleet-content';
export const october12ResearchBatch: ReadonlyArray<ResearchPost> = [
  {
    "slug": "code-review-rework-denominator-study",
    "title": "Code Review Rework: A Denominator-First Study",
    "excerpt": "A reproducible research protocol for code-review rework, with declared population, unit, strata, denominators, independent review, security controls, and explicit limitations.",
    "topic": "code-review rework",
    "published": "2026-10-12",
    "body": [
      "How can a team measure review rework without penalizing complex changes or rewarding shallow approval? This protocol defines the population as eligible review-ready pull requests in one declared repository group and observation window. Its observation unit is one pull request tied to its initial review-ready revision and accepted disposition. Freeze the decision purpose, systems, window, inclusion rules, and accountable owners before selecting records so the result cannot be redesigned after outcomes are visible.",
      "Research on code-review rework separates contributor preparation from consequential company decisions. An outsourced programmer may assemble evidence, run approved checks, and flag conflicts. Company owners retain access policy, product behavior, security exceptions, customer communication, merge approval, production execution, and risk acceptance.",
      "Build the sampling frame from authoritative version-control, CI, deployment, identity, inventory, or incident systems as appropriate to code-review rework. Record risk class, change type, size band, reviewer ownership, automated-check state, and new versus maintained code. Use consecutive eligible records where practical and include failed, changed, reopened, urgent, and externally blocked conditions.",
      "Report eligible count, observed count, exclusions, missing records, and protected evidence that could not be inspected for Code Review Rework: A Denominator-First Study. A convenient sample of clean cases can hide the exact tail conditions the study needs to reveal. Treat unavailable evidence as unavailable rather than replacing it with a summary.",
      "For each one pull request tied to its initial review-ready revision and accepted disposition, preserve source event, exact revision, rule or codebook version, actor, timestamp, environment, evidence, reviewer action, exception, and accepted destination state. Retain conflicting sources and record which authorized owner resolved them.",
      "Define time states before calculation. Separate active handling, contributor wait, company-owner wait, system delay, external dependency wait, and time outside the service window. Do not add overlapping intervals or infer labor from elapsed clock time in the code-review rework dataset.",
      "Primary measures are eligible reviews, substantive return rounds, corrected findings, reopened changes, escaped defects, and owner wait. Every rate displays its numerator, eligible denominator, observation window, exclusions, and missing-data count. Pair distributions with representative adverse cases; one average can conceal severe tails, correct stops, or work moved to another queue.",
      "Create a known-good and known-bad control for code-review rework. Confirm the method recognizes both. Recompute a protected subset from source artifacts and compare it with the generated result. A classifier that accepts an intentionally incomplete case is not reliable enough for management decisions.",
      "For Code Review Rework: A Denominator-First Study, give an independent reviewer the same codebook and protected sample without revealing first-pass classifications. Compare eligibility, source state, risk band, timing, exception, and disposition. Resolve ambiguity through the accountable owner rather than majority vote.",
      "Test alternative explanations before attributing a pattern to outsourced work. Change mix, reviewer capacity, tool migration, automation, incident discovery, dependency behavior, and company decision latency can affect code-review rework. This descriptive study does not establish causation unless its design supports that claim.",
      "Protect the Code Review Rework: A Denominator-First Study dataset itself. Use named least-privilege access, minimal fields, stable study keys, redacted outputs, approved storage, retention, and verified disposal. Records about code-review rework can reveal vulnerabilities, customer impact, personal information, secrets, and operational topology.",
      "For code-review rework, use NIST SSDF and Cybersecurity Framework outcomes to frame preparation, protection, detection, response, and recovery questions. CISA, SLSA, OpenSSF, OWASP, OpenTelemetry, GitHub, and Google SRE materials add authoritative practices but do not certify this result.",
      "Run sensitivity checks for Code Review Rework: A Denominator-First Study by varying plausible boundaries such as reopened-unit treatment, outage exclusion, risk bands, missing evidence, or wait ownership. If the conclusion changes materially, present both readings and label the decision that depends on the definition.",
      "Translate Code Review Rework: A Denominator-First Study findings into one bounded experiment relevant to code-review rework: repair intake, add a fixture, reserve reviewer capacity, remove stale access, rehearse recovery, or change an owner rule. Name its expected signal, owner, time limit, rollback, and review date.",
      "The observed rework pattern cannot establish individual productivity, reviewer quality, causation, or a universal target. Results also depend on local system accuracy, the stated period, risk class, change type, size band, reviewer ownership, automated-check state, and new versus maintained code, reviewer judgment, and protected-evidence access. Publish those limits next to conclusions rather than relegating them to a detached appendix.",
      "The practical finding for code-review rework is reproducibility within the declared boundary. Another reviewer should locate the included and excluded records, recalculate eligible reviews, substantive return rounds, corrected findings, reopened changes, escaped defects, and owner wait, explain conflicting evidence, identify retained authority, and verify the accepted state without private clarification."
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
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry specification",
        "https://opentelemetry.io/docs/specs/"
      ],
      [
        "Google SRE workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "related": [
      "deployment-rollback-rehearsal-reliability",
      "test-fixture-representativeness-analysis",
      "production-access-expiry-control-study"
    ],
    "hero": "/oct12/research/code-review-rework-denominator-study.png",
    "nextStep": {
      "heading": "Turn the finding into a bounded engineering brief",
      "href": "/contact",
      "label": "Plan the first reviewed ticket",
      "copy": "Bring the code-review rework evidence, systems, owners, and unresolved definitions to a scoped planning conversation."
    }
  },
  {
    "slug": "deployment-rollback-rehearsal-reliability",
    "title": "Deployment Rollback Rehearsals: A Reliability Protocol",
    "excerpt": "A reproducible research protocol for deployment rollback rehearsal, with declared population, unit, strata, denominators, independent review, security controls, and explicit limitations.",
    "topic": "deployment rollback rehearsal",
    "published": "2026-10-12",
    "body": [
      "What evidence shows that a rollback or forward-repair plan can restore a bounded service state? This protocol defines the population as eligible release artifacts and recovery procedures selected before their rehearsal outcomes are known. Its observation unit is one exact release artifact exercised through trigger, recovery action, and verified destination state. Freeze the decision purpose, systems, window, inclusion rules, and accountable owners before selecting records so the result cannot be redesigned after outcomes are visible.",
      "Research on deployment rollback rehearsal separates contributor preparation from consequential company decisions. An outsourced programmer may assemble evidence, run approved checks, and flag conflicts. Company owners retain access policy, product behavior, security exceptions, customer communication, merge approval, production execution, and risk acceptance.",
      "Build the sampling frame from authoritative version-control, CI, deployment, identity, inventory, or incident systems as appropriate to deployment rollback rehearsal. Record service criticality, stateful change, schema impact, configuration change, dependency, environment, and operator familiarity. Use consecutive eligible records where practical and include failed, changed, reopened, urgent, and externally blocked conditions.",
      "Report eligible count, observed count, exclusions, missing records, and protected evidence that could not be inspected for Deployment Rollback Rehearsals: A Reliability Protocol. A convenient sample of clean cases can hide the exact tail conditions the study needs to reveal. Treat unavailable evidence as unavailable rather than replacing it with a summary.",
      "For each one exact release artifact exercised through trigger, recovery action, and verified destination state, preserve source event, exact revision, rule or codebook version, actor, timestamp, environment, evidence, reviewer action, exception, and accepted destination state. Retain conflicting sources and record which authorized owner resolved them.",
      "Define time states before calculation. Separate active handling, contributor wait, company-owner wait, system delay, external dependency wait, and time outside the service window. Do not add overlapping intervals or infer labor from elapsed clock time in the deployment rollback rehearsal dataset.",
      "Primary measures are setup completeness, trigger detection, recovery interval, failed step, data reconciliation, independent replay, and accepted state. Every rate displays its numerator, eligible denominator, observation window, exclusions, and missing-data count. Pair distributions with representative adverse cases; one average can conceal severe tails, correct stops, or work moved to another queue.",
      "Create a known-good and known-bad control for deployment rollback rehearsal. Confirm the method recognizes both. Recompute a protected subset from source artifacts and compare it with the generated result. A classifier that accepts an intentionally incomplete case is not reliable enough for management decisions.",
      "For Deployment Rollback Rehearsals: A Reliability Protocol, give an independent reviewer the same codebook and protected sample without revealing first-pass classifications. Compare eligibility, source state, risk band, timing, exception, and disposition. Resolve ambiguity through the accountable owner rather than majority vote.",
      "Test alternative explanations before attributing a pattern to outsourced work. Change mix, reviewer capacity, tool migration, automation, incident discovery, dependency behavior, and company decision latency can affect deployment rollback rehearsal. This descriptive study does not establish causation unless its design supports that claim.",
      "Protect the Deployment Rollback Rehearsals: A Reliability Protocol dataset itself. Use named least-privilege access, minimal fields, stable study keys, redacted outputs, approved storage, retention, and verified disposal. Records about deployment rollback rehearsal can reveal vulnerabilities, customer impact, personal information, secrets, and operational topology.",
      "For deployment rollback rehearsal, use NIST SSDF and Cybersecurity Framework outcomes to frame preparation, protection, detection, response, and recovery questions. CISA, SLSA, OpenSSF, OWASP, OpenTelemetry, GitHub, and Google SRE materials add authoritative practices but do not certify this result.",
      "Run sensitivity checks for Deployment Rollback Rehearsals: A Reliability Protocol by varying plausible boundaries such as reopened-unit treatment, outage exclusion, risk bands, missing evidence, or wait ownership. If the conclusion changes materially, present both readings and label the decision that depends on the definition.",
      "Translate Deployment Rollback Rehearsals: A Reliability Protocol findings into one bounded experiment relevant to deployment rollback rehearsal: repair intake, add a fixture, reserve reviewer capacity, remove stale access, rehearse recovery, or change an owner rule. Name its expected signal, owner, time limit, rollback, and review date.",
      "A rehearsal in a controlled environment does not prove production recovery under every load, dependency, data, or incident condition. Results also depend on local system accuracy, the stated period, service criticality, stateful change, schema impact, configuration change, dependency, environment, and operator familiarity, reviewer judgment, and protected-evidence access. Publish those limits next to conclusions rather than relegating them to a detached appendix.",
      "The practical finding for deployment rollback rehearsal is reproducibility within the declared boundary. Another reviewer should locate the included and excluded records, recalculate setup completeness, trigger detection, recovery interval, failed step, data reconciliation, independent replay, and accepted state, explain conflicting evidence, identify retained authority, and verify the accepted state without private clarification."
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
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry specification",
        "https://opentelemetry.io/docs/specs/"
      ],
      [
        "Google SRE workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "related": [
      "code-review-rework-denominator-study",
      "test-fixture-representativeness-analysis",
      "production-access-expiry-control-study"
    ],
    "hero": "/oct12/research/deployment-rollback-rehearsal-reliability.png",
    "nextStep": {
      "heading": "Turn the finding into a bounded engineering brief",
      "href": "/contact",
      "label": "Plan the first reviewed ticket",
      "copy": "Bring the deployment rollback rehearsal evidence, systems, owners, and unresolved definitions to a scoped planning conversation."
    }
  },
  {
    "slug": "test-fixture-representativeness-analysis",
    "title": "Test Fixture Representativeness: An Engineering Analysis",
    "excerpt": "A reproducible research protocol for test-fixture representativeness, with declared population, unit, strata, denominators, independent review, security controls, and explicit limitations.",
    "topic": "test-fixture representativeness",
    "published": "2026-10-12",
    "body": [
      "How can maintainers assess whether safe test data exercises the relationships and edge conditions that matter? This protocol defines the population as approved fixtures used for a declared set of maintained behaviors and risk scenarios. Its observation unit is one fixture-to-scenario mapping with its source rationale, constraints, expected result, and observed coverage. Freeze the decision purpose, systems, window, inclusion rules, and accountable owners before selecting records so the result cannot be redesigned after outcomes are visible.",
      "Research on test-fixture representativeness separates contributor preparation from consequential company decisions. An outsourced programmer may assemble evidence, run approved checks, and flag conflicts. Company owners retain access policy, product behavior, security exceptions, customer communication, merge approval, production execution, and risk acceptance.",
      "Build the sampling frame from authoritative version-control, CI, deployment, identity, inventory, or incident systems as appropriate to test-fixture representativeness. Record data shape, boundary value, relationship, locale, time, permission, failure state, and largest supported case. Use consecutive eligible records where practical and include failed, changed, reopened, urgent, and externally blocked conditions.",
      "Report eligible count, observed count, exclusions, missing records, and protected evidence that could not be inspected for Test Fixture Representativeness: An Engineering Analysis. A convenient sample of clean cases can hide the exact tail conditions the study needs to reveal. Treat unavailable evidence as unavailable rather than replacing it with a summary.",
      "For each one fixture-to-scenario mapping with its source rationale, constraints, expected result, and observed coverage, preserve source event, exact revision, rule or codebook version, actor, timestamp, environment, evidence, reviewer action, exception, and accepted destination state. Retain conflicting sources and record which authorized owner resolved them.",
      "Define time states before calculation. Separate active handling, contributor wait, company-owner wait, system delay, external dependency wait, and time outside the service window. Do not add overlapping intervals or infer labor from elapsed clock time in the test-fixture representativeness dataset.",
      "Primary measures are scenario coverage, missing relationship, unrealistic simplification, privacy exposure, unstable expectation, and escaped fixture gap. Every rate displays its numerator, eligible denominator, observation window, exclusions, and missing-data count. Pair distributions with representative adverse cases; one average can conceal severe tails, correct stops, or work moved to another queue.",
      "Create a known-good and known-bad control for test-fixture representativeness. Confirm the method recognizes both. Recompute a protected subset from source artifacts and compare it with the generated result. A classifier that accepts an intentionally incomplete case is not reliable enough for management decisions.",
      "For Test Fixture Representativeness: An Engineering Analysis, give an independent reviewer the same codebook and protected sample without revealing first-pass classifications. Compare eligibility, source state, risk band, timing, exception, and disposition. Resolve ambiguity through the accountable owner rather than majority vote.",
      "Test alternative explanations before attributing a pattern to outsourced work. Change mix, reviewer capacity, tool migration, automation, incident discovery, dependency behavior, and company decision latency can affect test-fixture representativeness. This descriptive study does not establish causation unless its design supports that claim.",
      "Protect the Test Fixture Representativeness: An Engineering Analysis dataset itself. Use named least-privilege access, minimal fields, stable study keys, redacted outputs, approved storage, retention, and verified disposal. Records about test-fixture representativeness can reveal vulnerabilities, customer impact, personal information, secrets, and operational topology.",
      "For test-fixture representativeness, use NIST SSDF and Cybersecurity Framework outcomes to frame preparation, protection, detection, response, and recovery questions. CISA, SLSA, OpenSSF, OWASP, OpenTelemetry, GitHub, and Google SRE materials add authoritative practices but do not certify this result.",
      "Run sensitivity checks for Test Fixture Representativeness: An Engineering Analysis by varying plausible boundaries such as reopened-unit treatment, outage exclusion, risk bands, missing evidence, or wait ownership. If the conclusion changes materially, present both readings and label the decision that depends on the definition.",
      "Translate Test Fixture Representativeness: An Engineering Analysis findings into one bounded experiment relevant to test-fixture representativeness: repair intake, add a fixture, reserve reviewer capacity, remove stale access, rehearse recovery, or change an owner rule. Name its expected signal, owner, time limit, rollback, and review date.",
      "Fixture coverage demonstrates selected scenarios only; it does not prove production distribution, exhaustive correctness, or absence of unknown cases. Results also depend on local system accuracy, the stated period, data shape, boundary value, relationship, locale, time, permission, failure state, and largest supported case, reviewer judgment, and protected-evidence access. Publish those limits next to conclusions rather than relegating them to a detached appendix.",
      "The practical finding for test-fixture representativeness is reproducibility within the declared boundary. Another reviewer should locate the included and excluded records, recalculate scenario coverage, missing relationship, unrealistic simplification, privacy exposure, unstable expectation, and escaped fixture gap, explain conflicting evidence, identify retained authority, and verify the accepted state without private clarification."
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
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry specification",
        "https://opentelemetry.io/docs/specs/"
      ],
      [
        "Google SRE workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "related": [
      "code-review-rework-denominator-study",
      "deployment-rollback-rehearsal-reliability",
      "production-access-expiry-control-study"
    ],
    "hero": "/oct12/research/test-fixture-representativeness-analysis.png",
    "nextStep": {
      "heading": "Turn the finding into a bounded engineering brief",
      "href": "/contact",
      "label": "Plan the first reviewed ticket",
      "copy": "Bring the test-fixture representativeness evidence, systems, owners, and unresolved definitions to a scoped planning conversation."
    }
  },
  {
    "slug": "production-access-expiry-control-study",
    "title": "Production Access Expiry: A Control-Effectiveness Study",
    "excerpt": "A reproducible research protocol for production access expiry, with declared population, unit, strata, denominators, independent review, security controls, and explicit limitations.",
    "topic": "production access expiry",
    "published": "2026-10-12",
    "body": [
      "Do temporary engineering permissions expire and disappear from authoritative systems as approved? This protocol defines the population as eligible temporary production entitlements granted to in-scope development and support identities. Its observation unit is one entitlement linked to request, approver, purpose, grant event, expiry, use evidence, and final verification. Freeze the decision purpose, systems, window, inclusion rules, and accountable owners before selecting records so the result cannot be redesigned after outcomes are visible.",
      "Research on production access expiry separates contributor preparation from consequential company decisions. An outsourced programmer may assemble evidence, run approved checks, and flag conflicts. Company owners retain access policy, product behavior, security exceptions, customer communication, merge approval, production execution, and risk acceptance.",
      "Build the sampling frame from authoritative version-control, CI, deployment, identity, inventory, or incident systems as appropriate to production access expiry. Record system, privilege level, human or service identity, emergency status, duration, renewal, and role change. Use consecutive eligible records where practical and include failed, changed, reopened, urgent, and externally blocked conditions.",
      "Report eligible count, observed count, exclusions, missing records, and protected evidence that could not be inspected for Production Access Expiry: A Control-Effectiveness Study. A convenient sample of clean cases can hide the exact tail conditions the study needs to reveal. Treat unavailable evidence as unavailable rather than replacing it with a summary.",
      "For each one entitlement linked to request, approver, purpose, grant event, expiry, use evidence, and final verification, preserve source event, exact revision, rule or codebook version, actor, timestamp, environment, evidence, reviewer action, exception, and accepted destination state. Retain conflicting sources and record which authorized owner resolved them.",
      "Define time states before calculation. Separate active handling, contributor wait, company-owner wait, system delay, external dependency wait, and time outside the service window. Do not add overlapping intervals or infer labor from elapsed clock time in the production access expiry dataset.",
      "Primary measures are approved grant, timely expiry, stale access, excessive privilege, failed removal, renewal evidence, and exception age. Every rate displays its numerator, eligible denominator, observation window, exclusions, and missing-data count. Pair distributions with representative adverse cases; one average can conceal severe tails, correct stops, or work moved to another queue.",
      "Create a known-good and known-bad control for production access expiry. Confirm the method recognizes both. Recompute a protected subset from source artifacts and compare it with the generated result. A classifier that accepts an intentionally incomplete case is not reliable enough for management decisions.",
      "For Production Access Expiry: A Control-Effectiveness Study, give an independent reviewer the same codebook and protected sample without revealing first-pass classifications. Compare eligibility, source state, risk band, timing, exception, and disposition. Resolve ambiguity through the accountable owner rather than majority vote.",
      "Test alternative explanations before attributing a pattern to outsourced work. Change mix, reviewer capacity, tool migration, automation, incident discovery, dependency behavior, and company decision latency can affect production access expiry. This descriptive study does not establish causation unless its design supports that claim.",
      "Protect the Production Access Expiry: A Control-Effectiveness Study dataset itself. Use named least-privilege access, minimal fields, stable study keys, redacted outputs, approved storage, retention, and verified disposal. Records about production access expiry can reveal vulnerabilities, customer impact, personal information, secrets, and operational topology.",
      "For production access expiry, use NIST SSDF and Cybersecurity Framework outcomes to frame preparation, protection, detection, response, and recovery questions. CISA, SLSA, OpenSSF, OWASP, OpenTelemetry, GitHub, and Google SRE materials add authoritative practices but do not certify this result.",
      "Run sensitivity checks for Production Access Expiry: A Control-Effectiveness Study by varying plausible boundaries such as reopened-unit treatment, outage exclusion, risk bands, missing evidence, or wait ownership. If the conclusion changes materially, present both readings and label the decision that depends on the definition.",
      "Translate Production Access Expiry: A Control-Effectiveness Study findings into one bounded experiment relevant to production access expiry: repair intake, add a fixture, reserve reviewer capacity, remove stale access, rehearse recovery, or change an owner rule. Name its expected signal, owner, time limit, rollback, and review date.",
      "Entitlement records cannot prove what data was previously copied or every action taken; system-specific logs and incident review may still be required. Results also depend on local system accuracy, the stated period, system, privilege level, human or service identity, emergency status, duration, renewal, and role change, reviewer judgment, and protected-evidence access. Publish those limits next to conclusions rather than relegating them to a detached appendix.",
      "The practical finding for production access expiry is reproducibility within the declared boundary. Another reviewer should locate the included and excluded records, recalculate approved grant, timely expiry, stale access, excessive privilege, failed removal, renewal evidence, and exception age, explain conflicting evidence, identify retained authority, and verify the accepted state without private clarification."
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
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry specification",
        "https://opentelemetry.io/docs/specs/"
      ],
      [
        "Google SRE workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "related": [
      "code-review-rework-denominator-study",
      "deployment-rollback-rehearsal-reliability",
      "test-fixture-representativeness-analysis"
    ],
    "hero": "/oct12/research/production-access-expiry-control-study.png",
    "nextStep": {
      "heading": "Turn the finding into a bounded engineering brief",
      "href": "/contact",
      "label": "Plan the first reviewed ticket",
      "copy": "Bring the production access expiry evidence, systems, owners, and unresolved definitions to a scoped planning conversation."
    }
  },
  {
    "slug": "maintenance-backlog-risk-stratification",
    "title": "Software Maintenance Backlogs: A Risk-Stratification Study",
    "excerpt": "A reproducible research protocol for maintenance backlog risk, with declared population, unit, strata, denominators, independent review, security controls, and explicit limitations.",
    "topic": "maintenance backlog risk",
    "published": "2026-10-12",
    "body": [
      "How can a team classify maintenance work without letting age, noise, or vendor urgency replace technical judgment? This protocol defines the population as eligible unresolved maintenance items in declared repositories and services at a fixed snapshot time. Its observation unit is one backlog item linked to affected asset, evidence, exposure, dependency, owner, and disposition. Freeze the decision purpose, systems, window, inclusion rules, and accountable owners before selecting records so the result cannot be redesigned after outcomes are visible.",
      "Research on maintenance backlog risk separates contributor preparation from consequential company decisions. An outsourced programmer may assemble evidence, run approved checks, and flag conflicts. Company owners retain access policy, product behavior, security exceptions, customer communication, merge approval, production execution, and risk acceptance.",
      "Build the sampling frame from authoritative version-control, CI, deployment, identity, inventory, or incident systems as appropriate to maintenance backlog risk. Record security relevance, support status, customer impact, failure history, data sensitivity, recoverability, effort uncertainty, and dependency reach. Use consecutive eligible records where practical and include failed, changed, reopened, urgent, and externally blocked conditions.",
      "Report eligible count, observed count, exclusions, missing records, and protected evidence that could not be inspected for Software Maintenance Backlogs: A Risk-Stratification Study. A convenient sample of clean cases can hide the exact tail conditions the study needs to reveal. Treat unavailable evidence as unavailable rather than replacing it with a summary.",
      "For each one backlog item linked to affected asset, evidence, exposure, dependency, owner, and disposition, preserve source event, exact revision, rule or codebook version, actor, timestamp, environment, evidence, reviewer action, exception, and accepted destination state. Retain conflicting sources and record which authorized owner resolved them.",
      "Define time states before calculation. Separate active handling, contributor wait, company-owner wait, system delay, external dependency wait, and time outside the service window. Do not add overlapping intervals or infer labor from elapsed clock time in the maintenance backlog risk dataset.",
      "Primary measures are evidence completeness, risk band, owner agreement, blocked reason, age by state, remediation outcome, and reopened classification. Every rate displays its numerator, eligible denominator, observation window, exclusions, and missing-data count. Pair distributions with representative adverse cases; one average can conceal severe tails, correct stops, or work moved to another queue.",
      "Create a known-good and known-bad control for maintenance backlog risk. Confirm the method recognizes both. Recompute a protected subset from source artifacts and compare it with the generated result. A classifier that accepts an intentionally incomplete case is not reliable enough for management decisions.",
      "For Software Maintenance Backlogs: A Risk-Stratification Study, give an independent reviewer the same codebook and protected sample without revealing first-pass classifications. Compare eligibility, source state, risk band, timing, exception, and disposition. Resolve ambiguity through the accountable owner rather than majority vote.",
      "Test alternative explanations before attributing a pattern to outsourced work. Change mix, reviewer capacity, tool migration, automation, incident discovery, dependency behavior, and company decision latency can affect maintenance backlog risk. This descriptive study does not establish causation unless its design supports that claim.",
      "Protect the Software Maintenance Backlogs: A Risk-Stratification Study dataset itself. Use named least-privilege access, minimal fields, stable study keys, redacted outputs, approved storage, retention, and verified disposal. Records about maintenance backlog risk can reveal vulnerabilities, customer impact, personal information, secrets, and operational topology.",
      "For maintenance backlog risk, use NIST SSDF and Cybersecurity Framework outcomes to frame preparation, protection, detection, response, and recovery questions. CISA, SLSA, OpenSSF, OWASP, OpenTelemetry, GitHub, and Google SRE materials add authoritative practices but do not certify this result.",
      "Run sensitivity checks for Software Maintenance Backlogs: A Risk-Stratification Study by varying plausible boundaries such as reopened-unit treatment, outage exclusion, risk bands, missing evidence, or wait ownership. If the conclusion changes materially, present both readings and label the decision that depends on the definition.",
      "Translate Software Maintenance Backlogs: A Risk-Stratification Study findings into one bounded experiment relevant to maintenance backlog risk: repair intake, add a fixture, reserve reviewer capacity, remove stale access, rehearse recovery, or change an owner rule. Name its expected signal, owner, time limit, rollback, and review date.",
      "Risk bands support prioritization within the declared inventory; they are not vulnerability scores, legal advice, or predictions of failure. Results also depend on local system accuracy, the stated period, security relevance, support status, customer impact, failure history, data sensitivity, recoverability, effort uncertainty, and dependency reach, reviewer judgment, and protected-evidence access. Publish those limits next to conclusions rather than relegating them to a detached appendix.",
      "The practical finding for maintenance backlog risk is reproducibility within the declared boundary. Another reviewer should locate the included and excluded records, recalculate evidence completeness, risk band, owner agreement, blocked reason, age by state, remediation outcome, and reopened classification, explain conflicting evidence, identify retained authority, and verify the accepted state without private clarification."
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
        "GitHub pull request reviews",
        "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      ],
      [
        "OpenSSF Scorecard",
        "https://scorecard.dev/"
      ],
      [
        "SLSA specification",
        "https://slsa.dev/spec/v1.0/"
      ],
      [
        "OpenTelemetry specification",
        "https://opentelemetry.io/docs/specs/"
      ],
      [
        "Google SRE workbook",
        "https://sre.google/workbook/table-of-contents/"
      ],
      [
        "OWASP Application Security Verification Standard",
        "https://owasp.org/www-project-application-security-verification-standard/"
      ]
    ],
    "related": [
      "code-review-rework-denominator-study",
      "deployment-rollback-rehearsal-reliability",
      "test-fixture-representativeness-analysis"
    ],
    "hero": "/oct12/research/maintenance-backlog-risk-stratification.png",
    "nextStep": {
      "heading": "Turn the finding into a bounded engineering brief",
      "href": "/contact",
      "label": "Plan the first reviewed ticket",
      "copy": "Bring the maintenance backlog risk evidence, systems, owners, and unresolved definitions to a scoped planning conversation."
    }
  }
];
