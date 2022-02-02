// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on

const button = document.querySelector("button");
const body = document.querySelector("body");
const div = document.querySelector(".btn-container");
const btnDiv = document.querySelector("button div");

button.addEventListener("click", () => {
  body.classList.toggle("active-body");
  div.classList.toggle("active-div");
  button.classList.toggle("active-btn");
  btnDiv.classList.toggle("active-btn-div");
});
