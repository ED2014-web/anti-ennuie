let xp = localStorage.getItem('xp') ? parseInt(localStorage.getItem('xp')) : 0;
let lvl = localStorage.getItem('lvl') ? parseInt(localStorage.getItem('lvl')) : 1;
let mult = 1;

// --- BASES DE DONNÉES ---
const db = {
    logic: [
        {q:"Qu'est-ce qui a des dents mais ne mange pas ?", a:"Un Peigne"},
        {q:"Plus j'en retire, plus je deviens grand ?", a:"Un Trou"},
        {q:"Je commence la nuit et je finis le matin ?", a:"La lettre N"},
        {q:"Qu'est-ce qui monte mais ne redescend jamais ?", a:"Ton âge"},
        {q:"[Chat] + [Pot] ?", a:"Un Chapeau"}
    ],
    act: ["Fais 20 pompes !", "Bois de l'eau", "Range ta chambre", "Dessine un robot", "Fais 1 min de planche"],
    words: ["ROBOT", "NEON", "CYBER", "JUL", "GIMS", "BANGER", "INFINITY"],
    music: []
};
for(let i=1; i<=55; i++) { db.music.push({t: "Track " + i + " (Jul/Gims/Zen Mix)", id: i}); }

let history = { logic: [], act: [] };

// --- LOGIQUE HISTORIQUE ---
function getNextItem(type) {
    let source = db[type];
    if (history[type].length >= source.length) history[type] = [];
    let available = source.map((_, i) => i).filter(i => !history[type].includes(i));
    let idx = available[Math.floor(Math.random() * available.length)];
    history[type].push(idx);

    if(type === 'logic') {
        document.getElementById('logic-content').innerText = source[idx].q;
        document.getElementById('logic-hint').innerText = "RÉPONSE : " + source[idx].a;
        document.getElementById('logic-hint').style.display = "none";
    } else {
        document.getElementById('act-res').innerText = source[idx];
    }
    addXP(15);
}

// --- JEU : MORPION ---
let mB = Array(9).fill("");
function drawM() {
    const g = document.getElementById('m-grid'); g.innerHTML = "";
    mB.forEach((v,i) => {
        let c = document.createElement('div'); c.className="cell"; c.innerText=v;
        c.onclick = () => { if(mB[i]=="") { mB[i]="X"; checkM(); setTimeout(iaM, 300); } };
        g.appendChild(c);
    });
}
function iaM() {
    let e = mB.map((v,i)=>v==""?i:null).filter(v=>v!==null);
    if(e.length) { mB[e[Math.floor(Math.random()*e.length)]]="O"; drawM(); }
}
function checkM() { drawM(); }
function resetM() { mB=Array(9).fill(""); drawM(); }

// --- JEU : PENDU ---
let pW="", pG=[];
function initP() {
    pW = db.words[Math.floor(Math.random()*db.words.length)]; pG=[];
    const k = document.getElementById('p-keys'); k.innerHTML="";
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(l => {
        let b = document.createElement('button'); b.className="key-btn"; b.innerText=l;
        b.onclick = () => { b.disabled=true; if(pW.includes(l)) pG.push(l); drawP(); };
        k.appendChild(b);
    });
    drawP();
}
function drawP() {
    let d = pW.split("").map(l => pG.includes(l) ? l : "_").join(" ");
    document.getElementById('p-word').innerText = d;
    if(!d.includes("_")) { addXP(50); alert("Gagné !"); initP(); }
}

// --- SYSTEME XP ---
function save() {
    localStorage.setItem('xp', xp); localStorage.setItem('lvl', lvl);
    document.getElementById('xp-bar').style.width = xp + "%";
    document.getElementById('lvl').innerText = lvl;
}
function addXP(v) { 
    xp += v * mult; if(xp >= 100) { xp=0; lvl++; } 
    save(); 
}
function clickXP() { addXP(2); }

// --- NAVIGATION ---
function tab(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.n-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- MUSIC ---
let mIdx = 0;
function loadPL() {
    const ul = document.getElementById('pl-list');
    db.music.forEach((m, i) => {
        let li = document.createElement('li'); li.innerText = m.t;
        li.onclick = () => { mIdx=i; document.getElementById('m-title').innerText=m.t; addXP(5); };
        ul.appendChild(li);
    });
}
function toggleM() { document.getElementById('viz').classList.toggle('playing'); }
function nextM() { mIdx=(mIdx+1)%55; document.getElementById('m-title').innerText=db.music[mIdx].t; }
function prevM() { mIdx=(mIdx-1+55)%55; document.getElementById('m-title').innerText=db.music[mIdx].t; }

function showHint() { document.getElementById('logic-hint').style.display = "block"; }
function resetAll() { localStorage.clear(); location.reload(); }

// START
save(); drawM(); initP(); loadPL();
