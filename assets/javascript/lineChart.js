const linechartHeight = 700;
const linechartWidth = 700;
// const margin2 = {top: 20, right: 30, bottom: 20, left: 30};
// const width2 = fullWidth2 - margin2.left - margin2.right;
// const height2 = fullHeight2 - margin2.top - margin2.bottom;

const dataLess2018 = years.filter(d => d.year !== 2018);

function lineChart(widthIn, heightIn, data) {
  const width = widthIn - margin2.left - margin2.right;
  const height = heightIn - margin2.top - margin2.bottom;
  const xScale = d3.scaleLinear()
                    .domain(d3.extent(years, d => d.year))
                    .range([0, width]);

  // extract max y so domain of y is 0 to max
  // instead noramlizing graph to min y val thru max y val
  const maxY = d3.max(data, d => d.count);

  const yScale = d3.scaleLinear()
                    .domain([0, maxY])
                    .range([height, 0]);

  const line = d3.line()
                  .x(d => xScale(d.year))
                  .y(d => yScale(d.count));

  let svg = d3.select('#linechart')
              .append('svg')
              .classed('linechartsvg', true)
              .attr('width', width + margin2.left + margin2.right)
              .attr('height', height + margin2.top + margin2.bottom)
                .append('g')
                .attr('transform', 'translate(' + 40 + ',' + margin2.top + ')');

  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

  svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale));

  svg.append('path')
      .datum(years)
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', line);

  svg.selectAll('.dot')
    .data(years)
    .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.count))
      .attr('r', 5)
      .attr('fill', 'steelblue');
}

lineChart(linechartWidth, linechartHeight, years);

function lineTooltip() {
  const tooltip = d3.select('#lineTooltip');
  const tgt = d3.select(d3.event.target);
  const isPoint = tgt.classed('dot');
  let data;
  if (isPoint) {
    data = tgt.data()[0];
  }
  
  tooltip.style('opacity', +isPoint)
          .style('left', (d3.event.pageX - tooltip.node().offsetWidth / 2) + 'px')
          .style('top',  (d3.event.pageY - tooltip.node().offsetHeight - 10) + 'px');

  if (data) {
    tooltip.html(`
                 <p>Year: ${data.year}</p>
                 <p>Count: ${data.count}</p>
                 `)
  }
}

d3.selectAll('#linechart')
  .on('mousemove touchmove', lineTooltip);