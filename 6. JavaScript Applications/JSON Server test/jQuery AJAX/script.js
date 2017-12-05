const mainElement = document.getElementById('root');
const url = 'http://localhost:3000/people';

function getPeople () {
    $.getJSON(url, function  (response) {
        var people = response;

        var itemTemplate = document.createElement('li');
        var list = document.createElement('ul');

        people.forEach(person => {
            var li = itemTemplate.cloneNode(true);
            li.innerHTML = `${person.name} is ${person.gender} and is ${person.age} years old`;
            list.appendChild(li);
        });

        mainElement.appendChild(list);
    });   
}

function addPeople () {
    var personObj = {
        name: 'John',
        age: 42,
        gender: 'male',
        id: 6
    };

    $.ajax({
        url: url,
        method: 'POST',
        "content-type": "application-json",
        data: personObj
    });    

}

addPeople();
//getPeople();
