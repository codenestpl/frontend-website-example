( function ( $ ) { 
  var controller = new slidebars();
  controller.init();


$( '#toggleSidebarMenu' ).on( 'click', function ( event ) {  
  event.stopPropagation();
  event.preventDefault();  
  controller.toggle( 'sidebarMenu' );
  $( '#toggleSidebarMenu' ).toggleClass( 'sidebar-active' ); 
} );

} ) ( jQuery );   
