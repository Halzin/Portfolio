const dialog = document.querySelector('#productDialog');
const dialogTitle = document.querySelector('#dialogTitle');
const dialogPrice = document.querySelector('#dialogPrice');
const dialogDescription = document.querySelector('#dialogDescription');
const dialogGarment = document.querySelector('#dialogGarment');
const bagPanel = document.querySelector('#bagPanel');
const bagCount = document.querySelector('.bag-button b');
const bagMessage = document.querySelector('.bag-message');
let selectedProduct = 'vestido';

const products = {
  vestido: { title: 'Vestido Nuvem', price: 'R$ 189,00', description: 'Leve, soltinho e feito para dias que pedem movimento. Em viscose com botões de madeira.', className: 'dress' },
  blusa: { title: 'Blusa Linha', price: 'R$ 119,00', description: 'Uma blusa de corte reto, manga suave e acabamento feito com calma no nosso ateliê.', className: 'blouse' },
  saia: { title: 'Saia Encontro', price: 'R$ 149,00', description: 'Cintura confortável e caimento que acompanha o dia. Vai com camiseta, vai com tudo.', className: 'skirt' }
};

function openProduct(key) {
  const product = products[key];
  selectedProduct = key;
  dialogTitle.textContent = product.title;
  dialogPrice.textContent = product.price;
  dialogDescription.textContent = product.description;
  dialogGarment.className = `garment ${product.className}`;
  dialog.showModal();
}

document.querySelectorAll('[data-product]').forEach((item) => {
  item.addEventListener('click', () => openProduct(item.dataset.product));
  item.addEventListener('keydown', (event) => { if (event.key === 'Enter') openProduct(item.dataset.product); });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

document.querySelector('#addButton').addEventListener('click', () => {
  const product = products[selectedProduct];
  bagCount.textContent = '1';
  bagMessage.innerHTML = `<strong>${product.title}</strong><br>${product.price}<br><br>Peça adicionada com sucesso.`;
  dialog.close();
  bagPanel.classList.add('is-open');
});

document.querySelector('#bagButton').addEventListener('click', () => bagPanel.classList.add('is-open'));
document.querySelector('.bag-close').addEventListener('click', () => bagPanel.classList.remove('is-open'));
