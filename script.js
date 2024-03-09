
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

 /* Transport 'T' */

 document.getElementById("addRowT").addEventListener("click", function() {
            
   let tableBodyT = document.getElementById("tableBodyT")
   let row = tableBodyT.insertRow(-1);
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
    })
   
   
document.getElementById("deleteRowT").addEventListener("click", function (){

let tableBodyT = document.getElementById("tableBodyT")
let row = tableBodyT.deleteRow(-1);
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

/* Food & Drink 'F' */

document.getElementById("addRowF").addEventListener("click", function() {
   var table = document.getElementById("foodT").getElementsByTagName('tbody')[0];
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

document.getElementById("deleteRowF").addEventListener("click", function() {
   var table = document.getElementById("foodT").getElementsByTagName('tbody')[0];
   if (table.rows.length > 1) { 
       table.deleteRow(table.rows.length - 1);
   }
});

   
 /* Activities 'A' */

document.getElementById("addRowA").addEventListener("click", function() {
            
   let tableBodyA = document.getElementById("tableBodyA")
   let row = tableBodyA.insertRow(-1);
   let cell0 = row.insertCell(0);
   let cell1 = row.insertCell(1);
   let cell2 = row.insertCell(2);
      
   cell0.innerHTML = '<div contenteditable="true"></div>';
   cell1.innerHTML = '<div contenteditable="true"></div>';
   cell2.innerHTML = '<div contenteditable="true">$</div>';
        
    })
         
         
document.getElementById("deleteRowA").addEventListener("click", function (){
   
   let tableBodyA = document.getElementById("tableBodyA")
   let row = tableBodyA.deleteRow(-1);
   let cell0 = row.deleteCell(0);
   let cell1 = row.deleteCell(1);
   let cell2 = row.deleteCell(2);
            
         
   cell0.innerHTML = '<div contenteditable="true"></div>';
   cell1.innerHTML = '<div contenteditable="true"></div>';
   cell2.innerHTML = '<div contenteditable="true">$</div>';
             
    })


/* Shopping 'S' */

document.getElementById("addRowS").addEventListener("click", function() {
            
let tableBodyS = document.getElementById("tableBodyS")
let row = tableBodyS.insertRow(-1);
let cell0 = row.insertCell(0);
let cell1 = row.insertCell(1);
let cell2 = row.insertCell(2);
         
            
cell0.innerHTML = '<div contenteditable="true"></div>';
cell1.innerHTML = '<div contenteditable="true"></div>';
cell2.innerHTML = '<div contenteditable="true">$</div>';
           
 })
            
            
 document.getElementById("deleteRowS").addEventListener("click", function (){

   let tableBodyS = document.getElementById("tableBodyS")
   let row = tableBodyS.deleteRow(-1);
   let cell0 = row.deleteCell(0);
   let cell1 = row.deleteCell(1);
   let cell2 = row.deleteCell(2);
               
            
   cell0.innerHTML = '<div contenteditable="true"></div>';
   cell1.innerHTML = '<div contenteditable="true"></div>';
   cell2.innerHTML = '<div contenteditable="true">$</div>';
                
    })
    
 /* Extra 'E' */

document.getElementById("addRowE").addEventListener("click", function() {
            
   let tableBodyE = document.getElementById("tableBodyE")
   let row = tableBodyE.insertRow(-1);
   let cell0 = row.insertCell(0);
   let cell1 = row.insertCell(1);
   let cell2 = row.insertCell(2);
            
               
   cell0.innerHTML = '<div contenteditable="true"></div>';
   cell1.innerHTML = '<div contenteditable="true"></div>';
   cell2.innerHTML = '<div contenteditable="true">$</div>';
              
    })
               
               
    document.getElementById("deleteRowE").addEventListener("click", function (){
   
      let tableBodyE = document.getElementById("tableBodyE")
      let row = tableBodyE.deleteRow(-1);
      let cell0 = row.deleteCell(0);
      let cell1 = row.deleteCell(1);
      let cell2 = row.deleteCell(2);
                  
               
      cell0.innerHTML = '<div contenteditable="true"></div>';
      cell1.innerHTML = '<div contenteditable="true"></div>';
      cell2.innerHTML = '<div contenteditable="true">$</div>';
                   
       })
       
    