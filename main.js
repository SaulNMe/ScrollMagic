$(function () { // wait for document ready
	// init controller for navbar
	var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

	// init controller for other animations
	var controller2 = new ScrollMagic.Controller()

	// build scenes of navbar
	new ScrollMagic.Scene({
		triggerElement: "#sec1",
		triggerHook: 0.1,
		duration: 300
	})
	.setClassToggle("#high1", "active") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec2",
		triggerHook: 0.1,
		duration: 300
	})
	.setClassToggle("#high2", "active") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec3",
		triggerHook: 0.1,
		duration: 300
	})
	.setClassToggle("#high3", "active") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#sec4",
		triggerHook: 0.1,
		duration: 300
	})
	.setClassToggle("#high4", "active") // add class toggle
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	//init Scene zap animation
	new ScrollMagic.Scene({
		triggerElement: '#trigger1'
	})
	.setClassToggle('#animate1', 'zap')
	.addIndicators()
	.addTo(controller2);
	//end Scene zap animation

	//init Scene change color
	var s_saeko = document.getElementById("s");
	var animateElem = document.getElementById("animate2");
	new ScrollMagic.Scene({
		triggerElement: '#trigger2',
		duration: 100
	})
	.on("enter", function () {
		animateElem.style.background = 'grey'
	})
	.on("leave", () => {
		animateElem.style.background = 'green'
	})
	.addIndicators({name: "2 - change  inline style"})
	.addTo(controller2);
	//end Scene change color

	//init Scene fishbox
	let tween = TweenMax.to('#animate3', 1, 
			{className: "+=fish"}
		);
	new ScrollMagic.Scene({
		triggerElement: '#trigger3',
		duration: 200,
		offset: -50
	})
	.setTween(tween)
	.addIndicators({name: 'fish'})
	.addTo(controller2);
	//end Scene fishbox

	//init Scene box changing position
	TweenMax.set("#animate4", {left: "-=100"});

	var $box = $("#animate4 p");

	
	var tween2 = new TimelineMax()
	.to("#animate4", 1, {top: "-=200",
				onStart: function () {$box.html("This");},
				onReverseComplete: function () {$box.html("Let's draw!");}
			}
		)
		.to("#animate4", 1, {top: "+=200", left: "+=200",
				onStart: function () {$box.html("is");},
				onReverseComplete: function () {$box.html("This");}
			}
		)
		.to("#animate4", 1, {top: "-=200",
				onStart: function () {$box.html("the");},
				onReverseComplete: function () {$box.html("is");}
			}
		)
		.to("#animate4", 1, {left: "-=200",
				onStart: function () {$box.html("house");},
				onReverseComplete: function () {$box.html("the");}
			}
		)
		.to("#animate4", 1, {top: "-=100", left: "+=100",
				onStart: function () {$box.html("of");},
				onReverseComplete: function () {$box.html("house");}
			}
		)
		.to("#animate4", 1, {top: "+=100", left: "+=100",
				onStart: function () {$box.html("San...");},
				onReverseComplete: function () {$box.html("of");}
			}
		)
		.to("#animate4", 1, {top: "+=200", left: "-=200",
				onStart: function () {$box.html("...ta");},
				onReverseComplete: function () {$box.html("San...");}
			}
		)
		.to("#animate4", 1, {left: "+=200",
				onStart: function () {$box.html("Clause.");},
				onReverseComplete: function () {$box.html("...ta");}
			}
		);

	new ScrollMagic.Scene({triggerElement: "#trigger4"})
		.setTween(tween2)
		.addIndicators({name: "timeline"}) // add indicators (requires plugin)
		.addTo(controller2);
	//end Scene box changing position

	//init Scene drawing saeko
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
		.add(TweenMax.to($s, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone, onComplete:()=> {sceneDrawing.setClassToggle("#s", 'filling_saeko_main')}}))
		.add(TweenMax.to($a, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($e, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($k, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($o, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		.add(TweenMax.to($r, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.2
		.add(TweenMax.to($dot1, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($dot2, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($dot3, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to("path", 1.1, {stroke: "#33629c", ease:Linear.easeNone}), 0)
	// build scene
	let sceneDrawing = new ScrollMagic.Scene({
			triggerElement: "#trigger5", 
			duration: 300, 
			tweenChanges: true
		})
		.setTween(tween3)
		.addIndicators({name: "drawing words"}) // add indicators (requires plugin)
		.addTo(controller2);

	new ScrollMagic.Scene({
			triggerElement: "#trigger5",
			
		})
		.setClassToggle("#a", 'filling_saeko_main')
		.addIndicators({name: "filling words"})
		.addTo(controller2);
	//end Scene drawing saeko
});