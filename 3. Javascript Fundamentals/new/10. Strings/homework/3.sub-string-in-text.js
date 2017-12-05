function solve (args) {
  var searchedWord = args.shift();
  var text = args [0];
  var counter = 0;
  
  console.log(searchString(text, searchedWord));
  

  function searchString (word, wordToSearch) {
      
    var regExp = /wordToSearch/gi; //new RegExp (wordToSearch, 'gi');
    return (word.match(regExp) || []).length;
    }
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);