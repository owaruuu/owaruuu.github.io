let learnSets = [
    ['あ','い','う','え','お'],
    ['か','き','く','け','こ'],
];

let currentSet = [];
// let currentSet =  ['あ','い','う','え','お'];

let instrucciones = {
    home : 'Selecciona la opcion que quieres. Puedes aprender las letras de Hiragana/Katakana desde 0 o practicarlas si ya las sabes.', 
    aprender : 'Selecciona cuales Kana quieres aprender.',
    practicar : 'Selecciona cuales Kana quieres practicar.',
    kanatable : 'Escribe en cada tarjeta la lectura en romaji del Kana.',
    kanalearn : 'Estudia estas tarjetas para luego responder un Quiz.(Intenta escribir un par de veces estas letras si no las conocias.)',
    kanaquiz : 'Selecciona de las opciones abajo el romaji correcto, puedes repetir el Quiz las veces que quieras antes de continuar.',
};

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
};

function BaseToObject(base){
    switch (base) {
        case 'all-base':
            return mainkanasets;
        case 'all-dakuten':
            return dakutenkanasets;
        case 'all-comb':
            return combkanasets;
    }
};

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
};

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
};

const combkanasets = {   
    きゃ : ['きゃ','きゅ','きょ'],
    しゃ : ['しゃ','しゅ','しょ'],
    ちゃ : ['ちゃ','ちゅ','ちょ'],
    にゃ : ['にゃ','にゅ','にょ'],
    ひゃ : ['ひゃ','ひゅ','ひょ'],
    みゃ : ['みゃ','みゅ','みょ'],
    りゃ : ['りゃ','りゅ','りょ'],   
};

const allkana = { ...mainkanasets, ...dakutenkanasets, ...combkanasets}

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
};

const kanaWrongs = {
    あ : ['e', 'o', 'u', 'i', ],
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
};

const container = document.querySelector('.container');

BuildHomePage();

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
    console.log(event);
    //console.log(cardDiv.dataset.answer);  
    //cardDiv.setAttribute('data-some', 20);
    
    event.preventDefault();
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
    //console.log(event.target.parentElement);
    //console.log(event.target.parentElement);
    let newState = ToggleGroupClass(event.target.parentElement, 'check');

    //si new state es true, significa que prendi el boton
    //aqui tengo que pasar por todos los botones y ponerles check
    //como obtengo todos los label correspondiente al main label que mando este evento?
    let base = event.target.parentElement.getAttribute('for');

    let object = BaseToObject(base);
    //console.log(object);

    let labels = GetAllLabels(object);
    //console.log(labels);

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

function StartLearning(){
    let app = document.getElementById('app');
    app.innerHTML = "";

    //instrucciones
    let instContent = document.getElementById('instruccionescontent');
    instContent.textContent = instrucciones.kanalearn;

    //armar divs
    let learnDiv = CreateAndClass('div', app, classes = ['learndiv']);
    let learnCard = CreateAndClass('div', learnDiv, classes = ['learncard']);
    let learnKanaSection = CreateAndClass('div', learnCard, classes = ['kanasection']);
    let learnKanaTitle = CreateAndClass('div', learnKanaSection, classes = ['learnkanatitle']);
    let learnKana = CreateAndClass('div', learnKanaSection, classes = ['learnkana']);
    let learnRomajiSection = CreateAndClass('div', learnCard, classes = ['romajisection']);
    let learnRomaji = CreateAndClass('div', learnRomajiSection, classes = ['learnromaji']);
    let learnRomajiTitle = CreateAndClass('div', learnRomajiSection, classes = ['learnromajititle']);

    //popular contenido
    
    learnKanaTitle.textContent = 'Kana';
    learnKana.textContent = currentSet[0];
    learnRomaji.textContent = kanaAnswers[currentSet[0]];
    learnRomajiTitle.textContent = 'Romaji';

    CreateAndClass('div',learnDiv , classes = ['spacer'] );

    let buttonsdiv = CreateAndClass('div',learnDiv , classes = ['btn-div'] );

    let prevButton = CreateAndClass('button', buttonsdiv, classes = ['prevbtn']);
    prevButton.addEventListener('click', PreviousButton);
    prevButton.textContent = 'Atras';
    prevButton.disabled = true;

    let nextButton = CreateAndClass('button', buttonsdiv, classes = ['nextbtn']);
    nextButton.addEventListener('click', NextButton);
    nextButton.textContent = 'Siguiente';
}

