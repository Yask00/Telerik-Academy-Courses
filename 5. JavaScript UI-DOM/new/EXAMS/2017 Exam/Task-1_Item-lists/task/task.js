function solve() {

	return function(selector, defaultLeft, defaultRight) {
		
		var element = document.querySelector(selector);
		var df = document.createDocumentFragment();
		var i,len,value;
		var leftColumn = defaultLeft || []; //Array of strings
		var rightColumn = defaultRight || [];
		
		var columnContainer = document.createElement('div');
			columnContainer.className += 'column-container'; // for the two .column divs

		// .COLUMN DIVs
		var columnDiv = document.createElement('div');
			columnDiv.className += 'column';
		var columnDiv2 = document.createElement('div');
			columnDiv2.className += 'column';	

		var selectDiv = document.createElement('div');
			selectDiv.className += 'select';

		var selectInput = document.createElement('input');
			selectInput.type = 'radio';
			selectInput.name = 'column-select';
			selectInput.id = 'select-left-column';
			

		var selectLabel = document.createElement('label');
			selectLabel.innerHTML = 'Add here';
			selectLabel.htmlFor = 'select-left-column';

		selectDiv.appendChild(selectInput);	
		selectDiv.appendChild(selectLabel);	

		

		var list = document.createElement('ol');
		var listLi = document.createElement('li');
			listLi.className += 'entry';
		var listImg = document.createElement('img');
			listImg.className += 'delete';
			listImg.src = 'imgs/Remove-icon.png';
		
		for ( i = 0, len = leftColumn.length; i < len; i+=1) {
			var curLi = listLi.cloneNode(true);
			
			var curImg = listImg.cloneNode(true);
			var curText = document.createTextNode(leftColumn[i]);
			
			curLi.appendChild(curImg);
			curLi.appendChild(curText);
			list.appendChild(curLi);
		}

		columnDiv.appendChild(selectDiv.cloneNode(true));
		columnDiv.appendChild(list.cloneNode(true));
		columnContainer.appendChild(columnDiv); //the two select divs
		
		list.innerHTML = '';
		
		for (i = 0, len = rightColumn.length; i < len; i+=1) {

			var curLi2 = listLi.cloneNode(true);
			
			var curImg2 = listImg.cloneNode(true);
			var curText2 = document.createTextNode(rightColumn[i]);
			
			curLi2.appendChild(curImg2);
			curLi2.appendChild(curText2);
			list.appendChild(curLi2);
		}

		columnDiv2.appendChild(selectDiv.cloneNode(true));
		columnDiv2.appendChild(list.cloneNode(true));
		columnContainer.appendChild(columnDiv2); //the two select divs
		
		//BOTTOM
		var bottomInput = document.createElement('input');
			bottomInput.size = 40;
			bottomInput.autofocus = true;

		var addBtn = document.createElement('button');
			addBtn.innerHTML = 'Add';

		element.appendChild(columnContainer);
		element.appendChild(bottomInput);
		element.appendChild(addBtn);

		var selectedInput = document.getElementById('select-left-column');
		selectedInput.checked = true;

		element.addEventListener('click', function (e) {
			if (e.target.tagName !== 'BUTTON') {
				return;
			}
			
			var el = document.querySelectorAll('#root input')[2].value.trim();
			
			var selected = document.querySelector('input:checked');
			
			var par = selected.parentElement;
			
			

			var newLi = document.createElement('li');
				newLi.className += 'entry';
				newLi.innerHTML = el;
			if (!newLi.innerHTML) {
				return;
			}
			var newImg = document.createElement('img');
			newImg.className += 'delete';
			newImg.src = 'imgs/Remove-icon.png';

			newLi.appendChild(newImg);

			par.nextElementSibling.appendChild(newLi);
			document.querySelectorAll('#root input')[2].value = '';
		});

		element.addEventListener('click', function (e) {
			if (e.target.className !== 'delete') {
				return;
			}
			
			var targetEl = e.target;
			
			var targetVal = targetEl.parentElement.lastChild;
			
			
			var targetParent = targetEl.parentElement;
			targetParent.parentElement.removeChild(targetParent);

			bottomInput.value = targetVal.nodeValue;
		});

		
	};
}


// SUBMIT THE CODE ABOVE THIS LINE

if(typeof module !== 'undefined') {
	module.exports = solve;
}
