import { useEffect, useState } from 'react';
import './Reporting.css';
import {
  SMALLER_CARDS,
  SmallerCard,
  SmallerCardId,
  formatSmallerCardMarkdown,
  t,
  useLang,
} from './i18n';

function FencingChannelWidget() {
  const { lang } = useLang();
  const channels = [
    { name: 'Substack (Longform + Charts)', share: 42, reads: '5,840+' },
    { name: 'X / Twitter (Thread Breakdowns)', share: 26, reads: '3,610+' },
    { name: 'Instagram (Visual Bout Cards)', share: 16, reads: '2,220+' },
    { name: 'Threads & Bluesky (Cross-Post)', share: 16, reads: '2,230+' },
  ];

  return (
    <div className="rp-widget">
      <div className="rp-widget-title">
        {lang === 'en'
          ? '5-CHANNEL DISTRIBUTION & +280% 2-WEEK FOLLOWER SURGE'
          : '五端内容分发占比与两周 +280% 受众增长结构'}
      </div>
      <div className="rp-bars">
        {channels.map((c) => (
          <div key={c.name} className="rp-bar-row">
            <div className="rp-bar-meta">
              <span>{c.name}</span>
              <span className="mono">{c.reads}</span>
            </div>
            <div className="rp-bar-track">
              <div className="rp-bar-fill" style={{ width: `${c.share * 2}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechNexusClipsWidget() {
  const { lang } = useLang();
  const clips = [
    {
      no: 'BEAT 01',
      title:
        lang === 'en'
          ? 'Corporate-Venture Co-Investment Mechanics & Strategic Capital Deployment'
          : '企业风险投资（CVC）联合投资机制与战略资本配置核查',
      method: lang === 'en' ? 'Executive interviews + SEC / pitch records' : '高管实名专访 + 监管申报数据交叉核验',
    },
    {
      no: 'BEAT 02',
      title:
        lang === 'en'
          ? 'Audio, Industrial & Applied AI Portfolio Founder Deep Dives'
          : '音频硬件、工业科技与应用型 AI 被投企业深度剖析',
      method: lang === 'en' ? 'Cohort database tracking + primary reporting' : '被投组合数据库追踪 + 一手田野采访',
    },
    {
      no: 'BEAT 03',
      title:
        lang === 'en'
          ? 'Midwest Venture Ecosystem & Cross-Stage Deal Flow Synthesis'
          : '美国中西部创投生态与跨轮次交易趋势综述',
      method: lang === 'en' ? '8 bylined stories out of 9 published residency pieces' : '驻站期间发表 9 篇正式报道（8 篇个人署名）',
    },
  ];

  return (
    <div className="rp-widget">
      <div className="rp-widget-title">
        {lang === 'en'
          ? 'REPRESENTATIVE REPORTING BEATS (9 PUBLISHED · 8 BYLINED)'
          : '驻站报道核心选题矩阵（发表 9 篇 · 署名 8 篇）'}
      </div>
      <div className="rp-clips">
        {clips.map((c) => (
          <div key={c.no} className="rp-clip-item">
            <span className="rp-clip-no">{c.no}</span>
            <div>
              <strong>{c.title}</strong>
              <p>{c.method}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TANG_SITES: {
  id: string;
  en: string;
  zh: string;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  anchor?: 'start' | 'end';
  motif: { en: string; zh: string };
}[] = [
  { id: 'yumenguan', en: 'Yumen Pass', zh: '玉门关', x: 14, y: 20, dx: 2.6, dy: 0.8, motif: { en: 'Borderland garrison & spring wind', zh: '春风玉门 · 戍边孤城' } },
  { id: 'yangguan', en: 'Yangguan Pass', zh: '阳关（敦煌西）', x: 18, y: 31, dx: 2.6, dy: 1.0, motif: { en: 'Western frontier farewell', zh: '西出阳关 · 边塞折柳' } },
  { id: 'liangzhou', en: 'Liangzhou (Wuwei)', zh: '凉州（武威）', x: 32, y: 34, dx: 2.6, dy: 1.0, motif: { en: 'Jade-cup wine & pipa martial tone', zh: '葡萄美酒 · 凉州边调' } },
  { id: 'changan', en: 'Chang’an (Xi’an)', zh: '长安（西安）', x: 47, y: 45, dx: -2.6, dy: -1.6, anchor: 'end', motif: { en: 'Imperial parting & autumn longing', zh: '帝京送别 · 秋思怀远' } },
  { id: 'luoyang', en: 'Luoyang', zh: '洛阳', x: 58, y: 43, dx: 2.6, dy: 0.6, motif: { en: 'Central Plains nostalgia & capital road', zh: '洛阳亲友 · 中原故园' } },
  { id: 'chengdu', en: 'Chengdu (Shu)', zh: '成都（锦官城）', x: 35, y: 66, dx: -2.4, dy: 1.2, anchor: 'end', motif: { en: 'Thatched cottage refuge & spring rain', zh: '草堂春雨 · 巴蜀栖居' } },
  { id: 'baidicheng', en: 'Baidi (Three Gorges)', zh: '白帝城（三峡）', x: 50, y: 64, dx: -2.4, dy: 5.2, anchor: 'end', motif: { en: 'Swift river release & pardon joy', zh: '朝辞白帝 · 轻舟快意' } },
  { id: 'jiangxia', en: 'Jiangxia (Wuhan)', zh: '江夏（黄鹤楼）', x: 62, y: 60, dx: -2.4, dy: -1.8, anchor: 'end', motif: { en: 'River gaze & misty homeland', zh: '黄鹤送别 · 烟波乡愁' } },
  { id: 'xunyang', en: 'Xunyang (Jiujiang)', zh: '浔阳（九江）', x: 66, y: 70, dx: -2.4, dy: 1.2, anchor: 'end', motif: { en: 'Exile lament & pipa resonance', zh: '浔阳谪居 · 天涯沦落' } },
  { id: 'yangzhou', en: 'Yangzhou', zh: '扬州', x: 76, y: 48, dx: 2.6, dy: 0.6, motif: { en: 'Canal prosperity & vernal farewell', zh: '烟花三月 · 淮左繁华' } },
  { id: 'jinling', en: 'Jinling (Nanjing)', zh: '金陵（南京）', x: 74, y: 56, dx: -2.6, dy: -1.4, anchor: 'end', motif: { en: 'Six Dynasties historical elegy', zh: '六朝怀古 · 江山兴替' } },
  { id: 'suzhou', en: 'Gusu (Suzhou)', zh: '姑苏（苏州）', x: 83, y: 60, dx: 2.5, dy: 0.8, motif: { en: 'Night mooring & Hanshan temple bell', zh: '枫桥夜泊 · 水乡羁旅' } },
  { id: 'hangzhou', en: 'Qiantang (Hangzhou)', zh: '钱塘（杭州）', x: 81, y: 71, dx: 2.5, dy: 1.2, motif: { en: 'Lake serenity & scenic lyricism', zh: '湖光山色 · 山水清音' } },
];

function TangPoetryMapWidget() {
  const { lang } = useLang();
  const [selected, setSelected] = useState(TANG_SITES[3]);

  return (
    <div className="rp-widget">
      <div className="rp-widget-title">
        {lang === 'en'
          ? '13 HISTORICAL LITERARY TOPONYMS'
          : '13 处唐宋文学地理节点'}
      </div>
      <div className="rp-map-wrap">
        <svg viewBox="0 8 104 72" className="rp-map-svg" role="img" aria-label="13 Tang Poetry Historical Sites">
          <line x1="14" y1="20" x2="18" y2="31" stroke="#cfcec9" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="18" y1="31" x2="32" y2="34" stroke="#cfcec9" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="32" y1="34" x2="47" y2="45" stroke="#cfcec9" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="47" y1="45" x2="58" y2="43" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="47" y1="45" x2="35" y2="66" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="35" y1="66" x2="50" y2="64" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="50" y1="64" x2="62" y2="60" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="62" y1="60" x2="67" y2="69" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="62" y1="60" x2="74" y2="56" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="74" y1="56" x2="76" y2="48" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="74" y1="56" x2="83" y2="60" stroke="#cfcec9" strokeWidth="0.5" />
          <line x1="83" y1="60" x2="81" y2="71" stroke="#cfcec9" strokeWidth="0.5" />
          {TANG_SITES.map((s) => {
            const active = s.id === selected.id;
            return (
              <g
                key={s.id}
                className="rp-map-node"
                onClick={() => setSelected(s)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={s.x}
                  cy={s.y}
                  r={active ? 2.4 : 1.6}
                  fill={active ? '#1f4fe0' : '#0b0b0b'}
                />
                <text
                  x={s.x + (s.dx ?? 2.5)}
                  y={s.y + (s.dy ?? 1)}
                  textAnchor={s.anchor ?? 'start'}
                  fontSize="3.1"
                  fill={active ? '#1f4fe0' : '#3a3a37'}
                  fontWeight={active ? '500' : '400'}
                  fontFamily="Roboto Mono, monospace"
                >
                  {lang === 'en' ? s.en.split(' ')[0] : s.zh.split('（')[0]}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="rp-map-info">
          <strong>{lang === 'en' ? selected.en : selected.zh}</strong>
          <p>{t(selected.motif, lang)}</p>
          <div className="rp-site-chips">
            {TANG_SITES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={s.id === selected.id ? 'on' : ''}
                onClick={() => setSelected(s)}
              >
                {lang === 'en' ? s.en.split(' ')[0] : s.zh.split('（')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallerCardModal({ card, onClose }: { card: SmallerCard; onClose: () => void }) {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const copyMd = async () => {
    try {
      await navigator.clipboard.writeText(formatSmallerCardMarkdown(card, lang));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rp-modal-back" onClick={onClose}>
      <div
        className="rp-modal"
        role="dialog"
        aria-modal="true"
        aria-label={t(card.title, lang)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rp-modal-top">
          <span className="rp-modal-tag">{t(card.tag, lang)}</span>
          <div className="rp-modal-btns">
            <button type="button" className="rp-copy-btn" onClick={copyMd}>
              {copied
                ? lang === 'en'
                  ? '✓ Copied'
                  : '✓ 已复制'
                : lang === 'en'
                  ? 'Copy Markdown'
                  : '复制 Markdown'}
            </button>
            <button type="button" className="rp-close-btn" onClick={onClose}>
              {lang === 'en' ? 'Close [ESC]' : '关闭 [ESC]'}
            </button>
          </div>
        </div>

        <h2 className="rp-modal-title">{t(card.title, lang)}</h2>
        <p className="rp-modal-sum">{t(card.summary, lang)}</p>

        <div className="rp-modal-metrics">
          {card.metrics.map((m) => (
            <div key={m.value} className="rp-metric">
              <strong>{m.value}</strong>
              <span>{t(m.label, lang)}</span>
            </div>
          ))}
        </div>

        {card.id === 'fencing-dj' && <FencingChannelWidget />}
        {card.id === 'technexus' && <TechNexusClipsWidget />}
        {card.id === 'tang-poetry' && <TangPoetryMapWidget />}

        <div className="rp-modal-cols">
          <div>
            <h3>{lang === 'en' ? 'Context' : '背景与问题'}</h3>
            <p>{t(card.problem, lang)}</p>
          </div>
          <div>
            <h3>{lang === 'en' ? 'Method & Execution' : '方法与执行'}</h3>
            <p>{t(card.approach, lang)}</p>
          </div>
          <div>
            <h3>{lang === 'en' ? 'Verified Output' : '验证产出'}</h3>
            <p>{t(card.impact, lang)}</p>
          </div>
        </div>

        <div className="rp-modal-foot">
          {card.links.map((l) => (
            <a key={l.url} href={l.url} target={l.url.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
              {t(l.label, lang)} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Reporting() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState<SmallerCardId | null>(null);

  const activeCard = openId ? SMALLER_CARDS.find((c) => c.id === openId) ?? null : null;

  return (
    <section className="rp" aria-label="Reporting, Editorial & Cultural Analytics">
      <div className="rp-head">
        <span className="rp-dot" />
        <h2 className="rp-title">
          {lang === 'en'
            ? 'EDITORIAL REPORTING & CULTURAL ANALYTICS'
            : '数据新闻专栏、驻站报道与文化空间计算'}
        </h2>
        <span className="rp-note">
          {lang === 'en'
            ? 'Click any card to inspect interactive breakdown'
            : '点击任意卡片展开交互图表与详情'}
        </span>
      </div>

      <div className="rp-grid">
        {SMALLER_CARDS.map((card) => (
          <article
            key={card.id}
            className="rp-card"
            onClick={() => setOpenId(card.id)}
          >
            <div className="rp-top">
              <span className="rp-tag">{t(card.tag, lang)}</span>
              <span className="rp-badge">{t(card.status, lang)}</span>
            </div>
            <h3>{t(card.title, lang)}</h3>
            <p>{t(card.summary, lang)}</p>
            <div className="rp-card-foot">
              <div className="rp-mini-metrics">
                {card.metrics.slice(0, 2).map((m) => (
                  <span key={m.value}>
                    <strong>{m.value}</strong> {t(m.label, lang)}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="rp-inspect"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenId(card.id);
                }}
              >
                {lang === 'en' ? 'Inspect →' : '查看详情 →'}
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeCard && <SmallerCardModal card={activeCard} onClose={() => setOpenId(null)} />}
    </section>
  );
}
