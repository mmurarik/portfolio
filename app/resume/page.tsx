import type { Metadata } from 'next';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { Shell } from '../portfolio-components';
import SiteLink from '../site-link';

export const metadata:Metadata={title:'Resume | Miranda Murarik',description:'Miranda Murarik’s experience, education, and downloadable résumé.'};
const resumePath=`${process.env.PAGES_BASE_PATH || ''}/miranda-murarik-resume.pdf`;

export default function Resume(){return <Shell active="/resume">
  <section className="page-hero resume-hero"><div className="eyebrow">Resume</div><h1>Research training.<br/>Data systems.<br/>AI engineering.</h1><div><p>I build and evaluate systems for recurring research and content operations, with a focus on reliable handoffs between software and people.</p><a className="download-link" href={resumePath} download>Download PDF <ArrowDownToLine size={18}/></a></div></section>
  <section className="resume-layout">
    <aside><span className="eyebrow">At a glance</span><dl><div><dt>Current focus</dt><dd>AI automation and evaluation</dd></div><div><dt>Background</dt><dd>Research psychology and data analytics</dd></div><div><dt>Based in</dt><dd>Los Angeles, California</dd></div></dl><SiteLink href="https://www.linkedin.com/in/miranda-murarik/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17}/></SiteLink></aside>
    <div className="resume-frame"><object data={resumePath} type="application/pdf" aria-label="Miranda Murarik resume"><p>Your browser cannot display the PDF. <a href={resumePath}>Download the résumé.</a></p></object></div>
  </section>
</Shell>}
