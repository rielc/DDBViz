
function log(view, type, area, value){
	var payload = {
		type: type,
		view: view,
		area: area,
		value: value.toString()
	};
	
	if (view=="index") $.post( "log.php", payload);
	else $.post( "../log.php", payload);
}