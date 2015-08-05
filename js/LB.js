$(document).ready(function(){
// add a click event
	$(".lightbox").click(function(){
		overlayLink = $(this).attr("href");
		window.startOverlay(overlayLink);
		return false;
	});
});

function startOverlay(overlayLink) {
//add the elements to the dom
	$("body")
		.append('<div class="overlay"></div><div class="container"></div>')
		.css({"overflow-y":"hidden"});

//animate the semitransparant layer
	$(".overlay").animate({"opacity":"0.6"}, 400, "linear");

//add the lightbox image to the DOM
	$(".container").html('<img src="'+overlayLink+'" alt="" />');

//position it correctly after downloading
	$(".container img").load(function() {
		var imgWidth = $(".container img").width();
		var imgHeight = $(".container img").height();
		$(".container")
			.css({
				"top":        "50%",
				"left":       "50%",				
				"width":      imgWidth,
				"height":     imgHeight,
				"margin-top": -(imgHeight/2),
				"margin-left":-(imgWidth/2) //to position it in the middle
				
			})
			.animate({"opacity":"1"}, 400, "linear");

// you need to initiate the removeoverlay function here, otherwise it will not execute.
		window.removeOverlay();
	});
}
function removeOverlay() {
// allow users to be able to close the lightbox
	$(".overlay").click(function(){
		$(".container, .overlay").animate({"opacity":"0"}, 200, "linear", function(){
			$(".container, .overlay").remove();	
		});
	});
}
/* fin. */