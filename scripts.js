const btnInicio = document.getElementById('btn-inicio');
const btnServicios = document.getElementById('btn-servicios');
const btnImagenes = document.getElementById('btn-imagenes');
const btnContacto = document.getElementById('btn-contacto');

const seccionInicio = document.getElementById('inicio');
const seccionServicios = document.getElementById('servicios');
const seccionImagenes = document.getElementById('imagenes');
const seccionContacto = document.getElementById('contacto');

document.addEventListener("DOMContentLoaded", function() {
    var sliderNavLinks = document.querySelectorAll(".slider-nav a");

    sliderNavLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            
            // Obtener el id del slider al que se hizo clic
            var sliderId = this.getAttribute("href").substring(1);
            
            // Ocultar todas las imágenes del carrusel
            var sliderImages = document.querySelectorAll(".sliderimg");
            sliderImages.forEach(function(image) {
                image.style.display = "none";
            });
            
            
            // Mostrar la imagen correspondiente al id del slider
            var targetImage = document.getElementById(sliderId);
            if (targetImage) {
                targetImage.style.display = "block";
            }
        });
    });
});


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