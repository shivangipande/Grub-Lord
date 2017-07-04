$(document).ready(function(){
	
	function randomNoGen(minn,maxm){
		return Math.floor(Math.random()*(maxm-minn+1)+minn);
	}
	$("#next").click(function(e){
		var currentActiveDiv = $(".div-active");
		var nextActiveDiv = currentActiveDiv.next();
		if(nextActiveDiv.length == 0){
			nextActiveDiv = $(".carousel-inner div").first();
		}
		currentActiveDiv.removeClass("div-active").addClass("div-hidden").css("z-index",-10);
		nextActiveDiv.addClass("div-active").removeClass("div-hidden").css("z-index",20);
		$("carousel-inner div").not([currentActiveDiv,nextActiveDiv]).css("z-index",1);
		e.preventDefault();
	});
	
	$("#prev").click(function(e){
		var elementArr = $(".carousel-inner div").children();
		var len = elementArr.length;
		var currentActiveDiv = $(".div-active");
		var nextActiveDiv = currentActiveDiv.prev();
		if(nextActiveDiv.length == 0){
			nextActiveDiv = $(".carousel-inner div").last();
			}
		nextActiveDiv.addClass("div-active").removeClass("div-hidden").css("z-index",20);
		currentActiveDiv.removeClass("div-active").addClass("div-hidden").css("z-index",-10);		
		$("carousel-inner div").not([nextActiveDiv,currentActiveDiv]).css("z-index",1);
		
		e.preventDefault();
	});
	
	$(".dropicon").click(function(){
		$("#dropDown").toggle("show");
		
	});
	
	$(".menuicon").click(function(){
		$("#navMenu").toggle("show");
		
	});
	
	
	$(".panels1").css({"top":randomNoGen(10,50),"max-height":"200px"});
	$(".panels2").css({"top":randomNoGen(30,70),"max-height":"200px"});
	$(".panels3").css({"top":randomNoGen(10,50),"max-height":"200px"});
});