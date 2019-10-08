// JavaScript Document

var imgs=1;
var now=0;

$(document).ready(function(){
	$(".main_menu>li").mouseover(function(){
		$(this).children(".sub_menu").stop().slideDown()
	});
	$(".main_menu>li").mouseleave(function(){
		$(this).children(".sub_menu").stop().slideUp()
	});
	$(".popp").click(function(){
		$("#contents_pop").css({"display":"block"});
	});
		$(".close").click(function(){
		$("#contents_pop").css({"display":"none"});
		});
	start();

});

function start(){
	$("#main_img>li").eq(0).siblings().css({"margin-left":"-20000px"});
	setInterval(function(){slide();},2000);
}
function slide(){
	now=now==imgs?0:now+=1;
	$("#main_img>li").eq(now-1).css({"margin-left":"-20000px"});
	$("#main_img>li").eq(now).css({"margin-left":"0px"});
}

var win;
function winOpen(){
	win = window.open('contact_web2.html','child','toolbar=no,width=500,height=300')}