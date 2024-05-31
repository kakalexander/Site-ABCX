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
  let index = 0;
  const images = document.querySelectorAll('.carrossel-img');
  const indicators = document.querySelectorAll('.indicator');
  const totalImages = images.length;
  let interval;

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active', 'slide-right');
      } else {
        img.classList.remove('active', 'slide-right');
      }
      indicators[i].classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    index = (index + 1) % totalImages;
    showImage(index);
  }

  function startCarousel() {
    interval = setInterval(nextImage, 5000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      stopCarousel();
      index = i;
      showImage(index);
      startCarousel();
    });
  });

  showImage(index);
  startCarousel();
});
