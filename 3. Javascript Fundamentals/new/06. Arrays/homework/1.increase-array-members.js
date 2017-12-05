function increase (args) {
   let inputNUmber = +args[0];

    for (var i = 0; i < inputNUmber; i+=1) {
        console.log(i * 5);
    }

    //let inputNUmber = +args[0],
    //counter = 0;
    //while (counter < inputNUmber) {
    //    console.log(counter * 5);
    //    counter += 1;
    //}
}


increase(['5']);