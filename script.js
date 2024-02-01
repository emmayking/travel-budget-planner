
<script>

document.getElementById("addRow").addEventListener("click", function() {
            
let tableBody = document.getElementById("tableBody")
let row = tableBody.insertRow(-1);
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
 })

 document.getElementById("deleteRow").addEventListener("click", function (){
    let tableBody = document.getElementById("tableBody")
    let row = tableBody.deleteRow(-1);
    let cell0 = row.deleteCell(0);
    let cell1 = row.deleteCell(1);
    let cell2 = row.deleteCell(2);
    let cell3 = row.deleteCell(4);

    cell0.innerHTML = '<div contenteditable="true"></div>';
    cell1.innerHTML = '<div contenteditable="true"></div>';
    cell2.innerHTML = '<div contenteditable="true">$</div>';
    cell3.innerHTML = '<div contenteditable="true">#</div>';
    cell4.innerHTML = '<div contenteditable="true">$</div>'; 
 })
 </script>