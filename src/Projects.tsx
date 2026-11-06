import { useState } from 'react';
import './Projects.css';
import SectionHead from './SectionHead';
import Modal from './Modal';
import { PROJECTS, View } from './data';

export default function Projects({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  const [sel, setSel] = useState<number | null>(null);
  const list = full ? PROJECTS : PROJECTS.slice(0, 6);
  const p = sel === null ? null : PROJECTS[sel];
  return (
    <section className="pj" id="projects">
      {!full && <SectionHead k="projects" go={go} />}
      <div className="pj-grid">
        {list.map((x) => (
          <button key={x.id} className="pj-card" onClick={() => setSel(x.id)}>
            <span className="pj-tag">{x.tag}</span>
            <h3>{x.title}</h3>
            <p>{x.meta}</p>
            {x.status && <span className="pj-st">{x.status}</span>}
          </button>
        ))}
      </div>
      {p && (
        <Modal label={p.title} onClose={() => setSel(null)}>
          <span className="pj-tag">{p.tag}</span>
          <h3 className="pj-mt">{p.title}</h3>
          <p className="pj-mp">{p.meta}</p>
          {p.status && <span className="pj-st">{p.status}</span>}
          <ul className="pj-ul">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          {p.artifact && <p className="pj-mp">Project artifact: <em>{p.artifact}</em></p>}
          {p.link && (
            <p className="pj-mp">
              Link: <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>{p.link}</a>
            </p>
          )}
        </Modal>
      )}
    </section>
  );
}
