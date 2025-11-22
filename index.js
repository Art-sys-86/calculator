const inputUser = document.getElementsByClassName(`.input`);
const numOne = document.getElementById(`one`);
const numTwo = document.getElementById(`two`);
const delC = document.getElementById(`del`);

let count = [];


numOne.addEventListener('click', () => inputUser.innerHTML += 1)
numTwo.addEventListener('click', () => inputUser.innerHTML += 2)

delC.addEventListener("click", () => {if(delete(textContent)){
    inputUser.innerHTML = 0;
}});



