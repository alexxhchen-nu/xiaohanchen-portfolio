import './About.css';
import { EDUCATION } from './facts';
import { LEADERSHIP, LANGUAGES } from './data';
import { EXPERIENCE_ONE_LINERS, SKILL_CATEGORIES, t, useLang } from './i18n';

export default function About() {
  const { lang } = useLang();

  return (
    <section className="ab" id="about" aria-label="Experience, Education, and Technical Skills">
      <div>
        <h2 className="ab-h">
          {lang === 'en'
            ? '05 / Experience (Research & Industry)'
            : '05 / 科研与行业实习经历（严守保密边界）'}
        </h2>
        <div className="ab-exp-list">
          {EXPERIENCE_ONE_LINERS.map((exp) => (
            <div key={exp.id} className="ab-exp-item">
              <div className="ab-exp-head">
                <strong>{t(exp.org, lang)}</strong>
                <span className="ab-exp-meta">
                  {t(exp.role, lang)} · {t(exp.period, lang)}
                </span>
              </div>
              <p className="ab-exp-line">{t(exp.line, lang)}</p>
            </div>
          ))}
        </div>

        <h2 className="ab-h ab-l">
          {lang === 'en' ? 'Education & Honors' : '教育背景与荣誉'}
        </h2>
        <h3>{EDUCATION.school}</h3>
        <p className="ab-m">{EDUCATION.degree}</p>
        <ul>
          {EDUCATION.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="ab-h">
          {lang === 'en'
            ? 'Technical & Editorial Stack (4 Domains)'
            : '全栈技术与数据研究能力矩阵（四大模块）'}
        </h2>
        <div className="ab-skill-groups">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="ab-skill-cat">
              <h3>{t(cat.title, lang)}</h3>
              <div className="ab-skill-chips">
                {cat.items.map((item) => (
                  <span key={item} className="ab-skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="ab-h ab-l">
          {lang === 'en' ? 'Leadership & Languages' : '学生领导力与语言'}
        </h2>
        <h3>{LEADERSHIP.title}</h3>
        <p className="ab-m">{LEADERSHIP.meta}</p>
        <ul>
          {LEADERSHIP.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="ab-lang">
          <strong>{lang === 'en' ? 'Languages:' : '语言能力：'}</strong> {LANGUAGES}
        </p>
      </div>
    </section>
  );
}
