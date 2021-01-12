function checkCashRegister(price, cash, cid) {
  
  const changeDictionary = {
    "ONE HUNDRED": 100.0,
    "TWENTY": 20.0,
    "TEN": 10.0,
    "FIVE": 5.0,
    "ONE": 1.0,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  };
  

  var result = {status: null, change: []}; 
  const changeDue = cash - price;
  const changeOnHand = cidTotal(cid);


  //get total change in drawer
  function cidTotal(drawer) {
    let total = 0;
    drawer.forEach(change => total += change[1] * 100);
    //multiply by 100 here then divide total by 100 to deal with rounding errrors by using entirly pennies
    total = total/100;
    return total;
  }


  //exact change
  if (changeOnHand == changeDue) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }


  //if change due is greater than change available
  if (changeOnHand < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
 

  //getting the amount of each bills/coins given
  let variableChangeDue = changeDue;
  for (let i = cid.length - 1; i >= 0; i--) {
    let counter = 0;
    while (variableChangeDue - changeDictionary[cid[i][0]] >= 0 && cid[i][1] > 0) {
      counter++
      cid[i][1] -= changeDictionary[cid[i][0]]
      variableChangeDue -= changeDictionary[cid[i][0]]
      variableChangeDue = parseFloat(variableChangeDue.toFixed(2)) //round to nearest hundredth
    }
    if (counter > 0) {
      result.change.push([cid[i][0],changeDictionary[cid[i][0]]*counter]);
    }
  }
  result.status = "OPEN"


  //cathing if there is not exact change in drawer
  if (cidTotal(result.change) < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }

  return result;
}
