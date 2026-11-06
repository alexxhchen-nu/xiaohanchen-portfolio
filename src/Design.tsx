import { useState } from 'react';
import './Design.css';
import SectionHead from './SectionHead';
import Modal from './Modal';
import { DESIGNS, View } from './data';

export default function Design({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  const [sel, setSel] = useState<number | null>(null);
  const list = full ? DESIGNS : DESIGNS.slice(0, 4);
  const step = (d: number) => setSel((s) => (s === null ? s : (s + d + DESIGNS.length) % DESIGNS.length));
  return (
    <section id="design">
      {!full && <SectionHead k="design" go={go} />}
      <div className={'ds-grid' + (full ? ' full' : '')}>
        {list.map((d) => (
          <button key={d.id} className="ds-item" onClick={() => setSel(d.id)}>
            <div className="ds-img"><b>{d.label}</b></div>
            <span>Design and media</span>
          </button>
        ))}
      </div>
      {sel !== null && (
        <Modal label={DESIGNS[sel].label} onClose={() => setSel(null)}>
          <div className="ds-big"><b>{DESIGNS[sel].label}</b></div>
          <div className="ds-nav">
            <button onClick={() => step(-1)}>← Prev</button>
            <span>{String(sel + 1).padStart(2, '0')} / {String(DESIGNS.length).padStart(2, '0')}</span>
            <button onClick={() => step(1)}>Next →</button>
          </div>
          <p className="ds-cap">Design and media: {DESIGNS.map((d) => d.label).join(', ')}</p>
        </Modal>
      )}
    </section>
  );
}
