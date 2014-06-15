<?php

// assumes json responses per item in /cache/index_ID and /cacheview/view_ID

ini_set('memory_limit', '-1');

$db = "ddb5";

$files = array();
$count = 0;

$mysqli = new mysqli("127.0.0.1", "root", "root", "$db", 3306);
if ($mysqli->connect_errno) echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
$mysqli->set_charset("utf8");

$facets = array(
	"affiliate_fct",
	"affiliate_fct_normdata",
	"affiliate_fct_role",
	"affiliate_fct_role_normdata",
	"keywords_fct",
	"keywords_fct_normdata",
	"language_fct",
	"place_fct",
	"place_fct_normdata",
	"provider_fct",
	"provider_fct_normdata",
	"sector_fct",
	"time_fct",
	"type_fct"
);

$ids = array();

// drop and create tables
$q = "DROP TABLE IF EXISTS `items`;\n";
if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);
$q = "CREATE TABLE `items` (`id` varchar(32) NOT NULL DEFAULT '', `thumb` boolean, `title` text, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);

for ($i=0; $i < count($facets); $i++) {	
	$q = "DROP TABLE IF EXISTS `$facets[$i]`;\n";
	if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);
	$q = "DROP TABLE IF EXISTS `$facets[$i]_items`;\n";
	if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);

	if ($facets[$i]=="time_fct") 
		$q = "CREATE TABLE `$facets[$i]` (`id` int(11) unsigned NOT NULL AUTO_INCREMENT, `value` text, `name` text, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";	
	else $q = "CREATE TABLE `$facets[$i]` (`id` int(11) unsigned NOT NULL AUTO_INCREMENT, `value` text, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
	
	if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);

	$q = "CREATE TABLE `$facets[$i]_items` (`item_id` varchar(32) NOT NULL, `facet_id` int(11) unsigned NOT NULL, PRIMARY KEY (`item_id`, `facet_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
	if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);	

	$ids[$facets[$i]] = array();
}


$handle = opendir('cache');
while (false !== ($entry = readdir($handle))) {
	if (strpos($entry, "index_")>-1) {

		$item = json_decode(file_get_contents("cache/".$entry), true);
		
		$item_id = $item["item-id"];

		$view = json_decode(file_get_contents("cacheview/view_".$item_id), true);
		
		$title = $mysqli->real_escape_string($view["item"]["title"]);
		$thumb = 0;
		
		for ($i=0; $i < count($view["item"]["fields"][1]["field"]); $i++) { 
			if ($view["item"]["fields"][1]["field"][$i]["name"]=="digitalisat" && $view["item"]["fields"][1]["field"][$i]["value"]=="true") $thumb = 1;
		}

		$q = "INSERT INTO items (`id`, `title`, `thumb`) VALUES ('$item_id', '$title', '$thumb')";
		if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);
		
		for ($i=0; $i < count($item["facet"]); $i++) { 
			
			$facet = $item["facet"][$i]["@name"];
			$values = $item["facet"][$i]["value"];
			
			if ($facet=="last_update" || $facet=="category") continue;
			
			if (!is_array($values)) $values = array($values);

			for ($j=0; $j < count($values); $j++) { 
				$value = $values[$j];
				
				if (isset ($ids[$facet][$value])) $facet_id = $ids[$facet][$value];
				else {
					$v = $mysqli->real_escape_string($value);
					$q = "INSERT INTO $facet (`value`) VALUES ('$v')";
					if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);
					$facet_id = mysqli_insert_id($mysqli);
					$ids[$facet][$value] = $facet_id;
				}
				
				$q = "INSERT IGNORE INTO {$facet}_items (`item_id`, `facet_id`) VALUES ('$item_id', '$facet_id')";
				if (mysqli_query($mysqli, $q)==false) error_log($mysqli->error);
			}
		}
		
		$count++;
		
		if ($count % 1000==0) error_log($count);
	}
}

closedir($handle);

?>