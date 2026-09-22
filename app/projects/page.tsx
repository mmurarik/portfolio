import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Shell, categories } from '../portfolio-components';
import SiteLink from '../site-link';

export const metadata:Metadata={title:'Projects | Miranda Murarik',description:'Projects across LLM evaluation, automation, data engineering, and research.'};

export default function AllProjects(){return <Shell active="/projects">
  <section className="page-hero project-page-hero">
    <div className="eyebrow">Projects</div>
    <h1>Explore my work</h1>
    <p>Each project explains the problem, what I built, and the decisions that made the system reliable enough to use.</p>
    <nav className="project-jump" aria-label="Project categories">{categories.map((category,index)=><SiteLink key={category.href} href={category.href}><span>{String(index+1).padStart(2,'0')}</span>{category.short}</SiteLink>)}</nav>
  </section>
  <section className="category-grid project-collections" aria-label="Project collections">{categories.map(category=><SiteLink className="category-card reveal" href={category.href} id={category.href.slice(1)} key={category.href}>
    <h2>{category.title}</h2><p>{category.description}</p>
    <div className="category-feature"><span>{category.href==='/research'?'Coming later':'Featured project'}</span><strong>{category.project}</strong><small>{category.tags}</small></div>
    <span className="category-action">Explore {category.short}<ArrowUpRight size={18}/></span>
  </SiteLink>)}</section>
</Shell>}
