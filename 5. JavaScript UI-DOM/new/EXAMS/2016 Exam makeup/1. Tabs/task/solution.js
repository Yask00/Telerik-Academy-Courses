function solve() {
    return function (selector, tabs) {
        var container = document.querySelector(selector);
        var len = tabs.length;
        var i;

        var navLi = document.createElement('li');
        var navLink = document.createElement('a');
        navLi.appendChild(navLink);

        var contentLi = document.createElement('li');
            contentLi.className += 'tab-content';
        var contentP = document.createElement('p');    
        var contentA = document.createElement('button');
            contentA.className += 'btn-edit';
            contentA.innerHTML = 'Edit';
        contentLi.appendChild(contentP);        
        contentLi.appendChild(contentA);        

        var navigation = document.createElement('ul');
        navigation.className += 'tabs-nav';

        var contents = document.createElement('ul');
            contents.className += 'tabs-content';

        for (i = 0; i < len; i+=1) {
                navLink.innerHTML = tabs[i].title;
                navLink.className = 'tab-link';
                navLink.setAttribute('tab-index', i);

            navigation.appendChild(navLi.cloneNode(true)); //container.appendChild(newLi);    
        }

        for (i = 0; i < len; i+=1) {
            contentP.innerHTML = tabs[i].content;

            contents.appendChild(contentLi.cloneNode(true));
        }

        container.appendChild(navigation);
        container.appendChild(contents);

        //after creation FOR SURE
        var firstTabContent = document.getElementsByClassName('tab-content')[0];
        firstTabContent.className += ' visible';

        //USING THE NEW ADDED tab-index for the whole UL with class tabs-nav
        var ContentTabs = [].slice.call(document.getElementsByClassName('tab-content'));

        navigation.addEventListener('click', function  (e) {
            var index = +(e.target.getAttribute('tab-index'));

            for ( i = 0; i < ContentTabs.length; i+=1) {
                if (index !== i) {
                    ContentTabs[i].className = 'tab-content';
                } else {
                    ContentTabs[i].className = 'tab-content visible';
                }                
            }
        });

        contents.addEventListener('click', function  (e) {
            if (e.target.tagName !== 'BUTTON') {
                return;
            }

            //IF on button
            var target = e.target;
            var parent = target.parentElement; // in this case LI with class visible
            var content = parent.firstChild.innerHTML; // text in <p>

            if (target.innerHTML === 'Edit') {
                target.innerHTML = 'Save';
                
                var editArea = document.createElement('textarea');
                editArea.className += 'edit-content';
                editArea.value = content;
                parent.appendChild(editArea); //Textarea on bottom after p and button
            }
            else if(target.innerHTML === 'Save'){
                target.innerHTML = 'Edit';
                parent.firstChild.innerHTML = parent.lastChild.value; //p takes value from textarea
                parent.lastChild.remove(); //li removes textarea
            }
        });


        //TRICKY SPOTS
        //  add tab-index to all links on top to change Tabs VALUE to visible
        //  set remove editarea with one with click --> if elseif
    };
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}