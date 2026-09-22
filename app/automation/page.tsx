import type { Metadata } from 'next';
import { Shell, CategoryIntro, OtherWork } from '../portfolio-components';
import AutomationProjects from './automation-projects';
import './automation.css';
export const metadata:Metadata={title:'AI automation initiative | Miranda Murarik',description:'How I created an internal AI automation initiative across research and content operations.'};
export default function Automation(){return <Shell active="/automation"><CategoryIntro title="AI automation initiative" description="How I identified manual work, built AI-operated systems around it, and created a repeatable way to automate more of the organization’s operations."/><AutomationProjects/><OtherWork current="/automation"/></Shell>}
