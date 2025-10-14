// ===== 1) MENU HAMBURGER =====
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');

function toggleMenu() {
  menu.hidden = !menu.hidden;
}
menuToggle.addEventListener('click', toggleMenu);

// ===== 2) ACCORDION =====
function toggleAccordion(event) {
  const titulo = event.target;                 // <h3>
  const conteudo = titulo.nextElementSibling;  // div logo abaixo
  conteudo.hidden = !conteudo.hidden;
}

document.querySelectorAll('.acc-titulo')
  .forEach(t => t.addEventListener('click', toggleAccordion));

// ===== 3) TABS (ABAS) =====
function trocarAba(event) {
  const alvo = event.target.getAttribute('data-alvo'); // ex: "#tab1"
  document.querySelectorAll('.tab').forEach(div => div.hidden = true);
  document.querySelector(alvo).hidden = false;
}

document.querySelectorAll('.tab-btn')
  .forEach(btn => btn.addEventListener('click', trocarAba));



// ===== 5) CARROSSEL =====
const imagens = [
  'https://via.placeholder.com/320x180?text=IMG+1',
  'https://via.placeholder.com/320x180?text=IMG+2',
  'https://via.placeholder.com/320x180?text=IMG+3'
];
let indice = 0;

function mostrarSlide(i) {
  const img = document.getElementById('slide');
  img.src = imagens[i];
}

function proximo() {
  indice = (indice + 1) % imagens.length;
  mostrarSlide(indice);
}

function anterior() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarSlide(indice);
}

document.getElementById('next').addEventListener('click', proximo);
document.getElementById('prev').addEventListener('click', anterior);
mostrarSlide(indice); // inicia no primeiro

// ===== 6) Mostrar / Ocultar Senha =====
function toggleSenha() {
  const campo = document.getElementById('campoSenha');
  const btn   = document.getElementById('toggleSenha');

  if (campo.type === 'password') {
    campo.type = 'text';
    btn.textContent = 'Ocultar';
  } else {
    campo.type = 'password';
    btn.textContent = 'Mostrar';
  }
}
document.getElementById('toggleSenha').addEventListener('click', toggleSenha);
