function HistoryModel() {
	self = this;
	// debug stuff & referencing
	this.debug = window.debug;

	// generates the data-structure needed for crossfiltering and storing of the modelled history-data
	this.initDataModels();
	this.initSearch();

	this.startup = true;

	// read and set some sizes 
	this.dimensions = {
		timelineCanvas : {},
		controls : {}
	};

	this.messageBox = {
		display:false,
		title: 'test',
		type: 'info',
		progressBar: 0.0
	};

	this.options = {
		display: {}
	};

	this.viewport = {};
	this.viewport.height = $(window).height();
	this.viewport.width = $(window).width();

	this.resultList = [];

	// start the loading of the history-items
	this.initIntervalSearch();
};


/* references the DOM-objects for css-attributes and stuff */
HistoryModel
.prototype
.referencejQSelections = function() {
	this.jQSelection = {};
	this.jQSelection['timelineCanvas'] = $('svg#timelineCanvas');
	this.jQSelection['controls'] = $('div#controls');
};



HistoryModel
.prototype
.createRangeSlider = function(parameters) {
	this.sliders = {};
	this.sliders[parameters.name] = {};
};





HistoryModel
.prototype
.initIntervalSearch = function() {
	// other variables needed for searching through time
	this.interval = 1000 * 60 * 60 * 24 * 1;
	this.endTime = (new Date).getTime();
	this.startTime = this.endTime;

	// this array holds the first and last date in which between visits had been searched for
	this.dateRange = [new Date(), new Date()];
	this.dateRange[1] = new Date(this.endTime);

	// kick the search in!
	this.intervalSearch();
};


HistoryModel
.prototype
.updateMessageBox = function() 
{
	if (this.messageBox.display == true) {
		$('#messageBox').css
		({
			top: (this.viewport.height/2-$('#messageBox').innerHeight()/2) + 'px',
			left: (this.viewport.width/2-$('#messageBox').innerWidth()/2) + 'px',
			opacity: 1.0
		});

		$('#progress #bar').css({width: (this.messageBox.progressBar*100) + '%'});
		$('#title').text(this.messageBox.title);
		$('#message').text(this.messageBox.text);
	} else {
		$('#messageBox').css
		({
			top: -$('#messageBox').innerHeight()+'px',
			left: (this.viewport.width/2-$('#messageBox').innerWidth()/2) + 'px',
			opacity: 0.0
		});
	}
};




/* recursively loads the full history, starting at this point in time.
 * somehow, if we try to get the full data at once, it doesnt give reasonable results. */
HistoryModel
.prototype
.intervalSearch = function()
{
	this.messageBox.title = 'Fetching more visits';
	this.messageBox.display = true;

	this.updateMessageBox();

	console.log(this)
	this.endTime = this.startTime;
	this.startTime = this.startTime - this.interval;

	chrome.history.search({
		'text': '', 
		'startTime': self.startTime, 
		'endTime': self.endTime, 
		'maxResults': 1000000000 }, function(itemList) {
			self.parseItemList(itemList);
	});
};



HistoryModel
.prototype
.parseItemList = function(itemList) {
	//this.messageBox.display = true;
	this.messageBox.title = 'Parsing Item-List';
	this.updateMessageBox();

	if (this.debug >= 2) {
		console.log('%cParsing ' + itemList.length + ' Results.', 'color: Blue');
	}
	this.generateDomains(itemList);
	this.generateURLs(itemList);
	this.finishSearch();
};


HistoryModel
.prototype
.initSearch = function() {
	self = this;
	$('#title-search-field').keyup(
		function() {
			self.filterByTitle( $('#title-search-field').val() );
		}
	);
};



HistoryModel
.prototype
.appendMicrobox = function(posX, posY, content) {
	
	// create the actual content of the microtooltip
	domContent = $('<ul></ul>');
	// generate the list which displays the actual content
	for (key in content) {
		switch(key) {
			case 'Titel':
				element = $('<li><strong>Titel:</strong>'+content[key]+'</li>');
			break;
		}
		//element = $('<li class="'+key+'">'+content[key]+'</li>');
		domContent.append(element);
	}
	// create the microbox,
	microBox = $('<div class="microbox"></div>').css({top: posY+'px', left:posX+'px'}).append(domContent);
	// append it 
	$('#microboxes').append(microBox);		
};

