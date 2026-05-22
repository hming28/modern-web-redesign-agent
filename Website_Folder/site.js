const nav = [
  ["Menu", "menu.html"],
  ["Locations", "location.html"],
  ["Opportunities", "opportunities.html"],
  ["About Us", "aboutus.html"],
];

const menuLinks = [
  ["Soymilk", "soymilk.html"],
  ["Taufufa", "taufufa.html"],
  ["Cakoi", "cakoi.html"],
  ["Snacks", "snacks.html"],
  ["Soft Serve", "softserve.html"],
  ["Others", "others.html"],
];

const links = {
  facebook: "https://www.facebook.com/ikosoya",
  instagram: "https://www.instagram.com/ikosoya/?hl=en",
  whatsapp: "https://api.whatsapp.com/message/LQTYOAJ4B3U6H1?autoload=1&app_absent=0",
  linktree: "https://linktr.ee/ikosoya",
  apply: "https://docs.google.com/forms/d/e/1FAIpQLSeraP_VbFDl2mSZmx5lZkVyzEaAhPoiqr4FrB_wWgYvoGmZjw/viewform?usp=dialog",
  map: "https://www.google.com/maps/place/I-KO+Soya+%E4%B8%80%E5%8F%A3%E8%B1%86%E8%8A%B1/@5.931348,116.0707548,15z/data=!4m6!3m5!1s0x323b694c3b0a3bd7:0x9c34af4290bc88a4!8m2!3d5.931348!4d116.0707548!16s%2Fg%2F11v5bk7zj6?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
};

const categories = [
  ["Soymilk Series", "soymilk.html", "/MENU_PHOTO/Dine_In(350ml).png", "Fresh, creamy soymilk served classic, bottled, or layered with jelly, red bean, boba, and purple potato.", "Plant-based refreshment"],
  ["Taufufa Series", "taufufa.html", "/No_background/IKO_Signature.PNG", "Silky soybean pudding with traditional syrups, chewy tangyuan, grass jelly, and signature toppings.", "Signature dessert"],
  ["Cakoi Series", "cakoi.html", "/MENU_PHOTO/Mayo_Chicken_Floss.png", "Golden fried cakoi, from classic plain to sweet kaya, chocolate, cheese, tuna, and savory shrimp paste.", "Crisp comfort bites"],
  ["Snacks Series", "snacks.html", "/No_background/Tofu_Fries.PNG", "Crispy tofu fries, mushrooms, popiah, sweet potato balls, and plant-based nuggets for sharing.", "Made for snacking"],
  ["Soft Serve Series", "softserve.html", "/No_background/Iko_Classic_Sundae.PNG", "Smooth soy soft serve and tropical sundaes with gula melaka, coconut, and grass jelly.", "Cool soy cream"],
  ["Others Series", "others.html", "/No_background/soy_pudding.PNG", "Rotating soy-based sweets and comfort sides including pudding, cake, wedges, and plant-based mains.", "Creative extras"],
];

const featured = [
  ["Purple Potato Soymilk", "soymilk.html#purplepotatosoymilk", "/MENU_PHOTO/Purple_Potato_Soymilk.png", "Creamy soymilk blended with naturally sweet purple potato for a vivid, comforting drink.", "Featured drink", true],
  ["IKO Signature Taufufa", "taufufa.html#iko-singnature", "/No_background/IKO_Signature.PNG", "Silky soy pudding with grass jelly, red bean, and pumpkin tangyuan.", "House signature"],
  ["Shrimp Paste Cakoi", "cakoi.html#shrimppaste", "/MENU_PHOTO/Shrimp_Paste.png", "Golden cakoi with bold shrimp paste flavor and a deeply savory finish.", "Savory favorite"],
  ["Tofu Fries", "snacks.html#tofufries", "/No_background/Tofu_Fries.PNG", "Tender tofu in a crisp golden coating, built for dipping and sharing.", "Snack pick"],
];

