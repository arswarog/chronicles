function ifJSDisplay(id, type){
	var isOperaMini=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";
	if (!isOperaMini){
		var	e=document.getElementById(id);
		if (e)
			e.style.display = type;
	}
}
function BlikInit(){
	var isOperaMini=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";
	if (isOperaMini)
		return;
	var e=document.getElementById('blik');
	if (e){
		e.style.display='inline-block';
		setTimeout("BlikMove();", 3000);
	}
}
function BlikMove(){
	var f=1, e=document.getElementById('blik');
	if (e){
		var b=document.getElementById('body');
		var l=parseInt(e.style.width);
		var p=parseInt(e.style.left);
		if (l+p<=40)
			e.style.width=(l+10)+'px';
		else if (p+50<=b.offsetWidth-10)
			e.style.left=(p+10)+'px';
		else if (p<=b.offsetWidth-10){
			e.style.backgroundPosition="left";
			e.style.width=(b.offsetWidth-p-10)+'px';
			e.style.left=(p+10)+'px';
		}
		else{
			e.style.width="0px";
			e.style.left="0px";
			e.style.backgroundPosition="right";
			f=0;
		}
		setTimeout("BlikMove();", f?50:5000);
	}
}
