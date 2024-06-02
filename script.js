// Blinking Cursor

const inputWrapper = document.querySelector(".input-wrapper");
const cursor = document.querySelector(".blinking-cursor");

inputWrapper.addEventListener("focus", () => {
  cursor.style.display = "none";
});

inputWrapper.addEventListener("blur", () => {
  if (!inputWrapper.value) {
    cursor.style.display = "block";
  }
});

// Currency Conversion

function toggleCalculator() {
  const calcButton = document.getElementById("calculator");
  if (calcButton.style.display === "none") {
    calcButton.style.display = "block";
  } else calcButton.style.display = "none";
}

function closeCalculator() {
  document.getElementById("calculator").style.display = "none";
}

const currencies = [
  "CAD",
  "USD",
  "EUR",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",
];

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "EUR";
toDropDown.value = "CAD";

let convertCurrency = () => {
  const amount = document.getElementById("amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;
  const result = document.getElementById("result");

  if (amount.length !== 0) {
    fetch(
      `https://v6.exchangerate-api.com/v6/ffd5bd299cb5cd414b825c77/latest/${fromCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      })
      .catch((error) => {
        result.innerHTML = "Error fetching exchange rates";
        console.error("Error:", error);
      });
  } else {
    result.innerHTML = "Please enter a valid amount.";
  }
};

document
  .getElementById("convertButton")
  .addEventListener("click", convertCurrency);

// Budget Overview

function calculateGrandTotal() {
  const totalAccommodation = document.getElementById("total-accommodation");
  const totalTransport = document.getElementById("total-transport");
  const totalFood = document.getElementById("total-food");
  const totalActivities = document.getElementById("total-activities");
  const totalShopping = document.getElementById("total-shopping");
  const totalExtra = document.getElementById("total-extra");

  const accommodationValue = parseFloat(totalAccommodation.innerText) || 0;
  const transportValue = parseFloat(totalTransport.innerText) || 0;
  const foodValue = parseFloat(totalFood.innerText) || 0;
  const activitiesValue = parseFloat(totalActivities.innerText) || 0;
  const shoppingValue = parseFloat(totalShopping.innerText) || 0;
  const extraValue = parseFloat(totalExtra.innerText) || 0;

  const grandTotal =
    accommodationValue +
    transportValue +
    foodValue +
    activitiesValue +
    shoppingValue +
    extraValue;

  const totalUsed = document.getElementById("grand-total");
  if (totalUsed) {
    totalUsed.innerText = grandTotal.toFixed(2);
  }

  const budgetInput = document.getElementById("budget-input");
  const budgetValue = parseFloat(budgetInput.value) || 0;

  const totalRemaining = budgetValue - grandTotal;

  const remainingField = document.getElementById("total-remaining");
  if (remainingField) {
    remainingField.innerText = totalRemaining.toFixed(2);
  }

  return grandTotal;
}

function setupAutomaticCalculation() {
  const elementsToWatch = [
    "total-accommodation",
    "total-transport",
    "total-food",
    "total-activities",
    "total-shopping",
    "total-extra",
    "budget-input",
  ];

  elementsToWatch.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      if (element.tagName === "INPUT") {
        element.addEventListener("input", calculateGrandTotal);
      } else {
        const observer = new MutationObserver(calculateGrandTotal);
        observer.observe(element, { childList: true, characterData: true });
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", setupAutomaticCalculation);

// Accommodation

document
  .getElementById("add-accommodation-button")
  .addEventListener("click", function () {
    const newAccRow = document.createElement("tr");
    newAccRow.innerHTML = `
    <td><input type="checkbox" class="row-selector"></td>
    <td><input type="text" placeholder="Enter name of stay"></td>
    <td><input type="text" placeholder="Select Date"></td>
    <td><input type="text" class="rate" placeholder="$ / Night"></td>
    <td><input type="text" class="nights" placeholder="# of Nights"></td>
    <td><input type="text" class="cost" placeholder="$" disabled></td>
  `;
    document.getElementById("accommodationTableBody").appendChild(newAccRow);
    updateTotalAccCost();
  });

document
  .getElementById("delete-accommodation-button")
  .addEventListener("click", function () {
    const tableBodyAcc = document.getElementById("accommodationTableBody");
    const rows = tableBodyAcc.querySelectorAll("tr");
    let anyChecked = false;

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        anyChecked = true;
        tableBodyAcc.removeChild(row);
      }
    });

    // Modal

    if (!anyChecked) {
      const modal = document.getElementById("noCheckboxModal");
      modal.style.display = "block";
    }

    updateTotalAccCost();
  });

var modal = document.getElementById("noCheckboxModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .getElementById("accommodationTableBody")
  .addEventListener("input", function (e) {
    if (
      e.target.classList.contains("rate") ||
      e.target.classList.contains("nights")
    ) {
      const row = e.target.closest("tr");
      const rate = parseFloat(row.querySelector(".rate").value) || 0;
      const nights = parseFloat(row.querySelector(".nights").value) || 0;
      const costInput = row.querySelector(".cost");
      costInput.value = (rate * nights).toFixed(2);
      updateTotalAccCost();
    }
  });

function updateTotalAccCost() {
  const costs = document.querySelectorAll(".cost");
  let totalAccCost = 0;
  costs.forEach((costInput) => {
    totalAccCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-accommodation").textContent =
    totalAccCost.toFixed(2);
}

// Transport

function updateInitialTranRow() {
  const existingCostInputs = document.querySelectorAll(".transport-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalTranCost);
  });
}

document.addEventListener("DOMContentLoaded", updateInitialTranRow);

document
  .getElementById("add-transport-button")
  .addEventListener("click", function () {
    const newTranRow = document.createElement("tr");
    newTranRow.innerHTML = `
      <td><input type="checkbox" class="row-selector"></td>
     <td class="t-cell"><input type="text" placeholder="Type of Transport"></td>
          <td class="t-cell"><input type="text" placeholder="Departure"></td>
          <td class="t-cell"><input type="text" placeholder="Arrival"></td>
           <td class="t-cell"><input type="date"></td>
          <td class="t-cell"><input type="text" class="transport-cost" placeholder="$"></td>
  `;
    const newTranInput = newTranRow.querySelector(".transport-cost");
    newTranInput.addEventListener("input", updateTotalTranCost);

    document.getElementById("transportTableBody").appendChild(newTranRow);
    updateTotalTranCost();
  });

document
  .getElementById("delete-transport-button")
  .addEventListener("click", function () {
    const tableBodyTran = document.getElementById("transportTableBody");
    const tranRows = tableBodyTran.querySelectorAll("tr");
    tranRows.forEach((row) => {
      const tranCheckbox = row.querySelector(".row-selector");
      if (tranCheckbox && tranCheckbox.checked) {
        tableBodyTran.removeChild(row);
      }
    });
    updateTotalTranCost();
  });

function updateTotalTranCost() {
  const costs = document.querySelectorAll(".transport-cost");
  let totalTranCost = 0;
  costs.forEach((costInput) => {
    totalTranCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-transport").textContent =
    totalTranCost.toFixed(2);
}

//Food

function updateInitialFoodRow() {
  const initialFoodInputs = document.querySelectorAll(".food-cost");
  initialFoodInputs.forEach((input) => {
    input.addEventListener("input", updateTotalFoodCost);
  });
}

document.addEventListener("DOMContentLoaded", updateInitialFoodRow);

document
  .getElementById("add-food-button")
  .addEventListener("click", function () {
    const newFoodRow = document.createElement("tr");
    newFoodRow.innerHTML = `
      <td class="f-cell"><input type="checkbox" class="row-selector"></td>
    <td class="f-cell"><input type="text" placeholder="Enter name of item"></td>
     <td class="f-cell"><select class="select-food" name="Type"><span class="material-symbols-outlined">delete</span>
              <option value="Select">Select</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Drink">Beverage</option>
              <option value="Drink">Grocery Run</option>
              <option value="Groceries">Night Out</option>
            </select>
          </td>
          <td class="f-cell"><input type="date"></td>
          <td class="f-cell"><input type="text" placeholder="$" class= "food-cost"></td>
        </tr>
  `;
    document.getElementById("foodTableBody").appendChild(newFoodRow);

    const newFoodInput = newFoodRow.querySelector(".food-cost");
    newFoodInput.addEventListener("input", updateTotalFoodCost);

    updateTotalFoodCost();
  });

document
  .getElementById("delete-food-button")
  .addEventListener("click", function () {
    const tableBodyFood = document.getElementById("foodTableBody");
    const foodRows = tableBodyFood.querySelectorAll("tr");
    foodRows.forEach((row) => {
      const foodCheckbox = row.querySelector(".row-selector");
      if (foodCheckbox && foodCheckbox.checked) {
        tableBodyFood.removeChild(row);
      }
    });
    updateTotalFoodCost();
  });

function updateTotalFoodCost() {
  const costs = document.querySelectorAll(".food-cost");
  let totalFoodCost = 0;
  costs.forEach((costInput) => {
    totalFoodCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-food").textContent = totalFoodCost.toFixed(2);
}

// Activities

function updateInitialActInput() {
  const initialActInputs = document.querySelectorAll(".activity-cost");
  initialActInputs.forEach((input) => {
    input.addEventListener("input", updateTotalActCost);
  });
}

document.addEventListener("DOMContentLoaded", updateInitialActInput);

document
  .getElementById("add-activity-button")
  .addEventListener("click", function () {
    const newActRow = document.createElement("tr");
    newActRow.innerHTML = `
    <td><input type="checkbox" class="row-selector"></td>
    <td class="act-cell"><input type="text" placeholder="Enter name of activity"></td>
          <td class="act-cell"> <input type="date"></td>
          <td class="act-cell"><input type="text" class="activity-cost" placeholder="$"></td>
  `;
    const newActInput = newActRow.querySelector(".activity-cost");
    newActInput.addEventListener("input", updateTotalActCost);

    document.getElementById("activitiesTableBody").appendChild(newActRow);
    updateTotalActCost();
  });

document
  .getElementById("delete-activity-button")
  .addEventListener("click", function () {
    const tableBodyAct = document.getElementById("activitiesTableBody");
    const actRows = tableBodyAct.querySelectorAll("tr");
    actRows.forEach((row) => {
      const actCheckbox = row.querySelector(".row-selector");
      if (actCheckbox && actCheckbox.checked) {
        tableBodyAct.removeChild(row);
      }
    });
    updateTotalActCost();
  });

function updateTotalActCost() {
  const costs = document.querySelectorAll(".activity-cost");
  let totalActCost = 0;
  costs.forEach((costInput) => {
    totalActCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-activities").textContent =
    totalActCost.toFixed(2);
}

//Shopping

function updateInitialShopInput() {
  const initialShopInputs = document.querySelectorAll(".shopping-cost");
  initialShopInputs.forEach((input) => {
    input.addEventListener("input", updateTotalShopCost);
  });
}

document.addEventListener("DOMContentLoaded", updateInitialShopInput);

document
  .getElementById("add-shopping-button")
  .addEventListener("click", function () {
    const newShopRow = document.createElement("tr");
    newShopRow.innerHTML = `
    <td><input type="checkbox" class="row-selector"></td>
    <td class="shop-cell"><input type="text" placeholder="Enter name of item"></td>
          <td class="shop-cell"><input type="date" name="date"></td>
          <td class="shop-cell"><input type="text" class="shopping-cost" placeholder="$"></td>
  `;
    const newShopInput = newShopRow.querySelector(".shopping-cost");
    newShopInput.addEventListener("input", updateTotalShopCost);

    document.getElementById("shoppingTableBody").appendChild(newShopRow);
    updateTotalShopCost();
  });

document
  .getElementById("delete-shopping-button")
  .addEventListener("click", function () {
    const tableBodyShop = document.getElementById("shoppingTableBody");
    const shopRows = tableBodyShop.querySelectorAll("tr");
    shopRows.forEach((row) => {
      const shopCheckbox = row.querySelector(".row-selector");
      if (shopCheckbox && shopCheckbox.checked) {
        tableBodyShop.removeChild(row);
      }
    });
    updateTotalShopCost();
  });

function updateTotalShopCost() {
  const costs = document.querySelectorAll(".shopping-cost");
  let totalShopCost = 0;
  costs.forEach((costInput) => {
    totalShopCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-shopping").textContent =
    totalShopCost.toFixed(2);
}

// Extra Expenses

function updateInitialExtInput() {
  const initialExtInputs = document.querySelectorAll(".extra-cost");
  initialExtInputs.forEach((input) => {
    input.addEventListener("input", updateTotalExtCost);
  });
}

document.addEventListener("DOMContentLoaded", updateInitialExtInput);

document
  .getElementById("add-extra-button")
  .addEventListener("click", function () {
    const newExtRow = document.createElement("tr");
    newExtRow.innerHTML = `
    <td><input type="checkbox" class="row-selector"></td>
    <td class="ext-cell"><input type="text" placeholder="Enter name of item"></td>
          <td class="ext-cell"><input type="date"></td>
          <td class="ext-cell"><input type="text" class="extra-cost" placeholder="$"></td>
  `;
    const newExtInput = newExtRow.querySelector(".extra-cost");
    newExtInput.addEventListener("input", updateTotalExtCost);

    document.getElementById("extraTableBody").appendChild(newExtRow);
    updateTotalExtCost();
  });

document
  .getElementById("delete-extra-button")
  .addEventListener("click", function () {
    const tableBodyExt = document.getElementById("extraTableBody");
    const extraRows = tableBodyExt.querySelectorAll("tr");
    extraRows.forEach((row) => {
      const extraCheckbox = row.querySelector(".row-selector");
      if (extraCheckbox && extraCheckbox.checked) {
        tableBodyExt.removeChild(row);
      }
    });
    updateTotalExtCost();
  });

function updateTotalExtCost() {
  const costs = document.querySelectorAll(".extra-cost");
  let totalExtCost = 0;
  costs.forEach((costInput) => {
    totalExtCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-extra").textContent = totalExtCost.toFixed(2);
}
