import { useEffect, useState } from 'react';
import { waHref } from '../config/contact.js';

const LINKS = [
  ['#inicio', 'Inicio'],
  ['#nosotros', 'Nosotros'],
  ['#productos', 'Productos'],
  ['#galeria', 'Galería'],
  ['#entrega', 'Entrega'],
  ['#contacto', 'Contacto'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="nav wrap">
        <a className="brand" href="#inicio">
          {/* LOGO: cuando tengan el logo definitivo, reemplacen este <div className="seal">
              por un <img src="/logo.png" alt="Corral Don Pedrito" width={46} height={46} /> */}
          <div className="seal">
            <span>CDP</span>
          </div>
          <div className="brand-name">
            <strong>Corral Don Pedrito</strong>
            <small>Huevos &amp; Pollos de corral</small>
          </div>
        </a>
        <ul className="nav-links">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
          Escríbenos
        </a>
      </nav>
    </header>
  );
}
