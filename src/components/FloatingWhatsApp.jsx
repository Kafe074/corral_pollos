import { useEffect, useState } from 'react';
import { waHref } from '../config/contact.js';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`fab-wa${visible ? ' visible' : ''}`}
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <polygon points="7,17 7,21 11.5,17" fill="currentColor" />
        <circle cx="8.5" cy="10.5" r="1.15" fill="currentColor" />
        <circle cx="12" cy="10.5" r="1.15" fill="currentColor" />
        <circle cx="15.5" cy="10.5" r="1.15" fill="currentColor" />
      </svg>
    </a>
  );
}
