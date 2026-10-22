import type {Metadata} from 'next';
import {Header,Footer} from './components';
import {TopicHero} from './topic-hero';

export const metadata:Metadata={title:'Page Not Found',description:'The requested Outsourced Programmers page could not be found.',robots:{index:false,follow:true}};

export default function NotFound(){return <><Header/><main id="main-content" className="not-found-v3"><div className="not-found-copy-v3"><p className="section-label">Route not found</p><h1>That work lane is not here.</h1><p>The page may have moved, or the address may be incomplete. Return to the service directory, review the programming guides, or bring the work directly to the intake team.</p><div className="not-found-actions-v3"><a className="btn primary" href="/services">Browse programming services</a><a className="text-link" href="/contact-us">Contact Us <span aria-hidden="true">→</span></a></div></div><TopicHero title="Recovery route for your programming brief" kind="Route check"/></main><Footer/></>}
