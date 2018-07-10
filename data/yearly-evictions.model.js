const years = [
  {
    "Access Denial": 13,
    "Breach of Contract": 345,
    "Capital Improvement": 55,
    "Condo Conversion": 1,
    "count": 2484,
    "Demolition": 54,
    "Ellis Act": 6,
    "Failure To Sign Renewal": 2,
    "Illegal Use": 20,
    "Late Payments": 106,
    "Non Payment": 124,
    "Nuisance": 267,
    "Owner Move In": 1225,
    "Other Cause": 192,
    "Roommate Same Unit": 104,
    "Substantial Rehab": 39,
    "Unapproved Subtenant": 78,
    "year": 1997,
  },
  {
    "Access Denial": 12,
    "Breach of Contract": 321,
    "Capital Improvement": 27,
    "Condo Conversion": 1,
    "count": 1849,
    "Demolition": 61,
    "Ellis Act": 95,
    "Failure To Sign Renewal": 2,
    "Illegal Use": 17,
    "Late Payments": 95,
    "Non Payment": 144,
    "Nuisance": 249,
    "Owner Move In": 1538,
    "Other Cause": 162,
    "Roommate Same Unit": 81,
    "Substantial Rehab": 16,
    "Unapproved Subtenant": 99,
    "year": 1998
  },
  {
    "Access Denial": 11,
    "Breach of Contract": 316,
    "Capital Improvement": 59,
    "Condo Conversion": 2,
    "count": 1832,
    "Demolition": 50,
    "Ellis Act": 423,
    "Failure To Sign Renewal": 3,
    "Illegal Use": 27,
    "Late Payments": 100,
    "Non Payment": 164,
    "Nuisance": 256,
    "Owner Move In": 872,
    "Other Cause": 73,
    "Roommate Same Unit": 144,
    "Substantial Rehab": 1,
    "Unapproved Subtenant": 191,
    "year": 1999
  },
  {
    "Access Denial": 13,
    "Breach of Contract": 382,
    "Capital Improvement": 87,
    "Condo Conversion": 4,
    "count": 2027,
    "Demolition": 71,
    "Ellis Act": 274,
    "Failure To Sign Renewal": 6,
    "Illegal Use": 35,
    "Late Payments": 95,
    "Non Payment": 117,
    "Nuisance": 274,
    "Owner Move In": 1012,
    "Other Cause": 108,
    "Roommate Same Unit": 146,
    "Substantial Rehab": 4,
    "Unapproved Subtenant": 27,
    "year": 2000
  },
  {
    "Access Denial": 9,
    "Breach of Contract": 387,
    "Capital Improvement": 49,
    "Condo Conversion": 7,
    "count": 1504,
    "Demolition": 99,
    "Ellis Act": 194,
    "Failure To Sign Renewal": 2,
    "Illegal Use": 36,
    "Late Payments": 66,
    "Lead Remediation": 1,
    "Non Payment": 111,
    "Owner Move In": 802,
    "Nuisance": 267,
    "Other Cause": 66,
    "Roommate Same Unit": 119,
    "Substantial Rehab": 6,
    "Unapproved Subtenant": 22,
    "year": 2001
  },
  {
    "Access Denial": 8,
    "Breach of Contract": 253,
    "Capital Improvement": 64,
    "Condo Conversion": 4,
    "count": 1681,
    "Demolition": 75,
    "Ellis Act": 176,
    "Failure To Sign Renewal": 1,
    "Illegal Use": 21,
    "Late Payments": 71,
    "Non Payment": 94,
    "Nuisance": 255,
    "Owner Move In" : 548,
    "Other Cause": 17,
    "Roommate Same Unit": 84,
    "Substantial Rehab": 1,
    "Unapproved Subtenant": 9,
    "year": 2002
  },
  {
    "Access Denial": 7,
    "Breach of Contract": 285,
    "Capital Improvement": 72,
    "Condo Conversion": 8,
    "count": 1557,
    "Demolition": 93,
    "Ellis Act": 145,
    "Failure To Sign Renewal": 1,
    "Illegal Use": 23,
    "Late Payments": 56,
    "Non Payment": 122,
    "Nuisance": 285,
    "Owner Move In": 357,
    "Other Cause": 38,
    "Roommate Same Unit": 53,
    "Substantial Rehab": 2,
    "Unapproved Subtenant": 10,
    "year": 2003
  },
  {
    "Access Denial": 2,
    "Breach of Contract": 212,
    "Capital Improvement": 48,
    "Condo Conversion": 8,
    "count": 1344,
    "Demolition": 67,
    "Ellis Act": 303,
    "Illegal Use": 21,
    "Late Payments": 54,
    "Non Payment": 85,
    "Nuisance": 234,
    "Other Cause": 34,
    "Owner Move In": 345,
    "Roommate Same Unit": 58,
    "Unapproved Subtenant": 16,
    "year": 2004
  },
  {
    "Access Denial": 7,
    "Breach of Contract": 293,
    "Capital Improvement": 89,
    "count": 1531,
    "Demolition": 61,
    "Ellis Act": 298,
    "Illegal Use": 32,
    "Late Payments": 55,
    "Non Payment": 89,
    "Nuisance": 336,
    "Other Cause": 40,
    "Owner Move In": 267,
    "Roommate Same Unit": 45,
    "Unapproved Subtenant": 14,
    "year": 2005
  },
  {

    "Access Denial": 14,
    "Breach of Contract": 280,
    "Capital Improvement": 78,
    "Condo Conversion": 3,
    "count": 1122,
    "Demolition": 42,
    "Ellis Act": 262,
    "Illegal Use": 49,
    "Late Payments": 67,
    "Non Payment": 99,
    "Nuisance": 288,
    "Other Cause": 51,
    "Owner Move In": 227,
    "Roommate Same Unit": 51,
    "Substantial Rehab": 5,
    "Unapproved Subtenant": 23,
    "year": 2006
  },
  {
    "Access Denial": 20,
    "Breach of Contract": 377,
    "Capital Improvement": 56,
    "Condo Conversion": 3,
    "count": 1207,
    "Demolition": 43,
    "Ellis Act": 237,
    "Failure To Sign Renewal": 9,
    "Illegal Use": 38,
    "Late Payments": 80,
    "Lead Remediation": 3,
    "Non Payment": 129,
    "Owner Move In": 181,
    "Nuisance": 323,
    "Other Cause": 40,
    "Roommate Same Unit": 23,
    "Unapproved Subtenant": 16,
    "year": 2007
  },
  {
    "Access Denial": 18,
    "Breach of Contract": 378,
    "Capital Improvement": 28,
    "Condo Conversion": 2,
    "count": 827,
    "Demolition": 38,
    "Ellis Act": 194,
    "Failure To Sign Renewal": 2,
    "Illegal Use": 45,
    "Late Payments": 83,
    "Non Payment": 102,
    "Nuisance": 324,
    "Owner Move In": 169,
    "Other Cause": 53,
    "Roommate Same Unit": 27,
    "Unapproved Subtenant": 20,
    "year": 2008
  },
  {
    "Access Denial": 13,
    "Breach of Contract": 411,
    "Capital Improvement": 24,
    "Condo Conversion": 2,
    "count": 679,
    "Demolition": 33,
    "Ellis Act": 48,
    "Failure To Sign Renewal": 6,
    "Illegal Use": 36,
    "Late Payments": 81,
    "Lead Remediation": 3,
    "Non Payment": 111,
    "Owner Move In": 120,
    "Nuisance": 260,
    "Other Cause": 59,
    "Roommate Same Unit": 25,
    "Unapproved Subtenant": 20,
    "year": 2009
  },
  {
    "Access Denial": 29,
    "Breach of Contract": 448,
    "Capital Improvement": 22,
    "Condo Conversion": 4,
    "count": 1417,
    "Demolition": 31,
    "Development": 106,
    "Ellis Act": 70,
    "Failure To Sign Renewal": 9,
    "Illegal Use": 19,
    "Late Payments": 52,
    "Non Payment": 84,
    "Owner Move In": 127,
    "Nuisance": 295,
    "Other Cause": 72,
    "Roommate Same Unit": 36,
    "Unapproved Subtenant": 13,
    "year": 2010
  },
  {
    "Access Denial": 26,
    "Breach of Contract": 536,
    "Capital Improvement": 45,
    "Condo Conversion": 2,
    "count": 1349,
    "Demolition": 37,
    "Ellis Act": 54,
    "Failure To Sign Renewal": 4,
    "Illegal Use": 30,
    "Late Payments": 46,
    "Non Payment": 90,
    "Nuisance": 246,
    "Owner Move In": 124,
    "Other Cause": 59,
    "Roommate Same Unit": 28,
    "Substantial Rehab": 1,
    "Unapproved Subtenant": 21,
    "year": 2011
  },
  {
    "Access Denial": 11,
    "Breach of Contract": 445,
    "Capital Improvement": 28,
    "Condo Conversion": 11,
    "count": 1451,
    "Demolition": 43,
    "Development": 232,
    "Ellis Act": 99,
    "Failure To Sign Renewal": 7,
    "Illegal Use": 36,
    "Late Payments": 59,
    "Non Payment": 80,
    "Owner Move In": 174,
    "Nuisance": 338,
    "Other Cause": 66,
    "Roommate Same Unit": 37,
    "Unapproved Subtenant": 18,
    "year": 2012
  },
  {
    "Access Denial": 15,
    "Breach of Contract": 598,
    "Capital Improvement": 31,
    "Condo Conversion": 12,
    "count": 1711,
    "Demolition": 129,
    "Ellis Act": 231,
    "Failure To Sign Renewal": 11,
    "Illegal Use": 45,
    "Late Payments": 78,
    "Non Payment": 75,
    "Nuisance": 359,
    "Owner Move In": 275,
    "Other Cause": 56,
    "Roommate Same Unit": 41,
    "Substantial Rehab": 6,
    "Unapproved Subtenant": 19,
    "year": 2013
  },
  {
    "Access Denial": 13,
    "Breach of Contract": 726,
    "Capital Improvement": 42,
    "Condo Conversion": 10,
    "count": 1895,
    "Demolition": 48,
    "Ellis Act": 102,
    "Failure To Sign Renewal": 3,
    "Illegal Use": 93,
    "Late Payments": 66,
    "Non Payment": 144,
    "Nuisance": 400,
    "Owner Move In": 318,
    "Other Cause": 48,
    "Roommate Same Unit": 58,
    "Unapproved Subtenant": 19,
    "year": 2014
  },
  {
    "Access Denial": 21,
    "Breach of Contract": 655,
    "Capital Improvement": 46,
    "Condo Conversion": 18,
    "count": 2152,
    "Demolition": 61,
    "Development": 1,
    "Ellis Act": 146,
    "Failure To Sign Renewal": 3,
    "Illegal Use": 84,
    "Late Payments": 93,
    "Non Payment": 119,
    "Owner Move In": 423,
    "Nuisance": 359,
    "Other Cause": 51,
    "Roommate Same Unit": 46,
    "Unapproved Subtenant": 26,
    "year": 2015
  },
  {
    "Access Denial": 7,
    "Breach of Contract": 449,
    "Capital Improvement": 302,
    "Condo Conversion": 5,
    "count": 2179,
    "Demolition": 15,
    "Development": 1,
    "Ellis Act": 147,
    "Failure To Sign Renewal": 4,
    "Illegal Use": 95,
    "Late Payments": 126,
    "Non Payment": 128,
    "Owner Move In": 398,
    "Nuisance": 375,
    "Other Cause": 30,
    "Roommate Same Unit": 76,
    "Unapproved Subtenant": 21,
    "year": 2016
  },
  {
    "Access Denial": 29,
    "Breach of Contract": 402,
    "Capital Improvement": 66,
    "Condo Conversion": 5,
    "count": 1599,
    "Demolition": 3,
    "Ellis Act": 181,
    "Failure To Sign Renewal": 8,
    "Illegal Use": 57,
    "Late Payments": 60,
    "Non Payment": 84,
    "Nuisance": 313,
    "Owner Move In": 314,
    "Other Cause": 24,
    "Roommate Same Unit": 26,
    "Unapproved Subtenant": 27,
    "year": 2017
  },
  {
    "Access Denial": 2,
    "Breach of Contract": 61,
    "Capital Improvement": 57,
    "Condo Conversion": 1,
    "count": 284,
    "Ellis Act": 36,
    "Failure To Sign Renewal": 1,
    "Illegal Use": 4,
    "Late Payments": 9,
    "Non Payment": 15,
    "Nuisance": 58,
    "Other Cause": 1,
    "Owner Move In": 31,
    "Roommate Same Unit": 2,
    "Unapproved Subtenant": 6,
    "year": 2018
  }
]

function typeOnYear(arr) {
    let extracted = [];
    arr.forEach(obj => {
        let yr = obj.year;
        Object.keys(obj).map(category => {
            if (category !== 'count' && category !== 'year') {
                let freshObj = {};
                freshObj[category] = obj[category];
                freshObj['count'] = obj.count;
                freshObj['year'] = yr;
                extracted.push(freshObj);
            }
        });
    });

    return extracted;
};

function jsonifyData(obj) {
    let stringify = '{';
    Object.keys(obj).forEach(k => {
        if (k !== 'count' && k !== 'year') {
            stringify = stringify.concat('type:' + "'" + k + "'," + 'count:' + obj[k] + ',');
        } else if (k !== 'count') {
            stringify = stringify.concat(k + ':' + obj[k] + ',');
        } else {
            stringify = stringify.concat('total: ' + obj[k] + ',');
        }
    });
    return stringify + '}';
}

// var yearJSON = typeOnYear(years);
// d3.select('#jsonify')
//     .style('list-style', 'none')
//     .selectAll('li')
//     .data(yearJSON)
//     .enter()
//     .append('li')
//         .text(d => jsonifyData(d));

