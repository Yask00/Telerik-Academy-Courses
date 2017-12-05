function solve() {
    return function (selector, count) {

        if (typeof +(count) !== 'number' || count <= 0 || (count % 1) !== 0) {
            throw Error();
        }

        if (typeof selector !== 'string') {
            throw new Error('Selector must be a string!');
        }

        var $container = $(selector);
        if (!$container) {
            throw Error();
        }

        var $count = $(count);
        var $list = $('<ul />');
            $list.addClass('items-list');

        for (var i = 0; i < count; i+=1) {
            var $item = $('<li />');
                $item.addClass('list-item');
                $item.html('List item #' + i);
                $list.append($item);   
        }    

        $container.append($list);
    };
}

module.exports = solve;