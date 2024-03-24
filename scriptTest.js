
/* Accomodation */

document.getElementById("addAccomodation").addEventListener("click", function () {
    let accomodationTableBody = document.getElementById("accomodationTableBody");
    let row = accomodationTableBody.insertRow(-1); 
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
 
 
    cell0.innerHTML = '<div contenteditable="true"></div>';
    cell1.innerHTML = '<div contenteditable="true"></div>';
    cell2.innerHTML = '<div contenteditable="true"></div>';
    cell3.innerHTML = '<div contenteditable="true"></div>';
    cell4.innerHTML = '<div contenteditable="true"></div>';
 
    cell4.addEventListener('input', calculateTotal);
 });
 
 document.getElementById("deleteAccomodation").addEventListener("click", function () {
    let accomodationTableBody = document.getElementById("accomodationTableBody");
    if (accomodationTableBody.rows.length > 0) {
       accomodationTableBody.deleteRow(-1);
       calculateTotal();
    }
 });
 
 function calculateTotal() {
    let total = 0;
    let accommodationTableBody = document.getElementById("accomodationTableBody");
    for (let row of accomodationTableBody.rows) {
       let value = row.cells[4].innerText;
       total += parseFloat(value) || 0;
    }
    document.getElementById("totalAccomodation").innerText = total.toFixed(2);
 }


 


    
/* Food */
        document.getElementById("addRowF").addEventListener("click", function() {
            const tableBodyF = document.getElementById("tableBodyF");
            const newRow = tableBodyF.insertRow();
            const cell0 = newRow.insertCell(0);
            const cell1 = newRow.insertCell(1);
            const cell2 = newRow.insertCell(2);
            const cell3 = newRow.insertCell(3);

            cell0.contentEditable = "true";
            cell1.innerHTML = '<select class="selectFood" name="Type"><option value="Select">Select</option><option value="Breakfast">Breakfast</option><option value="Lunch">Lunch</option><option value="Dinner">Dinner</option><option value="Snack">Snack</option><option value="Drink">Beverage</option><option value="Drink">Grocery Run</option><option value="Groceries">Night Out</option></select>';
            cell2.contentEditable = "true";
            cell3.contentEditable = "true";

            cell3.addEventListener('input', function() {
                calculateTotalCost();
            });
        });

        const initialCostCells = document.querySelectorAll('#tableBodyF tr td:nth-child(4)');
        (document.querySelectorAll('#tableBodyF tr td:nth-child(4)')).forEach(cell => {
        cell.addEventListener('input', calculateTotalCost)
        });

        document.getElementById("deleteRowF").addEventListener("click", function() {
            const tableBodyF = document.getElementById("tableBodyF");
            if (tableBodyF.rows.length > 0) {
                tableBodyF.deleteRow(-1);
                calculateTotalCost(); 
            }
        });

        function calculateTotalCost() {
            let totalCost = 0;
            const rows = document.querySelectorAll("#tableBodyF tr");
            rows.forEach(row => {
                const costCell = row.cells[3];
                const costValue = parseFloat(costCell.textContent) || 0;
                totalCost += costValue;
            });
            
            document.getElementById("totalCost").innerText = totalCost.toFixed(2);
        }

        calculateTotalCost(); 





