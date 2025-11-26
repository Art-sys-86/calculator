const inputUser = document.querySelector(`input`);
const numOne = document.getElementById(`one`);
const numTwo = document.getElementById(`two`);
const add = document.getElementById(`plus`);
const sub = document.getElementById(`minus`);
const divide = document.getElementById('divide');
const multiple = document.getElementById('times');
const equal = document.getElementById(`equal`);
const delC = document.getElementById(`del`);

let firstNumber = 0;
let secondNumber = 0;
let currentNumber = 0;
let operator = '';
console.log(operator);
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

numTwo.addEventListener('click', () => {
    if(inputUser.value.length >= maxLength){
        return;
    }
    if(waitingForNum){
    inputUser.value = 2;
    waitingForNum = false;
    } else{
        inputUser.value += 2;
    }
})



//Operations 

function cal(firstNumber, operator, secondNumber){
    if(operator === "+"){
        firstNumber = firstNumber + secondNumber;
        return firstNumber;
    }
    else if(operator === "-"){
        firstNumber = firstNumber - secondNumber;
        return firstNumber;
    }
}

add.addEventListener('click', () => {
    //No operation = first Number is stored and operation is added! then we wait for second number!
    if(operator === ""){
        firstNumber = parseFloat(inputUser.value);
        operator = "+";
        waitingForNum = true;
    }
    //operator exists! the first number and the second Number is added!
    //I didnt use if because to continue chaining.
    else if(operator){
        secondNumber = parseFloat(inputUser.value);
        firstNumber = cal(firstNumber, operator, secondNumber);
        waitingForNum = true;
        inputUser.value = firstNumber; //update the display!
    }
});      


sub.addEventListener('click', ()=> {
    if(operator === ""){
        firstNumber = parseFloat(inputUser.value);
        operator  = "-";
        waitingForNum = true;
    }
    else if(operator){
        secondNumber = parseFloat(inputUser.value);
        firstNumber = cal(firstNumber, operator, secondNumber);
        waitingForNum = true;
        inputUser.value = firstNumber;
    }
})

equal.addEventListener('click', () =>{
    secondNumber = parseFloat(inputUser.value);
    console.log(secondNumber);
    inputUser.value = cal(firstNumber, operator, secondNumber);
    operator = '';
    waitingForNum = true;
})
delC.addEventListener('click', () => {
    inputUser.value = "";
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0;
})

