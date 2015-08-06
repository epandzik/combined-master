/**
 * Created by AnalyzeAdmin on 6/17/15.
 * https://css-tricks.com/forums/topic/jquery-popup-gallery-click-image-to-open-gallery-with-other-images/
 * http://jsfiddle.net/kevin11189/uZCC6/1270/
 */

$('.fancybox-thumbs').fancybox({
    prevEffect : 'none',
    nextEffect : 'none',

    closeBtn  : true,
    arrows    : false,
    nextClick : true,

    helpers : {
        thumbs : {
            width  : 80,
            height : 80
        }
    }
});


