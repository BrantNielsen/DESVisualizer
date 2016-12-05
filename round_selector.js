(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.RoundChangeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("Aheh4IC9AAQAaAAAAAbIAAC7QAAAbgaAAIi9AAQgaAAAAgbIAAi7QAAgbAaAAg");
	this.shape.setTransform(12.1,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnhQIBPBQIhPBRg");
	this.shape_1.setTransform(13.6,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AheB5QgaAAAAgbIAAi7QAAgbAaAAIC8AAQAbAAAAAbIAAC7QAAAbgbAAgAgZBNIBQhPIhQhRg");
	this.shape_2.setTransform(12.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RoundChangeButton, new cjs.Rectangle(-1,-1,26.2,26.2), null);


// stage content:
(lib.round_selector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.eventDispatcher = new createjs.EventDispatcher();
		
		this.roundIndex = 0;
		
		updateDisplay.bind(this)();
		this.eventDispatcher.addEventListener("roundChange", updateDisplay.bind(this));
		
		function updateDisplay() {
			this.roundDisplayTxt.text = (this.roundIndex + 1) + "";
		}
		
		this.leftBtn.addEventListener("click", decreaseRoundIndex.bind(this));
		this.rightBtn.addEventListener("click", increaseRoundIndex.bind(this));
		
		function decreaseRoundIndex() {
			if (this.roundIndex > 0) {
				this.roundIndex--;
				this.eventDispatcher.dispatchEvent(new createjs.Event("roundChange"));
			}
		}
		
		function increaseRoundIndex() {
			if (this.roundIndex < 15) {
				this.roundIndex++;
				this.eventDispatcher.dispatchEvent(new createjs.Event("roundChange"));
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.roundDisplayTxt = new cjs.Text("16", "normal 400 18px 'Open Sans'", "#333333");
	this.roundDisplayTxt.name = "roundDisplayTxt";
	this.roundDisplayTxt.textAlign = "center";
	this.roundDisplayTxt.lineHeight = 26;
	this.roundDisplayTxt.lineWidth = 46;
	this.roundDisplayTxt.parent = this;
	this.roundDisplayTxt.setTransform(308.2,144.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.roundDisplayTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.roundDisplayTxt).wait(1));

	// Layer 6
	this.leftBtn = new lib.RoundChangeButton();
	this.leftBtn.parent = this;
	this.leftBtn.setTransform(358.9,152.7,1,1,0,0,180,12.1,12.1);
	new cjs.ButtonHelper(this.leftBtn, 0, 1, 1);

	this.rightBtn = new lib.RoundChangeButton();
	this.rightBtn.parent = this;
	this.rightBtn.setTransform(393.9,152.7,1,1,0,0,0,12.1,12.1);
	new cjs.ButtonHelper(this.rightBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rightBtn},{t:this.leftBtn}]}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AmUjFIMpAAIAAGLIspAAg");
	this.shape.setTransform(307.8,152.2,0.611,0.759);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmUDGIAAmKIMpAAIAAGKg");
	this.shape_1.setTransform(307.8,152.2,0.611,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.text = new cjs.Text("Round:", "normal 400 18px 'Open Sans'", "#333333");
	this.text.lineHeight = 26;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(214.1,144.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(2,1,1).p("Ax5jHMAj0AAAQAoAAAAAoIAAE/QAAAogoAAMgj0AAAQgoAAAAgoIAAk/QAAgoAoAAg");
	this.shape_2.setTransform(312.9,152.6,0.906,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("Ax5DIQgpAAAAgoIAAk/QAAgoApAAMAj0AAAQAoAAgBAoIAAE/QABAogoAAg");
	this.shape_3.setTransform(312.9,152.6,0.906,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.4,331.6,217,42);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;