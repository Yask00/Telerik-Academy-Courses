const mainElement = document.getElementById('root');
const url = 'http://localhost:3000/people';


function getPeople() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        switch (0 | (xhr.status / 100)) {
            case 2:
                var people = JSON.parse(xhr.responseText);
                var itemTemplate = document.createElement('li');
                var list = document.createElement('ul');

                people.forEach(person => {
                    var li = itemTemplate.cloneNode(true);
                    li.innerHTML = `${person.name} is ${person.gender} and is ${person.age} years old`;
                    list.appendChild(li);
                });
                break;
            case 5: alert('Error'); break;
            default:
                break;
        }
        mainElement.appendChild(list);
    };

    xhr.send();
}

function addPeople () {
    var name = 'John',
        age = 42,
        gender = 'male',
        id = 6;

    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    var objToSend = JSON.stringify({
        name,
        age,
        gender,
        id
    });

    xhr.send(objToSend); 
}


addPeople();
getPeople();


