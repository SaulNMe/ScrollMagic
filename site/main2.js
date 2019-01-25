$(function () { // wait for document ready
	// init controller for navbar
	var controller2 = new ScrollMagic.Controller();
	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $s = $("path#s");
	var $a = $("path#a");
	var $e = $("path#e");
	var $k = $("path#k");
	var $o = $("path#o");
	var $r = $("path#r");
	var $dot1 = $("path#dot1");
	var $dot2 = $("path#dot2");
	var $dot3 = $("path#dot3");

	// prepare SVG
	pathPrepare($s);
	pathPrepare($a);
	pathPrepare($e);
	pathPrepare($k);
	pathPrepare($o);
	pathPrepare($r);
	pathPrepare($dot1);
	pathPrepare($dot2);
	pathPrepare($dot3);

	// build tween3
	var tween3 = new TimelineMax()
		.add(TweenMax.to($s, 0.9, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to($a, 0.7, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($e, 0.5, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($k, 0.3, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($o, 0.3, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		.add(TweenMax.to($r, 0.2, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.2
		.add(TweenMax.to($dot2, 0.5, {stroke: "#BF209F", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($dot1, 0.3, {stroke: "#2D9CDB", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($dot3, 0.1, {stroke: "#50C53A", strokeDashoffset: 0, ease:Linear.easeNone, onComplete: function () {
			new ScrollMagic.Scene({
				triggerElement: "#k",
			})
			.setClassToggle("#s, #a, #e, #k, #o, #r", "filling_saeko_main")
			.addTo(controller2);

			new ScrollMagic.Scene({
				triggerElement: "#k",
			})
			.setClassToggle("#dot1", "fill_blue")
			.addTo(controller2);

			new ScrollMagic.Scene({
				triggerElement: "#k",
			})
			.setClassToggle("#dot2", "fill_purple")
			.addTo(controller2);

			new ScrollMagic.Scene({
				triggerElement: "#k",
			})
			.setClassToggle("#dot3", "fill_green")
			.addTo(controller2);
		}})) // draw word for 0.1
		.add(TweenMax.to("path", 1, {ease:Linear.easeNone}))
	// build scene
	var sceneDrawing = new ScrollMagic.Scene({
			triggerElement: "#trigger5", 
			tweenChanges: false
		})
		.setTween(tween3)
		.addIndicators({name: "drawing words"}) // add indicators (requires plugin)
		.addTo(controller2);

	
});