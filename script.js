const envelope = document.querySelector('.envelope');
const card = document.querySelector('.card');
const music = document.getElementById('music');
let opened = false;

// Função para abrir e fechar a carta
envelope.addEventListener('click', () => {
  if (!opened) {
    card.style.display = 'flex';
    envelope.style.transform = 'rotateX(-180deg)';
    music.currentTime = 33;
    music.play();
    opened = true;
  } else {
    card.style.display = 'none';
    envelope.style.transform = 'rotateX(0deg)';
    music.pause();
    music.currentTime = 33; // Reseta o tempo para o início
    opened = false;
  }
});

// Função para gerar os elementos flutuantes no fundo
const bg = document.querySelector('body');
const icons = ['star', 'heart', 'flower'];

for (let i = 0; i < 40; i++) {
  const el = document.createElement('div');
  el.className = icons[Math.floor(Math.random() * icons.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.animationDuration = (6 + Math.random() * 6) + 's';
  el.style.animationDelay = Math.random() * 6 + 's';
  bg.appendChild(el);
}
