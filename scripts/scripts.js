console.log("script loaded");

var contactButton = document.querySelector("#contact-toggle");
var contactDiv    = document.querySelector("#contact");

contactButton.addEventListener("change", function() {
  if(contactButton.checked) {
    console.log("test");
    contactDiv.style.opacity = 1;
  } 
  else {
    console.log("tes2");
    contactDiv.style.opacity = 0;
  };
});
