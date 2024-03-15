
/* Accomodation & Transport */

// Function to calculate total for a specific table
function calculateTotal(tableId) {
    let total = 0;
    const tableBody = document.getElementById('tableBody' + tableId);
    const rows = tableBody.getElementsByTagName('tr');
    
    // Iterate over each row
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const costCell = cells[cells.length - 1]; // Last cell (cost cell)
        const costValue = parseFloat(costCell.innerText) || 0;
        total += costValue;
    }
    
    // Update the total value
    document.getElementById('totalValue' + tableId).textContent = total.toFixed(2);
}

// Setup event listeners for both tables
function setupTable(tableId, addBtnId, deleteBtnId, totalValueId) {
    const addButton = document.getElementById(addBtnId);
    const deleteButton = document.getElementById(deleteBtnId);
    const totalValue = document.getElementById(totalValueId);

    // Add event listener for adding a row
    addButton.addEventListener('click', function() {
        const tableBody = document.getElementById('tableBody' + tableId);
        const newRow = tableBody.insertRow();
        
        // Insert cells
        for (let i = 0; i < 5; i++) {
            const cell = newRow.insertCell(i);
            cell.contentEditable = true;
            if (i === 4) {
                // Attach event listener to the last cell (cost cell) for real-time calculation
                cell.addEventListener('input', function() {
                    calculateTotal(tableId);
                });
            }
        }
        
        // Initially calculate total after adding a new row
        calculateTotal(tableId);
    });

    // Add event listener for deleting a row
    deleteButton.addEventListener('click', function() {
        const tableBody = document.getElementById('tableBody' + tableId);
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(-1);
            calculateTotal(tableId);
        }
    });

    // Initial total calculation
    calculateTotal(tableId);
}

// Setup tables
setupTable(1, 'addRow1', 'deleteRow1', 'totalValue1');
setupTable(2, 'addRow2', 'deleteRow2', 'totalValue2');

    
/*Food*/
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
        initialCostCells.forEach(cell => {
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

        /* Activities & Shopping & Other */ 

