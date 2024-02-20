"use strict";
// create a button that prompts the user
// prompt determines the size of the grid
const button = document.createElement('button');
// get prompt from user
// grid size can be anywhere between 1 - 50
function howMany() {
    const result = prompt("Pick a number between:\n1 and 50\nFor the grid size.");
    const number = Number(result);
    if (number > 0 && number < 51) {
        console.log(number);
        return number;
    }
    if (number <= 0 || number > 50) {
        return alert('Error:\nPick a number between\n1 and 50');
    }
}
// add the func howMany to button
// add the button to the dom
button.addEventListener('click', howMany);
button.textContent = ("Click to begin");
document.body.appendChild(button);
// const mainGrid: HTMLElement = document.createElement('mainGrid').classList.add('container')
/** function createDiv (num : number) {
    for (let i = 0; i < num; i++) {
        const newDiv: HTMLElement = document.createElement(`div${i}`)
        newDiv.classList.add('container')
        mainGrid.appendChild(newDiv)
    }
    
}
***/
