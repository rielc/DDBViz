<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Log list</title>
	<style type="text/css" media="screen">
		p {
			margin: 1em;
			padding: .25em;
			background-color: #eee;
		}
		
		td { border: 1px solid #999; }
		
	</style>
</head>
<body>
	
<table border="0" cellspacing="5" cellpadding="5">
<?php

$feedbacks = array(); 

if ($handle = opendir('logs')) {

	$sessioncount = 0;
	$feedbackcount = 0;

	// files
	while (false !== ($entry = readdir($handle))) {
		
		if (substr($entry, 0, 1)==".") continue;

		$filepath = "logs/".$entry;
		
		if (($handle2 = fopen($filepath, "r")) !== FALSE) {
			$sessioncount++;
			while (($row = fgetcsv($handle2, 1000, ";")) !== FALSE) {
				
				if ($row[3]=="feedback") echo "<tr><td>".$row[4]."</td></tr>";
			}
			
			fclose($handle2);
		}
		
	}
	
	closedir($handle);
}


?>
</table>
<p><b><?php echo $sessioncount . " sessions"; ?></b></p>
<p><b><?php echo $feedbackcount . " feedback submissions"; ?></b></p>
</body>
</html>