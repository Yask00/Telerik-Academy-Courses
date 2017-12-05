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
    'use strict';
    var list;

    function printElementInfo(element) {
        var log = console.log.bind(console),
            i,
            len;

        log("-".repeat(100));
        log("Type of the node: " + element.nodeName);
        log("Number of child nodes:" + element.childNodes.length);
        log("child nodes: ");
        for (i = 0, len = element.childNodes.length; i < len; i++) {
            log("childNode at (" + i + ") position: " + element.childNodes[i].nodeName);
        }
        log("-".repeat(100));
    }

    list = document.getElementById("trainers-list");

    printElementInfo(list);

    printElementInfo(document.body);
}());