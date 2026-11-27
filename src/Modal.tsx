import { ReactNode, useEffect } from 'react';
import './Modal.css';

export default function Modal({
  onClose,
  label,
  wide,
  topBar,
  children,
}: {
  onClose: () => void;
  label: string;
  wide?: boolean;
  topBar?: ReactNode;
  children: ReactNode;
}) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', h);
    };
  }, [onClose]);

  return (
    <div className="md-back" onClick={onClose}>
      <div
        className={`md ${wide ? 'md-wide' : ''} ${topBar ? 'md-has-bar' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
      >
        {topBar ? (
          <div className="md-bar">{topBar}</div>
        ) : (
          <button type="button" className="md-x" onClick={onClose}>
            Close [esc]
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
