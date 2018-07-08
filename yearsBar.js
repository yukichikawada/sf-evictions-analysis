// high count for neighborhood is mission at 346
var data2 = [];
var yearCount = years.map(year => year.count);
data2 = yearCount.map(yr => yr);

var yearNumbers = years.map(year => year.year);

var height2 = 750,
    width2 = 750,
    barwidth2 = 25,
    barOffset2 = 5;
var tempColor;

var yScale2 = d3.scaleLinear()
                .domain([0, d3.max(data2)])
                .range([0, height2]);

var xScale2 = d3.scaleBand()
                .domain(d3.range(0, data2.length))
                // .padding(0.1)
                .range([0, width2 - 30]);

var toolTip2 = d3.select('body')
                  .append('div')
                  .style('position', 'absolute')
                  .style('padding', '0 10px')
                  .style('background', 'pink')
                  .style('opacity', 0);

var chart2 = d3.select('div.second')
                .append('svg')
                .attr('width', width2)
                .attr('height', height2)
                .append('g')
                .attr('transform', 'translate(25,0)')
                .style('background', '#C9D7D6')
                .selectAll('rect').data(data2)
                .enter()
                .append('rect')
                .style('fill', 'grey')
                .attr('width', xScale2.bandwidth())

                .attr('x', (d, i) => xScale2(i))
                .attr('height', 0)
                .attr('y', height2)

                .on('mouseover', function(d) {
                  d3.select(this)
                    .style('opacity', 0.5);
                })

                .on('mouseleave', function(d) {
                  d3.select(this)
                    .style('opacity', 1);
                })

                .on('mouseover', function(d) {
                  toolTip2.transition()
                          .style('opacity', 0.9);
                  toolTip2.html(d)
                          .style('left', (d3.event.pageX - 35) + 'px')
                          .style('top', (d3.event.pageY - 30) + 'px');

                  tempColor = this.style.fill;

                  d3.select(this)
                    .style('opacity', 0.5)
                    .style('fill', 'yellow');
                })
                .on('mouseleave', function(d) {
                  tempColor = this.style.fill;
                  d3.select(this)
                    .style('opacity', 1)
                    .style('fill', 'grey');
                });

chart2.transition()
  .attr('height', (d) => yScale2(d))
  .attr('y', (d) => (height2 - yScale2(d)))
  .delay((d, i) => (i * 20))
  .duration(1000)
  .ease(d3.easeElastic);

var mapScale = d3.scaleLinear()
                  .domain([1997, 2018])
                  .range([24, width2 - 4]);

var axisBot = d3.axisBottom(mapScale)
                .tickValues(yearNumbers);

 var canvas = d3.select('div.second')
                        .append('svg')
                        .attr('width', width2)
                        .attr('height', height2);


canvas.append('g').call(axisBot);


// var vAxis2 = d3.axisLeft()
//                 .scale(yScale2)
//                 .ticks(10);

// var vGuide2 = d3.select('svg').append('g');

// vAxis2(vGuide2);

// vGuide2.attr('transform', 'translate(25,0)');

// var width2 = 500,
//   scaleFactor = 0.15,
//   barHeight = 30;

// let svg2 = d3.select("div.second")
//   .append("svg")
//   .attr("height", barHeight * data.length)
//   .attr("width", width2)

// var bar = svg2.selectAll("g") 
//    .data(data)
//    .enter()
//    .append("g")
//    .attr("transform", function(d, i) {
//       return "translate(0," + i * barHeight + ")";
//    });

// bar.append('rect')
//   .attr('width', (d) => (d * scaleFactor))
//   .attr('height', barHeight - 1);

// bar.append('text')
//   .attr('x', d => d * scaleFactor)
//   .attr('y', barHeight / 2)
//   .attr('dy', '.35em')
//   .text(d => d);