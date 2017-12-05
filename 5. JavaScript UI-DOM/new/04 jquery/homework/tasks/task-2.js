function solve() {
    return function (selector) {

        if (typeof selector !== 'string') {
            throw new Error('The provided selector must be a string!');
        }
        if (!($(selector).length)) {
            throw new Error('The selector doesn\'t select anything!');
        }

        var $element = $(selector);
        var $buttons = $element.find('.button');

        $buttons.text('hide');

        $buttons.on('click', function () {
            var $this = $(this);

            //FROM CLICKED BUTTON
            var $nextContent = $this.nextAll('.content').first(), //NEXT CONTENT
                $nextButton = $nextContent.nextAll('.button').first(); //NEXT BUTTON after $nextContent

            if ($nextButton.length && $nextContent.length) {
                if ($nextContent.css('display') === 'none') {
                    $nextContent.css('display', '');
                    $this.text('hide');
                } else {
                    $nextContent.css('display', 'none');
                    $this.text('show');
                }
            }
        });
    };
}

module.exports = solve;