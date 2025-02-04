function filter(button, filterSelector, ItemSelector) {
    const buttons = document.querySelectorAll(button);
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute(filterSelector);
        const items = document.querySelectorAll(ItemSelector);
  
        items.forEach((item) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
  
        // Удаляем класс 'active' у всех кнопок и добавляем его только на текущую
        buttons.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  export default filter;