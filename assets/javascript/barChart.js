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

const fullHeight2 = 700;
const fullWidth2 = 700;
const margin2 = {top: 20, right: 30, bottom: 20, left: 30};
const width2 = fullWidth2 - margin2.left - margin2.right;
const height2 = fullHeight2 - margin2.top - margin2.bottom;

const year = yearRange[0];


function createBarChart(width, height, year) {
  let barChart = d3.select('#barchart')
                      .attr('width', width)
                      .attr('height', height);

  const xBar = d3.scaleBand().rangeRound([0, width - margin2.right]).padding(0.1);
  const yBar = d3.scaleLinear().rangeRound([height, 0]);

  let groupBarChart = barChart.append('g')
                          .attr("transform", "translate(" + margin2.left + "," + -170 + ")");

  const barData = hoods.filter(obj => obj.year === year);

  xBar.domain(barData.map(d => d.neighborhood));
  yBar.domain([0, d3.max(barData, d => d.count)]).range([height, 200]);

  console.log(barData)

  groupBarChart.append('g')
                  .attr("class", "axis axis--x")
                  // figure out what the correct height formula is here!
                  .attr("transform", "translate(0," + 680 + ")")
                  .call(d3.axisBottom(xBar))
                     .selectAll("text")
                      .attr("y", 0)
                      .attr("x", 9)
                      .attr("dy", ".35em")
                      .attr("transform", "rotate(-90)")
                      .style("text-anchor", "end");

  groupBarChart.append('g')
                  .attr('class', 'axis axis--y')
                  .call(d3.axisLeft(yBar).ticks(10))
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





createBarChart(width2, height2, 2015);





