// detect per regex-magic and compare through ID list, what type the affilaite is
function detectType (n) {
  var type = undefined;
  if (
      n.affiliate_fct.match(new RegExp("[M|m]useum", "gi")) ||
      n.affiliate_fct.match(new RegExp("[M|m]inesterium", "gi")) || 
      n.affiliate_fct.match(new RegExp("[G|g]ericht", "gi")) || 
      n.affiliate_fct.match(new RegExp("([I|i]nstitut)+", "gi")) || 
      n.affiliate_fct.match(new RegExp("([M|m]useen)+", "gi")) || 
      n.affiliate_fct.match(new RegExp("(Technoseum)+", "gi")) || 
      n.affiliate_fct.match(new RegExp("([S|s]ammlung)+", "gi")) || 
      n.affiliate_fct.match(new RegExp("([A|a]rchiv)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([A|a]mt)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("(Landesbibliothek)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([U|u]niversitätsbibliothek)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([S|s]taatsbibliothek)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("[B|b]]ibliothek", "gi")) ||
      n.affiliate_fct.match(new RegExp("([D|d]epartement)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([R|r]egierung)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([G|g]emeinschaft)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("[U|u]niversität", "gi")) ||
      n.affiliate_fct.match(new RegExp("([F|f]orum)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([S|s]tiftung)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([N|n]achlass)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([H|h]ochschule)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("(VEB)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("(AG)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("(GmbH)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([G|g]rafschaft)+", "gi")) ||
      n.affiliate_fct.match(new RegExp("([K|k]loster)+", "gi")) ||
      self.organisationIDs.indexOf(n.affiliate_fct_id) > -1 
    ) {
      type = 'organisation';
  }

  if (
      name.match(new RegExp("\\(Fotograf\\)", "gi")) ||
      name.match(new RegExp("Herzog", "gi")) || 
      name.match(new RegExp("König", "gi")) ||
      name.match(new RegExp("Politiker", "gi")) ||
      name.match(new RegExp("\\([0-9]{0,4}\-[0-9]{0,4}\\)", "gi"))
      ) {
      type = 'person';
  }
  return type;}
function calcDate (year, end) {
  var d2 = new Date(0);
  if (end) { d2.setUTCFullYear(year, 11, 31); } else { d2.setUTCFullYear(year); }
    var d1 = new Date(1970,0,01);
    d1 = d1.getTime() / 86400000;
    d2 = d2.getTime() / 86400000;
  return parseInt(new Number(d2 - d1).toFixed(0))+ 719164 ;}
function clearName (name) {
  var newname = "";
  if (name.indexOf(",") > -1) {
    var strings = name.split(",");
    newName = strings[1]+" "+strings[0];
  } else {
    newName = name;
  }
  if (name.indexOf("(Fotograf)") > -1) {
    newName = newName.replace("(Fotograf)", "");
  }
  newName = newName.replace( new RegExp("\\([0-9]{0,4}\-[0-9]{0,4}\\)", "gi"), ""); // clear the years out of the name
  return newName; };

DDBAffiliateNetwork = function()
{

  this.svgWidth = $(window).width();

  this.timeFcts = ['time_36100', 'time_36200', 'time_36300', 'time_36400', 'time_36500', 'time_36600', 'time_36700', 'time_36800', 'time_36900', 'time_36950', 'time_37100', 'time_37200', 'time_37300', 'time_37400', 'time_37500', 'time_37600', 'time_37700', 'time_37800', 'time_37900', 'time_37950', 'time_38100', 'time_38200', 'time_38300', 'time_38400', 'time_38500', 'time_38600', 'time_38700', 'time_38800', 'time_38900', 'time_38950', 'time_39100', 'time_39200', 'time_39300', 'time_39400', 'time_39500', 'time_39600', 'time_39700', 'time_39800', 'time_39900', 'time_39950', 'time_60200', 'time_60300', 'time_60400', 'time_60500', 'time_60600', 'time_60700', 'time_60800', 'time_60900', 'time_61000', 'time_61105', 'time_61145', 'time_61205', 'time_61245', 'time_61305', 'time_61345', 'time_61405', 'time_61445', 'time_61505', 'time_61545', 'time_61605', 'time_61645', 'time_61705', 'time_61745', 'time_61807', 'time_61825', 'time_61847', 'time_61875', 'time_61907', 'time_61925', 'time_61947', 'time_61975', 'time_62010', 'time_62020', 'time_62030', 'time_62040', 'time_62050', 'time_62060', 'time_62070', 'time_62080', 'time_62090', 'time_62095', 'time_62110', 'time_62120'];
  this.timeNames = ['40. Jahrhundert vor Christus', '39. Jahrhundert vor Christus', '38. Jahrhundert vor Christus', '37. Jahrhundert vor Christus', '36. Jahrhundert vor Christus','35. Jahrhundert vor Christus', '34. Jahrhundert vor Christus', '33. Jahrhundert vor Christus', '32. Jahrhundert vor Christus', '31. Jahrhundert vor Christus', '30. Jahrhundert vor Christus', '29. Jahrhundert vor Christus', '28. Jahrhundert vor Christus', '27. Jahrhundert vor Christus', '26. Jahrhundert vor Christus', '25. Jahrhundert vor Christus', '24. Jahrhundert vor Christus', '23. Jahrhundert vor Christus', '22. Jahrhundert vor Christus', '21. Jahrhundert vor Christus', '20. Jahrhundert vor Christus', '19. Jahrhundert vor Christus', '18. Jahrhundert vor Christus', '17. Jahrhundert vor Christus', '16. Jahrhundert vor Christus', '15. Jahrhundert vor Christus', '14. Jahrhundert vor Christus', '13. Jahrhundert vor Christus', '12. Jahrhundert vor Christus', '11. Jahrhundert vor Christus', '10. Jahrhundert vor Christus', '9. Jahrhundert vor Christus', '8. Jahrhundert vor Christus', '7. Jahrhundert vor Christus', '6. Jahrhundert vor Christus', '5. Jahrhundert vor Christus', '4. Jahrhundert vor Christus', '3. Jahrhundert vor Christus', '2. Jahrhundert vor Christus', '1. Jahrhundert vor Christus', '1. Jahrhundert', '2. Jahrhundert', '3. Jahrhundert', '4. Jahrhundert', '5. Jahrhundert', '6. Jahrhundert', '7. Jahrhundert', '8. Jahrhundert', '9. Jahrhundert', '1001 bis 1050', '1051 bis 1100', '1101 bis 1150', '1151 bis 1200', '1201 bis 1250', '1251 bis 1300', '1301 bis 1350', '1351 bis 1400', '1401 bis 1450', '1451 bis 1500', '1501 bis 1550', '1551 bis 1600', '1601 bis 1650', '1651 bis 1700', '1701 bis 1725', '1726 bis 1750', '1751 bis 1775', '1776 bis 1800', '1801 bis 1825', '1826 bis 1850', '1851 bis 1875', '1876 bis 1900', '1901 bis 1910', '1911 bis 1920', '1921 bis 1930', '1931 bis 1940', '1941 bis 1950', '1951 bis 1960', '1961 bis 1970', '1971 bis 1980', '1981 bis 1990', '1991 bis 2000', '2001 bis 2010', '2011 bis 2020'];
  this.parameters = { timeFct : "", affiliateMinOccurrence : 40 };

  this.organisationIDs = [11511,1285,6655,6653,41150,3100,21070,4572,35266,35265,6160,4321,13435,9213,16020,13118,5810,16694,226,30557,210,13368,10276,10354,40311,1483,26161,35283,2026,629,6062,8875,20319,20318,10216,20266,23103,3454,179,429,2038,6011,1194,4973,9584,1756,4812,14080,24533,9543,5928,1404,1402,4696,1563,9893,1432,68113,5552,1001,3059,131,1065,2845,205,5022,75476,6822,5306,2295,1261,25991,195,8726,1514,129,7942,12654,13570,15064,3175,8764,2492,15572,336,1850,918,25077,11882,21203,5067,7180,4415,4413,574,1442,27026,136675,1827,792,14011,35245,8574,40290,19050,9848,4998,17484,2337,5442,439,5276,109,50532,846,87628,104538,25118,154186,30724,2216,7238,168844,35115,2139,4201,53735,10028,32944,6485,1527];

  this.nodePositioning = "network";
  this.minOccurrence = 40;
  this.maxNodeCount =0;
  this.maxNodeCount =100;

  this.networkWidth = $(window).width(), 
  this.networkHeight = $(window).height()-$(".header").outerHeight(true);

  this.globalMaxOccurence = 0,
  this.globalMinOccurence = 1000;

  this.highlightedAffiliates = [];
  this.currentTimeFacetID = this.timeFcts.length-1;

  // append svg and resize
  this.svg = d3.select("#network")
    .attr("width", this.networkWidth)
    .attr("height", this.networkHeight); //this.networkHeight

  this.histogramBinAxis = this.svg
    .append("g")
    .attr("class", "histogram-bin-axis")
    .selectAll("g.bin");
    

  this.generateOverlay = function() {
    this.overlay = d3.select("#overlay svg");
    this.overlay
      .style("display", "inline")
      .style("left", 0)
      .style("top", $(".header").outerHeight(true))
      .style("width", $(window).width())
      .style("height", $(window).height()-$(".header").outerHeight(true))
      .selectAll("*").remove();

 
      var infos = [];

      // affiliate
      var exampleNode = this.currentNodes.values().sort(function (a, b) {return self.nodeValues.get(b.affiliate_fct_id).affiliate_fct_occurrence - self.nodeValues.get(a.affiliate_fct_id).affiliate_fct_occurrence;})[0];
      this.tip.show(exampleNode, d3.select("#affiliate_fct_id-" + exampleNode.affiliate_fct_id).call(this.highlightNode)[0][0]);
      infos.push({
        x : self.transformX(exampleNode),
        y : self.transformY(exampleNode),
        text : "Person / Organisation",
        r: 0
      });

      // links
      var exampleLink = this.currentLinks
        .values()
        .filter(function (l) { return l.source.affiliate_fct_id != l.target.affiliate_fct_id;})
        .sort(function (a, b) { return (Math.abs(b.target.x-b.source.x)+Math.abs(b.target.y-b.source.y))-(Math.abs(a.target.x-a.source.x)+Math.abs(a.target.y-a.source.y))})[0];
      var linkPosition = { x: (exampleLink.target.x+exampleLink.source.x)/2, y: (exampleLink.target.y+exampleLink.source.y)/2 }
      d3.select("#link-"+exampleLink.source.affiliate_fct_id+'_'+exampleLink.target.affiliate_fct_id).call(this.highlightLink);
      infos.push({
        x : self.transformX(linkPosition),
        y : self.transformY(linkPosition),
        text : "Gemeinsames vorkommen",
        r: 0
      });

      infos.push({
        x : $(".timeline-tip").position().left+15,
        y : $(".timeline-tip").position().top+45,
        text : "Vorheriger Zeitraum",
        r: 20
      });

    this.overlay
      .selectAll("g")
      .data(infos)
      .enter()
      .append("g")
      .attr("transform", function(d){
        return "translate("+d.x+","+d.y+"), rotate(10)";
      })
      .transition()
      .delay(function(d,i){
          return i*50;
      }).each("end", function (d) {
          var infoTip = d3.select(this);
          var p = d.x > self.networkWidth / 2;

          infoTip
            .append("circle")
            .attr("r", function(d){
              return d.r;
            });

          infoTip
            .append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", p ? -10 : 10)
            .attr("y2", 10);

          var background = infoTip.append("rect");

          var text = infoTip
            .append("text")
            .text(function(d){
              return d.text;
            });

          var bb = text.node().getBBox();

          text.attr("transform", "translate("+(p ? (-bb.width-8) : (4+4))+","+15+")");

          background
            .attr("width", bb.width+(4*2))
            .attr("height", bb.height)
            .attr("transform", "translate("+(p ? (-bb.width-12) : 4)+","+(15-(bb.height)+4)+")");

          infoTip
            .transition()
            .attr("transform", function(d){
              return "translate("+d.x+","+d.y+"), rotate(0)";
            });
        });
  };
    //generatethis.Overlay();

  this.resizeWindow = function () {
    // fetch the new sizes
    this.networkWidth = $(window).width(), 
    this.networkHeight = $(window).height()-$(".header").outerHeight(true);
    this.svg
      .attr("width", this.networkWidth)
      .attr("height", this.networkHeight);

    $("#network").css({"top":$(".header").outerHeight(true)});

  this.svg = d3.select("#network")
    .attr("width", this.networkWidth)
    .attr("height", this.networkHeight); //this.networkHeight

  this.force.size([this.networkWidth, this.networkHeight]);};

  this.zoom = function (d) {
    if (self.force.alpha() == 0) {
      self.affiliates
        .attr("cx", function(d) { return self.transformX(d)} )
        .attr("cy", function(d) { return self.transformY(d)} );
      self.links
        .attr("x1", function(d) { return self.transformX(d.source); })
        .attr("x2", function(d) { return self.transformX(d.target); })
        .attr("y1", function(d) { return self.transformY(d.source); })
        .attr("y2", function(d) { return self.transformY(d.target); });
      self.clickableLinks
        .attr("x1", function(d) { return self.transformX(d.source); })
        .attr("x2", function(d) { return self.transformX(d.target); })
        .attr("y1", function(d) { return self.transformY(d.source); })
        .attr("y2", function(d) { return self.transformY(d.target); });
    }
  };

  this.transformX = function (d) { return this.zoomXScale(d.x); }
  this.transformY = function (d) { return this.zoomYScale(d.y); }

  this.init = function() {

    self = this;

    this.data = {};
    this.version = 'version-4';

    this.timelineIDs = [];
    this.timelineSum = [];

    this.radiusScale = d3.scale.log();

    // create the force-directed-graph
    this.force = d3.layout.force()
      .charge(function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence)*self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence)*-1; })
      .friction(0.7)
      .linkDistance(function (d) { return self.radius(self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence) + 20 + self.radius(self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence)})
      .size([  this.networkWidth, this.networkHeight]);

    // data storages
    this.allNodes = d3.map();
    this.currentNodes = d3.map();
    this.nodeValues = d3.map();
    this.currentLinks = d3.map();

    // init ZOOM
    this.zoomXScale = d3.scale.linear()
      .domain([0, this.networkWidth])
      .range([0, this.networkWidth]);
    this.zoomYScale = d3.scale.linear()
      .domain([0, this.networkHeight])
      .range([this.networkHeight, 0]);
    this.svg.call(d3.behavior.zoom().x(this.zoomXScale).y(this.zoomYScale).scaleExtent([1, 8]).on("zoom", this.zoom));

    // christophers awesome help overlay 
    d3.select('.help')
      .on("click", function (d) {
        d3.select(".help").attr("class", "help active");
        self.generateOverlay();
      });

    d3.select('#overlay')
      .on("click", function (d) {
        d3.select(".help").attr("class", "help");
        self.tip.hide();
        self.overlay.style("display", "none");
        self.affiliates.call(self.resetNode);
        self.links.call(self.resetLink);
      });


    // Initialize standard  tooltip
    this.tip = d3.tip()
      .attr('class', 'd3-tip')
      .html( function (d) {
        var content = '<h3>'+clearName(d.affiliate_fct)+'</h3><p>'+self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence+' Einträge</p>'; 
        return content;
      });
    this.svg.call(this.tip); 

    // Initialize neighbour tooltip
    this.sourceTip = d3.tip().attr('class', 'd3-tip source-tip').html( function (d) { return '<h3>'+d.affiliate_fct+'</h3><p>'+self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence+' Einträge</p>'; } );
    this.targetTip = d3.tip().attr('class', 'd3-tip target-tip').html( function (d) { return '<h3>'+d.affiliate_fct+'</h3><p>'+self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence+' Einträge</p>'; } );
    this.svg.call(this.sourceTip);
    this.svg.call(this.targetTip);

    this.parameters.timeFct = this.timeFcts[0];

    jQuery.getJSON( "./data/detail-20.json", function (result) {
      self.data = result;
      self.collectAllNodes();
      self.initTimeline();
      self.resizeWindow();
      self.collectNewNodes(self.currentTimeFacetID, self.timeFcts.length);
      d3.select(".subheader")
        .transition()
        .delay(1000)
        .duration(1000)
        .style("opacity", 1.0);

      d3.select(".subheader h1")
        .transition()
        .delay(2000)
        .duration(500)
        .style("opacity", 1.0);

      d3.select("#description")
        .transition()
        .delay(3000)
        .duration(500)
        .style("opacity", 1.0);

        window.setTimeout(function() {
        $('.subheader').mouseover( function() {
          $(".timeline-tip").attr("class", "timeline-tip active");
          $("#time-facet-name").css( {"background-color": "#bf8f9f", "color": "#363636", "padding":"10px 10px 14px 10px"} );
          an.resizeWindow();  
        });
        $('#network').mouseover( function() {
          $(".timeline-tip").attr({"class": "timeline-tip inactive"});
          $("#time-facet-name").css( {"background-color": "transparent", "color": "#ffffff", "padding":"0"} );
          an.resizeWindow();
        });
        $('.subheader').mouseover();
        }, 5000);


    });


    // simulation updates
    this.force.on("tick", function (e) {
      self.nodeValues.keys().forEach(function (id) {
        self.nodeValues.get(id).networkPosition = {
          x : self.currentNodes.get(id).x,
          y : self.currentNodes.get(id).y
        };
      });

      switch(self.nodePositioning) {
        case "network" :
          // update the position of the nodes
          self.affiliates
            .attr("cx", function (d) { if (!d.fixed) {return self.transformX(d);}} )
            .attr("cy", function (d) { if (!d.fixed) {return self.transformY(d)}} );
          // update the position of the visible links
          self.links
            .attr("x1", function (d) { return self.transformX(d.source); })
            .attr("x2", function (d) { return self.transformX(d.target); })
            .attr("y1", function (d) { return self.transformY(d.source); })
            .attr("y2", function (d) { return self.transformY(d.target); });
          // update the position of the clickable links
          self.clickableLinks
            .attr("x1", function (d) { return self.transformX(d.source); })
            .attr("x2", function (d) { return self.transformX(d.target); })
            .attr("y1", function (d) { return self.transformY(d.source); })
            .attr("y2", function (d) { return self.transformY(d.target); });
        break;
        case "sortByOccurrence" : break;
        }
      });};
  this.extractQueryDates = function (t) {
    var start=0,end=0;
    if(t.indexOf("Jahrhundert") > -1) {
      var s = t.split(". Jahrhundert");
      start = parseInt(s[0]+"00");
      start = t.indexOf("vor Chri") > -1 ? start*-1 : start-100;
      end = start+100;
    }
    if(t.indexOf("bis") > -1){
      var s = t.split(" bis ");
      start = s[0];
      end = s[1];
    }
    this.endDate = calcDate(start, false);
    this.startDate = calcDate(end, true);};
  this.simpleTimename = function (t) {
    var timeName = t;
    if(timeName.indexOf("vor Christus") > -1){ timeName = "-"+timeName.replace(" v. Chr.",""); }
    if(timeName.indexOf("Jahrhundert") > -1){ var s = timeName.split(". Jahrhundert"); timeName = s[0]+"00"; }
    if(timeName.indexOf("bis") > -1){  var s = timeName.split(" bis "); timeName = s[0].toString(); }
    timeName = timeName.replace(" ","");
    if(timeName.charAt(timeName.length-1) == "1"){ timeName = timeName.replace("01","00"); }
    return timeName;};
  this.initTimeline = function () {

    this.timelineWidth = 1120,  this.timelineHeight = 80;
    this.brushWidth = (self.timelineWidth/self.timeNames.length)-2;

    var margin = 20;

    this.brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);

    var brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);

    function brushEvent () {

      console.log(d3.mouse(this)[0]);
      d0 = Math.round(self.brushScale.invert( d3.mouse(this)[0]) );
      //console.log("asdasd" + d3.mouse(d3.select("#timeline"))[0]);

      d1=d0+1;
      if (d0 > self.timeFcts.length-1) { d0 = self.timeFcts.length-1; d1 = self.timeFcts.length-0; }
      if (d0 < 1) { d0 = 0; d1 = 1; }

      self.currentTimeFacetID = d0;
      d3.select(this).call(self.brush.extent([self.currentTimeFacetID, d1]));

      console.log(self.currentTimeFacetID+","+d1);

      d3.selectAll(".time-facet-labels").style("fill", "#363636");
      d3.selectAll(".time-facet-ticks").style("fill", "#363636");
      d3.select(".time-facet-label-"+self.timeFcts[self.currentTimeFacetID]).style("fill", "a40539");
      d3.select(".time-facet-tick-"+self.timeFcts[self.currentTimeFacetID]).style("fill", "a40539");
      d3.select(".extent").attr("width", self.brushWidth);

      self.collectNewNodes(self.currentTimeFacetID, d1);
    }

    var yScale = d3.scale.linear()
      .domain([0, this.maxNodeCount])
      .range([0, 30]);

    this.timeline = d3.select("#timeline")
      .attr("width", this.timelineWidth)
      .attr("height", this.timelineHeight);

    this.timeline
      .append("line")
      .attr("x1", 0)
      .attr("x2", this.timelineWidth)
      .attr("y1", this.timelineHeight/2+6)
      .attr("y2", this.timelineHeight/2+6)
      .style("stroke", "#bf8f9f")
      .style("stroke-width", 3)
      .style("shape-rendering", "crispEdges");

    this.brush = d3.svg.brush()
      .x(this.brushScale)
      .extent([this.timeFcts.length-1, this.timeFcts.length])
      .on("brush", brushEvent);

    this.ticks = this.timeline.append('g')
      .attr('id', 'ticks')
      .selectAll('rect')
      .data(this.timeFcts);

    this.gBrush = this.timeline.append("g")
        .attr("class", "brush")
        .call(this.brush);

    this.gBrush.selectAll("rect")
      .attr("height", 50)
      .attr('transform', 'translate(0,0)')
      .style('fill-opacity', 1.0)
      .style("fill", "#a40539");

    var labelWhitelist = [0, 5, 10, 15, 20, 25, 30, 35, 40, 44, 49, 51, 53, 55, 57, 59, 61, 63, 67, 71, 81];

    this.ticks
      .enter()
      .append('rect')
      .attr("class", function (d, i) { return "time-facet-ticks time-facet-tick-"+self.timeFcts[i]; })
      .attr('x', function (d, i) { return self.brushScale(i); } )
      .attr('y', 45)
      .attr('width', function (d, i) { return self.brushWidth; })
      .attr('height', 0 )
      .attr('fill', '#363636')
      .attr('fill-opacity', 1)
      .style("shape-rendering", "crisEdges")
      .transition()
      .duration(100)
      .delay(function(d, i) { return 6000+i*50 })
      .attr('height', function (d, i) { if (self.data[d] != undefined) { return yScale(self.data[d].nodes.length); } else { return 0; }} )
      .attr('y', function (d, i) { if (self.data[d] != undefined) { return 45-yScale(self.data[d].nodes.length); } else { return 0; }} );

    this.labels = this.timeline.append('g')
      .selectAll('text')
      .data(this.timeNames)
      .enter()
      .append('text')
      .attr("class", function (d, i) { return "time-facet-labels time-facet-label-"+self.timeFcts[i]; })
      .text(function (d, i) { if (labelWhitelist.indexOf(i) != -1 || i >=88) {return self.simpleTimename(d); }})
      .attr("transform", function (d,i) { return "translate("+(self.brushScale(i)+8)+",52)rotate(-90)"})
      .attr("font-family", "KarbidWeb, sans-serif;")
      .attr("text-anchor", "end") 
      .attr("font-size", 10)
      .attr("stroke", "none")
      .attr("font-weight", 400)
      .attr("fill", "#363636")
      .style('fill-opacity', 0)
      .transition()
      .duration(100)
      .delay(function(d, i) { return 6000+i*50 })
      .style('fill-opacity', 1);

      d3.select(".extent").style("fill-opacity", 0.3).attr("height", 45).style("cursor", "col-resize");
      d3.select(".background").style("cursor", "col-resize");
      d3.selectAll(".resize").style("cursor", "col-resize");};
  this.collectAllNodes = function () {

    // get all keys and extract the unused keys (as defined by the timeline)
    var keys = d3.keys(this.data);
    var unused = _.difference(keys, this.timeFcts);

    // walk through all epochs
    for (var i=0; i<keys.length; i++)
    {
      var nodes = this.data[keys[i]].nodes;
      var links = this.data[keys[i]].links;

    // but make sure the ignored epochs are not used
      if (unused.indexOf(keys[i]) == -1) {
        // generate container with id, name and type for every node in all epochs
        nodes.forEach(function(n) {
          if (self.allNodes.has(n.affiliate_fct_id) == false) {
            self.allNodes.set( n.affiliate_fct_id, {
                affiliate_fct_id : n.affiliate_fct_id,
                affiliate_fct : n.affiliate_fct,
                type : undefined
              }
            );
          }
        });

        // update the minimum/maximum occurrences as reference for scales
        var currentMax = d3.max(nodes, function (nv) { return nv.affiliate_fct_occurrence; });
        var currentMin = d3.min(nodes, function (nv) { return nv.affiliate_fct_occurrence; });
        if (currentMin != undefined && currentMax != undefined) {
          if (this.globalMaxOccurence<currentMax) { this.globalMaxOccurence = currentMax; }
          if (this.globalMinOccurence>currentMin && currentMin !=0) { this.globalMinOccurence = currentMin; }
          // update the scale
        }

        // get min/max node count
        if (this.maxNodeCount<nodes.length) { this.maxNodeCount = nodes.length; }
        if (this.minNodeCount>nodes.length) { this.minNodeCount = nodes.length; }

      }

      this.radiusScale = d3.scale.log(100).domain([this.globalMinOccurence, this.globalMaxOccurence]).range([1, 40]);

    }};
  this.collectNewNodes = function (e0, e1) {
    // prevent to refresh if the ids did not change
    if (this.timelineIDs[0] != e0 || this.timelineIDs[1] != e1) {

      this.timelineDirection  = this.timelineIDs[0] < e0 ? "future" : "past";
      this.timelineIDs[0] = e0;
      this.timelineIDs[1] = e1;

      var keys = [];
      var newNodes = d3.map();

      // sum the timeranges and put into paragraph
      this.timelineSums = [];
      for (var i=e0; i==e0; i++) {
        
        keys.push(this.timeFcts[i]);
        this.timelineSums.push(this.timeNames[i]);

        // extract the date
        this.extractQueryDates(this.timeNames[i]);

        // gramatically awesome description
        var preposition = " im ";
        //if (i<10) { preposition = " während des "; }
        if (i>47) { preposition = " von "; }
        d3.select("#preposition").text(preposition);
        d3.select("#time-facet-name").text(this.timelineSums.join(', '));
      }


      // update the node data
      this.nodeValues = d3.map();
      for (var i=0; i<keys.length; i++) {
        var nodes = this.data[keys[i]].nodes;
        nodes.forEach(function (n) {
          if (self.nodeValues.has(n.affiliate_fct_id) == true) {
            self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence = n.affiliate_fct_occurrence;
            //self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_sum+=n.affiliate_fct_occurrence;
            //self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_per_time_fct[keys[i]] = n.affiliate_fct_occurrence
          } else {
            self.nodeValues.set(n.affiliate_fct_id, {
              affiliate_fct_occurrence : n.affiliate_fct_occurrence,
              affiliate_fct_type: detectType(n)
            });
          }
        });
      }


      // generate the new nodelist which will be compared
      for (var i=0; i<keys.length; i++) {
        var nodes = this.data[keys[i]].nodes; // .filter(function (n) { return self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_sum > self.minOccurrence;});
        nodes.forEach(function(n) {
          if (newNodes.has(n.affiliate_fct_id) == false) {
            newNodes.set( n.affiliate_fct_id, {
                affiliate_fct_id : n.affiliate_fct_id,
                affiliate_fct : n.affiliate_fct }
            );
          } else {

          }
        });
      }

      // remove and add nodes to the current graph
      var keysToRemove = _.difference(this.currentNodes.keys(), newNodes.keys());
      var keysToAdd = _.difference(newNodes.keys(), this.currentNodes.keys());

      keysToRemove.forEach(function (k) {
        self.currentNodes.remove(k);
      });

      keysToAdd.forEach(function (k) {
        self.currentNodes.set(k, self.allNodes.get(k));
      });

      // generate current links
      this.currentLinks = d3.map();
      // for all time-fcts
      for (var i=0; i<keys.length; i++) {
        var links = this.data[keys[i]].links;
        links.forEach(function (l) {
          var linkID = l.source_affiliate_fct_id+'_'+l.target_affiliate_fct_id;
          if (self.currentLinks.has(linkID) == false) 
            self.currentLinks.set(linkID, {
              source : self.currentNodes.get(l.source_affiliate_fct_id),
              target : self.currentNodes.get(l.target_affiliate_fct_id)
            });
        });
      }

      this.force
        .nodes( this.currentNodes.values() )
        .links( this.currentLinks.values() );
      this.force.start();

      var maxOccurence = d3.max(this.nodeValues.values(), function (nv) {
        return nv.affiliate_fct_occurrence;
      });

      var minOccurence = d3.min(this.nodeValues.values(), function (nv) {
        return nv.affiliate_fct_occurrence;
      });

      /*

      this.horizontalScale = d3.scale.log(2).domain([minOccurence, maxOccurence]).range([ , this.networkWidth-200]);

      var binTemplate = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 25000, 50000, 75000, 100000, 125000];
      var bins = binTemplate.filter(function (e) { return (e<maxOccurence)});
      bins.push(binTemplate[bins.length]);

      hist = d3.layout.histogram()
        .value(function (n) { return self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence; })
        .range([0, bins[bins.length-1]])
        .bins(bins);

      var vert = d3.scale.linear()
        .domain([0, 1])
        .range([200, this.networkHeight-50]);

      var hor = d3.scale.linear()
        .domain([0, bins.length])
        .range([this.networkWidth/2-600, this.networkWidth/2+600]);

      this.hist = hist(this.currentNodes.values());

      var horaxis =  d3.svg.axis().scale(hor);

      this.hist.forEach( function (bin, i) {
        bin.forEach( function (node) {
          self.nodeValues.get(node.affiliate_fct_id).sortedPosition = {
            x : hor(i),
            y : vert.domain([bin.x+bin.dx, bin.x])(self.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence)
          };
        });
      });


      this.histogramBinAxis.data(bins);

      this.histogramBinAxis
        .enter()
        .append("g")
          .attr("class", "bin")
          .append("line")
          .attr("x1", horaxis)
          .attr("x2", horaxis)
          .attr("y1", vert.domain([0,1])(0))
          .attr("y2", vert.domain([0,1])(1));

      this.histogramBinAxis
        .exit()
        .remove();

      */

      this.load();

    } else {
    }};
  this.getNeighbours = function (a, currentHop) {

    console.log(a);
    console.log(currentHop);

    self = this;

      self.allNeighbours.add(a.affiliate_fct_id);
      var neighbourLinks  = this.currentLinks.values().filter(function (n) { return (n.source.affiliate_fct_id == a.affiliate_fct_id || n.target.affiliate_fct_id == a.affiliate_fct_id)});

        // this.allNeighbours = d3.set();
        // this.neighbours = [d3.set(),d3.set(),d3.set(),d3.set()];
        // this.neighbours[0].add(data.affiliate_fct_id);
        // this.getNeighbours(data, 1);

        // this.neighbours[0].values().forEach( function(id) {
        //    d3.select("#affiliate_fct_id-" + id).style("stroke-weight", "6");
        // });
        // this.neighbours[1].values().forEach( function(id) {
        //    d3.select("#affiliate_fct_id-" + id).style("wstroke-weight", "4");
        // });
        // this.neighbours[2].values().forEach( function(id) {
        //    d3.select("#affiliate_fct_id-" + id).style("stroke-weight", "2");
        // });
        // this.neighbours[3].values().forEach( function(id) {
        //    d3.select("#affiliate_fct_id-" + id).style("stroke-weight", "1");
        // });

        console.log(neighbourLinks);

        neighbourLinks.forEach( function (n) {
        if (n.source.affiliate_fct_id != a.affiliate_fct_id) {
          if (self.allNeighbours.has(n.source.affiliate_fct_id) == false) {

            self.neighbours[currentHop].add(n.source.affiliate_fct_id);
            self.allNeighbours.add(n.source.affiliate_fct_id)
            if (currentHop < 3) { self.getNeighbours(n.source, currentHop+1); }
          }
        }
        if (n.target.affiliate_fct_id != a.affiliate_fct_id) {
          if (self.allNeighbours.has(n.target.affiliate_fct_id) == false) {

            self.neighbours[currentHop].add(n.target.affiliate_fct_id);
            self.allNeighbours.add(n.target.affiliate_fct_id)

            if (currentHop < 3) { self.getNeighbours(n.target, currentHop+1); }
          }
        }
      });};
  this.switchNodepositioning = function (mode) {

    switch(mode) {
      case "network" :

        this.nodePositioning = "network";

        this.affiliates
          .call(function (d,i) { d.fixed=false; if(i==0){ self.force.stop();} })
          .transition()
          .duration(1000)
          .attr("cx", function (d) { return d.x;} )
          .attr("cy", function (d) { return d.y;} )
          .call(function (d,i) { if(i==d.length-1){ self.force.start();} });

          //this.updateNodes();

      break;
      case "sortByOccurrence" :

        this.nodePositioning = "sortByOccurrence";
        this.links.remove();
        this.updateNodes();
      break;

    }};
    this.load = function () {

    // selection
    this.affiliates = this.svg
      .select("g#nodes")
      .selectAll(".affiliate")
      .data(this.force.nodes() , function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id; } );

      this.updateNodes();
      this.enterNodes();

    // remove affiliates
    this.affiliates
      .exit()
      .transition()
      .duration(300)
      .style("fill-opacity", 0.0)
      .transition()
      .duration(500)
      //.attr("cx", function (d,i) { var offset = 0; if( self.timelineDirection == "future" ) { offset = self.networkWidth*-1 } else { offset = self.networkWidth } return d.x + offset; })
      .remove(); };
  this.resetNode = function (selection) {
      selection
        .attr("r", function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence); })
        .style("fill", function (d) { 
          switch(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_type) {
            case "organisation": return "#fff"; break;
            case "person": return "#db99af"; break;
            case undefined: return "#ccc"; break;
        };})
        //.style("stroke", "#fff")
        .style("fill-opacity", 0.9); }
  this.highlightNode = function (selection) {
      selection
        .attr("r", function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence); })
        .style("fill", "#a40539")
        //.style("stroke", "#a40539")
        .style("fill-opacity", 1.0); }
  this.highlightLink = function (selection) { selection.style("stroke", "#a40539").style("stroke-opacity",1.0); };
  this.resetLink = function (selection) { selection.style("stroke", "#cecece").style("stroke-opacity",1.0); };
  this.enterNodes = function () {
    this.links = this.svg
      .select("g#links")
      .selectAll(".link")
      .data( this.force.links(), function (d) { return ("link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id);} );

    this.clickableLinks = this.svg
      .select("g#links")
      .selectAll(".clickable-link")
      .data( this.force.links(), function (d) { return ("clickable-link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id);} );

    this.links
      .transition()
      .duration(500)
      .delay(1000)
      .call(this.resetLink)
      .style("stroke-opacity", 1.0);

    this.links
      .enter()
      .append("line")
      .on("click", function (d) { self.openDDB("link", d); })
      .attr("class", "link")
      .attr("id", function (d) { return "link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id; })
      .call(this.resetLink)
      .style("stroke-opacity", 0.0)
      .transition()
      .duration(500)
      .delay(1000)
      .call(this.resetLink);

    this.clickableLinks
      .enter()
      .append("line")
      .on("mouseover", function (d,i) { self.focus("link", d);} )
      .on("mouseout", function (d,i) { self.defocus();} )
      .on("click", function (d) { self.openDDB("link", d); })
      .attr("class", "clickable-link")
      .attr("id", function (d) { return "clickable-link-"+d.source.affiliate_fct_id+'_'+d.target.affiliate_fct_id; })
      .style("stroke", "#000")
      .style("stroke-opacity", "0.0")
      .style("stroke-width", "10px");

    this.links
      .exit()
      .transition()
      .duration(100)
      .style("stroke-opacity", 0.0)
      .remove();

    this.clickableLinks
      .exit()
      .remove();

    switch(this.nodePositioning) {
      case "network" :
        // enter new affiliates
        this.affiliates
          .enter()
          .append("circle")
          .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
          .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
          .on("click", function (d) { self.saveOrganisation(d.affiliate_fct_id); self.openDDB("node", d.affiliate_fct); })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .attr("class", "affiliate")
          .call(this.resetNode)
          .attr("r", function (d) { return 0; })
          .transition()
          .duration(500)
          .delay(function(d,i) { return i*3})
          .call(this.resetNode)
          .style("fill", "#fff");
      break;

      case "sortByOccurrence" :
        this.affiliates
          .enter()
          .append("circle")
          .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
          .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
          .on("click", function (d) { self.openDDB("node", d.affiliate_fct); })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .attr("class", "affiliate")
          .call(this.resetNode)
          .attr("r", function (d) { return 0; })
          .attr("cx", function (d,i) { return self.nodeValues.get(d.affiliate_fct_id).sortedPosition.x; })
          .attr("cy", function (d,i) { return self.nodeValues.get(d.affiliate_fct_id).sortedPosition.y; })
          .transition()
          .delay(function(d,i) { return i*3})
          .duration(500)
          .call(this.resetNode);
      break;


    }};
  this.updateNodes = function () {
    switch(this.nodePositioning) {

      case "network" :
        this.affiliates
          .transition()
          .duration(1000)
          .call(this.resetNode);
      break;

      case "sortByOccurrence" :
        this.affiliates
          .call( function (d,i) { d.fixed = true;})
          .transition()
          .duration(1000)
          .delay(function(d,i) { return i*3})
          .attr("r", function (d) { return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence); })
          .attr("cx", function (d,i) { return self.nodeValues.get(d.affiliate_fct_id).sortedPosition.x; })
          .attr("cy", function (d,i) { return self.nodeValues.get(d.affiliate_fct_id).sortedPosition.y; })
          .call(this.resetNode);
      break;

    } };
  this.radius = function(value) {
    var logValue = this.radiusScale(value)
    //return Math.sqrt((logValue/Math.PI);
    return logValue;};
  this.saveOrganisation = function (affiliate_fct_id) {
    if (self.organisationIDs.indexOf(affiliate_fct_id) == -1) {
        self.organisationIDs.push(affiliate_fct_id);
        console.log(self.organisationIDs);
    } };
  this.openDDB = function (mode, data) {
    switch(mode) {
      case "node":
        var url = 
        "https://www.deutsche-digitale-bibliothek.de/searchresults?query=&offset=0&viewType=grid" +
        "&facetValues%5B%5D=affiliate_fct_role="+encodeURIComponent(data)+
        "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+this.startDate+"%5D"+
        "&facetValues%5B%5D=end_time%3D%5B"+this.endDate+"+TO+*%5D";
        window.open(url);
      break;
      case "link":
        var url = 
        "https://www.deutsche-digitale-bibliothek.de/searchresults?query=" +
        'affiliate\:\('+encodeURI(data.source.affiliate_fct)+') AND affiliate\:\('+encodeURI(data.target.affiliate_fct)+'\)&viewType=grid&' +
        "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+this.startDate+"%5D"+
        "&facetValues%5B%5D=end_time%3D%5B"+this.endDate+"+TO+*%5D";
        window.open(url);
      break;
    } };
  this.defocus = function () {
    this.links.call(this.resetLink);
    this.affiliates.call(this.resetNode);
    this.sourceTip.hide();
    this.targetTip.hide();
     };
  this.focus = function (mode, data) {

    this.links.call(this.resetLink);
    this.affiliates.call(this.resetNode);

    switch(mode) {
      case "node":

        this.tip.direction("s").show(data, d3.select("#affiliate_fct_id-" + data.affiliate_fct_id).call(this.highlightNode)[0][0]);
        links = this.currentLinks.values().filter(function (n) { return (n.source.affiliate_fct_id == data.affiliate_fct_id || n.target.affiliate_fct_id == data.affiliate_fct_id)});
        for(var i=0; i<links.length; i++) {
          d3.select("#link-"+links[i].source.affiliate_fct_id+'_'+links[i].target.affiliate_fct_id).call(this.highlightLink);
          d3.select("#link-"+links[i].target.affiliate_fct_id+'_'+links[i].source.affiliate_fct_id).call(this.highlightLink);
          d3.select("#affiliate_fct_id-" + links[i].source.affiliate_fct_id).call(this.highlightNode);
          d3.select("#affiliate_fct_id-" + links[i].target.affiliate_fct_id).call(this.highlightNode);
        }

      break;

      case "link":
        var sx = d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id)[0][0].cx.baseVal.value;
        var sy = d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id)[0][0].cy.baseVal.value
        var tx = d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id)[0][0].cx.baseVal.value;
        var ty = d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id)[0][0].cy.baseVal.value

        var diffH =tx-sx;
        var diffV = ty-sy;

        var sv="",sh="",tv="",th="";

        if ( Math.abs(diffH) > Math.abs(diffV) ) {
          if ( sx>tx ) { sh="e";th="w"; } else { sh="w";th="e"; } s = sh; t = th;
          console.log("h is größer");
        } else {
          if ( sy>ty ) { sv="s";tv="n"; } else { sv="n";tv="s"; } s = sv; t = tv;
          console.log("v is größer");
        }
        this.sourceTip.direction(s).show(data.source, d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id)[0][0]);
        this.targetTip.direction(t).show(data.target, d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id)[0][0]);
        d3.select("#link-"+data.source.affiliate_fct_id+'_'+data.target.affiliate_fct_id).call(this.highlightLink);
        d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id).call(this.highlightNode);
        d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id).call(this.highlightNode);
      break;
    } };
  this.focusAffiliate = function (d) {
    d3.select(".fixed-affiliate")
      .style("fill", "#cecece")
      .call( function (d) {d.fixed = false; self.force.start();} );

    d3.select("#affiliate_fct_id-" + d.affiliate_fct_id)
      .call( function (d) {d.fixed = true; if (i==0) {this.force.stop();} })
      .attr("class", "fixed-affiliate")
      .transition()
      .duration(500)
      .style("fill", "#a40539")
      .attr("cx", function (d) { return 300 })
      .attr("cy", function (d) {   return self.networkHeight/2 } );}
};