HistoryModel
.prototype
.filterByTitle = function( term )
{
	self = this;
	searchResult = this.search.search(term);
	
	// reset the relevance value
	self.Visits.result.forEach( function(v,i,result){v.meta.relevance=1;} );
	// delete the existing microboxes
	$('#microboxes').children().remove();
	
	if (term != '') {
		searchResult.forEach(
			function(sV, sI, sResult) {
				//console.log(ss);		
				self.Visits.result.forEach( 
					function(v, i, result) {
						//console.log(v);
						//console.log(sV);
						if (sV.ID == v.ID) {
							posX = self.timeline.domainXScale(v.URL.url.host);
							posY = self.timeline.visitYScale(v.visitTime);
							content = {'Titel':v.title, 'URL':v.URL.url.source, 'Datum des Aufrufs': v.visitTime};
							v.meta.relevance = (( sResult.length-sI ) / sResult.length) * 20;
							self.appendMicrobox(posX, posY, content);
						}
				});
			}
		);
	}
	
	this.updateTimeline();
};


HistoryModel
.prototype
.initDataModels = function() {
	self = this;

	// this object is responsible for keeping the unique search-keywords
	this.searches = {};

	// x the URLs are stored in this crossfilter-enabled list
	this.URLs = {};
	this.URLs.all= {};
	this.URLs.cf = crossfilter();
	this.URLs.by = {};
	this.URLs.by.lastVisitTime = this.URLs.cf.dimension( function(d) { return d.lastVisitTime; });

	this.URLs.add = function(u) {
		if (self.URLs.all[u.id] == null) {
			self.URLs.all[u.id] = u;
			self.URLs.cf.add(this.URLs.all[u.id]);
			return true;
		} else {
			return false;
		}
	};

	this.URLs.exists = function(id) {
		if (self.URLs.all[id] != null) {
			return true;
		} else {
			return false;
		}
	};

	// all the Domains are stored in this crossfilter-enabled list
	this.Domains = {};
	this.Domains.all = {};
	this.Domains.cf = crossfilter();
	this.Domains.by = {};
	this.Domains.by.totalVisitCount = this.Domains.cf.dimension(function(d) { return d.totalVisitCount; });

	this.Domains.add = function(d) {
		if ( self.Domains.all[d.name] == null ) {
			self.Domains.all[d.name] = d;
			self.Domains.cf.add(self.Domains.all[d.name]);
			console.log('added Domain ' + d.name)
			return true;
		} else {
			return false;
		}
	};

	this.Domains.exists = function(hostname) {
		// console.log(this.Domains.all);
		if (self.Domains.all[hostname] != undefined) {
			return true;
		} else {
			return false;
		}
	};

	var yyDDD = d3.time.format("%y%j");
	var YYYYMMDD = d3.time.format("%Y%m%d");
	var h = d3.time.format("%H");

	// all the Visits are stored in this crossfilter-enabled list
	this.Visits = {};
	this.Visits.search = {};
	this.Visits.all = d3.map();
	this.Visits.cf = crossfilter();
	this.Visits.dimensions = {
		Day: this.Visits.cf.dimension( function(fact) {return d3.time.day.round(fact.visitTime);}),
		HourOfDay: this.Visits.cf.dimension( function(fact) {return h(fact.visitTime);}),
		//previousVisitHost: this.Visits.cf.dimension( function(fact) {return fact.previousVisit.URL.url.host;}),
		dateTimeRange: this.Visits.cf.dimension( function(fact) {return fact.visitTime;}),
		HostName: this.Visits.cf.dimension( function(fact) {return fact.URL.url.host;})
	};
	this.Visits.groupedBy = {};
};



/*
 * this function takes current data from the crossfilter and groups it
 */

