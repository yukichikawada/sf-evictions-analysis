const evictionsTypeOnYear = [
  {
    type: 'Access Denial',
    count: 13,
    total: 2484,
    year: 1997
  },
  {
    type: 'Breach of Contract',
    count: 345,
    total: 2484,
    year: 1997
  },
  {
    type: 'Capital Improvement',
    count: 55,
    total: 2484,
    year: 1997
  },
  {
    type: 'Condo Conversion',
    count: 1,
    total: 2484,
    year: 1997
  },
  {
    type: 'Demolition',
    count: 54,
    total: 2484,
    year: 1997
  },
  {
    type: 'Ellis Act',
    count: 6,
    total: 2484,
    year: 1997
  },
  {
    type: 'Failure To Sign Renewal',
    count: 2,
    total: 2484,
    year: 1997
  },
  {
    type: 'Illegal Use',
    count: 20,
    total: 2484,
    year: 1997
  },
  {
    type: 'Late Payments',
    count: 106,
    total: 2484,
    year: 1997
  },
  {
    type: 'Non Payment',
    count: 124,
    total: 2484,
    year: 1997
  },
  {
    type: 'Nuisance',
    count: 267,
    total: 2484,
    year: 1997
  },
  {
    type: 'Owner Move In',
    count: 1225,
    total: 2484,
    year: 1997
  },
  {
    type: 'Other Cause',
    count: 192,
    total: 2484,
    year: 1997
  },
  {
    type: 'Roommate Same Unit',
    count: 104,
    total: 2484,
    year: 1997
  },
  {
    type: 'Substantial Rehab',
    count: 39,
    total: 2484,
    year: 1997
  },
  {
    type: 'Unapproved Subtenant',
    count: 78,
    total: 2484,
    year: 1997
  },
  {
    type: 'Access Denial',
    count: 12,
    total: 2920,
    year: 1998
  },
  {
    type: 'Breach of Contract',
    count: 321,
    total: 2920,
    year: 1998
  },
  {
    type: 'Capital Improvement',
    count: 27,
    total: 2920,
    year: 1998
  },
  {
    type: 'Condo Conversion',
    count: 1,
    total: 2920,
    year: 1998
  },
  {
    type: 'Demolition',
    count: 61,
    total: 2920,
    year: 1998
  },
  {
    type: 'Ellis Act',
    count: 95,
    total: 2920,
    year: 1998
  },
  {
    type: 'Failure To Sign Renewal',
    count: 2,
    total: 2920,
    year: 1998
  },
  {
    type: 'Illegal Use',
    count: 17,
    total: 2920,
    year: 1998
  },
  {
    type: 'Late Payments',
    count: 95,
    total: 2920,
    year: 1998
  },
  {
    type: 'Non Payment',
    count: 144,
    total: 2920,
    year: 1998
  },
  {
    type: 'Nuisance',
    count: 249,
    total: 2920,
    year: 1998
  },
  {
    type: 'Owner Move In',
    count: 1538,
    total: 2920,
    year: 1998
  },
  {
    type: 'Other Cause',
    count: 162,
    total: 2920,
    year: 1998
  },
  {
    type: 'Roommate Same Unit',
    count: 81,
    total: 2920,
    year: 1998
  },
  {
    type: 'Substantial Rehab',
    count: 16,
    total: 2920,
    year: 1998
  },
  {
    type: 'Unapproved Subtenant',
    count: 99,
    total: 2920,
    year: 1998
  },
  {
    type: 'Access Denial',
    count: 11,
    total: 2962,
    year: 1999
  },
  {
    type: 'Breach of Contract',
    count: 316,
    total: 2962,
    year: 1999
  },
  {
    type: 'Capital Improvement',
    count: 59,
    total: 2962,
    year: 1999
  },
  {
    type: 'Condo Conversion',
    count: 2,
    total: 2962,
    year: 1999
  },
  {
    type: 'Demolition',
    count: 50,
    total: 2962,
    year: 1999
  },
  {
    type: 'Ellis Act',
    count: 423,
    total: 2962,
    year: 1999
  },
  {
    type: 'Failure To Sign Renewal',
    count: 3,
    total: 2962,
    year: 1999
  },
  {
    type: 'Illegal Use',
    count: 27,
    total: 2962,
    year: 1999
  },
  {
    type: 'Late Payments',
    count: 100,
    total: 2962,
    year: 1999
  },
  {
    type: 'Non Payment',
    count: 164,
    total: 2962,
    year: 1999
  },
  {
    type: 'Nuisance',
    count: 256,
    total: 2962,
    year: 1999
  },
  {
    type: 'Owner Move In',
    count: 872,
    total: 2962,
    year: 1999
  },
  {
    type: 'Other Cause',
    count: 73,
    total: 2962,
    year: 1999
  },
  {
    type: 'Roommate Same Unit',
    count: 144,
    total: 2962,
    year: 1999
  },
  {
    type: 'Substantial Rehab',
    count: 1,
    total: 2962,
    year: 1999
  },
  {
    type: 'Unapproved Subtenant',
    count: 191,
    total: 2962,
    year: 1999
  },
  {
    type: 'Access Denial',
    count: 13,
    total: 2655,
    year: 2000
  },
  {
    type: 'Breach of Contract',
    count: 382,
    total: 2655,
    year: 2000
  },
  {
    type: 'Capital Improvement',
    count: 87,
    total: 2655,
    year: 2000
  },
  {
    type: 'Condo Conversion',
    count: 4,
    total: 2655,
    year: 2000
  },
  {
    type: 'Demolition',
    count: 71,
    total: 2655,
    year: 2000
  },
  {
    type: 'Ellis Act',
    count: 274,
    total: 2655,
    year: 2000
  },
  {
    type: 'Failure To Sign Renewal',
    count: 6,
    total: 2655,
    year: 2000
  },
  {
    type: 'Illegal Use',
    count: 35,
    total: 2655,
    year: 2000
  },
  {
    type: 'Late Payments',
    count: 95,
    total: 2655,
    year: 2000
  },
  {
    type: 'Non Payment',
    count: 117,
    total: 2655,
    year: 2000
  },
  {
    type: 'Nuisance',
    count: 274,
    total: 2655,
    year: 2000
  },
  {
    type: 'Owner Move In',
    count: 1012,
    total: 2655,
    year: 2000
  },
  {
    type: 'Other Cause',
    count: 108,
    total: 2655,
    year: 2000
  },
  {
    type: 'Roommate Same Unit',
    count: 146,
    total: 2655,
    year: 2000
  },
  {
    type: 'Substantial Rehab',
    count: 4,
    total: 2655,
    year: 2000
  },
  {
    type: 'Unapproved Subtenant',
    count: 27,
    total: 2655,
    year: 2000
  },
  {
    type: 'Access Denial',
    count: 9,
    total: 2243,
    year: 2001
  },
  {
    type: 'Breach of Contract',
    count: 387,
    total: 2243,
    year: 2001
  },
  {
    type: 'Capital Improvement',
    count: 49,
    total: 2243,
    year: 2001
  },
  {
    type: 'Condo Conversion',
    count: 7,
    total: 2243,
    year: 2001
  },
  {
    type: 'Demolition',
    count: 99,
    total: 2243,
    year: 2001
  },
  {
    type: 'Ellis Act',
    count: 194,
    total: 2243,
    year: 2001
  },
  {
    type: 'Failure To Sign Renewal',
    count: 2,
    total: 2243,
    year: 2001
  },
  {
    type: 'Illegal Use',
    count: 36,
    total: 2243,
    year: 2001
  },
  {
    type: 'Late Payments',
    count: 66,
    total: 2243,
    year: 2001
  },
  {
    type: 'Lead Remediation',
    count: 1,
    total: 2243,
    year: 2001
  },
  {
    type: 'Non Payment',
    count: 111,
    total: 2243,
    year: 2001
  },
  {
    type: 'Owner Move In',
    count: 802,
    total: 2243,
    year: 2001
  },
  {
    type: 'Nuisance',
    count: 267,
    total: 2243,
    year: 2001
  },
  {
    type: 'Other Cause',
    count: 66,
    total: 2243,
    year: 2001
  },
  {
    type: 'Roommate Same Unit',
    count: 119,
    total: 2243,
    year: 2001
  },
  {
    type: 'Substantial Rehab',
    count: 6,
    total: 2243,
    year: 2001
  },
  {
    type: 'Unapproved Subtenant',
    count: 22,
    total: 2243,
    year: 2001
  },
  {
    type: 'Access Denial',
    count: 8,
    total: 1681,
    year: 2002
  },
  {
    type: 'Breach of Contract',
    count: 253,
    total: 1681,
    year: 2002
  },
  {
    type: 'Capital Improvement',
    count: 64,
    total: 1681,
    year: 2002
  },
  {
    type: 'Condo Conversion',
    count: 4,
    total: 1681,
    year: 2002
  },
  {
    type: 'Demolition',
    count: 75,
    total: 1681,
    year: 2002
  },
  {
    type: 'Ellis Act',
    count: 176,
    total: 1681,
    year: 2002
  },
  {
    type: 'Failure To Sign Renewal',
    count: 1,
    total: 1681,
    year: 2002
  },
  {
    type: 'Illegal Use',
    count: 21,
    total: 1681,
    year: 2002
  },
  {
    type: 'Late Payments',
    count: 71,
    total: 1681,
    year: 2002
  },
  {
    type: 'Non Payment',
    count: 94,
    total: 1681,
    year: 2002
  },
  {
    type: 'Nuisance',
    count: 255,
    total: 1681,
    year: 2002
  },
  {
    type: 'Owner Move In',
    count: 548,
    total: 1681,
    year: 2002
  },
  {
    type: 'Other Cause',
    count: 17,
    total: 1681,
    year: 2002
  },
  {
    type: 'Roommate Same Unit',
    count: 84,
    total: 1681,
    year: 2002
  },
  {
    type: 'Substantial Rehab',
    count: 1,
    total: 1681,
    year: 2002
  },
  {
    type: 'Unapproved Subtenant',
    count: 9,
    total: 1681,
    year: 2002
  },
  {
    type: 'Access Denial',
    count: 7,
    total: 1557,
    year: 2003
  },
  {
    type: 'Breach of Contract',
    count: 285,
    total: 1557,
    year: 2003
  },
  {
    type: 'Capital Improvement',
    count: 72,
    total: 1557,
    year: 2003
  },
  {
    type: 'Condo Conversion',
    count: 8,
    total: 1557,
    year: 2003
  },
  {
    type: 'Demolition',
    count: 93,
    total: 1557,
    year: 2003
  },
  {
    type: 'Ellis Act',
    count: 145,
    total: 1557,
    year: 2003
  },
  {
    type: 'Failure To Sign Renewal',
    count: 1,
    total: 1557,
    year: 2003
  },
  {
    type: 'Illegal Use',
    count: 23,
    total: 1557,
    year: 2003
  },
  {
    type: 'Late Payments',
    count: 56,
    total: 1557,
    year: 2003
  },
  {
    type: 'Non Payment',
    count: 122,
    total: 1557,
    year: 2003
  },
  {
    type: 'Nuisance',
    count: 285,
    total: 1557,
    year: 2003
  },
  {
    type: 'Owner Move In',
    count: 357,
    total: 1557,
    year: 2003
  },
  {
    type: 'Other Cause',
    count: 38,
    total: 1557,
    year: 2003
  },
  {
    type: 'Roommate Same Unit',
    count: 53,
    total: 1557,
    year: 2003
  },
  {
    type: 'Substantial Rehab',
    count: 2,
    total: 1557,
    year: 2003
  },
  {
    type: 'Unapproved Subtenant',
    count: 10,
    total: 1557,
    year: 2003
  },
  {
    type: 'Access Denial',
    count: 2,
    total: 1487,
    year: 2004
  },
  {
    type: 'Breach of Contract',
    count: 212,
    total: 1487,
    year: 2004
  },
  {
    type: 'Capital Improvement',
    count: 48,
    total: 1487,
    year: 2004
  },
  {
    type: 'Condo Conversion',
    count: 8,
    total: 1487,
    year: 2004
  },
  {
    type: 'Demolition',
    count: 67,
    total: 1487,
    year: 2004
  },
  {
    type: 'Ellis Act',
    count: 303,
    total: 1487,
    year: 2004
  },
  {
    type: 'Illegal Use',
    count: 21,
    total: 1487,
    year: 2004
  },
  {
    type: 'Late Payments',
    count: 54,
    total: 1487,
    year: 2004
  },
  {
    type: 'Non Payment',
    count: 85,
    total: 1487,
    year: 2004
  },
  {
    type: 'Nuisance',
    count: 234,
    total: 1487,
    year: 2004
  },
  {
    type: 'Other Cause',
    count: 34,
    total: 1487,
    year: 2004
  },
  {
    type: 'Owner Move In',
    count: 345,
    total: 1487,
    year: 2004
  },
  {
    type: 'Roommate Same Unit',
    count: 58,
    total: 1487,
    year: 2004
  },
  {
    type: 'Unapproved Subtenant',
    count: 16,
    total: 1487,
    year: 2004
  },
  {
    type: 'Access Denial',
    count: 7,
    total: 1626,
    year: 2005
  },
  {
    type: 'Breach of Contract',
    count: 293,
    total: 1626,
    year: 2005
  },
  {
    type: 'Capital Improvement',
    count: 89,
    total: 1626,
    year: 2005
  },
  {
    type: 'Demolition',
    count: 61,
    total: 1626,
    year: 2005
  },
  {
    type: 'Ellis Act',
    count: 298,
    total: 1626,
    year: 2005
  },
  {
    type: 'Illegal Use',
    count: 32,
    total: 1626,
    year: 2005
  },
  {
    type: 'Late Payments',
    count: 55,
    total: 1626,
    year: 2005
  },
  {
    type: 'Non Payment',
    count: 89,
    total: 1626,
    year: 2005
  },
  {
    type: 'Nuisance',
    count: 336,
    total: 1626,
    year: 2005
  },
  {
    type: 'Other Cause',
    count: 40,
    total: 1626,
    year: 2005
  },
  {
    type: 'Owner Move In',
    count: 267,
    total: 1626,
    year: 2005
  },
  {
    type: 'Roommate Same Unit',
    count: 45,
    total: 1626,
    year: 2005
  },
  {
    type: 'Unapproved Subtenant',
    count: 14,
    total: 1626,
    year: 2005
  },
  {
    type: 'Access Denial',
    count: 14,
    total: 1593,
    year: 2006
  },
  {
    type: 'Breach of Contract',
    count: 280,
    total: 1593,
    year: 2006
  },
  {
    type: 'Capital Improvement',
    count: 78,
    total: 1593,
    year: 2006
  },
  {
    type: 'Condo Conversion',
    count: 3,
    total: 1593,
    year: 2006
  },
  {
    type: 'Demolition',
    count: 42,
    total: 1593,
    year: 2006
  },
  {
    type: 'Ellis Act',
    count: 262,
    total: 1593,
    year: 2006
  },
  {
    type: 'Illegal Use',
    count: 49,
    total: 1593,
    year: 2006
  },
  {
    type: 'Late Payments',
    count: 67,
    total: 1593,
    year: 2006
  },
  {
    type: 'Non Payment',
    count: 99,
    total: 1593,
    year: 2006
  },
  {
    type: 'Nuisance',
    count: 288,
    total: 1593,
    year: 2006
  },
  {
    type: 'Other Cause',
    count: 51,
    total: 1593,
    year: 2006
  },
  {
    type: 'Owner Move In',
    count: 227,
    total: 1593,
    year: 2006
  },
  {
    type: 'Roommate Same Unit',
    count: 51,
    total: 1593,
    year: 2006
  },
  {
    type: 'Substantial Rehab',
    count: 5,
    total: 1593,
    year: 2006
  },
  {
    type: 'Unapproved Subtenant',
    count: 23,
    total: 1593,
    year: 2006
  },
  {
    type: 'Access Denial',
    count: 20,
    total: 1587,
    year: 2007
  },
  {
    type: 'Breach of Contract',
    count: 377,
    total: 1587,
    year: 2007
  },
  {
    type: 'Capital Improvement',
    count: 56,
    total: 1587,
    year: 2007
  },
  {
    type: 'Condo Conversion',
    count: 3,
    total: 1587,
    year: 2007
  },
  {
    type: 'Demolition',
    count: 43,
    total: 1587,
    year: 2007
  },
  {
    type: 'Ellis Act',
    count: 237,
    total: 1587,
    year: 2007
  },
  {
    type: 'Failure To Sign Renewal',
    count: 9,
    total: 1587,
    year: 2007
  },
  {
    type: 'Illegal Use',
    count: 38,
    total: 1587,
    year: 2007
  },
  {
    type: 'Late Payments',
    count: 80,
    total: 1587,
    year: 2007
  },
  {
    type: 'Lead Remediation',
    count: 3,
    total: 1587,
    year: 2007
  },
  {
    type: 'Non Payment',
    count: 129,
    total: 1587,
    year: 2007
  },
  {
    type: 'Owner Move In',
    count: 181,
    total: 1587,
    year: 2007
  },
  {
    type: 'Nuisance',
    count: 323,
    total: 1587,
    year: 2007
  },
  {
    type: 'Other Cause',
    count: 40,
    total: 1587,
    year: 2007
  },
  {
    type: 'Roommate Same Unit',
    count: 23,
    total: 1587,
    year: 2007
  },
  {
    type: 'Unapproved Subtenant',
    count: 16,
    total: 1587,
    year: 2007
  },
  {
    type: 'Access Denial',
    count: 18,
    total: 1483,
    year: 2008
  },
  {
    type: 'Breach of Contract',
    count: 378,
    total: 1483,
    year: 2008
  },
  {
    type: 'Capital Improvement',
    count: 28,
    total: 1483,
    year: 2008
  },
  {
    type: 'Condo Conversion',
    count: 2,
    total: 1483,
    year: 2008
  },
  {
    type: 'Demolition',
    count: 38,
    total: 1483,
    year: 2008
  },
  {
    type: 'Ellis Act',
    count: 194,
    total: 1483,
    year: 2008
  },
  {
    type: 'Failure To Sign Renewal',
    count: 2,
    total: 1483,
    year: 2008
  },
  {
    type: 'Illegal Use',
    count: 45,
    total: 1483,
    year: 2008
  },
  {
    type: 'Late Payments',
    count: 83,
    total: 1483,
    year: 2008
  },
  {
    type: 'Non Payment',
    count: 102,
    total: 1483,
    year: 2008
  },
  {
    type: 'Nuisance',
    count: 324,
    total: 1483,
    year: 2008
  },
  {
    type: 'Owner Move In',
    count: 169,
    total: 1483,
    year: 2008
  },
  {
    type: 'Other Cause',
    count: 53,
    total: 1483,
    year: 2008
  },
  {
    type: 'Roommate Same Unit',
    count: 27,
    total: 1483,
    year: 2008
  },
  {
    type: 'Unapproved Subtenant',
    count: 20,
    total: 1483,
    year: 2008
  },
  {
    type: 'Access Denial',
    count: 13,
    total: 1252,
    year: 2009
  },
  {
    type: 'Breach of Contract',
    count: 411,
    total: 1252,
    year: 2009
  },
  {
    type: 'Capital Improvement',
    count: 24,
    total: 1252,
    year: 2009
  },
  {
    type: 'Condo Conversion',
    count: 2,
    total: 1252,
    year: 2009
  },
  {
    type: 'Demolition',
    count: 33,
    total: 1252,
    year: 2009
  },
  {
    type: 'Ellis Act',
    count: 48,
    total: 1252,
    year: 2009
  },
  {
    type: 'Failure To Sign Renewal',
    count: 6,
    total: 1252,
    year: 2009
  },
  {
    type: 'Illegal Use',
    count: 36,
    total: 1252,
    year: 2009
  },
  {
    type: 'Late Payments',
    count: 81,
    total: 1252,
    year: 2009
  },
  {
    type: 'Lead Remediation',
    count: 3,
    total: 1252,
    year: 2009
  },
  {
    type: 'Non Payment',
    count: 111,
    total: 1252,
    year: 2009
  },
  {
    type: 'Owner Move In',
    count: 120,
    total: 1252,
    year: 2009
  },
  {
    type: 'Nuisance',
    count: 260,
    total: 1252,
    year: 2009
  },
  {
    type: 'Other Cause',
    count: 59,
    total: 1252,
    year: 2009
  },
  {
    type: 'Roommate Same Unit',
    count: 25,
    total: 1252,
    year: 2009
  },
  {
    type: 'Unapproved Subtenant',
    count: 20,
    total: 1252,
    year: 2009
  },
  {
    type: 'Access Denial',
    count: 29,
    total: 1417,
    year: 2010
  },
  {
    type: 'Breach of Contract',
    count: 448,
    total: 1417,
    year: 2010
  },
  {
    type: 'Capital Improvement',
    count: 22,
    total: 1417,
    year: 2010
  },
  {
    type: 'Condo Conversion',
    count: 4,
    total: 1417,
    year: 2010
  },
  {
    type: 'Demolition',
    count: 31,
    total: 1417,
    year: 2010
  },
  {
    type: 'Development',
    count: 106,
    total: 1417,
    year: 2010
  },
  {
    type: 'Ellis Act',
    count: 70,
    total: 1417,
    year: 2010
  },
  {
    type: 'Failure To Sign Renewal',
    count: 9,
    total: 1417,
    year: 2010
  },
  {
    type: 'Illegal Use',
    count: 19,
    total: 1417,
    year: 2010
  },
  {
    type: 'Late Payments',
    count: 52,
    total: 1417,
    year: 2010
  },
  {
    type: 'Non Payment',
    count: 84,
    total: 1417,
    year: 2010
  },
  {
    type: 'Owner Move In',
    count: 127,
    total: 1417,
    year: 2010
  },
  {
    type: 'Nuisance',
    count: 295,
    total: 1417,
    year: 2010
  },
  {
    type: 'Other Cause',
    count: 72,
    total: 1417,
    year: 2010
  },
  {
    type: 'Roommate Same Unit',
    count: 36,
    total: 1417,
    year: 2010
  },
  {
    type: 'Unapproved Subtenant',
    count: 13,
    total: 1417,
    year: 2010
  },
  {
    type: 'Access Denial',
    count: 26,
    total: 1349,
    year: 2011
  },
  {
    type: 'Breach of Contract',
    count: 536,
    total: 1349,
    year: 2011
  },
  {
    type: 'Capital Improvement',
    count: 45,
    total: 1349,
    year: 2011
  },
  {
    type: 'Condo Conversion',
    count: 2,
    total: 1349,
    year: 2011
  },
  {
    type: 'Demolition',
    count: 37,
    total: 1349,
    year: 2011
  },
  {
    type: 'Ellis Act',
    count: 54,
    total: 1349,
    year: 2011
  },
  {
    type: 'Failure To Sign Renewal',
    count: 4,
    total: 1349,
    year: 2011
  },
  {
    type: 'Illegal Use',
    count: 30,
    total: 1349,
    year: 2011
  },
  {
    type: 'Late Payments',
    count: 46,
    total: 1349,
    year: 2011
  },
  {
    type: 'Non Payment',
    count: 90,
    total: 1349,
    year: 2011
  },
  {
    type: 'Nuisance',
    count: 246,
    total: 1349,
    year: 2011
  },
  {
    type: 'Owner Move In',
    count: 124,
    total: 1349,
    year: 2011
  },
  {
    type: 'Other Cause',
    count: 59,
    total: 1349,
    year: 2011
  },
  {
    type: 'Roommate Same Unit',
    count: 28,
    total: 1349,
    year: 2011
  },
  {
    type: 'Substantial Rehab',
    count: 1,
    total: 1349,
    year: 2011
  },
  {
    type: 'Unapproved Subtenant',
    count: 21,
    total: 1349,
    year: 2011
  },
  {
    type: 'Access Denial',
    count: 11,
    total: 1684,
    year: 2012
  },
  {
    type: 'Breach of Contract',
    count: 445,
    total: 1684,
    year: 2012
  },
  {
    type: 'Capital Improvement',
    count: 28,
    total: 1684,
    year: 2012
  },
  {
    type: 'Condo Conversion',
    count: 11,
    total: 1684,
    year: 2012
  },
  {
    type: 'Demolition',
    count: 43,
    total: 1684,
    year: 2012
  },
  {
    type: 'Development',
    count: 232,
    total: 1684,
    year: 2012
  },
  {
    type: 'Ellis Act',
    count: 99,
    total: 1684,
    year: 2012
  },
  {
    type: 'Failure To Sign Renewal',
    count: 7,
    total: 1684,
    year: 2012
  },
  {
    type: 'Illegal Use',
    count: 36,
    total: 1684,
    year: 2012
  },
  {
    type: 'Late Payments',
    count: 59,
    total: 1684,
    year: 2012
  },
  {
    type: 'Non Payment',
    count: 80,
    total: 1684,
    year: 2012
  },
  {
    type: 'Owner Move In',
    count: 174,
    total: 1684,
    year: 2012
  },
  {
    type: 'Nuisance',
    count: 338,
    total: 1684,
    year: 2012
  },
  {
    type: 'Other Cause',
    count: 66,
    total: 1684,
    year: 2012
  },
  {
    type: 'Roommate Same Unit',
    count: 37,
    total: 1684,
    year: 2012
  },
  {
    type: 'Unapproved Subtenant',
    count: 18,
    total: 1684,
    year: 2012
  },
  {
    type: 'Access Denial',
    count: 15,
    total: 1981,
    year: 2013
  },
  {
    type: 'Breach of Contract',
    count: 598,
    total: 1981,
    year: 2013
  },
  {
    type: 'Capital Improvement',
    count: 31,
    total: 1981,
    year: 2013
  },
  {
    type: 'Condo Conversion',
    count: 12,
    total: 1981,
    year: 2013
  },
  {
    type: 'Demolition',
    count: 129,
    total: 1981,
    year: 2013
  },
  {
    type: 'Ellis Act',
    count: 231,
    total: 1981,
    year: 2013
  },
  {
    type: 'Failure To Sign Renewal',
    count: 11,
    total: 1981,
    year: 2013
  },
  {
    type: 'Illegal Use',
    count: 45,
    total: 1981,
    year: 2013
  },
  {
    type: 'Late Payments',
    count: 78,
    total: 1981,
    year: 2013
  },
  {
    type: 'Non Payment',
    count: 75,
    total: 1981,
    year: 2013
  },
  {
    type: 'Nuisance',
    count: 359,
    total: 1981,
    year: 2013
  },
  {
    type: 'Owner Move In',
    count: 275,
    total: 1981,
    year: 2013
  },
  {
    type: 'Other Cause',
    count: 56,
    total: 1981,
    year: 2013
  },
  {
    type: 'Roommate Same Unit',
    count: 41,
    total: 1981,
    year: 2013
  },
  {
    type: 'Substantial Rehab',
    count: 6,
    total: 1981,
    year: 2013
  },
  {
    type: 'Unapproved Subtenant',
    count: 19,
    total: 1981,
    year: 2013
  },
  {
    type: 'Access Denial',
    count: 13,
    total: 2090,
    year: 2014
  },
  {
    type: 'Breach of Contract',
    count: 726,
    total: 2090,
    year: 2014
  },
  {
    type: 'Capital Improvement',
    count: 42,
    total: 2090,
    year: 2014
  },
  {
    type: 'Condo Conversion',
    count: 10,
    total: 2090,
    year: 2014
  },
  {
    type: 'Demolition',
    count: 48,
    total: 2090,
    year: 2014
  },
  {
    type: 'Ellis Act',
    count: 102,
    total: 2090,
    year: 2014
  },
  {
    type: 'Failure To Sign Renewal',
    count: 3,
    total: 2090,
    year: 2014
  },
  {
    type: 'Illegal Use',
    count: 93,
    total: 2090,
    year: 2014
  },
  {
    type: 'Late Payments',
    count: 66,
    total: 2090,
    year: 2014
  },
  {
    type: 'Non Payment',
    count: 144,
    total: 2090,
    year: 2014
  },
  {
    type: 'Nuisance',
    count: 400,
    total: 2090,
    year: 2014
  },
  {
    type: 'Owner Move In',
    count: 318,
    total: 2090,
    year: 2014
  },
  {
    type: 'Other Cause',
    count: 48,
    total: 2090,
    year: 2014
  },
  {
    type: 'Roommate Same Unit',
    count: 58,
    total: 2090,
    year: 2014
  },
  {
    type: 'Unapproved Subtenant',
    count: 19,
    total: 2090,
    year: 2014
  },
  {
    type: 'Access Denial',
    count: 21,
    total: 2152,
    year: 2015
  },
  {
    type: 'Breach of Contract',
    count: 655,
    total: 2152,
    year: 2015
  },
  {
    type: 'Capital Improvement',
    count: 46,
    total: 2152,
    year: 2015
  },
  {
    type: 'Condo Conversion',
    count: 18,
    total: 2152,
    year: 2015
  },
  {
    type: 'Demolition',
    count: 61,
    total: 2152,
    year: 2015
  },
  {
    type: 'Development',
    count: 1,
    total: 2152,
    year: 2015
  },
  {
    type: 'Ellis Act',
    count: 146,
    total: 2152,
    year: 2015
  },
  {
    type: 'Failure To Sign Renewal',
    count: 3,
    total: 2152,
    year: 2015
  },
  {
    type: 'Illegal Use',
    count: 84,
    total: 2152,
    year: 2015
  },
  {
    type: 'Late Payments',
    count: 93,
    total: 2152,
    year: 2015
  },
  {
    type: 'Non Payment',
    count: 119,
    total: 2152,
    year: 2015
  },
  {
    type: 'Owner Move In',
    count: 423,
    total: 2152,
    year: 2015
  },
  {
    type: 'Nuisance',
    count: 359,
    total: 2152,
    year: 2015
  },
  {
    type: 'Other Cause',
    count: 51,
    total: 2152,
    year: 2015
  },
  {
    type: 'Roommate Same Unit',
    count: 46,
    total: 2152,
    year: 2015
  },
  {
    type: 'Unapproved Subtenant',
    count: 26,
    total: 2152,
    year: 2015
  },
  {
    type: 'Access Denial',
    count: 7,
    total: 2179,
    year: 2016
  },
  {
    type: 'Breach of Contract',
    count: 449,
    total: 2179,
    year: 2016
  },
  {
    type: 'Capital Improvement',
    count: 302,
    total: 2179,
    year: 2016
  },
  {
    type: 'Condo Conversion',
    count: 5,
    total: 2179,
    year: 2016
  },
  {
    type: 'Demolition',
    count: 15,
    total: 2179,
    year: 2016
  },
  {
    type: 'Development',
    count: 1,
    total: 2179,
    year: 2016
  },
  {
    type: 'Ellis Act',
    count: 147,
    total: 2179,
    year: 2016
  },
  {
    type: 'Failure To Sign Renewal',
    count: 4,
    total: 2179,
    year: 2016
  },
  {
    type: 'Illegal Use',
    count: 95,
    total: 2179,
    year: 2016
  },
  {
    type: 'Late Payments',
    count: 126,
    total: 2179,
    year: 2016
  },
  {
    type: 'Non Payment',
    count: 128,
    total: 2179,
    year: 2016
  },
  {
    type: 'Owner Move In',
    count: 398,
    total: 2179,
    year: 2016
  },
  {
    type: 'Nuisance',
    count: 375,
    total: 2179,
    year: 2016
  },
  {
    type: 'Other Cause',
    count: 30,
    total: 2179,
    year: 2016
  },
  {
    type: 'Roommate Same Unit',
    count: 76,
    total: 2179,
    year: 2016
  },
  {
    type: 'Unapproved Subtenant',
    count: 21,
    total: 2179,
    year: 2016
  },
  {
    type: 'Access Denial',
    count: 29,
    total: 1599,
    year: 2017
  },
  {
    type: 'Breach of Contract',
    count: 402,
    total: 1599,
    year: 2017
  },
  {
    type: 'Capital Improvement',
    count: 66,
    total: 1599,
    year: 2017
  },
  {
    type: 'Condo Conversion',
    count: 5,
    total: 1599,
    year: 2017
  },
  {
    type: 'Demolition',
    count: 3,
    total: 1599,
    year: 2017
  },
  {
    type: 'Ellis Act',
    count: 181,
    total: 1599,
    year: 2017
  },
  {
    type: 'Failure To Sign Renewal',
    count: 8,
    total: 1599,
    year: 2017
  },
  {
    type: 'Illegal Use',
    count: 57,
    total: 1599,
    year: 2017
  },
  {
    type: 'Late Payments',
    count: 60,
    total: 1599,
    year: 2017
  },
  {
    type: 'Non Payment',
    count: 84,
    total: 1599,
    year: 2017
  },
  {
    type: 'Nuisance',
    count: 313,
    total: 1599,
    year: 2017
  },
  {
    type: 'Owner Move In',
    count: 314,
    total: 1599,
    year: 2017
  },
  {
    type: 'Other Cause',
    count: 24,
    total: 1599,
    year: 2017
  },
  {
    type: 'Roommate Same Unit',
    count: 26,
    total: 1599,
    year: 2017
  },
  {
    type: 'Unapproved Subtenant',
    count: 27,
    total: 1599,
    year: 2017
  },
  {
    type: 'Access Denial',
    count: 2,
    total: 284,
    year: 2018
  },
  {
    type: 'Breach of Contract',
    count: 61,
    total: 284,
    year: 2018
  },
  {
    type: 'Capital Improvement',
    count: 57,
    total: 284,
    year: 2018
  },
  {
    type: 'Condo Conversion',
    count: 1,
    total: 284,
    year: 2018
  },
  {
    type: 'Ellis Act',
    count: 36,
    total: 284,
    year: 2018
  },
  {
    type: 'Failure To Sign Renewal',
    count: 1,
    total: 284,
    year: 2018
  },
  {
    type: 'Illegal Use',
    count: 4,
    total: 284,
    year: 2018
  },
  {
    type: 'Late Payments',
    count: 9,
    total: 284,
    year: 2018
  },
  {
    type: 'Non Payment',
    count: 15,
    total: 284,
    year: 2018
  },
  {
    type: 'Nuisance',
    count: 58,
    total: 284,
    year: 2018
  },
  {
    type: 'Other Cause',
    count: 1,
    total: 284,
    year: 2018
  },
  {
    type: 'Owner Move In',
    count: 31,
    total: 284,
    year: 2018
  },
  {
    type: 'Roommate Same Unit',
    count: 2,
    total: 284,
    year: 2018
  },
  {
    type: 'Unapproved Subtenant',
    count: 6,
    total: 284,
    year: 2018
  }
];