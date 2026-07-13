import { useReveal } from '../hooks/useReveal.js';

const LEDGER = [
  ['Origen', 'Corral familiar'],
  ['Cuidado', 'Diario, a mano'],
  ['Entrega', 'Nosotros mismos'],
];

export default function Nosotros() {
  const textRef = useReveal();
  const ledgerRef = useReveal();

  return (
    <section id="nosotros">
      <div className="wrap nosotros-grid">
        <div className="reveal" ref={textRef}>
          <p className="eyebrow">Nuestra historia</p>
          <h2>Una granja familiar, sin intermediarios</h2>
          <p className="prose" style={{ marginTop: '1.1rem' }}>
            Corral Don Pedrito es un negocio familiar dedicado a la crianza de gallinas y
            pollos. Cuidamos el corral todos los días, recolectamos los huevos frescos y,
            cuando los pollos alcanzan su tamaño, también los ofrecemos para la venta. Todo lo
            que sale de nuestro corral lo entregamos nosotros mismos, sin intermediarios.
          </p>
        </div>
        <div className="ledger-col reveal" ref={ledgerRef}>
          <img className="brand-stamp" src="/image.png" alt="Sello Corral Don Pedrito" width={200} height={200} />
          <div className="ledger">
            {LEDGER.map(([label, value]) => (
              <div className="ledger-row" key={label}>
                <span className="label">{label}</span>
                <span className="value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
