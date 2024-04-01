function appendRow() {
  // Write your code here.
  var table = document.getElementById("tbl");
  var tbody = table.getElementsByTagName('tbody')[0];
  var lastRowIndex = tbody.rows.length - 1;
  var numberOfCells = tbody.rows[lastRowIndex].cells.length;
  var row = tbody.insertRow(lastRowIndex);
  console.log('number of cells::', numberOfCells)
  for (let i = 0; i < numberOfCells; i++) {
    row.insertCell(i);
  }
}

// Example case. 
document.body.innerHTML = `
<table id="tbl" border="1">
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`;

appendRow();

console.log(document.body.innerHTML);
