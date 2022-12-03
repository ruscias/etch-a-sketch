const colorPicker = document.querySelector('input[type="color"]');

const testDiv = document.querySelector('div#test-div');

// need a default color... I think...
let currentColor = 'red';

// function to be called when value in color picker is changed  
function watchColorPicker(event) {
  currentColor = event.target.value;
}

// function to be called on mouse over event in a div
function changeColor() {
  console.log(currentColor)
  testDiv.style.backgroundColor = currentColor;
}

// actual event listener looking for changes to color picker
colorPicker.addEventListener('change', watchColorPicker);

// event listener looking for mouse over events in div#test-div
testDiv.addEventListener('mouseover', changeColor);
