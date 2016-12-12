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


(lib.XOR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIAABIABIAAIhIAAAAAhHIAABHIhHAA");
	this.shape.setTransform(12.2,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("AAAh6QAzAAAkAlQAjAjAAAyQAAAzgjAjQgkAlgzAAQgxAAgkglQgkgjAAgzQAAgyAkgjQAkglAxAAg");
	this.shape_1.setTransform(12.2,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.XOR, new cjs.Rectangle(-1,-1,26.5,26.5), null);


(lib.viewDBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("View D", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(17.6,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rr(-40.8,-18.7,81.6,37.4,4);
	this.shape.setTransform(37.6,16.3,0.921,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.1,34.7);


(lib.viewCBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("View C", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(17.6,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rr(-40.8,-18.7,81.6,37.4,4);
	this.shape.setTransform(37.6,16.3,0.921,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.1,34.7);


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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.1,34.7);


(lib.Table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var fields = [ this.field1, this.field2, this.field3, this.field4, this.field5, this.field6, this.field7, this.field8, this.field9, this.field10, this.field11, this.field12, this.field13, this.field14, this.field15, this.field16 ];
		
		this.setData = (function (title, values) {	
			this.title.text = title;
			
			for (let i = 0; i < values.length; i++) {
				fields[i].text = values[i].toHexString(2);
			}
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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
	this.field16 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field16.name = "field16";
	this.field16.textAlign = "center";
	this.field16.lineHeight = 14;
	this.field16.lineWidth = 276;
	this.field16.parent = this;
	this.field16.setTransform(41.4,170.3);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field16);
	}

	this.field15 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field15.name = "field15";
	this.field15.textAlign = "center";
	this.field15.lineHeight = 14;
	this.field15.lineWidth = 276;
	this.field15.parent = this;
	this.field15.setTransform(41.4,148.2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field15);
	}

	this.field14 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field14.name = "field14";
	this.field14.textAlign = "center";
	this.field14.lineHeight = 14;
	this.field14.lineWidth = 276;
	this.field14.parent = this;
	this.field14.setTransform(41.4,125.7);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field14);
	}

	this.field13 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field13.name = "field13";
	this.field13.textAlign = "center";
	this.field13.lineHeight = 14;
	this.field13.lineWidth = 276;
	this.field13.parent = this;
	this.field13.setTransform(41.4,102.8);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field13);
	}

	this.field12 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field12.name = "field12";
	this.field12.textAlign = "center";
	this.field12.lineHeight = 14;
	this.field12.lineWidth = 276;
	this.field12.parent = this;
	this.field12.setTransform(41.4,80.3);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field12);
	}

	this.field11 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field11.name = "field11";
	this.field11.textAlign = "center";
	this.field11.lineHeight = 14;
	this.field11.lineWidth = 276;
	this.field11.parent = this;
	this.field11.setTransform(41.4,58);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field11);
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

	this.field10 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field10.name = "field10";
	this.field10.textAlign = "center";
	this.field10.lineHeight = 14;
	this.field10.lineWidth = 276;
	this.field10.parent = this;
	this.field10.setTransform(41.4,35.6);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field10);
	}

	this.field9 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field9.name = "field9";
	this.field9.textAlign = "center";
	this.field9.lineHeight = 14;
	this.field9.lineWidth = 276;
	this.field9.parent = this;
	this.field9.setTransform(41.4,12.3);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field9);
	}

	this.field8 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field8.name = "field8";
	this.field8.textAlign = "center";
	this.field8.lineHeight = 14;
	this.field8.lineWidth = 276;
	this.field8.parent = this;
	this.field8.setTransform(41.4,-10.2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field8);
	}

	this.field7 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field7.name = "field7";
	this.field7.textAlign = "center";
	this.field7.lineHeight = 14;
	this.field7.lineWidth = 276;
	this.field7.parent = this;
	this.field7.setTransform(41.4,-32.7);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field7);
	}

	this.field6 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field6.name = "field6";
	this.field6.textAlign = "center";
	this.field6.lineHeight = 14;
	this.field6.lineWidth = 276;
	this.field6.parent = this;
	this.field6.setTransform(41.4,-55.2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field6);
	}

	this.field5 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 14;
	this.field5.lineWidth = 276;
	this.field5.parent = this;
	this.field5.setTransform(41.4,-77.7);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field5);
	}

	this.field4 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 14;
	this.field4.lineWidth = 276;
	this.field4.parent = this;
	this.field4.setTransform(41.4,-100);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field4);
	}

	this.field3 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 14;
	this.field3.lineWidth = 276;
	this.field3.parent = this;
	this.field3.setTransform(41.4,-122.5);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field3);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 14;
	this.field1.lineWidth = 276;
	this.field1.parent = this;
	this.field1.setTransform(41.4,-167.5);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field1);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 14;
	this.field2.lineWidth = 276;
	this.field2.parent = this;
	this.field2.setTransform(41.4,-144.9);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field2);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A8NdxMAAAg7gMA4aAAAMAAAA7gg");
	this.shape_1.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.field2},{t:this.field1},{t:this.field3},{t:this.field4},{t:this.field5},{t:this.field6},{t:this.field7},{t:this.field8},{t:this.field9},{t:this.field10},{t:this.text_17},{t:this.field11},{t:this.field12},{t:this.field13},{t:this.field14},{t:this.field15},{t:this.field16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Table, new cjs.Rectangle(-181.5,-189.3,363.6,381.9), null);


(lib.SixBitLow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.setValue = (function(bitArray) {
			for (let i = 0; i < 6; i++) {
				this["field" + i].text = bitArray.get(i)? "1" : "0";
			}
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.field5 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 17;
	this.field5.lineWidth = 15;
	this.field5.parent = this;
	this.field5.setTransform(105.9,7.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field5);
	}

	this.field4 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 17;
	this.field4.lineWidth = 15;
	this.field4.parent = this;
	this.field4.setTransform(86.6,7.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field4);
	}

	this.field3 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 17;
	this.field3.lineWidth = 15;
	this.field3.parent = this;
	this.field3.setTransform(67.4,7.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field3);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 17;
	this.field2.lineWidth = 15;
	this.field2.parent = this;
	this.field2.setTransform(48.1,7.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field2);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 17;
	this.field1.lineWidth = 15;
	this.field1.parent = this;
	this.field1.setTransform(28.9,7.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field1);
	}

	this.field0 = new cjs.Text("", "normal 400 12px 'Inconsolata'");
	this.field0.name = "field0";
	this.field0.textAlign = "center";
	this.field0.lineHeight = 17;
	this.field0.lineWidth = 15;
	this.field0.parent = this;
	this.field0.setTransform(9.6,7.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field0);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.field0},{t:this.field1},{t:this.field2},{t:this.field3},{t:this.field4},{t:this.field5}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,1).p("AAAiLIAAEX");
	this.shape.setTransform(77.2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AGCiLIAAEXAGCiLIDBAAIAAEXIjBAAIjBAAIjBAAIjAAAIjBAAIjBAAIAAkXIDBAAIAAEXAAAiLIAAEXAAAiLIDBAAIDBAAAjAiLIAAEXAmBiLIDBAAIDAAA");
	this.shape_1.setTransform(57.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SixBitLow, new cjs.Rectangle(-1,-1,117.8,34), null);


(lib.ShowTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhRBSIAAijICjAAIAACjg");
	this.shape.setTransform(8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,16.4);


(lib.row1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.field15 = new cjs.Text("1111", "normal 400 14px 'Inconsolata'");
	this.field15.name = "field15";
	this.field15.textAlign = "center";
	this.field15.lineHeight = 16;
	this.field15.lineWidth = 42;
	this.field15.parent = this;
	this.field15.setTransform(706.8,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field15);
	}

	this.field15_1 = new cjs.Text("1110", "normal 400 14px 'Inconsolata'");
	this.field15_1.name = "field15_1";
	this.field15_1.textAlign = "center";
	this.field15_1.lineHeight = 16;
	this.field15_1.lineWidth = 42;
	this.field15_1.parent = this;
	this.field15_1.setTransform(661.2,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field15_1);
	}

	this.field14 = new cjs.Text("1101", "normal 400 14px 'Inconsolata'");
	this.field14.name = "field14";
	this.field14.textAlign = "center";
	this.field14.lineHeight = 16;
	this.field14.lineWidth = 42;
	this.field14.parent = this;
	this.field14.setTransform(615.6,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field14);
	}

	this.field13 = new cjs.Text("1100", "normal 400 14px 'Inconsolata'");
	this.field13.name = "field13";
	this.field13.textAlign = "center";
	this.field13.lineHeight = 16;
	this.field13.lineWidth = 42;
	this.field13.parent = this;
	this.field13.setTransform(570,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field13);
	}

	this.field11 = new cjs.Text("1011", "normal 400 14px 'Inconsolata'");
	this.field11.name = "field11";
	this.field11.textAlign = "center";
	this.field11.lineHeight = 16;
	this.field11.lineWidth = 42;
	this.field11.parent = this;
	this.field11.setTransform(524.4,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field11);
	}

	this.field10 = new cjs.Text("1010", "normal 400 14px 'Inconsolata'");
	this.field10.name = "field10";
	this.field10.textAlign = "center";
	this.field10.lineHeight = 16;
	this.field10.lineWidth = 42;
	this.field10.parent = this;
	this.field10.setTransform(478.8,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field10);
	}

	this.field9 = new cjs.Text("1001", "normal 400 14px 'Inconsolata'");
	this.field9.name = "field9";
	this.field9.textAlign = "center";
	this.field9.lineHeight = 16;
	this.field9.lineWidth = 42;
	this.field9.parent = this;
	this.field9.setTransform(433.2,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field9);
	}

	this.field8 = new cjs.Text("1000", "normal 400 14px 'Inconsolata'");
	this.field8.name = "field8";
	this.field8.textAlign = "center";
	this.field8.lineHeight = 16;
	this.field8.lineWidth = 42;
	this.field8.parent = this;
	this.field8.setTransform(387.6,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field8);
	}

	this.field7 = new cjs.Text("0111", "normal 400 14px 'Inconsolata'");
	this.field7.name = "field7";
	this.field7.textAlign = "center";
	this.field7.lineHeight = 16;
	this.field7.lineWidth = 42;
	this.field7.parent = this;
	this.field7.setTransform(342,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field7);
	}

	this.field6 = new cjs.Text("0110", "normal 400 14px 'Inconsolata'");
	this.field6.name = "field6";
	this.field6.textAlign = "center";
	this.field6.lineHeight = 16;
	this.field6.lineWidth = 42;
	this.field6.parent = this;
	this.field6.setTransform(296.4,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field6);
	}

	this.field5 = new cjs.Text("0101", "normal 400 14px 'Inconsolata'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 16;
	this.field5.lineWidth = 42;
	this.field5.parent = this;
	this.field5.setTransform(250.8,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field5);
	}

	this.field4 = new cjs.Text("0100", "normal 400 14px 'Inconsolata'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 16;
	this.field4.lineWidth = 42;
	this.field4.parent = this;
	this.field4.setTransform(205.2,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field4);
	}

	this.field3 = new cjs.Text("0011", "normal 400 14px 'Inconsolata'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 16;
	this.field3.lineWidth = 42;
	this.field3.parent = this;
	this.field3.setTransform(159.6,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field3);
	}

	this.field2 = new cjs.Text("0010", "normal 400 14px 'Inconsolata'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 16;
	this.field2.lineWidth = 42;
	this.field2.parent = this;
	this.field2.setTransform(114,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field2);
	}

	this.field1 = new cjs.Text("0001", "normal 400 14px 'Inconsolata'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 16;
	this.field1.lineWidth = 42;
	this.field1.parent = this;
	this.field1.setTransform(68.4,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field1);
	}

	this.field0 = new cjs.Text("0000", "normal 400 14px 'Inconsolata'");
	this.field0.name = "field0";
	this.field0.textAlign = "center";
	this.field0.lineHeight = 16;
	this.field0.lineWidth = 42;
	this.field0.parent = this;
	this.field0.setTransform(22.8,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field0);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.field0},{t:this.field1},{t:this.field2},{t:this.field3},{t:this.field4},{t:this.field5},{t:this.field6},{t:this.field7},{t:this.field8},{t:this.field9},{t:this.field10},{t:this.field11},{t:this.field13},{t:this.field14},{t:this.field15_1},{t:this.field15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.row1, new cjs.Rectangle(0,0,729.6,22.5), null);


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


