function solve() {
  return function (selector, count) {

            if (typeof count !== 'number') {   //!isNan(parseFloat(count)) && isFinite(count)
                throw new Error('Count must be a valid number!');
            }

            if (count < 1) {
                throw new Error('Count must be greater tnah 0!');
            }

            if (typeof selector !== 'string') {
                throw new Error('Selector must be a string!');
        }
                    
            var $element = $(selector); //$this.selector;
            //var $count = $(count);

            var $ul = $("<ul>").addClass("items-list");
            var $li;

            if ($element.length) {
            $element.append($ul); // was down and not working
            for (var i = 0; i < count; i+=1) {
                
                $li = $("<li>")
                .addClass("list-item")
                .text("List item #" + i)
                .appendTo(".items-list");
            }
             
            }
  };
}//;

module.exports = solve;