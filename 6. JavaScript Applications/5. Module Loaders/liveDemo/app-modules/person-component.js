import 'jquery'; //jquery exports nothing
import * as db from 'data';

export function attachEvents() {
    $('#btn-add').on('click', function () {
        const newPerson = {
            name: $('#person-name').val(),
            age: $('#person-age').val()
        };

        db.add(newPerson);
    });


    $('#btn-all').on('click', function () {
        const peopleHTML = db.all().map(p => `<li>${p.name} - ${p.age}</li>`);

        $('#list-all').html(peopleHTML.join(''));
    });
}