const series = {
  soymilk: {
    video: "/Video/soymilk_heading.mp4",
    eyebrow: "Soymilk Series",
    title: "Fresh soy comfort, served your way.",
    intro: "Rich, creamy, and nutrient-packed, soymilk is a versatile drink crafted from soybeans. Enjoy it classic, chilled, or layered with toppings that make every sip more textured.",
    note: "Choose your syrup: White Sugar, Gula Melaka, Ginger Sugar, or Chrysanthemum Sugar.",
    products: [
      ["Hot Classic Soymilk", "/MENU_PHOTO/Dine_In(350ml).png", "RM 5.50", "Warm, smooth, and naturally nutty, made for a soothing drink with your preferred syrup.", "Classic"],
      ["Cold Bottled Soymilk", "/MENU_PHOTO/Takeaway(500ml).png", "RM 6.50", "A chilled takeaway bottle of creamy soymilk with a clean finish and customizable sweetness."],
      ["Grass Jelly Soymilk", "/MENU_PHOTO/Grass_Jelly_Soymilk.png", "RM 7.90", "Smooth soymilk with cooling grass jelly for a light, refreshing texture contrast.", "Popular"],
      ["Red Bean Soymilk", "/MENU_PHOTO/Red_Bean_Soymilk.png", "RM 7.90", "Creamy soymilk with soft red beans for gentle sweetness and a comforting bite."],
      ["Coconut Jelly Soymilk", "/MENU_PHOTO/Water_Chestnut_Popping_Boba_Soymilk.png", "RM 7.90", "A tropical soy drink with chewy jelly texture and a naturally sweet finish."],
      ["Water Chestnut Popping Boba Soymilk", "/MENU_PHOTO/Water_Chestnut_Popping_Boba_Soymilk.png", "RM 8.50", "Creamy soymilk with crisp water chestnut notes and playful popping boba."],
      ["Purple Potato Soymilk", "/MENU_PHOTO/Purple_Potato_Soymilk.png", "RM 8.50", "Velvety purple potato blended with soymilk for an earthy, vivid, and nourishing drink.", "Featured", "purplepotatosoymilk", true],
    ],
    extra: "sugar",
  },
  taufufa: {
    video: "/Video/taufufa_heading.mp4",
    eyebrow: "Taufufa Series",
    title: "Silky soybean pudding with a local soul.",
    intro: "A traditional soybean pudding with a delicate texture that melts in your mouth. It is light, soothing, and shaped by toppings that move from classic to playful.",
    products: [
      ["IKO Signature", "/No_background/IKO_Signature.PNG", "RM 10.90", "Soy pudding topped with grass jelly, red bean, and soft pumpkin tangyuan.", "Signature", "iko-singnature", false, "Grass jelly, red bean, pumpkin tangyuan"],
      ["Perfect Two", "/No_background/Perfect_Two.PNG", "RM 9.50", "Soy pudding with refreshing grass jelly and sweet, chewy peach gum.", "", "", false, "Grass jelly, peach gum"],
      ["Purple Lover", "/No_background/Purple_Lover.png", "RM 9.50", "Soy pudding with sweet potato balls and rich purple potato paste.", "", "", true, "Sweet potato balls, purple potato paste"],
      ["The Three Musketeers", "/No_background/The_Three_Musketeers.PNG", "RM 11.50", "A layered mix of crushed peanuts, sweet potato balls, and red bean over silky pudding.", "Popular", "", false, "Crushed peanut, sweet potato balls, red bean"],
      ["Plain Taufufa", "/No_background/Taufufa_plain.PNG", "RM 5.30", "A smooth, simple soybean pudding base ready for your favorite syrup and toppings.", "", "", false, "Customize your bowl"],
    ],
    after: "taufufa",
  },
  cakoi: {
    video: "/Video/cakoi_heading.mp4",
    eyebrow: "Cakoi Series",
    title: "Golden cakoi, crisp outside and soft inside.",
    intro: "A timeless comfort snack made modern with sweet, creamy, cheesy, and savory combinations. Enjoy it plain, dipped, or topped for a bigger bite.",
    products: [
      ["Cakoi Plain", "/MENU_PHOTO/Plain.png", "RM 2.50", "Crispy, airy, golden fried dough with a soft center. Simple, classic, and deeply comforting."],
      ["Homemade Pandan Kaya Cakoi", "/MENU_PHOTO/Homemade_Pandan_Kaya.png", "RM 5.90", "Crisp cakoi paired with fragrant homemade pandan kaya made with coconut notes."],
      ["Cocoa Chocolate Sauce Cakoi", "/MENU_PHOTO/Cocoa_Chocolate_Sauce.png", "RM 5.90", "A sweet dessert-style cakoi finished with rich cocoa chocolate sauce."],
      ["Mayo Chicken Floss Cakoi", "/MENU_PHOTO/Mayo_Chicken_Floss.png", "RM 6.90", "Creamy mayo and fluffy chicken floss over golden cakoi for a savory snack.", "Popular"],
      ["Cheesy Chicken Sausage Cakoi", "/MENU_PHOTO/Cheesy_Chicken_Sausage.png", "RM 11.90", "Chicken sausage and melted cheese meet crisp cakoi for a satisfying bite."],
      ["Cheesy Tuna Cakoi", "/MENU_PHOTO/Cheesy_Tuna.png", "RM 12.90", "Tuna, mayo, and melted cheese layered on crispy cakoi for a creamy savory finish.", "Popular"],
      ["Shrimp Paste Cakoi", "/MENU_PHOTO/Shrimp_Paste.png", "RM 13.90", "A bold Southeast Asian-inspired cakoi with deep umami shrimp paste flavor.", "Featured", "shrimppaste"],
    ],
  },
  snacks: {
    video: "/Video/snacks_heading.mp4",
    eyebrow: "Snacks Series",
    title: "Plant-forward bites for every craving.",
    intro: "Crispy, savory, and satisfying snacks made for sharing. This series adds variety around the soy dessert core with vegetables, tofu, and plant-based comfort foods.",
    products: [
      ["Fried Enoki Mushroom", "/MENU_PHOTO/Fried_Enoki_Mushroom.png", "RM 8.90", "Delicate enoki mushrooms in a light golden coating with earthy umami flavor."],
      ["Vege Popiah", "/MENU_PHOTO/vege_popiah.jpg", "RM 8.90", "Soft popiah wrappers filled with crunchy vegetables, herbs, and light seasoning."],
      ["Tofu Fries", "/No_background/Tofu_Fries.PNG", "RM 9.50", "Crisp outside and tender inside, served as a creamy-crunchy tofu snack.", "Featured", "tofufries"],
      ["Spinach & Cheese Rice Bites", "/MENU_PHOTO/spicy_cheese_bites.jpg", "RM 9.50", "Warm rice bites with spinach and cheese flavor in a golden snackable form."],
      ["Fried Sweet Potato Balls", "/MENU_PHOTO/fried_sweet_potato_balls.jpg", "RM 10.50", "Golden sweet potato balls with a crisp shell and soft naturally sweet center.", "Popular"],
      ["Plant Based Nuggets", "/MENU_PHOTO/plant_base_nuggets.jpg", "RM 10.50", "Meat-free nuggets with a crisp coating and savory plant-based bite."],
    ],
  },
  softserve: {
    video: "/Video/soft_serve_heading.mp4",
    eyebrow: "Soft Serve Series",
    title: "Cool soy cream with a tropical finish.",
    intro: "Luxuriously creamy and refreshing, the soft serve series turns soy milk into a light dessert with classic and gula melaka-inspired pairings.",
    products: [
      ["Plain Soy Soft Serve", "/No_background/Plain_Soy_Soft_Serve.PNG", "RM 5.50", "Pure soy soft serve with a smooth texture, low sweetness, and clean soybean aroma."],
      ["IKO Classic Sundae", "/No_background/Iko_Classic_Sundae.PNG", "RM 8.00", "Soy soft serve with gula melaka syrup, coconut flakes, and silky grass jelly.", "Signature"],
    ],
  },
  others: {
    video: "/Video/others_heading.mp4",
    eyebrow: "Others Series",
    title: "Creative extras beyond the core menu.",
    intro: "A rotating mix of soy-based sweets and comfort foods, bringing together traditional influence, modern flavors, and seasonal ideas.",
    products: [
      ["Soy Pudding", "/MENU_PHOTO/pudding.jpg", "RM 5.00", "Smooth, creamy soy pudding with a silky plant-based texture and gentle sweetness."],
      ["Soymilk Box Cake", "/MENU_PHOTO/butter_cake.jpg", "Out of stock", "Soft cake layered with soy-based cream for a nutty, melt-in-your-mouth dessert."],
      ["Plant-Based Chicken Chop", "/MENU_PHOTO/chicken_chop.jpg", "Out of stock", "Plant-based protein served as a comforting meat-free main with cheese sauce."],
      ["Wedges", "/MENU_PHOTO/wedges.jpg", "Out of stock", "Golden potato wedges with a crisp outside and fluffy center."],
    ],
  },
};

