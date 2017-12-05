//works with only 3 parameters

//function mmsa (args) {
//    let firstNUmber = parseFloat(args[0]),
//        secondNUmber = parseFloat(args[1]),
//        thirdNUmber = parseFloat(args[2]),
//        sum = (firstNUmber + secondNUmber + thirdNUmber).toFixed(2),
//        avg = ((firstNUmber + secondNUmber + thirdNUmber) / 3).toFixed(2),
//        max = Math.max(...args).toFixed(2),
//        min = Math.min(...args).toFixed(2);
//
//        console.log(`min=${min}`);
//        console.log(`max=${max}`);
//        console.log(`sum=${sum}`);
//        console.log(`avg=${avg}`);
//}
//
//mmsa(['2', '-1', '4']);

function mmsa(args) {
    var min = +args[0], max = +args[0], sum = 0, avg = 0, count = 0;
    
    count = args.length;
    for(var i = 0; i < args.length; i += 1) {
        if (min > +args[i]) {
            min = +args[i];
        }
        if (max < +args[i]) {
            max = +args[i];
        }
        sum += +args[i];
    }
    avg = sum / count;
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}