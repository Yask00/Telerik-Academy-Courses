import 'jquery';

const startButton = $('<button />', {id: 'btn-start'})
        .html('Start the app')
        .prependTo($('body'));

startButton.on('click', function  () {
    Promise.all([
        System.import('data'),
        System.import('seed-data'),
        System.import('person-component')
    ]).then(function  (modules) {
        //console.log(modules);
        const [data, dataProvider, personComponent] = modules;
        //console.log(data);
        //console.log(seedData);
        //console.log(personComponent);
        dataProvider.seed();
        personComponent.attachEvents();
    });
});




