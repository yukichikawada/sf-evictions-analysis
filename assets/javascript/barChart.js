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
const height2Margin = 30;

console.log(currentYear);

function createBarChart(width, height) {
  let barChart = d3.select('#barchart')
                      .attr('width', width - width2Margin)
                      .attr('height', height - height2Margin);

  const xBar = d3.scaleBand().rangeRound([0, width2]).padding(0.1);
  const yBar = d3.scaleLinear().rangeRound([height2, 0]);

  let groupBarChart = barChart.append('g')
                          .attr('transform', 
                                'translate(', 
                                width2Margin / 2 + ',' + 
                                height2Margin / 2 + ')');
  
}
