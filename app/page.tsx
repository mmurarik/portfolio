import SiteLink from './site-link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Shell } from './portfolio-components';

const destinations = [
  {number:'01',href:'/projects',title:'Projects',description:'The systems I built across LLM evaluation, automation, data and analytics, and research.',action:'Explore the work'},
  {number:'02',href:'/skills',title:'Skills',description:'The technical, research, and delivery capabilities I use to take a workflow from problem to handoff.',action:'See my skills'},
  {number:'03',href:'/resume',title:'Resume',description:'My experience, education, and current résumé in one place.',action:'View my resume'},
];

export default function Portfolio(){return <Shell>
  <section className="portfolio-hero">
    <div className="hero-kicker"><span>AI SYSTEMS · EVALUATION · RESEARCH OPERATIONS</span><span>LOS ANGELES</span></div>
    <h1>I build AI systems<br/>and test whether<br/><em>they deserve trust.</em></h1>
    <div className="hero-brief"><p>I’m Miranda Murarik. I turn recurring research and content operations into systems that people can run, review, and maintain.</p><SiteLink href="#portfolio-index">Start here <ArrowDown size={18}/></SiteLink></div>
  </section>

  <section className="portfolio-index" id="portfolio-index" aria-labelledby="portfolio-index-title">
    <div className="index-heading"><span className="eyebrow">Portfolio index</span><h2 id="portfolio-index-title">Three ways to understand my work</h2></div>
    <div className="destination-list">{destinations.map(item=><SiteLink className="destination-row reveal" href={item.href} key={item.href}><span className="destination-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="destination-action">{item.action}<ArrowUpRight size={19}/></span></SiteLink>)}</div>
  </section>

  <section className="home-proof">
    <div><span className="eyebrow">Current focus</span><h2>AI systems for work that already matters</h2></div>
    <p>I work where engineering, analysis, and human judgment meet: awards evaluation, survey operations, benchmark data, and content publishing.</p>
    <SiteLink href="/projects">Browse projects <ArrowUpRight size={18}/></SiteLink>
  </section>

  <section className="contact simple-contact"><span className="eyebrow">Contact</span><SiteLink href="mailto:mirandamurarik@gmail.com">mirandamurarik@gmail.com<ArrowUpRight/></SiteLink></section>
</Shell>}
