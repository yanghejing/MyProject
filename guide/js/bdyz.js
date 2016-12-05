function fun555(){

	var usename=document.getElementById('usename');
	var wz=document.getElementById('wz');
	var emall=document.getElementById('emall');		
	
	usename.onblur=function () {
		var use=this.value;
		var patt=/^[a-z,0-9]{5,10}/;
		var x=patt.test(use);
		if (x) {
			emall.focus();
		}else{
			alert("Pay Attention To Your String Length！");
		}
	}

}
window.addEventListener("load",fun555);