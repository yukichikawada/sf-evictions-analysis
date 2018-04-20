# SF Eviction Analysis

> A look at San Francisco evictions from 1998 to 2018.

Inspired by analysis at [pudding.cool](https://pudding.cool/), SF Eviction Analysis is a look at evictions in the city across neighborhoods, months, and years made possible by [DataSF](https://data.sfgov.org/Housing-and-Buildings/Eviction-Notices/5cei-gny5).

### Architecture and Technologies

* Vanilla JavaScript, CSS for styling and interactivity
* HTML for structure
* D3 on SVG for graphs

### Functionality and MVP List

![](https://github.com/yukichikawada/sf-evictions-analysis/blob/master/piechart-ss.png)


Users will land on an attention grabbing page and scroll down for 4 interactive graphs and analysis.

- [ ] Bubble chart of total evictions, x-axis is number of evictions and bubbles represent 1 year
- [ ] Horizontal bar graph sorted by neighborhoods that can be filtered by year
- [ ] Vertical bar graph tracking evictions per year against median home price, SFH vs !SFH
- [ ] Pie charts focusing on eviction types

Reuseable code for generating pie charts that also filters extra keys from data source keeps code and data duplication to a minimum.

```javascript
function makePieChart(year) {
  let yearsData = years.find(obj => obj.year === year);
  let yearData = Object.keys(yearsData).map(key => {
    let obj = {};
    obj[key] = yearsData[key];
    return obj;
  });

  let pieChart = d3.pie().value(d => {
                        switch (Object.keys(d)[0]) {
                          case ("count" || "leadRemediation" || "year"):
                            return null;
                          default:
                            return d[Object.keys(d)[0]];
                        }
                      })(yearData);
...
  let update = d3.select('.chart')
                  .selectAll('.arc')
                  .data(pieChart);

  update.exit()
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
    .text("Eviction by type as a whole for " + year + ", in San Francisco.");
}
```

### Implementaion Timeline

##### Over the weekend:
* Find inspiration and research visually appealing ways to display data

##### Day 1:
- [ ] Decide on backend (postgresql or mongodb)
- [ ] Import CSV's

##### Day 2:
- [ ] Learn how to use D3

##### Day 3:
- [ ] Build graphs with D3

##### Day 4:
- [ ] Styling and Analysis

### Wireframes

Each image is a graph which will take up the entire screen

BONUS Graphs
![](https://github.com/yukichikawada/sf-evictions-analysis/blob/master/wireframes/bubble-graph.svg)
![](https://github.com/yukichikawada/sf-evictions-analysis/blob/master/wireframes/horizontal-bar-graph.svg)
![](https://github.com/yukichikawada/sf-evictions-analysis/blob/master/wireframes/pie-charts.svg)
![](https://github.com/yukichikawada/sf-evictions-analysis/blob/master/wireframes/vertical-bar-line-graph.svg)




### Bonus Features

* Add a second layer to evictions by neighborhood with median price of neighborhood
* Find Oakland's eviction data and pair resulting analysis to glean possible relationship
* Same as above for San Jose
