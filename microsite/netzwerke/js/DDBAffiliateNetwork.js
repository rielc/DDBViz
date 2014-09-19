DDBAffiliateNetwork = function()
{

  // timfct_id
  this.timeFcts = ['time_36100', 'time_36200', 'time_36300', 'time_36400', 'time_36500', 'time_36600', 'time_36700', 'time_36800', 'time_36900', 'time_36950', 'time_37100', 'time_37200', 'time_37300', 'time_37400', 'time_37500', 'time_37600', 'time_37700', 'time_37800', 'time_37900', 'time_37950', 'time_38100', 'time_38200', 'time_38300', 'time_38400', 'time_38500', 'time_38600', 'time_38700', 'time_38800', 'time_38900', 'time_38950', 'time_39100', 'time_39200', 'time_39300', 'time_39400', 'time_39500', 'time_39600', 'time_39700', 'time_39800', 'time_39900', 'time_39950', 'time_60200', 'time_60300', 'time_60400', 'time_60500', 'time_60600', 'time_60700', 'time_60800', 'time_60900', 'time_61000', 'time_61105', 'time_61145', 'time_61205', 'time_61245', 'time_61305', 'time_61345', 'time_61405', 'time_61445', 'time_61505', 'time_61545', 'time_61605', 'time_61645', 'time_61705', 'time_61745', 'time_61807', 'time_61825', 'time_61847', 'time_61875', 'time_61907', 'time_61925', 'time_61947', 'time_61975', 'time_62010', 'time_62020', 'time_62030', 'time_62040', 'time_62050', 'time_62060', 'time_62070', 'time_62080', 'time_62090', 'time_62095', 'time_62110', 'time_62120'];
  this.timeNames = ['40. Jahrhundert vor Christus', '39. Jahrhundert vor Christus', '38. Jahrhundert vor Christus', '37. Jahrhundert vor Christus', '36. Jahrhundert vor Christus','35. Jahrhundert vor Christus', '34. Jahrhundert vor Christus', '33. Jahrhundert vor Christus', '32. Jahrhundert vor Christus', '31. Jahrhundert vor Christus', '30. Jahrhundert vor Christus', '29. Jahrhundert vor Christus', '28. Jahrhundert vor Christus', '27. Jahrhundert vor Christus', '26. Jahrhundert vor Christus', '25. Jahrhundert vor Christus', '24. Jahrhundert vor Christus', '23. Jahrhundert vor Christus', '22. Jahrhundert vor Christus', '21. Jahrhundert vor Christus', '20. Jahrhundert vor Christus', '19. Jahrhundert vor Christus', '18. Jahrhundert vor Christus', '17. Jahrhundert vor Christus', '16. Jahrhundert vor Christus', '15. Jahrhundert vor Christus', '14. Jahrhundert vor Christus', '13. Jahrhundert vor Christus', '12. Jahrhundert vor Christus', '11. Jahrhundert vor Christus', '10. Jahrhundert vor Christus', '9. Jahrhundert vor Christus', '8. Jahrhundert vor Christus', '7. Jahrhundert vor Christus', '6. Jahrhundert vor Christus', '5. Jahrhundert vor Christus', '4. Jahrhundert vor Christus', '3. Jahrhundert vor Christus', '2. Jahrhundert vor Christus', '1. Jahrhundert vor Christus', '1. Jahrhundert', '2. Jahrhundert', '3. Jahrhundert', '4. Jahrhundert', '5. Jahrhundert', '6. Jahrhundert', '7. Jahrhundert', '8. Jahrhundert', '9. Jahrhundert', '1001 bis 1050', '1051 bis 1100', '1101 bis 1150', '1151 bis 1200', '1201 bis 1250', '1251 bis 1300', '1301 bis 1350', '1351 bis 1400', '1401 bis 1450', '1451 bis 1500', '1501 bis 1550', '1551 bis 1600', '1601 bis 1650', '1651 bis 1700', '1701 bis 1725', '1726 bis 1750', '1751 bis 1775', '1776 bis 1800', '1801 bis 1825', '1826 bis 1850', '1851 bis 1875', '1876 bis 1900', '1901 bis 1910', '1911 bis 1920', '1921 bis 1930', '1931 bis 1940', '1941 bis 1950', '1951 bis 1960', '1961 bis 1970', '1971 bis 1980', '1981 bis 1990', '1991 bis 2000', '2001 bis 2010', '2011 bis 2020'];

  // these ids are marked as orgnisations
  this.organisationIDs = [11511,1285,6655,6653,41150,3100,21070,4572,35266,35265,6160,4321,13435,9213,16020,13118,5810,16694,226,30557,210,13368,10276,10354,40311,1483,26161,35283,2026,629,6062,8875,20319,20318,10216,20266,23103,3454,179,429,2038,6011,1194,4973,9584,1756,4812,14080,24533,9543,5928,1404,1402,4696,1563,9893,1432,68113,5552,1001,3059,131,1065,2845,205,5022,75476,6822,5306,2295,1261,25991,195,8726,1514,129,7942,12654,13570,15064,3175,8764,2492,15572,336,1850,918,25077,11882,21203,5067,7180,4415,4413,574,1442,27026,136675,1827,792,14011,35245,8574,40290,19050,9848,4998,17484,2337,5442,439,5276,109,50532,846,87628,104538,25118,154186,30724,2216,7238,168844,35115,2139,4201,53735,10028,32944,6485,1527,26283,3305,4414,14362,18389,14366,9994,2119,416,6852,2122,16868,3803,1151,13437,30661,20160,11382,448,3605,18921,20636,3434,10640,3599,37664,388,387,1084,1854,22478,7819,788,4803,1205,2276,20911,4797,4799,86554,376,70,25487,5295,5297,59093,6221,501,2671,32570,33833,46545,586,1110,12886,5853,13293,16696,29931,10830,3607,3538,4062,2214,3892,3071,1876,4314,156324,35324,67901,15380,7943,6245,1728,9163,898,715,780,1416,5208,8506,3968,165,45988,135,6299,2792,52279,5848,1849,10757,4925,8273,16187,4926,4927,38271,9289,41685,14682,93166,76376,6874,10721,53779,164356,8750,3033,45201,26546,122407,13024,38583,1769,16092,126035,9306,611,5191,39509,1446,242,12443,8161,12494,67748,177179,39756,47348,77969,27040,15904,14176,13019,17494,20646,755,681,6782,8167,420,2675,5978,29,7026,853,3807,1147,46,8509,5819,1463,710,2261,8518,835,80709,6474,40895,76579,20740,58803,1498,4962,2736,42947,16849,4985,9423,168302,144266,126735,43788,3537,500,5269,12565,10188,268,27497,730,17154,13284,32084,1399,5065,11463,3553,693,174732,123132,73951,9725,1497,4475,7609,10371,9426,10181,345,3808,1633,7572,14217,3831,1684,22157,2725,11622,4358,6517,12109,21001,1525,326,11300,1054,3594,1859,4003,10210,8955,13134,3469,15552,9715,29195,5594,570,7907,9366,62633,9404,19424,14780,76120,32250,50100,58853,98304,23926,44804,1491,3431,112474,32878,55052,6746,224982,67579,80699,107633,7056,65891,60514,22639,67156,2377,15193,4901,54130,52313,309,39782,23449,43468,2460,9651,17523,3176,25743,50603,144627,14964,124,3237,7660,7527,15722,2282,83307,1896,9425,7168,79191,221,90104,6459,3715,9003,867,14507,837,17188,670,2057,2832,47556,2248,6561,37207,7000,1266,5155,1062,653,22623,3092,6336,3643,251,62076,307,3131,10916,2075,5311,18123,12498,4887,32914,25963,1783,81518,11330,35819,204486,35820,351,1623,25762,13534,257,62676,40292,11843,70108,57316,29259,70107,126893,11842,23179,65596,6158,13,8760,8759,15973,21876,21877,14002,23025,62670,301,3697,600,2157,1487,4627,26,2515,300,5895,6441,917,1906,1788,442,162,14658,2935,3692,5473,1353,2340,521,1131,6941,24756,39548,14138,2476,12378,99451,36045,7715,9900,10833,5025,5710,2245,4197,22347,7745,728,10312,6648,12260,9876,15620,687,15098,1988,43513,9991,4746,9823,3346,1294,2487,5056,8970,10321,38676,125509,34634,8874,12553,37778,4541,104707,4340,20816,40378,39533,386,37283,40872,6111,176578,34371,94330,12953,11242,37317,10862,851,63781,393,16700,2705,877,1744,685,48248,2263,61894,1168,7052,51806,75470,131186,119935,24493,31417,15560,14765,32129,8767,44959,13891,104901,61939,52504,30594,93698,59453,2619,2620,3983,30308,28465,10551,5213,37298,6269,9161,8433,9751,594,1824,30978,31357,63986,7692,14646,4634,6884,13866,128365,1478,28228,62048,720,24200,571,22085,102630,1568,38823,6644,43982,150380,35415,28124,1495,733,140,13748,12374,19496,1867,2410,2413,4401,26034,63678,26036,2414,4393,131794,129866,63679,26027,26035,87954,109000,67790,2415,26038,108991,86793,127375,127377,129868,261347,87950,180043,276861,26039,127775,46884,136228,131790,131767,197838,86780,129867,127380,264856,806,4392,46887,26037,131775,171400,4396,26033,86788,4399,136234,33676,2073,5647,7608,3646,253,25,4616,37158,10130,1875,654,6412,562,5762,27504,19513,25004,16239,19336,2727,2085,3673,1120,120]; 
  this.nodePositioning = "network";

  // dimensions of the network
  this.networkWidth = $(window).width(), 
  this.networkHeight = $(window).height()-$(".header").outerHeight(true);

  // occurrences for scaling etc
  this.minOccurrence = 40;
  this.maxOccurrence = 40;
  this.globalMaxOccurence = 0,
  this.globalMinOccurence = 1000;
  this.maxNodeCount = 0;
  this.maxNodeCount = 100;

  this.currentTimeFctID = this.timeFcts.length-2;

  // append svg and resize
  this.svg = d3.select("#network")
    .attr("width", this.networkWidth)
    .attr("height", this.networkHeight); 

  this.histogramBinAxis = this.svg
    .append("g")
    .attr("class", "histogram-bin-axis")
    .selectAll("g.bin");

  this.detectType = function(n) {
    var type = undefined;
    if ( this.organisationIDs.indexOf(n.affiliate_fct_id) > -1 
    ) { type = 'organisation'; } 
    else /*(
      n.affiliate_fct.match(new RegExp("\\(Fotograf\\)", "gi")) ||
      n.affiliate_fct.match(new RegExp("Herzog", "gi")) || 
      n.affiliate_fct.match(new RegExp("König", "gi")) ||
      n.affiliate_fct.match(new RegExp("Politiker", "gi")) ||
      n.affiliate_fct.match(new RegExp("\\([0-9]{0,4}\-[0-9]{0,4}\\)", "gi"))
    )*/ { type = 'person'; }
      //console.log(type);
    return type;
  };
    

  this.generateOverlay = function() {

    this.overlay =  
    d3.select("#overlay")
      .style("width", $(window).width())
      .style("height", $(window).height()-10)
      .style("display", "block");

    this.overlaySVG = this.overlay.select("svg");
    this.overlaySVG
      .attr("width", $(window).width())
      .attr("height", $(window).height()-10)
      .selectAll("*")
      .remove();

      var infos = [];

      this.affiliates.style("fill", "ccc").style("fill-opacity", "0.1");
      this.links.style("stroke-opacity", "0.1");


      // affiliate
      var examplePerson = this.currentNodes.values()
        .sort(function (a, b) { return self.nodeValues.get(b.affiliate_fct_id).affiliate_fct_occurrence - self.nodeValues.get(a.affiliate_fct_id).affiliate_fct_occurrence;})
        .filter(function (n) { return (self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_type == "person")})[0];


      if (examplePerson != undefined) {
        d3.select("#affiliate_fct_id-" + examplePerson.affiliate_fct_id).style("fill-opacity", "1").style("fill", "a40539");
        infos.push({
          x : self.transformX(examplePerson),
          y : self.transformY(examplePerson)+$(".header").outerHeight(true),
          text : "Person",
          r: 0
        });
      }

      var exampleOrganisation = this.currentNodes.values()
        .sort(function (a, b) { return self.nodeValues.get(b.affiliate_fct_id).affiliate_fct_occurrence - self.nodeValues.get(a.affiliate_fct_id).affiliate_fct_occurrence;})
        .filter(function (n) { return (self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_type == "organisation")})[0];

      if (exampleOrganisation != undefined) {
        d3.select("#affiliate_fct_id-" + exampleOrganisation.affiliate_fct_id).style("fill-opacity", "1");
        infos.push({
          x : self.transformX(exampleOrganisation),
          y : self.transformY(exampleOrganisation)+$(".header").outerHeight(true),
          text : "Organisation",
          r: 0
        });
      }

      // links
      var exampleLink = d3.shuffle(this.currentLinks.values().filter(function (l) { return l.source.affiliate_fct_id != l.target.affiliate_fct_id;}))[0];
      if (exampleLink != undefined) {
        var linkPosition = { x: (exampleLink.target.x+exampleLink.source.x)/2, y: (exampleLink.target.y+exampleLink.source.y)/2 }
        d3.select("#affiliate_fct_id-" + exampleLink.source.affiliate_fct_id).call(this.resetNode);
        d3.select("#affiliate_fct_id-" + exampleLink.target.affiliate_fct_id).call(this.resetNode);
        d3.select("#link-"+exampleLink.source.affiliate_fct_id+'_'+exampleLink.target.affiliate_fct_id).call(this.highlightLink).style("stroke-width", 5).style("stroke", "#fff");
        infos.push({
          x : self.transformX(linkPosition),
          y : self.transformY(linkPosition)+$(".header").outerHeight(true),
          text : "Gemeinsames vorkommen",
          r: 0
        });
      }


      infos.push({
        x : $(".timeline-tip").position().left+15,
        y : $(".timeline-tip").position().top+55+$(".header").outerHeight(true),
        text : "Vorheriger Zeitraum",
        r: 0
      });

      infos.push({
        x : $(".timeline-tip").position().left+this.timelineWidth+45,
        y : $(".timeline-tip").position().top+55+$(".header").outerHeight(true),
        text : "Nächster Zeitraum",
        r: 0
      });

      infos.push({
        x : ($("#overlay").width()/2-600)+950,
        y : 75+$(".header").outerHeight(true),
        text : "Anzahl der Personen und Organisationen eines Zeitraumes",
        r: 30
      });

    this.overlaySVG
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
        .call(self.resetNodeSize)
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

    var fm_options = {
        jQueryUI : false,
        position : "right-bottom",
        // name_placeholder:"Name please",                     
        trigger_label : "Feedback",
        title_label: "Beobachtungen, Ideen und Vorschläge",       
        message_required : true,
        show_asterisk_for_required : false,
        feedback_url : "send_feedback",
        submit_label: "Absenden",
        email_required: false,
        callback: function(data){ 
          //console.log("feedback",data);
          //console.log(data);
          log("netzwerke", "send", "feedback", data.message);
        },
    };

    fm.init(fm_options);

    self = this;

    this.data = {};
    this.timelineIDs = [];
    this.timelineSum = [];

    this.radiusScale = d3.scale.log();

    // create the force-directed-graph
    this.force = d3.layout.force()
      .charge( function (d) { 
        return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence) *
          self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence) *-0.5;
      })
      .friction(0.7)
      .linkStrength( function (d) {
        var strength = 
          (
            d.common_occurrence / self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence + 
            d.common_occurrence / self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence
          ) / 2;
          return (strength > 1.0) ? 1.0 : strength;
      })
      .linkDistance( function (d) { 
        return ( 
          self.radius(self.nodeValues.get(d.source.affiliate_fct_id).affiliate_fct_occurrence) + 20 + 
          self.radius(self.nodeValues.get(d.target.affiliate_fct_id).affiliate_fct_occurrence)
          );
      })
      .size([  this.networkWidth, this.networkHeight]);
      // .linkStrength(function (d) {
      //     if (d.common_occurrence =! undefined) { console.log("values"); console.log("no values"); return d.common_occurrence } else { return 0.5 }
      // });

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

    this.zoomContext = d3.behavior.zoom().x(this.zoomXScale).y(this.zoomYScale).scaleExtent([0.5, 10]).on("zoom", this.zoom);

    this.zoomContext.on("zoomend", function () {
      log("netzwerke", "zoom-or-drag", "canvas", 'scale:' + self.zoomContext.scale() + ', translate: ' + self.zoomContext.translate());
    });

    this.svg.call(this.zoomContext);

    // christophers awesome help overlay 
    d3.select('.help')
      .on("click", function (d) {
        self.force.stop();
        self.generateOverlay();
        log("netzwerke", "open-infolayer", "timeline", true);
      });

    d3.select('#overlay svg')
      .on("click", function (d) {

        self.overlay
          .style("display", "none");

        self.tip.hide();
        self.affiliates.call(self.resetNode);
        self.links.call(self.resetLink);
        self.force.start();
        log("netzwerke", "close-infolayer", "timeline", true);
      });


    // Initialize standard  tooltip
    this.tip = d3.tip()
      .attr('class', 'd3-tip')
      .html( function (d) {
        var content = '<h3>'+clearName(d.affiliate_fct)+'</h3><p>'+formatNumber(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence)+' Einträge</p>'; 
        return content;
      });
    this.svg.call(this.tip); 

    // Initialize neighbour tooltip
    this.sourceTip = d3.tip().attr('class', 'd3-tip source-tip').html( function (d) { return '<h3>'+d.source.affiliate_fct+'</h3><p>'+formatNumber(self.currentLinks.get(d.source.affiliate_fct_id+"_"+d.target.affiliate_fct_id ).common_occurrence) +' gemeinsame Einträge</p>'; } );
    this.targetTip = d3.tip().attr('class', 'd3-tip target-tip').html( function (d) { return '<h3>'+d.target.affiliate_fct+'</h3><p>'+formatNumber(self.currentLinks.get(d.source.affiliate_fct_id+"_"+d.target.affiliate_fct_id ).common_occurrence) +' gemeinsame Einträge</p>'; } );
    this.svg.call(this.sourceTip);
    this.svg.call(this.targetTip);

    jQuery.getJSON( "./data/affiliates-with-strength.json", function (result) {
      self.data = result;
      log("netzwerke", "load", "data", true);
      self.collectAllNodes();
      self.initTimeline();
      self.resizeWindow();
      self.collectNewNodes(self.currentTimeFctID, self.timeFcts.length);
        window.setTimeout( function () {
          $('.subheader').mouseover( function() {
            // $(".timeline-tip").attr("class", "timeline-tip active");
            // an.resizeWindow();
          });
          $('#network').mouseover( function() {
            // $(".timeline-tip").attr({"class": "timeline-tip inactive"});
            // an.resizeWindow();
          });
          //$('.subheader').mouseover();

          // set the height of the brush
          d3.select(".extent").transition().delay(2500).duration(200).attr("height", 40);
        }, 2000);


    });

    // simulation updates
    this.force.on("tick", function (e) {

      // update the position of all nodes which are stored for smooth animation
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
            //.call(self.resetNodeSize)
            .attr("cx", function (d) { if (!d.fixed) {return self.transformX(d);}} )
            .attr("cy", function (d) { if (!d.fixed) {return self.transformY(d)}} );
            //.attr("r", function(d) { return self.zoomYScale(self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence)); });
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
        case "sortByOccurrence" :break;
        }
      });
  };
  
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

    this.timelineWidth = 1140,  this.timelineHeight = 80;
    this.brushWidth = (self.timelineWidth/self.timeNames.length)-2;

    var margin = 20;

    this.brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);

    var brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);

    function brushEvent () {

      //console.log(d3.mouse(this)[0]);
      d0 = Math.round(self.brushScale.invert( d3.mouse(this)[0]) );
      //console.log("asdasd" + d3.mouse(d3.select("#timeline"))[0]);

      d1=d0+1;
      if (d0 > self.timeFcts.length-1) { d0 = self.timeFcts.length-1; d1 = self.timeFcts.length; }
      if (d0 < 1) { d0 = 0; d1 = 1; }

      self.currentTimeFctID = d0;
      d3.select(this).call(self.brush.extent([self.currentTimeFctID, d1]));

      //console.log(self.currentTimeFctID+","+d1);

      d3.selectAll(".time-facet-labels").style("fill", "#d2d2d2");
      d3.selectAll(".time-facet-ticks").style("fill", "#d2d2d2");
      d3.select(".time-facet-label-"+self.timeFcts[self.currentTimeFctID]).style("fill", "#bf8f9f");
      d3.select(".time-facet-tick-"+self.timeFcts[self.currentTimeFctID]).style("fill", "#bf8f9f");
      d3.select(".extent").attr("width", self.brushWidth);

      // log the selection via timeline … but only if its a new selection
      if (self.timelineIDs[0] != d0 || self.timelineIDs[1] != d1) {
        log("netzwerke", "select-epoch", "timeline", self.timeNames[self.currentTimeFctID])
      }
      self.collectNewNodes(self.currentTimeFctID, d1);
    }

    var yScale = d3.scale.linear()
      .domain([0, this.maxNodeCount])
      .range([0, 30]);

    this.timeline = d3.select("#timeline")
      .attr("width", this.timelineWidth)
      .attr("height", this.timelineHeight);

    this.timeline
      .append("line")
      .style("stroke", "#d2d2d2")
      .style("stroke-width", 3)
      .style("shape-rendering", "crispEdges")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", this.timelineHeight/2+1)
      .attr("y2", this.timelineHeight/2+1)
      .transition()
      // .delay(2000)
      .duration(1000)
      .attr("x2", this.timelineWidth);

      d3.select(".left-arrow").transition().delay(1000).duration(200).style("opacity", 1.0);
      d3.select(".right-arrow").transition().delay(1000).duration(200).style("opacity", 1.0);

    this.brush = d3.svg.brush()
      .x(this.brushScale)
      .extent([this.timeFcts.length-2, this.timeFcts.length-1])
      .on("brush", brushEvent);

    this.ticks = this.timeline.append('g')
      .attr('id', 'ticks')
      .selectAll('rect')
      .data(this.timeFcts);

    this.gBrush = this.timeline.append("g")
        .attr("class", "brush")
        .call(this.brush);

    this.gBrush.selectAll("rect")
      .attr("height", 45)
      .attr('transform', 'translate(0,0)')
      .style("fill", "#a40539")
      .style('fill-opacity', 0.3)
      .style("stroke", "none")
      .style("shape-rendering", "crisEdges");

    // these labels are in the timeline visible
    var labelWhitelist = [0, 5, 10, 15, 20, 25, 30, 35, 40, 44, 49, 51, 53, 55, 57, 59, 61, 63, 67, 71, 81];

    this.ticks
      .enter()
      .append('rect')
      .attr("class", function (d, i) { return "time-facet-ticks time-facet-tick-"+self.timeFcts[i]; })
      .attr('x', function (d, i) { return self.brushScale(i); } )
      .attr('y', 40)
      .attr('width', function (d, i) { return self.brushWidth; })
      .attr('height', 0 )
      .attr('fill', function (d,i) { return i==self.currentTimeFctID ? "#bf8f9f" : "#d2d2d2" })
      .attr('fill-opacity', 1)
      .style("shape-rendering", "crisEdges")
      .transition()
      .duration(100)
      .delay(function(d, i) { return 1000+i*25 })
      .attr('height', function (d, i) { if (self.data[d] != undefined) { return yScale(self.data[d].nodes.length); } else { return 0; }} )
      .attr('y', function (d, i) { if (self.data[d] != undefined) { return 40-yScale(self.data[d].nodes.length); } else { return 0; }} );

    this.labels = this.timeline.append('g')
      .selectAll('text')
      .data(this.timeNames)
      .enter()
      .append('text')
      .attr("class", function (d, i) { return "time-facet-labels time-facet-label-"+self.timeFcts[i]; })
      .text(function (d, i) { if (labelWhitelist.indexOf(i) != -1 || i >=88) {return self.simpleTimename(d); }})
      .attr("transform", function (d,i) { return "translate("+(self.brushScale(i)+8)+",47)rotate(-90)"})
      .attr("font-family", "KarbidWeb, sans-serif;")
      .attr("text-anchor", "end") 
      .attr("font-size", 10)
      .attr("stroke", "none")
      .attr("font-weight", 400)
      .attr("fill", "#d2d2d2")
      .style('fill-opacity', 0)
      .transition()
      .duration(100)
      .delay(function(d, i) { return 1000+i*25 })
      .style('fill-opacity', 1);
      d3.select(".background").style("cursor", "pointer");
      d3.selectAll(".resize").style("cursor", "pointer");
      d3.select(".extent").attr("height", 0).style("cursor", "pointer").attr("width",this.brushWidth);

  };

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
                affiliate_fct : n.affiliate_fct              }
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

      this.radiusScale = d3.scale.linear().domain([20, this.globalMaxOccurence]).range([20, 150]);

      }


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
          } else {
            self.nodeValues.set(n.affiliate_fct_id, {
              affiliate_fct_occurrence : n.affiliate_fct_occurrence,
              affiliate_fct_type: self.detectType(n)
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
              target : self.currentNodes.get(l.target_affiliate_fct_id),
              common_occurrence : l.common_occurrence != undefined ? l.common_occurrence : 0
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

      this.load();

    } else {
    }};
  /*
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

*/
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

  this.resetNodeSize = function (selection) {
      selection
        .attr("r", function (d) {
           if (self.zoomContext.scale() > 1.0) {
            return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence); 
          } else {
            return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence) * self.zoomContext.scale();
          }
      });
  };

  this.resetNode = function (selection) {
      selection
        .call(self.resetNodeSize)
        .style("fill", function (d) { 
          switch(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_type) {
            case "organisation" :
            return "#ccc";
            break;
            case "person":
            return "#a40539";
            break;
            case undefined:
            return "#ccc";
            break;
        };})
        .style("stroke", "none") 
        //.style("stroke", "#fff")
        .style("fill-opacity", 0.9); }

  this.highlightNode = function (selection) {
      selection
        .attr("r", function (d) {
           if (self.zoomContext.scale() > 1.0) {
            return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence); 
          } else {
            return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence) * self.zoomContext.scale();
          }
        })
        .style("fill", "#bf8f9f")
        //.style("stroke", "#a40539")
        .style("fill-opacity", 0.9); }

  this.highlightLink = function (selection) { selection.style("bf8f9f", "#fff").style("stroke-opacity",1.0); };
  this.resetLink = function (selection) { selection.style("stroke", "#ccc").style("stroke-opacity",0.5).style("stroke-width",1); };

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
          .on("click", function (d) { /*self.saveOrganisation(d.affiliate_fct_id);*/ self.openDDB("node", d.affiliate_fct); })
          .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
          .attr("class", "affiliate")
          .call(this.resetNode)
          .attr("r", function (d) { return 0; })
          .transition()
          .duration(500)
          .delay(function(d,i) { return i*3})
          .call(this.resetNode)
          .call(this.resetNodeSize);
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
          .call(this.resetNode)
          .call(this.resetNodeSize);
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


          this.links
            .transition()
            .duration(1000)
            .delay(function(d,i) { return i*3})
            .attr("x1", function(d) { return self.nodeValues.get(d.source.affiliate_fct_id).sortedPosition.x; } )
            .attr("x2", function(d) { return self.nodeValues.get(d.target.affiliate_fct_id).sortedPosition.x; } )
            .attr("y1", function(d) { return self.nodeValues.get(d.source.affiliate_fct_id).sortedPosition.y; } )
            .attr("y2", function(d) { return self.nodeValues.get(d.target.affiliate_fct_id).sortedPosition.y; } )
            .call(this.resetLink)
            .style("stroke-opacity", 1.0);
      break;

    } };
  this.radius = function(value) {
    var logValue = this.radiusScale(value)
    return (Math.sqrt((value/Math.PI))); };
  this.saveOrganisation = function (affiliate_fct_id) {
    if (self.organisationIDs.indexOf(affiliate_fct_id) == -1) {
        self.organisationIDs.push(affiliate_fct_id);
        console.log("this.organisationIDs = [" + self.organisationIDs+"];");
    } };
  this.openDDB = function (mode, data) {
    switch(mode) {
      case "node":
        var url = 
        "https://www.deutsche-digitale-bibliothek.de/searchresults?query=&offset=0&viewType=grid" +
        "&facetValues%5B%5D=affiliate_fct_role%3D"+encodeURI(clearString(data))+
        "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+this.startDate+"%5D"+
        "&facetValues%5B%5D=end_time%3D%5B"+this.endDate+"+TO+*%5D";
        log("netzwerke", "open-node", "canvas", "node:"+data+", url:" + url);
        window.open(url);
      break;
      case "link":
        var url = 
        "https://www.deutsche-digitale-bibliothek.de/searchresults?query=" +
        'affiliate\:\('+encodeURI(data.source.affiliate_fct)+') AND affiliate\:\('+encodeURI(data.target.affiliate_fct)+'\)&viewType=grid&' +
        "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+this.startDate+"%5D"+
        "&facetValues%5B%5D=end_time%3D%5B"+this.endDate+"+TO+*%5D";
        log("netzwerke", "open-link", "canvas", "a:"+data.source.affiliate_fct+", b:"+data.target.affiliate_fct+ ", url:" + url);
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

        this.tip.direction("n").show(data, d3.select("#affiliate_fct_id-" + data.affiliate_fct_id).call(this.highlightNode)[0][0]);
        links = this.currentLinks.values().filter(function (n) { return (n.source.affiliate_fct_id == data.affiliate_fct_id || n.target.affiliate_fct_id == data.affiliate_fct_id)});
        for(var i=0; i<links.length; i++) {
          d3.select("#link-"+links[i].source.affiliate_fct_id+'_'+links[i].target.affiliate_fct_id).call(this.highlightLink);
          d3.select("#link-"+links[i].target.affiliate_fct_id+'_'+links[i].source.affiliate_fct_id).call(this.highlightLink);
          d3.select("#affiliate_fct_id-" + links[i].source.affiliate_fct_id).call(this.highlightNode);
          d3.select("#affiliate_fct_id-" + links[i].target.affiliate_fct_id).call(this.highlightNode);
        }

      break;

      case "link":

        // calculate the direction of the tip
        var sx = d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id)[0][0].cx.baseVal.value;
        var sy = d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id)[0][0].cy.baseVal.value
        var tx = d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id)[0][0].cx.baseVal.value;
        var ty = d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id)[0][0].cy.baseVal.value

        var diffH =tx-sx;
        var diffV = ty-sy;

        var sv="",sh="",tv="",th="";
        if ( Math.abs(diffH) > Math.abs(diffV) ) { if ( sx>tx ) { sh="e";th="w"; } else { sh="w";th="e"; } s = sh; t = th; } 
        else { if ( sy>ty ) { sv="s";tv="n"; } else { sv="n";tv="s"; } s = sv; t = tv; }

        this.sourceTip.direction(s).show(data, d3.select("#affiliate_fct_id-" + data.source.affiliate_fct_id)[0][0]);
        this.targetTip.direction(t).show(data, d3.select("#affiliate_fct_id-" + data.target.affiliate_fct_id)[0][0]);
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


