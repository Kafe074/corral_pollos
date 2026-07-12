import { waHref } from '../config/contact.js';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">Granja familiar · huevos y pollos de corral</p>
          <h1>
            Del corral
            <br />a tu puerta.
          </h1>
          <p className="prose">
            En Corral Don Pedrito recolectamos huevos frescos cada día y criamos pollos con
            cuidado, listos para la venta cuando alcanzan su tamaño ideal. Nosotros mismos
            llevamos tu pedido hasta donde te encuentres.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={waHref} target="_blank" rel="noopener noreferrer">
              Pedir por WhatsApp
            </a>
            <a className="link" href="#productos">
              Ver productos ↓
            </a>
          </div>
        </div>
        <div className="egg-wrap">
          <div className="egg" role="img" aria-label="Huevo de corral" />
        </div>
      </div>
    </section>
  );
}
