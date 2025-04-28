// Slider automático
let slideIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 3000); // Muda a cada 3 segundos
}
showSlides();

// Zoom ao clicar
function zoomImage(img) {
  const zoomWindow = window.open("", "Zoom", "width=600,height=600");
  zoomWindow.document.write(`<img src="${img.src}" style="width:100%">`);
}

// Trocar imagem principal
function changeImage(thumb) {
  const mainImg = thumb.closest('.product-images').querySelector('.main-img');
  mainImg.src = thumb.src;
}

function showProductDetails(productId) {
  // Dados dos produtos
  const products = {
    produto1: [
      { img: 'img/produto1a.jpg', desc: 'Item 1 do Produto 1' },
      { img: 'img/produto1b.jpg', desc: 'Item 2 do Produto 1' },
      { img: 'img/produto1c.jpg', desc: 'Item 3 do Produto 1' },
    ],
    produto2: [
      { img: 'img/produto2a.jpg', desc: 'Item 1 do Produto 2' },
      { img: 'img/produto2b.jpg', desc: 'Item 2 do Produto 2' },
      { img: 'img/produto2c.jpg', desc: 'Item 3 do Produto 2' },
    ],
    produto3: [
      { img: 'img/produto3a.jpg', desc: 'Item 1 do Produto 3' },
      { img: 'img/produto3b.jpg', desc: 'Item 2 do Produto 3' },
      { img: 'img/produto3c.jpg', desc: 'Item 3 do Produto 3' },
    ],
    produto4: [
      { img: 'img/produto4a.jpg', desc: 'Item 1 do Produto 4' },
      { img: 'img/produto4b.jpg', desc: 'Item 2 do Produto 4' },
      { img: 'img/produto4c.jpg', desc: 'Item 3 do Produto 4' },
    ],
    produto5: [
      { img: 'img/produto5a.jpg', desc: 'Item 1 do Produto 5' },
      { img: 'img/produto5b.jpg', desc: 'Item 2 do Produto 5' },
      { img: 'img/produto5c.jpg', desc: 'Item 3 do Produto 5' },
    ],
    produto6: [
      { img: 'img/produto6a.jpg', desc: 'Item 1 do Produto 6' },
      { img: 'img/produto6b.jpg', desc: 'Item 2 do Produto 6' },
      { img: 'img/produto6c.jpg', desc: 'Item 3 do Produto 6' },
    ],
  };

  // Obter os itens do produto clicado
  const productItems = products[productId];

  // Atualizar o conteúdo da nova página
  const productContent = document.getElementById('product-content');
  productContent.innerHTML = productItems
    .map(
      (item) => `
      <div class="product-item">
        <img src="${item.img}" alt="${item.desc}">
        <p>${item.desc}</p>
        <button onclick="contactWhatsApp()">Chamar no WhatsApp</button>
      </div>
    `
    )
    .join('');

  // Exibir a nova página
  document.querySelector('.products-grid').classList.add('hidden');
  document.getElementById('product-details').classList.remove('hidden');
}

function goBack() {
  // Voltar para a lista de produtos
  document.querySelector('.products-grid').classList.remove('hidden');
  document.getElementById('product-details').classList.add('hidden');

  // Limpar o conteúdo do container de detalhes do produto
  document.getElementById('product-content').innerHTML = '';
}

function contactWhatsApp() {
  // Redirecionar para o WhatsApp
  window.open('https://wa.me/5511999999999', '_blank');
}
