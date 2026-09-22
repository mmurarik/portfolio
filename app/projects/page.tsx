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
  <section className="build-method" aria-labelledby="build-method-title">
    <div className="eyebrow">Behind the projects</div>
    <h2 id="build-method-title">How I build and maintain these systems</h2>
    <p>I use Claude Code as my development partner. I map the process, connect the APIs, and turn the requirements into working software. I direct the work, test the results, and decide what is ready to use.</p>
    <dl>
      <div><dt>Project folders and AI instructions</dt><dd>Each project has its own folder, reusable skills, and instructions that give Claude Code the context and rules it needs to work on that system.</dd></div>
      <div><dt>Validation harnesses</dt><dd>I build tests and checks around each project so I can verify its behavior, catch failures, and review changes before relying on the output.</dd></div>
      <div><dt>Git and GitHub</dt><dd>I track changes with Git and maintain the repositories in GitHub so the code, decisions, and documentation can be reviewed, improved, and handed off.</dd></div>
    </dl>
    <p className="build-method-role">Claude Code appears first in the project stacks as my development partner. In workflows built to run through Claude Code, it also acts as the operator, following the project instructions and asking for the approvals I defined.</p>
  </section>
  <section className="category-grid project-collections" aria-label="Project collections">{categories.map(category=><SiteLink className="category-card reveal" href={category.href} id={category.href.slice(1)} key={category.href}>
    <h2>{category.title}</h2><p>{category.description}</p>
    <div className="category-feature"><span>{category.href==='/research'?'Coming later':'Featured project'}</span><strong>{category.project}</strong><small>{category.tags}</small></div>
    <span className="category-action">Explore {category.short}<ArrowUpRight size={18}/></span>
  </SiteLink>)}</section>
</Shell>}
