(function(){
	$(function(){
		var imgwidth=$(".bannerbox1").width();
		var clone1=$(".bannerbox1 li:first").clone();
		var clone2=$(".bannerbox1 li:last").clone();
		var arr = ["#fb9032","#f86198","#f7e8fb","#fb9032","#f86198"];
		var groble = $(".sales").offset().top;
		var country = $(".country").offset().top;
		var dinect = $(".dinect").offset().top;
		var watch = $(".watch").offset().top;
		var arrscroll = [groble,country,dinect,watch];
		var timer=null;
		$(".bannerbox1").append(clone1);
		$(".bannerbox1").prepend(clone2);
		var size=$(".bannerbox1 li").size();
		var boxwidth=imgwidth*size;
		$(".bannerbox1 li").width(imgwidth);
		$(".bannerbox1").width(boxwidth);
		$(".bannerbox1").css({marginLeft:-imgwidth})
		var n=0;
		function dar(){
	                 n++;
	                 if (n==size) {
	                 	n=0;
	                 	$(".bannerbox1").css({marginLeft:-imgwidth})
	                 }
	                 $(".bannerbox1").stop().animate({marginLeft:-imgwidth*n});
	                 $("#top").css({"background":arr[n]});
		}
		 var timer=setInterval(dar,3000)
		 $(".bannerbox li").on("mouseenter",function(){
		 	clearInterval(timer);
		 })
		 $(".bannerbox1 li").on("mouseleave",function(){
		 	timer=setInterval(dar,3000)
		 })
		$(".prebtn").on("click",function(){
			n--;
			if (n==0){
				n=size-1;
			            $(".bannerbox1").css({marginLeft:-imgwidth*n})
			}
			$(".bannerbox1").stop().animate({marginLeft:-imgwidth*n});
			 $("#top").css({"background":arr[n]});
		});
		$(".nextbtn").on("click",function(){
			n++;
			if (n==size){
				n=0;
				$(".bannerbox1").css({marginLeft:-imgwidth})
			}
				$(".bannerbox1").stop().animate({marginLeft:-imgwidth*n});
				$("#top").css({"background":arr[n]});
		});
		$(".watchabv li").mouseover(function() {
			$(".watchabv li").siblings().removeClass("hover").eq($(this).index()).addClass("hover");
			$(".wlist").hide().eq($(this).index()).show();
		});
		$(".sidebar ul li").on('mouseleave',function() {
			$(this).css("color","");
		});
		$(".sidebar ul li").each(function(index, el) {
			$(el).on("click",function(e) {
				if (index == 0) {
					$(this).css("color","#f7e8fb");
					e.preventDefault();
					e.stopPropagation();
				};
				if (index == 5) {
					$(this).css("color","#f7e8fb");
					$('body,html').stop().animate({scrollTop: 0 },500);
				};
				if (index >= 1 && index <= 4) {
					$('body,html').stop().animate({ scrollTop: arrscroll[index-1] - 10},400);
					e.preventDefault();
					e.stopPropagation();
				};	
			})
		});
		$(window).scroll(function () {	
			if ($(document).scrollTop() < 200) {
				$('.sidebar').css("display","none");
			}
			else if($(document).scrollTop() >= 200) {
				$('.sidebar').css("display","block");
			}
		})
	 })
})();