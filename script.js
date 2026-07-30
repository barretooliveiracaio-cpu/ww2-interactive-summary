const botao = document.getElementById('btnDestaque');
const cards = document.querySelectorAll('.card');

botao.addEventListener('click', () => {
  cards.forEach(card => {
    card.classList.toggle('destaque');
  });
});