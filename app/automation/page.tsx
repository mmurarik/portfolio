import type { Metadata } from 'next';
import { Shell, CategoryIntro, OtherWork } from '../portfolio-components';
import AutomationProjects from './automation-projects';
import './automation.css';
export const metadata:Metadata={title:'Automation | Miranda Murarik',description:'Survey production and conference publishing workflows, with human approvals and checks before production writes.'};
export default function Automation(){return <Shell active="/automation"><CategoryIntro title="Automation" description="I turned manual processes into workflows that run through AI with minimal input. The repetitive execution is automated; the user supplies the source material and reviews the checkpoints that still need judgment."/><AutomationProjects/><OtherWork current="/automation"/></Shell>}
