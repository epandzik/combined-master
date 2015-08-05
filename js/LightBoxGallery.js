/**
 * Created by Emily Pandzik on 6/12/15.
 */
$(document).ready(function(){

    /*for lightbox mechanics*/
    $(".lightbox").click(function() {
        $(".backdrop, .box").animate({"opacity": "0.90"}, 450, "swing");
        $(".box").animate({"opacity": "1.00"}, 450, "swing");
        $(".backdrop, .box").css("display", "block");
    });

    $(".close").click(function(){
        close_box();
    });

    $(".backdrop").click(function() {
        close_box();
    });

    function close_box(){
        $(".backdrop, .box").animate({"opacity": "0"}, 450, "swing", function(){
            $(".backdrop, .box").css("display", "none");
        });
    }
});