module.exports = function () {
  

  //id or DOM element and an array of contents
  return function (element, contents) {
    var container,
      i,
      len = contents.length,
      dfrag = document.createDocumentFragment();

    //ELEMENT SELECTION
    if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
      throw new Error();
    }

    if (typeof element === 'string') {
      container = document.getElementById(element);
      if (!container) {
        throw new Error();
      }
    }
    else {
      container = document.getElementsByTagName(element.tagName)[0];//Without tagName NOT WORKING
      //container = element WORKING
    }

    //CONTENTS VERIFICATION
    for (i = 0; i < len; i += 1) {
      var content = contents[i];

      if (typeof content !== 'string' && typeof content !== 'number') {
        throw new Error();
      }
    }

    //CLEAR AND APPEND CONTENTS
    container.innerHTML = '';
    
    var newDiv = document.createElement('div');

    for (i = 0; i < len; i+=1) {
      var currentDiv = newDiv.cloneNode(true);
      currentDiv.innerHTML = contents[i];
      dfrag.appendChild(currentDiv); 
    }

    container.appendChild(dfrag);
  };
};




