import type { Metadata } from 'next';
import { Shell, CategoryIntro, OtherWork } from '../portfolio-components';
export const metadata:Metadata={title:'Research | Miranda Murarik',description:'A space for graduate and psychology research. Project details are coming later.'};
export default function Research(){return <Shell active="/research">
  <CategoryIntro title="Research" description="This section will bring together my graduate and psychology research. I’m gathering the original materials before adding the project details."/>
  <section className="research-placeholder" aria-labelledby="research-placeholder-title">
    <div className="eyebrow">Project details coming later</div>
    <h2 id="research-placeholder-title">Research projects</h2>
    <p>Each entry will explain the question, my role, the methods, and what the study found.</p>
    <div className="research-outline" aria-label="Planned research entry structure">{['Research question','My role','Methods','Findings'].map(label=><div key={label}><h3>{label}</h3><div className="placeholder-lines" aria-hidden="true"><span/><span/></div></div>)}</div>
  </section>
  <OtherWork current="/research"/>
</Shell>}
