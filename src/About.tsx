import './About.css';
import { EDUCATION } from './facts';
import { LEADERSHIP, LANGUAGES } from './data';

export default function About() {
  return (
    <section className="ab" id="about">
      <div>
        <h2 className="ab-h">Education</h2>
        <h3>{EDUCATION.school}</h3>
        <p className="ab-m">{EDUCATION.degree}</p>
        <ul>{EDUCATION.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </div>
      <div>
        <h2 className="ab-h">Additional Leadership</h2>
        <h3>{LEADERSHIP.title}</h3>
        <p className="ab-m">{LEADERSHIP.meta}</p>
        <ul>{LEADERSHIP.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <h2 className="ab-h ab-l">Languages</h2>
        <p>{LANGUAGES}</p>
      </div>
    </section>
  );
}
