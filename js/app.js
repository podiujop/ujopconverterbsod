$(document).ready(function () {

	$( document ).ajaxStart(function() {
	  	$( "#loading" ).show();
	}).ajaxStop(function() {
	  	$( "#loading" ).hide();
	});

	$("#continue").click(function  () {
		$("#under-maintance").css("display", "none");
	});

	//Kilograms to grams
	$(".aLinks").click(function (event) {
		event.preventDefault();
		$(".aLinks").parent().attr("class", "non-active");
		$(this).parent().addClass("active");
	});

	$("#kgToG").click(function () {
		$("#frameLoad").empty();
		$("#frameLoad").load("kgtogram.html");});
	$("#kgToMg").click(function () {
		$("#frameLoad").empty();
		$("#frameLoad").load("kgtomilligrams.html");});
	$("#kgToTon").click(function () {
		$("#frameLoad").empty();
		$("#frameLoad").load("kgtotons.html");});
	$("#kgToN").click(function () {
		$("#frameLoad").empty();
		$("#frameLoad").load("kgtonewton.html");});
});