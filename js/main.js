$(function(){
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: destination}, 50);
		return false;
	});
});


$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();
   
	$('html, body').animate({
	  scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
  });