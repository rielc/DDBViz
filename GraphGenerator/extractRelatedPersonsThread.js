
fs = require('fs');
mysql = require('mysql');
d3 = require('d3');



epochsAndPersons = [];

fileIndex = 0, personIndex = 0;
personLimit = 100;

threadCount = 8;
threads = [];


saveDir = './data-extract/related-persons-in-time_fct/';
version = "3";


init = function() {

    console.log('PLEASE INSERT COIN!');


    // parse all the files
    fs.readdirSync('./data-extract/persons-in-epoch/').forEach(
        function(file, index) {
            if (file != '.DS_Store') {
                epochsAndPersons[index] = require('./data-extract/persons-in-epoch/'+file);
            }
        }
    );

    fileIndex = epochsAndPersons.length-1;

    for(var i=0; i<threadCount; i++) {
        threads.push(new ThreadedQuery(i));
    }


    launchQuery(0);
    for(var i=1; i<threadCount; i++) {
        update(i);
    }

};



launchQuery = function(threadID) {
    // if the array has content
    if( epochsAndPersons[fileIndex].items[personIndex] != undefined ) {

        var limit = 100;
        var timeFacetID = epochsAndPersons[fileIndex].epochID;
        var timeFacet = epochsAndPersons[fileIndex].epoch;
        var affiliateFacetID = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet_id;
        var affiliateFacet = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet;

        //console.log(threads[0]);

        threads[threadID].launch( timeFacetID, timeFacet, affiliateFacetID, affiliateFacet );

    } else {
        var timeFacet = epochsAndPersons[fileIndex].epoch;
        console.log('[System] > time_fct' + timeFacet +' is empty.');
    }

};



update = function(threadID) {

    // so the current query is finished?
        // are there persons left to analyze? 
        if (personIndex < epochsAndPersons[fileIndex].items.length-1 && personIndex < personLimit) {
            console.log('[System] Switching to the next Person.');
            personIndex++;
            launchQuery(threadID);
        } else {
            // are there epochs left to analyze?
            if (fileIndex > 0) {
                console.log('[System] Switching to the next Epoch.');
                fileIndex--;
                personIndex = 0;
                result = null;
                result = {};
                launchQuery(threadID);
            } else {
                // game over!
                finish();
            }
        }
    // the current query is not finished!
};



finish = function() {
        console.log('... GAME OVER!');
        // clearInterval(interval);
};



function ThreadedQuery(threadID)
{
    this.threadID = threadID;
    this.finished = true;

};

ThreadedQuery.prototype.launch = function( timeFacetID, timeFacet, affiliateFacetID, affiliateFacet )
{
    this.finished = false;

    this.timeFacetID = timeFacetID;
    this.timeFacet = timeFacet;
    this.affiliateFacetID = affiliateFacetID;
    this.affiliateFacet = affiliateFacet;

    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'ddb_normalized'
    });

    this.connection.connect();

    console.log('[Thread '+this.threadID+'] > '+'Query ( time_fct_items.facet_id='+this.timeFacetID+' && affiliate_fct_items.facet_id='+this.affiliateFacetID+' )');

    var self = this;
    //this.connection.query('SELECT affiliate_fct_items.facet_id, count(DISTINCT affiliate_fct_items.item_id) as occurrence, affiliate_fct.value FROM affiliate_fct_items, affiliate_fct, time_fct_items WHERE affiliate_fct_items.facet_id = affiliate_fct.id AND time_fct_items.item_id = affiliate_fct_items.item_id AND time_fct_items.facet_id ='+time_facet_id+' AND affiliate_fct_items.item_id IN (SELECT item_id FROM affiliate_fct_items WHERE facet_id = '+affiliate_facet_id+') GROUP BY facet_id ORDER BY occurrence DESC', 
    this.connection.query('SELECT affiliate_fct_items.facet_id, count(DISTINCT affiliate_fct_items.item_id) as occurrence, affiliate_fct.value FROM affiliate_fct_items, affiliate_fct, time_fct_items WHERE affiliate_fct_items.facet_id = affiliate_fct.id AND time_fct_items.item_id = affiliate_fct_items.item_id AND time_fct_items.facet_id='+this.timeFacetID+' AND affiliate_fct_items.item_id IN (SELECT affiliate_fct_items.item_id FROM affiliate_fct_items, time_fct_items WHERE time_fct_items.item_id = affiliate_fct_items.item_id AND affiliate_fct_items.facet_id='+this.affiliateFacetID+' AND time_fct_items.facet_id='+this.timeFacetID+') GROUP BY facet_id ORDER BY occurrence DESC LIMIT ' + personLimit,
        function( error, rows ) {
            self.person = {};
            self.person.time_fct_id = self.timeFacetID;
            self.person.time_fct = epochsAndPersons[fileIndex].epoch;
            self.person.affiliate_facet_id = self.affiliateFacetID;
            self.person.affiliate_facet = epochsAndPersons[fileIndex].items[personIndex].affiliate_facet;
            self.person.occurrence = epochsAndPersons[fileIndex].items[personIndex].occurrence;
            self.person.affiliates = rows;
            console.log('[Thread '+this.threadID+'] > '+'Found '+rows.length+' affiliates.');
            self.saveFile(this.threadID);
            self.finished = true;
            self.connection.end();
            update(self.threadID);
        }
    );
};


ThreadedQuery.prototype.saveFile = function(threadID)
{

    var threadID = threadID;
    var outputPath = saveDir+version+'/'+this.timeFacet+'/';
    var fileName = this.affiliateFacetID+'.json';

    // console.log(fileName);
    // console.log(saveDir+version+'/');
    // console.log(outputPath);
    // console.log(fs.existsSync(saveDir+version+'/'));
    // console.log(fs.existsSync(outputPath));


    if ( fs.existsSync(saveDir+version+'/') == false ) {
        fs.mkdirSync(saveDir+version+'/');
        console.log('[Thread '+threadID+'] > '+"Created directory: " + saveDir+version+'/');
    }

    if ( fs.existsSync(outputPath) == false ) {
        fs.mkdirSync(outputPath);
        console.log('[Thread] '+threadID+' > '+"Created directory: " + outputPath);
    }

    fs.writeFile( outputPath+fileName, JSON.stringify(this.person, null, 4), {flags: 'w'},
        function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('[Thread '+threadID+'] > '+"JSON saved: " + outputPath+fileName);
            }
        }
    );
};



init();
// interval = setInterval(update, 1000 );