function html(strings, ...values) {
  return strings.reduce((out, string, index) => out + string + (values[index] ?? ""), "");
}

function header(active) {
  const activeSlug = { menu: "menu", locations: "locations", opportunities: "opportunities", about: "about-us" }[active];
  return html`<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" aria-label="Primary navigation">
    <div class="nav-shell">
      <a class="brand-link" href="index.html" aria-label="I-KO Soya home">
        <img src="/image/logo_nb.png" alt="I-KO Soya logo" class="brand-logo">
      </a>
      <nav class="desktop-nav" aria-label="Main menu">
        ${nav.map(([label, href]) => {
          const slug = label.toLowerCase().replaceAll(" ", "-");
          const current = slug === activeSlug ? ' aria-current="page"' : "";
          return `<a href="${href}" data-nav="${slug}"${current}>${label}</a>`;
        }).join("")}
      </nav>
      <div class="nav-actions">
        <button class="icon-button" id="themeToggle" type="button" aria-label="Switch color theme"><i class="fa-regular fa-sun" aria-hidden="true"></i></button>
        <button class="icon-button" id="audioToggle" type="button" aria-label="Play background music"><i class="fa-solid fa-volume-xmark" aria-hidden="true"></i></button>
        <button class="icon-button menu-toggle" id="menuToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
      </div>
    </div>
    <nav class="mobile-menu" id="mobileMenu" aria-label="Mobile menu">${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav>
    <audio id="backgroundAudio" loop preload="none"><source src="/Video/jazz_music.m4a" type="audio/mp4"></audio>
  </header>`;
}

