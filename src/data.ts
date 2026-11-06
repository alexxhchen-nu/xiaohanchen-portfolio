export type SectionKey = 'projects' | 'publications' | 'shop' | 'code' | 'reading' | 'interests' | 'design';
export type View = 'home' | SectionKey;

export const SECTIONS: { key: SectionKey; no: string; title: string; blurb: string }[] = [
  { key: 'projects', no: '01', title: 'Projects', blurb: 'Research, tools & interactive systems' },
  { key: 'publications', no: '02', title: 'Publications', blurb: 'Preprints, manuscripts & ORCID works' },
  { key: 'shop', no: '03', title: 'Tools & Packs', blurb: 'Agent skills, interactive studios & templates' },
  { key: 'code', no: '04', title: 'Code', blurb: 'Open-source repos, MCP servers & pipelines' },
  { key: 'reading', no: '05', title: 'Reading', blurb: 'Empirical synthesis & methodology' },
  { key: 'interests', no: '06', title: 'Interests', blurb: 'Digital humanities, CSS, data journalism & fencing' },
  { key: 'design', no: '07', title: 'Design', blurb: 'Interactive SVG, 3D modeling & visual systems' },
];

export const PROFILE = 'Senior journalism & economics student at Northwestern University working across full-stack digital humanities, computational social science, and data journalism. I deconstruct complex problems from first principles, compose modular AI and agentic infrastructure, and ship grounded, visually rigorous tools and interactive explainers.';

export const WORKING_ON: { id: string; tag: string; title: string; detail: string; status: string; targetView?: SectionKey }[] = [
  {
    id: 'w1',
    tag: 'Clinical NLP · Active Spec & Workbench',
    title: 'psychtool — Provenance-First Clinical Writing Workspace',
    detail: 'Designing an evidence-grounded background-writing studio for PsyD workflows. Preserves multi-informant conflicts (youth vs. caregiver vs. teacher), enforces strict case isolation, and flags stale claims when source records change.',
    status: 'Interactive Studio Live ↓',
    targetView: 'projects',
  },
  {
    id: 'w2',
    tag: 'Target: CCR Research Note · Deployed on Modal',
    title: 'Intergenerational Trauma P4 — Leakage Audit & Multimodal RoBERTa API',
    detail: 'End-to-end audit of 4,094 narratives across 8 public corpora exposing circular labels and label-derived metadata confounds, paired with an audited RoBERTa-large inference endpoint on Modal.',
    status: 'Manuscript Packaged / API Live',
    targetView: 'publications',
  },
  {
    id: 'w3',
    tag: 'Preprint & Target: SNAM · ORCID 0009-0003-7124-5208',
    title: 'Social Network Extraction from Public Legal Archives',
    detail: 'Evaluating how entity/relation extraction errors propagate to network-level outcomes (PageRank perturbation, modularity fragmentation) across 505 nodes and 434 edges from public DOJ records.',
    status: 'Preprint Ready (Nov 2026)',
    targetView: 'publications',
  },
  {
    id: 'w4',
    tag: 'Digital Humanities · CLI + MCP + Obsidian + 3D',
    title: 'Archaeo-Tomb-Parser & Spatial 3D Reconstruction',
    detail: 'Transforming Chinese archaeological excavation reports and noisy PDF scans into schema-validated JSON/CSV and interactive 3D tomb morphology comparisons.',
    status: 'Shipped on GitHub',
    targetView: 'shop',
  },
];

export const EDUCATION = {
  school: 'Northwestern University, Medill School of Journalism — Evanston, Illinois',
  degree: 'Bachelor of Science in Journalism & Second Major in Economics | Expected June 2027 | GPA: 3.76/4.00',
  bullets: [
    'Specialization: Digital Investigative Journalism; Second Major: Economics (declared Fall 2025)',
    'Relevant coursework: Data Journalism, News Research Methods, Data Visualization Storytelling, Investigative Reporting, Knight Lab Studio, Cultural Analytics, Media Law & Ethics, Microeconomics, Macroeconomics',
    'Five-time Dean’s List; Big Ten Academic All-American Scholar',
    'Three-year NCAA Division I student-athlete (retired); member of Canada’s national fencing team and multiple-time Canadian national champion',
    'Undergraduate Peer Adviser and Learning (UPAL) mentor',
  ],
};

