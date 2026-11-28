import { useState } from 'react';
import './Header.css';
import { View } from './data';
import { BiText, t, useLang } from './i18n';

type NavItem = {
  id: string;
  no: string;
  label: BiText;
  anchor?: string;
  targetView?: View;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'work', no: '01', label: { en: 'Work', zh: '作品' }, anchor: 'work' },
  { id: 'exp', no: '02', label: { en: 'Experience', zh: '经历' }, anchor: 'experience' },
  { id: 'pubs', no: '03', label: { en: 'Publications', zh: '发表' }, anchor: 'publications' },
  { id: 'skills', no: '04', label: { en: 'Skills', zh: '技能' }, anchor: 'skills' },
  { id: 'contact', no: '05', label: { en: 'Contact', zh: '联系' }, anchor: 'contact' },
];

export default function Header({ view, go }: { view: View; go: (v: View) => void }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const navigateItem = (item: NavItem) => {
    setOpen(false);
    if (view !== 'home') {
      go('home');
      if (item.anchor) {
        setTimeout(() => {
          document.getElementById(item.anchor!)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      }
      return;
    }
    if (item.anchor) {
      const el = document.getElementById(item.anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (item.targetView) {
      go(item.targetView);
    }
  };

  return (
    <header className="hd">
      <div className="hd-bar">
        <div className="hd-left">
          <button
            type="button"
            className="hd-logo"
            onClick={() => {
              setOpen(false);
              go('home');
            }}
            aria-label="Home"
          >
            XC
          </button>
          {view !== 'home' && (
            <button
              type="button"
              className="hd-back"
              onClick={() => {
                setOpen(false);
                go('home');
              }}
            >
              {lang === 'en' ? '← Overview' : '← 返回总览'}
            </button>
          )}
        </div>

        <nav className="hd-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} type="button" onClick={() => navigateItem(item)}>
              <span className="hd-no">{item.no}</span> {t(item.label, lang)}
            </button>
          ))}
        </nav>

        <div className="hd-right">
          <div className="hd-lang" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={lang === 'en' ? 'on' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'zh' ? 'on' : ''}
              onClick={() => setLang('zh')}
            >
              中
            </button>
          </div>
          <button
            type="button"
            className="hd-toggle"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (lang === 'en' ? 'Close' : '收起') : lang === 'en' ? 'Menu' : '菜单'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="hd-drawer" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} type="button" onClick={() => navigateItem(item)}>
              <span>{item.no}</span>
              {t(item.label, lang)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
