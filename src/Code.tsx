import { useState } from 'react';
import './Code.css';
import SectionHead from './SectionHead';
import Rows from './Rows';
import { CODE_ITEMS, DEV_SKILLS, View } from './data';

export default function Code({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  const [q, setQ] = useState('');
  const k = q.trim().toLowerCase();
  const rows = CODE_ITEMS.filter((r) => (r.name + ' ' + r.meta + ' ' + r.badge).toLowerCase().includes(k)).map((r) => ({ id: r.id, title: r.name, meta: r.meta, badge: r.badge }));
  const skills = DEV_SKILLS.filter((s) => s.toLowerCase().includes(k));
  return (
    <section id="code">
      {!full && <SectionHead k="code" go={go} />}
      {full && (
        <label className="cd-search">
          <span>$ grep</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="search skills and projects" aria-label="Search code" />
        </label>
      )}
      {skills.length > 0 && (
        <div className="cd-skills">
          {skills.map((s) => <span key={s}>{s}</span>)}
        </div>
      )}
      {rows.length > 0 && <Rows rows={rows} />}
      {!rows.length && !skills.length && <Rows rows={[]} empty={`No match for "${q}".`} />}
    </section>
  );
}
