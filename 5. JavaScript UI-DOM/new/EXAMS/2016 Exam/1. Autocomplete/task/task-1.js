/* globals document, window, console */

function solve() {
    return function(selector, initialSuggestions) {

        var element = document.querySelector(selector);
        initialSuggestions = initialSuggestions || [];
        
        var tbPattern = document.getElementsByClassName('tb-pattern')[0]; //INPUT
        var suggestionItems = element.getElementsByClassName("suggestion");//All (LI > A)
        var suggestionsList = element.getElementsByClassName("suggestions-list")[0]; //UL
        var btnAdd = element.getElementsByClassName("btn-add")[0]; //ADD button
        var pattern = "";

        //CREATE SUGGESTION TEMPLATE
        var suggestionItemTemplate = document.createElement('li');// LI class suggestion
            suggestionLinkTemplate = document.createElement('a'); // A class suggestion-link
            
            suggestionItemTemplate.className = 'suggestion';
            suggestionLinkTemplate.className = "suggestion-link";
            suggestionLinkTemplate.href = "#";
            suggestionItemTemplate.appendChild(suggestionLinkTemplate);
            suggestionItemTemplate.style.display = "none"; //all Hidden at start

        var usedSuggestions = {}; //OBJECT with suggestions in LOWER toLowerCase TRUE FALSE

        //FILL THE UL WITH SUGGESTIONS FROM TEMPLATE
        for (var i = 0, len = initialSuggestions.length; i < len; i+=1) {
            var suggestionString = initialSuggestions[i];
                if (!usedSuggestions[suggestionString.toLowerCase()]) { //case INSENSITIVE
                    suggestionLinkTemplate.innerHTML = suggestionString; // A
                    var newSuggestion = suggestionItemTemplate.cloneNode(true); //LI -> A
                    suggestionsList.appendChild(newSuggestion); //put into the UL
                    usedSuggestions[suggestionString.toLowerCase()] = true; //update OBJECT
                }
        }    
        //  42/100 up to here

        suggestionsList.style.display = "none";

        //ADDING ELEMENTS TO SUGGESTION suggestionsList
        btnAdd.addEventListener('click', function () {
            var value = tbPattern.value;
            tbPattern.value = '';

            suggestionsList.style.display = "none";

            if (!usedSuggestions[value.toLowerCase()]) {
                suggestionLinkTemplate.innerHTML = value;
                suggestionsList.appendChild(suggestionItemTemplate.cloneNode(true));
                usedSuggestions[value.toLowerCase()] = true;
            }
        });
        //  57/100 up to here

        //SHOW HIDE SUGGESTIONS based on input pattern
        tbPattern.addEventListener('input', function  () {
            var suggestionItems = element.getElementsByClassName("suggestion"); //get all LIs
            
            var len = suggestionItems.length,
                i,
                suggestionItem,
                suggestionText;

            pattern = this.value.toLowerCase(); // INPUT VALUE to toLowerCase

            if (pattern === '') {
                suggestionsList.style.display = "none";
                return;
            }    
            suggestionsList.style.display = "";

            for (i = 0; i < len; i+=1) { //LOOP Through existing suggestions
                suggestionItem = suggestionItems[i];
                suggestionText = suggestionItem.getElementsByClassName("suggestion-link")[0]; //get value from A
                
                if (suggestionText.innerHTML.toLowerCase().indexOf(pattern) >= 0) { //match pattern with As
                    suggestionItem.style.display = ""; //visible
                }
                else {
                    suggestionItem.style.display = "none"; //not visible
                }
            }

        });
        //  71/100 up to here

        //SELCET SUGGESTION autofill INPUT
        suggestionsList.addEventListener('click', function  (ev) {
            var btn = ev.target,
                text;

            if (btn.className.indexOf('suggestion-link') < 0) {
                return; //not link selected
            }    

            text = btn.innerText; //innerHTML was not working in browser!!!
            tbPattern.value = text;
            ev.preventDefault();
        });
        //  100/100
    };
}

module.exports = solve;