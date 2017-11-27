const moment = require('moment');
const fs = require('fs');

const date = process.argv[3];
let rawdata = fs.readFileSync(`./Portfolios/${process.argv[2]}.json`);
let portfolio = JSON.parse(rawdata);
let sharesBought;
let currentPortVal;

let tot = 0;
let val = 0;

// Figure out what Security is being accessed
portfolio.transactions.forEach((val, index) => {
  let raw = fs.readFileSync(`./Securities/${val.securityId}.json`);
  let currentSecurity = JSON.parse(raw);
  calcShareVal(
    currentSecurity.historyDetails,
    val.date,
    val.amount,
    val.type,
    date
  );
});

/**********************************
PRINT OUTS FOR RESULTS
**********************************/

console.log(`*********** PORTFOLIO: ${process.argv[2]} @ ${date} ***********`);
console.log(`Total portfolio value: ${Number(tot.toFixed(2))}`);

/**********************************
FUNCTIONS FOR CALCULATIONS
CAN BE CALLED FROM HERE
BECAUSE OF PRINCIPLE: HOISTING
**********************************/

function calcShareVal(array, buyDate, amount, type, date) {
  let buyDateArr = [];
  let currentDateArr = [];

  array.forEach((val, index) => {
    // Reformat date using moment library - easier to manage
    if (moment(val.endDate).unix() <= moment(buyDate).unix()) {
      buyDateArr.push(index);
    }
    if (moment(val.endDate).unix() <= moment(date).unix()) {
      currentDateArr.push(index);
    }
  });

  // find closest or exact date
  let i = Math.max(buyDateArr[buyDateArr.length - 1]);
  let j = Math.max(currentDateArr[currentDateArr.length - 1]);

  // Calc shares bought at that date
  try {
    totValPerShare = amount / array[i].value * array[j].value;
  } catch (e) {
    console.log(`****************************************************`);
    console.log(`DATE: --${date}-- MAY NOT EXIST, PLEASE CHECK IT`);
    return;
  } finally {
  }
  try {
    type === 'buy' ? (tot += totValPerShare) : (tot -= totValPerShare);
  } catch (e) {
    console.log(`Error: ${e}`);
    return;
  } finally {
  }
}