HistoryModel
.prototype
.regroupDatamodel = function()
{


	// this array contains the raw results for current parameters
	this.Visits.result = 
	this.Visits.dimensions.dateTimeRange
		.top(Infinity);

	// group the visits by domain
	this.Visits.groupedBy.HostName = d3.nest()
		.key(function(d) { return d.URL.url.host; })
		.entries(this.Visits.result)
			.sort(function(b, a) {return (b.values.count-a.values.count);});


	// this temporary variable is neede because i’m
	// stupid and dont have time to fix the rest of the code
	tempEntries = d3.nest()
		.key(function(d){return d.URL.url.host})
		.rollup(function(d) {return {count:d.length, visits: d};})
		.entries(this.Visits.result);


	// nest the visits first by total visitcount, then by host
	this.Visits.groupedBy.HostAndCount = d3.nest()
		.key(function(d) {return Math.floor((d.values.count-1)/10)*10+'-'+Math.ceil(d.values.count/10)*10})
		.rollup(function(d) {

			set = d3.set();
			//console.log(d3.keys(d));
			for (i=0;i<d.length;i++) { set.add(d[i].key)}

			return {
				count: d.length,
				hosts: set,
				/////hosts: d3.keys(d3.entries(d.values)),
				values: d.sort( function(a,b){return a.values.length-b.values.length})
			}
		})
		.entries(tempEntries);


	// generate the searchIndex which enables us to search the visits via title
	options = { keys: ['title'], threshold:0.3};
	this.search = new Fuse(this.Visits.result, options);

	this.Visits.groupedBy.SearchTerm = d3.nest()
		.key(function(d) {return Math.floor((d.values.count-1)/10)*10+'-'+Math.ceil(d.values.count/10)*10})
		.rollup(function(d) {

			set = d3.set();
			//console.log(d3.keys(d));
			for (i=0;i<d.length;i++) { set.add(d[i].key)}

			return {
				count: d.length,
				hosts: set,
				/////hosts: d3.keys(d3.entries(d.values)),
				values: d.sort( function(a,b){return a.values.length-b.values.length})
			}
		})
		.entries(tempEntries);

		// generate a list of visits grouped by search-term-hashes
		this.searches.terms = d3.map();
		this.Visits.result
			.filter(function(d) {return(d.type == 'search')})
			.forEach(function(d) {
				d.query.forEach(function(q) {
					hash=djb2Code(q);
					if (self.searches.terms.has(hash) == false) {
						self.searches.terms.set(hash, [d.ID]);
					} else {
						// update the array containing the IDs
						self.searches.terms.get(hash).push(d.ID);
					}

				});
			});

	this.Visits.hostNameList = [];
	for (var i=0; i<this.Visits.groupedBy.HostName.length; i++) {
		this.Visits.hostNameList.push(this.Visits.groupedBy.HostName[i].key);
	}

	$('p#domain-count').text('Domains: ' + this.Visits.hostNameList.length);
	$('p#visit-count').text('Visits: ' + this.Visits.dimensions.HostName.top(Infinity).length);

};



/* This function generates all Domain-objects */
HistoryModel
.prototype
.generateDomains = function(itemList) {
	for (var i=0; i<itemList.length; i++)
		{

			this.messageBox.title = 'Generating Domains: ' + i + ' / ' + itemList.length;
			this.updateMessageBox();


			// This temporary URL helps with generating the Domain, since it provided neccessary methods 
			var uTemp = new URL(itemList[i]);

			// check wether this Domain already exists.
			var DomainIsNew = false;
			if ( this.Domains.all[uTemp.getDomain()] == undefined || this.Domains.all[uTemp.getDomain()] == null) { 
				DomainIsNew = true;
			}
			
			/* create a new domain, 
			 * add it to the list and return its reference
			 * or return the already existing reference.
			 */

			if (DomainIsNew) {
				var d = new Domain(uTemp);
				this.Domains.all[uTemp.getDomain()] = d; // add it to the list
				this.Domains.cf.add(d); // add it to the crossfilter
			} else {
				var d = this.Domains.all[uTemp.getDomain()]; 	// get the reference
			}

			if (DomainIsNew) {
					//console.log("%cnew Domain: " + d.name, 'color: Orange');
			} else {
					//console.log("%cKnown Domain: " + d.name, 'color: Silver');
					//this.list.Domain[uTemp.getDomain()].addVisits(uTemp);
			}
		}
	};



HistoryModel
.prototype
.generateURLs = function(itemList) {

	/* for every url in the result list */

	//$("#info-message").text("Generating URLs …");

	for (var i=0; i<itemList.length; i++)
	{


			this.messageBox.title = 'Generating URLs: ' + i + ' / ' + itemList.length;
			this.updateMessageBox();

			var uTemp = new URL(itemList[i]);
			var URLIsNew = false;

			// check wether this URL already exists
			if (this.URLs.all[uTemp.id] == null) {
				URLIsNew = true;
			}

			if (URLIsNew) {
				var u = new URL(itemList[i]); // so its a new URL, generate it and get the reference!

				this.URLs.all[u.id] = u;
				this.URLs.cf.add(u);
				
				//this.URLs.add(u);
				if (this.debug > 4) {
					console.log("%cnew URL: " + u.url.source, 'color: Orange');
				}
			} else { 
				var u = this.URLs.all[uTemp.id]; // it already exisits, so get the reference.
				if (this.debug > 4) {
					console.log("%cknown URL: " + u.url.source, 'color: red');
				}
			}
			// register the visits for the corresponding Domain
			//this.Domains.all[u.getDomain()].addURL(u);
	}
};



