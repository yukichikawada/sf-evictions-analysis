const linechartHeight = 700;
const linechartWidth = 700;
// const margin2 = {top: 20, right: 30, bottom: 20, left: 30};
// const width2 = fullWidth2 - margin2.left - margin2.right;
// const height2 = fullHeight2 - margin2.top - margin2.bottom;

let lineChart = d3.select('#linechart')
                  .append('svg')
                  .attr('height', 700)
                  .attr('width', 700);

let lineChartGroup = lineChart.append('g')
                    .attr('transform', 'translate(' + 50 + ',' + 50 + ')');

let xPt = d3.scaleTime()
                  .rangeRound([0, 660]);

let yPt = d3.scaleLinear()
                  .rangeRound([640, 0]);

let line = d3.line()
              .x(d => xPt(d.year))
              .y(d => yPt(d.count));

xPt.domain(d3.extent(years, d => d.year));
yPt.domain(d3.extent(years, d => d.count));

lineChartGroup.append('g')
          .attr('transform', 'translate(0,' + 570 + ')')
            .call(d3.axisBottom(xPt))
          .select('.domain')
            .remove();

lineChartGroup.append('g')
          .call(d3.axisLeft(yPt))
          .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Count');

lineChartGroup.append('path')
              .datum(years)
              .attr('fill', 'none')
              .attr('stroke', 'steelblue')
              .attr('stroke-linejoin', 'round')
              .attr('stroke-linecap', 'round')
              .attr('stroke-width', 1.5)
              .attr('d', line);
