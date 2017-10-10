$(document).ready(function() {
  
	if($(window).width()<700) {
		 
		$(".competitor-table").scrollLeft($(".best").offset().left - $(".best").width())
	}
});  