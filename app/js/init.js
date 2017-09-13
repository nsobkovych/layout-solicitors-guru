// init slick
$('.inner-carousel').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: false,
	centerPadding: '0px',
	centerMode: true,
	responsive: [
		{
			breakpoint: 959,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 599,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 479,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

// init formstyler
$('select').styler();

// init slicknav
$('.header-nav').slicknav({
	label: '',
	prependTo: '.header .container'
});