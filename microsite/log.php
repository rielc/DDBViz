<?
session_start();
$id = session_id();

if (
	!empty($_POST["view"]) &&
	!empty($_POST["type"]) &&
	!empty($_POST["area"]) &&
	!empty($_POST["value"])
) {
	$file = fopen("./logs/" . $id . ".csv", "a+");
	$new_content = date("c") . ";" . $_POST["view"] . ";" . $_POST["type"] . ";" . $_POST["area"] . ";" . trim(preg_replace("/\r|\n/", ' ', $_POST["value"])) . "\n";
	fwrite($file, $new_content);
	echo("written to $id");
} else {
	echo("Fields are missing!");
}
?>