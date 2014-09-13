<?
session_start();
$id = session_id();

if ( 
	!empty($_GET["view"]) &&
	!empty($_GET["type"]) &&
	!empty($_GET["area"]) &&
	!empty($_GET["value"])
) {
	$file = fopen($id . ".csv", "a+");
	$new_content = $_GET["view"] . ";" . $_GET["type"] . ";" . $_GET["area"] . ";" . $_GET["value"] . "\n";
	fwrite($file, $new_content);
	echo("written to $id");
} else {
	echo("Fields are missing!");
}
?>