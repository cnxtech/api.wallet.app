$(document).click(function(e) {
    console.log(e.target)
    if (!$(e.target).closest('.collapse-force-open').length) {
        $('.collapse').collapse('hide');
    }

    $('.no-collapsable').on('click', function (e) {
        e.stopPropagation();
    });
});