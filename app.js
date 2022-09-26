const accordionQuestion = document.querySelectorAll(".accordion-question");

accordionQuestion.forEach((item) => {
  item.addEventListener("click", () => {
    
    if (item.classList.contains("show")) {
      item.nextElementSibling.style.maxHeight = `0px`;
    } else {
      accordionQuestion.forEach((element) => {
        element.nextElementSibling.style.maxHeight = `0px`;
        element.classList.remove("show");
      });
    }
    
    item.classList.toggle("show");
    
    const height = item.nextElementSibling.scrollHeight;
    
    if (item.classList.contains("show")) {
      item.nextElementSibling.style.maxHeight = `${height}px`;
    }
  });
});
