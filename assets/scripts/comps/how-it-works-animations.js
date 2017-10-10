	


//TEXTS
	var $collectTexts = $(".collect-text");


//CATEGORIZE
	var $PhoneCollecting = $("#collectAnimationPhone");

	if($PhoneCollecting.length>0) {

	var $documentsBox = $("#collectAnimationDocuments");
	var $documentsItems = $documentsBox.find(".document-icon");
	var documentsLength = $documentsItems.length; 
	var	documentsToAnimate_indexOld = 0;
	var documentsToAnimate_index = randomNumber(0, documentsLength, documentsToAnimate_indexOld);
	var $documentsToAnimate = $documentsItems.eq(documentsToAnimate_index);
	var documentsToAnimatOld_object = {centerX:0,centerY:0}
	var documentsToAnimate_object = getDocumentCenter($documentsToAnimate);

	};
//CATEGORIZE

function documentsAnimation(){
	getDocument();
	movePhoneToDocument($PhoneCollecting, documentsToAnimate_object, documentsToAnimatOld_object);			 
	documentCollected();			
	documentScan($PhoneCollecting, $documentsToAnimate);
	documentsToAnimate_indexOld = documentsToAnimate_index;
};

function randomNumber(from, to, oldnumber) {

	
	var number = Math.floor((Math.random() * to) + from);

	if(number==oldnumber){		 
		number = randomNumber(from, to, oldnumber);		 
		return number;
	}else { 
		return number;
	};


} 

function getDocument() {
	documentsToAnimate_index = randomNumber(0, documentsLength , documentsToAnimate_indexOld);
	$documentsToAnimate = $documentsItems.eq(documentsToAnimate_index); 
	documentsToAnimate_object = getDocumentCenter($documentsToAnimate);
}

function getDocumentCenter( ){
	var documentObject = {};
  
	documentObject.centerX = $documentsToAnimate.position().left + $documentsToAnimate.width()/2;
	documentObject.centerY = $documentsToAnimate.position().top + $documentsToAnimate.height()/2;

	return documentObject;
}

function movePhoneToDocument($PhoneCollecting, cordsObject, cordsObjectOld) {
	$PhoneCollecting.find(".content-phone-model .ratio-box .centered").html('');

	var bezier_params = bezierParams(cordsObject, cordsObjectOld);  
	$PhoneCollecting.animate({path : new $.path.bezier(bezier_params)},750); 

	documentsToAnimatOld_object=cordsObject;
}

function bezierParams(cordsObject, cordsObjectOld) {
	var angle =0;
	var startAngle = 0;

	var bezier_params = {
	    start: { 
	      x: cordsObjectOld.centerX,
	      y: cordsObjectOld.centerY, 
	      angle: 80
	    },	
	    end: { 
	      x: cordsObject.centerX,
	      y: cordsObject.centerY, 
	      angle: -80, 
	      length: 0.25
	    }
	  };

	  return bezier_params;
};

function documentScan($PhoneCollecting ) {
	$documentsToAnimate.clone().prependTo($PhoneCollecting.find(".content-phone-model .ratio-box .centered"));
};

function documentCollected(){
	$documentsItems.removeClass('to-collect'); 
	$documentsToAnimate.addClass('to-collect');
}
 
//CATEGORIZE

var $categorizeBox = $("#categorizeAnimation");
var $categorizePaths = $categorizeBox.find("#categorize-paths path"); 
var categorizePathsLength = $categorizePaths.length; 
var $categorizePathToAnimate;
var categorizePath;
var canvasCategorize;
var ballCategorize;
var pathCategorize=[];
 

