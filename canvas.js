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


(lib.ViewButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("View", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 28;
	this.text.parent = this;
	this.text.setTransform(23.6,8.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rr(-40.8,-18.7,81.6,37.4,4);
	this.shape.setTransform(37.6,16.3,0.921,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ViewButton, new cjs.Rectangle(-1,-1,77.1,34.7), null);


(lib.TextBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.valueText = new cjs.Text("", "normal 400 14px 'Inconsolata'");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 16;
	this.valueText.lineWidth = 171;
	this.valueText.parent = this;
	this.valueText.setTransform(2,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.valueText);
	}

	this.timeline.addTween(cjs.Tween.get(this.valueText).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextBox, new cjs.Rectangle(0,0,174.6,25.1), null);


(lib.ShowTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhRBSIAAijICjAAIAACjg");
	this.shape.setTransform(8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,16.4);


(lib.roundTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.title = new cjs.Text("Round Output", "normal 400 12px 'Open Sans'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 18;
	this.title.lineWidth = 295;
	this.title.parent = this;
	this.title.setTransform(31.6,-187.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.title);
	}

	this.text = new cjs.Text("Round", "normal 400 12px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 58;
	this.text.parent = this;
	this.text.setTransform(-149,-187.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("16", "normal 400 12px 'Open Sans'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 27;
	this.text_1.parent = this;
	this.text_1.setTransform(-148.9,170.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("15", "normal 400 12px 'Open Sans'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 27;
	this.text_2.parent = this;
	this.text_2.setTransform(-148.9,147.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("14", "normal 400 12px 'Open Sans'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 27;
	this.text_3.parent = this;
	this.text_3.setTransform(-148.9,125.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("13", "normal 400 12px 'Open Sans'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 27;
	this.text_4.parent = this;
	this.text_4.setTransform(-148.9,103.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("12", "normal 400 12px 'Open Sans'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 27;
	this.text_5.parent = this;
	this.text_5.setTransform(-148.9,80.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("11", "normal 400 12px 'Open Sans'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 27;
	this.text_6.parent = this;
	this.text_6.setTransform(-148.9,57.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("10", "normal 400 12px 'Open Sans'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 27;
	this.text_7.parent = this;
	this.text_7.setTransform(-148.9,35.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("9", "normal 400 12px 'Open Sans'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 27;
	this.text_8.parent = this;
	this.text_8.setTransform(-148.9,12.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("8", "normal 400 12px 'Open Sans'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 27;
	this.text_9.parent = this;
	this.text_9.setTransform(-148.9,-9.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_9);
	}

	this.text_10 = new cjs.Text("7", "normal 400 12px 'Open Sans'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 27;
	this.text_10.parent = this;
	this.text_10.setTransform(-148.9,-32.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("6", "normal 400 12px 'Open Sans'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 27;
	this.text_11.parent = this;
	this.text_11.setTransform(-148.9,-55.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("5", "normal 400 12px 'Open Sans'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 27;
	this.text_12.parent = this;
	this.text_12.setTransform(-148.9,-77.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("4", "normal 400 12px 'Open Sans'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 18;
	this.text_13.lineWidth = 27;
	this.text_13.parent = this;
	this.text_13.setTransform(-148.9,-99.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_13);
	}

	this.text_14 = new cjs.Text("3", "normal 400 12px 'Open Sans'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 18;
	this.text_14.lineWidth = 27;
	this.text_14.parent = this;
	this.text_14.setTransform(-148.9,-122.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_14);
	}

	this.text_15 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 18;
	this.text_15.lineWidth = 27;
	this.text_15.parent = this;
	this.text_15.setTransform(-148.9,-144.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_15);
	}

	this.text_16 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 18;
	this.text_16.lineWidth = 27;
	this.text_16.parent = this;
	this.text_16.setTransform(-148.9,-167.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_16);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aye8NMAuuAAAIAADiMAAAA05MguuAAAIpsAAIAAi5IAAgsIAAhqIAAh4IAAhuA8K1KIAAjhIAAjiIJsAAIAADiIAADhIAADiIAADhIAADiIAADhIAADiIAADiIAADgIAADiIAADhIAADiIAADhIAADhIAADiIAADlA8PzrIAFAAIAAhfIJsAAMAupAAAA8KxoIAAiDA8KqTIAAgSIAAjiIAAjhIJsAAMAupAAAA8PqTIAFAAA8KmFIAAg/IAAjPA8PmFIAFAAA8KjbIAAgHIAAijA8PjbIAFAAA8KnEIJsAAMAupAAAA8KqlIJsAAMAupAAAA8KuHIJsAAMAupAAAA8K4rIJsAAMAuuAAAA8KjiIJsAAMAupAAAA8KAAIAAgJIAAhGIAAiMA8PBuIAFAAIAAhuIJsAAMAupAAAA8PgJIAFAAA8PhPIAFAAA8KD6IAAgaIAAhyA8PD6IAFAAA8PISIAFAAIAAhQIAAjIA8KKjIAAiRA8PM1IAFAAIAAiSIJsAAMAupAAAA8PP9IAFAAA8KRmIAAhpIAAh4IAAhQA8PTZIAFAAIAAhzIJsAAMAupAAAA8PW/IAFAAA8PZVIAFAAA8KVHIJsAAMAupAAAA8KHCIJsAAMAupAAAA8KDgIJsAAMAupAAAA8KOFIJsAAMAupAAAA8KYpIJsAAMAupAAA");
	this.shape.setTransform(0.3,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.title}]}).wait(1));

	// Layer 2
	this.field16 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field16.name = "field16";
	this.field16.textAlign = "center";
	this.field16.lineHeight = 18;
	this.field16.lineWidth = 276;
	this.field16.parent = this;
	this.field16.setTransform(41.4,170.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field16);
	}

	this.field15 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field15.name = "field15";
	this.field15.textAlign = "center";
	this.field15.lineHeight = 18;
	this.field15.lineWidth = 276;
	this.field15.parent = this;
	this.field15.setTransform(41.4,148.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field15);
	}

	this.field14 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field14.name = "field14";
	this.field14.textAlign = "center";
	this.field14.lineHeight = 18;
	this.field14.lineWidth = 276;
	this.field14.parent = this;
	this.field14.setTransform(41.4,125.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field14);
	}

	this.field13 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field13.name = "field13";
	this.field13.textAlign = "center";
	this.field13.lineHeight = 18;
	this.field13.lineWidth = 276;
	this.field13.parent = this;
	this.field13.setTransform(41.4,102.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field13);
	}

	this.field12 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field12.name = "field12";
	this.field12.textAlign = "center";
	this.field12.lineHeight = 18;
	this.field12.lineWidth = 276;
	this.field12.parent = this;
	this.field12.setTransform(41.4,80.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field12);
	}

	this.field11 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field11.name = "field11";
	this.field11.textAlign = "center";
	this.field11.lineHeight = 18;
	this.field11.lineWidth = 276;
	this.field11.parent = this;
	this.field11.setTransform(41.4,58);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field11);
	}

	this.text_17 = new cjs.Text("", "normal 400 12px 'Open Sans'", "#FFFFFF");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 18;
	this.text_17.lineWidth = 276;
	this.text_17.parent = this;
	this.text_17.setTransform(41.4,58);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_17);
	}

	this.field10 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field10.name = "field10";
	this.field10.textAlign = "center";
	this.field10.lineHeight = 18;
	this.field10.lineWidth = 276;
	this.field10.parent = this;
	this.field10.setTransform(41.4,35.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field10);
	}

	this.field9 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field9.name = "field9";
	this.field9.textAlign = "center";
	this.field9.lineHeight = 18;
	this.field9.lineWidth = 276;
	this.field9.parent = this;
	this.field9.setTransform(41.4,12.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field9);
	}

	this.field8 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field8.name = "field8";
	this.field8.textAlign = "center";
	this.field8.lineHeight = 18;
	this.field8.lineWidth = 276;
	this.field8.parent = this;
	this.field8.setTransform(41.4,-10.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field8);
	}

	this.field7 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field7.name = "field7";
	this.field7.textAlign = "center";
	this.field7.lineHeight = 18;
	this.field7.lineWidth = 276;
	this.field7.parent = this;
	this.field7.setTransform(41.4,-32.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field7);
	}

	this.field6 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field6.name = "field6";
	this.field6.textAlign = "center";
	this.field6.lineHeight = 18;
	this.field6.lineWidth = 276;
	this.field6.parent = this;
	this.field6.setTransform(41.4,-55.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field6);
	}

	this.field5 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 18;
	this.field5.lineWidth = 276;
	this.field5.parent = this;
	this.field5.setTransform(41.4,-77.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field5);
	}

	this.field4 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 18;
	this.field4.lineWidth = 276;
	this.field4.parent = this;
	this.field4.setTransform(41.4,-100);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field4);
	}

	this.field3 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 18;
	this.field3.lineWidth = 276;
	this.field3.parent = this;
	this.field3.setTransform(41.4,-122.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field3);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 18;
	this.field1.lineWidth = 276;
	this.field1.parent = this;
	this.field1.setTransform(41.4,-167.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field1);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 18;
	this.field2.lineWidth = 276;
	this.field2.parent = this;
	this.field2.setTransform(41.4,-144.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field2);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A8NdxMAAAg7gMA4aAAAMAAAA7gg");
	this.shape_1.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.field2},{t:this.field1},{t:this.field3},{t:this.field4},{t:this.field5},{t:this.field6},{t:this.field7},{t:this.field8},{t:this.field9},{t:this.field10},{t:this.text_17},{t:this.field11},{t:this.field12},{t:this.field13},{t:this.field14},{t:this.field15},{t:this.field16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roundTable, new cjs.Rectangle(-181.5,-189.3,363.6,381.9), null);


(lib.MediumTextBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(43.2,2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.MediumTextBox, new cjs.Rectangle(0,0,86.5,27.8), null);


(lib.keyTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.title = new cjs.Text("Title", "normal 400 12px 'Open Sans'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 18;
	this.title.lineWidth = 295;
	this.title.parent = this;
	this.title.setTransform(31.6,-187.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.title);
	}

	this.text = new cjs.Text("Round", "normal 400 12px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 58;
	this.text.parent = this;
	this.text.setTransform(-149,-187.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("16", "normal 400 12px 'Open Sans'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 27;
	this.text_1.parent = this;
	this.text_1.setTransform(-148.9,170.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("15", "normal 400 12px 'Open Sans'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 27;
	this.text_2.parent = this;
	this.text_2.setTransform(-148.9,147.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("14", "normal 400 12px 'Open Sans'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 27;
	this.text_3.parent = this;
	this.text_3.setTransform(-148.9,125.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("13", "normal 400 12px 'Open Sans'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 27;
	this.text_4.parent = this;
	this.text_4.setTransform(-148.9,103.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("12", "normal 400 12px 'Open Sans'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 27;
	this.text_5.parent = this;
	this.text_5.setTransform(-148.9,80.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("11", "normal 400 12px 'Open Sans'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 27;
	this.text_6.parent = this;
	this.text_6.setTransform(-148.9,57.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("10", "normal 400 12px 'Open Sans'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 27;
	this.text_7.parent = this;
	this.text_7.setTransform(-148.9,35.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("9", "normal 400 12px 'Open Sans'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 27;
	this.text_8.parent = this;
	this.text_8.setTransform(-148.9,12.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("8", "normal 400 12px 'Open Sans'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 27;
	this.text_9.parent = this;
	this.text_9.setTransform(-148.9,-9.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_9);
	}

	this.text_10 = new cjs.Text("7", "normal 400 12px 'Open Sans'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 27;
	this.text_10.parent = this;
	this.text_10.setTransform(-148.9,-32.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("6", "normal 400 12px 'Open Sans'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 27;
	this.text_11.parent = this;
	this.text_11.setTransform(-148.9,-55.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("5", "normal 400 12px 'Open Sans'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 27;
	this.text_12.parent = this;
	this.text_12.setTransform(-148.9,-77.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("4", "normal 400 12px 'Open Sans'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 18;
	this.text_13.lineWidth = 27;
	this.text_13.parent = this;
	this.text_13.setTransform(-148.9,-99.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_13);
	}

	this.text_14 = new cjs.Text("3", "normal 400 12px 'Open Sans'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 18;
	this.text_14.lineWidth = 27;
	this.text_14.parent = this;
	this.text_14.setTransform(-148.9,-122.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_14);
	}

	this.text_15 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 18;
	this.text_15.lineWidth = 27;
	this.text_15.parent = this;
	this.text_15.setTransform(-148.9,-144.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_15);
	}

	this.text_16 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 18;
	this.text_16.lineWidth = 27;
	this.text_16.parent = this;
	this.text_16.setTransform(-148.9,-167.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_16);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aye8NMAuuAAAIAADiMAAAA05MguuAAAIpsAAIAAi5IAAgsIAAhqIAAh4IAAhuIAAhzIAAhpIAAh4IAAhQIAAiSIAAiRIAAhQIAAjIIAAgaIAAhyA8KxoIAAiDIAAhfIAAjhIAAjiIJsAAIAADiIAADhIAADiIAADhIAADiIAADhIAADiMAupAAAA8PzrIAFAAA8KqlIAAjiIAAjhIJsAAMAupAAAA8PqTIAFAAIAAgSIJsAAMAupAAAA8KjiIAAijA8PjbIAFAAIAAgHIJsAAIAADiIAADgIAADiIAADhIAADiIAADhIAADhIAADiIAADlA8PmFIAFAAIAAg/IAAjPA8K1KIJsAAMAupAAAA8K4rIJsAAMAuuAAAA8KuHIJsAAMAupAAAA8KnEIJsAAMAupAAAA8KAAIAAgJIAAhGIAAiMA8PBuIAFAAIAAhuIJsAAMAupAAAA8PgJIAFAAA8PhPIAFAAA8PD6IAFAAA8PM1IAFAAA8PISIAFAAA8PTZIAFAAA8PP9IAFAAA8PZVIAFAAA8PW/IAFAAA8KYpIJsAAMAupAAAA8KRmIJsAAMAupAAAA8KOFIJsAAMAupAAAA8KDgIJsAAMAupAAAA8KHCIJsAAMAupAAAA8KKjIJsAAMAupAAAA8KVHIJsAAMAupAAA");
	this.shape.setTransform(0.3,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.title}]}).wait(1));

	// Layer 2
	this.field16 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field16.name = "field16";
	this.field16.textAlign = "center";
	this.field16.lineHeight = 18;
	this.field16.lineWidth = 276;
	this.field16.parent = this;
	this.field16.setTransform(41.4,170.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field16);
	}

	this.field15 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field15.name = "field15";
	this.field15.textAlign = "center";
	this.field15.lineHeight = 18;
	this.field15.lineWidth = 276;
	this.field15.parent = this;
	this.field15.setTransform(41.4,148.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field15);
	}

	this.field14 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field14.name = "field14";
	this.field14.textAlign = "center";
	this.field14.lineHeight = 18;
	this.field14.lineWidth = 276;
	this.field14.parent = this;
	this.field14.setTransform(41.4,125.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field14);
	}

	this.field13 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field13.name = "field13";
	this.field13.textAlign = "center";
	this.field13.lineHeight = 18;
	this.field13.lineWidth = 276;
	this.field13.parent = this;
	this.field13.setTransform(41.4,102.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field13);
	}

	this.field12 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field12.name = "field12";
	this.field12.textAlign = "center";
	this.field12.lineHeight = 18;
	this.field12.lineWidth = 276;
	this.field12.parent = this;
	this.field12.setTransform(41.4,80.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field12);
	}

	this.field11 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field11.name = "field11";
	this.field11.textAlign = "center";
	this.field11.lineHeight = 18;
	this.field11.lineWidth = 276;
	this.field11.parent = this;
	this.field11.setTransform(41.4,58);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field11);
	}

	this.text_17 = new cjs.Text("", "normal 400 12px 'Open Sans'", "#FFFFFF");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 18;
	this.text_17.lineWidth = 276;
	this.text_17.parent = this;
	this.text_17.setTransform(41.4,58);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_17);
	}

	this.field10 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field10.name = "field10";
	this.field10.textAlign = "center";
	this.field10.lineHeight = 18;
	this.field10.lineWidth = 276;
	this.field10.parent = this;
	this.field10.setTransform(41.4,35.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field10);
	}

	this.field9 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field9.name = "field9";
	this.field9.textAlign = "center";
	this.field9.lineHeight = 18;
	this.field9.lineWidth = 276;
	this.field9.parent = this;
	this.field9.setTransform(41.4,12.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field9);
	}

	this.field8 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field8.name = "field8";
	this.field8.textAlign = "center";
	this.field8.lineHeight = 18;
	this.field8.lineWidth = 276;
	this.field8.parent = this;
	this.field8.setTransform(41.4,-10.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field8);
	}

	this.field7 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field7.name = "field7";
	this.field7.textAlign = "center";
	this.field7.lineHeight = 18;
	this.field7.lineWidth = 276;
	this.field7.parent = this;
	this.field7.setTransform(41.4,-32.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field7);
	}

	this.field6 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field6.name = "field6";
	this.field6.textAlign = "center";
	this.field6.lineHeight = 18;
	this.field6.lineWidth = 276;
	this.field6.parent = this;
	this.field6.setTransform(41.4,-55.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field6);
	}

	this.field5 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 18;
	this.field5.lineWidth = 276;
	this.field5.parent = this;
	this.field5.setTransform(41.4,-77.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field5);
	}

	this.field4 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 18;
	this.field4.lineWidth = 276;
	this.field4.parent = this;
	this.field4.setTransform(41.4,-100);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field4);
	}

	this.field3 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 18;
	this.field3.lineWidth = 276;
	this.field3.parent = this;
	this.field3.setTransform(41.4,-122.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field3);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 18;
	this.field1.lineWidth = 276;
	this.field1.parent = this;
	this.field1.setTransform(41.4,-167.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field1);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 18;
	this.field2.lineWidth = 276;
	this.field2.parent = this;
	this.field2.setTransform(41.4,-144.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field2);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A8NdxMAAAg7gMA4aAAAMAAAA7gg");
	this.shape_1.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.field2},{t:this.field1},{t:this.field3},{t:this.field4},{t:this.field5},{t:this.field6},{t:this.field7},{t:this.field8},{t:this.field9},{t:this.field10},{t:this.text_17},{t:this.field11},{t:this.field12},{t:this.field13},{t:this.field14},{t:this.field15},{t:this.field16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.keyTable, new cjs.Rectangle(-181.5,-189.3,363.6,381.9), null);


(lib.Arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AAAhHIkODfIgZg8IEnjzIEoDzIgYA8g");
	this.shape.setTransform(29.6,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(0,0,59.1,30.4), null);


(lib.KeyGenRounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.right = new lib.MediumTextBox();
	this.right.parent = this;
	this.right.setTransform(879.4,189.8,1,1,0,0,0,43.2,13.9);

	this.left = new lib.MediumTextBox();
	this.left.parent = this;
	this.left.setTransform(792.4,189.8,1,1,0,0,0,43.2,13.9);

	this.dRot = new lib.TextBox();
	this.dRot.parent = this;
	this.dRot.setTransform(333.8,292.5,1,1,0,0,0,87.3,13.6);

	this.d = new lib.TextBox();
	this.d.parent = this;
	this.d.setTransform(87.5,292.5,1,1,0,0,0,87.3,13.6);

	this.dPerm = new lib.TextBox();
	this.dPerm.parent = this;
	this.dPerm.setTransform(836.5,291.1,1,1,0,0,0,87.3,13.6);

	this.c = new lib.TextBox();
	this.c.parent = this;
	this.c.setTransform(87.5,87.9,1,1,0,0,0,87.3,13.6);

	this.cPerm = new lib.TextBox();
	this.cPerm.parent = this;
	this.cPerm.setTransform(836.5,88.2,1,1,0,0,0,87.3,13.6);

	this.key = new lib.TextBox();
	this.key.parent = this;
	this.key.setTransform(1082.4,189.9,1,1,0,0,0,87.3,13.6);

	this.cRot = new lib.TextBox();
	this.cRot.parent = this;
	this.cRot.setTransform(333.8,87.8,1,1,0,0,0,87.3,13.6);

	this.text = new cjs.Text("", "normal 400 14px 'Open Sans'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(1028,164.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 47;
	this.text_1.parent = this;
	this.text_1.setTransform(996.3,150.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Rotate Scheduler", "normal 400 16px 'Open Sans'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 129;
	this.text_2.parent = this;
	this.text_2.setTransform(71.5,164.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 22;
	this.text_3.parent = this;
	this.text_3.setTransform(401.6,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 22;
	this.text_4.parent = this;
	this.text_4.setTransform(376,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 22;
	this.text_5.parent = this;
	this.text_5.setTransform(350.5,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 22;
	this.text_6.parent = this;
	this.text_6.setTransform(324.9,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 22;
	this.text_7.parent = this;
	this.text_7.setTransform(299.3,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 22;
	this.text_8.parent = this;
	this.text_8.setTransform(273.7,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 22;
	this.text_9.parent = this;
	this.text_9.setTransform(248.2,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_9);
	}

	this.text_10 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 22;
	this.text_10.parent = this;
	this.text_10.setTransform(222.6,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 22;
	this.text_11.parent = this;
	this.text_11.setTransform(197,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 22;
	this.text_12.parent = this;
	this.text_12.setTransform(171.4,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 18;
	this.text_13.lineWidth = 22;
	this.text_13.parent = this;
	this.text_13.setTransform(145.9,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_13);
	}

	this.text_14 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 18;
	this.text_14.lineWidth = 22;
	this.text_14.parent = this;
	this.text_14.setTransform(120.3,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_14);
	}

	this.text_15 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 18;
	this.text_15.lineWidth = 22;
	this.text_15.parent = this;
	this.text_15.setTransform(94.7,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_15);
	}

	this.text_16 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 18;
	this.text_16.lineWidth = 22;
	this.text_16.parent = this;
	this.text_16.setTransform(69.1,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_16);
	}

	this.text_17 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 18;
	this.text_17.lineWidth = 22;
	this.text_17.parent = this;
	this.text_17.setTransform(43.6,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_17);
	}

	this.text_18 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 18;
	this.text_18.lineWidth = 22;
	this.text_18.parent = this;
	this.text_18.setTransform(18,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_18);
	}

	this.permDBtn = new lib.ViewButton();
	this.permDBtn.parent = this;
	this.permDBtn.setTransform(547.7,314.3);
	new cjs.ButtonHelper(this.permDBtn, 0, 1, 1);

	this.text_19 = new cjs.Text("Permutation for D", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 39;
	this.text_19.lineWidth = 193;
	this.text_19.parent = this;
	this.text_19.setTransform(584.7,248.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_19);
	}

	this.permCBtn = new lib.ViewButton();
	this.permCBtn.parent = this;
	this.permCBtn.setTransform(547.7,108.6);
	new cjs.ButtonHelper(this.permCBtn, 0, 1, 1);

	this.text_20 = new cjs.Text("Permutation for C", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 39;
	this.text_20.lineWidth = 193;
	this.text_20.parent = this;
	this.text_20.setTransform(584.7,42.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_20);
	}

	this.text_21 = new cjs.Text("", "normal 400 16px 'Open Sans'");
	this.text_21.lineHeight = 23;
	this.text_21.lineWidth = 27;
	this.text_21.parent = this;
	this.text_21.setTransform(203.5,324.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_21);
	}

	this.text_22 = new cjs.Text("Times", "normal 400 16px 'Open Sans'");
	this.text_22.lineHeight = 23;
	this.text_22.lineWidth = 45;
	this.text_22.parent = this;
	this.text_22.setTransform(234.2,324.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_22);
	}

	this.text_23 = new cjs.Text("Rotate", "normal 400 16px 'Open Sans'");
	this.text_23.lineHeight = 23;
	this.text_23.lineWidth = 49;
	this.text_23.parent = this;
	this.text_23.setTransform(150.2,324.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_23);
	}

	this.text_24 = new cjs.Text("", "normal 400 16px 'Open Sans'");
	this.text_24.lineHeight = 23;
	this.text_24.lineWidth = 27;
	this.text_24.parent = this;
	this.text_24.setTransform(203.5,33.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_24);
	}

	this.text_25 = new cjs.Text("Times", "normal 400 16px 'Open Sans'");
	this.text_25.lineHeight = 23;
	this.text_25.lineWidth = 45;
	this.text_25.parent = this;
	this.text_25.setTransform(234.2,33.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_25);
	}

	this.text_26 = new cjs.Text("Rotate", "normal 400 16px 'Open Sans'");
	this.text_26.lineHeight = 23;
	this.text_26.lineWidth = 49;
	this.text_26.parent = this;
	this.text_26.setTransform(150.2,33.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_26);
	}

	this.text_27 = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.text_27.lineHeight = 20;
	this.text_27.lineWidth = 11;
	this.text_27.parent = this;
	this.text_27.setTransform(14.2,318.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_27);
	}

	this.text_28 = new cjs.Text("D", "normal 400 28px 'Open Sans'");
	this.text_28.lineHeight = 39;
	this.text_28.lineWidth = 20;
	this.text_28.parent = this;
	this.text_28.setTransform(1.4,306.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_28);
	}

	this.text_29 = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.text_29.lineHeight = 20;
	this.text_29.lineWidth = 11;
	this.text_29.parent = this;
	this.text_29.setTransform(14.8,60.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_29);
	}

	this.text_30 = new cjs.Text("C", "normal 400 28px 'Open Sans'");
	this.text_30.lineHeight = 39;
	this.text_30.lineWidth = 18;
	this.text_30.parent = this;
	this.text_30.setTransform(1.4,48.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_30);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBAFACCIAAiJIAAiHIbTAAIAAEQEBbYACII7TAAEAnNgCOINwAAIAACHIAACJAZqt3IAAiGIAAiKIbTAAIAAEQAZqCCIAAiWIAAh6INjAAIAAEQEAgagNmIAAJXAOiv9IJXAAAZqR2IAAh4IAAiYIbTAAIAAEQAOiP+IJXAAEAt/ANaIAApXEA09gNxI7TAAEA09AR9I7TAAEA09ACII7TAAEA09gAHIJXAAEgnSgSIINuAAIAACLIJWAAA5kv9IAACFA5kP+IAAiFA5kP+IJWAAEgnSASJINuAAIAAiLEhMlgSIIMhAAIAACLIJXAAEg03gN4IAAkQINlAAEhAEgP9IAACFEhLwgTqQBTiHB3h4QGFmEIlAAQIlAAGEGEQCiCiBfC/EhbXgN4IAAkQIOwAAEhLwATrQBTCHB3B4QGFGEIlAAQIlAAGEmEQCiiiBfi/EhbXAN5IAAEQIOwAAEhAEAP+IAAiFEhAEAP+IJXAAEhMlASJIMhAAIAAiLEg03AN5IAAEQINlAAEhAEgNyI7TAAEhAEANyI7TAAA5ktyI7TAAA5kNyI7TAA");
	this.shape.setTransform(584.8,190.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AufZOIAApqIAAhqIACAAIAAgxIgCAAIAAmOIc/AAIAAIpIAAJqgAufm6IAApdIAAh3IACAAIAAgxIgCAAIAAmOIc/AAIAAI2IAAJdg");
	this.shape_1.setTransform(585,192.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EhGQASJIAAgBIACABIB1A+Ig/AkIhDAkgAeQP+IAAhKIBxBKIhxBKgAp3P+IAAhKIByBKIhyBKgEgwWAP+IAAhKIBxBKIhxBKgEA0WAEDIhKAAIBKhxIBLBxgEBErgAHIAAhLIBxBLIhxBKgAf+gVIADABIgDACgEAlmgEPIBLAAIBKAAIhKBygAeQv9IAAhLIBxBLIhxBLgAp3v9IAAhLIByBLIhyBLgEgwWgP9IAAhLIBxBLIhxBLgEhGQgSIIgLiHIBDAlIA/AjIh1A/IgCABg");
	this.shape_2.setTransform(544.1,190.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.permCBtn},{t:this.text_19},{t:this.permDBtn},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.cRot},{t:this.key},{t:this.cPerm},{t:this.c},{t:this.dPerm},{t:this.d},{t:this.dRot},{t:this.left},{t:this.right}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.KeyGenRounds, new cjs.Rectangle(-1,-1,1171.6,382.3), null);


(lib.KeyGen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.roundKeys = new lib.TextBox();
	this.roundKeys.parent = this;
	this.roundKeys.setTransform(1045.2,130.6,1,1,0,0,0,87.3,13.6);

	this.d0 = new lib.TextBox();
	this.d0.parent = this;
	this.d0.setTransform(564.6,226.8,1,1,0,0,0,87.3,13.6);

	this.c0 = new lib.TextBox();
	this.c0.parent = this;
	this.c0.setTransform(563.7,41.1,1,1,0,0,0,87.3,13.6);

	this.key = new lib.TextBox();
	this.key.parent = this;
	this.key.setTransform(87.3,131.2,1,1,0,0,0,87.3,13.6);

	this.text = new cjs.Text("16 Round Keys", "normal 400 28px 'Open Sans'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 194;
	this.text.parent = this;
	this.text.setTransform(958.6,91.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.roundsBtn = new lib.ViewButton();
	this.roundsBtn.parent = this;
	this.roundsBtn.setTransform(757.3,152.9);
	new cjs.ButtonHelper(this.roundsBtn, 0, 1, 1);

	this.text_1 = new cjs.Text("Generate Round Keys", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 193;
	this.text_1.parent = this;
	this.text_1.setTransform(794.3,86.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 11;
	this.text_2.parent = this;
	this.text_2.setTransform(490.5,199.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 11;
	this.text_3.parent = this;
	this.text_3.setTransform(491.1,13.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("D", "normal 400 28px 'Open Sans'");
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 20;
	this.text_4.parent = this;
	this.text_4.setTransform(477.7,186.9,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("C", "normal 400 28px 'Open Sans'");
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 18;
	this.text_5.parent = this;
	this.text_5.setTransform(477.7,1.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("0", "normal 400 12px 'Open Sans'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 7;
	this.text_6.parent = this;
	this.text_6.setTransform(383.3,124.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("0", "normal 400 12px 'Open Sans'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 7;
	this.text_7.parent = this;
	this.text_7.setTransform(338.5,124.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.genCDBtn = new lib.ViewButton();
	this.genCDBtn.parent = this;
	this.genCDBtn.setTransform(300.7,153.7);
	new cjs.ButtonHelper(this.genCDBtn, 0, 1, 1);

	this.text_8 = new cjs.Text("Run Mapping for C  &  D", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 39;
	this.text_8.lineWidth = 193;
	this.text_8.parent = this;
	this.text_8.setTransform(337.7,87.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("64-bit Key", "normal 400 28px 'Open Sans'");
	this.text_9.lineHeight = 39;
	this.text_9.lineWidth = 144;
	this.text_9.parent = this;
	this.text_9.setTransform(1.5,91.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_9);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBYeABfIAAkPI7TAAIAACbIAAALIAABpEAyLgAQIJWAAEAjwgJIIAAlZI2XAAAuCuhIAAiLIbSAAIAAEQAuCOqIAAiTIbSAAIAAEQEAjwAJKIAAFQI2YAAEBYeABlI7TAAAuCscIAAiFEgkagJJIAAlYIWYAAAuCQnIAAh9EgkaAJSIAAFYIWYAAEg9KgAQIAAB1EhYdABlIAAkPIbTAAIAACaIJXAAEg9KABrI7TAAANQQtI7SAAANQsWI7SAA");
	this.shape.setTransform(566.3,134.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EA22AAAIAAhKIA5AnIAAgFIABAAIAAAFIAwAfIAAAJIhqBGgEg4fAAAIAAhKIA6AnIAAgFIABAAIAAAFIAvAfIAAAJIhqBGg");
	this.shape_1.setTransform(596.2,132.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1174C3").s().p("EgkaAJNItvAAIAArTIABAAIAAgwIgBAAIAAmPIc/AAIAASSgEAjwAJGIulAAIAArUIACAAIAAgwIgCAAIAAmPIOlAAIOaAAIAAI5IAAJag");
	this.shape_2.setTransform(566.3,134.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_9},{t:this.text_8},{t:this.genCDBtn},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.roundsBtn},{t:this.text},{t:this.key},{t:this.c0},{t:this.d0},{t:this.roundKeys}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.KeyGen, new cjs.Rectangle(-0.9,0,1134.4,242), null);


(lib.DES2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ciphertext = new lib.TextBox();
	this.ciphertext.parent = this;
	this.ciphertext.setTransform(1111.2,246,1,1,0,0,0,87.3,13.6);

	this.plaintext = new lib.TextBox();
	this.plaintext.parent = this;
	this.plaintext.setTransform(94,246.2,1,1,0,0,0,87.3,13.6);

	this.key = new lib.TextBox();
	this.key.parent = this;
	this.key.setTransform(350.5,63.3,1,1,0,0,0,87.3,13.6);

	this.initPermBtn = new lib.ViewButton();
	this.initPermBtn.parent = this;
	this.initPermBtn.setTransform(308.3,263.9);
	new cjs.ButtonHelper(this.initPermBtn, 0, 1, 1);

	this.perRoundBtn = new lib.ViewButton();
	this.perRoundBtn.parent = this;
	this.perRoundBtn.setTransform(564.6,77.3);
	new cjs.ButtonHelper(this.perRoundBtn, 0, 1, 1);

	this.instance = new lib.ShowTable();
	this.instance.parent = this;
	this.instance.setTransform(460.3,237.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.showRoundBtn = new lib.ShowTable();
	this.showRoundBtn.parent = this;
	this.showRoundBtn.setTransform(717.6,237.2);
	new cjs.ButtonHelper(this.showRoundBtn, 0, 1, 1);

	this.roundsBtn = new lib.ViewButton();
	this.roundsBtn.parent = this;
	this.roundsBtn.setTransform(564.6,263.9);
	new cjs.ButtonHelper(this.roundsBtn, 0, 1, 1);

	this.showKeyTableBtn = new lib.ShowTable();
	this.showKeyTableBtn.parent = this;
	this.showKeyTableBtn.setTransform(601.8,144.3,1,1,0,0,0,8.2,8.2);
	new cjs.ButtonHelper(this.showKeyTableBtn, 0, 1, 1);

	this.finalPermBtn = new lib.ViewButton();
	this.finalPermBtn.parent = this;
	this.finalPermBtn.setTransform(860.9,280.2,1,1,0,0,0,37.6,16.3);
	new cjs.ButtonHelper(this.finalPermBtn, 0, 1, 1);

	this.text = new cjs.Text("Ciphertext", "normal 400 28px 'Open Sans'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(1025.2,206.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("Final Permutation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 193;
	this.text_1.parent = this;
	this.text_1.setTransform(862.5,197.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Initial Permutation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 193;
	this.text_2.parent = this;
	this.text_2.setTransform(345.8,197.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("16 Rounds", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 193;
	this.text_3.parent = this;
	this.text_3.setTransform(601.6,197.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("Per Round Key Generation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 193;
	this.text_4.parent = this;
	this.text_4.setTransform(601.6,11.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 144;
	this.text_5.parent = this;
	this.text_5.setTransform(264.6,23.9,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Plaintext", "normal 400 28px 'Open Sans'");
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 144;
	this.text_6.parent = this;
	this.text_6.setTransform(7.8,206.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBdJAMHI7UAAIAAB/IAACYIbUAAgAUjOGIDZAAAOmOGIDZAAEA2tAOGIJXAAAgGl5IAAC+AgGgXIAAD0A5tugIAACUEg1AgMMIAAkRIbTAAIAAB9IJWAAA5lOGIDXAAAzqOGIDaAAEhdIAQYIAAkQIbTAAIAAEQEhBtAOGIJXAAEhB1AQeI7TAAA5tsHI7TAA");
	this.shape.setTransform(602.5,154.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AZqX3IAApbIAAh5IACAAIAAgxIgCAAIAAmOIc/AAIAAI4IAAJbgAuiX3IAApbIAAh5IABAAIAAgxIgBAAIAAmOIOYAAIOmAAIAASTgEg2oAX3IAApbIAAh5IACAAIAAgxIgCAAIAAmOIc/AAIAAI4IAAJbgAgKljIufAAIAAonIAAitIACAAIAAgxIgCAAIAAmOIc+AAIAASTg");
	this.shape_1.setTransform(602.9,152.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EA7VAOTIAAhKIBxBKIhxBLgATNOTIAAhKIByBKIhyBLgA0/OTIAAhKIBxBKIhxBLgEg9FAOTIAAhKIBxBKIhxBLgAl/DqIBKAAIBLAAIhLBygA1GuSIAAhLIByBLIhyBKg");
	this.shape_2.setTransform(632.8,153.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.finalPermBtn},{t:this.showKeyTableBtn},{t:this.roundsBtn},{t:this.showRoundBtn},{t:this.instance},{t:this.perRoundBtn},{t:this.initPermBtn},{t:this.key},{t:this.plaintext},{t:this.ciphertext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DES2, new cjs.Rectangle(5.5,0,1194.1,305.4), null);


(lib.DES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.finalPlaintext = new lib.TextBox();
	this.finalPlaintext.parent = this;
	this.finalPlaintext.setTransform(1069.7,190.2,1,1,0,0,0,87.3,13.6);

	this.key2 = new lib.TextBox();
	this.key2.parent = this;
	this.key2.setTransform(819.8,43.1,1,1,0,0,0,87.3,13.6);

	this.ciphertext = new lib.TextBox();
	this.ciphertext.parent = this;
	this.ciphertext.setTransform(567.1,187,1,1,0,0,0,87.3,13.6);

	this.initPlaintext = new lib.TextBox();
	this.initPlaintext.parent = this;
	this.initPlaintext.setTransform(87.4,230.9,1,1,0,0,0,87.3,13.6);

	this.key = new lib.TextBox();
	this.key.parent = this;
	this.key.setTransform(87.5,141.7,1,1,0,0,0,87.3,13.6);

	this.encryptBtn = new lib.ViewButton();
	this.encryptBtn.parent = this;
	this.encryptBtn.setTransform(278.5,201);
	new cjs.ButtonHelper(this.encryptBtn, 0, 1, 1);

	this.decryptBtn = new lib.ViewButton();
	this.decryptBtn.parent = this;
	this.decryptBtn.setTransform(783.5,201);
	new cjs.ButtonHelper(this.decryptBtn, 0, 1, 1);

	this.text = new cjs.Text("Plaintext", "normal 400 28px 'Open Sans'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(983.7,147.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 144;
	this.text_1.parent = this;
	this.text_1.setTransform(733.8,1.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("DES\nDecryption", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 174;
	this.text_2.parent = this;
	this.text_2.setTransform(820.6,139,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("DES\nEncryption", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 174;
	this.text_3.parent = this;
	this.text_3.setTransform(317.9,136,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("Ciphertext", "normal 400 28px 'Open Sans'");
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 144;
	this.text_4.parent = this;
	this.text_4.setTransform(481,145.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Plaintext", "normal 400 28px 'Open Sans'");
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 144;
	this.text_5.parent = this;
	this.text_5.setTransform(1.4,244.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 144;
	this.text_6.parent = this;
	this.text_6.setTransform(1.4,99.9,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBaZAGJI7TAAIAACQIAACHIbTAAgAYDslIAAkRIbTAAIAAEREAz+AIZIJWAAEAlegMfIAAJWEAzWgMfIt4AAItbAAAvcJ6IAAh5IAAiXIbSAAIAAB/IJXAAAL2HpIAACRA6kIBIJXAAEhNFAC6ItTAAIAAkWIbUAAIAAEWgEg5UAFjIzxAAIAAipEg5UAJ3IzxAAIAACoItTAAIAAEYIbUAAIAAkYIuBAAAL2KAI7SAA");
	this.shape.setTransform(578.6,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AYyJMIAApRIAAiCIACAAIAAgxIgCAAIAAmOIOfAAIOgAAIAAJwIAAIigEg1wAJHIAAm/IAAkTIAAgBIACAAIAAgxIgCAAIAAmOIc/AAIAAJdIAAI1g");
	this.shape_1.setTransform(567,184.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg8NAF7IAAhLIByBLIhyBKgEA6cAEdIAAhKIBxBKIhxBLgA0GEFIAAhKIByBKIhyBLgASVDtIAAhKIBxBKIhxBLgEg8NABnIAAhKIByBKIhyBLgEAhbgHEIBKAAIBLAAIhLBxg");
	this.shape_2.setTransform(597,160.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.decryptBtn},{t:this.encryptBtn},{t:this.key},{t:this.initPlaintext},{t:this.ciphertext},{t:this.key2},{t:this.finalPlaintext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DES, new cjs.Rectangle(-0.9,0,1159,270.5), null);


// stage content:
(lib.EncryptOrDecrypt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{DES:0,Encrypt:1,"Key Gen":2,"Key Rounds":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// Globally accessible canvas object
		var canvas = this;
		
		// Global round number
		var round = 4;
		
		// Global DES data
		var roundRawData = ["round1", "round2", "round3", "round4"];
		var keyRawData = ["key1", "key2", "key3", "key4"];
		
		
		document.initializeEncryptionObject = function(encryptionObject) {
			canvas.encryptionObject=encryptionObject;
			canvas.des.key.valueText.text=canvas.encryptionObject.key.toHexString(2);
			canvas.des.initPlaintext.valueText.text=canvas.encryptionObject.input.toHexString(2);
			canvas.des.ciphertext.valueText.text=canvas.encryptionObject.final.toHexString(2);
			canvas.des.key2.valueText.text=canvas.encryptionObject.key.toHexString(2);
		}
		
		// ================== Testing Code ====================
		
		buildEncryptionFrame();
		
		// ====================================================
		
		function buildEncryptionFrame(){	
		
			// Populate the tables with the appropriate information based on which round of DES we are showing. 
			for(var i = 0; i <= round; i++){
				if(i == 0)
					canvas.keyTable.field1.text = keyRawData[i];
				else if(i == 1)
					canvas.keyTable.field2.text = keyRawData[i];
				else if(i == 2)
					canvas.keyTable.field3.text = keyRawData[i];
				else if(i == 3)
					canvas.keyTable.field4.text = keyRawData[i];
			}
		}
		
		// Event listeners
		
		if (!this.des.encryptBtn.hasEventListener("click")) {
			this.des.encryptBtn.addEventListener("click", encryptClicked.bind(this));
		}
		function encryptClicked() {
			this.gotoAndStop("Encrypt");
		}
		
		if (!this.des.decryptBtn.hasEventListener("click")) {
			this.des.decryptBtn.addEventListener("click", decryptClicked.bind(this));
		}
		function decryptClicked() {
			alert("You clicked the Decrypt Button.");
		}
	}
	this.frame_1 = function() {
		// Set text:
		this.des2.key.valueText.text=this.encryptionObject.key.toHexString(2);
		this.des2.plaintext.valueText.text=this.encryptionObject.input.toHexString(2);
		this.des2.ciphertext.valueText.text=this.encryptionObject.final.toHexString(2);
		
		// Hide Tables
		
		this.keyTable.visible=false;
		this.roundTable.visible=false;
		
		// Event Listeners
		
		if (!this.des2.finalPermBtn.hasEventListener("click")) {
			this.des2.finalPermBtn.addEventListener("click", finalPermClicked.bind(this));
		}
		function finalPermClicked() {
			alert("You clicked the Final Permutation Button.");
		}
		
		if (!this.des2.perRoundBtn.hasEventListener("click")) {
			this.des2.perRoundBtn.addEventListener("click", perRoundClicked.bind(this));
		}
		function perRoundClicked() {
			this.gotoAndStop("Key Gen");
		}
		
		if (!this.des2.roundsBtn.hasEventListener("click")) {
			this.des2.roundsBtn.addEventListener("click", roundsClicked.bind(this));
		}
		function roundsClicked() {
			alert("You clicked the 16 Rounds Button.");
		}
		
		if (!this.des2.initPermBtn.hasEventListener("click")) {
			this.des2.initPermBtn.addEventListener("click", initPermClicked.bind(this));
		}
		function initPermClicked() {
			alert("You clicked the Initial Permutation Button.");
		}
		
		if (!this.des2.showKeyTableBtn.hasEventListener("click")) {
			this.des2.showKeyTableBtn.addEventListener("mouseover", showKeyTable.bind(this));
		}
		function showKeyTable(){
			this.keyTable.visible = true;
		}
		
		if (!this.des2.showKeyTableBtn.hasEventListener("click")) {
			this.des2.showKeyTableBtn.addEventListener("mouseout", hideKeyTable.bind(this));
		}
		function hideKeyTable() {
			this.keyTable.visible = false;
		}
		
		if (!this.des2.showRoundBtn.hasEventListener("click")) {
			this.des2.showRoundBtn.addEventListener("mouseover", showRoundTable.bind(this));
		}
		function showRoundTable(){
			this.roundTable.visible = true;
		}
		
		if (!this.des2.showRoundBtn.hasEventListener("click")) {
			this.des2.showRoundBtn.addEventListener("mouseout", hideRoundTable.bind(this));
		}
		function hideRoundTable() {
			this.roundTable.visible = false;
		}
		
		if (!this.backToMain.hasEventListener("click")) {
			this.backToMain.addEventListener("click", backToMainClicked.bind(this));
		}
		function backToMainClicked() {
			this.gotoAndStop("DES");
		}
	}
	this.frame_2 = function() {
		// Event Listeners:
		
		if (!this.keyGen.roundsBtn.hasEventListener("click")) {
			this.keyGen.roundsBtn.addEventListener("click", roundsClicked.bind(this));
		}
		function roundsClicked() {
			this.gotoAndStop("Key Rounds");
		}
		
		if (!this.keyGen.genCDBtn.hasEventListener("click")) {
			this.keyGen.genCDBtn.addEventListener("click", genCDClicked.bind(this));
		}
		function genCDClicked() {
			alert("Generate C & D Button Clicked!");
		}
		
		if (!this.backToEncryption.hasEventListener("click")) {
			this.backToEncryption.addEventListener("click", backToEncryptClicked.bind(this));
		}
		function backToEncryptClicked() {
			this.gotoAndStop("Encrypt");
		}
	}
	this.frame_3 = function() {
		// Event Listeners:
		
		if (!this.keyGenRounds.permCBtn.hasEventListener("click")) {
			this.keyGenRounds.permCBtn.addEventListener("click", permCClicked.bind(this));
		}
		function permCClicked() {
			alert("Permute C Button Clicked!");
		}
		
		if (!this.keyGenRounds.permDBtn.hasEventListener("click")) {
			this.keyGenRounds.permDBtn.addEventListener("click", permDClicked.bind(this));
		}
		function permDClicked() {
			alert("Permute D Button Clicked!");
		}
		
		if (!this.backToKeyGen.hasEventListener("click")) {
			this.backToKeyGen.addEventListener("click", backToKeyGenClicked.bind(this));
		}
		function backToKeyGenClicked() {
			this.gotoAndStop("Key Gen");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(2));

	// Labels
	this.text = new cjs.Text("Data Encryption Standard (DES)", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 725;
	this.text.parent = this;
	this.text.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(4));

	// DES
	this.des = new lib.DES();
	this.des.parent = this;
	this.des.setTransform(600.6,300.5,1,1,0,0,0,578.6,135.2);

	this.timeline.addTween(cjs.Tween.get(this.des).to({_off:true},1).wait(4));

	// Tables
	this.keyTable = new lib.keyTable();
	this.keyTable.parent = this;
	this.keyTable.setTransform(293.6,275.2,1,1,0,0,0,0.3,1.4);

	this.roundTable = new lib.roundTable();
	this.roundTable.parent = this;
	this.roundTable.setTransform(946.1,275.2,1,1,0,0,0,0.3,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.roundTable},{t:this.keyTable}]},1).to({state:[]},1).wait(3));

	// DES 2
	this.backToMain = new lib.Arrow();
	this.backToMain.parent = this;
	this.backToMain.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.backToMain, 0, 1, 1);

	this.text_1 = new cjs.Text("DES Encryption", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 65;
	this.text_1.lineWidth = 725;
	this.text_1.parent = this;
	this.text_1.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.des2 = new lib.DES2();
	this.des2.parent = this;
	this.des2.setTransform(593.8,307.5,1,1,0,0,0,596.1,152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.des2},{t:this.text_1},{t:this.backToMain}]},1).to({state:[]},1).wait(3));

	// Key Gen
	this.backToEncryption = new lib.Arrow();
	this.backToEncryption.parent = this;
	this.backToEncryption.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.backToEncryption, 0, 1, 1);

	this.text_2 = new cjs.Text("Round Key Generation", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 65;
	this.text_2.lineWidth = 725;
	this.text_2.parent = this;
	this.text_2.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.keyGen = new lib.KeyGen();
	this.keyGen.parent = this;
	this.keyGen.setTransform(600.6,300.8,1,1,0,0,0,566.3,120.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.keyGen},{t:this.text_2},{t:this.backToEncryption}]},2).to({state:[]},1).wait(2));

	// Key Rounds
	this.backToKeyGen = new lib.Arrow();
	this.backToKeyGen.parent = this;
	this.backToKeyGen.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.backToKeyGen, 0, 1, 1);

	this.text_3 = new cjs.Text("Key Rounds", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 65;
	this.text_3.lineWidth = 725;
	this.text_3.parent = this;
	this.text_3.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.keyGenRounds = new lib.KeyGenRounds();
	this.keyGenRounds.parent = this;
	this.keyGenRounds.setTransform(600.5,332.6,1,1,0,0,0,584.8,190.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.keyGenRounds},{t:this.text_3},{t:this.backToKeyGen}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(621.6,317.9,1158,417.9);
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