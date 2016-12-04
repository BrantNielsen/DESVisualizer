(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.otherButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AryDDIAAmFIXlAAIAAGFg");
	this.shape.setTransform(75.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,39);


(lib.inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ApcJdIAAy5IS5AAIAAS5g");
	this.shape.setTransform(60.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inner, new cjs.Rectangle(0,0,121,121), null);


(lib.outer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.inner = new lib.inner();
	this.inner.parent = this;
	this.inner.setTransform(119.5,110.5,1,1,0,0,0,60.5,60.5);
	new cjs.ButtonHelper(this.inner, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AwFwFMAgLAAAMAAAAgLMggLAAAg");
	this.shape.setTransform(103,103);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.outer, new cjs.Rectangle(-1,-1,208,208), null);


// stage content:
(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		console.log(this.outer.inner.x);
		
		this.outer.inner.addEventListener("click", myFunction);
		//this.otherButton.visible = false;
		this.otherButton.addEventListener("click", function() {
			alert("You clicked the other button man!");
		});
		
		function myFunction() {
			alert("It was clicked!");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.otherButton = new lib.otherButton();
	this.otherButton.parent = this;
	this.otherButton.setTransform(425.5,189.6,1,1,0,0,0,75.5,19.5);
	new cjs.ButtonHelper(this.otherButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.otherButton).wait(1));

	// Layer 1
	this.outer = new lib.outer();
	this.outer.parent = this;
	this.outer.setTransform(237,197.1,1,1,0,0,0,103,103);

	this.timeline.addTween(cjs.Tween.get(this.outer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(408.5,293.6,367.5,207);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;