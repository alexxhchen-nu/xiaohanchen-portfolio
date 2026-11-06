import './Footer.css';
import { SECTIONS, View } from './data';

export default function Footer({ go }: { go: (v: View) => void }) {
  return (
    <footer className="ft">
      <span>Xiaohan (Alex) Chen</span>
      <nav aria-label="Footer">
        {SECTIONS.map((s) => (
          <button key={s.key} onClick={() => go(s.key)}>{s.title}</button>
        ))}
      </nav>
      <span className="ft-contact">
        <a href="mailto:alexchen2027@u.northwestern.edu">Email</a> · <a href="https://www.linkedin.com/in/xiaohan-chen-530631293/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/alexxhchen-nu" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://orcid.org/0009-0003-7124-5208" target="_blank" rel="noreferrer">ORCID</a>
      </span>
    </footer>
  );
}
