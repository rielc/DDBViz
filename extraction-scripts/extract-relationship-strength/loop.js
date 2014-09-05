
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');

var affiliates = require('./affiliates.json');
var keys = d3.keys(affiliates);
var keyID = keys.length-1;
var linkID = 0;
var finished = false;

var relationData = {};


function nextID() {
	if (finished == false) {
		if (linkID+1 < affiliates[keys[keyID]].links.length-1) {
			linkID++;
			console.log("linkID is "+ linkID);
		} else {
			if (keyID-1 > 0) {
				keyID--;
				console.log("epoch is "+ keys[keyID]);
				linkID = 0;
				if (affiliates[keys[keyID]].links.length == 0) { nextID();}
			} else {
				finished = true;
				console.log("finished!");
				clearInterval(interval);
			}
		}
	}
}

function update() {



	var affiliateID1 = affiliates[keys[keyID]].links[linkID].target_affiliate_fct_id;
	var affiliateID2 = affiliates[keys[keyID]].links[linkID].source_affiliate_fct_id;

	if (affiliateID1 == affiliateID2 ) {
		console.log("skipped, both IDs are the same!");
	} else {
		var timeFctID = keys[keyID]; 
		launchQuery(affiliateID1, affiliateID2, timeFctID);
	}
	//console.log(relationData.values());



	var outputFilename = './relationShipStrength.json';

	fs.writeFile(outputFilename, JSON.stringify(affiliates, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + outputFilename);
	    }
	});

	nextID();
}

function launchQuery (aff1, aff2, tfid) {

        var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : 'root',
          database : 'ddb_normalized', 
          port     : '8889'
        });
        connection.connect();
		var query = "SELECT affiliate_fct_items.facet_id, count(DISTINCT affiliate_fct_items.item_id) as c, affiliate_fct.value FROM affiliate_fct_items, affiliate_fct, time_fct_items WHERE affiliate_fct_items.facet_id = affiliate_fct.id AND affiliate_fct_items.item_id = time_fct_items.item_id AND time_fct_items.facet_id = (SELECT id FROM time_fct WHERE value = \""+tfid+"\") AND affiliate_fct_items.facet_id = "+aff1+" AND affiliate_fct_items.item_id IN (SELECT b.item_id FROM affiliate_fct_items as b, time_fct_items WHERE b.item_id = time_fct_items.item_id AND time_fct_items.facet_id = (SELECT id FROM time_fct WHERE value = \""+tfid+"\") AND b.facet_id = "+aff2+" ) GROUP BY affiliate_fct_items.facet_id";
        connection.query(query,
            function( error, rows ) {
            	lid = affiliates[tfid].links.map(function(m) { return m.target_affiliate_fct_id+"_"+m.source_affiliate_fct_id;}).indexOf(aff1+"_"+aff2);
            	affiliates[tfid].links[lid].common_occurrence = rows[0]['c'];
            	console.log(affiliates[tfid].links[lid]);
                connection.end();
            }
        );
}

var i = 0;
var interval = setInterval(update, 1500);



