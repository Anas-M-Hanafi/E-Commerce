// script.js

document.addEventListener('DOMContentLoaded', () => {
  // -- Burger Menu --
  const burger   = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // -- Swiper Carousel --
  if (typeof Swiper !== 'undefined' && document.querySelector('.gallery-swiper')) {
    new Swiper('.gallery-swiper', {
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
    });
  }

  // -- Personalization: Viewed & Recommendations --
  const params = new URLSearchParams(window.location.search);
  const pid = params.get('id');
  if (pid) {
    let viewed = JSON.parse(localStorage.getItem('viewed') || '[]');
    if (!viewed.includes(pid)) viewed.push(pid);
    viewed = viewed.slice(-5);
    localStorage.setItem('viewed', JSON.stringify(viewed));
  }
  const recGrid = document.querySelector('.rec-grid');
  if (recGrid) {
    const viewedIds = JSON.parse(localStorage.getItem('viewed') || '[]');
    viewedIds.forEach(id => {
      const p = productsData[id];
      if (!p) return;
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = id;
      card.innerHTML = `
        <img src="${p.images.front}" alt="${p.name}" loading="lazy"/>
        <h3>${p.name}</h3>
        <p class="price">$${p.price.toFixed(2)}</p>
        <button class="btn-add-cart" data-id="${id}">Add to Cart</button>
      `;
      recGrid.appendChild(card);
    });
  }

  // -- Wishlist --
  const wishBtn = document.getElementById('wishBtn');
  if (wishBtn && pid) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishBtn.textContent = wishlist.includes(pid)
      ? '♥ In Wishlist'
      : '♡ Add to Wishlist';
    wishBtn.addEventListener('click', () => {
      if (wishlist.includes(pid)) {
        wishlist = wishlist.filter(x => x !== pid);
      } else {
        wishlist.push(pid);
      }
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      wishBtn.textContent = wishlist.includes(pid)
        ? '♥ In Wishlist'
        : '♡ Add to Wishlist';
    });
  }

  // -- Rating Filter --
  const filterInput = document.getElementById('ratingFilter');
  if (filterInput) {
    filterInput.addEventListener('change', () => {
      const minRate = +filterInput.value;
      document.querySelectorAll('.product-card').forEach(card => {
        const rate = +card.dataset.rating || 0;
        card.style.display = rate >= minRate ? '' : 'none';
      });
    });
  }

  // -- Product Card Click → Details Page --
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-add-cart')) return; // ignore clicks on Add to Cart
      const id = card.dataset.id;
      window.location.href = `product-details.html?id=${id}`;
    });
  });
});