HistoryModel
.prototype
.finishSearch = function() {

	self = this;
	this.domainvisitMaximum = _.max(this.Domains.all, function(domain){return domain.visits;}).visits;

	//$("#info-message").text("Fetching Visits …");
	this.updateMessageBox();

	for (var key in this.URLs.all) {
		//console.log("Fetching Visits for " + this.URLs.all[key].url.source);
		if (this.URLs.all[key].hasVisits == false) {
			this.URLs.all[key].getVisits();
			this.URLs.all[key].hasVisits = true;
		}
	}


	this.dateRange[1] = new Date(this.startTime);
	//this.visitsPerDay = this.Visits.dimensions.Day.group().all();


	if (this.startup == true) {
		this.messageBox.title = 'Updating Document';
		this.updateMessageBox();
		this.initializeParameters();
		this.regroupDatamodel();
		this.initializeControls();
		this.initializeTimeline();
		this.parameters.dateTimeRange.start = this.dateRange[0];
		this.parameters.dateTimeRange.stop = this.dateRange[1];		
		this.startup = false;
		this.messageBox.display = false;
	} else {
		this.messageBox.title = 'Updating Document';
		this.updateMessageBox();
		this.updateParameters();
		this.updateControls();
		this.messageBox.display = false;
		this.controls.dateTimeRange.brush.extent([this.parameters.dateTimeRange.start, this.parameters.dateTimeRange.stop]);
		this.controls.dateTimeRange.brush.event(this.controls.dateTimeRange.gBrush.call(this.controls.dateTimeRange.brush));
		this.updateTimeline();

	//this.controls.dateTimeRange.brushed();

	}

	//this.controls.dateTimeRange.brushed();
	//this.updateControls();



};


HistoryModel
.prototype
.chainAllVisits = function() {
	this.Visits.all.forEach(function(vID, v) {
		v.constructChain();
	});

};




HistoryModel
.prototype
.initializeControls = function() {

	var self = this;

	this.controls = {};
	this.controls.dateTimeRange = {};
	this.controls.width = 150;


	this.controls.dateTimeRange.svg = 
	d3.select('svg#dateTimeRange')
		.attr({
			width: this.controls.width,
			height: this.viewport.height,
			style: 
				'left:'+(this.viewport.width-this.controls.width)+'px;'+
				'border-left:1px solid #3B3B3B;'
		});


	// this scale converts a date to a vertical position for the barchart 
	this.controls.dateTimeRange.verticalScale = d3.time.scale()
	.domain([this.dateRange[0], this.dateRange[1]])
	.range([0, this.viewport.height-45]);


	// the 'load more visits'-button
	this.controls.dateTimeRange.moreVisits = 
	this.controls.dateTimeRange.svg
		.select('g#moreVisits')
		.attr
		({
			transform: 'translate(0,'+(this.viewport.height-45)+')'
		})
		.on('click', function(d) {window.historyModel.intervalSearch();});


	$('#dateTimeRange').bind('mousewheel', function(e){

		window.historyModel.hideTooltip();
		delta = e.originalEvent.wheelDeltaY;
		e.preventDefault();
		//console.log (e);
		oldExtent = window.historyModel.controls.dateTimeRange.brush.extent();

		//newExtent = [d3.time.minute.offset(oldExtent[0], delta*1),d3.time.minute.offset(oldExtent[1], delta*-1)];

		newStart = d3.time.minute.offset(oldExtent[0], delta);
		newStop = d3.time.minute.offset(oldExtent[1], delta);

			if (newStart < newStop) {
				if (newStart < window.historyModel.dateRange[1]) { 
					console.log('is fresher!'); 
					newStart = window.historyModel.dateRange[1]; 
					window.historyModel.intervalSearch();
				};
				if (newStop > window.historyModel.dateRange[0]) {
					console.log('is older!');
					newStop = window.historyModel.dateRange[0]};
					window.historyModel.controls.dateTimeRange.brush
						.extent([newStart, newStop]);
					window.historyModel.controls.dateTimeRange.brush
						.event( window.historyModel.controls.dateTimeRange.gBrush.call(window.historyModel.controls.dateTimeRange.brush) );
						
					// search again
					if ($('#title-search-field').val() != '') {
						self.filterByTitle( $('#title-search-field').val());
					}
						
			} else {
				console.log('start>stop');
			}
	});



	// this nested function is the callback which gets called if the brush changes
	this
	.controls
	.dateTimeRange
	.brushed = function() {
		var range = self.controls.dateTimeRange.brush.extent();
		console.log('brushed!');
		delete(self.parameters.dateTimeRange);
		// updates the charts and stuff
		self.parameters.dateTimeRange = { start:range[0], stop:range[1] };
		self.updateParameters();
		self.updateTimeline();
	};

	this.controls.dateTimeRange.labelFormat = d3.time.format('%e %b %Y');

	//
	this.controls.dateTimeRange.brush = d3.svg.brush()
	.y(this.controls.dateTimeRange.verticalScale)
	.extent([this.parameters.dateTimeRange.start, this.parameters.dateTimeRange.stop])
	.on("brush", this.controls.dateTimeRange.brushed);

	// creates the vertical axis with labels for every day
	this.controls.dateTimeRange.svg
	.append('g')
	.classed('axis', true)
	.call(
		d3.svg.axis()
		.scale(this.controls.dateTimeRange.verticalScale)
		.orient('right')
		.ticks(d3.time.day, 1)
		.tickSize(50)
		.tickFormat(function(d) {var date = new Date(d); return self.controls.dateTimeRange.labelFormat(date);})
		//.tickFormat(function(d) { return d;})
	)
	.attr('transform','translate(0,0)');



	// appends the grouping for the visits per day
	this.controls.dateTimeRange.chart = this.controls.dateTimeRange.svg
	.append('g')
	.classed('dateTimeRange-chart', true);


	this.controls.dateTimeRange.gBrush = this.controls.dateTimeRange.svg.append("g")
	.classed('brush', true)
	.call(this.controls.dateTimeRange.brush);

	this.controls.dateTimeRange.gBrush.selectAll("rect")
	.attr("width", 30)
	.attr('transform', 'translate(0,0)');
};


