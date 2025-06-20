"use strict";

// 1) بيانات كل منتج، بما فيها الوصف الاحترافي، الـ specs، والـ reviews
const productsData = {
  "1": {
    name: "Baellerry Men's Wallet, Gray, Faux Leather, Zipper Coin Pocket, 12 Card Slots, Mobile Pocket, Elegant Style",
    oldPrice: 44.00,
    price: 39.00,
    discount: 10,
    inStock: true,
    materials: ["Genuine Leather", "Metal Zipper"],
    images: {
      front: "images/product-1.jpg",
      back:  "images/product-1-back.jpg",
      left:  "images/product-1-left.jpg",
      right: "images/product-1-right.jpg"
    },
    features: [
      "Secure zip closure",
      "Slim profile",
      "6 card slots",
      "Dedicated coin pouch"
    ],
    specs: {
      "Product Dimensions":      "12 x 9.5 x 2 cm; 106 g",
      "Date First Available":    "2 January 2022",
      "Manufacturer":            "Baellerry",
      "ASIN":                    "B09PK6TBSH",
      "Country of origin":       "China",
      "Department":              "Men"
    },
    reviews: [
      { rating: 5, title: "Desktop performance in a laptop", text: "This wallet is beautifully crafted and super durable. Love the zip-around closure!", user: "TheBearcat" },
      { rating: 4, title: "Great but a bit bulky",      text: "High quality leather but I wish it was 1mm thinner to fit tighter in my pocket.", user: "Lily P." },
      { rating: 2, title: "Not worth the money",        text: "Zipper started sticking after a week. For this price I expected flawless hardware.", user: "TechGuy88" },
      { rating: 5, title: "Perfect gift!",              text: "Bought this for my husband, he uses it every day. Very stylish and functional.", user: "Noura A." }
    ],
    description:
      "Elevate your everyday carry with this premium full-grain leather wallet. Meticulously crafted for durability and style, " +
      "it features a secure zip closure, a slim profile, and an organized interior with multiple card slots and a coin pouch. " +
      "Perfect for both daily use and special occasions."
  },
  "2": {
    name: "Apple Watch Series 8",
    oldPrice: 360.00,
    price: 349.00,
    discount: 10,
    inStock: true,
    materials: ["Aluminum Case", "Ion-X Glass"],
    images: {
      front: "images/product-2.jpg",
      back:  "images/product-2-back.jpg",
      left:  "images/product-2-left.jpg",
      right: "images/product-2-right.jpg"
    },
    features: [
      "Always-On Retina display",
      "ECG & blood oxygen monitoring",
      "Water resistant 50m",
      "Sleep tracking"
    ],
    specs: {
      "Brand":            "Apple",
      "Case Material":    "Aluminum",
      "Glass":            "Ion-X Glass",
      "Compatibility":    "iOS",
      "Battery Life":     "Up to 18 hours",
      "Water Resistance": "50m"
    },
    reviews: [
      { rating: 5, title: "Outstanding battery life", text: "I love using this watch all day without charging.", user: "Mark T." },
      { rating: 4, title: "Excellent health tracking", text: "Heart rate and sleep tracking are very accurate.", user: "Sara B." },
      { rating: 2, title: "Fragile screen",           text: "The glass scratched after a week of normal use.", user: "Alex H." },
      { rating: 5, title: "Highly recommend",          text: "Sleek design and very responsive.", user: "Christine L." }
    ],
    description:
      "Apple Watch Series 10 GPS 42 mm Smartwatch with Rose Gold Aluminium Case with Light Blush Sport Band - S/M. Fitness Tracker, ECG App, Always-On Retina Display, Water Resistant"
  },
  "3": {
    name: "Baseball Cap For Unisex",
    oldPrice: 29.00,
    price: 24.00,
    discount: 10,
    inStock: true,
    materials: ["Polyester", "Spandex"],
    images: {
      front: "images/product-3-background.jpg",
      back:  "images/product-3-back.jpg"
    },
    features: [
      "Moisture-wicking fabric",
      "Adjustable strap",
      "Curved brim",
      "Lightweight design"
    ],
    specs: {
      "Brand":    "Lunar",
      "Material": "Polyester/Spandex",
      "Size":     "One Size Fits All",
      "Weight":   "2 oz",
      "Closure":  "Adjustable Strap",
      "Brim":     "Curved"
    },
    reviews: [
      { rating: 5, title: "Perfect fit and comfort", text: "Never felt sweatier thanks to moisture-wicking fabric.", user: "David P." },
      { rating: 4, title: "Nice design",             text: "Love the color and adjustable strap.", user: "Emma W." },
      { rating: 2, title: "Too tight",               text: "Adjustable strap still couldn't fit my head.", user: "Chris M." },
      { rating: 5, title: "Great for runs",          text: "Lightweight and stays in place.", user: "Fatima R." }
    ],
    description:
      "Unisex Baseball Cap The back of this hat can be adjusted to fit a range of heads, breathable and comfortable, " +
      "use your creativity to design unique and cool hats for you and your friends! Simple sublimation printing for a " +
      "distinctive mesh baseball cap. Features: -One size and unisex design fits most men and women. - Breathable and lightweight material."
  },
  "4": {
    name: "Cosmic Voyager Backpack",
    oldPrice: 89.00,
    price: 69.00,
    discount: 10,
    inStock: true,
    materials: ["Water-Resistant Polyester"],
    images: {
      front:  "images/product-4.jpg",
      inside: "images/product-4-inside.jpg",
      back:   "images/product-4-back.jpg"
    },
    features: [
      "Padded laptop compartment",
      "Multiple organizational pockets",
      "Ergonomic straps",
      "Water-resistant"
    ],
    specs: {
      "Brand":              "Cosmic",
      "Capacity":           "25 L",
      "Material":           "Water-Resistant Polyester",
      "Laptop Compartment": "15.6″",
      "Weight":             "1.2 lbs",
      "Straps":             "Ergonomic Padded"
    },
    reviews: [
      { rating: 5, title: "Super spacious", text: "I can fit my laptop and books easily.", user: "Zainab K." },
      { rating: 4, title: "Sturdy build",    text: "Heavy but feels very durable.", user: "Omar S." },
      { rating: 2, title: "Zipper broke",    text: "Zipper snapped after few uses.", user: "Nabil A." },
      { rating: 5, title: "My travel companion", text: "Perfect for weekend trips.", user: "Layla M." }
    ],
    description:
      "Embark on your adventures with the Cosmic Voyager Backpack. Made from durable, water-resistant polyester, it features ample storage including a padded laptop compartment, multiple pockets for organization, and ergonomic padded straps for all-day comfort."
  },
  "5": {
    name: "Stellar Slip-On Knit Sneaker",
    oldPrice: 99.00,
    price: 79.00,
    discount: 10,
    inStock: true,
    materials: ["Knit Upper", "Rubber Sole"],
    images: {
      front: "images/product-5.jpg",
      back:  "images/product-5-back.jpg"
    },
    features: [
      "Breathable knit upper",
      "Cushioned midsole",
      "Slip-on design",
      "Flexible outsole"
    ],
    specs: {
      "Product Dimensions":   "34.19 x 21.49 x 12.8 cm; 748.43 g",
      "Date First Available": "14 March 2024",
      "Manufacturer":         "Nike",
      "ASIN":                 "B0CSKNXLQP",
      "Item model number":    "FD6454",
      "Department":           "mens"
    },
    reviews: [
      { rating: 5, title: "So comfy",       text: "Feels like walking on clouds.", user: "Ali F." },
      { rating: 4, title: "Good design",    text: "Stylish and breathable.", user: "Mona G." },
      { rating: 2, title: "Wore out fast",  text: "The knit material frayed after a month.", user: "Youssef D." },
      { rating: 5, title: "Would buy again",text: "Great slip-on convenience.", user: "Sara N." }
    ],
    description:
      "Whether you're starting your running journey or an expert eager for a change of pace, the Downshifter 13 is ready for the ride. Made with Nike Grind material, breathable mesh, and updated cushioning."
  },
  "6": {
    name: "SAMSUNG 32\" Class QLED 4K Q60C Series",
    oldPrice: 470.00,
    price: 459.00,
    discount: 10,
    inStock: true,
    materials: ["Quantum Dot Display"],
    images: {
      front:  "images/product-6.jpg",
      back:   "images/product-6-back.jpg",
      inside: "images/product-6-inside.jpg"
    },
    features: [
      "Quantum Dot color",
      "4K UHD resolution",
      "Smart TV apps",
      "Slim design"
    ],
    specs: {
      "Brand":      "Samsung",
      "Screen Size":"32 inches",
      "Resolution": "3840×2160 (4K UHD)",
      "Panel Type": "QLED (Quantum Dot)",
      "Ports":      "3× HDMI, 2× USB",
      "Weight":     "7.3 lbs"
    },
    reviews: [
      { rating: 5, title: "Amazing picture quality", text: "Colors are so vibrant!", user: "John D." },
      { rating: 4, title: "Good value",              text: "Great 4K TV for the price.", user: "Huda M." },
      { rating: 2, title: "Sound is weak",           text: "Speakers are underpowered.", user: "Bilal O." },
      { rating: 5, title: "User-friendly",           text: "Smart TV interface is easy to navigate.", user: "Sara P." }
    ],
    description:
      "Transform your viewing experience with Samsung's Q60C 4K QLED TV. This 32\" display delivers vibrant colors and deep contrast thanks to Quantum Dot technology. Slim design, built-in streaming apps, and multiple HDMI ports make it a seamless addition to any living room."
  },
  "7": {
    name: "Samsung 22\" IPS Gaming Monitor",
    oldPrice: 99.99,
    price: 84.00,
    discount: 10,
    inStock: true,
    materials: ["IPS Panel"],
    images: {
      front:  "images/product-7.jpg",
      back:   "images/product-7-back.jpg",
      left:   "images/product-7-left.jpg",
      bottom: "images/product-7-bottom.jpg"
    },
    features: [
      "75Hz refresh rate",
      "5ms response time",
      "HDMI & VGA",
      "Tilt adjustment"
    ],
    specs: {
      "Brand":        "Samsung",
      "Screen Size":  "22 inches",
      "Resolution":   "1920×1080 (FHD)",
      "Refresh Rate": "75Hz",
      "Response Time":"5ms",
      "Inputs":       "HDMI, VGA"
    },
    reviews: [
      { rating: 5, title: "Excellent for gaming", text: "No ghosting at all.", user: "Ahmed K." },
      { rating: 4, title: "Bright display",      text: "Colors look accurate.", user: "Yasmin E." },
      { rating: 2, title: "Too small",            text: "22 inches is smaller than expected.", user: "Khaled B." },
      { rating: 5, title: "Great price",          text: "Can't beat this deal.", user: "Farah S." }
    ],
    description:
      "Samsung 22-Inch IPS Gaming Monitor with borderless design, VGA and HDMI inputs, 5ms response time, 75Hz refresh rate, AMD FreeSync support."
  },
  "8": {
    name: "PlayStation 5 Console (PS5)",
    oldPrice: 499.99,
    price: 495.00,
    discount: 10,
    inStock: true,
    materials: ["Plastic & Metal"], 
    images: {
      front: "images/product-8.jpg",
      back:  "images/product-8-back.jpg"
    },
    features: [
      "Ultra-high-speed SSD",
      "4K graphics",
      "3D audio",
      "DualSense controller"
    ],
    specs: {
      "Brand":    "Sony",
      "Storage":  "825 GB SSD",
      "Graphics": "4K / up to 8K",
      "Audio":    "3D Audio",
      "Weight":   "9.9 lbs",
      "Controller":"DualSense Wireless"
    },
    reviews: [
      { rating: 5, title: "Next-gen gaming is insane", text: "Load times are unbelievably fast.", user: "TheBearcat" },
      { rating: 4, title: "Awesome performance",          text: "Graphics are stunning.", user: "Miguel R." },
      { rating: 2, title: "Loud fan noise",               text: "Fan gets very noisy during gameplay.", user: "Natalie T." },
      { rating: 5, title: "Love the controller",          text: "Haptic feedback is a game-changer.", user: "Liam J." }
    ],
    description:
      "Dive into next-gen gaming with the PlayStation 5 Console. Experience lightning-fast loading with an ultra-high-speed SSD, stunning 4K graphics, and immersive 3D audio. Includes DualSense controller."
  },
  "9": {
    name: "PlayStation DualSense® Wireless Controller – White",
    oldPrice: 73.00,
    price: 65.00,
    discount: 10,
    inStock: true,
    materials: ["Plastic"],
    images: {
      front: "images/product-9.webp",
      back:  "images/product-9-back.jpg",
      left:  "images/product-9-left.jpg",
      right: "images/product-9-right.jpg",
      top:   "images/product-9-top.jpg"
    },
    features: [
      "Haptic feedback",
      "Adaptive triggers",
      "Built-in mic",
      "Wireless"
    ],
    specs: {
      "Brand":        "Sony",
      "Connectivity": "Bluetooth 5.1",
      "Battery Life":"Up to 12 hours",
      "Weight":      "10.2 oz",
      "Features":    "Haptic Feedback, Adaptive Triggers, Built-in Mic"
    },
    reviews: [
      { rating: 5, title: "Best controller ever", text: "Feels perfect in hand.", user: "Carla Z." },
      { rating: 4, title: "Great battery life",    text: "Lasts long enough for sessions.", user: "Omar D." },
      { rating: 2, title: "Triggers stick",        text: "Adaptive triggers occasionally stick.", user: "Samir M." },
      { rating: 5, title: "Perfect fit",           text: "Comfortable design and responsive buttons.", user: "Nadine L." }
    ],
    description:
      "Enhance your gameplay with the PS5 DualSense Wireless Controller. Enjoy advanced haptic feedback, adaptive triggers, and a built-in microphone—all in an ergonomic design."
  },
  "10": {
    name: "Microsoft Xbox One X 1TB Console",
    oldPrice: 290.00,
    price: 280.00,
    discount: 10,
    inStock: true,
    materials: ["Plastic"],
    images: {
      front: "images/product-10.jpg",
      back:  "images/Product-10-back.jpg",
      left:  "images/Product-10-left.jpg",
      right: "images/Product-10-right.jpg",
      top:   "images/Product-10-top.jpg",
      bottom:"images/Product-10-bottom.jpg"
    },
    features: [
      "True 4K gaming",
      "HDR support",
      "1TB storage",
      "Backward compatible"
    ],
    specs: {
      "Brand":         "Microsoft",
      "Storage":       "1 TB HDD",
      "Resolution":    "4K UHD",
      "HDR":           "Supported",
      "Weight":        "8.4 lbs",
      "Compatibility":"Backward Compatible"
    },
    reviews: [
      { rating: 5, title: "Solid performance",        text: "Plays 4K games smoothly.", user: "Ehab A." },
      { rating: 4, title: "Quiet operation",          text: "Runs quietly even under load.", user: "Sara Z." },
      { rating: 2, title: "Overheats",                text: "Console got very hot after 2 hours.", user: "Tamer R." },
      { rating: 5, title: "Great backward compatibility", text: "Old Xbox games run perfectly.", user: "Youssef F." }
    ],
    description:
      "Step up your gaming with the Xbox One X. With 1 TB of storage, true 4K gaming, HDR support, and the most powerful console hardware, enjoy smoother frame rates and higher resolutions."
  },
  "11": {
    name: "Dell Latitude 7420 14-inch Full HD Touchscreen",
    oldPrice: 439.00,
    price: 429.99,
    discount: 10,
    inStock: true,
    materials: ["Aluminum"],
    images: {
      front: "images/Product-11.jpg",
      top:   "images/Product-11-top.jpg",
      right: "images/Product-11-right.jpg",
      left:  "images/Product-11-left.jpg",
      back:  "images/Product-11-back.jpg"
    },
    features: [
      "Intel Core i7",
      "16 GB RAM",
      "512 GB SSD",
      "Long battery life"
    ],
    specs: {
      "Brand":                    "Dell",
      "Model Name":               "Latitude 7420",
      "Screen Size":              "14 Inches",
      "Color":                    "Carbon Fiber",
      "Hard Disk Size":           "1 TB",
      "CPU Model":                "Intel Core i7-1185G7",
      "Ram Memory Installed Size":"32 GB",
      "Operating System":         "Windows 11 Pro",
      "Special Feature":          "HD Audio, Backlit Keyboard",
      "Graphics Card Description":"Integrated"
    },
    reviews: [
      { rating: 5, title: "Light and fast",        text: "Ideal for travel and work.", user: "Hana A." },
      { rating: 4, title: "Excellent battery",     text: "Battery lasts me 8 hours.", user: "Omar Y." },
      { rating: 2, title: "Screen flicker",        text: "Screen flickered occasionally.", user: "Mariam S." },
      { rating: 5, title: "Highly recommended for professionals", text: "Very reliable performance.", user: "Salma K." }
    ],
    description:
      "Dell Latitude 7420 14-inch Full HD Touchscreen Business Laptop 11th Gen Intel Core i7-1185G7, 32GB RAM, 1TB SSD, Windows 11 Pro."
  },
  "12": {
    name: "MSI Thin 15 15.6” 144Hz FHD Gaming Laptop",
    oldPrice: 773.99,
    price: 768.99,
    discount: 10,
    inStock: true,
    materials: ["Aluminum Alloy"],
    images: {
      front: "images/Product-12.jpg",
      back:  "images/Product-12-back.jpg",
      left:  "images/Product-12-left.jpg",
      right: "images/Product-12-right.jpg",
      top:   "images/Product-12-top.jpg"
    },
    features: [
      "144Hz refresh rate",
      "Intel Core i7",
      "NVIDIA GeForce GPU",
      "Advanced cooling"
    ],
    specs: {
      "Brand":                          "MSI",
      "Model Name":                     "Thin 15 B12UCX-2041US",
      "Screen Size":                    "15.6 Inches",
      "Color":                          "Black",
      "Hard Disk Size":                 "512 GB",
      "CPU Model":                      "Intel Core i5-12450H",
      "Ram Memory Installed Size":      "16 GB",
      "Operating System":               "Windows 11 Home",
      "Special Feature":                "HD Audio, Backlit Keyboard",
      "Graphics Card Description":      "RTX 2050"
    },
    reviews: [
      { rating: 5, title: "Gaming powerhouse",      text: "Runs AAA titles smoothly.", user: "Karim H." },
      { rating: 4, title: "Good cooling",           text: "Runs cool even under load.", user: "Rita M." },
      { rating: 2, title: "Keyboard flex",          text: "Keyboard flexes under typing.", user: "Mahmoud E." },
      { rating: 5, title: "Portable and powerful",  text: "Great combo of thin chassis and performance.", user: "Aya F." }
    ],
    description:
      "MSI Thin 15 15.6” 144Hz FHD Gaming Laptop: Intel Core i5-12450H, NVIDIA GeForce RTX 2050, 16GB DDR5, 512GB NVMe SSD, Cooler Boost 5, Windows 11 Home."
  },
  "13": {
    name: "MSI Katana 15 15.6” 165Hz QHD Gaming Laptop",
    oldPrice: 1399.00,
    price: 1394.00,
    discount: 10,
    inStock: true,
    materials: ["Aluminum"],
    images: {
      front:  "images/Product-13.jpg",
      back:   "images/Product-13-back.jpg",
      left:   "images/Product-13-left.jpg",
      right:  "images/Product-13-thumb1.jpg",
      top:    "images/Product-13-inside.jpg",
      thumb1: "images/Product-13-right.jpg"
    },
    features: [
      "165Hz QHD display",
      "Powerful GPU",
      "Thermal Boost",
      "RGB keyboard"
    ],
    specs: {
      "Brand":                         "MSI",
      "Model Name":                    "Katana 15 B13VGK-2000US",
      "Screen Size":                   "15.6 Inches",
      "Color":                         "Black",
      "Hard Disk Size":                "1 TB",
      "CPU Model":                     "Intel Core i7-13620H",
      "Ram Memory Installed Size":     "16 GB",
      "Operating System":              "Windows 11 Home",
      "Special Feature":               "HD Audio, Backlit Keyboard",
      "Graphics Card Description":     "RTX 4070"
    },
    reviews: [
      { rating: 5, title: "Stunning visuals", text: "QHD resolution is amazing.", user: "Fatma K." },
      { rating: 4, title: "Solid performance", text: "Handles heavy games well.", user: "Adel M." },
      { rating: 2, title: "Battery life poor", text: "Needs charging after 2 hours of gaming.", user: "Nour S." },
      { rating: 5, title: "Excellent cooling", text: "Advanced thermal design works great.", user: "Sara H." }
    ],
    description:
      "MSI Katana 15 15.6” 165Hz QHD Gaming Laptop: Intel Core i7-13620H, NVIDIA GeForce RTX 4070, 16GB DDR5, 1TB NVMe SSD, Cooler Boost 5, Windows 11 Home."
  }
};

