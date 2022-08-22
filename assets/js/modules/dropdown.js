export default class dropdown {
    constructor() {
        for (const element of document.querySelectorAll(".nav-dropdown")) {
            element.addEventListener("mouseover", function () {
                element.nextElementSibling.classList.add('fadeIn');
            });
            element.parentElement.addEventListener("mouseleave", function () {
                element.nextElementSibling.classList.remove('fadeIn');
            });
          }
        
    }
}