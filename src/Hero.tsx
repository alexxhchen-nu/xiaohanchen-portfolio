import './Hero.css';
import { PROFILE } from './facts';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">
        Xiaohan <span>(Alex)</span> Chen
      </h1>
      <p className="hero-sub">
        Evanston, Illinois, United States · 224-474-8019 · <a href="mailto:alexchen2027@u.northwestern.edu">Email</a> · <a href="https://www.linkedin.com/in/xiaohan-chen-530631293/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/alexxhchen-nu" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://orcid.org/0009-0003-7124-5208" target="_blank" rel="noreferrer">ORCID</a>
      </p>
      <p className="hero-bio">{PROFILE}</p>
    </section>
  );
}
