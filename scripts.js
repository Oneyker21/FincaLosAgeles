const btnInicio = document.getElementById('btn-inicio');
const btnServicios = document.getElementById('btn-servicios');
const btnImagenes = document.getElementById('btn-imagenes');
const btnContacto = document.getElementById('btn-contacto');

const seccionInicio = document.getElementById('inicio');
const seccionServicios = document.getElementById('servicios');
const seccionImagenes = document.getElementById('imagenes');
const seccionContacto = document.getElementById('contacto');

btnInicio.addEventListener('click', () => {
    seccionInicio.style.display = 'block';
    seccionServicios.style.display = 'none';
    seccionImagenes.style.display = 'none';
    seccionContacto.style.display = 'none';
});

btnServicios.addEventListener('click', () => {
    seccionInicio.style.display = 'none';
    seccionServicios.style.display = 'block';
    seccionImagenes.style.display = 'none';
    seccionContacto.style.display = 'none';
});

btnImagenes.addEventListener('click', () => {
    seccionInicio.style.display = 'none';
    seccionServicios.style.display = 'none';
    seccionImagenes.style.display = 'block';
    seccionContacto.style.display = 'none';
});

btnContacto.addEventListener('click', () => {
    seccionInicio.style.display = 'none';
    seccionServicios.style.display = 'none';
    seccionImagenes.style.display = 'none';
    seccionContacto.style.display = 'block';
});