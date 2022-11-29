const colorPicker = document.querySelector('input[type="color"]');

colorPicker.addEventListener('change', watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll('div').forEach((div) => {
    div.style.color = event.target.value;
  });
}