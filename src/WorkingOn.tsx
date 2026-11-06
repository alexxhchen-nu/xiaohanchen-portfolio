import './WorkingOn.css';
import { WORKING_ON, View } from './data';

export default function WorkingOn({ go }: { go: (v: View) => void }) {
  return (
    <section className="wo" aria-label="Currently Working On">
      <div className="wo-head">
        <span className="wo-dot" />
        <h2 className="wo-title">NOW · ACTIVE RESEARCH &amp; ENGINEERING LAB (NOV 2026)</h2>
        <span className="wo-orcid">
          ORCID: <a href="https://orcid.org/0009-0003-7124-5208" target="_blank" rel="noreferrer">0009-0003-7124-5208</a>
        </span>
      </div>
      <div className="wo-grid">
        {WORKING_ON.map((item) => (
          <div
            key={item.id}
            className="wo-card"
            onClick={() => item.targetView && go(item.targetView)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && item.targetView && go(item.targetView)}
          >
            <div className="wo-top">
              <span className="wo-tag">{item.tag}</span>
              <span className="wo-badge">{item.status}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
