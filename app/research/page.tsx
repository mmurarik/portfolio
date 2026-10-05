import type { Metadata } from 'next';
import { Shell, CategoryIntro, OtherWork } from '../portfolio-components';

export const metadata:Metadata={
  title:'Research | Miranda Murarik',
  description:'Grant evaluation, psychophysiology, graduate and undergraduate research, study design, statistics, and conference poster presentations.',
};

const grants=[
  {
    funder:'SAMHSA',
    title:'MAT preparedness for nurse-practitioner training',
    description:'I supported the implementation and evaluation of a training program for nurse-practitioner students and community preceptors. My work included Qualtrics assessments, institutional data collection, data restructuring for required reporting, and IRB materials.',
    methods:'Program evaluation · Survey operations · Data preparation · IRB',
  },
  {
    funder:'SAMHSA',
    title:'SBIRT training across health disciplines',
    description:'I helped evaluate training integrated into psychology, social work, and nursing programs. I supported outcome-measure development, tested reliability and validity, ran statistical analyses, and wrote APA-formatted results for the funder.',
    methods:'ANOVA · Confirmatory factor analysis · Chi-square · Cronbach’s alpha',
  },
  {
    funder:'California Department of Health Care Services',
    title:'Youth substance-use prevention evidence review',
    description:'I reviewed models, policies, toolkits, white papers, and reports to identify practices that could inform a statewide framework for evaluating youth substance-use prevention programs.',
    methods:'Evidence review · Multiple-indicator analysis · Systematic-review preparation',
  },
  {
    funder:'SAMHSA',
    title:'Community prevention readiness',
    description:'I supported an evaluation focused on substance-use and HIV-risk prevention for young people. I helped develop a provider needs-assessment protocol, built required surveys, prepared data, and contributed to the IRB application.',
    methods:'Needs assessment · Qualtrics · Data cleaning · IRB',
  },
  {
    funder:'California Health Care Foundation',
    title:'Real-world medication-assisted treatment outcomes',
    description:'I worked with the evaluation team to develop patient and program outcome measures, prepare operational data for analysis, and assess data constraints and timeline feasibility.',
    methods:'Outcome measurement · Program evaluation · Data preparation',
  },
];

const studies=[
  {
    id:'restorative-vr',
    role:'Graduate research assistant',
    title:'Physiological responses to restorative VR environments',
    question:'How do virtual restorative environments affect physiological markers such as galvanic skin response?',
    contribution:'I scheduled and ran participants, collected physiological data, managed undergraduate research assistants, troubleshot the experimental setup, supported analysis, and contributed to the conference poster.',
    methods:'Virtual reality · iMotions · Unity · Shimmer ECG · JMP · SPSS',
  },
  {
    id:'undergraduate-research',
    role:'Undergraduate research assistant',
    title:'Cognition, morality, and heart-rate variability',
    question:'How does cardiac vagal tone relate to attention and judgments of fairness and unfairness?',
    contribution:'I scheduled and ran participants through the study using Sona Systems and E-Prime, organized the resulting data, and followed human-subject research procedures.',
    methods:'E-Prime · Sona Systems · Participant research · Data organization',
  },
  {
    id:'reaction-time',
    role:'Undergraduate research assistant',
    title:'Reaction time and facial-feature stimuli',
    question:'How could an experiment test cognitive reaction time in response to facial-feature stimuli?',
    contribution:'I compiled the literature review, drafted the university IRB proposal, prepared the visual stimuli in Photoshop, and added them to the E-Prime experiment.',
    methods:'Literature review · IRB · Stimulus development · Photoshop · E-Prime',
  },
];

const presentations=[
  {year:'2019',venue:'APU 25th Common Day of Learning · Azusa, CA',title:'Modulation of subjective and physiological biomarkers of acute stress with behavioral interventions'},
  {year:'2018',venue:'48th Society for Neuroscience Annual Convention · San Diego, CA',title:'Customizing galvanic vestibular stimulation amplitude using postural sway: sensitivity thresholds are reduced without vision and disrupted proprioceptive feedback'},
  {year:'2017',venue:'47th Society for Neuroscience Annual Convention · Washington, DC',title:'Measuring the Physiological Markers of Restorative Landscapes using Virtual Reality Environments'},
  {year:'2016',venue:'28th Association for Psychological Science Annual Convention · Chicago, IL',title:'Cardiac Vagal Tone: A Physiological Correlate of Attentional Flexibility of Fairness and Unfairness'},
];

