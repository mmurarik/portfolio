import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Shell } from '../portfolio-components';
import SiteLink from '../site-link';

export const metadata:Metadata={title:'Skills | Miranda Murarik',description:'Skills across AI systems, engineering, research, analytics, and technical delivery.'};

const groups=[
  {number:'01',title:'AI systems',lead:'I design workflows where an LLM uses tools, follows project instructions, and stops when a person needs to decide.',skills:['LLM pipeline design','Evaluation design','Claude Code skills','MCP integrations','Faithfulness checks','Human-in-the-loop workflows']},
  {number:'02',title:'Engineering & data',lead:'I connect systems, structure recurring work, and build the checks needed to operate it safely.',skills:['Python','API integrations','SQL & BigQuery','Alteryx','Data validation','Automated testing','Git & versioned handoffs']},
  {number:'03',title:'Research & analytics',lead:'My research training shapes how I define evidence, compare judgments, and investigate surprising results.',skills:['Study design','Inter-rater reliability','Statistical analysis','Classical machine learning','Experimental validation','Physiological data analysis']},
  {number:'04',title:'Delivery',lead:'I translate a process into something another person can understand, run, and maintain.',skills:['Requirements discovery','Process mapping','Runbooks & documentation','Stakeholder communication','Operator training','Technical handoff']},
];

export default function Skills(){return <Shell active="/skills">
  <section className="page-hero skills-hero"><div className="eyebrow">Skills</div><h1>What I use to move from a manual process to a working system</h1><p>The tools matter. So do the choices about evidence, safety, ownership, and what should remain a human decision.</p></section>
  <div className="skills-groups">{groups.map(group=><section className="skill-group reveal" key={group.title}><span>{group.number}</span><div><h2>{group.title}</h2><p>{group.lead}</p></div><ul>{group.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></section>)}</div>
  <section className="skills-bridge"><h2>See the skills in context</h2><p>The project pages show how these capabilities work together on real operating problems.</p><SiteLink href="/projects">Explore projects <ArrowUpRight size={18}/></SiteLink></section>
</Shell>}
