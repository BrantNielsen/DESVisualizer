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


(lib.something = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("Ax4zcMAjxAAAQBkAAAABkMAAAAjxQAABkhkAAMgjxAAAQhkAAAAhkMAAAgjxQAAhkBkAAg");
	this.shape.setTransform(124.5,124.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ax4TdQhkAAAAhkMAAAgjxQAAhkBkAAMAjxAAAQBkAAAABkMAAAAjxQAABkhkAAg");
	this.shape_1.setTransform(124.5,124.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.something, new cjs.Rectangle(-1,-1,251,251), null);


// stage content:
(lib.canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		this.myButton.addEventListener("click", onClick.bind(this)); 
		this.myButton.cursor = "pointer";
		
		function onClick() {
			alert("You clicked it!");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.myButton = new lib.something();
	this.myButton.parent = this;
	this.myButton.setTransform(600,300,1,1,0,0,0,124.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.myButton).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1074.5,474.5,251,251);
// library properties:
lib.properties = {
	width: 1200,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;