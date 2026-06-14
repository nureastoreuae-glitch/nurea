const state = { lang: 'en', bestOnly: false, products: [], rituals: [] };
const WHATSAPP_NUMBER = '971000000000'; // TODO: Replace with NURÉA WhatsApp number before publishing.

const t = {
  en: {
    navProducts:'Products', navRituals:'Rituals', navAbout:'About', navFaq:'FAQ',
    heroEyebrow:'Curated Korean skincare in UAE',
    heroTitle:'A refined skincare edit for calm, luminous, healthy-looking skin.',
    heroText:'NURÉA brings together selected Korean skincare essentials, clear routines, and direct WhatsApp ordering for Dubai and the UAE.',
    shopNow:'Explore products', viewRituals:'View rituals', quickTitle:'Quick questions',
    catalogEyebrow:'Catalog', catalogTitle:'Products', bestOnly:'Best Seller only',
    ritualEyebrow:'Routines', ritualTitle:'NURÉA Rituals',
    aboutEyebrow:'About NURÉA', aboutTitle:'A curated beauty destination, not a random skincare shelf.',
    aboutText:'NURÉA is built in Dubai with a simple idea: make Korean skincare feel clear, refined, and easy to shop. Every product is presented with its role, skin concern, routine step, and a direct order path.',
    faqTitle:'FAQ', policiesTitle:'Policies', policiesText:'This is a draft policy section. Final privacy, terms, delivery, return, and authenticity wording should be reviewed before publishing.',
    footerText:'Curated Korean skincare in UAE. Orders via WhatsApp and Instagram DM.', whatsappGeneral:'Order on WhatsApp',
    allCategories:'All categories', allBrands:'All brands', allConcerns:'All concerns', available:'Available', out:'Out of Stock', coming:'Coming Soon',
    order:'Order this product', ritualOrder:'Order this ritual', steps:'Routine steps', included:'Included products', noResults:'No products match this search yet.',
    launch:'Launch Price', old:'Before', bestSeller:'Best Seller', status:'Status', concern:'Concerns', category:'Category', productRequest:'Hello NURÉA, I would like to order', ritualRequest:'Hello NURÉA, I would like to order the ritual'
  },
  ar: {
    navProducts:'المنتجات', navRituals:'الريتوالز', navAbout:'عن نورية', navFaq:'الأسئلة',
    heroEyebrow:'اختيارات كورية بعناية في الإمارات',
    heroTitle:'اختيارات سكين كير راقية لبشرة هادئة، نضرة، وصحية المظهر.',
    heroText:'نورية تجمع منتجات كورية مختارة، روتينات واضحة، وطريقة طلب مباشرة عبر واتساب داخل دبي والإمارات.',
    shopNow:'تصفحي المنتجات', viewRituals:'شاهدي الريتوالز', quickTitle:'أسئلة سريعة',
    catalogEyebrow:'الكتالوج', catalogTitle:'المنتجات', bestOnly:'Best Seller فقط',
    ritualEyebrow:'روتينات', ritualTitle:'ريتوالز نورية',
    aboutEyebrow:'عن نورية', aboutTitle:'وجهة بيوتي مختارة بعناية، مش مجرد رف منتجات عشوائي.',
    aboutText:'نورية بدأت في دبي بفكرة بسيطة: نخلي السكين كير الكوري أوضح، أرقى، وأسهل في الشراء. كل منتج معروض بدوره، مشكلة البشرة المناسبة له، خطوة استخدامه، وطريقة طلب مباشرة.',
    faqTitle:'الأسئلة الشائعة', policiesTitle:'السياسات', policiesText:'هذا قسم سياسات مبدئي. يجب مراجعة نصوص الخصوصية، الشروط، التوصيل، الاسترجاع، والأصالة قبل النشر النهائي.',
    footerText:'اختيارات كورية بعناية في الإمارات. الطلبات عبر واتساب ورسائل إنستغرام.', whatsappGeneral:'اطلبي عبر واتساب',
    allCategories:'كل الفئات', allBrands:'كل البراندات', allConcerns:'كل الاهتمامات', available:'متوفر', out:'غير متوفر', coming:'قريبًا',
    order:'طلب هذا المنتج', ritualOrder:'طلب هذا الريتوال', steps:'خطوات الروتين', included:'المنتجات الموجودة', noResults:'لا توجد منتجات مطابقة للبحث حاليًا.',
    launch:'Launch Price', old:'قبل', bestSeller:'الأكثر طلبًا', status:'الحالة', concern:'الاهتمامات', category:'الفئة', productRequest:'مرحبًا نورية، أريد طلب', ritualRequest:'مرحبًا نورية، أريد طلب ريتوال'
  }
};

