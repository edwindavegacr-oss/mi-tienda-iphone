const PRODUCTS = [
  {
    id: "p1",
    title: "Pantalla iPhone 11 Original",
    price: 420000,
    type: "Pantalla",
    model: "iPhone 11",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.loIXDU_WQLQbgwod_XP75QHaH7?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    desc: "Pantalla original con buen brillo y tacto. Incluye digitalizador.",
    freeShip: true,
    featured: true
  },
  {
    id: "p2",
    title: "Batería iPhone XS (Nueva)",
    price: 160000,
    type: "Batería",
    model: "iPhone XS",
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.VlbuYDSMoYnWT5NokT_FRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    desc: "Batería de alta duración con garantía 6 meses.",
    freeShip: true
  },
  {
    id: "p3",
    title: "Cámara Trasera iPhone 12 Pro",
    price: 350000,
    type: "Cámara",
    model: "iPhone 12",
    images: [
      "https://www.iphonebull.com/5296-thickbox_default/camara-trasera-iphone-12-pro-original.jpg"
    ],
    desc: "Módulo cámara trasera compatible con iPhone 12 Pro.",
    freeShip: true
  },
  {
    id: "p4",
    title: "Flex de Carga iPhone 7",
    price: 45000,
    type: "Flex",
    model: "iPhone 7",
    images: [
      "https://www.korzaimportaciones.com/imgs/productos/productos34_4494.jpg"
    ],
    desc: "Flex original para carga y micrófono.",
    freeShip: false
  },
  {
    id: "p5",
    title: "Módulo Pantalla iPhone 13",
    price: 520000,
    type: "Pantalla",
    model: "iPhone 13",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_780128-MLU74432352875_022024-O.webp"
    ],
    desc: "Módulo completo con marcos y adhesivos.",
    freeShip: true
  },
  {
    id: "p6",
    title: "Altavoz Inferior iPhone 8",
    price: 58000,
    type: "Altavoz",
    model: "iPhone 8",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_932395-MLM84247801567_042025-O-refaccion-bocina-inferior-altavoz-para-iphone-8-plus-origin.webp"
    ],
    desc: "Altavoz inferior con calidad original.",
    freeShip: true
  },

  // EXTRA
  { id:"p7", title:"Pantalla iPhone X OLED", price:390000, type:"Pantalla", model:"iPhone X", images:["https://tse4.mm.bing.net/th/id/OIP.dJX4HHHiYUcVgSVAKrmq8QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"OLED full", freeShip:true },
  { id:"p8", title:"Batería iPhone 11 Alta Duración", price:180000, type:"Batería", model:"iPhone 11", images:["https://tse2.mm.bing.net/th/id/OIP.wZ3LaCkVSmoyeNZYSc94bgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"Batería premium", freeShip:true },
  { id:"p9", title:"Cámara Frontal iPhone 13", price:210000, type:"Cámara", model:"iPhone 13", images:["https://tse3.mm.bing.net/th/id/OIP.9L7waTMB6cqapLu1aLXaYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"Cámara selfie", freeShip:true },
  { id:"p10", title:"Módulo Face ID iPhone XR", price:300000, type:"Face ID", model:"iPhone XR", images:["https://cdn.awsli.com.br/2500x2500/2405/2405967/produto/1788645262b6d2f9a68.jpg"], desc:"Módulo Face ID", freeShip:false },
  { id:"p11", title:"Chasis Completo iPhone 11 Pro", price:480000, type:"Chasis", model:"iPhone 11", images:["https://www.movilcrack.com/media/catalog/product/cache/1/image/e4f870b454d8504a935062be0ec1b2c9/c/h/chasis_completo_tapa_trasera_iphone_11_pro_max_-_negro_1.jpg"], desc:"Chasis completo", freeShip:true },
  { id:"p12", title:"Micrófono Inferior iPhone XS Max", price:42000, type:"Micrófono", model:"iPhone XS Max", images:["https://tse4.mm.bing.net/th/id/OIP.xRHE0bweFbyeF3BHjCv-lwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"Micrófono de voz", freeShip:false },

  { id:"p13", title:"Pantalla iPhone 12 Mini OLED", price:490000, type:"Pantalla", model:"iPhone 12", images:["https://www.tout4phone.fr/wp-content/uploads/2023/05/Pantalla-iPhone-12-Mini.jpg"], desc:"OLED mini", freeShip:true },

  { id:"p14", title:"Pantalla iPhone X OLED", price:390000, type:"Pantalla", model:"iPhone X", images:["https://tse4.mm.bing.net/th/id/OIP.dJX4HHHiYUcVgSVAKrmq8QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"OLED full", freeShip:true },
  { id:"p15", title:"Batería iPhone 11 Alta Duración", price:180000, type:"Batería", model:"iPhone 11", images:["https://tse2.mm.bing.net/th/id/OIP.wZ3LaCkVSmoyeNZYSc94bgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"Batería premium", freeShip:true },
  { id:"p16", title:"Cámara Frontal iPhone 13", price:210000, type:"Cámara", model:"iPhone 13", images:["https://tse3.mm.bing.net/th/id/OIP.9L7waTMB6cqapLu1aLXaYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"Cámara selfie", freeShip:true },
  { id:"p17", title:"Módulo Face ID iPhone XR", price:300000, type:"Face ID", model:"iPhone XR", images:["https://cdn.awsli.com.br/2500x2500/2405/2405967/produto/1788645262b6d2f9a68.jpg"], desc:"Módulo Face ID", freeShip:false },
  { id:"p18", title:"Chasis Completo iPhone 11 Pro", price:480000, type:"Chasis", model:"iPhone 11", images:["https://www.movilcrack.com/media/catalog/product/cache/1/image/e4f870b454d8504a935062be0ec1b2c9/c/h/chasis_completo_tapa_trasera_iphone_11_pro_max_-_negro_1.jpg"], desc:"Chasis completo", freeShip:true },
  { id:"p19", title:"Micrófono Inferior iPhone XS Max", price:42000, type:"Micrófono", model:"iPhone XS Max", images:["https://tse4.mm.bing.net/th/id/OIP.xRHE0bweFbyeF3BHjCv-lwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"], desc:"Micrófono de voz", freeShip:false },
  { id:"p20", title:"Pantalla iPhone 12 Mini OLED", price:490000, type:"Pantalla", model:"iPhone 12", images:["https://www.tout4phone.fr/wp-content/uploads/2023/05/Pantalla-iPhone-12-Mini.jpg"], desc:"OLED mini", freeShip:true }
];

// ====== ESTADO Y SELECTORES ======
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
  favToggleBtn: null,
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
  themeToggle: document.getElementById('themeToggle')
};

let state = {
  products: [...PRODUCTS],
  filtered: [...PRODUCTS],
  query: '',
  filters: { model:'', type:'', min:0, max:Infinity, free:false },
  favorites: JSON.parse(localStorage.getItem('ifx_favs')||'[]'),
  cart: JSON.parse(localStorage.getItem('ifx_cart')||'{}'),
  theme: localStorage.getItem('ifx_theme') || 'light'
};

// ====== INICIALIZACIÓN ======
function init(){
  applyTheme();
  bindEvents();
  renderCatalog();
  updateFavCount();
  updateCartUI();
}

// ====== RENDER CATALOGO ======
function renderCatalog(){
  const container = selectors.catalog;
  container.innerHTML = '';
  const frag = document.createDocumentFragment();

  let list = [...state.filtered];

  // ordenar
  const sort = selectors.sortSelect.value;
  if(sort==='price_asc') list.sort((a,b)=>a.price-b.price);
  if(sort==='price_desc') list.sort((a,b)=>b.price-a.price);
  if(sort==='name_asc') list.sort((a,b)=>a.title.localeCompare(b.title));

  if(list.length===0){
    selectors.emptyState.classList.remove('hidden');
  } else {
    selectors.emptyState.classList.add('hidden');
  }

  list.forEach(p=>{
    const tpl = selectors.template.content.cloneNode(true);
    const article = tpl.querySelector('article');
    article.dataset.id = p.id;

    const img = tpl.querySelector('.card-img');
    img.src = p.images[0];
    img.alt = p.title;

    tpl.querySelector('.card-title').textContent = p.title;
    tpl.querySelector('.card-sub').textContent = `${p.model} • ${p.type}`;
    tpl.querySelector('.price').textContent = formatCurrency(p.price);

    // ribbon si destacado o envio gratis
    const ribbon = tpl.querySelector('.ribbon');
    if(p.featured) ribbon.textContent = 'Top';
    else if(p.freeShip) ribbon.textContent = 'Envío';

    // botones
    const addBtn = tpl.querySelector('.addCart');
    addBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      addToCart(p.id,1);
    });

    const favBtn = tpl.querySelector('.favBtn');
    favBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleFavorite(p.id);
    });

    // click abre modal
    article.addEventListener('click', ()=> openModal(p.id));
    // keyboard accessibility
    article.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter') openModal(p.id) });

    frag.appendChild(tpl);
  });

  container.appendChild(frag);
}

// ====== FORMATEO MONEDA ======
function formatCurrency(n){
  return 'COP $' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ====== FILTRADO y BUSCADOR ======
function applyFiltersAndSearch(){
  const q = state.query.trim().toLowerCase();
  const f = state.filters;

  state.filtered = state.products.filter(p=>{
    if(f.model && p.model !== f.model) return false;
    if(f.type && p.type !== f.type) return false;
    if(f.free && !p.freeShip) return false;
    if(p.price < f.min || p.price > f.max) return false;
    if(q){
      return (p.title + ' ' + p.type + ' ' + p.model + ' ' + p.desc).toLowerCase().includes(q);
    }
    return true;
  });

  renderCatalog();
  updateCounts();
}

// live search
selectors.searchInput.addEventListener('input', ()=>{
  state.query = selectors.searchInput.value;
  applyFiltersAndSearch();
});

// limpiar busqueda
selectors.clearSearch.addEventListener('click', ()=>{
  selectors.searchInput.value = '';
  state.query = '';
  applyFiltersAndSearch();
});

// filtros UI
selectors.filterToggle.addEventListener('click', ()=> selectors.filtersPanel.classList.toggle('hidden'));

selectors.applyFilters.addEventListener('click', ()=>{
  state.filters.model = selectors.filterModel.value;
  state.filters.type = selectors.filterType.value;
  const min = parseInt(selectors.priceMin.value) || 0;
  const max = parseInt(selectors.priceMax.value) || Infinity;
  state.filters.min = min;
  state.filters.max = max;
  state.filters.free = selectors.filterFreeShip.checked;
  applyFiltersAndSearch();
  selectors.filtersPanel.classList.add('hidden');
});

selectors.clearFilters.addEventListener('click', ()=>{
  selectors.filterModel.value = '';
  selectors.filterType.value = '';
  selectors.priceMin.value = '';
  selectors.priceMax.value = '';
  selectors.filterFreeShip.checked = false;
  state.filters = { model:'', type:'', min:0, max:Infinity, free:false };
  applyFiltersAndSearch();
});

// ordenar
selectors.sortSelect.addEventListener('change', renderCatalog);

// reset boton empty
selectors.resetBtn.addEventListener('click', ()=>{
  selectors.searchInput.value = '';
  state.query = '';
  selectors.filterModel.value='';
  selectors.filterType.value='';
  selectors.priceMin.value='';
  selectors.priceMax.value='';
  selectors.filterFreeShip.checked=false;
  state.filters = { model:'', type:'', min:0, max:Infinity, free:false };
  applyFiltersAndSearch();
});

// ====== FAVORITOS ======
function toggleFavorite(id){
  const idx = state.favorites.indexOf(id);
  if(idx===-1) state.favorites.push(id);
  else state.favorites.splice(idx,1);
  localStorage.setItem('ifx_favs', JSON.stringify(state.favorites));
  updateFavCount();
  renderCatalog();
}

function updateFavCount(){
  selectors.favCount.textContent = state.favorites.length;
}

// mostrar solo favoritos cuando se presione el boton favoritos
selectors.favoritesBtn.addEventListener('click', ()=>{
  if(state.filtered.length === state.favorites.length && state.favorites.length>0){
    // si ya estamos mostrando solo favoritos -> resetear
    state.filtered = [...state.products];
  } else {
    state.filtered = state.products.filter(p=> state.favorites.includes(p.id));
  }
  renderCatalog();
});

// ====== CARRITO ======
function addToCart(id, qty=1){
  if(!state.cart[id]) state.cart[id] = 0;
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
  // counts
  const items = Object.values(state.cart).reduce((s,n)=>s+n,0);
  selectors.cartCount.textContent = items;
  document.getElementById('cartCount').textContent = items;

  // list
  selectors.cartList.innerHTML = '';
  let subtotal = 0;
  for(const [id, qty] of Object.entries(state.cart)){
    const p = state.products.find(x=>x.id===id);
    if(!p) continue;
    subtotal += p.price * qty;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${p.images[0]}" alt="${p.title}">
      <div style="flex:1">
        <div style="font-weight:700">${p.title}</div>
        <div class="muted" style="font-size:13px">${p.model} • ${p.type}</div>
        <div style="margin-top:6px;display:flex;gap:8px;align-items:center">
          <input type="number" min="0" value="${qty}" data-id="${id}" class="qtyInput" style="width:72px;padding:6px;border-radius:6px;border:1px solid #e6eef9">
          <div style="font-weight:800;margin-left:auto">${formatCurrency(p.price * qty)}</div>
        </div>
      </div>
      <button class="icon-btn remove" data-id="${id}">✕</button>
    `;
    selectors.cartList.appendChild(item);
  }

  selectors.cartSubtotal.textContent = formatCurrency(subtotal);
  selectors.cartItemsCount.textContent = items + (items===1 ? ' item' : ' items');

  // listeners para inputs y botones
  selectors.cartList.querySelectorAll('.qtyInput').forEach(inp=>{
    inp.addEventListener('change', (e)=>{
      const id = e.target.dataset.id;
      const qty = parseInt(e.target.value) || 0;
      changeCartQty(id, qty);
    });
  });
  selectors.cartList.querySelectorAll('.remove').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.target.dataset.id;
      removeFromCart(id);
    });
  });
}

// abrir/ cerrar carrito
selectors.cartBtn.addEventListener('click', ()=> {
  selectors.cartSidebar.classList.toggle('hidden');
  selectors.cartSidebar.setAttribute('aria-hidden', selectors.cartSidebar.classList.contains('hidden'));
});
selectors.closeCart.addEventListener('click', ()=> selectors.cartSidebar.classList.add('hidden'));
selectors.clearCartBtn.addEventListener('click', ()=>{
  state.cart = {};
  localStorage.setItem('ifx_cart', JSON.stringify(state.cart));
  updateCartUI();
});

// simulación checkout
selectors.checkoutBtn.addEventListener('click', ()=>{
  if(Object.keys(state.cart).length===0){ showToast('El carrito está vacío'); return; }
  // aquí podrías integrar pasarela o API
  showToast('Checkout simulado — implementar backend para pagar');
});

// ====== MODAL PRODUCTO ======
function openModal(id){
  const p = state.products.find(x=>x.id===id);
  if(!p) return;
  selectors.modalTitle.textContent = p.title;
  selectors.modalPrice.textContent = formatCurrency(p.price);
  selectors.modalDesc.textContent = p.desc;
  selectors.modalType.textContent = p.type;
  selectors.modalModel.textContent = p.model;
  selectors.modalMainImg.src = p.images[0];
  selectors.modalThumbs.innerHTML = '';
  p.images.forEach((src, i)=>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.title + ' ' + (i+1);
    if(i===0) img.classList.add('active');
    img.addEventListener('click', ()=> {
      selectors.modalMainImg.src = src;
      selectors.modalThumbs.querySelectorAll('img').forEach(t=>t.classList.remove('active'));
      img.classList.add('active');
    });
    selectors.modalThumbs.appendChild(img);
  });

  selectors.addToCartBtn.onclick = ()=> addToCart(p.id, 1);
  selectors.favToggle.onclick = ()=> { toggleFavorite(p.id); selectors.favToggle.classList.toggle('active'); };

  selectors.productModal.classList.remove('hidden');
  selectors.productModal.setAttribute('aria-hidden','false');
}

document.getElementById('closeModal').addEventListener('click', ()=> {
  selectors.productModal.classList.add('hidden');
  selectors.productModal.setAttribute('aria-hidden','true');
});

// ====== UTILIDADES ======
function showToast(msg){
  // toast simple
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

// recuentos globales
function updateCounts(){
  selectors.cartCount.textContent = Object.values(state.cart).reduce((s,n)=>s+n,0);
  selectors.favCount.textContent = state.favorites.length;
}

// BIND eventos generales
function bindEvents(){
  // open filters on load small screens via menu
  selectors.menuBtn.addEventListener('click', ()=> selectors.filtersPanel.classList.toggle('hidden'));

  // keyboard escape to close modal or cart
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
      selectors.productModal.classList.add('hidden');
      selectors.cartSidebar.classList.add('hidden');
    }
  });

  // try to fetch external products.json (optional)
  // fetch('products.json').then(r=>r.json()).then(data=>{
  //   state.products = data;
  //   applyFiltersAndSearch();
  // }).catch(()=>{ /* fallback a PRODUCTS en memoria */ });

  // theme toggle
  selectors.themeToggle.addEventListener('click', toggleTheme);

  // initial counts
  updateCounts();
}

// THEME
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
    // reset to default root values (defined in CSS)
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--text');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--accent');
  }
  localStorage.setItem('ifx_theme', state.theme);
}

function toggleTheme(){
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
}

// init app
init();
