// Accommodation

document
  .getElementById("add-accommodation-button")
  .addEventListener("click", function () {
    const newAccRow = document.createElement("tr");
    newAccRow.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><input type="text" class="rate"></td>
    <td><input type="text" class="nights"></td>
    <td><input type="text" class="cost" disabled></td>
  `;
    document.getElementById("accommodationTableBody").appendChild(newAccRow);
    updateTotalAccCost();
  });

document
  .getElementById("delete-accommodation-button")
  .addEventListener("click", function () {
    const tableBodyAcc = document.getElementById("accommodationTableBody");
    if (tableBodyAcc.children.length > 0) {
      tableBodyAcc.removeChild(tableBodyAcc.lastElementChild);
      updateTotalAccCost();
    }
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

function updateInitialRow() {
  const existingCostInputs = document.querySelectorAll(".transport-cost");
  existingCostInputs.forEach((input) => {
    input.addEventListener("input", updateTotalTranCost);
  });
}

document.addEventListener("DOMContentLoaded", updateInitialRow);

document
  .getElementById("add-transport-button")
  .addEventListener("click", function () {
    const newTranRow = document.createElement("tr");
    newTranRow.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><input type="text" class="transport-cost"></td>
  `;
    const newTranInput = newTranRow.querySelector(".transport-cost");
    newTranInput.addEventListener("input", updateTotalTranCost);

    document.getElementById("transportTableBody").appendChild(newTranRow);
    updateTotalTranCost();
  });

document
  .getElementById("delete-transport-button")
  .addEventListener("click", function () {
    const tableBody = document.getElementById("transportTableBody");
    if (tableBody.children.length > 0) {
      tableBody.removeChild(tableBody.lastElementChild);
      updateTotalTranCost();
    }
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

// Food

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
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><input type="text" class="activity-cost"></td>
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
    if (tableBodyAct.children.length > 0) {
      tableBodyAct.removeChild(tableBodyAct.lastElementChild);
      updateTotalActCost();
    }
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
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><input type="text" class="shopping-cost"></td>
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
    if (tableBodyShop.children.length > 0) {
      tableBodyShop.removeChild(tableBodyShop.lastElementChild);
      updateTotalShopCost();
    }
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
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><input type="text" class="extra-cost"></td>
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
    if (tableBodyExt.children.length > 0) {
      tableBodyExt.removeChild(tableBodyExt.lastElementChild);
      updateTotalExtCost();
    }
  });

function updateTotalExtCost() {
  const costs = document.querySelectorAll(".extra-cost");
  let totalExtCost = 0;
  costs.forEach((costInput) => {
    totalExtCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-extra").textContent = totalExtCost.toFixed(2);
}
