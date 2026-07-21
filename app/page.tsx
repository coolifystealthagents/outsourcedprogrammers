import * as data from './data';
import { Header, Footer, JsonLd } from './components';

const d = data as any;
const site = d.site || {};
const services = (d.services || []).slice(0, 4);
const posts = (d.blogPosts || []).slice(0, 3);

const title = (item: any) => item.title || item.name || 'Development support';
const text = (item: any) => item.desc || item.excerpt || '';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: `https://${site.domain}`,
  };

  return (
    <>
      <Header />
      <main className="studio" data-design="sprint-desk-2026-07">
        <JsonLd data={schema} />

        <section className="hero">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span>01</span> Scope before shortlist</p>
              <h1>Hire outsourced programmers without losing code control.</h1>
              <p className="lead">
                Start with the backlog, repo rules, and reviewer. Then ask for a programmer who fits the work, not a pile of vague profiles.
              </p>
              <div className="actions">
                <a className="btn primary" href="/contact">Map the developer role</a>
                <a className="text-link" href="#workstreams">See the workstreams <span>↘</span></a>
              </div>
              <p className="fine-print">No rate card or mystery shortlist. The first conversation is about the work.</p>
            </div>

            <div className="hero-visual">
              <div className="photo-frame">
                <img src="/programmer-workbench.jpg" alt="Programmer working at a desktop code editor" />
                <div className="photo-label"><span className="live-dot" /> Repository-ready support</div>
              </div>
              <div className="code-card" aria-label="Example pull request review plan">
                <div className="code-top"><span>review-plan.md</span><i>example</i></div>
                <pre><code><b>owner:</b> your tech lead{`\n`}<b>first work:</b> low-risk tickets{`\n`}<b>merge:</b> review required{`\n`}<b>release:</b> your team approves</code></pre>
              </div>
            </div>
          </div>
          <div className="container signal-row" aria-label="Planning principles">
            <p>Before a candidate search</p>
            <span>Define the ticket</span>
            <span>Name the reviewer</span>
            <span>Limit the access</span>
            <span>Write the handoff</span>
          </div>
        </section>

        <section className="workbench container" aria-labelledby="workbench-title">
          <div className="section-intro">
            <p className="eyebrow dark"><span>02</span> The sprint desk</p>
            <h2 id="workbench-title">Write the brief like a ticket.</h2>
            <p>Spell out what changes, how it gets checked, and who can ship it. That gives a developer something real to respond to.</p>
          </div>
          <div className="desk-grid">
            <article className="desk-primary">
              <div className="desk-head"><span>Example first sprint</span><span className="status">planning sample</span></div>
              <h3>Clean up the release backlog</h3>
              <p>Pick a small set of bugs and maintenance tasks with acceptance rules already attached.</p>
              <div className="ticket-list">
                <div><span className="check">✓</span><p><b>Checkout bug</b><small>Repro steps and expected result included</small></p><em>review</em></div>
                <div><span className="check">✓</span><p><b>Dependency updates</b><small>One package group per pull request</small></p><em>queued</em></div>
                <div><span className="empty" /><p><b>Setup notes</b><small>Fix the commands that block a clean install</small></p><em>draft</em></div>
              </div>
            </article>
            <aside className="control-card">
              <p>Merge control</p>
              <strong>Code owner reviews every pull request.</strong>
              <span>Production access stays with your team unless you approve a different rule in writing.</span>
            </aside>
            <aside className="control-card cobalt">
              <p>Daily handoff</p>
              <strong>One note. Links included.</strong>
              <span>What changed, what is blocked, what needs review, and what comes next.</span>
            </aside>
          </div>
        </section>

        <section className="workstreams" id="workstreams">
          <div className="container">
            <div className="split-head">
              <div>
                <p className="eyebrow"><span>03</span> Workstreams</p>
                <h2>Choose the work before you choose the person.</h2>
              </div>
              <p>These starting points keep the first assignment narrow enough to review and useful enough to matter.</p>
            </div>
            <div className="stream-list">
              {services.map((service: any, index: number) => (
                <a href={`/services/${service.slug}`} key={service.slug}>
                  <span className="stream-number">0{index + 1}</span>
                  <div><h3>{title(service)}</h3><p>{text(service)}</p></div>
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="launch container" aria-labelledby="launch-title">
          <div className="section-intro narrow">
            <p className="eyebrow dark"><span>04</span> A controlled start</p>
            <h2 id="launch-title">Keep day one out of production.</h2>
            <p>Give the programmer a small path into the codebase. Keep a named technical owner on every decision that can affect customers.</p>
          </div>
          <div className="launch-grid">
            <article><span>day 01</span><h3>Open the right doors</h3><p>Share setup docs, sample pull requests, and limited access. Keep credentials out of chat and loose documents.</p></article>
            <article><span>first tickets</span><h3>Watch the handoff</h3><p>Use work with clear examples. Check the code, the notes, and how quickly questions surface.</p></article>
            <article><span>before release</span><h3>Keep approval local</h3><p>Your technical owner decides what merges and what ships. Expand ownership only after the working rhythm is solid.</p></article>
          </div>
        </section>

        <section className="guide-section">
          <div className="container guide-grid">
            <div className="guide-title">
              <p className="eyebrow"><span>05</span> Field notes</p>
              <h2>Read this before the first interview.</h2>
              <a className="text-link light" href="/blog">Browse all guides <span>↗</span></a>
            </div>
            <div className="guide-list">
              {posts.map((post: any) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>{post.minutes || 7} min</span>
                  <div><strong>{title(post)}</strong><p>{text(post)}</p></div>
                  <i>↗</i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="closing container">
          <p className="eyebrow dark"><span>06</span> Start with the real backlog</p>
          <div><h2>Bring the tickets. Leave with a clearer role.</h2><a className="btn primary" href="/contact">Map the programmer role</a></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
