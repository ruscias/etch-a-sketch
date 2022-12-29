const colorPicker = document.querySelector('input[type="color"]');

const allDrawingDivs = document.querySelectorAll('div.drawing-div');

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