function drawCategoryPath() {
	var l;
	 
	canvasCategorize = SVG('categorizeAnimationRatioBox').size(331.344, 147.875).viewbox(0, 0, 331.344, 147.875)
	
	ballCategorize = canvasCategorize.circle(10);
	ballCategorize.attr("class","fill-purple"); 

	pathCategorizeBg = canvasCategorize.path("M-1.5,109.469h336l-27.313-0.219 c-18.031,0-16.531-14.375-16.531-14.375s0,7.875,0-7.188s-13.563-13.563-13.563-13.563h-12.75h0.906h-39.656 c0,0-13.563-1.5-13.563,13.563s0,7.188,0,7.188s1.5,14.375-16.531,14.375l-3.156,0.166c-18.031,0-16.531,14.375-16.531,14.375 s0-7.875,0,7.188s-13.563,13.563-13.563,13.563H149.5h-12.75c0,0-13.563,1.5-13.563-13.563s0-7.188,0-7.188 s1.5-14.375-16.531-14.375h-3.469c-18.031,0-16.531-14.375-16.531-14.375s0,7.875,0-7.188S73.094,74.291,73.094,74.291h-12.75 l202-0.249h12.75c0,0,13.563,1.5,13.563-13.563s0-7.188,0-7.188s-1.5-14.105,16.531-14.105L331.5,39.25h-336h21 c18.031,0,16.531,14.375,16.531,14.375s0-7.875,0,7.188s13.563,13.563,13.563,13.563h12.75h12.75c0,0,13.563,1.5,13.563-13.563 s0-7.188,0-7.188s-1.5-14.375,16.531-14.375h6.625c18.031,0,16.531,14.375,16.531,14.375s0-7.875,0,7.188 s13.563,13.563,13.563,13.563h12.75h12.75c0,0,13.563,1.5,13.563-13.563s0-7.188,0-7.188s-1.5-14.375,16.531-14.375h-6.594 c18.031,0,16.531-14.375,16.531-14.375s0,7.875,0-7.188S218,4.125,218,4.125h12.75h12.75c0,0,13.563-1.5,13.563,13.563 s0,7.188,0,7.188s-1.5,14.375,16.531,14.375")
	pathCategorizeBg.attr("class","stroke-grey-light stroke-3"); 

	pathCategorize[1] = canvasCategorize.path("M-5.563,39.25H18.35 H16.5c18.031,0,16.531,14.375,16.531,14.375s0-7.875,0,7.188s13.563,13.563,13.563,13.563h12.75l1-0.084h12.75 c0,0,13.563-1.5,13.563,13.563s0,7.188,0,7.188s-1.5,14.375,16.531,14.375l-0.831-0.01h6.581l-2.281,.01 c18.031,0,16.531,14.375,16.531,14.375s0-7.875,0,7.188s13.563,13.563,13.563,13.563h12.75h12.75c0,0,13.563,1.5,13.563-13.563 s0-7.188,0-7.188s-1.5-14.375,16.531-14.375l-0.409,0.003l3.565-0.17c18.031,0,16.531-14.375,16.531-14.375s0,7.875,0-7.188 s13.563-13.563,13.563-13.563h39.656h-0.906h12.75c0,0,13.563-1.5,13.563,13.563s0,7.188,0,7.188s-1.5,14.375,16.531,14.375 l28.063,0.17");
	pathCategorize[1].attr("class","stroke-purple stroke-3 stroke-todraw");
	l = pathCategorize[1].length();
	pathCategorize[1].attr("stroke-dasharray",l).attr("stroke-dashoffset",l);

	pathCategorize[2] = canvasCategorize.path("M-4.656,39.25h113.313 c18.031,0,16.531,14.375,16.531,14.375c0,6.813,0-0.374,0,7.188c0,15.063,13.563,13.563,13.563,13.563h12.75h1.375h11.375 c0,0,13.563,1.5,13.563-13.563s0-7.188,0-7.188s-0.232-13.744,15.969-14.594l0.015-0.152c11.591-2.824,10.485-14.005,10.485-14.005 s0,7.875,0-7.188s13.563-13.563,13.563-13.563h12.219h0.531h12.75c0,0,13.563-1.5,13.563,13.563s0,7.188,0,7.188 s-1.5,14.375,16.531,14.375l0.703,0h57.203");
	pathCategorize[2].attr("class","stroke-purple stroke-3 stroke-todraw");
	l = pathCategorize[2].length();
	pathCategorize[2].attr("stroke-dasharray",l).attr("stroke-dashoffset",l);

	pathCategorize[3] = canvasCategorize.path("M-5.563,39.25h20.396 h1.292c18.031,0,16.531,14.375,16.531,14.375s0-7.875,0,7.188s13.563,13.563,13.563,13.563h12.75l1-0.084h12.75 c0,0,13.563-1.5,13.563,13.563s0,7.188,0,7.188s-1.5,14.375,16.531,14.375h3.469c18.031,0,16.531,14.375,16.531,14.375 s0-7.875,0,7.188s13.563,13.563,13.563,13.563h12.75h12.75c0,0,13.563,1.5,13.563-13.563s0-7.188,0-7.188 s-1.5-14.375,16.531-14.375l3.156-0.166c18.031,0,16.531-14.375,16.531-14.375s0,7.875,0-7.188s13.563-13.563,13.563-13.563h39.656 l-2.906-0.083h12.75c0,0,13.563,1.5,13.563-13.563s0-7.188,0-7.188s-1.5-14.105,16.531-14.105l1.521,0.063h27.083");
	pathCategorize[3].attr("class","stroke-purple stroke-3 stroke-todraw");
	l = pathCategorize[3].length();
	pathCategorize[3].attr("stroke-dasharray",l).attr("stroke-dashoffset",l);

	pathCategorize[4] = canvasCategorize.path("M-1.792,109.469 l108.156-0.052c18.031,0,16.531,14.375,16.531,14.375s0-7.875,0,7.188s13.563,13.563,13.563,13.563h25.5 c0,0,13.563,1.5,13.563-13.563s0-7.188,0-7.188s-1.5-14.375,16.531-14.375l142.156,0.052");
	pathCategorize[4].attr("class","stroke-purple stroke-3 stroke-todraw");
	l = pathCategorize[4].length();
	pathCategorize[4].attr("stroke-dasharray",l).attr("stroke-dashoffset",l); 


};

function pathsAnimation() {
	setTimeout(function() {		
		chooseCategoryPath();
		pathAndBallAnimation();
	},2200);
};

