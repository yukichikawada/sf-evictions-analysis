// hoods.forEach(obj => {
//     if (!neighborhoodNames.includes(obj.neighborhood)) {
//         neighborhoodNames.push(obj.neighborhood);
//     }
// });

const neighborhoodNames = [
  "Bayview Hunters Point", "Bernal Heights", "Castro/Upper Market", 
  "Chinatown", "Excelsior", "Financial District/South Beach", "Glen Park", 
  "Golden Gate Park", "Haight Ashbury", "Hayes Valley", "Inner Richmond", 
  "Inner Sunset", "Japantown", "Lakeshore", "Lincoln Park", 
  "Lone Mountain/USF", "Marina", "McLaren Park", "Mission", "Mission Bay", 
  "Nob Hill", "Noe Valley", "North Beach", "Oceanview/Merced/Ingleside", 
  "Outer Mission", "Outer Richmond", "Pacific Heights", "Portola", 
  "Potrero Hill", "Presidio", "Presidio Heights", "Russian Hill", 
  "Seacliff", "South of Market", "Sunset/Parkside", "Tenderloin", 
  "Treasure Island", "Twin Peaks", "Visitacion Valley", 
  "West of Twin Peaks", "Western Addition"
]; // 41 count

const height2 = 700;
const width2 = 700;
const width2Margin = 50;
const height2Margin = 50;

const barYear = yearRange[0];

function createBarChart(width, height) {
  let barChart = d3.select('#barchart')
                      .attr('width', width - width2Margin)
                      .attr('height', height - height2Margin);

  const xBar = d3.scaleBand().rangeRound([0, width]).padding(0.1);
  const yBar = d3.scaleLinear().rangeRound([height, 0]);

  let groupBarChart = barChart.append('g')
                          .attr('transform', 'translate(', (width2Margin / 2) + ',' + (height2Margin / 2) + ')');

  const barData = hoods.filter(obj => obj.year === barYear);

  xBar.domain(barData.map(d => d.neighborhood));
  yBar.domain([0, d3.max(barData, d => d.count)]);

  groupBarChart.append('g')
                  .attr('class', 'axis axis--y')
                  .attr('transform', 'translate(0', + height + ')')
                  .call(d3.axisBottom(xBar));

  groupBarChart.append('g')
                  .attr('class', 'axis axis--y')
                  .call(d3.axisLeft(yBar).ticks(15))
                .append('text')
                  .attr('transform', 'rotate(-90)')
                  .attr('y', 6)
                  .attr('dy', '0.71em')
                  .attr('text-anchor', 'end')
                  .text('Frequency');
  
  groupBarChart.selectAll('.bar')
    .data(barData)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xBar(d.neighborhood))
      .attr('y', d => yBar(d.count))
      .attr('width', xBar.bandwidth())
      .attr('height', d => height - yBar(d.count));
}





createBarChart(width2, height2);




// function createBarChart(width, height) {
//   let barChart = d3.select('#barchart')
//                       .attr('width', width - width2Margin)
//                       .attr('height', height - height2Margin);

//   barChart.append('g')
//     .classed('x-axis', true);

//   barChart.append('g')
//     .classed('y-axis', true);

//   barChart.append('text')
//     .attr('transform', 'rotate(-90)')
//     .attr('x', - height2 / 2)
//     .attr('dy', '1em')
//     .style('text-anchor', 'middle')
//     .style('font-size', '1em')
//     .classed('y-axis-label', true);

//   barChart.append('text')
//     .attr('x', width2 / 2)
//     .attr('y', '1em')
//     .attr('font-size', '1.5em')
//     .style('text-anchor', 'middle')
//     .classed('barChart-title', true);
// }

// function highlightBars(year) {
//   d3.select('#bar')
//     .selectAll('rect')
//       .attr('fill', d => d.year === year ? "#16a085" : "#1abc9c");
// }

// function drawBar(data) {
//   let bar = d3.select('#bar');
//   const padding = {
//     top: 30,
//     right: 30,
//     bottom: 30,
//     left: 110
//   };

//   const barPadding = 1;
//   const width = +bar.attr('width');
//   const height = +bar.attr('height');

//   const xScaleBar = d3.scaleLinear()
//                         .domain(d3.extent)
// }