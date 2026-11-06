import { useState } from 'react';
import './Reading.css';
import SectionHead from './SectionHead';
import Rows from './Rows';
import { READING, View } from './data';

const TABS = ['All', 'Writing', 'Synthesis', 'Skills'] as const;

export default function Reading({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>('All');
  const base = full ? READING : READING.slice(0, 2);
  const rows = base.filter((r) => tab === 'All' || r.kind === tab).map((r) => ({ id: r.id, title: r.title, meta: r.meta, badge: r.badge || (full ? r.kind : undefined) }));
  return (
    <section id="reading">
      {!full && <SectionHead k="reading" go={go} />}
      {full && (
        <div className="rd-tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
      )}
      <Rows rows={rows} empty="Nothing in this category." />
    </section>
  );
}
