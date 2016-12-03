(function() {
	var mySwiper = new Swiper ('.swiper-container', {
			direction: 'vertical',
			nextButton:'.swiper-button-next',
		    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			    if (swiper.activeIndex==6) {
			    	document.getElementById("button").style.display="none"; 
			    }else{document.getElementById("button").style.display="block";};

			  },
		  })
		 $(".music").tap(function() {
		 	$(this).find("span").toggle();
		 	var iobj=$(this).find('i');
		 	if (iobj.hasClass('run')) {
		 		// iobj.removeClass('musicani');
		 		iobj.removeClass('run');
		 		iobj.addClass('push');

		 		
		 	}else{
		 		iobj.removeClass('push');
		 		iobj.addClass('run');
		 		// iobj.addClass('musicani')
		 	};
		 	var player=document.getElementById("mscplayer");
			    if (!player.paused) {
			    	player.pause();
			    }else{
			    	player.play();
			    }
		 })

})()