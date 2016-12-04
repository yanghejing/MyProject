var x=15,y=32,z=57;
var t=setInterval(function(){
	z--;
	if(z<0){
		z=59;
		y--;
	}
	if(y<0){
		z=59;
		x--;
	}
	function tim(ele){
		ele=parseInt(ele);
		if(ele<10){
			ele="0"+ele;
			return ele;
		}else{
			return ele;
		}
	}
	x=tim(x);
	y=tim(y);
	z=tim(z);
	$(".hour").html(x);
	$(".minute").html(y);
	$(".sclock").html(z);
},1000);