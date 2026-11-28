import './CasePage.css';
import { t, useLang } from './i18n';
import { WORK } from './work';

export default function CasePage({ id, open }: { id: string; open: (id: string | null) => void }) {
  const { lang } = useLang();
  const en = lang === 'en';
  const idx = WORK.findIndex((w) => w.id === id);
  const w = WORK[idx];
  if (!w) return null;
  const next = WORK[(idx + 1) % WORK.length];

  return (
    <main className="cp">
      <button type="button" className="cp-back" onClick={() => open(null)}>
        ← {en ? 'All work' : '全部作品'}
      </button>
      <p className="cp-kicker">
        {w.no} · {t(w.tag, lang)}
      </p>
      <h1 className="cp-title">{t(w.title, lang)}</h1>
      <p className="cp-sub">{t(w.subtitle, lang)}</p>

      <dl className="cp-facts">
        <div>
          <dt>{en ? 'Status' : '状态'}</dt>
          <dd>{t(w.status, lang)}</dd>
        </div>
        {w.metrics.map((m) => (
          <div key={m.value}>
            <dt>{t(m.label, lang)}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
        {w.stack.length > 0 && (
          <div className="cp-facts-wide">
            <dt>{en ? 'Stack' : '技术栈'}</dt>
            <dd>{w.stack.join(' · ')}</dd>
          </div>
        )}
      </dl>

      <div className="cp-body">
        <section>
          <h2>{en ? 'Problem' : '问题'}</h2>
          <p>{t(w.problem, lang)}</p>
        </section>
        <section>
          <h2>{en ? 'Approach' : '方法'}</h2>
          <p>{t(w.approach, lang)}</p>
        </section>
        <section>
          <h2>{en ? 'Outcome' : '成果'}</h2>
          <p>{t(w.outcome, lang)}</p>
        </section>
        {w.bullets.length > 0 && (
          <section>
            <h2>{en ? 'Key details' : '关键细节'}</h2>
            <ul>
              {w.bullets.map((b, i) => (
                <li key={i}>{t(b, lang)}</li>
              ))}
            </ul>
          </section>
        )}
        {w.links.length > 0 && (
          <section>
            <h2>{en ? 'Links' : '链接'}</h2>
            <p className="cp-links">
              {w.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                  {t(l.label, lang)} ↗
                </a>
              ))}
            </p>
          </section>
        )}
      </div>

      <button type="button" className="cp-next" onClick={() => open(next.id)}>
        <span>{en ? 'Next project' : '下一个项目'}</span>
        <strong>{t(next.title, lang)} →</strong>
      </button>
    </main>
  );
}
