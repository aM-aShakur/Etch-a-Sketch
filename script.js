// create a container that holds the button 
// and text input from user
var container = document.createElement('container');
container.id = 'mainContainer';
container.setAttribute('style', 'border: solid black 2px;');
var textBox = document.createElement('p');
textBox.id = 'text';
textBox.innerHTML = ("Pick a number between:\n1 and 50\nFor the grid size.");
textBox.setAttribute('style', 'border: solid black 2px');
container.appendChild(textBox);
// input 
var input = document.createElement('input');
input.id = 'inputElement';
// input.setAttribute('style', 'border: solid 2px red;')
container.appendChild(input);
// create a button that prompts the user
// prompt determines the size of the grid
var button = document.createElement('button');
// get prompt from user
// grid size can be anywhere between 1 - 50
function howMany() {
    var _a;
    // input value
    var inputValue = (_a = document.getElementById('inputElement')) === null || _a === void 0 ? void 0 : _a.value;
    var number = Number(inputValue);
    if (number > 0 && number < 51) {
        // fill the div with the user's number
        textBox.textContent = number.toString();
    }
    if (number <= 0 || number > 50) {
        textBox.textContent = ('Error:\nPick a number between 1 and 50\nTry again!');
    }
}
var mainGrid = document.createElement('div').classList.add('mainGrid');
function createDiv(num) {
    num = Number(textBox.textContent);
    for (var i = 0; i < (num * num); i++) {
        var grid = document.createElement("div".concat(i));
        grid.classList.add('grid');
        mainGrid.appendChild(grid);
    }
}
createDiv(25);
// add the func howMany to button
// add the button to the dom
button.addEventListener('click', howMany);
button.textContent = ("Click Me");
// add the elements to the document body
document.body.append(container);
document.body.append(button);
document.body.append(textBox);
document.body.append(mainGrid);
