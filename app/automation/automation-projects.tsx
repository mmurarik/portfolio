import SiteLink from '../site-link';
import ProjectWorkflow from '../workflows/project-workflow';

const method = [
  { title: 'Find the work', description: 'I looked for recurring processes where analysts were moving the same information between systems, repeating checks, or rebuilding the same output by hand.' },
  { title: 'Learn the process', description: 'I mapped the inputs, decisions, exceptions, and failure points. I also worked through API access and the constraints of each platform.' },
  { title: 'Design the boundary', description: 'I decided what the AI could handle, what belonged in deterministic code, and where a person still needed to review or approve the work.' },
  { title: 'Build and test it', description: 'I built the integrations, AI instructions, validation harnesses, dry runs, and recovery paths needed to use the workflow on real work.' },
  { title: 'Make it reusable', description: 'I packaged the work with configuration, skills, runbooks, decision records, and version control so the system could be maintained and handed off.' },
];

const projects = [
  {
    id: 'evaluation', area: 'AI evaluation', title: 'STAR Awards judging system',
    problem: 'Award judging depended on hundreds of hours of manual review, with no tested AI evaluation system in place.',
    build: 'I designed the judging architecture, criteria, scoring personas, processing pipeline, and validation study. When the first referee design rewarded polished writing instead of evidence, I caught the failure and rebuilt the test.',
    value: 'The live process moved from 330 hours of human grading to 10 hours of human review while preserving human oversight for the final decisions.',
    stack: ['Claude Code', 'LLM evaluation', 'Python', 'Statistical validation', 'Human review'], href: '/llm-evaluation/ai-judging-panel',
  },
  {
    id: 'polls', area: 'Research operations', title: 'Survey production pipeline',
    problem: 'Producing a poll required a long checklist of updates across ClickUp, Google Sheets, Alchemer, and Contentful.',
    build: 'I mapped the full lifecycle, connected each API, and built a Python pipeline with an AI operator layer. The user supplies a ClickUp task ID, answers a few questions, and approves the checkpoints that still require judgment.',
    value: 'A first-time operator completed setup and build with no manual system edits. The repetitive execution now happens inside the workflow.',
    stack: ['Claude Code', 'Python', 'ClickUp', 'Google Sheets', 'Alchemer', 'Contentful'],
  },
  {
    id: 'data', area: 'Data quality', title: 'Benchmark validation engine',
    problem: 'Each research practice had its own version of the validation logic, which made fixes and updates difficult to keep consistent.',
    build: 'I replaced the separate scripts with one configuration-driven Python engine. I kept member data out of the AI coding workflow and tested the system with synthetic fixtures and reconciliations against manual counts.',
    value: 'The research practices now share one validation system, and a new practice can be added through configuration instead of another copy of the code.',
    stack: ['Claude Code', 'Python', 'Data validation', 'Synthetic fixtures', 'Configuration'],
  },
  {
    id: 'instrument-browser', area: 'Research tools', title: 'Read-only benchmark instrument browser',
    problem: 'Published benchmark questions and modules lived in Contentful, where analysts could not easily browse, filter, or export them.',
    build: 'I built a tool that reads the instrument structure through the Contentful delivery API, filters the questions, and exports selected modules to Excel.',
    value: 'Analysts can retrieve the material they need without navigating the CMS or giving the tool permission to change the source content.',
    stack: ['Claude Code', 'Python', 'Contentful API', 'Excel', 'Read-only access'],
  },
  {
    id: 'instrument-loader', area: 'Content operations', title: 'Benchmark instrument updater',
    problem: 'Loading question, practice, and metric definitions into the CMS required repeated manual entry.',
    build: 'This was one of my first write-enabled API projects. I built a Python tool that reads the definitions from Excel, creates or updates them in Contentful, and records the result for every row.',
    value: 'The instrument setup can be run as a structured load with a record of what succeeded or failed.',
    stack: ['Claude Code', 'Python', 'Excel', 'Contentful API', 'Result logging'],
  },
  {
    id: 'survey-publishing', area: 'Content automation', title: 'Survey report publishing workflow',
    problem: 'Publishing survey results required transforming the data, writing chart captions and a summary, and entering the material into the CMS.',
    build: 'I built an Alteryx workflow that prepares the results, calls the OpenAI API for draft captions and an executive summary, and creates the Contentful entries as drafts.',
    value: 'The workflow performs the repeated preparation and content entry. The analyst reviews the generated drafts before publication.',
    stack: ['Claude Code', 'Alteryx', 'Alchemer', 'OpenAI API', 'Contentful API'],
  },
  {
    id: 'publishing', area: 'API integration', title: 'Conference content sync and author mapping',
    problem: 'Conference sessions created in Cvent had to be entered again in Contentful, and every speaker needed to be matched to the correct author record.',
    build: 'I built a one-way Python sync, added the matching logic, and checked the author results against archived sessions before any production write.',
    value: 'The workflow creates reviewable CMS drafts while preserving fields maintained by the content team and surfacing mismatches for investigation.',
    stack: ['Claude Code', 'Python', 'Cvent API', 'Contentful API', 'Validation'],
  },
  {
    id: 'speaker-intake', area: 'Intake automation', title: 'Speaker intake pipeline',
    problem: 'Speaker applications collected in Alchemer had to be cleaned and re-entered in the conference team’s ClickUp tracker.',
    build: 'I replaced the prior intake workflow with Python scripts that clean the survey responses and map each answer to the correct ClickUp field.',
    value: 'Applications move from the survey platform into the team’s working system without being re-keyed by hand.',
    stack: ['Claude Code', 'Python', 'Alchemer', 'ClickUp API', 'Data cleaning'],
  },
  {
    id: 'indices', area: 'Data engineering', title: 'Financial index data pipeline',
    problem: 'The recurring financial index refresh depended on manual vendor-workbook entry and a separate set of quality checks.',
    build: 'I migrated the process to an API-driven Alteryx pipeline feeding BigQuery, with outlier review in Tableau. I also owned the refresh process, documentation, and checks.',
    value: 'The quarterly refresh runs through a maintained pipeline with the data checks attached to the same operating process.',
    stack: ['Claude Code', 'Alteryx', 'BigQuery', 'Tableau', 'APIs'],
  },
  {
    id: 'handoff', area: 'AI enablement', title: 'AI workflow handoff system',
    problem: 'An automation is difficult to sustain when only its builder knows how to run it, test it, or recover from an error.',
    build: 'I created reusable skills, configuration files, project instructions, runbooks, decision records, credential boundaries, and GitHub repositories. Together, they teach the AI how to operate each workflow and tell the user where approval is required.',
    value: 'The system gives other operators a documented route into the work and gives future maintainers a record of why the workflow was built this way.',
    stack: ['Claude Code', 'Reusable skills', 'YAML', 'GitHub', 'Runbooks', 'Decision records'],
  },
  {
    id: 'survey-styling', area: 'AI-assisted frontend work', title: 'Alchemer survey styling automation',
    problem: 'Alchemer’s page structure and stylesheet loading order caused custom survey styles to be overridden.',
    build: 'I inspected the live survey DOM and loading order, found where the CSS needed to run, and packaged the platform-specific rules and brand template into a reusable AI skill.',
    value: 'Future survey styling starts with the tested platform rules instead of rediscovering the same undocumented behavior.',
    stack: ['Claude Code', 'CSS', 'Chrome DevTools', 'Alchemer', 'Reusable skills'],
  },
  {
    id: 'clickup-fields', area: 'API tooling', title: 'ClickUp custom-field tooling',
    problem: 'Intake workflows depended on matching custom-field structures across several ClickUp lists.',
    build: 'I built Python tools that create, copy, and update the field schemas and support the related survey-response sync.',
    value: 'The field setup can be repeated through code, which reduces manual configuration and keeps the intake structures consistent.',
    stack: ['Claude Code', 'Python', 'ClickUp API', 'Alchemer'],
  },
  {
    id: 'meeting-tasks', area: 'Conversational automation', title: 'Meeting notes to ClickUp tasks',
    problem: 'Meeting notes contained follow-up work that still needed to be translated into structured project tasks.',
    build: 'I created conversational automations that read the notes, identify the task details, ask for missing information, and create the ClickUp tasks.',
    value: 'The workflow provides a consistent route from a conversation record into the project system.',
    stack: ['Claude Code', 'Reusable skills', 'ClickUp'],
  },
  {
    id: 'poll-reporting', area: 'Survey reporting', title: 'Poll reports and survey dashboards',
    problem: 'The survey lifecycle needed a repeatable process for turning completed poll results into reports and dashboards.',
    build: 'I created AI automations that guide the preparation of poll reports and survey dashboards as part of the larger survey workflow.',
    value: 'The reporting steps are documented in an executable workflow that can be reused after each poll closes.',
    stack: ['Claude Code', 'Reusable skills', 'Survey reporting', 'Dashboard preparation'],
  },
];

