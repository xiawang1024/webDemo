$(function(){
	//citys动画
	$(".citys a").each(function(index,item){
		$(this).mouseover(function(){
			var oA=$(this);
			oA.children("div").addClass("cur");
			oA.siblings("a").children("div").removeClass("cur");
			oA.children("span").css("color","#fff");
			oA.siblings("a").children("span").css("color","#000");
			$(".city-info").eq(index).addClass("cur").siblings().removeClass("cur");
		})
	});
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
        autoplayDisableOnInteraction : false,
        loop : true
    });
})