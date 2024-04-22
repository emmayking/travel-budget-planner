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
