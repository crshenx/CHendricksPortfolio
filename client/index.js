const navLinks = document.querySelectorAll(".header__main-nav--link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const linkHref = link.querySelector("a").getAttribute("href");
    const sectionToScroll = document.querySelector(linkHref);
    scrollFunc(sectionToScroll);
  });
});

function scrollFunc(sectionElement) {
  sectionElement.scrollIntoView({ behavior: "smooth" });
}
