// consts are years and hoods

const evictionTypes = [
  "accessDenial", "breach", "capitalImprovement", "condoConversion",
  "demolition", "ellisAct", "failureToSignRenewal", "illegalUse",
  "latePayments", "nonPayment", "OMI", "nuisance",
  "otherCause", "roommateSameUnit", "substantialRehab", "unapprovedSubtenant"
];

const colors = [
  "#28c383", "#4e7b68", "#dd4053", "#cefe77", "#4fadd9",
  "#872f53", "#40386a", "#133d48", "#b78f1e", "#e9b43a",
  "#8c57f2", "#a73c62", "#3911f0", "#d515de", "#aec7e8",
  "#a7cfc9", "black", "red", "#bac78e"
];

let colorScale = d3.scaleOrdinal()
                      .domain(evictionTypes)
                      .range(colors);

const minYear = d3.min(years, d => d.year);
const maxYear = d3.max(years, d => d.year);
const width = 700;
const height = 700;

let svg = d3.select('svg')
              .attr('width', width)
              .attr('height', height);


svg.append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .classed('chart', true);

svg.append('text')
      .classed('title', true)
      .attr('x', width / 2)
      .attr('y', 30)
      .style('font-size', '2em')
      .style('text-anchor', 'middle');


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
                      .value(d => {
                        let type = "";
                        type = d[Object.keys(d)[0]];
                        if (Object.keys(d)[0] === "count" ||
                          Object.keys(d)[0] === "leadRemediation" ||
                          Object.keys(d)[0] === "year") {
                          return null;
                        } else {
                          return type;
                        }
                      })(yearData);

  let path = d3.arc()
                  .outerRadius(width / 4)
                  .innerRadius(width / 2 - 40)
                  .padAngle(0.02)
                  .cornerRadius(20);

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
      .attr('fill', d => {
        let key = "";
        key = Object.keys(d.data)[0];
        return colorScale(key);
      })
      .attr('stroke', 'black')
      .attr('d', path);

  d3.select(".title")
    .text("Eviction by type for " + year);
}


svg.append('g')
      .attr('class', 'legendOrindal')
      .attr('transform', 'translate(20,70)');

let legendOrindal = d3.legendColor()
                      .shape("path", d3.symbol().type(d3.symbolTriangle).size(150)())
                      .shapePadding(10)
                      //use cellFilter to hide the "e" cell
                      .cellFilter(function(d){
                        if (d.label !== "e" &&
                            d.label !== "count" &&
                            d.label !== "leadRemediation" &&
                            d.label !== "year") {
                          return true;
                        } else {
                          return false;
                        }
                      })
                      .scale(colorScale);

svg.select('.legendOrindal')
      .call(legendOrindal);
