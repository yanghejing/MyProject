/**********************************************************
 ****************************banner轮播图***********************
 ***********************************************************/
$(document).ready(function() {
	$('#slider').nivoSlider({
		directionNav:true,//左右控制按钮
		captionOpacity: 0.4,
		controlNav: true,//下面小导航
		boxCols: 8,
		boxRows: 4,
		slices: 15,
		effect: 'random',
		animSpeed: 500,
		pauseTime: 5000//切换速度
	});
});





