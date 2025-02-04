import idiomsEng300 from "./idiomsEng_data.js";

import { addCardEdu } from "./modules/card-edu.js";

import filter from "./modules/filter.js";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // active menu link
  // Текущий URL с учетом хэша
  const currentPage = window.location.href;

  const menuLinks = document.querySelectorAll(".menu__link");
  menuLinks.forEach((link) => {
    // Сравниваем href ссылки с текущим URL
    if (link.href === currentPage) {
      // Удаляем класс active у всех ссылок
      menuLinks.forEach((nav) => nav.classList.remove("active"));
      // Добавляем класс active к текущей
      link.classList.add("active");
      if (link.classList.contains("active")) {
        link.style.color = "#fa6060";
        link.style.borderBottom = "2px solid #fa6060";
        link.style.textDecoration = "none";
      }
    }
  });

  // Add cards-edu
  const cardEduItems = document.querySelector(".cards-edu__items");
  if (cardEduItems) {
    idiomsEng300.forEach((idiom) => {
      addCardEdu(idiom, cardEduItems);
    });
  }

  //flipping card-edu

  // function flipCard(card) {
  //   card.classList.toggle('flipped');
  // }

  document.querySelectorAll(".cards-edu__item").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Filter
  const cardEduItem = document.querySelector(".cards-edu__item");
  if (cardEduItem) {
    filter(".dropdown-item", ".data-filter", ".cards-edu__item");
  }

  // Function to display a random idiom
  function getRandomIdiom() {
    const randomIndex = Math.floor(Math.random() * idiomsEng300.length);
    const randomIdiom = idiomsEng300[randomIndex];
  }

  // Call the function to display a random idiom
  getRandomIdiom();

  //add idiom list to the DOM
  const idiomList = document.querySelector(".idioms-list__items");

  function addIdiomToList(idiom, container) {
    const li = document.createElement("div");
    li.innerHTML = `<p class="idioms-list__item">
    <span>${idiom.idiom}</span> - ${idiom.transcription} ${idiom.translationRus} (${idiom.categoryRu}) (${idiom.category})</p>`;
    container.appendChild(li);
  }

  if (idiomList) {
    idiomsEng300.forEach((idiom) => {
      addIdiomToList(idiom, idiomList);
    });
  }
});
