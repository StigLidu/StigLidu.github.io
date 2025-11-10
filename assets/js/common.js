// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});

// Toggle Chinese name
$(document).ready(function() {
    $('.chinese-name-toggle').click(function() {
        var chineseNameDiv = $('#chinese-name');
        
        if (chineseNameDiv.hasClass('chinese-name-hidden')) {
            chineseNameDiv.removeClass('chinese-name-hidden');
            chineseNameDiv.css({
                'opacity': '1',
                'visibility': 'visible'
            });
        } else {
            chineseNameDiv.addClass('chinese-name-hidden');
            chineseNameDiv.css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        }
    });
});