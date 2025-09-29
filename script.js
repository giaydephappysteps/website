/* =========================
   script.js — HappySteps (updated)
   - 2 categories: "giay" và "dep"
   - each product includes: id, cat, name, price, images[], sizes[], desc
   ========================= */

/* ========= DATA: 10 SẢN PHẨM (5 giày + 5 dép) ========= */
const PRODUCTS = [
{
id: 'g-1',
cat: 'giay',
name: "Giày sneaker nam Biti’s Hunter HSM004901TRG",
price: 785000,
images: ["https://product.hstatic.net/1000230642/product/hsm004901den__1__c4efbe02f6f647d2b14ce5e04efd8809_master.jpg", "https://product.hstatic.net/1000230642/product/hsm004901xnh__5__63778f4c75b84a7e96290311d5982cfe_master.jpg", "https://product.hstatic.net/1000230642/product/hsm004901xal__1__c4c6b02f46e54752bfa6435eac4f4fb8_master.jpg"],
sizes: [38,39,40,41,42,43],
desc: "Giày sneaker nam Giày thể thao nam Biti’s Hunter HSM004901TRG là lựa chọn hoàn hảo cho các chàng trai yêu thích sự mạnh mẽ và phong cách hiện đại. Với tông đen chủ đạo kết hợp logo Hunter nổi bật, mẫu sneaker này mang đến cảm giác cá tính, dễ phối với nhiều trang phục thường ngày. Thân giày được làm từ vải lưới thoáng khí kết hợp da tổng hợp, vừa đảm bảo độ bền bỉ vừa giúp thoáng mát trong suốt quá trình vận động. Lớp lót trong mềm mại, thấm hút mồ hôi tốt, đem lại cảm giác thoải mái khi di chuyển cả ngày dài. Đế giày cao su nguyên khối chắc chắn, có rãnh chống trượt sâu, tăng độ bám và khả năng đàn hồi, giúp người mang an toàn và linh hoạt hơn khi tập luyện hay đi lại. Thiết kế form dáng thể thao ôm chân, khỏe khoắn, cùng các chi tiết phối màu tinh tế làm nổi bật cá tính riêng. Đây là mẫu sneaker vừa thời trang, vừa tiện dụng, đồng hành tốt cả trong thể thao lẫn sinh hoạt hằng ngày."
},
{
id: 'g-2',
cat: 'giay',
name: "Giày chạy bộ nam Promax PR-21003",
price: 485000,
images: ["https://product.hstatic.net/1000288768/product/thumb_white_c4d1074af20944dfb550415f10749e6a_master.jpg", "https://product.hstatic.net/1000288768/product/thumb_navy_8dc44dc52bf14ab5847e34f22baf8283_master.jpg", "https://product.hstatic.net/1000288768/product/thumb_blue_97d87d2183624b68aafa1a04738384f0_master.jpg"],
sizes: [38,39,40,41,42,43],
desc: "Giày thể thao nam Promax PR-21003 – Đậm cá tính, thoải mái từng bước chân. Promax PR-21003 là mẫu giày thể thao nam lý tưởng cho phong cách sống năng động. Giày có thiết kế phối màu gradient hiện đại kết hợp họa tiết network thời thượng, tạo nên vẻ ngoài nổi bật, khỏe khoắn và dễ phối đồ. Upper từ vải mesh kết hợp Jacquard cao cấp: mang lại độ bền cao, thoáng khí tối ưu và khả năng chống phai màu, ít xù lông hay biến dạng – phù hợp với cường độ vận động thường xuyên. Đế PU êm, nhẹ và đàn hồi tốt: giúp hấp thụ lực hiệu quả, bảo vệ bàn chân và hỗ trợ các chuyển động linh hoạt, ổn định trong nhiều tình huống thể thao. Phù hợp với nhiều hoạt động thể thao như: tập gym, fitness cơ bản, chạy bộ, đi bộ hàng ngày, chơi cầu lông, pickleball phong trào."
},
{
id: 'g-3',
cat: 'giay',
name: "Sandal nam thể thao",
price: 380000,
images: ["https://product.hstatic.net/1000230642/product/hem000800nau__2__f738866df735403492f24dce1fd2a2d9_b2fdf2cd616d436883d20a5774d97746_master.jpg", "https://product.hstatic.net/1000230642/product/hem000800xam__2__b700b4a63c884440b6cca79933947024_master.jpg", "https://product.hstatic.net/1000230642/product/hem000800den__2__bb86cf4d9f8d4e679162e8ee1d435334_a6bec99efcc341cd80b66c980086dc18_master.jpg"],
sizes: [39,40,41,42,43,44],
desc: "Sandal nam thể thao – lựa chọn hoàn hảo cho những ai yêu thích sự năng động và tiện dụng. Thiết kế quai chéo kết hợp quai ngang, tạo dáng khỏe khoắn và chắc chắn. Màu sắc: đen toàn bộ, đơn giản nhưng sang trọng, dễ phối với nhiều phong cách. Chất liệu quai: vải dù cao cấp, bền bỉ, dễ vệ sinh, kết hợp khóa dán và khóa gài tiện lợi. Đế sandal: cao su dày dặn, chống trượt, có độ đàn hồi tốt, hỗ trợ di chuyển linh hoạt. Lót trong: êm ái, thoải mái khi mang lâu. Ứng dụng: phù hợp cho đi chơi, du lịch, hoạt động ngoài trời hoặc đi dạo hằng ngày."
},
{
id: 'g-4',
cat: 'giay',
name: "Giày nữ Biti’s màu xám lợt",
price: 435000,
images: ["https://product.hstatic.net/1000230642/product/bbw003388den__3__ca1c95eee97245e99b31759f78f17e74.jpg", "https://cdn.hstatic.net/products/1000230642/bbw003388hog__6__984a6215489e4f479638916c68bdc0a2.jpg"],
sizes: [36,37,38,39,40],
desc: "Giày nữ Biti’s màu xám lợt gây ấn tượng với tông màu trung tính và thanh lịch, dễ phối hợp với nhiều phong cách trang phục khác nhau. Sản phẩm sở hữu quai dán Velcro bản to chắc chắn, cho phép điều chỉnh nhanh chóng để ôm vừa bàn chân, tạo sự thoải mái và an toàn khi di chuyển. Quai làm từ sợi tổng hợp cao cấp, chống sờn rách và bền đẹp theo thời gian. Đế sandal được làm từ cao su nguyên khối với các rãnh chống trượt sâu, giúp tăng khả năng bám trên nhiều loại bề mặt, kể cả khi thời tiết ẩm ướt. Lót sandal dập vân nổi hạn chế trượt chân và tạo cảm giác êm ái. Với thiết kế mở, sandal đảm bảo sự thông thoáng cho đôi chân, đặc biệt phù hợp trong những ngày hè hoặc các chuyến đi biển, picnic."
},
{
id: 'g-5',
cat: 'giay',
name: "Giày sandal nữ Biti’s BBW003388HOG",
price: 960000,
images: ["https://cdn.hstatic.net/products/1000230642/byw000700den__1__199623b291744e6bba03a49f46a6927a.jpg", "https://cdn.hstatic.net/products/1000230642/byw000700xal__6__1d41df30b6c844a58b803cfd70aeb2c3.jpg"],
sizes: [35,36,37,38,39],
desc: "Giày sandal nữ BBW003388HOG từ Biti’s mang đến phong cách nữ tính, thanh lịch và cực kỳ dễ phối đồ nhờ thiết kế chần bông thời thượng kết hợp cùng tone màu hồng pastel nhẹ nhàng. Kiểu dáng basic, không lỗi mốt giúp đôi giày trở thành món phụ kiện lý tưởng cho nhiều dịp sử dụng: đi làm, đi học hay dạo phố. Phần mũi giày bo tròn nhẹ, tạo cảm giác dễ chịu và phù hợp với nhiều dáng bàn chân. Chất liệu da tổng hợp cao cấp được xử lý mịn, mềm, có độ đàn hồi tốt, dễ vệ sinh và không bị bong tróc. Phần lót trong êm ái, thấm hút tốt mang đến cảm giác thoải mái suốt ngày dài. Đế bệt chống trơn trượt hỗ trợ di chuyển an toàn, linh hoạt, trong khi nơ nhỏ trước mũi giày đính kim loại ánh vàng là điểm nhấn tinh tế cho tổng thể."
},
{
id: 'd-1',
cat: 'dep',
name: "Dép xỏ ngón nam Biti’s",
price: 255000,
images: ["https://product.hstatic.net/1000230642/product/bxm005200nau__5__5c5d78f60d864514ae86e2eff06ea3a8_large.jpg", "https://product.hstatic.net/1000230642/product/bxm005200xam__2__a2f5f99fce2b47848fa9cfa27523c50e_1024x1024.jpg", "https://product.hstatic.net/1000230642/product/bxm005200den__5__c894ed99f41842cfb603f4e71e2fc29a_large.jpg"],
sizes: [38,39,40,41,42,43],
desc: "Dép xỏ ngón nam với thiết kế hiện đại, tối giản nhưng vẫn mang nét khỏe khoắn. Quai vải dệt bền chắc, êm ái, kết hợp với lớp đệm EVA nhẹ và đàn hồi tốt, mang lại cảm giác thoải mái khi di chuyển. Tông đen chủ đạo, logo BITI’S màu đỏ nổi bật. Đế dép có rãnh chống trượt, bám chắc bề mặt, đảm bảo an toàn khi đi lại. Phù hợp cho các hoạt động thường ngày, đi chơi, dạo phố hoặc đi biển."
},
{
id: 'd-2',
cat: 'dep',
name: "Dép quai ngang thời trang",
price: 460000,
images: ["https://product.hstatic.net/1000284478/product/01_pm1-85110466_2_abf0795e846b4098a26d4f1416ab2c40_large.jpg", "https://product.hstatic.net/1000284478/product/10_pm1-85110466_2_7efe916153814c22bbd2203123228a2f_large.jpg"],
sizes: [38,39,40,41,42,43],
desc: "Dép quai ngang thời trang với chi tiết logo thương hiệu sang trọng. Kiểu dáng phóng khoáng, hiện đại, đa năng. Màu sắc hiện đại, dễ dàng kết hợp với nhiều phong cách khác nhau."
},
{
id: 'd-3',
cat: 'dep',
name: "Dép quai ngang Quilted",
price: 700000,
images: ["https://product.hstatic.net/1000284478/product/66_pm1-86380183_2_009a63caec8f479a8a2ee94567e832ca_large.jpg", "https://product.hstatic.net/1000284478/product/44_pm1-86380183_2_38e8aa8686d9424c824dcf54b1ab7511_large.jpg", "https://product.hstatic.net/1000284478/product/01_pm1-86380183_2_f0fd35405ce6453d85fb12fb45a91033_large.jpg"],
sizes: [37,38,39,40,41],
desc: "Dép quai ngang Quilted với thiết kế slip-on tiện lợi, dễ dàng mang vào và tháo ra. Phần đế cao ấn tượng tạo nên vẻ ngoài thời thượng. Đây là lựa chọn lý tưởng cho những buổi dạo phố cuối tuần, mang đến sự thoải mái và phong cách nổi bật."
},
{
id: 'd-4',
cat: 'dep',
name: "Dép nữ Biti’s BEW003300CAM",
price: 145000,
images: ["https://cdn.hstatic.net/products/1000230642/bew003300tim__1__ad63736a273f4d87b8149f6fa2653d40.jpg", "https://cdn.hstatic.net/products/1000230642/bew003300hog__1__7e1b6716220246839476f938bd1afccf.jpg", "https://cdn.hstatic.net/products/1000230642/bew003300cam__6__65338752e7874274b5e44fa49222f9b4.jpg"],
sizes: [36,37,38,39],
desc: "Dép nữ BEW003300CAM với tone cam rực rỡ, đôi dép này thu hút ánh nhìn và thể hiện cá tính. Quai đan chéo phá cách, được thiết kế chắc chắn, bám chân tốt, tạo cảm giác vừa vặn và vững chãi. Chất liệu EVA nguyên khối siêu nhẹ, không thấm nước, dễ vệ sinh và cực kỳ bền bỉ. Đế dép EVA với vân chống trượt đảm bảo an toàn. Đệm lòng bàn chân hỗ trợ giảm mỏi, giúp bạn thoải mái cả ngày."
},
{
id: 'd-5',
cat: 'dep',
name: "Dép kẹp nữ Biti’s BXW020900NAU",
price: 130000,
images: ["https://cdn.hstatic.net/products/1000230642/bxw020900den__4__e1add2ed49eb43e8bc891bda0426506a.jpg", "https://cdn.hstatic.net/products/1000230642/bxw020900nau__2__791d1acf969c4029a18203933f13d712.jpg"],
sizes: [36,37,38,39],
desc: "Dép kẹp nữ Biti’s BXW020900 màu nâu với quai vải đen đính đá lấp lánh tinh tế. Dễ dàng phối hợp cùng nhiều kiểu váy áo mùa hè, từ đi biển đến dạo phố. Chất liệu đế EVA nhẹ nhàng, đàn hồi tốt, mang đến cảm giác thoải mái cả ngày dài. Đế cao 3cm giúp tôn dáng và tăng sự năng động. Rãnh chống trượt dưới đế đảm bảo an toàn khi di chuyển."
}
];


