//email send template

  (function() {
    emailjs.init("2tEjnkbPxMxE7SnaX");
  })();

  document.getElementById("contact-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_14dkw7i", "template_xev7haj", this)
        .then(function() {
          alert("Message Sent Successfully!");
        }, function(error) {
          alert("Failed to send message");
        });
    });






//social media link 

function openinstagram(){
    window.open("https://www.instagram.com/ashoklande73/?hl=en","_blank")
}
function openfacebook(){
    window.open("https://www.facebook.com","_blank")
}
function openlinkedin(){
    window.open("https://www.linkedin.com/in/ashok-lande-492431230/","_blank")
}