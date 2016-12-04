

(function() {
	
$(function() {
	$(".header .nav").find('.first').on('click',function(event) {
		$(".nav").find('.allnav').toggle("slow");
	});
	$(".floor").hide()
	var first_top=$(".main .firstparts").offset().top;
	var second_top=$(".secondparts").offset().top;
	var third_top=$(".thirdparts").offset().top;
	var n=0;
	var src=[
			['1F','TOP'],
			['2F','<p>个护</p><p>美妆</p>'],
			['3F','<p>服装</p><p>鞋包</p>'],
			['4F','<p>家用</p><p>电器</p>']];
	var body_top=$("body").scrollTop();
	function getScrollTop() {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		return scrollTop;
	}
	function setScrollTop(scroll_top) {
		document.documentElement.scrollTop = scroll_top;
		window.pageYOffset = scroll_top;
		document.body.scrollTop = scroll_top;
	}
	function Scroll(){
		body_top=getScrollTop();
		if (body_top>=400) {n=1};
		if (body_top>=1300) {n=2};
		if (body_top>=2200) {n=3};
	}
	function classchage(){
		$(".floor ul").find('li').each(function(index, el) {
						$(this).find('a').removeClass('color');
						if (index==n) {$(this).find('a').addClass('color')};
					});

	}

	$(window).scroll(function(event) {
		Scroll();
		classchage()
		if (body_top>=400) {
			$(".floor").show();
		}else{$(".floor").hide()};
		
		$(".floor ul").find('li').each(function(index, el) {
				$(this).find('a').html(src[index][0])
				if (index==n) {$(this).find('a').html(src[n][1])};
			});

		


		
	});
	third();
	function third(){
		var divob=$("#thirdparts .content").find('div');
		var html=divob.eq(1).html();
		divob.each(function(index, el) {
			$(this).html(html);
		});
	}

	$(".floor ul").find('li').each(function(index, el) {
				var m=index;

				$(this).find('a').hover(function() {
						$(this).html(src[m][1]).addClass('color');
				}, function() {
					if (m==n) {
						$(this).html(src[m][1]);
					}else{
						$(this).html(src[m][0]).removeClass('color');
					}
					
				});
				
				$(this).on('click', function(event) {
					Scroll();
					classchage()
					

					if (m==1) {setScrollTop(400)};
					if (m==2) {setScrollTop(1300)};
					if (m==3) {setScrollTop(2200)};
				});
				
			});
})
		
})()