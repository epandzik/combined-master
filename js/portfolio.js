/*http://stackoverflow.com/questions/10439382/change-img-src-in-responsive-designs*/

function resizeImages() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    $(".single-thumb img").each(function() {
        var oldSrc = $(this).attr('src');
        if (width >= 480) {
            var newSrc = oldSrc.replace('_thumb50x50.','_thumb200x200.');
            var newWidth = 200;  var newHeight = 200;
        }
        $(this).attr('src',newSrc);
        $(this).attr('width',newWidth);
        $(this).attr('height',newHeight);
    });
}