const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const placeOrderBtn = document.getElementById("place-order-btn");
const qrCodeContainer = document.getElementById("qrcode");

const products = [
  {
    id: 1,
    name: "French Fries",
    price: 59,
    category: "Snacks",
  },
  {
    id: 2,
    name: "Chilli potato",
    price: 99,
    category: "Snacks",
  },
  {
    id: 3,
    name: "Spring roll",
    price: 79,
    category: "Snacks",
  },
  {
    id: 4,
    name: "Bun maska",
    price: 39,
    category: "Snacks",
  },
  {
    id: 5,
    name: "Vada pao",
    price: 49,
    category: "Snacks",
  },
  {
    id: 6,
    name: "Veg Momos",
    price: 60,
    category: "Snacks",
  },
  {
    id: 7,
    name: "Peanut Butter Toast",
    price: 49,
    category: "Snacks",
  },
  {
    id: 8,
    name: "Veg Bread Roll",
    price: 39,
    category: "Snacks",
  },
  {
    id: 9,
    name: "Cheese Bread Roll",
    price: 59,
    category: "Snacks",
  },
  {
    id: 10,
    name: "Panner Cheese Bread Roll",
    price: 99,
    category: "Snacks",
  },
  {
    id: 11,
    name: "Veg Sandwich",
    price: 69,
    category: "Sandwich & Burger",
  },
  {
    id: 12,
    name: "Panner Cheese Sandwich",
    price: 119,
    category: "Sandwich & Burger",
  },
  {
    id: 13,
    name: "Aalo Tikki Veg Sandwich",
    price: 89,
    category: "Sandwich & Burger",
  },
  {
    id: 14,
    name: "Veg Burger",
    price: 49,
    category: "Sandwich & Burger",
  },
  {
    id: 15,
    name: "Veg Cheese Burger",
    price: 69,
    category: "Sandwich & Burger",
  },
  {
    id: 16,
    name: "Panner Cheese Burger",
    price: 89,
    category: "Sandwich & Burger",
  },
  {
    id: 17,
    name: "Plain Maggie",
    price: 29,
    category: "Maggie",
  },
  {
    id: 18,
    name: "Fried Maggie",
    price: 49,
    category: "Maggie",
  },
  {
    id: 19,
    name: "Sweet Corn Cheese Maggie",
    price: 79,
    category: "Maggie",
  },
  {
    id: 20,
    name: "Panner Maggie",
    price: 69,
    category: "Maggie",
  },
  {
    id: 21,
    name: "Chai",
    price: 20,
    category: "Hot-drink",
  },
  {
    id: 22,
    name: "Masala Chai",
    price: 30,
    category: "Hot-drink",
  },
  {
    id: 23,
    name: "Tandoor Chai",
    price: 25,
    category: "Hot-drink",
  },
  {
    id: 24,
    name: "Lemon Chai",
    price: 25,
    category: "Hot-drink",
  },
  {
    id: 25,
    name: "Coffee",
    price: 30,
    category: "Hot-drink",
  },
  {
    id: 26,
    name: "Black Coffee",
    price: 30,
    category: "Hot-drink",
  },
  {
    id: 27,
    name: "Hot Chocolate",
    price: 60,
    category: "Hot-drink",
  },
  {
    id: 28,
    name: "Chocolate",
    price: 50,
    category: "Hot-drink",
  },
  {
    id: 29,
    name: "Kesar Milk",
    price: 70,
    category: "Hot-drink",
  },
  {
    id: 30,
    name: "Strawberry Milk",
    price: 60,
    category: "Hot-drink",
  },
  {
    id: 31,
    name: "Regular Cold-drink",
    price: 25,
    category: "Cold-drink",
  },
  {
    id: 32,
    name: "Masala Cold-drink",
    price: 50,
    category: "Cold-drink",
  },
  {
    id: 33,
    name: "Cold Coffee",
    price: 70,
    category: "Cold-drink",
  },
  {
    id: 34,
    name: "Cold Coffee with Ice-Cream",
    price: 100,
    category: "Cold-drink",
  },
  {
    id: 35,
    name: "Virgin Mohito",
    price: 60,
    category: "Cold-drink",
  },
  {
    id: 36,
    name: "Mango Mohito",
    price: 50,
    category: "Cold-drink",
  },
  {
    id: 37,
    name: "Lichi Mohito",
    price: 50,
    category: "Cold-drink",
  },
  {
    id: 38,
    name: "Blue Berry Mohito",
    price: 60,
    category: "Cold-drink",
  },
  {
    id: 39,
    name: "Pizza Pocket",
    price: 60,
    category: "BBT Specials",
  },
  {
    id: 40,
    name: "Chocolate Moose",
    price: 60,
    category: "BBT Specials",
  },
  {
    id: 41,
    name: "Cheese Golgappe",
    price: 70,
    category: "BBT Specials",
  },
  {
    id: 42,
    name: "Baked Yogurt",
    price: 30,
    category: "BBT Specials",
  },
  {
    id: 43,
    name: "Slicked Fruit Cake(per slice)",
    price: 20,
    category: "BBT Specials",
  },
  {
    id: 44,
    name: "Muffin",
    price: 20,
    category: "BBT Specials",
  },
  {
    id: 45,
    name: "Chai with Bun Maska",
    price: 49,
    category: "BBT Specials Combo",
  },
  {
    id: 46,
    name: "French Fries with Masala Cold-drink",
    price: 79,
    category: "BBT Specials Combo",
  },
];


function filterByCategory(category) {
  dessertCards.innerHTML = "";

  const filteredProducts = category === "All"
    ? products
    : products.filter(product => product.category === category);

  filteredProducts.forEach(({ name, id, price }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">₹ ${price}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  });

 
  const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");
  [...addToCartBtns].forEach((btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    });
  });
}


filterByCategory('All'); 

const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.textContent.trim();

    filterByCategory(category);
  });
});


class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
      qrCodeContainer.innerHTML = "";
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);

clearCartBtn.addEventListener("click", () => {
  cart.clearCart();
  qrCodeContainer.innerHTML = ""; 
});

placeOrderBtn.addEventListener("click", () => {
  const totalAmount = cart.calculateTotal();
  if (totalAmount === 0) {
    alert("Cart is empty. Add items before placing an order.");
    return;
  }

  qrCodeContainer.innerHTML = ""; 
  new QRCode(qrCodeContainer, {
    text: `Total Amount: $${totalAmount.toFixed(2)}`,
    width: 200,
    height: 200
  });
});
  