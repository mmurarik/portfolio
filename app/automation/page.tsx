import { projects } from '../projects';
import type { Metadata } from 'next';
import { Shell, CategoryIntro, ProjectList, OtherWork } from '../portfolio-components';
export const metadata:Metadata={title:'Automation | Miranda Murarik',description:'Survey production and conference publishing workflows, with human approvals and checks before production writes.'};
export default function Automation(){return <Shell active="/automation"><CategoryIntro title="Workflow automation" description="I build workflows that take care of repetitive system changes. The operator can review and approve the decisions before the work continues."/><ProjectList ids={projects.filter(p=>p.category==='/automation').map(p=>p.id)}/><OtherWork current="/automation"/></Shell>}
