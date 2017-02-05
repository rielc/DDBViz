
/* 
*   Copyright by Christopher Pietsch
*   Epochen und Sparten, Visualisierung in D3
*   2014 chrispie.com cpietsch@gmail.com
*   d3.js, mysql
*   The code is a bit messy and represents a
*   generative design process
*/

$(document).ready(function(){
    fm_options = {
        jQueryUI : false,
        position : "right-bottom",
        // name_placeholder:"Name please",                     
        trigger_label : "Feedback",
				title_label: "Your observations, ideas and suggestions",				
        message_required : true,
        show_asterisk_for_required : false,
        feedback_url : "send_feedback",
        submit_label: "Send",
        email_required: false,
        callback: function(data){ 
        },
    };

});

var ddbUrl = "https://www.deutsche-digitale-bibliothek.de/searchresults?query=&lang=en&offset=0&rows=20&viewType=grid";

var margin = {top: 10, right: 20, bottom: 70, left: 5 },
    width = 1200-190 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    lineheight = height;

var yScaleStacked = d3.scale.linear().range([height, 0]),
    yScaleMultiples = d3.scale.linear().range([height, 0]),
    yScaleHorizon = d3.scale.linear().range([height, 0]),
    yScaleLog = d3.scale.log().clamp(true).range([height, 0]),
    yScaleBar = d3.scale.linear().range([height, 0]),
    yScaleBarLog = d3.scale.log().clamp(true).range([0, 100]),
    yScaleBarLog2 = d3.scale.linear().range([0, 100]),
    yScaleTotal = d3.scale.linear().clamp(true).range([2, width]),
    xScale = d3.scale.linear().range([0, width]),
    wordScale = d3.scale.linear().range([10, 25]);
    //colorScale = d3.scale.ordinal().range(colorbrewer.Set1[7].map(inverse));
    // colorScale = d3.scale.cubehelix()
    //   .range([d3.hsl(270, .75, .35), d3.hsl(70, 1.5, .8)]);
    //typeScale = d3.scale.ordinal().range(colorbrewer.Set1[5].map(inverse));


var horizonSize = 5;

var brush = d3.svg.brush()
    .x(xScale);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    //.tickSize(-5,5)
    // .ticks(dataTime.length-1)
    //.ticks([1,2,3])

    
var stack = d3.layout.stack()
    //.offset("wiggle")
    .values(function(d) { return d.values; })
    .x(function(d,i) { return d.timeId; })
    .y(function(d) { return d.count; })
    // .out(function(d, y0, y) {
    //   console.log(d,y0,y)
    //   d.y0 = y0;
    //   d.y = y;
    // })
    

var areaStacked = d3.svg.area()
    .interpolate("cardinal")
    .x(function(d,i) { return xScale(i); }) // i could go on d.timeId > indexof.pos dataTime
    .y0(function(d) { return yScaleStacked(d.y0); })
    .y1(function(d) { return yScaleStacked(d.y0 + d.y); });

var areaMultiples = d3.svg.area()
    .interpolate("cardinal")
    .x(function(d,i) { return xScale(i); })
    .y0(function(d) { return lineheight; })
    .y1(function(d) { return yScaleMultiples(d.count); });

var areaHorizon = d3.svg.area()
    .interpolate("cardinal")
    .x(function(d,i) { return xScale(i); })
    .y0(function(d) { return lineheight; })
    .y1(function(d) { return yScaleHorizon(d.count); });

var line = d3.svg.line()
    .interpolate("cardinal")
    .x(function(d,i) { return xScale(i); })
    .y(function(d) { return yScaleLog(d.count); });

var areaLines = d3.svg.area()
    .interpolate("cardinal")
    .x(function(d,i) { return xScale(i); })
    .y0(function(d) { return lineheight; })
    .y1(function(d) { return yScaleLog(d.count); });


var svg = d3.select("#chart")
    .attr("width", 1200)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .classed("chart", true);


// var mask = d3.select("svg defs")
//   .append("mask")
//       .attr("id", "info")
// mask
//     .append("rect")
//       .attr("width", 1200)
//       .attr("height", height + margin.top + margin.bottom)
//       .attr("fill", "#FFF")
// mask
//     .append("rect")
//       .attr("width", 200)
//       .attr("height", 100)
//       .attr("fill", "#000")


// d3.select("svg")
//   .append("rect")
//     .attr("fill", "#222222")
//     .attr("width", 1200)
//     .attr("height", height + margin.top + margin.bottom)
//     .attr("mask", "url(#info)")
//     .attr("pointer-events", "none")
//     .style("opacity", 0.8)

// svg.append("defs").append("filter")
//     .attr("id", "clippy")
//     .attr("x", "0")
//     .attr("y", "1")
//     .attr("height", "248")
//     .attr("width", "356")
//     .append("feColorMatrix")
//     .attr("type", "identity")

queue()
  .defer(d3.csv, 'data/time_sector.csv')
  .defer(d3.csv, 'data/time_fct.csv')
  .defer(d3.csv, 'data/sector_fct_en.csv')
  .defer(d3.csv, 'data/time_sector_type.csv')
  .defer(d3.csv, 'data/type_fct_en.csv')
  .defer(d3.csv, 'data/time_keywordsNames_en.csv')
  .defer(d3.csv, 'data/time_place_en.csv')
  .defer(d3.csv, 'data/time_affiliate_en.csv')
  .await(dataLoaded);

