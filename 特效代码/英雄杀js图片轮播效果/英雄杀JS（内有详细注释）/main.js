// JavaScript Document

function ZoomPic (){
	this.initialize.apply(this, arguments)	
}
ZoomPic.prototype = { //prototype 向对象添加属性和方法
	initialize : function (id){ //将initialize作为一个属性
		var _this = this;
		this.wrap = typeof id === "string" ? document.getElementById(id) : id;
		//wrap() 方法把每个被选元素放置在指定的 HTML 内容或元素中。
		this.oUl = this.wrap.getElementsByTagName("ul")[0];
		this.aLi = this.wrap.getElementsByTagName("li");
		this.prev = this.wrap.getElementsByTagName("pre")[0];
		this.next = this.wrap.getElementsByTagName("pre")[1];
		//getElementsByTagName()返回带有指定标签名的对象的集合。
		
		this.timer = null;
		//定义空字符
		this.aSort = [];
		//定义空数组
		this._doPrev = function () { return _this.doPrev.apply(_this) }; 
		//上翻
		this._doNext = function () { return _this.doNext.apply(_this) }; 
		//下翻
		this.options = [ 
		//循环图片的大小及属性 options为集合表示
			{width:120, height:150, top:71, left:134, zIndex:1},
			{width:130, height:170, top:61, left:0, zIndex:2},
			{width:170, height:218, top:37, left:110, zIndex:3},
			{width:224, height:288, top:0, left:262, zIndex:4},
			{width:170, height:218, top:37, left:468, zIndex:3},
			{width:130, height:170, top:61, left:620, zIndex:2},
			{width:120, height:150, top:71, left:496, zIndex:1}
		];
		for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i];
		//this.aSort[i]将参与滑图的图片数量定义在数组中。
		this.aSort.unshift(this.aSort.pop());
		//将最后一个元素添加到开头。
		this.setUp();
		//执行滑图事件的属性变化。
		this.addEvent(this.prev, "click", this._doPrev);
		//注册上翻按扭的侦听事件。
		this.addEvent(this.next, "click", this._doNext);
		//注册下翻按扭的侦听事件。
		this.doImgClick();
		//执行滑图事件。		
		this.timer = setInterval(function (){ _this.doNext(); }, 3000);
		//自动切换滑图		
		this.wrap.onmouseover = function (){ clearInterval(_this.timer); };
		//鼠标划过时停止滑图
		this.wrap.onmouseout = function (){
			_this.timer = setInterval(function (){ _this.doNext(); }, 3000);	
		}
		//鼠标移出时继续自右向左的滑图
	},
	//*******initialize结束标记*******
	doPrev : function (){
		this.aSort.unshift(this.aSort.pop());
		this.setUp()
	},
	//unshift()向数组的开头添加一个或更多元素，并返回新的长度。
	//pop() 方法用于删除并返回数组的最后一个元素。
	doNext : function (){
		this.aSort.push(this.aSort.shift());
		this.setUp()
	},
	//push()向数组的结尾添加一个或更多元素，并返回新的长度。
	//shift() 方法用于删除并返回数组的第一个元素。
	doImgClick : function (){
		var _this = this;
		for (var i = 0; i < this.aSort.length; i++){
		//定义循环图片。
			this.aSort[i].onclick = function (){
			//点击两边图片时的事件。
				if (this.index > 3){
					for (var i = 0; i < this.index - 3; i++) _this.aSort.push(_this.aSort.shift());
					_this.setUp()
				}//在结尾添加元素并返回新长度，并删除第一个。
				else if(this.index < 3){
					for (var i = 0; i < 3 - this.index; i++) _this.aSort.unshift(_this.aSort.pop());
					_this.setUp()
				}//在开头添加元素并返回新长度，并删除最后一个。
			}
		}
	},//点击图片时触发滑图事件
	setUp : function (){
	//滑图事件执行时的属性变化	
		var _this = this;
		var i = 0;
		for ( i = 0; i < this.aSort.length; i++ ){
		//定义循环图片。	
			this.oUl.appendChild(this.aSort[i]);
			//appendChild()向节点的子节点列表的末尾添加新的子节点
			this.aSort[i].index = i; 
			
			if ( i < 7 ){
				
				this.css( this.aSort[i], "display", "block");
				//将参与循环的七张图片属性设置为可见。
				this.doMove( this.aSort[i], this.options[i], function (){
				//所有图片中位于可视区域中间的图片属性事件	
					_this.doMove(_this.aSort[3].getElementsByTagName("img")[0], {opacity:100}, 
					function (){
						_this.doMove(_this.aSort[3].getElementsByTagName("img")[0], {opacity:100}, 
						//设置图片透明度为100
						function (){
							_this.aSort[3].onmouseover = function (){
								_this.doMove(this.getElementsByTagName("div")[0], {bottom:0})
							}; //鼠标经过时文字注释向上滑出
							_this.aSort[3].onmouseout = function (){
								_this.doMove(this.getElementsByTagName("div")[0], {bottom:-100})
							} //鼠标经过时文字注释向下隐藏
						})
					})
				});
			}
			else{
				this.css(this.aSort[i], "display", "none");
				this.css(this.aSort[i], "width", 0);
				this.css(this.aSort[i], "height", 0);
				this.css(this.aSort[i], "top", 37);
				this.css(this.aSort[i], "left", this.oUl.offsetWidth / 2)
			}//offsetWidth 是对象的可见宽度
			//以七张图片作为滑图显示，不在此列的，则隐藏，大小为0，并居中.
			
			if ( i < 3 || i > 3 ){
			//设置中间图两边的小图的透明度。	
				this.css(this.aSort[i].getElementsByTagName("img")[0], {opacity:30})
				//初始时透明度为30
				this.aSort[i].onmouseover = function (){
					_this.doMove(this.getElementsByTagName("img")[0], {opacity:100})	
				};
				//鼠标经过时透明度为100
				this.aSort[i].onmouseout = function (){
					_this.doMove(this.getElementsByTagName("img")[0], {opacity:30})
				};
				//鼠标离开时透明度为30
				this.aSort[i].onmouseout();
				//保证初始状态，两边的小图透明度为30
			}
			else{
				this.aSort[i].onmouseover = this.aSort[i].onmouseout = null
			}
			//三张图自左向右排列
		}		
	},//滑图事件执行时的属性变化
	addEvent : function (oElement, sEventType, fnHandler){
	//侦听事件functin ( 对象，事件，方法返回值 )
		return oElement.addEventListener ? 
		oElement.addEventListener(sEventType, fnHandler, false) : 
		//addEventListener(事件名称，事件方法，是否捕捉)，可绑定多个方法。click
		oElement.attachEvent("on" + sEventType, fnHandler)
		//attachEvent要传onclick
	},
	css : function (oElement, attr, value){
	//属性事件functin ( 对象，属性，属性值 )
		if (arguments.length == 2){
		//如果传入的实参是两个。
			return oElement.currentStyle ? 
			oElement.currentStyle[attr] : 
			getComputedStyle(oElement, null)[attr]
			//style只能获取元素的内联样式，内部样式和外部样式使用style是获取不到的。
			//currentStyle可以弥补style的不足，但是只适用于IE。
			//getComputedStyle同currentStyle作用相同，但是适用于FF、opera、safari、chrome。
		}
		else if (arguments.length == 3){
		//如果传入的实参是三个。
			switch (attr){
				case "width":
				case "height":
				case "top":
				case "left":
				case "bottom":
					oElement.style[attr] = value + "px";
					break;
				case "opacity" :
					oElement.style.filter = "alpha(opacity=" + value + ")";
					//IE8及更早的版本所用
					oElement.style.opacity = value / 100;
					break;
					//需要加单位的属性。
				default :
					oElement.style[attr] = value;
					break;
					//无需加单位的属性。
			}	
		}
	},
	doMove : function (oElement, oAttr, fnCallBack){
	//function (对象，属性集合，回调函数)
		var _this = this;
		clearInterval(oElement.timer);
		oElement.timer = setInterval(function (){
			var bStop = true;
			for (var property in oAttr){
				var iCur = parseFloat(_this.css(oElement, property));
				//parseFloat()函数可解析一个字符串，并返回一个浮点数。
				property == "opacity" && (iCur = parseInt(iCur.toFixed(2) * 100));
				//parseInt()函数可解析一个字符串，并返回一个整数。
				//toFixed()把数字四舍五入为指定小数位数的数字。
				var iSpeed = (oAttr[property] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				//ceil(x)返回大于等于 x 并且与它最接近的整数。
				//floor(x)返回小于等于 x 且与 x 最接近的整数。
				if (iCur != oAttr[property]){
					bStop = false;
					_this.css(oElement, property, iCur + iSpeed)
				}
			}
			if (bStop){
				clearInterval(oElement.timer);
				fnCallBack && fnCallBack.apply(_this, arguments)	
			}
		}, 30)
		//图片载入及自动滑动方法
	}
};
window.onload = function (){
	new ZoomPic("box");
	//创建ZoomPic对象
};
