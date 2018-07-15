const linechartHeight = 700;
const linechartWidth = 700;
// const margin2 = {top: 20, right: 30, bottom: 20, left: 30};
// const width2 = fullWidth2 - margin2.left - margin2.right;
// const height2 = fullHeight2 - margin2.top - margin2.bottom;

function lineChart(width, height) {
  const xScale = d3.scaleLinear()
                    .domain(d3.extent(years, d => d.year))
                    .range([0, width]);

  const yScale = d3.scaleLinear()
                    .domain(d3.extent(years, d => d.count))
                    .range([height, 0]);

  const line = d3.line()
                  .x(d => xScale(d.year))
                  .y(d => yScale(d.count));

  let svg = d3.select('#linechart')
              .append('svg')
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
      .attr('r', 5);
}

lineChart(linechartWidth, linechartHeight);

// console.log(d3.extent(years, d => d.year))