import type { Metadata } from 'next';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { Shell } from '../portfolio-components';
import SiteLink from '../site-link';
// Text transcribed from portfolio/outward/catchall/MirandaMurarik_Resume_Public.html.
import resume from './resume-data.json';

export const metadata: Metadata = { title: 'Resume | Miranda Murarik', description: 'Miranda Murarik’s experience, education, skills, and downloadable résumé.' };
const resumePath = `${process.env.PAGES_BASE_PATH || ''}/miranda-murarik-resume.pdf`;

export default function Resume() { return <Shell active="/resume">
  <section className="page-hero resume-heading">
    <div className="eyebrow">Resume</div>
    <div className="resume-title-row"><h1>{resume.name}</h1><a className="download-link" href={resumePath} download>Download PDF <ArrowDownToLine size={18}/></a></div>
    <p>{resume.experience[0].roles[0].title} · Los Angeles, California</p>
    <div className="resume-contact"><SiteLink href="mailto:mirandamurarik@gmail.com">mirandamurarik@gmail.com</SiteLink><SiteLink href="https://www.linkedin.com/in/miranda-murarik/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></SiteLink></div>
  </section>
  <div className="resume-document">
    <section className="resume-section" aria-labelledby="experience-title">
      <h2 id="experience-title">Work experience</h2>
      <div className="resume-section-body">{resume.experience.map(employer=><article className="resume-employer" key={employer.organization}>
        <div className="resume-employer-heading"><h3>{employer.organization}</h3><span>{employer.dates}</span></div>
        {employer.roles.map(role=><section className="resume-role" key={role.title}>
          <div className="resume-role-heading"><h4>{role.title}</h4><span>{role.detail}</span></div>
          <ul>{role.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul>
        </section>)}
      </article>)}</div>
    </section>
    <section className="resume-section" aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      <div className="resume-section-body">{resume.education.map(education=><article className="resume-education" key={education.degree}><h3>{education.degree}</h3><p>{education.institution} · {education.location}</p></article>)}</div>
    </section>
    <section className="resume-section" aria-labelledby="resume-skills-title">
      <h2 id="resume-skills-title">Certifications<br/>and skills</h2>
      <dl className="resume-section-body resume-skills">{resume.skills.map(skill=><div key={skill.label}><dt>{skill.label}</dt><dd>{skill.text}</dd></div>)}</dl>
    </section>
  </div>
</Shell> }