export const LEADERSHIP = {
  title: 'Vice President — Diaspora Writers Society',
  meta: 'Evanston, Illinois | April 2025–Present',
  bullets: [
    'Support community communications, Substack operations, and bilingual digital-media growth.',
    'Organize online and in-person content events; coordinate member communications and publication.',
    'Maintain visual identity and content consistency across digital channels.',
  ],
};

export const LANGUAGES = 'Chinese and English (bilingual)';

export type Publication = {
  id: number;
  year: string;
  venue: string;
  status: string;
  title: string;
  authors: string;
  orcid: string;
  summary: string;
  artifacts: string[];
  link?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: 0,
    year: '2026',
    venue: 'Preprint · Target: Social Network Analysis and Mining (SNAM)',
    status: 'Preprint / Zenodo & LaTeX Package Ready',
    title: 'Social Network Extraction from Public Legal Archives: Methods, Error Propagation, and a Motivating Public-Record Case',
    authors: 'Xiaohan Chen (Northwestern University)',
    orcid: '0009-0003-7124-5208',
    summary: 'Reviews text-to-graph extraction pipelines (rules, classical sequence models, LLM prompting/fine-tuning) on docket-scale legal records and argues evaluation must measure network-level perturbation (PageRank, modularity, identity splits) rather than span-level F1 alone. Demonstrates error propagation on a 505-node, 434-edge public DOJ communication graph.',
    artifacts: ['LaTeX Source & PDF (240 KB)', '505-Node Gephi / Interactive Web Graph', 'Zenodo Archival Metadata'],
    link: 'https://orcid.org/0009-0003-7124-5208',
  },
  {
    id: 1,
    year: '2026',
    venue: 'Manuscript · Target: Computational Communication Research (CCR — Research Note)',
    status: 'OJS Submission Package Ready',
    title: 'Repurposing Public Mental-Health Corpora for Intergenerational Trauma Exposure Prediction: Circular Labels, Label-Derived Metadata, and Source Confounds',
    authors: 'Xiaohan Chen (Northwestern University)',
    orcid: '0009-0003-7124-5208',
    summary: 'Audits an end-to-end multimodal prediction pipeline across 4,094 narratives from 8 public corpora. Demonstrates how heuristic keyword labeling and label-derived metadata inflate apparent RoBERTa-large accuracy (0.795 metadata-only vs. 0.321 under source-grouped splits), providing a reusable leakage-audit checklist and reproducible Modal evaluation script.',
    artifacts: ['OJS-Ready Manuscript & 5 Diagnostic Figures', 'Modal Live API (roberta-large honest checkpoint)', 'leakage_eval_modal.py Reproducibility Suite'],
    link: 'https://alexxhchen-nu--project4-multimodal-api.us-east.modal.run',
  },
  {
    id: 2,
    year: '2026',
    venue: 'Working Paper · Computational Social Science (CSS Series #1)',
    status: 'Working Paper (In Progress)',
    title: 'Institutional Fields and News Framing: Cross-System Divergence in Chinese-Language Coverage of International Events',
    authors: 'Xiaohan Chen (Northwestern University)',
    orcid: '0009-0003-7124-5208',
    summary: 'Measures framing divergence across mainland official, mainland commercial, and overseas Chinese-language media (BBC Chinese, Lianhe Zaobao, VOA) using jieba tokenization, BERTopic, and Entman framing lexicons with media-system covariates.',
    artifacts: ['Multi-Source Corpus Pipeline', 'BERTopic + Entman Lexicon Scripts'],
  },
  {
    id: 3,
    year: '2026',
    venue: 'Empirical Research Synthesis & Specification · Clinical NLP',
    status: 'Research Spec v1.0',
    title: 'Source-Fidelity and Multi-Informant Discrepancy Preservation in AI-Assisted Clinical Background Writing',
    authors: 'Xiaohan Chen (Northwestern University)',
    orcid: '0009-0003-7124-5208',
    summary: 'Synthesizes 9 close-read empirical studies (from 35 OpenAlex candidates) on child/adolescent multi-informant correlation and AI clinical documentation errors (omission under concision, sibling attribution bleed, missing-vs-negative conflation) into a testable software specification.',
    artifacts: ['Assessment & Documentation Evidence Matrices', 'Synthetic Benchmark Fixtures (TRAIN-A / TRAIN-B)'],
    link: 'https://github.com/alexxhchen-nu/psych-tools',
  },
];

