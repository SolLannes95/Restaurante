document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const platos = document.querySelectorAll('.plato_fav');
    const totalPlatos = platos.length;

    function updateVisibility() {
        platos.forEach((plato, index) => {
            if (index === currentIndex) {
                plato.classList.add('active');
            } else {
                plato.classList.remove('active');
            }
        });
    }

    document.querySelector('.boton_siguiente').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalPlatos;
        updateVisibility();
    });

    document.querySelector('.boton_anterior').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalPlatos) % totalPlatos;
        updateVisibility();
    });

    updateVisibility(); 
});
