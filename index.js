const inputUser = document.querySelector(`input`);
const numOne = document.getElementById(`one`);
const numTwo = document.getElementById(`two`);
const add = document.getElementById(`plus`);
const sub = document.getElementById(`minus`);
const equal = document.getElementById(`equal`);
const delC = document.getElementById(`del`);

let firstNumber = '';
let secondNumber = '';
let currentNumber = '';
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
    firstNumber = parseFloat(inputUser.value); //
    secondNumber = parseFloat(inputUser.value);
    inputUser.value = "+";
    operator = "+";
    waitingForNum = true;
    if(operator === "+"){
        currentNumber = firstNumber + secondNumber;
    }

})

sub.addEventListener('click', ()=> {
    firstNumber = parseFloat(inputUser.value);
    inputUser.value = "-";
    operator = "-";
    waitingForNum = true;
})

equal.addEventListener('click', () =>{
    inputUser.value = currentNumber;
    if(inputUser.value === NaN){
        return `Error!`;
    }
})
delC.addEventListener('click', () => {
    inputUser.value = '';
    currentNumber = '';
    firstNumber = '';
    secondNumber = '';
})





