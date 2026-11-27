import { createContext, useContext } from 'react';

export type Lang = 'en' | 'zh';
export type BiText = { en: string; zh: string };

export type RoleLens = 'default' | 'ai-eng' | 'data-journ' | 'css-research';

export type CaseDomain = 'ai-agents' | 'pipelines-networks' | 'clinical-evals';

export type CaseStudyId =
  | 'speakeasy'
  | 'legal-archive'
  | 'untangle'
  | 'comap-pipeline'
  | 'psychtool'
  | 'trauma-audit';

export type CaseMetric = {
  value: string;
  label: BiText;
};

export type CaseLink = {
  label: BiText;
  url: string;
};

export type CaseStudy = {
  id: CaseStudyId;
  no: string;
  domain: CaseDomain;
  tag: BiText;
  status: BiText;
  title: BiText;
  subtitle: BiText;
  problem: BiText;
  architecture: BiText;
  outcome: BiText;
  bullets: BiText[];
  metrics: CaseMetric[];
  stack: string[];
  links: CaseLink[];
};

export type SmallerCardId = 'fencing-dj' | 'technexus' | 'tang-poetry';

export type SmallerCard = {
  id: SmallerCardId;
  tag: BiText;
  status: BiText;
  title: BiText;
  summary: BiText;
  problem: BiText;
  approach: BiText;
  impact: BiText;
  metrics: CaseMetric[];
  links: CaseLink[];
};

export type ExperienceOneLiner = {
  id: string;
  org: BiText;
  role: BiText;
  period: BiText;
  line: BiText;
};

export type SkillCategory = {
  id: string;
  title: BiText;
  items: string[];
};

export interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  lens: RoleLens;
  setLens: (r: RoleLens) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  lens: 'default',
  setLens: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function t(bi: BiText, lang: Lang): string {
  return bi[lang];
}

export const HERO_COPY = {
  eyebrow: {
    en: 'MEDILL DATA JOURNALISM ’27 · HCI CERTIFICATE · NORTHWESTERN UNIVERSITY',
    zh: '西北大学 Medill 数据新闻 ’27 · 人机交互（HCI）证书 · 伊利诺伊州埃文斯顿',
  },
  bio: {
    en: 'Data journalist & computational builder at Northwestern University (B.S. in Journalism, Data Journalism specialization; HCI certificate in progress; GPA 3.73). Former 3-year NCAA D1 student-athlete & Canadian national sabre fencing team member (multi-time national champion). I build provenance-first AI workbenches, automated archival & social-data pipelines, and leakage-audited research systems where every claim traces back to verifiable evidence.',
    zh: '西北大学 Medill 新闻学院数据新闻专业本科生（主修数据新闻，修读 HCI 人机交互证书，GPA 3.73），前 NCAA D1 校队三年成员、加拿大国家佩剑队队员及多届全加冠军。专注于构建溯源优先（Provenance-First）的 AI 工作台、自动化档案与社媒数据管线，以及经过严格数据泄露审计的计算社会科学系统。',
  },
  lensHeading: {
    en: 'TARGET ROLE LENS',
    zh: '岗位视角',
  },
};

