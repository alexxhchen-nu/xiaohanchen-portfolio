import './Index.css';
import { Icon } from './rikyu-icon';
import { SECTIONS, View } from './data';

export default function Index({ go }: { go: (v: View) => void }) {
  return (
    <nav className="idx" aria-label="Sections">
      {SECTIONS.map((s) => (
        <button key={s.key} className="idx-row" onClick={() => go(s.key)}>
          <span className="idx-no">{s.no}</span>
          <span className="idx-title">{s.title}</span>
          <span className="idx-desc">{s.blurb}</span>
          <span className="idx-arrow"><Icon src="./assets/icon-arrow.svg?tone=mono" size={24} /></span>
        </button>
      ))}
    </nav>
  );
}
