$.fn.tabs = function () {
    var $tabControl = this;

    $tabControl.addClass('tabs-container');

    hideTabControlContent();
    

    $tabControl.on('click', '.tab-item-title', function(){
        var $clickedElement = $(this);

        hideTabControlContent();
        
        $clickedElement.next().show();
        
        $tabControl.find('.tab-item').removeClass('current');
        $clickedElement.parent().addClass('current');    
    });

    function hideTabControlContent () {
        $tabControl.find('.tab-item-content').hide();
    }

};