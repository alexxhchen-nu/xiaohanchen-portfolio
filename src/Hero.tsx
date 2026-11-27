import './Hero.css';
import {
  HERO_COPY,
  PERSONAL_LINKS,
  ROLE_LENSES,
  RoleLens,
  t,
  useLang,
} from './i18n';

export default function Hero() {
  const { lang, lens, setLens } = useLang();

  const pickLens = (id: RoleLens) => {
    setLens(id);
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
  };

  const jump = (anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-top">
        <div>
          <p className="hero-eyebrow">{t(HERO_COPY.eyebrow, lang)}</p>
          <h1 className="hero-name">
            Xiaohan <span>(Alex)</span> Chen
          </h1>
        </div>
        <div className="hero-links" aria-label="Profile links">
          {PERSONAL_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target={l.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.url.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <p className="hero-bio">{t(HERO_COPY.bio, lang)}</p>

      <div className="hero-roles">
        <strong>{t(HERO_COPY.targetRolesLabel, lang)}</strong>{' '}
        <span>{t(HERO_COPY.targetRoles, lang)}</span>
      </div>

      <div className="hero-actions-bar">
        <div className="hero-lens">
          <span className="hero-lens-label">{t(HERO_COPY.lensHeading, lang)}</span>
          <div className="hero-lens-btns" role="group" aria-label="Target role lens">
            {ROLE_LENSES.map((r) => (
              <button
                key={r.id}
                type="button"
                className={`hero-lens-btn ${lens === r.id ? 'on' : ''}`}
                onClick={() => pickLens(r.id)}
              >
                {t(r.label, lang)}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-quick">
          <button type="button" className="hq-primary" onClick={() => jump('case-studies')}>
            {lang === 'en' ? '01 Featured Cases ↓' : '01 浏览核心案例 ↓'}
          </button>
          <button type="button" onClick={() => jump('psychtool-workbench')}>
            {lang === 'en' ? '02 Try Psychtool Lab' : '02 体验溯源工作台'}
          </button>
          <button type="button" onClick={() => jump('publications')}>
            {lang === 'en' ? '03 Preprints & DOI' : '03 预印本与论文'}
          </button>
          <a href="mailto:alexchen2027@u.northwestern.edu" className="hq-link">
            {lang === 'en' ? 'Email / Request CV →' : '邮件联系 / 索取简历 →'}
          </a>
        </div>
      </div>
    </section>
  );
}