function calcDate (year, end) {
  var d2 = new Date(0);
  if (end) { d2.setUTCFullYear(year, 11, 31); } else { d2.setUTCFullYear(year); }
    var d1 = new Date(1970,0,01);
    d1 = d1.getTime() / 86400000;
    d2 = d2.getTime() / 86400000;
  return parseInt(new Number(d2 - d1).toFixed(0))+ 719164;
}

function formatNumber (number) {
  var reg = new RegExp(",", 'g');
  return d3.format(",")(number).replace(reg, ".");
}

function clearString(string) {
  var list = ["+", "||", "!", "{", "}", "^", "[", "]", '"', "~", "*", "=", "?", ":", "/"]

  for (var i=0; i<list.length; i++) {
    string = string.replace(list[i], "\\"+list[i]);
  }
  return string;
}

function clearName (name) {
  // var newname = "";
  // if (name.indexOf(",") > -1) {
  //   var strings = name.split(",");
  //   newName = strings[1]+" "+strings[0];
  // } else {
  //   newName = name;
  // }
  // if (name.indexOf("(Fotograf)") > -1) {
  //   newName = newName.replace("(Fotograf)", "");
  // }
  // newName = newName.replace( new RegExp("\\([0-9]{0,4}\-[0-9]{0,4}\\)", "gi"), ""); // clear the years out of the name
  return name;
  //return newName;
 };