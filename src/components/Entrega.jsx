import { waHref } from '../config/contact.js';
import { useReveal } from '../hooks/useReveal.js';

export default function Entrega() {
  const textRef = useReveal();
  const svgRef = useReveal();

  return (
    <section id="entrega" className="entrega">
      <div className="wrap entrega-grid">
        <div className="reveal" ref={textRef}>
          <p className="eyebrow">Cómo te lo hacemos llegar</p>
          <h2>Te lo llevamos nosotros mismos</h2>
          <p className="prose" style={{ marginTop: '1.1rem' }}>
            No usamos servicios externos de reparto. Coordinamos contigo por WhatsApp y
            llevamos tu pedido hasta donde te encuentres.
          </p>
          <div className="cta-row" style={{ marginTop: '1.6rem' }}>
            <a className="btn btn-yolk" href={waHref} target="_blank" rel="noopener noreferrer">
              Coordinar entrega
            </a>
          </div>
        </div>
        <svg className="route-svg reveal" ref={svgRef} viewBox="0 0 400 220" aria-hidden="true">
          <path className="route-path" d="M14,150 C110,20 300,220 388,50" />
          <text className="route-label" x="10" y="180">
            Corral
          </text>
          <text className="route-label" x="340" y="40">
            Tu casa
          </text>
          <circle className="route-dot" r="6" />
        </svg>
      </div>
    </section>
  );
}
