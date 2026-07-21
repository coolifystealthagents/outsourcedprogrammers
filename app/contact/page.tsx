import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Share the first tickets, stack, repository access, review owner, and release rules for an outsourced programmer role.',
};

export default function Contact() {
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <div className="container two">
          <div>
            <p className="eyebrow">Programmer role intake</p>
            <h1>Map the work before you request a programmer.</h1>
            <p className="lead">Tell us about the first tickets, codebase, access limits, and review owner. Those details are more useful than a long technology wish list.</p>
            <div className="card">
              <h2>What the request should cover</h2>
              <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Questions worth answering now</h2>
              <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
            </div>
            <p className="callout"><b>Role fit:</b> {staffingFitNote}</p>
          </div>
          <form className="card" action="/thank-you">
            <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Company / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Which tickets or programming work should move first?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Where do you need the most help?<br />
              <select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
                <option>Defining the first tickets</option>
                <option>Finding the right technical fit</option>
                <option>Code review and release control</option>
                <option>Repository access and data safety</option>
                <option>Onboarding and daily handoffs</option>
              </select>
            </label>
            <button className="btn" type="submit">Send the programmer request</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
