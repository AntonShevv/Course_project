document.addEventListener("DOMContentLoaded", function() {
  let burgerIcon = document.getElementById('burger-icon');
  let burgerLinks = document.getElementById('burger-links');

  burgerIcon.addEventListener('click', function() {
    burgerIcon.classList.toggle('close');
    burgerLinks.classList.toggle('active');
  });
});

  document.addEventListener("DOMContentLoaded", function() {
  const favoritesContainer = document.querySelector('.favorites-container');
  const favoriteProductIds = Object.keys(localStorage);

  if (favoriteProductIds.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.textContent = 'Пока не добавлено товаров в избранное. Чтобы это сделать, нажмите на сердечко.';
    favoritesContainer.appendChild(emptyMessage);
  } else {
    favoriteProductIds.forEach(productId => {
      if (localStorage.getItem(productId) === 'favorite') {
        const productContainer = document.createElement('div');
        productContainer.classList.add('favorite-product');

        const productImage = document.createElement('img');
        productImage.src = `images/${productId}.jpg`;
        productImage.alt = 'product';
        productImage.style.maxWidth = '290px';
        productImage.style.maxHeight = '290px';
        productContainer.appendChild(productImage);
        
        const productName = document.createElement('div');
        productName.textContent = getProductTitle(productId);
        productContainer.appendChild(productName);

        favoritesContainer.appendChild(productContainer);
      }
    });
  }
});

function getProductTitle(productId) {
  const productTitles = {
    'product1_': 'Водонагреватель',
      'product2_': 'Холодильник Smeg FA390XS4',
      'product3_': 'Кухонная плита',
      'product4_': 'Стиральная машина',
      'product5_': 'Микроволновка ',
      'product6_': 'Электрочайник',
      'product7_': 'Электромиксер',
      'product8_': 'Тостер-bosch',
      'product9_': 'Стиральная машина atlant',
      'product10_': 'Блендер2',
      'product11_': 'Кофеваркаsupra',
      'product12_': 'Кухонная вытяжка',
      'product13_': 'Кухонная плита2',
      'product14_': 'Электрочайник2',
      'product15_': 'Блендер',
      'product16_': 'Водонагреватель',
      'product17_': 'Мясорубка',
      'product18_': 'Соковыжималка',
      'product19_': 'Холодильникsamsung',
      'product20_': 'Стиральная машина betp',
      'product21_': 'Микроволновка уникал',
      'product22_': 'Электрочайни_SCARLETT',
      'product23_': 'Посудомойка',
      'product24_': 'Мультиварка',
      'product25_': 'Стиральная машина',
      'product26_': 'Холодильник',
      'product27_': 'Кофеварка',
      'product28_': 'Стиральная машина',
      'product29_': 'Мульитаварка',
      'product30_': 'Микроволновка samsung',
      'product31_': 'Электрочайник-василиса',
      'product32_': 'Холодильник-KG39EAI2OR',
      'product33_': 'Стиральная машина-Hotpoint',
  };

  if (productTitles.hasOwnProperty(productId)) {
    return productTitles[productId];
  } else {
    return 'Неизвестный товар';
  }
}
document.addEventListener("DOMContentLoaded", function() {
      const resetFavoritesButton = document.getElementById('resetFavoritesButton');

      resetFavoritesButton.addEventListener('click', function() {
        resetFavorites();
      });
    });

    function resetFavorites() {
      localStorage.clear();
      alert('Все товары избранного были удалены.');
    }
