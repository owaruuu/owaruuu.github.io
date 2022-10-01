

const OnTurnOffBaseKana = new CustomEvent('onTurnOffBaseKana', 
    {detail:null,bubbles:true}
);

let instrucciones = {
    home : 'Selecciona la opcion que quieres. Puedes aprender las letras de Hiragana/Katakana desde 0 o practicarlas si ya las sabes.', 
    aprender : 'Selecciona cuales Kana quieres aprender.',
    practicar : 'Selecciona cuales Kana quieres practicar.',
    kanatable : 'Escribe en cada tarjeta la lectura en romaji del Kana.'
}

function FindBaseGroup(kana){
    let basekey;

    if(mainkanasets.hasOwnProperty(kana)){
        basekey = 'all-base';
        return basekey;
    }

    if(dakutenkanasets.hasOwnProperty(kana)){
        basekey = 'all-dakuten';
        return basekey;
    }

    if(combkanasets.hasOwnProperty(kana)){
        basekey = 'all-comb';
        return basekey;
    }
    
    return 'null';
}

function BaseToObject(base){
    switch (base) {
        case 'all-base':
            return mainkanasets;
        case 'all-dakuten':
            return dakutenkanasets;
        case 'all-comb':
            return combkanasets;
    }
}

const mainkanasets = {
    あ : ['あ','い','う','え','お'],
    か : ['か','き','く','け','こ'],
    さ : ['さ','し','す','せ','そ'],
    た : ['た','ち','つ','て','と'],
    な : ['な','に','ぬ','ね','の'],
    は : ['は','ひ','ふ','へ','ほ'],
    ま : ['ま','み','む','め','も'],
    や : ['や','ゆ','よ'],
    ら : ['ら','り','る','れ','ろ'],
    わ : ['わ','を','ん'],
}

const dakutenkanasets = {
    が : ['が','ぎ','ぐ','げ','ご'],
    ざ : ['ざ','じ','ず','ぜ','ぞ'],
    だ : ['だ','ぢ','づ','で','ど'],
    ば : ['ば','び','ぶ','べ','ぼ'],
    ぱ : ['ぱ','ぴ','ぷ','ぺ','ぽ'],
    ぎゃ : ['ぎゃ','ぎゅ','ぎょ'],
    じゃ : ['じゃ','じゅ','じょ'],
    びゃ : ['びゃ','びゅ','びょ'],
    ぴゃ : ['ぴゃ','ぴゅ','ぴょ'],
}

const combkanasets = {   
    きゃ : ['きゃ','きゅ','きょ'],
    しゃ : ['しゃ','しゅ','しょ'],
    ちゃ : ['ちゃ','ちゅ','ちょ'],
    にゃ : ['にゃ','にゅ','にょ'],
    ひゃ : ['ひゃ','ひゅ','ひょ'],
    みゃ : ['みゃ','みゅ','みょ'],
    りゃ : ['りゃ','りゅ','りょ'],   
}

const allkana = { ...mainkanasets, ...dakutenkanasets, ...combkanasets}

