const filePath = "assets/json/product.json";
const forwardBtn = document.querySelector('.right-guide');
const backwardBtn = document.querySelector('.left-guide');
const imageContainer = document.querySelector('.product-img-wrapper');

let product = {};
let currentIndex = 0;

async function getData() {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('dataya ulaşılamadı.')
    }
    product = await response.json();

    renderProduct();
  } catch (error) {
    console.log(error);
  }
}

forwardBtn.addEventListener('click', (e) => {
  currentIndex++;
  if (currentIndex > (product.images.length - 1)) {
    currentIndex = 0;
  }
  imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;;
});

backwardBtn.addEventListener('click', (e) => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

function renderProduct() {
  product.images.forEach(productImg => {
    imageContainer.innerHTML +=
      `
      <div class="product-img-container">
        <img class="product-image" src="assets/img/${productImg}" alt="">
      </div>
    `;
  });

}





getData();