(function ($) {
	var mainContent = $('.main-content');
	var sidebarLink = $('.sidebar-link');
	var sidebar = $('.sidebar');
	sidebarLink.on('click', function (event) {
		event.preventDefault();
		if (!sidebar.hasClass('open')) {
			mainContent.addClass('open');
			setTimeout(function() { sidebar.fadeIn(800).addClass('open') }, 1200 )
		} else {
			sidebar.fadeOut(800).removeClass('open');
			setTimeout(function() { mainContent.removeClass('open') }, 1000 )
		}
		
	});
}(jQuery));