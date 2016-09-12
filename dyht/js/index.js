//设置视频s占满首屏
var fold = document.getElementsByClassName('fold')[0];
fold.style.height = document.documentElement.clientHeight + 'px';
var foot_img = document.querySelector('#foot img');
//设置底部logo的鼠标移入移出效果
foot_img.addEventListener('mouseover',function() {
	this.style.opacity = '1';
	this.style.transform = 'translate(0,-5px)';
})
foot_img.addEventListener('mouseout',function() {
	this.style.opacity = '0.55';
	this.style.transform = 'translate(0,0)';
})
