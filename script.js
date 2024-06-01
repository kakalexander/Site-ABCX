// Função para exibir o conteúdo correspondente ao botão clicado
function showContent(buttonNumber) {
  // Esconde todos os conteúdos
  var contents = document.querySelectorAll('.custom-content');
  contents.forEach(function(content) {
    content.classList.remove('show');
    content.style.display = 'none';
  });

  // Remove a classe 'clicked' de todos os botões
  var buttons = document.querySelectorAll('.custom-button');
  buttons.forEach(function(button) {
    button.classList.remove('clicked');
  });

  // Exibe o conteúdo correspondente ao botão clicado
  var contentToShow = document.getElementById('custom-content' + buttonNumber);
  if (contentToShow) {
    contentToShow.style.display = 'flex';
    // Delay para permitir que o display: flex seja aplicado antes da transição de opacidade
    setTimeout(function() {
      contentToShow.classList.add('show');
    }, 10);
  }

  // Adiciona a classe 'clicked' ao botão clicado
  var clickedButton = document.getElementById('custom-button' + buttonNumber);
  if (clickedButton) {
    clickedButton.classList.add('clicked');
  }

  // Rolagem suave para o conteúdo
  //contentToShow.scrollIntoView({ behavior: 'smooth' });
}

// Exibe o conteúdo do botão 1 ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  showContent(1);
});

document.addEventListener('DOMContentLoaded', function() {
  // Configuração dos carrosséis
  const carousels = [
    { images: document.querySelectorAll('.carrossel-img'), indicators: document.querySelectorAll('.indicator') },
    { images: document.querySelectorAll('.carrossel-img2'), indicators: document.querySelectorAll('.indicator2') },
    { images: document.querySelectorAll('.carrossel-img3'), indicators: document.querySelectorAll('.indicator3') },
    { images: document.querySelectorAll('.carrossel-img4'), indicators: document.querySelectorAll('.indicator4') },
    { images: document.querySelectorAll('.carrossel-img5'), indicators: document.querySelectorAll('.indicator5') },
    { images: document.querySelectorAll('.carrossel-img6'), indicators: document.querySelectorAll('.indicator6') },
    { images: document.querySelectorAll('.carrossel-img7'), indicators: document.querySelectorAll('.indicator7') }
  ];

  // Função para mostrar a imagem no carrossel específico
  function showImage(index, carousel) {
    carousel.images.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active', 'slide-right');
      } else {
        img.classList.remove('active', 'slide-right');
      }
      carousel.indicators[i].classList.toggle('active', i === index);
    });
  }

  // Função para avançar para a próxima imagem no carrossel específico
  function nextImage(carousel) {
    let index = 0;
    return function() {
      index = (index + 1) % carousel.images.length;
      showImage(index, carousel);
    };
  }

  // Função para iniciar o carrossel
  function startCarousel(carousel) {
    const interval = setInterval(nextImage(carousel), 5000);
    return interval;
  }

  // Função para parar o carrossel
  function stopCarousel(interval) {
    clearInterval(interval);
  }

  // Inicialização de cada carrossel
  carousels.forEach(carousel => {
    let interval;

    // Event listeners para os indicadores de cada carrossel
    carousel.indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
        stopCarousel(interval);
        showImage(i, carousel);
        interval = startCarousel(carousel);
      });
    });

    // Mostra a primeira imagem de cada carrossel e inicia o carrossel
    showImage(0, carousel);
    interval = startCarousel(carousel);
  });
});
