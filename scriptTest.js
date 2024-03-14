
function setupTable
(tableId, addBtnId, deleteBtnId, totalValueId) {
const addButton = document.getElementById(addBtnId);
const deleteButton = document.getElementById(deleteBtnId);const tableBody = document.getElementById('tableBody'+ tableId);
const totalValue = document.getElementById('totalValue'+ tableId);

addButton.addEventListener('click', function() {
const row = tableBody.insertRow(-1);
for (let i = 0; i < 5; i++) {
const cell = row.insertCell(i);
cell.innerHTML = '<div contenteditable="true"></div>';
if (i === 4) {
cell.addEventListener('input', function() { 
calculateTotal(tableId);
 });
} }
});

deleteButton.addEventListener('click', function() {
 if (tableBody.rows.length > 0) {
 tableBody.deleteRow(-1);
 calculateTotal(tableId); }
 });

 calculateTotal(tableId); 
}

function calculateTotal(tableId) {
            let total = 0;
            const tableBody = document.getElementById('tableBody' + tableId);
            for (let row of tableBody.rows) {
                let value = row.cells[4].innerText.trim();
                if (!isNaN(value) && value !== '') {
                    total += parseFloat(value);
                }
            }
            document.getElementById('totalValue' + tableId).innerText = total.toFixed(2);
        }

        setupTable(1, 'addRow1', 'deleteRow1', 'totalValue1');
        setupTable(2, 'addRow2', 'deleteRow2', 'totalValue2');
        

    
        
