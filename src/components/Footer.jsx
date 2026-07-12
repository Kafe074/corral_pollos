export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div>
          <div className="foot-brand">Corral Don Pedrito</div>
          <div className="foot-tag">Huevos y pollos de corral, entregados por nosotros mismos.</div>
        </div>
        <div className="foot-year mono">&copy; {new Date().getFullYear()} Corral Don Pedrito</div>
      </div>
    </footer>
  );
}
