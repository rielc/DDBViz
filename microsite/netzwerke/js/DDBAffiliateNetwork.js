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
  this.nodesAreFixed = false;

  this.displayMode = "network";

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
          x : self.nodePositioning == "network" ? self.transformX(examplePerson) : self.nodeValues.get(examplePerson.affiliate_fct_id).sortedPosition.x,
          y : self.nodePositioning == "network" ? self.transformY(examplePerson)+$(".header").outerHeight(true) : self.nodeValues.get(examplePerson.affiliate_fct_id).sortedPosition.y+$(".header").outerHeight(true),
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
          x : self.nodePositioning == "network" ? self.transformX(exampleOrganisation) : self.nodeValues.get(exampleOrganisation.affiliate_fct_id).sortedPosition.x,
          y : self.nodePositioning == "network" ? self.transformY(exampleOrganisation)+$(".header").outerHeight(true) : self.nodeValues.get(exampleOrganisation.affiliate_fct_id).sortedPosition.y+$(".header").outerHeight(true),
          text : "Organisation",
          r: 0
        });
      }


      // links
      var exampleLink = d3.shuffle(this.currentLinks.values().filter(function (l) { return l.source.affiliate_fct_id != l.target.affiliate_fct_id;}))[0];


      if (exampleLink != undefined) {
        if (self.nodePositioning == "network") {
          var linkPosition = { x: (exampleLink.target.x+exampleLink.source.x)/2, y: (exampleLink.target.y+exampleLink.source.y)/2 }
        } else {
          var posX = ((self.nodeValues.get(exampleLink.target.affiliate_fct_id).sortedPosition.x + self.nodeValues.get(exampleLink.source.affiliate_fct_id).sortedPosition.x) / 2);
          var posY = ((self.nodeValues.get(exampleLink.target.affiliate_fct_id).sortedPosition.y + self.nodeValues.get(exampleLink.source.affiliate_fct_id).sortedPosition.y) / 2);
          var linkPosition = { x: posX, y: posY };
        }
        d3.select("#affiliate_fct_id-" + exampleLink.source.affiliate_fct_id).call(this.resetNodeStyle);
        d3.select("#affiliate_fct_id-" + exampleLink.target.affiliate_fct_id).call(this.resetNodeStyle);
        d3.select("#link-"+exampleLink.source.affiliate_fct_id+'_'+exampleLink.target.affiliate_fct_id).call(this.highlightLink).style("stroke-width", 5).style("stroke", "#fff");
        infos.push({
          x : self.nodePositioning == "network" ? self.transformX(linkPosition) : linkPosition.x,
          y : self.nodePositioning == "network" ? (self.transformY(linkPosition) + $(".header").outerHeight(true)) : (linkPosition.y) + $(".header").outerHeight(true),
          text : "Gemeinsames vorkommen",
          r: 0
        });
      }

      infos.push({
        x : $(".timeline-tip").position().left+15,
        y : $(".timeline-tip").position().top+35+$(".header").outerHeight(true),
        text : "Vorheriger Zeitraum",
        r: 0
      });

      infos.push({
        x : $(".timeline-tip").position().left+self.timelineWidth+45,
        y : $(".timeline-tip").position().top+35+$(".header").outerHeight(true),
        text : "Nächster Zeitraum",
        r: 0
      });

      infos.push({
        x : ($("#overlay").width()/2-600)+950,
        y : 75+$(".header").outerHeight(true),
        text : "Anzahl der Personen und Organisationen eines Zeitraumes",
        r: 30
      });

      infos.push({
        y : ($("#switchMode").offset().top + 25),
        x : ($("#switchMode").offset().left + 25),
        text : self.nodePositioning == "network" ? "Wechsel zur Scatterplot-Ansicht" : "Wechsel zur Netzwerk-Ansicht",
        r: 0
      });

      if (self.nodePositioning == "sortByOccurrence") {
        infos.push({
          y : ($("text.x").offset().top) + 8,
          x : ($("text.x").offset().left) + 25,
          text :  "Die horizontale Positionierung entspricht der Anzahl von verknüpften Personen / Organisationen",
          r: 30
        });

        infos.push({
          y : ($("text.y").offset().top) + 8,
          x : ($("text.y").offset().left) + 25,
          text : "Die vertikale Positionierung entspricht der Anzahl von Einträgen",
          r: 30
        });
      }

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
    // change scale and tranlation if in network mode
    //console.log("zoom");
    self.affiliates.call(self.resetNodeSize);
    self.updateGraph(false);
  };

  this.transformX = function (d) { return this.zoomXScale(d.x); }
  this.transformY = function (d) { return this.zoomYScale(d.y); }

  this.init = function() {

    var fm_options = {
        jQueryUI : false,
        position : "right-bottom",
        // name_placeholder:"Name please",
        trigger_label : "Feedback",
        title_label: "Ihre Beobachtungen, Ideen und Vorschläge",
        message_required : true,
        show_asterisk_for_required : false,
        feedback_url : "send_feedback",
        submit_label: "Absenden",
        email_required: false,
        callback: function(data){
          //console.log("feedback",data);
          //console.log(data);
        },
    };

    self = this;

    this.data = {};
    this.timelineIDs = [];
    this.timelineSum = [];

    this.radiusScale = d3.scale.log();

    // create the force-directed-graph
    this.force = d3.layout.force()
      .charge( function (d, i) {
        return (self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence)) *-10;
      })
      .size([  this.networkWidth, this.networkHeight]);

    // data storages
    this.allNodes = d3.map();
    this.currentNodes = d3.map();
    this.nodeValues = d3.map();
    this.currentLinks = d3.map();

    // init ZOOM
    this.zoomXScale = d3.scale.linear().domain([0, this.networkWidth]).range([0, this.networkWidth]);
    this.zoomYScale = d3.scale.linear().domain([0, this.networkHeight]).range([this.networkHeight, 0]);

    this.zoomContext = d3.behavior.zoom().x(this.zoomXScale).y(this.zoomYScale).scaleExtent([0.1, 20]).on("zoom", this.zoom);

    this.zoomContext.on("zoomend", function () {
      //self.updateGraph(false);
      self.updateGraph(false);
    });

    this.svg.call(this.zoomContext);


    d3.select("#switchMode").on("click", function() {
      switch(self.nodePositioning) {
        case "network": self.switchNodePositioning("sortByOccurrence"); d3.select("#switchMode").attr("class", "sorted"); d3.select("#network").classed("network", false).classed("sorted", true);  break;
        case "sortByOccurrence": self.switchNodePositioning("network");d3.select("#switchMode").attr("class", "network"); d3.select("#network").classed("network", true).classed("sorted", false); break;
      }
    });

    // christophers awesome help overlay
    d3.select('.help')
      .on("click", function (d) {
        if (self.nodePositioning == "sortByOccurrence") {
            self.generateOverlay();
        } else {
            self.force.stop();
            self.generateOverlay();
        }
      })

    d3.select('#overlay svg')
      .on("click", function (d) {
        self.overlay.style("display", "none");
        self.tip.hide();

        self.affiliates
          .call(self.resetNodeSize)
          .call(self.resetNodeStyle);

        self.links
          .call(self.resetLink)
          .call(self.resetLinkStyle);

        if (self.nodePositioning == "sortByOccurrence") {
          self.updateGraph(false);
        } else {
          self.force.start();
        }
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
      self.collectAllNodes();
      self.initTimeline();
      self.resizeWindow();
      self.collectNewNodes(self.currentTimeFctID, self.timeFcts.length);
        window.setTimeout( function () {
          // set the height of the brush
          d3.select(".extent").transition().delay(2500).duration(200).attr("height", 40);
        }, 2000);

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


    this.center = function()
    {
      self.zoomContext.scale(1);
      console.log(self.zoomContext.scale());
      var bb = d3.select("#nodes").node().getBBox();
      var za = ((self.networkHeight-140) / bb.height);
      var zb = ((self.networkWidth) / bb.width);
      var z = (za > zb) ? zb : za;

      console.log(bb);

      self.zoomContext.scale(z);
      console.log(self.zoomContext.scale());
      var t = self.zoomContext.translate();
      self.zoomContext.translate([0,0]);
      this.updateGraph();
    }


  this.initTimeline = function () {

    this.timelineWidth = 1140, this.timelineHeight = 80;
    this.brushWidth = (self.timelineWidth/self.timeNames.length)-2;

    var margin = 20;

    this.brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);

    var brushScale = d3.scale.linear()
      .domain([0,this.timeFcts.length])
      .range([margin, this.timelineWidth-margin]);

    function brushEvent () {

      d0 = Math.round(self.brushScale.invert( d3.mouse(this)[0]) );

      d1=d0+1;
      if (d0 > self.timeFcts.length-2) { d0 = self.timeFcts.length-2; d1 = self.timeFcts.length-1; }
      if (d0 < 1) { d0 = 0; d1 = 1; }

      self.currentTimeFctID = d0;
      d3.select(this).call(self.brush.extent([self.currentTimeFctID, d1]));

      d3.selectAll(".time-facet-labels").style("fill", "#d2d2d2");
      d3.selectAll(".time-facet-ticks").style("fill", "#d2d2d2");
      d3.select(".time-facet-label-"+self.timeFcts[self.currentTimeFctID]).style("fill", "#bf8f9f");
      d3.select(".time-facet-tick-"+self.timeFcts[self.currentTimeFctID]).style("fill", "#bf8f9f");
      d3.select(".extent").attr("width", self.brushWidth);

      // log the selection via timeline … but only if its a new selection
      if (self.timelineIDs[0] != d0 || self.timelineIDs[1] != d1) {
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
    }
  };



  this.fixNodes = function( flag ) {
    this.currentNodes.values().forEach( function (node) {
      if (flag) { node.fixed = true; node.px = node.x; node.py = node.y;} else { node.fixed = false; }
    } );
  }


  this.collectNewNodes = function (e0, e1) {
    // prevent a refresh if the timerange did not change
    if (this.timelineIDs[0] != e0 || this.timelineIDs[1] != e1) {

      this.timelineDirection = this.timelineIDs[0] < e0 ? "future" : "past";
      this.timelineIDs[0] = e0;
      this.timelineIDs[1] = e1;

      this.timelineSums = [];
      // get the timeranges and put into paragraph
      var timeFctID = this.timeFcts[e0];
      this.timelineSums.push(this.timeNames[e0]);
      this.extractQueryDates(this.timeNames[e0]);

      // gramatically awesome description
      var preposition = (e0>48) ? " von " : " im ";

      d3.select("#preposition").text(preposition);
      d3.select("#time-facet-name").text(this.timelineSums.join(', '));



      // loop for below block
      //for (var i=0; i<keys.length; i++) {
      //}

      // update the node data
      this.nodeValues = d3.map();

      // add or update the list of nodeValues
      var nodes = this.data[timeFctID].nodes;
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



      // loop for below block
      //for (var i=0; i<keys.length; i++) {
      //}

      var newNodes = d3.map();

      // generate the new nodelist which will be compared
      var nodes = this.data[timeFctID].nodes; // .filter(function (n) { return self.nodeValues.get(n.affiliate_fct_id).affiliate_fct_occurrence_sum > self.minOccurrence;});
      nodes.forEach( function (n) {
        if (newNodes.has(n.affiliate_fct_id) == false) {
          newNodes.set( n.affiliate_fct_id, {
              affiliate_fct_id : n.affiliate_fct_id,
              affiliate_fct : n.affiliate_fct,
              x : self.networkWidth/2,
              y : self.networkHeight/2}
          );
        }
      });

      // remove and add nodes to the current graph
      var keysToRemove = _.difference(this.currentNodes.keys(), newNodes.keys());
      var keysToAdd = _.difference(newNodes.keys(), this.currentNodes.keys());
      keysToRemove.forEach(function (k) { self.currentNodes.remove(k); });
      keysToAdd.forEach(function (k) { self.currentNodes.set(k, self.allNodes.get(k)); });

      // reset the linkcount for the current time_fct
      this.currentNodes.values().forEach ( function(node) { node.linkCount = 0; }, this);

      // analyze the and regenerate the current link-list
      this.currentLinks = d3.map();

      // previous loop for below block
      // for (var i=0; i<keys.length; i++) {
      // }

      var links = this.data[timeFctID].links;
      links.forEach( function (l) {
        var linkID = l.source_affiliate_fct_id+'_'+l.target_affiliate_fct_id;

        // if the current link is not set yet
        if (this.currentLinks.has(linkID) == false) {
          this.currentLinks.set(linkID, {
            source : this.currentNodes.get(l.source_affiliate_fct_id),
            target : this.currentNodes.get(l.target_affiliate_fct_id),
            common_occurrence : l.common_occurrence != undefined ? l.common_occurrence : 0
          });
          // udate the linkcount
          this.currentNodes.get(l.source_affiliate_fct_id).linkCount++;
          this.currentNodes.get(l.target_affiliate_fct_id).linkCount++;
          this.currentNodes.get(l.source_affiliate_fct_id).common_occurrences += l.common_occurrence != undefined ? l.common_occurrence : 0;
          this.currentNodes.get(l.target_affiliate_fct_id).common_occurrences += l.common_occurrence != undefined ? l.common_occurrence : 0;
        }
      }, this);


      // calculate optimal force for simulation
      var k = Math.sqrt( this.currentNodes.values().length/ (this.networkWidth * this.networkHeight) );

      this.force
      .friction(0.65)
        .gravity( 75 * k )
        //.linkStrength(1.0)
        .charge( function (d) {
          return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence, true) *
            self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence, true) *-5;
        })
        .linkStrength( 1)
        .linkDistance( 0)
        .nodes( this.currentNodes.values() )
        .links( this.currentLinks.values() );

      this.force.start();
      //while (this.force.alpha()>0) { this.force.tick(); }
      //this.force.stop();

      // what happens every tick
      this.force.on("tick", function() {

          if (self.nodePositioning == "network" && !self.nodesAreFixed) {

          // move the nodes so they dont overlap
          var nodes = self.currentNodes.values();
          var q = d3.geom.quadtree(nodes), i = 0, n = nodes.length;
          while (++i < n) { q.visit(collide(nodes[i])); }

          // update the position of all nodes which are stored for smooth animation
          self.nodeValues.keys().forEach(function (id) {
            self.nodeValues.get(id).networkPosition = {
              x : self.currentNodes.get(id).x,
              y : self.currentNodes.get(id).y
            };
          });

          self.updateGraph(false);

        }

      });

    }

    self.enterNodes();


  };


  this.calculateSortedPositions = function() {

    // get the value-ranges for the current epoch
    this.maxLinkCount = d3.max(this.currentNodes.values(), function (node) { return node.linkCount; });
    this.minLinkCount = d3.min(this.currentNodes.values(), function (node) { return node.linkCount; });
    this.maxOccurence = d3.max(this.nodeValues.values(), function (nv) { return nv.affiliate_fct_occurrence; });
    this.minOccurence = d3.min(this.nodeValues.values(), function (nv) { return nv.affiliate_fct_occurrence; });

    // scales for positioning
    this.verticalScale = d3.scale.log(100).domain([this.minOccurence, this.maxOccurence]).range([this.networkHeight-160, 300]);
    this.horizontalScale = d3.scale.linear().domain([this.maxLinkCount, this.minLinkCount]).range([this.networkWidth-160, 160]);

    // save the position based on the scales calculated before
    this.currentNodes.values().forEach(function (node) {
      this.nodeValues.get(node.affiliate_fct_id).sortedPosition = {
        y : this.verticalScale(this.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence),
        x : this.horizontalScale(node.linkCount)
      };
    }, this);
  };



  this.updateAxes = function() {

    // axes for nice labeling
    this.xAxis = d3.svg.axis().scale(this.horizontalScale).tickSize(3).tickSubdivide(true).orient("top").tickPadding(0).outerTickSize(1);
    this.yAxis = d3.svg.axis().scale(this.verticalScale).tickSize(3).ticks(2).orient("right").tickFormat(d3.format(".0f")).tickPadding(0).outerTickSize(1);

    if (this.axes == undefined) {

        this.axes = this.svg.append("g").attr("id", "axis").style("opacity", 0.0);
        this.calculateSortedPositions();

        // Add the x-axis.
        this.axes.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + 200 + ")")
          .call(this.xAxis);

        // Add the y-axis.
        this.axes.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + (this.networkWidth-60) + ",0)")
          .call(this.yAxis);

          this.axes.append

          this.axes.append("g").attr("class", "labels");
          this.axes.select("g.labels").append("text").attr("class", "x").text("Verknüpfungen").attr("transform", "translate(50," + 200 + ")");
          this.axes.select("g.labels").append("text").attr("class", "y").text("Einträge").attr("x",  (this.networkWidth-60)).attr("y", (this.networkHeight-60)).attr("transform", "rotate("+ (this.networkWidth-60)+ " " + (this.networkHeight-140) + "90)");

    }

    // update the x-axis.
    this.axes.select("g.x.axis").transition().duration(1000).call(this.xAxis);

    // update the y-axis.
    this.axes.select("g.y.axis").transition().duration(1000).call(this.yAxis);

  };


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


      this.switchNodePositioning = function (nodePositioning) {

        this.nodePositioning = nodePositioning;

        switch (this.nodePositioning) {
          case "network":
          self.force.start(); for (var i=0; i<150; i++){ self.force.tick(); } self.force.stop();
          this.updateGraph();
          this.nodesAreFixed = true;
          window.setTimeout(function() {self.nodesAreFixed = false; self.force.start();}, 1000);
          break;
          case "sortByOccurrence":
          this.force.stop();
          this.nodesAreFixed = true;
          this.updateGraph();
          break;
        }
      };


  this.resetLinkPosition = function(selection) {

    switch (self.nodePositioning) {
      case "network":
      selection
        .attr("x1", function (d) { return self.transformX(d.source); })
        .attr("x2", function (d) { return self.transformX(d.target); })
        .attr("y1", function (d) { return self.transformY(d.source); })
        .attr("y2", function (d) { return self.transformY(d.target); });
      break;


      case "sortByOccurrence":

      selection
        .attr("x1", function(d) { return self.nodeValues.get(d.source.affiliate_fct_id).sortedPosition.x; } )
        .attr("x2", function(d) { return self.nodeValues.get(d.target.affiliate_fct_id).sortedPosition.x; } )
        .attr("y1", function(d) { return self.nodeValues.get(d.source.affiliate_fct_id).sortedPosition.y; } )
        .attr("y2", function(d) { return self.nodeValues.get(d.target.affiliate_fct_id).sortedPosition.y; } );
      break;
    }

  };


  this.resetNodePosition = function (selection) {
    switch (self.nodePositioning) {
      case "network":
      selection
        .attr("cx", function (d) { return self.transformX(d);} )
        .attr("cy", function (d) { return self.transformY(d);} );
      break;

      case "sortByOccurrence":
      selection
        .attr("cx", function (d,i) { return self.nodeValues.get(d.affiliate_fct_id).sortedPosition.x; })
        .attr("cy", function (d,i) { return self.nodeValues.get(d.affiliate_fct_id).sortedPosition.y; });
      break;
    }
  }


  this.resetNodeSize = function (selection) {

    switch (self.nodePositioning) {
      case "network":
      selection
        .attr("r", function (d) {
            return self.radius(self.nodeValues.get(d.affiliate_fct_id).affiliate_fct_occurrence);
      });
      break;
      case "sortByOccurrence":
        selection.attr("r", 2);
      break;
    }
  };


  this.addTransition = function (selection) {
    selection
      .transition()
      .duration(5000)
      .delay( function(d,i) { return (i * 3); } );
  };



  this.resetLinkStyle = function (selection) {
    switch(self.nodePositioning) {
      case "network":
        selection.style("stroke", "#ccc").style("stroke-opacity",0.5).style("stroke-width",1);
      break;
      case "sortByOccurrence":
        selection.style("stroke", "#ccc").style("stroke-opacity",0.1).style("stroke-width",0.5);
      break;
    }
  };


  this.resetNodeStyle = function (selection) {
    // reset the color of the node
    selection
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
      .style("fill-opacity", 0.9);
 };

  this.highlightNode = function (selection) {
    selection
      .call(self.resetNodeStyle)
      .style("fill", "#bf8f9f")
      .style("fill-opacity", 0.9);
  }

  this.highlightLink = function (selection) { selection.style("bf8f9f", "#fff").style("stroke-opacity",1.0); };
  this.resetLink = function (selection) { selection.style("stroke", "#ccc").style("stroke-opacity",0.5).style("stroke-width",1); };

  this.enterNodes = function () {

    this.calculateSortedPositions();
    this.updateAxes();

    // selection
    this.affiliates = this.svg
      .select("g#nodes")
      .selectAll(".affiliate")
      .data(this.force.nodes() , function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id; } );

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
      .style("stroke-opacity", 0.0)
      .transition()
      .duration(1000)
      .delay(function(d,i) { return i*3;})
      .call(this.resetLinkStyle);

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


      var enteredNodes = this.affiliates.enter().append("circle");

      enteredNodes
        .on("mouseover", function (d,i) { self.focus("node", d); self.tip.show(d);} )
        .on("mouseout", function (d,i) { self.defocus(); self.tip.hide();} )
        .on("click", function (d) { /*self.saveOrganisation(d.affiliate_fct_id);*/ self.openDDB("node", d.affiliate_fct); })
        .attr("id", function (d) { return "affiliate_fct_id-" + d.affiliate_fct_id } )
        .attr("class", "affiliate")
        .attr("r", 0.0);

      switch(this.nodePositioning)
      {
        case "network" :
          enteredNodes
            .style("fill-opacity", 0.0)
            .transition()
            .delay(function(d,i) { return i*3;})
            .duration(1000)
            .call(this.resetNodeSize)
            .call(this.resetNodeStyle);

        break;
        case "sortByOccurrence" :
          enteredNodes
            .style("fill-opacity", 0.0)
            .transition()
            .duration(1000)
            .delay(function(d,i) { return i*3;})
            .call(this.resetNodeSize)
            .call(this.resetNodeStyle);
        break;
      }


      // remove unused dom-objects

    this.links
      .exit()
      .transition()
      .duration(300)
      .style("stroke-opacity", 0.0)
      .remove();

    this.clickableLinks
      .exit()
      .remove();

      var removedNodes = this
        .affiliates
        .exit()
        .transition()
        .duration(300)
        .attr("r", 0)
        .style("fill-opacity", 0.0)
        .remove();

      this.affiliates
        .transition()
        .duration(1000)
        .call(this.resetNodeStyle)
        .call(this.resetNodeSize);

      switch (this.nodePositioning) {

        case "network" :
        this.updateGraph(false);
        break;

        case "sortByOccurrence" :
        this.updateGraph(true);
        break;

      }
  };

  this.updateGraph = function (transition) {


    var doTransition = true;
    var delayValue = 3;
    if (transition == false) {
      doTransition = false;
    }

    if (doTransition ) {

      this.links
        .transition()
        .duration(1000)
        .call(this.resetLinkPosition)
        .call(this.resetLinkStyle);

      this.clickableLinks
        .transition()
        .duration(1000)
        .call(this.resetLinkPosition);

      this.affiliates
        .transition()
        .duration(1000)
        .call(this.resetNodePosition)
        .call(this.resetNodeStyle)
        .call(this.resetNodeSize);

      } else {

        this.affiliates
          .call(this.resetNodePosition);

        this.links
          .call(this.resetLinkPosition);

        this.clickableLinks
          .call(this.resetLinkPosition);
      }

      if (this.axes != undefined) {
        if (this.nodePositioning == "network") {
          this.axes.transition().duration(1000).style("opacity", 0.0);
        } else {
          this.axes.transition().duration(1000).style("opacity", 1.0);
        }
      }

  };


  this.radius = function(value, original) {

    var newValue = 0;
    switch(this.nodePositioning) {
      case "network":
        if (this.zoomContext.scale() > 1.0 || original ) {
          newValue = (Math.sqrt((value/Math.PI)));
        } else {
          newValue = (Math.sqrt((value/Math.PI))) * this.zoomContext.scale();
        }
      break;
      case "sortByOccurrence":
      break;
    }

    return newValue;

  };

  this.saveOrganisation = function (affiliate_fct_id) {
    if (self.organisationIDs.indexOf(affiliate_fct_id) == -1) {
        self.organisationIDs.push(affiliate_fct_id);
    }
  };


  this.openDDB = function (mode, data) {
    switch(mode) {
      case "node":
        var url =
        "https://www.deutsche-digitale-bibliothek.de/searchresults?query=&offset=0&viewType=grid" +
        "&facetValues%5B%5D=affiliate_fct_role%3D"+encodeURI(clearString(data))+
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
    this.links.call(this.resetLinkStyle);
    this.affiliates.call(this.resetNodeStyle);
    this.sourceTip.hide();
    this.targetTip.hide();
  };

  this.focus = function (mode, data) {

    this.links.call(this.resetLinkStyle);
    this.affiliates.call(this.resetNodeStyle);

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

    /*
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
      .attr("cy", function (d) {   return self.networkHeight/2 } );

      */
    }

  this.simpleTimename = function (t) {
    var timeName = t;
    if(timeName.indexOf("vor Christus") > -1){ timeName = "-"+timeName.replace(" v. Chr.",""); }
    if(timeName.indexOf("Jahrhundert") > -1){ var s = timeName.split(". Jahrhundert"); timeName = s[0]+"00"; }
    if(timeName.indexOf("bis") > -1){  var s = timeName.split(" bis "); timeName = s[0].toString(); }
    timeName = timeName.replace(" ","");
    if(timeName.charAt(timeName.length-1) == "1"){ timeName = timeName.replace("01","00"); }
    return timeName;
  };

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


function collide ( node ) {
var r = self.radius(self.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence, true),
    nx1 = node.x - r,
    nx2 = node.x + r,
    ny1 = node.y - r,
    ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    //console.log(quad);
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = self.radius(self.nodeValues.get(node.affiliate_fct_id).affiliate_fct_occurrence, true) + self.radius(self.nodeValues.get(quad.point.affiliate_fct_id).affiliate_fct_occurrence, true);
      if (l < r) {
        l = (l - r) / l * .25;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };

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
