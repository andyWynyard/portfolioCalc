const moment = require('moment');
const fs = require('fs');

// const port3 = require('./Portfolios/3');
// const port4 = require('./Portfolios/4');

const secA = require('./Securities/A');
const secB = require('./Securities/B');
const secC = require('./Securities/C');
const secD = require('./Securities/D');




const date = process.argv[3];
let rawdata = fs.readFileSync(`./Portfolios/${process.argv[2]}.json`);
let portfolio = JSON.parse(rawdata);
let sharesBought;
let currentPortVal;

// What portfolio is being used
// Needs to be refactored if more portfolios are used
// Will always use 4 if other numbers are passed
//process.argv[2] == 3 ? (portfolio = port3) : (portfolio = port4);


let totA = 0;
let totB = 0;
let totC = 0;
let totD = 0;

let valA = 0;
let valB = 0;
let valC = 0;
let valD = 0;

// Figure out what Security is being accessed
// Switch through the Securities for each transaction
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
PRINT OUTS FOR RESULTS
**********************************/

console.log(`*********** PORTFOLIO: ${process.argv[2]} ***********`);

/**************************************************
Uncomment the following lines
for a more detailed list of what you have
***************************************************/

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

  // find val of
  array.forEach((val, index) => {
    if (val.endDate === date) {
      if (id === 'A') valA = val.value;
      if (id === 'B') valB = val.value;
      if (id === 'C') valC = val.value;
      if (id === 'D') valD = val.value;
    }

    // Reformat date using moment library - easier to manage
    if (moment(buyDate).unix() >= moment(val.endDate).unix()) {
      arr.push(index);
    }
  });

  // find closest or exact date
  let i = Math.max(arr[arr.length - 1]);
  // Calc shares bought at that date
  sharesBought = amount / array[i].value;

  // What securities are being bought/sold
  // Get totals of individual shares
  checkTypeId(id, type, sharesBought);
}

function checkTypeId(i, t, s) {
  if (i === 'A') t === 'buy' ? (totA += s) : (totA -= s);
  if (i === 'B') t === 'buy' ? (totB += s) : (totB -= s);
  if (i === 'C') t === 'buy' ? (totC += s) : (totC -= s);
  if (i === 'D') t === 'buy' ? (totD += s) : (totD -= s);
}