function chooseCategoryPath() {
	categorizePath_index = randomNumber(1, 4, -1);
	$categorizePathToAnimate = pathCategorize[categorizePath_index]; 
};

function pathAndBallAnimation() { 
	length = $categorizePathToAnimate.length();

	
	ballCategorize.animate(1050, '<>').during(function(pos, morph, eased){
	    var p = $categorizePathToAnimate.pointAt(eased * length); 
	    $categorizePathToAnimate.attr("stroke-dashoffset",length- eased * length);
	    ballCategorize.center(p.x, p.y)
	});

	setTimeout(function(){
		$categorizePathToAnimate.attr("class","stroke-grey-light stroke-3  stroke-todraw");

		setTimeout(function(){
				$categorizePathToAnimate.attr({
					"class":"stroke-purple stroke-3  stroke-todraw",
					"stroke-dasharray":length,
					"stroke-dashoffset":length
				}); 
		},1200);

	},1050);

}

//RECONCILE

var $reconcileBox = $("#reconcileAnimation");
var $reconcileItems = $reconcileBox.find(".app-reconcile"); 
var $reconcileLength = $reconcileItems.length;
var $reconcileItem_toHideShow=[0,2];
var reconcileItemsClassOld = '';
var reconcileItemsClasses=[
	"reconcile-chart2",
	"", 
	"reconcile-xero big-icon", 
	"reconcile-chart2",
	"",
	"reconcile-quickbooks big-icon",
	"reconcile-chart2",
	"",
	"reconcile-excel big-icon",
	"reconcile-chart2",
	"",
	"reconcile-googledrive big-icon", 
	"reconcile-chart2",
	"",
	];
var $reconcileItem_toHide;
var $reconcileItem_toShow;

function reconcileAnimation() {
	setTimeout(function() {
		$reconcileItem_toHideShow=reconcileChooseToHideShow(); 
		reconcileItemsHideShow();
	},3000); 
}

function reconcileChooseToHideShow() {
	var toHideShow;
	var hiddenLength = $reconcileItems.filter(".to-hide").length; 
	var vissibleLength = $reconcileItems.filter(".to-hide").length; 
	var toHide = 1;	
	var toShow= randomNumber(0,  hiddenLength, -1);	
 
	
	if( toHide == toShow ){ 
		toHideShow=reconcileChooseToHideShow();
	 
		return toHideShow;
	}
	else{
		toHideShow = [toHide, toShow];
		 
		return toHideShow;
	}
}

function reconcileItemsHideShow() {  

	$reconcileItems.filter(".to-hide")
	.eq($reconcileItem_toHideShow[1])
	.attr('class', 'app-reconcile')
	.addClass(reconcileItemsClass())
	.addClass('to-show');

	setTimeout(function(){

		$reconcileItems.filter(".to-show")
		.removeClass('to-show')
		.addClass('to-hide');

	}, 2400);

	 $reconcileItems = $reconcileBox.find(".app-reconcile"); 

};

function reconcileItemsClass() { 
	var i = randomNumber(0, reconcileItemsClasses.length, -1);
	var itemClass = reconcileItemsClasses[i];
	if(reconcileItemsClassOld==itemClass) {
		itemClass = reconcileItemsClass();
		reconcileItemsClassOld = itemClass;
		return itemClass;
	}
	else {
		reconcileItemsClassOld = itemClass;
		return itemClass;
	};	 
}

function activeCollectText(i) {
	$collectTexts.hover(function() {
		$collectTexts.removeClass('active');
	  	$(this).addClass('active');
	}, function() {
		$collectTexts.removeClass('active');

		setTimeout(function(){
				$collectTexts.eq(0).addClass('active');
		},2400);
	});
	 
}


function resetPaths() { 
	var scrollTop2= scrollTop; 
	var offsetTop = $documentsBox.offset().top - $(window).height(); 
	var offsetBottom = offsetTop + $documentsBox.height() + $(window).height();

	if(scrollTop2 < offsetTop || scrollTop2 > offsetBottom) { 

		for (var i = 1; i < pathCategorize.length; i++) {

			var length = pathCategorize[i].length();

			pathCategorize[i].attr({
					"class":"stroke-purple stroke-3  stroke-todraw",
					"stroke-dasharray":length,
					"stroke-dashoffset":length
			}); 
		}
		
	}
}


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isWindowIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//MAIN 

( function ( $ ) { 

	var allowAnim = true;

	 if($PhoneCollecting.length>0) {

		activeCollectText()	
		drawCategoryPath();
		setInterval(function(){

		if(allowAnim && isScrolledIntoView($(".howworks-container")) || $(window).width()<800){
			resetPaths();
			documentsAnimation();  
			pathsAnimation();
			reconcileAnimation();			
		} else {
			resetPaths();
		};
		
	},2500) 

	}; 

	$("body, window").mouseenter(function(event) {
		resetPaths();
		$("#categorizeAnimationRatioBox svg").remove();
		activeCollectText()	
		drawCategoryPath();
		allowAnim = true;
	});

	$("body, window").mouseleave(function(event) {
		resetPaths(); 
		allowAnim = false;
	});

} ) ( jQuery );