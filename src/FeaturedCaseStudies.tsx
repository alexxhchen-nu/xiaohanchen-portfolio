import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import './FeaturedCaseStudies.css';
import {
  CASE_STUDIES,
  CaseDomain,
  CaseStudy,
  CaseStudyId,
  DOMAIN_FILTERS,
  ROLE_LENSES,
  formatCaseStudyMarkdown,
  t,
  useLang,
} from './i18n';

function SpeakEasyMiniDemo() {
  const { lang } = useLang();
  const [turn, setTurn] = useState<'listening' | 'thinking' | 'speaking'>('listening');

  const states: Record<
    'listening' | 'thinking' | 'speaking',
    { speaker: string; transcript: string; field: string }
  > = {
    listening: {
      speaker: lang === 'en' ? 'You (Participant)' : '受访者（实时语音）',
      transcript:
        lang === 'en'
          ? '“We switched workflows twice because weekly team notes kept losing original interview quotes.”'
          : '“我们换过两次工具，因为每周例会纪要老是把受访者原话弄丢。”',
      field: 'pain_point: "quote_loss_in_synthesis" (pending)',
    },
    thinking: {
      speaker: lang === 'en' ? 'Worker (Isolated Secret)' : '后端 Worker（隔离密钥）',
      transcript:
        lang === 'en'
          ? 'Extracting confirmed field → SQLite research.db · Raw audio recording: DISABLED'
          : '正在提取确认字段写入本地 SQLite · 原始音频录制：已禁用',
      field: 'POST /api/answers [200 OK · 0B audio]',
    },
    speaking: {
      speaker: lang === 'en' ? 'Interviewer Agent' : 'AI 访谈主持',
      transcript:
        lang === 'en'
          ? '“Got it — when quotes went missing, how did your team verify claims before publishing?”'
          : '“明白了——当原话丢失时，你们团队发稿前如何核对事实出处？”',
      field: 'follow_up_probe #02 · resumable_token=active',
    },
  };

  const cur = states[turn];

  return (
    <div className="fcs-demo" onClick={(e) => e.stopPropagation()}>
      <div className="fcs-demo-bar">
        <span className="fcs-demo-label">
          {lang === 'en' ? 'LIVEKIT TURN STATE' : 'LIVEKIT 轮次状态机'}
        </span>
        <div className="fcs-seg" role="group" aria-label="Turn state">
          {(['listening', 'thinking', 'speaking'] as const).map((s) => (
            <button
              key={s}
              type="button"
              className={turn === s ? 'on' : ''}
              onClick={() => setTurn(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="fcs-demo-body">
        <div className="fcs-kv">
          <span className="fcs-k">{cur.speaker}</span>
          <span className="fcs-pill">{lang === 'en' ? 'REC OFF' : '零录音'}</span>
        </div>
        <p className="fcs-demo-quote">{cur.transcript}</p>
        <div className="fcs-code">{cur.field}</div>
      </div>
    </div>
  );
}

function LegalArchiveMiniDemo() {
  const { lang } = useLang();
  const [mode, setMode] = useState<'raw' | 'audited'>('raw');

  return (
    <div className="fcs-demo" onClick={(e) => e.stopPropagation()}>
      <div className="fcs-demo-bar">
        <span className="fcs-demo-label">
          {lang === 'en' ? 'DOJ GRAPH TOPOLOGY' : '司法档案图谱消歧对比'}
        </span>
        <div className="fcs-seg" role="group" aria-label="Graph audit mode">
          <button type="button" className={mode === 'raw' ? 'on' : ''} onClick={() => setMode('raw')}>
            {lang === 'en' ? 'Raw NER' : '原始抽取'}
          </button>
          <button
            type="button"
            className={mode === 'audited' ? 'on' : ''}
            onClick={() => setMode('audited')}
          >
            {lang === 'en' ? 'Alias-Audited' : '实体消歧后'}
          </button>
        </div>
      </div>
      <div className="fcs-demo-body">
        {mode === 'raw' ? (
          <>
            <div className="fcs-stat-row">
              <span>505 nodes · 434 edges</span>
              <span className="fcs-warn">
                {lang === 'en' ? 'Alias Split + Date Nodes' : '含同名分裂与日期伪节点'}
              </span>
            </div>
            <div className="fcs-code">
              ["Ray"] ──?── ["Ray Ormond"] · ["Oct 12, 2005"] → false actor · 65 clusters
            </div>
          </>
        ) : (
          <>
            <div className="fcs-stat-row">
              <span>Reconciled Actor Graph</span>
              <span className="fcs-ok">
                {lang === 'en' ? 'PageRank Stabilized' : 'PageRank 中心性校准'}
              </span>
            </div>
            <div className="fcs-code">
              merge("Ray", "Ray Ormond") · prune(date_tokens) → ΔPageRank & modularity audited
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function UntangleMiniDemo() {
  const { lang } = useLang();
  const [surface, setSurface] = useState<'parser' | 'mcp' | '3d'>('parser');

  return (
    <div className="fcs-demo" onClick={(e) => e.stopPropagation()}>
      <div className="fcs-demo-bar">
        <span className="fcs-demo-label">
          {lang === 'en' ? 'TOMB M1 PIPELINE' : 'M1 墓葬多端管线'}
        </span>
        <div className="fcs-seg" role="group" aria-label="Untangle surface">
          <button
            type="button"
            className={surface === 'parser' ? 'on' : ''}
            onClick={() => setSurface('parser')}
          >
            Parser
          </button>
          <button
            type="button"
            className={surface === 'mcp' ? 'on' : ''}
            onClick={() => setSurface('mcp')}
          >
            CLI / MCP
          </button>
          <button
            type="button"
            className={surface === '3d' ? 'on' : ''}
            onClick={() => setSurface('3d')}
          >
            3D / GIS
          </button>
        </div>
      </div>
      <div className="fcs-demo-body">
        {surface === 'parser' && (
          <>
            <div className="fcs-stat-row">
              <span>M1 · 土坑竖穴墓 (N–S)</span>
              <span className="fcs-ok">{lang === 'en' ? 'Explicit Source' : '原文实测核对'}</span>
            </div>
            <div className="fcs-code">
              L: 2.5m [原文有] · W: 1.2m [原文有] · D: 3.0m [原文有] · 随葬: 陶罐×1, 铜剑×1
            </div>
          </>
        )}
        {surface === 'mcp' && (
          <>
            <div className="fcs-stat-row">
              <span>archaeo-tomb-parser</span>
              <span className="fcs-pill">MCP + Obsidian</span>
            </div>
            <div className="fcs-code">
              POST /dynamic-parser/parse → schema_valid: true · inferred_fields: flagged
            </div>
          </>
        )}
        {surface === '3d' && (
          <>
            <div className="fcs-stat-row">
              <span>Spatial &amp; Morphology</span>
              <span className="fcs-ok">GLB + Multi-Site GIS</span>
            </div>
            <div className="fcs-code">
              shaft_mesh(2.5×1.2×3.0m) → rotatable WebGL chamber + /GIS coordinate layer
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ComapMiniDemo() {
  const { lang } = useLang();
  const [stage, setStage] = useState<'cron' | 'edge' | 'coded'>('edge');

  return (
    <div className="fcs-demo" onClick={(e) => e.stopPropagation()}>
      <div className="fcs-demo-bar">
        <span className="fcs-demo-label">
          {lang === 'en' ? 'ZERO-DISK STREAM' : '零落盘边缘流管线'}
        </span>
        <div className="fcs-seg" role="group" aria-label="Pipeline stage">
          <button type="button" className={stage === 'cron' ? 'on' : ''} onClick={() => setStage('cron')}>
            Dedup
          </button>
          <button type="button" className={stage === 'edge' ? 'on' : ''} onClick={() => setStage('edge')}>
            20× Edge
          </button>
          <button
            type="button"
            className={stage === 'coded' ? 'on' : ''}
            onClick={() => setStage('coded')}
          >
            3K Study
          </button>
        </div>
      </div>
      <div className="fcs-demo-body">
        {stage === 'cron' && (
          <>
            <div className="fcs-stat-row">
              <span>50 keywords × 200 videos</span>
              <span className="fcs-pill">O(1) R2 Lookup</span>
            </div>
            <div className="fcs-code">
              r2.list_keys() → skip_archived=true · local_disk_used: 0.0 MB
            </div>
          </>
        )}
        {stage === 'edge' && (
          <>
            <div className="fcs-stat-row">
              <span>CDN → CF Worker → R2</span>
              <span className="fcs-ok">~100 GB/day cap</span>
            </div>
            <div className="fcs-code">
              workers=20 concurrent · stream_pipe(douyin_cdn, r2_bucket) → manifest.csv
            </div>
          </>
        )}
        {stage === 'coded' && (
          <>
            <div className="fcs-stat-row">
              <span>Douyin vs. WeChat Channels</span>
              <span className="fcs-pill">n = 3,000 videos</span>
            </div>
            <div className="fcs-code">
              features: [cut_pace_sec, transcript_topics, visual_tone] → engagement_model
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PsychtoolMiniDemo() {
  const { lang } = useLang();
  const [edited, setEdited] = useState(false);

  return (
    <div className="fcs-demo" onClick={(e) => e.stopPropagation()}>
      <div className="fcs-demo-bar">
        <span className="fcs-demo-label">
          {lang === 'en' ? 'ADR 0018 CASCADE GATE' : 'ADR 0018 事务级失效护栏'}
        </span>
        <div className="fcs-seg" role="group" aria-label="Source state">
          <button type="button" className={!edited ? 'on' : ''} onClick={() => setEdited(false)}>
            {lang === 'en' ? 'v1 Verified' : 'v1 已核验'}
          </button>
          <button type="button" className={edited ? 'on' : ''} onClick={() => setEdited(true)}>
            {lang === 'en' ? 'Mutate Source' : '修改上游证据'}
          </button>
        </div>
      </div>
      <div className="fcs-demo-body">
        {!edited ? (
          <>
            <div className="fcs-stat-row">
              <span>case_a001 · Loopback Only</span>
              <span className="fcs-ok">FK Isolated · Verified</span>
            </div>
            <div className="fcs-code">
              Youth [Sep onset] ≠ Caregiver [Jul onset] → both preserved · 0 diagnosis generated
            </div>
          </>
        ) : (
          <>
            <div className="fcs-stat-row">
              <span>Caregiver v1 → v2 (Mid-Aug)</span>
              <span className="fcs-warn">1 Paragraph → Needs review</span>
            </div>
            <div className="fcs-code">
              BEGIN TX: claim→pending · draft→Needs review · unsent_egress→void · audit_log++
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function TraumaAuditMiniDemo() {
  const { lang } = useLang();
  const [split, setSplit] = useState<'meta' | 'random' | 'grouped'>('grouped');

  const bars: Record<'meta' | 'random' | 'grouped', { acc: string; pct: number; note: string; warn?: boolean }> = {
    meta: {
      acc: '0.795',
      pct: 80,
      warn: true,
      note:
        lang === 'en'
          ? 'Metadata-only LogReg beats text model via circular source shortcuts!'
          : '仅靠元数据逻辑回归反超文本大模型——暴露循环来源捷径！',
    },
    random: {
      acc: '0.704',
      pct: 70,
      warn: true,
      note:
        lang === 'en'
          ? 'Naive 5-fold RoBERTa-large: memorizes corpus provenance + silver keywords.'
          : '常规随机 5 折 RoBERTa-large：混入同源语料记忆与启发式关键词泄漏。',
    },
    grouped: {
      acc: '0.321',
      pct: 32,
      warn: false,
      note:
        lang === 'en'
          ? 'Honest source-grouped split across 8 corpora (n = 4,094) · Live on Modal.'
          : '跨 8 语料库严格按源分组评测（n = 4,094）真实泛化基线 · 已部署 Modal。',
    },
  };

  const cur = bars[split];

  return (
    <div className="fcs-demo" onClick={(e) => e.stopPropagation()}>
      <div className="fcs-demo-bar">
        <span className="fcs-demo-label">
          {lang === 'en' ? 'SPLIT LEAKAGE AUDIT' : '切分协议泄漏审计'}
        </span>
        <div className="fcs-seg" role="group" aria-label="Evaluation split">
          <button type="button" className={split === 'meta' ? 'on' : ''} onClick={() => setSplit('meta')}>
            Meta-Only
          </button>
          <button
            type="button"
            className={split === 'random' ? 'on' : ''}
            onClick={() => setSplit('random')}
          >
            5-Fold Naive
          </button>
          <button
            type="button"
            className={split === 'grouped' ? 'on' : ''}
            onClick={() => setSplit('grouped')}
          >
            Source-Grouped
          </button>
        </div>
      </div>
      <div className="fcs-demo-body">
        <div className="fcs-meter-row">
          <span className="fcs-meter-val">{cur.acc}</span>
          <div className="fcs-meter-track">
            <div
              className={`fcs-meter-fill ${cur.warn ? 'is-warn' : 'is-honest'}`}
              style={{ width: `${cur.pct}%` }}
            />
          </div>
        </div>
        <div className="fcs-code">{cur.note}</div>
      </div>
    </div>
  );
}

function renderMiniDemo(id: CaseStudyId) {
  switch (id) {
    case 'speakeasy':
      return <SpeakEasyMiniDemo />;
    case 'legal-archive':
      return <LegalArchiveMiniDemo />;
    case 'untangle':
      return <UntangleMiniDemo />;
    case 'comap-pipeline':
      return <ComapMiniDemo />;
    case 'psychtool':
      return <PsychtoolMiniDemo />;
    case 'trauma-audit':
      return <TraumaAuditMiniDemo />;
  }
}

function CaseStudyReaderModal({
  cs,
  list,
  onSelect,
  onClose,
}: {
  cs: CaseStudy;
  list: CaseStudy[];
  onSelect: (id: CaseStudyId) => void;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  const idx = list.findIndex((x) => x.id === cs.id);
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelect(prev.id);
      if (e.key === 'ArrowRight') onSelect(next.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onSelect, prev.id, next.id]);

  const handleCopy = async () => {
    const md = formatCaseStudyMarkdown(cs, lang);
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fcs-modal-back" onClick={onClose}>
      <div
        className="fcs-modal"
        role="dialog"
        aria-modal="true"
        aria-label={t(cs.title, lang)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fcs-modal-top">
          <div className="fcs-modal-nav">
            <button type="button" onClick={() => onSelect(prev.id)}>
              ← {lang === 'en' ? 'Prev' : '上一篇'} ({prev.no})
            </button>
            <span className="fcs-modal-pos">
              {idx + 1} / {list.length}
            </span>
            <button type="button" onClick={() => onSelect(next.id)}>
              {lang === 'en' ? 'Next' : '下一篇'} ({next.no}) →
            </button>
          </div>
          <div className="fcs-modal-actions">
            <button type="button" className="fcs-copy-btn" onClick={handleCopy}>
              {copied
                ? lang === 'en'
                  ? '✓ Copied Markdown'
                  : '✓ 已复制 Markdown'
                : lang === 'en'
                  ? 'Copy Markdown'
                  : '复制 Markdown'}
            </button>
            <button type="button" className="fcs-close-btn" onClick={onClose}>
              {lang === 'en' ? 'Close [ESC]' : '关闭 [ESC]'}
            </button>
          </div>
        </div>

        <div className="fcs-modal-head">
          <div className="fcs-modal-kicker">
            <span>{cs.no}</span>
            <span>·</span>
            <span>{t(cs.tag, lang)}</span>
            <span className="fcs-modal-status">{t(cs.status, lang)}</span>
          </div>
          <h2>{t(cs.title, lang)}</h2>
          <p className="fcs-modal-sub">{t(cs.subtitle, lang)}</p>
        </div>

        <div className="fcs-modal-metrics">
          {cs.metrics.map((m) => (
            <div key={m.value} className="fcs-metric-box">
              <strong>{m.value}</strong>
              <span>{t(m.label, lang)}</span>
            </div>
          ))}
        </div>

        <div className="fcs-modal-demo">{renderMiniDemo(cs.id)}</div>

        <div className="fcs-modal-grid">
          <div className="fcs-modal-block">
            <h3>{lang === 'en' ? '01 / Problem & Failure Mode' : '01 / 核心痛点与失效模式'}</h3>
            <p>{t(cs.problem, lang)}</p>
          </div>
          <div className="fcs-modal-block">
            <h3>{lang === 'en' ? '02 / System Architecture' : '02 / 系统架构与实现'}</h3>
            <p>{t(cs.architecture, lang)}</p>
          </div>
          <div className="fcs-modal-block">
            <h3>{lang === 'en' ? '03 / Verified Outcome' : '03 / 实证产出与验证'}</h3>
            <p>{t(cs.outcome, lang)}</p>
          </div>
        </div>

        <div className="fcs-modal-bullets">
          <h3>{lang === 'en' ? 'Technical & Methodological Highlights' : '关键工程与方法论细节'}</h3>
          <ul>
            {cs.bullets.map((b, i) => (
              <li key={i}>{t(b, lang)}</li>
            ))}
          </ul>
        </div>

        <div className="fcs-modal-foot">
          <div className="fcs-stack-list">
            {cs.stack.map((s) => (
              <span key={s} className="fcs-stack-chip">
                {s}
              </span>
            ))}
          </div>
          <div className="fcs-link-list">
            {cs.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target={l.url.startsWith('#') ? undefined : '_blank'}
                rel={l.url.startsWith('#') ? undefined : 'noreferrer'}
                onClick={() => {
                  if (l.url.startsWith('#')) onClose();
                }}
              >
                {t(l.label, lang)} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCaseStudies() {
  const { lang, lens } = useLang();
  const [domain, setDomain] = useState<'all' | CaseDomain>('all');
  const [activeId, setActiveId] = useState<CaseStudyId | null>(null);

  const activeLens = ROLE_LENSES.find((r) => r.id === lens) ?? ROLE_LENSES[0];

  const ordered = useMemo(() => {
    const rank = new Map(activeLens.order.map((id, idx) => [id, idx]));
    const sorted = [...CASE_STUDIES].sort((a, b) => (rank.get(a.id) ?? 99) - (rank.get(b.id) ?? 99));
    if (domain === 'all') return sorted;
    return sorted.filter((c) => c.domain === domain);
  }, [activeLens, domain]);

  const activeCase = activeId ? CASE_STUDIES.find((c) => c.id === activeId) ?? null : null;

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="fcs" id="case-studies" aria-label="Featured Case Studies">
      <div className="fcs-head">
        <div className="fcs-head-left">
          <span className="fcs-no">01 / FEATURED PROJECTS</span>
          <h2 className="fcs-title">
            {lang === 'en' ? 'Interactive Case Studies' : '核心交互项目案例'}
          </h2>
        </div>
        <div className="fcs-lens-banner">
          <span className="fcs-lens-dot" />
          <span>
            {lang === 'en' ? 'Lens:' : '当前排序视角：'}{' '}
            <strong>{t(activeLens.label, lang)}</strong> — {t(activeLens.hint, lang)}
          </span>
        </div>
      </div>

      <div className="fcs-filters" role="tablist" aria-label="Filter case studies by domain">
        {DOMAIN_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={domain === f.id}
            className={`fcs-filter-btn ${domain === f.id ? 'on' : ''}`}
            onClick={() => setDomain(f.id)}
          >
            {t(f.label, lang)} <span>({f.count})</span>
          </button>
        ))}
      </div>

      <div className="fcs-grid">
        {ordered.map((cs, index) => (
          <article
            key={cs.id}
            className="fcs-card"
            onMouseMove={handleMouseMove}
            onClick={() => setActiveId(cs.id)}
          >
            <div className="fcs-spotlight" aria-hidden="true" />
            <div className="fcs-card-top">
              <span className="fcs-card-rank">
                #{String(index + 1).padStart(2, '0')} · {cs.no}
              </span>
              <span className="fcs-card-status">{t(cs.status, lang)}</span>
            </div>
            <p className="fcs-card-tag">{t(cs.tag, lang)}</p>
            <h3 className="fcs-card-title">{t(cs.title, lang)}</h3>
            <p className="fcs-card-sub">{t(cs.subtitle, lang)}</p>

            {renderMiniDemo(cs.id)}

            <div className="fcs-card-metrics">
              {cs.metrics.map((m) => (
                <div key={m.value} className="fcs-card-metric">
                  <strong>{m.value}</strong>
                  <span>{t(m.label, lang)}</span>
                </div>
              ))}
            </div>

            <div className="fcs-card-foot">
              <div className="fcs-card-stack">
                {cs.stack.slice(0, 4).map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <button
                type="button"
                className="fcs-open-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveId(cs.id);
                }}
              >
                {lang === 'en' ? 'Open Case Study →' : '展开完整案例 →'}
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeCase && (
        <CaseStudyReaderModal
          cs={activeCase}
          list={ordered}
          onSelect={(id) => setActiveId(id)}
          onClose={() => setActiveId(null)}
        />
      )}
    </section>
  );
}
