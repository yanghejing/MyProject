(function($){
	$.fn.extend({
		Tabs:function(opts) {
			return this.each(function() {
				var navobj=$(this).find('.nav ul').children();
				var divobj=$(this).find('.content').children();
				divobj.each(function(index, el) {
					$(this).hide();
					if (index==0) {$(this).show();};
				});
				navobj.each(function(index, el) {
					var n=index;
					$(this).on('click', function(event) {
						navobj.each(function(index, el) {
							$(this).find("a").removeAttr('id');
							if (index==n) {$(this).find("a").attr("id","ahover")};
						});

						divobj.each(function(index, el) {
							$(this).hide();
							if (index==n) {$(this).show()};
						});//div选项卡遍历
						
					});//点击事件
				});//ul li遍历
			});//添加对象遍历
			// 
		}
	});
	
})(jQuery)