export type ShopPack = {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  price: string;
  tier: 'Free / Open Source' | 'Pro Pack' | 'Studio Bundle';
  contents: string;
  includes: string;
  formats: string;
  goodFor: string;
  builtOn?: string;
  link: string;
  cta: string;
  badge: string;
};

export const SHOP_PACKS: ShopPack[] = [
  {
    id: 'psychtool-kit',
    no: '01/06',
    title: 'PsychTool Provenance Workbench + Fidelity Eval Suite',
    subtitle: 'Zero-hallucination literature & case background synthesizer that preserves informant conflicts and exact paragraph citations.',
    price: 'Free Prototype / $29 Pro Template',
    tier: 'Studio Bundle',
    contents: '3-pane provenance studio + 2 synthetic benchmark cases + 3 paired fidelity tests',
    includes: 'Interactive Web Studio + Agent Skill + Clinical Workflow Questionnaire',
    formats: 'React/TSX, JSON Schema Fixtures, Markdown Spec',
    goodFor: 'PsyD / PhD researchers, qualitative social scientists, literature synthesis',
    link: 'https://github.com/alexxhchen-nu/psych-tools',
    cta: 'View Spec & Repo →',
    badge: 'Interactive Studio Live',
  },
  {
    id: 'readme-orchestrator-pack',
    no: '02/06',
    title: 'README Orchestrator & 100-Point Rubric Studio',
    subtitle: 'Turn dense academic or developer repositories into high-contrast, bilingual visual documentation with automated 6-dimension rubric auditing.',
    price: 'Open Source / $19 Blueprint Pack',
    tier: 'Free / Open Source',
    contents: '8 architectural blueprints + 100-point auditor script + bilingual dark/light SVG assets',
    includes: 'Agent Skill (Hermes / Claude Code / Codex) + Python Auditor CLI',
    formats: 'SKILL.md, Python CLI, SVG Blueprints, Markdown Templates',
    goodFor: 'Open-source builders, computational researchers, GitHub portfolio polish',
    builtOn: 'Synthesizes 5 upstream README design skills with full attribution',
    link: 'https://github.com/alexxhchen-nu/readme-orchestrator',
    cta: 'Get on GitHub →',
    badge: 'Shipped · v1.0',
  },
  {
    id: 'ai-creators-on-x-pack',
    no: '03/06',
    title: 'AI Creators on X — 6 Callable RIA++ Agent Playbooks',
    subtitle: 'Distilled from 1,145 technical posts across 20 top builders into executable agent skills for multi-branch dev, SEO/GEO growth, and code-driven motion.',
    price: 'Open Source / $39 Full Distillation Pack',
    tier: 'Pro Pack',
    contents: '6 callable skill cards + 1,145-post evidence index + evaluation rubric',
    includes: 'Cangjie v2.5 × Darwin v2.1 distilled playbooks + prompt templates',
    formats: 'Agent Skills (YAML/MD), Evidence Ledger JSON',
    goodFor: 'Indie hackers, one-person creative teams, AI workflow engineers',
    link: 'https://github.com/alexxhchen-nu/ai-creators-on-x',
    cta: 'Explore Playbooks →',
    badge: '1,145 Posts Distilled',
  },
  {
    id: 'archaeo-tomb-pack',
    no: '04/06',
    title: 'Archaeo-Tomb-Parser — Excavation Report to Structured Data & 3D',
    subtitle: 'Extract structured tomb morphology, artifact coordinates, and dynasty features from Chinese archaeological reports via CLI, MCP, or Obsidian.',
    price: 'Open Source (MIT)',
    tier: 'Free / Open Source',
    contents: 'Schema-validated extractor + MCP server + Obsidian plugin + CLI',
    includes: 'Python package + 3D spatial visualization starter',
    formats: 'JSON, CSV, Markdown, MCP Server, Obsidian Plugin',
    goodFor: 'Digital humanities labs, archaeology researchers, historical database builders',
    link: 'https://github.com/alexxhchen-nu/archaeo-tomb-parser',
    cta: 'View Repository →',
    badge: 'CLI + MCP + Obsidian',
  },
  {
    id: 'writing-dna-pack',
    no: '05/06',
    title: 'Writing-DNA — 6-Layer Anti-Slop Style Auditor',
    subtitle: 'Deconstruct any author corpus into 6 testable layers (lexical, structural, cognitive, visual) and strip generic AI phrasing before publishing.',
    price: '$29 Skill + Auditor Script',
    tier: 'Pro Pack',
    contents: '6-layer style rubric + automated corpus analyzer + draft linter',
    includes: 'Agent Skill + Python diagnostic scripts + A/B register profiles',
    formats: 'SKILL.md, Python CLI, JSON Style Profiles',
    goodFor: 'Bilingual writers, newsletter authors, academic editors',
    link: 'https://github.com/alexxhchen-nu/writing-dna',
    cta: 'Inspect Skill →',
    badge: '6-Layer Linter',
  },
  {
    id: 'svg-anatomy-explainer-pack',
    no: '06/06',
    title: 'Zero-Credit SVG & Isometric Explainer Kit',
    subtitle: 'Generate crisp, infinite-resolution architectural diagrams, theme comparisons, and interactive isometric explainers in pure code—zero image API cost.',
    price: '$39 Studio + Skill Pack',
    tier: 'Studio Bundle',
    contents: 'Interactive SVG templates + Harness² recursion diagram + theme comparison generator',
    includes: 'Agent Skill + React/SVG component primitives + Catppuccin/Rikyu palettes',
    formats: 'SVG, React TSX, HTML standalone artifacts',
    goodFor: 'Technical writers, AI educators, design engineers',
    builtOn: 'Inspired by Bartosz Ciechanowski, wheresryan22/anatomy & Harness²',
    link: 'https://github.com/alexxhchen-nu',
    cta: 'Preview Components →',
    badge: '0 Image Credits Used',
  },
];

