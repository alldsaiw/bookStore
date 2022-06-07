
let feedback = document.querySelector('.btn-add');
let formWindow = document.querySelector('#feedback');

feedback.addEventListener ('click', () => {
        formWindow.classList.remove('form-default');
        formWindow.classList.add('form-container');
    }
);

let formClose = document.querySelector('.form-close');
formClose.onclick = function() {
    formWindow.classList.remove('form-container');
    formWindow.classList.add('form-default');
};

/*let feedbackSubmit = document.querySelector('.btn-submit');
let form = document.querySelector('form');
let placeholder = document.querySelector('#placeholder');

feedbackSubmit.addEventListener('click', () => {
    document.forms.form.submit();
    console.log('ok');
});

*/