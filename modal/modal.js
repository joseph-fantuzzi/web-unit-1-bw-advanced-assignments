// you will need to toggle the visibility off and on with DOM selectors

const homeButton = document.querySelector(".home-btn");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");

homeButton.addEventListener("click", () => {
  modalContainer.classList.add("modal-container-active");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("modal-container-active");
});
