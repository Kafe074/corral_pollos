export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="foot-brand-row">
          <img className="foot-seal" src="/image.png" alt="Corral Don Pedrito" width={40} height={40} />
          <div>
            <div className="foot-brand">Corral Don Pedrito</div>
            <div className="foot-tag">Huevos y pollos de corral, entregados por nosotros mismos.</div>
          </div>
        </div>
        <div className="foot-year mono">&copy; {new Date().getFullYear()} Corral Don Pedrito</div>
      </div>
    </footer>
  );
}
