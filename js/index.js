const products = [
  {
    id: 1,
    image: "img/Discovery.jpg",
    productName: "Discovery 15\" F/5 Truss Tube Dobsonian Telescope",
    rating: 5,
    price: "2999.00",
    categories: ["dobsonian"]
  },
  {
    id: 2,
    image: "img/Orion.jpg",
    productName: "Orion Skyquest XT8I Intelliscope Dobsonian Telescope",
    rating: 5,
    price: "649.99",
    categories: ["reflector"]
  },
  {
    id: 3,
    image: "APM.jpg",
    productName: "APM 152/1200 APO Triplet",
    rating: 5,
    price: "12999.00",
    categories: ["refractor"]
  }
];

const categories = ["dobsonian", "reflector", "refractor"];

let cart = [];

// Return a number of products sequentially
function getProducts(number) {
  const result = [];

  for (let i = 0; i < number; i++) {
    result.push(products[i]);
  }

  return result;
}

// Return a list of products based on a category
function getProductsByCategory(categoryName) {
  const result = [];

  for (const product of products) {
    for (const category of product.categories) {
      if (category === categoryName) {
        result.push(product);
      }
    }
  }

  return result;
}

// Sort product based on supplied criteria
function sortProducts(productList, criteria) {
  if (criteria === "price") {
    //Do sorting
  }
}

// Add something to the cart based on its product ID
function addToCart(id) {
  for (const product of products) {
    if (product.id === id) {
      //Check to see if this item is already in the cart
      if (cart.length > 0) {
        for (const cartProduct of cart) {
          if (cartProduct.id === id) {
            cartProduct.quantity++;
          }
        }
      }
      else {
        let cartProduct = Object.assign({}, product);
        cartProduct.quantity = 1;
        cart.push(partProduct);
      }
    }
  }
}

// Remove something from the cart based on its product ID
function removeFromCart(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(id, 1);
    }
  }
}

//Save the cart to local storage
function saveCart() {
  const jsonCart = JSON.stringify(cart);

  localStorage.setItem("cart", jsonCart);
}

// Load the cart from local storage if it exists
function loadCart() {
  const jsonCart = localStorage.getItem("cart");

  if (jsonCart) {
    cart = JSON.parse(jsonCart);
  }
}

function drawCarousel() {
  const products = getProducts(1);

  const $carouselDiv = $("<div>");
  const $img = $("<img>");
  $img.prop("src", products[0].image);

  $carouselDiv.append($img);
  $("#carousel").append($carouselDiv);
}

drawCarousel();
