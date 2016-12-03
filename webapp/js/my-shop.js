$(function(){
	var length=$('.my-shop-column1').length;
	$('.my-shop-column1').eq(length-1).css('paddingBottom','2rem');


	$('.edit').each(function(i) {
		var oli=$(this).parent().siblings().children('*:nth-child(2)').find('li:nth-child(1)');
		var minus=oli.children('a:nth-child(1)');
		var add=oli.children('a:nth-child(3)');
		minus.mousedown(function(){
			var number=$(this).parent().children('a:nth-child(2)').html();
			if(number==1){
				alert('不能在减少了');
				$(this).parent().children('a:nth-child(2)').html(1);
				parseInt(number)=1;
			}
			$(this).parent().children('a:nth-child(2)').html(parseInt(number)-1);
			$(this).parent().siblings().find('span:nth-child(3)').html(parseInt(number)-1+'件');
			set();
		});
		add.mousedown(function(){
			var number=$(this).parent().children('a:nth-child(2)').html();
			$(this).parent().children('a:nth-child(2)').html(parseInt(number)+1);
			$(this).parent().siblings().find('span:nth-child(3)').html(parseInt(number)+1+'件');
			set();
		});


		$('.edit').eq(i).mousedown(function(){
			var marg=$(this).parent().siblings().children('*:nth-child(3)');
			oli.css('display','block');
			var span=$(this).parent().siblings().children('*:nth-child(2)').find('span');
			var ob=$(this).parent().siblings().children('*:nth-child(2)').find('b');
			span.css('display','none');
			ob.css('display','none');
			oli.next().css('display','none');

			if(marg.hasClass('my-shop-del1')){
				marg.removeClass('my-shop-del1');
				marg.animate({
					marginRight: '-1.4rem',
				},500);
				$(this).html("编辑");
				oli.css('display','none');
				span.css('display','inline-block');
				ob.css('display','inline-block');
				oli.next().css('display','block');
			}else{
				marg.addClass('my-shop-del1');
				marg.animate({
					marginRight: '-0.2rem',
				},500);
				$(this).html("完成");
				oli.css('display','block');
				span.css('display','none');
				ob.css('display','none');
				oli.next().css('display','none');
				marg.mousedown(function(){
                    var ff=$(this).parent().parent().find('.my-shop-contain').length;
                    var ffffff=$(this).parent().siblings();
					$(this).parent().remove();
                    if(ff==1){
                        ffffff.remove();
                    }
				})
			}
		})
	});

	//全选
		var aaa=$('.my-shop-column1')[0];
        var check0=aaa.getElementsByTagName('input');
        check0[0].onclick=function(){
            for(var j=1;j<check0.length;j++){
                check0[j].checked=this.checked;
            };
        }
        for(var i=1;i<check0.length;i++){
        	check0[i].onclick=function(){
        		checkall0();
        	}
        }
        var checkall0=function(){
    			for (var i = 1,n=0; i < check0.length; i++) {
    				if(check0[i].checked) n++;
    			}
    			check0[0].checked = n==check0.length-1;
    		}
        var bbb=$('.my-shop-column1')[1];
        var check1=bbb.getElementsByTagName('input');
        check1[0].onclick=function(){
            for(var j=1;j<check1.length;j++){
                check1[j].checked=this.checked;
            };
        }
        for(var i=1;i<check1.length;i++){
        	check1[i].onclick=function(){
        		checkall1();
        	}
        }
        var checkall1=function(){
    			for (var i = 1,n=0; i < check1.length; i++) {
    				if(check1[i].checked) n++;
    			}
    			check1[0].checked = n==check1.length-1;
    		}

        var ccc=$('.my-shop-column1')[2];
        var check2=ccc.getElementsByTagName('input');
        check2[0].onclick=function(){
            for(var j=1;j<check2.length;j++){
                check2[j].checked=this.checked;
            };
        }
        for(var i=1;i<check2.length;i++){
        	check2[i].onclick=function(){
        		checkall2();
        	}
        }
        var checkall2=function(){
    			for (var i = 1,n=0; i < check2.length; i++) {
    				if(check2[i].checked) n++;
    			}
    			check2[0].checked = n==check2.length-1;
    		}

    	var checkbox=document.getElementsByTagName('input');
    	checkbox[checkbox.length-1].onclick=function(){
    		for(var i=0;i<checkbox.length;i++){
    			checkbox[i].checked=this.checked;
    		};
    		set();
    	}
    	$('.my-shop-column1 input').on('click',function(){
    		var leng=$("input[type='checkbox']:checked").length;
    		if(leng==checkbox.length-1){
    			checkbox[checkbox.length-1].checked=true;
    		}else{
    			checkbox[checkbox.length-1].checked=false;
    		}
    		set();
    	})
    	function set(){
    		var s=0;
    		$(".my-shop-contain").each(function(){
    			var flag=$(this).find('input').prop('checked');
	    		if(flag){
	    			s+=parseInt($(this).find('span').eq(0).html())*parseFloat($(this).find('span').eq(1).html());
	    		}
	    	})
	    	$('.my-shop-column2').find('span').html(s+'.00');
    	}
})