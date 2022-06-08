
let feedbackClick = document.querySelector('.btn-add');

feedbackClick.addEventListener ('click', () => {
    for (let i = 0; i < 1; i++) {
        let answer = window.prompt('Оставьте отзыв о книге!', '');
        if (answer != null && answer != '' && typeof(answer) == 'string') {
        } else {
        i--;
    }
    let answerText = answer;
    let feedbackSent = document.createElement('article');
    feedbackSent.innerText = answerText;
    let placeholder = document.querySelector('#placeholder');
    let parent = placeholder.parentNode;
   parent.insertBefore(feedbackSent, placeholder);
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
