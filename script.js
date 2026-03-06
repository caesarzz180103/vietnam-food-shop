const storeData = {
  lastUpdated: "2026-03-06 00:20",
  contact: {
    seller: "阿郑",
    phone: "138-0000-0000",
    wechat: "vietnam-food-zheng",
  },
  products: [
    {
      id: "spring-roll",
      price: 32,
      stock: 15,
      image:
        "assets/spring-roll.svg",
    },
    {
      id: "pho",
      price: 28,
      stock: 20,
      image:
        "assets/pho.svg",
    },
    {
      id: "banh-mi",
      price: 24,
      stock: 12,
      image:
        "assets/banh-mi.svg",
    },
    {
      id: "coffee-kit",
      price: 79,
      stock: 8,
      image:
        "assets/coffee-kit.svg",
    },
  ],
};

const i18n = {
  "zh-CN": {
    pageTitle: "越南美食小铺",
    metaDescription: "个人越南美食售卖页，展示图片、价格、库存与联系方式。",
    navContact: "联系购买",
    languageLabel: "选择语言",
    heroEyebrow: "个人精选 · Vietnam Kitchen",
    heroTitle: "越南美食小铺<br />简洁下单，直接联系",
    heroDesc: "查看每款商品的图片、价格与可售数量。库存人工更新，下单前请先联系确认。",
    heroPrimary: "查看在售商品",
    heroSecondary: "联系我",
    productsTitle: "在售商品",
    productsSubtitle: "每张卡片显示价格与可售数量。",
    contactTitle: "联系方式",
    contactSubtitle: "优先微信联系，电话仅用于紧急确认。",
    stockLabel: "可售数量",
    currency: "¥",
    contact: {
      seller: "联系人",
      phone: "电话",
      wechat: "微信",
      note: "备注",
      noteText: "上海市内可面交，外地默认顺丰。",
    },
    updatedPrefix: "最后更新时间",
    products: {
      "spring-roll": {
        name: "越南春卷（6只）",
        desc: "含鲜虾与米粉，附鱼露蘸汁。",
      },
      pho: {
        name: "牛肉河粉（冷藏即食）",
        desc: "加热 3 分钟可食用，微辣。",
      },
      "banh-mi": {
        name: "越南法棍三明治",
        desc: "猪肝酱、腌萝卜、香菜经典口味。",
      },
      "coffee-kit": {
        name: "滴漏咖啡礼盒",
        desc: "含炼乳风味豆，附简易滴漏器。",
      },
    },
  },
  "vi-VN": {
    pageTitle: "Cửa Hàng Món Ăn Việt",
    metaDescription: "Trang bán đồ ăn Việt Nam cá nhân: ảnh, giá, số lượng và liên hệ.",
    navContact: "Liên hệ mua",
    languageLabel: "Chọn ngôn ngữ",
    heroEyebrow: "Lựa chọn cá nhân · Vietnam Kitchen",
    heroTitle: "Cửa hàng món ăn Việt<br />Đặt nhanh, liên hệ trực tiếp",
    heroDesc: "Xem hình ảnh, giá và số lượng còn lại của từng món. Vui lòng liên hệ trước khi đặt.",
    heroPrimary: "Xem sản phẩm",
    heroSecondary: "Liên hệ",
    productsTitle: "Sản phẩm đang bán",
    productsSubtitle: "Mỗi thẻ hiển thị giá và số lượng tồn.",
    contactTitle: "Thông tin liên hệ",
    contactSubtitle: "Ưu tiên nhắn tin WeChat, gọi điện cho trường hợp khẩn.",
    stockLabel: "Số lượng còn",
    currency: "CNY ",
    contact: {
      seller: "Người bán",
      phone: "Điện thoại",
      wechat: "WeChat",
      note: "Ghi chú",
      noteText: "Có thể giao trực tiếp trong nội thành Thượng Hải; ngoại tỉnh gửi SF Express.",
    },
    updatedPrefix: "Cập nhật lúc",
    products: {
      "spring-roll": {
        name: "Gỏi cuốn Việt (6 cuốn)",
        desc: "Tôm tươi, bún gạo và nước chấm nước mắm.",
      },
      pho: {
        name: "Phở bò (đông lạnh)",
        desc: "Hâm nóng 3 phút là dùng, vị cay nhẹ.",
      },
      "banh-mi": {
        name: "Bánh mì Việt Nam",
        desc: "Pate, đồ chua và rau mùi vị truyền thống.",
      },
      "coffee-kit": {
        name: "Hộp cà phê phin",
        desc: "Hạt hương sữa đặc, kèm dụng cụ phin cơ bản.",
      },
    },
  },
  "en-US": {
    pageTitle: "Vietnamese Food Shop",
    metaDescription: "Personal Vietnamese food storefront with photos, prices, stock, and contact info.",
    navContact: "Contact to Order",
    languageLabel: "Select language",
    heroEyebrow: "Personal Picks · Vietnam Kitchen",
    heroTitle: "Vietnamese Food Shop<br />Simple ordering, direct contact",
    heroDesc: "Browse each item with photos, price, and stock quantity. Please contact first to confirm availability.",
    heroPrimary: "View Products",
    heroSecondary: "Contact Me",
    productsTitle: "Available Products",
    productsSubtitle: "Each card shows price and available quantity.",
    contactTitle: "Contact",
    contactSubtitle: "WeChat is preferred. Use phone only for urgent confirmation.",
    stockLabel: "Stock",
    currency: "CNY ",
    contact: {
      seller: "Seller",
      phone: "Phone",
      wechat: "WeChat",
      note: "Note",
      noteText: "In-person handoff in Shanghai; SF Express for other cities.",
    },
    updatedPrefix: "Last updated",
    products: {
      "spring-roll": {
        name: "Vietnamese Fresh Spring Rolls (6)",
        desc: "Shrimp and rice noodles with fish sauce dip.",
      },
      pho: {
        name: "Beef Pho (chilled ready meal)",
        desc: "Heat for 3 minutes before serving; mildly spicy.",
      },
      "banh-mi": {
        name: "Vietnamese Banh Mi",
        desc: "Classic pate, pickles, and cilantro filling.",
      },
      "coffee-kit": {
        name: "Phin Coffee Gift Box",
        desc: "Condensed milk-style beans with a basic phin filter.",
      },
    },
  },
};

