$(document).ready(function(){
	$("#j").on("click", () => {
		$("#location").remove();
		let ans = document.createElement("h1");

		$(ans).attr("id", "location");
		$(ans).text("Logical Error");
		$("body").append(ans);
	});

	$("#k").on("click", () => {
		$("#location").remove();
		let ans = document.createElement("h1");

		$(ans).attr("id", "location");
		$(ans).text("Ljusdal");
		$("body").append(ans);
	});
});