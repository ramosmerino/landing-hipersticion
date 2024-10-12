const originalTitle = document.querySelector('.title');
const hoverTitle = document.getElementById('hoverTitle');
const logoItems = document.querySelectorAll('.logo a');

let currentAnimation = null;

function typeWriter(el, text, i) {
    if (i < text.length) {
        el.textContent = text.substring(0, i + 1);
        currentAnimation = requestAnimationFrame(() => {
            currentAnimation = setTimeout(() => typeWriter(el, text, i + 1), 50);
        });
    }
}

function cancelAnimation() {
    if (currentAnimation) {
        cancelAnimationFrame(currentAnimation);
        clearTimeout(currentAnimation);
        currentAnimation = null;
    }
}

logoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cancelAnimation();
        originalTitle.style.opacity = '0';
        hoverTitle.textContent = '';
        typeWriter(hoverTitle, item.getAttribute('data-hover-text'), 0);
        hoverTitle.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        cancelAnimation();
        originalTitle.style.opacity = '1';
        hoverTitle.style.opacity = '0';
    });
});
