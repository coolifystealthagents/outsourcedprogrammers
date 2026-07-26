import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const url = `https://${site.domain.toLowerCase()}/blog/${slug}`;

  return {
    title: post?.title || 'Guide',
    description: post?.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post?.title || 'Guide',
      description: post?.excerpt,
      url,
      type: 'article',
      siteName: site.brand,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  if (!detail) {
    return (
      <>
        <Header />
        <main className="section">
          <article className="container" style={{ maxWidth: 880 }}>
            <p className="eyebrow">{site.brand} guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="card">
              <h2>The short answer</h2>
              <p>Start with a low-risk ticket, a named code reviewer, and written limits on repository and production access.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>A real ticket with acceptance rules</li>
                <li>Repository and test-environment access</li>
                <li>Pull request and release rules</li>
                <li>A daily handoff with links and blockers</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the programmer and reviews the code?</li>
                <li>Who can merge and release?</li>
                <li>What happens when the assigned programmer changes?</li>
                <li>How are secrets and production access handled?</li>
              </ul>
            </div>
          </article>
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        url: articleUrl,
        mainEntityOfPage: { '@id': `${articleUrl}#webpage` },
        author: { '@type': 'Organization', name: site.brand, url: siteUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: detail.sources.map((source) => source.url),
        hasPart: detail.sections.map((section) => ({
          '@type': 'WebPageElement',
          '@id': `${articleUrl}#${section.id}`,
          name: section.title,
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${articleUrl}#webpage`,
        name: post.title,
        description: post.excerpt,
        url: articleUrl,
        isPartOf: { '@type': 'WebSite', name: site.brand, url: siteUrl },
        mainEntity: { '@id': `${articleUrl}#article` },
        hasPart: [
          { '@id': `${articleUrl}#readiness-check` },
          { '@id': `${articleUrl}#role-brief` },
          { '@id': `${articleUrl}#faq` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${articleUrl}#readiness-check`,
        name: 'Outsourced programmer handoff readiness check',
        itemListElement: detail.readinessRows.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: row.area,
          description: `Ready: ${row.ready}. Needs work: ${row.notReady}.`,
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${articleUrl}#role-brief`,
        name: 'Copy-ready outsourced programmer role brief',
        itemListElement: detail.roleBrief.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          description: item.text,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${articleUrl}#faq`,
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header hidePricing={detail.strictNoPricing} />
      <main className="section blog-detail">
        <JsonLd data={articleSchema} />
        <article className="container article-shell">
          <p className="eyebrow">Developer staffing guide · {post.minutes} minute read</p>
          <h1>{post.title}</h1>
          <p className="article-lead">{post.excerpt}</p>

          <aside className="takeaway-panel" aria-labelledby="takeaways-title">
            <p className="module-label">Quick read</p>
            <h2 id="takeaways-title">What to get right before you hire</h2>
            <ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>

          {detail.stats && (
            <section className="article-module" id="market-signals">
              <p className="module-label">Dated evidence</p>
              <h2>What the 2024 data says</h2>
              <div className="stat-grid">
                {detail.stats.map((stat) => <div className="stat-card" key={stat.label}><strong>{stat.value}</strong><h3>{stat.label}</h3><p>{stat.note}</p></div>)}
              </div>
            </section>
          )}

          {detail.banners?.[0] && <aside className="article-banner" data-banner-slot="1"><p className="module-label">{detail.banners[0].label}</p><h2>{detail.banners[0].title}</h2><p>{detail.banners[0].text}</p><a href={detail.banners[0].url}>{detail.banners[0].cta}</a></aside>}

          <section className="article-module" id="readiness-check">
            <p className="module-label">Readiness check</p>
            <h2>Is the handoff ready?</h2>
            <p>Use this table before you send the first ticket. Fix the weak spots while access is still limited.</p>
            <div className="table-scroll">
              <table>
                <thead><tr><th>Area</th><th>Ready</th><th>Needs work</th></tr></thead>
                <tbody>
                  {detail.readinessRows.map((row) => (
                    <tr key={row.area}><th scope="row">{row.area}</th><td>{row.ready}</td><td>{row.notReady}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {detail.chart && (
            <section className="visual-panel" id="evidence-chart">
              <p className="module-label">Labeled chart</p>
              <h2>{detail.chart.title}</h2>
              <div className="visual-scroll" tabIndex={0} aria-label={`${detail.chart.title}. Swipe or use arrow keys to see the full chart.`}>
                <svg className="evidence-chart" viewBox="0 0 820 330" role="img" aria-labelledby="chart-title chart-desc">
                  <title id="chart-title">{detail.chart.title}</title>
                  <desc id="chart-desc">Three horizontal bars labeled with their reported percentage values.</desc>
                  {detail.chart.bars.map((bar, index) => { const y=35+index*92; return <g key={bar.label}><text x="20" y={y} className="chart-label">{bar.label}</text><rect x="20" y={y+18} width="720" height="30" rx="4" className="chart-track"/><rect x="20" y={y+18} width={720*bar.value/100} height="30" rx="4" className="chart-fill"/><text x="755" y={y+41} className="chart-value">{bar.display}</text></g>; })}
                </svg>
              </div>
              <p className="methods-note">{detail.chart.methodsNote}</p>
            </section>
          )}

          {detail.banners?.[1] && <aside className="article-banner" data-banner-slot="2"><p className="module-label">{detail.banners[1].label}</p><h2>{detail.banners[1].title}</h2><p>{detail.banners[1].text}</p><a href={detail.banners[1].url}>{detail.banners[1].cta}</a></aside>}

          {detail.sections.map((section) => (
            <section className="article-copy" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}

          {detail.graphic && (
            <section className="visual-panel" id="review-path">
              <p className="module-label">Process graphic</p>
              <h2>{detail.graphic.title}</h2>
              <div className="visual-scroll" tabIndex={0} aria-label={`${detail.graphic.title}. Swipe or use arrow keys to see the full graphic.`}>
                <svg className="process-graphic" viewBox="0 0 920 230" role="img" aria-labelledby="graphic-title graphic-desc">
                  <title id="graphic-title">{detail.graphic.title}</title>
                  <desc id="graphic-desc">Four connected steps show a ticket moving through a branch and code review before release.</desc>
                  {detail.graphic.steps.map((step,index)=>{const x=20+index*225;return <g key={step.label}><rect x={x} y="35" width="190" height="140" rx="8" className="graphic-card"/><text x={x+18} y="72" className="graphic-title">{step.label}</text><foreignObject x={x+18} y="88" width="154" height="65"><p className="graphic-note">{step.note}</p></foreignObject>{index<detail.graphic!.steps.length-1&&<path d={`M ${x+190} 105 L ${x+220} 105`} className="graphic-arrow"/>}</g>})}
                </svg>
              </div>
              <p className="methods-note">The company owner sets the ticket and release rules. The developer prepares the branch and evidence, while the named reviewer checks the work before approval.</p>
            </section>
          )}

          {detail.expertQuote && <figure className="quote-panel"><blockquote>"{detail.expertQuote.quote}"</blockquote><figcaption>{detail.expertQuote.name}, {detail.expertQuote.role}. <a href={detail.expertQuote.sourceUrl}>Read the source</a>.</figcaption></figure>}

          <section className="brief-panel" id="role-brief">
            <p className="module-label">Copy-ready brief</p>
            <h2>Paste this into your hiring request</h2>
            <div className="brief-grid">
              {detail.roleBrief.map((item) => (
                <div key={item.label}><strong>{item.label}</strong><p>{item.text}</p></div>
              ))}
            </div>
          </section>

          {detail.internalLinks && <section className="article-module related-panel"><p className="module-label">Next steps</p><h2>Keep planning the role</h2><div className="related-grid">{detail.internalLinks.map((link)=><a href={link.url} key={link.url}><strong>{link.label}</strong><span>{link.note}</span></a>)}</div></section>}

          {detail.banners?.[2] && <aside className="article-banner" data-banner-slot="3"><p className="module-label">{detail.banners[2].label}</p><h2>{detail.banners[2].title}</h2><p>{detail.banners[2].text}</p><a href={detail.banners[2].url}>{detail.banners[2].cta}</a></aside>}

          <section className="article-copy" id="faq">
            <p className="module-label">Buyer questions</p>
            <h2>Questions about planning the role</h2>
            <div className="faq-list">
              {detail.faqs.map((faq) => (
                <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>
              ))}
            </div>
          </section>

          <section className="source-panel">
            <p className="module-label">Sources</p>
            <h2>Planning references</h2>
            <p>These links explain the security, code review, and worker classification points used in this guide.</p>
            <ol>
              {detail.sources.map((source) => (
                <li key={source.url}><a href={source.url}>{source.name}</a><span>{source.note}</span></li>
              ))}
            </ol>
          </section>
        </article>
        <CTA />
      </main>
      <Footer hidePricing={detail.strictNoPricing} />
    </>
  );
}
