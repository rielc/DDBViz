<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
switch ($lang){
    case "de":
        include("index_en.html");
        break;
    default:
        include("index_de.html");
        break;
}
?>