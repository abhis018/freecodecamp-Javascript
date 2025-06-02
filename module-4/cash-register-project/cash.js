const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

purchaseBtn.addEventListener("click", () => {
  const cashGiven = parseFloat(cash.value);

  if (cashGiven < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashGiven === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
  } else {
    const result = getChange(price, cashGiven, JSON.parse(JSON.stringify(cid)));

    if (result.status === "INSUFFICIENT_FUNDS") {
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    } else if (result.status === "CLOSED") {
      // Empty the global cid
      cid = cid.map(([name, _]) => [name, 0]);

      let output = "Status: CLOSED ";
      result.change.forEach(([name, amount]) => {
        output += `${name}: $${amount.toFixed(2)}, `;
      });
      changeDue.textContent = output.slice(0, -2);
    } else if (result.status === "OPEN") {
      // Update global cid based on change given
      result.change.forEach(([name, amountGiven]) => {
        for (let i = 0; i < cid.length; i++) {
          if (cid[i][0] === name) {
            cid[i][1] = +(cid[i][1] - amountGiven).toFixed(2);
            break;
          }
        }
      });

      let output = "Status: OPEN ";
      result.change.forEach(([name, amount]) => {
        output += `${name}: $${amount.toFixed(2)}, `;
      });
      changeDue.textContent = output.slice(0, -2);
    }
  }
});

function getChange(price, cash, drawer) {
  const values = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  };

  let change = +(cash - price).toFixed(2);
  let totalDrawer = +(drawer.reduce((sum, [_, amount]) => sum + amount, 0)).toFixed(2);

  // First check for exact or empty drawer before checking for insufficient funds
  if (totalDrawer === change) {
    return { status: "CLOSED", change: drawer };
  }

  if (totalDrawer === 0) {
    return { status: "CLOSED", change: drawer };
  }

  if (change > totalDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  const drawerCopy = drawer.slice().reverse();
  let changeArray = [];

  for (let [name, amount] of drawerCopy) {
    const unitValue = values[name];
    let amountToGive = 0;

    while (change >= unitValue && amount >= unitValue) {
      change = +(change - unitValue).toFixed(2);
      amount = +(amount - unitValue).toFixed(2);
      amountToGive = +(amountToGive + unitValue).toFixed(2);
    }

    if (amountToGive > 0) {
      changeArray.push([name, amountToGive]);
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}
