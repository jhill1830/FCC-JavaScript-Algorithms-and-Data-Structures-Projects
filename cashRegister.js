/*

Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)


See below for an example of a cash-in-drawer array:
 
[
  ["PENNY", 1.01],    - 1 cent
  ["NICKEL", 2.05],   - 5 cents
  ["DIME", 3.1],      - 10 cents
  ["QUARTER", 4.25],  - 25 cents
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should 
return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should 
return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should 
return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should 
return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should 
return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should 
return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.



Steps:
convert cid to total money
create change variable(cash-price)
create status/change variable

if cid total < change - return insufficient   DONE
if cid total === change - return closed       DONE
if cid total > change &
  convert cid to multiples of bill value(new array?)
  iterate through cid multiples array as the total values and subtract from change from largest to smallest bills.
  convert change to the multiple of cid bill value through iteration
  remove that from the change over each iteration
  If change != 0 return insufficient

*/

function checkCashRegister(price, cash, cid) {
  let change = cash-price;
  console.log(change)
  let cidTotal = 0;
  let cidMult = [];
  cidMult["PENNY"] = [cid[0][1]/1*100, 0.01];
  cidMult["NICKEL"] = [cid[1][1]/5*100, 0.05];
  cidMult["DIME"] = [cid[2][1]/10*100, 0.10];
  cidMult["QUARTER"] = [cid[3][1]/25*100, 0.25];
  cidMult["ONE"] = [cid[4][1], 1];
  cidMult["FIVE"] = [cid[5][1]/5, 5];
  cidMult["TEN"] = [cid[6][1]/10, 10];
  cidMult["TWENTY"] = [cid[7][1]/20, 20];
  cidMult["ONE HUNDRED"] = [cid[8][1]/100, 100];

  let statChange = {"status": "", "change": []};

  //console.log(cidMult[cid[0][0]][1])

  for (let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1]*100
  }
  cidTotal = cidTotal/100;

  if (change > cidTotal) {
    statChange["status"] = "INSUFFICIENT_FUNDS"
    console.log(statChange)
    return statChange;
  };

  if (change === cidTotal) {
    statChange["status"] = "CLOSED"
    statChange["change"] = cid
    console.log(statChange)
    return statChange;
  };

  let changeInt = Math.round(change*100); //make the numbers integers to prevent float point errors
  let countChange = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER",0],['ONE',0],["FIVE",0],["TEN",0],["TWENTY",0],["ONE HUNDRED",0]];

  function findChange(){
    //console.log(changeInt)
    for (let i = cid.length - 1; i >= 0; i--) { //iterate descendingly through cid to compare largest to smallest bills
      console.log(changeInt)
      if (cidMult[cid[i][0]][0] > 0 && changeInt >= Math.round(cidMult[cid[i][0]][1]*100)) {    //if there is money in till of that type and that it is less than or equal to the change
        console.log(i)
        //console.log(Math.round(cidMult[cid[i][0]][1]*100));
        //console.log(i)
        changeInt -= Math.round(cidMult[cid[i][0]][1]*100);       //negates bill value from total change
        //console.log(changeInt);
        cidMult[cid[i][0]][0] -= 1;                               //removes bill from till
        countChange[i][1] += cidMult[cid[i][0]][1]                //adds bill to change counter
        console.log(countChange)
        if (changeInt != 0) {
          statChange["change"].push(countChange[i])
          findChange();
          //console.log(countChange)
          if (changeInt == 0){
            statChange["status"] = "OPEN";
          }
        }
      }
      console.log(cidMult[cid[0][0]][0])
      if (cidMult[cid[0][0]][0] === 0) {
        statChange["status"] = "INSUFFICIENT_FUNDS"
        console.log(statChange)
        return statChange;
      }
    }
  }

  findChange()

  //filter out duplicates in statChange["change"]
  let filterChange = statChange["change"].filter((value, index) => {
    return statChange["change"].indexOf(value) ===index;
  })
  statChange["change"] = filterChange
  if (statChange["status"] == "INSUFFICIENT_FUNDS") {
    statChange["change"] = []
  }

  console.log(filterChange)
  console.log(statChange)
  console.log(cidTotal);
  console.log(cidMult);
  console.log(cid.length);
  
  return statChange;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])