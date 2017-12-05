function solve (args) {
    var width = +args[0],
        height = +args[1];
        area = (width * height).toFixed(2),
        perimeter = ((width * 2) + (height * 2)).toFixed(4); // toFixed is numbers after ,

        console.log(area + ' ' + perimeter);
}

solve(['2.5', '3']);