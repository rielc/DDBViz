<?php

echo($data);



$mysqli = new mysqli("localhost", "root", "root", "ddb_normalized");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$affiliateID1 = 29111;
$affiliateID2 = 12688;
$timeFctID = "time_62110";

$res = $mysqli->query("SELECT affiliate_fct_items.facet_id, count(DISTINCT affiliate_fct_items.item_id) as c, affiliate_fct.value FROM affiliate_fct_items, affiliate_fct, time_fct_items WHERE affiliate_fct_items.facet_id = affiliate_fct.id AND affiliate_fct_items.item_id = time_fct_items.item_id AND time_fct_items.facet_id = (SELECT id FROM time_fct WHERE value = \"$timeFctID\") AND affiliate_fct_items.facet_id = $affiliateID1 AND affiliate_fct_items.item_id IN (SELECT b.item_id FROM affiliate_fct_items as b, time_fct_items WHERE b.item_id = time_fct_items.item_id AND time_fct_items.facet_id = (SELECT id FROM time_fct WHERE value = \"$timeFctID\") AND b.facet_id = $affiliateID1 ) GROUP BY affiliate_fct_items.facet_id");

// echo($res->num_rows);

for ($row_no = $res->num_rows - 1; $row_no >= 0; $row_no--) {
    $res->data_seek($row_no);
    $row = $res->fetch_assoc();
    echo " id1 = " . $row['facet_id'] . "\n";
    echo " c = " . $row['c'] . "\n";
    echo " id2 = " . $affiliateID2 . "\n";
}


?>