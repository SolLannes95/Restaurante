document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.buscador_comidas');
    const input = document.getElementById('buscar');
    const platos = document.querySelectorAll('.plato');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const term = input.value.toLowerCase(); 

        platos.forEach(function (plato) {
            const nombrePlato = plato.querySelector('.nombre_plato').textContent.toLowerCase(); 
            const descripcionPlato = plato.querySelector('.descripcion_plato').textContent.toLowerCase(); 
            if (nombrePlato.includes(term) || descripcionPlato.includes(term)) {
                plato.style.display = 'block'; 
            } else {
                plato.style.display = 'none'; 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const platos = [
        {
            nombre: "Pastas con langostinos",
            precio: "$9000.00",
            descripcion: "Descripción del platillo: Pastas con langostinos con salsa de frutos del mar",
            imagen: "/img/imagen14.jpg"
        },
        {
            nombre: "Flan con caramelo",
            precio: "$2000.00",
            descripcion: "Descripción del platillo: Flan casero con caramelo",
            imagen: "/img/imagen17.jpg"
        }
        // Puedes agregar más objetos de platos aquí
    ];

    const favoritosContainer = document.getElementById('favoritos_container');
    const botonAnterior = document.querySelector('.boton_anterior');
    const botonSiguiente = document.querySelector('.boton_siguiente');

    let platoIndex = 0;

    function mostrarPlato(index) {
        const plato = platos[index];
        const platoHTML = `
            <div class="plato">
                <div class="info_plato">
                    <h4 class="nombre_plato">${plato.nombre}</h4>
                    <p class="precio_plato">${plato.precio}</p>
                    <p class="descripcion_plato">${plato.descripcion}</p>
                </div>
                <div class="imagen_plato">
                    <img src="${plato.imagen}" alt="${plato.nombre}" width="180px" height="180px">
                </div>
            </div>
        `;
        favoritosContainer.innerHTML = platoHTML;
    }

    mostrarPlato(platoIndex);

    botonAnterior.addEventListener('click', function () {
        platoIndex = (platoIndex === 0) ? platos.length - 1 : platoIndex - 1;
        mostrarPlato(platoIndex);
    });

    botonSiguiente.addEventListener('click', function () {
        platoIndex = (platoIndex === platos.length - 1) ? 0 : platoIndex + 1;
        mostrarPlato(platoIndex);
    });
});
