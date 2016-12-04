(function(){
	$(function(){
		$("#financial .header .content>ul>li").not('.li1').hover(
			function(){
				$(this).children('a').css({
					color:"red"
				});
				$(this).children('.menu').slideDown();
			},
			function(){
				$(this).children('a').css({
					color:"#111"
				});
				$(this).children('.menu').css({
					display:"none"
				});
			}
		);
		$(".menu a").hover(
			function(){
				$(this).css({
					color:"red"
				});
			},
			function(){
				$(this).css({
					color:"#5e5e5e"
				});
			}
		);
		$("#financial .header .own").hover(
			function(){
				$(this).css({
					background:"#fff"
				});
				$(this).children('.select').slideDown();
			},
			function(){
				$(this).css({
					background:"#ededed"
				});
				$(this).children('.select').css({
					display:"none"
				});
			}
		);
		$("#financial .header .own a").hover(
			function(){
				$(this).css({
					color:"red"
				});
			},
			function(){
				$(this).css({
					color:"#5e5e5e"
				});
			}
		);
		$("#financial .banner .L>ul>li").hover(
			function(){
				$(this).css({
					cursor:"pointer"
				});
				$(this).stop().animate({
					marginLeft:40
				});
				$(this).children('.sec').fadeIn();
			},
			function(){
				$(this).stop().animate({
					marginLeft:20
				});
				$(this).children('.sec').css({
					display:"none"
				});
			}
		);
		$("#financial .banner .R .T div").hover(
			function(){
				$(this).css({
					cursor:"pointer",
					background:"#00c5d9"
				});
			},	
			function(){
				$(this).css({
					background:"transparent"
				});
			}
		);
		$("#financial .banner .L>ul>li>span").hover(
			function(){
				$(this).css({
					color:"red"
				});
			},
			function(){
				$(this).css({
					color:"#727272"
				});
			}
		);
		//轮播图
		var num = 0;
		var timer = setInterval(time,2000);
		$("#financial .banner .C .mask ul li").hover(
			function(){
				num = $(this).index();
				$("#financial .banner .C .auto ul").animate({
					marginLeft:-num*698
				});
				clearInterval(timer);
				$("#financial .banner .C .mask ul li").children('a').css({
					color:"#9e9e9e",
					background:"rgba(7,7,7,0.3)"
				});
				$("#financial .banner .C .mask ul li").eq(num).children('a').css({
					color:"#fff",
					background:"rgba(7,7,7,0.6)"
				});
			},
			function(){
				timer = setInterval(time,2000);
			}
		);
		$("#financial .banner .C .auto ul").hover(
			function(){
				$(this).css({
					cursor:"pointer"
				});
				clearInterval(timer);
			},
			function(){
				timer = setInterval(time,2000);
			}
		);
		function time(){
			num++;
			if(num == $("#financial .banner .C .auto ul li").length){
				num = 0;
			}
			$("#financial .banner .C .auto ul").animate({
				marginLeft:-num*698
			});
			$("#financial .banner .C .mask ul li").children('a').css({
				color:"#9e9e9e",
				background:"rgba(7,7,7,0.3)"
			});
			$("#financial .banner .C .mask ul li").eq(num).children('a').css({
				color:"#fff",
				background:"rgba(7,7,7,0.6)"
			});
		}
		// 2
		$(".fr-bot").css("display","block");
		$(".fr-bot").animate({opacity:1},600);
		$(".fr-bot>div").animate({left:16},600);
		$(".fo-a>li").click(function(){
			$(this).next("div").siblings('div').css({"display":"none"});
			$(this).next("div").siblings('div').css({opacity:0});
			$(this).next("div").siblings('div').children('.fr-two').css("left",40);
			$(this).next("div").siblings('div').children('.fr-three').css("left",80);
			$(this).next("div").siblings('div').children('.fr-four').css("left",120);
			$(this).next("div").siblings('div').children('.fr-five').css("left",160);
			$(this).next("div").siblings('div').children('.fr-six').css("left",200);
			$(this).next("div").siblings('div').children('.fr-seven').css("left",240);
			$(this).next("div").animate({opacity:1},600).css({"display":"block"});
			$(this).next("div").children('div').animate({left:16},600);	
		});
		$(".main-right>li").on('mouseover',function(){
			$(this).animate({opacity:0.6},600).siblings('li').css("opacity",1);
		});
		$(".main-right>li").on('mouseout',function(){
			$(this).animate({opacity:1},600)
		});
		// 3
		$("#financial .make_r .top p").hover(
			function(){
				$(this).fadeTo("slow",0.7);
			},
			function(){
				$(this).fadeTo("slow",1);
			}
		);
		// 4
		var bankWidth = $('.bank').width();
		var oLiWidth = $('.banklogo li').width();
		var liSize = $('.banklogo li').size(); 
		var oUl = $('.banklogo').width(oLiWidth*liSize);
		var oLeft = 0;
		var i = 0,j = 0;
		$('#pre').click(function(){
			i++;
			if(parseInt(oLeft)>0){
				$('.banklogo:first').css({"marginLeft":-bankWidth});
				$('.banklogo:last').css({"marginLeft":-bankWidth});
				i=1;
			}else{
				$('.banklogo:first').css({"marginLeft":-bankWidth+(i-1)*oLiWidth+"px"});
				$('.banklogo:last').css({"marginLeft":-bankWidth+(i-1)*oLiWidth+"px"});
			}
			oLeft = $('.banklogo').css("marginLeft");
		});
		$('#next').click(function(){
			j++;
			if(Math.abs(parseInt(oLeft))>bankWidth){
				$('.banklogo:first').css({'marginLeft':0});
				$('.banklogo:last').css({'marginLeft':0});
				j=1;
			}else{
				$('.banklogo:first').css({'marginLeft':-oLiWidth*j+"px"});
				$('.banklogo:last').css({'marginLeft':-oLiWidth*j+"px"});
			}
			oLeft = $('.banklogo').css("marginLeft");
		});
	});
})();