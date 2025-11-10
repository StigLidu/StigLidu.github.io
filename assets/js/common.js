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
function toggleChineseName() {
    var chineseNameDiv = document.getElementById('chinese-name');
    var toggleIcon = document.querySelector('.chinese-name-toggle i');
    
    if (chineseNameDiv.classList.contains('chinese-name-hidden')) {
        chineseNameDiv.classList.remove('chinese-name-hidden');
        chineseNameDiv.style.maxHeight = '100px';
        chineseNameDiv.style.marginTop = '0.5rem';
        toggleIcon.style.transform = 'rotate(180deg)';
    } else {
        chineseNameDiv.classList.add('chinese-name-hidden');
        chineseNameDiv.style.maxHeight = '0';
        chineseNameDiv.style.marginTop = '0';
        toggleIcon.style.transform = 'rotate(0deg)';
    }
}