console.log(allkana.length);

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
    さ : 'sa',
    し : 'shi',
    す : 'su',
    せ : 'se',
    そ : 'so',
    た : 'ta',
    ち : 'chi',
    つ : 'tsu',
    て : 'te',
    と : 'to',
    な : 'na',
    に : 'ni',
    ぬ : 'nu',
    ね : 'ne',
    の : 'no',
    は : 'ha',
    ひ : 'hi',
    ふ : 'fu',
    へ : 'he',
    ほ : 'ho',
    ま : 'ma',
    み : 'mi',
    む : 'mu',
    め : 'me',
    も : 'mo',
    や : 'ya',
    ゆ : 'yu',
    よ : 'yo',
    ら : 'ra',
    り : 'ri',
    る : 'ru',
    れ : 're',
    ろ : 'ro',
    わ : 'wa',
    を : 'wo',
    ん : 'n',
    が : 'ga',
    ぎ : 'gi',
    ぐ : 'gu',
    げ : 'ge',
    ご : 'go',
    ざ : 'za',
    じ : 'ji',
    ず : 'zu',
    ぜ : 'ze',
    ぞ : 'zo',
    だ : 'da',
    ぢ : 'di',
    づ : 'du',
    で : 'de',
    ど : 'do',
    ば : 'ba',
    び : 'bi',
    ぶ : 'bu',
    べ : 'be',
    ぼ : 'bo',
    ぱ : 'pa',
    ぴ : 'pi',
    ぷ : 'pu',
    ぺ : 'pe',
    ぽ : 'po',
    きゃ : 'kya',
    きゅ : 'kyu',
    きょ : 'kyo',
    しゃ : 'sha',
    しゅ : 'shu',
    しょ : 'sho',
    ちゃ : 'cha',
    ちゅ : 'chu',
    ちょ : 'cho',
    にゃ : 'nya',
    にゅ : 'nyu',
    にょ : 'nyo',
    ひゃ : 'hya',
    ひゅ : 'hyu',
    ひょ : 'hyo',
    みゃ : 'mya',
    みゅ : 'myu',
    みょ : 'myo',
    りゃ : 'rya',
    りゅ : 'ryu',
    りょ : 'ryo',
    ぎゃ : 'gya',
    ぎゅ : 'gyu',
    ぎょ : 'gyo',
    じゃ : 'ja',
    じゅ : 'ju',
    じょ : 'jo',
    びゃ : 'bya',
    びゅ : 'byu',
    びょ : 'byo',
    ぴゃ : 'pya',
    ぴゅ : 'pyu',
    ぴょ : 'pyo',
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
    inputValue = inputValue.toLowerCase();
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
    // CreateLabelInput(setupDiv, 'all-main', 'Todos los Kana');

    CreateSetupButtons(setupDiv);

    //crear boton A
    //CreateLabelInput(setupDiv, 'あ', 'あ、い、う、え、お');

    //crear boton KA
    //CreateLabelInput(setupDiv, 'か', 'か、き、く、け、こ');

    //ToggleClass(allkanabutton, 'check');

    // let allkanaButton = document.createElement('label');
    // allkanaButton.classList.add('select-box');

    // allkanaButton.appendChild(document.createElement('input'));
    // allkanaButton.textContent = 'Todos los Kana';

    // practiceDiv.appendChild(allkanaButton);

    let startButton = CreateUiButton(app, 'Empezar Practica');
    startButton.addEventListener('click', CheckSelected);
}

//crea los botones para seleccionar los kana, pratice setup page
function CreateSetupButtons(parentDiv){
    let firstDiv = document.createElement('div');
    parentDiv.appendChild(firstDiv);

    //creo boton all main
    let allbaseinput = CreateGroupLabelInput(firstDiv, 'all-base', 'Todos Kana base');
    //document.addEventListener('onTurnOffBaseKana', TurnOffGroupButton);
    document.addEventListener('onTurnOffBaseKana', TurnOffGroupButton);

    
    //allbaseinput.addEventListener('change', () => ToggleGroup(allbaseinput, mainkanasets));
    //allbaseinput.addEventListener('click', ClickInput);

    let maincheckboxes = document.createElement('div');
    maincheckboxes.classList.add('checkboxes');
    firstDiv.appendChild(maincheckboxes);

    Object.keys(mainkanasets).forEach(key => {
        CreateLabelInput(maincheckboxes, key, mainkanasets[key]);       
        //console.log(key);
        //console.log(kanaSets[key]);
    });

    let secondDiv = document.createElement('div');
    parentDiv.appendChild(secondDiv);

    let alldakuteninput = CreateGroupLabelInput(secondDiv , 'all-dakuten', 'Todos Dakuten/Handakuten');

    let dakutencheckboxes = document.createElement('div');
    dakutencheckboxes.classList.add('checkboxes');
    secondDiv.appendChild(dakutencheckboxes);

    Object.keys(dakutenkanasets).forEach(key => {
        CreateLabelInput(dakutencheckboxes, key, dakutenkanasets[key]);
        //console.log(key);
        //console.log(kanaSets[key]);
    });

    let thirdDiv = document.createElement('div');
    parentDiv.appendChild(thirdDiv);

    let allcombinput = CreateGroupLabelInput(thirdDiv , 'all-comb', 'Todos Combinacion');

    let combcheckboxes = document.createElement('div');
    combcheckboxes.classList.add('checkboxes');
    thirdDiv.appendChild(combcheckboxes);


    Object.keys(combkanasets).forEach(key => {
        CreateLabelInput(combcheckboxes, key, combkanasets[key]);
        //console.log(key);
        //console.log(kanaSets[key]);
    });

}

function TurnOffGroupButton(base){
    document.querySelector(`[for='${base}']`).classList.remove('check');
}

function ClickInput(event){
    console.log(event.target.parentElement);
    //console.log(event.target.parentElement);
    let newState = ToggleGroupClass(event.target.parentElement, 'check');

    //si new state es true, significa que prendi el boton
    //aqui tengo que pasar por todos los botones y ponerles check
    //como obtengo todos los label correspondiente al main label que mando este evento?
    let base = event.target.parentElement.getAttribute('for');

    let object = BaseToObject(base);
    console.log(object);

    let labels = GetAllLabels(object);
    console.log(labels);

    if(newState){
        TurnAllOn(labels);
    }else{
        TurnAllOff(labels);
    }
}

