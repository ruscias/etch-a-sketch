var columns = 3;
var rows = 4;

var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
  var column = document.createElement('div'); // create column
  column.className = 'column';
  for (var j = 0; j < rows; ++j) {
    var row = document.createElement('div'); // create row
    row.className = 'row';
    row.textContent = i + '-' +j; // set text
    column.appendChild(row); // append row in column
  }
  grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);

const colorPicker = document.querySelector('input[type="color"]');

const allDrawingDivs = document.querySelectorAll('div.row');

// need a default color... I think...
let currentColor = 'red';

// function to be called when value in color picker is changed  
function watchColorPicker(event) {
  currentColor = event.target.value;
  console.log(currentColor);
}

// function to be called on mouse over event in a div
function changeColor() {
  this.style.backgroundColor = currentColor;
}

// actual event listener looking for changes to color picker
colorPicker.addEventListener('change', watchColorPicker);


allDrawingDivs.forEach( (drawDiv) => {
  drawDiv.addEventListener('mouseover',changeColor)
});