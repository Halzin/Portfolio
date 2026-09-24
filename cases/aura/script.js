const dialog = document.querySelector('#productDialog');
const dialogTitle = document.querySelector('#dialogTitle');
const dialogPrice = document.querySelector('#dialogPrice');
const dialogDescription = document.querySelector('#dialogDescription');
const dialogGarment = document.querySelector('#dialogGarment');
const bagPanel = document.querySelector('#bagPanel');
const bagButton = document.querySelector('#bagButton');
const bagClose = document.querySelector('.bag-close');
const bagCount = document.querySelector('.bag-button b');
const bagTitle = document.querySelector('#bagTitle');
const bagMessage = document.querySelector('.bag-message');
const pageShell = document.querySelector('.page-shell');
const sizeButtons = [...document.querySelectorAll('[data-size]')];
const bagItems = [];
let selectedProduct = 'vestido';
let selectedSize = 'P';

const products = {
  vestido: { title: 'Vestido Nuvem', price: 'R$ 189,00', description: 'Leve, soltinho e feito para dias que pedem movimento. Em viscose com botões de madeira.', className: 'dress' },
  blusa: { title: 'Blusa Linha', price: 'R$ 119,00', description: 'Uma blusa de corte reto, manga suave e acabamento feito com calma no nosso ateliê.', className: 'blouse' },
  saia: { title: 'Saia Encontro', price: 'R$ 149,00', description: 'Cintura confortável e caimento que acompanha o dia. Vai com camiseta, vai com tudo.', className: 'skirt' }
};

function selectSize(size) {
  selectedSize = size;
  sizeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.size === size)));
}

function openProduct(key) {
  const product = products[key];
  selectedProduct = key;
  selectSize('P');
  dialogTitle.textContent = product.title;
  dialogPrice.textContent = product.price;
  dialogDescription.textContent = product.description;
  dialogGarment.className = `garment ${product.className}`;
  dialog.showModal();
}

function renderBag() {
  bagCount.textContent = String(bagItems.length);
  if (bagItems.length === 0) {
    bagTitle.innerHTML = 'Por enquanto,<br /><em>vazia.</em>';
    bagMessage.textContent = 'Escolha uma peça e ela aparece aqui.';
    return;
  }

  bagTitle.innerHTML = 'Na sua<br /><em>sacola.</em>';
  const entries = bagItems.map(({ key, size }) => {
    const entry = document.createElement('p');
    const name = document.createElement('strong');
    name.textContent = products[key].title;
    entry.append(name, document.createElement('br'), `Tamanho ${size} · ${products[key].price}`);
    return entry;
  });
  bagMessage.replaceChildren(...entries);
}

function openBag() {
  bagPanel.inert = false;
  pageShell.inert = true;
  bagPanel.classList.add('is-open');
  bagClose.focus();
}

function closeBag() {
  bagPanel.classList.remove('is-open');
  bagPanel.inert = true;
  pageShell.inert = false;
  bagButton.focus();
}

document.querySelectorAll('[data-product]').forEach((button) => {
  button.addEventListener('click', () => openProduct(button.dataset.product));
});
sizeButtons.forEach((button) => button.addEventListener('click', () => selectSize(button.dataset.size)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

document.querySelector('#addButton').addEventListener('click', () => {
  bagItems.push({ key: selectedProduct, size: selectedSize });
  renderBag();
  dialog.close();
  openBag();
});

bagButton.addEventListener('click', openBag);
bagClose.addEventListener('click', closeBag);
bagPanel.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    bagClose.focus();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bagPanel.classList.contains('is-open')) closeBag();
});
