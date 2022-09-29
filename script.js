let instrucciones = {
    home : 'Selecciona la opcion que quieres. Puedes aprender las letras de Hiragana/Katakana desde 0 o practicarlas si ya las sabes.', 
    aprender : 'Selecciona cuales kana quieres aprender.',
    practicar : 'Selecciona cuales kana quieres practicar.',
    kanatable : 'escribe en cada tarjeta la lectura en romaji del kana.'
}

const kanaSets = {
    あ : ['あ','い','う','え','お'],
    か : ['か','き','く','け','こ'],
}

const kanaAnswers = {
    あ : 'a',
    い : 'i',
    う : 'u',
    え : 'e',
    お : 'o',
    か : 'ka',
    き : 'ki',
    く : 'ku',
    け : 'ke',
    こ : 'ko',
}

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

// const forms = document.querySelectorAll('.form');

// forms.forEach(form => {
//     form.addEventListener('submit', Submit);
// });

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
        FocusNext(event);
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

function BuildPracticeSetupPage(){
    let app = document.getElementById('app');
    app.innerHTML = "";

    let instContent = document.getElementById('instruccionescontent');
    instContent.textContent = instrucciones.practicar;
    
    let setupDiv = document.createElement('div');
    setupDiv.classList.add('setupDiv');
    app.appendChild(setupDiv);

    //crear boton All
    CreateLabelInput(setupDiv, 'all-main', 'Todos los Kana');

    //crear boton A
    CreateLabelInput(setupDiv, 'あ', 'あ、い、う、え、お');

    //crear boton KA
    CreateLabelInput(setupDiv, 'か', 'か、き、く、け、こ');

    //ToggleClass(allkanabutton, 'check');

    // let allkanaButton = document.createElement('label');
    // allkanaButton.classList.add('select-box');

    // allkanaButton.appendChild(document.createElement('input'));
    // allkanaButton.textContent = 'Todos los Kana';

    // practiceDiv.appendChild(allkanaButton);

    let startButton = CreateUiButton(app, 'Empezar Practica');
    startButton.addEventListener('click', CheckSelected);
}

//first load
//popular instrucciones
let instContent = document.getElementById('instruccionescontent');
instContent.textContent = instrucciones.home;

//cargar ambos botones
let contentDiv = document.getElementById('app');

let homeDiv = document.createElement('div');
homeDiv.classList.add('homediv');
contentDiv.appendChild(homeDiv);

let buttonAprender = document.createElement('button');
buttonAprender.classList.add('uibtn');
buttonAprender.disabled = true;
homeDiv.appendChild(buttonAprender);

let buttonAprenderTop = document.createElement('span');
buttonAprenderTop.textContent = 'Aprender';
buttonAprenderTop.classList.add('uibtn-top');
buttonAprenderTop.classList.add('disabled');
buttonAprender.appendChild(buttonAprenderTop);

let buttonPractica = document.createElement('button');
buttonPractica.classList.add('uibtn');
homeDiv.appendChild(buttonPractica);

let buttonPracticaTop = document.createElement('span');
buttonPracticaTop.textContent = 'Practicar';
buttonPracticaTop.classList.add('uibtn-top');
buttonPractica.appendChild(buttonPracticaTop);

buttonPractica.addEventListener('click' , BuildPracticeSetupPage);





// ---------------------- FUNCTIONS ----------------------  //
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

function CreateUiButton(parent, text){
    let button = document.createElement('button');
    button.classList.add('uibtn');
    parent.appendChild(button);

    let buttonTop = document.createElement('span');
    buttonTop.textContent = text;
    buttonTop.classList.add('uibtn-top');
    button.appendChild(buttonTop);

    return button;
}

function CreateLabelInput(parent, inputId, text){
    //crea los label en el menu de setup
    let label = CreateAndClass('label', parent, classes = ['select-box']);
    let input = CreateAndId('input', label, inputId);
    input.classList.add('setup-input');
    label.setAttribute('for', inputId);
    let node = document.createTextNode (text);
    label.appendChild(node);
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', function() {
        ToggleClass(label, 'check');
    });
}

