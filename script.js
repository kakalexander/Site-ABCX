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
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true
setInterval(() => {
  proximaImg()
},5000)
function proximaImg(){
  cont++

  if(cont > 3 ){
    cont = 1
  }
  document.getElementById('radio'+cont).checked = true
}