export const PERSONAL_LINKS: { label: string; url: string }[] = [
  { label: 'Email', url: 'mailto:alexchen2027@u.northwestern.edu' },
  { label: 'GitHub', url: 'https://github.com/alexxhchen-nu' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/xiaohan-chen-530631293/' },
  { label: 'ORCID', url: 'https://orcid.org/0009-0003-7124-5208' },
  { label: 'Zenodo Preprint', url: 'https://doi.org/10.5281/zenodo.23962378' },
  { label: 'Dev Blog', url: 'https://dev.xiaohanchen.cc' },
];

export const ROLE_LENSES: {
  id: RoleLens;
  label: BiText;
  hint: BiText;
  order: CaseStudyId[];
}[] = [
  {
    id: 'default',
    label: { en: 'Default Overview', zh: '默认综合视图' },
    hint: {
      en: 'Balanced sequence across voice/agent systems, network pipelines, and audited NLP.',
      zh: '均衡展示语音智能体、档案网络管线与临床/泄漏审计代表作。',
    },
    order: ['speakeasy', 'legal-archive', 'untangle', 'comap-pipeline', 'psychtool', 'trauma-audit'],
  },
  {
    id: 'ai-eng',
    label: { en: 'AI & Agent Engineering', zh: 'AI 与智能体工程' },
    hint: {
      en: 'Prioritizes real-time LiveKit state machines, provenance guardrails, and MCP/CLI/3D toolchains.',
      zh: '优先展示 LiveKit 实时状态机、Psychtool 溯源护栏与 MCP/CLI/3D 全栈工具链。',
    },
    order: ['psychtool', 'speakeasy', 'untangle', 'comap-pipeline', 'trauma-audit', 'legal-archive'],
  },
  {
    id: 'data-journ',
    label: { en: 'Data & Investigative Journalism', zh: '数据与调查新闻' },
    hint: {
      en: 'Leads with DOJ public-record network audits, cross-platform video pipelines, and empirical verification.',
      zh: '优先展示司法部公开档案网络审计、跨平台短视频采集管线与实证核查。',
    },
    order: ['legal-archive', 'comap-pipeline', 'trauma-audit', 'untangle', 'speakeasy', 'psychtool'],
  },
  {
    id: 'css-research',
    label: { en: 'CSS / NLP / HCI Research', zh: '计算社科 / NLP / HCI 科研' },
    hint: {
      en: 'Highlights leakage-audited RoBERTa evaluations, SNAM network error propagation, and multi-informant HCI.',
      zh: '优先展示 5 折组隔离泄漏审计、SNAM 网络误差传播预印本与多信息源临床写作工作台。',
    },
    order: ['trauma-audit', 'legal-archive', 'psychtool', 'untangle', 'comap-pipeline', 'speakeasy'],
  },
];

export const DOMAIN_FILTERS: {
  id: 'all' | CaseDomain;
  label: BiText;
  count: number;
}[] = [
  { id: 'all', label: { en: 'All Featured', zh: '全部核心案例' }, count: 6 },
  { id: 'ai-agents', label: { en: 'AI & Agent Tooling', zh: 'AI 与智能体工具' }, count: 2 },
  { id: 'pipelines-networks', label: { en: 'Pipelines & Networks', zh: '数据管线与网络' }, count: 2 },
  { id: 'clinical-evals', label: { en: 'Clinical & Leakage Evals', zh: '临床溯源与泄漏审计' }, count: 2 },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'speakeasy',
    no: 'CS-01',
    domain: 'ai-agents',
    tag: {
      en: 'Voice AI · LiveKit WebRTC · Bilingual Interview Agent',
      zh: '实时语音智能体 · LiveKit WebRTC · 中英双语访谈工作台',
    },
    status: { en: 'Shipped Prototype', zh: '可运行原型已开源' },
    title: {
      en: 'SpeakEasy — Real-Time Bilingual AI Qualitative Interview Studio',
      zh: 'SpeakEasy — 实时中英双语 AI 定性访谈与结构化洞察工作台',
    },
    subtitle: {
      en: 'Zero-raw-audio-retention browser voice interviewer with explicit listening → thinking → speaking turn state machine and SQLite field extraction.',
      zh: '零原始录音留存的浏览器实时语音访谈系统：显式监听/思考/发言状态机与 SQLite 结构化字段落库。',
    },
    problem: {
      en: 'Qualitative and market researchers spend hours conducting repetitive intake interviews, yet off-the-shelf voice bots hallucinate follow-ups, leak API secrets to the browser, or store sensitive raw audio without granular consent.',
      zh: '定性与市场研究人员在重复性访谈上耗时巨大，而常见语音机器人容易跑题追问、在前端暴露密钥，或未经细粒度授权留存敏感原始音频。',
    },
    architecture: {
      en: 'Built a FastAPI + LiveKit Cloud WebRTC architecture where short-lived participant tokens dispatch a Python voice worker holding an isolated RESEARCH_DATA_SECRET. Session recording is disabled at the room level; only confirmed structured answers persist to local SQLite with resumable interview tokens.',
      zh: '采用 FastAPI + LiveKit WebRTC 架构：前端仅获取短期房间令牌，由独立 Python 语音 Worker 持有 RESEARCH_DATA_SECRET 写库；房间级禁用原始录音，仅将确认后的结构化字段写入本地 SQLite，并支持中断续访与一键导出 CSV/JSON。',
    },
    outcome: {
      en: 'Connects research-goal setup, dynamic bilingual interview moderation, live speaker-labeled captions, and structured CSV/JSON synthesis in a single reproducible local session.',
      zh: '在单次会话内打通“研究目标定义 → 访谈提纲生成 → 中英实时语音追问 → 结构化洞察报告与 CSV/JSON 导出”全流程。',
    },
    bullets: [
      {
        en: 'Explicit 3-state turn controller (listening → thinking → speaking) with real-time Interviewer / Participant transcription.',
        zh: '显式三态轮次状态机（Listening → Thinking → Speaking），配实时角色标注字幕流。',
      },
      {
        en: 'Strict secret isolation: browser receives scoped room token only; worker writes structured fields via server-only secret.',
        zh: '严格密钥隔离：浏览器仅持受限房间 Token，仅后端 Worker 具备结构化答案写入权限。',
      },
      {
        en: 'Privacy-by-default: raw audio recording disabled; supports resumable session IDs and instant JSON/CSV export.',
        zh: '默认隐私保护：关闭原始音频录制，支持会话断点恢复与单场 JSON/CSV 导出。',
      },
    ],
    metrics: [
      { value: '3-State', label: { en: 'Turn State Machine', zh: '实时轮次状态机' } },
      { value: '0 Bytes', label: { en: 'Raw Audio Stored', zh: '原始音频零留存' } },
      { value: 'EN / ZH', label: { en: 'Bilingual Voice', zh: '中英双语实时语音' } },
    ],
    stack: ['Python', 'LiveKit WebRTC', 'FastAPI', 'SQLite', 'TypeScript'],
    links: [
      { label: { en: 'GitHub Repo', zh: 'GitHub 仓库' }, url: 'https://github.com/alexxhchen-nu/livekit-market-research-agent' },
    ],
  },
  {
    id: 'legal-archive',
    no: 'CS-02',
    domain: 'pipelines-networks',
    tag: {
      en: 'Network Science · SNAM Preprint · Zenodo DOI',
      zh: '社会网络科学 · SNAM 预印本 · Zenodo DOI',
    },
    status: { en: 'Preprint · Zenodo DOI', zh: '预印本已发布 · Zenodo DOI' },
    title: {
      en: 'Public Legal Archive Network Extraction & Topological Error Audit',
      zh: '公共司法档案社会网络抽取与拓扑误差传播审计',
    },
    subtitle: {
      en: 'End-to-end PDF-to-graph pipeline over public DOJ releases (505 nodes, 434 edges), measuring how NER/entity-resolution noise distorts PageRank and modularity.',
      zh: '基于美国司法部公开档案（505 节点、434 条边）构建 PDF→图谱管线，量化实体消歧误差对 PageRank 与模块度社区结构的扭曲。',
    },
    problem: {
      en: 'Computational social scientists routinely evaluate text-to-graph extractors using span-level F1, overlooking how minor OCR noise, date-string false positives, or alias splits ("Ray" vs. "Ray Ormond") corrupt downstream centrality claims.',
      zh: '计算社科研究常仅用片段级 F1 评估文本转图谱模型，忽视了日期误识为人物节点或同名异写分裂（如“Ray”与“Ray Ormond”）对下游中心性结论的系统性误导。',
    },
    architecture: {
      en: 'Constructed an automated document acquisition, OCR cleanup, entity-relation extraction, and alias-reconciliation audit pipeline in Python + NetworkX/Gephi, paired with a methodological preprint registered on Zenodo and ORCID.',
      zh: '使用 Python + NetworkX/Gephi 构建自动化司法文书抓取、PDF 解析、实体关系抽取与别名消歧审计管线，配套方法论论文已注册 Zenodo DOI 与 ORCID。',
    },
    outcome: {
      en: 'Cataloged concrete extraction failure modes across 505 nodes, 434 edges, and 65 modularity communities, demonstrating why network-level perturbation metrics must accompany span-level F1.',
      zh: '在 505 个节点、434 条边与 65 个模块度社区上实证揭示实体分裂与伪节点如何改变核心节点排序，提出网络级扰动评估框架。',
    },
    bullets: [
      {
        en: 'Audited 505 nodes and 434 edges extracted from docket-scale public Department of Justice archival PDFs.',
        zh: '对司法部公开卷宗抽取出的 505 个节点与 434 条通信关系边进行全链路审计。',
      },
      {
        en: 'Quantified PageRank rank-order shifts and modularity fragmentation (65 → consolidated clusters) after alias resolution.',
        zh: '量化对比去噪与实体合并前后 PageRank 排名漂移及模块度社区碎片化程度。',
      },
      {
        en: 'Published open methodological preprint (DOI: 10.5281/zenodo.23962378) targeting Social Network Analysis and Mining (SNAM).',
        zh: '发表开放预印本（DOI: 10.5281/zenodo.23962378），目标期刊 Social Network Analysis and Mining。',
      },
    ],
    metrics: [
      { value: '505 / 434', label: { en: 'Nodes / Edges Audited', zh: '审计节点 / 边数' } },
      { value: '65', label: { en: 'Raw Modularity Clusters', zh: '原始模块度簇数' } },
      { value: 'zenodo.23962378', label: { en: 'Open Preprint DOI', zh: '公开预印本 DOI' } },
    ],
    stack: ['Python', 'NetworkX', 'Gephi', 'PDF OCR / NER', 'LaTeX'],
    links: [
      { label: { en: 'Zenodo Preprint (DOI)', zh: 'Zenodo 预印本 (DOI)' }, url: 'https://doi.org/10.5281/zenodo.23962378' },
      { label: { en: 'ORCID Record', zh: 'ORCID 学术记录' }, url: 'https://orcid.org/0009-0003-7124-5208' },
    ],
  },
  {
    id: 'untangle',
    no: 'CS-03',
    domain: 'ai-agents',
    tag: {
      en: 'Digital Humanities · CLI + MCP + Obsidian + 3D/GIS',
      zh: '数字人文全栈 · CLI + MCP + Obsidian + 三维与 GIS',
    },
    status: { en: 'Shipped · Multi-Surface Toolkit', zh: '已开源 · 多端工具链' },
    title: {
      en: 'Untangle & Archaeo-Tomb-Parser — Excavation Reports to Verified 3D & GIS',
      zh: 'Untangle & Archaeo-Tomb-Parser — 考古发掘报告结构化核验与三维重建',
    },
    subtitle: {
      en: 'Transforms noisy Chinese excavation PDFs via MinerU into source-checked JSON/CSV tables, GIS site maps, and rotatable 3D tomb morphology models.',
      zh: '通过 MinerU 将中文田野考古报告（含低清扫描件）转化为逐段对照核验的 JSON/CSV 墓葬表、GIS 遗址图与可旋转 3D 模型。',
    },
    problem: {
      en: 'Archaeological dimensions and grave-goods inventories are locked inside dense Chinese monographs and degraded PDF scans; generic LLM extraction silently blurs recorded measurements with geometric guesses.',
      zh: '大量中国考古墓葬尺寸与随葬品数据深埋在排版复杂的发掘报告和低质量扫描 PDF 中；通用大模型抽取极易混淆“原文实测值”与“模型推断值”。',
    },
    architecture: {
      en: 'Unified Next.js 16 + FastAPI workbench (Untangle) paired with modular CLI, Model Context Protocol (MCP) server, and Obsidian plugin surfaces (archaeo-tomb-parser), strictly tagging each field as Explicit, Inferred, or Unextracted.',
      zh: '构建 Next.js 16 + FastAPI 全栈工作台（Untangle），并同步封装 Python CLI、MCP Server 与 Obsidian 插件三端入口，对每个字段严格区分“原文有 / 推断待核 / 未抽取”。',
    },
    outcome: {
      en: 'Enables humanities scholars without coding backgrounds to parse reports side-by-side against source paragraphs and export GLB 3D tomb models and multi-site GIS maps in one workflow.',
      zh: '让无编程背景的考古与人文学者也能边对照原文边核验数据，一键生成可导出 GLB 的三维墓葬模型与多遗址 GIS 地图。',
    },
    bullets: [
      {
        en: 'Side-by-side DynamicParser linking every extracted tomb dimension (length, width, depth, orientation) to source text.',
        zh: '原文与结构化墓葬表逐段双向联动，墓口长宽深、墓向与随葬器物一目了然。',
      },
      {
        en: 'Ships across 4 surfaces: Web Studio (/Library, /DynamicParser, /GIS, /Modelling), CLI, MCP Server, and Obsidian Plugin.',
        zh: '提供四端形态：Web 四合一工作台、命令行 CLI、AI 智能体 MCP Server 与 Obsidian 插件。',
      },
      {
        en: 'Zero copyright leakage: open-source repos ship clean schema code and synthetic demos with copyrighted scans stripped.',
        zh: '严格版权合规：公开仓库剥离受版权保护的田野扫描图与原书全文，仅交付纯净解析架构与合成示例。',
      },
    ],
    metrics: [
      { value: '4 Surfaces', label: { en: 'Web · CLI · MCP · Obsidian', zh: '四端无缝调用' } },
      { value: '3-Tier', label: { en: 'Provenance Field Tags', zh: '三级字段溯源标注' } },
      { value: '3D + GIS', label: { en: 'GLB & Spatial Output', zh: '三维 GLB 与空间成图' } },
    ],
    stack: ['Next.js 16', 'FastAPI', 'Python 3.12', 'MinerU OCR', 'Three.js / GLB', 'MCP'],
    links: [
      { label: { en: 'Untangle Repo', zh: 'Untangle 主仓库' }, url: 'https://github.com/alexxhchen-nu/untangle' },
      { label: { en: 'Archaeo-Tomb-Parser', zh: 'Archaeo-Tomb-Parser 仓库' }, url: 'https://github.com/alexxhchen-nu/archaeo-tomb-parser' },
    ],
  },
  {
    id: 'comap-pipeline',
    no: 'CS-04',
    domain: 'pipelines-networks',
    tag: {
      en: 'Data Engineering · Edge Streaming · Cloudflare R2 & Cron',
      zh: '大规模数据工程 · 边缘流式采集 · Cloudflare R2 定时管线',
    },
    status: { en: 'Production Pipeline · 10K Videos/Day', zh: '生产级管线 · 日均万级视频能力' },
    title: {
      en: 'Headless Short-Video & Hotlist Archival Pipeline (Douyin / Channels)',
      zh: '无头短视频热榜流式归档与跨平台内容计算管线',
    },
    subtitle: {
      en: 'Zero-local-storage daily collection streaming up to 10,000 trending videos/day (50 keywords × 200 videos) directly from CDN through Cloudflare Workers into R2, plus 3,000-video comparative coding.',
      zh: '零本地存储占用的自动化采集管线：支持 50 关键词 × 200 条视频通过 Cloudflare Workers 直传 R2，并支撑 3,000 条微信视频号与抖音跨平台实证编码。',
    },
    problem: {
      en: 'Short-video platforms rotate trending rankings hourly and throttle naive scrapers, while downloading hundreds of gigabytes locally exhausts lab disk space and breaks reproducibility.',
      zh: '短视频热榜按小时剧烈轮动且反爬严格，传统本地下载动辄占用数百 GB 磁盘与带宽，难以支撑长周期纵向计算传播学观测。',
    },
    architecture: {
      en: 'Engineered a Playwright headless orchestrator with O(1) startup R2 key deduplication and 20-way concurrent Cloudflare Edge Worker streaming straight to R2 buckets, paired with scheduled archival and transcript/visual-pace analysis.',
      zh: '采用 Playwright 无头编排器配合启动期 O(1) 内存级 R2 键去重，由 20 路并发 Cloudflare Edge Worker 将视频流从源 CDN 直传 R2 对象存储，实现零本地落盘与断点续传。',
    },
    outcome: {
      en: 'Sustains automated longitudinal capture with full CSV manifests and powered a 3,000-video comparative study across WeChat Channels and Douyin examining pacing, transcripts, and engagement.',
      zh: '稳定输出结构化 CSV 元数据清单，并支撑完成覆盖 3,000 条视频的微信视频号 vs. 抖音叙事节奏、字幕话题与互动表现对比研究。',
    },
    bullets: [
      {
        en: '20 concurrent Cloudflare Worker streams achieve zero local storage footprint (~100 GB/day capacity directly to R2).',
        zh: '20 路 Cloudflare Worker 边缘并发直传 R2，本地磁盘与下行带宽占用趋近于零。',
      },
      {
        en: 'O(1) in-memory deduplication against existing R2 keys ensures idempotent, resumable scheduled runs.',
        zh: '启动时单次列举 R2 键完成 O(1) 内存去重，支持定时重跑与自动跳过已归档视频。',
      },
      {
        en: 'Paired with a 3,000-video multimodal coding workflow analyzing editing pace, visual tone, and topic distributions.',
        zh: '配套 3,000 条跨平台短视频抽样、字幕提取、剪辑节奏编码与互动回归分析工作流。',
      },
    ],
    metrics: [
      { value: '50 × 200', label: { en: 'Keywords × Videos / Run', zh: '关键词 × 单轮上限' } },
      { value: '20× Edge', label: { en: 'Concurrent R2 Streams', zh: '并发边缘直传流' } },
      { value: '3,000', label: { en: 'Videos Coded (Comparative)', zh: '跨平台精编样本量' } },
    ],
    stack: ['Python', 'Playwright', 'Cloudflare Workers & R2', 'SQLite', 'DuckDB'],
    links: [
      { label: { en: 'Douyin Pipeline Repo', zh: '管线开源仓库' }, url: 'https://github.com/alexxhchen-nu/douyin-hotlist-pipeline' },
    ],
  },
  {
    id: 'psychtool',
    no: 'CS-05',
    domain: 'clinical-evals',
    tag: {
      en: 'Clinical NLP · Provenance HCI · Local-First Safety Baseline',
      zh: '临床 NLP · 句级证据溯源 · 本地优先隐私护栏',
    },
    status: { en: 'Interactive Lab Below ↓ · Repo Public', zh: '下方内嵌实时工作台 ↓ · 已开源' },
    title: {
      en: 'psychtool — Source-Traceable Clinical Background Writing Workspace',
      zh: 'psychtool — 句级溯源与多信息源冲突保留的临床背景写作工作台',
    },
    subtitle: {
      en: 'Grounded in a 9-study empirical synthesis (341-study meta-analysis): enforces SQLite cross-case foreign-key isolation, atomic edit invalidation cascades, and zero diagnostic fabrication.',
      zh: '基于 9 项实证研究精读（含 341 项研究元分析）设计：以 SQLite 复合外键阻断串案、原子级更正失效连锁与本地安全自检，杜绝 AI 抹平家属/教师分歧或编造诊断。',
    },
    problem: {
      en: 'Youth, caregiver, and teacher informants correlate only weakly-to-moderately in clinical assessments. Standard LLM summarizers flatten these discrepancies, bleed sibling history into the client, or rewrite "not mentioned" into "negative."',
      zh: '青少年自述、照护者与教师报告在临床评估中往往仅呈低到中等相关；通用大模型摘要会自动抹平时间线分歧、把兄弟姐妹病史张冠李戴给受评者，或把“未提及”篡改为“阴性”。',
    },
    architecture: {
      en: '3-pane FastAPI + React/SQLite architecture (Sections | Draft | Source Cards) governed by 23 Architecture Decision Records (ADRs): loopback-only binding, session token + CSP headers, cloud-sync folder refusal, hash-chained audit_log, and transactional stale-claim cascades.',
      zh: '采用 FastAPI + React + 单库 SQLite 三栏工作台（章节｜草稿｜来源卡），沉淀 23 份架构决策记录（ADR）：仅绑定 Loopback、会话级 Token 与严格 CSP、拒绝云同步目录、哈希链审计日志，以及单事务内“改源即降级待核”连锁。',
    },
    outcome: {
      en: 'Every factual draft sentence links to active same-case evidence; diagnostic sections remain strictly human-authored ("This is not a diagnosis. The diagnosis is yours."). Try the live synthetic workbench in Section 02 below.',
      zh: '草稿中每句事实陈述均绑定同案有效证据，无出处的句子自动标为 Unverified，诊断与建议章节强制仅由临床人员撰写。可直接体验下方 02 区实时交互工作台。',
    },
    bullets: [
      {
        en: 'Database-level cross-case isolation via composite foreign keys (claim_evidence schema v7) blocking prompt-injection bleed.',
        zh: '数据库层复合外键（claim_evidence v7）从结构上阻断跨个案引用与提示词注入串案。',
      },
      {
        en: 'Atomic invalidation cascade (ADR 0018): editing a source classification resets dependent claims/paragraphs to Needs review in one SQLite transaction.',
        zh: '原子级更正连锁（ADR 0018）：上游证据分类变更时，同一事务内自动将下游陈述与已批段落退回 Needs review。',
      },
      {
        en: 'Local security baseline (ADR 0011): loopback-only server, cloud-folder block, X-Psychtool-Token auth, and Playwright E2E security suite.',
        zh: '本地安全基线（ADR 0011）：仅本地回环监听、拦截云盘同步目录、全接口令牌校验及 Playwright 安全端到端测试。',
      },
    ],
    metrics: [
      { value: '23 ADRs', label: { en: 'Safety & UX Decisions', zh: '架构与安全决策记录' } },
      { value: '9 Studies', label: { en: 'Empirical Synthesis Base', zh: '精读实证文献基座' } },
      { value: '100%', label: { en: 'Same-Case FK Isolation', zh: '同案外键隔离率' } },
    ],
    stack: ['Python', 'FastAPI', 'SQLite (Schema v7)', 'React / TypeScript', 'Playwright E2E'],
    links: [
      { label: { en: 'GitHub Repo (psychtool)', zh: 'GitHub 仓库 (psychtool)' }, url: 'https://github.com/alexxhchen-nu/psychtool' },
      { label: { en: 'Jump to Live Workbench ↓', zh: '跳转下方实时工作台 ↓' }, url: '#psychtool-workbench' },
    ],
  },
  {
    id: 'trauma-audit',
    no: 'CS-06',
    domain: 'clinical-evals',
    tag: {
      en: 'ML Leakage Audit · CCR Research Note · Modal GPU API',
      zh: '机器学习泄漏审计 · CCR 投稿手稿 · Modal 云端推理 API',
    },
    status: { en: 'CCR Manuscript Ready · Modal API Live', zh: 'CCR 手稿就绪 · Modal 接口在线' },
    title: {
      en: 'Intergenerational Trauma Corpus Leakage Audit & Honest RoBERTa Benchmark',
      zh: '跨代际创伤多源语料数据泄露审计与无偏 RoBERTa 评测基准',
    },
    subtitle: {
      en: 'Audited 4,094 narratives across 8 public mental-health corpora, proving circular keyword labels and source metadata inflated accuracy from 0.321 (source-grouped) to 0.795.',
      zh: '对 8 个公开心理健康语料库的 4,094 条叙事开展全链路审计，揭示启发式关键词标签与来源元数据如何将真实跨源准确率（0.321）虚高放大至 0.795。',
    },
    problem: {
      en: 'Repurposed mental-health NLP datasets frequently combine multiple Reddit/clinical sources with keyword-assisted silver labels, creating invisible shortcuts where models memorize subreddit provenance instead of psychological constructs.',
      zh: '拼合多源公共心理语料时，启发式关键词打标与数据源元特征极易形成循环捷径，使深度学习模型记住“语料出处”而非真实的心理创伤语义。',
    },
    architecture: {
      en: 'Built a reproducible ablation & split-protocol suite (random split vs. 5-fold stratified vs. strict source-grouped split; text-only RoBERTa-large vs. metadata-only logistic regression) and deployed the honest checkpoint on Modal serverless GPUs.',
      zh: '构建可复现消融与切分审计套件（随机切分 vs. 分层 5 折 vs. 严格按语料来源分组切分；纯文本 RoBERTa-large vs. 仅元数据逻辑回归），并将去偏模型部署于 Modal Serverless GPU。',
    },
    outcome: {
      en: 'Demonstrated metadata-only models (0.795) beat text RoBERTa-large (0.704) under naive splits before collapsing to 0.321 under source-grouped evaluation; packaged into an OJS-ready Computational Communication Research (CCR) Research Note.',
      zh: '实证证明在常规随机切分下“仅靠元数据逻辑回归（0.795）”即可击败微调 RoBERTa-large（0.704），而在严格跨源切分下回落至 0.321；成果已封装为 CCR 期刊投稿手稿与在线推理接口。',
    },
    bullets: [
      {
        en: 'Exposed circular label-derived metadata confounds across 4,094 narratives spanning 8 public corpora.',
        zh: '在横跨 8 个公开语料库的 4,094 条文本中定位循环标签与来源混淆特征。',
      },
      {
        en: 'Quantified the 47.4-point accuracy mirage (0.795 metadata shortcut vs. 0.321 honest source-grouped generalization).',
        zh: '量化揭示高达 47.4 个百分点的“准确率海市蜃楼”（0.795 元数据捷径 vs. 0.321 严格跨源泛化）。',
      },
      {
        en: 'Shipped live Modal serverless endpoint (/health, /model-info, /predict) and 5 diagnostic publication figures.',
        zh: '上线 Modal 无服务器推理端点（/health、/model-info、/predict）及 5 幅出版级诊断图表。',
      },
    ],
    metrics: [
      { value: '4,094', label: { en: 'Narratives Across 8 Corpora', zh: '跨 8 库审计样本数' } },
      { value: '0.795 → 0.321', label: { en: 'Shortcut vs. Grouped Acc', zh: '捷径虚高 vs. 跨源真实准确率' } },
      { value: 'Modal GPU', label: { en: 'Live Audited Endpoint', zh: '在线去偏推理接口' } },
    ],
    stack: ['PyTorch', 'RoBERTa-large', 'Scikit-Learn', 'Modal Serverless', 'R / ggplot2'],
    links: [
      { label: { en: 'Live Modal API Info', zh: '在线 Modal 接口状态' }, url: 'https://alexxhchen-nu--project4-multimodal-api.us-east.modal.run/model-info' },
      { label: { en: 'ORCID Author Profile', zh: 'ORCID 作者主页' }, url: 'https://orcid.org/0009-0003-7124-5208' },
    ],
  },
];

