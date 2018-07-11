// // only need three different models
//
// const bubbleGraph = { // vertical bar graph
//   "year": {           //  20 objects
//     "year": ,
//     "numEvictions": ,
//     "deltaPriorYear": ,
//     "medianHomePrice": ,
//     "homesSold": ,
//   }
// }
//
// const horizontalBarGraph = { // 37 Neighborhoods? * 20 years of data + 5 year grouping?
//   "neighborhood": {         // 41 neighborhoods
//     "name": ,
//     "numEvictions": ,
//     // "numOMI": ,
//     // "medianHomePrice": ,
//   }
// }
//
//
// const pieCharts = { // 20 objects
//   "year": {
//     "year": ,
//     "nonPayment": ,
//     "breachOfContract": ,
//     "nuisance": ,
//     "illegalUse": ,
//     "failureToSignRenewal": ,
//     "accessDenial": ,
//     "unapprovedSubtenant": ,
//     "OMI": ,
//     "demolition": ,
//     "capitalImprovement": ,
//     "substantialRehab": ,
//     "ellisAct": ,
//     "condoConversion": ,
//   }
// }

// function neighborhoodTypes(evictions) {
//   let i = 0;
//   const neighborhoods = [];
//   for (i; i < evictions.length; i++) {
//     if (!neighborhoods.includes(evictions[i]["neighborhood"])) {
//       neighborhoods.push(evictions[i]["neighborhood"]);
//     }
//   }
//
//   return neighborhoods;
// }

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

function hoodObj(evictions) {
  const hoods = [];
  for (var i = 0; i < evictions.length; i++) {
    let lastIndex = hoods.length - 1;
    if (i === 0 || hoods[lastIndex]["neighborhood"] === evictions[i]["neighborhood"]) {
      if (i === 0 || hoods[lastIndex]["year"] !== evictions[i]["year"]) {
        const newObj = {
          "neighborhood": evictions[i]["neighborhood"],
          "count": 1,
          "year" : evictions[i]["year"]
        };
        Object.keys(evictions[i]).map(key => {
          if (evictions[i][key] === "TRUE") {
            newObj[key] = 1;
          }
        });
        hoods.push(newObj);
      } else {
        Object.keys(evictions[i]).map(key => {
          if (evictions[i][key] === "TRUE") {
            if (hoods[lastIndex][key]) {
              hoods[lastIndex][key]++;
              hoods[lastIndex]["count"]++;
            } else {
              hoods[lastIndex][key] = 1;
              hoods[lastIndex]["count"]++;
            }
          }
        })
      }
    } else {
      const newHood = {
        "year": evictions[i]["year"],
        "count": 1,
        "neighborhood": evictions[i]["neighborhood"]
      };
      Object.keys(evictions[i]).map(key => {
        if (evictions[i][key] === "TRUE") {
          newHood[key] = 1;
        }
      });
      hoods.push(newHood);
    }
  }

  return hoods;
}

function yearObj(evictions) {
  const years = [];
  for (var i = 0; i < evictions.length; i++) {
    let lastIndex = years.length - 1;
    if (i === 0 || years[lastIndex]["year"] === evictions[i]["year"]) { // same year
      if (i === 0) {
        const firstYear = {
          "year": evictions[i]["year"],
          "count": 1
        };
        Object.keys(evictions[i]).map(key => {
          if (evictions[i][key] === "TRUE") {
            firstYear[key] = 1;
          }
        });
        years.push(firstYear);
      } else {
        Object.keys(evictions[i]).map(key => {
          if (evictions[i][key] === "TRUE") {
            if (years[lastIndex][key]) {
              years[lastIndex][key]++;
              years[lastIndex]["count"]++;
            } else {
              years[lastIndex][key] = 1;
              years[lastIndex]["count"]++;
            }
          }
        });
      }
    } else { // different year
      const year = {
        "year": evictions[i]["year"],
        "count": 1
      };
      Object.keys(evictions[i]).map(key => {
        if (evictions[i][key] === "TRUE") {
          year[key] = 1;
        }
      });
      years.push(year);
    }
  }
  console.log(years);
  return years;
}
//
// function yearIterator(evictions) {
//   const years = [];
//   for (var i = 0; i < evictions.length; i++) {
//     if (!years.includes(evictions[i]["year"])) {
//       years.push(evictions[i]["year"]);
//     }
//   }
//
//   return years; // 22 years (1997...2018)
// }

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
