var overlay = {};

function generateOverlay () {
    
    overlay
    .style("display", "inline")        
    .style("width", $(window).width)
    .selectAll("*").remove();    
    //wenn button nach abc sortiert ist, mach das rückgängig
    if ($("#abc").hasClass('active') ){
        var f = document.createEvent('UIEvents');
        f.initUIEvent('click', true, true, window, 1);
        d3.select(".button").classed("active", true).node().dispatchEvent(f);
    };
    //mouseover bei stuttgart
    var e = document.createEvent('UIEvents');
    e.initUIEvent('mouseover', true, true, window, 1);
    d3.select(".Stuttgart_max .pie-chart .Archives").node().dispatchEvent(e);

    var infos = 
        [
            { x: 355, y: 235, text: "Circle size is defined by the number of entries", r: 30},
            { x: 150, y: 360, text: "Arc length represents the number of entries for a given sector", r: 25},
            { x: 950, y: 520, text: "Hovering mouse over an arc displays name of the corresponding sector", r: 30},
            { x: 55, y: 140, text: "Sorted by alphabet or by frequency", r: 20}
        ];

    //magie mit mathe
    overlay
    .selectAll("g")
    .data(infos)
      .enter()
        .append("g")
        .attr("class", "infoField")
        .attr("transform", function(d){ return "translate("+d.x+","+d.y+"), rotate(10)"; })
        .transition()
        .delay(function(d,i){ return i*50; })
        .each("end",function(d){
          var infoTip = d3.select(this);
          var p = d.x > $("body").width()/2;

          infoTip.append("circle").attr("r", function(d){ return d.r; })
          infoTip.append("line").attr("x1", 0).attr("y1", 0).attr("x2", p ? -5 : 5).attr("y2", 5)

          var background = infoTip.append("rect")
          var text = infoTip.append("text").text(function(d){ return d.text; })
          var bb = text.node().getBBox();

          text.attr("transform", "translate("+(p ? (-bb.width-8) : (4+4))+","+15+")");

          background
            .attr("width", bb.width+(4*2))
            .attr("height", bb.height).attr("transform", "translate("+(p ? (-bb.width-12) : 4)+","+(15-(bb.height)+4)+")");
          infoTip.transition().attr("transform", function(d){ return "translate("+d.x+","+d.y+"), rotate(0)";});
    })
}

    $(document).ready( function() {
    // feedback feld
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

    //bei seitenstart - animation abspielen fade in
    d3.select("#wrapper")
        .style("opacity", 0)
        .transition()
        .ease("exp-in-out")
        .duration(1500)
        .style("opacity", 1);
    //help button overlay zuweisen
    overlay = d3.select("#overlay svg");     
        
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
        });

        $("#overlay svg").click(function(){
            var e = document.createEvent('UIEvents');
            e.initUIEvent('mouseout', true, true, window, 1);
            d3.select(".Stuttgart_max .pie-chart .Archives").node().dispatchEvent(e);
            d3.select(".help img")
                .classed("active", false);
            overlay.style("display", "none")
        });
        
    });


//all die schönen kreise entstehen hier
function drawPie(dataSet, selectString, outerRadius, cityName) {
    // Color Scale Handling...
    var color = d3.scale.ordinal().range(['#be708b', '#91b2da', '#78d2bb', '#41a069', '#c06d45', '#e3a747', '#a9c54a' ]);

    var pieCenterX = outerRadius;
    var pieCenterY = outerRadius;

    var canvasWidth = outerRadius * 2;
    var canvasHeight = outerRadius * 2;
    var margin = { top: 120, right: 50, bottom: 20, left: 50 };
    
    var textLabel;
    var textMagnitude;
    //kommas zu punken
    function formatNumber (number) {
    var reg = new RegExp(",", 'g');
    return d3.format(",")(number).replace(reg, ".");
    }
    //kreisbögen füllen, animieren, an und ausknipsen lalala
    function fillArc() {
        var arc = d3.selectAll("." + this.getAttribute('class'));

        d3.selectAll("#pie-arc")
        .transition()
        .duration(350)
        .style('opacity', .2);
        
        arc.style('opacity', 1)
        .transition()
        .duration(350)
        .style('fill', function() {
            return d3.rgb(d3.select(this).style("fill")).brighter(.7);
        });
    }
        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) { return '<h3>'+d.data.legendLabel+'</h3><p>'+formatNumber(d.data.magnitude)+' entries</p>'; } );

                
    function refillArc() {
        d3.selectAll("#pie-arc")
        .style('fill', function (d,i){
            return color(i);});
    }

    function restoreArcColor() {
        var arc = d3.select(this);
        var colorValue = arc.attr('color_value');

        arc
        .transition()
        .duration(350)
        .style('opacity', 1).style('fill', colorValue);
        
        d3.selectAll("#pie-arc")
        .transition()
        .duration(350)
        .style('opacity', 1).style('fill', function (d, i) {
            return color(i);});
    }

    // Create a drawing canvas...
    var canvas = d3.select(selectString)
        .append('svg:svg') //create the SVG element inside the <body>
        .data([dataSet]) //associate our data with the document
        .attr('width', canvasWidth) //set the width of the canvas
        .attr('height', canvasHeight) //set the height of the canvas
        .append('svg:g') //make a group to hold our pie chart
        .attr('transform', 'translate(' + pieCenterX + ',' + pieCenterY + ')'); // Set center of pie

    // Define an arc generator. This will create <path> elements for using arc data.
    var arc = d3.svg.arc()
        .innerRadius(outerRadius / 1.2 ) // Causes center of pie to be hollow
        .outerRadius(outerRadius);

    // Define a pie layout: the pie angle encodes the value of dataSet.
    // Since our data is in the form of a post-parsed CSV string, the
    // values are Strings which we coerce to Numbers.
    var pie = d3.layout.pie()
        .value(function(d) { return d.magnitude; });

    // Select all <g> elements with class slice (there aren't any yet)
    var arcs = canvas.selectAll('g.slice')
         // Associate the generated pie data (an array of arcs, each having startAngle,
        // endAngle and value properties)
        .data(pie)
        // This will create <g> elements for every 'extra' data element that should be associated
        // with a selection. The result is creating a <g> for every object in the data array
        // Create a group to hold each slice (we will have a <path> and a <text>      // element associated with each slice)
	   .enter()
            .append("svg:a")
            .attr("xlink:href", function(d) { return d.data.link; })
            .attr("target", "_blank")
        .append('svg:g')
        .attr('class', 'slice')
        .style('stroke', 'none')
        .style("fill", "#000");
    
    arcs.call(tip);

    
    arcs.append('svg:path')
        // Set the color for each slice to be chosen from the color function defined above
        // This creates the actual SVG path using the associated data (pie) with the arc drawing function
        .attr('fill', function (d, i) {
            return color(i);})
        .attr('color_value', function (d, i) {
            return color(i);})
        .attr('index_value', function (d, i) {
            return 'index-' + i;})
        .attr('id', 'pie-arc')
        .attr('class', function (d) {return d.data.legendLabel;})
        .attr('d', arc)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .on('mouseout.restoreArcColor', restoreArcColor)
        .on('mouseover.refillArc', refillArc)
        .on('mouseover.fillArc', fillArc);
    
}