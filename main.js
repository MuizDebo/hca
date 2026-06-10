/* HCA site — shared scripts */

document.addEventListener('DOMContentLoaded', () => {
  const t = document.getElementById('navToggle');
  const n = document.querySelector('nav.main');
  if (t && n) t.addEventListener('click', () => {
    const open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});

/* ------------------------------------------------------------------
   Certificate registry — SAMPLE DATA for demonstration.
   Companies and products are drawn from HCA's public certified list;
   certificate numbers and current dates are illustrative until wired
   to a live database.
------------------------------------------------------------------- */
const REGISTRY = [
  {id:"HCA-2026-0118", company:"Flour Mills of Nigeria Plc", product:"Golden Penny Fortified Flour", category:"Bakery & Food Processing", issued:"2026-01-16", expires:"2027-01-15", country:"Nigeria"},
  {id:"HCA-2026-0119", company:"Flour Mills of Nigeria Plc", product:"Golden Penny Semovita Fortified", category:"Bakery & Food Processing", issued:"2026-01-16", expires:"2027-01-15", country:"Nigeria"},
  {id:"HCA-2026-0094", company:"NASCO Foods", product:"NASCO Cornflakes Original", category:"Bakery & Food Processing", issued:"2026-01-31", expires:"2027-01-30", country:"Nigeria"},
  {id:"HCA-2026-0095", company:"NASCO Foods", product:"NASCO Cream Crackers (Savoury)", category:"Bakery & Food Processing", issued:"2026-01-31", expires:"2027-01-30", country:"Nigeria"},
  {id:"HCA-2026-0096", company:"NASCO Foods", product:"NASCO Glucose Biscuit", category:"Bakery & Food Processing", issued:"2026-01-31", expires:"2027-01-30", country:"Nigeria"},
  {id:"HCA-2025-0201", company:"Domino's Pizza (Eat'N'Go)", product:"Chicken Pizza Range", category:"Restaurants & Catering", issued:"2025-07-29", expires:"2026-07-28", country:"Nigeria"},
  {id:"HCA-2025-0202", company:"Domino's Pizza (Eat'N'Go)", product:"BBQ Beef Pizza", category:"Restaurants & Catering", issued:"2025-07-29", expires:"2026-07-28", country:"Nigeria"},
  {id:"HCA-2025-0167", company:"UAC Foods", product:"Gala Sausage Roll", category:"Meat & Poultry", issued:"2025-07-29", expires:"2026-07-28", country:"Nigeria"},
  {id:"HCA-2025-0168", company:"UAC Foods", product:"Gala Sausage Roll Spicy", category:"Meat & Poultry", issued:"2025-07-29", expires:"2026-07-28", country:"Nigeria"},
  {id:"HCA-2025-0143", company:"BUA Foods", product:"Premium Wheat Flour", category:"Bakery & Food Processing", issued:"2025-07-29", expires:"2026-07-28", country:"Nigeria"},
  {id:"HCA-2025-0144", company:"BUA Refinery, Port Harcourt", product:"Premium Refined Sugar (Vit. A Fortified)", category:"Flavours & Ingredients", issued:"2025-05-24", expires:"2026-05-23", country:"Nigeria"},
  {id:"HCA-2025-0131", company:"Rite Foods Limited", product:"Bigi Cola Carbonated Soft Drink", category:"Beverages", issued:"2025-07-02", expires:"2026-07-01", country:"Nigeria"},
  {id:"HCA-2025-0132", company:"Rite Foods Limited", product:"Fearless Energy Drink (Classic)", category:"Beverages", issued:"2025-07-02", expires:"2026-07-01", country:"Nigeria"},
  {id:"HCA-2025-0133", company:"Rite Foods Limited", product:"Bigi Premium Table Water", category:"Beverages", issued:"2025-07-02", expires:"2026-07-01", country:"Nigeria"},
  {id:"HCA-2025-0118", company:"Premium Edible Oil Products", product:"Golden Penny Pure Soya Oil", category:"Flavours & Ingredients", issued:"2025-05-31", expires:"2026-05-30", country:"Nigeria"},
  {id:"HCA-2025-0119", company:"Premium Edible Oil Products", product:"Golden Penny Margarine", category:"Flavours & Ingredients", issued:"2025-05-31", expires:"2026-05-30", country:"Nigeria"},
  {id:"HCA-2025-0102", company:"Crown Flour Mill, Apapa", product:"Mama Gold Flour", category:"Bakery & Food Processing", issued:"2025-05-17", expires:"2026-05-16", country:"Nigeria"},
  {id:"HCA-2025-0103", company:"Crown Flour Mill, Apapa", product:"Crown Premium Spaghetti", category:"Bakery & Food Processing", issued:"2025-05-17", expires:"2026-05-16", country:"Nigeria"},
  {id:"HCA-2025-0089", company:"Africa GB Foods Manufacturing", product:"Gino Tomato Mix", category:"Flavours & Ingredients", issued:"2025-05-05", expires:"2026-05-04", country:"Nigeria"},
  {id:"HCA-2025-0090", company:"Africa GB Foods Manufacturing", product:"Bama Real Mayonnaise", category:"Flavours & Ingredients", issued:"2025-05-17", expires:"2026-05-16", country:"Nigeria"},
  {id:"HCA-2025-0076", company:"Royal Salt Limited", product:"Royal Light Salt", category:"Flavours & Ingredients", issued:"2025-01-23", expires:"2026-01-22", country:"Nigeria"},
  {id:"HCA-2025-0064", company:"JOF Salt", product:"JOF Refined Salt", category:"Flavours & Ingredients", issued:"2025-04-28", expires:"2026-04-27", country:"Nigeria"},
  {id:"HCA-2025-0051", company:"Niji Foods", product:"High Quality Cassava Flour", category:"Bakery & Food Processing", issued:"2025-12-05", expires:"2026-11-05", country:"Nigeria"},
  {id:"HCA-2025-0038", company:"Sierra Tropical Limited", product:"Pineapple Juice Concentrate", category:"Beverages", issued:"2025-06-20", expires:"2026-06-19", country:"Nigeria"},
  {id:"HCA-2025-0026", company:"Premium Cassava Products", product:"Golden Penny Garri", category:"Bakery & Food Processing", issued:"2025-07-06", expires:"2026-06-06", country:"Sierra Leone"},
  {id:"HCA-2025-0019", company:"Kingdomway Nutrients Limited", product:"Vitaprix Flour Fortification Premix", category:"Nutraceuticals & Supplements", issued:"2025-11-17", expires:"2026-11-16", country:"Nigeria"},
  {id:"HCA-2025-0012", company:"PrimePak Industries Nigeria", product:"Food-grade Packaging Materials", category:"Packaging & Non-Consumables", issued:"2025-12-14", expires:"2026-12-13", country:"Nigeria"},
  {id:"HCA-2025-0007", company:"LSG Sky Chefs", product:"In-flight Catering Services", category:"Restaurants & Catering", issued:"2025-10-05", expires:"2026-09-05", country:"Nigeria"},
  {id:"HCA-2024-0182", company:"Sonata Agri International", product:"WW320 Cashew Nuts", category:"Flavours & Ingredients", issued:"2024-05-05", expires:"2025-04-05", country:"Nigeria"},
  {id:"HCA-2024-0171", company:"TG Agri Limited", product:"Goodheart Foods Ginger Powder", category:"Flavours & Ingredients", issued:"2024-04-26", expires:"2025-04-25", country:"Nigeria"},
  {id:"HCA-2024-0160", company:"Harvest Feed & Agro Processing", product:"Venus Cassava Starch", category:"Flavours & Ingredients", issued:"2024-10-31", expires:"2025-10-30", country:"Nigeria"},
  {id:"HCA-2024-0149", company:"Sarsoli Colours", product:"Sarsoli Filler Master Batch", category:"Packaging & Non-Consumables", issued:"2024-02-21", expires:"2025-02-20", country:"Nigeria"},
];

function certStatus(c){
  const today = new Date(); today.setHours(0,0,0,0);
  const exp = new Date(c.expires + "T00:00:00");
  const days = Math.round((exp - today) / 86400000);
  if (days < 0) return {key:"expired", label:"Expired"};
  if (days <= 60) return {key:"renewal", label:"Renewal due"};
  return {key:"valid", label:"Valid"};
}

function fmtDate(s){
  return new Date(s + "T00:00:00").toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"});
}

function initRegistry(){
  const body = document.getElementById('registryBody');
  const search = document.getElementById('regSearch');
  const cat = document.getElementById('regCategory');
  const status = document.getElementById('regStatus');
  const count = document.getElementById('regCount');
  if (!body) return;

  const cats = [...new Set(REGISTRY.map(r => r.category))].sort();
  cats.forEach(c => cat.insertAdjacentHTML('beforeend', `<option value="${c}">${c}</option>`));

  function render(){
    const q = (search.value || "").toLowerCase().trim();
    const cv = cat.value, sv = status.value;
    const rows = REGISTRY.filter(r => {
      const st = certStatus(r).key;
      if (cv && r.category !== cv) return false;
      if (sv && st !== sv) return false;
      if (q && !(r.company + " " + r.product + " " + r.id).toLowerCase().includes(q)) return false;
      return true;
    });
    count.textContent = `${rows.length} record${rows.length === 1 ? "" : "s"}`;
    body.innerHTML = rows.length ? rows.map(r => {
      const st = certStatus(r);
      return `<tr>
        <td><span class="co">${r.company}</span><br><span class="id">${r.id}</span></td>
        <td>${r.product}</td>
        <td>${r.category}</td>
        <td class="mono">${fmtDate(r.issued)}</td>
        <td class="mono">${fmtDate(r.expires)}</td>
        <td><span class="badge ${st.key}">${st.label}</span></td>
      </tr>`;
    }).join("") :
    `<tr><td colspan="6" style="text-align:center;padding:2.5rem;color:var(--ink-soft)">
       No certificates match this search. Try a company name, product, or certificate number.
     </td></tr>`;
  }
  [search, cat, status].forEach(el => el.addEventListener('input', render));
  render();
}

function initVerify(){
  const form = document.getElementById('verifyForm');
  const input = document.getElementById('verifyInput');
  const panel = document.getElementById('verifyResult');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.toLowerCase().trim();
    if (!q){ panel.classList.remove('show'); return; }
    const hit = REGISTRY.find(r => r.id.toLowerCase() === q) ||
                REGISTRY.find(r => (r.company + " " + r.product).toLowerCase().includes(q));
    if (hit){
      const st = certStatus(hit);
      const color = st.key === 'expired' ? 'var(--expired)' : st.key === 'renewal' ? 'var(--pending)' : 'var(--valid)';
      panel.innerHTML = `
        <div class="card" style="border-left:4px solid ${color};margin-top:.4rem">
          <span class="badge ${st.key}">${st.label}</span>
          <h3 style="margin-top:.7rem">${hit.product}</h3>
          <p style="margin:.2rem 0 .6rem">${hit.company}</p>
          <p class="mono" style="font-size:.78rem">
            ${hit.id} · Issued ${fmtDate(hit.issued)} · Expires ${fmtDate(hit.expires)}
          </p>
        </div>`;
    } else {
      panel.innerHTML = `
        <div class="card" style="border-left:4px solid var(--expired);margin-top:.4rem">
          <h3>No matching certificate</h3>
          <p style="margin-top:.4rem">No record matches that search. Check the certificate number on the product label, or <a href="contact.html">report a suspicious halal claim</a>.</p>
        </div>`;
    }
    panel.classList.add('show');
  });
}

document.addEventListener('DOMContentLoaded', () => { initRegistry(); initVerify(); });
