const root = document.getElementById('root');

let clickCount = 0;

const createP = (function () {
   let counter = 0;

   return function  () {
       const p = document.createElement('p');
       counter += 1;
       p.innerHTML = '' + counter;
       root.appendChild(p);
   };
}());

let promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
});

promise
        .then(value => {
            createP();
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000);
            });
        })
        .then(value => {
            createP();
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000);
            });
        })
        .then(value => {
            createP();
        });