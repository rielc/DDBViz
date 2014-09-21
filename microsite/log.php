<?
session_start();
$id = session_id();

// $browserA = @get_browser();
// $browser = @$browserA["platform"] .",". @$browserA["browser"].",".@$browserA["version"];
// error_log($browser);

if (
	!empty($_POST["view"]) &&
	!empty($_POST["type"]) &&
	!empty($_POST["area"]) &&
	!empty($_POST["value"])
) {
	
	if ($_POST["type"]=="load" && $_POST["area"]=="page") $_POST["value"].=",".$_SERVER['HTTP_REFERER'];

	$file = fopen("./logs/" . $id . ".csv", "a+");
	$new_content = date("c") . ";" . $_POST["view"] . ";" . $_POST["type"] . ";" . $_POST["area"] . ";" . trim(preg_replace("/\r|\n/", ' ', $_POST["value"])) . "\n";
	fwrite($file, $new_content);
	echo("written to $id");
} else {
	echo("Fields are missing!");
}
?>