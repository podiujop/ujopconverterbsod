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

	$("#kgToG").click(function () {$("#frameLoad").load("kgtogram.html");});
	$("#kgToMg").click(function () {$("#frameLoad").load("kgtomilligrams.html");});
	$("#kgToTon").click(function () {$("#frameLoad").load("kgtotons.html");});
	$("#kgToN").click(function () {$("#frameLoad").load("kgtonewton.html");});
});