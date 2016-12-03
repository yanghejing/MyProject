
(function ($,w) {
    window.home = {};
    window.home.index = 0;
    $.fn.touchMove = function() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            size = $(this).children().size(),//获取个数
            startX ,
            startY,
            XX,
            YY,
            startLeft,
            moveX,
            swipeX,
            swipeY,
            bj,
            bjz,
            translateX;
        windowWidth = windowWidth >= 640 ? 640 : windowWidth;
        //设置元素的宽度为页面宽度*子元素个数+1 ，并把子元素的a 的宽度设为页面宽度
        $(this).css('width', windowWidth * (size + 1) ).children('a').css('width' ,windowWidth );
        //初始化 为 -windowWidth 
        $(this).css('transform', 'translate3d('+-windowWidth+'px,0px,0px)');
        //live 事件委托的方式绑定事件 表示滑动在子元素下都可触发此事件
        $(this).live('touchstart' ,function(event) {
            event.preventDefault();
            var date = new Date();
             time1 = date.getTime();
            startLeft = parseFloat($(this).css('transform').match(/\-?[0-9]+/g)[1]);// 返回第一 个值，也就是translateX的值  
            startX = event.targetTouches[0].pageX;//起始X
            startY = event.targetTouches[0].pageY;//起始y
            swipeX = true;
            swipeY = true;
        });
        $(this).live('touchmove', function(event) {
            XX = event.targetTouches[0].pageX;
            YY = event.targetTouches[0].pageY;
            if ( swipeX  && Math.abs(XX - startX) - Math.abs(YY - startY) > 0  ) {
            	//事件冒泡
                $(this).bind('touchmove' , function(event) {
                    event.preventDefault();
                });
                swipeY = false;// 表示是横着滑动
                moveX = parseFloat($(this).css('transform').match(/\-?[0-9]+/g)[1]) + event.targetTouches[0].pageX - startX;
                startX = event.targetTouches[0].pageX;//再次给startX赋值
                $(this).css('transform', 'translate3d('+moveX+'px, 0px,0px)');// 图片跟着鼠标滑动
            } else if ( swipeY && Math.abs(XX - startX) - Math.abs(YY - startY) < 0 ) {
                swipeX = false;// 表示是竖着滑动 什么都不用做
            }
        });
        $(this).live('touchend', function(event) {
            var date = new Date();
            var time2 = date.getTime();
            $(this).unbind('touchmove');
            translateX = parseFloat($(this).css('transform').match(/\-?[0-9]+/g)[1]);
            bj = windowWidth + translateX % windowWidth;//因为一初始化时 translateX = -windowWidth， 不滑动时translateX 正好是windowWidth的倍数， 当滑动时对其去余正好是滑动的距离 so。。。 
            if ( time2 - time1 >= 300 ) {
                bjz = windowWidth/2;//滑过1/2翻页
                if ( bj <= bjz ) {
                    left = translateX - bj;// 滑动距离不够就复原
                } else {
                    left = translateX + (windowWidth - bj);
                }
            } else {
                bj = Math.abs(translateX % windowWidth);
                bjz = windowWidth/4;//滑过1/4翻页(点滑效果)
                if ( translateX >= startLeft ) {//页面向右滑动
                    if ( bj >= bjz ) {
                        left = translateX + bj;
                    } else {
                        left = translateX -( windowWidth - bj );
                    }
                } else {//页面向左滑动
                    if ( bj >= bjz * 3 ) {
                        left = translateX + bj;
                    } else {
                        left = translateX -(windowWidth - bj);
                        
                    }
                }  
            }
            if ( startLeft < left ) {//向右滑动
                $(this).animate({transform:'translate3d(0px,0px,0px)'},200,"linear",function(){
                home.index--;
                if ( home.index === -1  ) {
                    home.index = size - 1;
                }
                $(this).next().children('a').eq(home.index).addClass('active').siblings().removeClass('active');
                $(this).css({transform : 'translate3d('+windowWidth/(-1)+'px,0px,0px)'});
                $(this).children('a').last().remove().clone(true).insertBefore($(this).children('a').first());
                }) ; 
            } else if ( startLeft > left ) {//向左滑动
                $(this).animate({transform:'translate3d('+windowWidth*(-2)+'px,0px,0px)'},200,"linear",function(){
                home.index++;
                if ( home.index === size  ) {
                    home.index = 0;
                }
                $(this).next().children('a').eq(home.index).addClass('active').siblings().removeClass('active');
                $(this).css({transform:'translate3d('+windowWidth/(-1)+'px,0px,0px)'});
                $(this).children('a').first().remove().clone(true).appendTo($(this)); 
                }) ; 
            } else { //复原
                $(this).css('transition' , 'transform 200ms ease-out');
                $(this).css('transform', 'translate3d('+left+'px,0px,0px)');
            }
        });
    };
})($,window);
(function ($,w) {
    $.autoPlay = function(obj) {
        var windowWidth = $(window).width(),
        left = parseFloat(obj.css('transform').match(/\-?[0-9]+/g)[1]),
        len = obj.children().size();
        windowWidth = windowWidth >= 640 ? 640 : windowWidth;
        function showImg() {
            obj.animate({transform:'translate3d('+windowWidth*(-2)+'px,0px,0px)'},300,"linear",function(){
            w.home.index++;
            if ( w.home.index === len  ) {
                w.home.index = 0;
            }
            obj.next().children('a').eq(w.home.index).addClass('active').siblings().removeClass('active');
            obj.css({transform:'translate3d('+windowWidth/(-1)+'px,0px,0px)'});
            obj.children('a').first().remove().clone(true).appendTo(obj); 
            }) ; 
        }
         adTimer = setInterval( function() {
            showImg();
        } , 4000);
    }
})($,window);
