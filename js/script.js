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
