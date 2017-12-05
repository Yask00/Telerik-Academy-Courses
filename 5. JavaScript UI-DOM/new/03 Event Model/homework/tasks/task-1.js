
function solve(){
  return function (selector) {
      var container;

      //ELEMENT SELECTION
      if (typeof selector !== 'string' && !(selector instanceof HTMLElement)) {
          throw Error ();
      }

      if (typeof selector === 'string') {
          container = document.getElementById(selector);
          if (!container) {
              throw Error ();
          }
      }
      else{
          container = document.getElementsByTagName(selector.tagName)[0];
      }

    //SET all buttons to hide
    var buttons = document.querySelectorAll('.button'),
        len = buttons.length, i;

    for (i = 0; i < len; i += 1) {
       buttons[i].innerHTML = 'hide';
    }
    
    function clickEvent (ev) {
        var target = ev.target,
        nextSibling = target.nextElementSibling;
        //When a button is clicked
        if (target.className === 'button') {
            while (nextSibling) {
                //if content
                if (nextSibling.className === 'content') {
                    if (nextSibling.style.display === 'none') {
                        nextSibling.style.display = '';
                        target.innerHTML = 'hide'; //innerText NOT WORKING
                    }
                    else{
                        nextSibling.style.display = 'none';
                        target.innerHTML = 'show'; //innerText NOT WORKING
                    }
                    break;
                }
                //until button
                else if(nextSibling.className === 'button'){
                    break;
                }
                nextSibling = nextSibling.nextElementSibling;
            }
        }
    }   

    container.addEventListener('click', clickEvent);
  };
}

module.exports = solve;