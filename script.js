const forms = document.querySelectorAll('.form');
const input = document.querySelector('.input');

forms.forEach(form => {
    form.addEventListener('submit', Submit);
});


function Submit(event){
    // event.form.log
    console.log(event.target[0].value);
    console.log(event.target.parentElement);
    console.log(event.target[0]);
    console.log(event);
    
    // event.target[0].readOnly = true;
    event.target[0].disabled = true;
    event.target.parentElement.classList.add('correct');
    event.target.parentElement.setAttribute('data-some', 20);
    
    event.preventDefault();
}