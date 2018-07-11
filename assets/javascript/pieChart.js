// consts are years and hoods

const evictionTypes = [
  "Access Denial", "Breach of Contract", "Capital Improvement", "Condo Conversion",
  "Demolition", "Development", "Ellis Act", "Failure To Sign Renewal",
  "Illegal Use", "Late Payments", "Non Payment", "Owner Move In", "Nuisance",
  "Other Cause", "Roommate Same Unit", "Substantial Rehab", "Unapproved Subtenant"
];

const width1 = 700;
const height1 = 700;

function createPieChart(width, height) {
  const pie = d3.select('#pie')
              .attr('width', width1)
              .attr('height', height1);

  pie.append('g')
      .attr('transform', 'translate(' + width1 / 2 + ", " + (height1 / 2 + 10) + ")")
      .classed('chart', true);

  pie.append('text')
      .attr('x', width1 / 2)
      .attr('y', '1em')
      .attr('font-size', '1.5em')
      .style('text-anchor', 'middle')
      .classed('pie-title', true);
}

function drawPieChart(data, currentYear) {
  const pie = d3.select('#pie');

  const arcs = d3.pie()
                  .value(d => d.count);

  const path = d3.arc()
                  .outerRadius(+pie.attr('height') / 2 - 50)
                  .innerRadius(0);

  const yearData = data.filter(d => d.year === currentYear);
  const colorScale = d3.scaleOrdinal()
                        .domain(d3.extent(data, d => d.count))
                        .range(d3.schemeCategory20);

  d3.select("#year-val").text(currentYear);

  const update = pie.select('.chart')
                      .selectAll('.arc')
                      .data(arcs(yearData));

  update.exit()
        .remove();

  update.enter()
        .append('path')
          .classed('arc', true)
          .attr('stroke', '#dff1ff')
          .attr('stroke-width', '0.25px')
        .merge(update)
          .attr('fill', d => colorScale(d.data.count))
          .attr('d', path);
}


function updateTooltip() {
  const tooltip = d3.select('.tooltip');
  const tgt = d3.select(d3.event.target);
  const isArc = tgt.classed('arc');
  let data;
  if (isArc) {
    data = tgt.data()[0].data;
  }

  tooltip.style('opacity', +isArc)
          .style('left', (d3.event.pageX - tooltip.node().offsetWidth / 2) + 'px')
          .style('top',  (d3.event.pageY - tooltip.node().offsetHeight - 10) + 'px');


  if (data) {
    tooltip.html(`
                 <p>Type: ${data.type}</p>
                 <p>Count: ${data.count} ~ ${((data.count / data.total) * 100 ).toFixed(1)}%</p>
                 <p>Year: ${data.year}</p>
                 `)
  }
}

createPieChart(700, 700);
drawPieChart(evictionsTypeOnYear, 1997);

const yearRange = d3.extent(evictionsTypeOnYear, d => d.year);
let currentYear = yearRange[0];

d3.select('#yearPie')
  .property('min', yearRange[0])
  .property('max', yearRange[1])
  .property('value', currentYear)
  .on('input', () => {
    currentYear = +d3.event.target.value;
    drawPieChart(evictionsTypeOnYear, currentYear);
  });

d3.selectAll("svg")
  .on("mousemove touchmove", updateTooltip);
