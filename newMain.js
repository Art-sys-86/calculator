class Calculator {
constructor(inputElement, historyLog) {
    this.inputElement = inputElement;
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operator = null;
    this.waitingForNum = false;
    this.historyLog = historyLog;
}

clear(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operator = null;
    this.historyLog.textContent = "";
    this.inputElement.value = "";
    this.waitingForNum = false;
}

cal(first, operator, second){
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

appendDigits(value, maxLength = 15){
    if (value === "." && this.inputElement.value.includes(".")) return;
    //Making sure it doesnt exceed maxLength set
    if(this.inputElement.value.length >= maxLength){
        return;
    };
    switch(this.waitingForNum){
        case true:
            this.inputElement.value = value;
            this.waitingForNum = false;
            break;
        default:
            this.inputElement.value += value;
    };

}

chooseOperation(operationValue){
    const inputValue = parseFloat(this.inputElement.value)
    if(isNaN(this.firstNumber)){
        return this.inputElement.value = "Are we deadass?🥀";
    }
    if(this.operator && this.waitingForNum){
        this.operator = operationValue;
        return;
    }
    
    if(!this.operator){
        this.firstNumber = inputValue;
    }
    
    else if(this.operator){
        this.secondNumber = inputValue;
        this.firstNumber = this.cal(this.firstNumber, this.operator, this.secondNumber);
        if (this.firstNumber % 1 !== 0) { 
        this.firstNumber = Number(this.firstNumber.toFixed(5));
        } 
        this.historyLog.textContent = [this.firstNumber, operationValue].join("");
        this.inputElement.value = this.firstNumber; 
    }
    this.operator = operationValue;
    this.waitingForNum = true;
}

equal(){
    if(!this.operator){
        return this.inputElement.value = "Bruh!?";
    }
    this.secondNumber = parseFloat(this.inputElement.value);
    let result = this.cal(this.firstNumber, this.operator, this.secondNumber);
    
    if(isNaN(result)){
        this.inputElement.value = "Input A Number";
        return;
    }
    
    if (!Number.isFinite(result)) {
        this.inputElement.value = "You can't divide by 0";
        this.historyLog.textContent = ""; 
        this.operator = null;
        this.waitingForNum = true;
        return;
    }
    
    if (result % 1 !== 0) {
        result = Number(result.toFixed(5));
    } 
    
    this.inputElement.value = result;
    this.historyLog.textContent = this.inputElement.value;
    this.secondNumber = 0;
    this.operator = null;
    this.waitingForNum = true;
}
}


const digits = document.getElementsByClassName("digit");
const operators = document.getElementsByClassName("operator");
const equal = document.getElementById("equal");
const deleteButton = document.getElementById(`del`);
const inputUser = document.querySelector(`input`);
const historyLog = document.getElementById('historyLog');
const calculator = new Calculator(inputUser, historyLog);


for(let digit of digits){
    digit.addEventListener('click', (e) => {
        calculator.appendDigits(e.target.dataset.value);
    })
};

for (let operatorBtn of operators) {
    operatorBtn.addEventListener('click', (e) => {
        calculator.chooseOperation(e.target.dataset.value);
    });
}

equal.addEventListener('click', () => {
    calculator.equal();
});

deleteButton.addEventListener('click', () => {
    calculator.clear();
});


