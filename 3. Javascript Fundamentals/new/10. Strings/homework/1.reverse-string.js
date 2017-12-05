function solve (args) {
    let inputStr = args[0],
        outputStr = '',
        i;

    for ( i = inputStr.length - 1; i >= 0; i -= 1) {
        outputStr += inputStr[i];
    }

    console.log(outputStr);
}


solve([ 'sample' ]);
solve([ 'qwertytrewq' ]);


//old solution
//function solve(args) {
//	
//  var word = args[0];
//  
//  console.log(reverse(word));
//
//  function reverse (s) {
//    var o = '';
//
//    for (var i = s.length - 1; i >= 0; i-= 1) {
//      o += s[i];
//    }
//    return o;
//  }
//  
//  
//}