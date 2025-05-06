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
      { img: 'produtos/times/al-hilal-azul.PNG', desc: 'Camisa Al Hilal Azul - Design moderno com detalhes em azul royal.' },
      { img: 'produtos/times/al-hilal-branca.PNG', desc: 'Camisa Al Hilal Branca - Elegante uniforme alternativo.' },
      { img: 'produtos/times/arsenal-preta.PNG', desc: 'Camisa Arsenal Preta - Terceiro uniforme com detalhes em vermelho.' },
      { img: 'produtos/times/atletico-pr.PNG', desc: 'Camisa Atlético Paranaense - Uniforme tradicional rubro-negro.' },
      { img: 'produtos/times/atletico-mg-branca.jpg', desc: 'Camisa Atlético Mineiro Branca - Uniforme alternativo.' },
      { img: 'produtos/times/atletico-mg.jpg', desc: 'Camisa Atlético Mineiro - Uniforme principal preto e branco.' },
      { img: 'produtos/times/bayer-azul.PNG', desc: 'Camisa Bayer de Munique - Design moderno em preto,azul e vermelho.' },
      { img: 'produtos/times/bayer-vermelha.PNG', desc: 'Camisa Bayer de Munique Vermelha - Uniforme principal vermelho.' },
      { img: 'produtos/times/bayer-comemorativa.jpeg', desc: 'Camisa Bayer de Munique Vermelha - Comemorativa 125 anos.' },
      { img: 'produtos/times/barcelona.PNG', desc: 'Camisa Barcelona Alternativa - Design especial azul e grená.' },
      { img: 'produtos/times/city-azul.PNG', desc: 'Camisa Manchester City Azul - Uniforme principal em azul celeste.' },
      { img: 'produtos/times/botafogo.jpg', desc: 'Camisa Botafogo - Uniforme tradicional alvinegro.' },
      { img: 'produtos/times/continhians-2025.jpg', desc: 'Camisa Corinthians - Uniforme principal branco.' },
      { img: 'produtos/times/corinthinas-listrada.jpg', desc: 'Camisa Corinthians Listrada - Design especial preto e branco.' },
      { img: 'produtos/times/corinthinas-mundial-branca.jpg', desc: 'Camisa Corinthians Mundial - Edição comemorativa.' },
      { img: 'produtos/times/corinthinas-mundial-torcedor.jpg', desc: 'Camisa Corinthians Mundial - Versão torcedor.' },
      { img: 'produtos/times/corinthinas-preta.PNG', desc: 'Camisa Corinthians Preta - Uniforme alternativo.' },
      { img: 'produtos/times/cruzeiro-azul.jpg', desc: 'Camisa Cruzeiro - Uniforme principal azul.' },
      { img: 'produtos/times/cruzeiro-branca.jpg', desc: 'Camisa Cruzeiro Branca - Uniforme alternativo.' },
      { img: 'produtos/times/cruzeiro.jpg', desc: 'Camisa Cruzeiro Azul - Segundo modelo.' },
      { img: 'produtos/times/dortmound.PNG', desc: 'Camisa Borussia Dortmund - Uniforme principal amarelo.' },
      { img: 'produtos/times/flamengo-2025.jpg', desc: 'Camisa Flamengo - Uniforme tradicional rubro-negro.' },
      { img: 'produtos/times/fluminense.jpg', desc: 'Camisa Fluminense - Uniforme tricolor tradicional.' },
      { img: 'produtos/times/inter-miami-rosa.PNG', desc: 'Camisa Inter Miami - Design exclusivo em rosa e preto.' },
      { img: 'produtos/times/inter-miami-azul.jpg', desc: 'Camisa Inter Miami Alternativa - Segundo modelo.' },
      { img: 'produtos/times/milan-branca.PNG', desc: 'Camisa Milan Branca - Uniforme alternativo.' },
      { img: 'produtos/times/milan-grena.PNG', desc: 'Camisa Milan Listrada - Uniforme principal rossonero.' },
      { img: 'produtos/times/palmeiras-branca.PNG', desc: 'Camisa Palmeiras Branca - Uniforme alternativo.' },
      { img: 'produtos/times/palmeiras-2025.jpg', desc: 'Camisa Palmeiras - Uniforme principal verde.' },
      { img: 'produtos/times/psg-branca.PNG', desc: 'Camisa PSG Branca - Uniforme alternativo.' },
      { img: 'produtos/times/psg.PNG', desc: 'Camisa PSG - Uniforme principal azul.' },
      { img: 'produtos/times/real.PNG', desc: 'Camisa Real Madrid - Uniforme principal branco.' },
      { img: 'produtos/times/roma.PNG', desc: 'Camisa Roma - Uniforme tradicional vermelho e amarelo.' },
      { img: 'produtos/times/santos-branca.jpg', desc: 'Camisa Santos Branca - Uniforme principal.' },
      { img: 'produtos/times/santos-listrada.jpg', desc: 'Camisa Santos Listrada - Design especial.' },
      { img: 'produtos/times/santos-branca2.jpg', desc: 'Camisa Santos Neymar - Edição especial.' },
      { img: 'produtos/times/sao-paulo-branca.jpg', desc: 'Camisa São Paulo Branca - Uniforme alternativo.' },
      { img: 'produtos/times/spurs.PNG', desc: 'Camisa Tottenham Hotspur - Uniforme principal branco.' },
      { img: 'produtos/times/vasco-branca.PNG', desc: 'Camisa Vasco Branca - Uniforme principal.' },
      { img: 'produtos/times/vasco-preta.PNG', desc: 'Camisa Vasco Preta - Uniforme alternativo.' },
      { img: 'produtos/times/arsenal-tradicional.jpeg', desc: 'Camisa Arsenal - Uniforme principal.' },
      { img: 'produtos/times/atletico-de-madrid.jpeg', desc: 'Camisa Tradicional Atlético de Madrid - Uniforme principal.' },
      { img: 'produtos/times/corinthinas-mundial-preta.jpeg', desc: 'Camisa Corinthians Mundial - Edição comemorativa.' },
      { img: 'produtos/times/sao-paulo-goleiro-preta.jpeg', desc: 'Camisa Goleiro São Paulo Preta - Uniforme goleiro.' },
      { img: 'produtos/times/sao-paulo-listrada.jpeg', desc: 'Camisa São Paulo - Uniforme alternativo.' },
      { img: 'produtos/times/sao-paulo-terceiro-uniforme.jpeg', desc: 'Camisa São Paulo - Uniforme alternativo.' },

    ],

    produto2: [
      { img: 'produtos/retro/arsenal-henry.jpg', desc: 'Camisa Retrô Arsenal - Modelo da época de Henry, vermelho com detalhes em branco.' },
      { img: 'produtos/retro/barcelona-rivaldo.PNG', desc: 'Camisa Retrô Barcelona - Modelo da época de Rivaldo, listras verticais clássicas.' },
      { img: 'produtos/retro/barcelona-azul-messi.PNG', desc: 'Camisa Retrô Barcelona - Modelo azul usado por Messi.' },
      { img: 'produtos/retro/barcelona-ronaldinho.jpg', desc: 'Camisa Retrô Barcelona - Modelo da época de Ronaldinho Gaúcho.' },
      { img: 'produtos/retro/corinthians-excel.jpeg', desc: 'Camisa Retrô Corinthians - Modelo 1998.' },
      { img: 'produtos/retro/corinthinas-mundial.jpeg', desc: 'Camisa Retrô Corinthians - Modelo da conquista do Mundial.' },
      { img: 'produtos/retro/corinthinas-ronaldo.jpg', desc: 'Camisa Retrô Corinthians - Modelo da época de Ronaldo Fenômeno.' },
      { img: 'produtos/retro/flamengo.jpeg', desc: 'Camisa Retrô Flamengo - Modelo clássico rubro-negro.' },
      { img: 'produtos/retro/flamengo-zico.jpg', desc: 'Camisa Retrô Flamengo - Modelo da época de Zico.' },
      { img: 'produtos/retro/inter-milao.jpg', desc: 'Camisa Retrô Inter de Milão - Listras verticais nerazzurri.' },
      { img: 'produtos/retro/liverpool-gerrard.jpg', desc: 'Camisa Retrô Liverpool - Modelo da época de Gerrard.' },
      { img: 'produtos/retro/manchester-cristiano.PNG', desc: 'Camisa Retrô Manchester United - Modelo da época de Cristiano Ronaldo.' },
      { img: 'produtos/retro/milan.jpeg', desc: 'Camisa Retrô Milan - Modelo clássico rossonero.' },
      { img: 'produtos/retro/milan-kaka.jpg', desc: 'Camisa Retrô Milan - Modelo da época de Kaká.' },
      { img: 'produtos/retro/real-criastiano.jpg', desc: 'Camisa Retrô Real Madrid - Modelo da época de Cristiano Ronaldo.' },
      { img: 'produtos/retro/real-kaka.jpg', desc: 'Camisa Retrô Real Madrid - Modelo da época de Kaká.' },
      { img: 'produtos/retro/real-ronaldo.jpg', desc: 'Camisa Retrô Real Madrid - Modelo da época de Ronaldo Fenômeno.' },
      { img: 'produtos/retro/santos-branco.PNG', desc: 'Camisa Retrô Santos - Modelo clássico branco.' },
      { img: 'produtos/retro/santos-listrado.PNG', desc: 'Camisa Retrô Santos - Modelo listrado histórico.' },
      { img: 'produtos/retro/santos-neymar-azul.PNG', desc: 'Camisa Retrô Santos - Modelo azul da época de Neymar.' },
      { img: 'produtos/retro/barcelona-messi.jpg', desc: 'Camisa Retrô Barcelona - Modelo principal grena Messi.' },
      { img: 'produtos/retro/flamengo-lubrax.PNG', desc: 'Camisa Retrô Flamengo - Modelo branco clássico.' },
      { img: 'produtos/retro/inter-milao-ronaldo.jpg', desc: 'Camisa Retrô Inter de Milão - Modelo da época de Ronaldo Fenômeno.' },
      { img: 'produtos/retro/manchester-beckham.jpg', desc: 'Camisa Retrô Manchester David Beckham - Modelo clássico.' }
    ],

    produto3: [
      { img: 'produtos/selecao/brasil2002.jpg', desc: 'Camisa Retrô Seleção Brasil 2002 - Modelo do Pentacampeonato.' },
      { img: 'produtos/selecao/brasil2022.jpg', desc: 'Camisa Retrô Seleção Brasil - Modelo alternativo azul.' },
      { img: 'produtos/selecao/franca1998.PNG', desc: 'Camisa Retrô Seleção França - Modelo clássico em azul.' },
      { img: 'produtos/selecao/franca2006.PNG', desc: 'Camisa Retrô Seleção França - Modelo alternativo branco.' },
      { img: 'produtos/selecao/franca1998.jpeg', desc: 'Camisa Retrô Seleção França - Modelo principal azul.' },
      { img: 'produtos/selecao/italia-branca.jpg', desc: 'Camisa Retrô Seleção Itália - Modelo alternativo branco.' },
      { img: 'produtos/selecao/argentina.jpeg', desc: 'Camisa Seleção Argentina - Modelo principal azul e branco.' },
      { img: 'produtos/selecao/argentina-tradicional-1994.jpeg', desc: 'Camisa Seleção Argentina - Modelo principal azul e branco.' },
      { img: 'produtos/selecao/argentina1994.jpeg', desc: 'Camisa Seleção Argentina - Modelo alternativo azul.' },
      { img: 'produtos/selecao/brasil2022-amarela.jpeg', desc: 'Camisa Seleção Brasileira - Amarelinha Tradicional.' },  
      { img: 'produtos/selecao/portugal-vermelha.jpeg', desc: 'Camisa Seleção Portugal - Modelo principal.' }, 
      { img: 'produtos/selecao/inglaterra.jpeg', desc: 'Camisa Seleção Inglaterra - Modelo principal branco.' },

    ],

    produto4: [
      { img: 'produtos/agasalho/agasalho-arsenal.jpg', desc: 'Conjunto Agasalho Arsenal - Vermelho e preto com design moderno.' },
      { img: 'produtos/agasalho/agasalho-barcelona.jpg', desc: 'Conjunto Agasalho Barcelona - Preto.' },
      { img: 'produtos/agasalho/agasalho-bayer.jpg', desc: 'Conjunto Agasalho Bayern - Vermelho tradicional alemão.' },
      { img: 'produtos/agasalho/agasalho-chelsea.jpg', desc: 'Conjunto Agasalho Chelsea - Azul royal oficial.' },
      { img: 'produtos/agasalho/agasalho-corinthians.jpg', desc: 'Conjunto Agasalho Corinthians - Branco com detalhes em preto.' },
      { img: 'produtos/agasalho/agasalho-corinthians-preto.jpg', desc: 'Conjunto Agasalho Corinthians - Preto com detalhes em branco.' },
      { img: 'produtos/agasalho/agasalho-flamengo.jpg', desc: 'Conjunto Agasalho Flamengo - Rubro-negro tradicional.' },
      { img: 'produtos/agasalho/agasalho-flamengo(2).jpg', desc: 'Conjunto Agasalho Flamengo - Modelo alternativo.' },
      { img: 'produtos/agasalho/agasalho-manchester.jpg', desc: 'Conjunto Agasalho Manchester United - Vermelho clássico.' },
      { img: 'produtos/agasalho/agasalho-palmeiras.jpg', desc: 'Conjunto Agasalho Palmeiras - Verde com detalhes em branco.' },
      { img: 'produtos/agasalho/agasalho-portugal.jpg', desc: 'Conjunto Agasalho Portugal - Vermelho tradicional.' },
      { img: 'produtos/agasalho/agasalho-portugal-preto.jpg', desc: 'Conjunto Agasalho Portugal - Modelo preto alternativo.' },
      { img: 'produtos/agasalho/agasalho-psg.jpg', desc: 'Conjunto Agasalho PSG - Azul e vermelho tradicional.' },
      { img: 'produtos/agasalho/agasalho-psg-branco.jpg', desc: 'Conjunto Agasalho PSG - Modelo branco alternativo.' },
      { img: 'produtos/agasalho/agasalho-real-branco.jpg', desc: 'Conjunto Agasalho Real Madrid - Branco tradicional.' },
      { img: 'produtos/agasalho/agasalho-real-madrid.jpg', desc: 'Conjunto Agasalho Real Madrid - Modelo alternativo.' },
      { img: 'produtos/agasalho/agasalho-santos.jpg', desc: 'Conjunto Agasalho Santos - Branco com detalhes em preto.' },
      { img: 'produtos/agasalho/agasalho-spurs.jpg', desc: 'Conjunto Agasalho Tottenham - Branco com detalhes em azul.' }
    ],

    produto5: [
      { img: 'produtos/bone/argentina.jpg', desc: 'Boné da Argentina - Azul com o escudo da seleção.' },
      { img: 'produtos/bone/arsenal.jpg', desc: 'Boné do Arsenal - Vermelho com o escudo do clube.' },
      { img: 'produtos/bone/boca.jpg', desc: 'Boné do Boca Juniors - Azul com detalhes em amarelo e o escudo do clube.' },
      { img: 'produtos/bone/botafogo.jpg', desc: 'Boné do Botafogo - Branco com o escudo do clube em preto.' },
      { img: 'produtos/bone/brasil-amarelo.jpg', desc: 'Boné do Brasil - Amarelo com detalhes com o escudo da seleção.' },
      { img: 'produtos/bone/brasil-preto.jpg', desc: 'Boné do Brasil - Preto com o escudo da seleção.' },
      { img: 'produtos/bone/city.jpg', desc: 'Boné do Manchester City - Cinza com o escudo do clube.' },
      { img: 'produtos/bone/corinthians-branco.jpg', desc: 'Boné do Corinthians - Branco com o escudo do clube.' },
      { img: 'produtos/bone/corinthians-branco2.jpg', desc: 'Boné do Corinthians - Branco com CP preto.' },
      { img: 'produtos/bone/corinthians-preto.jpg', desc: 'Boné do Corinthians - Preto com o escudo do clube.' },
      { img: 'produtos/bone/corinthians-dourado.jpg', desc: 'Boné do Corinthians - Preto com detalhes dourados.' },
      { img: 'produtos/bone/corinthians-cp-branco.jpg', desc: 'Boné Corinthians CP - Preto com CP branco.' },
      { img: 'produtos/bone/corinthians-cp-preto.jpg', desc: 'Boné Corinthians CP - Branco com CP preto e data de fundação.' },
      { img: 'produtos/bone/corinthians-cp-dourado.jpg', desc: 'Boné Corinthians CP - Preto com CP dourado.' },
      { img: 'produtos/bone/cruzeiro-azul.jpg', desc: 'Boné do Cruzeiro - branco com o escudo do clube aba azul.' },
      { img: 'produtos/bone/cruzeiro-branco.jpg', desc: 'Boné do Cruzeiro - Branco com o escudo do clube.' },
      { img: 'produtos/bone/cruzeiro-estrelas.jpg', desc: 'Boné do Cruzeiro - Azul com estrelas brancas em destaque.' },
      { img: 'produtos/bone/cruzeiro-estrelas-branco.jpg', desc: 'Boné do Cruzeiro - Branco com estrelas azuis em destaque.' },
      { img: 'produtos/bone/flamengo-preto.jpg', desc: 'Boné do Flamengo - Preto com detalhes em vermelho e o escudo do clube.' },
      { img: 'produtos/bone/flamengo-vermelho.jpg', desc: 'Boné do Flamengo - Vermelho com detalhes em preto e o escudo do clube.' },
      { img: 'produtos/bone/fluminense.jpg', desc: 'Boné do Fluminense - Grená com detalhes em branco e o escudo do clube.' },
      { img: 'produtos/bone/liverpool.jpg', desc: 'Boné do Liverpool - Vermelho com o escudo do clube em branco.' },
      { img: 'produtos/bone/manchester.jpg', desc: 'Boné do Manchester United - Vermelho com o escudo do clube em destaque.' },
      { img: 'produtos/bone/palmeiras-branco.jpg', desc: 'Boné do Palmeiras - Branco com detalhes em verde e o escudo do clube.' },
      { img: 'produtos/bone/palmeiras-branco2.jpg', desc: 'Boné do Palmeiras - Branco com dlogo do clube.' },
      { img: 'produtos/bone/palmeiras-branco3.jpg', desc: 'Boné do Palmeiras - Branco com detalhes em verde e o escudo do clube.' },
      { img: 'produtos/bone/palmeiras-verde.jpg', desc: 'Boné do Palmeiras - Verde com o escudo do clube em destaque e detalhes branco.' },
      { img: 'produtos/bone/palmeiras-verde3.jpg', desc: 'Boné do Palmeiras - Verde com detalhes em branco.' },
      { img: 'produtos/bone/palmeiras-verde4.jpg', desc: 'Boné do Palmeiras - Verde com o escudo.' },
      { img: 'produtos/bone/river.jpg', desc: 'Boné do River Plate - Branco com detalhes em vermelho e o escudo do clube.' },
      { img: 'produtos/bone/santos.jpg', desc: 'Boné do Santos - Preto com o escudo do clube.' },
      { img: 'produtos/bone/santos-nrj.jpg', desc: 'Boné do Santos NRJ - Preto com design moderno e o escudo do clube.' },
      { img: 'produtos/bone/sao-paulo-preto.jpg', desc: 'Boné do São Paulo - Preto com detalhes em vermelho e branco e escudo do clube.' },
      { img: 'produtos/bone/spurs.jpg', desc: 'Boné do Tottenham - Azul com detalhes em branco e o escudo do clube.' },
      { img: 'produtos/bone/vasco.jpg', desc: 'Boné do Vasco - Preto com o escudo do clube.' }
    ],
    
    produto6: [
      { img: 'produtos/basquete/brooklin.jpg', desc: 'Camisa do Brooklyn Nets - Preta com detalhes brancos.' },
      { img: 'produtos/basquete/bulls.jpg', desc: 'Camisa do Chicago Bulls - Branca com design clássico.' },
      { img: 'produtos/basquete/bulls-vermelha.jpg', desc: 'Camisa do Chicago Bulls - Vermelha com detalhes pretos.' },
      { img: 'produtos/basquete/bulls-preta.jpg', desc: 'Camisa do Chicago Bulls - Preta com detalhes vermelhos.' },
      { img: 'produtos/basquete/cleveland.jpg', desc: 'Camisa do Cleveland Cavaliers - Vermelha com design clássico.' },
      { img: 'produtos/basquete/hornets.PNG', desc: 'Camisa do Charlotte Hornets - Azul com detalhes brancos.' },
      { img: 'produtos/basquete/lakers-amarela.jpg', desc: 'Camisa do Los Angeles Lakers - Amarela com detalhes roxos.' },
      { img: 'produtos/basquete/lakers-roxa.jpg', desc: 'Camisa do Los Angeles Lakers - Roxa com detalhes amarelos.' },
      { img: 'produtos/basquete/lakers-preta.jpg', desc: 'Camisa do Los Angeles Lakers - Preta com detalhes amarelos.' },
      { img: 'produtos/basquete/miami.jpg', desc: 'Camisa do Miami Heat - Preta com design clássico.' },
      { img: 'produtos/basquete/warriors.jpg', desc: 'Camisa do Golden State Warriors - Azul com o logo da ponte.' }
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
        <button onclick="contactWhatsApp('${item.img}', '${item.desc}')">Comprar</button>
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

// Função para abrir o link do WhatsApp com a imagem e descrição do produto
function contactWhatsApp(img, desc) {
  // Número de telefone do contato (formato internacional, sem espaços ou símbolos)
  const phoneNumber = "5518997788845"; // Substitua pelo número desejado

  const basePath = "https://leandro7-moreira.github.io/ecomerce-esporte/"; // Substitua pelo nome do seu repositório

  // Gera o URL completo da imagem
  const imageUrl = `${basePath}/${img}`;
  
  // Cria a mensagem com a descrição e o link da imagem
  const message = `Olá, gostaria de mais informações sobre este produto:\n\n${desc}\n\nVeja a imagem: ${imageUrl}`;
  
  // Codifica a mensagem para ser usada na URL
  const encodedMessage = encodeURIComponent(message);
  
  // Gera o link do WhatsApp com o número e a mensagem
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Abre o link em uma nova aba
  window.open(whatsappUrl, '_blank');
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

// Exibe o botão "Voltar" ao rolar até a metade da página, apenas na página de detalhes
window.addEventListener('scroll', () => {
  const backButton = document.querySelector('.back-button');
  const productDetails = document.getElementById('product-details');
  const scrollPosition = window.scrollY; // Posição atual do scroll
  const screenHeight = window.innerHeight; // Altura da tela visível

  // Verifica se o container de detalhes está visível
  if (!productDetails.classList.contains('hidden')) {
      // Exibe o botão se o usuário rolar mais da metade da tela
      if (scrollPosition > screenHeight / 2) {
          backButton.style.display = 'block'; // Mostra o botão
      } else {
          backButton.style.display = 'none'; // Oculta o botão se estiver acima da metade
      }
  } else {
      backButton.style.display = 'none'; // Oculta o botão na página inicial
  }
});
