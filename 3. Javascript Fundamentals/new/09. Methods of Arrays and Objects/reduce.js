var sum = [1, 2, 3, 4].reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function(allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }