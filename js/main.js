$(document).ready(function() {

	// Adaptive menu
	$('.menu-btn').on('click', function () {
		if ($(this).parents('.menu_wrap').is('.opened-menu') !== true) {
			$('.menu_wrap').addClass('opened-menu');
			$('#main-menu').addClass('opened');

		}
		else if ($(this).parents('.menu_wrap').is('.opened-menu') === true) {
			$('.menu_wrap').removeClass('opened-menu');
			$('#main-menu').removeClass('opened');
		}
	});

	// Fancybox
	$('[data-fancybox]').fancybox({
		autoSize: true,
		protect: true
	});

	// Accordion
	$('.q_title').on("click", function(){

		if($(this).hasClass('active')){
			$(this).removeClass("active");
			$(this).next('.answer').slideUp(200);
		} else {
			$('.q_title').removeClass("active");
			$(this).addClass("active");
			$('.answer').slideUp(200);
			$(this).next('.answer').slideDown(200);
		}
	})

	// Formstyler 
	  $('input[type="radio"], input[type="checkbox"], input[type="file"], select').styler();

	// Pop_up form
	$(".mymagicoverbox").click(function()
	{
				$('#myfond_gris').fadeIn(300);
				var iddiv = $(this).attr("iddiv");
				$('#'+iddiv).fadeIn(300);
				$('#myfond_gris').attr('opendiv',iddiv);
				return false;
	});

	$('#modal_close, #dribble_modal_close, #myfond_gris, .mymagicoverbox_fermer').click(function()
	{
				var iddiv = $("#myfond_gris").attr('opendiv');
				$('#myfond_gris').fadeOut(300);
				$('#'+iddiv).fadeOut(300);
	});

	// AOS effects
	AOS.init({
		disable: function () {
    		var maxWidth = 991;
		    return window.innerWidth < maxWidth;
			  },
		easing: 'ease',
		delay: 50,
	});

}); 