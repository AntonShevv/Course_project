function navigateToCatalog(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function() {
  let burgerIcon = document.getElementById('burger-icon');
  let burgerLinks = document.getElementById('burger-links');

  burgerIcon.addEventListener('click', function() {
    burgerIcon.classList.toggle('close'); 
    burgerLinks.classList.toggle('active');
  });
});

window.onload = function() {
  const cartButtons = document.querySelectorAll('.button__add');
  const favoriteHearts = document.querySelectorAll('.heart');

  cartButtons.forEach(button => {
    if (localStorage.getItem(button.dataset.productId) === 'added') {
      button.innerHTML = '<span>В корзине</span>';
      button.style.backgroundColor = '#4CAF50';
      button.classList.add('added');
    }

    button.addEventListener('click', () => {
      toggleCart(button);
    });
  });

  favoriteHearts.forEach(heart => {
    const productId = heart.dataset.favoriteId;
    if (localStorage.getItem(productId) === 'favorite') {
      heart.classList.add('heart-red');
      heart.innerHTML = "&#10084;";
    }
    heart.addEventListener('click', () => {
      toggleHeart(heart);
    });
  });
};

function toggleCart(button) {
  if (button.classList.contains('added')) {
    button.innerHTML = '<span>В корзину</span>';
    button.style.backgroundColor = ''; 
    button.classList.remove('added');
    localStorage.removeItem(button.dataset.productId);
  } else {
    button.innerHTML = '<span>В корзине</span>';
    button.style.backgroundColor = '#4CAF50';
    button.classList.add('added');
    localStorage.setItem(button.dataset.productId, 'added');
  }
}

function toggleHeart(heart) {
  heart.classList.toggle("heart-red");
  if (heart.classList.contains("heart-red")) {
    heart.innerHTML = "&#10084;";
    const productId = heart.dataset.favoriteId;
    localStorage.setItem(productId, 'favorite');
  } else {
    heart.innerHTML = "heart";
    const productId = heart.dataset.favoriteId;
    localStorage.removeItem(productId);
  }
}