// create a button that prompts the user
// prompt determines the size of the grid

const button: HTMLElement = document.createElement('button')

// get prompt from user
// grid size can be anywhere between 1 - 50
function howMany() {
    const number: string | null  = prompt("Give a number to determine the scale.")
    
    if (Number(number) > 50) {
        prompt('Number is to high please pick a number below 50.')
    } else 
    console.log(number)
    return Number(number)
}

// add the func howMany to button
// add the button to the dom
button.addEventListener('click', howMany);
button.textContent = ("Click to begin"); 
document.body.appendChild(button)

// const mainGrid: HTMLElement = document.createElement('mainGrid').classList.add('container')

/** function createDiv (num : number) {
    for (let i = 0; i < num; i++) {
        const newDiv: HTMLElement = document.createElement(`div${i}`)
        newDiv.classList.add('container')
        mainGrid.appendChild(newDiv)
    } 
    
}
***/


