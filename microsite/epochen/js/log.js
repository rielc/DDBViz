
function log(view, type, area, value){
	var payload = {
		type: type,
		view: view,
		area: area,
		value: value
	};
	console.log("logging", payload);
	$.post( "../log.php", payload);
}