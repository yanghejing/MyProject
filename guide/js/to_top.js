function fun333(){
	var ele=document.body||document.documentElement;
    var to_top=document.getElementById('to_top');
	window.onscroll=function(){
		if (ele.scrollTop>400) {
			to_top.style.display="block";
		}else{
			to_top.style.display="none";
		}
	}
// jquer写的
	$('#to_top').click(function () {
				$("body,html"). animate({scrollTop:0},1000)
	}) 
}
window.addEventListener("load",fun333);