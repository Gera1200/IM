const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const toggleButtons = document.querySelectorAll('.toggle-button');

// Mostrar/ocultar menú en pantallas pequeñas
menuToggle.addEventListener('click', () => {
    navbar.querySelector('ul').classList.toggle('show');
});

// Navegación entre secciones
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');

        sections.forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(sectionId).classList.add('active');

        if (window.innerWidth <= 768) {
            navbar.querySelector('ul').classList.remove('show');
        }
    });
});

// Botones desplegables
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