function footer() {
  return html`<footer class="site-footer">
    <div class="footer-grid">
      <section>
        <img src="/image/logo_nb.png" alt="I-KO Soya logo" class="footer-logo">
        <p>Fresh soy desserts, drinks, and comfort snacks from Kota Kinabalu.</p>
        <div class="social-links" aria-label="Social links">
          <a href="${links.facebook}" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
          <a href="${links.instagram}" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a href="${links.whatsapp}" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
          <a href="${links.linktree}" aria-label="Linktree"><i class="fa-solid fa-link" aria-hidden="true"></i></a>
        </div>
      </section>
      <section><h2>Menu</h2>${menuLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</section>
      <section><h2>Visit</h2><p>Block No F, Lot 1, Ground Floor, Lintas Jaya, 88300 Kota Kinabalu, Sabah.</p><a href="${links.map}">Open in Google Maps</a></section>
      <section><h2>Connect</h2><a href="opportunities.html">Job Opportunities</a><a href="opportunities.html#partnership">Business Opportunities</a><a href="${links.whatsapp}">WhatsApp I-KO Soya</a></section>
    </div>
    <p class="copyright">I-KO Soya &copy; 2026</p>
  </footer>`;
}

function hero({ video, eyebrow, title, text, cta = false, visual = [] }) {
  return html`<section class="hero">
    <div class="hero-media" aria-hidden="true"><video src="${video}" autoplay muted loop playsinline></video></div>
    ${visual.length ? `<div class="hero-products" aria-hidden="true">${visual.map((src) => `<img src="${src}" alt="">`).join("")}</div>` : ""}
    <div class="hero-content">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
      <p>${text}</p>
      ${cta ? '<div class="hero-actions"><a class="button primary" href="menu.html">Explore Menu</a><a class="button ghost" href="location.html">Find Us</a></div>' : ""}
    </div>
  </section>`;
}

