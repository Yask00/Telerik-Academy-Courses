(function () {
	if (!String.prototype.repeat) {
		String.prototype.repeat = function (times) {
			var repeatedString;
			if (!times) {
				times = 1;
			}
			repeatedString = "";

			for (var i = 0; i < times; i += 1) {
				repeatedString += String(this);
			}
			return repeatedString;
		};
	}

	if (!String.prototype.trimLeftChars) {
		String.prototype.trimLeftChars = function (chars) {
			var regEx = new RegExp("^[" + chars + "]+");
			return this.replace(regEx, "");
		};
	}

	if (!String.prototype.trimRightChars) {
		String.prototype.trimRightChars = function (chars) {

			var regEx = new RegExp("[" + chars + "]+$");
			return this.replace(regEx, "");
		};
	}

	if (!String.prototype.trimChars) {
		String.prototype.trimChars = function (chars) {
			return this.trimLeftChars(chars).trimRightChars(chars);
		};
	}
}());

(function () {
	var log = console.log.bind(console);

	function traverseElement(element, indent) {
		var child = element.firstChild,
			content;
		if (element.nodeName == "#text") {
			content = element.textContent.trimChars("\n \t");
			if (content) {
				log(indent + content);
			}
		} else {
			log(indent + "start of : " + element.nodeName);
			while (child) {
				traverseElement(child, indent + "--");
				child = child.nextSibling;
			}
			log(indent + "end of : " + element.nodeName);
		}
	}
	traverseElement(document, "");
}());