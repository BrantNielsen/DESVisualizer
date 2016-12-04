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



// stage content:
(lib.dynamic_text_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisStage = this;
		
		this.showPermutation = function (inputData, numInputColumns, permutationMapping, numMappingColumns, outputData) {
			/*var inputX = 20;
			var inputY = 20;
		
			var inputIndex = 0;
			
			var inputPositions = [];
		
			while (inputIndex < inputData.length) {
				for (var colNum = 0; colNum < numInputColumns && inputIndex < inputData.length; colNum++) {
					var bitField = new createjs.Text(inputData.get(inputIndex) ? "1" : "0", "20px Open Sans", "#333");
					bitField.x = inputX + (colNum * 20);
					bitField.y = inputY;
					this.addChild(bitField);
					
					inputIndex++;
				}
		
				inputY += 30;
			}*/
			
			function bitArrayDataIndexFunc(data, dataIndex) {
				return data.get(dataIndex)? "1" : "0";
			}
			
			function pmDataIndexFunc(data, dataIndex) {
				return data[dataIndex].toString();
			}
			
			var inputStartX = 20;
			var inputSpaceX = 30;
			var inputPositions = placeFields(inputData, numInputColumns, inputStartX, 20, inputSpaceX, 30, bitArrayDataIndexFunc);
			
			var pmStartX = inputStartX + numInputColumns * inputSpaceX + 100;
			var pmSpaceX = 40;
			var pmPositions = placeFields(permutationMapping, numMappingColumns, pmStartX, 20, pmSpaceX, 30, pmDataIndexFunc);
			
			var outputStartX = pmStartX + numMappingColumns * pmSpaceX + 100;
			var outputSpaceX = inputSpaceX;
			var outputPositions = placeFields(outputData, numMappingColumns, outputStartX, 20, outputSpaceX, 30, bitArrayDataIndexFunc);
		}
		
		function placeFields(data, numColumns, startX, startY, spaceX, spaceY, getDataIndexFunction) {
			var positions = [];
			var currentY = startY;
			var dataIndex = 0;
			
			while (dataIndex < data.length) {
				for (var colIndex = 0; colIndex < numColumns && dataIndex < data.length; colIndex++) {
					var thisFieldPosition = {'x' : startX + (colIndex * spaceX), 'y': currentY};
					positions[dataIndex] = thisFieldPosition;
					
					var thisField = new createjs.Text(getDataIndexFunction(data, dataIndex), "20px Open Sans", "#333");
					thisField.x = thisFieldPosition.x;
					thisField.y = thisFieldPosition.y;
					thisField.textAlign = "right";
					thisStage.addChild(thisField);
					
					console.log(thisField.getTransformedBounds());
					
					dataIndex++;
				}
				
				currentY += spaceY;
			}
			
			return positions;
		}
		
		this.showPermutation(BitArray.fromHex("0123456789ABCDEF"), 8, DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION, 8, BitArray.fromHex("FEDCBA9876543210"));
		
		/*var myOtherText = new createjs.Text("Hello World!", "20px Open Sans", "#333");
		
		this.addChild(myOtherText);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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
p.nominalBounds = new cjs.Rectangle(631.1,340.2,208,27.8);
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