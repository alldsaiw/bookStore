let menuButton = document.querySelector('.h-menu');
let menuShow = document.querySelector('.display-menu');
let hamMenu = document.querySelector('#menu-open');
let menuCross = document.querySelector('#menu-close');

menuButton.addEventListener('click', () => {
    if (menuShow.classList.contains('display-menu')) {
        menuShow.classList.add('display-menu-open');
        menuShow.classList.remove('display-menu');
    } else {
        menuShow.classList.remove('display-menu-open');
        menuShow.classList.add('display-menu');
    }
    if (menuShow.classList.contains('display-menu-open')) {
        hamMenu.style.display = 'none';
        menuCross.style.display = 'block';
       } else {
        hamMenu.style.display = 'block';
        menuCross.style.display = 'none';
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
