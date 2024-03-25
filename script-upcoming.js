document.getElementById("addRowC").addEventListener("click", function () {
  let tableBodyC = document.getElementById("tableBodyC");
  let row = tableBodyC.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
  cell3.innerHTML = '<div contenteditable="true">#</div>';
  cell4.innerHTML = '<div contenteditable="true">$</div>';
});

document.getElementById("deleteRowC").addEventListener("click", function () {
  let tableBodyC = document.getElementById("tableBodyC");
  let row = tableBodyC.deleteRow(-1);
  let cell0 = row.deleteCell(0);
  let cell1 = row.deleteCell(1);
  let cell2 = row.deleteCell(2);
  let cell3 = row.deleteCell(4);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
  cell3.innerHTML = '<div contenteditable="true">#</div>';
  cell4.innerHTML = '<div contenteditable="true">$</div>';
});

/* Transport 'T' */

document.getElementById("addRowTC").addEventListener("click", function () {
  let tableBodyTC = document.getElementById("tableBodyTC");
  let row = tableBodyTC.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true"></div>';
  cell3.innerHTML = '<div contenteditable="true"></div>';
  cell4.innerHTML = '<div contenteditable="true">$</div>';
});

document.getElementById("deleteRowTC").addEventListener("click", function () {
  let tableBodyTC = document.getElementById("tableBodyTC");
  let row = tableBodyTC.deleteRow(-1);
  let cell0 = row.deleteCell(0);
  let cell1 = row.deleteCell(1);
  let cell2 = row.deleteCell(2);
  let cell3 = row.deleteCell(4);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
  cell3.innerHTML = '<div contenteditable="true">#</div>';
  cell4.innerHTML = '<div contenteditable="true">$</div>';
});

/* Food & Drink 'F' */

document.getElementById("addRowFC").addEventListener("click", function () {
  var table = document
    .getElementById("foodTC")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);

  var cells = [];
  for (var i = 0; i < 4; i++) {
    cells.push(newRow.insertCell(i));
  }

  cells[0].contentEditable = true;
  cells[1].innerHTML = `<select class="selectFood" name="Type">
       <option value="Select">Select</option>
       <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
       <option value="Dinner">Dinner</option>
       <option value="Snack">Snack</option>
       <option value="Drink">Beverage</option>
       <option value="Drink">Grocery Run</option>
       <option value="Groceries">Night Out</option></select>`;
  cells[2].contentEditable = true;
  cells[3].contentEditable = true;
});

document.getElementById("deleteRowFC").addEventListener("click", function () {
  var table = document
    .getElementById("foodTC")
    .getElementsByTagName("tbody")[0];
  if (table.rows.length > 1) {
    table.deleteRow(table.rows.length - 1);
  }
});

/* Activities 'A' */

document.getElementById("addRowAC").addEventListener("click", function () {
  let tableBodyAC = document.getElementById("tableBodyAC");
  let row = tableBodyAC.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
});

document.getElementById("deleteRowAC").addEventListener("click", function () {
  let tableBodyAC = document.getElementById("tableBodyAC");
  let row = tableBodyAC.deleteRow(-1);
  let cell0 = row.deleteCell(0);
  let cell1 = row.deleteCell(1);
  let cell2 = row.deleteCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
});

/* Shopping 'S' */

document.getElementById("addRowSC").addEventListener("click", function () {
  let tableBodySC = document.getElementById("tableBodySC");
  let row = tableBodySC.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
});

document.getElementById("deleteRowSC").addEventListener("click", function () {
  let tableBodySC = document.getElementById("tableBodySC");
  let row = tableBodySC.deleteRow(-1);
  let cell0 = row.deleteCell(0);
  let cell1 = row.deleteCell(1);
  let cell2 = row.deleteCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
});

/* Extra 'E' */

document.getElementById("addRowEC").addEventListener("click", function () {
  let tableBodyEC = document.getElementById("tableBodyEC");
  let row = tableBodyEC.insertRow(-1);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
});

document.getElementById("deleteRowEC").addEventListener("click", function () {
  let tableBodyEC = document.getElementById("tableBodyEC");
  let row = tableBodyEC.deleteRow(-1);
  let cell0 = row.deleteCell(0);
  let cell1 = row.deleteCell(1);
  let cell2 = row.deleteCell(2);

  cell0.innerHTML = '<div contenteditable="true"></div>';
  cell1.innerHTML = '<div contenteditable="true"></div>';
  cell2.innerHTML = '<div contenteditable="true">$</div>';
});
