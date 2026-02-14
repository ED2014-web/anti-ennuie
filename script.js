let xp = parseInt(localStorage.getItem('xp')) || 0;
let lvl = parseInt(localStorage.getItem('lvl')) || 1;
let mult = 1;

const db = {
    // 60 ÉNIGMES
    logic: [
        {q:"Plus j'ai de gardiens, moins je suis gardé ?", a:"Un secret"},
        {q:"Qu'est-ce qui a des dents mais ne mange pas ?", a:"Un peigne"},
        {q:"Qu'est-ce qui monte mais ne redescend jamais ?", a:"Ton âge"},
        {q:"Je commence la nuit et finis le matin ?", a:"La lettre N"},
        {q:"Je peux faire le tour du monde en restant dans mon coin ?", a:"Un timbre"},
        {q:"Qu'est-ce qui a un œil mais ne voit rien ?", a:"Une aiguille"},
        {q:"Si tu me partages, tu ne m'as plus ?", a:"Un secret"},
        {q:"Je tombe sans me blesser ?", a:"La nuit / La neige"},
        {q:"J'ai des villes mais pas de maisons ?", a:"Une carte"},
        {q:"Noir quand on l'achète, rouge quand on l'utilise ?", a:"Le charbon"},
        {q:"Qu'est-ce qui court sans jambes ?", a:"L'eau / Le temps"},
        {q:"Plus on m'en enlève, plus je grandis ?", a:"Un trou"},
        {q:"J'ai des clés mais pas de serrures ?", a:"Un piano"},
        {q:"On me voit deux fois dans l'année, mais jamais dans un jour ?", a:"La lettre E"},
        {q:"Qu'est-ce qui a un cou mais pas de tête ?", a:"Une bouteille"},
        {q:"Je ne respire pas, mais j'ai besoin d'air ?", a:"Le feu"},
        {q:"Qu'est-ce qui est toujours devant toi mais invisible ?", a:"Le futur"},
        {q:"J'ai des branches mais pas de feuilles ?", a:"Une banque / Une rivière"},
        {q:"On me trouve au milieu de Paris ?", a:"La lettre R"},
        {q:"Qu'est-ce qui pèse plus lourd : 1kg de plumes ou 1kg de plomb ?", a:"C'est égal (1kg)"},
        {q:"L'homme qui le fabrique n'en veut pas, l'homme qui l'achète ne s'en sert pas ?", a:"Un cercueil"},
        {q:"Je suis né grand et je meurs petit ?", a:"Une bougie / Un crayon"},
        {q:"Plus il y en a, moins on voit ?", a:"L'obscurité / Le brouillard"},
        {q:"Qu'est-ce qui appartient à toi mais que les autres utilisent plus ?", a:"Ton prénom"},
        {q:"Je ne parle pas mais je réponds quand on me parle ?", a:"L'écho"},
        {q:"Qu'est-ce qui se casse dès qu'on dit son nom ?", a:"Le silence"},
        {q:"J'ai 13 cœurs mais aucun organe ?", a:"Un jeu de cartes"},
        {q:"Qu'est-ce qui peut être rempli de trous et retenir l'eau ?", a:"Une éponge"},
        {q:"Je suis entre 188 et 190 ?", a:"Le mot 'et'"},
        {q:"Je commence par E, fini par E, mais ne contient qu'une lettre ?", a:"Une enveloppe"},
        {q:"Qu'est-ce qui a des oreilles mais n'entend rien ?", a:"Un champ de maïs"},
        {q:"Je suis blanc quand je suis sale ?", a:"Un tableau noir"},
        {q:"Qu'est-ce qui va de haut en bas sans bouger ?", a:"Un escalier"},
        {q:"Plus on court, plus il est difficile de l'attraper ?", a:"Le souffle"},
        {q:"Je ne marche pas, je ne vole pas, mais j'avance ?", a:"Un escargot"},
        {q:"J'ai des pieds mais pas de jambes ?", a:"Un lit / Une table"},
        {q:"Qu'est-ce qui s'allonge en étant coupé aux deux bouts ?", a:"Un chemin"},
        {q:"Je vole sans ailes et pleure sans yeux ?", a:"Un nuage"},
        {q:"Qu'est-ce qui tourne autour de la maison sans bouger ?", a:"Le mur / La clôture"},
        {q:"J'ai une tête mais pas de corps ?", a:"Une pièce de monnaie / Un clou"},
        {q:"Si tu me manges, tu meurs. Si tu ne me manges pas, tu meurs aussi ?", a:"Rien"},
        {q:"Qu'est-ce qui a deux bras mais pas de mains ?", a:"Un fauteuil"},
        {q:"Je suis là au début de chaque éternité ?", a:"La lettre E"},
        {q:"Quel mois a 28 jours ?", a:"Tous les mois"},
        {q:"Qu'est-ce qui a un dos et des pieds mais ne marche pas ?", a:"Une chaise"},
        {q:"Je suis plein le jour et vide la nuit ?", a:"Tes chaussures"},
        {q:"On peut me donner, mais on doit me garder ?", a:"La parole"},
        {q:"Qu'est-ce qui se lève sans faire de bruit ?", a:"Le soleil / Le jour"},
        {q:"Je n'ai pas de voix mais je peux te dire tout ?", a:"Un livre"},
        {q:"Qu'est-ce qui a une jambe mais pas de pied ?", a:"Un champignon"},
        {q:"Je suis tout au bout de la main ?", a:"La lettre N"},
        {q:"Qu'est-ce qui avance quand on souffle ?", a:"Un voilier / Une bougie"},
        {q:"Je ne suis rien du tout, pourtant j'ai un nom ?", a:"Ton ombre"},
        {q:"Qu'est-ce qui sèche en devenant mouillé ?", a:"Une serviette"},
        {q:"Je peux voyager partout sans bouger de mon cadre ?", a:"Une photo / Un écran"},
        {q:"Qu'est-ce qui a des dents mais ne mord jamais ?", a:"Une scie"},
        {q:"Je suis noir, blanc et je suis lu partout ?", a:"Le journal"},
        {q:"Qu'est-ce qui a une bouche mais ne parle pas ?", a:"Une rivière"},
        {q:"Plus je vieillis, plus je suis fort ?", a:"Le fromage"},
        {q:"Qui est mon frère mais n'est pas mon frère ?", a:"Ma sœur"}
    ],

    // 50 RECETTES
    cuisine: {
        Rapide: ["Pâtes au thon", "Omelette express", "Wrap poulet", "Salade César", "Croque-Monsieur", "Quesadillas", "Avocado Toast", "Nouilles Chinoises", "Tartine Chèvre Miel", "Sandwich Club", "Riz aux œufs", "Gnocchis poêlés", "Burrito", "Salade de tomates", "Hot Dog express", "Taboulé", "Pâtes pesto", "Omelette fines herbes"],
        Gourmand: ["Burger Maison", "Pizza 4 Fromages", "Tacos XXL", "Lasagnes", "Poulet frit", "Poutine", "Mac & Cheese", "Kebab Maison", "Cordon Bleu", "Fish & Chips", "Nachos Fromage", "Steak Frites", "Carbonara", "Ribs", "Gaufres salées", "Hot Dog Gourmet", "Pizza Chèvre Miel"],
        Sain: ["Bowl Quinoa", "Saumon Vapeur", "Salade Lentilles", "Poke Bowl", "Soupe Potiron", "Poulet Citron", "Ratatouille", "Légumes Rôtis", "Curry Pois Chiches", "Cabillaud", "Salade Grecque", "Wok de légumes", "Gratin Brocolis", "Smoothie Vert", "Omelette Épinards", "Soupe de lentilles", "Buddha Bowl"]
    },

    // 40 DÉFIS
    act: [
        "20 Pompes", "30 Squats", "1 min de Gainage", "10 Burpees", "Boire 1L d'eau", "Ranger ton lit", "Appeler un proche", "Méditer 5 min", "15 Jumping Jacks", "Lire 5 pages", "Pas d'écran pendant 30 min", "Lister 3 gratitudes", "Nettoyer ton bureau", "Faire 50 abdos", "Chanter une chanson", "Dessiner un objet", "Apprendre 3 mots d'anglais", "Faire 20 fentes", "Préparer tes affaires", "Vider tes mails", "Marcher 10 min", "Tirer la langue 1 min", "Faire un compliment", "Douche froide", "10 min de yoga", "Manger un fruit", "Écrire tes rêves", "Sauter à la corde (invisible)", "Nettoyer tes chaussures", "Réviser un cours", "Dormir avant 23h", "Planifier demain", "1 min d'équilibre", "Faire 5 tractions", "Soulever un poids 20 fois", "Prendre une photo", "Sourire à un inconnu", "Écouter un nouveau style", "Apprendre un nœud", "Se brosser les dents 3 min"
    ],

    // CULTURE G
    culture: [
        "Les pieuvres ont 3 cœurs.", "Le miel ne périme jamais.", "Les dauphins se donnent des prénoms.", "La Tour Eiffel grandit en été.", "Le cerveau est plus actif la nuit.", "Les bananes sont des baies.", "Le feu n'a pas d'ombre.", "Une fourmi ne dort jamais.", "L'Islande n'a pas de moustiques.", "Vénus tourne à l'envers."
    ],

    quotes: [
        "L'impossible est le refuge des poltrons.", "Rien ne se perd, tout se transforme.", "Le savoir est une arme.", "La vie est un défi à relever.", "Reste affamé, reste fou."
    ],

    music: Array.from({length: 55}, (_, i) => ({t: `Mix ${i+1} - Vibe 2026`, url: "#"}))
};

