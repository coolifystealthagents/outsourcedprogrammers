import { Header, Footer } from "../components";
import { researchPosts } from "../fleet-content";
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
export const metadata = {
  title: "Research",
  description:
    "Sourced research notes about Philippines-based staffing and operations.",
  alternates: { canonical: "https://outsourcedprogrammers.com/research" },
};
export default function Research() {
  return (
    <>
      <Header />
      <main className="fleet-main">
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">
              Research library · {researchPosts.length} articles
            </p>
            <h1>Research for planning Philippines-based teams</h1>
            <p className="lead">
              Sourced notes about role design, operating controls, and staffing
              workflows for teams building clear work lanes.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {researchPosts.map((p) => (
              <a
                className="fleet-card"
                href={`/research/${p.slug}`}
                key={p.slug}
              >
                <p className="eyebrow">{p.topic || "Research"}</p>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <small>
                  Published <time dateTime={p.published}>{formatDate(p.published)}</time> · {p.sources?.length || 0} sources
                </small>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
