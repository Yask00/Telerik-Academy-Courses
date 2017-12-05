//var url = "http://telerikacademy.com"; //does not work
//same origin policy error

var url = "http://localhost..."; //     {"data": []}
// local server

function getAll () {
    $.getJSON("http://localhost...", function (response) {
        var people = response.data;

        var itemTemplate = document.createElement('li');
        var list = document.createElement('ul');

        people.forEach(person => {
            var li = itemTemplate.cloneNode(true);
            li.innerHTML = person.name;
            list.appendChild(li);
        });

        document.getElementById('print').appendChild(list);    
    });
}


function addNew () {
    var name = 'John';
    var age = Math.random() * 150;

    $.ajax({
        url: "localhot:...",
        method: "POST",
        "content-type": "application-json", //without ""
        data: JSON.stringify({name, age}),
        header: {
            //headers
        },
        success: function  () {
            getAll();
        }
    });
}   


var btn;
window.onload = function () {
    getAll();
    btn = document.getElementById('btn-add');
    btn.addEventListener('click', function  () {
        addNew();
    }, false);
};