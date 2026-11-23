// ORNG mountain shop script (beginner friendly)

// 1. THE PRODUCTS: 3 categories x 8 items = 24 items (4 men + 4 women in each category)
//    n = name, p = price, c = category, g = gender, d = description, s = specs
//    Pictures are img1.jpg to img24.jpg in this order (odd = men, even = women)
var products = [
  // ----- Tops (img1 - img8) -----
  {
    n: "Basecamp Merino Tee",
    p: 1490,
    c: "Tops",
    g: "Men",
    d: "Soft merino blend that stays fresh on multi-day treks.",
    s: "150 g · Odor-resistant · Quick-dry",
  },
  {
    n: "Cirrus Merino Tee",
    p: 1490,
    c: "Tops",
    g: "Women",
    d: "Light merino blend that stays fresh on multi-day treks.",
    s: "130 g · Odor-resistant · Quick-dry",
  },
  {
    n: "Switchback Long Sleeve",
    p: 1790,
    c: "Tops",
    g: "Men",
    d: "Sun-blocking base layer for exposed ridgelines.",
    s: "UPF 50+ · 160 g · Thumb loops",
  },
  {
    n: "Alpenglow Long Sleeve",
    p: 1790,
    c: "Tops",
    g: "Women",
    d: "Sun-blocking base layer for exposed ridgelines.",
    s: "UPF 50+ · 145 g · Thumb loops",
  },
  {
    n: "Ridgeway Trail Shirt",
    p: 2290,
    c: "Tops",
    g: "Men",
    d: "Ventilated ripstop shirt for hot, buggy climbs.",
    s: "Insect-shield · Vented back · 210 g",
  },
  {
    n: "Moraine Trail Shirt",
    p: 2290,
    c: "Tops",
    g: "Women",
    d: "Ventilated ripstop shirt for hot, buggy climbs.",
    s: "Insect-shield · Vented back · 190 g",
  },
  {
    n: "Granite Sun Hoody",
    p: 2490,
    c: "Tops",
    g: "Men",
    d: "Hooded sun layer that dries in minutes after a river crossing.",
    s: "UPF 50+ · Hood · 230 g",
  },
  {
    n: "Juniper Sun Hoody",
    p: 2490,
    c: "Tops",
    g: "Women",
    d: "Hooded sun layer that dries in minutes after a river crossing.",
    s: "UPF 50+ · Hood · 210 g",
  },

  // ----- Outerwear (img9 - img16) -----
  {
    n: "Summit Down Parka",
    p: 12990,
    c: "Outerwear",
    g: "Men",
    d: "Warm, packable parka for freezing summit nights.",
    s: "700-fill down · Rated -20°C · 780 g",
  },
  {
    n: "Aurora Down Parka",
    p: 12990,
    c: "Outerwear",
    g: "Women",
    d: "Warm, packable parka for freezing summit nights.",
    s: "700-fill down · Rated -20°C · 720 g",
  },
  {
    n: "Cirque Rain Shell",
    p: 8990,
    c: "Outerwear",
    g: "Men",
    d: "Fully waterproof shell for storms above the treeline.",
    s: "3-layer · 20K waterproof · 410 g",
  },
  {
    n: "Fjord Rain Shell",
    p: 8990,
    c: "Outerwear",
    g: "Women",
    d: "Fully waterproof shell for storms above the treeline.",
    s: "3-layer · 20K waterproof · 380 g",
  },
  {
    n: "Kestrel Wind Jacket",
    p: 3990,
    c: "Outerwear",
    g: "Men",
    d: "Featherweight windbreaker that packs into its own pocket.",
    s: "Windproof · 85 g · Packable",
  },
  {
    n: "Sparrow Wind Jacket",
    p: 3990,
    c: "Outerwear",
    g: "Women",
    d: "Featherweight windbreaker that packs into its own pocket.",
    s: "Windproof · 78 g · Packable",
  },
  {
    n: "Ridgeline Fleece",
    p: 4590,
    c: "Outerwear",
    g: "Men",
    d: "Warm grid fleece for cold mornings at camp.",
    s: "Grid fleece · Breathable · 340 g",
  },
  {
    n: "Tundra Fleece",
    p: 4590,
    c: "Outerwear",
    g: "Women",
    d: "Warm grid fleece for cold mornings at camp.",
    s: "Grid fleece · Breathable · 310 g",
  },

  // ----- Bottoms (img17 - img24) -----
  {
    n: "Talus Trail Pant",
    p: 3490,
    c: "Bottoms",
    g: "Men",
    d: "Stretch ripstop pant that sheds light rain and scrapes.",
    s: "DWR finish · 4-way stretch · 380 g",
  },
  {
    n: "Willow Trail Pant",
    p: 3490,
    c: "Bottoms",
    g: "Women",
    d: "Stretch ripstop pant that sheds light rain and scrapes.",
    s: "DWR finish · 4-way stretch · 340 g",
  },
  {
    n: "Scree Hiking Short",
    p: 2190,
    c: "Bottoms",
    g: "Men",
    d: "Light, quick-dry shorts for hot valley trails.",
    s: "Quick-dry · Zip pocket · 190 g",
  },
  {
    n: "Fern Hiking Short",
    p: 2190,
    c: "Bottoms",
    g: "Women",
    d: "Light, quick-dry shorts for hot valley trails.",
    s: "Quick-dry · Zip pocket · 170 g",
  },
  {
    n: "Crag Climbing Pant",
    p: 3990,
    c: "Bottoms",
    g: "Men",
    d: "Tough, flexible pant built for rock and scrambles.",
    s: "Reinforced knees · Gusseted · 420 g",
  },
  {
    n: "Pinnacle Climbing Pant",
    p: 3990,
    c: "Bottoms",
    g: "Women",
    d: "Tough, flexible pant built for rock and scrambles.",
    s: "Reinforced knees · Gusseted · 380 g",
  },
  {
    n: "Boulder Convertible Pant",
    p: 3290,
    c: "Bottoms",
    g: "Men",
    d: "Zip-off legs turn long pants into shorts at midday.",
    s: "Zip-off legs · UPF 50+ · 400 g",
  },
  {
    n: "Cairn Convertible Pant",
    p: 3290,
    c: "Bottoms",
    g: "Women",
    d: "Zip-off legs turn long pants into shorts at midday.",
    s: "Zip-off legs · UPF 50+ · 360 g",
  },
];

