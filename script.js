/* Accommodation */

document
  .getElementById("add-accommodation-button")
  .addEventListener("click", function () {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td><input type="text" class="rate"></td>
    <td><input type="text" class="nights"></td>
    <td><input type="text" class="cost" disabled></td>
  `;
    document.getElementById("accommodationTableBody").appendChild(newRow);
    updateTotalCost();
  });

document
  .getElementById("delete-accommodation-button")
  .addEventListener("click", function () {
    const tableBody = document.getElementById("accommodationTableBody");
    if (tableBody.children.length > 0) {
      tableBody.removeChild(tableBody.lastElementChild);
      updateTotalCost();
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
      updateTotalCost();
    }
  });

function updateTotalCost() {
  const costs = document.querySelectorAll(".cost");
  let totalCost = 0;
  costs.forEach((costInput) => {
    totalCost += parseFloat(costInput.value) || 0;
  });
  document.getElementById("total-accommodation").textContent =
    totalCost.toFixed(2);
}

/* Food & Drink */

document.getElementById("addFood").addEventListener("click", function () {
  const foodTableBody = document.getElementById("foodTableBody");
  const newRow = foodTableBody.insertRow();
  const cell0 = newRow.insertCell(0);
  const cell1 = newRow.insertCell(1);
  const cell2 = newRow.insertCell(2);
  const cell3 = newRow.insertCell(3);

  cell0.contentEditable = "true";
  cell1.innerHTML =
    '<select class="select-food" name="Type"><option value="Select">Select</option><option value="Breakfast">Breakfast</option><option value="Lunch">Lunch</option><option value="Dinner">Dinner</option><option value="Snack">Snack</option><option value="Drink">Beverage</option><option value="Drink">Grocery Run</option><option value="Groceries">Night Out</option></select>';
  cell2.contentEditable = "true";
  cell3.contentEditable = "true";
});

document.getElementById("deleteFood").addEventListener("click", function () {
  const foodTableBody = document.getElementById("foodTableBody");
  const newRow = foodTableBody.deleteRow(-1);
  const cell0 = newRow.deleteCell(0);
  const cell1 = newRow.deleteCell(1);
  const cell2 = newRow.deleteCell(2);
  const cell3 = newRow.deleteCell(3);

  cell0.contentEditable = "true";
  cell1.innerHTML =
    '<select class="select_food" name="Type"><option value="Select">Select</option><option value="Breakfast">Breakfast</option><option value="Lunch">Lunch</option><option value="Dinner">Dinner</option><option value="Snack">Snack</option><option value="Drink">Beverage</option><option value="Drink">Grocery Run</option><option value="Groceries">Night Out</option></select>';
  cell2.contentEditable = "true";
  cell3.contentEditable = "true";
});

/* Activities */

document.getElementById("addActivity").addEventListener("click", function () {
  let activitiesTableBody = document.getElementById("activitiesTableBody");
  let row = activitiesTableBody.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true"></div>';
});

document
  .getElementById("deleteActivity")
  .addEventListener("click", function () {
    let activitiesTableBody = document.getElementById("activitiesTableBody");
    let row = activitiesTableBody.deleteRow(-1);
    let cell0 = row.deleteCell(0);
    let cell1 = row.deleteCell(1);
    let cell2 = row.deleteCell(2);

    cell0.innerHTML = '<div contenteditable="true"></div>';
    cell1.innerHTML = '<div contenteditable="true"></div>';
    cell2.innerHTML = '<div contenteditable="true"></div>';
  });

/* Shopping */

document.getElementById("addShopping").addEventListener("click", function () {
  let shoppingTableBody = document.getElementById("shoppingTableBody");
  let row = shoppingTableBody.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true"></div>';
});

document
  .getElementById("deleteShopping")
  .addEventListener("click", function () {
    let shoppingTableBody = document.getElementById("shoppingTableBody");
    let row = shoppingTableBody.deleteRow(-1);
    let cell0 = row.deleteCell(0);
    let cell1 = row.deleteCell(1);
    let cell2 = row.deleteCell(2);

    cell0.innerHTML = '<div contenteditable="true"></div>';
    cell1.innerHTML = '<div contenteditable="true"></div>';
    cell2.innerHTML = '<div contenteditable="true"></div>';
  });

/* Extra */

document.getElementById("addExtra").addEventListener("click", function () {
  let extraExpensesTableBody = document.getElementById(
    "extraExpensesTableBody"
  );
  let row = extraExpensesTableBody.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true"></div>';
});

document.getElementById("deleteExtra").addEventListener("click", function () {
  let extraExpensesTableBody = document.getElementById(
    "extraExpensesTableBody"
  );
  let row = extraExpensesTableBody.deleteRow(-1);
  let cell0 = row.deleteCell(0);
  let cell1 = row.deleteCell(1);
  let cell2 = row.deleteCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true"></div>';
});
