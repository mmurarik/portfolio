import { projects } from '../projects';
import type { Metadata } from 'next';
import { Shell, CategoryIntro, ProjectList, OtherWork } from '../portfolio-components';
export const metadata:Metadata={title:'Data engineering | Miranda Murarik',description:'Benchmark validation and financial-data pipelines, including the checks and recurring maintenance behind them.'};
export default function DataEngineering(){return <Shell active="/data-engineering"><CategoryIntro title="Data engineering" description="Recurring research and reporting need data that holds up to scrutiny. My work includes the pipelines that move it and the checks that catch problems along the way."/><ProjectList ids={projects.filter(p=>p.category==='/data-engineering').map(p=>p.id)}/><OtherWork current="/data-engineering"/></Shell>}
