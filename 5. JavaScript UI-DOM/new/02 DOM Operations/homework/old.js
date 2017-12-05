function solve() {
  return function(element, contents) {
      
      var i,
      domElement,
      len = contents.length,
      content,
      div,
      currentDiv,
      docFragment = document.createDocumentFragment();

      if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
          throw new Error();
      }

      if (typeof element === 'string') {
          domElement = document.getElementById(element);

          if (!domElement) {
              throw new Error();
          }
      }
      else{
            domElement = element;
      }

      for ( i = 0; i < len; i +=1) {
          content = contents[i];

          if (typeof content !== 'string' && typeof content !== 'number') {
               throw new Error();
          }
      }

      domElement.innerHTML = '';
      div = document.createElement('div');

      for ( i = 0; i < len; i+=1) {
          currentDiv = div.cloneNode(true);
          currentDiv.innerHTML = contents[i];
          docFragment.appendChild(currentDiv); 
      }

      domElement.appendChild(docFragment);
    };
 }

module.exports = solve();