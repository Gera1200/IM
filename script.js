// script.js
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showSection(id) {
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => section.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inicio').classList.add('activa');
});

function toggleInfo(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}
