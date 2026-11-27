import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import FeaturedCaseStudies from './FeaturedCaseStudies';
import Reporting from './Reporting';
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
import { Lang, LangContext, RoleLens, useLang } from './i18n';

function ScrollProgressRail() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) {
        setPct(0);
        return;
      }
      const next = Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100)));
      setPct(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <aside className="sp-rail" aria-hidden="true">
      <span className="sp-rail-num">{String(pct).padStart(2, '0')}</span>
      <div className="sp-rail-track">
        <div className="sp-rail-bar" style={{ height: `${pct}%` }} />
      </div>
      <span className="sp-rail-num">100</span>
    </aside>
  );
}

function Page({ k, go }: { k: SectionKey; go: (v: View) => void }) {
  const { lang } = useLang();
  const s = SECTIONS.find((x) => x.key === k)!;
  return (
    <main className="page">
      <button type="button" className="page-back-btn" onClick={() => go('home')}>
        {lang === 'en' ? '← Back to Portfolio Overview' : '← 返回作品集总览'}
      </button>
      <p className="page-no">
        {s.no} / {s.title}
      </p>
      <h1 className="page-title">{s.title}</h1>
      <p className="page-blurb">{s.blurb}</p>
      <div className="page-body">
        {k === 'projects' && (
          <>
            <FeaturedCaseStudies />
            <div style={{ marginTop: '48px' }}>
              <PsychtoolLab />
            </div>
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
  const [lang, setLang] = useState<Lang>('en');
  const [lens, setLens] = useState<RoleLens>('default');

  const go = (v: View) => {
    setView(v);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <LangContext.Provider value={{ lang, setLang, lens, setLens }}>
      <div className="app">
        <ScrollProgressRail />
        <Header view={view} go={go} />
        {view === 'home' ? (
          <main>
            <Hero />
            <FeaturedCaseStudies />
            <Reporting />
            <About />
            <PsychtoolLab />
            <Publications go={go} />
            <div className="grid-2" id="code-tools">
              <Code go={go} />
              <Reading go={go} />
            </div>
            <Index go={go} />
          </main>
        ) : (
          <Page k={view} go={go} />
        )}
        <Footer go={go} />
      </div>
    </LangContext.Provider>
  );
}