function sectionHeading(eyebrow, title, text = "") {
  return `<div class="section-heading reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}</div>`;
}

function categoryGrid(items) {
  return `<div class="category-grid">${items.map(([title, href, image, text, tag, accent]) => `
    <article class="category-card reveal${accent ? " accent-card" : ""}">
      <a href="${href}"><img src="${image}" alt="${title}" loading="lazy"></a>
      <div class="card-copy"><span class="pill">${tag}</span><h3>${title}</h3><p>${text}</p><a class="text-link" href="${href}">View ${title.replace(" Series", "")}</a></div>
    </article>`).join("")}</div>`;
}

function productGrid(products) {
  return `<div class="product-grid">${products.map(([title, image, price, text, badge, id, accent, topping]) => `
    <article class="product-card reveal${accent ? " accent-card" : ""}"${id ? ` id="${id}"` : ""}>
      <img src="${image}" alt="${title}" loading="lazy">
      <div class="card-copy">${badge ? `<span class="pill">${badge}</span>` : ""}<h3>${title}</h3><p>${text}</p>${topping ? `<p class="product-topping">${topping}</p>` : ""}<p class="price">${price}</p></div>
    </article>`).join("")}</div>`;
}

function sugarBlock() {
  const sugars = [
    ["White Sugar", "/No_background/white_sugar.png"],
    ["Gula Melaka", "/No_background/gula_melaka.png"],
    ["Ginger Sugar", "/No_background/ginger_sugar.png"],
    ["Chrysanthemum Sugar", "/No_background/chrysanthenum_sugar.png"],
  ];
  return html`<section class="section section-tight reveal">
    <div class="section-heading"><p class="eyebrow">Syrup choices</p><h2>Pick the sweetness that fits the mood.</h2></div>
    <div class="sugar-grid">${sugars.map(([name, image]) => `<article class="sugar-card"><img src="${image}" alt="${name}" loading="lazy"><span>${name}</span></article>`).join("")}</div>
  </section>`;
}

function pageHome() {
  return html`${hero({ video: "/Video/Iko-soya_heading.mp4", eyebrow: "Premium fresh soy desserts", title: "Fresh soymilk, silky taufufa, and golden bites in Kota Kinabalu.", text: "I-KO Soya brings plant-based comfort into a brighter food experience with real soy drinks, dessert bowls, cakoi, snacks, and soft serve.", cta: true, visual: ["/MENU_PHOTO/Purple_Potato_Soymilk.png", "/No_background/IKO_Signature.PNG", "/No_background/Tofu_Fries.PNG"] })}
    <section class="section split-intro"><div class="reveal"><p class="eyebrow">Made for everyday cravings</p><h2>A warm local dessert shop with a cleaner, fresher rhythm.</h2></div><p class="reveal">The redesign keeps the brand assets front and center: product photography, video motion, and clear menu paths. The feel is premium without becoming cold, and fresh without losing comfort.</p></section>
    <section class="section">${sectionHeading("Popular picks", "Start with the house favorites.", "Featured menu items keep the page useful immediately, with direct links into each product series.")}${categoryGrid(featured)}</section>
    <section class="section muted-band">${sectionHeading("Six series", "One soy-centered menu, many textures.", "Move from creamy drinks to silky desserts, crisp cakoi, snacks, soft serve, and rotating extras.")}${categoryGrid(categories)}</section>
    <section class="section location-callout reveal"><div><p class="eyebrow">Visit I-KO Soya</p><h2>Lintas Jaya, Kota Kinabalu</h2><p>Block No F, Lot 1, Ground Floor, Lintas Jaya, 88300 Kota Kinabalu, Sabah.</p></div><a class="button primary" href="location.html">View location</a></section>`;
}

