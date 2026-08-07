import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA } from '../../components';
import { researchPosts } from '../../fleet-content';
import { site } from '../../data';

export function generateStaticParams() { return researchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  const url = 'https://' + site.domain.toLowerCase() + '/research/' + slug;
  return { title: post?.title || 'Research', description: post?.excerpt, alternates: { canonical: url }, openGraph: { title: post?.title || 'Research', description: post?.excerpt, url, type: 'article', images: ['/programmer-workbench.jpg'] } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const sources = post.body.filter((line) => line.includes('http')).map((line) => line.match(/https?:\/\/\S+/)?.[0]).filter(Boolean);
  return <><Header /><main className="section blog-detail"><article className="container article-shell"><img src="/programmer-workbench.jpg" alt="Researcher reviewing a software operations brief" style={{ width: '100%', maxHeight: 360, objectFit: 'cover', marginBottom: 32 }} /><p className="eyebrow">Philippines staffing research · {post.published}</p><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p><section className="takeaway-panel"><p className="module-label">Research takeaway</p><h2>What the evidence supports</h2><p>{post.body[post.body.length - 1]}</p></section><section className="article-copy"><h2>Findings</h2>{post.body.filter((line) => !line.includes('http') && !line.startsWith('Research takeaway:')).map((line) => <p key={line}>{line}</p>)}</section><section className="article-module related-panel"><p className="module-label">Apply this research</p><h2>Next steps for your team</h2><div className="related-grid"><a href="/services/operations-support"><strong>Operations support</strong><span>Turn a research finding into a scoped work lane.</span></a><a href="/blog/outsourced-programmers-planning"><strong>Plan the role</strong><span>Define review, access, and handoff controls.</span></a><a href="/contact"><strong>Discuss your brief</strong><span>Bring the decision and its evidence to the next conversation.</span></a></div></section><section className="source-panel"><p className="module-label">Sources</p><h2>Research references</h2><ol>{sources.map((source) => <li key={source}><a href={source}>{source}</a><span>External reference used in this research note.</span></li>)}</ol></section></article><CTA /></main><Footer /></>;
}
