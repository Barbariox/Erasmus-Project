var body = $('body');
var headerHeight = $('body>header').height();
var sectionElement = document.getElementById('section01');
var section01 = sectionElement.getBoundingClientRect();
var sectionElement = document.getElementById('section02');
var section02 = sectionElement.getBoundingClientRect();
var sectionElement = document.getElementById('section03');
var section03 = sectionElement.getBoundingClientRect();

$(window).on('load', function() {
	setTimeout(function(){
		$('#loader').fadeOut(400);
			$('header>#wrapper>h1:first-of-type').fadeIn(3000, function() {
		$('header>#wrapper>h1:first-of-type').animate({
			opacity: '1',
			marginTop: '0',
		}, 1000);
		$('header>#wrapper>h1:last-of-type').animate({
			opacity: '1',
			marginBottom: '-00px'
		}, 1000);
		$('header>.topLeft').animate({
			opacity: '1',
		}, 1000);
		$('header>#wrapper>i').animate({
			opacity: '1',
			marginTop: '0'
		}, 1000);
		$('header>img').animate({
			opacity: '1',
		}, 1000);
	});

	$(document).on('scroll', function() {
		// If scrolling reaches the end of the header
		if($(this).scrollTop() > headerHeight) {
			$('section:first-of-type').css('padding-top', '79px');
			$('nav').css('position', 'fixed');
			$('nav').css('top', '0');
			$('nav').css('left', '0');
			$('nav').css('right', '0');
			$('nav').css('margin-left', 'auto');
			$('nav').css('margin-right', 'auto');
			$('nav').css('background', 'white');
		}

		// If scrolling reaches the first section
		if($(this).scrollTop() >= section01.top - 900) {
			$('#section01').fadeIn(3800, function() {
				$('#section01').animate({
					opacity: '1',
					marginTop: '100px'
				}, 1000);
			});
		}
		if($(this).scrollTop() >= section02.top - 600) {
			$('#section02').fadeIn(3800, function() {
				$('#section02').animate({
					opacity: '1',
					marginTop: '100px'
				}, 1000);
			});
		}
		
		if($(this).scrollTop() >= section03.top - 700) {
			$('#section03').fadeIn(3800, function() {
				$('#section03').animate({
					opacity: '1',
					marginTop: '100px'
				}, 1000);
			});
		}
		
		
		// If scrolling goes back to the header
		if($(this).scrollTop() <= headerHeight) {
			$('section:first-of-type').css('padding-top', '0');
			$('nav').css('position', 'relative');
			$('nav').css('background', 'white');
		}
	});
	// Button to scroll to the top of the page
	$('.scrollTop').click(function() {
		$('html,body').animate({ scrollTop: 0}, 1500);
		return false;
	});
	// Navbar buttons for scrolling to page elements
	$('nav>#wrapper>ul>li:nth-of-type(1)').click(function() {
		$('html,body').animate({ scrollTop: $('section:first-of-type').offset().top - 154}, 'slow');
		return false;
	});
	$('nav>#wrapper>ul>li:nth-of-type(2)').click(function() {
		$('html,body').animate({ scrollTop: $('section:nth-of-type(2)').offset().top - 77}, 'slow');
		return false;
	});
	$('nav>#wrapper>ul>li:nth-of-type(3)').click(function() {
		$('html,body').animate({ scrollTop: $('section:nth-of-type(3)').offset().top - 154}, 'slow');
		return false;
	});

	// Button for team information
	$('footer>#wrapper>div').click(function() {
		$('#filter, #about').fadeIn(200);
	});

	// Escaping the filter using the black background
	$('#filter').click(function() {
		$('#filter, #about').fadeOut(200);
	});

	// This is the embodiment of my stupidity
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(1)').mouseenter(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(1)>h2').css('color', 'white');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(1)').mouseleave(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(1)>h2').css('color', '#646464');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(2)').mouseenter(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(2)>h2').css('color', 'white');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(2)').mouseleave(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(2)>h2').css('color', '#646464');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(3)').mouseenter(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(3)>h2').css('color', 'white');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(3)').mouseleave(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(3)>h2').css('color', '#646464');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(4)').mouseenter(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(4)>h2').css('color', 'white');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(4)').mouseleave(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(4)>h2').css('color', '#646464');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(5)').mouseenter(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(5)>h2').css('color', 'white');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(5)').mouseleave(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(5)>h2').css('color', '#646464');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(6)').mouseenter(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(6)>h2').css('color', 'white');
	});
	$('#section03>#wrapper>#wrapper>.proff:nth-of-type(6)').mouseleave(function() {
		$('#section03>#wrapper>#wrapper>.proff:nth-of-type(6)>h2').css('color', '#646464');
	});

	}, 900);
});