function pageMenu() {
  return html`${hero({ video: "/Video/menu_heading.mp4", eyebrow: "Menu categories", title: "Choose the texture you are craving.", text: "Six focused series organize I-KO Soya around drinks, pudding, fried cakoi, snacks, soft serve, and creative extras.", visual: ["/MENU_PHOTO/Dine_In(350ml).png", "/No_background/Iko_Classic_Sundae.PNG", "/MENU_PHOTO/Mayo_Chicken_Floss.png"] })}
    <section class="section">${sectionHeading("Menu map", "Explore all six food categories.", "Each category leads to a dedicated page with product descriptions, pricing, and real menu imagery.")}${categoryGrid(categories)}</section>`;
}

function pageSeries(key) {
  const data = series[key];
  const after = data.after === "taufufa" ? html`<section class="feature-strip reveal"><div><p class="eyebrow">Create your own</p><h2>Build a taufufa bowl around your favorite texture.</h2><p>Start with silky pudding, then add syrup and toppings for a dessert that feels personal without losing its traditional base.</p></div><img src="/MENU_PHOTO/create_your_taufufa.jpg" alt="Create your own taufufa topping display" loading="lazy"></section>` : "";
  return html`${hero({ video: data.video, eyebrow: data.eyebrow, title: data.title, text: data.intro, visual: data.products.slice(0, 3).map((item) => item[1]) })}
    <section class="section series-intro reveal"><div><p class="eyebrow">${data.eyebrow}</p><h2>${data.note || "Crafted with real product ingredients and clear menu choices."}</h2></div><a class="button ghost" href="menu.html">Back to menu</a></section>
    ${data.extra === "sugar" ? sugarBlock() : ""}
    <section class="section">${sectionHeading("Products", "Browse the series.", "Prices and descriptions are preserved from the existing menu content.")}${productGrid(data.products)}</section>${after}`;
}

