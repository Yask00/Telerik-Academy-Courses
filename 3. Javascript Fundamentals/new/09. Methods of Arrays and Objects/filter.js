function isBigEnough (value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

//uses filter() to create a filtered json of all elements with non-zero, numeric id.
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id)) {
    return true;
  } 
  invalidEntries++;
  return false; 
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);