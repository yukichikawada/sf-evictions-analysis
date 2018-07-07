// high count for neighborhood is mission at 346
var data = [];
var yearCount = years.map(year => year.count);
data = yearCount.map(yr => yr);

var width2 = 500,
  scaleFactor = 0.15,
  barHeight = 30;

let svg2 = d3.select("div.second")
  .append("svg")
  .attr("height", barHeight * data.length)
  .attr("width", width2)

var bar = svg2.selectAll("g") 
   .data(data)
   .enter()
   .append("g")
   .attr("transform", function(d, i) {
      return "translate(0," + i * barHeight + ")";
   });

bar.append('rect')
  .attr('width', (d) => (d * scaleFactor))
  .attr('height', barHeight - 1);

bar.append('text')
  .attr('x', d => d * scaleFactor)
  .attr('y', barHeight / 2)
  .attr('dy', '.35em')
  .text(d => d);