var sizes = ["S", "M", "L", "XL"];
var freeShippingOver = 5000;
var shippingFee = 150;

var cart = [];
var currentGender = "All";
var currentCategory = "Tops";

// Grab the parts of the page we need
var productGrid = document.getElementById("products");
var genderButtons = document.querySelectorAll(".gender-btn");
var categoryButtons = document.querySelectorAll(".cat-btn");
var filterStatus = document.getElementById("filter-status");
var cartCount = document.getElementById("cart-count");
var cartEmpty = document.getElementById("cart-empty");
var cartBox = document.getElementById("cart-box");
var cartItems = document.getElementById("cart-items");
var checkoutForm = document.getElementById("checkout-form");
var modal = document.getElementById("order-modal");

function peso(number) {
  return "₱" + number.toLocaleString();
}

// 2. SHOW PRODUCTS: build the cards for the chosen gender + category
function showProducts() {
  var html = "";
  var count = 0;

  products.forEach(function (p, index) {
    if (p.c !== currentCategory) {
      return;
    }
    if (currentGender !== "All" && p.g !== currentGender) {
      return;
    }
    count++;

    var sizeHtml = "";
    sizes.forEach(function (s) {
      sizeHtml +=
        '<label><input type="radio" name="size-' +
        index +
        '" value="' +
        s +
        '"><span>' +
        s +
        "</span></label>";
    });

    html +=
      '<article class="card" data-index="' +
      index +
      '">' +
      '<div class="card-media"><img src="img' +
      (index + 1) +
      '.jpg" alt="' +
      p.n +
      '" loading="lazy">' +
      '<span class="tag">' +
      p.g +
      "</span></div>" +
      '<div class="card-body">' +
      "<h3>" +
      p.n +
      "</h3>" +
      '<p class="price">' +
      peso(p.p) +
      "</p>" +
      '<p class="desc">' +
      p.d +
      "</p>" +
      '<p class="spec">' +
      p.s +
      "</p>" +
      '<fieldset class="size-picker"><legend>Size</legend>' +
      sizeHtml +
      "</fieldset>" +
      '<button type="button" class="button add-to-cart">Add to cart</button>' +
      '<p class="card-msg" role="status"></p>' +
      "</div></article>";
  });

  productGrid.innerHTML = html;
  var who = currentGender === "All" ? "" : currentGender + "'s ";
  filterStatus.textContent = "Showing " + count + " " + who + currentCategory;
}

