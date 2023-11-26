//default vars
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//listening for click
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  //applys random number to background and names it in text
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//getRandomNumber function
function getRandomNumber() {
  //gets a number between 0 and the length of colors
  return Math.floor(Math.random() * colors.length);
}