// 2) مصفوفة products بسيطة للصفحة الرئيسية وصفحة الـ Cart
const products = Object.entries(productsData).map(([id, p]) => ({
  id:    parseInt(id, 10),
  name:  p.name,
  price: p.price,
  image: p.images.front
}));

// 3) جميع العمليات بعد تحميل الـ DOM
document.addEventListener("DOMContentLoaded", () => {
  // 3.1) تحديث عداد السلة
  const cartCountEl = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (cartCountEl) cartCountEl.textContent = cart.length;

  // 3.2) ربط أزرار "Add to Cart"
  document.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.dataset.id, 10);
      cart.push(productId);
      localStorage.setItem("cartItems", JSON.stringify(cart));
      if (cartCountEl) cartCountEl.textContent = cart.length;
    });
  });

  // 3.3) صفحة Cart (cart.html)
  if (document.querySelector(".cart-items")) {
    const container = document.querySelector(".cart-items");
    container.innerHTML = "";

    if (cart.length === 0) {
      container.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
    } else {
      cart.forEach(id => {
        const p = productsData[id];
        if (!p) return;
        const item = document.createElement("div");
        item.className = "cart-item";
        item.dataset.id = id;
        item.innerHTML = `
          <img src="${p.images.front}" alt="${p.name}" />
          <div class="item-details">
            <h3>${p.name}</h3>
            <p class="item-price">$${p.price.toFixed(2)}</p>
          </div>
          <div class="quantity-selector">
            <label for="qty-${id}">Qty:</label>
            <input type="number" id="qty-${id}" class="item-qty" value="1" min="1"/>
          </div>
          <div class="item-total">$${p.price.toFixed(2)}</div>
          <button class="remove-btn" title="Remove item">&times;</button>
        `;
        container.appendChild(item);
      });

      const updateTotals = () => {
        let subtotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
          const price = parseFloat(item.querySelector(".item-price").textContent.slice(1));
          const qty   = parseInt(item.querySelector(".item-qty").value, 10);
          const total = price * qty;
          item.querySelector(".item-total").textContent = "$" + total.toFixed(2);
          subtotal += total;
        });
        const shipping = subtotal > 0 ? 5 : 0;
        document.getElementById("summary-subtotal").textContent = "$" + subtotal.toFixed(2);
        document.getElementById("summary-shipping").textContent = "$" + shipping.toFixed(2);
        document.getElementById("summary-total").textContent    = "$" + (subtotal + shipping).toFixed(2);
      };

      document.querySelectorAll(".item-qty").forEach(input => {
        input.addEventListener("change", () => {
          if (input.value < 1) input.value = 1;
          updateTotals();
        });
      });
      document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const card = btn.closest(".cart-item");
          const id   = parseInt(card.dataset.id, 10);
          const idx  = cart.indexOf(id);
          if (idx > -1) {
            cart.splice(idx, 1);
            localStorage.setItem("cartItems", JSON.stringify(cart));
            if (cartCountEl) cartCountEl.textContent = cart.length;
            card.remove();
            if (cart.length === 0) {
              container.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
            } else {
              updateTotals();
            }
          }
        });
      });
      updateTotals();
    }
  }

  // 3.4) صفحة Product Details (product-details.html) مع نموذج المراجعات الديناميكي
  const params = new URLSearchParams(window.location.search);
  const pid    = params.get("id");
  if (pid && productsData[pid] && document.querySelector(".product-details")) {
    const p = productsData[pid];

    // عرض البيانات الأساسية
    document.querySelector(".product-details .title").textContent    = p.name;
    document.querySelector(".original-price").textContent           = `$${p.oldPrice.toFixed(2)}`;
    document.querySelector(".discounted-price").textContent         = `$${p.price.toFixed(2)}`;
    document.querySelector(".badge-discount").textContent           = `${p.discount}% OFF`;
    document.querySelector(".in-stock").textContent                 = p.inStock ? "In Stock" : "Out of Stock";
    document.querySelector(".desc-text").textContent                = p.description;

    // جدول المواصفات
    const specsTable = document.querySelector(".spec-table");
    specsTable.innerHTML = Object.entries(p.specs)
      .map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`)
      .join("");

    // قائمة الميزات
    const featEl = document.querySelector(".key-features");
    featEl.innerHTML = p.features.map(f => `<li>${f}</li>`).join("");

    // معرض الصور
    document.getElementById("currentImage").src = p.images.front;
    const thumbs = document.querySelector(".thumbnails");
    thumbs.innerHTML = Object.values(p.images)
      .map((src, i) => `<img class="thumb${i===0 ? " active" : ""}" data-src="${src}" src="${src}" />`)
      .join("");
    thumbs.querySelectorAll("img").forEach(t => {
      t.addEventListener("click", () => {
        document.getElementById("currentImage").src = t.dataset.src;
        thumbs.querySelectorAll("img").forEach(x => x.classList.remove("active"));
        t.classList.add("active");
      });
    });

    // نموذج ومراجعات ديناميكية
    const reviewsContainer = document.querySelector("#reviews .review-list");
    const writeBtn         = document.getElementById("writeReviewBtn");
    const formContainer    = document.getElementById("reviewFormContainer");
    const form             = document.getElementById("reviewForm");

    const storageKey    = `reviews_${pid}`;
    let storedReviews   = JSON.parse(localStorage.getItem(storageKey) || "[]");

    function renderReview(r) {
      const html = `
        <div class="review-item">
          <div class="user-info">
            <i class="fa fa-user-circle avatar"></i>
            <strong>${r.user}</strong>
          </div>
          <div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
          <h3 class="review-title">${r.title}</h3>
          <p class="review-text">${r.text}</p>
        </div>`;
      reviewsContainer.insertAdjacentHTML("afterbegin", html);
    }

    reviewsContainer.innerHTML = "";
    p.reviews.concat(storedReviews).forEach(renderReview);

    writeBtn.addEventListener("click", () => {
      formContainer.style.display =
        formContainer.style.display === "none" ? "block" : "none";
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      const newRev = {
        user:   document.getElementById("revUser").value.trim(),
        rating: parseInt(document.getElementById("revRating").value, 10),
        title:  document.getElementById("revTitle").value.trim(),
        text:   document.getElementById("revText").value.trim()
      };
      storedReviews.unshift(newRev);
      localStorage.setItem(storageKey, JSON.stringify(storedReviews));
      renderReview(newRev);
      form.reset();
      formContainer.style.display = "none";
    });
  }
});
