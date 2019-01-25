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
	.to("#animate4", 1, {top: "-=20",
				onStart: function () {$box.html("This");},
				onReverseComplete: function () {$box.html("Let's draw!");}
			}
		)
		.to("#animate4", 1, {top: "+=20", left: "+=20",
				onStart: function () {$box.html("is");},
				onReverseComplete: function () {$box.html("This");}
			}
		)
		.to("#animate4", 1, {top: "-=20",
				onStart: function () {$box.html("the");},
				onReverseComplete: function () {$box.html("is");}
			}
		)
		.to("#animate4", 1, {left: "-=20",
				onStart: function () {$box.html("house");},
				onReverseComplete: function () {$box.html("the");}
			}
		)
		.to("#animate4", 1, {top: "-=10", left: "+=10",
				onStart: function () {$box.html("of");},
				onReverseComplete: function () {$box.html("house");}
			}
		)
		.to("#animate4", 1, {top: "+=10", left: "+=10",
				onStart: function () {$box.html("San...");},
				onReverseComplete: function () {$box.html("of");}
			}
		)
		.to("#animate4", 1, {top: "+=20", left: "-=20",
				onStart: function () {$box.html("...ta");},
				onReverseComplete: function () {$box.html("San...");}
			}
		)
		.to("#animate4", 1, {left: "+=20",
				onStart: function () {$box.html("Clause.");},
				onReverseComplete: function () {$box.html("...ta");}
			}
		);

	new ScrollMagic.Scene({
			triggerElement: "#trigger4",
			duration: 50
		})
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
		.add(TweenMax.to($s, 0.1, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to($a, 0.1, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($e, 0.1, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($k, 0.1, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($o, 0.1, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		.add(TweenMax.to($r, 0.2, {stroke: "#fff", strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.2
		.add(TweenMax.to($dot2, 0.1, {stroke: "#BF209F", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
		.add(TweenMax.to($dot1, 0.1, {stroke: "#2D9CDB", strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.1
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
		.add(TweenMax.to("path", 1.1, {ease:Linear.easeNone}))
	// build scene
	var sceneDrawing = new ScrollMagic.Scene({
			triggerElement: "#trigger5", 
			duration: 200, 
			tweenChanges: false
		})
		.setTween(tween3)
		.addIndicators({name: "drawing words"}) // add indicators (requires plugin)
		.addTo(controller2);
	//end Scene drawing saeko

	//init Path Animation
	let flightpath = {
		entry: {
			curviness: 1.25,
			autoRotate: true,
			values: [
				{x: 100, y: -20},
				{x: 300, y: 10}
			]
		},
		looping: {
			curviness: 1.25,
			autoRotate: true,
			values: [
				{x: 510, y: 60},
				{x: 620, y: -60},
				{x: 500, y: -100},
				{x: 380, y: 20},
				{x: 500, y: 60},
				{x: 580, y: 20},
				{x: 620, y: 15}
			]
		},
		leave: {
			curviness: 1.25,
			autoRotate: true,
			values: [
				{x: 600, y: 20},
				{x: 800 , y: 130},
				{x: $(window).width() + 300, y: -100}
			]
		}
	};
	var tween4 = new TimelineMax()
		.add(TweenMax.to($("#plane"), 1.2, {css: {bezier:flightpath.entry}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#plane"), 2, {css: {bezier:flightpath.looping}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#plane"), 1, {css: {bezier:flightpath.leave}, ease:Power1.easeInOut}))
	
	let pathAnimation = new ScrollMagic.Scene({
		triggerElement: "#trigger6",
		duration: 300,
		offset: 100
	})
	.setPin("#target")
	.setTween(tween4)
	.addIndicators()
	.addTo(controller2)
	//end Path Animation

	//init Image Sequence

	let images = [
		"Walama/05.jpg",
		"Walama/06.jpg",
		"Walama/07.jpg",
		"Walama/08.jpg",
		"Walama/09.jpg",
		"Walama/10.jpg",
		"Walama/11.jpg",
		"Walama/12.jpg",
		"Walama/13.jpg",
		"Walama/14.jpg",
		"Walama/15.jpg",
		"Walama/16.jpg",
		"Walama/17.jpg",
		"Walama/18.jpg",
		"Walama/19.jpg",
		"Walama/20.jpg",
	]
	var obj =  {curImg: 0}
	var tween5= TweenMax.to(obj, 0.5,
		{
			curImg: images.length-1,
			roundProps: "curImg",
			repeat: 3,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
				$("#myimg").attr("src", images[obj.curImg]);
			}
		}
	);
	let walamaScene = new ScrollMagic.Scene({
		triggerElement: "#trigger7",
		duration: 300
	})
	.setTween(tween5)
	.addIndicators({name: "Walama!!!"})
	.addTo(controller2);
	//end Image Sequence
	
	$("form.move input[name=duration]:radio").change(function () {
		walamaScene.duration($(this).val())
	})

	//init simple tweening
	new ScrollMagic.Scene({
		triggerElement: "#trigger8"
	})
	.setTween("#animate5", 0.5, {backgroundColor: "black", scale: 2.5, color: "white", borderRadius: 60})
	.addIndicators({name: "simple tweening"})
	.addTo(controller2);
	//end simple tweening

	//init With Velocity
	
	//end With Velocity

});