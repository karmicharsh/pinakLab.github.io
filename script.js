
document.querySelectorAll('.service-box').forEach((box) => {
    box.addEventListener('mouseenter', () => {
        anime({
            targets: box,
            rotate: '1turn',
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
});
