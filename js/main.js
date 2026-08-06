const WHATSAPP_NUMBER = '5519993431144';

const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > header.offsetHeight) {
    header.classList.add('site-header--hidden');
  } else {
    header.classList.remove('site-header--hidden');
  }
  lastScrollY = currentY;
  ticking = false;
}

if (header) {
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
}

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const mensagem = form.mensagem.value.trim();

    const lines = [
      `Olá! Meu nome é ${nome}.`,
      telefone ? `Telefone: ${telefone}` : '',
      mensagem || 'Gostaria de saber mais sobre a Casa Santa Maria.',
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
    form.reset();
  });
}
