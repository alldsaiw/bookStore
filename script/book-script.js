
let feedback = document.querySelector('.btn-add');

feedback.addEventListener ('click', () => {
    for (let i = 0; i < 1; i++) {
        let answer = prompt('Оставьте отзыв о книге!', '');
        if (answer != null && answer != '' && typeof(answer) == 'string') {
        } else {
        i--;
    }
    }
    alert ('Спасибо!');
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
