window.onload = function (){
	//获取变量
	var oImg = document.getElementsByClassName('picbig')[0];
	var point = document.getElementById('point');
	var liList = point.getElementsByTagName('li');
	var picWrap = point.getElementsByClassName('picwrap');
	var imgList = point.getElementsByTagName('img');
	var left = document.getElementsByClassName('left')[0];
	var right = document.getElementsByClassName('right')[0];
	var num = 1;
	
	//图片路径并计算长度
	var arrSrc = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'];
	var srcLength = arrSrc.length;
	
	//设置定时器
	var timer = setInterval(add,1000);
	
	//根据图片路径的长度创建相应的li,img等元素
	for(var i = 0;i<srcLength;i++){
		var li = document.createElement('li');
		var div = document.createElement('div');
		var img = document.createElement('img');
		var divIn = document.createElement('div');		
		//设置相关样式
		div.className = 'picwrap';
		img.className = 'picsmall';
		divIn.className = 'tri';	
		//添加
		point.appendChild(li);
		li.appendChild(div);
		div.appendChild(img);
		div.appendChild(divIn);
	}
	
	//初始设置
	liList[0].className = 'active';
	function renew() {		
		for(var i = 0;i<srcLength;i++){
			liList[i].className = '';
			picWrap[i].style.opacity = '0';
		}
	}
	function fn1(){
		liList[(num-1)].className = 'active';
		oImg.src = arrSrc[(num-1)];
	}
	
	//li的鼠标移入事件及点击事件
	for(var i = 0;i<srcLength;i++){
		liList[i].index = i;
		liList[i].onmouseover = function () {
			clearInterval(timer);
			renew();
			this.className = 'active';
			picWrap[this.index].style.opacity = '1';
			imgList[this.index].src = arrSrc[this.index];
		}
		liList[i].onclick = function (){
			oImg.src = arrSrc[this.index];
			this.className = 'active';
		}
		liList[i].onmouseout = function (){
			timer = setInterval(add,1000);
		};
	}
	//左右按钮移入事件
	function btn(){
		this.style.backgroundColor = 'rgba(255,68,0,0.5)';
		this.style.color = 'rgba(255,255,255,0.5)';
		clearInterval(timer);
	}
	//左右按钮移出事件
	function on(){
		this.style.backgroundColor = '';
		this.style.color = '';
		timer = setInterval(add,1000);
	}
	left.onmouseover = btn;
	right.onmouseover = btn;
	left.onmouseout = on;
	right.onmouseout = on;
	
	//递增递减方法
	function dec(){
		renew();
		num--;
		if(num < 1){
			num = srcLength;
		}
		fn1();
	}
	function add(){
		num++;
		renew();
		fn1();
		num %= srcLength;
	}
	left.onclick = dec;
	right.onclick = add;
}
