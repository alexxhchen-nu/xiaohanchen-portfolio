import './Shop.css';
import SectionHead from './SectionHead';
import { SHOP_PACKS, View } from './data';

export default function Shop({ full, go }: { full?: boolean; go?: (v: View) => void }) {
  return (
    <section className="sp" id="shop">
      {!full && <SectionHead k="shop" go={go} />}
      <div className="sp-hero">
        <div className="sp-hero-left">
          <p className="sp-kicker">UNVIBE YOUR RESEARCH &amp; WORKFLOW · FREE TO EXPLORE</p>
          <h3 className="sp-headline">
            Agent skills, provenance studios, and interactive explainers—ready to drop into your research or product.
          </h3>
          <p className="sp-sub">
            Open-source foundations paired with turnkey studio templates, evaluation suites, and distilled agent playbooks. Built from real digital humanities, clinical NLP, and computational social science pipelines.
          </p>
        </div>
        <div className="sp-stats">
          <div className="sp-stat">
            <strong>6+</strong>
            <span>Shipped Skill &amp; Studio Packs</span>
          </div>
          <div className="sp-stat">
            <strong>1,145</strong>
            <span>Builder Posts Distilled</span>
          </div>
          <div className="sp-stat">
            <strong>100-pt</strong>
            <span>Automated Rubric Auditors</span>
          </div>
          <div className="sp-stat">
            <strong>$99</strong>
            <span>All-Access Pass (or Open Source)</span>
          </div>
        </div>
      </div>

      <div className="sp-grid">
        {SHOP_PACKS.map((pack) => (
          <article key={pack.id} className="sp-card">
            <div className="sp-card-top">
              <span className="sp-no">{pack.no}</span>
              <span className="sp-badge">{pack.badge}</span>
            </div>
            <h4 className="sp-title">{pack.title}</h4>
            <p className="sp-desc">{pack.subtitle}</p>

            <dl className="sp-specs">
              <div>
                <dt>Contents</dt>
                <dd>{pack.contents}</dd>
              </div>
              <div>
                <dt>Includes</dt>
                <dd>{pack.includes}</dd>
              </div>
              <div>
                <dt>Formats</dt>
                <dd>{pack.formats}</dd>
              </div>
              <div>
                <dt>Good for</dt>
                <dd>{pack.goodFor}</dd>
              </div>
              {pack.builtOn && (
                <div>
                  <dt>Built on</dt>
                  <dd>{pack.builtOn}</dd>
                </div>
              )}
            </dl>

            <div className="sp-foot">
              <span className="sp-price">{pack.price}</span>
              <a href={pack.link} target="_blank" rel="noreferrer" className="sp-btn">
                {pack.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
