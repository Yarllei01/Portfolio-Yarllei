document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });

    navUl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navUl.classList.remove('active'));
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.querySelector('.cards');
  const cards = cardsContainer ? Array.from(cardsContainer.querySelectorAll('.card')) : [];
  const btnLeft = document.getElementById('scrollLeft');
  const btnRight = document.getElementById('scrollRight');
  let current = 0;

  function isMobile() {
    return window.innerWidth <= 600;
  }

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function nextCard() {
    if (!isMobile()) return;
    current = (current + 1) % cards.length;
    showCard(current);
  }

  function prevCard() {
    if (!isMobile()) return;
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  }

  if (cards.length && btnLeft && btnRight) {
    showCard(current);

    btnLeft.addEventListener('click', prevCard);
    btnRight.addEventListener('click', nextCard);

    window.addEventListener('resize', () => {
      if (isMobile()) {
        showCard(current);
      } else {
        // Em telas grandes, mostra todos os cards
        cards.forEach(card => card.classList.remove('active'));
      }
    });
  }
});

const form = document.querySelector('.contato form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const nome = form.querySelector('input[name="nome"]');
      const email = form.querySelector('input[name="email"]');
      let valid = true;
      let mensagem = "";

      if (!nome.value.trim()) {
        valid = false;
        mensagem += "Por favor, preencha o nome.\n";
      }

      if (!email.value.trim()) {
        valid = false;
        mensagem += "Por favor, preencha o e-mail.\n";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        valid = false;
        mensagem += "Por favor, insira um e-mail válido.\n";
      }

      if (!valid) {
        e.preventDefault();
        alert(mensagem);
      } else {
      console.log("Nome:", nome.value);
      console.log("E-mail:", email.value);
    }
  });
}