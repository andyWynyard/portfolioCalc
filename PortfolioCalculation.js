const moment = require('moment');

const port3 = require('./Portfolios/3');
const port4 = require('./Portfolios/4');

const secA = require('./Securities/A');
const secB = require('./Securities/B');
const secC = require('./Securities/C');
const secD = require('./Securities/D');

let portfolio;
const date = process.argv[3];
let sharesBought;
let currentPortVal;

// What portfolio is being used
// Needs to be refactored if more portfolios are used
// Will always use 4 if other numbers are passed
process.argv[2] == 3 ? (portfolio = port3) : (portfolio = port4);

let totA = 0;
let totB = 0;
let totC = 0;
let totD = 0;

let valA = 0;
let valB = 0;
let valC = 0;
let valD = 0;

// Figure out what Security is being accessed

portfolio.transactions.forEach((val, index) => {
  switch (val.securityId) {
    case 'A':
      calcShareVal(
        secA.historyDetails,
        val.date,
        val.amount,
        val.type,
        val.securityId,
        date
      );
      break;
    case 'B':
      calcShareVal(
        secB.historyDetails,
        val.date,
        val.amount,
        val.type,
        val.securityId,
        date
      );
      break;
    case 'C':
      calcShareVal(
        secC.historyDetails,
        val.date,
        val.amount,
        val.type,
        val.securityId,
        date
      );
      break;
    case 'D':
      calcShareVal(
        secD.historyDetails,
        val.date,
        val.amount,
        val.type,
        val.securityId,
        date
      );
      break;
    default:
      console.log(`404 not found`);
      break;
  }
});

/**********************************
PRINT OUTS FOR VALUES
**********************************/

console.log(`*********** PORTFOLIO: ${process.argv[2]} ***********`);
//
// console.log(`A: ${totA} shares @ ${valA}`);
// console.log(`B: ${totB} shares @ ${valB}`);
// console.log(`C: ${totC} shares @ ${valC}`);
// console.log(`D: ${totD} shares @ ${valD}`);

console.log(
  `Total portfolio value: ${Number(
    (totA * valA + totB * valB + totC * valC + totD * valD).toFixed(2)
  )}`
);

/**********************************
FUNCTIONS FOR CALCULATIONS
CAN BE CALLED FROM HERE
BECAUSE OF PRINCIPLE: HOISTING
**********************************/

function calcShareVal(array, buyDate, amount, type, id, date) {
  let arr = [];

  array.forEach((val, index) => {
    if (val.endDate === date) {
      if (id === 'A') valA = val.value;
      if (id === 'B') valB = val.value;
      if (id === 'C') valC = val.value;
      if (id === 'D') valD = val.value;
    }

    // Reduce date to epoc format and compare
    if (moment(buyDate).unix() >= moment(val.endDate).unix()) {
      arr.push(index);
    }
  });

  // find closest or exact date
  let i = Math.max(arr[arr.length - 1]);
  // Calc shares bought at that date
  sharesBought = amount / array[i].value;

  // What securities are being bought/sold
  checkTypeId(id, type);
}

function checkTypeId(i, t) {
  if (i === 'A' && t === 'buy') {
    totA += sharesBought;
  } else if (i === 'B' && t === 'buy') {
    totB += sharesBought;
  } else if (i === 'C' && t === 'buy') {
    totC += sharesBought;
  } else if (i === 'D' && t === 'buy') {
    totD += sharesBought;
  }

  if (i === 'A' && t === 'sell') {
    totA -= sharesBought;
  } else if (i === 'B' && t === 'sell') {
    totB -= sharesBought;
  } else if (i === 'C' && t === 'sell') {
    totC -= sharesBought;
  } else if (i === 'D' && t === 'sell') {
    totD -= sharesBought;
  }
}
