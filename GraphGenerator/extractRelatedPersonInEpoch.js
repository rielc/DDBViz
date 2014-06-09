
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');


epochsAndPersons = [];
nextQuery = false;
fileIndex = 0;
personIndex = 0;



init = function() {
    // parse all the files
    fs.readdirSync('./data-extract/persons-in-epoch/').forEach(
        function(file, index) {
            if (file != '.DS_Store') {
                epochsAndPersons[index] = require('./data-extract/persons-in-epoch/'+file);
            }
        }
    );

    fileIndex = epochsAndPersons.length-1;
};


launchQuery = function() {

    nextQuery = false;

    connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'ddb_normalized'
    }); connection.connect();

    //console.log(epochsAndPersons[fileIndex]);

    // if the array has content
    if( epochsAndPersons[fileIndex].items[personIndex] != undefined ) {

        var limit = 100;
        var time_facet_id = epochsAndPersons[fileIndex].epochID;
        var affiliate_facet_id = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet_id;
        console.log('Querying -> time_fct.id = '+ epochsAndPersons[fileIndex].epochID +' && affiliate_fct.id = '+ epochsAndPersons[fileIndex].items[personIndex].affiliate_facet_id);


        connection.query('SELECT affiliate_fct_items.facet_id, count(DISTINCT affiliate_fct_items.item_id) as occurrence, affiliate_fct.value FROM affiliate_fct_items, affiliate_fct, time_fct_items WHERE affiliate_fct_items.facet_id = affiliate_fct.id AND time_fct_items.item_id = affiliate_fct_items.item_id AND time_fct_items.facet_id ='+time_facet_id+' AND affiliate_fct_items.item_id IN (SELECT item_id FROM affiliate_fct_items WHERE facet_id = '+affiliate_facet_id+') GROUP BY facet_id ORDER BY occurrence DESC', 
            function( error, rows ) {
                person = {};
                person.time_fct_id = epochsAndPersons[fileIndex].epochID;
                person.time_fct = epochsAndPersons[fileIndex].epoch;
                person.from_affiliate_facet_id = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet_id;
                person.from_affiliate_facet = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet;
                person.occurrence = epochsAndPersons[fileIndex].items[personIndex].occurrence;
                person.affiliates = rows;
                connection.end();
                process.stdout.write('\n');
                console.log('Found '+rows.length+' affiliates.');
                saveFile(person);
                nextQuery = true;
            }
        );
    } else {
        nextQuery=true;
        console.log('This epoch is empty.');
        saveFile();
    }

};


saveFile = function(person) {

    var outputPath = './data-extract/related-persons-in-epoch/'+epochsAndPersons[fileIndex].epoch+'/';
    var fileName = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet_id+'.json';

    if ( fs.exists(outputPath) == false ) {
        console.log("Created directory: " + outputPath);
        fs.mkdirSync(outputPath);
    }

    fs.writeFile(outputPath+fileName, JSON.stringify(person, null, 4), {flags: 'w'},
        function(error) {
            if(error) {
            console.log(error);
            } else {
          console.log("JSON saved: " + outputPath+fileName);
            }
        }
    );

};


update = function() {

    // so the current query is finished?
    if (nextQuery == true) {
        // are there persons left to analyze? 
        if (personIndex < epochsAndPersons[fileIndex].items.length-1) {
            console.log('Switching to the next Person.');
            personIndex++;
            launchQuery();
        } else {
            // are there epochs left to analyze?
            if (fileIndex > 0) {
                console.log('Switching to the next Epoch.');
                fileIndex--;
                personIndex = 0;
                result = null;
                result = {};
                launchQuery();
            } else {
                // game over!
                finish();
            }
        }
    // the current query is not finished!
    } else {
        process.stdout.write('.');
    }
};



finish = function() {
        console.log('... FINISHED!');
        clearInterval(interval);
};



init();
launchQuery();
interval = setInterval(update, 1000 );
