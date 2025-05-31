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
  const cards = document.querySelector('.cards');
  const btnLeft = document.getElementById('scrollLeft');
  const btnRight = document.getElementById('scrollRight');

  function isMobile() {
    return window.innerWidth <= 600;
  }

  if (cards && btnLeft && btnRight) {
    btnLeft.addEventListener('click', function () {
      if (isMobile()) {
        cards.scrollBy({ left: -cards.offsetWidth * 0.8, behavior: 'smooth' });
      }
    });
    btnRight.addEventListener('click', function () {
      if (isMobile()) {
        cards.scrollBy({ left: cards.offsetWidth * 0.8, behavior: 'smooth' });
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