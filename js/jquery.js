/* eslint-disable */
hide_filters = function() {
	$(".filters").slideUp();
	$(".toggle_filters").show();
}

show_filters = function() {
	$(".filters").slideDown();
	$(".toggle_filters").hide();
	$(".filters button").click(hide_filters)
}
	$(".toggle_filters").click(show_filters)