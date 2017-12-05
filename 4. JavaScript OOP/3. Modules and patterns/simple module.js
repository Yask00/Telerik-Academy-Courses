const school = (function (){
    const people = [];

    function addPerson (name, age, gender) {
        if (typeof name !== 'string') {
            throw Error (`Name should be string`);
        }

        if (!name.match(/^[A-Z][a-z]*$/)) {
            throw Error (`Name should be valid`);
        }
        //can add more validations

        people.push({
            name: name,
            age: age,
            gender: gender
        });
    }

    function getPeople () {
        //return people;

        //deep copy
        return people.map(p => {
            return {
                name: p.name,
                age: p.age,
                gender: p.gender
            };
        });
    }

    return {
        add: addPerson,
        get: getPeople
    };
})();

school.add('Yasko', 30, 'male');
let schoolMembers = school.get();
schoolMembers[0].name = 'In valid';
console.log(schoolMembers);

//deep copy
schoolMembers = school.get();
console.log('------------');
console.log(schoolMembers);