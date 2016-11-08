$(function() {
	//container 高度自适应
	(function(){
		var oWidth = $(document).width();
		var h = Math.ceil(oWidth / 4.5);
		if(h>315){h=315}
		$('.swiper-container1 .swiper-slide').css("height", h);
		$(window).resize(function() {
			console.log($(window).width() + "," + $(document).width())
		})
	})();
	//citys动画
	$(".citys a").each(function(index, item) {
		$(this).mouseover(function() {
			var oA = $(this);
			oA.children("div").addClass("cur");
			oA.siblings("a").children("div").removeClass("cur");
			oA.children("span").css("color", "#fff");
			oA.siblings("a").children("span").css("color", "#000");
			$(".city-info").eq(index).addClass("cur").siblings().removeClass("cur");
		})
	});
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		loop: true
	});
	var swiper1 = new Swiper('.swiper-container1', {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 6,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		loop: true
	});
	
	$(".body-height .list").each(function(index,item){
			var _this=$(this);
		_this.hover(function(){
			_this.find("img").addClass("animated swing");
		},function(){
			_this.find("img").removeClass("animated swing");
		})
	})
})