const supportedLangs = Object.keys(i18n);
const langSwitch = document.getElementById("lang-switch");

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  if (supportedLangs.includes(fromQuery)) {
    return fromQuery;
  }

  const fromStorage = localStorage.getItem("shop-language");
  if (supportedLangs.includes(fromStorage)) {
    return fromStorage;
  }

  return "zh-CN";
}

function formatPrice(lang, price) {
  if (lang === "zh-CN") {
    return `¥${price}`;
  }
  return `CNY ${price}`;
}

function renderProducts(lang) {
  const grid = document.getElementById("product-grid");
  const dict = i18n[lang];
  grid.innerHTML = "";

  storeData.products.forEach((product, index) => {
    const text = dict.products[product.id];
    const card = document.createElement("article");
    card.className = "product";
    card.style.animationDelay = `${0.08 * (index + 1)}s`;
    card.innerHTML = `
      <img src="${product.image}" alt="${text.name}" loading="lazy" />
      <div class="product__body">
        <h3 class="product__name">${text.name}</h3>
        <p class="product__meta">${text.desc}</p>
        <p class="product__meta">${dict.stockLabel}: ${product.stock}</p>
        <p class="product__price">${formatPrice(lang, product.price)}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderContact(lang) {
  const dict = i18n[lang];
  const c = storeData.contact;
  const el = document.getElementById("contact-card");

  el.innerHTML = `
    <div><strong>${dict.contact.seller}:</strong> ${c.seller}</div>
    <div><strong>${dict.contact.phone}:</strong> <a href="tel:${c.phone}">${c.phone}</a></div>
    <div><strong>${dict.contact.wechat}:</strong> ${c.wechat}</div>
    <div><strong>${dict.contact.note}:</strong> ${dict.contact.noteText}</div>
  `;
}

function renderLastUpdated(lang) {
  const dict = i18n[lang];
  document.getElementById("last-updated").textContent =
    `${dict.updatedPrefix}: ${storeData.lastUpdated}`;
}

function renderStaticText(lang) {
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;
  document.getElementById("meta-description").setAttribute("content", dict.metaDescription);

  document.getElementById("nav-contact-link").textContent = dict.navContact;
  document.getElementById("lang-label").textContent = dict.languageLabel;
  document.getElementById("hero-eyebrow").textContent = dict.heroEyebrow;
  document.getElementById("hero-title").innerHTML = dict.heroTitle;
  document.getElementById("hero-desc").textContent = dict.heroDesc;
  document.getElementById("hero-primary-btn").textContent = dict.heroPrimary;
  document.getElementById("hero-secondary-btn").textContent = dict.heroSecondary;
  document.getElementById("products-title").textContent = dict.productsTitle;
  document.getElementById("products-subtitle").textContent = dict.productsSubtitle;
  document.getElementById("contact-title").textContent = dict.contactTitle;
  document.getElementById("contact-subtitle").textContent = dict.contactSubtitle;
}

function renderLanguage(lang) {
  renderStaticText(lang);
  renderProducts(lang);
  renderContact(lang);
  renderLastUpdated(lang);
  langSwitch.value = lang;
  localStorage.setItem("shop-language", lang);
}

langSwitch.addEventListener("change", (event) => {
  renderLanguage(event.target.value);
});

renderLanguage(getInitialLanguage());
