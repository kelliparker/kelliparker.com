$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		var target = this.hash;
		if (target)
		{
			e.preventDefault();

			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 700, 'swing', function () {
				window.location.hash = target;
			});
		}
	});
});