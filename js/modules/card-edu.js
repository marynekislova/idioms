function addCardEdu(idiom, container) {
  const cardItem = document.createElement("div");
  cardItem.classList.add("cards-edu__item");
  cardItem.setAttribute("data-category", idiom.category);
  container.appendChild(cardItem);

  const cardFace = document.createElement("div");
  cardFace.classList.add("cards-edu__face", "front");
  cardFace.innerHTML = `
    <h2>${idiom.idiom}</h2>
    <p>${idiom.transcription}</p>`;
  cardItem.appendChild(cardFace);

  const cardBack = document.createElement("div");
  cardBack.classList.add("cards-edu__face", "back");
  cardBack.innerHTML = `
    <h2>${idiom.translationRus}</h2>
    <p>${idiom.categoryRu}</p>`;
  cardItem.appendChild(cardBack);
}

export { addCardEdu };