function pageAbout() {
  const gallery = ["/image/taufufa.jpg", "/image/snackes.jpg", "/image/taufufa3.jpg", "/image/taufufa4.jpg", "/image/make.jpg", "/image/make_2.jpg", "/image/make_3.jpg", "/image/taufufa2.jpg", "/image/soymilk.jpg"];
  return html`${hero({ video: "/Video/Open_Day.mp4", eyebrow: "About I-KO Soya", title: "A local soy dessert story built around comfort and freshness.", text: "Born from a passion for plant-based desserts and drinks, I-KO Soya turns soybeans into creamy beverages, silky pudding, and creative menu moments." })}
    <section class="section story-grid">
      ${[
        ["01", "Our Story", "IKO-soya was born from a passion for sharing authentic, high-quality, plant-based desserts and beverages that bring comfort and joy to every customer."],
        ["02", "The Beginning", "The first store opened in Kota Kinabalu, Sabah, starting with signature soy milk drinks and taufufa made with a focus on quality and flavor."],
        ["03", "Expanding the Menu", "As customers grew, the menu expanded into soft serve, cakoi, pudding, snacks, and create-your-own taufufa combinations."],
        ["04", "Our Vision", "I-KO Soya aims to create a welcoming place for wholesome plant-based treats made with care and rooted in Malaysian flavor."],
      ].map(([n, title, text]) => `<article class="story-card reveal"><span>${n}</span><h2>${title}</h2><p>${text}</p></article>`).join("")}
    </section>
    <section class="feature-strip reveal"><div><p class="eyebrow">Store roots</p><h2>From one shop to a broader soy dessert menu.</h2><p>The refreshed site uses real shop and product photography so the brand feels specific, local, and recognizable.</p></div><img src="/image/located_store.jpg" alt="I-KO Soya storefront" loading="lazy"></section>
    <section class="section">${sectionHeading("Gallery", "A look at product craft and store moments.")}<div class="gallery-grid">${gallery.map((src, index) => `<img class="reveal" src="${src}" alt="I-KO Soya gallery image ${index + 1}" loading="lazy">`).join("")}</div></section>
    <section class="section muted-band social-panel reveal"><div><p class="eyebrow">Social media</p><h2>Follow I-KO Soya for product updates and new drops.</h2><p>Connect through Facebook, Instagram, WhatsApp, or Linktree.</p></div><div class="social-cta"><a class="button primary" href="${links.instagram}">Instagram</a><a class="button ghost" href="${links.facebook}">Facebook</a></div></section>
    <section class="section rating-panel reveal" aria-label="Rating widget"><p class="eyebrow">Feedback</p><h2>Give us a rating</h2><div class="rating-stars" aria-label="Four out of five star visual rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div></section>`;
}

function pageLocation() {
  return html`${hero({ video: "/Video/find_us_heading.mp4", eyebrow: "Locations", title: "Find I-KO Soya in Lintas Jaya.", text: "Drop by for soymilk, taufufa, cakoi, snacks, and soft serve in Kota Kinabalu." })}
    <section class="section location-layout">
      <div class="map-card reveal"><iframe title="I-KO Soya Google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.458539857014!2d116.07075479999999!3d5.931348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b694c3b0a3bd7%3A0x9c34af4290bc88a4!2zSS1LTyBTb3lhIOS4gOWPo-ixhuiKsQ!5e0!3m2!1sen!2smy!4v1732204098487!5m2!1sen!2smy" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
      <aside class="hours-card reveal"><p class="eyebrow">Operating hours</p><h2>Open Tuesday to Sunday</h2><dl><div><dt>Mon</dt><dd>Closed</dd></div><div><dt>Tue - Thu</dt><dd>12:00 PM - 10:00 PM</dd></div><div><dt>Fri - Sun</dt><dd>12:00 PM - 10:30 PM</dd></div></dl><a class="button primary" href="${links.map}">Open Google Maps</a></aside>
    </section>
    <section class="section feature-strip reveal"><div><p class="eyebrow">Address</p><h2>Block No F, Lot 1, Ground Floor, Lintas Jaya.</h2><p>88300 Kota Kinabalu, Sabah.</p></div><img src="/image/located_store.jpg" alt="I-KO Soya store location" loading="lazy"></section>`;
}

