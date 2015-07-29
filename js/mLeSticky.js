jQuery(document).ready(function() {

    var navOffset = jQuery("nav").offset().top;
/*alert(navOffset);*/
    jQuery("nav").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

    jQuery("nav").wrapInner('<div class="nav-inner"></div>');

    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();
        if (scrollPos >= navOffset) {
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }
    });
});


/*resizing the nav buttons on window resize

window.onresize = function(){
    var img = document.getElementById('fullsize');
    img.style.height = "100%";
};*/

/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth Source area width
 * @param {Number} srcHeight Source area height
 * @param {Number} maxWidth Fittable area maximum available width
 * @param {Number} maxHeight Fittable area maximum available height
 * @return {Object} { width, heigth }
 *
 * http://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
 */
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
}