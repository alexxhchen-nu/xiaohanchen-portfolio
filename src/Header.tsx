import { useState } from 'react';
import './Header.css';
import { SECTIONS, View } from './data';

export default function Header({ view, go }: { view: View; go: (v: View) => void }) {
  const [open, setOpen] = useState(false);
  const pick = (v: View) => {
    setOpen(false);
    go(v);
  };
  return (
    <header className="hd">
      <div className="hd-bar">
        <button className="hd-logo" onClick={() => pick('home')} aria-label="Home">XC</button>
        <nav className="hd-nav" aria-label="Primary">
          {SECTIONS.map((s) => (
            <button key={s.key} className={view === s.key ? 'on' : ''} onClick={() => pick(s.key)}>
              {s.title}
            </button>
          ))}
        </nav>
        <button className="hd-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav className="hd-drawer" aria-label="Mobile">
          {SECTIONS.map((s) => (
            <button key={s.key} className={view === s.key ? 'on' : ''} onClick={() => pick(s.key)}>
              <span>{s.no}</span>{s.title}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