function PreviousButton(){
    let kanaelement = document.querySelector('.learnkana');
    let kana = kanaelement.textContent

    let index = currentSet.indexOf(kana);

    let indexminusone = index - 1;
    let prevkana = currentSet[indexminusone];

    if(indexminusone < 0){
        console.log('estoy al principio');       
    }else{
        kanaelement.textContent = prevkana;

        //buscar el romaji correspondiente al nuevo kana y ponerlo tambien
        let romaji = kanaAnswers[prevkana];

        let romajielement = document.querySelector('.learnromaji');
        romajielement.textContent = romaji;

        //aqui tengo que cambiar el comportamiento del button
        //necesito revisar si quede en el primer kana y desactivar el button
        let previndex = indexminusone - 1;
        if(previndex < 0){
            let prevbutton = document.querySelector('.prevbtn');
            prevbutton.disabled = true;
        }
    }

    let nextbutton = document.querySelector('.nextbtn');
    if(nextbutton.classList.contains('quiz')){
        nextbutton.classList.remove('quiz');
        nextbutton.textContent = 'Siguiente';
        nextbutton.disabled = false;
    }
}

//next button de la parte learn
function NextButton(){
    //tomando el kana actual, buscarlo en el array y cambiar al siguiente si es posible
    let kanaelement = document.querySelector('.learnkana');
    let kana = kanaelement.textContent

    let index = currentSet.indexOf(kana);

    let indexplusone = index + 1;
    let nextkana = currentSet[indexplusone];

    if(indexplusone >= currentSet.length){   
        BuildQuiz();   
    }else{
        kanaelement.textContent = nextkana;

        //buscar el romaji correspondiente al nuevo kana y ponerlo tambien
        let romaji = kanaAnswers[nextkana];

        let romajielement = document.querySelector('.learnromaji');
        romajielement.textContent = romaji;

        //aqui tengo que cambiar el comportamiento del button
        //necesito revisar si quede en el ultimo kana y cambiar el boton por el quiz
        let nextindex = indexplusone+1;
        if(nextindex >= currentSet.length){
            let nextbutton = document.querySelector('.nextbtn');
            nextbutton.textContent = 'Quiz! ->';
            nextbutton.classList.add('quiz');
            nextbutton.disabled = true;
            setTimeout(function(){nextbutton.disabled = false;},500);
        }
    }    

    let prevbutton = document.querySelector('.prevbtn');

    if(indexplusone > 0 && prevbutton != null){       
        prevbutton.disabled = false;
    }
}

function BuildQuiz(){
    let app = CleanAppPage();
    PopulateInstructions(instrucciones.kanaquiz);

    let quizDiv = CreateAndClass('div', app, classes = ['quizdiv']);

    //randomize kana set
    let base = getObjKey(allkana,currentSet);
    //console.log(base);

    currentSet = shuffleArray(currentSet);  

    //build kana
    let kanaQuizPrompt = CreateAndClass('div', quizDiv, classes = ['quizprompt']);
    let kanaQuizPromptText = CreateSimple('p', kanaQuizPrompt);
    kanaQuizPromptText.classList.add('fade');
    kanaQuizPromptText.classList.add('quizprompttext');
    kanaQuizPromptText.textContent = currentSet[0];

    CreateAndClass('div', quizDiv, classes = ['spacer']);

    let answerButtons = CreateAndClass('div', quizDiv, classes = ['quizbuttonsdiv']);
    //build answer button array
    let answerButtonsArray = [];
    //first the answer button.
    let answerButton = document.createElement('button');
    answerButton.classList.add('correctquizanswerbtn');
    let correctAnswer = kanaAnswers[currentSet[0]];
    answerButton.textContent = correctAnswer;
    answerButton.addEventListener('click', AnswerQuiz);
    answerButtonsArray.push(answerButton);

    let firstWrongAnswer = document.createElement('button');
    firstWrongAnswer.classList.add('incorrectquizanswerbtn');
    
    
    let randomKana = GetRandomKanaFromBaseThatsNot(base, nots = [currentSet[0]]);
    firstWrongAnswer.textContent = kanaAnswers[randomKana];
    firstWrongAnswer.addEventListener('click', FailQuiz);
    answerButtonsArray.push(firstWrongAnswer);

    let secondWrongAnswer = document.createElement('button');
    secondWrongAnswer.classList.add('incorrectquizanswerbtn');
    //randomKanaBase = GetRandomThatIsNot(currentSet, nots = [currentSet[0], randomKanaBase]);
    randomKana = GetRandomKanaFromBaseThatsNot(base, nots = [currentSet[0], randomKana]);
    secondWrongAnswer.textContent = kanaAnswers[randomKana];
    secondWrongAnswer.addEventListener('click', FailQuiz);
    answerButtonsArray.push(secondWrongAnswer);

    AppendQuizButtons(answerButtonsArray, answerButtons);
}

