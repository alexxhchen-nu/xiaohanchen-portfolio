import './Reporting.css';

const REPORTING = [
  {
    id: 'r1',
    tag: 'Newsroom · Medill Journalism Residency',
    title: 'TechNexus — Nine Published Stories, Eight Bylined',
    detail:
      'Reported and published nine stories during a Medill journalism residency at TechNexus (March–June 2026); eight carry my byline. Reporting combined original interviews with public-record and data work. Clips available on request.',
    status: 'Mar–Jun 2026',
  },
  {
    id: 'r2',
    tag: 'Founder · Data Journalism',
    title: 'Data Journalism in Fencing — 13,900+ Reads',
    detail:
      'Founded a data-journalism publication covering competition performance and sport trends; built the datasets, charts, and analyses behind each piece, and ran distribution across five channels.',
    status: 'May 2025–Present',
  },
  {
    id: 'r3',
    tag: 'Knight Lab at Northwestern',
    title: 'AI Content & Research Member',
    detail:
      'Experiments in AI visual content and dataset optimization inside a six-person interdisciplinary team; turns technical processes into documented, reproducible notes.',
    status: 'May 2025–Present',
  },
  {
    id: 'r4',
    tag: 'Medill Coursework',
    title: 'Data Journalism · Investigative Reporting · News Research Methods',
    detail:
      'Reported work combining public records, original interviews, and analysis; coursework also covers data-visualization storytelling, cultural analytics, and media law and ethics.',
    status: 'In progress',
  },
];

export default function Reporting() {
  return (
    <section className="rp" aria-label="Reporting and published work">
      <div className="rp-head">
        <span className="rp-dot" />
        <h2 className="rp-title">REPORTING &amp; PUBLISHED WORK</h2>
        <span className="rp-note">Medill School of Journalism · Evanston</span>
      </div>
      <div className="rp-grid">
        {REPORTING.map((item) => (
          <article key={item.id} className="rp-card">
            <div className="rp-top">
              <span className="rp-tag">{item.tag}</span>
              <span className="rp-badge">{item.status}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
