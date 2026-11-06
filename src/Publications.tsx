import './Publications.css';
import SectionHead from './SectionHead';
import { PUBLICATIONS, View } from './data';

export default function Publications({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  const list = full ? PUBLICATIONS : PUBLICATIONS.slice(0, 4);
  return (
    <section className="pub" id="publications">
      {!full && <SectionHead k="publications" go={go} />}
      <div className="pub-bar">
        <span>ORCID iD: <a href="https://orcid.org/0009-0003-7124-5208" target="_blank" rel="noreferrer">https://orcid.org/0009-0003-7124-5208</a></span>
        <span>Focus: Computational Social Science · Network Science · Clinical NLP · Digital Humanities</span>
      </div>
      <div className="pub-list">
        {list.map((p) => (
          <article key={p.id} className="pub-item">
            <div className="pub-meta">
              <span className="pub-venue">{p.venue}</span>
              <span className="pub-status">{p.status}</span>
            </div>
            <h3 className="pub-title">{p.title}</h3>
            <p className="pub-authors">
              {p.authors} · <span className="mono">ORCID: {p.orcid}</span>
            </p>
            <p className="pub-summary">{p.summary}</p>
            <div className="pub-foot">
              <div className="pub-tags">
                {p.artifacts.map((a) => (
                  <span key={a} className="pub-tag">{a}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="pub-link">
                  Inspect Record / Live Endpoint →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
