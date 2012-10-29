(function($){ 

	// Star Code found on found on http://carisenda.com/blog/2012/howto-draw-a-star-with-canvas.html
	var canvas, ctx, length = 15; // length of the star's arm

	// grab a reference to the 2d context from canvas element
	//canvas = $('.star');//document.getElementById("star");
	$('.star').each(function(){
		canvas = $(this).get(0);
		ctx = canvas.getContext("2d");

		//add the fill color of the star
		ctx.fillStyle = "rgb(255, 255, 255)";

		// move into the middle of the canvas, just to make room
		ctx.translate(15, 25);

		// initial offset rotation so our star is straight
		ctx.rotate((Math.PI * 1 / 10));

		// make a point, 5 times
		for (var i = 5; i--;) {
		    // draw line up
		    ctx.lineTo(0, length);
		    // move origin to current same location as pen
		    ctx.translate(0, length);
		    // rotate the drawing board
		    ctx.rotate((Math.PI * 2 / 10));
		    // draw line down
		    ctx.lineTo(0, -length);
		    // again, move origin to pen...
		    ctx.translate(0, -length);
		    // ...and rotate, ready for next arm
		    ctx.rotate(-(Math.PI * 6 / 10));
		}
		// last line to connect things up
		ctx.lineTo(0, length);
		ctx.closePath();
		// stroke the path, you could also .fill()
		//ctx.stroke();
		//fill the star
		ctx.fill();
		
	});
	
	$('.rectangle-left').each(function(){
		canvas = $(this).get(0);
		ctx = canvas.getContext("2d");

		// move into the middle of the canvas, just to make room
		//ctx.translate(220, 20);

		ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect (220, 20, 177, 5);

	})

	$('.rectangle-right').each(function(){
		canvas = $(this).get(0);
		ctx = canvas.getContext("2d");

		// move into the middle of the canvas, just to make room
		//ctx.translate(220, 20);

		ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect (30, 20, 177, 5);

	})

})(jQuery);
