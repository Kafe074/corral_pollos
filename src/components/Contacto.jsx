import { CONTACT, waHref } from '../config/contact.js';
import { useReveal } from '../hooks/useReveal.js';

const LEDGER = [
  ['Zona', CONTACT.zone],
  ['Horario', 'Coordinado por WhatsApp'],
  ['Pago', 'Se coordina al pedir'],
];

export default function Contacto() {
  const headingRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="contacto" className="contacto">
      <div className="wrap">
        <div className="reveal" ref={headingRef}>
          <p className="eyebrow">Hablemos</p>
          <h2>Escríbenos y coordinamos tu pedido</h2>
        </div>
        <div className="contact-card reveal" ref={cardRef}>
          <div className="whatsapp-block">
            <span className="eyebrow" style={{ marginBottom: '.2rem' }}>
              WhatsApp
            </span>
            <a className="whatsapp-number tabular" href={waHref} target="_blank" rel="noopener noreferrer">
              {CONTACT.phoneDisplay}
            </a>
            <p className="whatsapp-note">
              Escríbenos con tu pedido y la zona donde te encuentres. Coordinamos el horario de
              entrega contigo.
            </p>
            <a
              className="btn btn-primary"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ alignSelf: 'flex-start' }}
            >
              Escribir ahora
            </a>
          </div>
          {/* REDES SOCIALES: cuando tengan Instagram/Facebook, agreguen aqui una fila de
              enlaces (mismo estilo que .cta-row .link) dentro de .whatsapp-block. Por ahora
              se omite para no mostrar una seccion vacia. */}
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
