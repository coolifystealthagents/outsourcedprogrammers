import { Header, Footer } from '../components';
import { Library } from '../library';
import { normalizePosts } from '../library-normalize';
import { researchPosts } from '../fleet-content';
export const metadata={title:'Research',description:"Research and source-led notes on software delivery, team design, quality controls, and dependable engineering workflows.",alternates:{canonical:'/research'},openGraph:{images:[{url:"/library-20261112/engineering-research-36706460.webp",alt:"Software developer reviewing code across two monitors in an office"}]}};
export default function Index(){const posts=normalizePosts(researchPosts, 'research');const schema={'@context':'https://schema.org','@type':'CollectionPage',name:'Research',url:'https://outsourcedprogrammers.com/research',mainEntity:{'@type':'ItemList',itemListElement:posts.map((p,index)=>({'@type':'ListItem',position:index+1,url:`https://outsourcedprogrammers.com/research/${p.slug}`,name:p.title}))}};return <><Header/><main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\u003c")}}/><Library kind="research" posts={posts}/></main><Footer/></>;}
