import { ArrowRight, FileInput, Workflow, FileOutput, ShieldCheck } from 'lucide-react';
import flows from './flows.json';
import './workflows.css';

export default function ProjectWorkflow({id}: {id: string}) {
  const flow = flows[id as keyof typeof flows];
  if (!flow) return null;
  const stages = [
    {label: 'Inputs', icon: FileInput, nodes: flow.inputs},
    {label: 'Processing', icon: Workflow, nodes: flow.process},
    {label: 'Outputs', icon: FileOutput, nodes: flow.outputs},
  ];
  return <figure className="workflow-map" aria-labelledby={`workflow-${id}`}>
    <figcaption id={`workflow-${id}`}>How the workflow connects</figcaption>
    <div className="workflow-stages">{stages.map((stage, index) => <div className={`workflow-stage workflow-stage-${index}`} key={stage.label}>
      <div className="workflow-stage-label"><stage.icon size={16} aria-hidden="true"/>{stage.label}</div>
      <ol>{stage.nodes.map(node => <li className="workflow-node" key={node.name}>
        <span className="workflow-kind">{node.kind}</span><strong>{node.name}</strong><p>{node.detail}</p>
      </li>)}</ol>
      {index < stages.length - 1 && <ArrowRight className="workflow-connector" size={22} aria-hidden="true"/>}
    </div>)}</div>
    <div className="workflow-note"><ShieldCheck size={18} aria-hidden="true"/><p>{flow.note}</p></div>
  </figure>;
}
