// task number 1. 
const playerTitleColor =document.getElementById('player-title');
playerTitleColor.style.color ='white';

//task number 2.
const topPlayerBackgroundColor =document.getElementById('background-color');
topPlayerBackgroundColor.style.backgroundColor ="rgb(34, 172, 172)";

// task number 3.
document.getElementById('ul-button').addEventListener('click', function(){
    const li =document.createElement('li');
    li.innerText ='Home-4';

    const parent =document.getElementById('ul-list');
    parent.appendChild(li);
});
//task number 4. 
document.getElementById('ul-input-button').addEventListener('click', function(){
    const inputField =document.getElementById('ul-input');
    let userInputNumber =inputField.value;

    let userNumber= 0;
    for(const number of userInputNumber){
        userNumber = number +1;
    }

})