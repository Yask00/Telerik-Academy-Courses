(function () {
	var generateBoxesBtn;

	function onGenerateBoxesButtonClick() {
		var contentDiv = document.getElementById("content"),
			count,
			i,
			div,
			dfrag;

		while (contentDiv.firstChild) {
			contentDiv.removeChild(contentDiv.firstChild);
		}

		count = (document.getElementById("tb-box-count").value || 5) | 0;

		div = document.createElement("div");
		div.className = "colored";
		dfrag = document.createDocumentFragment();

		for (i = 0; i < count; i++) {
			div.innerText = 'Div  ' + (i + 1);
			dfrag.appendChild(div.cloneNode(true));
		}
		contentDiv.appendChild(dfrag);
	}
	
	generateBoxesBtn = document.getElementById("btn-generate-boxes");
	generateBoxesBtn.addEventListener("click", onGenerateBoxesButtonClick);
}());