HistoryModel
.prototype
.setDisplayMessage = function(parameters) {}



HistoryModel
.prototype
.updateControls = function() {
	self = this;

	// update the vertical time-scale
	this.controls.dateTimeRange.verticalScale
		.domain([this.dateRange[0], this.dateRange[1]]);



	// clear the existing scales
	this.controls.dateTimeRange.svg
		.select('g.axis')
		.remove();


	// creates the vertical axis with labels for every day
	this.controls.dateTimeRange.svg
	.append('g')
	.classed('axis', true)
	.call(
		d3.svg.axis()
		.scale(this.controls.dateTimeRange.verticalScale)
		.orient('right')
		.ticks(d3.time.day, 1)
		.tickSize(40)
		.tickFormat(function(d) {var date = new Date(d); return self.controls.dateTimeRange.labelFormat(date);})
		//.tickFormat(function(d) { return d;})
	);

};



HistoryModel
.prototype
.initializeTimeline = function() {

	var hostCount = this.Visits.groupedBy.HostName.length;

	// dimensions
	this.timeline = {};
	this.timeline.marginLeft = 0;
	this.timeline.width = this.viewport.width-this.controls.width;
	console.log(this.viewport.height);
	this.timeline.height = this.viewport.height;

	// dateformatter
	this.timeline.label = {};
	this.timeline.label.hour = d3.time.format('%H h');
	this.timeline.label.time = d3.time.format('%H:%M h');
	this.timeline.label.day = d3.time.format('%d. %m. %Y');
	this.timeline.label.dayAndHour = d3.time.format('%d. %m. %Y, %H:%M');       

	// create the svg-root

	console.log(this.timeline.height);
	this.timeline.svg =
	d3.select('svg#timeline')
		.attr(
		{
			width: this.timeline.width,
			height: this.timeline.height,
			style: 'left:'+this.timeline.marginLeft + 'px'
		});

	$('#timeline').bind('mousewheel', function(e){

		window.historyModel.hideTooltip();
		delta = e.originalEvent.wheelDeltaY*-1;
		e.preventDefault();
		//console.log (e);
		oldExtent = window.historyModel.controls.dateTimeRange.brush.extent();

		//newExtent = [d3.time.minute.offset(oldExtent[0], delta*1),d3.time.minute.offset(oldExtent[1], delta*-1)];

		newStart = d3.time.minute.offset(oldExtent[0], delta*-1);
		newStop = d3.time.minute.offset(oldExtent[1], delta*1);

		console.log('oldExtent[1]:'+oldExtent[1]);
		console.log('oldExtent[0]:'+oldExtent[0]);

		console.log('newStop von [1]:'+newStop);
		console.log('newStart von [0]:'+newStart);

		console.log('dateRange[0]:'+window.historyModel.dateRange[0]);
		console.log('dateRange[1]:'+window.historyModel.dateRange[1]);


			if (newStart < newStop) {
			if (newStart < window.historyModel.dateRange[1]) { console.log('is fresher!'); newStart = window.historyModel.dateRange[1]};
			if (newStop > window.historyModel.dateRange[0]) {  console.log('is older!'); newStop = window.historyModel.dateRange[0]};
			window.historyModel.controls.dateTimeRange.brush.extent([newStart, newStop]);
			window.historyModel.controls.dateTimeRange.brush.event(window.historyModel.controls.dateTimeRange.gBrush.call(window.historyModel.controls.dateTimeRange.brush));
		} else {
			console.log('start>stop');
		}
	});

	// some selectors which we later will bind the data on
	this.timeline.domainsSelector = this.timeline.svg.selectAll('g.domain');

	// this scale defines vertical the visit-position
	this.timeline.visitYScale = d3.time.scale()
	.domain([this.parameters.dateTimeRange.stop,this.parameters.dateTimeRange.start])
	.range([0,this.timeline.height]);

	// this scale defines
	this.timeline.domainXScale = d3.scale.ordinal()
	.domain(this.Visits.hostNameList)
	.range(d3.range(this.timeline.marginLeft,this.timeline.width,this.timeline.width/this.Visits.hostNameList.length));

	this.timeline.domainColorScale = 
	d3.scale.linear().domain([0, this.viewport.width]).range(['#bcbd22', '#17becf']);
};



