(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3360,1050);// helper functions:

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


(lib.witnessInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().rr(-14,-28,28,56,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.witnessInner, new cjs.Rectangle(-14,-28,28,56), null);


(lib.plaintiffInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-12.5,-21.5,25,43);
	this.shape.setTransform(0,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOHgQh5AAAAh5IAArNQAAh5B5AAICdAAQB5AAAAB5IAALNQAAB5h5AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plaintiffInner, new cjs.Rectangle(-20,-48,40,96), null);


(lib.movingTruckInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-20,-40,40,80,12.1);
	this.shape.setTransform(0,0,0.767,1.348,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.movingTruckInner, new cjs.Rectangle(-53.9,-15.3,107.8,30.7), null);


(lib.focusInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgTFUQgxAAgkgkQgjgiAAgyIAAm3QAAgyAjgjQAkgjAxAAIAnAAQAyAAAiAjQAkAjAAAyIAAG3QAAAygkAiQgiAkgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.focusInner, new cjs.Rectangle(-14,-34,28,68), null);


(lib.witness = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.witnessInner();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.witness, new cjs.Rectangle(-22,-36,50,78), null);


(lib.plaintiff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.inner = new lib.plaintiffInner();
	this.inner.parent = this;
	this.inner.setTransform(20,48);
	this.inner.shadow = new cjs.Shadow("#000000",1,1,8);

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

}).prototype = getMCSymbolPrototype(lib.plaintiff, new cjs.Rectangle(-8,-8,62,118), null);


(lib.movingTruck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.movingTruckInner();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.movingTruck, new cjs.Rectangle(-61.9,-23.3,128,52), null);


(lib.focus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.focusInner();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.focus, new cjs.Rectangle(-22,-42,50,90), null);


// stage content:
(lib.autoanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		
		var lastFrame = self.currentFrame;
		createjs.Ticker.on("tick", function(e) {
			if(self.currentFrame !== lastFrame) {
				window.updateSlider(self.currentFrame);
			}
			lastFrame = self.currentFrame;
		});
		
		window.initStuff(this);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(85).call(this.frame_85).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.1,1,1).p("ADfiuIDKh+AiuB3IihC1AjqgKIlyAAAE7gyIEiCV");
	this.shape.setTransform(479.5,206.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(6.1,1,1).p("AE+jGIDKh+AieCQIihC1AjvgsIlyAAAFAhUIEiCV");
	this.shape_1.setTransform(480,205.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(6.1,1,1).p("AE5i3IDKh+Ajqg7IlyAAAjqCBIihC1AE7hFIEiCV");
	this.shape_2.setTransform(484.5,207.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(6.1,1,1).p("AFIijIDKh+AjGBtIihC1Aj5gnIlyAAAFKgxIEiCV");
	this.shape_3.setTransform(490,205.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(6.1,1,1).p("AFDiUIDKh+AjpBeIihC1Aj0gYIlyAAAFFgiIEiCV");
	this.shape_4.setTransform(495.5,200.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(6.1,1,1).p("AiRhEIDJh+AiPAtIEhCW");
	this.shape_5.setTransform(549.4,188.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},68).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(12));

	// witness
	this.instance = new lib.witness();
	this.instance.parent = this;
	this.instance.setTransform(473,643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({y:714},0).to({x:500.6,y:304.1},41,cjs.Ease.get(1)).wait(1));

	// movingTruck
	this.instance_1 = new lib.movingTruck();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.6,232);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:269.4},48,cjs.Ease.get(0.98)).to({rotation:16,x:324.4},11).to({regX:0.1,regY:0.1,rotation:61,x:405.3,y:294.3},17).to({regX:0.2,regY:0,rotation:77,x:423.4,y:321.3},9).wait(1));

	// focus
	this.instance_2 = new lib.focus();
	this.instance_2.parent = this;
	this.instance_2.setTransform(473.1,566,1,0.823,1,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,scaleY:0.82,rotation:2,x:494,y:307.9},34,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:1,scaleY:0.82,x:494.1,y:307.1},12).to({regY:0,scaleX:1,rotation:-29,y:219.9},24).to({regY:0.1,rotation:50,x:545,y:203},15).wait(1));

	// plaintiff
	this.instance_3 = new lib.plaintiff();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-127.7,197.1,0.708,0.708,90,0,0,20,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:48,x:471.5,y:179.5},70).to({regY:47.9,rotation:76,x:584.5,y:128.5},15).wait(1));

	// map
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-381,-282);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19,18,3360,1050);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1497302884955", id:"Bitmap1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;