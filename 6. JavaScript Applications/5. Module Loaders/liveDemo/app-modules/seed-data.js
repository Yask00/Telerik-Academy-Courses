import * as db from 'data';

export function seed() {
    db.add({ name: 'Pesho', age: 15 });
    db.add({ name: 'Mariya', age: 33 });
    db.add({ name: 'Gosho', age: 38 });
}

//$('body').html(JSON.stringify(db.all())); //test for jquery