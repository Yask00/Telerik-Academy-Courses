function redirectPage () {
    window.location.replace("https://www.askideas.com/media/08/Kung-Fu-Fighting-Funny-Rabbit-Meme.jpg"); 
}

setTimeout(function createDiv () {
   var root = document.getElementById('root'); 
   var div = document.createElement('div');
   div.style.width = '240px';
   div.style.height = '20px';
   div.innerHTML = 'WAIT FOR IT';
   div.style.textAlign = 'center';
   div.style.border = '1px solid black';
   div.style.backgroundColor = 'lightgrey';
   root.appendChild(div);
}, 1000);

var promise = new Promise((resolve, reject) => {
    setTimeout(function () {
            resolve();
            reject('Eroor');
        }, 3000);
});

promise.then(redirectPage)
        .catch(err => console.log(err));

//createDiv();
//setTimeout(redirectPage, 5000);