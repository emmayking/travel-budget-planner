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

// Date Range Picker

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

function budgetCalculation() {
  const spendingCategories = [
    "total-accommodation",
    "total-transport",
    "total-food",
    "total-activities",
    "total-shopping",
    "total-extra",
    "budget-input",
  ];

  spendingCategories.forEach((id) => {
    const category = document.getElementById(id);
    if (category) {
      if (category.tagName === "INPUT") {
        category.addEventListener("input", calculateGrandTotal);
      } else {
        const observer = new MutationObserver(calculateGrandTotal);
        observer.observe(category, { childList: true, characterData: true });
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", budgetCalculation);

// Accommodation

document
  .getElementById("add-accommodation-button")
  .addEventListener("click", addAccommodationRow);
document
  .getElementById("hidden-add-accommodation")
  .addEventListener("click", addAccommodationRow);

document
  .getElementById("delete-accommodation-button")
  .addEventListener("click", function () {
    const tableBodyAcc = document.getElementById("accommodationTableBody");
    const rows = tableBodyAcc.querySelectorAll("tr");
    let checkedRows = [];

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        checkedRows.push(row);
      }
    });

    if (checkedRows.length === 0) {
      const modal = document.getElementById("none-selected-modal");
      modal.style.display = "flex";
    } else if (checkedRows.length === 1) {
      checkedRows[0].remove();
      updateTotalAccCost();
    } else {
      const confirmModal = document.getElementById("confirm-deletion-modal");
      confirmModal.style.display = "flex";
    }
  });

var confirmModal = document.getElementById("confirm-deletion-modal");

document.getElementById("confirm-button").onclick = function () {
  const tableBodyAcc = document.getElementById("accommodationTableBody");
  const rows = tableBodyAcc.querySelectorAll("tr");

  rows.forEach((row) => {
    const checkbox = row.querySelector(".row-selector");
    if (checkbox && checkbox.checked) {
      row.remove();
    }
  });

  confirmModal.style.display = "none";
  updateTotalAccCost();
};

document.getElementById("cancel-button").onclick =
  function confirmDeleteModal() {
    confirmModal.style.display = "none";
  };

window.onclick = function (event) {
  if (event.target.classList.contains("modal-backdrop")) {
    event.target.style.display = "none";
  }
};

document.querySelectorAll(".close").forEach((span) => {
  span.onclick = function () {
    span.closest(".modal-backdrop").style.display = "none";
  };
});

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

function addAccommodationRow() {
  const newAccRow = document.createElement("tr");
  newAccRow.innerHTML = `
    <td class="first-column">
      <input type="checkbox" class="row-selector">
      <div class="hidden-delete-wrapper">
        <button class="hidden-delete-accommodation"><span class="material-symbols-outlined">delete</span></button>
      </div>
    </td>
    <td><input type="text" placeholder="Enter name of stay"></td>
    <td><input type="text" placeholder="Select Date"></td>
    <td><input type="text" class="rate" placeholder="$ / Night"></td>
    <td><input type="text" class="nights" placeholder="# of Nights"></td>
    <td><input type="text" class="cost" placeholder="$" disabled></td>
  `;
  document.getElementById("accommodationTableBody").appendChild(newAccRow);
  updateTotalAccCost();

  newAccRow
    .querySelector(".hidden-delete-accommodation")
    .addEventListener("click", function () {
      newAccRow.remove();
      updateTotalAccCost();
    });
}

function updateTotalAccCost() {
  const costs = document.querySelectorAll(".cost");
  let totalAccCost = 0;
  costs.forEach((costInput) => {
    totalAccCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-accommodation").textContent =
    totalAccCost.toFixed(2);
}

document.querySelectorAll(".hidden-delete-accommodation").forEach((button) => {
  button.addEventListener("click", function () {
    const row = button.closest("tr");
    row.remove();
    updateTotalAccCost();
  });
});

// Transport

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-transport-button")
    .addEventListener("click", addTransportRow);
  document
    .querySelector(".hidden-add-transport")
    .addEventListener("click", addTransportRow);

  document
    .getElementById("delete-transport-button")
    .addEventListener("click", function () {
      const tableBodyTran = document.getElementById("transportTableBody");
      const rows = tableBodyTran.querySelectorAll("tr");
      let checkedRows = [];

      rows.forEach((row) => {
        const checkbox = row.querySelector(".row-selector");
        if (checkbox && checkbox.checked) {
          checkedRows.push(row);
        }
      });

      if (checkedRows.length === 0) {
        const modal = document.getElementById("none-selected-tran");
        modal.style.display = "flex";
      } else if (checkedRows.length === 1) {
        checkedRows[0].remove();
        updateTotalTranCost();
      } else {
        const confirmModal = document.getElementById("confirm-deletion-tran");
        confirmModal.style.display = "flex";
      }
    });

  var confirmModal = document.getElementById("confirm-deletion-tran");

  document.getElementById("confirm-button-tran").onclick = function () {
    const tableBodyTran = document.getElementById("transportTableBody");
    const rows = tableBodyTran.querySelectorAll("tr");

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        row.remove();
      }
    });

    confirmModal.style.display = "none";
    updateTotalTranCost();
  };

  document.getElementById("cancel-button-tran").onclick = function () {
    confirmModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target.classList.contains("modal-backdrop")) {
      event.target.style.display = "none";
    }
  };

  document.querySelectorAll(".close").forEach((span) => {
    span.onclick = function () {
      span.closest(".modal-backdrop").style.display = "none";
    };
  });

  function addTransportRow() {
    const newTranRow = document.createElement("tr");
    newTranRow.innerHTML = `
      <td class="first-column">
        <input type="checkbox" class="row-selector">
        <div><button class="hidden-delete-transport"><span class="material-symbols-outlined">delete</span></button></div>
      </td>
      <td class="t-cell"><input type="text" placeholder="Type of Transport"></td>
      <td class="t-cell"><input type="text" placeholder="Departure"></td>
      <td class="t-cell"><input type="text" placeholder="Arrival"></td>
      <td class="t-cell"><input type="date"></td>
      <td class="t-cell"><input type="text" class="transport-cost" placeholder="$"></td>
    `;
    document.getElementById("transportTableBody").appendChild(newTranRow);
    updateTotalTranCost();

    newTranRow
      .querySelector(".transport-cost")
      .addEventListener("input", updateTotalTranCost);
    newTranRow
      .querySelector(".hidden-delete-transport")
      .addEventListener("click", function () {
        newTranRow.remove();
        updateTotalTranCost();
      });
  }

  function updateTotalTranCost() {
    const costs = document.querySelectorAll(".transport-cost");
    let totalTranCost = 0;
    costs.forEach((costInput) => {
      totalTranCost += parseFloat(costInput.value) || 0;
    });
    document.getElementById("total-transport").textContent =
      totalTranCost.toFixed(2);
  }

  document.querySelectorAll(".hidden-delete-transport").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove();
      updateTotalTranCost();
    });
  });

  const existingCostInputs = document.querySelectorAll(".transport-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalTranCost);
  });
});

