$(document).on('click', 'a', function(event){
	event.preventDefault();
	$('body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top
	}, 800);
});

$(document).ready(function(){
    $(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
        $('nav').addClass('scrolled');
		$('#top').css('display', 'block');
    } else {
		$('nav').removeClass('scrolled');
		$('#top').css('display', 'none');
	}
    });
});

$('#top').click(function(){
	$('body').animate({
		scrollTop: 0
	}, 800);
});