HistoryModel
.prototype
.highlightRelatedVisits = function(domain) {
	// array filtered by referrerID


	self=this;

	function setFocus(selection) {  selection.attr('class', 'visit internalFocus'); };
	function setExternalFocus(selection) {  selection.attr('class', 'visit externalFocus').attr('height', 10); };
	function removeFocus(selection) { selection.attr('class', 'visit offFocus').attr('height', 1); };


	result = [];
	// remove highlight
	this.timeline.svg.selectAll('rect.visit').call(removeFocus);
	this.timeline.svg.selectAll('line.connection').remove();


	allVisits = window.historyModel.Visits.dimensions.dateTimeRange.top(Infinity);

	domainInternalVisits = allVisits.filter( function(d){return(d.URL.url.host==domain);} );

	domainInternalVisits
	.forEach(
		function(e) {
			self.timeline.svg.select('#visit-'+e.ID).call(setFocus);

			externalVisits = allVisits.filter( function(f){return(f.referrerID==e.ID&&f.URL.url.host!=e.URL.url.host);} );

			if (externalVisits.length>0) {

				self.timeline.svg.select('#visit-'+externalVisits[0].ID).call(setExternalFocus);


				// M 100 350 q 150 -300 300 0

				self.timeline.svg
					.append('line')
					.attr('class', 'connection')
					.attr('x1', self.timeline.domainXScale(e.URL.url.host)+'px')
					.attr('y1', self.timeline.visitYScale(e.visitTime)+'px')
					.attr('x2', self.timeline.domainXScale(externalVisits[0].URL.url.host)+'px')
					.attr('y2', self.timeline.visitYScale(externalVisits[0].visitTime)+'px')
					.attr('stroke', '#B3B3B3');

			}

		}
	);
};



HistoryModel
.prototype
.highlightRelatedSearches = function(term, originID) {
	self=this;

	function setRelation(selection) {
		selection.attr('class', 'search relation').attr('cx', (selection.attr('cx')+30)); };
	//function removeRelation(selection) { selection.attr('class', 'search'); };

	//this.timeline.svg.selectAll('rect.visit').call(removeRelation);

	if (this.searches.terms.has(djb2Code(term)) == true && term != '') {

		searchIDs = this.searches.terms.get(djb2Code(term));

		searchIDs
		.forEach(
			function(s) {
				if (originID != s) {
					console.log(originID);
					self.timeline.svg.select('#search-'+s).call(setRelation);
				}
			}
		);

	}


};