export default function AutomationInitiative() {
  return <>
    <section className="program-thesis">
      <div className="eyebrow">Initiative ownership</div>
      <div className="program-thesis-grid">
        <h2>I started the initiative, then built the systems.</h2>
        <div>
          <p>Since March 2026, I have been finding manual processes across research and content operations and turning them into workflows that can be run through AI with minimal input.</p>
          <p>I initiated the work and chose the projects. For each one, I learned how information moved between people and platforms, gained access to the APIs, and decided how far the process could be automated safely.</p>
        </div>
      </div>
    </section>

    <section className="program-method" aria-labelledby="method-title">
      <div className="section-heading">
        <div className="eyebrow">The method I developed</div>
        <h2 id="method-title">From manual process to AI-operated system</h2>
      </div>
      <ol>{method.map((step, index) => <li key={step.title}>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </li>)}</ol>
    </section>

    <section className="program-evidence" aria-labelledby="evidence-title">
      <div className="section-heading">
        <div className="eyebrow">Project evidence</div>
        <h2 id="evidence-title">Each project, one by one</h2>
      </div>
      <div className="evidence-grid">{projects.map((project, index) => <article id={project.id} key={project.id}>
        <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
        <div className="eyebrow">{project.area}</div>
        <h3>{project.title}</h3>
        <ProjectWorkflow id={project.id}/>
        <div className="evidence-detail">
          <h4>Problem</h4><p>{project.problem}</p>
          <h4>What I built</h4><p>{project.build}</p>
          <h4>Company value</h4><p>{project.value}</p>
        </div>
        <div className="evidence-stack" aria-label={`${project.title} stack`}>{project.stack.map(tool => <span key={tool}>{tool}</span>)}</div>
        {project.href && <SiteLink className="evidence-link" href={project.href}>View the full case study ↗</SiteLink>}
      </article>)}</div>
    </section>

    <section className="program-value" aria-labelledby="value-title">
      <div>
        <div className="eyebrow">What this added</div>
        <h2 id="value-title">A reusable AI automation capability</h2>
      </div>
      <p>I built a way to keep finding, evaluating, and automating suitable work. The company gained working systems, a safer operating pattern for AI, and the documentation and infrastructure needed to extend the approach.</p>
    </section>
  </>;
}
