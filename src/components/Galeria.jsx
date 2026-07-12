import { useReveal } from '../hooks/useReveal.js';

const TILES = [
  { key: 'corral', label: 'El corral', note: 'Espacio abierto, cuidado todos los días' },
  { key: 'huevos', label: 'Huevos frescos', note: 'Recolectados cada mañana' },
  { key: 'pollos', label: 'Pollos de corral', note: 'Criados con tiempo y espacio' },
  { key: 'entrega', label: 'Entrega propia', note: 'Empacado y listo para tu pedido' },
];

function Illustration({ tileKey }) {
  if (tileKey === 'huevos') {
    return <div className="egg-mini" />;
  }
  if (tileKey === 'pollos') {
    return (
      <div className="chicken-mark">
        <div className="c-body" />
        <div className="c-head">
          <div className="c-comb" />
          <div className="c-beak" />
        </div>
      </div>
    );
  }
  if (tileKey === 'entrega') {
    return (
      <div className="basket-mark">
        <div className="b-handle" />
        <div className="b-body" />
        <div className="b-weave" />
      </div>
    );
  }
  return <div className="corral-mark" />;
}

export default function Galeria() {
  const headingRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="galeria" style={{ background: 'var(--bg-panel)' }}>
      <div className="wrap">
        <div className="reveal" ref={headingRef}>
          <p className="eyebrow">Galería</p>
          <h2>Así es un día en el corral</h2>
          <p className="prose" style={{ marginTop: '1.1rem' }}>
            Del corral a la cesta: así cuidamos a los animales, recolectamos los huevos y
            preparamos cada pedido antes de llevarlo a tu puerta.
          </p>
        </div>
        <div className="gallery-grid stagger" ref={gridRef}>
          {TILES.map(({ key, label, note }) => (
            <figure className="mark-tile" key={key}>
              <div className={`mark mark-${key}`}>
                <Illustration tileKey={key} />
              </div>
              <figcaption>
                <span className="mark-label">{label}</span>
                <span className="mark-note">{note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
