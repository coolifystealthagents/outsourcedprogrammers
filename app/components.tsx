import {RefreshHeader,RefreshFooter} from './refresh-experience';
import { SiteNavigation } from './site-navigation';
import { stealthAgentsReviews } from './reviews';
export const site={brand:'Outsourced Programmers',domain:'outsourcedprogrammers.com'};
export function Header(_props: any = {}) { return <RefreshHeader/>; }
export function Footer(_props: any = {}) { return <RefreshFooter/>; }
export function CTA(){return <section className="final-cta"><p className="section-label">Start with one real ticket</p><h2>Build a programming lane your technical owner can review.</h2><p>Bring the stack, backlog, acceptance checks, and release boundaries. We will help scope the role around the work.</p><a className="btn primary" href="/contact-us">Discuss your programming needs</a></section>}
export function JsonLd({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
export function ReviewTape(){const repeated=[...stealthAgentsReviews,...stealthAgentsReviews];return <section className="review-tape" aria-label="Approved Stealth Agents client reviews"><div className="review-track">{repeated.map((review,index)=><article className="review-card" key={`${review.name}-${index}`} aria-hidden={index>=stealthAgentsReviews.length?true:undefined}><div aria-label="Five gold stars" className="review-stars">{[0,1,2,3,4].map(star=><i key={star} aria-hidden="true" />)}</div><blockquote>“{review.quote}”</blockquote><p><strong>{review.name}</strong><span>{review.role}</span></p></article>)}</div><p className="review-source">Approved first-party Stealth Agents client review register. Individual public review URLs were not supplied.</p></section>}