HistoryModel
.prototype
.updateTimeline = function(){

	self = this;

	this.timeline.domainsSelector = this.timeline.svg.selectAll('g.domain');
	this.timeline.domainsSelector.remove();

	this.timeline.domainsSelector = this.timeline.svg.selectAll('g.domain');

	hostCount = this.Visits.hostNameList.length;
	visitWidth = this.timeline.width/this.Visits.hostNameList.length;

	this.timeline.visitYScale
	.domain([this.parameters.dateTimeRange.stop,this.parameters.dateTimeRange.start])
	.range([0,this.timeline.height]);


	this.timeline.domainXScale
	.domain(this.Visits.hostNameList)
	.range(d3.range(this.timeline.marginLeft,this.timeline.width,this.timeline.width/this.Visits.hostNameList.length));

	//.data( d3.values(_.sortBy(this.list.Domain, function(domain){return domain.totalVisitCount})))
	// 	.data(_.sortBy(this.domainList, function(domain){return domain.totalVisitCount}))
	// manage, generate the time-axis

	this.timeline.svg.select('g.axis').remove();
	minuteRange = d3.time.minute;
	minutesInRange = minuteRange.range(this.parameters.dateTimeRange.start, this.parameters.dateTimeRange.stop, 1);

	console.log(minutesInRange.length)

	this.timeline.verticalAxis = {};


	// every 5 minutes
	if (minutesInRange.length <= 5) {
		this.timeline.verticalAxis.interval = d3.time.minute;
		this.timeline.verticalAxis.intervalFactor = 1;
		this.timeline.verticalAxis.label = this.timeline.label.time;
	}

	
	// every 5 minutes
	else if (minutesInRange.length <= 15) {
		this.timeline.verticalAxis.interval = d3.time.minute;
		this.timeline.verticalAxis.intervalFactor = 5;
		this.timeline.verticalAxis.label = this.timeline.label.time;
	}

	
	// every 15 minutes
	else if (minutesInRange.length <= 60) {
		this.timeline.verticalAxis.interval = d3.time.minute;
		this.timeline.verticalAxis.intervalFactor = 15;
		this.timeline.verticalAxis.label = this.timeline.label.time;
	} 

	
	// every 30 minutes
	else if (minutesInRange.length <= 120) {
		this.timeline.verticalAxis.interval = d3.time.minute;
		this.timeline.verticalAxis.intervalFactor = 30;
		this.timeline.verticalAxis.label = this.timeline.label.time;
	} 
	

	// every hour
	else if (minutesInRange.length <= 180) {
		this.timeline.verticalAxis.interval = d3.time.minute;
		this.timeline.verticalAxis.intervalFactor = 60;
		this.timeline.verticalAxis.label = this.timeline.label.dayAndHour;
	
	
	// every 3 hours
	} else if (minutesInRange.length >= 180 && minutesInRange.length <= 1440) {
		this.timeline.verticalAxis.interval = d3.time.hour;
		this.timeline.verticalAxis.intervalFactor = 3;
		this.timeline.verticalAxis.label = this.timeline.label.dayAndHour;

	// every 6 hours
	} else if (minutesInRange.length >= 1440 && minutesInRange.length <= 2280) {
		this.timeline.verticalAxis.interval = d3.time.hour;
		this.timeline.verticalAxis.intervalFactor = 6;
		this.timeline.verticalAxis.label = this.timeline.label.dayAndHour;

	// every day
	} else if (minutesInRange.length >= 2280 && minutesInRange.length <= 4560) {
		this.timeline.verticalAxis.interval = d3.time.hour;
		this.timeline.verticalAxis.intervalFactor = 12;
		this.timeline.verticalAxis.label = this.timeline.label.dayAndHour;

	} else if (minutesInRange.length >= 4560 ) {
		this.timeline.verticalAxis.interval = d3.time.day;
		this.timeline.verticalAxis.intervalFactor = 1;
		this.timeline.verticalAxis.label = this.timeline.label.dayAndHour;
	}

	this.timeline.svg
	.append('g')
	.classed('axis', true)
	.call(
		d3.svg.axis()
		.scale(this.timeline.visitYScale)
		.orient('left')
		.ticks(this.timeline.verticalAxis.interval, this.timeline.verticalAxis.intervalFactor)
		.tickSize(this.timeline.width-100)
		.tickFormat(function(d) { date = new Date(d); return self.timeline.verticalAxis.label(date);})
		//.tickFormat(function(d) { return d;})
	)
	.attr('transform','translate(' + this.timeline.width + ',0)');


	// create the g-elements 
	this.timeline.domainsSelector
	.data(this.Visits.groupedBy.HostName)
	.enter()
	.append('svg:g')
	.classed('domain', true)
	.attr({
		id: function (d,i) { return 'domain'; },
		transform: function(d, i) { return 'translate('+self.timeline.domainXScale(d.key)+',0)'; },
		name: function(d) { return d.name; }
	})
	.selectAll('rect.visit')
	.data( function(d) {return d.values} ) //.filter(function(f) { return (f.type == 'site')})
	.enter()
	.append('svg:rect')
	.classed('visit', true)
	.attr({
		id: function (d) {return 'visit-'+d.ID},
		y: function(d) {
			return self.timeline.visitYScale(d.visitTime)+'px';
		},
		fill: '#B3B3B3',
		// 	} else {
		// 		return self.timeline.domainColorScale(self.timeline.domainXScale(d.URL.url.host));
		// 	}
		// 	},
		x : 0,
		width: visitWidth,
		height: function(d) {
			return d.meta.relevance;
		}
	});


	// this adds the domainbar needed for selecting a domain

	this.timeline.domainBars = this.timeline.svg.selectAll('rect.domainBar');
	this.timeline.domainBars.remove();
	this.timeline.domainBars = this.timeline.svg.selectAll('g.domain').select('rect.domainBar');

	this.timeline.domainBars
	.data(this.Visits.groupedBy.HostName)
	.enter()
	.append('rect').classed('domainBar', true)
	.attr({
		id: function (d) { return 'domain-' + d.key; },
		transform: function(d) { return 'translate('+self.timeline.domainXScale(d.key)+',0)'; },
		width: visitWidth,
		height: this.viewport.height
	})
	.on('mouseover', function(d) { 
		self.displayTooltip(d3.event.clientX, d3.event.clientY, {'domain':d.key});
		self.highlightRelatedVisits(d.key);
	})
	.on('mouseout', function() { self.hideTooltip();});


	// searches

	// remove all the existing ones 
	this.timeline.svg.select('g.searches').selectAll('circle.search').remove();
	this.timeline.svg.select('g.searches').remove();
	this.timeline.svg.append('svg:g').classed('searches', true); 


	this.timeline.svg.select('g.searches')
	.data( this.Visits.groupedBy.HostName.filter(function(f) { return (f.key == 'www.google.de')}) ) // filter all entries ycept the google-ones
	.selectAll('circle.search')
	.data( function(d) { return d.values.filter(function(f) { return (f.type == 'search'); }); })
	.enter()
	.append('svg:circle')
	.classed('search', true)
	.attr({
		id: function (d) {return 'search-'+d.ID},
		cy: function(d) {
			return self.timeline.visitYScale(d.visitTime)+'px';
		},
		cx : this.viewport.width/2,
		r: visitWidth
	})
	.on('mouseover', function(d) { 
		self.displayTooltip(d3.event.clientX, d3.event.clientY, {'search':d.query.join(', ')});
		d.query.forEach(function(q) {
			self.highlightRelatedSearches(q, d.ID);
		});
	})
	.on('mouseout', function() {
		d3.selectAll('.search').attr('class', 'search').attr('cx', self.viewport.width/2);
		self.hideTooltip();
	});



	/*

		.append('rect')
	.classed('domainBar', true)
	.attr('height', this.timeline.height)
	.attr('width', visitWidth)

	*/
};