(lib.rightHalfBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Right Half", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.parent = this;
	this.text.setTransform(11.6,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rr(-40.8,-18.7,81.6,37.4,4);
	this.shape.setTransform(37.6,16.3,0.921,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.1,34.7);


(lib.leftHalfBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Left Half", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.parent = this;
	this.text.setTransform(15.1,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rr(-40.8,-18.7,81.6,37.4,4);
	this.shape.setTransform(37.6,16.3,0.921,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.1,34.7);


(lib.HexDisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisStage = this;
		
		//Move forward and down a little, to fit the text more properly visually
		this.valueTxt.x = 5;
		this.valueTxt.y = 4;
		
		this.setValue = function(bitArray) {
			thisStage.valueTxt.text = bitArray.toHexString(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text Field
	this.valueTxt = new cjs.Text("", "normal 400 14px 'Inconsolata'");
	this.valueTxt.name = "valueTxt";
	this.valueTxt.lineHeight = 16;
	this.valueTxt.lineWidth = 171;
	this.valueTxt.parent = this;
	this.valueTxt.setTransform(2,2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.valueTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.valueTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.HexDisplay, new cjs.Rectangle(0,0,174.6,25.1), null);


(lib.downArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAABsIAAgDIAAjV");
	this.shape.setTransform(7.6,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKg4IBLAAIAAADIAAgDIBKAAIhLBxgAABg4g");
	this.shape_1.setTransform(7.5,51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.downArrow, new cjs.Rectangle(0,23.9,14.9,33.8), null);


(lib.bitString32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.setValue = (function(bitArray) {
			for (let i = 0; i < 32; i++) {
				this["field" + i].text = bitArray.get(i)? "1" : "0";
			}
			
			this.wrapFirst.text = bitArray.get(31)? "1" : "0";
			this.wrapLast.text = bitArray.get(0)? "1" : "0";
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.label = new cjs.Text("Input Bits (R)", "normal 400 16px 'Open Sans'");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 23;
	this.label.lineWidth = 652;
	this.label.parent = this;
	this.label.setTransform(308.9,-25.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.label);
	}

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Layer 2
	this.wrapLast = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.wrapLast.name = "wrapLast";
	this.wrapLast.textAlign = "center";
	this.wrapLast.lineHeight = 18;
	this.wrapLast.lineWidth = 15;
	this.wrapLast.parent = this;
	this.wrapLast.setTransform(627.2,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.wrapLast);
	}

	this.wrapFirst = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.wrapFirst.name = "wrapFirst";
	this.wrapFirst.textAlign = "center";
	this.wrapFirst.lineHeight = 18;
	this.wrapFirst.lineWidth = 15;
	this.wrapFirst.parent = this;
	this.wrapFirst.setTransform(-9.6,7.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.wrapFirst);
	}

	this.field30 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field30.name = "field30";
	this.field30.textAlign = "center";
	this.field30.lineHeight = 18;
	this.field30.lineWidth = 15;
	this.field30.parent = this;
	this.field30.setTransform(588.7,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field30);
	}

	this.field31 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field31.name = "field31";
	this.field31.textAlign = "center";
	this.field31.lineHeight = 18;
	this.field31.lineWidth = 15;
	this.field31.parent = this;
	this.field31.setTransform(608,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field31);
	}

	this.field28 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field28.name = "field28";
	this.field28.textAlign = "center";
	this.field28.lineHeight = 18;
	this.field28.lineWidth = 15;
	this.field28.parent = this;
	this.field28.setTransform(550.1,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field28);
	}

	this.field29 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field29.name = "field29";
	this.field29.textAlign = "center";
	this.field29.lineHeight = 18;
	this.field29.lineWidth = 15;
	this.field29.parent = this;
	this.field29.setTransform(569.3,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field29);
	}

	this.field26 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field26.name = "field26";
	this.field26.textAlign = "center";
	this.field26.lineHeight = 18;
	this.field26.lineWidth = 15;
	this.field26.parent = this;
	this.field26.setTransform(511.5,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field26);
	}

	this.field27 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field27.name = "field27";
	this.field27.textAlign = "center";
	this.field27.lineHeight = 18;
	this.field27.lineWidth = 15;
	this.field27.parent = this;
	this.field27.setTransform(530.8,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field27);
	}

	this.field24 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field24.name = "field24";
	this.field24.textAlign = "center";
	this.field24.lineHeight = 18;
	this.field24.lineWidth = 15;
	this.field24.parent = this;
	this.field24.setTransform(472.9,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field24);
	}

	this.field25 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field25.name = "field25";
	this.field25.textAlign = "center";
	this.field25.lineHeight = 18;
	this.field25.lineWidth = 15;
	this.field25.parent = this;
	this.field25.setTransform(492.1,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field25);
	}

	this.field22 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field22.name = "field22";
	this.field22.textAlign = "center";
	this.field22.lineHeight = 18;
	this.field22.lineWidth = 15;
	this.field22.parent = this;
	this.field22.setTransform(434.3,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field22);
	}

	this.field23 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field23.name = "field23";
	this.field23.textAlign = "center";
	this.field23.lineHeight = 18;
	this.field23.lineWidth = 15;
	this.field23.parent = this;
	this.field23.setTransform(453.6,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field23);
	}

	this.field20 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field20.name = "field20";
	this.field20.textAlign = "center";
	this.field20.lineHeight = 18;
	this.field20.lineWidth = 15;
	this.field20.parent = this;
	this.field20.setTransform(395.7,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field20);
	}

	this.field21 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field21.name = "field21";
	this.field21.textAlign = "center";
	this.field21.lineHeight = 18;
	this.field21.lineWidth = 15;
	this.field21.parent = this;
	this.field21.setTransform(414.9,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field21);
	}

	this.field18 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field18.name = "field18";
	this.field18.textAlign = "center";
	this.field18.lineHeight = 18;
	this.field18.lineWidth = 15;
	this.field18.parent = this;
	this.field18.setTransform(357.1,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field18);
	}

	this.field19 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field19.name = "field19";
	this.field19.textAlign = "center";
	this.field19.lineHeight = 18;
	this.field19.lineWidth = 15;
	this.field19.parent = this;
	this.field19.setTransform(376.4,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field19);
	}

	this.field16 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field16.name = "field16";
	this.field16.textAlign = "center";
	this.field16.lineHeight = 18;
	this.field16.lineWidth = 15;
	this.field16.parent = this;
	this.field16.setTransform(318.5,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field16);
	}

	this.field17 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field17.name = "field17";
	this.field17.textAlign = "center";
	this.field17.lineHeight = 18;
	this.field17.lineWidth = 15;
	this.field17.parent = this;
	this.field17.setTransform(337.7,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field17);
	}

	this.field14 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field14.name = "field14";
	this.field14.textAlign = "center";
	this.field14.lineHeight = 18;
	this.field14.lineWidth = 15;
	this.field14.parent = this;
	this.field14.setTransform(279.9,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field14);
	}

	this.field15 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field15.name = "field15";
	this.field15.textAlign = "center";
	this.field15.lineHeight = 18;
	this.field15.lineWidth = 15;
	this.field15.parent = this;
	this.field15.setTransform(299.2,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field15);
	}

	this.field12 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field12.name = "field12";
	this.field12.textAlign = "center";
	this.field12.lineHeight = 18;
	this.field12.lineWidth = 15;
	this.field12.parent = this;
	this.field12.setTransform(241.3,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field12);
	}

	this.field13 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field13.name = "field13";
	this.field13.textAlign = "center";
	this.field13.lineHeight = 18;
	this.field13.lineWidth = 15;
	this.field13.parent = this;
	this.field13.setTransform(260.5,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field13);
	}

	this.field10 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field10.name = "field10";
	this.field10.textAlign = "center";
	this.field10.lineHeight = 18;
	this.field10.lineWidth = 15;
	this.field10.parent = this;
	this.field10.setTransform(202.7,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field10);
	}

	this.field11 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field11.name = "field11";
	this.field11.textAlign = "center";
	this.field11.lineHeight = 18;
	this.field11.lineWidth = 15;
	this.field11.parent = this;
	this.field11.setTransform(222,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field11);
	}

	this.field8 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field8.name = "field8";
	this.field8.textAlign = "center";
	this.field8.lineHeight = 18;
	this.field8.lineWidth = 15;
	this.field8.parent = this;
	this.field8.setTransform(164,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field8);
	}

	this.field9 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field9.name = "field9";
	this.field9.textAlign = "center";
	this.field9.lineHeight = 18;
	this.field9.lineWidth = 15;
	this.field9.parent = this;
	this.field9.setTransform(183.3,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field9);
	}

	this.field6 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field6.name = "field6";
	this.field6.textAlign = "center";
	this.field6.lineHeight = 18;
	this.field6.lineWidth = 15;
	this.field6.parent = this;
	this.field6.setTransform(125.5,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field6);
	}

	this.field7 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field7.name = "field7";
	this.field7.textAlign = "center";
	this.field7.lineHeight = 18;
	this.field7.lineWidth = 15;
	this.field7.parent = this;
	this.field7.setTransform(144.8,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field7);
	}

	this.field4 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 18;
	this.field4.lineWidth = 15;
	this.field4.parent = this;
	this.field4.setTransform(86.9,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field4);
	}

	this.field5 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 18;
	this.field5.lineWidth = 15;
	this.field5.parent = this;
	this.field5.setTransform(106.1,7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field5);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 18;
	this.field2.lineWidth = 15;
	this.field2.parent = this;
	this.field2.setTransform(48.3,7.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field2);
	}

	this.field3 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 18;
	this.field3.lineWidth = 15;
	this.field3.parent = this;
	this.field3.setTransform(67.6,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field3);
	}

	this.field0 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field0.name = "field0";
	this.field0.textAlign = "center";
	this.field0.lineHeight = 18;
	this.field0.lineWidth = 15;
	this.field0.parent = this;
	this.field0.setTransform(9.6,7.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field0);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 18;
	this.field1.lineWidth = 15;
	this.field1.parent = this;
	this.field1.setTransform(28.9,7.2);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.field1},{t:this.field0},{t:this.field3},{t:this.field2},{t:this.field5},{t:this.field4},{t:this.field7},{t:this.field6},{t:this.field9},{t:this.field8},{t:this.field11},{t:this.field10},{t:this.field13},{t:this.field12},{t:this.field15},{t:this.field14},{t:this.field17},{t:this.field16},{t:this.field19},{t:this.field18},{t:this.field21},{t:this.field20},{t:this.field23},{t:this.field22},{t:this.field25},{t:this.field24},{t:this.field27},{t:this.field26},{t:this.field29},{t:this.field28},{t:this.field31},{t:this.field30},{t:this.wrapFirst},{t:this.wrapLast}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("EAzQgCMIAAEXEgzPgCKIAAEX");
	this.shape.setTransform(308.8,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,1).p("AAAiLIAAEX");
	this.shape_1.setTransform(617.6,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,0,1).p("EAkMgCLIAAEXAYIiLIAAEXAMEiLIAAEXAAAiLIAAEXAsDiLIAAEXA4HiLIAAEXEgkLgCLIAAEX");
	this.shape_2.setTransform(308.8,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EAqOgCLIDBAAIAAEXIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAEAqOgCLIAAEXEAwQACMIjBAAEAtPgCLIDBAAEAnNgCLIAAEXEAhLgCLIDBAAIDBAAIDBAAAeKiLIAAEXAeKiLIDBAAIAAEXAbJiLIAAEXAVHiLIDBAAIDBAAIDBAAAPFiLIDBAAIDBAAIAAEXIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjAAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAAPFiLIAAEXASGiLIAAEXAJDiLIDBAAIDBAAAJDiLIAAEXADBiLIDBAAIAAEXADBiLIAAEXAGCiLIDBAAAjAiLIDAAAIDBAAAjAiLIAAEXApCiLIDBAAIAAEXApCiLIAAEXAmBiLIDBAAAvEiLIDBAAIDBAAAvEiLIAAEXA1GiLIDBAAIAAEXA1GiLIAAEXAyFiLIDBAAA7IiLIAAEXA7IiLIDBAAIDBAAA+JiLIAAEXEghKgCLIDBAAIDBAAEghKgCLIAAEXEgnMgCLIAAEXEgnMgCLIDBAAIDBAAEgqNgCLIAAEXEgtOgCLIDBAAIDBAAEgtOgCLIAAEXIjBAAIAAkXg");
	this.shape_3.setTransform(308.8,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bitString32, new cjs.Rectangle(-20.2,-27.6,658.1,60.8), null);


(lib.bitString4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.setValue = (function(bitArray) {
			for (let i = 0; i < 4; i++) {
				this["field" + i].text = bitArray.get(i)? "1" : "0";
			}
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.field3 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 18;
	this.field3.lineWidth = 15;
	this.field3.parent = this;
	this.field3.setTransform(67.6,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field3);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 18;
	this.field2.lineWidth = 15;
	this.field2.parent = this;
	this.field2.setTransform(48.3,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field2);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 18;
	this.field1.lineWidth = 15;
	this.field1.parent = this;
	this.field1.setTransform(29.1,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field1);
	}

	this.field0 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field0.name = "field0";
	this.field0.textAlign = "center";
	this.field0.lineHeight = 18;
	this.field0.lineWidth = 15;
	this.field0.parent = this;
	this.field0.setTransform(9.9,7.1);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field0);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.field0},{t:this.field1},{t:this.field2},{t:this.field3}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,1).p("AAAiLIAAEX");
	this.shape.setTransform(77.2,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADBiLIDBAAADBiLIAAEXIjBAAIjAAAAGCCMIjBAAAjAiLIAAEXIjBAAIAAkXIDBAAIDAAAIAAEXAAAiLIDBAA");
	this.shape_1.setTransform(38.6,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bitString4, new cjs.Rectangle(-1,-1,79.2,34), null);


(lib.bits32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.setValue = (function(bitArray) {
			for (let i = 0; i < 32; i++) {
				this["field" + i].text = bitArray.get(i)? "1" : "0";
			}
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.field30 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field30.name = "field30";
	this.field30.textAlign = "center";
	this.field30.lineHeight = 18;
	this.field30.lineWidth = 15;
	this.field30.parent = this;
	this.field30.setTransform(588.6,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field30);
	}

	this.field31 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field31.name = "field31";
	this.field31.textAlign = "center";
	this.field31.lineHeight = 18;
	this.field31.lineWidth = 15;
	this.field31.parent = this;
	this.field31.setTransform(607.9,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field31);
	}

	this.field28 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field28.name = "field28";
	this.field28.textAlign = "center";
	this.field28.lineHeight = 18;
	this.field28.lineWidth = 15;
	this.field28.parent = this;
	this.field28.setTransform(550,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field28);
	}

	this.field29 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field29.name = "field29";
	this.field29.textAlign = "center";
	this.field29.lineHeight = 18;
	this.field29.lineWidth = 15;
	this.field29.parent = this;
	this.field29.setTransform(569.2,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field29);
	}

	this.field26 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field26.name = "field26";
	this.field26.textAlign = "center";
	this.field26.lineHeight = 18;
	this.field26.lineWidth = 15;
	this.field26.parent = this;
	this.field26.setTransform(511.4,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field26);
	}

	this.field27 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field27.name = "field27";
	this.field27.textAlign = "center";
	this.field27.lineHeight = 18;
	this.field27.lineWidth = 15;
	this.field27.parent = this;
	this.field27.setTransform(530.7,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field27);
	}

	this.field24 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field24.name = "field24";
	this.field24.textAlign = "center";
	this.field24.lineHeight = 18;
	this.field24.lineWidth = 15;
	this.field24.parent = this;
	this.field24.setTransform(472.8,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field24);
	}

	this.field25 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field25.name = "field25";
	this.field25.textAlign = "center";
	this.field25.lineHeight = 18;
	this.field25.lineWidth = 15;
	this.field25.parent = this;
	this.field25.setTransform(492,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field25);
	}

	this.field22 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field22.name = "field22";
	this.field22.textAlign = "center";
	this.field22.lineHeight = 18;
	this.field22.lineWidth = 15;
	this.field22.parent = this;
	this.field22.setTransform(434.2,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field22);
	}

	this.field23 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field23.name = "field23";
	this.field23.textAlign = "center";
	this.field23.lineHeight = 18;
	this.field23.lineWidth = 15;
	this.field23.parent = this;
	this.field23.setTransform(453.5,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field23);
	}

	this.field20 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field20.name = "field20";
	this.field20.textAlign = "center";
	this.field20.lineHeight = 18;
	this.field20.lineWidth = 15;
	this.field20.parent = this;
	this.field20.setTransform(395.6,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field20);
	}

	this.field21 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field21.name = "field21";
	this.field21.textAlign = "center";
	this.field21.lineHeight = 18;
	this.field21.lineWidth = 15;
	this.field21.parent = this;
	this.field21.setTransform(414.8,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field21);
	}

	this.field18 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field18.name = "field18";
	this.field18.textAlign = "center";
	this.field18.lineHeight = 18;
	this.field18.lineWidth = 15;
	this.field18.parent = this;
	this.field18.setTransform(357,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field18);
	}

	this.field19 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field19.name = "field19";
	this.field19.textAlign = "center";
	this.field19.lineHeight = 18;
	this.field19.lineWidth = 15;
	this.field19.parent = this;
	this.field19.setTransform(376.3,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field19);
	}

	this.field16 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field16.name = "field16";
	this.field16.textAlign = "center";
	this.field16.lineHeight = 18;
	this.field16.lineWidth = 15;
	this.field16.parent = this;
	this.field16.setTransform(318.4,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field16);
	}

	this.field17 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field17.name = "field17";
	this.field17.textAlign = "center";
	this.field17.lineHeight = 18;
	this.field17.lineWidth = 15;
	this.field17.parent = this;
	this.field17.setTransform(337.6,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field17);
	}

	this.field14 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field14.name = "field14";
	this.field14.textAlign = "center";
	this.field14.lineHeight = 18;
	this.field14.lineWidth = 15;
	this.field14.parent = this;
	this.field14.setTransform(279.8,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field14);
	}

	this.field15 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field15.name = "field15";
	this.field15.textAlign = "center";
	this.field15.lineHeight = 18;
	this.field15.lineWidth = 15;
	this.field15.parent = this;
	this.field15.setTransform(299.1,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field15);
	}

	this.field12 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field12.name = "field12";
	this.field12.textAlign = "center";
	this.field12.lineHeight = 18;
	this.field12.lineWidth = 15;
	this.field12.parent = this;
	this.field12.setTransform(241.2,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field12);
	}

	this.field13 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field13.name = "field13";
	this.field13.textAlign = "center";
	this.field13.lineHeight = 18;
	this.field13.lineWidth = 15;
	this.field13.parent = this;
	this.field13.setTransform(260.4,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field13);
	}

	this.field10 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field10.name = "field10";
	this.field10.textAlign = "center";
	this.field10.lineHeight = 18;
	this.field10.lineWidth = 15;
	this.field10.parent = this;
	this.field10.setTransform(202.6,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field10);
	}

	this.field11 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field11.name = "field11";
	this.field11.textAlign = "center";
	this.field11.lineHeight = 18;
	this.field11.lineWidth = 15;
	this.field11.parent = this;
	this.field11.setTransform(221.9,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field11);
	}

	this.field8 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field8.name = "field8";
	this.field8.textAlign = "center";
	this.field8.lineHeight = 18;
	this.field8.lineWidth = 15;
	this.field8.parent = this;
	this.field8.setTransform(164,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field8);
	}

	this.field9 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field9.name = "field9";
	this.field9.textAlign = "center";
	this.field9.lineHeight = 18;
	this.field9.lineWidth = 15;
	this.field9.parent = this;
	this.field9.setTransform(183.2,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field9);
	}

	this.field6 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field6.name = "field6";
	this.field6.textAlign = "center";
	this.field6.lineHeight = 18;
	this.field6.lineWidth = 15;
	this.field6.parent = this;
	this.field6.setTransform(125.4,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field6);
	}

	this.field7 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field7.name = "field7";
	this.field7.textAlign = "center";
	this.field7.lineHeight = 18;
	this.field7.lineWidth = 15;
	this.field7.parent = this;
	this.field7.setTransform(144.7,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field7);
	}

	this.field4 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field4.name = "field4";
	this.field4.textAlign = "center";
	this.field4.lineHeight = 18;
	this.field4.lineWidth = 15;
	this.field4.parent = this;
	this.field4.setTransform(86.8,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field4);
	}

	this.field5 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field5.name = "field5";
	this.field5.textAlign = "center";
	this.field5.lineHeight = 18;
	this.field5.lineWidth = 15;
	this.field5.parent = this;
	this.field5.setTransform(106,7.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field5);
	}

	this.field2 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field2.name = "field2";
	this.field2.textAlign = "center";
	this.field2.lineHeight = 18;
	this.field2.lineWidth = 15;
	this.field2.parent = this;
	this.field2.setTransform(48.2,7.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field2);
	}

	this.field3 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 18;
	this.field3.lineWidth = 15;
	this.field3.parent = this;
	this.field3.setTransform(67.5,7.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field3);
	}

	this.field0 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field0.name = "field0";
	this.field0.textAlign = "center";
	this.field0.lineHeight = 18;
	this.field0.lineWidth = 15;
	this.field0.parent = this;
	this.field0.setTransform(9.5,7.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field0);
	}

	this.field1 = new cjs.Text("", "normal 400 12px 'Open Sans'");
	this.field1.name = "field1";
	this.field1.textAlign = "center";
	this.field1.lineHeight = 18;
	this.field1.lineWidth = 15;
	this.field1.parent = this;
	this.field1.setTransform(28.8,7.8);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.field1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.field1},{t:this.field0},{t:this.field3},{t:this.field2},{t:this.field5},{t:this.field4},{t:this.field7},{t:this.field6},{t:this.field9},{t:this.field8},{t:this.field11},{t:this.field10},{t:this.field13},{t:this.field12},{t:this.field15},{t:this.field14},{t:this.field17},{t:this.field16},{t:this.field19},{t:this.field18},{t:this.field21},{t:this.field20},{t:this.field23},{t:this.field22},{t:this.field25},{t:this.field24},{t:this.field27},{t:this.field26},{t:this.field29},{t:this.field28},{t:this.field31},{t:this.field30}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1).p("EAkMgCLIAAEXAYIiLIAAEXAMEiLIAAEXAAAiLIAAEXAsDiLIAAEXA4IiLIAAEXEgkLgCLIAAEX");
	this.shape.setTransform(308.8,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EAqOgCLIDBAAIAAEXIjBAAIjBAAEAqOgCLIAAEXEAtPgCLIDBAAEAwQACMIjBAAEAnNgCLIAAEXIjBAAIjBAAEAhLgCLIDBAAIDBAAIDBAAAeKiLIAAEXIjBAAEAhLgCLIAAEXIjBAAAeKiLIDBAAAbJiLIAAEXIjBAAIjBAAAVHiLIDBAAIDBAAIDBAAAPFiLIDBAAIAAEXIjBAAIjBAAIjBAAIjBAAIjBAAIjBAAIjAAAIjBAAAPFiLIAAEXAVHiLIAAEXIjBAAASGiLIDBAAAJDiLIDBAAIDBAAAJDiLIAAEXAGCiLIAAEXADBiLIAAEXADBiLIDBAAIDBAAAjAiLIAAEXAjAiLIDAAAIDBAAApCiLIAAEXIjBAAIjBAAIjBAAAmBiLIAAEXIjBAAApCiLIDBAAIDBAAAvEiLIDBAAIDBAAAvEiLIAAEXA1GiLIAAEXIjCAAIjAAAIjBAAAyFiLIAAEXIjBAAA1GiLIDBAAIDBAAA7IiLIDAAAIDCAAA7IiLIAAEXEghKgCLIAAEXIjBAAIjBAAIjBAAIjBAAA+JiLIAAEXIjBAAEghKgCLIDBAAIDBAAEgnMgCLIAAEXEgnMgCLIDBAAIDBAAEgqNgCLIAAEXEgtOgCLIAAEXIjBAAIAAkXIDBAAIDBAAIDBAA");
	this.shape_1.setTransform(308.8,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,1).p("AAAiLIAAEX");
	this.shape_2.setTransform(617.6,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bits32, new cjs.Rectangle(-1,-1.5,619.6,35.2), null);


(lib.Arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AAAhHIkPDfIgXg8IEmjzIEnDzIgXA8g");
	this.shape.setTransform(17.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(-12,-9.3,59.1,30.4), null);


(lib.SBoxes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.setData = (function(cryptoObject, roundIndex) {
			var manglerData = cryptoObject.rounds[roundIndex].manglerData;
			
			for (let i = 0; i < 8; i++) {
				var thisFinalInput = this["finalInput" + i];
				thisFinalInput.gotoAndStop(0);
				thisFinalInput.setValue(manglerData.sBoxFinalInputs[i]);
				
				var thisSBoxOutput = this["sBoxOutput" + i];
				thisSBoxOutput.gotoAndStop(0);
				thisSBoxOutput.setValue(manglerData.sBoxOutputs[i]);
			}
			
			this.combinedOutput.gotoAndStop(0);
			this.combinedOutput.setValue(manglerData.combinedOutputs);
			
			this.finalOutput.gotoAndStop(0);
			this.finalOutput.setValue(manglerData.finalOutput);
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("Output Bits", "normal 400 16px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(-264,215.6);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("Input Bits", "normal 400 16px 'Open Sans'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 72;
	this.text_1.parent = this;
	this.text_1.setTransform(-2.4,-247.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.finalOutput = new lib.bits32();
	this.finalOutput.parent = this;
	this.finalOutput.setTransform(-1.4,257.8,1,1,0,0,0,308.8,14);

	this.instance = new lib.downArrow();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,208,1,1,0,0,0,7.5,28.6);

	this.instance_1 = new lib.downArrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.4,77.7,1,1,0,0,0,7.5,28.6);

	this.permCBtn = new lib.ViewButton();
	this.permCBtn.parent = this;
	this.permCBtn.setTransform(-40.7,158.6);
	new cjs.ButtonHelper(this.permCBtn, 0, 1, 1);

	this.text_2 = new cjs.Text("Permutation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 193;
	this.text_2.parent = this;
	this.text_2.setTransform(-3.6,122.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.combinedOutput = new lib.bits32();
	this.combinedOutput.parent = this;
	this.combinedOutput.setTransform(-1.4,54.9,1,1,0,0,0,308.8,14);

	this.sBoxOutput6 = new lib.bitString4();
	this.sBoxOutput6.parent = this;
	this.sBoxOutput6.setTransform(376.8,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput5 = new lib.bitString4();
	this.sBoxOutput5.parent = this;
	this.sBoxOutput5.setTransform(225.4,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput4 = new lib.bitString4();
	this.sBoxOutput4.parent = this;
	this.sBoxOutput4.setTransform(74,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput3 = new lib.bitString4();
	this.sBoxOutput3.parent = this;
	this.sBoxOutput3.setTransform(-77.4,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput2 = new lib.bitString4();
	this.sBoxOutput2.parent = this;
	this.sBoxOutput2.setTransform(-228.8,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput1 = new lib.bitString4();
	this.sBoxOutput1.parent = this;
	this.sBoxOutput1.setTransform(-380.2,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput7 = new lib.bitString4();
	this.sBoxOutput7.parent = this;
	this.sBoxOutput7.setTransform(528.2,-22.4,1,1,0,0,0,38.6,14);

	this.sBoxOutput0 = new lib.bitString4();
	this.sBoxOutput0.parent = this;
	this.sBoxOutput0.setTransform(-531.6,-22.4,1,1,0,0,0,38.6,14);

	this.instance_2 = new lib.downArrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(528.1,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_3 = new lib.downArrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(376.1,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_4 = new lib.downArrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(225,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_5 = new lib.downArrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(73,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_6 = new lib.downArrow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-77.5,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_7 = new lib.downArrow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-229.5,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_8 = new lib.downArrow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-380.7,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_9 = new lib.downArrow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-532.7,-70.4,1,1,0,0,0,7.5,28.6);

	this.instance_10 = new lib.downArrow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(528.1,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_11 = new lib.downArrow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376.1,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_12 = new lib.downArrow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(225,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_13 = new lib.downArrow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(73,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_14 = new lib.downArrow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-77.5,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_15 = new lib.downArrow();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-229.5,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_16 = new lib.downArrow();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-380.7,-187.7,1,1,0,0,0,7.5,28.6);

	this.instance_17 = new lib.downArrow();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-532.7,-187.7,1,1,0,0,0,7.5,28.6);

	this.text_3 = new cjs.Text("S-Box 8", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 101;
	this.text_3.parent = this;
	this.text_3.setTransform(528,-148.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.sBoxBtn7 = new lib.ViewButton();
	this.sBoxBtn7.parent = this;
	this.sBoxBtn7.setTransform(490.5,-116);
	new cjs.ButtonHelper(this.sBoxBtn7, 0, 1, 1);

	this.text_4 = new cjs.Text("S-Box 7", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 101;
	this.text_4.parent = this;
	this.text_4.setTransform(376.5,-148.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.sBoxBtn6 = new lib.ViewButton();
	this.sBoxBtn6.parent = this;
	this.sBoxBtn6.setTransform(339,-116);
	new cjs.ButtonHelper(this.sBoxBtn6, 0, 1, 1);

	this.text_5 = new cjs.Text("S-Box 6", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 101;
	this.text_5.parent = this;
	this.text_5.setTransform(225.1,-147.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.sBoxBtn5 = new lib.ViewButton();
	this.sBoxBtn5.parent = this;
	this.sBoxBtn5.setTransform(187.5,-114.9);
	new cjs.ButtonHelper(this.sBoxBtn5, 0, 1, 1);

	this.text_6 = new cjs.Text("S-Box 5", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 101;
	this.text_6.parent = this;
	this.text_6.setTransform(73.6,-148.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.sBoxBtn4 = new lib.ViewButton();
	this.sBoxBtn4.parent = this;
	this.sBoxBtn4.setTransform(36.1,-116);
	new cjs.ButtonHelper(this.sBoxBtn4, 0, 1, 1);

	this.text_7 = new cjs.Text("S-Box 4", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 39;
	this.text_7.lineWidth = 101;
	this.text_7.parent = this;
	this.text_7.setTransform(-77.8,-147.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.sBoxBtn3 = new lib.ViewButton();
	this.sBoxBtn3.parent = this;
	this.sBoxBtn3.setTransform(-115.4,-114.9);
	new cjs.ButtonHelper(this.sBoxBtn3, 0, 1, 1);

	this.text_8 = new cjs.Text("S-Box 3", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 39;
	this.text_8.lineWidth = 101;
	this.text_8.parent = this;
	this.text_8.setTransform(-229.3,-147.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.sBoxBtn2 = new lib.ViewButton();
	this.sBoxBtn2.parent = this;
	this.sBoxBtn2.setTransform(-266.8,-114.9);
	new cjs.ButtonHelper(this.sBoxBtn2, 0, 1, 1);

	this.text_9 = new cjs.Text("S-Box 2", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 39;
	this.text_9.lineWidth = 101;
	this.text_9.parent = this;
	this.text_9.setTransform(-380.7,-147.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_9);
	}

	this.sBoxBtn1 = new lib.ViewButton();
	this.sBoxBtn1.parent = this;
	this.sBoxBtn1.setTransform(-418.3,-114.9);
	new cjs.ButtonHelper(this.sBoxBtn1, 0, 1, 1);

	this.text_10 = new cjs.Text("S-Box 1", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 39;
	this.text_10.lineWidth = 101;
	this.text_10.parent = this;
	this.text_10.setTransform(-532.6,-147.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_10);
	}

	this.sBoxBtn0 = new lib.ViewButton();
	this.sBoxBtn0.parent = this;
	this.sBoxBtn0.setTransform(-570.2,-114.9);
	new cjs.ButtonHelper(this.sBoxBtn0, 0, 1, 1);

	this.finalInput5 = new lib.SixBitLow();
	this.finalInput5.parent = this;
	this.finalInput5.setTransform(224.9,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput6 = new lib.SixBitLow();
	this.finalInput6.parent = this;
	this.finalInput6.setTransform(376.3,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput7 = new lib.SixBitLow();
	this.finalInput7.parent = this;
	this.finalInput7.setTransform(527.8,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput4 = new lib.SixBitLow();
	this.finalInput4.parent = this;
	this.finalInput4.setTransform(73.4,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput3 = new lib.SixBitLow();
	this.finalInput3.parent = this;
	this.finalInput3.setTransform(-78,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput2 = new lib.SixBitLow();
	this.finalInput2.parent = this;
	this.finalInput2.setTransform(-229.5,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput1 = new lib.SixBitLow();
	this.finalInput1.parent = this;
	this.finalInput1.setTransform(-380.9,-210.4,1,1,0,0,0,57.9,14);

	this.finalInput0 = new lib.SixBitLow();
	this.finalInput0.parent = this;
	this.finalInput0.setTransform(-532.4,-210.4,1,1,0,0,0,57.9,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFo1tMBWnAAAALkOIIlxHmEA64AOII89HmEBSiAOIMgojAHmEAjOAOIIxXHmEhcOgVtMBV4AAAEgjvAOIIRbHmEhTDAOIMAonAHmEg7ZAOIIdBHmAsFOIIF1Hm");
	this.shape.setTransform(0,-98);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AsNbrIAAoiIACAAIAAglIgCAAIAAksIYIAAIAANzgAaivxIAAgeIgBAAIAAnEIABAAIAAgeIgBAAIAAjvISBAAIAALNIABAAIAAAigA0zvxIAAgeIAAAAIAAnEIABAAIAAgeIgBAAIAAjvISAAAIAALNIABAAIAAAigEgsdgPxIAAgeIAAAAIAAnEIABAAIAAgeIgBAAIAAjvISAAAIAALNIABAAIAAAigEhEIgPxIAAgeIAAAAIAAnEIABAAIAAgeIgBAAIAAjvISAAAIAALNIACAAIAAAigEhb2gPxIAAgeIgBAAIAAnEIABAAIAAgeIgBAAIAAj5ISBAAIAALXIABAAIAAAigEBJ3gP7IAAgfIgBAAIAAnEIABAAIAAgeIgBAAIAAjuISBAAIAALNIABAAIAAAigEAyMgP7IAAgfIAAAAIAAnEIABAAIAAgeIgBAAIAAjuISAAAIAALNIABAAIAAAigAC3v7IAAgfIgBAAIAAnEIABAAIAAgeIgBAAIAAjuISBAAIAALNIABAAIAAAig");
	this.shape_1.setTransform(-2.3,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.finalInput0},{t:this.finalInput1},{t:this.finalInput2},{t:this.finalInput3},{t:this.finalInput4},{t:this.finalInput7},{t:this.finalInput6},{t:this.finalInput5},{t:this.sBoxBtn0},{t:this.text_10},{t:this.sBoxBtn1},{t:this.text_9},{t:this.sBoxBtn2},{t:this.text_8},{t:this.sBoxBtn3},{t:this.text_7},{t:this.sBoxBtn4},{t:this.text_6},{t:this.sBoxBtn5},{t:this.text_5},{t:this.sBoxBtn6},{t:this.text_4},{t:this.sBoxBtn7},{t:this.text_3},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.sBoxOutput0},{t:this.sBoxOutput7},{t:this.sBoxOutput1},{t:this.sBoxOutput2},{t:this.sBoxOutput3},{t:this.sBoxOutput4},{t:this.sBoxOutput5},{t:this.sBoxOutput6},{t:this.combinedOutput},{t:this.text_2},{t:this.permCBtn},{t:this.instance_1},{t:this.instance},{t:this.finalOutput},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SBoxes, new cjs.Rectangle(-591.2,-249.5,1182.6,527), null);


(lib.sBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.text = new cjs.Text("", "normal 400 14px 'Open Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(365,321.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("", "normal 400 14px 'Open Sans'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 132;
	this.text_1.parent = this;
	this.text_1.setTransform(365,288.4);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("", "normal 400 14px 'Open Sans'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 132;
	this.text_2.parent = this;
	this.text_2.setTransform(365,255);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("", "normal 400 14px 'Open Sans'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 132;
	this.text_3.parent = this;
	this.text_3.setTransform(365,221.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("Output:", "normal 400 14px 'Open Sans'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 53;
	this.text_4.parent = this;
	this.text_4.setTransform(242.7,321.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Column:", "normal 400 14px 'Open Sans'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 56;
	this.text_5.parent = this;
	this.text_5.setTransform(244.4,289.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Row:", "normal 400 14px 'Open Sans'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 32;
	this.text_6.parent = this;
	this.text_6.setTransform(232.2,258);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("Input:", "normal 400 14px 'Open Sans'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 43;
	this.text_7.parent = this;
	this.text_7.setTransform(238,221.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 2
	this.instance = new lib.row1();
	this.instance.parent = this;
	this.instance.setTransform(556.3,176.1,1,1,0,0,0,342,11.2);

	this.instance_1 = new lib.row1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(556.3,144.1,1,1,0,0,0,342,11.2);

	this.instance_2 = new lib.row1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(556.3,112,1,1,0,0,0,342,11.2);

	this.instance_3 = new lib.row1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(556.3,47.8,1,1,0,0,0,342,11.2);

	this.instance_4 = new lib.row1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(556.3,79.9,1,1,0,0,0,342,11.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4/AAAMBx/AAA");
	this.shape.setTransform(579.1,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EAuUgNMIAAaaEA1cgNMIAAaaEAnMgNMIAAaaEAgEgNMIAAaaAY8tMIAAaaAR0tMIAAaaAqrtMIAAaaAjjtMIAAaaAKstMIAAaaADktMIAAaaAxztMIAAaaA47tMIAAaaEggDgNMIAAaaEgnLgNMIAAaaEg1bgNMIAAaaEguTgNMIAAaa");
	this.shape_1.setTransform(556.3,110.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sBox, new cjs.Rectangle(213.3,25.4,731.6,316.8), null);


(lib.roundSelector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var roundIndex = 0;
		
		function updateDisplay() {
			this.roundDisplayTxt.text = (roundIndex + 1) + "";
		}
		
		updateDisplay.bind(this)();
		
		this.leftBtn.addEventListener("click", decreaseRoundIndex.bind(this));
		this.rightBtn.addEventListener("click", increaseRoundIndex.bind(this));
		
		function decreaseRoundIndex() {
			if (roundIndex > 0) {
				roundIndex--;
				updateDisplay.bind(this)();
				this.dispatchEvent(new createjs.Event("roundChange"));
			}
		}
		
		function increaseRoundIndex() {
			if (roundIndex < 15) {
				roundIndex++;
				updateDisplay.bind(this)();
				this.dispatchEvent(new createjs.Event("roundChange"));
			}
		}
		
		this.setRoundIndex = (function(index) {
			roundIndex = index;
			updateDisplay.bind(this)();
			
			this.dispatchEvent(new createjs.Event("roundChange"));
		}).bind(this);
		
		this.getRoundIndex = (function() {
			return roundIndex;
		}).bind(this);
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
	this.roundDisplayTxt.setTransform(102.8,11.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.roundDisplayTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.roundDisplayTxt).wait(1));

	// buttons
	this.leftBtn = new lib.RoundChangeButton();
	this.leftBtn.parent = this;
	this.leftBtn.setTransform(153.5,20.1,1,1,0,0,180,12.1,12.1);
	new cjs.ButtonHelper(this.leftBtn, 0, 1, 1);

	this.rightBtn = new lib.RoundChangeButton();
	this.rightBtn.parent = this;
	this.rightBtn.setTransform(188.5,20.1,1,1,0,0,0,12.1,12.1);
	new cjs.ButtonHelper(this.rightBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rightBtn},{t:this.leftBtn}]}).wait(1));

	// text background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#666666").ss(2,1,1).dr(-40.5,-19.75,81,39.5);
	this.shape.setTransform(102.4,19.7,0.611,0.759);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// round label
	this.text = new cjs.Text("Round:", "normal 400 18px 'Open Sans'", "#333333");
	this.text.lineHeight = 26;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(8.7,11.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s("#333333").ss(2,1,1).rr(-118.65,-20,237.3,40,4);
	this.shape_1.setTransform(107.5,20,0.906,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.roundSelector, new cjs.Rectangle(-1,-1,217,42), null);


(lib.ReverseOrderDiagramPortion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Reverse Order", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 266;
	this.text.parent = this;
	this.text.setTransform(93.3,52.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1174C3").s().p("AufClIAAjMIACAAIAAgNIgCAAIAAhxIc/AAIAAFKg");
	this.shape.setTransform(92.8,66.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.showReverseKeyTable = new lib.ShowTable();
	this.showReverseKeyTable.parent = this;
	this.showReverseKeyTable.setTransform(91.7,103,1,1,0,0,0,8.2,8.2);
	new cjs.ButtonHelper(this.showReverseKeyTable, 0, 1, 1);

	this.showKeyTable = new lib.ShowTable();
	this.showKeyTable.parent = this;
	this.showKeyTable.setTransform(91.7,17,1,1,0,0,0,8.2,8.2);
	new cjs.ButtonHelper(this.showKeyTable, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAApXIAAFyAAADkIAAF0");
	this.shape_1.setTransform(92,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhJFmIBJAAIBKAAIhKBygAhJnXIBJAAIBKAAIhKByg");
	this.shape_2.setTransform(92,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.showKeyTable},{t:this.showReverseKeyTable}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ReverseOrderDiagramPortion, new cjs.Rectangle(0,-1,185.6,132.4), null);


(lib.PerRoundStraightThrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.showKeyTable = new lib.ShowTable();
	this.showKeyTable.parent = this;
	this.showKeyTable.setTransform(-1,52.5);
	new cjs.ButtonHelper(this.showKeyTable, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAApVIAASr");
	this.shape.setTransform(7.5,59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKg4IBKAAIBLAAIhLBxg");
	this.shape_1.setTransform(7.5,125.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.showKeyTable}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PerRoundStraightThrough, new cjs.Rectangle(-1,-1,16.4,132), null);


(lib.manglerExpansion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.toSBoxesBtn.addEventListener("click", (function() {
			this.dispatchEvent(new createjs.Event("sBoxesRequested"));
		}).bind(this));
		
		this.setData = (function(cryptoObject, roundIndex) {
			var round = cryptoObject.rounds[roundIndex];
			var manglerData = round.manglerData;
			
			this.inputBits.gotoAndStop(0);
			this.inputBits.setValue(round.rightInitial);
			
			for (let i = 0; i < 8; i++) {
				var thisDataInput = this["dataInput" + i];
				thisDataInput.gotoAndStop(0);
				thisDataInput.setValue(manglerData.sBoxDataInputs[i]);
				
				var thisKeyInput = this["keyInput" + i];
				thisKeyInput.gotoAndStop(0);
				thisKeyInput.setValue(manglerData.sBoxKeyInputs[i]);
				
				var thisFinalInput = this["finalInput" + i];
				thisFinalInput.gotoAndStop(0);
				thisFinalInput.setValue(manglerData.sBoxFinalInputs[i]);
			}
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("To S-Boxes", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(587.8,464.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.toSBoxesBtn = new lib.ViewButton();
	this.toSBoxesBtn.parent = this;
	this.toSBoxesBtn.setTransform(552.6,527.2);
	new cjs.ButtonHelper(this.toSBoxesBtn, 0, 1, 1);

	this.text_1 = new cjs.Text("Results", "normal 400 16px 'Open Sans'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 54;
	this.text_1.parent = this;
	this.text_1.setTransform(591.3,308.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.inputBits = new lib.bitString32();
	this.inputBits.parent = this;
	this.inputBits.setTransform(588.5,28.6,1,1,0,0,0,308.8,0.9);

	this.text_2 = new cjs.Text("Round Key Bits", "normal 400 16px 'Open Sans'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 112;
	this.text_2.parent = this;
	this.text_2.setTransform(590.3,204.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.finalInput5 = new lib.SixBitLow();
	this.finalInput5.parent = this;
	this.finalInput5.setTransform(817.8,345.8,1,1,0,0,0,57.9,14);

	this.finalInput6 = new lib.SixBitLow();
	this.finalInput6.parent = this;
	this.finalInput6.setTransform(969.3,345.8,1,1,0,0,0,57.9,14);

	this.finalInput7 = new lib.SixBitLow();
	this.finalInput7.parent = this;
	this.finalInput7.setTransform(1120.8,345.8,1,1,0,0,0,57.9,14);

	this.finalInput4 = new lib.SixBitLow();
	this.finalInput4.parent = this;
	this.finalInput4.setTransform(666.4,345.8,1,1,0,0,0,57.9,14);

	this.finalInput3 = new lib.SixBitLow();
	this.finalInput3.parent = this;
	this.finalInput3.setTransform(514.9,345.8,1,1,0,0,0,57.9,14);

	this.finalInput2 = new lib.SixBitLow();
	this.finalInput2.parent = this;
	this.finalInput2.setTransform(363.5,345.8,1,1,0,0,0,57.9,14);

	this.finalInput1 = new lib.SixBitLow();
	this.finalInput1.parent = this;
	this.finalInput1.setTransform(212,345.8,1,1,0,0,0,57.9,14);

	this.finalInput0 = new lib.SixBitLow();
	this.finalInput0.parent = this;
	this.finalInput0.setTransform(60.6,345.8,1,1,0,0,0,57.9,14);

	this.keyInput5 = new lib.SixBitLow();
	this.keyInput5.parent = this;
	this.keyInput5.setTransform(817.8,242,1,1,0,0,0,57.9,14);

	this.keyInput6 = new lib.SixBitLow();
	this.keyInput6.parent = this;
	this.keyInput6.setTransform(969.3,242,1,1,0,0,0,57.9,14);

	this.keyInput7 = new lib.SixBitLow();
	this.keyInput7.parent = this;
	this.keyInput7.setTransform(1120.8,242,1,1,0,0,0,57.9,14);

	this.keyInput4 = new lib.SixBitLow();
	this.keyInput4.parent = this;
	this.keyInput4.setTransform(666.4,242,1,1,0,0,0,57.9,14);

	this.keyInput3 = new lib.SixBitLow();
	this.keyInput3.parent = this;
	this.keyInput3.setTransform(514.9,242,1,1,0,0,0,57.9,14);

	this.keyInput2 = new lib.SixBitLow();
	this.keyInput2.parent = this;
	this.keyInput2.setTransform(363.5,242,1,1,0,0,0,57.9,14);

	this.keyInput1 = new lib.SixBitLow();
	this.keyInput1.parent = this;
	this.keyInput1.setTransform(212,242,1,1,0,0,0,57.9,14);

	this.keyInput0 = new lib.SixBitLow();
	this.keyInput0.parent = this;
	this.keyInput0.setTransform(60.6,242,1,1,0,0,0,57.9,14);

	this.instance = new lib.XOR();
	this.instance.parent = this;
	this.instance.setTransform(1127.6,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_1 = new lib.XOR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(975.6,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_2 = new lib.XOR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(521.8,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_3 = new lib.XOR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(825,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_4 = new lib.XOR();
	this.instance_4.parent = this;
	this.instance_4.setTransform(673,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_5 = new lib.XOR();
	this.instance_5.parent = this;
	this.instance_5.setTransform(67.2,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_6 = new lib.XOR();
	this.instance_6.parent = this;
	this.instance_6.setTransform(370.4,182.4,1,1,0,0,0,19.4,19.4);

	this.instance_7 = new lib.XOR();
	this.instance_7.parent = this;
	this.instance_7.setTransform(218.4,182.4,1,1,0,0,0,19.4,19.4);

	this.dataInput5 = new lib.SixBitLow();
	this.dataInput5.parent = this;
	this.dataInput5.setTransform(817.8,129.5,1,1,0,0,0,57.9,14);

	this.dataInput6 = new lib.SixBitLow();
	this.dataInput6.parent = this;
	this.dataInput6.setTransform(969.3,129.5,1,1,0,0,0,57.9,14);

	this.dataInput7 = new lib.SixBitLow();
	this.dataInput7.parent = this;
	this.dataInput7.setTransform(1120.8,129.5,1,1,0,0,0,57.9,14);

	this.dataInput4 = new lib.SixBitLow();
	this.dataInput4.parent = this;
	this.dataInput4.setTransform(666.4,129.5,1,1,0,0,0,57.9,14);

	this.dataInput3 = new lib.SixBitLow();
	this.dataInput3.parent = this;
	this.dataInput3.setTransform(514.9,129.5,1,1,0,0,0,57.9,14);

	this.dataInput2 = new lib.SixBitLow();
	this.dataInput2.parent = this;
	this.dataInput2.setTransform(363.5,129.5,1,1,0,0,0,57.9,14);

	this.dataInput1 = new lib.SixBitLow();
	this.dataInput1.parent = this;
	this.dataInput1.setTransform(212,129.5,1,1,0,0,0,57.9,14);

	this.dataInput0 = new lib.SixBitLow();
	this.dataInput0.parent = this;
	this.dataInput0.setTransform(60.6,129.5,1,1,0,0,0,57.9,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAm+gcUIPmFDITSEbEAj5gXdIOSEnEAj5gXdIItEnAOv8UIDPE9IIiEhAR+3XIC+EhAU28UIPDE3Aa38PIJCEyEAg9gcPIVnE+INtEbEAy/gcLMAo9AJVAJGjOMBTJAAAAjY8UIDRE+IinEgACt8PIi0E5IC9EgAyM3XIioEhAyM3XIoMEhA7c8UIpAFBIoCEdA1b8PIvBE8ItnEdAgBIzIAAnOAvV8UIi3E9ApZ8PIozE4Eg2dgXYIzREiEgzhgcLMgoTAJVEg2dgXYItsEiAgBcVIAAnPEgnjgcUIu6E8EghigcTI07E7EhcOgDOMBTJAAAEhbyAM+MBXdAAAAEqM+MBXcAAAAIz8PIJLE4");
	this.shape.setTransform(590.3,236.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AueJiIAAgwIgBAAIAArUIACAAIAAgwIgCAAIAAmPIc+AAIAASMIABAAIAAA3g");
	this.shape_1.setTransform(589.2,503.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhJI4IBKAAIBJAAIhKBxgAhJqoIBKAAIBJAAIhKBxg");
	this.shape_2.setTransform(590,360.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dataInput0},{t:this.dataInput1},{t:this.dataInput2},{t:this.dataInput3},{t:this.dataInput4},{t:this.dataInput7},{t:this.dataInput6},{t:this.dataInput5},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.keyInput0},{t:this.keyInput1},{t:this.keyInput2},{t:this.keyInput3},{t:this.keyInput4},{t:this.keyInput7},{t:this.keyInput6},{t:this.keyInput5},{t:this.finalInput0},{t:this.finalInput1},{t:this.finalInput2},{t:this.finalInput3},{t:this.finalInput4},{t:this.finalInput7},{t:this.finalInput6},{t:this.finalInput5},{t:this.text_2},{t:this.inputBits},{t:this.text_1},{t:this.toSBoxesBtn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.manglerExpansion, new cjs.Rectangle(-1,0,1182.6,564.7), null);


(lib.KeyGenRounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Bind event listeners
		this.leftHalfBtn.addEventListener("click", (function() {
			this.dispatchEvent(new createjs.Event("leftHalfPermutationRequested"));
		}).bind(this));
		
		this.rightHalfBtn.addEventListener("click", (function() {
			this.dispatchEvent(new createjs.Event("rightHalfPermutationRequested"));
		}).bind(this));
		
		this.setData = (function(cryptoObject, roundIndex) {
			this.cSubTxt.text = this.dSubTxt.text = roundIndex.toString();
			this.keySubTxt.text = (roundIndex + 1).toString();
			
			var roundKeyParts = cryptoObject.roundKeys.roundKeyParts[roundIndex];
			
			this.preShiftedCDsp.gotoAndStop(0);
			this.preShiftedCDsp.setValue(roundKeyParts.preShiftC);
			
			this.preShiftedDDsp.gotoAndStop(0);
			this.preShiftedDDsp.setValue(roundKeyParts.preShiftD);
			
			this.shiftedCDsp.gotoAndStop(0);
			this.shiftedCDsp.setValue(roundKeyParts.shiftedC);
			
			this.shiftedDDsp.gotoAndStop(0);
			this.shiftedDDsp.setValue(roundKeyParts.shiftedD);
			
			this.combinedCDsp.gotoAndStop(0);
			this.combinedCDsp.setValue(roundKeyParts.shiftedC);
			
			this.combinedDDsp.gotoAndStop(0);
			this.combinedDDsp.setValue(roundKeyParts.shiftedD);
			
			this.leftHalfDsp.gotoAndStop(0);
			this.leftHalfDsp.setValue(roundKeyParts.pc2C);
			
			this.rightHalfDsp.gotoAndStop(0);
			this.rightHalfDsp.setValue(roundKeyParts.pc2D);
			
			this.leftKeyDsp.gotoAndStop(0);
			this.leftKeyDsp.setValue(roundKeyParts.pc2C);
			
			this.rightKeyDsp.gotoAndStop(0);
			this.rightKeyDsp.setValue(roundKeyParts.pc2D);
			
			this.rotateTimes1Txt.text = this.rotateTimes2Txt.text = DES.PER_ROUND_KEY_SHIFTS[roundIndex].toString();
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.rightKeyDsp = new lib.HexDisplay();
	this.rightKeyDsp.parent = this;
	this.rightKeyDsp.setTransform(1171.5,191.2,1,1,0,0,0,87.3,13.6);

	this.combinedDDsp = new lib.HexDisplay();
	this.combinedDDsp.parent = this;
	this.combinedDDsp.setTransform(620.5,191.2,1,1,0,0,0,87.3,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.combinedDDsp},{t:this.rightKeyDsp}]}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AX/hSIkAAAIkAAAIj/AAIkAAAIkAAAIkAAAIj+AAIkAAAIkAAAIkAAAIj/AAIkBAAIj/AAIkAAAIAAjfMA/7AAAIAADfIj/AAgAT/kuIAADcAX/kuIAADcAb/kuIAADcAX/EzIkAAAIkAAAIj/AAIkAAAIkAAAIkAAAIj+AAIkAAAIkAAAIkAAAIj/AAIkBAAIj/AAIkAAAIAAjfMA/7AAAIAADfIj/AAgAb/BXIAADcAX/BXIAADcAT/BXIAADcAj+kuIAADcAAAkuIAADcAEAkuIAADcAIAkuIAADcAMAkuIAADcAP/kuIAADcA79kuIAADcA3+kuIAADcAz9kuIAADcAv+kuIAADcAr+kuIAADcAn+kuIAADcAEABXIAADcAAABXIAADcAj+BXIAADcAP/BXIAADcAMABXIAADcAIABXIAADcA3+BXIAADcA79BXIAADcAn+BXIAADcAr+BXIAADcAv+BXIAADcAz9BXIAADc");
	this.shape.setTransform(209.8,176.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.text = new cjs.Text("Round Number", "normal 400 16px 'Open Sans'");
	this.text.lineHeight = 23;
	this.text.lineWidth = 129;
	this.text.parent = this;
	this.text.setTransform(7.2,122.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("16", "normal 400 12px 'Open Sans'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(401.6,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("15", "normal 400 12px 'Open Sans'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 22;
	this.text_2.parent = this;
	this.text_2.setTransform(376,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("14", "normal 400 12px 'Open Sans'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 22;
	this.text_3.parent = this;
	this.text_3.setTransform(350.5,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("13", "normal 400 12px 'Open Sans'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 22;
	this.text_4.parent = this;
	this.text_4.setTransform(324.9,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("12", "normal 400 12px 'Open Sans'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 22;
	this.text_5.parent = this;
	this.text_5.setTransform(299.3,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("11", "normal 400 12px 'Open Sans'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 22;
	this.text_6.parent = this;
	this.text_6.setTransform(273.7,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("10", "normal 400 12px 'Open Sans'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 22;
	this.text_7.parent = this;
	this.text_7.setTransform(248.2,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("9", "normal 400 12px 'Open Sans'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 22;
	this.text_8.parent = this;
	this.text_8.setTransform(222.6,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("8", "normal 400 12px 'Open Sans'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 22;
	this.text_9.parent = this;
	this.text_9.setTransform(197,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_9);
	}

	this.text_10 = new cjs.Text("7", "normal 400 12px 'Open Sans'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 22;
	this.text_10.parent = this;
	this.text_10.setTransform(171.4,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("6", "normal 400 12px 'Open Sans'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 22;
	this.text_11.parent = this;
	this.text_11.setTransform(145.9,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("5", "normal 400 12px 'Open Sans'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 22;
	this.text_12.parent = this;
	this.text_12.setTransform(120.3,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("4", "normal 400 12px 'Open Sans'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 18;
	this.text_13.lineWidth = 22;
	this.text_13.parent = this;
	this.text_13.setTransform(94.7,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_13);
	}

	this.text_14 = new cjs.Text("3", "normal 400 12px 'Open Sans'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 18;
	this.text_14.lineWidth = 22;
	this.text_14.parent = this;
	this.text_14.setTransform(69.1,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_14);
	}

	this.text_15 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 18;
	this.text_15.lineWidth = 22;
	this.text_15.parent = this;
	this.text_15.setTransform(43.6,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_15);
	}

	this.text_16 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 18;
	this.text_16.lineWidth = 22;
	this.text_16.parent = this;
	this.text_16.setTransform(18,149.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_16);
	}

	this.text_17 = new cjs.Text("Right Half", "normal 400 28px 'Open Sans'");
	this.text_17.lineHeight = 39;
	this.text_17.lineWidth = 127;
	this.text_17.parent = this;
	this.text_17.setTransform(862.7,270,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_17);
	}

	this.text_18 = new cjs.Text("Left Half", "normal 400 28px 'Open Sans'");
	this.text_18.lineHeight = 39;
	this.text_18.lineWidth = 110;
	this.text_18.parent = this;
	this.text_18.setTransform(862.7,20,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_18);
	}

	this.rightHalfDsp = new lib.HexDisplay();
	this.rightHalfDsp.parent = this;
	this.rightHalfDsp.setTransform(949.1,309.7,1,1,0,0,0,87.3,13.6);

	this.rightHalfBtn = new lib.rightHalfBtn();
	this.rightHalfBtn.parent = this;
	this.rightHalfBtn.setTransform(791.8,207.9);
	new cjs.ButtonHelper(this.rightHalfBtn, 0, 1, 1);

	this.leftHalfBtn = new lib.leftHalfBtn();
	this.leftHalfBtn.parent = this;
	this.leftHalfBtn.setTransform(704.1,207.9);
	new cjs.ButtonHelper(this.leftHalfBtn, 0, 1, 1);

	this.combinedCDsp = new lib.HexDisplay();
	this.combinedCDsp.parent = this;
	this.combinedCDsp.setTransform(530.5,191.2,1,1,0,0,0,87.3,13.6);

	this.leftKeyDsp = new lib.HexDisplay();
	this.leftKeyDsp.parent = this;
	this.leftKeyDsp.setTransform(1082.5,191.2,1,1,0,0,0,87.3,13.6);

	this.shiftedDDsp = new lib.HexDisplay();
	this.shiftedDDsp.parent = this;
	this.shiftedDDsp.setTransform(333.8,292.5,1,1,0,0,0,87.3,13.6);

	this.preShiftedDDsp = new lib.HexDisplay();
	this.preShiftedDDsp.parent = this;
	this.preShiftedDDsp.setTransform(87.5,292.5,1,1,0,0,0,87.3,13.6);

	this.leftHalfDsp = new lib.HexDisplay();
	this.leftHalfDsp.parent = this;
	this.leftHalfDsp.setTransform(949.1,59.7,1,1,0,0,0,87.3,13.6);

	this.preShiftedCDsp = new lib.HexDisplay();
	this.preShiftedCDsp.parent = this;
	this.preShiftedCDsp.setTransform(87.5,87.9,1,1,0,0,0,87.3,13.6);

	this.shiftedCDsp = new lib.HexDisplay();
	this.shiftedCDsp.parent = this;
	this.shiftedCDsp.setTransform(333.8,87.8,1,1,0,0,0,87.3,13.6);

	this.keySubTxt = new cjs.Text("", "normal 400 14px 'Open Sans'");
	this.keySubTxt.name = "keySubTxt";
	this.keySubTxt.lineHeight = 20;
	this.keySubTxt.lineWidth = 11;
	this.keySubTxt.parent = this;
	this.keySubTxt.setTransform(1028,164.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.keySubTxt);
	}

	this.text_19 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_19.lineHeight = 39;
	this.text_19.lineWidth = 47;
	this.text_19.parent = this;
	this.text_19.setTransform(996.3,150.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_19);
	}

	this.text_20 = new cjs.Text("Bit Rotation", "normal 400 16px 'Open Sans'");
	this.text_20.lineHeight = 23;
	this.text_20.lineWidth = 129;
	this.text_20.parent = this;
	this.text_20.setTransform(7.2,213);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_20);
	}

	this.text_21 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 18;
	this.text_21.lineWidth = 22;
	this.text_21.parent = this;
	this.text_21.setTransform(401.6,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_21);
	}

	this.text_22 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 18;
	this.text_22.lineWidth = 22;
	this.text_22.parent = this;
	this.text_22.setTransform(376,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_22);
	}

	this.text_23 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 18;
	this.text_23.lineWidth = 22;
	this.text_23.parent = this;
	this.text_23.setTransform(350.5,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_23);
	}

	this.text_24 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 18;
	this.text_24.lineWidth = 22;
	this.text_24.parent = this;
	this.text_24.setTransform(324.9,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_24);
	}

	this.text_25 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 18;
	this.text_25.lineWidth = 22;
	this.text_25.parent = this;
	this.text_25.setTransform(299.3,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_25);
	}

	this.text_26 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_26.textAlign = "center";
	this.text_26.lineHeight = 18;
	this.text_26.lineWidth = 22;
	this.text_26.parent = this;
	this.text_26.setTransform(273.7,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_26);
	}

	this.text_27 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_27.textAlign = "center";
	this.text_27.lineHeight = 18;
	this.text_27.lineWidth = 22;
	this.text_27.parent = this;
	this.text_27.setTransform(248.2,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_27);
	}

	this.text_28 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_28.textAlign = "center";
	this.text_28.lineHeight = 18;
	this.text_28.lineWidth = 22;
	this.text_28.parent = this;
	this.text_28.setTransform(222.6,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_28);
	}

	this.text_29 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_29.textAlign = "center";
	this.text_29.lineHeight = 18;
	this.text_29.lineWidth = 22;
	this.text_29.parent = this;
	this.text_29.setTransform(197,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_29);
	}

	this.text_30 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_30.textAlign = "center";
	this.text_30.lineHeight = 18;
	this.text_30.lineWidth = 22;
	this.text_30.parent = this;
	this.text_30.setTransform(171.4,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_30);
	}

	this.text_31 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_31.textAlign = "center";
	this.text_31.lineHeight = 18;
	this.text_31.lineWidth = 22;
	this.text_31.parent = this;
	this.text_31.setTransform(145.9,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_31);
	}

	this.text_32 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_32.textAlign = "center";
	this.text_32.lineHeight = 18;
	this.text_32.lineWidth = 22;
	this.text_32.parent = this;
	this.text_32.setTransform(120.3,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_32);
	}

	this.text_33 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_33.textAlign = "center";
	this.text_33.lineHeight = 18;
	this.text_33.lineWidth = 22;
	this.text_33.parent = this;
	this.text_33.setTransform(94.7,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_33);
	}

	this.text_34 = new cjs.Text("2", "normal 400 12px 'Open Sans'");
	this.text_34.textAlign = "center";
	this.text_34.lineHeight = 18;
	this.text_34.lineWidth = 22;
	this.text_34.parent = this;
	this.text_34.setTransform(69.1,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_34);
	}

	this.text_35 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_35.textAlign = "center";
	this.text_35.lineHeight = 18;
	this.text_35.lineWidth = 22;
	this.text_35.parent = this;
	this.text_35.setTransform(43.6,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_35);
	}

	this.text_36 = new cjs.Text("1", "normal 400 12px 'Open Sans'");
	this.text_36.textAlign = "center";
	this.text_36.lineHeight = 18;
	this.text_36.lineWidth = 22;
	this.text_36.parent = this;
	this.text_36.setTransform(18,189.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_36);
	}

	this.text_37 = new cjs.Text("PC2 Permutation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_37.textAlign = "center";
	this.text_37.lineHeight = 39;
	this.text_37.lineWidth = 193;
	this.text_37.parent = this;
	this.text_37.setTransform(785.3,140.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_37);
	}

	this.rotateTimes2Txt = new cjs.Text("", "normal 400 16px 'Open Sans'");
	this.rotateTimes2Txt.name = "rotateTimes2Txt";
	this.rotateTimes2Txt.textAlign = "center";
	this.rotateTimes2Txt.lineHeight = 23;
	this.rotateTimes2Txt.lineWidth = 27;
	this.rotateTimes2Txt.parent = this;
	this.rotateTimes2Txt.setTransform(217.1,324.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.rotateTimes2Txt);
	}

	this.text_38 = new cjs.Text("Times", "normal 400 16px 'Open Sans'");
	this.text_38.lineHeight = 23;
	this.text_38.lineWidth = 45;
	this.text_38.parent = this;
	this.text_38.setTransform(234.2,324.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_38);
	}

	this.text_39 = new cjs.Text("Rotate", "normal 400 16px 'Open Sans'");
	this.text_39.lineHeight = 23;
	this.text_39.lineWidth = 49;
	this.text_39.parent = this;
	this.text_39.setTransform(150.2,324.5);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_39);
	}

	this.rotateTimes1Txt = new cjs.Text("", "normal 400 16px 'Open Sans'");
	this.rotateTimes1Txt.name = "rotateTimes1Txt";
	this.rotateTimes1Txt.textAlign = "center";
	this.rotateTimes1Txt.lineHeight = 23;
	this.rotateTimes1Txt.lineWidth = 27;
	this.rotateTimes1Txt.parent = this;
	this.rotateTimes1Txt.setTransform(217.1,33.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.rotateTimes1Txt);
	}

	this.text_40 = new cjs.Text("Times", "normal 400 16px 'Open Sans'");
	this.text_40.lineHeight = 23;
	this.text_40.lineWidth = 45;
	this.text_40.parent = this;
	this.text_40.setTransform(234.2,33.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_40);
	}

	this.text_41 = new cjs.Text("Rotate", "normal 400 16px 'Open Sans'");
	this.text_41.lineHeight = 23;
	this.text_41.lineWidth = 49;
	this.text_41.parent = this;
	this.text_41.setTransform(150.2,33.3);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_41);
	}

	this.dSubTxt = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.dSubTxt.name = "dSubTxt";
	this.dSubTxt.lineHeight = 20;
	this.dSubTxt.lineWidth = 11;
	this.dSubTxt.parent = this;
	this.dSubTxt.setTransform(16.2,326.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.dSubTxt);
	}

	this.text_42 = new cjs.Text("D", "normal 400 28px 'Open Sans'");
	this.text_42.lineHeight = 39;
	this.text_42.lineWidth = 20;
	this.text_42.parent = this;
	this.text_42.setTransform(1.4,314.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_42);
	}

	this.cSubTxt = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.cSubTxt.name = "cSubTxt";
	this.cSubTxt.lineHeight = 20;
	this.cSubTxt.lineWidth = 11;
	this.cSubTxt.parent = this;
	this.cSubTxt.setTransform(14.8,60.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.cSubTxt);
	}

	this.text_43 = new cjs.Text("C", "normal 400 28px 'Open Sans'");
	this.text_43.lineHeight = 39;
	this.text_43.lineWidth = 18;
	this.text_43.parent = this;
	this.text_43.setTransform(1.4,48.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_43);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EBGjgTsIAACQEArQgRcIAAh4IAAiYIbTAAIAACAIEmAAIAAQPEBAGAC4IAAiWIAAh5INiAAINxAAIAAEPEBGjATvIAAB4EArQAVnIAAh4IAAiYIbTAAIAACYIOQAAIAAu1EBbZAC+I7TAAEBNogBXIAAEPEAgIgIoIAAqsIJWAAEAgIAJqIAAKFIJWAAEBGjgRWI7TAAEBGjAVtI7TAAAonhXINwAAIAACNIAACCA5lvHIKdAAIAAL0Eg04gNBIAAkRIbTAAIAACLIAACGA2KC4IAAiWIAAh5INjAAIAAEPA5lQ0IAAiFEg04AOvIAAEQIbTAAIAAiLIX4AAIAAr2AFJC+I7TAAEhbYgNBIAAkRIbTAAIAACLIJXAAEhAFgPHIAACGEhbYAOvIAAEQIbTAAIAAiLIAAiFEhAFAQ0IJXAAEhAFgM7I7TAAEhAFAOpI7TAAA5ls7I7TAAA5lOpI7TAAAFJA2IJ8gB");
	this.shape_1.setTransform(584.9,184.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1174C3").s().p("AAxJKIvQAAIAArUIACAAIAAgxIgCAAIAAmNIPQAAINvAAIAASSg");
	this.shape_2.setTransform(785.6,188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AZ4TiIAAhKIBxBKIhxBKgEhGVAQnIAAhKIByBKIhyBLgAxTExIhKAAIBLhyIBKBygEBFMAEuIhLAAIBKhyIBLBygAghAoIAAhKIBxBKIhxBLgEAwcAATIADACIgDACgEglzAATIADACIgDACgA/4jgIBJAAIBMAAIhLBygEA6UgDqIBOAAIBHAAIhKBygEhGVgPUIAAhKIByBKIhyBLgAZ4zhIAAhLIBxBLIhxBLg");
	this.shape_3.setTransform(684.7,186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_43},{t:this.cSubTxt},{t:this.text_42},{t:this.dSubTxt},{t:this.text_41},{t:this.text_40},{t:this.rotateTimes1Txt},{t:this.text_39},{t:this.text_38},{t:this.rotateTimes2Txt},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.keySubTxt},{t:this.shiftedCDsp},{t:this.preShiftedCDsp},{t:this.leftHalfDsp},{t:this.preShiftedDDsp},{t:this.shiftedDDsp},{t:this.leftKeyDsp},{t:this.combinedCDsp},{t:this.leftHalfBtn},{t:this.rightHalfBtn},{t:this.rightHalfDsp},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.KeyGenRounds, new cjs.Rectangle(-1,18.7,1259.7,328.9), null);


(lib.KeyGen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisStage = this;
		
		this.cBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("cPermutationRequested"));
		});
		
		this.dBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("dPermutationRequested"));
		});
		
		this.keyRoundsBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("keyRoundsRequested"));
		});
		
		this.setData = (function(cryptoObject) {
			this.keyDsp.gotoAndStop(0);
			this.keyDsp.setValue(cryptoObject.key);
			
			this.cDsp.gotoAndStop(0);
			this.cDsp.setValue(cryptoObject.roundKeys.initialKeyPermutations.c);
			
			this.dDsp.gotoAndStop(0);
			this.dDsp.setValue(cryptoObject.roundKeys.initialKeyPermutations.d);
			
			var roundKeys = [];
			
			for (let i = 0; i < cryptoObject.roundKeys.roundKeyParts.length; i++) {
				roundKeys[i] = cryptoObject.roundKeys.roundKeyParts[i].key;
			}
			
			this.roundKeysTable.gotoAndStop(0);
			this.roundKeysTable.setData("16 Round Keys", roundKeys);
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.roundKeysTable = new lib.Table();
	this.roundKeysTable.parent = this;
	this.roundKeysTable.setTransform(969.8,160.7,1,1,0,0,0,0.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.roundKeysTable).wait(1));

	// Layer 2
	this.dBtn = new lib.viewDBtn();
	this.dBtn.parent = this;
	this.dBtn.setTransform(352.3,170,1,1,0,0,0,37.6,16.3);
	new cjs.ButtonHelper(this.dBtn, 0, 1, 1);

	this.cBtn = new lib.viewCBtn();
	this.cBtn.parent = this;
	this.cBtn.setTransform(267.3,170,1,1,0,0,0,37.6,16.3);
	new cjs.ButtonHelper(this.cBtn, 0, 1, 1);

	this.dDsp = new lib.HexDisplay();
	this.dDsp.parent = this;
	this.dDsp.setTransform(494.6,226.8,1,1,0,0,0,87.3,13.6);

	this.cDsp = new lib.HexDisplay();
	this.cDsp.parent = this;
	this.cDsp.setTransform(492.7,41.1,1,1,0,0,0,87.3,13.6);

	this.keyDsp = new lib.HexDisplay();
	this.keyDsp.parent = this;
	this.keyDsp.setTransform(87.3,131.2,1,1,0,0,0,87.3,13.6);

	this.keyRoundsBtn = new lib.ViewButton();
	this.keyRoundsBtn.parent = this;
	this.keyRoundsBtn.setTransform(597.3,152.9);
	new cjs.ButtonHelper(this.keyRoundsBtn, 0, 1, 1);

	this.text = new cjs.Text("Generate Round Keys", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(634.3,86.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 11;
	this.text_1.parent = this;
	this.text_1.setTransform(420.5,199.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("0", "normal 400 14px 'Open Sans'");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 11;
	this.text_2.parent = this;
	this.text_2.setTransform(420.1,13.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("D", "normal 400 28px 'Open Sans'");
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 20;
	this.text_3.parent = this;
	this.text_3.setTransform(407.7,186.9,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("C", "normal 400 28px 'Open Sans'");
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 18;
	this.text_4.parent = this;
	this.text_4.setTransform(406.7,1.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("0", "normal 400 12px 'Open Sans'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 7;
	this.text_5.parent = this;
	this.text_5.setTransform(353.3,124.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("0", "normal 400 12px 'Open Sans'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 7;
	this.text_6.parent = this;
	this.text_6.setTransform(308.5,124.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("Run Mapping for C  &  D", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 39;
	this.text_7.lineWidth = 193;
	this.text_7.parent = this;
	this.text_7.setTransform(307.7,87.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("64-bit Key", "normal 400 28px 'Open Sans'");
	this.text_8.lineHeight = 39;
	this.text_8.lineWidth = 144;
	this.text_8.parent = this;
	this.text_8.setTransform(1.5,91.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA1tgAQIGPAAADZuhIAAiLIbTAAIAACLIAACLI7TAAgEAnSgJIIAAlZIomAAAe2OaIAACTI7TAAIAAiDIAAiTIbTAAgEAnSAJKIAAFQIocAAAskpJIAAlYIP9AAEg77ABlIAAkPIbTAAIAACaIAAB1EggogAQIErAAEggoABrI7TAAAskJSIAAFYIQHAA");
	this.shape.setTransform(383.7,134.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EArIAAAIAAhKIA5AnIAAgFIABAAIAAAFIAwAfIAAAJIhqBGgEgswAAAIAAhKIA5AnIAAgFIAAAAIAAAFIAwAfIAAAJIhpBGg");
	this.shape_1.setTransform(491.2,132.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1174C3").s().p("A6RJNItuAAIAArTIACAAIAAgwIgCAAIAAmPIc/AAIAASSgAZlJGIukAAIAArUIACAAIAAgwIgCAAIAAmPIOkAAIOcAAIAAI5IAAJag");
	this.shape_2.setTransform(471.3,134.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.keyRoundsBtn},{t:this.keyDsp},{t:this.cDsp},{t:this.dDsp},{t:this.cBtn},{t:this.dBtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.KeyGen, new cjs.Rectangle(-0.9,-30,1152,381.4), null);


(lib.DESRounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.manglerBtn.addEventListener("click", (function() {
			this.dispatchEvent(new createjs.Event("manglerRequested"));
		}).bind(this));
		
		this.setData = (function(cryptoObject, roundIndex) {
			this.keySubTxt.text = (roundIndex + 1).toString();
			
			var round = cryptoObject.rounds[roundIndex];
			var key = cryptoObject.roundKeys.roundKeyParts[roundIndex].key;
			
			this.inputDsp.gotoAndStop(0);
			this.inputDsp.setValue(round.input);
			
			this.leftInitialDsp.gotoAndStop(0);
			this.leftInitialDsp.setValue(round.leftInitial);
			
			this.rightInitialDsp.gotoAndStop(0);
			this.rightInitialDsp.setValue(round.rightInitial);
			
			this.keyDsp.gotoAndStop(0);
			this.keyDsp.setValue(key);
			
			this.mangledOutputDsp.gotoAndStop(0);
			this.mangledOutputDsp.setValue(round.manglerData.finalOutput);
			
			this.leftFinalDsp.gotoAndStop(0);
			this.leftFinalDsp.setValue(round.leftFinal);
			
			this.rightFinalDsp.gotoAndStop(0);
			this.rightFinalDsp.setValue(round.rightFinal);
			
			this.finalDsp.gotoAndStop(0);
			this.finalDsp.setValue(round.finalOutput);
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4VYVMAwrgwp");
	this.shape.setTransform(520.9,284.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.keyDsp = new lib.HexDisplay();
	this.keyDsp.parent = this;
	this.keyDsp.setTransform(1020.5,240.7,1,1,0,0,0,87.3,12.6);

	this.finalDsp = new lib.HexDisplay();
	this.finalDsp.parent = this;
	this.finalDsp.setTransform(519.7,517.7,1,1,0,0,0,87.3,12.6);

	this.mangledOutputDsp = new lib.HexDisplay();
	this.mangledOutputDsp.parent = this;
	this.mangledOutputDsp.setTransform(764,362.3,1,1,0,0,0,87.3,12.6);

	this.rightFinalDsp = new lib.HexDisplay();
	this.rightFinalDsp.parent = this;
	this.rightFinalDsp.setTransform(764,457.9,1,1,0,0,0,87.3,12.6);

	this.leftFinalDsp = new lib.HexDisplay();
	this.leftFinalDsp.parent = this;
	this.leftFinalDsp.setTransform(264,457.7,1,1,0,0,0,87.3,12.6);

	this.rightInitialDsp = new lib.HexDisplay();
	this.rightInitialDsp.parent = this;
	this.rightInitialDsp.setTransform(763.5,128.7,1,1,0,0,0,87.3,12.6);

	this.inputDsp = new lib.HexDisplay();
	this.inputDsp.parent = this;
	this.inputDsp.setTransform(519.5,82.3,1,1,0,0,0,87.3,12.6);

	this.leftInitialDsp = new lib.HexDisplay();
	this.leftInitialDsp.parent = this;
	this.leftInitialDsp.setTransform(264,127.7,1,1,0,0,0,87.3,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leftInitialDsp},{t:this.inputDsp},{t:this.rightInitialDsp},{t:this.leftFinalDsp},{t:this.rightFinalDsp},{t:this.mangledOutputDsp},{t:this.finalDsp},{t:this.keyDsp}]}).wait(1));

	// Objects
	this.keySubTxt = new cjs.Text("1", "normal 400 16px 'Open Sans'");
	this.keySubTxt.name = "keySubTxt";
	this.keySubTxt.lineHeight = 23;
	this.keySubTxt.lineWidth = 20;
	this.keySubTxt.parent = this;
	this.keySubTxt.setTransform(1031.6,205);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.keySubTxt);
	}

	this.text = new cjs.Text("Round Key", "normal 400 28px 'Open Sans'");
	this.text.lineHeight = 39;
	this.text.parent = this;
	this.text.setTransform(934.3,200.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("32-Bit Right Output", "normal 400 28px 'Open Sans'");
	this.text_1.lineHeight = 39;
	this.text_1.parent = this;
	this.text_1.setTransform(677.9,416.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("32-Bit Left Output", "normal 400 28px 'Open Sans'");
	this.text_2.lineHeight = 39;
	this.text_2.parent = this;
	this.text_2.setTransform(177.9,416.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("64-Bit Output", "normal 400 28px 'Open Sans'");
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 194;
	this.text_3.parent = this;
	this.text_3.setTransform(433.4,476.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.instance = new lib.XOR();
	this.instance.parent = this;
	this.instance.setTransform(587.7,366.4,1,1,0,0,0,19.4,19.4);

	this.text_4 = new cjs.Text("Mangled", "normal 400 28px 'Open Sans'");
	this.text_4.lineHeight = 39;
	this.text_4.parent = this;
	this.text_4.setTransform(677.9,321.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("64-Bit Input", "normal 400 28px 'Open Sans'");
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 153;
	this.text_5.parent = this;
	this.text_5.setTransform(433.4,41.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Mangler Function", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 193;
	this.text_6.parent = this;
	this.text_6.setTransform(763.2,191.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("32-Bit Right Input", "normal 400 28px 'Open Sans'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 39;
	this.text_7.parent = this;
	this.text_7.setTransform(849.6,87.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("32-Bit Left Input", "normal 400 28px 'Open Sans'");
	this.text_8.lineHeight = 39;
	this.text_8.parent = this;
	this.text_8.setTransform(177.9,86.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_8);
	}

	this.manglerBtn = new lib.ViewButton();
	this.manglerBtn.parent = this;
	this.manglerBtn.setTransform(728,254);
	new cjs.ButtonHelper(this.manglerBtn, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EAtdgI/IAAiUIbTAAIAAEWI7TAAAFY4rIAAkQIbTAAIAAEWIt/AAIAAD3ASs4lItUAAEgFhgiAIM7AAIAADJAFYJeIAAh6IbTAAIAAEXI7TAAAFYL1IAAiXAV0g/IAAGbEAtdgHDIAAh8EAkTgI/IJKAAEAgrAYHIAACtI7TAAIAAkWIbTAAgEAgpAYHIACAAATCa3IAAHhI2hAAEgFhgiAIAACFEgg0giAIAAiLIbTAAIAACLEgg0gf7IAAiFIu2AAIAACwEgtcga6IAACLI7TAAIAAkWIbTAAIAACLMAhJAhIAli/1I7SAAEg7FAa0ItqAAIAAkWIbTAAIAAEWItpAAIAAHkIYZAAEgFhAkMI7TAAIAAkWIbTAAgAntLZILFLCAlmJeIK+AA");
	this.shape_1.setTransform(642.1,298.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1174C3").s().p("AueI1IAAgsIgBAAIAAqfIACAAIAAgtIgCAAIAAlxIc+AAIAAQ2IABAAIAAAzg");
	this.shape_2.setTransform(764.6,235);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EABAAgLIBxhLIAABTIAABCgEgcbAgTIAAhTIByBLIhyBKgAI1VLIA0g0IA1g1IAcCFgEglmASyIBpBqIiFAbgAhGHaIBwhLIAABLIAABKgAm4E/IA2g2IAzgzIAcCDIAAACgAa7DXIBLAAIBKAAIhKBygEAoygLEIByhKIAABKIAABLgAXz2zIBLAAIBKAAIhKBygEAMhgg7IBLAAIBKAAIhKBxgEgqjghUIBLAAIBKAAIhKBxg");
	this.shape_3.setTransform(602,311.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.manglerBtn},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.keySubTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DESRounds, new cjs.Rectangle(175.5,40,933.2,491.2), null);


(lib.DESOverview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Bind event listeners
		this.encryptBtn.addEventListener("click", encryptClicked.bind(this));
		function encryptClicked() {
			this.dispatchEvent(new createjs.Event("encryptionRequested"));
			//document.stageRoot.gotoAndStop("Encrypt");
		}
		
		this.decryptBtn.addEventListener("click", decryptClicked.bind(this));
		function decryptClicked() {
			this.dispatchEvent(new createjs.Event("decryptionRequested"));
		}
		
		this.setData = (function(encryptionObject, decryptionObject) {
			this.encryptionKeyDsp.gotoAndStop(0);
			this.encryptionKeyDsp.setValue(encryptionObject.key);
			
			this.encryptionPlaintextDsp.gotoAndStop(0);
			this.encryptionPlaintextDsp.setValue(encryptionObject.input);
			
			this.ciphertextDsp.gotoAndStop(0);
			this.ciphertextDsp.setValue(document.stageRoot.globalData.encryptionObject.final);
			
			this.decryptionKeyDsp.gotoAndStop(0);
			this.decryptionKeyDsp.setValue(document.stageRoot.globalData.decryptionObject.key);
			
			this.decryptionPlaintextDsp.gotoAndStop(0);
			this.decryptionPlaintextDsp.setValue(document.stageRoot.globalData.decryptionObject.final);
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.decryptionPlaintextDsp = new lib.HexDisplay();
	this.decryptionPlaintextDsp.parent = this;
	this.decryptionPlaintextDsp.setTransform(1068.6,190,1,1,0,0,0,87.3,13.6);

	this.decryptionKeyDsp = new lib.HexDisplay();
	this.decryptionKeyDsp.parent = this;
	this.decryptionKeyDsp.setTransform(818.7,42.9,1,1,0,0,0,87.3,13.6);

	this.ciphertextDsp = new lib.HexDisplay();
	this.ciphertextDsp.parent = this;
	this.ciphertextDsp.setTransform(566,186.8,1,1,0,0,0,87.3,13.6);

	this.encryptionPlaintextDsp = new lib.HexDisplay();
	this.encryptionPlaintextDsp.parent = this;
	this.encryptionPlaintextDsp.setTransform(86.3,230.7,1,1,0,0,0,87.3,13.6);

	this.encryptionKeyDsp = new lib.HexDisplay();
	this.encryptionKeyDsp.parent = this;
	this.encryptionKeyDsp.setTransform(86.4,141.5,1,1,0,0,0,87.3,13.6);

	this.encryptBtn = new lib.ViewButton();
	this.encryptBtn.parent = this;
	this.encryptBtn.setTransform(277.4,200.8);
	new cjs.ButtonHelper(this.encryptBtn, 0, 1, 1);

	this.decryptBtn = new lib.ViewButton();
	this.decryptBtn.parent = this;
	this.decryptBtn.setTransform(782.4,200.8);
	new cjs.ButtonHelper(this.decryptBtn, 0, 1, 1);

	this.text = new cjs.Text("Plaintext", "normal 400 28px 'Open Sans'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(982.6,147.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 144;
	this.text_1.parent = this;
	this.text_1.setTransform(732.7,1.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("DES\nDecryption", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 174;
	this.text_2.parent = this;
	this.text_2.setTransform(819.5,138.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("DES\nEncryption", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 174;
	this.text_3.parent = this;
	this.text_3.setTransform(316.8,135.8,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("Ciphertext", "normal 400 28px 'Open Sans'");
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 144;
	this.text_4.parent = this;
	this.text_4.setTransform(479.9,145.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Plaintext", "normal 400 28px 'Open Sans'");
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 144;
	this.text_5.parent = this;
	this.text_5.setTransform(0.3,250.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 144;
	this.text_6.parent = this;
	this.text_6.setTransform(0.3,99.7,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBaZAGJI7TAAIAACQIAACGIbTAAgAYDslIAAkRIbTAAIAAEREAz9AIZIJXAAEAlegMfIAAJWEAzWgMfIt4AAItbAAAvcJ6IAAh5IAAiYIbSAAIAACAIJWAAAL2HpIAACRA6kIBIJWAAEhNGAC6ItSAAIAAkWIbTAAIAAEWgEg5VAFjIzxAAIAAipEhNGAMfItSAAIAAEYIbTAAIAAkYgEg5VAJ2IzxAAIAACpAL2KAI7SAA");
	this.shape.setTransform(577.5,134.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AYxJMIAApRIAAiCIADAAIAAgxIgDAAIAAmOIOgAAIOgAAIAAJwIAAIigEg1wAJHIAAm/IAAkTIAAgBIACAAIAAgxIgCAAIAAmOIc/AAIAAJdIAAI1g");
	this.shape_1.setTransform(565.9,184.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg8MAF7IAAhLIBwBLIhwBKgEA6cAEdIAAhKIBxBKIhxBLgA0GEFIAAhKIByBKIhyBLgASUDtIAAhKIByBKIhyBLgEg8MABnIAAhKIBwBKIhwBLgEAhbgHEIBLAAIBKAAIhKBxg");
	this.shape_2.setTransform(595.9,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.decryptBtn},{t:this.encryptBtn},{t:this.encryptionKeyDsp},{t:this.encryptionPlaintextDsp},{t:this.ciphertextDsp},{t:this.decryptionKeyDsp},{t:this.decryptionPlaintextDsp}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DESOverview, new cjs.Rectangle(-2,-0.2,1159,276.5), null);


(lib.DESInternal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var thisStage = this;
		
		this.initialPermBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("initialPermutationRequested"));
		});
		
		this.finalPermBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("finalPermutationRequested"));
		});
		
		this.perRoundBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("keyRoundGenerationRequested"));
		});
		
		this.roundsBtn.addEventListener("click", function() {
			thisStage.dispatchEvent(new createjs.Event("roundsRequested"));
		});
		
		this.inOrderKeyTable.visible = false;
		this.reverseKeyTable.visible = false;
		
		this.straightThrough.showKeyTable.addEventListener("mouseover", showInOrderKeyTable.bind(this));
		this.straightThrough.showKeyTable.addEventListener("mouseout", hideInOrderKeyTable.bind(this));
		
		function showInOrderKeyTable() {
			this.inOrderKeyTable.visible = true;
		}
		
		function hideInOrderKeyTable() {
			this.inOrderKeyTable.visible = false;
		}
		
		this.reverseOrder.showKeyTable.addEventListener("mouseover", showInOrderKeyTable.bind(this));
		this.reverseOrder.showKeyTable.addEventListener("mouseout", hideInOrderKeyTable.bind(this));
		
		this.reverseOrder.showReverseKeyTable.addEventListener("mouseover", showReverseKeyTable.bind(this));
		this.reverseOrder.showReverseKeyTable.addEventListener("mouseout", hideReverseKeyTable.bind(this));
		
		function showReverseKeyTable() {
			this.reverseKeyTable.visible = true;
		}
		
		function hideReverseKeyTable() {
			this.reverseKeyTable.visible = false;
		}
		
		this.setData = (function (encryptionObject, decryptionObject, isEncryption) {
			var cryptoObject = (isEncryption) ? encryptionObject : decryptionObject;
			
			this.inputLabelTxt.text = (isEncryption)? "Plaintext" : "Ciphertext";
			this.outputLabelTxt.text = (isEncryption)? "Ciphertext" : "Plaintext";
			
			this.straightThrough.visible = isEncryption;
			this.reverseOrder.visible = !isEncryption;
			
			this.inputDsp.gotoAndStop(0);
			this.inputDsp.setValue(cryptoObject.input);
			
			this.keyDsp.gotoAndStop(0);
			this.keyDsp.setValue(cryptoObject.key);
			
			this.permutationDsp.gotoAndStop(0);
			this.permutationDsp.setValue(cryptoObject.initialPermutation);
		
			this.finalRoundOutputDsp.gotoAndStop(0);
			this.finalRoundOutputDsp.setValue(cryptoObject.rounds[15].finalOutput);
			
			this.leftRightSwapDsp.gotoAndStop(0);
			this.leftRightSwapDsp.setValue(cryptoObject.finalRoundSwitch);
			
			this.outputDsp.gotoAndStop(0);
			this.outputDsp.setValue(cryptoObject.final);
			
			var inOrderKeys = [];
			
			for (let i = 0; i < encryptionObject.roundKeys.roundKeyParts.length; i++) {
				inOrderKeys[i] = encryptionObject.roundKeys.roundKeyParts[i].key;
			}
			
			this.inOrderKeyTable.gotoAndStop(0);
			this.inOrderKeyTable.setData("Per-Round Keys", inOrderKeys);
			
			var reverseOrderKeys = [];
			
			for (let i = 0; i < decryptionObject.roundKeys.roundKeyParts.length; i++) {
				reverseOrderKeys[i] = decryptionObject.roundKeys.roundKeyParts[i].key;
			}
			
			this.reverseKeyTable.gotoAndStop(0);
			this.reverseKeyTable.setData("Reversed Keys", reverseOrderKeys);
		}).bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// In-order key table
	this.inOrderKeyTable = new lib.Table();
	this.inOrderKeyTable.parent = this;
	this.inOrderKeyTable.setTransform(671.9,235.5,1,1,0,0,0,0.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.inOrderKeyTable).wait(1));

	// Reverse key table
	this.reverseKeyTable = new lib.Table();
	this.reverseKeyTable.parent = this;
	this.reverseKeyTable.setTransform(671.9,235.5,1,1,0,0,0,0.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.reverseKeyTable).wait(1));

	// Reverse Order dgp
	this.reverseOrder = new lib.ReverseOrderDiagramPortion();
	this.reverseOrder.parent = this;
	this.reverseOrder.setTransform(454.3,238.8,1,1,0,0,0,92.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.reverseOrder).wait(1));

	// Straight Through dgp
	this.straightThrough = new lib.PerRoundStraightThrough();
	this.straightThrough.parent = this;
	this.straightThrough.setTransform(454.4,239.2,1,1,0,0,0,8.2,65.3);

	this.timeline.addTween(cjs.Tween.get(this.straightThrough).wait(1));

	// Layer 2
	this.leftRightSwapDsp = new lib.HexDisplay();
	this.leftRightSwapDsp.parent = this;
	this.leftRightSwapDsp.setTransform(813.5,126.3,1,1,0,0,0,87.3,13.6);

	this.finalRoundOutputDsp = new lib.HexDisplay();
	this.finalRoundOutputDsp.parent = this;
	this.finalRoundOutputDsp.setTransform(815.5,46.3,1,1,0,0,0,87.3,13.6);

	this.text = new cjs.Text("Left/Right Swap", "normal 400 28px 'Open Sans'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(726.7,148.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.text_1 = new cjs.Text("Final Round Output", "normal 400 28px 'Open Sans'");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 258;
	this.text_1.parent = this;
	this.text_1.setTransform(728.5,6.1,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.permutationDsp = new lib.HexDisplay();
	this.permutationDsp.parent = this;
	this.permutationDsp.setTransform(114.7,346,1,1,0,0,0,87.3,13.6);

	this.text_2 = new cjs.Text("Permutation", "normal 400 28px 'Open Sans'");
	this.text_2.lineHeight = 39;
	this.text_2.lineWidth = 198;
	this.text_2.parent = this;
	this.text_2.setTransform(28.6,306.4,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.outputDsp = new lib.HexDisplay();
	this.outputDsp.parent = this;
	this.outputDsp.setTransform(1073.3,289.6,1,1,0,0,0,87.3,13.6);

	this.inputDsp = new lib.HexDisplay();
	this.inputDsp.parent = this;
	this.inputDsp.setTransform(114.7,-4,1,1,0,0,0,87.3,13.6);

	this.keyDsp = new lib.HexDisplay();
	this.keyDsp.parent = this;
	this.keyDsp.setTransform(448.5,-4.2,1,1,0,0,0,87.3,13.6);

	this.initialPermBtn = new lib.ViewButton();
	this.initialPermBtn.parent = this;
	this.initialPermBtn.setTransform(82.6,131.8);
	new cjs.ButtonHelper(this.initialPermBtn, 0, 1, 1);

	this.perRoundBtn = new lib.ViewButton();
	this.perRoundBtn.parent = this;
	this.perRoundBtn.setTransform(416.6,133.5);
	new cjs.ButtonHelper(this.perRoundBtn, 0, 1, 1);

	this.roundsBtn = new lib.ViewButton();
	this.roundsBtn.parent = this;
	this.roundsBtn.setTransform(416,381);
	new cjs.ButtonHelper(this.roundsBtn, 0, 1, 1);

	this.finalPermBtn = new lib.ViewButton();
	this.finalPermBtn.parent = this;
	this.finalPermBtn.setTransform(820.9,320.2,1,1,0,0,0,37.6,16.3);
	new cjs.ButtonHelper(this.finalPermBtn, 0, 1, 1);

	this.outputLabelTxt = new cjs.Text("Ciphertext", "normal 400 28px 'Open Sans'");
	this.outputLabelTxt.name = "outputLabelTxt";
	this.outputLabelTxt.lineHeight = 39;
	this.outputLabelTxt.lineWidth = 144;
	this.outputLabelTxt.parent = this;
	this.outputLabelTxt.setTransform(987.4,250.2,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.outputLabelTxt);
	}

	this.text_3 = new cjs.Text("Final Permutation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 193;
	this.text_3.parent = this;
	this.text_3.setTransform(822.5,237.5,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("Initial Permutation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 193;
	this.text_4.parent = this;
	this.text_4.setTransform(120,65.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("16 Rounds", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 39;
	this.text_5.lineWidth = 193;
	this.text_5.parent = this;
	this.text_5.setTransform(453,314.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Per Round Key Generation", "normal 400 28px 'Open Sans'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 193;
	this.text_6.parent = this;
	this.text_6.setTransform(453.6,67.3,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("Key", "normal 400 28px 'Open Sans'");
	this.text_7.lineHeight = 39;
	this.text_7.lineWidth = 144;
	this.text_7.parent = this;
	this.text_7.setTransform(362.6,-43.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_7);
	}

	this.inputLabelTxt = new cjs.Text("Plaintext", "normal 400 28px 'Open Sans'");
	this.inputLabelTxt.name = "inputLabelTxt";
	this.inputLabelTxt.lineHeight = 39;
	this.inputLabelTxt.lineWidth = 144;
	this.inputLabelTxt.parent = this;
	this.inputLabelTxt.setTransform(28.6,-43.6,0.663,0.663);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.inputLabelTxt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhKWgZIIuNAAIAAkXIbTAAIAAEXItGAAIAAFbEgkXgZRIAAkRIbTAAIAAERA2A5IIAAFbAnCbwIM4AAMAAAgvRINNAAApE5LI7TAAEg9QAbwIAABzI7TAAIAAkXIbTAAIAACkIXLAAEhKWAAaIAASUEA8HgQxIAGAAEBYkAQaI7UAAIAAB/IAACYIbUAAgEAilgVrINqAAIAAEXItqAAItpAAIAAkXINpAAIAAEXEAmzgPXIkeClIC7BsEAiUgJLIAAEXItqAAIAAkXINqAAINpAAIAAEXItpAAEAiVgMyIi6BsEAijAAKIAAG4Ad4vXIEdClEAyIASZIJXAA");
	this.shape.setTransform(594,171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1174C3").s().p("AxAcoIAArUIACAAIAAgPIACgBIgCgBIAAggIgCAAIAAmOIc/AAIAASTgEAoLAQlIAArUIACAAIAAgxIgCAAIAAmNIc/AAIAASSgAxAqUIAArUIACAAIAAgxIgCAAIAAmOIOYAAIOnAAIAASTgEhFJgKUIAArUIACAAIAAgxIgCAAIAAmOIOLAAIO0AAIAASTg");
	this.shape_1.setTransform(470,239.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+9XpIAAhKIBwBJIACABIgCABIhwBKgEhEYAOnIBLAAIBKAAIhKBygEBCnAOTIAAhLIByBLIhyBKgEAohAC8IBKAAIBLAAIhLBxgEAsYgPNIAmhAIA9B5IiIAHgEAlBgOUIA9h5IAlBAIAlBAgAwC3zIBLAAIBKAAIhKBxgEhEYgXzIBLAAIBKAAIhKBxgAaL3oIAAhKIByBKIhyBKg");
	this.shape_2.setTransform(548.3,197.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.inputLabelTxt},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.outputLabelTxt},{t:this.finalPermBtn},{t:this.roundsBtn},{t:this.perRoundBtn},{t:this.initialPermBtn},{t:this.keyDsp},{t:this.inputDsp},{t:this.outputDsp},{t:this.text_2},{t:this.permutationDsp},{t:this.text_1},{t:this.text},{t:this.finalRoundOutputDsp},{t:this.leftRightSwapDsp}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DESInternal, new cjs.Rectangle(26.2,-45,1135.6,471.2), null);


// stage content:
(lib.DESVisualizer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Overview:1,Internal:2,"Key Gen":3,"Key Rounds":4,Rounds:5,Mangler:6,SBoxes:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// Globally accessible DES data
		if (typeof this.globalData === "undefined") {
			this.globalData = {};
		
			this.globalData.encryptionObject = {};
			this.globalData.decryptionObject = {};
		
			this.globalData.roundIndex = 0;
			this.globalData.isEncryption = true;
		}
		
		document.stageRoot = this;
		
		// Event dispatcher for movie clips to listen to round changes.
		this.globalDispatcher = new createjs.EventDispatcher();
		
		document.initializeVisualization = (function(encryptionObject, decryptionObject) {
			this.globalData.encryptionObject = encryptionObject;
			this.globalData.decryptionObject = decryptionObject;
			
			this.gotoAndStop(0);
			this.gotoAndStop("Overview");
		}).bind(this);
	}
	this.frame_1 = function() {
		this.desOverview.gotoAndStop(0);
		this.desOverview.setData(this.globalData.encryptionObject, this.globalData.decryptionObject);
		
		this.globalData.roundIndex = 0;
		
		this.desOverview.removeAllEventListeners();
		this.desOverview.addEventListener("encryptionRequested", gotoEncryption.bind(this));
		this.desOverview.addEventListener("decryptionRequested", gotoDecryption.bind(this));
		
		function gotoEncryption() {
			this.globalData.isEncryption = true;
			this.gotoAndStop("Internal");
		}
		
		function gotoDecryption() {
			this.globalData.isEncryption = false;
			this.gotoAndStop("Internal");
		}
	}
	this.frame_2 = function() {
		this.titleTxt.text = (this.globalData.isEncryption) ? "DES Encryption" : "DES Decryption";
		
		this.desInternal.removeAllEventListeners();
		this.desInternal.addEventListener("initialPermutationRequested", gotoInitialPermutation.bind(this));
		this.desInternal.addEventListener("finalPermutationRequested", gotoFinalPermutation.bind(this));
		this.desInternal.addEventListener("keyRoundGenerationRequested", gotoKeyGen.bind(this));
		this.desInternal.addEventListener("roundsRequested", gotoRounds.bind(this));
		
		this.desInternal.gotoAndStop(0);
		this.desInternal.setData(this.globalData.encryptionObject, this.globalData.decryptionObject, this.globalData.isEncryption);
		
		function gotoInitialPermutation() {
			
		}
		
		function gotoFinalPermutation() {
			
		}
		
		function gotoKeyGen() {
			this.gotoAndStop("Key Gen");
		}
		
		function gotoRounds() {
			this.gotoAndStop("Rounds");
		}
		
		this.backToOverview.removeAllEventListeners();
		this.backToOverview.addEventListener("click", backToOverviewClicked.bind(this));
		
		function backToOverviewClicked() {
			this.gotoAndStop("Overview");
		}
		
		/*// Generate the array of values for the round keys table
		
		var values = [];
		for(let i = 0; i < 16; i++) {
			values[i] = document.stageRoot.globalData.encryptionObject.roundKeyParts[i].key;
		}
		this.keyTable.gotoAndStop(0);
		this.keyTable.initFields(values);*/
	}
	this.frame_3 = function() {
		this.keyGen.gotoAndStop(0);
		this.keyGen.setData(this.globalData.encryptionObject);
		
		this.keyGen.addEventListener("keyRoundsRequested", (function() {
			this.globalData.roundIndex = 0;
			this.gotoAndStop("Key Rounds");
		}).bind(this));
		
		this.backToInternal.removeAllEventListeners();
		this.backToInternal.addEventListener("click", backToInternalClicked.bind(this));
		
		function backToInternalClicked() {
			this.gotoAndStop("Internal");
		}
	}
	this.frame_4 = function() {
		this.keyGenRounds.gotoAndStop(0);
		
		this.roundSelector.gotoAndStop(0);
		this.roundSelector.setRoundIndex(this.globalData.roundIndex);
		
		this.roundSelector.removeAllEventListeners();
		this.roundSelector.addEventListener("roundChange", updateKeyGenRounds.bind(this));
		
		updateKeyGenRounds.bind(this)();
		
		function updateKeyGenRounds() {
			this.globalData.roundIndex = this.roundSelector.getRoundIndex();
			this.keyGenRounds.setData(this.globalData.encryptionObject, this.globalData.roundIndex);
		}
		
		this.backToKeyGen.removeAllEventListeners();
		this.backToKeyGen.addEventListener("click", backToKeyGenClicked.bind(this));
		
		function backToKeyGenClicked() {
			this.gotoAndStop("Key Gen");
		}
	}
	this.frame_5 = function() {
		var cryptoObject = (this.globalData.isEncryption)? this.globalData.encryptionObject : this.globalData.decryptionObject;
		
		this.desRounds.gotoAndStop(0);
		this.desRounds.addEventListener("manglerRequested", gotoMangler.bind(this));
		
		this.roundSelector.gotoAndStop(0);
		this.roundSelector.setRoundIndex(this.globalData.roundIndex);
		
		this.roundSelector.removeAllEventListeners();
		this.roundSelector.addEventListener("roundChange", updateRound.bind(this));
		
		updateRound.bind(this)();
		
		function updateRound() {
			this.globalData.roundIndex = this.roundSelector.getRoundIndex();
			this.desRounds.setData(cryptoObject, this.globalData.roundIndex);
		}
		
		function gotoMangler() {
			this.gotoAndStop("Mangler");
		}
		
		this.back.removeAllEventListeners();
		this.back.addEventListener("click", backClicked.bind(this));
			
		function backClicked() {
			this.gotoAndStop("Internal");
		}
	}
	this.frame_6 = function() {
		var cryptoObject = (this.globalData.isEncryption)? this.globalData.encryptionObject : this.globalData.decryptionObject;
		
		this.mangler.gotoAndStop(0);
		this.mangler.setData(cryptoObject, this.globalData.roundIndex);
		this.mangler.addEventListener("sBoxesRequested", gotoSBoxes.bind(this));
		
		this.back.removeAllEventListeners();
		this.back.addEventListener("click", backClicked.bind(this));
		
		function backClicked() {
			this.gotoAndStop("Rounds");
		}
		
		function gotoSBoxes() {
			this.gotoAndStop("SBoxes");
		}
	}
	this.frame_7 = function() {
		var cryptoObject = (this.globalData.isEncryption)? this.globalData.encryptionObject : this.globalData.decryptionObject;
		
		this.sBoxes.gotoAndStop(0);
		this.sBoxes.setData(cryptoObject, this.globalData.roundIndex);
		
		this.back.removeAllEventListeners();
		this.back.addEventListener("click", backClicked.bind(this));
		
		function backClicked() {
			this.gotoAndStop("Mangler");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(2));

	// DES
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

	this.desOverview = new lib.DESOverview();
	this.desOverview.parent = this;
	this.desOverview.setTransform(600.6,300.5,1,1,0,0,0,578.6,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.desOverview},{t:this.text}]},1).to({state:[]},1).wait(7));

	// DES 2
	this.backToOverview = new lib.Arrow();
	this.backToOverview.parent = this;
	this.backToOverview.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.backToOverview, 0, 1, 1);

	this.titleTxt = new cjs.Text("DES Encryption", "normal 400 48px 'Open Sans'", "#0066CC");
	this.titleTxt.name = "titleTxt";
	this.titleTxt.textAlign = "center";
	this.titleTxt.lineHeight = 65;
	this.titleTxt.lineWidth = 725;
	this.titleTxt.parent = this;
	this.titleTxt.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.titleTxt);
	}

	this.desInternal = new lib.DESInternal();
	this.desInternal.parent = this;
	this.desInternal.setTransform(593.8,307.5,1,1,0,0,0,596.1,152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.desInternal},{t:this.titleTxt},{t:this.backToOverview}]},2).to({state:[]},1).wait(6));

	// Key Gen
	this.backToInternal = new lib.Arrow();
	this.backToInternal.parent = this;
	this.backToInternal.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.backToInternal, 0, 1, 1);

	this.text_1 = new cjs.Text("Round Key Generation", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 65;
	this.text_1.lineWidth = 725;
	this.text_1.parent = this;
	this.text_1.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_1);
	}

	this.keyGen = new lib.KeyGen();
	this.keyGen.parent = this;
	this.keyGen.setTransform(600.6,300.8,1,1,0,0,0,566.3,120.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.keyGen},{t:this.text_1},{t:this.backToInternal}]},3).to({state:[]},1).wait(5));

	// Key Rounds
	this.backToKeyGen = new lib.Arrow();
	this.backToKeyGen.parent = this;
	this.backToKeyGen.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.backToKeyGen, 0, 1, 1);

	this.text_2 = new cjs.Text("Key Rounds", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 65;
	this.text_2.lineWidth = 725;
	this.text_2.parent = this;
	this.text_2.setTransform(600.3,19.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_2);
	}

	this.keyGenRounds = new lib.KeyGenRounds();
	this.keyGenRounds.parent = this;
	this.keyGenRounds.setTransform(600.5,332.6,1,1,0,0,0,584.8,190.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.keyGenRounds},{t:this.text_2},{t:this.backToKeyGen}]},4).to({state:[]},1).wait(4));

	// DES Rounds
	this.back = new lib.Arrow();
	this.back.parent = this;
	this.back.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.back, 0, 1, 1);

	this.text_3 = new cjs.Text("DES Round", "normal 400 48px 'Open Sans'", "#0066CC");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 65;
	this.text_3.lineWidth = 361;
	this.text_3.parent = this;
	this.text_3.setTransform(600,11.9);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text_3);
	}

	this.desRounds = new lib.DESRounds();
	this.desRounds.parent = this;
	this.desRounds.setTransform(-13.9,61.2,1,1,0,0,0,-0.8,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.desRounds},{t:this.text_3},{t:this.back}]},5).to({state:[]},1).wait(3));

	// Mangler
	this.back_1 = new lib.Arrow();
	this.back_1.parent = this;
	this.back_1.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.back_1, 0, 1, 1);

	this.mangler = new lib.manglerExpansion();
	this.mangler.parent = this;
	this.mangler.setTransform(600.3,200,1,1,0,0,0,590.3,180.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mangler},{t:this.back_1}]},6).to({state:[]},1).wait(2));

	// S-Boxes
	this.back_2 = new lib.Arrow();
	this.back_2.parent = this;
	this.back_2.setTransform(75,52.2,1,1,0,0,0,29.6,15.2);
	new cjs.ButtonHelper(this.back_2, 0, 1, 1);

	this.sBoxes = new lib.SBoxes();
	this.sBoxes.parent = this;
	this.sBoxes.setTransform(601.5,314.3,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sBoxes},{t:this.back_2}]},7).to({state:[]},1).wait(1));

	// S-Box
	this.field3 = new cjs.Text("11", "normal 400 14px 'Inconsolata'");
	this.field3.name = "field3";
	this.field3.textAlign = "center";
	this.field3.lineHeight = 19;
	this.field3.lineWidth = 17;
	this.field3.parent = this;
	this.field3.setTransform(181.7,158.5);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.field3);
	}

	this.input2 = new cjs.Text("10", "normal 400 14px 'Inconsolata'");
	this.input2.name = "input2";
	this.input2.textAlign = "center";
	this.input2.lineHeight = 19;
	this.input2.lineWidth = 17;
	this.input2.parent = this;
	this.input2.setTransform(181.7,126.3);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.input2);
	}

	this.input1 = new cjs.Text("01", "normal 400 14px 'Inconsolata'");
	this.input1.name = "input1";
	this.input1.textAlign = "center";
	this.input1.lineHeight = 19;
	this.input1.lineWidth = 17;
	this.input1.parent = this;
	this.input1.setTransform(181.7,94.2);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.input1);
	}

	this.input0 = new cjs.Text("00", "normal 400 14px 'Inconsolata'");
	this.input0.name = "input0";
	this.input0.textAlign = "center";
	this.input0.lineHeight = 19;
	this.input0.lineWidth = 17;
	this.input0.parent = this;
	this.input0.setTransform(181.7,62.1);
	if(!lib.properties.webfonts['Inconsolata']) {
		lib.webFontTxtInst['Inconsolata'] = lib.webFontTxtInst['Inconsolata'] || [];
		lib.webFontTxtInst['Inconsolata'].push(this.input0);
	}

	this.instance = new lib.sBox();
	this.instance.parent = this;
	this.instance.setTransform(513.8,149.4,1,1,0,0,0,535.9,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.input0},{t:this.input1},{t:this.input2},{t:this.field3}]},8).wait(1));

	// Round Selector
	this.roundSelector = new lib.roundSelector();
	this.roundSelector.parent = this;
	this.roundSelector.setTransform(1035.5,530.7,1,1,0,0,0,107.5,20);
	this.roundSelector._off = true;

	this.timeline.addTween(cjs.Tween.get(this.roundSelector).wait(4).to({_off:false},0).to({_off:true},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
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