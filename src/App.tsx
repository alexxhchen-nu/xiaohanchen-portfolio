import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import WorkingOn from './WorkingOn';
import Index from './Index';
import About from './About';
import PsychtoolLab from './PsychtoolLab';
import Projects from './Projects';
import Publications from './Publications';
import Shop from './Shop';
import Code from './Code';
import Reading from './Reading';
import Interests from './Interests';
import Design from './Design';
import Footer from './Footer';
import { SECTIONS, View, SectionKey } from './data';

function Page({ k }: { k: SectionKey }) {
  const s = SECTIONS.find((x) => x.key === k)!;
  return (
    <main className="page">
      <p className="page-no">{s.no} / {s.title}</p>
      <h1 className="page-title">{s.title}</h1>
      <p className="page-blurb">{s.blurb}</p>
      <div className="page-body">
        {k === 'projects' && (
          <>
            <PsychtoolLab />
            <div style={{ marginTop: '48px' }}>
              <Projects full />
            </div>
          </>
        )}
        {k === 'publications' && <Publications full />}
        {k === 'shop' && <Shop full />}
        {k === 'code' && <Code full />}
        {k === 'reading' && <Reading full />}
        {k === 'interests' && <Interests full />}
        {k === 'design' && <Design full />}
      </div>
    </main>
  );
}

export default function App() {
  const [view, setView] = useState<View>('home');
  const go = (v: View) => {
    setView(v);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="app">
      <Header view={view} go={go} />
      {view === 'home' ? (
        <main>
          <Hero />
          <WorkingOn go={go} />
          <Index go={go} />
          <PsychtoolLab />
          <Publications go={go} />
          <Shop go={go} />
          <Projects go={go} />
          <About />
          <div className="grid-2">
            <Code go={go} />
            <Reading go={go} />
          </div>
          <div className="grid-2">
            <Interests go={go} />
            <Design go={go} />
          </div>
        </main>
      ) : (
        <Page k={view} />
      )}
      <Footer go={go} />
    </div>
  );
}
