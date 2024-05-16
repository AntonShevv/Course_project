document.getElementById("loginForm").addEventListener("submit", function(event) {
  let form = event.target;
  if (form.checkValidity()) {
    window.location.href = "index.html";
  }
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function() {
    let burgerIcon = document.getElementById('burger-icon');
    let burgerLinks = document.getElementById('burger-links');
  
    burgerIcon.addEventListener('click', function() {
      burgerIcon.classList.toggle('close'); 
      burgerLinks.classList.toggle('active');
    });
  });