export const SMALLER_CARDS: SmallerCard[] = [
  {
    id: 'fencing-dj',
    tag: { en: 'Founder · Niche Data Publication', zh: '创始人 · 垂直体育数据新闻' },
    status: { en: '13,900+ Reads · +280% Growth', zh: '13,900+ 阅读 · 两周增粉 +280%' },
    title: {
      en: 'Data Journalism in Fencing',
      zh: 'Data Journalism in Fencing（击剑数据新闻专栏）',
    },
    summary: {
      en: 'Founded an independent data-journalism publication analyzing international sabre/fencing bout telemetry, touch-tempo distributions, and Olympic/NCAA qualification trends across 5 channels.',
      zh: '创立专注于击剑赛事表现与技战术量化分析的数据新闻专栏，自建回合级数据集与可视化图表，跨 5 大内容平台分发并获 13,900+ 阅读。',
    },
    problem: {
      en: 'Competitive fencing analytics rarely move beyond final bout scores, leaving tempo shifts, score-state risk profiles, and referee/pistoning patterns invisible to athletes and fans.',
      zh: '传统击剑报道大多停留在终盘比分，缺乏对交锋节奏、关键分风险决策与国际裁判判罚趋势的颗粒度数据拆解。',
    },
    approach: {
      en: 'Combined domain expertise as a former Canadian national sabre team member and 3-year Northwestern NCAA D1 athlete with custom bout-tagging schemas (action, distance, tempo, score state) and multi-platform visual storytelling.',
      zh: '结合自身前加拿大国家佩剑队队员与西北大学 NCAA D1 三年校队经历，设计回合标注框架（动作、距离、节奏、比分状态），并以数据叙事在 Substack、X、Instagram、Threads 与 Bluesky 同步分发。',
    },
    impact: {
      en: 'Surpassed 13,900+ cumulative reads and achieved +280% follower growth within a two-week cross-channel distribution experiment.',
      zh: '累计突破 13,900+ 次深度阅读，并在为期两周的多平台分发与版式实验中实现关注者 +280% 增长。',
    },
    metrics: [
      { value: '13,900+', label: { en: 'Cumulative Reads', zh: '累计阅读量' } },
      { value: '+280%', label: { en: '2-Week Audience Growth', zh: '两周受众增长率' } },
      { value: '5 Channels', label: { en: 'Substack · IG · X · Threads · Bsky', zh: '五端同步分发矩阵' } },
    ],
    links: [
      { label: { en: 'Request Data Clips via Email', zh: '邮件索取数据报道样稿' }, url: 'mailto:alexchen2027@u.northwestern.edu?subject=Fencing%20Data%20Journalism%20Clips' },
    ],
  },
  {
    id: 'technexus',
    tag: { en: 'Medill Newsroom Residency · Mar–Jun 2026', zh: 'Medill 驻站新闻实践 · 2026 年 3–6 月' },
    status: { en: '9 Published · 8 Bylined', zh: '发表 9 篇 · 独立/署名 8 篇' },
    title: {
      en: 'TechNexus Venture Collaborative — Venture & Tech Beat Reporting',
      zh: 'TechNexus Venture Collaborative — 创投与科技生态深度报道',
    },
    summary: {
      en: 'Reported and published 9 stories (8 bylined) during a full-time Medill journalism residency in Chicago, pairing original founder/investor interviews with SEC filings and venture dataset verification.',
      zh: '在芝加哥 TechNexus 完成全职 Medill 驻站记者任期，采写发表 9 篇报道（8 篇署名），将创业者/投资人一手访谈与公开监管文件及创投数据核查相结合。',
    },
    problem: {
      en: 'Venture-ecosystem coverage often echoes press-release talking points without cross-checking capital deployment, corporate-startup partnership mechanics, or public filings.',
      zh: '创投生态报道容易流于公关通稿复述，缺少对资本配置结构、大企业协同机制与公开申报记录的交叉核实。',
    },
    approach: {
      en: 'Built beat trackers over portfolio cohorts, conducted on-the-record executive interviews, and fact-checked every quantitative claim against primary filings and pitch records under newsroom deadlines.',
      zh: '建立赛道与被投组合数据库，开展高管与创始人实名访谈，并在截稿周期内逐条核验全部财务与业务增长口径。',
    },
    impact: {
      en: 'Delivered 9 published pieces (8 carrying solo/lead byline) across venture strategy, industrial tech, and founder case analyses.',
      zh: '围绕企业创投协同、硬科技商业化与创始人决策共发表 9 篇正式稿件，其中 8 篇带个人署名。',
    },
    metrics: [
      { value: '9', label: { en: 'Published Stories', zh: '正式发表稿件' } },
      { value: '8', label: { en: 'Bylined Articles', zh: '个人署名文章' } },
      { value: '10 Weeks', label: { en: 'Chicago Newsroom Residency', zh: '芝加哥全职驻站周期' } },
    ],
    links: [
      { label: { en: 'Request Bylined Clips', zh: '索取署名报道合集' }, url: 'mailto:alexchen2027@u.northwestern.edu?subject=TechNexus%20Bylined%20Clips' },
    ],
  },
  {
    id: 'tang-poetry',
    tag: { en: 'Cultural Analytics · Spatial Humanities', zh: '文化分析 · 古典文学空间计算' },
    status: { en: '13 Historical Nodes · Interactive Map', zh: '13 处历史地理节点 · 情感空间映射' },
    title: {
      en: 'Chinese Classical Poetry Sentiment & Historical Geography Map',
      zh: '古典唐诗地理空间与意象情感图谱（Chinese Poetry Sentiment Map）',
    },
    summary: {
      en: 'Mapped classical Chinese poetic sentiment, frontier/exile motifs, and historical place names onto interactive coordinates across 13 canonical Tang-Song literary sites.',
      zh: '将古典诗词中的意象、贬谪/边塞主题与情感极性映射至长安、洛阳、金陵、成都、阳关等 13 个核心历史地理坐标，呈现空间文学情感分布。',
    },
    problem: {
      en: 'Classical Chinese toponyms shift across dynasties and carry dense affective conventions (e.g., frontier parting at Yangguan vs. imperial nostalgia at Jinling) that flat text search misses.',
      zh: '中国古典文学地名历代沿革复杂，且高度凝结特定空间情感范式（如阳关送别、金陵怀古、巴蜀羁旅），纯文本检索难以直观呈现地理与情感的耦合结构。',
    },
    approach: {
      en: 'Reconciled historical toponyms to modern GIS coordinates, scored classical imagery valence (nostalgia, frontier desolation, conviviality, nature serenity), and built an interactive spatial explorer.',
      zh: '对齐古今历史地名与经纬度坐标，结合古典意象词典量化作品情感维度（怀古、边塞苍凉、宴饮旷达、山水澄明），构建可交互历史地理探索微视图。',
    },
    impact: {
      en: 'Demonstrates full-stack cultural analytics bridging classical sinology, historical GIS disambiguation, and editorial data visualization.',
      zh: '连接古典文献学、历史地理消歧与叙事性数据可视化，展现跨语种数字人文计算能力。',
    },
    metrics: [
      { value: '13 Sites', label: { en: 'Canonical Literary Toponyms', zh: '核心古典文学地标' } },
      { value: '4 Axes', label: { en: 'Affective Motif Dimensions', zh: '四维古典意象情感轴' } },
      { value: 'GIS + NLP', label: { en: 'Historical Toponym Alignment', zh: '古今地名空间对齐' } },
    ],
    links: [
      { label: { en: 'GitHub Profile', zh: 'GitHub 主页' }, url: 'https://github.com/alexxhchen-nu' },
    ],
  },
];

