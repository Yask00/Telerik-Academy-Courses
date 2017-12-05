//var url = "http://telerikacademy.com"; //does not work
//same origin policy error

var url = "http://localhost..."; //     {"data": []}
// local server

function getAll () {
    //1. create the xhr
    var xhr = new XMLHttpRequest();

    //2. open the xhr to url and verb
    xhr.open("GET", url, true);

    //3. setup
        //3.1 add headers

    //4. attach to ready event
    xhr.onreadystatechange = function  () {
        if (xhr.readyState !== 4) {
            return;
        }

        switch(0 | (xhr.status / 100)){
            case 2: console.log(xhr.responseText);   //{"data": []}
            var people = JSON.parse(xhr.responseText).data; // {data: []}

            var itemTemplate = document.createElement('li');
            var list = document.createElement('ul');

            people.forEach(person => {
                var li = itemTemplate.cloneNode(true);
                li.innerHTML = person.name;
                list.appendChild(li);
            });
            break;
            case 4:
            case 5: alert(xhr.responseText); 
            break;
        }

        document.getElementById('print').appendChild(list);
    };

    //5. send the request
    xhr.send();
}

function addNew () {
    var name = 'John';
    var age = Math.random() * 150;

    //1. create the xhr
    var xhr = new XMLHttpRequest();

    //2. open the xhr to url and verb
    xhr.open("POST", url, true);

    //3. setup
        //3.1 add headers
    xhr.setRequestHeader('Content-Type', 'application/json');

    //4. attach to ready event
    xhr.onreadystatechange = function  () {
        if (xhr.readyState !== 4) {
            return;
        }

        switch(0 | (xhr.status / 100)){
            case 2:
                    getAll(); //refresh all
            break;
            case 4:
            case 5: alert(xhr.responseText); 
            break;
        }

        document.getElementById('print').appendChild(list);
    };

    //5. send the request
    var body = JSON.stringify({
        name, 
        age
    });

    xhr.send(body);
}   


var btn;
window.onload = function () {
    getAll();
    btn = document.getElementById('btn-add');
    btn.addEventListener('click', function  () {
        addNew();
    }, false);
};