const quick = {
  en: [
    ['Need help choosing?', 'Search by concern: dark spots, pores, hydration, sensitive skin, or barrier.'],
    ['How to order?', 'Open any product and use the WhatsApp button with a ready message.'],
    ['Authenticity?', 'NURÉA is positioned around curated, authentic Korean skincare selections.'],
    ['Delivery?', 'Delivery details can be finalized for Dubai and UAE before launch.']
  ],
  ar: [
    ['محتارة تختاري؟', 'استخدمي البحث حسب المشكلة: التصبغات، المسام، الترطيب، الحساسية، أو الحاجز.'],
    ['إزاي تطلبي؟', 'افتحي أي منتج واضغطي زر واتساب برسالة جاهزة للطلب.'],
    ['الأصالة؟', 'نورية مبنية على اختيارات كورية أصلية ومنتقاة بعناية.'],
    ['التوصيل؟', 'تفاصيل التوصيل لدبي والإمارات تتثبت قبل الإطلاق النهائي.']
  ]
};

const faq = {
  en: [
    ['Are products authentic?', 'The final website should state the exact authenticity process once supplier documents and sourcing wording are confirmed.'],
    ['How do I order?', 'Choose a product or ritual, then click the WhatsApp button. The message will include the item name automatically.'],
    ['Are prices final?', 'These are draft Launch Prices and comparison prices for review. Final prices can be edited in data/products.json.'],
    ['Can I search by skin concern?', 'Yes. The catalog supports search by concern, product name, brand, and category.']
  ],
  ar: [
    ['هل المنتجات أصلية؟', 'النسخة النهائية لازم تذكر صياغة الأصالة بعد تثبيت وثائق المورد وطريقة التوريد.'],
    ['إزاي أطلب؟', 'اختاري المنتج أو الريتوال، واضغطي زر واتساب. الرسالة الجاهزة هتتكتب باسم المنتج تلقائيًا.'],
    ['هل الأسعار نهائية؟', 'دي أسعار إطلاق مبدئية وأسعار مقارنة للمراجعة. يمكن تعديلها من ملف data/products.json.'],
    ['هل أقدر أبحث حسب مشكلة البشرة؟', 'نعم. الكتالوج يدعم البحث حسب المشكلة، اسم المنتج، البراند، والفئة.']
  ]
};

const ritualDefs = [
  {id:'morning-glow', name:'Complete Morning Glow Ritual', ar:'ريتوال الصباح الكامل للنضارة', ids:['cosrx-low-ph','anua-heartleaf77','axis-y-dark-spot','cosrx-snail92','boj-relief-sun-rice'], price:279, old:356},
  {id:'full-anua', name:'Full Anua Ritual', ar:'ريتوال أنوا الكامل', ids:['anua-pore-oil','anua-quercetinol-foam','anua-heartleaf77','anua-niacinamide-txa4'], price:249, old:316},
  {id:'snail-duo', name:'COSRX Snail Iconic Duo', ar:'ثنائي كوسركس سنيل الأيقوني', ids:['cosrx-snail96','cosrx-snail92'], price:129, old:164},
  {id:'barrier-rescue', name:'Sensitive Barrier Rescue Ritual', ar:'ريتوال إنقاذ حاجز البشرة الحساسة', ids:['cosrx-low-ph','anua-heartleaf77','dr-althea-345','boj-relief-sun-rice'], price:259, old:342},
  {id:'pdrn-glow', name:'Medicube PDRN Glow Ritual', ar:'ريتوال ميديكوب PDRN جلو', ids:['medicube-pink-cica-toner','medicube-pdrn-shot','medicube-capsule-cream'], price:349, old:477},
  {id:'zero-pore', name:'Zero Pore Deep Clean Ritual', ar:'ريتوال تنظيف المسام العميق', ids:['medicube-zero-oil','medicube-zero-pore-toner'], price:179, old:254},
  {id:'dark-spot-defense', name:'Dubai Dark Spot Defense Ritual', ar:'ريتوال دبي للتصبغات', ids:['axis-y-dark-spot','dr-althea-345','boj-relief-sun-rice'], price:219, old:303},
  {id:'boj-glow', name:'BOJ Glow Ritual', ar:'ريتوال بيوتي أوف جوسون جلو', ids:['boj-ginseng-oil','boj-ginseng-essence','boj-rice-milk','boj-relief-sun-rice'], price:289, old:402},
  {id:'beginner-first-step', name:'Beginner’s First Step Ritual', ar:'ريتوال البداية الأولى', ids:['anua-heartleaf77','cosrx-snail92','boj-relief-sun-rice'], price:199, old:263},
  {id:'weekly-night', name:'Weekly Glow Night Ritual', ar:'ريتوال النضارة الأسبوعي الليلي', ids:['anua-heartleaf77','axis-y-dark-spot','biodance-collagen-mask'], price:149, old:219},
  {id:'eye-duo', name:'Eye Care Duo Ritual', ar:'ريتوال العناية بمنطقة العين', ids:['boj-revive-eye','axis-y-collagen-eye'], price:119, old:174},
  {id:'centella-calm', name:'Skin1004 Centella Calm Ritual', ar:'ريتوال سنتيلا للتهدئة', ids:['skin1004-toning-toner','skin1004-hyalu-cica','boj-relief-sun-rice'], price:229, old:303}
];

