const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "brown", "gray", "white", "cyan", "magenta", "silver", "gold", "maroon", "navy", "olive", "teal"];

body.style.backgroundColor = "white";

button.addEventListener('click', changeBg)

function changeBg(){
  const colorIndex = Math.floor(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}