/* ========= HELPERS ========= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from((root || document).querySelectorAll(sel));
const money = (v) => (v || 0).toLocaleString("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });
const scrollToEl = (sel) => { const el = $(sel); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };

/* ========= STATE ========= */
let cart = JSON.parse(localStorage.getItem("cart_v1") || "[]");
let discountRate = 0;
let currentProduct = null;

/* ========= RENDER: HOME (2 danh mục) ========= */
function renderHome() {
  const containers = {
    "giay": $("#list-giay"),
    "dep": $("#list-dep")
  };
  // clear existing
  Object.values(containers).forEach(c => { if (c) c.innerHTML = ""; });

  PRODUCTS.forEach(p => {
    const container = containers[p.cat];
    if (!container) return;
    const card = document.createElement("div");
    card.className = "product-card";
    // truncate description for list
    const shortDesc = p.desc.length > 80 ? p.desc.slice(0, 77) + "..." : p.desc;
    card.innerHTML = `
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      <h3>${p.name}</h3>
      <p class="price">${money(p.price)}</p>
      <div style="padding:0 10px 12px;color:#666;font-weight:700;font-size:13px;">${shortDesc}</div>
      <div style="display:flex;gap:8px;justify-content:center;padding-bottom:12px;">
        <button class="btn-primary btn-buy" data-id="${p.id}">Mua ngay</button>
        <button class="btn-primary small btn-view" data-id="${p.id}" style="background:#fff;color:#222;border:1px solid #eee;">Xem</button>
      </div>
    `;
    // click image / name -> open detail
    card.querySelector("img")?.addEventListener("click", () => goto(`#/product/${p.id}`));
    card.querySelector("h3")?.addEventListener("click", () => goto(`#/product/${p.id}`));
    // buy button behavior (adds to cart; if sizes exist pick first size)
    card.querySelector(".btn-buy")?.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      const prod = PRODUCTS.find(x => x.id === id);
      if (!prod) return;
      const size = (prod.sizes && prod.sizes.length) ? String(prod.sizes[0]) : "M";
      addToCartFromList(prod, size, 1);
    });
    // view button -> go to detail
    card.querySelector(".btn-view")?.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      goto(`#/product/${id}`);
    });
    container.appendChild(card);
  });
}