export type Project = { id: number; tag: string; title: string; meta: string; bullets: string[]; artifact?: string; status?: string; link?: string };

export const PROJECTS: Project[] = [
  {
    id: 0,
    tag: 'Nov 2026–Present',
    title: 'Creator | psychtool — Provenance-First Clinical Writing Workspace',
    meta: 'Northwestern / Independent Research | Nov 2026–Present',
    status: 'Spec & Interactive Prototype',
    link: 'https://github.com/alexxhchen-nu/psych-tools',
    artifact: 'Interactive 3-pane provenance studio, 9-study empirical matrix, synthetic benchmark fixtures (TRAIN-A / TRAIN-B).',
    bullets: [
      'Designed an evidence-grounded workspace helping PsyD students organize multi-informant background materials into source-tethered drafts without fabricating diagnoses or erasing informant discrepancies.',
      'Synthesized 9 empirical studies on child/adolescent multi-informant correlation and AI clinical documentation failure modes (concision omission, third-person attribution bleed, missing-vs-negative conflation).',
      'Built interactive verification mechanics: paragraph-level provenance anchoring, cross-informant conflict cards (e.g., July vs. September onset), strict case isolation, and automatic stale-claim flagging when source records change.',
    ],
  },
  {
    id: 1,
    tag: 'Oct 2026–Present',
    title: 'Lead Researcher | Intergenerational Trauma Multimodal Pipeline & Leakage Audit (P1–P4)',
    meta: 'Evanston, Illinois | Oct 2026–Present',
    status: 'Modal API Live / CCR Manuscript',
    link: 'https://alexxhchen-nu--project4-multimodal-api.us-east.modal.run',
    artifact: 'CCR Research Note manuscript, 5 diagnostic figures, leakage_eval_modal.py, and live RoBERTa-large Modal endpoint.',
    bullets: [
      'Audited a 4,094-narrative multimodal prediction pipeline across 8 public mental-health corpora, uncovering how heuristic keyword labeling and label-derived metadata inflate apparent model performance.',
      'Demonstrated that metadata-only logistic regression (0.795 acc) outperformed fine-tuned RoBERTa-large text models (0.704 acc) due to circular features, dropping to 0.321 under strict source-grouped evaluation.',
      'Deployed the audited RoBERTa-large model on Modal serverless infrastructure with live /health, /model-info, and /predict endpoints.',
    ],
  },
  {
    id: 2,
    tag: 'Oct 2026–Present',
    title: 'Author & Developer | Public Legal Archive Network Extraction (DOJ Epstein Release)',
    meta: 'Evanston, Illinois | Oct 2026–Present',
    status: 'Preprint & Interactive Graph',
    link: 'https://orcid.org/0009-0003-7124-5208',
    artifact: 'SNAM preprint manuscript, 505-node / 434-edge communication network visualization, entity-resolution audit.',
    bullets: [
      'Constructed an end-to-end document acquisition, PDF text extraction, and social-network analysis pipeline over publicly released Department of Justice archival records.',
      'Identified critical text-to-graph failure modes—including date strings parsed as actor nodes and name fragmentation ("Ray" vs. "Ray Ormond")—across 505 nodes, 434 edges, and 65 modularity communities.',
      'Authored a methodological preprint analyzing how entity and relation extraction errors propagate into network-level centrality and PageRank distortions.',
    ],
  },
  {
    id: 3,
    tag: 'July 2026–Present',
    title: 'Creator | Archaeo-Tomb-Parser — Archaeological Report Extraction & 3D Modeling',
    meta: 'Digital Humanities | July 2026–Present',
    status: 'Shipped (CLI / MCP / Obsidian)',
    link: 'https://github.com/alexxhchen-nu/archaeo-tomb-parser',
    artifact: 'Open-source Python extractor, Model Context Protocol (MCP) server, Obsidian plugin, and 3D tomb morphology reconstructions.',
    bullets: [
      'Built a specialized extraction toolkit with an archaeology PhD researcher to transform unstructured Chinese excavation reports and low-quality scans into structured JSON, CSV, and Markdown.',
      'Enabled spatial comparison of tomb morphology and artifact placement through 3D visualization while maintaining strict boundaries between recorded dimensions and geometric inference.',
      'Packaged the workflow across three accessible surfaces—command-line interface, MCP server for AI agents, and an Obsidian plugin—so non-programmer humanities scholars can run it directly.',
    ],
  },
  {
    id: 4,
    tag: 'Nov 2026',
    title: 'Creator | README Orchestrator & AI Creators on X Distillation',
    meta: 'Open-Source Agent Skills | Nov 2026',
    status: 'Public Release',
    link: 'https://github.com/alexxhchen-nu/readme-orchestrator',
    artifact: 'readme-orchestrator (100-point rubric + 8 blueprints) and ai-creators-on-x (1,145 posts → 6 RIA++ playbooks).',
    bullets: [
      'Engineered an intelligent README design router and 100-point 6-dimension rubric auditor that synthesizes 5 upstream documentation skills into a unified bilingual pipeline.',
      'Distilled 1,145 technical posts from 20 Chinese AI builders on X into 6 callable RIA++ agent playbooks covering multi-branch development, SEO/GEO growth, and programmatic video motion.',
      'Implemented strict provenance attribution (ATTRIBUTIONS.md) and progressive-disclosure skill architecture.',
    ],
  },
  { id: 5, tag: 'May 2025–Present', title: 'Knight Lab at Northwestern — AI Content and Research Member', meta: 'Evanston, Illinois | May 2025–Present', status: 'In progress', bullets: [
    'Contribute to experiments in AI visual content and machine-learning dataset optimization, including LoRA fine-tuning of Stable Diffusion models.',
    'Collaborate in a six-person interdisciplinary team; support experiment documentation, content archiving, and research workflow improvements.',
    'Translate technical processes into structured notes that support communication, review, and reproducibility.' ] },
  { id: 6, tag: 'Summer 2026–Present', title: 'Creator & Developer | Speak Easy — AI-Moderated Interview Studio', meta: 'Evanston, Illinois | Summer 2026–Present', status: 'Prototype', bullets: [
    'Independently built a prototype AI-moderated interview studio: users define a research goal, generate an interview framework, conduct an interview, and receive a structured report with themes, insights, and recommendations in one session.',
    'Developed an end-to-end workflow connecting research-goal definition, interview design, AI moderation, and synthesis; prototype-stage project, with no claims of validated research outcomes.' ] },
  { id: 7, tag: 'May 2025–Present', title: 'Founder and Data Journalist — Data Journalism in Fencing', meta: 'Remote | May 2025–Present', status: '13,900+ Reads', bullets: [
    'Founded a niche data-journalism platform covering fencing, competition performance, and sport trends.',
    'Produce data-driven articles, visual analyses, and reports; published work has reached 13,900+ reads.',
    'Distribute work across Substack, Instagram, X, Threads, and Bluesky; content and channel experiments contributed to 280% follower growth over two weeks.' ] },
  { id: 8, tag: 'Winter 2026–Spring 2026', title: 'Independent Student Research Project — Short-Video Content Analysis (WeChat Channels & Douyin)', meta: 'Evanston, Illinois | Winter 2026–Spring 2026', artifact: 'Structured dataset, exploratory scripts, and visual summary.', bullets: [
    'Designed and executed a comparative study of 3,000 videos across WeChat Channels and Douyin using transcripts, visual features, and topic distributions.',
    'Built a workflow for video sampling, transcript extraction, visual-tone and editing-pace coding, and exploratory comparison across platforms.',
    'Examined how format, pacing, and presentation patterns relate to audience engagement in short-video environments.' ] },
];

