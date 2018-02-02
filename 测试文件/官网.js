$(".headerTop .english").click(function() {
	$(".headerTop .english").css({
		"background": "#162b6c",
		"width": "20px",
		"color": "#FFFFFF"
	});
	$(".headerTop .chinese").css({
		"background": "#dce0e1",
		"width": "30px",
		"color": "#4c4c4c"
	})
});
$(".headerTop .chinese").click(function() {
	$(".headerTop .english").css({
		"background": "#dce0e1",
		"width": "30px",
		"color": "#4c4c4c"
	});
	$(".headerTop .chinese").css({
		"background": "#162b6c",
		"width": "20px",
		"color": "#FFFFFF"
	})
});
$(".headerTop").on("mouseover", function() {
	$(".topColor").css({
		"border-bottom": ""
	})
});
$("#chat").click(function() {
	if($(".wechat").css("display") == "none") {
		$(".wechat").show()
	} else {
		$(".wechat").hide()
	}
});
$("#chat").mouseover(function() {
	$(".wechat").stop().fadeIn()
});
$("#chat").mouseout(function() {
	$(".wechat").stop().fadeOut()
});
var vid = document.getElementsByTagName("video");
$(".vedio-black").on("click", function() {
	$(".vedio-content").css("display", "none");
	$(".vjs-big-play-button").show()
});
$("#indexBanved li").click(function() {
	$(".vedio-content").css("display", "block");
	$("#indexBanved li").removeClass("active1");
	$(this).addClass("active1");
	$(".vedio-play .box").css("display", "none");
	$(".vedio-play .box").eq($(this).index()).css("display", "block");
	$("#example_video1 .vjs-big-play-button").show()
});
$("video").on("click", function() {
	$("#example_video1 .vjs-big-play-button").css("display", "none")
});
$(".serviceCen .serviceCen1").mouseover(function() {
	$(".serviceCen .serviceCen1 div").stop().animate({
		opacity: 1
	}, 1000)
});
$(".serviceCen .serviceCen1").mouseleave(function() {
	$(".serviceCen .serviceCen1 div").stop().animate({
		opacity: 0
	}, 1000)
});
$(".serviceCen .serviceCen2").mouseover(function() {
	$(".serviceCen .serviceCen2 div").stop().animate({
		opacity: 1
	}, 1000)
});
$(".serviceCen .serviceCen2").mouseleave(function() {
	$(".serviceCen .serviceCen2 div").stop().animate({
		opacity: 0
	}, 1000)
});
$(".serviceCen .serviceCen3").mouseover(function() {
	$(".serviceCen .serviceCen3 div").stop().animate({
		opacity: 1
	}, 1000)
});
$(".serviceCen .serviceCen3").mouseleave(function() {
	$(".serviceCen .serviceCen3 div").stop().animate({
		opacity: 0
	}, 1000)
});
var caseFlag1 = 0;
var caseNum = -1;
$(".caseDiv_mask").click(function() {
	$(".caseDl").stop().slideUp("slow");
	$(".caseDl").eq($(".caseDiv_mask").index(this)).stop().slideDown("slow");
	if(caseNum == $(".caseDiv_mask").index(this) && caseFlag1 == 0) {
		$(".caseDl").eq($(".caseDiv_mask").index(this)).stop().slideUp("slow");
		caseFlag1 = 1
	} else {
		caseFlag1 = 0
	}
	caseNum = $(".caseDiv_mask").index(this)
});
$(".caseDt").click(function() {
	$(".caseDiv").css({
		"display": "none"
	});
	$(".caseDiv").eq($(".caseDt").index(this)).css({
		"display": "block"
	});
	caseFlag1 = 0
});
$(".caseCon li .caseDiv span").click(function() {
	$(".caseCon li .caseDiv").css("display", "none")
});
$(".caseSpan").on("click", function() {
	$(".vjs-big-play-button").show()
});
$("video").on("click", function() {
	$(".vjs-big-play-button").hide()
});
$(".caseCon > li > .caseDiv_mask").bind("mouseover", function(a) {
	$(this).stop().animate({
		opacity: 0.3
	})
});
$(".caseCon > li > .caseDiv_mask").bind("mouseout", function(a) {
	$(this).stop().animate({
		opacity: 0.5
	})
});
var share = 0;
$(".shareTo").bind("click", function(a) {
	if(share == 0) {
		$(".shareTo").css({
			right: -120
		});
		$(".shareTo").eq($(".shareTo").index(this)).stop().animate({
			right: 8
		});
		share = 1
	} else {
		$(".shareTo").css({
			right: -120
		});
		share = 0
	}
});
$(".newsSmall").bind("mouseleave", function(a) {
	$(".shareTo").stop().animate({
		right: -120
	});
	share = 0
});
$('.joinInfor li').click(function(){
	$('.joinInfor li').removeClass();
	$(this).addClass('active4');
	$('.joinInCon li').css('display','none');
	$('.joinInCon li').eq($(this).index()).css('display','block');

})