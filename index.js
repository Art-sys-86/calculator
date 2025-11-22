const inputUser = document.getElementsByClassName(`input`);
const numOne = document.getElementById(`one`);
const numTwo = document.getElementById(`two`);
const delC = document.getElementById(`del`);

console.log(inputUser);

let firstNumber = '';
let secondNumber = '';
let operator = '';

const maxLength = 12;

numOne.addEventListener('click', () => {
    inputUser.value = 1;
})