export default function Research(){return <Shell active="/research">
  <CategoryIntro title="Research" description="Before I built AI evaluation systems, I worked in research psychology and grant evaluation. I designed studies and instruments, ran participant research, prepared and analyzed data, and translated findings for funders and operating teams."/>

  <section className="research-foundation" aria-labelledby="research-foundation-title">
    <div><div className="eyebrow">Research foundation</div><h2 id="research-foundation-title">Methods that still shape how I build</h2></div>
    <p>My technical work starts with the same questions I learned to ask in research: What are we measuring? Is the comparison valid? What could explain a surprising result? Where does the evidence stop? That foundation now informs how I evaluate AI systems and decide where human review belongs.</p>
    <ul aria-label="Research capabilities"><li>Experimental and non-experimental design</li><li>Program evaluation</li><li>Psychometrics and measurement</li><li>Quantitative and qualitative methods</li></ul>
  </section>

  <section className="research-collection" id="acute-stress" aria-labelledby="thesis-title">
    <div className="research-section-heading"><span>01</span><div><div className="eyebrow">Master’s thesis · Primary researcher</div><h2 id="thesis-title">Effect of Parasympathetic Pre-Conditioning on Acute Stress Responses</h2><p>My 2019 thesis at Azusa Pacific University asked whether a behavioral intervention that stimulates the parasympathetic system could buffer an acute stress response or improve recovery.</p></div></div>
    <article className="research-thesis-feature">
      <div className="research-thesis-lead"><div className="eyebrow">End-to-end research ownership</div><h3>From experimental design through the final manuscript</h3><p>I worked with a thesis advisor and second reader, designed the study protocol, ran participant sessions, resolved problems in the physiological recording setup, completed the analysis, and submitted the finished thesis to the university library.</p></div>
      <dl className="research-thesis-details">
        <div><dt>Study design and operation</dt><dd>Experimental protocol design, participant sessions, weekly research reviews, and human-subject study execution.</dd></div>
        <div><dt>Physiological measures</dt><dd>Electrodermal activity, photoplethysmography, and respiration recorded with BIOPAC hardware and AcqKnowledge.</dd></div>
        <div><dt>Analysis</dt><dd>ANOVA, regression, Wilcoxon signed-rank, Friedman’s ANOVA, and correlation using Excel, SPSS, JMP, and MATLAB.</dd></div>
        <div><dt>Research communication</dt><dd>Authored the literature review, methods, results, discussion, and conclusion; presented related work at APU’s 2019 Common Day of Learning.</dd></div>
      </dl>
    </article>
  </section>

  <section className="research-collection" id="grant-evaluation" aria-labelledby="grant-evaluation-title">
    <div className="research-section-heading"><span>02</span><div><div className="eyebrow">Applied research</div><h2 id="grant-evaluation-title">Grant-funded program evaluation</h2><p>At Azusa Pacific University, I supported evaluation work for federal, state, and nonprofit-funded health programs. The work combined research design with the operating details required to collect, clean, analyze, and report real program data.</p></div></div>
    <div className="research-card-grid research-grant-grid">{grants.map(grant=><article className="research-card" key={grant.title}><div className="eyebrow">{grant.funder}</div><h3>{grant.title}</h3><p>{grant.description}</p><span>{grant.methods}</span></article>)}</div>
  </section>

  <section className="research-collection" aria-labelledby="academic-research-title">
    <div className="research-section-heading"><span>03</span><div><div className="eyebrow">Research assistance</div><h2 id="academic-research-title">Graduate and undergraduate studies</h2><p>I contributed to collaborative psychophysiology and cognition studies as a graduate and undergraduate research assistant.</p></div></div>
    <div className="research-study-list">{studies.map(study=><article className="research-study" id={study.id} key={study.id}><div className="research-study-heading"><div className="eyebrow">{study.role}</div><h3>{study.title}</h3></div><dl><div><dt>Research question</dt><dd>{study.question}</dd></div><div><dt>My contribution</dt><dd>{study.contribution}</dd></div><div><dt>Methods and tools</dt><dd>{study.methods}</dd></div></dl></article>)}</div>
  </section>

  <section className="research-collection" aria-labelledby="presentations-title">
    <div className="research-section-heading"><span>04</span><div><div className="eyebrow">Research communication</div><h2 id="presentations-title">Conference poster presentations</h2><p>Selected collaborative research presented through psychology and neuroscience conferences and an APU research forum.</p></div></div>
    <ol className="presentation-list">{presentations.map(presentation=><li key={presentation.title}><time>{presentation.year}</time><div><h3>{presentation.title}</h3><p>{presentation.venue}</p></div></li>)}</ol>
  </section>

  <OtherWork current="/research"/>
</Shell>}
