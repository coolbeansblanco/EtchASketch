const body = document.querySelector('body');
const button = document.createElement('button');

body.appendChild(button);

button.textContent = "Resize";
button.addEventListener('click', getNewArraySize);


makeArray(16);

function makeArray(size){
    //creates divContainer to attach to body
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    //this loop creates 'size' amount of new rows in the div container
    for (i=0; i<size; i++){
        const divRow = document.createElement('div');
        //this loop fills each row with 'size' amount of divs
        for (j=0; j<size; j++){
            const div = document.createElement('div');
            div.addEventListener('mouseenter', ()=>{
                div.classList.add('hover');
            })
            div.addEventListener('mouseleave', ()=>{
                div.classList.remove('hover');
            })
            divRow.appendChild(div);
        }
        divContainer.appendChild(divRow);
    }
    body.appendChild(divContainer);
}

function getNewArraySize(){
    input = prompt("Enter size of Etch-A-Sketch (must be between 1-100): ");
    //user input requirements
    if (input !== NaN && input > 0 && input < 101){
        body.removeChild(body.lastChild);
        makeArray(input);
    }
    else alert("Invalid input.");
}