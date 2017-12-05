function solve() {

	return function (selector, rows, columns) {
		let $selectorElement = $(selector);
		let rowsCount = +rows + 1;
		let colsCount = +columns + 1;
		let rowsCounter = -1;
		let alphabeticalArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		$table = $(`<table class="spreadsheet-table "></table>`);

		for (var i = 0; i < rowsCount; i += 1) {

			$row = $(`<tr id='row-${i + 1}'></tr>`);
			rowsCounter += 1;

			for (var j = 0; j < colsCount; j += 1) {
				if (j === 0 && i === 0) {
					$(`<td class="spreadsheet-item spreadsheet-header all"></td>`).appendTo($row);
				}
				else if (j >= 0 && i === 0) {
					$(`<th class="spreadsheet-item spreadsheet-header alpha ${alphabeticalArray[j - 1]}">${alphabeticalArray[j - 1]}</th>`).appendTo($row);
				}
				else if (j === 0 && i >= 0) {
					$(`<th class="spreadsheet-item spreadsheet-header ">${rowsCounter}</td>`).appendTo($row);
				}
				else {
					$(`<td id="row-${i + 1}-col-${alphabeticalArray[j - 1]}" class="spreadsheet-item spreadsheet-cell ${alphabeticalArray[j - 1]}"> <span></span> <input type="text"></td>`).appendTo($row);
				}
			}
			$table.append($row);
		}

		$selectorElement.append($table);

		$('.spreadsheet-item').mousedown(function () {
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
				return;
			}
			$(this).addClass('selected');
		});

		$('.all').mousedown(function () {
			$('.spreadsheet-item').addClass('selected');
		});

		$('th.spreadsheet-header').mousedown(function () {
			if (!($(this).hasClass('alpha'))) {
				$(this).siblings().toggleClass('selected');
				$(this).toggleClass('selected');
			}
			else {
				if (!$(this).hasClass('selected')) {
					$(this).removeClass('selected');
				}
				else {
					$(this).addClass('selected');
				}
				
			}
		});

		$(".spreadsheet-cell").dblclick(function () {
			console.log($(this).children().children());
			$(this).addClass('editing');
		});

		$("input").blur(function(){
			$(this).siblings().css('display', 'initial');
			$(this).siblings().text($(this).val());
			$(this).val('');
			$(this).css('display', 'none');
		});
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
	module.exports = solve;
}
