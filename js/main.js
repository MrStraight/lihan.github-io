window.onload = function() {
	function dou(name){	//封装
		return document.querySelector(name);
		/* if(name.indexOf("#")!=-1){
			return document.querySelector(name);
		}
		else if(name.indexOf(".")!=-1){
			return document.getElementsByClassName(name);
		} */
	};
	var classO = dou(".class");
	var IDO = dou("#id");
	var btn = dou(".btn");
	var box = dou(".box");
	var bg = dou(".bg");
	var text = dou(".text");
	var flag = document.querys;
	console.log(classO);
	console.log(IDO);
	btn.onmousedown = function(e) {
		var downX = e.clientX;
		btn.onmousemove = function(e) {
			var moveX = e.clientX - downX;
			if(moveX>=0){
				btn.style.left = moveX + "px";
				bg.style.width = moveX + "px";
			}
			if(moveX>box.offsetWidth - this.offsetWidth){
				text.innerText = "验证成功";
				text.style.color = "#fff";
				flag=true;
				this.onmousemove = null;
				this.onmousedown = null;
			}
		}
	};
	btn.onmouseup = function(e) {
		this.onmousemove = null;
		if(flag) return;
		btn.style.left = 0 + "px";
		bg.style.width = 0 + "px";
	}
}
