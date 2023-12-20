//GitHub - @killerbean3 - ColourFlipper-Javascript
//default vars
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//listening for button click
btn.addEventListener("click", function () {
  //hex colors always start with a #. So adding manually
  let hexColor = "#";
  //getting a random number for each hex number as hex colors are comprised of 6 numbers
  //then that random number is for a item in array
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);
  //applys random hex color to background and the value of it to text
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  //gets a number between 0 and the length of hex
  return Math.floor(Math.random() * hex.length);
}
