const inputUser = document.querySelector(`input`);
const numOne = document.getElementById(`one`);
const numTwo = document.getElementById(`two`);
const add = document.getElementById(`plus`);
const sub = document.getElementById(`minus`);
const equal = document.getElementById(`equal`);
const delC = document.getElementById(`del`);

let firstNumber = '';
let secondNumber = '';
let operator = '';
let waitingForNum = false;

const maxLength = 12;

numOne.addEventListener('click', () => {
    if(inputUser.value.length >= maxLength){
        return;
    }
    if(waitingForNum){
    inputUser.value = 1;
    waitingForNum = false;
    } else{
        inputUser.value += 1;
    }
})

add.addEventListener('click', () => {
    firstNumber = parseFloat(inputUser.value);
    inputUser.value = "+";
    operator = "+";
    waitingForNum = true;
})

sub.addEventListener('click', ()=> {
    firstNumber = parseFloat(inputUser.value);
    inputUser.value = "-";
    operator = "-";
    waitingForNum = true;
})

equal.addEventListener('click', () =>{
    secondNumber = parseFloat(inputUser.value);
    if(operator === "+"){
        inputUser.value = firstNumber + secondNumber;
        firstNumber = '';
        operator = '';
    }
    if(operator === "-"){
        inputUser.value = firstNumber - secondNumber;
        firstNumber = '';
        operator = '';
    }
})
delC.addEventListener('click', () => {
    inputUser.value = '';
})





