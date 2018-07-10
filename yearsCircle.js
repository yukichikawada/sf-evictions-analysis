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
  const colorScale = d3.scaleLinear()
                        .domain(d3.extent(data, d => d.count))
                        .range(['#2F4F4F', '#F08080']);

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

createPieChart(700, 700);
drawPieChart(evictionsTypeOnYear, 1997);

function updateTooltip() {
  var tooltip = d3.select('.tooltip');
  var tgt = d3.select(d3.event.target);
  var isArc = tgt.classed('arc');
  var data;
  if (isArc) {
    data = tgt.data()[0].data;
  }
  tooltip.style('left', (d3.event.pageX = tooltip.node().offsetWidth / 2) + 'px')
          .style('top', (d3.event.pageY - tooltip.node().offsetHeight - 10) + 'px')

  if (data) {
    tooltip.html(`
                 <p>Type: ${data.type}}</p>
                 <p>Count: ${data.count}}</p>
                 `)
  }
}

 d3.selectAll("svg")
        .on("mousemove touchmove", updateTooltip);

// let colorScale = d3.scaleOrdinal()
//                       .domain(evictionTypes)
//                       .range(colors);

// const minYear = d3.min(years, d => d.year);
// const maxYear = d3.max(years, d => d.year);
// const width = 750;
// const height = 750;

// let svg = d3.select('div.first')
//               .append('svg')
//               .attr('width', width)
//               .attr('height', height);


// svg.append('g')
//     .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
//     .classed('chart', true);

// svg.append('text')
//       .classed('title', true)
//       .attr('x', width / 2)
//       .attr('y', 30)
//       .style('font-size', '2em')
//       .style('text-anchor', 'middle');


// makePieChart(minYear);

// d3.select('input')
//     .property('min', minYear)
//     .property('max', maxYear)
//     .property('value', minYear)
//     .on('input', () => makePieChart(+d3.event.target.value));

// function makePieChart(year) {
//   let yearsData = years.find(obj => obj.year === year);
//   let yearData = Object.keys(yearsData).map(key => {
//     let obj = {};
//     obj[key] = yearsData[key];
//     return obj;
//   });

//   let pieChart = d3.pie()
//                       .value(d => {
//                         switch (Object.keys(d)[0]) {
//                           case "count":
//                             return null;
//                           case "Lead Remediation":
//                             return null;
//                           case "year":
//                             return null;
//                           default:
//                             return d[Object.keys(d)[0]];
//                         }
//                       })(yearData);

//   let path = d3.arc()
//                   .outerRadius(width / 4)
//                   .innerRadius(width / 2 - 40)
//                   .padAngle(0.01);

//   let update = d3.select('.chart')
//                   .selectAll('.arc')
//                   .data(pieChart);

//   update
//     .exit()
//     .remove();

//   update
//     .enter()
//     .append('path')
//       .classed('arc', true)
//     .merge(update)
//       .attr('fill', d => {
//         // debugger
//         let key = "";
//         key = Object.keys(d.data)[0];
//         return colorScale(key);
//       })
//       .attr('stroke', 'black')
//       .attr('d', path);

//   d3.select(".title")
//     .text(year);
// }

// svg.append('g')
//       .attr('class', 'legendOrindal')
//       .attr('transform', 'translate(320,210)')
//       .style('font-size', '12px');

// let legendOrindal = d3.legendColor()
//                       .shape("path", d3.symbol().type(d3.symbolTriangle).size(150)())
//                       .shapePadding(5)
//                       //use cellFilter to hide the "e" cell
//                       .cellFilter(function(d){

//                         if (d.label !== "e" &&
//                             d.label !== "count" &&
//                             d.label !== "Lead Remediation" &&
//                             d.label !== "year") {
//                           return true;
//                         } else {
//                           return false;
//                         }
//                       })
//                       .scale(colorScale);

// svg.select('.legendOrindal')
//       .call(legendOrindal);
