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
// Switch through the Securities for each transaction
portfolio.transactions.forEach((val, index) => {
  let raw = fs.readFileSync(`./Securities/${val.securityId}.json`);
  let currentSecurity = JSON.parse(raw);
  calcShareVal(
    currentSecurity.historyDetails,
    val.date,
    val.amount,
    val.type,
    val.securityId,
    date
  );
});

/**********************************
PRINT OUTS FOR RESULTS
**********************************/

console.log(`*********** PORTFOLIO: ${process.argv[2]} ***********`);
console.log(`Total portfolio value: ${Number(tot.toFixed(2))}`);

/**********************************
FUNCTIONS FOR CALCULATIONS
CAN BE CALLED FROM HERE
BECAUSE OF PRINCIPLE: HOISTING
**********************************/

function calcShareVal(array, buyDate, amount, type, id, date) {
  let buyDateArr = [];
  let currentDateArr = [];

  array.forEach((val, index) => {
    // Reformat date using moment library - easier to manage
    if (moment(buyDate).unix() >= moment(val.endDate).unix()) {
      buyDateArr.push(index);
    }
  });

  array.forEach((val, index) => {
    if (moment(date).unix() >= moment(val.endDate).unix()) {
      //console.log(val.endDate);
      currentDateArr.push(index);
    }
  });

  // console.log(buyDateArr);
  // console.log(currentDateArr);

  let j = Math.max(currentDateArr[currentDateArr.length - 1]);

  //console.log(j);

  // find closest or exact date
  let i = Math.max(buyDateArr[buyDateArr.length - 1]);
  //let j = Math.max(currentDateArr[currentDateArr.length - 1]);

  // let test = array.find(function(element) {
  //   return element.endDate === date;
  // });
  // //console.log(test.value);
  // val = test.value;

  // Calc shares bought at that date
  totValPerShare = amount / array[i].value * array[j].value;

  //console.log(sharesBought);

  type === 'buy' ? (tot += totValPerShare) : (tot -= totValPerShare);
}
