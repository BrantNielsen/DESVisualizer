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


(lib.StepForwardButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Step Forward", "normal 700 18px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(84.5,20.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("As9FKIAAqTIZ7AAIAAKTg");
	this.shape.setTransform(83,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StepForwardButton, new cjs.Rectangle(0,0,166,66), null);


(lib.StepBackwardButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Step Backward", "normal 700 18px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(84.5,20.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("As9FKIAAqTIZ7AAIAAKTg");
	this.shape.setTransform(83,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StepBackwardButton, new cjs.Rectangle(0,0,166,66), null);


(lib.AnimateButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Animate", "normal 700 18px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(84.5,20.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("As9FKIAAqTIZ7AAIAAKTg");
	this.shape.setTransform(83,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AnimateButton, new cjs.Rectangle(0,0,166,66), null);


// stage content:
(lib.dynamic_text_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisStage = this;
		
		stage.enableMouseOver();
		
		this.showPermutation = function (inputData, numInputColumns, permutationMapping, numMappingColumns, outputData) {
			function bitArrayDataIndexFunc(data, dataIndex) {
				return data.get(dataIndex)? "1" : "0";
			}
			
			function pmDataIndexFunc(data, dataIndex) {
				return data[dataIndex].toString();
			}
			
			var inputStartX = 20;
			var inputSpaceX = 30;
			var inputFields = placeFields(inputData, numInputColumns, inputStartX, 20, inputSpaceX, 30, bitArrayDataIndexFunc);
			
			var pmStartX = inputStartX + numInputColumns * inputSpaceX + 100;
			var pmSpaceX = 40;
			var pmFields = placeFields(permutationMapping, numMappingColumns, pmStartX, 20, pmSpaceX, 30, pmDataIndexFunc);
			
			var outputStartX = pmStartX + numMappingColumns * pmSpaceX + 100;
			var outputSpaceX = inputSpaceX;
			var outputFields = placeFields(outputData, numMappingColumns, outputStartX, 20, outputSpaceX, 30, bitArrayDataIndexFunc);
			
			//var inputHighlighter = new createjs.Graphics().beginFill("#eeeeee").drawRect(0, 0, 100, 100);
			var inputHighlighter = new createjs.Shape();
			inputHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 25, 25);
			inputHighlighter.x = -100;
			inputHighlighter.y = -100;
			thisStage.addChildAt(inputHighlighter, 0);
			
			var mappingHighlighter = new createjs.Shape();
			mappingHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 35, 30);
			mappingHighlighter.x = -100;
			mappingHighlighter.y = -100;
			thisStage.addChildAt(mappingHighlighter, 0);
			
			var outputHighlighter = new createjs.Shape();
			outputHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 25, 25);
			outputHighlighter.x = -100;
			outputHighlighter.y = -100;
			thisStage.addChildAt(outputHighlighter, 0);
			
			thisStage.stepForwardBtn.removeAllEventListeners();
			thisStage.stepForwardBtn.addEventListener("click", stepForward);
			
			var stepIndex = -1;
			
			function stepForward() {
				if (stepIndex < permutationMapping.length) {
					stepIndex++;
					
					if (stepIndex === 0) {
						hideAll(outputFields);
					} else if (stepIndex === permutationMapping.length) {
						inputHighlighter.x = mappingHighlighter.x = outputHighlighter.x = -100;
						inputHighlighter.y = mappingHighlighter.y = outputHighlighter.y = -100;
						
						stepIndex = -1;
						
						return false;
					}
					
					inputHighlighter.x = inputFields[permutationMapping[stepIndex] - 1].getTransformedBounds().x - 5;
					inputHighlighter.y = inputFields[permutationMapping[stepIndex] - 1].getTransformedBounds().y - 5;
					
					mappingHighlighter.x = pmFields[stepIndex].getTransformedBounds().x - 5;
					mappingHighlighter.y = pmFields[stepIndex].getTransformedBounds().y - 5;
					
					outputHighlighter.x = outputFields[stepIndex].getTransformedBounds().x - 5;
					outputHighlighter.y = outputFields[stepIndex].getTransformedBounds().y - 5;
					outputFields[stepIndex].visible = true;
				}
			}
			
			function stepBackward() {
				
			}
		}
		
		function placeFields(data, numColumns, startX, startY, spaceX, spaceY, getDataIndexFunction) {
			var fields = [];
			var currentY = startY;
			var dataIndex = 0;
			
			while (dataIndex < data.length) {
				for (var colIndex = 0; colIndex < numColumns && dataIndex < data.length; colIndex++) {
					var thisField = new createjs.Text(getDataIndexFunction(data, dataIndex), "20px Open Sans", "#333");
					thisField.x = startX + (colIndex * spaceX);
					thisField.y = currentY;
					thisField.textAlign = "right";
					thisStage.addChild(thisField);
					
					fields[dataIndex] = thisField;
					
					dataIndex++;
				}
				
				currentY += spaceY;
			}
			
			return fields;
		}
		
		function hideAll(displayObjects) {
			for (var i = 0; i < displayObjects.length; i++) {
				displayObjects[i].visible = false;
			}
		}
		
		function showAll(displayObjects) {
			for (var i = 0; i < displayObjects.length; i++) {
				displayObjects[i].visible = true;
			}
		}
		
		this.showPermutation(BitArray.fromHex("0123456789ABCDEF"), 8, DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION, 8, BitArray.fromHex("FEDCBA9876543210"));
		
		
		
		/*var myOtherText = new createjs.Text("Hello World!", "20px Open Sans", "#333");
		
		this.addChild(myOtherText);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.animateBtn = new lib.AnimateButton();
	this.animateBtn.parent = this;
	this.animateBtn.setTransform(485,497.9,1,1,0,0,0,83,33);

	this.stepBackwardBtn = new lib.StepBackwardButton();
	this.stepBackwardBtn.parent = this;
	this.stepBackwardBtn.setTransform(682.9,497.9,1,1,0,0,0,83,33);

	this.stepForwardBtn = new lib.StepForwardButton();
	this.stepForwardBtn.parent = this;
	this.stepForwardBtn.setTransform(882.9,497.9,1,1,0,0,0,83,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stepForwardBtn},{t:this.stepBackwardBtn},{t:this.animateBtn}]}).wait(1));

	// Token Open Sans Font
	this.text = new cjs.Text("Get Open Sans in here!", "normal 400 18px 'Open Sans'", "#003300");
	this.text.lineHeight = 26;
	this.text.lineWidth = 204;
	this.text.parent = this;
	this.text.setTransform(33.1,-57.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(631.1,340.2,934.8,590.7);
// library properties:
lib.properties = {
	width: 1200,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;