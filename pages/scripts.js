document.addEventListener("DOMContentLoaded", function() {
    const platos = document.querySelectorAll(".plato");
    let index = 0; // Índice del plato actual

    // Mostrar el primer plato al cargar la página
    platos[index].style.display = "block";

    // Función para mostrar el plato siguiente
    function mostrarSiguientePlato() {
        platos[index].style.display = "none"; // Ocultar el plato actual
        index = (index + 1) % platos.length; // Obtener el índice del siguiente plato
        platos[index].style.display = "block"; // Mostrar el siguiente plato
    }

    // Función para mostrar el plato anterior
    function mostrarPlatoAnterior() {
        platos[index].style.display = "none"; // Ocultar el plato actual
        index = (index - 1 + platos.length) % platos.length; // Obtener el índice del plato anterior
        platos[index].style.display = "block"; // Mostrar el plato anterior
    }

    // Manejadores de eventos para los botones "Anterior" y "Siguiente"
    document.querySelector(".boton_anterior").addEventListener("click", mostrarPlatoAnterior);
    document.querySelector(".boton_siguiente").addEventListener("click", mostrarSiguientePlato);
});

