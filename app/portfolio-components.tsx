import SiteLink from './site-link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Motion from './motion';
import { projects } from './projects';

export const categories = [
  {href:'/llm-evaluation', title:'LLM evaluation', description:'Comparing AI judgments with human experts and checking the evaluation itself.', project:'AI judging panel', tags:'Evaluation · Study design'},
  {href:'/automation', title:'Automation', description:'Workflows that handle system changes and leave decisions with the operator.', project:'Survey production', tags:'Python · APIs · Human approvals'},
  {href:'/research', title:'Research', description:'A space for my graduate and psychology research. Project details are coming later.', project:'Research projects', tags:'Details to come'},
  {href:'/data-engineering', title:'Data engineering', description:'Pipelines and checks behind recurring research and reporting.', project:'Benchmark validation', tags:'Data quality · ETL'},
];

export function Shell({children,active}: {children:ReactNode,active?:string}) {return <>
  <Motion/><SiteLink className="skip" href="#content">Skip to content</SiteLink>
  <header className="header"><SiteLink className="wordmark" href="/">miranda murarik<span>↗</span></SiteLink><nav aria-label="Main navigation"><SiteLink href="/projects" aria-current={active==='/projects'?'page':undefined}>All projects</SiteLink>{categories.map(c=><SiteLink key={c.href} href={c.href} aria-current={active===c.href?'page':undefined}>{c.title}</SiteLink>)}<SiteLink href="/#about">About</SiteLink><SiteLink className="nav-contact" href="mailto:mirandamurarik@gmail.com">Let’s talk <ArrowUpRight size={16}/></SiteLink></nav></header>
  <main id="content">{children}</main>
  <footer><SiteLink href="/">Miranda Murarik</SiteLink><span>AI automation engineer</span><SiteLink href="#content">Back to top ↑</SiteLink></footer>
</>}

export function CategoryIntro({title,description}: {title:string,description:string}) {return <section className="category-intro"><SiteLink className="back-link" href="/projects">← All projects</SiteLink><div className="eyebrow">Project collection</div><h1>{title}</h1><p>{description}</p></section>}

export function OtherWork({current}: {current:string}) {return <nav className="other-work" aria-label="More project categories"><span>More work</span>{categories.filter(c=>c.href!==current).map(c=><SiteLink key={c.href} href={c.href}>{c.title}<ArrowUpRight size={17}/></SiteLink>)}</nav>}

export function ProjectList({ids}: {ids:string[]}) {return <div className="category-projects">{ids.map(id=>{const p=projects.find(p=>p.id===id)!;return <article className={`project reveal${p.diagram?'':' project-text'}`} id={p.id} key={p.id}>{p.diagram&&<div className="project-visual"><Diagram kind={p.diagram}/><div className="project-metric"><strong className={p.id==='indices'?'word-metric':undefined}>{p.metric}</strong><span>{p.unit}</span></div></div>}<div className="project-copy"><div className="eyebrow">{p.label}</div><h2>{p.title}</h2>{p.related&&<span className="project-related">{p.related}</span>}<p>{p.description}</p>{p.result&&<p className="result">{p.result}</p>}{p.decision&&<details><summary>How I approached it <span>+</span></summary><p>{p.decision}</p></details>}<div className="tools">{p.tools}</div></div></article>})}</div>}

export function ProjectCatalog() {return <div className="catalog-grid">{projects.map(p=><SiteLink className="catalog-card reveal" key={p.id} href={p.href??`${p.category}#${p.id}`}><div className="eyebrow">{categories.find(c=>c.href===p.category)?.title}</div><h2>{p.title}</h2><p>{p.description}</p>{p.related&&<span className="project-related">{p.related}</span>}<span className="catalog-action">View project <ArrowUpRight size={18}/></span></SiteLink>)}</div>}

export function Diagram({kind}: {kind:string}) {
 if(kind==='pipeline') return <div className="flow-diagram" aria-label="Financial data flows from an API through Alteryx to BigQuery, with Tableau checks"><span>API</span><ArrowRight/><b>Alteryx</b><ArrowRight/><span>BigQuery</span></div>;
 if(kind==='flow') return <div className="flow-diagram" aria-label="Workflow: prepare, approve, build, approve, review"><span>Prepare</span><ArrowRight/><b>Approve</b><ArrowRight/><span>Build</span><ArrowRight/><b>Review</b></div>;
 if(kind==='matrix') return <div className="matrix-diagram" aria-label="Research practice configurations feed a shared validation engine"><div className="config-grid">{Array.from({length:8},(_,i)=><span key={i}>CONFIG</span>)}</div><ArrowRight/><strong>VALIDATE<br/><small>shared engine</small></strong></div>;
 return <div className="mapping-diagram" aria-label="Source records are checked against a historical reference before publishing"><span>Source records</span><div><i/><i/><i/></div><b>Reference check</b><ArrowRight/><span>CMS</span></div>;
}
