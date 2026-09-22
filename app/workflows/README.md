# Project workflow visuals

`flows.json` contains public, high-level descriptions only. No member data, credentials, IDs, or application contents belong here. `project-workflow.tsx` renders the same map wherever a project appears.

## Sources in the career repository

- Evaluation, poll production, handoff, survey publishing, conference sync, speaker intake, financial indices, survey styling, ClickUp fields, meeting tasks: `portfolio/master-index.md`, architecture sections and supporting-project entries. Only qualitative architecture was used; no metrics were copied from this older index.
- Benchmark validation: `evidence/tsia/projects/benchmark-validation/Benchmark Validation/README.md`, Inputs, Outputs, and Analyst workflow. The diagram covers validation and Excel review, not the downstream push step.
- Instrument browser: `evidence/tsia/projects/benchmark-instruments-readonly/Benchmark_Instruments_ReadOnly/README.md`.
- Instrument updater: `portfolio/master-index.md`, Benchmark data platform / Instrument loaders, and the existing approved project description.
- Poll reports and dashboards: existing `app/automation/automation-projects.tsx` and `app/projects.ts` descriptions. The map stays at that documented level rather than assigning an unverified API or dashboard vendor.

Inputs and outputs grouped in a column represent multiple sources or destinations, not a claim that each node executes serially. The processing column names the documented implementation. Review notes describe only controls supported by the project records.
