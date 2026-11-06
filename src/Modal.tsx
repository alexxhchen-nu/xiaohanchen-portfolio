import { ReactNode, useEffect } from 'react';
import './Modal.css';

export default function Modal({ onClose, label, children }: { onClose: () => void; label: string; children: ReactNode }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div className="md-back" onClick={onClose}>
      <div className="md" role="dialog" aria-modal="true" aria-label={label} onClick={(e) => e.stopPropagation()}>
        <button className="md-x" onClick={onClose}>Close [esc]</button>
        {children}
      </div>
    </div>
  );
}
