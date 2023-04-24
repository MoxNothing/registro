const formulario = document.querySelector('form');
formulario.addEventListener('submit', datos);

const contactos = [];

const datos = (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellidoPaterno = document.getElementById('apellidoPaterno').value;
  const apellidoMaterno = document.getElementById('apellidoMaterno').value;
  const email = document.getElementById('email').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;
  const genero = document.getElementById('genero').value;

  const contacto = {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    email,
    direccion,
    telefono,
    genero
  };

  contacto.push(contacto);
  console.log(contactos);

};



