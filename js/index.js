// function drawCarousel() {
//   const products = getProducts(3);
//
//   for (const product of products) {
//     const $carouselDiv = $("<div>").addClass("mySlides fade");
//     const $img = $("<img>").attr("src", product.image);
//     const $caption = $("<div>").addClass("text").text("Caption!");
//     const $br = $("<br>");
//
//     $carouselDiv.append($img, $caption, $br);
//     $(".slideshow-container").append($carouselDiv);
//   }
//
//   const $dotDiv = $("<div>");
//   $dotDiv.css("text-align: center");
//
//   for (let i = 1; i <= products.length; i++) {
//     const $dot = $("<span>").addClass("dot");
//     $dot.click(() => {
//       currentSlide(i);
//     });
//     $dotDiv.append($dot);
//   }
//
//   $(".col.s12.center").append($dotDiv);
//
//   showSlides(1);
// }

$("#signup").submit(function(event) {
  event.preventDefault();

  $("#name").val("");
  $("#email").val("");
  Materialize.toast("Thank you for signing up.", 4000);
});

function drawFeaturedProducts() {
  const featuredProducts = getProducts(3);

  for (const product of featuredProducts) {
    const $colDiv = $("<div>").addClass("col s4");
    const $cardDiv = $("<div>").addClass("card");
    const $cardImageDiv = $("<div>").addClass("card-image");
    const $cardImage = $("<img>").addClass("product-image");
    const $cardTitle = $("<span>").addClass("card-title");
    const $cardButton = $("<a>").addClass("btn-floating btn-large halfway-fab waves-effect waves-light amber accent-3");
    const $cardIcon = $("<i>").addClass("material-icons light-blue-text text-darken-4").text("add_shopping_cart");
    const $cardContent = $("<div>").addClass("card-content");

    const $productName = $("<p>").addClass("truncate");
    const $productPrice = $("<p>");
    const $productRating = getRatingElements(product.id);

    // $cardDiv.attr("id", `product-${product.id}`);
    $cardImage.attr("src", product.image);
    $productName.text(product.name);
    $productPrice.text(formatCurrency(product.price));

    $cardButton.data("product-id", product.id);

    $cardButton.click(function() {
      addToCart(jQuery.data(this, "product-id"));
      saveCart();
      updateCartDisplay();
    });

    $cardButton.append($cardIcon);
    $cardImageDiv.append($cardImage, $cardTitle, $cardButton);
    $cardContent.append($productName, $productPrice, $productRating);

    $cardDiv.append($cardImageDiv, $cardContent);
    $colDiv.append($cardDiv);

    $("#featuredProd").append($colDiv);
  }
}

// drawCarousel();
showSlides(1);
drawFeaturedProducts();
loadCart();
updateCartDisplay();

// this is to initilize modals ***jam
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
// this is to initilize modals ***jam
