function stringRepeat (ch, times) {
    str = '';  //without var or let goes to the global scope
    for (var i = 0; i < times; i+=1) {
        str += ch;
    }
    return str;
}

console.log(stringRepeat('-', 20));
console.log(str);
