import './Rows.css';

export type Row = { id: number; title: string; meta: string; badge?: string };

export default function Rows({ rows, empty }: { rows: Row[]; empty?: string }) {
  if (!rows.length) return <p className="rw-empty">{empty || 'Nothing here yet.'}</p>;
  return (
    <ul className="rw">
      {rows.map((r) => (
        <li key={r.id}>
          <div className="rw-i">
            <h3>{r.title}</h3>
            <p>{r.meta}</p>
            {r.badge && <span className="rw-badge">{r.badge}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}
