import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return {
    title: s?.title || 'Service',
    description: s?.desc,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug) || services[0];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${siteUrl}/services/${s.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        name: s.title,
        url: serviceUrl,
        description: s.desc,
        isPartOf: { '@type': 'WebSite', name: site.brand, url: siteUrl },
        mainEntity: { '@id': `${serviceUrl}#service` },
        hasPart: [
          { '@id': `${serviceUrl}#launch-plan` },
          { '@id': `${serviceUrl}#faq` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: s.title,
        description: s.desc,
        provider: { '@type': 'Organization', name: site.brand, url: siteUrl },
        serviceType: 'Outsourced programming support',
        areaServed: 'United States',
        audience: { '@type': 'BusinessAudience', audienceType: site.audience },
      },
      {
        '@type': 'HowTo',
        '@id': `${serviceUrl}#launch-plan`,
        name: `How to start ${s.title.toLowerCase()}`,
        step: s.firstWeek.map((item, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: item,
          text: item,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: s.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: s.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{s.title}</h1>
              <p className="lead">{s.desc}</p>
              <p>{s.buyerProblem}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt="Software team reviewing work together" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h2>Best tasks to hand off</h2>
              <ul>{s.bestTasks.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Quality rules</h2>
              <ul>{s.qualityControls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card" id="launch-plan">
              <h2>First week launch plan</h2>
              <ol>{s.firstWeek.map((item) => <li key={item}>{item}</li>)}</ol>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">Buyer checks</p>
              <h2>Ask these before a programmer touches the repo.</h2>
              <div className="cards">
                {s.faqs.map((faq) => (
                  <div className="card" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h2>Sources used for this page</h2>
              <p>These are not sales proof. They are planning references for safer software handoffs.</p>
              <ul>
                {s.sources.map((source) => (
                  <li key={source.url}><a href={source.url}>{source.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