function pageOpportunities() {
  const jobs = [
    ["Store Manager", "/No_background/store-manager.png", "RM 2,500 - RM 3,500/month", "Oversee daily store operations, manage staff, support customer satisfaction, inventory, and sales targets."],
    ["Waiters", "/No_background/waitress.png", "RM 1,200 - RM 1,800/month", "Greet customers, take orders, process payments, and maintain dining area cleanliness."],
    ["Kitchen Staff", "/No_background/kitchen.png", "RM 1,500 - RM 2,200/month", "Prepare menu items, follow recipes and safety protocols, and keep the kitchen clean."],
    ["Sales and Marketing Coordinator", "/No_background/shopping-online.png", "RM 2,000 - RM 3,000/month", "Create marketing content, manage social media, coordinate events, and support campaigns."],
    ["Customer Service", "/No_background/customer-service.png", "RM 1,200 - RM 1,800/month", "Handle inquiries, process orders, manage feedback, and provide friendly support."],
    ["Inventory and Supply Chain Coordinator", "/No_background/inventory.png", "RM 1,800 - RM 2,500/month", "Manage stock levels, place orders, track inventory, and coordinate suppliers."],
    ["Part-Time Staff", "/No_background/part-time.png", "RM 8 - RM 10/hour", "Assist with store operations, service, food prep, or dishwashing during flexible shifts."],
  ];
  return html`${hero({ video: "/Video/oppertunities_heading.mp4", eyebrow: "Opportunities", title: "Join a growing soy dessert team.", text: "If you enjoy plant-based food, customer service, and thoughtful hospitality, I-KO Soya has roles across store, kitchen, service, marketing, and operations." })}
    <section class="section">${sectionHeading("Careers", "Open roles", "Browse current positions and apply through the existing application form.")}
      <div class="jobs-grid">${jobs.map(([title, image, pay, text]) => `<article class="job-card reveal"><img src="${image}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${text}</p><strong>${pay}</strong><a class="text-link" href="${links.apply}">Apply now</a></div></article>`).join("")}</div>
    </section>
    <section class="section partnership-panel reveal" id="partnership"><img src="/No_background/collaboration.png" alt="Partnership illustration" loading="lazy"><div><p class="eyebrow">Partnership</p><h2>Partner with I-KO Soya.</h2><p>Explore franchising, investment, or business opportunities directly with the team.</p><a class="button primary" href="${links.whatsapp}">WhatsApp us</a></div></section>`;
}

function pageFor(path) {
  if (path === "menu.html") return ["menu", pageMenu()];
  if (path === "aboutus.html") return ["about", pageAbout()];
  if (path === "location.html") return ["locations", pageLocation()];
  if (path === "opportunities.html") return ["opportunities", pageOpportunities()];
  if (path === "soymilk.html" || path === "soymilk1.html") return ["menu", pageSeries("soymilk")];
  if (path === "taufufa.html") return ["menu", pageSeries("taufufa")];
  if (path === "cakoi.html") return ["menu", pageSeries("cakoi")];
  if (path === "snacks.html") return ["menu", pageSeries("snacks")];
  if (path === "softserve.html") return ["menu", pageSeries("softserve")];
  if (path === "others.html") return ["menu", pageSeries("others")];
  return ["home", pageHome()];
}

function initializeShell() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const [active, content] = pageFor(path);
  document.body.insertAdjacentHTML("afterbegin", header(active));
  document.getElementById("main").innerHTML = content;
  document.body.insertAdjacentHTML("beforeend", footer());
}

function initializeInteractions() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "light";
  root.dataset.theme = savedTheme;

  const themeToggle = document.getElementById("themeToggle");
  const audioToggle = document.getElementById("audioToggle");
  const audio = document.getElementById("backgroundAudio");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const setThemeIcon = () => {
    const icon = themeToggle?.querySelector("i");
    if (icon) icon.className = root.dataset.theme === "dark" ? "fa-solid fa-moon" : "fa-regular fa-sun";
  };
  setThemeIcon();

  themeToggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
    setThemeIcon();
  });

  menuToggle?.addEventListener("click", () => {
    const open = mobileMenu?.classList.toggle("is-open") || false;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  audioToggle?.addEventListener("click", async () => {
    if (!audio) return;
    const icon = audioToggle.querySelector("i");
    try {
      if (audio.paused) {
        audio.muted = false;
        await audio.play();
        icon.className = "fa-solid fa-volume-high";
        audioToggle.setAttribute("aria-label", "Pause background music");
      } else {
        audio.pause();
        icon.className = "fa-solid fa-volume-xmark";
        audioToggle.setAttribute("aria-label", "Play background music");
      }
    } catch {
      icon.className = "fa-solid fa-volume-xmark";
    }
  });

  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));

  if (window.location.hash) {
    window.requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeShell();
  initializeInteractions();
});