function GoToNextQuiz(){
    //get kana display
    let kanatext = document.querySelector('.quizprompt p');
    let kanaindisplay = kanatext.textContent;
    //see if can get next kana
    let currentindex = currentSet.indexOf(kanaindisplay);
    let nextindex = currentindex + 1;
    if(nextindex >= currentSet.length){
     console.log('llegue al final del set');
     //aqui deberia reemplazar los botones
     ShowAgainNextButtons();
 
    }else{
     //change display kana
    //kanatext.textContent = currentSet[nextindex];
     toggleTransitionWithTimeout(kanatext, currentSet[nextindex]);
 
     //erase buttons
     let buttonsdiv = document.querySelector('.quizbuttonsdiv');
     buttonsdiv.innerHTML = "";
 
     //create buttons again
     CreateQuizButtons(nextindex ,buttonsdiv);
    } 
 }

function CreateQuizButtons(currentindex, parent){
    //build answer button array
    let answerButtonsArray = [];
    //first the answer button.
    let answerButton = document.createElement('button');
    answerButton.classList.add('correctquizanswerbtn');
    let correctAnswer = kanaAnswers[currentSet[currentindex]];
    answerButton.textContent = correctAnswer;
    answerButton.addEventListener('click', AnswerQuiz);
    answerButtonsArray.push(answerButton);

    let firstWrongAnswer = document.createElement('button');
    firstWrongAnswer.classList.add('incorrectquizanswerbtn');
    //let randomKanaBase= GetRandomThatIsNot(currentSet, nots = [currentSet[currentindex]]);
    let base = getObjKey(allkana,currentSet);
    console.log(base);
    
    let randomKana = GetRandomKanaFromBaseThatsNot(base, nots = [currentSet[currentindex]]);
    firstWrongAnswer.textContent = kanaAnswers[randomKana];
    firstWrongAnswer.addEventListener('click', FailQuiz);
    answerButtonsArray.push(firstWrongAnswer);

    let secondWrongAnswer = document.createElement('button');
    secondWrongAnswer.classList.add('incorrectquizanswerbtn');
    //randomKanaBase = GetRandomThatIsNot(currentSet, nots = [currentSet[currentindex], randomKanaBase]);
    randomKana = GetRandomKanaFromBaseThatsNot(base, nots = [currentSet[currentindex], randomKana]);
    secondWrongAnswer.textContent = kanaAnswers[randomKana];
    secondWrongAnswer.addEventListener('click', FailQuiz);
    answerButtonsArray.push(secondWrongAnswer);

    AppendQuizButtons(answerButtonsArray, parent);
}

function AnswerQuiz(event){
    //console.log(event.target);
    event.target.classList.add('correctquiz');
    event.target.disabled = true;
    
    setTimeout(GoToNextQuiz,850);  
}

function FailQuiz(event){
    console.log("wrong");
    event.target.classList.add('incorrectquiz');
    event.target.disabled = true;
}



function toggleTransitionWithTimeout(element, text){
    element.classList.remove('fade');
    setTimeout(() => {
        requestAnimationFrame(() => {
            element.textContent = text;
            element.classList.add('fade');
        })
    }, 225);
}

function ShowAgainNextButtons(){
    let buttonsdiv = document.querySelector('.quizbuttonsdiv');
    buttonsdiv.innerHTML = "";

    let againbutton = CreateAndClass('button', buttonsdiv, classes = ['againbtn']);
    againbutton.textContent = 'Una vez mas';
    againbutton.addEventListener('click', OnAgainButtonPress);

    let currentIndex = learnSets.indexOf(currentSet);
    let nextindex = currentIndex + 1;
    if(nextindex >= learnSets.length){
        //mostrar boton de salir
        let exitbutton = CreateAndClass('button', buttonsdiv, classes = ['exitbtn']);
        exitbutton.textContent = 'Salir';
        exitbutton.addEventListener('click', OnExitButtonPress);
    }else{
        //mostrar boton de next set
        let nextsetbutton = CreateAndClass('button', buttonsdiv, classes = ['nextsetbtn']);
        nextsetbutton.textContent = 'Seguir';
        nextsetbutton.addEventListener('click', OnTakeNextButtonPress);
    }
}

