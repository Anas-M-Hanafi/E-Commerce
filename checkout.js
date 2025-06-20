// checkout.js
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // — Burger Menu (متوافق)
  const burger   = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => navLinks.classList.toggle("open"));
    document.addEventListener("click", e => {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove("open");
      }
    });
  }

  // — منطق Checkout Wizard
  const steps    = document.querySelectorAll(".checkout-steps .step");
  const contents = document.querySelectorAll(".step-content");
  let current    = 1;
  const total    = steps.length;

  function showStep(n) {
    steps.forEach(s => s.classList.toggle("active", +s.dataset.step === n));
    contents.forEach(c => {
      c.style.display = +c.dataset.step === n ? "" : "none";
    });
  }

  document.querySelectorAll(".next-step").forEach(btn =>
    btn.addEventListener("click", () => {
      if (current < total) current++;
      showStep(current);
    })
  );

  document.querySelectorAll(".prev-step").forEach(btn =>
    btn.addEventListener("click", () => {
      if (current > 1) current--;
      showStep(current);
    })
  );

  showStep(current);

  // — رسم محتويات السلة في الـ summary
  const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const counts = {};
  cart.forEach(id => counts[id] = (counts[id] || 0) + 1);

  const orderItemsUl = document.querySelector(".order-items ul");
  let subtotal = 0;
  Object.entries(counts).forEach(([id, qty]) => {
    const p = productsData[id];
    if (!p) return;
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${p.images.front}" alt="${p.name}" />
      <span>${p.name} × ${qty}</span>
      <span style="margin-left:auto;">$${(p.price * qty).toFixed(2)}</span>
    `;
    orderItemsUl.appendChild(li);
    subtotal += p.price * qty;
  });

  // — حساب وعرض المجاميع
  const shipping = subtotal > 0 ? 5 : 0;
  document.getElementById("subTot").textContent   = "$" + subtotal.toFixed(2);
  document.getElementById("shipFee").textContent = "$" + shipping.toFixed(2);
  document.getElementById("grandTot").textContent= "$" + (subtotal + shipping).toFixed(2);

  // — عند الضغط على زر Place Order
  document.getElementById("checkoutForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your purchase!");
    localStorage.removeItem("cartItems");
    window.location.href = "confirmation.html";
  });
});