function TurnAllOn(group){
    //por cada label en el grupo
    group.forEach(element => {
        if(!element.classList.contains('check')){
            element.classList.add('check');
        }
    });
    //si no tiene la clase check, agregar clase check
}

function TurnAllOff(group){
    //por cada label en el grupo
    group.forEach(element => {
        if(element.classList.contains('check')){
            element.classList.remove('check');
        }
    });
    //si no tiene la clase check, agregar clase check
}

//cambia de estado un boton de grupo
// function ToggleGroup(sender, group){
//     //al llegar aqui ya cambie de estado el label
//     //tengo que asumir que si contiene la clase check, es porque boton no estaba activado
//     //y este evento lo activo

//     //si esta checked es porque lo prendi ahora y necesito prender los demas
//     let isChecked = sender.parentElement.classList.contains('check');
//     let labels = [];

//     if(isChecked){
//         Object.keys(group).forEach(key => {
//             let input = document.querySelector(`#${key}`);
//             let label = input.parentElement;
//             SetActive(label);
//             //console.log(label);           
//         });
//     }else{
//         Object.keys(group).forEach(key => {
//             let input = document.querySelector(`#${key}`);
//             let label = input.parentElement;
//             SetNotActive(label);
//             //console.log(label);           
//         });
//     }
   
//     //console.log(sender.parentElement.classList.contains('check'));
// }

// function SetActive(label){
//     if(label.classList.contains('check')){
//         return;
//     }

//     label.classList.add('check');
// }

// function SetNotActive(label){
//     if(label.classList.contains('check')){
//         label.classList.remove('check');
//     }  
// }

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

function ToggleGroupClass(element, clase){
    let contains = element.classList.contains(clase);
    if(contains){
        element.classList.remove(clase);
        return false;
    }else{
        element.classList.add(clase);
        return true;
    }
}

function ToggleClass(element, clase){
    let contains = element.classList.contains(clase);
    if(contains){
        //aqui estoy apagando un boton
        //document.dispatchEvent(OnTurnOffBaseKana);
        //element.dispatchEvent(OnTurnOffBaseKana);
        //basado en el kana de este element, por ej: あ obtener el 'all base'
        let attr = element.getAttribute('for');

        let base = FindBaseGroup(attr);
        let targetlabel = document.querySelector(`[for='${base}']`);
        targetlabel.classList.remove(clase);

        element.classList.remove(clase);
        return false;
    }else{
        //aqui estoy prendiendo un boton
        element.classList.add(clase);
        return true;
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

function CreateGroupLabelInput(parent, id, text){
    //crea los label en el menu de setup
    let label = CreateAndClass('label', parent, classes = ['select-box']);
    //label.setAttribute('id', id);
    let input = CreateAndId('input', label, id);
    input.classList.add('setup-input');
    label.setAttribute('for', id);
    let node = document.createTextNode (text);
    label.appendChild(node);
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', ClickInput);

    return input;
}

function CreateLabelInput(parent, id, text){
    //crea los label en el menu de setup
    let label = CreateAndClass('label', parent, classes = ['select-box']);
    //label.setAttribute('id', id);
    let input = CreateAndId('input', label, id);
    input.classList.add('setup-input');
    label.setAttribute('for', id);
    let node = document.createTextNode (text);
    label.appendChild(node);
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', function() {
        ToggleClass(label, 'check');
    });

    return input;
}

//construye pagina de practica basada en seleccion
function CheckSelected(){
    //get all labels
    // let checkboxes = document.querySelector('.checkboxes');
    // console.log(checkboxes);
    let buttons = document.querySelectorAll("div.checkboxes > label");

    //check if first one is check
    // let all = buttons[0].classList.contains('check');
    let all = false;

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

//construye la pagina de practica, basado en los kanas seleccionados
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

    console.log(kanasBase);

    //hacer un array de todos los kanas necesarios ocupando los kana base
    let kanas = [];
    kanasBase.forEach(basekana => {
        let base = allkana[basekana];
        base.forEach(kana => {
            kanas.push(kana);
        });
    });

    console.log(kanas);

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

    let firstInput = document.querySelector('input');
    firstInput.focus();

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
    let span = document.createElement('span');
    span.classList.add('question-span');
    span.textContent = kana;
    question.appendChild(span);
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
    input.autocapitalize = 'off';

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

function GetAllLabels(kanaset){
    let labels = [];

    Object.keys(kanaset).forEach(key =>{
        let label = document.querySelector(`#${key}`);
        labels.push(label.parentElement);
    });

    return labels;
}