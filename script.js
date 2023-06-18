

const divContainer = document.createElement('div');
const body = document.querySelector('body');

body.appendChild(divContainer);

divContainer.classList.add('container');
const arraySize = 16;

//this loop creates 16 new rows in the div container
for (i=0; i<arraySize; i++){
    const divRow = document.createElement('div');
    //this loop fills each row with 16 divs
    for (j=0; j<arraySize; j++){
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