$('#clientsCarousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,  
    autoplayTimeout:5000,
	autoplayHoverPause:true, 
    responsiveClass:true, 
    dots:false,
    items:3
}); 

$('#benefitsCarousel').owlCarousel({
    loop:true,
    center:true,
    margin:0,
    autoplay:false,  
    autoplayTimeout:10000,
    autoplayHoverPause:true, 
    responsiveClass:true, 
    dots:false,    
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
            navText:['<span> </span>','<span> </span>'],

    responsive:{
        0:{
            items:1,
            nav:true
        }, 
        400:{
            items:1,
            nav:true
        },
        751:{
            items:3,
        }
    }
});  

$('.blog-navigation').owlCarousel({ 
    items: 9,
    loop:false,
    margin:0,
    autoplay:false,  
    dots:false,
    autoWidth: true
//    responsive:{
//        0:{
//            items:8, 
//        },
//        600:{
//            items:8,
//        }
//    }
});

$('.three-box-blog').owlCarousel({
    items: 3,
    loop:false,
    margin:55,
    autoplay:false,  
    dots:false,
    navText:['<span> </span>','<span> </span>'],
    responsive:{
        0:{
            items: 1,
            nav: true,
            autoHeight:true
        },
        767: {
            items: 2,
            nav: true,
        },
        992: {
            items: 3,
        }
    }
});


$('.list-for-box-slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay:false,  
    dots:false,
    nav: true, 
     navText:['<span> </span>','<span> </span>']
 });

$('.list-reviews-slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay:false,  
    dots:false,
    nav: true,   
    navText:['<span> </span>','<span> </span>'] 
});