// Food

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-food-button")
    .addEventListener("click", addFoodRow);
  document
    .querySelector(".hidden-add-food")
    .addEventListener("click", addFoodRow);

  document
    .getElementById("delete-food-button")
    .addEventListener("click", function () {
      const tableBodyFood = document.getElementById("foodTableBody");
      const rows = tableBodyFood.querySelectorAll("tr");
      let checkedRows = [];

      rows.forEach((row) => {
        const checkbox = row.querySelector(".row-selector");
        if (checkbox && checkbox.checked) {
          checkedRows.push(row);
        }
      });

      if (checkedRows.length === 0) {
        const modal = document.getElementById("none-selected-food");
        modal.style.display = "flex";
      } else if (checkedRows.length === 1) {
        checkedRows[0].remove();
        updateTotalFoodCost();
      } else {
        const confirmModal = document.getElementById("confirm-deletion-food");
        confirmModal.style.display = "flex";
      }
    });

  var confirmModal = document.getElementById("confirm-deletion-food");

  document.getElementById("confirm-button-food").onclick = function () {
    const tableBodyFood = document.getElementById("foodTableBody");
    const rows = tableBodyFood.querySelectorAll("tr");

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        row.remove();
      }
    });

    confirmModal.style.display = "none";
    updateTotalFoodCost();
  };

  document.getElementById("cancel-button-food").onclick = function () {
    confirmModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target.classList.contains("modal-backdrop")) {
      event.target.style.display = "none";
    }
  };

  document.querySelectorAll(".close").forEach((span) => {
    span.onclick = function () {
      span.closest(".modal-backdrop").style.display = "none";
    };
  });

  function addFoodRow() {
    const newFoodRow = document.createElement("tr");
    newFoodRow.innerHTML = `
      <td class="first-column">
        <input type="checkbox" class="row-selector">
        <div class="hidden-delete-wrapper"><button class="hidden-delete-food"><span class="material-symbols-outlined">delete</span></button></div>
      </td>
      <td class="f-cell"><input type="text" placeholder="Enter name of item"></td>
      <td class="f-cell">
        <select class="select-food" name="Type">
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
      <td class="f-cell"><input type="date" name="date"></td>
      <td class="f-cell"><input type="text" placeholder="$" class="food-cost"></td>
    `;
    document.getElementById("foodTableBody").appendChild(newFoodRow);
    updateTotalFoodCost();

    newFoodRow
      .querySelector(".food-cost")
      .addEventListener("input", updateTotalFoodCost);
    newFoodRow
      .querySelector(".hidden-delete-food")
      .addEventListener("click", function () {
        newFoodRow.remove();
        updateTotalFoodCost();
      });
  }

  function updateTotalFoodCost() {
    const costs = document.querySelectorAll(".food-cost");
    let totalFoodCost = 0;
    costs.forEach((costInput) => {
      totalFoodCost += parseFloat(costInput.value) || 0;
    });
    document.getElementById("total-food").textContent =
      totalFoodCost.toFixed(2);
  }

  document.querySelectorAll(".hidden-delete-food").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove();
      updateTotalFoodCost();
    });
  });

  const existingCostInputs = document.querySelectorAll(".food-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalFoodCost);
  });
});

