// CHANGE Navbar Styles on Scroll

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_addeventlistener4

//The querySelector() method returns the first element that matches a CSS selector.
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//Show /Hide FAQs answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //toggle icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Show/Hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Stop click event propagation to parent
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//Close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// */

// Close nav menu when clicking outside of it

document.addEventListener("click", (event) => {
    if(!menu.contains(event.target) && event.target !== menuBtn){
        closeNav();
    }
});
