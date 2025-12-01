const digits = document.getElementsByClassName("digit"); //Used this because we want the variable or value to be live not static and be done.
const operators = document.getElementsByClassName("operator");
const equal = document.getElementById("equal");
const deleteButton = document.getElementById(`del`);
const inputUser = document.querySelector(`input`);
const history = document.getElementById('historyLog');
const maxLength = 15;

let firstNumber = 0;
let secondNumber = 0;
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

    if (value === "." && inputUser.value.includes(".")) return;
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
        if (firstNumber % 1 !== 0) { //Limit the decimal to 5 after the decimal point
        firstNumber = Number(firstNumber.toFixed(5));
        } 
        history.textContent = [firstNumber, operationValue].join("");
        inputUser.value = firstNumber; //update the display!
    }
    operator = operationValue; //replace the previous operator with current
    waitingForNum = true;
}

//oeprations

function cal(first, operator, second){
    if(operator === "÷" && second === 0){
        return Infinity;
    }
    switch(operator){
        case "+":
            return first + second;
            break;
        case "-":
            return first - second;
            break;
        case "÷":
            return first/second;
            break;
        case "X":
            return first*second;
            break;
        default:
            return "Error";
    }
};

equal.addEventListener('click', () =>{
    if(!operator){
        return inputUser.value = "Bruh!?";
    }
        secondNumber = parseFloat(inputUser.value);
        let result = cal(firstNumber, operator, secondNumber);
    if(isNaN(result)){
        inputUser.value = "Input A Number";
        return;
    }
    if (!Number.isFinite(result)) {
        inputUser.value = "You can't divide by 0";
        history.textContent = "";
        operator = "";
        waitingForNum = true;
        return;
    }
    if (result % 1 !== 0) {
    result = Number(result.toFixed(5));
    } 
        inputUser.value = result;
        history.textContent = inputUser.value;
        firstNumber = result;
        secondNumber = 0;
        operator = "";
        waitingForNum = true;
})

deleteButton.addEventListener('click', ()=>{
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    history.textContent = "";
    inputUser.value = "";
})