// Activities

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-activity-button")
    .addEventListener("click", addActivityRow);
  document
    .querySelector(".hidden-add-activities")
    .addEventListener("click", addActivityRow);
  document
    .getElementById("delete-activity-button")
    .addEventListener("click", function () {
      const tableBodyAct = document.getElementById("activitiesTableBody");
      const rows = tableBodyAct.querySelectorAll("tr");
      let checkedRows = [];

      rows.forEach((row) => {
        const checkbox = row.querySelector(".row-selector");
        if (checkbox && checkbox.checked) {
          checkedRows.push(row);
        }
      });

      if (checkedRows.length === 0) {
        const modal = document.getElementById("none-selected-act");
        modal.style.display = "flex";
      } else if (checkedRows.length === 1) {
        checkedRows[0].remove();
        updateTotalActCost();
      } else {
        const confirmModal = document.getElementById("confirm-deletion-act");
        confirmModal.style.display = "flex";
      }
    });

  var confirmModal = document.getElementById("confirm-deletion-act");

  document.getElementById("confirm-button-act").onclick = function () {
    const tableBodyAct = document.getElementById("activitiesTableBody");
    const rows = tableBodyAct.querySelectorAll("tr");

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        row.remove();
      }
    });

    confirmModal.style.display = "none";
    updateTotalActCost();
  };

  document.getElementById("cancel-button-act").onclick = function () {
    confirmModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target.classList.contains("modal-backdrop")) {
      event.target.style.display = "none";
    }
  };

  document.querySelectorAll(".close").forEach((span) => {
    span.onclick = function () {
      span.closest(".modal-backdrop").style.display = "none";
    };
  });

  function addActivityRow() {
    const newActRow = document.createElement("tr");
    newActRow.innerHTML = `
      <td class="first-column">
        <input type="checkbox" class="row-selector">
        <div class="hidden-delete-wrapper"><button class="hidden-delete-food"><span class="material-symbols-outlined">delete</span></button></div>
      </td>
      <td class="act-cell"><input type="text" placeholder="Enter name of activity"></td>
      <td class="act-cell"><input type="date"></td>
      <td class="act-cell"><input type="text" class="activity-cost" placeholder="$"></td>
    `;
    document.getElementById("activitiesTableBody").appendChild(newActRow);
    updateTotalActCost();

    newActRow
      .querySelector(".activity-cost")
      .addEventListener("input", updateTotalActCost);
    newActRow
      .querySelector(".hidden-delete-food")
      .addEventListener("click", function () {
        newActRow.remove();
        updateTotalActCost();
      });
  }

  function updateTotalActCost() {
    const costs = document.querySelectorAll(".activity-cost");
    let totalActCost = 0;
    costs.forEach((costInput) => {
      totalActCost += parseFloat(costInput.value) || 0;
    });
    document.getElementById("total-activities").textContent =
      totalActCost.toFixed(2);
  }

  document.querySelectorAll(".hidden-delete-food").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove();
      updateTotalActCost();
    });
  });

  const existingCostInputs = document.querySelectorAll(".activity-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalActCost);
  });
});

