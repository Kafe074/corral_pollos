import { waHref } from '../config/contact.js';
import { useReveal } from '../hooks/useReveal.js';

const PRODUCTS = [
  {
    tag: 'Frescos del día',
    title: 'Huevos frescos',
    body: 'Recolectados a diario directo del corral. Tamaño y color natural, sin procesos industriales.',
  },
  {
    tag: 'Según disponibilidad',
    title: 'Pollos de corral',
    body: 'Criados en el corral, con espacio y tiempo. Disponibles para la venta cuando alcanzan su tamaño ideal.',
  },
];

export default function Productos() {
  const headingRef = useReveal();
  const gridRef = useReveal();
  const noteRef = useReveal();

  return (
    <section id="productos" style={{ background: 'var(--bg-panel)' }}>
      <div className="wrap">
        <div className="reveal" ref={headingRef}>
          <p className="eyebrow">Lo que ofrecemos</p>
          <h2>Dos productos, un mismo cuidado</h2>
        </div>
        <div className="prod-grid stagger" ref={gridRef}>
          {PRODUCTS.map(({ tag, title, body }) => (
            <article className="crate" key={title}>
              <span className="tag">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="price-note reveal" ref={noteRef}>
          <p>
            Precios y presentaciones (docena, media docena, cubeta) los confirmamos según tu
            pedido.
          </p>
          <a className="link" href={waHref} target="_blank" rel="noopener noreferrer">
            Consultar precio ↗
          </a>
        </div>
      </div>
    </section>
  );
}
