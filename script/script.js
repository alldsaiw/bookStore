let menuButton = document.querySelector('.h-menu');
let menuShow = document.querySelector('.display-menu');

menuButton.addEventListener('click', () => {
    if (menuShow.classList.contains('display-menu')) {
        menuShow.classList.add('display-menu-open');
        menuShow.classList.remove('display-menu');
    } else {
        menuShow.classList.remove('display-menu-open');
        menuShow.classList.add('display-menu');
    }
});


let btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});
