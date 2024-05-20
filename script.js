 // Função para exibir o conteúdo correspondente ao botão clicado
 function showContent(buttonNumber) {
    // Esconde todos os conteúdos
    var contents = document.querySelectorAll('.custom-content');
    contents.forEach(function(content) {
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
    }

    // Adiciona a classe 'clicked' ao botão clicado
    var clickedButton = document.getElementById('custom-button' + buttonNumber);
    if (clickedButton) {
      clickedButton.classList.add('clicked');
    }
  }
  // Exibe o conteúdo do botão 1 ao carregar a página
  showContent(1);
