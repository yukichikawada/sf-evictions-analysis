// only need three different models

const bubbleGraph = { // vertical bar graph
  "year": {           //  20 objects
    "year": ,
    "numEvictions": ,
    "deltaPriorYear": ,
    "medianHomePrice": ,
    "homesSold": ,
  }
}

const horizontalBarGraph = { // 37 Neighborhoods? * 20 years of data + 5 year grouping?
  "neighborhood": {         // 41 neighborhoods
    "name": ,
    "numEvictions": ,
    // "numOMI": ,
    // "medianHomePrice": ,
  }
}


const pieCharts = { // 20 objects
  "year": {
    "year": ,
    "nonPayment": ,
    "breachOfContract": ,
    "nuisance": ,
    "illegalUse": ,
    "failureToSignRenewal": ,
    "accessDenial": ,
    "unapprovedSubtenant": ,
    "OMI": ,
    "demolition": ,
    "capitalImprovement": ,
    "substantialRehab": ,
    "ellisAct": ,
    "condoConversion": ,
  }
}

function neighborhoodTypes(evictions) {
  let i = 0;
  const neighborhoods = [];
  for (i; i < evictions.length; i++) {
    if (!neighborhoods.includes(evictions[i]["neighborhood"])) {
      neighborhoods.push(evictions[i]["neighborhood"]);
    }
  }

  return neighborhoods;
}

function countOfNeighborhoodBlanks(evictions) {
  let i  = 0;
  let total = 0;
  for (i; i < evictions.length; i++) {
    if (evictions[i]["neighborhood"] === "") {
      total++;
    }
  }
  return total; // 1401
}

years array
if last item in years array year === thisitem
use last item
else
new obj


function yearObj(evictions) {
  const years = [{"year": 1997}];

  for (let i = 0; i < evictions.length; i++) {
    if (i > 0 && evictions[i]["year"] === evictions[i - 1]["year"]) {
      const year = {};
      let objKeys = Object.keys(evictions[0]);
      objKeys.map( key => {
        let j = 0;
        for (j; j < objKeys.length; j++) {
          if (evictions[i][key] == "TRUE") {
            if (year[key]) {
              year[key]++;
            } else {
              year[key] = 1;
            }
          }
        }
      });

      years.push(year);
    } else {
      let lastObj = years[years.length - 1];
      let lastObjKeys = Object.keys(lastObj);
      lastObjKeys.map( key => {
        let j = 0;
        for (j; j < lastObjKeys.length; j++) {
          if (lastObj[key] == "TRUE") {
            if (lastObj[key]) {
              lastObj[key]++;
            } else {
              lastObj[key] = 1;
            }
          }
        }
      })
      ;
      years.push(lastObj);
    }
  }

  return years;
}

function yearIterator(evictions) {
  const years = [];
  for (var i = 0; i < 1000; i++) {
    if (!years.includes(evictions[i]["year"])) {
      years.push(evictions[i]);
    }
  }

  return years;
}

const neighborhoods = [
  "Outer Richmond", "Inner Sunset", "Mission", "Western Addition",
  "Tenderloin", "Glen Park", "Sunset/Parkside", "Marina",
  "Bayview Hunters Point", "Lakeshore", "Russian Hill", "Nob Hill",
  "Lone Mountain/USF", "Castro/Upper Market", "Inner Richmond",
  "South of Market", "Bernal Heights", "Chinatown", "Haight Ashbury",
  "West of Twin Peaks", "Excelsior", "Hayes Valley", "Noe Valley",
  "Oceanview/Merced/Ingleside", "Pacific Heights", "Japantown",
  "Financial District/South Beach", "Presidio Heights", "Twin Peaks",
  "Outer Mission", "North Beach", "Portola", "Visitacion Valley",
  "Mission Bay", "Potrero Hill", "Seacliff", "Treasure Island", "Presidio",
  "McLaren Park", "Lincoln Park", "Golden Gate Park"
]
