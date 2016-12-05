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


(lib.inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape.setTransform(34.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.inner, new cjs.Rectangle(0,0,69,69), null);


(lib.binaryTooltip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.setBinaryData = (function(bitArray) {
			this.binaryField.text = bitArray.toBinaryString(8);
		}).bind(this);
		
		this.dispatchEvent(new createjs.Event("loaded"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.binaryField = new cjs.Text("", "normal 400 12px 'Inconsolata'", "#333333");
	this.binaryField.name = "binaryField";
	this.binaryField.lineHeight = 14;
	this.binaryField.lineWidth = 462;
	this.binaryField.parent = this;
	this.binaryField.setTransform(11,9.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.binaryField);
	}

	this.timeline.addTween(cjs.Tween.get(this.binaryField).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmCACWIAAkrMBMFAAAIAAErg");
	this.shape.setTransform(243.5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.binaryTooltip, new cjs.Rectangle(0,0,487,30), null);


(lib.outer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.myFunction = function() {
			alert("Like a boss.");
		}
		
		console.log("The first frame's script was run.");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.innerMC = new lib.inner();
	this.innerMC.parent = this;
	this.innerMC.setTransform(75.5,58.5,1,1,0,0,0,34.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.innerMC).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("As9pSIZ7AAIAASlI57AAg");
	this.shape.setTransform(83,59.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.outer, new cjs.Rectangle(-1,-1,168,121), null);


(lib.binaryTooltipField = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var binaryTooltipLoaded = false;
		
		this.binaryTooltip.addEventListener("loaded", function() {
			binaryTooltipLoaded = true;
		});
		
		this.setBitArrayValue = (function(bitArray) {
			this.hexField.text = bitArray.toHexString(2);
			
			if (!binaryTooltipLoaded) {
				this.binaryTooltip.addEventListener("loaded", (function() {
					this.binaryTooltip.setBinaryData(bitArray);
				}).bind(this));
			} else {
				this.binaryTooltip.setBinaryData(bitArray);
			}
			
			
		}).bind(this);
		
		this.addEventListener("mouseover", showTooltip.bind(this));
		this.addEventListener("mouseout", hideTooltip.bind(this));
		
		(hideTooltip).bind(this)();
		
		function showTooltip() {
			this.binaryTooltip.visible = true;
			console.log("showing tooltip");
		}
		
		function hideTooltip() {
			this.binaryTooltip.visible = false;
			console.log("hiding tooltip");
		}
		
		this.dispatchEvent(new createjs.Event("loaded"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.binaryTooltip = new lib.binaryTooltip();
	this.binaryTooltip.parent = this;
	this.binaryTooltip.setTransform(144.5,-11,1,1,0,0,0,154.5,19);

	this.timeline.addTween(cjs.Tween.get(this.binaryTooltip).wait(1));

	// Layer 1
	this.hexField = new cjs.Text("", "normal 400 14px 'Inconsolata'", "#333333");
	this.hexField.name = "hexField";
	this.hexField.lineHeight = 16;
	this.hexField.lineWidth = 187;
	this.hexField.parent = this;
	this.hexField.setTransform(2,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.hexField);
	}

	this.timeline.addTween(cjs.Tween.get(this.hexField).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Au6B4IAAjvId1AAIAADvg");
	this.shape.setTransform(95.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.binaryTooltipField, new cjs.Rectangle(-10,-30,487,54), null);


// stage content:
(lib.canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		console.log(this.outerMC);
		console.log(this.outerMC.innerMC);
		
		this.outerMC.gotoAndStop(0);
		this.outerMC.myFunction();
	}
	this.frame_2 = function() {
		this.stop();
		stage.enableMouseOver();
		
		var bitArray = BitArray.fromHex("0123456789ABCDEF");
		
		console.log("Main frame ran");
		
		this.testTooltipField.addEventListener("loaded", (function() {
			this.testTooltipField.setBitArrayValue(bitArray);
		}).bind(this));
	}
	this.frame_4 = function() {
		//this.stop();
		
		/*alert("You're on frame 0!");
		
		stage.enableMouseOver();
		
		if (!this.myButton.hasEventListener("click")) {
			this.myButton.addEventListener("click", onClick.bind(this)); 
			this.myButton.cursor = "pointer";
		}
		
		function onClick() {
			//alert("You clicked it!");
			this.gotoAndStop(1);
			this.gotoAndStop(0);
			//this.myFunction();
		}*/
		
		/*this.encryptionObject = {};
		this.decryptionObject = {};
		this.roundNum = 0;
		
		this.isEncryption = true;
		
		this.roundEventDispatcher = new createjs.EventDispatcher();
		this.roundEventDispatcher.addEventListener("roundChanged", myFunction);
		this.roundEventDispatcher.dispatchEvent(new createjs.Event("roundChanged"));
		
		function myFunction() {
			alert("Yeah! My function was run! Also, you were totally hacked!");
		}*/
		
		this.globalData = {};
		this.globalData.roundIndex = 0;
		
		this.globalData.encryptionObject = {};
		this.globalData.decryptionObject = {};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(1));

	// Layer 3
	this.outerMC = new lib.outer();
	this.outerMC.parent = this;
	this.outerMC.setTransform(290.1,199.6,1,1,0,0,0,83,59.5);

	this.testTooltipField = new lib.binaryTooltipField();
	this.testTooltipField.parent = this;
	this.testTooltipField.setTransform(316.5,257.9,1,1,0,0,0,95.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.outerMC}]}).to({state:[{t:this.testTooltipField}]},2).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(806.1,439.1,168,121);
// library properties:
lib.properties = {
	width: 1200,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;