//construye pagina de practica basada en seleccion
function CheckSelected(){
    //get all labels
    let buttons = document.querySelectorAll('label');

    //check if first one is check
    let all = buttons[0].classList.contains('check');

    if(all){
        //construir todos
        BuildPracticePage();
        return;
    }

    //hacer un array con todos los 'check'
    let checked = []; 

    buttons.forEach(button => {
        if(button.classList.contains('check')){
            checked.push(button);
        }
    });

    if(checked.length < 1){
        alert('Por favor selecciona lo que quieres practicar.');
        return;
    }

    //construir con lo seleccionado
    BuildPracticePage(checked);

    // console.log(checked[0].getAttribute('for'));
    // console.log(checked);
    // console.log("building");
}

function BuildPracticePage(){
    //esta construye todas las tarjetas
}

function BuildPracticePage(selected){
    //clean page
    let app = document.getElementById('app');
    app.innerHTML = "";
    
    //populate instruccions
    let instContent = document.getElementById('instruccionescontent');
    instContent.textContent = instrucciones.kanatable;

    //HACER UN ARRAY de kana base desde selected
    let kanasBase = [];

    selected.forEach(label => {
        let kanaBase = label.getAttribute('for');
        kanasBase.push(kanaBase);
    });

    //hacer un array de todos los kanas necesarios ocupando los kana base
    let kanas = [];
    kanasBase.forEach(basekana => {
        let allkana = kanaSets[basekana];
        allkana.forEach(kana => {
            kanas.push(kana);
        });
    });

    //randomizar los kana
    let randomkanas = shuffleArray(kanas);
    //mandar a construir tarjetas con el array
    //return un array de elementos ?
    let elements = BuildCards(randomkanas);
    //agregar cada elemento al div correcto
    let practiceDiv = CreateAndClass('div', app, classes = ['practiceDiv']);

    elements.forEach(element => {
        practiceDiv.appendChild(element);
    });

    //console.log(kanasBase);
    //console.log(kanas);
}

function BuildCards(kanas){
    let cardElements = []; 

    kanas.forEach(kana => {
        let newcard = BuildKanaCard(kana);
        cardElements.push(newcard);
    });

    return cardElements;
}

function BuildKanaCard(kana){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-answer', kanaAnswers[kana]);
    let question = document.createElement('div');
    cardDiv.appendChild(question);
    question.classList.add('question');
    question.textContent = kana;
    let form = document.createElement('form');
    cardDiv.appendChild(form);
    form.classList.add('form');
    let input = document.createElement('input'); 
    form.appendChild(input);
    form.addEventListener('submit', Submit);
    input.type = 'text';
    input.autocomplete = 'off';
    input.size = 4;
    input.maxLength = 5;

    return cardDiv;
}

function shuffleArray(arr){
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
}

function FocusNext(event){
    let inputs = Array.from(document.querySelectorAll('input'));
    let currentindex = inputs.indexOf(event.target[0]);

    let indexToCheck = LoopingIncrement(currentindex, inputs.length);
    

    //check todos los inputs hasta encontrar uno activo
    for(var i = 0; i < inputs.length; i++){
        if(!inputs[indexToCheck].disabled){
            inputs[indexToCheck].focus();
            return;
        }else{
            indexToCheck = LoopingIncrement(indexToCheck, inputs.length)
        }
    }

    console.log('no encontre tarjetas libres');

    // if(index < inputs.length - 1){
    //     inputs[index+1].focus();
    // }
   
    //console.log(event.target[0]);
}

function LoopingIncrement(index, length){
    let newindex = 0;

    if(index + 1 > length - 1){
        newindex = 0;
    }else{
        newindex = index + 1;
    }

    return newindex;
}