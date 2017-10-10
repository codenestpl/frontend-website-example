var menuItemTimer;
var menuItemIndex;
var menuItemIndexOld=-1;
var $menuItems;

$(document).ready(function() {
	$menuItems = $("header .menu-item-has-children");  
	menuItemMouseClick();
	menuItemMouseEnter();
	menuItemMouseLeave();
	searchToggle();

	$menuItems.on('mouseenter', function(event) {
		 clearTimeout(menuItemTimer);  
	});
	
});  


function menuItemMouseClick() { 

		$menuItems.click(function(event) {
			event.stopPropagation();
  			event.preventDefault();  
			menuItemReset();
			$(this).toggleClass('hover').toggleClass('old-hover');
		});
}

function menuItemMouseEnter() {
	$menuItems.on('mouseenter focusin', function(event) {  
		
		event.stopPropagation();
  		event.preventDefault();

		if(!$(this).hasClass('hover')) { 

			$menuItems.parents("nav")
			.removeClass("from-left")
			.removeClass("from-right");

			menuItemIndex = $(this).index(".menu-item-has-children"); 

			if(menuItemIndexOld>-1){
				 
				 if(menuItemIndexOld > menuItemIndex){
				 	$(this).parents("nav").addClass("from-left");
				 } else {
				 	$(this).parents("nav").addClass("from-right");	 
				 };	 		 	

			};

			menuItemIndexOld = menuItemIndex; 	

			$(this).addClass('hover'); 
			 
			menuItemReset();

		};
		
	});
}

function menuItemMouseLeave() {
	$menuItems.on('mouseleave', function(event) { 

		event.stopPropagation();
  		event.preventDefault();  

		$(this).addClass('old-hover'); 
		menuItemTimer = setTimeout(function() {  

			menuItemIndex = -1; 
			$menuItems.parents("nav").removeClass("from-left").removeClass("from-right");
			 
			 menuItemReset();        
		},300); 

	}); 
};

function menuItemReset() {
	$(".menu-item-has-children.old-hover")
			.removeClass('hover')
			.removeClass('old-hover');
};


function searchToggle() {
	$(".btn-collapse").click(function(event) {

		event.stopPropagation();
  		event.preventDefault();  
  		
		$(".btn-collapse").parents(".collapse-box").toggleClass("collapse-active")
	});  
};

$('#toggleSidebarMenu').on('click', function(){
    $(this).toggleClass('active-sidebar');
    $('.sidebar-nav').toggleClass('is-open');
});





 