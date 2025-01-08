document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-collapse");

    button.addEventListener("click", () => {
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".accordion-collapse")
            .classList.remove("show");
          otherItem
            .querySelector(".accordion-button")
            .classList.add("collapsed");
        }
      });

      button.classList.toggle("collapsed");
      content.classList.toggle("show");
    });
  });

  accordionItems[0]
    .querySelector(".accordion-button")
    .classList.remove("collapsed");
  accordionItems[0].querySelector(".accordion-collapse").classList.add("show");
});
