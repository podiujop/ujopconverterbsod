$(document).ready(function () {


	$("#continue").click(function  () {
		$("#under-maintance").css("display", "none");
	});

	function removeActive () {
		$(".aLinks").data("data-active" , 0).attr("data-active" , 0);
	};

	//Kilograms to grams
	$(".aLinks").click(function (event) {
		event.preventDefault();
		$(".aLinks").parent().attr("class", "non-active");

		removeActive();
		$(this).data("data-active" , 1).attr("data-active" , 1);
		$(this).parent().addClass("active");

		//for (i = 0; i <= $(".aLinks").length; i++) {
			// var getActiveAttr = $(".aLinks").attr("data-active");
			// console.log(getActiveAttr);
			// if (getActiveAttr === 1) {
			// 	$(this).parent().addClass("active")
			// } else {
			// 	$(".aLinks").removeClass("active");
		//}

	});


});