//get selectede row 
// display selected row data in text input



var table = document.getElementById('tbl')
var rindex

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
        rindex = this.rowIndex;
        console.log(rindex);
        document.getElementById('fname').value = this.cells[0].innerHTML
        document.getElementById('lname').value = this.cells[1].innerHTML
        document.getElementById('age').value = this.cells[2].innerHTML
    }
}

function editrow() {
    table.rows[rindex].cells[0].innerHTML = document.getElementById('fname').value
    table.rows[rindex].cells[1].innerHTML = document.getElementById('lname').value
    table.rows[rindex].cells[2].innerHTML = document.getElementById('age').value
}