// Strictly concise one-liners respecting confidentiality / NDA boundaries (no proprietary client materials).
export const EXPERIENCE_ONE_LINERS: ExperienceOneLiner[] = [
  {
    id: 'comap',
    org: { en: 'COMAP Lab · Northwestern University', zh: '西北大学 COMAP 实验室（COMAP Lab）' },
    role: { en: 'Research Assistant', zh: '科研助理（Research Assistant）' },
    period: { en: 'Oct 2026–Present', zh: '2026 年 10 月至今' },
    line: {
      en: 'Builds automated cross-platform social-media data collection pipelines and computational framing/network workflows for faculty-led communication research.',
      zh: '负责构建跨平台社交媒体自动化数据采集管线与计算框架/网络分析工作流，支撑传播学课题组实证研究。',
    },
  },
  {
    id: 'roland-berger',
    org: { en: 'Roland Berger', zh: '罗兰贝格管理咨询（Roland Berger）' },
    role: { en: 'Consulting Intern (PTA)', zh: '管理咨询实习生（PTA）' },
    period: { en: 'Prior Internship', zh: '咨询实习经历' },
    line: {
      en: 'Supported quantitative market sizing, competitive benchmarking, and structured desk research under strict client confidentiality.',
      zh: '在严格遵守客户保密规范（NDA）前提下，支持行业市场规模测算、竞争格局对标与结构化案头研究。',
    },
  },
  {
    id: 'burson',
    org: { en: 'Burson (BCW / Hill & Knowlton)', zh: '博雅公关（Burson）' },
    role: { en: 'Strategic Communications Intern', zh: '战略传播与声誉洞察实习生' },
    period: { en: 'Prior Internship', zh: '传播实习经历' },
    line: {
      en: 'Conducted bilingual media monitoring, sentiment synthesis, and executive briefing preparation for multinational accounts.',
      zh: '为跨国企业客户提供中英双语舆情监测、声誉洞察分析与高管简报撰写。',
    },
  },
  {
    id: 'knight-lab',
    org: { en: 'Knight Lab at Northwestern University', zh: '西北大学骑士实验室（Knight Lab）' },
    role: { en: 'AI Content & Research Member', zh: 'AI 内容与研究成员' },
    period: { en: 'May 2025–Present', zh: '2025 年 5 月至今' },
    line: {
      en: 'Collaborates in a six-person interdisciplinary studio on generative visual workflows, LoRA dataset optimization, and reproducible editorial tooling notes.',
      zh: '在六人跨学科团队中开展生成式视觉实验、LoRA 数据集优化，并将技术实验沉淀为可复现的新闻工具文档。',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-agents',
    title: { en: '01 / AI, NLP & Agentic Infrastructure', zh: '01 / AI、NLP 与智能体基础设施' },
    items: [
      'PyTorch & HuggingFace (RoBERTa / BERTopic)',
      'Model Context Protocol (MCP) Servers',
      'LiveKit Real-Time Voice Agents',
      'Provenance & Anti-Hallucination Guardrails',
      'ML Leakage Auditing & Group-Split Evals',
      'Agent Skills Architecture (Claude / Codex)',
    ],
  },
  {
    id: 'fullstack-data',
    title: { en: '02 / Full-Stack & Data Engineering', zh: '02 / 全栈工程与数据管线' },
    items: [
      'Python 3.12 (FastAPI, uv, Playwright)',
      'TypeScript, React 19, Next.js 16',
      'SQLite (Transactional Schemas), DuckDB, SQL',
      'Cloudflare Workers, R2 Edge Streaming & Cron',
      'Modal Serverless GPU Deployment',
      'MinerU PDF/OCR Layout Extraction',
    ],
  },
  {
    id: 'css-journalism',
    title: { en: '03 / Data Journalism & Computational Social Science', zh: '03 / 数据新闻与计算社会科学' },
    items: [
      'Social Network Analysis (NetworkX, Gephi)',
      'Entity Resolution & Public-Record Auditing',
      'Investigative Interviewing & SEC/FOIA Verification',
      'Empirical Literature Synthesis & Meta-Analytic Matrices',
      'Cross-Platform Content & Framing Analysis',
      'R (ggplot2) & Reproducible LaTeX / Zenodo Archiving',
    ],
  },
  {
    id: 'spatial-design',
    title: { en: '04 / Spatial, 3D & Editorial Visualization', zh: '04 / 空间计算、三维建模与叙事设计' },
    items: [
      'Three.js / WebGL & GLB 3D Morphology',
      'Historical GIS & Spatial Mapping',
      'Interactive Editorial SVG Systems',
      'Obsidian Plugin Development',
      'Figma, Remotion, Premiere & DaVinci Resolve',
      'Bilingual Storytelling (English & Chinese Native)',
    ],
  },
];

export function formatCaseStudyMarkdown(cs: CaseStudy, lang: Lang): string {
  const lines = [
    `# ${cs.no}: ${t(cs.title, lang)}`,
    `**Tag**: ${t(cs.tag, lang)} | **Status**: ${t(cs.status, lang)}`,
    '',
    `> ${t(cs.subtitle, lang)}`,
    '',
    `## ${lang === 'en' ? 'Problem' : '核心痛点'}`,
    t(cs.problem, lang),
    '',
    `## ${lang === 'en' ? 'Architecture & Method' : '系统架构与方法'}`,
    t(cs.architecture, lang),
    '',
    `## ${lang === 'en' ? 'Outcome & Verification' : '实证产出与核验'}`,
    t(cs.outcome, lang),
    '',
    `## ${lang === 'en' ? 'Key Highlights' : '关键亮点'}`,
    ...cs.bullets.map((b) => `- ${t(b, lang)}`),
    '',
    `## ${lang === 'en' ? 'Metrics' : '核心指标'}`,
    ...cs.metrics.map((m) => `- **${m.value}**: ${t(m.label, lang)}`),
    '',
    `**Stack**: ${cs.stack.join(', ')}`,
    ...cs.links.map((l) => `- [${t(l.label, lang)}](${l.url})`),
  ];
  return lines.join('\n');
}

export function formatSmallerCardMarkdown(card: SmallerCard, lang: Lang): string {
  const lines = [
    `# ${t(card.title, lang)}`,
    `**${t(card.tag, lang)}** — ${t(card.status, lang)}`,
    '',
    t(card.summary, lang),
    '',
    `- **${lang === 'en' ? 'Context' : '背景问题'}**: ${t(card.problem, lang)}`,
    `- **${lang === 'en' ? 'Approach' : '方法执行'}**: ${t(card.approach, lang)}`,
    `- **${lang === 'en' ? 'Impact' : '验证结果'}**: ${t(card.impact, lang)}`,
    '',
    ...card.metrics.map((m) => `- **${m.value}**: ${t(m.label, lang)}`),
  ];
  return lines.join('\n');
}
