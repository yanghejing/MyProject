(function(){
	$(function(){
		/*搜索框的开始*/
		$('.search ul').find('li').on('mouseenter',function(){
			$('.search ul').find('li').removeClass('act');
			$(this).addClass('act');
		});
		$('.details-shop-car').hover(function(){
			$(this).find('a').css('borderBottom','none');
			$('.details-add').css({display: 'block'});
		},function(){
			$(this).find('a').css('borderBottom',' 1px solid #dfdfdf');
			$('.details-add').css({
				display: 'none'

			})
		})
		/*搜索框的结束*/

		var count=2,num=1,index=0,shoppingnum=1;
		/*导航栏的开始*/
		$('.all_goods').on('mouseenter',function(){
			$('#goods').stop().slideDown();
		});
		$('.all_goods').on('mouseleave',function(){
			$('#goods').stop().slideUp();
		});
		/*导航栏的结束*/
		// 下拉单start
		var lindex=null;
		$('.all_goods').on('mouseenter',function(){
			$('#goods').stop().slideDown();
			lindex=0;
		});
		$('.all_goods').on('mouseleave',function(){
			$('#goods').stop().slideUp();
		});
		$('#goods>li').on('mouseenter',function(){
			lindex=$(this).index();
			$(this).css('background','#fff');
			$(this).css('borderRight','#fff');
			$(this).find('a').css('color','red');
			$(".goods-detail").eq(lindex).show();
		});
		$('#goods>li').on('mouseleave',function(){
			$(this).css('background','#FC9D9D');
			$(this).css('borderRight','#FC9D9D');
			$(this).find('a').css('color','#fff');
			$(".goods-detail").eq(lindex).hide();
		});
		$('#goods').on('mouseenter',function(){
			$('#goods>li').css('background','#FC9D9D');
			$('#goods>li').css('borderRight','#FC9D9D');
			$('#goods>li').find('a').css('color','#fff');


			$('#goods>li').eq(lindex).css('background','#fff');
			$('#goods>li').eq(lindex).css('borderRight','#fff');
			$('#goods>li').eq(lindex).find('a').css('color','red');
		

		});


		$('#goods').on('mouseleave',function(){
			$('#goods>li').css('background','#FC9D9D');
			$('#goods>li').css('borderRight','#FC9D9D');
			$('#goods>li').find('a').css('color','#fff');
		});
		$(".goods-detail").on('mouseenter',function(){
			$(".goods-detail").eq(lindex).show()
			$('#goods>li').eq(lindex).css('background','#fff');
			$('#goods>li').eq(lindex).css('borderRight','#fff');
			$('#goods>li').eq(lindex).find('a').css('color','red');
		});
		$(".goods-detail").on('mouseleave',function(){
			$(".goods-detail").eq(lindex).hide();
			$('#goods>li').css('background','#FC9D9D');
			$('#goods>li').css('borderRight','#FC9D9D');
			$('#goods>li').find('a').css('color','#fff');
			// lindex=0;
		});
	
		$('#goods>li').last().css('border-bottom','1px solid #FC9D9D');
		//下拉结束




		/*放大镜的开始*/
		// var count=1,num=1,index=null;
		var owidth=$('.mark ul li').first().outerWidth(true);
		
		$('.mark').css('width',owidth*4);
		
		$('.mark ul').css('width',owidth*$('.mark ul li').length);
		$('.small_pic ul li').on('mouseenter',function(){
			index=$(this).index();
			$('.small_pic ul li').removeClass('act').eq(index).addClass('act');
			$('.big_pic ul li').eq(index).css('z-index',count++);
			$('.img-big li').eq(index).css('z-index',count);
		});
		$('.move_left').on('click',function(){
			if(num>$('.mark ul li').length-4) return false;
			$('.mark ul').animate({'left':-owidth*num});
			num++;
		});
		$('.move_right').on('click',function(){
			if(num==1) return false;
			$('.mark ul').stop().animate({'left':-owidth*(num-2)});
			num--;
		});


			// 放大镜start

		$('#span2').on('mouseenter',function(){
			
			$('#div3').css('display','block');
			$('#span1').css('display','block');
		})
		$('#span2').on('mouseleave',function(){
			$('#div3').css('display','none');
			$('#span1').css('display','none');
		})
		$('#span2').on('mousemove',function(e){
			var e=e||event;
			var l=e.clientX-$('#div1').offset().left-$('#span1').width()/2+$(document).scrollLeft();
			var t=e.clientY-$('#div1').offset().top-$('#span1').height()/2+$(document).scrollTop();
			if (l<0) {
				l=0;
			}else if (l>$('#div1').width()-$('#span1').width()) {
				
				l=$('#div2 li').width()-$('#span1').width();
			}
			if(t<0){
				t=0;
			}else if(t>$('#div2 li').height()-$('#span1').height()){
				t=$('#div2 li').height()-$('#span1').height();
			}
			var x=l/($('#div2 li').width()-$('#span1').width());
			var y=t/($('#div2 li').height()-$('#span1').height());
			$('#span1').css('left',l);
			$('#span1').css('top',t);
			var lt=-x*($('#div3').find('img').eq(index).width()-$('#div3').width());
			var tp=-y*($('#div3').find('img').eq(index).height()-$('#div3').height());
			$('#div3').find('img').eq(index).css('left',lt);
			$('#div3').find('img').eq(index).css('top',tp);

		});
		
		/*放大镜的结束*/

		

		/* 选择产品*/
		$('.product').find('dd').on('click',function(){
			$('.product').find('dd').css('border-color','#e5e5e5');
			$(this).css('border-color','#fb6b39');
		});


		// 增值保障
		$('.tool input').on('click',function(){
			$('.tool').css('display','none');
			
			if($(this)[0].checked){
				$('.tool_content i').html($(this).next().html());
				$('.tool_content').css('border','1px solid #fb6b39');
			}else{
				$('.tool_content').css('border','1px solid #e5e5e5');
			}
		})
		$('.tool_content').hover(
			function(){
				$('.tool').css('display','block');
			},function(){
				$('.tool').css('display','none');
			}
		);
		$('.face input').on('click',function(){
			$('.face').css('display','none');
			if($(this)[0].checked){
				$('.tool_face i').html($(this).next().html());
				$('.tool_face').css('border','1px solid #fb6b39');
			}else{
				$('.tool_face').css('border','1px solid #e5e5e5');
			}
		})
		$('.tool_face').hover(
			function(){
				$('.face').css('display','block');
			},function(){
				$('.face').css('display','none');
			}
		);

		//白条
		$('.deadline dl dd').on('click',  function() {
			$(this).siblings().css('border','1px solid #e5e5e5');
			$(this).css('border','1px solid #fb6b39');
			$('.de-btn a').html('打白条');
			$('.de-btn').css('display','block');
		});

		// 选择商品数目
		// shoppingnum
		$('.add').on('click',function(){
			shoppingnum++;
			if(shoppingnum>1){
				$('.cut').css('backgroundColor','#F1F1F1');
			}else{
				$('.cut').css('backgroundColor','#fff');
			}
			$('.count').html(shoppingnum);
		});
		$('.cut').on('click',function(e){
			// e.preventDefault();
			shoppingnum--;
			if(shoppingnum<=1) {
				shoppingnum=1;
				$(this).css('backgroundColor','#fff');
			}
			else{
				$(this).css('backgroundColor','#F1F1F1');
			};
			$('.count').html(shoppingnum);
		})
		

		/*地址的三级联动开始*/
		$('.site-address').on('mouseenter',function(){
			$('.slide-down').css('display','block');

			var countNum=0,oIndex=[],oIndex2=[];
			for(var i in ChineseDistricts[86]){
				oIndex.push(i);   //存储第一级的key;
				$('.slide-down dl').eq(0).append('<dd><a></a></dd>');
				$('.slide-down dd').eq(countNum).find('a').html(ChineseDistricts[86][i])
				countNum++;
			}
			$('.slide-down ul li:first').on('click',function(){  
				$('.slide-down dl').css('display','none')
				$('.slide-down dl:first').css('display','block');
			})
			$('.slide-down ul li').eq(1).on('click',function(){
				$('.slide-down dl').css('display','none')
				$('.slide-down dl').eq(1).css('display','block');
			})
			$('.slide-down ul li').eq(3).on('click',function(){
				$('.slide-down dl').css('display','none');
				$('.slide-down dl').eq(3).css('display','block');
			})

			$('.slide-down dl#count1 a').on('click',function(e){  // 第一级省份 第一次点击时
				e.stopPropagation();
				var countNum2=0;
				var aIndex=$(this).parent().index();
				$('.slide-down ul').find('li:first em').html($(this).html());
				$('.slide-down dl').css('display','none');
				$('.slide-down dl#count2').css('display','block');
				$('.slide-down dl#count2').empty();
				for(var i in ChineseDistricts[oIndex[aIndex]]){
				// for(var i in oIndex3[aIndex]){
					oIndex2.push(i);  //存储第一级对应的第二级的key;
					$('.slide-down dl').eq(1).append('<dd><a></a></dd>');
					$('.slide-down dl#count2 dd').eq(countNum2).find('a').html(ChineseDistricts[oIndex[aIndex]][i]);
					countNum2++;
				};
				$('.slide-down ul li').eq(1).find('em').html('请选择');
			});
		
			
			$('.slide-down #count2').on('click','dd',function(e){  //第二次点击时
				// alert(1)
				e.stopPropagation();
				var str='';
				var countNum3=0;
				var aIndex=$(this).index(); //索引
				$('.slide-down ul li').eq(1).find('em').html($(this).find('a').html());
				$('.slide-down dl#count2').css('display','none');
				$('.slide-down dl#count3').empty();
				$('.slide-down dl#count3').css('display','block');
			
				if(ChineseDistricts[oIndex2[aIndex]]){
					// alert(1)
					for(var i in ChineseDistricts[oIndex2[aIndex]]){
						$('.slide-down dl').eq(2).append('<dd><a></a></dd>');
						$('.slide-down dl#count3 dd').eq(countNum3).find('a').html(ChineseDistricts[oIndex2[aIndex]][i]);
						countNum3++;
					}
				}
				else{
					$('.slide-down dl#count3 dd').find('a').html('');
					for(var i=0; i<$('.slide-down ul li').length-1;i++){
						str+=$('.slide-down ul li').eq(i).find('em').html();
					}
					$('.site-default em').html(str);
					$('.slide-down').css('display','none');
				}
				$('.slide-down ul li:last').find('em').html('请选择');
			});


			$('.slide-down dl#count3').on('click','dd',function(e){  //第三次点击时
				e.stopPropagation();
				var str='';
				$('.slide-down ul li').eq(2).find('em').html($(this).find('a').html());
				// $('.slide-down dl#count3').css('display','none')
				for(var i=0; i<$('.slide-down ul li').length;i++){
					str+=$('.slide-down ul li').eq(i).find('em').html();
				}
				$('.site-default em').html(str);
				$('.slide-down').css('display','none');
			})

		});
		$('.site-address').on('mouseleave',function(){
			$('.slide-down').css('display','none');
		});
		/*地址的三级联动结束*/



	/*商品介绍导航栏切换*/
		$('.serve_nav ul li').on('click',function(){
			$('.serve_nav ul li').removeClass('bg');
			$(this).addClass('bg');
			$(this).siblings().find('i').css('border-right','1px solid red');
			$(this).prev().find('i').css('border','none');
			$(this).find('i').css('border','none');
		})
	//今日推荐 tab切换
		$('.today_refer').on('click',function(){
			$(this).find('.today_click').show();
			$('.pop_click').hide();
			$('.refer_pop').eq(0).show();
			$('.refer_pop').eq(1).hide();
		});
		$('.popular').on('click',function(){
			$(this).find('.pop_click').show();
			$('.today_click').hide();
			$('.refer_pop').eq(0).hide();
			$('.refer_pop').eq(1).show();
		});

		//商品介绍规格参数包装清单商品评价(11554)售后服务
		$(".content").eq(0).show();
		$(".sev_name li").click(function() {
			var num=$(".sev_name li").index(this);
			$(".content").hide();
			$(".content").eq(num).show().siblings(".content").hide();
		})
		
		/*评论翻页*/
		$('.business-navigation ul li').on('click',function(){
			var index=$(this).index();
			if(index==1){
				$('.business-navigation ul li:first').css('display','none');
			}
			else{
				$('.business-navigation ul li:first').css('display','block');
			}
			$(this).siblings().removeClass('de-action');
			$(this).addClass('de-action');
			$(this).siblings().css({
				'backgroundColor': '#F4F3F3',
				'border': '1px solid #DDDDDD'
			})
			$(this).css({
				'backgroundColor': '#fff',
				'border': 'none'
			})
		})







	})
})()
