import { useState } from 'react';
import './Interests.css';
import SectionHead from './SectionHead';
import { View } from './data';
import { INTERESTS } from './facts';

export default function Interests({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  const [sel, setSel] = useState<string | null>(null);
  const cur = INTERESTS.find((i) => i.name === sel);
  return (
    <section id="interests">
      {!full && <SectionHead k="interests" go={go} />}
      <div className="in-chips">
        {INTERESTS.map((t) => (
          <button key={t.name} aria-pressed={sel === t.name} className={sel === t.name ? 'on' : ''} onClick={() => setSel(sel === t.name ? null : t.name)}>{t.name}</button>
        ))}
      </div>
      {cur && (
        <div className="in-note">
          <p className="in-k">{cur.name}</p>
          <p>{cur.note}</p>
        </div>
      )}
    </section>
  );
}
