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
      { img: 'produtos/times/Al Hilal Azul.PNG', desc: 'Camisa Al Hilal Azul - Design moderno com detalhes em azul royal.' },
      { img: 'produtos/times/Al Hilal Branca.PNG', desc: 'Camisa Al Hilal Branca - Elegante uniforme alternativo.' },
      { img: 'produtos/times/Arsenal Preta.PNG', desc: 'Camisa Arsenal Preta - Terceiro uniforme com detalhes em vermelho.' },
      { img: 'produtos/times/Atlético PR.PNG', desc: 'Camisa Atlético Paranaense - Uniforme tradicional rubro-negro.' },
      { img: 'produtos/times/Atlético MG Branca.jpg', desc: 'Camisa Atlético Mineiro Branca - Uniforme alternativo.' },
      { img: 'produtos/times/Atlético MG.jpg', desc: 'Camisa Atlético Mineiro - Uniforme principal preto e branco.' },
      { img: 'produtos/times/Bayer.PNG', desc: 'Camisa Bayer Leverkusen - Design moderno em preto e vermelho.' },
      { img: 'produtos/times/Bayer Vermelha.PNG', desc: 'Camisa Bayer Leverkusen Vermelha - Uniforme principal vermelho.' },
      { img: 'produtos/times/Barca.PNG', desc: 'Camisa Barcelona Alternativa - Design especial azul e grená.' },
      { img: 'produtos/times/City Azul.PNG', desc: 'Camisa Manchester City Azul - Uniforme principal em azul celeste.' },
      { img: 'produtos/times/Botafogo.jpg', desc: 'Camisa Botafogo - Uniforme tradicional alvinegro.' },
      { img: 'produtos/times/Corinthians .jpg', desc: 'Camisa Corinthians - Uniforme principal branco.' },
      { img: 'produtos/times/Corinthians Listrada.jpg', desc: 'Camisa Corinthians Listrada - Design especial preto e branco.' },
      { img: 'produtos/times/Corinthians Mundial.jpg', desc: 'Camisa Corinthians Mundial - Edição comemorativa.' },
      { img: 'produtos/times/Corinthians Mundial Torcedor.jpg', desc: 'Camisa Corinthians Mundial - Versão torcedor.' },
      { img: 'produtos/times/Corinthians Preta.PNG', desc: 'Camisa Corinthians Preta - Uniforme alternativo.' },
      { img: 'produtos/times/Cruzeiro .jpg', desc: 'Camisa Cruzeiro - Uniforme principal azul.' },
      { img: 'produtos/times/Cruzeiro Branca.jpg', desc: 'Camisa Cruzeiro Branca - Uniforme alternativo.' },
      { img: 'produtos/times/Cruzeiro Azul2.jpg', desc: 'Camisa Cruzeiro Azul - Segundo modelo.' },
      { img: 'produtos/times/Dortmund.PNG', desc: 'Camisa Borussia Dortmund - Uniforme principal amarelo.' },
      { img: 'produtos/times/Flamengo.jpg', desc: 'Camisa Flamengo - Uniforme tradicional rubro-negro.' },
      { img: 'produtos/times/Fluminense .jpg', desc: 'Camisa Fluminense - Uniforme tricolor tradicional.' },
      { img: 'produtos/times/Inter Miami.PNG', desc: 'Camisa Inter Miami - Design exclusivo em rosa e preto.' },
      { img: 'produtos/times/Inter Miami.jpg', desc: 'Camisa Inter Miami Alternativa - Segundo modelo.' },
      { img: 'produtos/times/Milan Branca.PNG', desc: 'Camisa Milan Branca - Uniforme alternativo.' },
      { img: 'produtos/times/Milan Listrada.PNG', desc: 'Camisa Milan Listrada - Uniforme principal rossonero.' },
      { img: 'produtos/times/Palmeiras Branca.PNG', desc: 'Camisa Palmeiras Branca - Uniforme alternativo.' },
      { img: 'produtos/times/Palmeiras.jpg', desc: 'Camisa Palmeiras - Uniforme principal verde.' },
      { img: 'produtos/times/PSG Branca.PNG', desc: 'Camisa PSG Branca - Uniforme alternativo.' },
      { img: 'produtos/times/PSG.PNG', desc: 'Camisa PSG - Uniforme principal azul.' },
      { img: 'produtos/times/Real.PNG', desc: 'Camisa Real Madrid - Uniforme principal branco.' },
      { img: 'produtos/times/Roma.PNG', desc: 'Camisa Roma - Uniforme tradicional vermelho e amarelo.' },
      { img: 'produtos/times/Santos Branca.jpg', desc: 'Camisa Santos Branca - Uniforme principal.' },
      { img: 'produtos/times/Santos Listrada.jpg', desc: 'Camisa Santos Listrada - Design especial.' },
      { img: 'produtos/times/Santos Neymar.jpg', desc: 'Camisa Santos Neymar - Edição especial.' },
      { img: 'produtos/times/São Paulo Branca.jpg', desc: 'Camisa São Paulo Branca - Uniforme alternativo.' },
      { img: 'produtos/times/Spurs .PNG', desc: 'Camisa Tottenham Hotspur - Uniforme principal branco.' },
      { img: 'produtos/times/Vasco Branca.PNG', desc: 'Camisa Vasco Branca - Uniforme principal.' },
      { img: 'produtos/times/Vasco Branca 2.PNG', desc: 'Camisa Vasco Branca - Segundo modelo.' },
      { img: 'produtos/times/Vasco Preta.PNG', desc: 'Camisa Vasco Preta - Uniforme alternativo.' }
    ],

    produto2: [
      { img: 'produtos/retro/Arsenal Henry.jpg', desc: 'Camisa Retrô Arsenal - Modelo época Henry, vermelho com detalhes em branco.' },
      { img: 'produtos/retro/Barça Rivaldo.PNG', desc: 'Camisa Retrô Barcelona - Modelo época Rivaldo, listras verticais clássicas.' },
      { img: 'produtos/retro/Barça Azul Messi.PNG', desc: 'Camisa Retrô Barcelona Azul - Modelo usado por Messi.' },
      { img: 'produtos/retro/Barça Ronaldinho .jpg', desc: 'Camisa Retrô Barcelona - Modelo época Ronaldinho Gaúcho.' },
      { img: 'produtos/retro/Corinthians_00.jpeg', desc: 'Camisa Retrô Corinthians 2000 - Modelo do Mundial.' },
      { img: 'produtos/retro/Corinthians Mundial.jpeg', desc: 'Camisa Retrô Corinthians - Modelo da conquista do Mundial.' },
      { img: 'produtos/retro/Corinthians Ronaldo.jpg', desc: 'Camisa Retrô Corinthians - Modelo época Ronaldo Fenômeno.' },
      { img: 'produtos/retro/Flamengo.jpeg', desc: 'Camisa Retrô Flamengo - Modelo clássico rubro-negro.' },
      { img: 'produtos/retro/Flamengo Zico.jpg', desc: 'Camisa Retrô Flamengo - Modelo época Zico.' },
      { img: 'produtos/retro/Inter Milão.jpg', desc: 'Camisa Retrô Inter de Milão - Listras verticais nerazzurri.' },
      { img: 'produtos/retro/Liverpool Gerrad.jpg', desc: 'Camisa Retrô Liverpool - Modelo época Gerrard.' },
      { img: 'produtos/retro/Manchester Cristiano.PNG', desc: 'Camisa Retrô Manchester United - Modelo época Cristiano Ronaldo.' },
      { img: 'produtos/retro/Milan.jpeg', desc: 'Camisa Retrô Milan - Modelo clássico rossonero.' },
      { img: 'produtos/retro/Milan Kaká .jpg', desc: 'Camisa Retrô Milan - Modelo época Kaká.' },
      { img: 'produtos/retro/Real Cristiano.jpg', desc: 'Camisa Retrô Real Madrid - Modelo época Cristiano Ronaldo.' },
      { img: 'produtos/retro/Real kaka.jpg', desc: 'Camisa Retrô Real Madrid - Modelo época Kaká.' },
      { img: 'produtos/retro/Real Ronaldo.jpg', desc: 'Camisa Retrô Real Madrid - Modelo época Ronaldo Fenômeno.' },
      { img: 'produtos/retro/Santos Branco.PNG', desc: 'Camisa Retrô Santos - Modelo clássico branco.' },
      { img: 'produtos/retro/Santos Listrado.PNG', desc: 'Camisa Retrô Santos - Modelo listrado histórico.' },
      { img: 'produtos/retro/Santos Neymar Azul.PNG', desc: 'Camisa Retrô Santos - Modelo azul época Neymar.' }
    ],

    produto3: [
      { img: 'produtos/selecao/Brasil 2002.jpg', desc: 'Camisa Retrô Seleção Brasil 2002 - Modelo do Pentacampeonato.' },
      { img: 'produtos/selecao/Brasil Azul.jpg', desc: 'Camisa Retrô Seleção Brasil - Modelo azul clássico.' },
      { img: 'produtos/selecao/França.PNG', desc: 'Camisa Retrô Seleção França - Modelo clássico em azul.' },
      { img: 'produtos/selecao/Itália Branca.jpg', desc: 'Camisa Retrô Seleção Itália - Modelo alternativo branco.' }
    ],

    produto4: [
      { img: 'produtos/agasalho/Agasalho Arsenal.jpg', desc: 'Conjunto Agasalho Arsenal - Vermelho e preto com design moderno.' },
      { img: 'produtos/agasalho/Agasalho Barça.jpg', desc: 'Conjunto Agasalho Barcelona - Azul e grená oficial.' },
      { img: 'produtos/agasalho/Agasalho Bayer.jpg', desc: 'Conjunto Agasalho Bayern - Vermelho tradicional alemão.' },
      { img: 'produtos/agasalho/Agasalho Chelsea.jpg', desc: 'Conjunto Agasalho Chelsea - Azul royal oficial.' },
      { img: 'produtos/agasalho/Agasalho Corinthians.jpg', desc: 'Conjunto Agasalho Corinthians - Branco com detalhes em preto.' },
      { img: 'produtos/agasalho/Agasalho Corinthians Preto.jpg', desc: 'Conjunto Agasalho Corinthians - Preto com detalhes em branco.' },
      { img: 'produtos/agasalho/Agasalho Flamengo.jpg', desc: 'Conjunto Agasalho Flamengo - Rubro-negro tradicional.' },
      { img: 'produtos/agasalho/Agasalho Flamengo (2).jpg', desc: 'Conjunto Agasalho Flamengo - Modelo alternativo.' },
      { img: 'produtos/agasalho/Agasalho Manchester.jpg', desc: 'Conjunto Agasalho Manchester United - Vermelho clássico.' },
      { img: 'produtos/agasalho/Agasalho Palmeiras.jpg', desc: 'Conjunto Agasalho Palmeiras - Verde com detalhes em branco.' },
      { img: 'produtos/agasalho/Agasalho Portugal.jpg', desc: 'Conjunto Agasalho Portugal - Vermelho tradicional.' },
      { img: 'produtos/agasalho/Agasalho Portugal Preto.jpg', desc: 'Conjunto Agasalho Portugal - Modelo preto alternativo.' },
      { img: 'produtos/agasalho/Agasalho PSG.jpg', desc: 'Conjunto Agasalho PSG - Azul e vermelho tradicional.' },
      { img: 'produtos/agasalho/Agasalho PSG Branco.jpg', desc: 'Conjunto Agasalho PSG - Modelo branco alternativo.' },
      { img: 'produtos/agasalho/Agasalho Real.jpg', desc: 'Conjunto Agasalho Real Madrid - Branco tradicional.' },
      { img: 'produtos/agasalho/Agasalho Real Madrid.jpg', desc: 'Conjunto Agasalho Real Madrid - Modelo alternativo.' },
      { img: 'produtos/agasalho/Agasalho Santos.jpg', desc: 'Conjunto Agasalho Santos - Branco com detalhes em preto.' },
      { img: 'produtos/agasalho/Agasalho Spurs.jpg', desc: 'Conjunto Agasalho Tottenham - Branco com detalhes em azul.' }
    ],

    produto5: [
      { img: 'produtos/bone/Argentina.jpg', desc: 'Boné da Argentina com design esportivo e cores clássicas.' },
      { img: 'produtos/bone/Brasil Amarelo.jpg', desc: 'Boné do Brasil em amarelo com detalhes em verde.' },
      { img: 'produtos/bone/Brasil Preto.jpg', desc: 'Boné do Brasil em preto com detalhes em verde e amarelo.' },
      { img: 'produtos/bone/Corinthians Branco.jpg', desc: 'Boné do Corinthians em branco com detalhes em preto.' },
      { img: 'produtos/bone/Corinthians Preto.jpg', desc: 'Boné do Corinthians em preto com detalhes em branco.' },
      { img: 'produtos/bone/Corinthians dourado.jpg', desc: 'Boné do Corinthians em dourado com detalhes em preto.' },
      { img: 'produtos/bone/Corinthians CP Branco.jpg', desc: 'Boné Corinthians CP em branco com detalhes em preto.' },
      { img: 'produtos/bone/Corinthians CP Preto.jpg', desc: 'Boné Corinthians CP em preto com detalhes em branco.' },
      { img: 'produtos/bone/Corinthians CP dourado .jpg', desc: 'Boné Corinthians CP em dourado com detalhes em preto.' },
      { img: 'produtos/bone/Cruzeiro Azul.jpg', desc: 'Boné do Cruzeiro em azul com detalhes em branco.' },
      { img: 'produtos/bone/Cruzeiro Branco.jpg', desc: 'Boné do Cruzeiro em branco com detalhes em azul.' },
      { img: 'produtos/bone/Cruzeiro Estrelas.jpg', desc: 'Boné do Cruzeiro com estrelas em azul e branco.' },
      { img: 'produtos/bone/Cruzeiro Estrelas Branco.jpg', desc: 'Boné do Cruzeiro com estrelas em branco e azul.' },
      { img: 'produtos/bone/Flamengo Preto.jpg', desc: 'Boné do Flamengo em preto com detalhes em vermelho.' },
      { img: 'produtos/bone/Flamengo Vermelho.jpg', desc: 'Boné do Flamengo em vermelho com detalhes em preto.' },
      { img: 'produtos/bone/Fluminense.jpg', desc: 'Boné do Fluminense com design clássico em grená e branco.' },
      { img: 'produtos/bone/Palmeiras Verde.jpg', desc: 'Boné do Palmeiras em verde com detalhes em branco.' },
      { img: 'produtos/bone/Palmeiras Branco.jpg', desc: 'Boné do Palmeiras em branco com detalhes em verde.' },
      { img: 'produtos/bone/Santos.jpg', desc: 'Boné do Santos com design clássico em preto e branco.' },
      { img: 'produtos/bone/Santos NRJ.jpg', desc: 'Boné do Santos NRJ com design moderno em preto e branco.' },
      { img: 'produtos/bone/Vasco.jpg', desc: 'Boné do Vasco com design clássico em preto e branco.' },
      { img: 'produtos/bone/Boca.jpg', desc: 'Boné do Boca Juniors com design clássico em azul e amarelo.' },
      { img: 'produtos/bone/River.jpg', desc: 'Boné do River Plate com design clássico em vermelho e branco.' },
      { img: 'produtos/bone/Arsenal.jpg', desc: 'Boné do Arsenal com design moderno em vermelho e branco.' },
      { img: 'produtos/bone/City.jpg', desc: 'Boné do Manchester City com design moderno em azul e branco.' },
      { img: 'produtos/bone/Liverpool.jpg', desc: 'Boné do Liverpool com design clássico em vermelho.' },
      { img: 'produtos/bone/Manchester .jpg', desc: 'Boné do Manchester United com design clássico em vermelho.' },
      { img: 'produtos/bone/Spurs .jpg', desc: 'Boné do Tottenham com design moderno em azul e branco.' }
    ],
    
    produto6: [
      { img: 'produtos/basquete/Brooklin .jpg', desc: 'Camisa do Brooklyn Nets preta com detalhes brancos.' },
      { img: 'produtos/basquete/Bulls Vermelha.jpg', desc: 'Camisa do Chicago Bulls vermelha.' },
      { img: 'produtos/basquete/Bulls Preta.jpg', desc: 'Camisa do Chicago Bulls preta.' },
      { img: 'produtos/basquete/Bulls .jpg', desc: 'Camisa do Chicago Bulls branca.' },
      { img: 'produtos/basquete/Cleveland.jpg', desc: 'Camisa do Cleveland vermelha com design clássico.' },
      { img: 'produtos/basquete/Hornets.PNG', desc: 'Camisa do Charlotte Hornets com detalhes em azul e branco.' },
      { img: 'produtos/basquete/Lakers Amarela.jpg', desc: 'Camisa do Los Angeles Lakers amarela com detalhes roxos.' },
      { img: 'produtos/basquete/Lakers Roxa.jpg', desc: 'Camisa do Los Angeles Lakers roxa com detalhes amarelo.' },
      { img: 'produtos/basquete/Lakers Preta.jpg', desc: 'Camisa do Los Angeles Lakers preta com detalhes amarelo.' },
      { img: 'produtos/basquete/Miami .jpg', desc: 'Camisa do Miami Heat preta com design clássico.' },
      { img: 'produtos/basquete/Warriors .jpg', desc: 'Camisa do Golden State Warriors azul com o logo da ponte.' }
    ]
  };

  const productItems = products[productId];
  const productContent = document.getElementById('product-content');

  productContent.innerHTML = `
  <div class="product-item-grid">
    ${productItems.map(item => `
      <div class="product-item">
        <img src="${item.img}" alt="${item.desc}" onclick="openImageModal('${item.img}')">
        <p>${item.desc}</p>
        <button onclick="contactWhatsApp()">Faça seu pedido pelo WhatsApp</button>
      </div>
    `).join('')}
  </div>
`;

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

function openImageModal(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}
