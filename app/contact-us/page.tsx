import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Header } from "../components";
import StandardContactForm from "./StandardContactForm";

export const metadata: Metadata = {
  title: "Hire Outsourced Programmers & Software Developers",
  description: "Tell us what you need from an outsourced programmer or software development team. Plan a dedicated developer role, workflow, and consultation.",
  alternates: { canonical: "https://outsourcedprogrammers.com/contact-us" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hire Outsourced Programmers & Software Developers",
    description: "Plan a dedicated outsourced developer role around your stack, backlog, review process, and working hours.",
    url: "https://outsourcedprogrammers.com/contact-us",
    type: "website",
    images: [{ url: "/programmer-workbench.jpg", width: 1200, height: 800, alt: "Programmer working at a development workstation" }],
  },
};

const preparation = [
  ["01", "Define the role", "Share the languages, frameworks, systems, and outcomes the programmer should own."],
  ["02", "Map the workflow", "Explain your backlog, repository access, code-review path, and release process."],
  ["03", "Set the working rhythm", "Clarify overlap hours, meeting cadence, documentation, and escalation expectations."],
  ["04", "Start with alignment", "Use the consultation to turn those details into a practical dedicated-talent brief."],
];

const capabilities = [
  "Front-end and full-stack development",
  "Back-end services and API implementation",
  "Web application maintenance and feature delivery",
  "CMS, ecommerce, and website development",
  "Quality assurance and regression support",
  "Database, integration, and automation work",
  "Technical documentation and handoff support",
  "Repository, ticket, and code-review workflows",
];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-shell contact-hero-grid">
          <div className="contact-hero-copy">
            <p className="contact-kicker">Dedicated programmer outsourcing</p>
            <h1>Build your next release with the right outsourced programmer.</h1>
            <p className="contact-lead">Tell us about your stack, roadmap, and delivery process. We’ll help you shape a clear request for dedicated software development talent.</p>
            <ul className="contact-proof" aria-label="Consultation benefits">
              <li>Role and technical requirements clarified</li>
              <li>Working hours and collaboration mapped</li>
              <li>Practical next steps, without a synthetic sales promise</li>
            </ul>
            <a className="contact-booking-link" href="/contact">Prefer to book directly? Choose a consultation time <span>→</span></a>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>

      <section className="contact-steps" aria-labelledby="prepare-title">
        <div className="contact-shell">
          <p className="contact-kicker dark">A more useful first conversation</p>
          <div className="contact-section-heading"><h2 id="prepare-title">Come prepared. Leave with a clearer developer brief.</h2><p>You do not need a finished job description. Bring what you know, and we will organize the important technical and operating details.</p></div>
          <div className="contact-card-grid">{preparation.map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="contact-capabilities" aria-labelledby="capabilities-title">
        <div className="contact-shell contact-capability-grid">
          <div><p className="contact-kicker">Where dedicated talent can help</p><h2 id="capabilities-title">Software development capability, scoped around your real work.</h2><p>Good outsourcing starts with specific ownership. We use your consultation to understand the work lane, the systems around it, and how your internal team will review progress.</p><a className="contact-inline-cta" href="#consultation">Discuss my developer needs →</a></div>
          <ul>{capabilities.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        </div>
      </section>

      <section className="contact-why" aria-labelledby="about-title">
        <div className="contact-shell contact-why-grid">
          <div className="contact-image-wrap"><Image src="/programmer-workbench.jpg" width={1200} height={800} sizes="(max-width: 900px) 100vw, 50vw" alt="Programmer working at a development workstation" /></div>
          <div><p className="contact-kicker dark">Full-time dedicated talent</p><h2 id="about-title">About Stealth Agents</h2><p className="contact-trust-copy">Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><p>Your programmer search should begin with the work, not a generic profile. Define the stack, responsibilities, security boundaries, communication rhythm, and acceptance process before deciding what a dedicated role should look like.</p><a className="contact-powered" href="https://stealthagents.com/">Powered by Stealth Agents</a></div>
        </div>
      </section>

      <section className="contact-mid-cta" id="consultation"><div className="contact-shell"><div><p className="contact-kicker">Your development brief can start here</p><h2>Turn an open role or stalled backlog into a structured conversation.</h2></div><a className="contact-cta-button" href="#top-form">Book My Free Consultation</a></div></section>

      <section className="contact-closing"><div className="contact-shell"><p>Outsourced programmer consultation</p><h2>Ready to define the developer your team needs?</h2><p>Share the scope today, or use the separate booking page to choose a conversation time.</p><div><a className="contact-cta-button" href="#top-form">Book My Free Consultation</a><a className="contact-secondary-button" href="/contact">Book a Time →</a></div></div></section>
    </main>
    <Footer />
  </>;
}
