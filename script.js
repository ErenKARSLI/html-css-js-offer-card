const button = document.querySelector(".offer__btn");
const header = document.querySelector(".offer__header");
const desc = document.querySelector(".offer__desc");

const texts = [
  "Limited Time Deal!",
  "Hurry up! Only today!",
  "Don't miss out!",
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  header.textContent = texts[randomIndex];
});