function OnAgainButtonPress(event){
    event.target.disabled = true;
    setTimeout(TakeQuizAgain, 300);
}

//pregunta denuevo el set de kanas actual
function TakeQuizAgain(){
    BuildQuiz();
}

function OnTakeNextButtonPress(event){
    event.target.disabled = true;
    setTimeout(TakeNextQuizSet, 300);
}

//cambia al siguiente set de kana y arma la pagina
function TakeNextQuizSet(){
    let currentIndex = learnSets.indexOf(currentSet);
    let nextindex = currentIndex + 1;

    currentSet = learnSets[nextindex];
    StartLearning();
}

function OnExitButtonPress(){
    setTimeout(ExitQuiz, 250);
}

//Sale a la pagina principal
function ExitQuiz(){
    location.reload();
}

function CleanAppPage(){
    let app = document.getElementById('app');
    app.innerHTML = "";

    return app;
}

function PopulateInstructions(e){
    let instContent = document.getElementById('instruccionescontent');
    instContent.textContent = e;
}

function BuildHomePage(){
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

    buttonAprender.addEventListener('click' , OnLearnButtonPress)
    buttonPractica.addEventListener('click' , OnPracticeButtonPress);
}

function OnLearnButtonPress(){
    //aqui deberia revisar que esta seleccionado y setear el 'learnsets'
    //esto deberia depender de lo que seleccione en el setup
    //en este punto el 'learnsets' ya deberia estar seteado y solo tengo que acceder al primero
    //currentSet = learnSets[0];

    // setTimeout(StartLearning,200);
    setTimeout(BuildLearnSetupPage, 200);
}

function OnPracticeButtonPress(){
    setTimeout(BuildPracticeSetupPage,200);
}

function BuildLearnSetupPage(){
    let app = CleanAppPage();

    PopulateInstructions(instrucciones.aprender);

    let practiceSetupDiv = CreateAndClass('div', app, classes = ['setupDiv']);

    CreateSetupButtons(practiceSetupDiv);

    let startButton = CreateUiButton(app, 'Aprender');
    startButton.addEventListener('click', CheckLearnSelected);
}

function CheckLearnSelected(){
    //get all labels
    let buttons = document.querySelectorAll("div.checkboxes > label");
    //console.log(`esto es lo que tengo en buttons: ${buttons}`);

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
    //console.log(checked);

    //console.log('popule el learn set');
    learnSets = PopulateLearnSet(checked);
    currentSet = learnSets[0];

    StartLearning();
}

function PopulateLearnSet(arr){
    let learnArray = [];
    arr.forEach(element => {
        let kana = element.getAttribute('for');
        learnArray.push(allkana[kana]);
    });

    //console.log(learnArray);
    return learnArray;
}

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

    //console.log(kanas);

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

function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

function GetRandomKana(){
    const keys = Object.keys(allkana);

    return keys[Math.floor(Math.random() * keys.length)];
}

function GetRandomKanaFromBaseThatsNot(base, nots){
    
    let arr = allkana[base];

    let random;

    do {
       random = arr[Math.floor(Math.random() * arr.length)];
    } while (IsEqual(nots, random));
    
    return random;

    // arr = shuffleArray(arr);
    // return arr[0];
}

function GetRandomThatIsNot(array, nots){
    // let keys = Object.keys(object);
    array = shuffleArray(array);
    let random;

    do {
       random = array[Math.floor(Math.random() * array.length)];
    } while (IsEqual(nots, random));
    
    return random;
}

function IsEqual(obj, prompt){
    let exit = false;

    obj.forEach(key =>{
        thekey = key;
        if(key === prompt){
            exit = true;
        }
    });

    return exit;
}

function AppendQuizButtons(arr, parent){
    arr = shuffleArray(arr);
        
    arr.forEach(element => {
        parent.appendChild(element);
    });
}