export const DEV_SKILLS = ['Python', 'PyTorch', 'TypeScript', 'React', 'Next.js', 'Three.js', 'SQL / DuckDB', 'Model Context Protocol (MCP)', 'Agent Skills Architecture', 'RAG & Knowledge Graphs', 'NetworkX / Gephi', 'Modal Serverless GPU', 'Interactive SVG'];

export const CODE_ITEMS = [
  { id: 0, name: 'alexxhchen-nu/psych-tools (psychtool)', badge: 'Clinical NLP · Spec & Workbench', meta: 'Nov 2026–Present. Provenance-first clinical writing workspace spec, 9-study empirical evidence matrix, and synthetic fidelity benchmark fixtures (TRAIN-A / TRAIN-B).' },
  { id: 1, name: 'alexxhchen-nu/archaeo-tomb-parser', badge: 'Digital Humanities · MCP', meta: 'July 2026–Present. Extract structured tomb data from Chinese archaeological reports; ships with CLI, MCP server, Obsidian plugin, and 3D spatial views.' },
  { id: 2, name: 'alexxhchen-nu/readme-orchestrator', badge: 'Agent Skill · Open Source', meta: 'Nov 2026. Intelligent README design router, 8 component blueprints, and 100-point 6-dimension rubric auditor.' },
  { id: 3, name: 'alexxhchen-nu/ai-creators-on-x', badge: 'Knowledge Distillation', meta: 'Nov 2026. 20 Chinese X AI Creators (1,145 tech posts) distilled into 6 callable RIA++ agent playbooks (Cangjie v2.5 × Darwin v2.1).' },
  { id: 4, name: 'alexxhchen-nu/harness2', badge: 'Agent Architecture', meta: 'Nov 2026. Component-by-component explainer and architectural diagram of Harness² (arXiv:2610.14224) two-level recursion.' },
  { id: 5, name: 'alexxhchen-nu/writing-dna', badge: 'Style Linter · Skill', meta: 'Nov 2026. Decomposes writing style into 6 verifiable layers with corpus analytics and anti-template draft auditing scripts.' },
  { id: 6, name: 'Intergenerational Trauma P4 Multimodal API', badge: 'PyTorch · Modal API', meta: 'Oct–Nov 2026. RoBERTa-large + metadata leakage audit suite and live serverless Modal prediction endpoint.' },
  { id: 7, name: 'Epstein DOJ Archive Network Pipeline', badge: 'Network Science · CSS', meta: 'Oct–Nov 2026. Document scraper, PDF entity/relation extractor, and 505-node interactive Gephi/Web communication graph.' },
  { id: 8, name: 'final_douyin & COMAP Lab', badge: 'Data Engineering', meta: '2026. Hourly Douyin Top-50 video/topic archiver to SQLite & Hugging Face + signature reverse-engineering sandbox.' },
  { id: 9, name: 'Speak Easy — AI-Moderated Interview Studio', badge: 'Prototype', meta: 'Summer 2026–Present. End-to-end AI interview framework generator, moderator, and thematic synthesizer.' },
];

