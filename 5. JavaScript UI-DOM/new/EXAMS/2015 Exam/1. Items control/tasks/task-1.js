/* globals module, document, HTMLElement, console */

function solve() {
  return function (selector, isCaseSensitive) {
    var element = selector; //querySelector(selector); forgot document. !!!!!

    //Get the selected element from DOM
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (!element || !(element instanceof HTMLElement)) {
      throw new Error("Invalid HTML element or selector");
    }

    var fragment = document.createDocumentFragment();
    isCaseSensitive = !!isCaseSensitive;

    //--------------------ADDING ELEMENTS--------------------
    var addControls = document.createElement('div');
    addControls.className = 'add-controls';

    var labelAdd = document.createElement('label');
    labelAdd.innerHTML = 'Enter text: ';

    var tbAdd = document.createElement('input');
    labelAdd.appendChild(tbAdd);

    var btnAdd = document.createElement('a');
    btnAdd.className = 'button';
    btnAdd.innerHTML = 'Add';
    btnAdd.style.display = "inline-block";
    btnAdd.addEventListener('click', onAddButtonClick, false);

    addControls.appendChild(labelAdd); //LABEL with INPUT
    addControls.appendChild(btnAdd);   // BUTTON  

    //--------------------SEARCH ELEMENTS--------------------
    var searchControls = document.createElement('div');
    searchControls.className = 'search-controls';

    var labelSearch = document.createElement('label');
    labelSearch.innerHTML = 'Search: ';

    var tbSearch = document.createElement('input');
    tbSearch.addEventListener('input', onSearchTextboxInput, false);

    labelSearch.appendChild(tbSearch);
    searchControls.appendChild(labelSearch);
    //--------------------RESULT ELEMENTS--------------------
    var resultControls = document.createElement('div');
    resultControls.className = 'result-controls';

    var listResults = document.createElement('ul');
    listResults.className = 'items-list';

    var listItemTemplate = document.createElement('li');
    listItemTemplate.className = 'list-item';

    var btnDeleteListItem = document.createElement('a');
    btnDeleteListItem.className = 'button button-delete';
    btnDeleteListItem.innerHTML = 'X';

    var textListItem = document.createElement("strong");

    listItemTemplate.appendChild(btnDeleteListItem);
    listItemTemplate.appendChild(textListItem);

    //on list results, not btnDeleteListItem
    listResults.addEventListener('click', onListResultClick, false);
    resultControls.appendChild(listResults); //EMPTY UL at begginig

    var listItems = document.getElementsByClassName('list-item'); //ALL LIs
    //--------------------END CONTROLS--------------------

    //Add elements function 
    function onAddButtonClick(ev) {
      if (ev.target.className === 'button') {
        var val = tbAdd.value;
        tbAdd.value = '';

        textListItem.innerHTML = val;
        listResults.appendChild(listItemTemplate.cloneNode(true)); //IMPORTANT
      }
    }

    //show on SEARCH case sensitive or insensitive
    function onSearchTextboxInput() {
      var i,
        len,
        text,
        pattern = tbSearch.value;

      //IF case insensitive    
      if (!isCaseSensitive) {
        pattern = pattern.toLowerCase();
      }

      for (i = 0, len = listItems.length; i < len; i += 1) {
        text = listItems[i].getElementsByTagName('strong')[0].innerHTML;

        if (!isCaseSensitive) {
          text = text.toLowerCase();
        }

        if (text.indexOf(pattern) < 0) {
          listItems[i].style.display = "none";
        }
        else {
          listItems[i].style.display = "";
        }
      }
    }

    //delete items
    function onListResultClick(ev) {
      var btn = ev.target,
        parent;

      if (btn.className.indexOf('button-delete') < 0) {
        return;
      }

      parent = btn;

      while (parent && parent.className.indexOf('list-item') < 0) {
        parent = parent.parentNode;
      }

      if (!parent) {
        return;
      }

      listResults.removeChild(parent); //UL remove LI Item
    }



    fragment.appendChild(addControls);
    fragment.appendChild(searchControls);
    fragment.appendChild(resultControls);

    element.className += 'items-control'; //WAS NOT TOLD IN TASK DESCRIPTION
    element.appendChild(fragment);

  };
}

//  60/100 with only ADD SEARCH RESULT CONTROLS
//  90/100 with ADD and Search functions

//module.exports = solve;