let text = document.getElementById('text');

function makeBig () {
    text.style.fontSize = '100px';
    setTimeout(makeSmall, 1000); //The function is only executed once. 
    //If you need to repeat execution, use the setInterval() method.
}

function makeSmall () {
    text.style.fontSize = '15px';
    setTimeout(makeBig, 1000);
}

makeSmall(); //TO WORK MUST CALL ONE OF THE TWO