HistoryModel
.prototype
.displayTooltip = function(posX, posY, content) {

	$('#tooltip')
		.css({
			top: (posY-$('#tooltip').innerHeight()/2)+'px',
			opacity:1.0
		})
		.removeClass('left')
		.removeClass('right')
		.show();

	$('#tooltip ul')
		.children()
		.remove();

	for (key in content) {
		element = $('<li class="'+key+'">'+content[key]+'</li>');
		$('#tooltip ul').append(element);
	}

	if (posX < window.historyModel.viewport.width/2) {
		$('#tooltip')
			.addClass('left')
			.css('left', (posX+10)+'px');
	} else {
		$('#tooltip')
			.addClass('right')
			.css('left', (posX-$('#tooltip').outerWidth()-10)+'px');
	}
};

HistoryModel
.prototype
.hideTooltip = function() {
	$('#tooltip').hide();
};


HistoryModel
.prototype
.addDomainToParameter = function(domain) {
	if (this.parameters.domain[0] == domain && this.parameters.domain.length == 1) {
		delete(this.parameters.domain);
		this.parameters.domain = [];
	} else {
		this.parameters.domain.push(domain);
	}
	this.updateParameters();
	this.updateTimeline();
};



HistoryModel
.prototype
.initializeParameters = function() {

	// calculate the starting initial brush extent (the last 24 hours)
	var dayInterval = d3.time.day;
	var currentDate = this.dateRange[0];
	var previousDate = dayInterval.offset(currentDate, -1);

	// these parameters are responsible for filtering and displaying
	
	this.parameters = {};
	this.parameters = {dateTimeRange:{}};
	this.parameters.dateTimeRange.start = currentDate;
	this.parameters.dateTimeRange.stop = previousDate;

	// these are the domains which we filter by
	this.parameters.domain = [];
};



HistoryModel
.prototype
.updateParameters = function() {
	// parameters for DateTime given
	this.Visits.dimensions.dateTimeRange.filter([this.parameters.dateTimeRange.start,this.parameters.dateTimeRange.stop]);
	if (this.parameters.domain.length>0) {
		if (this.parameters.domain.length == 1) {
			this.Visits.dimensions.HostName.filter(this.parameters.domain[0]);
		} else {
			this.Visits.dimensions.HostName.filter(this.parameters.domain);
		}
	} else {
		this.Visits.dimensions.HostName.filterAll();
	}
	this.regroupDatamodel();
};