// JavaScript Document
$(document).ready(function() {
    $(".main_menu>li").mouseover(
	function(){
		$(this).children(".sub_menu").stop().slideDown()
		});
		
		 $(".main_menu>li").mouseleave(
	function(){
		$(this).children(".sub_menu").stop().slideUp()
		});
		
		
			$(".close").click(
		function(){
			$(".pop").stop().css({"display":"none"});
	});
	

function showPopup$() { window.open("pop$.html", "a", "width=400, height=300, left=100, top=50"); }


});