function currency(n){ return `<span class="aed-symbol">D</span>${n}`; }
function statusLabel(s){ return s==='available'?t[state.lang].available:s==='out'?t[state.lang].out:t[state.lang].coming; }
function getTitle(p){ return state.lang==='ar' ? p.nameAr : p.name; }
function getDesc(p){ return state.lang==='ar' ? p.descAr : p.desc; }
function productById(id){ return state.products.find(p=>p.id===id); }
function waLink(type, name){ const prefix = type==='ritual' ? t[state.lang].ritualRequest : t[state.lang].productRequest; return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefix + ' ' + name + '.')}`; }

async function init(){
  const res = await fetch('data/products.json');
  state.products = await res.json();
  state.rituals = ritualDefs;
  renderAll();
  bindEvents();
}

function bindEvents(){
  document.getElementById('langToggle').addEventListener('click', ()=>{ state.lang = state.lang==='en'?'ar':'en'; renderAll(); });
  ['searchInput','categoryFilter','brandFilter','concernFilter'].forEach(id=>document.getElementById(id).addEventListener('input', renderProducts));
  document.getElementById('bestFilter').addEventListener('click', ()=>{ state.bestOnly=!state.bestOnly; document.getElementById('bestFilter').classList.toggle('active-filter',state.bestOnly); renderProducts(); });
  document.getElementById('modalClose').addEventListener('click', ()=>document.getElementById('productModal').close());
}

function renderAll(){
  document.documentElement.lang = state.lang;
  document.body.dir = state.lang==='ar'?'rtl':'ltr';
  document.getElementById('langToggle').textContent = state.lang==='en'?'العربية':'English';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const key=el.dataset.i18n; if(t[state.lang][key]) el.textContent=t[state.lang][key]; });
  const search = document.getElementById('searchInput'); search.placeholder = state.lang==='ar'?search.dataset.placeholderAr:search.dataset.placeholderEn;
  renderHero(); renderQuick(); fillFilters(); renderProducts(); renderRituals(); renderFaq();
  document.getElementById('generalWhatsApp').href = waLink('general', 'NURÉA order');
}

function renderHero(){
  const p = productById('anua-rice70-toner') || state.products[0];
  document.getElementById('heroFeature').innerHTML = `<img src="${p.image}" alt="${getTitle(p)}"><div class="feature-copy"><h3>${getTitle(p)}</h3><div class="price-row"><span class="price">${t[state.lang].launch}: ${currency(p.price)}</span><span class="old">${currency(p.old)}</span></div></div>`;
}
function renderQuick(){
  document.querySelector('.quick-grid').innerHTML = quick[state.lang].map(([a,b])=>`<div class="quick-card"><strong>${a}</strong><span>${b}</span></div>`).join('');
}
function fillFilters(){
  const cats=[...new Set(state.products.map(p=>p.cat))].sort(); const brands=[...new Set(state.products.map(p=>p.brand))].sort(); const concerns=[...new Set(state.products.flatMap(p=>p.concerns))].sort();
  setOptions('categoryFilter', cats, t[state.lang].allCategories); setOptions('brandFilter', brands, t[state.lang].allBrands); setOptions('concernFilter', concerns, t[state.lang].allConcerns);
}
function setOptions(id, arr, label){ const el=document.getElementById(id); const val=el.value; el.innerHTML=`<option value="all">${label}</option>`+arr.map(x=>`<option value="${x}">${x}</option>`).join(''); el.value=arr.includes(val)?val:'all'; }
function filtered(){
  const q=document.getElementById('searchInput').value.trim().toLowerCase(); const cat=document.getElementById('categoryFilter').value; const brand=document.getElementById('brandFilter').value; const concern=document.getElementById('concernFilter').value;
  return state.products.filter(p=>{
    const blob=[p.name,p.nameAr,p.brand,p.cat,p.concerns.join(' '),p.desc,p.descAr].join(' ').toLowerCase();
    return (!q||blob.includes(q)) && (cat==='all'||p.cat===cat) && (brand==='all'||p.brand===brand) && (concern==='all'||p.concerns.includes(concern)) && (!state.bestOnly||p.best);
  });
}
function renderProducts(){
  const items=filtered();
  document.getElementById('productGrid').innerHTML = items.length?items.map(p=>card(p)).join(''):`<div class="no-results">${t[state.lang].noResults}</div>`;
  document.querySelectorAll('.product-card').forEach(el=>el.addEventListener('click',()=>openProduct(el.dataset.id)));
}
function card(p){return `<article class="product-card" data-id="${p.id}"><div class="product-image"><img loading="lazy" src="${p.image}" alt="${getTitle(p)}"></div><div class="product-info"><div class="meta"><span class="brand-name">${p.brand}</span>${p.best?`<span class="badge">${t[state.lang].bestSeller}</span>`:''}</div><h3>${getTitle(p)}</h3><p>${getDesc(p)}</p><div class="price-row"><span class="price">${currency(p.price)}</span><span class="old">${currency(p.old)}</span></div></div></article>`}
function openProduct(id){
  const p=productById(id); if(!p) return;
  document.getElementById('modalContent').innerHTML = `<img src="${p.image}" alt="${getTitle(p)}"><div class="modal-text"><p class="eyebrow">${p.brand}</p><h2>${getTitle(p)}</h2><p>${getDesc(p)}</p><div class="chips"><span class="chip">${t[state.lang].category}: ${p.cat}</span><span class="chip">${t[state.lang].status}: ${statusLabel(p.status)}</span>${p.concerns.map(c=>`<span class="chip">${c}</span>`).join('')}</div><div class="price-row"><span class="price">${t[state.lang].launch}: ${currency(p.price)}</span><span class="old">${t[state.lang].old}: ${currency(p.old)}</span></div><a class="btn primary whatsapp" target="_blank" rel="noopener" href="${waLink('product', getTitle(p))}">${t[state.lang].order}</a></div>`;
  document.getElementById('productModal').showModal();
}
function renderRituals(){
  document.getElementById('ritualGrid').innerHTML=state.rituals.map(r=>{
    const ps=r.ids.map(productById).filter(Boolean); const name=state.lang==='ar'?r.ar:r.name;
    return `<article class="ritual-card"><div class="ritual-collage">${ps.slice(0,6).map(p=>`<img loading="lazy" src="${p.image}" alt="${getTitle(p)}">`).join('')}</div><h3>${name}</h3><div class="price-row"><span class="price">${currency(r.price)}</span><span class="old">${currency(r.old)}</span></div><p class="eyebrow">${t[state.lang].included}</p><ul>${ps.map(p=>`<li>${getTitle(p)}</li>`).join('')}</ul><a class="btn primary whatsapp" target="_blank" rel="noopener" href="${waLink('ritual', name)}">${t[state.lang].ritualOrder}</a></article>`
  }).join('')
}
function renderFaq(){
  document.getElementById('faqGrid').innerHTML=faq[state.lang].map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('');
}
init();
