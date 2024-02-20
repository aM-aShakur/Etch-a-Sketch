"use strict";
const button = document.createElement('button');
function howMany() {
    const number = prompt("Give a number to determine the scale.");
    if (Number(number) > 50) {
        prompt('Number is to high please pick a number below 50.');
    }
    else
        console.log(number);
    return Number(number);
}
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
