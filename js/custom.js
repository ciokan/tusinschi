/*------------------------------------------------------------------
Project:	Heaven
Version:	1.0
Created: 		27/11/2013
Last change:	16/12/2013
-------------------------------------------------------------------*/

// Recent works thumbnail image height resize
//===========================================

$('.recent-works .thumbnail > .image').on( 'resize', function () {
    $('.recent-works .thumbnail > .image').height( $('.recent-works .thumbnail > .image').width() / 1.6 );
}).resize();



function scrollTo(element) {
	$('html, body').animate({
		scrollTop: $(element).offset().top
	}, 1000);
}