// 3. MEN / WOMEN and CATEGORY buttons
function setGender(gender) {
  currentGender = gender;
  genderButtons.forEach(function (b) {
    b.setAttribute(
      "aria-pressed",
      b.dataset.gender === gender ? "true" : "false",
    );
  });
  showProducts();
}

genderButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    setGender(button.dataset.gender);
  });
});

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentCategory = button.dataset.category;
    categoryButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    button.setAttribute("aria-pressed", "true");
    showProducts();
  });
});

// the "Shop men" / "Shop women" buttons on the home page
document.querySelectorAll(".hero-gender").forEach(function (link) {
  link.addEventListener("click", function () {
    setGender(link.dataset.gender);
  });
});

// 4. ADD TO CART: needs a size first
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
    if (item.name === product.n && item.size === size) {
      found = item;
    }
  });

  if (found) {
    found.qty++;
  } else {
    cart.push({ name: product.n, price: product.p, size: size, qty: 1 });
  }

  message.textContent = "Added " + product.n + " (" + size + ")!";
  updateCart();

  // little pop on the cart number
  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");
});

// 5. REMOVE an item from the cart
cartItems.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    cart.splice(Number(event.target.dataset.index), 1);
    updateCart();
  }
});

// 6. CART TOTALS
function getTotals() {
  var subtotal = 0;
  cart.forEach(function (item) {
    subtotal += item.price * item.qty;
  });
  var shipping =
    subtotal === 0 || subtotal >= freeShippingOver ? 0 : shippingFee;
  return { subtotal: subtotal, shipping: shipping, total: subtotal + shipping };
}

function updateCart() {
  var totalQty = 0;
  var html = "";

  cart.forEach(function (item, index) {
    totalQty += item.qty;
    html +=
      '<li class="cart-row">' +
      "<span>" +
      item.name +
      " <small>Size " +
      item.size +
      " · Qty " +
      item.qty +
      "</small></span>" +
      "<span>" +
      peso(item.price * item.qty) +
      ' <button type="button" class="remove-btn" data-index="' +
      index +
      '">Remove</button></span>' +
      "</li>";
  });

  var t = getTotals();
  cartItems.innerHTML = html;
  document.getElementById("cart-subtotal").textContent = peso(t.subtotal);
  document.getElementById("cart-shipping").textContent =
    t.shipping === 0 ? "Free" : peso(t.shipping);
  document.getElementById("cart-total").textContent = peso(t.total);

  cartCount.textContent = totalQty;
  cartCount.hidden = totalQty === 0;
  cartEmpty.hidden = cart.length > 0;
  cartBox.hidden = cart.length === 0;
}

// 7. CHECKOUT: show the order popup with the animated check
checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var t = getTotals();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var payment = document.getElementById("payment").value;
  var itemsHtml = "";

  cart.forEach(function (item) {
    itemsHtml +=
      "<li><span>" +
      item.name +
      " (" +
      item.size +
      ") x " +
      item.qty +
      "</span><span>" +
      peso(item.price * item.qty) +
      "</span></li>";
  });

  document.getElementById("modal-text").textContent =
    "Thank you, " + name + "! We sent your receipt to " + email + ".";
  document.getElementById("modal-number").textContent =
    "Order #ORNG-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("modal-items").innerHTML = itemsHtml;
  document.getElementById("modal-total").textContent = peso(t.total);
  document.getElementById("modal-delivery").textContent =
    "Payment: " + payment + " · Estimated delivery: 3 to 5 working days.";

  cart = [];
  updateCart();
  checkoutForm.reset();
  openModal();
});

function openModal() {
  modal.hidden = false;
  document.body.classList.add("modal-open");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.getElementById("modal-close").addEventListener("click", function () {
  closeModal();
  location.hash = "#shop";
});
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

// 8. NAV: highlight the link of the section we are on
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
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
}

window.addEventListener("scroll", updateActiveNav);

// Start with all genders, on the Tops category
showProducts();
updateActiveNav();
