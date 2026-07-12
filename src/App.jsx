import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Nosotros from './components/Nosotros.jsx';
import Productos from './components/Productos.jsx';
import Galeria from './components/Galeria.jsx';
import Entrega from './components/Entrega.jsx';
import FAQ from './components/FAQ.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Productos />
        <Galeria />
        <Entrega />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