export const RESEARCH_SKILLS = ['Data journalism', 'computational social science', 'digital humanities', 'social network analysis', 'empirical literature synthesis', 'AI evaluation & leakage auditing', 'bilingual investigative reporting'];

export type Kind = 'Writing' | 'Synthesis' | 'Skills';
export const READING: { id: number; kind: Kind; title: string; meta: string; badge?: string }[] = [
  { id: 0, kind: 'Synthesis', badge: 'Clinical NLP · 9 Studies Close-Read', title: 'Multi-Informant Discrepancy & AI Documentation Fidelity Matrix', meta: 'Synthesizes meta-analytic cross-informant findings (341 studies) with clinical NLP evaluations on concision-induced omission, sibling attribution bleed, and missing-vs-negative conflation.' },
  { id: 1, kind: 'Synthesis', badge: 'SNAM Preprint · 6 Surveys Close-Read', title: 'Text-to-Graph Error Propagation in Docket-Scale Legal Archives', meta: 'Contrasts span-level NER/RE benchmarks against network-level topological distortion (PageRank, modularity clustering) when constructing social graphs from noisy public records.' },
  { id: 2, kind: 'Synthesis', badge: 'Unpublished', title: 'The Brain Keeps Predicting: Flow, Intuition, and Trauma in the Predictive Mind', meta: 'Structured synthesis connecting three research papers (2022–2026) on flow onset, active inference, and trauma-related predictive processing; propositions, concepts, evidence, and limitations.' },
  { id: 3, kind: 'Writing', badge: 'Unpublished · Personal project document', title: 'Quantized Strategy Planning for Women’s Sabre Fencing', meta: 'A structured framework for tagging fencing touches by action, distance, tempo, target, result, and score state; opponent-profiling, performance KPI, and pre-/post-bout review approaches.' },
  { id: 4, kind: 'Skills', title: 'Research and reporting', meta: RESEARCH_SKILLS.join(', ') },
];

export const INTERESTS: { name: string; note: string }[] = [
  { name: 'Full-Stack Digital Humanities', note: 'Turning historical texts, archaeological excavation reports, and noisy archival scans into structured databases and 3D spatial models.' },
  { name: 'Computational Social Science', note: 'Auditing ML pipelines for circularity, modeling cross-platform framing divergence, and extracting social networks from public records.' },
  { name: 'Data & Investigative Journalism', note: 'Founded Data Journalism in Fencing (13,900+ reads, +280% growth); Medill specialization in Digital Investigative Journalism.' },
  { name: 'Modular AI & Agentic Tools', note: 'Building provenance-first workbenches, MCP servers, verifiable eval loops, and interactive explainers that give researchers full control.' },
  { name: 'Fencing', note: 'Three-year NCAA Division I student-athlete (retired); member of Canada’s national fencing team and multiple-time Canadian national champion.' },
];

export const DESIGNS = ['Interactive Isometric SVG', 'Three.js / WebGL 3D Modeling', 'High-Contrast Editorial UI/UX', 'Figma', 'Gephi & Network Visualization', 'Remotion & Programmatic Motion', 'Adobe Premiere', 'DaVinci Resolve'].map((label, id) => ({ id, label }));
