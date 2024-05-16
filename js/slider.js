window.addEventListener("load", function() {
    currentIndex = 0;
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const sliderContainers = document.querySelectorAll(".slider-container");
  
    sliderContainers.forEach(function(container) {
      const prevArrow = container.querySelector(".prev-arrow");
      const nextArrow = container.querySelector(".next-arrow");
      const photoContainer = container.querySelector(".container-photos");
      let currentIndex = 0;
  
      function showImage(index) {
        const images = photoContainer.querySelectorAll(".container-photo");
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = "none";
        }
        images[index].style.display = "inline-flex";
      }
  
      function nextSlide() {
        currentIndex++;
        if (currentIndex >= photoContainer.children.length) {
          currentIndex = 0;
        }
        showImage(currentIndex);
       
        nextArrow.style.opacity = "0.25";
        setTimeout(() => {
          nextArrow.style.opacity = ""; 
        }, 300); 
      }
  
      function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = photoContainer.children.length - 1;
        }
        showImage(currentIndex);
      
        prevArrow.style.opacity = "0.25";
        setTimeout(() => {
          prevArrow.style.opacity = "";
        }, 300); 
      }
  
      prevArrow.addEventListener("click", prevSlide);
      nextArrow.addEventListener("click", nextSlide);
    });
  })