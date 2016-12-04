/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-11 14:42:31
 * @version $Id$
 */
 (function($){
 	$.fn.extend({
 		imgscroll:function(opts){
 			var defaults={
 				animatetime:600,//执行动画的时间
 				auto:true,//是否自动轮播
 				autotime:7000,//如果自动轮播，轮播的间隔时间
 				prebtn:".prebtn",//执行“上一张”点击按钮对象元素
 				nextbtn:".nextbtn"//执行"下一张"点击按钮对象元素
 			}
 			var o=$.extend(defaults,opts)
 			return this.each(function(){

 				var _this=$(this);
 				_this.css({overflow:"hidden"})
 				var ulobj=$(this).find(".imgbox");
 				ulobj.after('<ul class="nav"></ul>');//动态添加ul(导航)元素					
 				var lichilds=ulobj.children();
 				var imgwidth=_this.width();//先获取下滚动图片盒子的宽度
 				lichilds.each(function(i,el){
 					$(el).width(imgwidth);//设置每个li的宽度
 					if($(el).hasClass('act')){
 						_this.find(".nav").append('<li class="act"></li>')
 					}else{
 						_this.find(".nav").append('<li></li>')
 					}
 				});
 				var navli=$(this).find(".nav").children();
 				var num=lichilds.size();//获得li的个数
 				var boxwidth=imgwidth*num ;//计算ul的宽度
 				var autotime;//自动滚动的定时器
 				ulobj.width(boxwidth)//设置ul的宽度	
 				var resettime=function(){//重置定时器
 					clearInterval(autotime);
 					if(o.auto){
 						autotime=setInterval(function(){
 							switchfn.next();	
 						},o.autotime)
 					}
 				}
 				var switchfn={
 					next:function(){
 						var index=ulobj.find(".act").index();
 						if(index==num-1){
 							scrollto(0);
 						}else{
 							scrollto(index+1);
 						}
 					},
 					pre:function(){
 						var index=ulobj.find(".act").index();
 						if(index==0){
 							scrollto(num-1);
 						}else{
 							scrollto(index-1);
 						}
 					}
 				}		
 				$(this).find($(o.nextbtn)).on("click",function(){//下一张按钮点击   
 					switchfn.next();	
 					resettime();					
 				})
 				$(this).find($(o.prebtn)).on("click",function(){//上一张按钮点击
 					switchfn.pre();
 					resettime();						
 				});
 				var scrollto=function(m){//跳转到指定索引处
 					navli.removeClass('act').eq(m).addClass("act");
 					lichilds.removeClass('act').eq(m).addClass("act");
 					ulobj.stop(true).animate({marginLeft:-imgwidth * m},o.animatetime);
 				}
 				navli.each(function(i,el){//图片轮播小导航
 					$(el).on("click",function(){
 						navli.removeClass('act');
 						scrollto(i);
 						$(el).addClass('act');
 						resettime();
 					})
 				});
 				if(o.auto){
 					autotime=setInterval(function(){
 						switchfn.next();	
 					},o.autotime)
 				}
 				$(window).on("resize",function(){//监听浏览器窗口的变化
 					imgwidth=_this.width();//先获取下滚动图片盒子的宽度
 					boxwidth=imgwidth*num ;//计算ul的宽度
 					lichilds.width(imgwidth);//设置每个li的宽度
 					ulobj.width(boxwidth)//设置ul的宽度	
 				})
 			})
 		}
 	});
 })(jQuery)

