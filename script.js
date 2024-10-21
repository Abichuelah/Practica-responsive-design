document.addEventListener('DOMContentLoaded', () => {
    const optionsBtn = document.getElementById('optionsBtn');
    const optionsMenu = document.getElementById('optionsMenu');

    // Muestra u oculta el menú de opciones
    optionsBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        optionsMenu.classList.toggle('d-block'); // Alterna la visibilidad del menú
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!optionsBtn.contains(event.target) && !optionsMenu.contains(event.target)) {
            optionsMenu.classList.remove('d-block');
        }
    });
});