// Shopping

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-shopping-button")
    .addEventListener("click", addShoppingRow);
  document
    .querySelector(".hidden-add-shopping")
    .addEventListener("click", addShoppingRow);

  document
    .getElementById("delete-shopping-button")
    .addEventListener("click", function () {
      const tableBodyShop = document.getElementById("shoppingTableBody");
      const rows = tableBodyShop.querySelectorAll("tr");
      let checkedRows = [];

      rows.forEach((row) => {
        const checkbox = row.querySelector(".row-selector");
        if (checkbox && checkbox.checked) {
          checkedRows.push(row);
        }
      });

      if (checkedRows.length === 0) {
        const modal = document.getElementById("none-selected-shop");
        modal.style.display = "flex";
      } else if (checkedRows.length === 1) {
        checkedRows[0].remove();
        updateTotalShopCost();
      } else {
        const confirmModal = document.getElementById("confirm-deletion-shop");
        confirmModal.style.display = "flex";
      }
    });

  var confirmModal = document.getElementById("confirm-deletion-shop");

  document.getElementById("confirm-button-shop").onclick = function () {
    const tableBodyShop = document.getElementById("shoppingTableBody");
    const rows = tableBodyShop.querySelectorAll("tr");

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        row.remove();
      }
    });

    confirmModal.style.display = "none";
    updateTotalShopCost();
  };

  document.getElementById("cancel-button-shop").onclick = function () {
    confirmModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target.classList.contains("modal-backdrop")) {
      event.target.style.display = "none";
    }
  };

  document.querySelectorAll(".close").forEach((span) => {
    span.onclick = function () {
      span.closest(".modal-backdrop").style.display = "none";
    };
  });

  function addShoppingRow() {
    const newShopRow = document.createElement("tr");
    newShopRow.innerHTML = `
      <td class="first-column">
        <input type="checkbox" class="row-selector">
        <div class="hidden-delete-wrapper"><button class="hidden-delete-shopping"><span class="material-symbols-outlined">delete</span></button></div>
      </td>
      <td class="shop-cell"><input type="text" placeholder="Enter name of item"></td>
      <td class="shop-cell"><input type="date" name="date"></td>
      <td class="shop-cell"><input type="text" class="shopping-cost" placeholder="$"></td>
    `;
    document.getElementById("shoppingTableBody").appendChild(newShopRow);
    updateTotalShopCost();

    newShopRow
      .querySelector(".shopping-cost")
      .addEventListener("input", updateTotalShopCost);
    newShopRow
      .querySelector(".hidden-delete-shopping")
      .addEventListener("click", function () {
        newShopRow.remove();
        updateTotalShopCost();
      });
  }

  function updateTotalShopCost() {
    const costs = document.querySelectorAll(".shopping-cost");
    let totalShopCost = 0;
    costs.forEach((costInput) => {
      totalShopCost += parseFloat(costInput.value) || 0;
    });
    document.getElementById("total-shopping").textContent =
      totalShopCost.toFixed(2);
  }

  document.querySelectorAll(".hidden-delete-shopping").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove();
      updateTotalShopCost();
    });
  });

  const existingCostInputs = document.querySelectorAll(".shopping-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalShopCost);
  });
});