/* ========= DETAIL RENDER ========= */
function renderDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) { goto("#/"); return; }
  currentProduct = p;

  $("#detail-name").textContent = p.name;
  $("#detail-desc").textContent = p.desc;
  $("#detail-price").textContent = money(p.price);
  $("#detail-full-desc").textContent = p.desc;

  // main image
  const mainImg = $("#detail-image");
  if (mainImg) { mainImg.src = p.images[0]; mainImg.alt = p.name; }

  // thumbnails
  const thumbs = $("#detail-thumbs");
  if (thumbs) {
    thumbs.innerHTML = "";
    p.images.forEach((url, i) => {
      const t = document.createElement("img");
      t.src = url;
      t.alt = `${p.name} ${i + 1}`;
      if (i === 0) t.classList.add("active");
      t.addEventListener("click", () => {
        changeDetailImage(url);
        $$("#detail-thumbs img").forEach(im => im.classList.remove("active"));
        t.classList.add("active");
      });
      thumbs.appendChild(t);
    });
  }

  // sizes
  const sizesBox = $("#detail-sizes");
  if (sizesBox) {
    sizesBox.innerHTML = "";
    (p.sizes || []).forEach(sz => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = sz;
      btn.addEventListener("click", () => {
        $$(".size-options button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
      sizesBox.appendChild(btn);
    });
  }

  // reset qty
  $("#detail-qty-value").textContent = "1";

  // reviews
  renderReviews();

  // show product view
  $$(".view").forEach(v => v.classList.remove("active"));
  $("#view-product")?.classList.add("active");

  // scroll top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeDetailImage(url) {
  const main = $("#detail-image");
  if (main) main.src = url;
}

/* ========= REVIEWS (sample) ========= */
const fakeReviews = [
  { author: "Nguyễn Văn A", stars: 5, text: "Giày rất êm, đúng mô tả - sẽ mua lại." },
  { author: "Trần Thị B", stars: 4, text: "Màu đẹp, giao nhanh. Size hơi to." },
  { author: "Lê Văn C", stars: 5, text: "Chất lượng tốt, giá hợp lý." }
];
function renderReviews() {
  const list = $("#reviews-list");
  if (!list) return;
  list.innerHTML = "";
  fakeReviews.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${r.author} — ${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</strong>
                    <div style="color:#444;margin-top:6px;">${r.text}</div>`;
    list.appendChild(li);
  });
}

/* ========= CART HELPERS ========= */
const saveCart = () => localStorage.setItem("cart_v1", JSON.stringify(cart));
const countCart = () => cart.reduce((s, i) => s + i.qty, 0);
const sumSubtotal = () => cart.reduce((s, i) => s + i.price * i.qty, 0);
const shippingFee = () => 3000 * Math.max(0, countCart());

/* ========= MINI CART UI ========= */
function refreshMiniCart() {
  const mini = $("#miniCartBar");
  const txt = $("#miniCartText");
  const cnt = countCart();
  if (mini && txt) {
    if (cnt > 0) {
      mini.classList.remove("hidden");
      requestAnimationFrame(() => mini.classList.add("show"));
      txt.textContent = `Giỏ hàng (${cnt}) • Tổng: ${money(sumSubtotal() + shippingFee())}`;
    } else {
      mini.classList.add("hidden");
      mini.classList.remove("show");
    }
  }
}
$("#miniCartViewBtn")?.addEventListener("click", () => openCheckout());
$("#openCartFromNav")?.addEventListener("click", e => { e.preventDefault(); openCheckout(); });

/* ========= ADD / BUY ========= */
function addToCartFromList(prod, size, qty = 1) {
  if (!prod) return;
  const found = cart.find(it => it.id === prod.id && String(it.size) === String(size));
  if (found) found.qty += qty;
  else cart.push({ id: prod.id, name: prod.name, price: prod.price, size: String(size), qty, img: prod.images[0] });
  saveCart();
  refreshMiniCart();
  alert(`Đã thêm ${prod.name} (size ${size}) vào giỏ hàng`);
  renderCartModal();
}

$("#detail-add")?.addEventListener("click", () => {
  if (!currentProduct) return alert("Chưa chọn sản phẩm");
  const sizeEl = $(".size-options button.active");
  if (!sizeEl) return alert("Vui lòng chọn size");
  const size = sizeEl.textContent;
  const qty = parseInt($("#detail-qty-value").textContent) || 1;
  const found = cart.find(it => it.id === currentProduct.id && it.size === size);
  if (found) found.qty += qty;
  else cart.push({ id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, size, qty, img: currentProduct.images[0] });
  saveCart();
  refreshMiniCart();
  alert("Đã thêm vào giỏ hàng");
  renderCartModal();
});

$("#detail-buy")?.addEventListener("click", () => {
  if (!currentProduct) return alert("Chưa chọn sản phẩm");
  const sizeEl = $(".size-options button.active");
  if (!sizeEl) return alert("Vui lòng chọn size");
  const size = sizeEl.textContent;
  const qty = parseInt($("#detail-qty-value").textContent) || 1;
  const found = cart.find(it => it.id === currentProduct.id && it.size === size);
  if (found) found.qty += qty;
  else cart.push({ id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, size, qty, img: currentProduct.images[0] });
  saveCart();
  refreshMiniCart();
  openCheckout();
});

/* ========= CART / CHECKOUT UI ========= */
const cartListEl = $("#cartList");
const sumSubtotalEl = $("#sumSubtotal");
const sumShippingEl = $("#sumShipping");
const sumDiscountEl = $("#sumDiscount");
const sumTotalEl = $("#sumTotal");
const discountInput = $("#discountCode");
const discountApplyBtn = $("#applyDiscount");

function renderCartModal() {
  if (!cartListEl) return;
  cartListEl.innerHTML = "";
  if (cart.length === 0) {
    cartListEl.innerHTML = `<div style="padding:10px;color:#666;">Giỏ hàng trống</div>`;
    recalcSummary();
    return;
  }
  cart.forEach((it, idx) => {
    const li = document.createElement("li");
    li.style.display = "grid";
    li.style.gridTemplateColumns = "1fr auto auto auto";
    li.style.gap = "8px";
    li.style.alignItems = "center";
    li.style.padding = "10px 0";
    li.style.borderBottom = "1px dashed #f2f2f2";
    li.innerHTML = `
      <span class="cart-item-name" style="font-weight:700;">${it.name} <small style="font-weight:600;color:#666"> (size ${it.size})</small></span>
      <div class="cart-qty" style="display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:4px;border:1px solid #eee;">
        <button class="m">-</button>
        <span class="v">${it.qty}</span>
        <button class="p">+</button>
      </div>
      <span class="cart-price">${money(it.price * it.qty)}</span>
      <button class="cart-remove">Xóa</button>
    `;
    li.querySelector(".p").onclick = () => { it.qty++; saveCart(); renderCartModal(); recalcSummary(); };
    li.querySelector(".m").onclick = () => { it.qty = Math.max(0, it.qty - 1); if (it.qty === 0) cart.splice(idx, 1); saveCart(); renderCartModal(); recalcSummary(); };
    li.querySelector(".cart-remove").onclick = () => { cart.splice(idx, 1); saveCart(); renderCartModal(); recalcSummary(); };
    cartListEl.appendChild(li);
  });
  recalcSummary();
}

function recalcSummary() {
  const subtotal = sumSubtotal();
  const shipping = shippingFee();
  const discount = Math.round(subtotal * discountRate);
  const total = Math.max(0, subtotal - discount) + shipping;
  if (sumSubtotalEl) sumSubtotalEl.textContent = money(subtotal);
  if (sumShippingEl) sumShippingEl.textContent = money(shipping);
  if (sumDiscountEl) sumDiscountEl.textContent = "-" + money(discount);
  if (sumTotalEl) sumTotalEl.textContent = money(total);
  refreshMiniCart();
}

function openCheckout() {
  renderCartModal();
  recalcSummary();
  openModal($("#checkoutModal"));
}

/* discount */
discountApplyBtn?.addEventListener("click", () => {
  const code = (discountInput.value || "").trim().toUpperCase();
  discountRate = (code === "SALE10") ? 0.10 : 0;
  recalcSummary();
  discountInput.style.borderColor = discountRate > 0 ? "#2ecc71" : (code ? "#e74c3c" : "");
});

/* payment radio: show QR */
$$('input[name="pay"]').forEach(r => r.addEventListener("change", (e) => {
  const box = $("#qrPaymentBox");
  if (e.target.value === "qr") box?.classList.remove("hidden"); else box?.classList.add("hidden");
}));

/* checkout submit */
$("#checkoutForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) { alert("Giỏ hàng rỗng."); return; }
  const order = createOrder();
  alert(`Đặt hàng thành công! Mã đơn: ${order.id}`);
  cart = []; saveCart(); renderCartModal(); recalcSummary(); closeModal($("#checkoutModal"));
});

/* ========= ORDER CREATION & MODAL ========= */
function generateOrderId() { return `ORD${String(Date.now()).slice(-8)}`; }
function createOrder() {
  const subtotal = sumSubtotal();
  const shipping = shippingFee();
  const discount = Math.round(subtotal * discountRate);
  const total = Math.max(0, subtotal - discount) + shipping;
  const order = {
    id: generateOrderId(),
    createdAt: new Date().toISOString(),
    items: cart.map(ci => ({ id: ci.id, name: ci.name, size: ci.size, qty: ci.qty, price: ci.price })),
    subtotal, shipping, discount, total,
    statusIndex: 0,
    currentStatusIndex: 1,
    statusText: "Đơn hàng đã được đặt — Người gửi đang chuẩn bị hàng"
  };
  localStorage.setItem("latest_order_v1", JSON.stringify(order));
  const history = JSON.parse(localStorage.getItem("orders_v1") || "[]");
  history.unshift(order);
  localStorage.setItem("orders_v1", JSON.stringify(history.slice(0, 50)));
  return order;
}

/* order modal render */
function renderOrderModal() {
  const raw = localStorage.getItem("latest_order_v1");
  const box = $("#orderModalContent");
  if (!raw) { box.innerHTML = `<div class="empty-note">Bạn chưa có đơn hàng nào gần đây.</div>`; setTrackActiveIndices(null); return; }
  const order = JSON.parse(raw);
  setTrackActiveIndices(order.statusIndex, order.currentStatusIndex);
  const itemsHtml = order.items.map(it => `<li style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed #f4f4f4;"><span>${it.name} (size ${it.size}) x${it.qty}</span><span>${money(it.price * it.qty)}</span></li>`).join("");
  box.innerHTML = `
    <div style="font-weight:800;margin-bottom:8px;">Mã đơn: ${order.id}</div>
    <div style="color:#666;margin-bottom:12px;">${order.statusText}</div>
    <ul style="list-style:none;padding:0;margin:0 0 8px 0;">${itemsHtml}</ul>
    <div style="display:flex;justify-content:space-between;font-weight:800;margin-top:8px;"><span>Tổng:</span><span>${money(order.total)}</span></div>
    <div style="font-size:12px;color:#888;margin-top:6px;">Ngày: ${new Date(order.createdAt).toLocaleString()}</div>
  `;
}

/* helper set track active */
function setTrackActiveIndices(shipIndex = null, currentIndex = null) {
  const topSteps = $$(".order-modal .step-box");
  topSteps.forEach((el, i) => el.classList.toggle("active", shipIndex !== null && i <= shipIndex));
  const statusBoxes = $$(".order-modal .status-box");
  statusBoxes.forEach(sb => sb.classList.remove("active-green"));
  if (currentIndex !== null) {
    const idx = Math.min(currentIndex, statusBoxes.length - 1);
    if (statusBoxes[idx]) statusBoxes[idx].classList.add("active-green");
  }
}

/* order modal open/close */
const orderModal = $("#orderModal");
$("#navOrders")?.addEventListener("click", (e) => { e.preventDefault(); openOrderModal(); });
$("#orderModalClose")?.addEventListener("click", () => closeOrderModal());
$("#orderModalOk")?.addEventListener("click", () => closeOrderModal());
function openOrderModal() { renderOrderModal(); openModal(orderModal); }
function closeOrderModal() { closeModal(orderModal); }

/* ========= MODAL GENERIC OPEN/CLOSE ========= */
function openModal(m) { if (!m) return; m.style.display = "flex"; m.setAttribute("aria-hidden", "false"); }
function closeModal(m) { if (!m) return; m.style.display = "none"; m.setAttribute("aria-hidden", "true"); }

/* close handlers: any .modal .close */
$$(".modal .close").forEach(btn => btn.addEventListener("click", () => closeModal(btn.closest(".modal"))));
window.addEventListener("click", e => { if (e.target.classList && e.target.classList.contains("modal")) closeModal(e.target); });
window.addEventListener("keydown", e => { if (e.key === "Escape") $$(".modal").forEach(m => closeModal(m)); });

/* size guide open button */
$("#openSizeGuide")?.addEventListener("click", (e) => { e.preventDefault(); openModal($("#sizeGuideModal")); });

/* ========= DROPDOWN NAV behavior ========= */
const dropdownToggle = $("#productDropdownToggle");
const dropdownMenu = $("#productDropdownMenu");
if (dropdownToggle) {
  dropdownToggle.addEventListener("click", (e) => { e.stopPropagation(); const open = dropdownMenu.style.display === "block"; dropdownMenu.style.display = open ? "none" : "block"; dropdownToggle.setAttribute("aria-expanded", String(!open)); });
}
$$(".nav-dropdown-menu button").forEach(btn => btn.addEventListener("click", () => {
  const target = btn.getAttribute("data-target");
  if (dropdownMenu) dropdownMenu.style.display = "none";
  dropdownToggle?.setAttribute("aria-expanded", "false");
  goto("#/");
  setTimeout(() => scrollToEl(target), 50);
}));
document.addEventListener("click", () => { if (dropdownMenu) { dropdownMenu.style.display = "none"; dropdownToggle?.setAttribute("aria-expanded", "false"); } });

/* ========= ROUTER (hash based) ========= */
function showView(name) {
  $$(".view").forEach(v => v.classList.remove("active"));
  if (name === "home") $("#view-home")?.classList.add("active");
  else if (name === "cskh") $("#view-cskh")?.classList.add("active");
  else if (name === "product") $("#view-product")?.classList.add("active");
}
function goto(hash) { location.hash = hash; }
function parseHash() {
  const h = location.hash || "#/";
  if (h.startsWith("#/product/")) { const id = h.split("/")[2]; renderDetail(id); showView("product"); }
  else if (h.startsWith("#/cskh")) { showView("cskh"); }
  else if (h.startsWith("#/giay")) { showView("home"); setTimeout(()=> scrollToEl("#giay"), 50); }
  else if (h.startsWith("#/dep")) { showView("home"); setTimeout(()=> scrollToEl("#dep"), 50); }
  else { showView("home"); }
}
window.addEventListener("hashchange", parseHash);
$("#openCSKH")?.addEventListener("click", (e) => { e.preventDefault(); goto("#/cskh"); });

/* ========= INIT ========= */
function init() {
  renderHome();
  parseHash();
  refreshMiniCart();

  // Go home links
  $("#goHome")?.addEventListener("click", e => { e.preventDefault(); goto("#/"); });
  $("#goHomeLink")?.addEventListener("click", e => { e.preventDefault(); goto("#/"); });

  // register/login open
  $("#openRegister")?.addEventListener("click", e => { e.preventDefault(); openModal($("#registerModal")); });
  $("#openLogin")?.addEventListener("click", e => { e.preventDefault(); openModal($("#loginModal")); });

  // mini cart view btn already bound above

  // banner explore CTAs: any .btn-explore (Giày / Dép) -> scroll to target (href or data-target)
  $$('a.btn-explore').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const href = a.getAttribute('href') || a.dataset.target || '';
      if (href.includes('#/giay') || href.includes('#/giay')) {
        goto('#/giay');
      } else if (href.includes('#/dep')) {
        goto('#/dep');
      } else {
        // fallback to giay
        goto('#/giay');
      }
    });
  });

  // footer links open modals
  $("#openTerms")?.addEventListener("click", e => { e.preventDefault(); openModal($("#modalTerms")); });
  $("#openCommitment")?.addEventListener("click", e => { e.preventDefault(); openModal($("#modalCommitment")); });
  $("#openPrivacy")?.addEventListener("click", e => { e.preventDefault(); openModal($("#modalPrivacy")); });

  // exploreBtn legacy id (if present) — scroll to giay
  $("#exploreBtn")?.addEventListener("click", e => { e.preventDefault(); goto('#/giay'); setTimeout(()=> scrollToEl("#giay"), 60); });

  // attach any other dynamic behaviors if needed
}
init();

/* ========= UTIL: expose to console ========= */
window.HappySteps = {
  PRODUCTS, cart, renderHome, renderDetail, openCheckout, createOrder, renderOrderModal
};
