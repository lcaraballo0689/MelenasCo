// Controla el efecto de aparición del navbar al hacer scroll
let lastScrollTop = 0;  // Variable para almacenar la última posición del scroll
const navbar = document.getElementById("navbar");

// Ajusta el umbral de aparición del navbar (por ejemplo, después de 100px de scroll)
const threshold = 340; // El navbar aparecerá después de 100 píxeles de scroll hacia abajo

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > threshold && currentScroll > lastScrollTop) {
        // Si el usuario está desplazándose hacia abajo y ha superado el umbral, mostramos el navbar
        navbar.style.opacity = "1";  // Hacer visible el navbar
        navbar.style.top = "0";      // Mover el navbar a la parte superior
    } else if (currentScroll < threshold || currentScroll < lastScrollTop) {
        // Si el usuario está desplazándose hacia arriba o no ha superado el umbral, ocultamos el navbar
        navbar.style.opacity = "0";  // Hacer invisible el navbar
        navbar.style.top = "-80px";  // Establecer el navbar fuera de la vista
    }

    // Actualizar la última posición de scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
}, false);