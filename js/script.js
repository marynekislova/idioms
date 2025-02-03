import idiomsEng300 from "./idiomsEng_data.js";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // function flipCard(card) {
  //   card.classList.toggle('flipped');
  // }

  document.querySelectorAll(".cards__item").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Function to display a random idiom
  function getRandomIdiom() {
    const randomIndex = Math.floor(Math.random() * idiomsEng300.length);
    const randomIdiom = idiomsEng300[randomIndex];
  }

  // Call the function to display a random idiom
  getRandomIdiom();

});
