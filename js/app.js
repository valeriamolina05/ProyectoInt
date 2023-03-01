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
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar)
    cerrarMenu(btnCerrar,overlay);
}
const cerrarMenu= (boton,overlay)=>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();

    });

}



