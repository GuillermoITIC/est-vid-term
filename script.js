// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    const sections = document.querySelectorAll('.carousel-container');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Mostrar la sección de inicio por defecto
document.getElementById('inicio').style.display = 'block';

// Añadir funcionalidad de carrusel a cada sección
document.querySelectorAll('.carousel-container').forEach((container) => {
    const items = container.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    function showItem(i) {
        items.forEach((item, ind) => {
            item.style.transform = `translateX(-${i * 100}%)`;
        });
    }

    // Botones de navegación
    const nextBtn = container.querySelector('.next');
    const prevBtn = container.querySelector('.prev');
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % totalItems;
            showItem(index);
        });
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + totalItems) % totalItems;
            showItem(index);
        });
    }

    // Cambio automático de videos cada 15 segundos
    setInterval(() => {
        index = (index + 1) % totalItems;
        showItem(index);
    }, 15000);
});
