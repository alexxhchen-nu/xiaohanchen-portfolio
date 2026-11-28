import './SectionHead.css';
import { SECTIONS, SectionKey, View } from './data';

export default function SectionHead({ k, go, no }: { k: SectionKey; go?: (v: View) => void; no?: string }) {
  const s = SECTIONS.find((x) => x.key === k)!;
  return (
    <div className="sh">
      <h2><span>{no ?? s.no}</span> / {s.title}</h2>
      {go && <button onClick={() => go(k)}>View all →</button>}
    </div>
  );
}
