let gosho, pesho;

function makePerson (fname, lname) {
    return{
        fname: fname,
        lname: lname,
        toString: function () {
            return this.fname + ' mfkin ' + this.lname;
        }
    };
}

gosho = makePerson ('Gosho', 'Goshov');
pesho = makePerson ('Pesho', 'Peshov');

console.log(gosho.toString());
console.log(pesho.toString());