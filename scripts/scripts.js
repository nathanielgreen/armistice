console.log("script loaded");

var contactButton = document.querySelector("#contact-toggle");
var contactDiv    = document.querySelector("#contact");
var aboutButton   = document.querySelector("#about-toggle");
var aboutDiv      = document.querySelector("#about");
var video         = document.querySelector("video");


contactButton.addEventListener("change", function() {
  if(contactButton.checked) {
    aboutButton.checked = false;
    aboutDiv.style.opacity = 0;
    contactDiv.style.opacity = 1;
    video.style.opacity = 0.5;
  } 
  else {
    contactDiv.style.opacity = 0;
    video.style.opacity = 1;
  };
});

aboutButton.addEventListener("change", function() {
  if(aboutButton.checked) {
    contactButton.checked = false;
    contactDiv.style.opacity = 0;
    aboutDiv.style.opacity = 1;
    video.style.opacity = 0.5;
  } 
  else {
    aboutDiv.style.opacity = 0;
    video.style.opacity = 1;
  };
});
