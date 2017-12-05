function solve() {
    return function (filesMap) {
        var $items = $('.file-explorer > .items'), //left menu
            $contentsPreview = $('.file-content'), //right menu
            $addBtn = $('.file-explorer .add-btn'), //plus sign
            $addInput = $('.file-explorer input'), //input field, hidden by default
            $fileContentsByName = JSON.parse(JSON.stringify(filesMap)),
            //above - in function and in index.html at the end
            $dirsByName = {};

        $('.dir-item .item-name').each(function (index, element) { //all DIRs
            $dirsByName[element.innerHTML] = $(element.parentNode);
        });

        $addBtn.on('click', function () {
            $addInput.addClass('visible');
            $addBtn.removeClass('visible');
        });

        //  6/100

        $items.on('click', function (event) {
            var $target = $(event.target),
                $parent = $target.parent(),
                itemName,
                previewContents;

            if ($target.hasClass('del-btn')) {
                itemName = $parent.find('.item-name').html();

                if ($parent.hasClass('dir-item')) {
                    delete $dirsByName[itemName];
                }
                else {
                    delete $fileContentsByName[itemName];
                }

                $parent.remove();
                return;
            }

            if ($parent.hasClass('file-item')) {
                previewContents = $fileContentsByName[$target.text()] || '';
                $contentsPreview.text(previewContents);
            }

            if ($parent.hasClass('dir-item')) {
                $parent.toggleClass('collapsed');
            }
        });
        //  66/100

        function renderFile(name) {
            var $fileLi = $('<li />')
                .addClass('file-item item'),
                $itemName = $('<a />')
                    .text(name)
                    .addClass('item-name')
                    .appendTo($fileLi),
                $delBtn = $('<a />')
                    .addClass('del-btn')
                    .appendTo($fileLi);

            return $fileLi;
        }

         $addInput.on('keydown', function (event) {
            if (event.keyCode !== 13) {
                return;
            }

            var file,
                path = $addInput
                            .val()
                            .split('/');

            if (!path[0] && !path[1]) {
                return;
            }
                
            if (path.length === 1) {
                renderFile(path[0]).appendTo($items);
            } else {
                file = renderFile(path[1]);

                if (!$dirsByName[path[0]]) {
                    return;
                }
                    
                $dirsByName[path[0]]
                    .children('ul.items')
                    .append(file);
            }

            $addInput.val('');

            $addInput.removeClass('visible');
            $addBtn.addClass('visible');
        });
        //  100/100
    };


}

if (typeof module !== 'undefined') {
    module.exports = solve;
}