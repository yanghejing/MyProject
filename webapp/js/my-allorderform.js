$(function(){
	$('.my-menu ul li').mousedown(function(){
		$(this).addClass('border-bottom').siblings().removeClass('border-bottom');
		var index=$(this).index();
		$('.my-nav dd').eq(index).css('display','block').siblings().css('display','none');
	})
})