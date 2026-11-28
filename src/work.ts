import { BiText, CASE_STUDIES, CaseLink, CaseMetric, SMALLER_CARDS } from './i18n';

export type WorkItem = {
  id: string;
  no: string;
  group: 'systems' | 'journalism';
  tag: BiText;
  status: BiText;
  title: BiText;
  subtitle: BiText;
  problem: BiText;
  approach: BiText;
  outcome: BiText;
  bullets: BiText[];
  metrics: CaseMetric[];
  stack: string[];
  links: CaseLink[];
};

export const WORK: WorkItem[] = [
  ...CASE_STUDIES.map(
    (c): WorkItem => ({
      id: c.id,
      no: c.no,
      group: 'systems',
      tag: c.tag,
      status: c.status,
      title: c.title,
      subtitle: c.subtitle,
      problem: c.problem,
      approach: c.architecture,
      outcome: c.outcome,
      bullets: c.bullets,
      metrics: c.metrics,
      stack: c.stack,
      links: c.links.filter((l) => !l.url.startsWith('#')),
    }),
  ),
  ...SMALLER_CARDS.map(
    (c, i): WorkItem => ({
      id: c.id,
      no: `DJ-0${i + 1}`,
      group: 'journalism',
      tag: c.tag,
      status: c.status,
      title: c.title,
      subtitle: c.summary,
      problem: c.problem,
      approach: c.approach,
      outcome: c.impact,
      bullets: [],
      metrics: c.metrics,
      stack: [],
      links: c.links.filter((l) => !l.url.startsWith('#')),
    }),
  ),
];
