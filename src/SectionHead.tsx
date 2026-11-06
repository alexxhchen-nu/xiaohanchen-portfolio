import './SectionHead.css';
import { SECTIONS, SectionKey, View } from './data';

export default function SectionHead({ k, go }: { k: SectionKey; go?: (v: View) => void }) {
  const s = SECTIONS.find((x) => x.key === k)!;
  return (
    <div className="sh">
      <h2><span>{s.no}</span> / {s.title}</h2>
      {go && <button onClick={() => go(k)}>View all →</button>}
    </div>
  );
}
