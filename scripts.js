const colorPicker = document.querySelector('input[type="color"]');

const testDiv = document.querySelector('div#test-div');

let currentColor = 'red';

function watchColorPicker(event) {
  currentColor = event.target.value;
}

function changeColor() {
  console.log(currentColor)
  testDiv.style.backgroundColor = currentColor;
}

colorPicker.addEventListener('change', watchColorPicker);

testDiv.addEventListener('mouseover', changeColor);
