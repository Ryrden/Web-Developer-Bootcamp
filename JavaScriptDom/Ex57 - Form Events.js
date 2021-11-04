// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
const inputTxt = document.querySelector('#product');
const inputNum = document.querySelector('#qty');

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputText = inputTxt.value;
    const inputNumber = inputNum.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${inputNumber} ${inputText}`;
    list.appendChild(newLi);
    inputTxt.value = inputNum.value = "";
})