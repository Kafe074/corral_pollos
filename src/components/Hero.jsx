import { useState } from 'react';
import { waHref } from '../config/contact.js';

export default function Hero() {
  const [eggPaused, setEggPaused] = useState(false);

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
          <div
            className={`egg${eggPaused ? ' is-paused' : ''}`}
            onPointerEnter={(e) => {
              if (e.pointerType === 'mouse') setEggPaused(true);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === 'mouse') setEggPaused(false);
            }}
            onPointerDown={(e) => {
              if (e.pointerType !== 'mouse') setEggPaused((p) => !p);
            }}
          >
            <img
              src="/01.png"
              alt="Los huevos del Corral Don Pedrito son más saludables: gallinas alimentadas con granos de cebada y verduras frescas"
            />
            <img
              src="/02.png"
              alt="Huevos frescos de gallinas de corral de semi pastoreo — haz tu pedido al 981673702"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
