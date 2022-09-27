let instrucciones = [
    {
        instruccionhome : 'Selecciona la opcion que quieres. Puedes aprender las letras de Hiragana/Katakana desde 0 o practicarlas si ya las sabes.'   
    },
    {
        instruccionaprender : 'Selecciona cuales kana quieres aprender'
    },
    {
        instruccoinespracticar : 'Selecciona cuales kana quieres practicar'
    },
]

let kanas = [
    {
        kana : 'か',
        answer : 'ka',
    },
    {
        kana : 'き',
        answer : 'ki',
    },
    {
        kana : 'く',
        answer : 'ku',
    },
    {
        kana : 'け',
        answer : 'ke',
    },
    {
        kana : 'こ',
        answer : 'ko',
    },
]

const container = document.querySelector('.container');
// const input = document.querySelector('.input');

// kanas.forEach(kana => {
//     BuildCard(kana)
// });

function BuildCard(kana){
    let cardDiv = document.createElement('div');
    container.appendChild(cardDiv);
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-answer', kana.answer);
    let question = document.createElement('div');
    cardDiv.appendChild(question);
    question.classList.add('question');
    question.textContent = kana.kana;
    let form = document.createElement('form');
    cardDiv.appendChild(form);
    form.classList.add('form');
    let input = document.createElement('input'); 
    form.appendChild(input);
    input.type = 'text';
    input.autocomplete = 'off';
    input.size = 4;
    input.maxLength = 5;
}

const forms = document.querySelectorAll('.form');

forms.forEach(form => {
    form.addEventListener('submit', Submit);
});

function Submit(event){
    let cardDiv = event.target.parentElement;
    let form = event.target;
    let input = event.target[0];
    let inputValue = event.target[0].value;
    let answer = cardDiv.dataset.answer;
    
    if(inputValue == answer )
    {
        event.target[0].disabled = true;
        form.classList.remove('incorrect');
        form.classList.add('correct');
        //pass focus
    }else{
        form.classList.add('incorrect');
        input.value = '';
    }

    //console.log(event.target[0].value);
    //console.log(event.target.parentElement);
    //console.log(event.target[0]);
    console.log(event);
    //console.log(cardDiv.dataset.answer);
    
    //cardDiv.setAttribute('data-some', 20);
    
    event.preventDefault();
}

function GetContent(id, callback){

    let pages = {
        home: 'home',
        learn: 'learn',
        practice: 'practice',
    };

    callback(pages[id]);
}

//construye pagina base
function LoadContent(id){
    let contentDiv = document.getElementById('app');

    GetContent(id, function(content){
        //construir pagina basado en string
    })
}

//construye pagina de practica basada en seleccion
function BuildPractice(kanas){

}

function OpenPracticeSetupPage(){
    let app = document.getElementById('app');
    app.innerHTML = "";

    let instContent = document.getElementById('instruccionescontent');
    instContent.textContent = instrucciones[2].instruccoinespracticar;
    
    let practiceDiv = document.createElement('div');
    practiceDiv.classList.add('practiceDiv');
    app.appendChild(practiceDiv);


    let allkanabutton = CreateAndClass('label', practiceDiv, classes = ['select-box']);
    let allkanainput = CreateAndId('input', allkanabutton, 'all-main');
    allkanabutton.setAttribute('for', 'all-main');
    let node = document.createTextNode ('Todos los Kana');
    allkanabutton.appendChild(node);
    allkanainput.setAttribute('type', 'checkbox');
    allkanainput.addEventListener('change', function() {
        ToggleClass(allkanabutton, 'check');});

    //ToggleClass(allkanabutton, 'check');

    // let allkanaButton = document.createElement('label');
    // allkanaButton.classList.add('select-box');

    // allkanaButton.appendChild(document.createElement('input'));
    // allkanaButton.textContent = 'Todos los Kana';

    // practiceDiv.appendChild(allkanaButton);
}

//first load
//popular instrucciones
let instContent = document.getElementById('instruccionescontent');
instContent.textContent = instrucciones[0].instruccionhome;

//cargar ambos botones
let contentDiv = document.getElementById('app');

let homeDiv = document.createElement('div');
homeDiv.classList.add('homediv');
contentDiv.appendChild(homeDiv);

let buttonAprender = document.createElement('button');
buttonAprender.classList.add('uibtn');
homeDiv.appendChild(buttonAprender);

let buttonAprenderTop = document.createElement('span');
buttonAprenderTop.textContent = 'Aprender';
buttonAprenderTop.classList.add('uibtn-top');
buttonAprender.appendChild(buttonAprenderTop);

let buttonPractica = document.createElement('button');
buttonPractica.classList.add('uibtn');
homeDiv.appendChild(buttonPractica);

let buttonPracticaTop = document.createElement('span');
buttonPracticaTop.textContent = 'Practicar';
buttonPracticaTop.classList.add('uibtn-top');
buttonPractica.appendChild(buttonPracticaTop);

buttonPractica.addEventListener('click' , OpenPracticeSetupPage);



// functions //
function CreateSimple(component, parent){
    let newComponent = document.createElement(component);
    parent.appendChild(newComponent);

    return newComponent;
}

function CreateAndClass(component, parent, classes){
    let newComponent = document.createElement(component);

    classes.forEach(clase =>  {
        newComponent.classList.add(clase);
    });

    parent.appendChild(newComponent);

    return newComponent;
}

function CreateAndId(component ,parent, id){
    let newComponent = document.createElement(component);

    newComponent.setAttribute('id', id);

    parent.appendChild(newComponent);

    return newComponent;
}

function ToggleClass(element, clase){
    let contains = element.classList.contains(clase);
    if(contains){
        element.classList.remove(clase);
    }else{
        element.classList.add(clase);
    }
    //console.log(bool);
}
