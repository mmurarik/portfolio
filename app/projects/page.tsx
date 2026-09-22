import type { Metadata } from 'next';
import { Shell, ProjectGroups, categories } from '../portfolio-components';
import SiteLink from '../site-link';

export const metadata:Metadata={title:'Projects | Miranda Murarik',description:'Projects across LLM evaluation, automation, data and analytics, and research.'};

export default function AllProjects(){return <Shell active="/projects">
  <section className="page-hero project-page-hero">
    <div className="eyebrow">Projects</div>
    <h1>Work organized by<br/>the problem it solves</h1>
    <p>Each project explains the problem, what I built, and the decisions that made the system reliable enough to use.</p>
    <nav className="project-jump" aria-label="Project categories">{categories.map((category,index)=><SiteLink key={category.href} href={`#${category.href.slice(1)}`}><span>{String(index+1).padStart(2,'0')}</span>{category.short}</SiteLink>)}</nav>
  </section>
  <ProjectGroups/>
</Shell>}
