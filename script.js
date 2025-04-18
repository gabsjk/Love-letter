
const card = document.getElementById('card');
const music = document.getElementById('music');
let opened = false;

card.addEventListener('click', () => {
  if (!opened) {
    card.classList.add('opened');
    music.currentTime = 33;
    music.play();
    opened = true;
  } else {
    card.classList.remove('opened');
    music.pause();
    music.currentTime = 33;
    opened = false;
  }
});

const bg = document.getElementById('animated-bg');
const icons = ['star', 'heart', 'flower', 'flower2', 'heart2', 'star2'];

for (let i = 0; i < 40; i++) {
  const el = document.createElement('div');
  el.className = icons[Math.floor(Math.random() * icons.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.animationDuration = (6 + Math.random() * 6) + 's';
  el.style.animationDelay = Math.random() * 6 + 's';
  bg.appendChild(el);
}
