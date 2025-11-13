// ===== Select Elements =====

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle icon between bars and close (X)
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
});


const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupImg = document.getElementById("popupImg");
const popupName = document.getElementById("popupName");
const popupPrice = document.getElementById("popupPrice");
const quantityDisplay = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const increaseQty = document.getElementById("increaseQty");
const decreaseQty = document.getElementById("decreaseQty");
const purchaseBtn = document.getElementById("purchaseBtn");
const orderMessage = document.getElementById("orderMessage");

let basePrice = 0;
let quantity = 1;

// ===== Open Popup =====
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const price = parseInt(btn.getAttribute("data-price"));
    const img = btn.getAttribute("data-img");

    popup.style.display = "flex";
    popupName.textContent = name;
    popupImg.src = img;
    popupPrice.textContent = price;
    basePrice = price;
    quantity = 1;
    quantityDisplay.textContent = quantity;
    totalPrice.textContent = basePrice;
  });
});

// ===== Close Popup =====
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// ===== Quantity Increase / Decrease =====
increaseQty.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
  totalPrice.textContent = basePrice * quantity;
});

decreaseQty.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
    totalPrice.textContent = basePrice * quantity;
  }
});

// ===== Purchase Button =====
purchaseBtn.addEventListener("click", () => {
  popup.style.display = "none";
  orderMessage.classList.add("show");
  setTimeout(() => {
    orderMessage.classList.remove("show");
  }, 3000);
});