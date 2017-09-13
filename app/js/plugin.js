;(function($) {
	var moreOptionBtn = $(".more-option-btn");
	var moreOptionForm = $(".more-option-form");
	
	moreOptionBtn.on("click", function() {
		moreOptionForm.slideToggle();
	});
}) (jQuery);

(function($) {
	var searchIc = $(".search-ic");
	var innerSearch = $(".inner-search");
	
	searchIc.on("click", function() {
		innerSearch.toggle("slide");
		searchIc.toggleClass("close");
	});

}) (jQuery);