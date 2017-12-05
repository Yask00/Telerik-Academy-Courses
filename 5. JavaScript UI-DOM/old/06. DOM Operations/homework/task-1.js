function solve() {
    //Create a function that takes an id or DOM element and an array of contents
  return function(element, contents) {
      
      var i,
      domElement,
      len = contents.length,
      content,
      div,
      currentDiv,
      docFragment = document.createDocumentFragment()
      
      ;
    //Throws if:The provided first parameter is neither string or existing DOM element
      if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
          throw new Error();
      }
    //If an id is provided, select the element
      if (typeof element === 'string') {

          domElement = document.getElementById(element);
    // Throws if:
    //The provided id does not select anything (there is no element that has such an id)
          if (!domElement) {
              throw new Error();
          }
      }
      else{
            domElement = element;
      }
     //-----------------------------------------

      for ( i = 0; i < len; i +=1) {
          content = contents[i];
        //Throws if:
        //Any of the function params is missing
        //Any of the function params is not as described
        //Any of the contents is neither string nor number
        //In that case, the content of the element must not be changed
          if (typeof content !== 'string' && typeof content !== 'number') {
               throw new Error();
          }
      }
    //The function must remove all previous content from the DOM element provided
      domElement.innerHTML = ''; 
      div = document.createElement('div');

     // Add divs to the element
     //Each div's content must be one of the items from the contents array
      for ( i = 0; i < len; i+=1) {
          currentDiv = div.cloneNode(true);
          currentDiv.innerHTML = contents[i];
          docFragment.appendChild(currentDiv); 
      }

      domElement.appendChild(docFragment);
    };
 }

module.exports = solve();