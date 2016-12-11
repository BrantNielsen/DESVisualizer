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


(lib.Permutation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisStage = this;
		
		stage.enableMouseOver();
		
		this.showPermutation = function (inputData, numInputColumns, permutationMapping, numMappingColumns, outputData, inputLabel, mappingLabel, outputLabel) {
		    function bitArrayDataIndexFunc(data, dataIndex) {
		        return data.get(dataIndex)? "1" : "0";
		    }
		
		    function pmDataIndexFunc(data, dataIndex) {
		        return data[dataIndex].toString();
		    }
			
			var allLabelY = 10;
			
			var allDataStartY = allLabelY + 40;
			var allDataSpaceY = 30;
			
			// --- Input label and data ---
			
			var inputStartX = 40;
		    var inputSpaceX = 30;
			
			var inputLabelTxt = new createjs.Text(inputLabel, "24px Open Sans", "#333");
			inputLabelTxt.x = inputStartX - 14;
			inputLabelTxt.y = allLabelY;
			inputLabelTxt.textAlign = "left";
			thisStage.addChild(inputLabelTxt);
			
		    var inputFields = placeFields(inputData, numInputColumns, inputStartX, allDataStartY, inputSpaceX, allDataSpaceY, bitArrayDataIndexFunc);
			
			var inputOutline = new createjs.Shape();
			inputOutline.graphics.setStrokeStyle(2).beginStroke("#333").drawRect(0, 0, numInputColumns * inputSpaceX, allDataSpaceY * Math.ceil(inputData.length / numInputColumns));
			inputOutline.x = inputLabelTxt.x - 6;
			inputOutline.y = inputLabelTxt.y + 34;
			thisStage.addChild(inputOutline);
			
			// --- Permutation Mapping label and data ---
			
		    var pmStartX = inputStartX + numInputColumns * inputSpaceX + 100;
		    var pmSpaceX = 40;
			
			var pmLabelTxt = new createjs.Text(mappingLabel, "24px Open Sans", "#333");
			pmLabelTxt.x = pmStartX - 24;
			pmLabelTxt.y = allLabelY;
			thisStage.addChild(pmLabelTxt);
			
		    var pmFields = placeFields(permutationMapping, numMappingColumns, pmStartX, allDataStartY, pmSpaceX, allDataSpaceY, pmDataIndexFunc);
		
			var pmOutline = new createjs.Shape();
			pmOutline.graphics.setStrokeStyle(2).beginStroke("#333").drawRect(0, 0, numMappingColumns * pmSpaceX, allDataSpaceY * Math.ceil(permutationMapping.length / numMappingColumns));
			pmOutline.x = pmLabelTxt.x - 6;
			pmOutline.y = pmLabelTxt.y + 34;
			thisStage.addChild(pmOutline);
		
			// --- Output label and data ---
		
		    var outputStartX = pmStartX + numMappingColumns * pmSpaceX + 100;
		    var outputSpaceX = inputSpaceX;
			
			var outputLabelTxt = new createjs.Text(outputLabel, "24px Open Sans", "#333");
			outputLabelTxt.x = outputStartX - 14;
			outputLabelTxt.y = allLabelY;
			thisStage.addChild(outputLabelTxt);
			
		    var outputFields = placeFields(outputData, numMappingColumns, outputStartX, allDataStartY, outputSpaceX, allDataSpaceY, bitArrayDataIndexFunc);
		
			var outputOutline = new createjs.Shape();
			outputOutline.graphics.setStrokeStyle(2).beginStroke("#333").drawRect(0, 0, numMappingColumns * outputSpaceX, allDataSpaceY * Math.ceil(permutationMapping.length / numMappingColumns));
			outputOutline.x = outputLabelTxt.x - 6;
			outputOutline.y = outputLabelTxt.y + 34;
			thisStage.addChild(outputOutline);
			
			// --- Highlighters ---
		
		    var inputHighlighter = new createjs.Shape();
		    inputHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 25, 25);
		    inputHighlighter.visible = false;
		    thisStage.addChildAt(inputHighlighter, 0);
		
		    var mappingHighlighter = new createjs.Shape();
		    mappingHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 35, 30);
		    mappingHighlighter.visible = false;
		    thisStage.addChildAt(mappingHighlighter, 0);
		
		    var outputHighlighter = new createjs.Shape();
		    outputHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 25, 25);
		    outputHighlighter.visible = false;
		    thisStage.addChildAt(outputHighlighter, 0);
			
			// --- Buttons ---
			
			
			
		    thisStage.stepForwardBtn.removeAllEventListeners();
		    thisStage.stepForwardBtn.addEventListener("click", stepForward);
		
		    thisStage.stepBackwardBtn.removeAllEventListeners();
		    thisStage.stepBackwardBtn.addEventListener("click", stepBackward);
		
		    var stepIndex = -1;
		
		    function stepForward() {
		        stepIndex++;
		
		        if (stepIndex === 0) {
		            hideAll(outputFields);
		        } else if (stepIndex === permutationMapping.length) {
		            stepIndex = -1;
		            moveHighlights(stepIndex);
		
		            return false;
		        }
		
		        moveHighlights(stepIndex);
		        outputFields[stepIndex].visible = true;
				
				return true;
		    }
			
			function stepBackward() {
				stepIndex--;
				if (stepIndex < -1) {
					stepIndex = permutationMapping.length - 1;
				}
		
				moveHighlights(stepIndex);
		
				if (stepIndex === -1) {
					showAll(outputFields);
					return false;
				} else if (stepIndex < permutationMapping.length - 1) {
					outputFields[stepIndex + 1].visible = false;
				}
		
				return true;
			}
			
			
			function moveHighlights(stepIndex) {
				if (stepIndex === -1) {
					inputHighlighter.visible = mappingHighlighter.visible = outputHighlighter.visible = false;
				} else {
					inputHighlighter.visible = mappingHighlighter.visible = outputHighlighter.visible = true;
					
					inputHighlighter.x = inputFields[permutationMapping[stepIndex] - 1].getTransformedBounds().x + 2;
					inputHighlighter.y = inputFields[permutationMapping[stepIndex] - 1].getTransformedBounds().y - 3;
		
					mappingHighlighter.x = pmFields[stepIndex].getTransformedBounds().x - 5;
					mappingHighlighter.y = pmFields[stepIndex].getTransformedBounds().y - 5;
		
					outputHighlighter.x = outputFields[stepIndex].getTransformedBounds().x + 2;
					outputHighlighter.y = outputFields[stepIndex].getTransformedBounds().y - 3;
				}
			}
		}
		
		function placeFields(data, numColumns, startX, startY, spaceX, spaceY, getDataIndexFunction) {
		    var fields = [];
		    var currentY = startY;
		    var dataIndex = 0;
		
		    while (dataIndex < data.length) {
		        for (var colIndex = 0; colIndex < numColumns && dataIndex < data.length; colIndex++) {
					var fieldValue = getDataIndexFunction(data, dataIndex);
					
					if (fieldValue.length < 2) {
						fieldValue = " " + fieldValue;
					}
					
		            var thisField = new createjs.Text(fieldValue, "20px Inconsolata", "#333");
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
		
		this.showPermutation(BitArray.fromHex("0123456789ABCDEF"), 8, DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION, 8, BitArray.fromHex("FEDCBA9876543210"), "Input", "Permutation Mapping", "Output");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.text = new cjs.Text("Step Through:", "normal 700 24px 'Open Sans'", "#333333");
	this.text.lineHeight = 35;
	this.text.lineWidth = 210;
	this.text.parent = this;
	this.text.setTransform(639.8,376.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.stepBackwardBtn = new lib.StepBackwardButton();
	this.stepBackwardBtn.parent = this;
	this.stepBackwardBtn.setTransform(720.6,453,1,1,0,0,0,83,33);

	this.stepForwardBtn = new lib.StepForwardButton();
	this.stepForwardBtn.parent = this;
	this.stepForwardBtn.setTransform(920.6,453,1,1,0,0,0,83,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stepForwardBtn},{t:this.stepBackwardBtn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Permutation, new cjs.Rectangle(637.6,374.4,366,111.6), null);


// stage content:
(lib.dynamic_text_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Permutation();
	this.instance.parent = this;
	this.instance.setTransform(-101.6,-164.5,1,1,0,0,0,-101.6,-164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Token Open Sans Font
	this.text = new cjs.Text("Get Inconsolata in here!", "normal 400 18px 'Inconsolata'", "#003300");
	this.text.lineHeight = 20;
	this.text.lineWidth = 297;
	this.text.parent = this;
	this.text.setTransform(33.1,-97.8);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.text);
	}

	this.text_1 = new cjs.Text("Get Open Sans in here!", "normal 400 18px 'Open Sans'", "#003300");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 204;
	this.text_1.parent = this;
	this.text_1.setTransform(33.1,-57.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(631.1,300.2,972.6,585.8);
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