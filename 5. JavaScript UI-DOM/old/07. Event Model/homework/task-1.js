function solve() {
  return function (selector) {

    //•	If an id is provided, select the element
    if (typeof (selector) === 'string') {
      selector = document.getElementById(selector);
    //Throws if:The provided DOM element is non-existant
    if (!selector) {
        throw new Error();
      }
    }
    //Throws if The id is neither a string nor a DOM element
    else if (!(selector instanceof HTMLElement)) {
      throw new Error();
    }
    //-------------------------------------------------------------------

    //Finds all elements with class button or content within the provided element 
    var buttons = document.querySelectorAll('.button'),
      len = buttons.length, i;
    //Change the content of all .button elements with "hide"
    for (i = 0; i < len; i += 1) {
      buttons[i].innerHTML = 'hide';
    }
    //-------------------------------------------------------------------

    function clickEvent(ev) {
      var target = ev.target,
        nextSibling = target.nextElementSibling;
      //•	When a .button is clicked:   
      if (target.className === 'button') {
        while (nextSibling) {
          if (nextSibling.className === 'content') {
            
            if (nextSibling.style.display === 'none') {
              nextSibling.style.display = '';
              target.innerHTML = 'hide';
            } 
            else {
              nextSibling.style.display = 'none';
              target.innerHTML = 'show';
            }
            break;
          } 

          else if (nextSibling.className === 'button') {
            break;
          }

          nextSibling = nextSibling.nextElementSibling;
        }
      }
    }

    selector.addEventListener('click', clickEvent);

  };
}

module.exports = solve;