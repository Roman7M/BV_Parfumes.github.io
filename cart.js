class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addItem(item) {
    this.items.push(item);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}

let cart = new ShoppingCart();

let btn = document.querySelector('.add-to-cart');
if (btn) {
  btn.addEventListener('click', function() {
    let item = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      img: btn.dataset.img
    };

    cart.addItem(item);
    alert(item.name + ' додано в кошик!');
  });
}

