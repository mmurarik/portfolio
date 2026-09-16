import { projects } from '../projects';
import SiteLink from '../site-link';

// Functional summaries for the Automation collection, using the catalog IDs.
const summaries: Record<string, { title: string; problem: string; solution: string; stack?: string }> = {
  polls: {
    title: 'Survey production pipeline',
    problem: 'Survey production required repeated updates across ClickUp, Google Sheets, Alchemer, and Contentful. A missed field or link could break the process.',
    solution: 'The user gives the AI a ClickUp task ID and answers a few questions. The AI runs the Python pipeline through setup, build, launch, and close, pausing only when an approval is required.',
    stack: 'Python · Claude Code · ClickUp · Google Sheets · Alchemer · Contentful',
  },
  publishing: {
    title: 'Conference content sync',
    problem: 'Conference sessions created in Cvent had to be entered again in Contentful, including matching each session author to the correct CMS record.',
    solution: 'The user asks the AI to run the sync. The AI uses the Python workflow to map the records, check author matches, and create Contentful drafts for review.',
    stack: 'Python · Cvent API · Contentful API',
  },
  handoff: {
    title: 'Workflow handoff toolkit',
    problem: 'AI-assisted workflows were difficult for another analyst to operate safely without the original builder present.',
    solution: 'The user can ask the AI to run a workflow in plain language. Project instructions, configuration, runbooks, and recovery guidance tell the AI what it can do and when it must stop for approval.',
    stack: 'Claude Code · YAML',
  },
  'survey-publishing': {
    title: 'Survey report publishing',
    problem: 'Publishing a survey report required analysts to transform results, write chart captions, summarize the findings, and enter the content in the CMS.',
    solution: 'The workflow prepares the results and uses AI to draft the chart captions and executive summary. It creates the CMS entries as drafts so the user only needs to review them.',
  },
  'speaker-intake': {
    title: 'Speaker intake pipeline',
    problem: 'Speaker applications collected in Alchemer had to be cleaned and re-entered in the conference team’s ClickUp tracker.',
    solution: 'The user gives the AI the survey export. The AI runs the Python scripts that clean each response and create the ClickUp tasks with the correct field mappings.',
  },
  transcripts: {
    title: 'SharePoint transcript extraction',
    problem: 'A SharePoint recording blocked transcript downloads, and the scrolling transcript panel loaded only part of the meeting at a time.',
    solution: 'The user asks the AI to collect the transcript. The AI controls the browser, scrolls through the panel, collects each visible entry, and removes duplicates.',
  },
  'survey-styling': {
    title: 'Alchemer survey styling',
    problem: 'Alchemer’s markup and stylesheet loading order overrode custom survey styles.',
    solution: 'The user asks the AI to style a survey. A reusable skill gives the AI the platform-specific rules and CSS pattern so it can apply the design inside Alchemer.',
    stack: 'CSS · Chrome DevTools · Claude',
  },
  'clickup-fields': {
    title: 'ClickUp field management',
    problem: 'Intake workflows depended on matching custom-field structures across multiple ClickUp lists.',
    solution: 'The user tells the AI which lists need to match. The AI runs the Python tools that create, copy, or update the field schemas and sync the survey responses.',
  },
  'meeting-tasks': {
    title: 'Meeting notes to tasks',
    problem: 'Project notes needed to be converted into structured ClickUp tasks.',
    solution: 'The user gives the meeting notes to the AI. It extracts the task details, asks for any missing information, and creates the ClickUp tasks.',
    stack: 'Claude Code · ClickUp',
  },
};

export default function AutomationProjects() {
  return <div className="automation-grid">
    {projects.filter(project => project.category === '/automation').map(project => {
      const summary = summaries[project.id];
      return <article className="automation-card" id={project.id} key={project.id}>
        <h2>{summary.title}</h2>
        <div className="automation-detail">
          <h3>Problem</h3>
          <p>{summary.problem}</p>
          <h3>AI solution</h3>
          <p>{summary.solution}</p>
        </div>
        {project.related && <p className="automation-context">{project.related}</p>}
        <div className="automation-stack">
          <h3>Stack</h3>
          <ul>{(summary.stack ?? project.tools).split(' · ').map(tool => <li key={tool}>{tool}</li>)}</ul>
        </div>
        {project.href && <SiteLink className="automation-link" href={project.href}>View project ↗</SiteLink>}
      </article>;
    })}
  </div>;
}
