const width = 500;
const height = 500;

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("rect")
  .enter()
  .append("rect")
    .attr("width", 300)
    .attr("height", 100)
    .attr("y", 0)
    .attr("x", 0)
    .attr("fill", "green")
