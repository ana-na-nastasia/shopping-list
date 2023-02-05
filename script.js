/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const productsContainer = document.querySelector('.groceries');

input.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    const productName = input.value;

    const newProduct = document.createElement('div');
    newProduct.classList.add('items');
    newProduct.textContent = productName;

    if (input.value != '') {
      productsContainer.append(newProduct);
    }

    newProduct.addEventListener('click', function() {
      newProduct.classList.toggle('done');
    })

    input.value = '';
  }
})