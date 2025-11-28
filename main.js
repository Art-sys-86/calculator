const digits = document.getElementsByClassName("btns"); //Used this because we want the variable or value to be live not static and be done.
const operators = document.getElementsByClassName("operator");
const equal = document.getElementById("equal");
const delC = document.getElementById(`del`);
const inputUser = document.querySelector(`input`);
const maxLength = 15;

let firstNumber = 0;
let secondNumber = 0;
let currentNumber = 0;
let operator;
let waitingForNum = false;

//Iterate over every digit so you can use individually
for(let digit of digits){
    digit.addEventListener('click', digitHandler)
};

//e is event, e.target means that the button will tigger the event function.
function digitHandler(e){
    let button = e.target;
    let value = button.dataset.value;
    //Making sure it doesnt exceed maxLength set
    if(inputUser.value.length >= maxLength){
        return;
    };
    switch(waitingForNum){
        case true:
            inputUser.value = value;
            waitingForNum = false;
            break;
        default:
            inputUser.value += value;
    };
}

for(let operatorbtn of operators){
    operatorbtn.addEventListener('click', operationHandler)
};

function operationHandler(e){
    let button = e.target;
    let operationValue = button.dataset.value;
    const inputValue = parseFloat(inputUser.value);
    //doesnt allow double user to 2+++ = 4,,6,8,10...
    if(isNaN(firstNumber)){
        return inputUser.value = "Are we deadass?🥀";
    }
    if(operator && waitingForNum){
        operator = operationValue;
        return;
    }
    ///No operation = first Number is stored and operation is added! then we wait for second number!
    if(!operator){
        firstNumber = inputValue;
        operator = operationValue;
        waitingForNum = true;
    }
    //operator exists! the first number and the second Number is added and stored in first!
    else if(operator){
        secondNumber = inputValue;
        firstNumber = cal(firstNumber, operator, secondNumber);
        inputUser.value = firstNumber; //update the display!
    }
    operator = operationValue; //replace the previous operator with current
    waitingForNum = true;
}

//oeprations

function cal(first, operator, second){
    switch(true){
        case operator === "+":
            return first + second;
            break;
        case operator === "-":
            return first - second;
            break;
        case operator === "÷":
            return first/second;
            break;
        case operator === "X":
            return first*second;
            break;
        default:
            return "Error";
    }
};

equal.addEventListener('click', () =>{
    if(!waitingForNum){
        return cal(firstNumber, operator, secondNumber);
    }
})
