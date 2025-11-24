/* script.js - Adaptado al nuevo CSS (usa .panel.show / .modal.show)
   Funcionalidades:
   - Renderizado de productos desde DEFAULT_PRODUCTS (o localStorage)
   - Modal de producto (imagen, thumbs, info)
   - Favoritos (localStorage)
   - Carrito (localStorage) con cantidad, subtotal
   - Filtros y búsqueda
   - Login ficticio (admin@ifix.com -> admin)
   - Admin: agregar producto (guarda en localStorage)
   - Checkout ficticio con formulario de tarjeta
*/

// ====== DATOS INICIALES ======
const DEFAULT_PRODUCTS = [
  { id: "p1", title: "Pantalla iPhone 11 Original", price: 420000, type: "Pantalla", model: "iPhone 11", images: ["https://tse1.mm.bing.net/th/id/OIP.loIXDU_WQLQbgwod_XP75QHaH7?rs=1&pid=ImgDetMain&o=7&rm=3"], desc: "Pantalla original con buen brillo y tacto. Incluye digitalizador.", freeShip: true, featured: true },
  { id: "p2", title: "Batería iPhone XS (Nueva)", price: 160000, type: "Batería", model: "iPhone XS", images: ["https://tse3.mm.bing.net/th/id/OIP.VlbuYDSMoYnWT5NokT_FRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc: "Batería de alta duración con garantía 6 meses.", freeShip: true },
  { id: "p3", title: "Cámara Trasera iPhone 12 Pro", price: 350000, type: "Cámara", model: "iPhone 12", images: ["https://www.iphonebull.com/5296-thickbox_default/camara-trasera-iphone-12-pro-original.jpg"], desc: "Módulo cámara trasera compatible con iPhone 12 Pro.", freeShip: true },
  { id: "p4", title: "Flex de Carga iPhone 7", price: 45000, type: "Flex", model: "iPhone 7", images: ["https://www.korzaimportaciones.com/imgs/productos/productos34_4494.jpg"], desc: "Flex original para carga y micrófono.", freeShip: false },
  { id: "p5", title: "Módulo Pantalla iPhone 13", price: 520000, type: "Pantalla", model: "iPhone 13", images: ["https://http2.mlstatic.com/D_NQ_NP_780128-MLU74432352875_022024-O.webp"], desc: "Módulo completo con marcos y adhesivos.", freeShip: true },
  { id: "p6", title: "Altavoz Inferior iPhone 8", price: 58000, type: "Altavoz", model: "iPhone 8", images: ["https://http2.mlstatic.com/D_NQ_NP_932395-MLM84247801567_042025-O-refaccion-bocina-inferior-altavoz-para-iphone-8-plus-origin.webp"], desc: "Altavoz inferior con calidad original.", freeShip: true }
];

// ====== SELECTORES ======
const selectors = {
  catalog: document.getElementById('catalog'),
  template: document.getElementById('productTemplate'),
  searchInput: document.getElementById('searchInput'),
  clearSearch: document.getElementById('clearSearch'),
  filterToggle: document.getElementById('filterToggle'),
  filtersPanel: document.getElementById('filters'),
  filterModel: document.getElementById('filterModel'),
  filterType: document.getElementById('filterType'),
  priceMin: document.getElementById('priceMin'),
  priceMax: document.getElementById('priceMax'),
  filterFreeShip: document.getElementById('filterFreeShip'),
  applyFilters: document.getElementById('applyFilters'),
  clearFilters: document.getElementById('clearFilters'),
  favoritesBtn: document.getElementById('favoritesBtn'),
  favCount: document.getElementById('favCount'),
  cartBtn: document.getElementById('cartBtn'),
  cartCount: document.getElementById('cartCount'),
  cartSidebar: document.getElementById('cartSidebar'),
  cartList: document.getElementById('cartList'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartItemsCount: document.getElementById('cartItemsCount'),
  closeCart: document.getElementById('closeCart'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  clearCartBtn: document.getElementById('clearCartBtn'),
  productModal: document.getElementById('productModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalPrice: document.getElementById('modalPrice'),
  modalDesc: document.getElementById('modalDesc'),
  modalType: document.getElementById('modalType'),
  modalModel: document.getElementById('modalModel'),
  modalMainImg: document.getElementById('modalMainImg'),
  modalThumbs: document.getElementById('modalThumbs'),
  addToCartBtn: document.getElementById('addToCartBtn'),
  favToggle: document.getElementById('favToggle'),
  sortSelect: document.getElementById('sortSelect'),
  emptyState: document.getElementById('emptyState'),
  resetBtn: document.getElementById('resetBtn'),
  menuBtn: document.getElementById('menuBtn'),
  themeToggle: document.getElementById('themeToggle'),
  loginBtn: document.getElementById('loginBtn'),
  loginModal: document.getElementById('loginModal'),
  closeLoginModal: document.getElementById('closeLoginModal'),
  loginForm: document.getElementById('loginForm'),
  loginEmail: document.getElementById('loginEmail'),
  loginPass: document.getElementById('loginPass'),
  adminPanelBtn: document.getElementById('adminPanelBtn'),
  adminModal: document.getElementById('adminModal'),
  closeAdminModal: document.getElementById('closeAdminModal'),
  addProductForm: document.getElementById('addProductForm'),
  checkoutModal: document.getElementById('checkoutModal'),
  closeCheckoutModal: document.getElementById('closeCheckoutModal'),
  checkoutItems: document.getElementById('checkoutItems'),
  checkoutSubtotal: document.getElementById('checkoutSubtotal'),
  fakePayBtn: document.getElementById('fakePayBtn'),
  receiptModal: document.getElementById('receiptModal'),
  receiptText: document.getElementById('receiptText'),
  closeReceiptModal: document.getElementById('closeReceiptModal')
};

// ====== ESTADO ======
let state = {
  products: JSON.parse(localStorage.getItem('ifx_products') || 'null') || DEFAULT_PRODUCTS.slice(),
  filtered: [],
  query: '',
  filters: { model:'', type:'', min:0, max:Infinity, free:false },
  favorites: JSON.parse(localStorage.getItem('ifx_favs') || '[]'),
  cart: JSON.parse(localStorage.getItem('ifx_cart') || '{}'),
  theme: localStorage.getItem('ifx_theme') || 'light',
  user: JSON.parse(localStorage.getItem('ifx_user') || 'null') // {email,isAdmin}
};

// ====== UTILIDADES PARA VISIBILIDAD (compatible con tu CSS) ======
function showElement(el){
  if(!el) return;
  el.classList.remove('hidden');
  el.classList.add('show');
  if(el.classList.contains('modal')) el.setAttribute('aria-hidden','false');
}
function hideElement(el){
  if(!el) return;
  el.classList.remove('show');
  el.classList.add('hidden');
  if(el.classList.contains('modal')) el.setAttribute('aria-hidden','true');
}
function togglePanel(el){
  if(!el) return;
  if(el.classList.contains('show')) hideElement(el);
  else showElement(el);
}

// ====== INICIALIZACIÓN ======
function init(){
  applyTheme();
  bindEvents();
  state.filtered = [...state.products];
  renderCatalog();
  updateFavCount();
  updateCartUI();
  updateAuthUI();
  updateCounts();
}
init();

// ====== RENDER CATALOGO ======
function renderCatalog(){
  const container = selectors.catalog;
  container.innerHTML = '';
  const frag = document.createDocumentFragment();

  let list = [...state.filtered];

  // ordenar
  const sort = selectors.sortSelect ? selectors.sortSelect.value : 'recommended';
  if(sort==='price_asc') list.sort((a,b)=>a.price-b.price);
  if(sort==='price_desc') list.sort((a,b)=>b.price-a.price);
  if(sort==='name_asc') list.sort((a,b)=>a.title.localeCompare(b.title));

  if(list.length===0) selectors.emptyState.classList.remove('hidden'); else selectors.emptyState.classList.add('hidden');

  list.forEach(p=>{
    const tpl = selectors.template.content.cloneNode(true);
    const article = tpl.querySelector('article');
    article.dataset.id = p.id;

    const img = tpl.querySelector('.card-img');
    img.src = (p.images && p.images[0]) ? p.images[0] : '';
    img.alt = p.title;

    tpl.querySelector('.card-title').textContent = p.title;
    tpl.querySelector('.card-sub').textContent = `${p.model} • ${p.type}`;
    tpl.querySelector('.price').textContent = formatCurrency(p.price);

    // add to cart
    const addBtn = tpl.querySelector('.addCart');
    addBtn.addEventListener('click', (e)=>{ e.stopPropagation(); addToCart(p.id,1); });

    // fav
    const favBtn = tpl.querySelector('.favBtn');
    favBtn.addEventListener('click', (e)=>{ e.stopPropagation(); toggleFavorite(p.id); });

    // open modal
    article.addEventListener('click', ()=> openModal(p.id));
    article.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter') openModal(p.id) });

    frag.appendChild(tpl);
  });

  container.appendChild(frag);
}

// ====== FORMATEO MONEDA ======
function formatCurrency(n){ return 'COP $' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }

// ====== BUSCADOR Y FILTROS ======
function applyFiltersAndSearch(){
  const q = state.query.trim().toLowerCase();
  const f = state.filters;

  state.filtered = state.products.filter(p=>{
    if(f.model && p.model !== f.model) return false;
    if(f.type && p.type !== f.type) return false;
    if(f.free && !p.freeShip) return false;
    if(p.price < f.min || p.price > f.max) return false;
    if(q) return (p.title + ' ' + p.type + ' ' + p.model + ' ' + p.desc).toLowerCase().includes(q);
    return true;
  });

  renderCatalog();
  updateCounts();
}

// live search
if(selectors.searchInput) selectors.searchInput.addEventListener('input', ()=>{ state.query = selectors.searchInput.value; applyFiltersAndSearch(); });
if(selectors.clearSearch) selectors.clearSearch.addEventListener('click', ()=>{ if(selectors.searchInput) selectors.searchInput.value=''; state.query=''; applyFiltersAndSearch(); });

// filtros UI
if(selectors.filterToggle) selectors.filterToggle.addEventListener('click', ()=> togglePanel(selectors.filtersPanel));

if(selectors.applyFilters) selectors.applyFilters.addEventListener('click', ()=>{
  state.filters.model = selectors.filterModel.value;
  state.filters.type = selectors.filterType.value;
  state.filters.min = parseInt(selectors.priceMin.value) || 0;
  state.filters.max = parseInt(selectors.priceMax.value) || Infinity;
  state.filters.free = selectors.filterFreeShip.checked;
  applyFiltersAndSearch();
  hideElement(selectors.filtersPanel);
});

if(selectors.clearFilters) selectors.clearFilters.addEventListener('click', ()=>{
  selectors.filterModel.value=''; selectors.filterType.value=''; selectors.priceMin.value=''; selectors.priceMax.value=''; selectors.filterFreeShip.checked=false;
  state.filters = { model:'', type:'', min:0, max:Infinity, free:false };
  applyFiltersAndSearch();
});

if(selectors.sortSelect) selectors.sortSelect.addEventListener('change', renderCatalog);
if(selectors.resetBtn) selectors.resetBtn.addEventListener('click', ()=>{
  if(selectors.searchInput) selectors.searchInput.value=''; state.query=''; selectors.filterModel.value=''; selectors.filterType.value=''; selectors.priceMin.value=''; selectors.priceMax.value=''; selectors.filterFreeShip.checked=false;
  state.filters = { model:'', type:'', min:0, max:Infinity, free:false };
  applyFiltersAndSearch();
});

// ====== FAVORITOS ======
function toggleFavorite(id){
  const idx = state.favorites.indexOf(id);
  if(idx===-1) state.favorites.push(id); else state.favorites.splice(idx,1);
  localStorage.setItem('ifx_favs', JSON.stringify(state.favorites));
  updateFavCount();
  renderCatalog();
}
function updateFavCount(){ if(selectors.favCount) selectors.favCount.textContent = state.favorites.length; }
if(selectors.favoritesBtn) selectors.favoritesBtn.addEventListener('click', ()=>{
  // muestra solo favoritos o todo si ya están filtrados
  if(state.filtered.length === state.favorites.length && state.favorites.length>0) {
    state.filtered = [...state.products];
  } else {
    state.filtered = state.products.filter(p=> state.favorites.includes(p.id));
  }
  renderCatalog();
});

// ====== CARRITO ======
function addToCart(id, qty=1){
  if(!state.cart[id]) state.cart[id]=0;
  state.cart[id] += qty;
  localStorage.setItem('ifx_cart', JSON.stringify(state.cart));
  updateCartUI();
  showToast('Añadido al carrito');
}

function removeFromCart(id){
  delete state.cart[id];
  localStorage.setItem('ifx_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function changeCartQty(id, qty){
  if(qty <= 0){ removeFromCart(id); return; }
  state.cart[id] = qty;
  localStorage.setItem('ifx_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function updateCartUI(){
  const items = Object.values(state.cart).reduce((s,n)=>s+n,0);
  if(selectors.cartCount) selectors.cartCount.textContent = items;
  // list
  if(selectors.cartList) selectors.cartList.innerHTML = '';
  let subtotal = 0;
  for(const [id, qty] of Object.entries(state.cart)){
    const p = state.products.find(x=>x.id===id);
    if(!p) continue;
    subtotal += p.price * qty;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.style.display = 'flex';
    item.style.gap = '8px';
    item.style.alignItems = 'center';
    item.innerHTML = `
      <img src="${p.images && p.images[0] ? p.images[0] : ''}" alt="${p.title}" style="width:64px;height:64px;object-fit:cover;border-radius:8px">
      <div style="flex:1">
        <div style="font-weight:700">${p.title}</div>
        <div class="muted" style="font-size:13px">${p.model} • ${p.type}</div>
        <div style="margin-top:6px;display:flex;gap:8px;align-items:center">
          <input type="number" min="0" value="${qty}" data-id="${id}" class="qtyInput" style="width:72px;padding:6px;border-radius:6px;border:1px solid var(--border)">
          <div style="font-weight:800;margin-left:auto">${formatCurrency(p.price * qty)}</div>
        </div>
      </div>
      <button class="icon-btn remove" data-id="${id}" title="Eliminar">✕</button>
    `;
    selectors.cartList.appendChild(item);
  }
  if(selectors.cartSubtotal) selectors.cartSubtotal.textContent = formatCurrency(subtotal);
  if(selectors.cartItemsCount) selectors.cartItemsCount.textContent = items + (items===1 ? ' item' : ' items');

  // listeners
  if(selectors.cartList){
    selectors.cartList.querySelectorAll('.qtyInput').forEach(inp=>{
      inp.addEventListener('change', (e)=>{ const id = e.target.dataset.id; const qty = parseInt(e.target.value) || 0; changeCartQty(id, qty); });
    });
    selectors.cartList.querySelectorAll('.remove').forEach(btn=>{
      btn.addEventListener('click', (e)=>{ const id = e.currentTarget.dataset.id; removeFromCart(id); });
    });
  }
}

if(selectors.cartBtn) selectors.cartBtn.addEventListener('click', ()=> {
  togglePanel(selectors.cartSidebar);
  // actualizar aria-hidden según estado 'show'
  if(selectors.cartSidebar) selectors.cartSidebar.setAttribute('aria-hidden', selectors.cartSidebar.classList.contains('show') ? 'false' : 'true');
});
if(selectors.closeCart) selectors.closeCart.addEventListener('click', ()=> hideElement(selectors.cartSidebar));
if(selectors.clearCartBtn) selectors.clearCartBtn.addEventListener('click', ()=>{ state.cart = {}; localStorage.setItem('ifx_cart', JSON.stringify(state.cart)); updateCartUI(); });
if(selectors.checkoutBtn) selectors.checkoutBtn.addEventListener('click', ()=>{ if(Object.keys(state.cart).length===0){ showToast('El carrito está vacío'); return; } openCheckoutModal(); });

// ====== MODAL PRODUCTO ======
function openModal(id){
  const p = state.products.find(x=>x.id===id);
  if(!p) return;
  if(selectors.modalTitle) selectors.modalTitle.textContent = p.title;
  if(selectors.modalPrice) selectors.modalPrice.textContent = formatCurrency(p.price);
  if(selectors.modalDesc) selectors.modalDesc.textContent = p.desc || '';
  if(selectors.modalType) selectors.modalType.textContent = p.type || '';
  if(selectors.modalModel) selectors.modalModel.textContent = p.model || '';
  if(selectors.modalMainImg) selectors.modalMainImg.src = (p.images && p.images[0]) ? p.images[0] : '';
  if(selectors.modalThumbs) selectors.modalThumbs.innerHTML = '';
  (p.images || []).forEach((src, i)=>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.title + ' ' + (i+1);
    img.style.cursor = 'pointer';
    img.style.width = '48px';
    img.style.height = '48px';
    img.style.objectFit = 'cover';
    img.style.marginRight = '6px';
    if(i===0) img.classList.add('active');
    img.addEventListener('click', ()=> {
      if(selectors.modalMainImg) selectors.modalMainImg.src = src;
      if(selectors.modalThumbs) selectors.modalThumbs.querySelectorAll('img').forEach(t=>t.classList.remove('active'));
      img.classList.add('active');
    });
    if(selectors.modalThumbs) selectors.modalThumbs.appendChild(img);
  });

  if(selectors.addToCartBtn) selectors.addToCartBtn.onclick = ()=> addToCart(p.id, 1);
  if(selectors.favToggle) selectors.favToggle.onclick = ()=> { toggleFavorite(p.id); selectors.favToggle.classList.toggle('active'); };

  showElement(selectors.productModal);
}

const closeModalBtn = document.getElementById('closeModal');
if(closeModalBtn) closeModalBtn.addEventListener('click', ()=> hideElement(selectors.productModal));

// ====== TOAST ======
function showToast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position='fixed';
  t.style.bottom='20px';
  t.style.right='20px';
  t.style.padding='10px 14px';
  t.style.background='rgba(0,0,0,0.8)';
  t.style.color='#fff';
  t.style.borderRadius='8px';
  t.style.zIndex=9999;
  t.style.opacity=0;
  t.style.transform='translateY(8px)';
  document.body.appendChild(t);
  requestAnimationFrame(()=>{ t.style.transition='all .25s'; t.style.opacity=1; t.style.transform='translateY(0)'; });
  setTimeout(()=>{ t.style.opacity=0; t.style.transform='translateY(8px)'; setTimeout(()=>t.remove(),300); }, 1800);
}

// ====== COUNTS ======
function updateCounts(){ if(selectors.cartCount) selectors.cartCount.textContent = Object.values(state.cart).reduce((s,n)=>s+n,0); if(selectors.favCount) selectors.favCount.textContent = state.favorites.length; }

// ====== BIND EVENTOS GENERALES ======
function bindEvents(){
  if(selectors.menuBtn) selectors.menuBtn.addEventListener('click', ()=> togglePanel(selectors.filtersPanel));

  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){
    hideElement(selectors.productModal);
    hideElement(selectors.cartSidebar);
    hideElement(selectors.loginModal);
    hideElement(selectors.adminModal);
    hideElement(selectors.checkoutModal);
    hideElement(selectors.receiptModal);
    hideElement(selectors.filtersPanel);
  }});

  if(selectors.themeToggle) selectors.themeToggle.addEventListener('click', toggleTheme);

  // login button (in header)
  if(selectors.loginBtn) selectors.loginBtn.addEventListener('click', ()=> showElement(selectors.loginModal));
  if(selectors.closeLoginModal) selectors.closeLoginModal.addEventListener('click', ()=> hideElement(selectors.loginModal));
  const loginCancel = document.getElementById('loginCloseBtn');
  if(loginCancel) loginCancel.addEventListener('click', ()=> hideElement(selectors.loginModal));

  if(selectors.loginForm) selectors.loginForm.addEventListener('submit', handleLogin);

  // admin
  if(selectors.adminPanelBtn) selectors.adminPanelBtn.addEventListener('click', ()=> {
    if(!state.user || !state.user.isAdmin){ showToast('Solo administradores pueden acceder'); return; }
    showElement(selectors.adminModal);
  });
  if(selectors.closeAdminModal) selectors.closeAdminModal.addEventListener('click', ()=> hideElement(selectors.adminModal));
  const adminCancel = document.getElementById('adminCancelBtn');
  if(adminCancel) adminCancel.addEventListener('click', ()=> hideElement(selectors.adminModal));
  if(selectors.addProductForm) selectors.addProductForm.addEventListener('submit', handleAddProduct);

  // checkout
  if(selectors.closeCheckoutModal) selectors.closeCheckoutModal.addEventListener('click', ()=> hideElement(selectors.checkoutModal));
  const checkoutCancel = document.getElementById('checkoutCancelBtn');
  if(checkoutCancel) checkoutCancel.addEventListener('click', ()=> hideElement(selectors.checkoutModal));
  if(selectors.fakePayBtn) selectors.fakePayBtn.addEventListener('click', handleFakePayment);

  // receipt
  const receiptOk = document.getElementById('receiptOkBtn');
  if(receiptOk) receiptOk.addEventListener('click', ()=> hideElement(selectors.receiptModal));
}
bindEvents();

// ====== THEME ======
function applyTheme(){
  if(state.theme === 'dark') document.documentElement.style.background = '#0b1220';
  document.documentElement.setAttribute('data-theme', state.theme);
  if(state.theme === 'dark'){
    document.documentElement.style.setProperty('--bg','#07101a');
    document.documentElement.style.setProperty('--card','#071822');
    document.documentElement.style.setProperty('--text','#e6f0f8');
    document.documentElement.style.setProperty('--muted','#9fb0bf');
    document.documentElement.style.setProperty('--accent','#27a0ff');
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--accent');
  }
  localStorage.setItem('ifx_theme', state.theme);
}
function toggleTheme(){ state.theme = state.theme === 'dark' ? 'light' : 'dark'; applyTheme(); }

// ====== AUTH (ficticio) ======
function handleLogin(e){
  e.preventDefault();
  const email = (selectors.loginEmail && selectors.loginEmail.value || '').trim();
  const pass = (selectors.loginPass && selectors.loginPass.value) || '';
  if(!email || !pass){ showToast('Completa email y contraseña'); return; }
  const isAdmin = email.toLowerCase() === 'admin@ifix.com';
  state.user = { email, isAdmin };
  localStorage.setItem('ifx_user', JSON.stringify(state.user));
  hideElement(selectors.loginModal);
  showToast(`Bienvenido ${email}`);
  updateAuthUI();
}

function updateAuthUI(){
  if(state.user){
    // replace header login button to show username and logout on click
    if(selectors.loginBtn){
      selectors.loginBtn.textContent = state.user.email.split('@')[0];
      selectors.loginBtn.classList.remove('ghost');
      selectors.loginBtn.classList.add('secondary');
      selectors.loginBtn.onclick = ()=> {
        if(confirm('Cerrar sesión?')){ state.user = null; localStorage.removeItem('ifx_user'); updateAuthUI(); showToast('Sesión cerrada'); }
      };
    }
    if(state.user.isAdmin) selectors.adminPanelBtn.classList.remove('hidden'); else selectors.adminPanelBtn.classList.add('hidden');
  } else {
    if(selectors.loginBtn){
      selectors.loginBtn.textContent = 'Iniciar sesión';
      selectors.loginBtn.classList.remove('secondary');
      selectors.loginBtn.classList.add('ghost');
      selectors.loginBtn.onclick = ()=> showElement(selectors.loginModal);
    }
    selectors.adminPanelBtn.classList.add('hidden');
  }
}

// ====== ADMIN: AGREGAR PRODUCTO ======
function handleAddProduct(e){
  e.preventDefault();
  if(!state.user || !state.user.isAdmin){ showToast('Acceso denegado'); hideElement(selectors.adminModal); return; }
  const title = document.getElementById('pTitle').value.trim();
  const price = parseInt(document.getElementById('pPrice').value) || 0;
  const type = document.getElementById('pType').value.trim();
  const model = document.getElementById('pModel').value.trim();
  const image = document.getElementById('pImage').value.trim();
  const desc = document.getElementById('pDesc').value.trim();
  const freeShip = document.getElementById('pFreeShip').checked;
  const id = 'p' + Date.now();
  const newProd = { id, title, price, type, model, images: image ? [image] : [], desc, freeShip };
  state.products.unshift(newProd);
  localStorage.setItem('ifx_products', JSON.stringify(state.products));
  selectors.addProductForm.reset();
  hideElement(selectors.adminModal);
  applyFiltersAndSearch();
  showToast('Producto agregado');
}

// ====== CHECKOUT (ficticio) ======
function openCheckoutModal(){
  if(!selectors.checkoutItems) return;
  selectors.checkoutItems.innerHTML = '';
  let subtotal = 0;
  for(const [id, qty] of Object.entries(state.cart)){
    const p = state.products.find(x=>x.id===id);
    if(!p) continue;
    subtotal += p.price * qty;
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.marginBottom = '6px';
    div.innerHTML = `<div>${p.title} x${qty}</div><div style="font-weight:800">${formatCurrency(p.price*qty)}</div>`;
    selectors.checkoutItems.appendChild(div);
  }
  if(selectors.checkoutSubtotal) selectors.checkoutSubtotal.textContent = formatCurrency(subtotal);
  showElement(selectors.checkoutModal);
}

function handleFakePayment(){
  const name = document.getElementById('payName') ? document.getElementById('payName').value.trim() : '';
  const card = document.getElementById('payCard') ? document.getElementById('payCard').value.replace(/\s+/g,'') : '';
  const exp = document.getElementById('payExp') ? document.getElementById('payExp').value.trim() : '';
  const cvv = document.getElementById('payCVV') ? document.getElementById('payCVV').value.trim() : '';
  if(!name || !card || !exp || !cvv){ showToast('Completa los datos de la tarjeta'); return; }
  if(card.length < 12){ showToast('Número de tarjeta inválido'); return; }
  if(selectors.fakePayBtn) selectors.fakePayBtn.disabled = true;
  if(selectors.fakePayBtn) selectors.fakePayBtn.textContent = 'Procesando...';
  setTimeout(()=> {
    const now = new Date();
    const recId = 'REC-' + now.getTime();
    const total = Object.entries(state.cart).reduce((s,[id,qty])=>{
      const p = state.products.find(x=>x.id===id);
      return s + (p ? p.price * qty : 0);
    }, 0);
    state.cart = {};
    localStorage.setItem('ifx_cart', JSON.stringify(state.cart));
    updateCartUI();
    hideElement(selectors.checkoutModal);
    if(selectors.receiptText) selectors.receiptText.textContent = `Pago simulado ID ${recId} — Total: ${formatCurrency(total)}. Gracias.`;
    showElement(selectors.receiptModal);
    if(selectors.fakePayBtn) selectors.fakePayBtn.disabled = false;
    if(selectors.fakePayBtn) selectors.fakePayBtn.textContent = 'Confirmar pago';
  }, 1200);
}
