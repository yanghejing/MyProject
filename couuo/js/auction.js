$(function(){
	var count=function(){
		var a=new Date();
		var b=a.getTime();
		var c=Date.parse("2016/12/15 00:00:00");
		var d=c-b;
		var e=Math.floor(d/1000)
		var sec=e%60;
		if (sec<=0) sec=0;
		var min=Math.floor(e/60)%60;
		if (min<=0) min=0;
		var hour=Math.floor(e/60/60);
		if (hour<=0) hour=0;
		$(".auction-today .long span:nth-child(2)").html(hour)
		$(".auction-today .long span:nth-child(4)").html(min)
		$(".auction-today .long span:nth-child(6)").html(sec)
		$("#auction-popularity-timecount-a").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-b").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-c").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-d").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-e").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-f").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-g").html("剩余时间："+hour+':'+min+':'+sec)
		$("#auction-popularity-timecount-h").html("剩余时间："+hour+':'+min+':'+sec)
		$('#auction-popularity-extravagant-a').html("剩余时间："+hour+'时'+min+'分'+sec+'秒')
		$('#auction-popularity-extravagant-b').html("剩余时间："+hour+'时'+min+'分'+sec+'秒')
		$('#auction-popularity-extravagant-c').html("剩余时间："+hour+'时'+min+'分'+sec+'秒')
		$('#auction-popularity-extravagant-d').html("剩余时间："+hour+'时'+min+'分'+sec+'秒')
	}
	count();
	setInterval(count,1000)
})
$(function () {
	var a=5,b=9;
	$(window).scroll(function(event) {
		$(this).scrollTop()>300?console.log(a):console.log(b);
	});
	$(window).on('resize', function(event) {
		// event.preventDefault();
  		if ($(window).width()<1200) {
  			$('.auction-banner').width(1200);
  			$(".auction-more").width(1200);
  		}else{
  			$('.auction-banner').css('width', '100%');
  			$('.auction-more').css('width', '100%');
  		}
  	});
})