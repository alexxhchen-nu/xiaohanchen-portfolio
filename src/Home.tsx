import { useState } from 'react';
import './Home.css';
import { PUBLICATIONS, View } from './data';
import {
  CASE_STUDIES,
  CaseStudyId,
  EXPERIENCE_ONE_LINERS,
  PERSONAL_LINKS,
  SKILL_CATEGORIES,
  t,
  useLang,
} from './i18n';
import { CaseStudyReaderModal } from './FeaturedCaseStudies';

const EMAIL = 'alexchen2027@u.northwestern.edu';

const COPY = {
  role: {
    en: 'Data journalist & computational builder',
    zh: '数据记者 / 计算型开发者',
  },
  lead: {
    en: 'I build provenance-first AI tools, archival data pipelines and leakage-audited research systems, so every claim traces back to evidence.',
    zh: '我构建溯源优先的 AI 工具、档案数据管线与经过泄露审计的研究系统，让每一条结论都能追溯到证据。',
  },
  meta: {
    en: 'Northwestern University · Medill ’27 · HCI Certificate · Ex-NCAA D1 & Canadian national sabre fencer',
    zh: '西北大学 · Medill ’27 · HCI 证书 · 前 NCAA D1 与加拿大国家队佩剑运动员',
  },
};

export default function Home({ go }: { go: (v: View) => void }) {
  const { lang } = useLang();
  const [activeId, setActiveId] = useState<CaseStudyId | null>(null);
  const active = activeId ? CASE_STUDIES.find((c) => c.id === activeId) ?? null : null;
  const en = lang === 'en';

  return (
    <main className="hm">
      <section className="hm-hero">
        <p className="hm-kicker">{t(COPY.role, lang)}</p>
        <h1 className="hm-name">
          Xiaohan <span>(Alex)</span> Chen
        </h1>
        <div className="hm-hero-row">
          <p className="hm-lead">{t(COPY.lead, lang)}</p>
          <div className="hm-hero-side">
            <p className="hm-meta">{t(COPY.meta, lang)}</p>
            <div className="hm-links">
              {PERSONAL_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target={l.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hm-sec" id="work">
        <header className="hm-sec-head">
          <span>01</span>
          <h2>{en ? 'Selected Work' : '精选作品'}</h2>
          <button type="button" onClick={() => go('projects')}>
            {en ? 'Interactive demos & live lab →' : '交互演示与实时工作台 →'}
          </button>
        </header>
        <ol className="hm-work">
          {CASE_STUDIES.map((cs) => (
            <li key={cs.id}>
              <button type="button" className="hm-row" onClick={() => setActiveId(cs.id)}>
                <span className="hm-row-no">{cs.no}</span>
                <span className="hm-row-main">
                  <strong>{t(cs.title, lang)}</strong>
                  <em>{t(cs.subtitle, lang)}</em>
                </span>
                <span className="hm-row-tag">{t(cs.tag, lang)}</span>
                <span className="hm-row-metric">
                  <b>{cs.metrics[0]?.value}</b>
                  <i>{cs.metrics[0] ? t(cs.metrics[0].label, lang) : ''}</i>
                </span>
                <span className="hm-row-arrow" aria-hidden="true">→</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="hm-sec" id="experience">
        <header className="hm-sec-head">
          <span>02</span>
          <h2>{en ? 'Experience' : '经历'}</h2>
        </header>
        <div className="hm-table">
          {EXPERIENCE_ONE_LINERS.map((x) => (
            <div key={x.id} className="hm-tr">
              <span className="hm-td-period">{t(x.period, lang)}</span>
              <span className="hm-td-main">
                <strong>{t(x.org, lang)}</strong>
                <em>{t(x.role, lang)}</em>
              </span>
              <p>{t(x.line, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hm-sec" id="publications">
        <header className="hm-sec-head">
          <span>03</span>
          <h2>{en ? 'Publications' : '学术发表'}</h2>
          <button type="button" onClick={() => go('publications')}>
            {en ? 'All →' : '全部 →'}
          </button>
        </header>
        <div className="hm-table">
          {PUBLICATIONS.slice(0, 3).map((p) => (
            <div key={p.id} className="hm-tr">
              <span className="hm-td-period">{p.year}</span>
              <span className="hm-td-main">
                <strong>{p.title}</strong>
                <em>{p.venue}</em>
              </span>
              {p.link ? (
                <a className="hm-td-link" href={p.link} target="_blank" rel="noreferrer">
                  DOI ↗
                </a>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="hm-sec" id="skills">
        <header className="hm-sec-head">
          <span>04</span>
          <h2>{en ? 'Skills' : '技能'}</h2>
        </header>
        <div className="hm-skills">
          {SKILL_CATEGORIES.map((c) => (
            <div key={c.id}>
              <h3>{t(c.title, lang)}</h3>
              <p>{c.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hm-sec hm-contact" id="contact">
        <header className="hm-sec-head">
          <span>05</span>
          <h2>{en ? 'Contact' : '联系'}</h2>
        </header>
        <a className="hm-mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <p>{en ? 'Open to internships and research collaborations. CV on request.' : '欢迎实习与科研合作，简历可邮件索取。'}</p>
      </section>

      {active && (
        <CaseStudyReaderModal
          cs={active}
          list={CASE_STUDIES}
          onSelect={(id) => setActiveId(id)}
          onClose={() => setActiveId(null)}
        />
      )}
    </main>
  );
}
