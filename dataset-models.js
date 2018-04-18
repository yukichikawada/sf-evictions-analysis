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

neighborhoodTypes(evictions) = {
  let i = 0;
  const neighborhoods = [];
  for (i; i < evictions.length; i++) {
    if (!neighborhoods.includes(evictions[i]["Neighborhoods - Analysis Boundaries"])) {
      neighborhoods.push(evictions[i]["Neighborhoods - Analysis Boundaries"]);
    }
  }

  return neighborhoods;
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
