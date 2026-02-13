//cv button \

const cvbutton = document.querySelector(".cv-button");

cvbutton.addEventListener("click", () => {
  window.open(
    "https://portfolio-5we93bqtr-ashoklandes-projects.vercel.app/assets/Resume-CtYq5Sqm.pdf",
    "_blank"
  );
});

// navigation link function

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) =>
  link.addEventListener("click", function () {
    const TargatedId = this.getAttribute("data-target");
    const section = document.getElementById(TargatedId);

    section.scrollIntoView({
      behavior: "smooth",
    });
  })
);

// scrolling function

let lastScrollTop = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Change background after 20px scroll
  if (currentScroll > 20) {
    const targatedId = header.getElementsByTagName("a");
    header.style.backgroundColor = "#ffd2c2";
  } else {
    header.style.backgroundColor = "transparent";
  }

  if (currentScroll > lastScrollTop) {
    // Scrolling Down → Hide header
    header.style.top = "-100px";
  } else {
    // Scrolling Up → Show header
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
})(
  //email send template

  function () {
    emailjs.init("2tEjnkbPxMxE7SnaX");
  }
)();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_14dkw7i", "template_xev7haj", this).then(
      function () {
        alert("Message Sent Successfully!");
      },
      function (error) {
        alert("Failed to send message");
      }
    );
  });


//social media link

function openinstagram() {
  window.open("https://www.instagram.com/ashoklande73/?hl=en", "_blank");
}
function openfacebook() {
  window.open("https://www.facebook.com", "_blank");
}
function openlinkedin() {
  window.open("https://www.linkedin.com/in/ashok-lande-492431230/", "_blank");
}
