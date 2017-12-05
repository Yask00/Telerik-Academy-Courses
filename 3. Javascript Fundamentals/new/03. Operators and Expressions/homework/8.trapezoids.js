function Trapezoids (args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var h = parseFloat(args[2]);

    var area =  ( ((a + b) * h ) / 2).toFixed(7);
    console.log(area);
}