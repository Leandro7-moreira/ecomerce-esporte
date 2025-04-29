// Slider automático
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active'); // Remove o slide atual
  currentIndex = (currentIndex + 1) % slides.length; // Vai para o próximo
  slides[currentIndex].classList.add('active'); // Ativa o próximo
}

// Troca de slide a cada 5 segundos
setInterval(showNextSlide, 5000);

// Zoom ao clicar na imagem
function zoomImage(img) {
  const zoomWindow = window.open("", "Zoom", "width=600,height=600");
  zoomWindow.document.write(`<img src="${img.src}" style="width:100%">`);
}

// Troca da imagem principal ao clicar na miniatura
function changeImage(thumb) {
  const mainImg = thumb.closest('.product-images').querySelector('.main-img');
  mainImg.src = thumb.src;
}

// Mostrar detalhes do produto clicado
function showProductDetails(productId) {
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

  const productItems = products[productId];
  const productContent = document.getElementById('product-content');

  productContent.innerHTML = productItems.map(item => `
    <div class="product-item">
      <img src="${item.img}" alt="${item.desc}">
      <p>${item.desc}</p>
      <button onclick="contactWhatsApp()">Faça seu pedido pelo WhatsApp</button>
    </div>
  `).join('');

  // Oculta elementos da página inicial
  document.querySelector('.products-grid').classList.add('hidden');
  document.querySelector('.slider').classList.add('hidden');
  document.getElementById('product-details').classList.remove('hidden');
  document.querySelector('.whatsapp-icon-container').classList.add('hidden'); // Oculta botão WhatsApp
}

// Voltar para a tela inicial (grid de produtos)
function goBack() {
  document.querySelector('.products-grid').classList.remove('hidden');
  document.querySelector('.slider').classList.remove('hidden');
  document.getElementById('product-details').classList.add('hidden');
  document.getElementById('product-content').innerHTML = '';
  document.querySelector('.whatsapp-icon-container').classList.remove('hidden'); // Exibe botão WhatsApp novamente
}

// Função para abrir o link do WhatsApp
function contactWhatsApp() {
  window.open('https://wa.me/message/3HI4APRTY636G1', '_blank');
}
