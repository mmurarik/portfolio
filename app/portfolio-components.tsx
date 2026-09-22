import SiteLink from './site-link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Motion from './motion';
import { projects } from './projects';

export const categories = [
  {href:'/llm-evaluation', title:'LLM evaluation', short:'LLM eval', description:'Evaluation systems that compare model behavior with human judgment and test whether the evaluation itself is trustworthy.', project:'AI judging panel', tags:'Evaluation · Study design'},
  {href:'/automation', title:'Automation', short:'Automation', description:'AI-operated workflows that connect existing systems while leaving approvals and publication decisions with people.', project:'Survey production', tags:'Python · APIs · Human approvals'},
  {href:'/data-engineering', title:'Data & analytics', short:'Data & analytics', description:'Data pipelines, validation systems, reporting workflows, and the checks that keep recurring work reliable.', project:'Benchmark validation', tags:'Data quality · ETL · Reporting'},
  {href:'/research', title:'Research', short:'Research', description:'Graduate psychology research, study design, statistics, and the research methods behind my technical work.', project:'Research background', tags:'Methods · Statistics · Human behavior'},
];

export function Shell({children,active}: {children:ReactNode,active?:string}) {return <>
  <Motion/><SiteLink className="skip" href="#content">Skip to content</SiteLink>
  <header className="header"><SiteLink className="wordmark" href="/">miranda murarik<span>↗</span></SiteLink><nav aria-label="Main navigation"><SiteLink href="/projects" aria-current={active==='/projects'?'page':undefined}>Projects</SiteLink><SiteLink href="/skills" aria-current={active==='/skills'?'page':undefined}>Skills</SiteLink><SiteLink href="/resume" aria-current={active==='/resume'?'page':undefined}>Resume</SiteLink><SiteLink className="nav-contact" href="mailto:mirandamurarik@gmail.com">Contact <ArrowUpRight size={16}/></SiteLink></nav></header>
  <main id="content">{children}</main>
  <footer><SiteLink href="/">Miranda Murarik</SiteLink><div><SiteLink href="https://github.com/mmurarik" target="_blank" rel="noreferrer">GitHub ↗</SiteLink><SiteLink href="https://www.linkedin.com/in/miranda-murarik/" target="_blank" rel="noreferrer">LinkedIn ↗</SiteLink></div><SiteLink href="#content">Back to top ↑</SiteLink></footer>
</>}

export function CategoryIntro({title,description}: {title:string,description:string}) {return <section className="category-intro"><SiteLink className="back-link" href="/projects">← All projects</SiteLink><div className="eyebrow">Project collection</div><h1>{title}</h1><p>{description}</p></section>}

export function OtherWork({current}: {current:string}) {return <nav className="other-work" aria-label="More project categories"><span>More work</span>{categories.filter(c=>c.href!==current).map(c=><SiteLink key={c.href} href={c.href}>{c.title}<ArrowUpRight size={17}/></SiteLink>)}</nav>}

export function ProjectList({ids}: {ids:string[]}) {return <div className="category-projects">{ids.map(id=>{const p=projects.find(p=>p.id===id)!;return <article className={`project reveal${p.diagram?'':' project-text'}`} id={p.id} key={p.id}>{p.diagram&&<div className="project-visual"><Diagram kind={p.diagram}/><div className="project-metric"><strong className={p.id==='indices'?'word-metric':undefined}>{p.metric}</strong><span>{p.unit}</span></div></div>}<div className="project-copy"><div className="eyebrow">{p.label}</div><h2>{p.title}</h2>{p.related&&<span className="project-related">{p.related}</span>}<p>{p.description}</p>{p.result&&<p className="result">{p.result}</p>}{p.decision&&<details><summary>How I approached it <span>+</span></summary><p>{p.decision}</p></details>}<div className="tools">{p.tools}</div></div></article>})}</div>}

export function ProjectCatalog() {return <div className="catalog-grid">{projects.map(p=><SiteLink className="catalog-card reveal" key={p.id} href={p.href??`${p.category}#${p.id}`}><div className="eyebrow">{categories.find(c=>c.href===p.category)?.title}</div><h2>{p.title}</h2><p>{p.description}</p>{p.related&&<span className="project-related">{p.related}</span>}<span className="catalog-action">View project <ArrowUpRight size={18}/></span></SiteLink>)}</div>}

export function ProjectGroups() {return <div className="project-groups">{categories.map((category,index)=>{
  const matches=projects.filter(project=>project.category===category.href);
  return <section className="project-group" id={category.href.slice(1)} key={category.href}>
    <div className="project-group-intro"><span>{String(index+1).padStart(2,'0')}</span><div><h2>{category.title}</h2><p>{category.description}</p></div><SiteLink href={category.href}>Open collection <ArrowUpRight size={17}/></SiteLink></div>
    {matches.length>0?<div className="project-group-grid">{matches.map(project=><SiteLink className="project-index-card reveal" key={project.id} href={project.href??`${project.category}#${project.id}`}><div className="eyebrow">{project.label}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-index-meta">{project.tools}</div><span>View project <ArrowUpRight size={17}/></span></SiteLink>)}</div>:<SiteLink className="research-index-card reveal" href="/research"><div><span className="eyebrow">Research archive</span><h3>Graduate research and methods</h3><p>I’m organizing the original research materials before publishing individual project write-ups.</p></div><span>View research background <ArrowUpRight size={17}/></span></SiteLink>}
  </section>})}</div>}

export function Diagram({kind}: {kind:string}) {
 if(kind==='pipeline') return <div className="flow-diagram" aria-label="Financial data flows from an API through Alteryx to BigQuery, with Tableau checks"><span>API</span><ArrowRight/><b>Alteryx</b><ArrowRight/><span>BigQuery</span></div>;
 if(kind==='flow') return <div className="flow-diagram" aria-label="Workflow: prepare, approve, build, approve, review"><span>Prepare</span><ArrowRight/><b>Approve</b><ArrowRight/><span>Build</span><ArrowRight/><b>Review</b></div>;
 if(kind==='matrix') return <div className="matrix-diagram" aria-label="Research practice configurations feed a shared validation engine"><div className="config-grid">{Array.from({length:8},(_,i)=><span key={i}>CONFIG</span>)}</div><ArrowRight/><strong>VALIDATE<br/><small>shared engine</small></strong></div>;
 return <div className="mapping-diagram" aria-label="Source records are checked against a historical reference before publishing"><span>Source records</span><div><i/><i/><i/></div><b>Reference check</b><ArrowRight/><span>CMS</span></div>;
}