// --- SYSTÈME ---
let history = { logic: [], act: [], culture: [] };

function updateUI() {
    document.getElementById('xp-bar').style.width = xp + "%";
    document.getElementById('xp-pts').innerText = xp;
    document.getElementById('lvl').innerText = lvl;
    document.getElementById('mult').innerText = mult;
}

function addXP(v) {
    xp += v * mult;
    if(xp >= 100) { xp = 0; lvl++; alert("LEVEL UP ! NIVEAU " + lvl); }
    localStorage.setItem('xp', xp); localStorage.setItem('lvl', lvl);
    updateUI();
}

function tab(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

function getNextItem(type) {
    let source = db[type];
    if(history[type].length >= source.length) history[type] = [];
    let avail = source.map((_,i)=>i).filter(i => !history[type].includes(i));
    let idx = avail[Math.floor(Math.random()*avail.length)];
    history[type].push(idx);
    
    let res = source[idx];
    if(type==='logic') {
        document.getElementById('logic-content').innerText = res.q;
        document.getElementById('logic-hint').innerText = "RÉPONSE : " + res.a;
        document.getElementById('logic-hint').style.display = "none";
    } else if(type==='act') {
        document.getElementById('act-res').innerText = res;
    } else if(type==='culture') {
        document.getElementById('culture-res').innerText = res;
    }
    addXP(15);
}

function showHint() { document.getElementById('logic-hint').style.display = "block"; }

function getRecette(c) {
    let list = db.cuisine[c];
    document.getElementById('recipe-res').innerText = list[Math.floor(Math.random()*list.length)];
    addXP(10);
}

function getQuote() {
    document.getElementById('quote-res').innerText = db.quotes[Math.floor(Math.random()*db.quotes.length)];
    addXP(5);
}

// --- JEUX ---
let mB = Array(9).fill("");
function resetM() { mB=Array(9).fill(""); drawM(); }
function drawM() {
    const g=document.getElementById('m-grid'); g.innerHTML="";
    mB.forEach((v,i)=>{
        let d=document.createElement('div'); d.innerText=v;
        d.onclick=()=>{if(mB[i]===""){mB[i]="X"; checkM(); setTimeout(iaM,200);}}; g.appendChild(d);
    });
}
function iaM() { let e=mB.map((v,i)=>v===""?i:null).filter(v=>v!==null); if(e.length){mB[e[Math.floor(Math.random()*e.length)]]="O"; drawM();} }
function checkM() { drawM(); }

let targetPrice = 0;
function startPriceGame() { targetPrice = Math.floor(Math.random()*100)+1; }
function guessPrice() {
    let g = parseInt(document.getElementById('price-input').value);
    let f = document.getElementById('price-feedback');
    if(g === targetPrice) { f.innerText = "BRAVO ! +20 XP"; addXP(20); startPriceGame(); }
    else { f.innerText = g < targetPrice ? "C'est PLUS !" : "C'est MOINS !"; }
}

function clickXP() { addXP(2); }
function buyBoost() { if(xp >= 100) { xp -= 100; mult++; updateUI(); } }

function loadPL() {
    const l = document.getElementById('pl-list');
    db.music.forEach((m,i)=>{
        let li=document.createElement('li'); li.innerText = m.t;
        li.onclick=()=>{ document.getElementById('m-title').innerText=m.t; addXP(5); };
        l.appendChild(li);
    });
}

// START
updateUI(); drawM(); loadPL(); startPriceGame(); getNextItem('logic');
