function fun3(){

	// Home的
		$("#nav_ho").click(function(){
		
			$("body,html").animate({scrollTop:$("#tb_box").offset().top},1000)
		})

	// About的
		$("#nav_ab").click(function(){
		
			$("body,html").animate({scrollTop:$("#abt").offset().top},1000)
		})

	// Services的
		$("#nav_ser").click(function(){
		
			$("body,html").animate({scrollTop:$("#sevs").offset().top},1000)
		})

	// Tours的
		$("#nav_tour").click(function(){
		
			$("body,html").animate({scrollTop:$(".tours_dk").offset().top},1000)
		})

	// News的
		$("#nav_new").click(function(){
		
			$("body,html").animate({scrollTop:$(".news").offset().top},1000)
		})

	// Guides的
		$("#nav_gu").click(function(){
		
			$("body,html").animate({scrollTop:$(".Tour_Guides_dk").offset().top},1000)
		})

	// Contact
		$("#nav_con").click(function(){
		
			$("body,html").animate({scrollTop:$(".contact").offset().top},1000)
		})

}
window.addEventListener("load",fun3);