$(document).ready(function () {
	$("#continue").click(function  () {
		$("#under-maintance").css("display", "none");
	});
	//Kilograms to grams
	$("#kgToG").click(function (event) {
		event.preventDefault();
		$(".aLinks").data("data-active" , 0);
		$(this).data("data-active" , 1);
		$("#frameLoad").load("kgvgram.html");

	});
});