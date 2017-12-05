function* idMaker () {
    var index = 0;
    while (index < 3){
        yield index++;
    }
}

var gen = idMaker();

console.log(gen.next().value); //0
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //undefined

//--------------------------------------------------

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield 'text';
  yield i + 10;
  
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // text
console.log(gen.next().value); // 20