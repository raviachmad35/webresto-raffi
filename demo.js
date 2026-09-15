const data=[
{name:"Nasi Liwet Komplit",cat:"makanan",price:28000,icon:"🍚",desc:"Nasi liwet gurih, ayam, tahu, tempe, dan sambal."},
{name:"Sate Ayam Nusantara",cat:"makanan",price:25000,icon:"🍢",desc:"Sate ayam bakar dengan bumbu kacang khas."},
{name:"Soto Kampung",cat:"makanan",price:22000,icon:"🍲",desc:"Kuah hangat dengan suwiran ayam dan pelengkap."},
{name:"Es Teh Gula Batu",cat:"minuman",price:8000,icon:"🫖",desc:"Teh wangi dengan manis gula batu."},
{name:"Kopi Tubruk",cat:"minuman",price:12000,icon:"☕",desc:"Kopi hitam pekat dengan aroma tradisional."},
{name:"Es Dawet Pandan",cat:"minuman",price:14000,icon:"🥤",desc:"Dawet pandan, santan, dan gula aren."},
{name:"Pisang Goreng",cat:"jajanan",price:12000,icon:"🍌",desc:"Pisang goreng renyah dengan taburan gula."},
{name:"Klepon Tradisional",cat:"jajanan",price:10000,icon:"🍡",desc:"Klepon kenyal berisi gula aren dan kelapa."},
{name:"Serabi Kinca",cat:"jajanan",price:15000,icon:"🥞",desc:"Serabi lembut dengan saus kinca manis."}
];
let category="semua",cart=[];
const money=n=>"Rp"+n.toLocaleString("id-ID");
function render(){
 const q=document.querySelector("#search").value.toLowerCase();
 const items=data.filter(x=>(category==="semua"||x.cat===category)&&x.name.toLowerCase().includes(q));
 document.querySelector("#menu").innerHTML=items.map((x,i)=>`<article class="card"><div class="food">${x.icon}</div><div><h3>${x.name}</h3><p>${x.desc}</p><div class="bottom"><span class="price">${money(x.price)}</span><button class="add" onclick="add('${x.name}')">+ Tambah</button></div></div></article>`).join("");
}
function add(name){cart.push(data.find(x=>x.name===name));renderCart()}
function remove(i){cart.splice(i,1);renderCart()}
function renderCart(){
 document.querySelector("#count").textContent=cart.length+" item";
 document.querySelector("#cartItems").innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-row"><span>${x.name}</span><span>${money(x.price)} <button onclick="remove(${i})">×</button></span></div>`).join(""):"<p>Belum ada menu yang dipilih.</p>";
 document.querySelector("#total").textContent=money(cart.reduce((s,x)=>s+x.price,0));
}
document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{category=b.dataset.cat;document.querySelectorAll("[data-cat]").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()});
document.querySelector("#search").oninput=render;
document.querySelector("#order").onclick=()=>alert(cart.length?"Demo pesanan berhasil dibuat!":"Silakan pilih menu terlebih dahulu.");
render();renderCart();
