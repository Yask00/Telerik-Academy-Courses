function solve (args) {
    var arr = args;

    var toRemove = arr[0];

    Array.prototype.Remove = function (toRemove) {
        var newArray = [];

        for (var i in this) {
            if (this[i] !== toRemove && typeof this[i] !== 'function') {
                newArray.push(this[i]); 
            }
        }
        return newArray;
    };
    
    console.log(arr.Remove(toRemove).join('\n'));
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);