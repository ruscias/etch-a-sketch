function createTable(size) {

  const gridSizeSpan = document.getElementById('grid-size-span');
  gridSizeSpan.innerText = size;
  
  // create a new div element
  const grid = document.createElement('div');
  
  const columns = size;
  const rows = size;

  grid.className = 'grid';
  grid.id = 'grid';
  for (let i = 0; i < columns; ++i) {
    const column = document.createElement('div'); // create column
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
      const cell = document.createElement('div'); // create row
      cell.className = 'cell';
      column.appendChild(cell); // append row in column
    }
    grid.appendChild(column); // append column inside grid
  }

  // add the newly created element and its content into the DOM
  const drawingAreaDiv = document.getElementById('drawing-area');

  drawingAreaDiv.appendChild(grid);
  
  const allDrawingDivs = document.querySelectorAll('div.cell');
  
  // add an event listener for each .drawing-div
  allDrawingDivs.forEach( (drawDiv) => {
    drawDiv.addEventListener('mouseover',changeColor)
  });
}

function resetGrid() {
  const drawingArea = document.getElementById('drawing-area');
  const grid = document.getElementById('grid');
  drawingArea.removeChild(grid);
  const gridSize = document.getElementById('grid-size');
  gridSize.value = 20;
  createTable(20);
}

function updateGrid() {
  const drawingArea = document.getElementById('drawing-area');
  const grid = document.getElementById('grid');
  drawingArea.removeChild(grid);
  createTable(this.value);
}

// function to be called when value in color picker is changed  
function watchColorPicker(event) {
  currentColor = event.target.value;
  console.log(currentColor);
}

// function to be called on mouse over event in a div
function changeColor() {
  this.style.backgroundColor = currentColor;
}





//  int main(void) 
//
//
createTable(20);

// need a default color... I think...
let currentColor = '#ffc77e';

// run my query selectors
const colorPicker = document.querySelector('#color');
const resetButton = document.querySelector('#reset-button');
const gridSize = document.querySelector('#grid-size');

// actual event listener looking for changes to color picker
colorPicker.addEventListener('change', watchColorPicker);
//other event listeners
resetButton.addEventListener('click', resetGrid );
gridSize.addEventListener('change', updateGrid );