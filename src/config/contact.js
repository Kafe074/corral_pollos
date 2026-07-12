// EDITAR AQUI cuando tengan los datos reales del negocio.
// Este es el unico lugar que hay que tocar: todos los botones y textos
// de contacto de la pagina se generan a partir de estos valores.
export const CONTACT = {
  phoneIntl: '51981673702', // sin '+', sin espacios (formato wa.me)
  phoneDisplay: '+51 981 673 702', // como se muestra en pantalla
  message: 'Hola, quiero hacer un pedido en Corral Don Pedrito.',
  zone: 'Catalina Huanca, San Jeronimo de Tunan',
};

export const waHref = `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(CONTACT.message)}`;
