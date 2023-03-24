const maquillaje = document.querySelector('.productos');
const navegacion = document.querySelector('.navegacion');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();

});

const eventos = ()=>{
    maquillaje.addEventListener('click', abrirMenu);

}

const abrirMenu= ()=> {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = ()=>{
    const btnCerrar= document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    while(navegacion.children[5]){
        navegacion.removeChild(navegacion.children[5]);
    }
    navegacion.appendChild(btnCerrar)
    cerrarMenu(btnCerrar,overlay);
}


const cerrarMenu= (boton,overlay)=>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();

    });

    overlay.onclick= function(){
        overlay.remove();
        navegacion.classList.add('ocultar')
    }

}
// Validación formulario
const formulario = document.querySelector('.formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const mensaje = document.querySelector('textarea');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (nombre.value === '' || apellido.value === '' || correo.value === '' || telefono.value === '' || mensaje.value === '') {
    alert('Por favor, completa todos los campos.');
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo.value)) {
    alert('Por favor, introduce una dirección de correo válida.');
  } else if (!/^\+?\d{1,3}[- ]?\d{3}[- ]?\d{4}$/.test(telefono.value)) {
    alert('Por favor, introduce un número de teléfono válido.');
  } else {
    alert('Formulario enviado correctamente.');
  }
});