Array.prototype.getVal = function(id){
  return this.filter(function(d){ return d.id == id; })[0].value;
}
Array.prototype.get = function(id,val){
  return this.filter(function(d){ return d.id == id; })[0][val];
}

function dataLoaded(error, data, dataTime, dataSector, dataSectorType, dataType, dataKeywords, dataPlaces, dataAffiliates) {

  dataTime.forEach(function(d) {
    d.id = +d.id;
    d.sort = +d.value.split("_")[1];
  });
  dataSector.forEach(function(d) {
    d.id = +d.id;
  });
  dataSector.sort(function(a,b){ return d3.descending(a.name, b.name); })
  dataType.forEach(function(d) {
    d.id = +d.id;
  });

  //console.log(dataSector)

  dataKeywords.forEach(function(d) {
    d.timeId = +d.timeId;
    d.keywordId = +d.keywordId;
    d.count = +d.count;
  });
  dataPlaces.forEach(function(d) {
    d.timeId = +d.timeId;
    d.placeId = +d.placeId;
    d.count = +d.count;
  });
  dataAffiliates.forEach(function(d) {
    d.timeId = +d.timeId;
    d.affiliateId = +d.affiliateId;
    d.count = +d.count;
  });

  var dataWords = [
    { key: "Keywords", values: dataKeywords, href: "../keywords" },
    { key: "Places", values: dataPlaces, href: "../places"},
    { key: "Persons/Organizations", values: dataAffiliates, href: "../networks" }
  ];

  colorScale = function(d){
    return dataSector.get(d,"color");
  }

  data.forEach(function(d) {
    d.sectorId = +d.sectorId;
    d.timeId = +d.timeId;
    //d.timeId = dataTime.getVal(+d.timeId);
    d.count = +d.count;
    // d.timeName = dataTime.get(d.timeId, "name")
  });

  dataSectorType.forEach(function(d) {
    d.sectorId = +d.sectorId;
    d.typeId = +d.typeId;
    d.timeId = +d.timeId;
    d.count = +d.count;
  });

  dataTime =  dataTime.filter(function(d){
    return !(d.name.indexOf("Jahrhundert") > -1 && d.sort > 61000)
      && !(d.name.indexOf("Jahrtausend") > -1)
      && d.name != "Historische Zeiträume"
      && d.name != "Geologische Zeiträume"
      && d.name != "Präkambrium"
      && d.name != "Urgeschichtliche Zeiträume"
      && d.sort > 18000;
  })

  dataTime.forEach(function(d){
    if(d.name.indexOf("v. Chr.") > -1){
      d.name = "-"+d.name.replace(" v. Chr.","");
    }
    if(d.name.indexOf("Jahrhundert") > -1){
      var s = d.name.split(". Jahrhundert");
      d.name = s[0]+"00";
    }
    if(d.name.indexOf("bis") > -1){
      d.oldName = d.name;
      var s = d.name.split(" bis ");
      var diff = s[1]-s[0]+1;
      //d.name = s[0]-1 + " " + diff;
      d.name = s[0]-1;
    }
    // jahrhunderte nach zeitpunkte unter 1000 um 0 zu bekommen
    if(!d.oldName && d.name > 0 && d.name <=1000){
      d.name -= 100;
    }
    d.name = +d.name;
  })

  dataTime.push({ id: 1000, name: 2020, sort: 70000, value: "time_70000" });

  dataTime.sort(function(a,b){ return d3.ascending(a.sort, b.sort); })

  dataTimeValues = dataTime.map(function(d){ return d.id; });

  data = data.filter(function(d){
    return dataTimeValues.indexOf(d.timeId) > -1;
  })

  // console.log("data", data, data[0]);
  // console.log("dataTime", dataTime, dataTime[0]);
  // console.log("dataSector", dataSector, dataSector[0]);

  // if have clean that mess up... d3.nest?, precalc data?
  var nested = dataSector.map(function(d){
    var values = dataTime.map(function(e){
      var item = data.filter(function(i){ 
        return i.sectorId == d.id && i.timeId == e.id;
      })[0];

      var types = dataType.map(function(t){
        var item = dataSectorType.filter(function(i){ 
          return i.sectorId == d.id && i.timeId == e.id && t.id == i.typeId;
        })[0];
        //console.log(item)
        return { key: t.id, count: item ? item.count : 0}
      });

      if(item) item.types = types;
      else item = { count: 0, sectorId: d.id, timeId: e.id, types:types};
      //console.log(types)

      return item;
    });

    return { 
      key: d.id,
      values: values,
      total: d3.sum(values, function(d){ return d.count; })
    }
  });

  // dirty hack to get the end of the scale = 2010
  nested.forEach(function(d){
    d.values[d.values.length-1].types = d.values[d.values.length-2].types;
    d.values[d.values.length-1].count = d.values[d.values.length-2].count;
  })

 nested.sort(function(a,b){ return d3.ascending(a.total, b.total); })

  // console.log("nested",nested)
  stack(nested);
  // console.log("layers",nested)
  
  linepadding = 10;
  lineheight = height / nested.length -linepadding;
  

  yScaleTotal.domain([
    0,
    d3.sum(nested,function(d) {
      return d3.sum(d.values, function(d){ return d.count; });
    })
  ])
  yScaleStacked.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);
  yScaleMultiples
    .domain([0, d3.max(data, function(d) { return d.count; })])
    .range([lineheight, 0]);

  yScaleHorizon
    .domain([0, d3.max(data, function(d) { return d.count; })/horizonSize])
    .range([lineheight, 0]);

  yScaleLog.domain([1, d3.max(data, function(d) { return d.count; })]).range([lineheight, 0]);

  xScale.domain([ 0, dataTime.length-1 ])


  //console.log(xScale.rangeBand())
  //xAxis.tickFormat(function(d){ return dataTime.get(d,"name"); }) 
  xAxis
    .tickFormat(function(d,i){ return dataTime[d].name; }) 
    .ticks(dataTime.length-1)
    //.ticks(10)

  // d3.tip mit logging ???

  var tip = d3.tip().offset([-5, 0]).attr('class', 'd3-tip')
    .html(function(d) {
      //console.log(d)
      if(d.types) return dataSector.get(d.key,"nameEn");
      else {
        return dataType.get(d.key,"nameEn") + ": " +d3.format(",")(d.count).replace(/,/g,".");
      }
    });

  svg.call(tip)

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate("+ 0 + "," + (height) + ")")
      .call(xAxis)
      .selectAll(".tick")
      .style("opacity", 0)
      .selectAll("text")
          // .on("click", function(d){
          //   brushed(d);
          //   brushend(d);
          // })
          .attr("y", 0)
          .attr("x", -9)
          .attr("dy", ".35em")
          .attr("transform", "rotate(-90)")
          .style("opacity", function(d,i){
            // console.log(i,dataTime[d].name)
            if(dataTime.name == 2020) return 1;
            else if(dataTime[d].name % 100 == 0 && dataTime[d].name >= 1000) return 1;
            else if(dataTime[d].name % 500 == 0 && dataTime[d].name < 1000) return 1;
            else return 0;
          })
          .style("text-anchor", "end");

  var group = svg.append("g")
      .attr("class", "charts")
      .selectAll(".group")
      .data(nested)
    .enter().append("g")
      .attr("clip-path", "url(#clip)")
      .attr("class", "group")
      .attr("id", function(d){ return d.key})
      .attr('transform', function(d, i){ return "translate(0," + (height - (i+1) * (lineheight+linepadding) ) +")"; });

  group.append("path")
      .attr("class", "lineArea")
      //.attr("d", function(d) { return areaLines(d.values); })
      //.style("fill", function(d,i) { return colorScale(i); });
      .style("fill", "url(#hatch00)")
      //.style("opacity", 0)


  group.append("path")
      .attr("class", "layer")
      //.attr("d", function(d) { return areaMultiples(d.values); })
      .style("fill", function(d, i) { return colorScale(d.key); })
      .style("opacity", 1)

  group.append("path")
      .attr("class", "line")
      //.attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d,i) { return colorScale(d.key); })
      //.style("opacity", 0)

  group.append("rect")
      .attr("class", "total")
      .attr("height", lineheight)
      .attr("width", function(d) { return yScaleTotal(d3.sum(d.values, function(d){ return d.count; })); })
      .style("fill", function(d,i) { return colorScale(d.key); })
      .style("opacity",0)


        
  group.append("text")
      .attr("class", "group-label")
     // .attr("x", -6)
      .attr("text-anchor", "start")
      .text(function(d) { return dataSector.get(d.key,"nameEn"); })
      .attr('transform', function(d, i){ 
        return "translate("+ (yScaleTotal(d3.sum(d.values, function(d){ return d.count; })) + 5) + "," + (lineheight / 2 +3) +")";
      })
      .style("opacity",0)
      


  // var arc = d3.svg.arc()
  //   .innerRadius(100)
  //   .outerRadius(150)

  // var pie = d3.layout.pie()
  //     .sort(null)
  //     .value(function(d) { return d3.sum(d.values, function(d){ return d.count; }); });

  // var g = svg.append("g")
  //   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  //   .selectAll(".arc")
  //       .data(pie(nested))
  //     .enter().append("g")
  //       .attr("class", "arc");

  //   g.append("path")
  //       .attr("d", arc)
  //       .style("fill", function(d,i) { console.log(d); return colorScale(d.data.key); });
  

  // svg.insert("defs", ".group")
  //     .append("clipPath")
  //       .attr("id", "clip")
  //     .append("rect")
  //       .attr("width", width)
  //       .attr("height", lineheight);


  // d3.range(horizonSize).forEach(function(i){
  //   group.append("path")
  //       .attr("class", "horizon")
  //       .attr("transform", function(d) { return "translate(0," + (i * lineheight) + ")"; })
  //       .attr("d", function(d) { return areaHorizon(d.values); })
  //       .style("fill", function(d,i) { return colorScale(d.key); })
  //       .style("opacity", 1/horizonSize)
  // })



  d3.select(".main .menu").selectAll("img")
    .data(["list","stream"])
    .enter()
      .append("img")
      .attr("src", function(d){ return "icons/"+d+".svg" })
      .classed("active", function(d){ return d=="list"; })
      .on("click", function(d){
        d3.selectAll(".menu img").classed("active", function(e){ return d==e; });
        if(d=="list") transitionMultiples();
        else if(d=="stream") transitionStacked();
        else if(d=="intro") transitionArc();
      });
  
  function transitionMultiples() {
    var t = svg.transition().duration(750),
        //l = t.selectAll(".group .line, .group .lineArea").style("opacity",1)
        g = t.selectAll(".group").attr('transform', function(d, i){ return "translate(0," + (height - (i+1) * (lineheight+linepadding) ) +")"; });

    g.selectAll(".layer")
      .attr("d", function(d) { return areaMultiples(d.values); })
      //.style("opacity", 0.8)
    g.select(".group-label")
      .attr('transform', function(d, i){
        return "translate(0," + (lineheight - 6) +")";
      })
      .style("opacity",1)
    g.selectAll(".group .line, .group .lineArea")
      .attr('transform', function(d, i){
        return "translate(0,0)";
      })
      .style("opacity",1)
  }

  function transitionArc() {
    var t = svg.transition().duration(1750),
        //l = t.selectAll(".group .line, .group .lineArea").style("opacity",0)
        g = t.selectAll(".group").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        p = pie(nested);

        // t.select('.charts')
        //   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

        //g.attr('transform', function(){ return "translate(0,0)"; });
    
    t.selectAll(".layer")
      .attrTween("d", function(d,i){
        return pathTween(this,arc(p[i]),4)
      });
      // .each(function(d,i){
      //   var d1 = arc(p[i]);
      //   console.log(i,d1);

      //   d3.select(this).attrTween("d", pathTween(d1, 4))
      // })
      
      // .attr("d", function(d,i){
      //   console.log(d, i, arc(p[i]))
      //   return arc(p[i]);
      // })
  
      //.attr("d", function(d) { return areaStacked(d.values); })
      //.style("opacity", 0.9)

    g.select(".group-label")
      .attr('transform', function(d, i){
        return "translate(0," + yScaleStacked(d.values[0].y0) +")";
      })
      .style("opacity",0)
    g.selectAll(".group .line, .group .lineArea")
      .attr('transform', function(d, i){
        return "translate(0," + yScaleStacked(d.values[0].y0) +")";
      })
      .style("opacity",0)
  }

  function transitionStacked() {
    var t = svg.transition().duration(750),
        //l = t.selectAll(".group .line, .group .lineArea").style("opacity",0)
        g = t.selectAll(".group").attr('transform', function(){ return "translate(0,0)"; });
    g.selectAll(".layer")
      .attr("d", function(d) { return areaStacked(d.values); })
      //.style("opacity", 0.9)

    g.select(".group-label")
      .attr('transform', function(d, i){
        return "translate(0," + yScaleStacked(d.values[0].y0) +")";
      })
      .style("opacity",0)

    g.selectAll(".group .line, .group .lineArea")
      .attr('transform', function(d, i){
        return "translate(0," + yScaleStacked(d.values[0].y0) +")";
      })
      .style("opacity",0)
  }


  function transitionStacked() {
    var t = svg.transition().duration(750),
        //l = t.selectAll(".group .line, .group .lineArea").style("opacity",0)
        g = t.selectAll(".group").attr('transform', function(){ return "translate(0,0)"; });
    g.selectAll(".layer")
      .attr("d", function(d) { return areaStacked(d.values); })
      //.style("opacity", 0.9)

    g.select(".group-label")
      .attr('transform', function(d, i){
        return "translate(0," + yScaleStacked(d.values[0].y0) +")";
      })
      .style("opacity",0)
    g.selectAll(".group .line, .group .lineArea")
      .attr('transform', function(d, i){
        return "translate(0," + yScaleStacked(d.values[0].y0) +")";
      })
      .style("opacity",0)
  }


  function pathTween(self,d1, precision) {

    // return function(d,i) {
      var path0 = self,
          path1 = path0.cloneNode(),
          n0 = path0.getTotalLength(),
          n1 = (path1.setAttribute("d", d1), path1).getTotalLength();

      // Uniform sampling of distance based on specified precision.
      var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
      while ((i += dt) < 1) distances.push(i);
      distances.push(1);

      // Compute point-interpolators at each distance.
      var points = distances.map(function(t) {
        var p0 = path0.getPointAtLength(t * n0),
            p1 = path1.getPointAtLength(t * n1);
        return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
      });

      return function(t) {
        return t < 1 ? "M" + points.map(function(p) { return p(t); }).join("L") : d1;
      };
    
  }

  var insertBrush = function(){
    svg.append("g")
        .attr("class", "x brush")
        .call(brush)
      .selectAll("rect")
        .attr("transform", "translate(0,0)")
        .attr("y", -6)
        .attr("height", height+6)

    svg.select(".brush .background").attr("height", height+40)
  }
  

      
  brush
    .on("brush", brushed)
    .on("brushend", brushend)


  function brushed(d) {
    
    var extent0 = brush.extent(), extent1;
    // console.log("brushed", brush.extent()[0])

    if (d3.event.mode === "move") {
      var d0 = Math.round(extent0[0]),
          d1 = d0 + Math.round((extent0[1] - extent0[0]));
      extent1 = [d0, d1];
    }
    else {
      extent1 = extent0;
      
      extent1[0] = Math.floor(extent0[0]);
      extent1[1] = Math.ceil(extent0[1]);
    }
    d3.select(this).call(brush.extent(extent1));

    brushfilter(extent1);
    
  }


  function brushend(d){


    // console.log("brushend", brush.extent()[0]);
    // sweet stuff eh ? :D
    wordArea
      .selectAll(".wordArea")
      .selectAll(".word")
      .sort(function(a,b){ return b.count - a.count; }).order()
  }


  function d3_brushfilter(callback){
    var last = [];
    return function my(d){
      if(d.toString()!=last.toString()) callback(d);
      if(d.length) last = d;
    }
  }

  var brushfilter = d3_brushfilter(function(extent){
    // console.log("brush",extent);

    svg.selectAll(".x.axis .tick").classed("selected", function(d) { 
      return d >= extent[0] && d <= extent[1];
    });

    var selected = d3.selectAll(".x.axis .selected").data().map(function(d){
      return dataTime[d].id;
    });

    renderFilter(selected,false);

  });

  function renderFilter(selected, intro){

    //console.log("selected", selected)

    var yearRange = [
      dataTime.get(selected[0], "name"),
      dataTime.get(selected[selected.length-1], "name")
    ];

    var timeRange = [
      ddbTime(yearRange[0]),
      ddbTime(yearRange[1])
    ]

    d3.select(".timerange").text(function(d){
      return " from "+ yearRange[0] + " until " + yearRange[1] + "";
    })

    var facetRange = [
      dataTime.get(selected[0], "value"),
      dataTime.get(selected[selected.length-1], "value")
    ];

    selected.pop();

    // console.log("FILTER", facetRange)

    //console.time("render");

    //https://api.deutsche-digitale-bibliothek.de/search?time_fct=time_36100&oauth_consumer_key=PFxeYlfQT6il4h0KFtowd297dBEZPgho0X4YzEQAn3YSFk3ISS61407155687299

    drawNormalizedBar(selected,timeRange);

    if(!intro){
      wordArea.selectAll(".group").selectAll(".wordArea").each(function(d){
        drawWords(d3.select(this), d, selected, timeRange)
      })
    }
    
    //console.timeEnd("render");

  }



  var sidesvg = svg.append("g")
    .attr("transform", "translate(" + (width + 15) + "," + (margin.top-linepadding) + ")")
    .classed("sidesvg", true)

  var totalBar = sidesvg.append("g");  


  var wordArea = d3.select(".main").append("div").attr("id", "wordArea");

  var e = wordArea.selectAll(".group").data(dataWords)
    .enter()
    .append("div")
    .classed("group", true)

  e.append("h2")
    .append("a")
      .attr("title", "jump to detail")
      .attr("href", function(d){ return d.href; })
    .text(function(d){ return d.key; })
    .append("img")
      .attr("src", function(d){ return "icons/detail.svg" })


  e.append("div")
    .attr("class", "wordArea")
    .each(function(d){
      // console.log(d)
      //drawWords(d3.select(this), d, [])
    })

  var enterWord = function(d){
    //console.log("enter", d)

    //log("epochen", "hover", "word", d.key);

    var w = d3.select(this)
      .classed("active", true)
      .append("div").attr("class", "info")
      .text(function(d){
        return d3.format(",")(d.count).replace(/,/g,".");
      })
  }
  var outWord = function(d){
    //console.log("out", d)

    d3.select(this)
      .classed("active", false)
      .select(".info").remove()
  }

  function clickWord(d,key){
    // console.log(key,d);

  }

  var urlTable = { "Keywords" : "keywords_fct", "Places" : "place_fct", "Persons/Organizations" : "affiliate_fct_role", }

  function drawWords(area,data,selected,timeRange){

    //console.log(timeRange)

    var words = data.values.filter(function(d){
      return selected.indexOf(d.timeId) > -1;
    })

    //console.log("words", words)

    var nestedWords = d3.nest()
    .key(function(d) { return d.nameEn; })
    .entries(words)
    
    nestedWords.forEach(function(d){
      d.count = d3.sum(d.values, function(d){ return d.count; })
    })
    nestedWords.sort(function(a,b){ return b.count - a.count; })
    nestedWords = nestedWords.slice(0,40)
    //if(data.key == "Personen/Organisation") nestedWords = nestedWords.slice(0,10)

    wordScale.domain(d3.extent(nestedWords, function(d){ return d.count; }))


    var area = area.selectAll(".word")
      .data(nestedWords, function(d){ return d.key; })
    
    area.enter()
      .append("div")
      .on("mouseenter", enterWord)
      .on("mouseleave", outWord)
      .on("click", function(d){
      })
      .classed("word", true)
      .append("a").classed("text", true)
      .style("font-size", "0px")
      // .transition()
      // .duration(100)
      .text(function(d){ return d.key; })
      .attr("target", "_blank")
      .style("font-size", function(d){ return wordScale(d.count)+"px"; })

    var e = area.exit()
      // .transition()
      // .duration(100)
      // .style("opacity", 0)
      .remove()
      // e.select(".text").style("font-size", "0px")
      // .remove();
    

    area.select(".text")
      // .transition()
      // .duration(100)
      .text(function(d){ return d.key; })
      .style("font-size", function(d){ return wordScale(d.count)+"px"; })
      // .attr("href", function(d){
      //   return ddbUrl +
      //     "&facetValues%5B%5D="+urlTable[data.key]+"%3D"+d.key +
      //     "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+timeRange[1]+"%5D"+
      //     "&facetValues%5B%5D=end_time%3D%5B"+timeRange[0]+"+TO+*%5D"+
      //     "&offset=0";
      // })
      .attr("href", function(d){
        // console.log(urlTable, data.key)
        var nameDe = d.values[0].name;
        return ddbUrl +
          "&facetValues%5B%5D="+urlTable[data.key]+"%3D"+nameDe +
          "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+timeRange[1]+"%5D"+
          "&facetValues%5B%5D=end_time%3D%5B"+timeRange[0]+"+TO+*%5D"+
          "&offset=0";
      })

    // area.order()

  }

  var barWidth = 5;
  var barPadding = 5;

  // console.log(dataType)

  var createTypeLegend = once(function() {
    sidesvg.append("g")
        .attr("class", "bar axis")
        .attr("transform", "translate(0," + (height) + ")")
        .selectAll(".tick")
            .data(dataType)
              .enter()
              .append("g")
              .classed("tick", true)
              .attr('transform', function(d, i){ return "translate(" + (i) * (barWidth+barPadding)  +", 0)"; })
              .append("text")
              .attr("y", 2)
              .attr("x", -9)
              .attr("dy", ".35em")
              .attr("transform", "rotate(-90)")
              .style("text-anchor", "end")
              .text(function(d){ return d.nameEn; })
              .attr("opacity",0)
              .transition()
              .duration(300)
              .delay(function(d,i){
                  return i*100;
                })
              .attr("opacity",0.8)
  });

  function drawNormalizedBar(selected,timeRange){

    // still dont like this here...
    var selectedData = nested.map(function(d){
      var values = selected.map(function(e){
        return d.values.filter(function(f){ return f.timeId == e; })[0];
      })
      var count = d3.sum(values, function(d) { return d.count; })
      var types = dataType.map(function(t,i){
        return { key:t.id, count: d3.sum(values, function(d) { return d.types[i].count; }) };
      })
      //console.log(values, types)
      return { key:d.key, values: values, count: count, types: types };
    });

    yScaleBarLog
      .range([lineheight,0])
      .domain([1,d3.max(selectedData, function(d) { return d.count; })])
      //.clamp(true)
      //.nice()

    // todo! 
    //console.log(d3.max(selectedData, function(d) { return d.count; }), selectedData)
    
    yScaleBarLog2
      .range([0,lineheight*2])
      .domain([0,d3.max(selectedData, function(d) { return d.count; })])
    // selectedData.forEach(function(d) { 
    //   console.log(d,yScaleBarLog(d.count),d.count)
    // });
    
    var e = totalBar.selectAll(".items")
      .data(selectedData)

    e.select(".total")
      //.attr("y", function(d) { return yScaleBarLog(d.count); })
      .attr("width", function(d) { return yScaleBarLog2(d.count); })
      .on('click', function(d){
        // console.log(d);
        var url = ddbUrl +
          "&facetValues%5B%5D=sector_fct%3D"+dataSector.get(d.key,"value") +
          "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+timeRange[1]+"%5D"+
          "&facetValues%5B%5D=end_time%3D%5B"+timeRange[0]+"+TO+*%5D";
        window.open(url);
      })

    var i = e.enter()
      .append("g")
      .classed("items",true)
      .attr('transform', function(d, i){ return "translate(0," + (height - (i+1) * (lineheight+linepadding) ) +")"; })

    i.append("rect")
      .classed("total",true)
      //.attr("y", function(d) { return yScaleBarLog(d.count); })
      .attr("width", 0)
      .attr('transform', function(d, i){ return "translate(" + (dataType.length+1) * (barWidth+barPadding)  +", 0)"; })
      .attr("height", lineheight)
      .style("fill", function(d,i) { return colorScale(d.key); })
      .style("stroke", function(d,i) { return colorScale(d.key); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .on('click', function(d){
        // console.log(d)
        var url = ddbUrl +
          "&facetValues%5B%5D=sector_fct%3D"+dataSector.get(d.key,"value") +
          "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+timeRange[1]+"%5D"+
          "&facetValues%5B%5D=end_time%3D%5B"+timeRange[0]+"+TO+*%5D";
        window.open(url);
      })
      .transition()
      .duration(1000)
      .delay(500)
      .attr("width", function(d) { return yScaleBarLog2(d.count); })


    createTypeLegend();

    var types = i.selectAll(".type").data(function(d){ return d.types; }).enter();
    types
      .append("rect")
      .classed("background",true)
      .attr("height", lineheight)
      .attr("width", barWidth)
      .attr('transform', function(d, i){ return "translate(" + (i) * (barWidth+barPadding)  +", 0)"; })
      .attr("fill-opacity",0)
      .transition()
      .duration(300)
      .delay(function(d,i){
          return i*100;
        })
      .attr("fill-opacity",1)

    types
      .append("rect")
      .classed("type",true)
      .attr('transform', function(d, i){ return "translate(" + (i) * (barWidth+barPadding)  +", 0)"; })
      .attr("width", barWidth)
      .attr("y", function(d) { return (isNaN(yScaleBarLog(d.count)) ? lineheight : yScaleBarLog(d.count)); })
      .attr("height", function(d) { return lineheight - (isNaN(yScaleBarLog(d.count)) ? lineheight : yScaleBarLog(d.count)); })
      .style("fill", "#FFF")
      // .on('mouseover', function(d){
      //   console.log(d)
      //   i.selectAll(".type").style("opacity", function(e){
      //     return e.key == d.key ? 1 : 0.2;
      //   })
      // })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .on('click', function(d){
        var sectorId = d3.select(this.parentNode).datum().key;
        var typeId = d.key;
        var url = ddbUrl+
          "&facetValues%5B%5D=sector_fct%3D"+dataSector.get(sectorId,"value")+
          "&facetValues%5B%5D=type_fct%3D"+dataType.get(typeId,"value")+
          "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+timeRange[1]+"%5D"+
          "&facetValues%5B%5D=end_time%3D%5B"+timeRange[0]+"+TO+*%5D";
        window.open(url);
      })
      .style("opacity",0)
      .transition()
      .duration(300)
      .delay(function(d,i){
          return i*100;
        })
      .style("opacity",1)
      //.style("fill", function(d,i) { return typeScale(i); })

    e.selectAll(".type")
      .data(function(d){ return d.types; })
      .attr("y", function(d) { return (isNaN(yScaleBarLog(d.count)) ? lineheight : yScaleBarLog(d.count)); })
      .attr("height", function(d) { return lineheight - (isNaN(yScaleBarLog(d.count)) ? lineheight : yScaleBarLog(d.count)); })
      .on('click', function(d){
        var sectorId = d3.select(this.parentNode).datum().key;
        var typeId = d.key;
        var url = ddbUrl+
          "&facetValues%5B%5D=sector_fct%3D"+dataSector.get(sectorId,"value")+
          "&facetValues%5B%5D=type_fct%3D"+dataType.get(typeId,"value")+
          "&facetValues%5B%5D=begin_time%3D%5B*+TO+"+timeRange[1]+"%5D"+
          "&facetValues%5B%5D=end_time%3D%5B"+timeRange[0]+"+TO+*%5D";
        window.open(url);
      })


    var legend = i.append("g")
          .attr("class", "legend")
          .attr('transform', function(d, i){ 
            return "translate( "+ (lineheight + 30 + yScaleBarLog2(d.count)) +", " + lineheight/2 + ")";
          })
          //.style("fill", function(d,i) { return colorScale(i); })

    // legend.append("line")
    //     .attr("x2", 5)
    //     .style("stroke", function(d,i) { return colorScale(i); })

    legend.append("text")
        .attr("x", 7)
        .attr("dy", ".35em")
        .text(function(d) { return d3.format(",")(d.count).replace(/,/g,"."); })
        .style("opacity",0)
        .transition()
        .duration(300)
        .delay(1200)
        .style("opacity",1)

    e.select(".legend")
      .attr('transform', function(d, i){ 
        return "translate( "+ (lineheight + 30 + yScaleBarLog2(d.count)) +", " + lineheight/2 + ")";
      })

    e.select(".legend text").text(function(d) { return d3.format(",")(d.count).replace(/,/g,"."); });
    
  }

  // d3.transition().delay(4000).each("end",function(d){
  //   //renderFilter(dataTimeValues);
  //   renderFilter(dataTimeValues.slice(0,1))
  // })

  var animateIntro = function(){

      // todo: in an other life i will use d3.timer() for that ;)

      svg.selectAll(".total")
        .transition()
          .duration(500)
          .delay(function(d,i){
            return (7-i)*500;
          })
          .style("opacity",1)
        .transition()
          .delay(4000)
          .duration(1000)
          .attr("height", 1)
          .attr('transform', function(d, i){ return "translate(0," + lineheight +")"; })
        .transition()
          .duration(1000)
          .attr("width", width)
          .each("end", function(d,i){
            if(i==0) renderFilter(dataTimeValues.slice(0,1),true)
          })
        .transition()
          .duration(1000)
          .each("end", function(d,i){
            if(i==0) animateTimeline();
          })
          .remove()

      svg.selectAll(".group-label")
        .transition()
          .duration(500)
          .delay(function(d,i){
           return (7-i)*500;
          })
          .style("opacity",1)
        .transition()
          .delay(5000)
          .duration(1000)
          .attr('transform', function(d, i){ return "translate(0," + (lineheight - 6) +")"; })
          .style("opacity",1)
			
			// avoid jumping skip intro
			setTimeout(function(){ $(".timerange").removeClass("intro"); }, 14500);
  }

  var skipIntro = function(){
		$(".timerange").removeClass("intro");
		
    svg.selectAll(".axis .tick").style("opacity", 0.8);
    svg.selectAll(".group-label")
      .attr('transform', function(d, i){ return "translate(0," + (lineheight - 6) +")"; })
      .style("opacity",1);
    d3.select("#wordArea").transition().style("opacity", 1);
    d3.select(".main .menu").transition().style("opacity", 1);
    d3.select(".main .help").transition().style("opacity", 1);

    renderFilter(dataTimeValues,false)

    insertBrush();

    svg
      .selectAll(".layer")
      .attr("d", function(d,i) { 
        return areaMultiples(d.values);
      })

    svg
      .selectAll(".line")
      .attr("d", function(d,i) { 
        return line(d.values);
      })

    svg
      .selectAll(".lineArea")
      .attr("d", function(d,i) { 
        return areaLines(d.values);
      })

    //svg.selectAll(".total").remove();
  }


  


  var animateTimelineNow = 0;
  var animateTimeline = function(){

    areaMultiples
      .y1(function(d,i) { return yScaleMultiples(i <= animateTimelineNow ? d.count : 0); });

    areaLines
      .y1(function(d,i) { return yScaleLog(i <= animateTimelineNow ? d.count : 0); });

    line
      .y(function(d,i) { return yScaleLog(i <= animateTimelineNow ? d.count : 0); });


    svg.selectAll(".axis .tick")
      .transition()
      .duration(100)
      .delay(function(d,i){
        return i*50;
      })
      .each("start", function(d,i){
        // console.log("add",i);
        animateTimelineNow = i;
        
        svg
          .selectAll(".layer")
          .attr("d", function(d,i) { 
            return areaMultiples(d.values);
          })

        svg
          .selectAll(".line")
          .attr("d", function(d,i) { 
            return line(d.values);
          })

        svg
          .selectAll(".lineArea")
          .attr("d", function(d,i) { 
            return areaLines(d.values);
          })

        if (i==dataTime.length-1) renderFilter(dataTimeValues.slice(0,i),false)
        else if(i>0) renderFilter(dataTimeValues.slice(0,i),true)
      })
      .each("end",  function(d,i){
        // console.log("END",i, dataTime.length,dataTime)

        if(i == dataTime.length-1) {
          // console.log("END Timeline");
          d3.transition().delay(1000).each("end", function(){
            insertBrush();
            d3.select(".skip").style("display","none");
            d3.select("#wordArea").transition().style("opacity", 1);
            d3.select(".main .menu").transition().style("opacity", 1);
            d3.select(".main .help").transition().style("opacity", 1);
          })
        }
      })
      .style("opacity", 1)
  }

  //skipIntro();
  //animateTimeline();

  if(location.hash=="#skip"){
    skipIntro();
  } else {
    d3.select(".skip").style("display","inline");
    animateIntro();
  }
  




  var overlay = d3.select("#overlay svg").on("click", function(){
    $('.help img').click();
  });
  var generateOverlay = function(){
    
    overlay.style("display", "inline").selectAll("*").remove();

    var infos = [
      {
        x: 45,
        y: 15,
        text: "Switch between multiple and stacked graph",
        r: 0
      },
      {
        x: 10,
        y: 300,
        text: "Cultural heritage sector",
        r: 0
      },
      {
        x: 600,
        y: 60,
        text: "Logarithmic Scale",
        r: 10
      },
      {
        x: 810,
        y: 60,
        text: "Linear Scale",
        r: 10
      },
      {
        x: 1028,
        y: 60,
        text: "Media type",
        r: 40
      },
      {
        x: 1080,
        y: 195,
        text: "Number of objects found per sector within time span",
        r: 30
      },
      {
        x: 130,
        y: 520,
        text: "Top 20 keywords of the selection",
        r: 20
      },
      {
        x: 420,
        y: 520,
        text: "Top 20 places of the selection",
        r: 20
      },
      {
        x: 900,
        y: 520,
        text: "Top 20 persons and organizations of the selection",
        r: 20
      },
      {
        x: 565,
        y: 454,
        text: "Jump to detail",
        r: 15
      }
    ];

    var brush = d3.select(".brush .extent").node().getBBox();

    if(brush.x!=0){
      infos.push({
        x: brush.x+brush.width/2,
        y: 200,
        text: "Time period selection",
        r: 10
      });
    }
    

    overlay.selectAll("g").data(infos)
      .enter()
        .append("g")
        .attr("transform", function(d){
          return "translate("+d.x+","+d.y+"), rotate(10)";
        })
        .transition()
        .delay(function(d,i){
          return i*50;
        })
        // .on("mouseover", function(d){
        //   d3.select(this)
        //     .transition()
        //     .duration(200)
        //     .attr("transform", function(d){
        //       return "translate("+d.x+","+d.y+"), rotate(10)";
        //     })
        // })
        // .on("mouseleave", function(d){
        //   d3.select(this)
        //     .transition()
        //     .duration(200)
        //     .attr("transform", function(d){
        //       return "translate("+d.x+","+d.y+"), rotate(0)";
        //     })
        // })
        .each("end",function(d){
          var infoTip = d3.select(this);

          var p = d.x > width / 2;

          infoTip
            .append("circle")
              .attr("r", function(d){
                return d.r;
              })

          infoTip
            .append("line")
              .attr("x1", 0)
              .attr("y1", 0)
              .attr("x2", p ? -5 : 5)
              .attr("y2", 5)


          var background = infoTip
            .append("rect")

          var text = infoTip
            .append("text")
            .text(function(d){
              return d.text;
            })

          var bb = text.node().getBBox();

          text
            .attr("transform", "translate("+(p ? (-bb.width-8) : (4+4))+","+20+")")

          //console.log(bb)
          // todo: 14 height anpassen
          background
            .attr("width", bb.width+(4*2))
            .attr("height", 22)
            .attr("transform", "translate("+(p ? (-bb.width-12) : 4)+","+(15-(14)+4)+")");

          infoTip
            .transition()
            .ease("elastic")
            .attr("transform", function(d){
              return "translate("+d.x+","+d.y+"), rotate(0)";
            })

        })
  }

  d3.select('.help')
    .selectAll("img")
    .data([{active:false}])
    .enter()
      .append("img")
      .attr("src", "icons/info.svg")
      .on("click", function(d){
        d.active = !d.active;
        d3.select(this).classed("active", d.active);
        if(d.active) generateOverlay();
        else overlay.style("display", "none")
     })
  //generateOverlay();
     
  addEventListener('hashchange', function() {
    if(location.hash == "#skip") {
      location.reload(true);
    }
  }, false);  
}


// STUFF

function once(fn, context) { 
  var result;

  return function() { 
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}


function inverse(hex) {
  if (hex.length != 7 || hex.indexOf('#') != 0) {
    return null;
  }
  var r = (255 - parseInt(hex.substring(1, 3), 16)).toString(16);
  var g = (255 - parseInt(hex.substring(3, 5), 16)).toString(16);
  var b = (255 - parseInt(hex.substring(5, 7), 16)).toString(16);
  var inverse = "#" + pad(r) + pad(g) + pad(b);

  return inverse
}

function pad(num) {
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
}

function ddbTime(year)
{
  var d2 = new Date(0);
      d2.setUTCFullYear(year);
  var d1 = new Date(1970,0,01);
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return parseInt(new Number(d2 - d1).toFixed(0))+ 719164 ;
}
