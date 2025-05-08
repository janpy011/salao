// MENU
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu__toggle');
    const nav = document.querySelector('.menu__nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('open');
    });

    // Fecha ao clicar em links do menu
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('open');
        });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove('active');
            toggle.classList.remove('open');
        }
    });
});

// CARROSSEL SERVIÇOS
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll("img");
        let current = 0;

        if (images.length > 0) {
            images[current].classList.add("active");

            setInterval(() => {
                images[current].classList.remove("active");
                current = (current + 1) % images.length;
                images[current].classList.add("active");
            }, 1500);
        }
    });
});
//ANIMAÇOES
const animarOnScroll = () => {
    const elementos = document.querySelectorAll('[data-animar]');

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;

        if (posicao < alturaTela) {
            el.classList.add('ativo');
        }
    });
};


window.addEventListener('scroll', animarOnScroll);
window.addEventListener('load', animarOnScroll);