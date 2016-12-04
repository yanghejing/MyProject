$(function(){
//轮播图
	var boxwidth = $('.banner').width();//获取可视区域的宽度
	$('#imgbox li').width(boxwidth);//设置li的宽度
	var liWidth = $('#imgbox li').width();
	var clone1 = $('#imgbox li:first').clone();//克隆第一张
	var clone2 = $('#imgbox li:last').clone();//克隆最后一张
	$('#imgbox').append(clone1);
	$('#imgbox').prepend(clone2);
	var size = $('#imgbox li').size();//li的个数
	$('#imgbox').width(liWidth*size);//ul的宽度
	$('#imgbox').css({"marginLeft":-liWidth});//初始状态下的位置
	var n = 1;
	var timer = null;
	function tab(){
		n++;
		if(n==size){
			$('#imgbox').css({"marginLeft":-liWidth});//初始状态下的位置
			n=2;
		}
		if(n==size-1){
			$('.circle li').removeClass('last').eq(0).addClass('last');
		}else{
			$('.circle li').removeClass('last').eq(n-1).addClass('last');
		}
		$('#imgbox').stop().animate({marginLeft:-liWidth*n},500);
	}
	timer = setInterval(function(){
		tab();
	},2000);
	$('#imgbox').mouseover(function(){
		clearInterval(timer);
	})
	$('#imgbox').mouseout(function(){
		timer = setInterval(function(){
		tab();
		},2000);
	})
	$('.circle li').click(function(){
		clearInterval(timer);
		var index = $(this).index();
		$('#imgbox').stop().animate({marginLeft:-liWidth*(index+1)},500);
		$('.circle li').removeClass('last').eq(index).addClass('last');
	});
	//顶部导航切换
	$('.navlist li').mousemove(function(){
		var index = $(this).index();
		$('.navlist li').removeClass('index').eq(index).addClass('index')
	});
	//nav导航部分
		//nav导航部分滑入滑出事件函数
	function hover(obj,ele){
		$(obj).hover(function(){
			$(ele).stop().slideDown();
			},function(){
			$(ele).stop().slideUp();
			}
		)
	}
	hover('.mycouuo','#mycouuo');
	hover('.iphone','#iphone');
	hover('.concern','#concern');
	hover('.custom','#custom');
})


	;(function(){
		var $ul=$("#group-mid .secondnav");
		var $li=$ul.children();
		var $groupslist=$("#group-mid .single>ul");
		$li.on('click',function(){
			_this=$li.index($(this));		
			$groupslist.css("display","none");
			var $_this=$groupslist[_this];
			$_this.style.display = 'block'
		})	
	})()
	

