const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', Submit);

function Submit(event){
    // event.form.log
    console.log(input.value);
    event.preventDefault();
}