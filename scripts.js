function createTable(size) {

  // get the span#grid-size-span and set its value
  const gridSizeSpan = document.getElementById('grid-size-span');
  gridSizeSpan.innerText = size;
  
  // create a new div element called grid...
  const grid = document.createElement('div');
  //... and set some of its properties
  grid.className = 'grid';
  grid.id = 'grid';
  
  // set the columns and cells values
  const columns = size;
  const cells = size;

  // run a nested loop to actually create the grid
  for (let i = 0; i < columns; ++i) {
    // create column and set some of its properties
    const column = document.createElement('div'); 
    column.className = 'column';

    // create cells within the row
    for (let j = 0; j < cells; ++j) {
      // create a div called cell
      const cell = document.createElement('div');
      cell.className = 'cell';
      // append cell to current column
      column.appendChild(cell); 
    }
    // append column to grid
    grid.appendChild(column);
  }

  // get the div#drawing-area and append the grid to it
  const drawingAreaDiv = document.getElementById('drawing-area');
  drawingAreaDiv.appendChild(grid);
  
  // get all cells in the grid
  const allCells = document.querySelectorAll('div.cell');

  // add an event listener for each cell
  allCells.forEach( (cell) => {
    cell.addEventListener('mouseover',changeColor)
  });
}

function resetGrid() {
  //get the element #drawing-area
  const drawingArea = document.getElementById('drawing-area');
  // get the element #grid
  const grid = document.getElementById('grid');
  // remove the grid  
  drawingArea.removeChild(grid);
  // reset grid size value
  const gridSize = document.getElementById('grid-size-input');
  gridSize.value = 20;
  // create a new grid
  createTable(20);
}

function updateGrid() {
  //get the element #drawing-area
  const drawingArea = document.getElementById('drawing-area');
  // get the element #grid
  const grid = document.getElementById('grid');
  // remove the grid
  drawingArea.removeChild(grid);
  // create a new grid with the value the user chose
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

//create initial table
createTable(20);

// need a default color... I think...
let currentColor = '#ffc77e';

// run my query selectors
const colorPicker = document.querySelector('#color');
const resetButton = document.querySelector('#reset-button');
const gridSize = document.querySelector('#grid-size-input');

// actual event listener looking for changes to color picker
colorPicker.addEventListener('change', watchColorPicker);
//event listener for reset button press
resetButton.addEventListener('click', resetGrid );
//event listener for grid size changes
gridSize.addEventListener('change', updateGrid );