// Extra Expenses

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-extra-button")
    .addEventListener("click", addExtraRow);
  document
    .querySelector(".hidden-add-extra")
    .addEventListener("click", addExtraRow);

  document
    .getElementById("delete-extra-button")
    .addEventListener("click", function () {
      const tableBodyExt = document.getElementById("extraTableBody");
      const rows = tableBodyExt.querySelectorAll("tr");
      let checkedRows = [];

      rows.forEach((row) => {
        const checkbox = row.querySelector(".row-selector");
        if (checkbox && checkbox.checked) {
          checkedRows.push(row);
        }
      });

      if (checkedRows.length === 0) {
        const modal = document.getElementById("none-selected-ext");
        modal.style.display = "flex";
      } else if (checkedRows.length === 1) {
        checkedRows[0].remove();
        updateTotalExtraCost();
      } else {
        const confirmModal = document.getElementById("confirm-deletion-ext");
        confirmModal.style.display = "flex";
      }
    });

  var confirmModal = document.getElementById("confirm-deletion-ext");

  document.getElementById("confirm-button-ext").onclick = function () {
    const tableBodyExt = document.getElementById("extraTableBody");
    const rows = tableBodyExt.querySelectorAll("tr");

    rows.forEach((row) => {
      const checkbox = row.querySelector(".row-selector");
      if (checkbox && checkbox.checked) {
        row.remove();
      }
    });

    confirmModal.style.display = "none";
    updateTotalExtraCost();
  };

  document.getElementById("cancel-button-ext").onclick = function () {
    confirmModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target.classList.contains("modal-backdrop")) {
      event.target.style.display = "none";
    }
  };

  document.querySelectorAll(".close").forEach((span) => {
    span.onclick = function () {
      span.closest(".modal-backdrop").style.display = "none";
    };
  });

  function addExtraRow() {
    const newExtRow = document.createElement("tr");
    newExtRow.innerHTML = `
      <td class="first-column">
        <input type="checkbox" class="row-selector">
        <div class="hidden-delete-wrapper"><button class="hidden-delete-extra"><span class="material-symbols-outlined">delete</span></button></div>
      </td>
      <td class="ext-cell"><input type="text" placeholder="Enter name of item"></td>
      <td class="ext-cell"><input type="date"></td>
      <td class="ext-cell"><input type="text" class="extra-cost" placeholder="$"></td>
    `;
    document.getElementById("extraTableBody").appendChild(newExtRow);
    updateTotalExtraCost();

    newExtRow
      .querySelector(".extra-cost")
      .addEventListener("input", updateTotalExtraCost);
    newExtRow
      .querySelector(".hidden-delete-extra")
      .addEventListener("click", function () {
        newExtRow.remove();
        updateTotalExtraCost();
      });
  }

  function updateTotalExtraCost() {
    const costs = document.querySelectorAll(".extra-cost");
    let totalExtraCost = 0;
    costs.forEach((costInput) => {
      totalExtraCost += parseFloat(costInput.value) || 0;
    });
    document.getElementById("total-extra").textContent =
      totalExtraCost.toFixed(2);
  }

  document.querySelectorAll(".hidden-delete-extra").forEach((button) => {
    button.addEventListener("click", function () {
      const row = button.closest("tr");
      row.remove();
      updateTotalExtraCost();
    });
  });

  const existingCostInputs = document.querySelectorAll(".extra-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalExtraCost);
  });
});

// Save to Local Storage

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", saveTrip);

function saveTrip(event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const travelDates = document.querySelectorAll(
    ".travel-dates .date-wrapper input"
  );
  const startDate = travelDates[0].value;
  const endDate = travelDates[1].value;
  const budget = parseFloat(document.getElementById("budget-input").value);
  const accommodation = parseFloat(
    document.getElementById("total-accommodation").value
  );
  const transportation = parseFloat(
    document.getElementById("total-transport").value
  );
  const food = parseFloat(document.getElementById("total-food").value);
  const activities = parseFloat(
    document.getElementById("total-activities").value
  );

  const trip = {
    destination,
    startDate,
    endDate,
    budget,
    accommodation,
    transportation,
    food,
    activities,
  };

  let trips = JSON.parse(localStorage.getItem("trips")) || [];

  trips.push(trip);

  localStorage.setItem("trips", JSON.stringify(trips));
}
