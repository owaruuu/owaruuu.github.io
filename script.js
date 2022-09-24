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

kanas.forEach(kana => {
    BuildCard(kana)
});

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