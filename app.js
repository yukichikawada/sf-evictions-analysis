// consts are years and hoods
const yearsPie = [];
for (var i = 0; i < years.length; i++) {
  yearsPie.push(years[i].year)
}

let colorScale = d3.scaleOrdinal()
                      .domain(yearsPie)
                      .range(d3.schemeCategory10);

const minYear = d3.min(years, d => d.year);
const maxYear = d3.max(years, d => d.year);
const width = 500;
const height = 500;

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .classed('chart', true);

makePieChart(minYear);

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', () => makePieChart(+d3.event.target.value));

function makePieChart(year) {
  let yearsData = years.find(obj => obj.year === year);
  let yearData = Object.keys(yearsData).map(key => {
    let obj = {};
    obj[key] = yearsData[key];
    return obj;
  });

  let pieChart = d3.pie()
                      .value(d => d[Object.keys(d)[0]])(yearData);

  let path = d3.arc()
                  .outerRadius(width / 2 - 10)
                  .innerRadius(width / 4);

  let update = d3.select('.chart')
                  .selectAll('.arc')
                  .data(pieChart);

  update
    .exit()
    .remove();

  update
    .enter()
    .append('path')
      .classed('arc', true)
    .merge(update)
      .attr('fill', d => colorScale(d.data.year))
      .attr('stroke', 'black')
      .attr('d', path);
}
