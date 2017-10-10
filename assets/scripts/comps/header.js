var scrollTop; 

$(document).ready(function() {
	$(window).scroll(function(event) {
		scrollTop=$(window).scrollTop();
		scrolled();  
	});
		
});  

function scrolled() {

	if(scrollTop>10){
		$("body").addClass('scrolled');
	}else {
		$("body").removeClass('scrolled');
	};

};