/*Jquery time*/
$(document).ready(function(){
	var item, img, title, large_img;
	var CW, CH, CL, CT, hpadding, vpadding, imgtag;
	//Flag for preventing multiple image displays
	var lb_loading = false;
	var doc = $(document);
	
	$("#lightbox li").click(function(){
		if(lb_loading) return false;
		lb_loading= true;
		
		item = $(this);
		img = item.find("img");
		title = item.find(".title").html();
		
		//Remove active class from previously clicked LI
		$("#lightbox li.active").removeClass("active");
		//Mark the clicked LI as active for later use
		item.addClass("active");
		
		//The large image
		large_img = new Image();
		//Use data-large or the src itself if large image url is not available
		large_img.src = img.attr("data-large") ? img.attr("data-large") : img.attr("src");
		

		//Disabling left/right controls on first/last items
		if(item.prev().length == 0)
			$(".lb_previous").addClass("inactive");
		else
			$(".lb_previous").removeClass("inactive");
		if(item.next().length == 0)
			$(".lb_next").addClass("inactive");
		else
			$(".lb_next").removeClass("inactive");
		
		//Centering .lb_canvas
		CW = $(".lb_canvas").outerWidth();
		CH = $(".lb_canvas").outerHeight();
		//top and left coordinates
		CL = ($(window).width() - CW)/2;
		CT = ($(window).height() - CH)/2;
		$(".lb_canvas").css({top: CT, left: CL});
		
		//Inserting the large image into .lb_canvas once it's loaded
		$(large_img).load(function(){
			//Recentering .lb_canvas with new dimensions
			CW = large_img.width;
			CH = large_img.height;
			//.lb_canvas padding to be added to image width/height to get the total dimensions
			hpadding = parseInt($(".lb_canvas").css("paddingLeft")) + parseInt($(".lb_canvas").css("paddingRight"));
			vpadding = parseInt($(".lb_canvas").css("paddingTop")) + parseInt($(".lb_canvas").css("paddingBottom"));
			CL = ($(window).width() - CW - hpadding)/2;
			CT = ($(window).height() - CH - vpadding)/2;
			
			//Animating .lb_canvas to new dimentions and position
			$(".lb_canvas").html("").animate({width: CW, height: CH, top: CT, left: CL}, 500, function(){
				//Inserting the image but keeping it hidden
				imgtag = '<img src="'+large_img.src+'" style="opacity: 0;" />';
				$(".lb_canvas").html(imgtag);
				$(".lb_canvas img").fadeTo("slow", 1);
				//Displaying the image title
				$(".lb_title").html(title);
				
				lb_loading= false;
				$(".lb_canvas").removeClass("loading");
			})
		})
	})
	
	//Click based navigation
	doc.on("click", ".lb_previous", function(){ navigate(-1) });
	doc.on("click", ".lb_next", function(){ navigate(1) });
	doc.on("click", ".lb_backdrop", function(){ navigate(0) });
	
	//Keyboard based navigation
	doc.keyup(function(e){
		//Keyboard navigation should work only if lightbox is active which means backdrop is visible.
		if($(".lb_backdrop:visible").length == 1)
		{
			//Left
			if(e.keyCode == "37") navigate(-1);
			//Right
			else if(e.keyCode == "39") navigate(1);
			//Esc
			else if(e.keyCode == "27") navigate(0);
		}
	});
	
	//Navigation function
	function navigate(direction)
	{
		if(direction == -1) // left
			$("#lightbox li.active").prev().trigger("click");
		else if(direction == 1) //right
			$("#lightbox li.active").next().trigger("click");
		else if(direction == 0) //exit
		{
			$("#lightbox li.active").removeClass("active");
			$(".lb_canvas").removeClass("loading");
			//Fade out the lightbox elements
			$(".lb_backdrop, .lb_canvas, .lb_controls").fadeOut("slow", function(){
				//empty canvas and title
				$(".lb_canvas, .lb_title").html("");
			})
			lb_loading= false;
		}
	}
})




