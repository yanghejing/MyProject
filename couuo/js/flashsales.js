$(function(){
	// $(".mainbox .brand .top").each(function(index, el) {
	// 	$(this).click(function(event) {
	// 		$(".tuijianbox").eq(index).hide();
	// 		$(".tuijianbox:not(:eq(index))").show();
	// 		console.log(index)
	// 	});
	// });
          $(".mainbox .brand .top").eq(1).click(function(event) {
          	     $(".tuijianbox").eq(0).show();
          	     $(".tuijianbox:not(:eq(0))").hide();
          });
          $(".mainbox .brand .top").eq(0).click(function(event) {
          	     $(".tuijianbox").eq(1).show();
          	     $(".tuijianbox:not(:eq(1))").hide();
          });
          // 品牌切换tab

          $(".today .brand .tul li").each(function(index, el) {
          	$(this).mouseover(function(event) {
          		$(".today .brand .tul li a").removeClass('ahover')
          		  $(".today .brand .tul li a").eq(index).addClass('ahover')
          	});
          	$(this).mouseout(function(event) {
          		$(".today .brand .tul li a").removeClass('ahover')
          		
          	});
		$(this).click(function(event) {
			$(".today .brand .tul li a").removeClass('ahover1')
			 $(".today .brand .tul li a").eq(index).addClass('ahover1')
		if(index<7){
			$(".tabchange:not(:eq(index))").hide();
			$(".tabchange").eq(index).show();
		}
		else{
			var num=Math.floor(Math.random()*7) 
			$(".tabchange:not(:eq(index))").hide();
			$(".tabchange").eq(num).show();
		}
		});
	})
          // main里面的商品展示切换



          $(".flashsales span.scimg img").each(function(index, el) {
          	 $(".flashsales span.scimg img").eq(index).mouseover(function(event) {
          	 	$(".flashsales span.scimg img").eq(index).css({
          	 	 "filter":"alpha(opacity=20)", /* IE */ 
                        "-moz-opacity":0.8, /* Moz + FF */ 
                           "opacity":0.8 /* 支持CSS3的浏览器（FF 1.5也支持）*/ } );
          	 });
          	 $(".flashsales span.scimg img").eq(index).mouseout(function(event) {
          	 	$(".flashsales span.scimg img").eq(index).css({
          	 	 "filter":"alpha(opacity=100)", /* IE */ 
                        "-moz-opacity":.6, /* Moz + FF */ 
                           "opacity": .6/* 支持CSS3的浏览器（FF 1.5也支持）*/ } );
          	 });
          	 
          });
          	 // $(".flashsales .fistD a img").each(function(index, el) {
          	 // 	$(el).mouseover(function(event) {
          	 // 		$(".flashsales .fistD a img").eq(index).css({
          	 // 			"-webkit-transform": "scale(0.5)",    /* for Chrome || Safari */
            //                                 "-moz-transform": "scale(0.5)",       /* for Firefox */
            //                                 "-ms-transform": "scale(0.5)",        /* for IE */
            //                                      " -o-transform": "scale(0.5)"          /* for Opera */
          	 // 		})
          	 // 	});
          	 // });
          	
          	  

        
})