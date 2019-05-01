$(document).ready(function() {
//选项卡切换		
var $ap=$(".vid_chos a");
$ap.click(function(){
$(this).addClass("curr").siblings().removeClass("curr");
var index=$ap.index(this);
$(".zjrz_table .zjrz_table01").eq(index).show().siblings(".zjrz_table01").hide();
});	

//选项卡切换		
var $bp=$(".tab_option span");
$bp.click(function(){
$(this).addClass("tab_curr1").siblings().removeClass("tab_curr1");
var index=$bp.index(this);
$(".tab_content .tab_cont").eq(index).show().siblings(".tab_cont").hide();
});	

//选项卡切换		
var $cp=$(".comtit li");
$cp.click(function(){
$(this).addClass("curr").siblings().removeClass("curr");
var index=$cp.index(this);
$(".com_wrap .opt").eq(index).show().siblings(".opt").hide();
});	
//选项卡切换		
var $dp=$(".swzx_tit li");
$dp.click(function(){
$(this).addClass("active").siblings().removeClass("active");
var index=$dp.index(this);
$(".business_center .opts").eq(index).show().siblings(".opts").hide();
});

//选项卡切换
var $ep=$(".senctab li");
    $ep.click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index=$ep.index(this);
    $(".sencopts .opts").eq(index).show().siblings(".opts").hide();
});

//选项卡切换
    var $fp=$(".titul span");
    $fp.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$fp.index(this);
        $(".costorder .costcont").eq(index).show().siblings(".costcont").hide();
    });
});