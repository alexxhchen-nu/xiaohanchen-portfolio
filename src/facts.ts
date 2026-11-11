// Canonical facts for the hero bio and education block.
// Source of truth: admissions-workbench CV / transcript (GPA 3.726 -> 3.73, printed 2026-11-03).
// Kept separate from data.ts so the long-form project data stays untouched.

export const PROFILE =
  'Data journalist at Northwestern University\u2019s Medill School of Journalism (B.S. in Journalism, Data Journalism specialization; HCI certificate in progress). I reported and published nine stories during a Medill newsroom residency, eight bylined, and founded a data-journalism publication with 13,900+ reads. My work pairs original reporting with computation: auditing the data pipelines behind published claims, building interactive explainers, and shipping tools that keep every source traceable.';

export const EDUCATION = {
  school: 'Northwestern University, Medill School of Journalism \u2014 Evanston, Illinois',
  degree:
    'Bachelor of Science in Journalism \u2014 Specialization: Data Journalism \u00b7 Certificate in Human\u2013Computer Interaction (in progress) | Expected June 2027 | GPA: 3.73/4.00',
  bullets: [
    'Specialization: Data Journalism; Certificate: Human\u2013Computer Interaction (in progress)',
    'Relevant coursework: Data Journalism, News Research Methods, Data Visualization Storytelling, Investigative Reporting, Knight Lab Studio, Cultural Analytics, Media Law & Ethics, Microeconomics, Macroeconomics',
    'Five-time Dean\u2019s List',
    'Three-year NCAA Division I student-athlete (retired); member of Canada\u2019s national fencing team and multiple-time Canadian national champion',
    'Undergraduate Peer Adviser and Learning (UPAL) mentor',
  ],
};

export const INTERESTS: { name: string; note: string }[] = [
  { name: 'Full-Stack Digital Humanities', note: 'Turning historical texts, archaeological excavation reports, and noisy archival scans into structured databases and 3D spatial models.' },
  { name: 'Computational Social Science', note: 'Auditing ML pipelines for circularity, modeling cross-platform framing divergence, and extracting social networks from public records.' },
  { name: 'Data & Investigative Journalism', note: 'Founded Data Journalism in Fencing (13,900+ reads, +280% growth); nine published stories during a Medill newsroom residency, eight bylined.' },
  { name: 'Modular AI & Agentic Tools', note: 'Building provenance-first workbenches, MCP servers, verifiable eval loops, and interactive explainers that give researchers full control.' },
  { name: 'Fencing', note: 'Three-year NCAA Division I student-athlete (retired); member of Canada\u2019s national fencing team and multiple-time Canadian national champion.' },
];
