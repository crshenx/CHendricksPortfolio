document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header__main-nav--link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const linkHref = link.querySelector("a").getAttribute("href");
      const sectionToScroll = document.querySelector(linkHref);
      scrollFunc(sectionToScroll);
    });
  });

  function scrollFunc(sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }

  const form = document.querySelector("#contact-form");
  const submit = document.querySelector("#submit-button");
  console.log(submit);

  submit.addEventListener("submit", (e) => e.preventDefault());
  // submit.addEventListener("click", (e) => e.preventDefault());
  form.addEventListener(
    "submit",
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      const name = document.querySelector("#form-name").value;
      const email = document.querySelector("#form-email").value;
      const subject = document.querySelector("#form-subject").value;
      const message = document.querySelector("#form-message").value;

      const payload = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      console.log(payload, "payload");
      fetch("http://localhost:3000/contact_form/submit", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(new Error("Error: " + response.statusText));
          // if (response.ok) {
          //   return response.json();
          // } else {
          //   throw new Error("Error: " + response.statusText);
          // }
        })
        .then(function (data) {
          console.log(data.message);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
    // false
  );
});
