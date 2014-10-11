$(document).ready(function() {	
	if($(window).width() > 767) {
		$('.scrollpoint.sp-effect3').waypoint(function(){
			$(this).toggleClass('active');
			$(this).toggleClass('animated fadeInDown');
		},{
			offset:'90%'
		});
	}
});