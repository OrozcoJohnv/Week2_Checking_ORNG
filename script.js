var products = [
  { name: "Glitch Tee", price: 890, category: "Tops", image: "img1.jpg", fit: "Boxy fit. True to size." },
  { name: "Pixel Graphic Tee", price: 950, category: "Tops", image: "img2.jpg", fit: "Regular fit. True to size." },
  { name: "Ringer Tee", price: 850, category: "Tops", image: "img3.jpg", fit: "Slim fit. Size up for a loose look." },
  { name: "Boxy Crop Tee", price: 790, category: "Tops", image: "img4.jpg", fit: "Cropped and boxy. True to size." },
  { name: "Pocket Tee", price: 820, category: "Tops", image: "img5.jpg", fit: "Regular fit. True to size." },
  { name: "Oversized Tee", price: 990, category: "Tops", image: "img6.jpg", fit: "Oversized. Size down for regular fit." },
  { name: "Long Sleeve Tee", price: 1190, category: "Tops", image: "img7.jpg", fit: "Slim fit. Size up for a loose look." },
  { name: "Pixel Tank", price: 690, category: "Tops", image: "img8.jpg", fit: "Relaxed fit. True to size." },

  { name: "Pixel Hoodie", price: 2190, category: "Outerwear", image: "img9.jpg", fit: "Oversized fit. Size down for regular fit." },
  { name: "Zip Hoodie", price: 2290, category: "Outerwear", image: "img10.jpg", fit: "Regular fit. True to size." },
  { name: "Zip Jacket", price: 2490, category: "Outerwear", image: "img11.jpg", fit: "Regular fit. True to size." },
  { name: "Varsity Jacket", price: 2990, category: "Outerwear", image: "img12.jpg", fit: "Boxy fit. True to size." },
  { name: "Windbreaker", price: 1890, category: "Outerwear", image: "img13.jpg", fit: "Light and loose. Size down for regular fit." },
  { name: "Crewneck Sweater", price: 1690, category: "Outerwear", image: "img14.jpg", fit: "Relaxed fit. True to size." },
  { name: "Coach Jacket", price: 2390, category: "Outerwear", image: "img15.jpg", fit: "Regular fit. True to size." },
  { name: "Fleece Vest", price: 1590, category: "Outerwear", image: "img16.jpg", fit: "Regular fit. True to size." },

  { name: "Cargo Pants", price: 1190, category: "Bottoms", image: "img17.jpg", fit: "Relaxed fit. True to size." },
  { name: "Jogger Pants", price: 1090, category: "Bottoms", image: "img18.jpg", fit: "Tapered fit. True to size." },
  { name: "Denim Jeans", price: 1490, category: "Bottoms", image: "img19.jpg", fit: "Straight fit. True to size." },
  { name: "Wide-Leg Pants", price: 1390, category: "Bottoms", image: "img20.jpg", fit: "Wide fit. Size down for less room." },
  { name: "Track Pants", price: 1190, category: "Bottoms", image: "img21.jpg", fit: "Regular fit. True to size." },
  { name: "Sweat Shorts", price: 990, category: "Bottoms", image: "img22.jpg", fit: "Relaxed fit. True to size." },
  { name: "Cargo Shorts", price: 890, category: "Bottoms", image: "img23.jpg", fit: "Relaxed fit. True to size." },
  { name: "Utility Shorts", price: 950, category: "Bottoms", image: "img24.jpg", fit: "Regular fit. True to size." }
];

var sizes = ["S", "M", "L", "XL"];

var cart = [];

var productGrid = document.getElementById("products");
var filterButtons = document.querySelectorAll(".filter-btn");
var filterStatus = document.getElementById("filter-status");
var cartCount = document.getElementById("cart-count");
var cartEmpty = document.getElementById("cart-empty");
var cartBox = document.getElementById("cart-box");
var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var checkoutForm = document.getElementById("checkout-form");
var orderMessage = document.getElementById("order-message");

function showProducts(category) {
  var html = "";
  var count = 0;

  products.forEach(function (p, index) {
    if (p.category !== category) {
      return;
    }
    count++;

    var sizeHtml = "";
    sizes.forEach(function (s) {
      sizeHtml += '<label><input type="radio" name="size-' + index + '" value="' + s + '"><span>' + s + '</span></label>';
    });

    html += '<article class="card" data-index="' + index + '">' +
      '<img src="' + p.image + '" alt="' + p.name + '">' +
      '<h3>' + p.name + '</h3>' +
      '<p class="price">₱' + p.price.toLocaleString() + '</p>' +
      '<p>' + p.fit + '</p>' +
      '<fieldset class="size-picker"><legend>Size</legend>' + sizeHtml + '</fieldset>' +
      '<button type="button" class="button add-to-cart">Add to cart</button>' +
      '<p class="card-msg"></p>' +
      '</article>';
  });

  productGrid.innerHTML = html;
  filterStatus.textContent = "Showing " + count + " " + category;
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    button.setAttribute("aria-pressed", "true");
    showProducts(button.dataset.category);
  });
});

productGrid.addEventListener("click", function (event) {
  if (!event.target.classList.contains("add-to-cart")) {
    return;
  }

  var card = event.target.closest(".card");
  var product = products[card.dataset.index];
  var message = card.querySelector(".card-msg");
  var chosen = card.querySelector("input:checked");

  if (!chosen) {
    message.textContent = "Please pick a size first.";
    return;
  }

  var size = chosen.value;

  var found = null;
  cart.forEach(function (item) {
    if (item.name === product.name && item.size === size) {
      found = item;
    }
  });

  if (found) {
    found.qty++;
  } else {
    cart.push({ name: product.name, price: product.price, size: size, qty: 1 });
  }

  message.textContent = "Added " + product.name + " (" + size + ")!";
  orderMessage.hidden = true;
  updateCart();
});

cartItems.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    var index = Number(event.target.dataset.index);
    cart.splice(index, 1);
    updateCart();
  }
});

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  cart = [];
  updateCart();
  checkoutForm.reset();

  orderMessage.textContent = "Thanks, " + name + "! Your order is placed. (School project: no real payment.)";
  orderMessage.hidden = false;
});

function updateCart() {
  var totalQty = 0;
  var totalPrice = 0;
  var html = "";

  cart.forEach(function (item, index) {
    totalQty += item.qty;
    totalPrice += item.price * item.qty;

    html += '<li class="cart-row">' +
      '<span>' + item.name + ' (' + item.size + ') x ' + item.qty + '</span>' +
      '<span>₱' + (item.price * item.qty).toLocaleString() +
      ' <button type="button" class="remove-btn" data-index="' + index + '">Remove</button></span>' +
      '</li>';
  });

  cartItems.innerHTML = html;
  cartTotal.textContent = "₱" + totalPrice.toLocaleString();
  cartCount.textContent = totalQty;

  cartEmpty.hidden = cart.length > 0;
  cartBox.hidden = cart.length === 0;
}

showProducts("Tops");

var navLinks = document.querySelectorAll("nav a");
var pageSections = document.querySelectorAll("main section");

function updateActiveNav() {
  var current = "home";

  pageSections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    current = pageSections[pageSections.length - 1].id;
  }

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();