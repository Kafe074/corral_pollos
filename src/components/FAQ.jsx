import { useReveal } from '../hooks/useReveal.js';

const QUESTIONS = [
  {
    q: '¿Cómo hago un pedido?',
    a: 'Escríbenos por WhatsApp con lo que necesitas y coordinamos cantidad, precio y forma de pago.',
  },
  {
    q: '¿Hasta dónde hacen entregas?',
    a: 'Nosotros mismos llevamos tu pedido. Cuéntanos tu ubicación por WhatsApp y te confirmamos el tiempo de entrega.',
  },
  {
    q: '¿Los pollos están disponibles todo el año?',
    a: 'Depende de cuándo alcanzan su tamaño ideal en el corral. Escríbenos y te confirmamos la disponibilidad del momento.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Coordinamos la forma de pago al confirmar tu pedido por WhatsApp.',
  },
  {
    q: '¿Puedo pedir solo huevos, o también solo pollo?',
    a: 'Sí, puedes pedir huevos, pollo, o ambos, según lo que necesites.',
  },
];

export default function FAQ() {
  const headingRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="preguntas">
      <div className="wrap">
        <div className="reveal" ref={headingRef}>
          <p className="eyebrow">Antes de escribirnos</p>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq-list stagger" ref={listRef}>
          {QUESTIONS.map(({ q, a }) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
