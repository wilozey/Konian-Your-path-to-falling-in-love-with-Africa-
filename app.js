const experiences = [
  {
    id: "abidjan-plateau-arts",
    title: "Abidjan Art, Rooftops and Lagoon Night",
    titleFr: "Abidjan art, rooftops et nuit sur la lagune",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    category: "Culture",
    price: 95,
    duration: "5 hours",
    rating: 4.9,
    reviews: 184,
    sponsored: true,
    x: 47,
    y: 55,
    image: "assets/scenes/cape-town-coast.jpg",
    guide: "Awa K.",
    languages: "Français, English, Nouchi",
    includes: ["Private bilingual guide", "Gallery visit", "Lagoon transfer advice", "Rooftop reservation"],
    excludes: ["Dinner bill", "Private car outside Abidjan"],
    description:
      "Discover Abidjan through contemporary galleries, Plateau architecture, lagoon views and a carefully hosted evening route.",
    descriptionFr:
      "Découvrez Abidjan à travers ses galeries, l'architecture du Plateau, les vues sur la lagune et un parcours du soir accompagné."
  },
  {
    id: "grand-bassam-heritage",
    title: "Grand-Bassam UNESCO Heritage Walk",
    titleFr: "Balade patrimoine UNESCO à Grand-Bassam",
    country: "Côte d'Ivoire",
    city: "Grand-Bassam",
    category: "Heritage",
    price: 70,
    duration: "4 hours",
    rating: 4.8,
    reviews: 142,
    sponsored: false,
    x: 56,
    y: 60,
    image: "assets/scenes/zanzibar-beach.jpg",
    guide: "Jean-Marc A.",
    languages: "Français, English, Nzima",
    includes: ["Licensed guide", "Costume museum entry", "Colonial quarter walk", "Beach cafe stop"],
    excludes: ["Lunch", "Transport from Abidjan"],
    description:
      "Walk through Grand-Bassam's historic quarter with local context on architecture, memory, craft and coastal life.",
    descriptionFr:
      "Parcourez le quartier historique de Grand-Bassam avec un regard local sur l'architecture, la mémoire, l'artisanat et la vie côtière."
  },
  {
    id: "assinie-lagoon",
    title: "Assinie Lagoon Slow Escape",
    titleFr: "Échappée douce sur la lagune d'Assinie",
    country: "Côte d'Ivoire",
    city: "Assinie",
    category: "Wellness",
    price: 130,
    duration: "Full day",
    rating: 4.9,
    reviews: 96,
    sponsored: true,
    x: 64,
    y: 61,
    image: "assets/scenes/savanna-sunset.jpg",
    guide: "Mireille N.",
    languages: "Français, English",
    includes: ["Boat coordination", "Host guide", "Beach club booking", "Sunset timing"],
    excludes: ["Meals", "Water sports extras"],
    description:
      "A relaxed lagoon-to-ocean day in Assinie with boat timing, beach pauses and calm local recommendations.",
    descriptionFr:
      "Une journée lagune-océan à Assinie avec traversée organisée, pauses plage et recommandations locales en douceur."
  },
  {
    id: "yamoussoukro-icons",
    title: "Yamoussoukro Icons and Sacred Architecture",
    titleFr: "Icônes de Yamoussoukro et architecture sacrée",
    country: "Côte d'Ivoire",
    city: "Yamoussoukro",
    category: "History",
    price: 115,
    duration: "Full day",
    rating: 4.7,
    reviews: 88,
    sponsored: false,
    x: 45,
    y: 46,
    image: "assets/scenes/victoria-falls.jpg",
    guide: "Serge K.",
    languages: "Français, English, Baoulé",
    includes: ["Bilingual guide", "Basilica visit", "Transport planning", "Local lunch recommendation"],
    excludes: ["Intercity transport fare", "Entrance fees"],
    description:
      "Understand Yamoussoukro through the basilica, wide boulevards, political history and Baoulé cultural context.",
    descriptionFr:
      "Comprenez Yamoussoukro à travers la basilique, les grands boulevards, l'histoire politique et le contexte culturel baoulé."
  },
  {
    id: "man-mountains",
    title: "Man Mountains and Waterfall Weekend",
    titleFr: "Week-end montagnes et cascades à Man",
    country: "Côte d'Ivoire",
    city: "Man",
    category: "Adventure",
    price: 165,
    duration: "2 days",
    rating: 4.8,
    reviews: 104,
    sponsored: false,
    x: 25,
    y: 39,
    image: "assets/scenes/okavango-delta.jpg",
    guide: "Lacina D.",
    languages: "Français, English, Yacouba",
    includes: ["Mountain guide", "Waterfall route", "Village host coordination", "Safety briefing"],
    excludes: ["Accommodation", "Intercity coach"],
    description:
      "A highland route through Man's mountains, waterfalls and village hospitality, paced for nature and cultural respect.",
    descriptionFr:
      "Un parcours dans les montagnes de Man, entre cascades et hospitalité villageoise, au rythme de la nature et du respect culturel."
  },
  {
    id: "abidjan-food-nouchi",
    title: "Abidjan Food and Nouchi Evening",
    titleFr: "Soirée gastronomie et nouchi à Abidjan",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    category: "Food",
    price: 58,
    duration: "3.5 hours",
    rating: 4.9,
    reviews: 151,
    sponsored: true,
    x: 49,
    y: 56,
    image: "assets/scenes/marrakech-medina.jpg",
    guide: "Fatim C.",
    languages: "Français, English, Nouchi",
    includes: ["Street food route", "Nouchi language notes", "Tastings", "Ride guidance"],
    excludes: ["Alcohol", "Hotel pickup"],
    description:
      "Taste attiéké, grilled fish, alloco and maquis culture while learning the everyday language and humour of Abidjan.",
    descriptionFr:
      "Goûtez l'attiéké, le poisson braisé, l'alloco et la culture maquis tout en découvrant la langue et l'humour d'Abidjan."
  }
];

const destinations = [
  { name: "Abidjan", type: "City / Ville", image: experiences[0].image, note: "Lagoon energy, galleries, maquis culture and bilingual city hosts." },
  { name: "Grand-Bassam", type: "Heritage / Patrimoine", image: experiences[1].image, note: "UNESCO streets, craft memory, beach rhythms and Nzima culture." },
  { name: "Assinie", type: "Lagoon / Lagune", image: experiences[2].image, note: "Slow luxury, ocean air, lagoon crossings and coastal weekends." },
  { name: "Man", type: "Adventure / Aventure", image: experiences[4].image, note: "Mountains, waterfalls, village hospitality and western highlands." }
];

const scoutPlaces = [
  {
    name: "Assinie Lagoon Stays",
    nameFr: "Sejours lagune a Assinie",
    location: "Assinie-Mafia",
    distance: "80 km east of Abidjan",
    category: "Hotels + beach tables",
    price: "$$$",
    valueScore: 76,
    reviewScore: 92,
    detailScore: 90,
    outsideCapitalScore: 96,
    publicBuzzScore: 86,
    image: experiences[2].image,
    bestFor: "Slow luxury, couples, lagoon crossings",
    why: "A strong coastal-resort signal with lagoon access, weekend demand and boat-led discovery beyond the capital.",
    signals: ["Lagoon destination", "Review momentum", "Premium detail"]
  },
  {
    name: "Grand-Bassam Heritage Quarter",
    nameFr: "Quartier patrimoine de Grand-Bassam",
    location: "Grand-Bassam",
    distance: "45 km east of Abidjan",
    category: "Boutique stays + cultural food",
    price: "$$",
    valueScore: 88,
    reviewScore: 89,
    detailScore: 91,
    outsideCapitalScore: 82,
    publicBuzzScore: 83,
    image: experiences[1].image,
    bestFor: "UNESCO walks, craft, beach cafes",
    why: "Heritage, ceramics, coastal restaurants and walkable culture make Bassam a natural first trip outside Abidjan.",
    signals: ["UNESCO context", "Craft culture", "Good value"]
  },
  {
    name: "Man Highland Guesthouses",
    nameFr: "Maisons d'hotes des montagnes de Man",
    location: "Man",
    distance: "570 km northwest of Abidjan",
    category: "Guesthouses + nature guides",
    price: "$$",
    valueScore: 91,
    reviewScore: 87,
    detailScore: 86,
    outsideCapitalScore: 100,
    publicBuzzScore: 74,
    image: experiences[4].image,
    bestFor: "Waterfalls, mountains, village hospitality",
    why: "High outside-capital value: nature, cooler air and local-hosted routes that feel very different from the coast.",
    signals: ["Highland escape", "Nature-led", "Guide friendly"]
  },
  {
    name: "Grand-Bereby Beach Retreats",
    nameFr: "Retraites plage a Grand-Bereby",
    location: "Grand-Bereby",
    distance: "Southwest coast",
    category: "Beach lodges + seafood",
    price: "$$$",
    valueScore: 73,
    reviewScore: 88,
    detailScore: 87,
    outsideCapitalScore: 99,
    publicBuzzScore: 78,
    image: "assets/scenes/cape-town-coast.jpg",
    bestFor: "Remote coast, seafood, quiet luxury",
    why: "A premium coastal signal for travellers who want the sea without staying in the usual Abidjan weekend orbit.",
    signals: ["Remote coast", "Premium stay", "Seafood"]
  },
  {
    name: "N'guieme Beach Restaurants",
    nameFr: "Restaurants de plage de N'guieme",
    location: "N'guieme",
    distance: "Near the lagoon routes east of Abidjan",
    category: "Beach restaurants + day trips",
    price: "$",
    valueScore: 94,
    reviewScore: 82,
    detailScore: 80,
    outsideCapitalScore: 91,
    publicBuzzScore: 70,
    image: "assets/scenes/zanzibar-beach.jpg",
    bestFor: "Simple beach lunches, local discovery",
    why: "A useful hidden-place signal: sandy beach, small restaurants and lagoon access make it ideal for budget-aware exploration.",
    signals: ["Budget friendly", "Local food", "Beach route"]
  },
  {
    name: "San-Pedro and Monogaga Coast",
    nameFr: "Cote de San-Pedro et Monogaga",
    location: "San-Pedro",
    distance: "Southwest coast",
    category: "Hotels + coastal activities",
    price: "$$",
    valueScore: 84,
    reviewScore: 84,
    detailScore: 82,
    outsideCapitalScore: 98,
    publicBuzzScore: 72,
    image: "assets/scenes/savanna-sunset.jpg",
    bestFor: "Coast, road trips, beach discovery",
    why: "A high-potential southwest route for travellers ready to discover the country beyond the capital and the near-east coast.",
    signals: ["Outside Abidjan", "Beach value", "Road trip"]
  }
];

const app = document.querySelector("#app");
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const logoVariations = [
  { id: "ivory-classic", name: "Ivory Classic", mood: "Soft premium", src: "assets/logo-variations/ivory-classic.png" },
  { id: "bronze-pattern", name: "Bronze Pattern", mood: "Craft & heritage", src: "assets/logo-variations/bronze-pattern.png" },
  { id: "emerald-classic", name: "Emerald Classic", mood: "Calm discovery", src: "assets/logo-variations/emerald-classic.png" },
  { id: "sunset-savanna", name: "Sunset Savanna", mood: "Warm escape", src: "assets/logo-variations/sunset-savanna.png" },
  { id: "ivory-africa", name: "Ivory Map", mood: "Quiet editorial", src: "assets/logo-variations/ivory-africa.png" },
  { id: "onyx-ring", name: "Onyx Ring", mood: "Formal luxury", src: "assets/logo-variations/onyx-ring.png" },
  { id: "onyx-seal", name: "Onyx Seal", mood: "Heritage seal", src: "assets/logo-variations/onyx-seal.png" },
  { id: "onyx-brush", name: "Onyx Brush", mood: "Artistic luxury", src: "assets/logo-variations/onyx-brush.png" },
  { id: "ivory-baobab", name: "Ivory Baobab", mood: "Culture & roots", src: "assets/logo-variations/ivory-baobab.png" },
  { id: "emerald-compass", name: "Emerald Compass", mood: "Navigation", src: "assets/logo-variations/emerald-compass.png" },
  { id: "onyx-africa-heart", name: "Onyx Heart", mood: "Minimal romance", src: "assets/logo-variations/onyx-africa-heart.png" },
  { id: "bronze-sunset", name: "Bronze Sunset", mood: "Golden hour", src: "assets/logo-variations/bronze-sunset.png" },
  { id: "onyx-kmark", name: "K Mark", mood: "Signature", src: "assets/logo-variations/onyx-kmark.png" },
  { id: "emerald-minimal", name: "Emerald Minimal", mood: "Refined calm", src: "assets/logo-variations/emerald-minimal.png" },
  { id: "onyx-spark", name: "Onyx Spark", mood: "AI planning", src: "assets/logo-variations/onyx-spark.png" },
  { id: "ivory-watercolor", name: "Ivory Watercolor", mood: "Artful travel", src: "assets/logo-variations/ivory-watercolor.png" },
  { id: "onyx-flight", name: "Onyx Flight", mood: "Journey", src: "assets/logo-variations/onyx-flight.png" },
  { id: "onyx-classic", name: "Onyx Classic", mood: "Premium night", src: "assets/logo-variations/onyx-classic.png" },
  { id: "app-bronze", name: "Bronze Icon", mood: "Product default", src: "assets/app-icon-bronze.png" }
];

function hashText(text) {
  return [...text].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function logoPeriodKey(mode, date = new Date()) {
  if (mode === "weekly") {
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((date - firstDay) / 86400000) + 1;
    return `${date.getFullYear()}-W${Math.ceil(dayOfYear / 7)}`;
  }
  if (mode === "random") {
    return store("konianLogoRandomKey", String(Date.now()));
  }
  return date.toISOString().slice(0, 10);
}

function pickLogoVariation(mode = store("konianLogoMode", "daily")) {
  const pinned = store("konianLogoPinned", "");
  if (pinned) return logoVariations.find((logo) => logo.id === pinned) || logoVariations[0];
  const key = logoPeriodKey(mode);
  const index = Math.abs(hashText(`${mode}-${key}-konian`)) % logoVariations.length;
  return logoVariations[index];
}

function applyLogoVariation(variation = pickLogoVariation()) {
  document.querySelectorAll("[data-current-logo], .brand-logo").forEach((logo) => {
    logo.src = variation.src;
    logo.alt = `${variation.name} Konian logo`;
  });
  document.documentElement.style.setProperty("--active-logo-accent", variation.id.includes("bronze") ? "#b8864a" : variation.id.includes("ivory") ? "#d4af37" : "#8f5431");
}

function store(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function setStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function currentLanguage() {
  return store("konianLanguage", "en");
}

function isFrench() {
  return currentLanguage() === "fr";
}

function tx(en, fr) {
  return isFrench() ? fr : en;
}

function applyLanguageChrome() {
  const fr = isFrench();
  document.documentElement.lang = fr ? "fr" : "en";
  document.title = fr ? "Konian | Votre chemin pour tomber amoureux de la Cote d'Ivoire" : "Konian | Your path to falling in love with Cote d'Ivoire";
  const languageCode = document.getElementById("languageCode");
  const languageLabel = document.getElementById("languageLabel");
  if (languageCode) languageCode.textContent = fr ? "EN / FR" : "FR / EN";
  if (languageLabel) languageLabel.textContent = fr ? "Francais" : "English";
  const brandSmall = document.querySelector(".brand small");
  if (brandSmall) brandSmall.textContent = fr ? "Votre chemin pour tomber amoureux de la Cote d'Ivoire" : "Your path to falling in love with Cote d'Ivoire";
  const navLabels = [
    [".nav-links a[href='#/discover']", fr ? "Explorer" : "Explore"],
    [".nav-links a[href='#/plan']", fr ? "Planifier" : "Plan"],
    [".nav-links a[href='#/map']", fr ? "Carte" : "Map"],
    [".nav-links a[href='#/dashboard']", fr ? "Pour les guides" : "For Guides"],
    [".nav-links a[href='#/pricing']", fr ? "Tarifs" : "Pricing"],
    [".bottom-tabs a[href='#/'] span", fr ? "Accueil" : "Home"],
    [".bottom-tabs a[href='#/'] small", fr ? "Accueil" : "Home"],
    [".bottom-tabs a[href='#/discover'] span", fr ? "Explorer" : "Explore"],
    [".bottom-tabs a[href='#/discover'] small", fr ? "Explorer" : "Explore"],
    [".bottom-tabs a[href='#/plan'] span", fr ? "Planifier" : "Plan"],
    [".bottom-tabs a[href='#/plan'] small", fr ? "Plan" : "Plan"],
    [".bottom-tabs a[href='#/profile'] span", fr ? "Moi" : "Me"],
    [".bottom-tabs a[href='#/profile'] small", fr ? "Moi" : "Me"]
  ];
  navLabels.forEach(([selector, label]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = label;
  });
}

function setupLanguageToggle() {
  const toggle = document.getElementById("languageToggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    setStore("konianLanguage", isFrench() ? "en" : "fr");
    route();
  });
}

function route() {
  const [page, id] = location.hash.replace("#/", "").split("/");
  const current = page || "";
  const routes = {
    "": renderHome,
    discover: renderDiscover,
    scout: renderScout,
    experience: () => renderExperience(id),
    plan: renderPlanner,
    map: renderMap,
    bookings: renderBookings,
    dashboard: renderDashboard,
    profile: renderProfile,
    pricing: renderPricing
  };
  (routes[current] || renderHome)();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === current);
  });
  applyLanguageChrome();
  applyLogoVariation();
  app.focus({ preventScroll: true });
}

function scoutScore(place) {
  return Math.round(
    place.reviewScore * 0.35 +
    place.valueScore * 0.25 +
    place.detailScore * 0.2 +
    place.outsideCapitalScore * 0.15 +
    place.publicBuzzScore * 0.05
  );
}

function rankedScoutPlaces() {
  return [...scoutPlaces].sort((a, b) => scoutScore(b) - scoutScore(a));
}

function scoutCard(place, rank) {
  const score = scoutScore(place);
  const displayRank = Number.isFinite(rank) ? rank + 1 : "";
  return `
    <article class="scout-card">
      <img src="${place.image}" alt="${place.name}" loading="lazy">
      <div class="scout-body">
        <div class="scout-topline">
          <span class="badge gold">${tx("Scout pick", "Choix Scout")} ${displayRank}</span>
          <span class="price-pill">${place.price}</span>
        </div>
        <div class="score-row">
          <div class="score-ring" style="--score: ${score}%"><strong>${score}</strong><span>score</span></div>
          <div>
            <h3>${place.name}</h3>
            <p class="muted">${place.nameFr}</p>
            <p class="muted">${place.location} - ${place.distance}</p>
          </div>
        </div>
        <p>${place.why}</p>
        <div class="detail-list">
          <span>${tx("Best for", "Ideal pour")} : ${place.bestFor}</span>
          <span>${tx("Category", "Categorie")} : ${place.category}</span>
        </div>
        <div class="signal-row">
          ${place.signals.map((signal) => `<span>${signal}</span>`).join("")}
        </div>
        <a class="btn light" href="#/plan">${tx("Plan from my location", "Planifier depuis ma position")}</a>
      </div>
    </article>
  `;
}

function card(item) {
  return `
    <article class="card">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="card-body">
        <div class="chips">
          <span class="badge green">${item.category}</span>
          ${item.sponsored ? `<span class="badge gold">${tx("Sponsored", "Sponsorise")}</span>` : ""}
          <span class="badge">${tx("Verified guide", "Guide verifie")}</span>
        </div>
        <h3>${item.title}</h3>
        <p class="muted">${item.titleFr}</p>
        <p class="muted">${item.city}, ${item.country}</p>
        <div class="meta">
          <span>${tx("Rating", "Note")} ${item.rating} (${item.reviews})</span>
          <strong>${money.format(item.price)}</strong>
        </div>
        <div class="trust-row">
          <span>FR/EN</span>
          <span>${tx("48h cancel", "Annulation 48h")}</span>
          <span>${tx("Local host", "Hote local")}</span>
        </div>
        <div class="actions" style="margin-top: 14px">
          <a class="btn light" href="#/experience/${item.id}">${tx("View", "Voir")}</a>
          <button class="btn light" data-save="${item.id}">${tx("Save", "Enregistrer")}</button>
        </div>
      </div>
    </article>
  `;
}

function bindSaveButtons() {
  document.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const saved = new Set(store("konianSaved", []));
      saved.add(button.dataset.save);
      setStore("konianSaved", [...saved]);
      button.textContent = tx("Saved", "Enregistre");
    });
  });
}

function renderHome() {
  const fr = isFrench();
  app.innerHTML = `
    <section class="hero">
      <div class="hero-layout">
      <div class="hero-content">
        <div class="hero-brand-pair" aria-label="Konian logo variations">
          <img src="assets/app-icon-cream.png" alt="Ivory Konian logo">
          <img src="assets/app-icon-bronze.png" alt="Bronze Konian logo">
        </div>
        <div class="eyebrow">${tx("Cote d'Ivoire first - French & English", "Cote d'Ivoire d'abord - francais & anglais")}</div>
        <h1>Konian</h1>
        <p>${tx("Your path to falling in love with Cote d'Ivoire. Verified bilingual guides, hidden cultural moments and AI-planned journeys from Abidjan to Grand-Bassam, Assinie, Yamoussoukro and Man.", "Votre chemin pour tomber amoureux de la Cote d'Ivoire. Guides bilingues verifies, moments culturels caches et voyages planifies par IA d'Abidjan a Grand-Bassam, Assinie, Yamoussoukro et Man.")}</p>
        <div class="hero-search" role="search">
          <input type="search" placeholder="${tx("Where to? Abidjan, Bassam, Assinie...", "Ou aller ? Abidjan, Bassam, Assinie...")}" aria-label="${tx("Search destinations", "Rechercher des destinations")}">
          <a class="btn" href="#/discover">${tx("Explore", "Explorer")}</a>
        </div>
        <div class="hero-actions">
          <a class="btn" href="#/plan">${tx("Plan my trip", "Planifier mon voyage")}</a>
          <a class="btn secondary" href="#/scout">${tx("Scout beyond Abidjan", "Explorer hors d'Abidjan")}</a>
        </div>
        <div class="hero-destinations" aria-label="Featured launch places">
          <span>${tx("Assinie lagoon", "Lagune d'Assinie")}</span>
          <span>${tx("Grand-Bassam heritage", "Patrimoine de Grand-Bassam")}</span>
          <span>${tx("Man highlands", "Montagnes de Man")}</span>
        </div>
      </div>
      <div class="hero-visual" aria-label="Konian discovery preview">
        <div class="hero-photo main-photo">
          <img src="assets/scenes/zanzibar-beach.jpg" alt="Coastal discovery preview">
          <span>${tx("Grand-Bassam coast", "Cote de Grand-Bassam")}</span>
        </div>
        <div class="hero-photo side-photo">
          <img src="assets/scenes/savanna-sunset.jpg" alt="Lagoon sunset preview">
          <span>${tx("Assinie weekend", "Week-end a Assinie")}</span>
        </div>
        <div class="hero-scout-mini">
          <strong>${tx("Scout score 91", "Score Scout 91")}</strong>
          <span>${tx("Great value outside Abidjan", "Excellent choix hors d'Abidjan")}</span>
        </div>
        <div class="hero-photo small-photo">
          <img src="assets/scenes/okavango-delta.jpg" alt="Highland nature route preview">
          <span>${tx("Man highlands", "Montagnes de Man")}</span>
        </div>
      </div>
      </div>
    </section>
    <section class="stats-band" aria-label="Konian platform statistics">
      <div class="stat"><strong>1</strong><span>${tx("Launch country: Cote d'Ivoire", "Pays de lancement : Cote d'Ivoire")}</span></div>
      <div class="stat"><strong>6</strong><span>${tx("Curated pilot experiences", "Experiences pilotes selectionnees")}</span></div>
      <div class="stat"><strong>FR/EN</strong><span>${tx("Bilingual by design", "Bilingue par conception")}</span></div>
      <div class="stat"><strong>10%</strong><span>${tx("Guide-friendly commission", "Commission favorable aux guides")}</span></div>
    </section>
    <section class="luxury-rail" aria-label="Konian brand values">
      <span>Discovery</span>
      <span>Authenticity</span>
      <span>Culture</span>
      <span>Luxury</span>
      <span>Connection</span>
    </section>
    <section class="mobile-quick-actions" aria-label="Quick actions">
      <a href="#/discover"><strong>${tx("Find", "Trouver")}</strong><span>${tx("Explore", "Explorer")}</span></a>
      <a href="#/plan"><strong>IA</strong><span>${tx("AI plan", "Plan IA")}</span></a>
      <a href="#/scout"><strong>Scout</strong><span>Beyond Abidjan</span></a>
      <a href="#/dashboard"><strong>Pro</strong><span>Guides</span></a>
    </section>
    <section class="section scout-section">
      <div class="section-title">
        <div class="eyebrow">Autonomous Scout</div>
        <h2>${tx("Discover places beyond Abidjan with better signals.", "Decouvrez des lieux hors d'Abidjan avec de meilleurs signaux.")}</h2>
        <p>${tx("Konian ranks hotels, restaurants and routes by review quality, price value, attention to detail and how strongly they invite travellers outside the capital.", "Konian classe les hotels, restaurants et routes selon la qualite des avis, le rapport qualite-prix, le soin du detail et leur capacite a faire sortir les voyageurs de la capitale.")}</p>
      </div>
      <div class="scout-strip">
        ${rankedScoutPlaces().slice(0, 3).map(scoutCard).join("")}
      </div>
      <div class="center-action">
        <a class="btn" href="#/scout">${tx("Open Scout", "Ouvrir Scout")}</a>
      </div>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>${tx("Start with places that have a pulse.", "Commencez par des lieux qui ont une ame.")}</h2>
        <p>${tx("Featured launch places focus on Cote d'Ivoire with local context, cultural depth, and bilingual guide-led discovery.", "Les lieux de lancement mettent la Cote d'Ivoire en avant avec du contexte local, une profondeur culturelle et des guides bilingues.")}</p>
      </div>
      <div class="card-grid">
        ${destinations.map((item) => `
          <article class="card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-body">
              <span class="badge">${item.type}</span>
              <h3>${item.name}</h3>
              <p class="muted">${item.note}</p>
              <a class="btn light" href="#/discover">${tx("Explore", "Explorer")} ${item.name}</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>${tx("Top-rated experiences", "Experiences les mieux notees")}</h2>
        <p>${tx("Seeded for the Cote d'Ivoire MVP: culture, food, heritage, lagoon escapes, adventure, and diaspora reconnection.", "Selection initiale pour le MVP Cote d'Ivoire : culture, gastronomie, patrimoine, lagune, aventure et reconnexion diaspora.")}</p>
      </div>
      <div class="card-grid">${experiences.slice(0, 3).map(card).join("")}</div>
    </section>
    <section class="section">
      <div class="section-title centered">
        <div class="eyebrow">${tx("How Konian works", "Comment fonctionne Konian")}</div>
        <h2>${tx("From overwhelmed to on your way", "De l'idee floue au voyage clair")}</h2>
      </div>
      <div class="steps-grid">
        <article class="step-card"><span>01</span><h3>${tx("Tell us your dream", "Dites-nous votre envie")}</h3><p class="muted">${tx("Share where in Cote d'Ivoire, how long, your budget, language preference and what moves you.", "Indiquez ou aller en Cote d'Ivoire, la duree, le budget, la langue et ce qui vous attire.")}</p></article>
        <article class="step-card"><span>02</span><h3>${tx("Get a living itinerary", "Recevez un itineraire vivant")}</h3><p class="muted">${tx("A day-by-day plan with verified guides, hidden cultural moments and honest costs.", "Un plan jour par jour avec guides verifies, moments culturels caches et couts transparents.")}</p></article>
        <article class="step-card"><span>03</span><h3>${tx("Book with confidence", "Reservez avec confiance")}</h3><p class="muted">${tx("Every guide is verified, every review is aggregated, and every booking is tracked in one place.", "Chaque guide est verifie, les avis sont regroupes et les reservations sont suivies au meme endroit.")}</p></article>
      </div>
    </section>
    <section class="section trust-section">
      <div class="section-title">
        <div class="eyebrow">Trust by design</div>
        <h2>Built for first-time visitors, diaspora travellers and local hosts.</h2>
        <p>Konian should win because it feels safer, more local and more culturally intelligent than generic travel marketplaces.</p>
      </div>
      <div class="trust-grid">
        <article class="trust-card"><strong>Verified local guides</strong><span>Identity, language ability, route knowledge and host quality are checked before listing.</span></article>
        <article class="trust-card"><strong>Bilingual support</strong><span>French and English are available from discovery to planning, booking and trip notes.</span></article>
        <article class="trust-card"><strong>Transparent costs</strong><span>Each plan separates guide cost, transport assumptions, meals and optional upgrades.</span></article>
        <article class="trust-card"><strong>Community impact</strong><span>Local hosts keep more value through a 10% guide-friendly commission model.</span></article>
      </div>
    </section>
    <section class="section">
      <div class="guide-band">
        <div class="eyebrow">For local guides</div>
        <h2>Your knowledge is the experience.</h2>
        <p>A professional storefront, booking calendar and analytics - built for Ivorian guides first, at a 10% commission, not 25%.</p>
        <a class="btn" href="#/dashboard">Become a Konian guide</a>
      </div>
    </section>
    <footer class="footer">
      <strong>Konian</strong>
      <span>Your path to falling in love with Côte d'Ivoire</span>
      <small>Côte d'Ivoire first - wider expansion later</small>
    </footer>
  `;
  bindSaveButtons();
}

function renderDiscover() {
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>${tx("Discover Cote d'Ivoire", "Decouvrir la Cote d'Ivoire")}</h2>
        <p>${tx("Search by city, category, price, language and sponsored visibility.", "Recherchez par ville, categorie, prix, langue et visibilite sponsorisee.")}</p>
      </div>
      <div class="toolbar">
        <input class="search" id="search" type="search" placeholder="${tx("Search Abidjan, Bassam, food, heritage...", "Rechercher Abidjan, Bassam, gastronomie, patrimoine...")}">
        <select id="country"><option value="">${tx("All Cote d'Ivoire", "Toute la Cote d'Ivoire")}</option>${[...new Set(experiences.map((e) => e.country))].map((c) => `<option>${c}</option>`).join("")}</select>
        <select id="category"><option value="">${tx("All categories", "Toutes les categories")}</option>${[...new Set(experiences.map((e) => e.category))].map((c) => `<option>${c}</option>`).join("")}</select>
        <select id="language"><option value="">${tx("Any language", "Toutes les langues")}</option><option value="fran">Francais</option><option value="english">English</option><option value="nouchi">Nouchi</option></select>
        <select id="price"><option value="">${tx("Any price", "Tous les prix")}</option><option value="60">${tx("Under $60", "Moins de $60")}</option><option value="100">${tx("Under $100", "Moins de $100")}</option><option value="999">${tx("All premium", "Tous premium")}</option></select>
        <select id="sort"><option value="recommended">${tx("Recommended", "Recommande")}</option><option value="rating">${tx("Highest rated", "Mieux notes")}</option><option value="price">${tx("Lowest price", "Prix le plus bas")}</option><option value="premium">${tx("Premium first", "Premium d'abord")}</option></select>
      </div>
      <div class="card-grid" id="results"></div>
    </section>
  `;
  const controls = ["search", "country", "category", "language", "price", "sort"].map((id) => document.getElementById(id));
  const update = () => {
    const [search, country, category, language, price, sort] = controls.map((control) => control.value.toLowerCase());
    const filtered = experiences.filter((item) => {
      const text = `${item.title} ${item.titleFr} ${item.country} ${item.city} ${item.category} ${item.guide} ${item.languages}`.toLowerCase();
      return text.includes(search) && (!country || item.country.toLowerCase() === country) && (!category || item.category.toLowerCase() === category) && (!language || item.languages.toLowerCase().includes(language)) && (!price || item.price <= Number(price));
    }).sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "premium") return Number(b.sponsored) - Number(a.sponsored) || b.rating - a.rating;
      return Number(b.sponsored) - Number(a.sponsored) || b.rating - a.rating || a.price - b.price;
    });
    document.getElementById("results").innerHTML = filtered.length ? filtered.map(card).join("") : `<div class="empty-state">${tx("No experiences match those filters yet.", "Aucune experience ne correspond encore a ces filtres.")}</div>`;
    bindSaveButtons();
  };
  controls.forEach((control) => control.addEventListener("input", update));
  update();
}

function renderScout() {
  app.innerHTML = `
    <section class="section scout-page">
      <div class="section-title">
        <div class="eyebrow">Autonomous Scout / Veille autonome</div>
        <h2>${tx("Great places outside the capital, ranked with care.", "De beaux lieux hors de la capitale, classes avec soin.")}</h2>
        <p>${tx("Scout helps travellers discover hotels, restaurants and routes across Cote d'Ivoire by combining public web signals, review strength, price value, detail quality and distance from Abidjan.", "Scout aide les voyageurs a decouvrir hotels, restaurants et routes en Cote d'Ivoire en combinant signaux web publics, force des avis, rapport qualite-prix, qualite des details et distance d'Abidjan.")}</p>
      </div>
      <div class="scout-console">
        <article class="panel scout-method">
          <h3>${tx("How Scout ranks places", "Comment Scout classe les lieux")}</h3>
          <div class="method-grid">
            <span><strong>35%</strong> ${tx("Review quality", "Qualite des avis")}</span>
            <span><strong>25%</strong> ${tx("Price value", "Rapport qualite-prix")}</span>
            <span><strong>20%</strong> ${tx("Attention to detail", "Soin du detail")}</span>
            <span><strong>15%</strong> ${tx("Outside Abidjan", "Hors Abidjan")}</span>
            <span><strong>5%</strong> ${tx("Public buzz", "Buzz public")}</span>
          </div>
          <p class="muted">${tx("This MVP uses seeded public discovery signals. Production Scout should connect to official review, map and social APIs, respect robots.txt and platform rules, and flag sponsored placements clearly.", "Ce MVP utilise des signaux publics prepares. En production, Scout devra se connecter aux API officielles d'avis, de cartes et de reseaux sociaux, respecter robots.txt et les regles des plateformes, et signaler clairement les placements sponsorises.")}</p>
        </article>
        <article class="panel scout-feed">
          <h3>${tx("Discovery controls", "Filtres de decouverte")}</h3>
          <div class="toolbar compact-toolbar">
            <select id="scoutSort">
              <option value="score">${tx("Best overall", "Meilleur choix")}</option>
              <option value="value">${tx("Best price value", "Meilleur prix")}</option>
              <option value="reviews">${tx("Strongest reviews", "Avis les plus forts")}</option>
              <option value="outside">${tx("Most outside Abidjan", "Le plus hors Abidjan")}</option>
            </select>
            <select id="scoutPrice">
              <option value="">${tx("Any price", "Tous les prix")}</option>
              <option value="$">Budget</option>
              <option value="$$">${tx("Mid range", "Milieu de gamme")}</option>
              <option value="$$$">Premium</option>
            </select>
          </div>
          <div class="signal-row source-row">
            <span>${tx("Public web", "Web public")}</span>
            <span>${tx("Reviews", "Avis")}</span>
            <span>${tx("Social mentions", "Mentions sociales")}</span>
            <span>${tx("Guide detail", "Detail guide")}</span>
          </div>
        </article>
      </div>
      <div class="scout-grid" id="scoutResults"></div>
    </section>
  `;

  const sortControl = document.getElementById("scoutSort");
  const priceControl = document.getElementById("scoutPrice");
  const update = () => {
    const price = priceControl.value;
    const sort = sortControl.value;
    const filtered = scoutPlaces.filter((place) => !price || place.price === price).sort((a, b) => {
      if (sort === "value") return b.valueScore - a.valueScore;
      if (sort === "reviews") return b.reviewScore - a.reviewScore;
      if (sort === "outside") return b.outsideCapitalScore - a.outsideCapitalScore;
      return scoutScore(b) - scoutScore(a);
    });
    document.getElementById("scoutResults").innerHTML = filtered.length ? filtered.map(scoutCard).join("") : `<div class="empty-state">${tx("No Scout places match this filter yet.", "Aucun lieu Scout ne correspond encore a ce filtre.")}</div>`;
  };
  [sortControl, priceControl].forEach((control) => control.addEventListener("input", update));
  update();
}

function renderExperience(id) {
  const item = experiences.find((experience) => experience.id === id) || experiences[0];
  app.innerHTML = `
    <section class="detail-hero" style="background-image: linear-gradient(180deg, rgba(9,21,15,.15), rgba(9,21,15,.76)), url('${item.image}')">
      <div>
        <div class="chips"><span class="badge green">${item.category}</span>${item.sponsored ? '<span class="badge gold">Sponsored</span>' : ""}</div>
        <h1>${item.title}</h1>
        <p>${item.city}, ${item.country} - Rating ${item.rating} from ${item.reviews} reviews</p>
      </div>
    </section>
    <section class="section content-grid">
      <article class="panel">
        <div class="detail-meta">
          <span class="chip">${item.duration}</span>
          <span class="chip">${money.format(item.price)} per guest / par personne</span>
          <span class="chip">${item.languages}</span>
        </div>
        <h2>Experience / Expérience</h2>
        <p class="muted">${item.description}</p>
        <p class="muted">${item.descriptionFr}</p>
        <h3>What's included</h3>
        <p>${item.includes.join(" · ")}</p>
        <h3>What's excluded</h3>
        <p class="muted">${item.excludes.join(" · ")}</p>
        <h3>Guide verification</h3>
        <div class="trust-grid compact">
          <article class="trust-card"><strong>${item.guide}</strong><span>Verified bilingual host with local route knowledge in ${item.city}.</span></article>
          <article class="trust-card"><strong>Safety notes</strong><span>Meeting point, transport assumptions and emergency contact are shared after booking.</span></article>
          <article class="trust-card"><strong>Cancellation</strong><span>Free cancellation up to 48 hours before the experience.</span></article>
          <article class="trust-card"><strong>Local value</strong><span>Ivorian guides and operators keep more of the booking value.</span></article>
        </div>
        <h3>Multi-source trust signals</h3>
        <div class="review-row">
          ${["Google", "TripAdvisor", "Instagram", "Konian"].map((source, index) => `
            <div class="review"><strong>${source}</strong><p class="muted">Positive sentiment ${(92 - index * 4)}% · verified context</p></div>
          `).join("")}
        </div>
      </article>
      <aside class="panel">
        <h2>Book with / Réserver avec ${item.guide}</h2>
        <form id="bookingForm">
          <label>Date<input name="date" type="date" required></label>
          <label>Guests<input name="guests" type="number" min="1" max="12" value="2" required></label>
          <label>Special requests / Demandes<textarea name="requests" placeholder="Accessibility, dietary needs, pickup location..."></textarea></label>
          <button class="btn" type="submit">Confirm booking / Confirmer</button>
        </form>
      </aside>
    </section>
  `;
  document.getElementById("bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const guests = Number(data.guests);
    const booking = {
      code: `KON-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      experienceId: item.id,
      title: item.title,
      date: data.date,
      guests,
      total: guests * item.price,
      status: "Pending",
      requests: data.requests
    };
    setStore("konianBookings", [booking, ...store("konianBookings", [])]);
    location.hash = "#/bookings";
  });
}

function renderPlanner() {
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>${tx("AI Trip Planner", "Planificateur de voyage IA")}</h2>
        <p>${tx("Plan a Cote d'Ivoire journey from your starting point, in French or English, then let Konian rank the trip around what matters most.", "Planifiez un voyage en Cote d'Ivoire depuis votre point de depart, en francais ou en anglais, puis laissez Konian organiser le trajet selon vos priorites.")}</p>
      </div>
      <div class="content-grid">
        <form class="panel" id="plannerForm">
          <div class="form-grid">
            <label>${tx("Destination", "Destination")}<input name="destination" value="Abidjan, Grand-Bassam and Assinie" required></label>
            <label>${tx("Starting location", "Point de depart")}<input name="origin" value="London, United Kingdom" required></label>
            <label>${tx("Days", "Jours")}<input name="days" type="number" min="2" max="21" value="7" required></label>
            <label>${tx("Total budget", "Budget total")}<input name="totalBudget" type="number" min="150" step="50" value="1800" required></label>
            <label>${tx("Budget tier", "Niveau de budget")}<select name="budget"><option value="Budget">Budget</option><option value="Mid-range" selected>${tx("Mid-range", "Milieu de gamme")}</option><option value="Luxury">${tx("Luxury", "Luxe")}</option></select></label>
            <label>${tx("Style", "Style")}<select name="style"><option value="Relaxed">${tx("Relaxed", "Detendu")}</option><option value="Balanced" selected>${tx("Balanced", "Equilibre")}</option><option value="Packed">${tx("Packed", "Intense")}</option></select></label>
          </div>
          <h3>${tx("Transport throughout", "Transport pendant le voyage")}</h3>
          <div class="option-grid">
            ${["Flight", "Train", "Coach", "Private driver", "Rental car", "Ferry", "Domestic flight", "Walking"].map((mode) => `<label><input type="checkbox" name="transport" value="${mode}" ${["Flight", "Private driver", "Domestic flight", "Walking"].includes(mode) ? "checked" : ""}>${mode}</label>`).join("")}
          </div>
          <h3>${tx("Design priority", "Priorite du plan")}</h3>
          <div class="form-grid">
            <label>Most important<select name="priority1"><option selected>Budget</option><option>Country</option><option>Transport comfort</option><option>Time</option><option>Culture</option><option>Safety</option></select></label>
            <label>Second<select name="priority2"><option>Budget</option><option selected>Country</option><option>Transport comfort</option><option>Time</option><option>Culture</option><option>Safety</option></select></label>
            <label>Third<select name="priority3"><option>Budget</option><option>Country</option><option selected>Culture</option><option>Transport comfort</option><option>Time</option><option>Safety</option></select></label>
          </div>
          <h3>${tx("Interests", "Centres d'interet")}</h3>
          <div class="option-grid">
            ${["Culture", "Food", "Heritage", "Lagoon", "Diaspora", "Nightlife", "Wellness", "Adventure"].map((interest) => `<label><input type="checkbox" name="interests" value="${interest}" ${["Culture", "Food", "Heritage"].includes(interest) ? "checked" : ""}>${interest}</label>`).join("")}
          </div>
          <div class="actions" style="margin-top: 18px"><button class="btn" type="submit">${tx("Generate itinerary", "Generer l'itineraire")}</button></div>
        </form>
        <div class="panel" id="itinerary">
          <h2>${tx("Your itinerary will appear here", "Votre itineraire apparaitra ici")}</h2>
          <p class="muted">${tx("The MVP version uses structured local generation. A production build can connect this same flow to Claude, OpenAI, or another itinerary model.", "La version MVP utilise une generation locale structuree. Une version production pourra connecter ce meme flux a Claude, OpenAI ou un autre modele d'itineraire.")}</p>
        </div>
      </div>
    </section>
  `;
  const plannerForm = document.getElementById("plannerForm");
  plannerForm.elements.destination.value = "Abidjan, Grand-Bassam and Assinie";
  plannerForm.elements.origin.closest("label").insertAdjacentHTML("afterend", `<label>${tx("Language", "Langue")}<select name="language"><option ${isFrench() ? "" : "selected"}>English</option><option ${isFrench() ? "selected" : ""}>Francais</option><option>Francais + English</option></select></label>`);
  document.getElementById("plannerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const origin = data.get("origin");
    const destination = data.get("destination");
    const days = Math.min(Number(data.get("days")), 10);
    const totalBudget = Number(data.get("totalBudget"));
    const language = data.get("language");
    const dailyBudget = Math.max(25, Math.round(totalBudget / days));
    const interests = data.getAll("interests");
    const transport = data.getAll("transport");
    const priorities = [data.get("priority1"), data.get("priority2"), data.get("priority3")];
    const transportPlan = buildTransportPlan(transport, data.get("budget"), totalBudget, priorities);
    const priorityAdvice = buildPriorityAdvice(priorities, totalBudget, destination);
    const plan = Array.from({ length: days }, (_, index) => {
      const focus = interests[index % interests.length] || "Culture";
      const dailyTransport = transportPlan[index % transportPlan.length];
      const spend = priorities[0] === "Budget" ? Math.min(dailyBudget, dailyTransport.dailyCap) : dailyTransport.dailyCap;
      return `<article class="day-card"><h3>Day ${index + 1}: ${focus} in ${destination}</h3><p><strong>Morning:</strong> ${dailyTransport.morning} from the best local base.</p><p><strong>Afternoon:</strong> Bookable ${focus.toLowerCase()} experience with verified guide notes and route timing.</p><p><strong>Evening:</strong> Recommended meal, music, or slow walk matched to a ${data.get("style").toLowerCase()} pace.</p><p class="muted">Transport: ${dailyTransport.mode} - estimated day cost ${money.format(spend)}</p></article>`;
    }).join("");
    document.getElementById("itinerary").innerHTML = `<h2>${days}-day route to ${destination}</h2><div class="route-summary"><div><span class="muted">From</span><strong>${origin}</strong></div><div><span class="muted">Budget</span><strong>${money.format(totalBudget)}</strong></div><div><span class="muted">Language</span><strong>${language}</strong></div><div><span class="muted">Priority</span><strong>${priorities.join(" > ")}</strong></div></div><div class="chips">${interests.map((i) => `<span class="chip">${i}</span>`).join("")}</div><div class="transport-list">${transportPlan.map((item) => `<article><strong>${item.mode}</strong><span>${item.reason}</span><em>${money.format(item.estimate)}</em></article>`).join("")}</div><article class="day-card"><h3>Planning logic</h3><p>${priorityAdvice}</p></article><div style="display:grid;gap:12px;margin-top:14px">${plan}</div><button class="btn light" id="savePlan" style="margin-top:14px">Save itinerary</button>`;
    document.getElementById("savePlan").addEventListener("click", () => {
      setStore("konianPlans", [{ origin, destination, days, totalBudget, language, priorities, interests, created: new Date().toLocaleDateString() }, ...store("konianPlans", [])]);
      document.getElementById("savePlan").textContent = "Saved";
    });
  });
}

function buildTransportPlan(selectedModes, budgetTier, totalBudget, priorities) {
  const modes = selectedModes.length ? selectedModes : ["Flight", "Private driver", "Walking"];
  const baseCosts = {
    Flight: 520,
    Train: 80,
    Coach: 45,
    "Private driver": 120,
    "Rental car": 95,
    Ferry: 35,
    "Domestic flight": 180,
    Walking: 0
  };
  const fastModes = ["Flight", "Domestic flight", "Private driver", "Train", "Rental car", "Coach", "Ferry", "Walking"];
  const comfortModes = ["Flight", "Private driver", "Domestic flight", "Rental car", "Train", "Ferry", "Coach", "Walking"];
  const multiplier = budgetTier === "Luxury" ? 1.45 : budgetTier === "Budget" ? 0.72 : 1;
  const ordered = [...modes].sort((a, b) => {
    if (priorities[0] === "Budget") return (baseCosts[a] || 50) - (baseCosts[b] || 50);
    if (priorities[0] === "Transport comfort") return comfortModes.indexOf(a) - comfortModes.indexOf(b);
    if (priorities[0] === "Time") return fastModes.indexOf(a) - fastModes.indexOf(b);
    return a.localeCompare(b);
  });

  return ordered.slice(0, Math.max(3, Math.min(ordered.length, 5))).map((mode) => {
    const estimate = Math.round((baseCosts[mode] || 60) * multiplier);
    return {
      mode,
      estimate,
      dailyCap: Math.max(60, Math.round((totalBudget - estimate) / 4)),
      morning: mode === "Walking" ? "Walkable local discovery" : `Use ${mode.toLowerCase()} for this leg`,
      reason: priorities[0] === "Budget" ? "protects the budget first" : priorities[0] === "Time" ? "saves travel time" : priorities[0] === "Transport comfort" ? "keeps the journey comfortable" : "fits your route priorities"
    };
  });
}

function buildPriorityAdvice(priorities, totalBudget, destination) {
  const first = priorities[0].toLowerCase();
  const second = priorities[1].toLowerCase();
  if (priorities[0] === "Budget") {
    return `Konian keeps the route cost-led first, then uses ${second} to decide where to spend more. For ${destination}, the plan protects the ${money.format(totalBudget)} ceiling before adding premium experiences.`;
  }
  if (priorities[0] === "Country") {
    return `Konian anchors the journey around the Ivorian places you named first, then lets ${second} shape the pace, transport, and daily spend.`;
  }
  return `Konian ranks ${first} first, then ${second}, so the itinerary chooses transport, cities, and experiences in that order.`;
}

function renderMap() {
  app.innerHTML = `
    <section class="map-shell">
      <aside class="map-sidebar">
        <h1 style="font-size:2.6rem">${tx("Map Explorer", "Carte interactive")}</h1>
        <p class="muted">${tx("Prototype Cote d'Ivoire map view with category-coded experience markers.", "Prototype de carte de la Cote d'Ivoire avec des marqueurs classes par categorie.")}</p>
        <div class="chips">${[...new Set(experiences.map((e) => e.category))].map((c) => `<span class="chip">${c}</span>`).join("")}</div>
        <div style="display:grid;gap:12px;margin-top:18px">${experiences.map((item) => `<a class="booking-card" href="#/experience/${item.id}"><strong>${item.title}</strong><p class="muted">${item.city}, ${item.country} · ${money.format(item.price)}</p></a>`).join("")}</div>
      </aside>
      <div class="map-canvas" aria-label="Côte d'Ivoire map with experience pins">
        ${experiences.map((item) => `<a class="pin" href="#/experience/${item.id}" data-title="${item.title}" style="left:${item.x}%;top:${item.y}%"></a>`).join("")}
      </div>
    </section>
  `;
}

function renderBookings() {
  const bookings = store("konianBookings", []);
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>${tx("My Bookings", "Mes reservations")}</h2>
        <p>${tx("Track upcoming, pending, completed, and cancelled bookings.", "Suivez les reservations a venir, en attente, terminees et annulees.")}</p>
      </div>
      <div class="card-grid">
        ${bookings.length ? bookings.map((booking, index) => `
          <article class="booking-card">
            <span class="badge green">${booking.status}</span>
            <h3>${booking.title}</h3>
            <p class="muted">${booking.date} · ${booking.guests} guests · ${booking.code}</p>
            <div class="trust-row">
              <span>${tx("Guide notified", "Guide informe")}</span>
              <span>${tx("48h cancel", "Annulation 48h")}</span>
              <span>${tx("Trip notes pending", "Notes de voyage en attente")}</span>
            </div>
            <div class="meta"><strong>${money.format(booking.total)}</strong><button class="btn light" data-cancel="${index}">${tx("Cancel", "Annuler")}</button></div>
          </article>
        `).join("") : `<div class="empty-state">${tx("No bookings yet. Choose an experience and confirm a date.", "Aucune reservation pour le moment. Choisissez une experience et confirmez une date.")}<br><br><a class="btn light" href="#/discover">${tx("Explore experiences", "Explorer les experiences")}</a></div>`}
      </div>
    </section>
  `;
  document.querySelectorAll("[data-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      const updated = store("konianBookings", []);
      updated[Number(button.dataset.cancel)].status = "Cancelled";
      setStore("konianBookings", updated);
      renderBookings();
    });
  });
}

function renderDashboard() {
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>${tx("Guide Dashboard", "Tableau de bord guide")}</h2>
        <p>${tx("Business tools for Ivorian guides, cultural operators, boutique hotels, and restaurants.", "Outils professionnels pour guides ivoiriens, operateurs culturels, hotels boutique et restaurants.")}</p>
      </div>
      <div class="metric-grid">
        <div class="metric"><strong>6</strong><span class="muted">${tx("Active listings", "Annonces actives")}</span></div>
        <div class="metric"><strong>42</strong><span class="muted">${tx("Monthly bookings", "Reservations mensuelles")}</span></div>
        <div class="metric"><strong>$8.7k</strong><span class="muted">${tx("Revenue", "Revenus")}</span></div>
        <div class="metric"><strong>4.8</strong><span class="muted">${tx("Average rating", "Note moyenne")}</span></div>
      </div>
      <div class="panel" style="margin-top:22px;overflow:auto">
        <h2>${tx("Listing management", "Gestion des annonces")}</h2>
        <table class="table">
          <thead><tr><th>Listing</th><th>Category</th><th>Price</th><th>Status</th><th></th></tr></thead>
          <tbody>${experiences.map((item, index) => `<tr><td>${item.title}</td><td>${item.category}</td><td>${money.format(item.price)}</td><td><span class="badge ${index % 2 ? "" : "green"}">${index % 2 ? "Draft" : "Active"}</span></td><td><button class="btn light">Edit</button></td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderProfile() {
  const saved = store("konianSaved", []);
  const plans = store("konianPlans", []);
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>${tx("Traveller Profile", "Profil voyageur")}</h2>
        <p>${tx("Premium status, saved places, booking history, and itinerary library.", "Statut premium, lieux enregistres, historique de reservations et bibliotheque d'itineraires.")}</p>
      </div>
      <div class="content-grid">
        <div class="panel">
          <span class="badge gold">${tx("Adventurer premium", "Aventurier premium")}</span>
          <h2>Wilfried Konian</h2>
          <p class="muted">${tx("Founder profile preview - Cote d'Ivoire, UK - Building a Cote d'Ivoire-first travel operating system.", "Apercu du profil fondateur - Cote d'Ivoire, Royaume-Uni - Construction d'un systeme de voyage centre sur la Cote d'Ivoire.")}</p>
          <a class="btn" href="#/pricing">${tx("Manage plan", "Gerer l'abonnement")}</a>
        </div>
        <div class="panel logo-variations">
          <div class="logo-current">
            <img data-current-logo src="${pickLogoVariation().src}" alt="Current Konian logo variation">
            <div>
              <h2>${tx("Logo mood rotation", "Rotation des styles de logo")}</h2>
              <p class="muted">${tx("Konian can use a different logo mood daily or weekly. Random mode reshuffles from the full variation library.", "Konian peut utiliser un style de logo different chaque jour ou chaque semaine. Le mode aleatoire choisit dans toute la bibliotheque de variations.")}</p>
            </div>
          </div>
          <div class="segmented logo-mode" style="margin: 16px 0">
            <button data-logo-mode="daily">${tx("Daily", "Quotidien")}</button>
            <button data-logo-mode="weekly">${tx("Weekly", "Hebdomadaire")}</button>
            <button data-logo-mode="random">${tx("Random", "Aleatoire")}</button>
          </div>
          <div class="logo-choice-grid">
            ${logoVariations.map((logo) => `
              <button class="logo-choice" data-logo-pick="${logo.id}">
                <img src="${logo.src}" alt="${logo.name} Konian logo variation">
                <span>${logo.name}</span>
                <small>${logo.mood}</small>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="panel">
          <h2>${tx("Saved places", "Lieux enregistres")}</h2>
          ${saved.length ? saved.map((id) => {
            const item = experiences.find((experience) => experience.id === id);
            return item ? `<p><a href="#/experience/${item.id}">${item.title}</a></p>` : "";
          }).join("") : `<p class="muted">${tx("Saved experiences will appear here.", "Les experiences enregistrees apparaitront ici.")}</p>`}
          <h2>${tx("Saved itineraries", "Itineraires enregistres")}</h2>
          ${plans.length ? plans.map((plan) => `<p>${plan.days} ${tx("days in", "jours a")} ${plan.destination} · ${plan.created}</p>`).join("") : `<p class="muted">${tx("Generated plans will appear here.", "Les plans generes apparaitront ici.")}</p>`}
        </div>
      </div>
    </section>
  `;
  document.querySelector(".content-grid .panel .muted").textContent = tx("Founder profile preview - Cote d'Ivoire, UK - Building a Cote d'Ivoire-first travel operating system.", "Apercu du profil fondateur - Cote d'Ivoire, Royaume-Uni - Construction d'un systeme de voyage centre sur la Cote d'Ivoire.");
  updateLogoControls();
  document.querySelectorAll("[data-logo-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      setStore("konianLogoMode", button.dataset.logoMode);
      setStore("konianLogoPinned", "");
      if (button.dataset.logoMode === "random") setStore("konianLogoRandomKey", String(Date.now()));
      applyLogoVariation();
      updateLogoControls();
    });
  });
  document.querySelectorAll("[data-logo-pick]").forEach((button) => {
    button.addEventListener("click", () => {
      setStore("konianLogoPinned", button.dataset.logoPick);
      applyLogoVariation();
      updateLogoControls();
    });
  });
}

function updateLogoControls() {
  const mode = store("konianLogoMode", "daily");
  const selected = pickLogoVariation(mode);
  document.querySelectorAll("[data-logo-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.logoMode === mode);
  });
  document.querySelectorAll("[data-logo-pick]").forEach((button) => {
    button.classList.toggle("active", button.dataset.logoPick === selected.id);
  });
  const current = document.querySelector("[data-current-logo]");
  if (current) {
    current.src = selected.src;
    current.alt = `${selected.name} Konian logo`;
  }
}

function renderPricing() {
  const traveller = [
    [tx("Explorer", "Explorateur"), "$0", [tx("Basic discovery", "Decouverte de base"), tx("3 AI itineraries/month", "3 itineraires IA/mois"), tx("Standard booking", "Reservation standard")]],
    [tx("Adventurer", "Aventurier"), "$9", [tx("Unlimited AI itineraries", "Itineraires IA illimites"), tx("Offline map previews", "Apercus de carte hors ligne"), tx("Priority booking", "Reservation prioritaire")]],
    [tx("Ambassador", "Ambassadeur"), "$19", [tx("Exclusive guide access", "Acces exclusif aux guides"), tx("Concierge support", "Assistance conciergerie"), tx("Community badge", "Badge communaute")]]
  ];
  const business = [
    [tx("Starter", "Demarrage"), "$0", [tx("1 listing", "1 annonce"), tx("Basic analytics", "Statistiques de base"), "10% commission"]],
    [tx("Professional", "Professionnel"), "$29", [tx("10 listings", "10 annonces"), tx("Advanced analytics", "Statistiques avancees"), "8% commission"]],
    [tx("Enterprise", "Entreprise"), "$99", [tx("Unlimited listings", "Annonces illimitees"), tx("API access", "Acces API"), "6% commission"]]
  ];
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>${tx("Pricing", "Tarifs")}</h2>
        <p>${tx("Dual-audience monetisation for travellers and Ivorian guides or businesses.", "Monetisation pour deux publics : voyageurs, guides ivoiriens et entreprises locales.")}</p>
      </div>
      <div class="segmented" style="margin-bottom:18px">
        <button class="active" data-audience="traveller">${tx("Traveller", "Voyageur")}</button>
        <button data-audience="business">Business</button>
      </div>
      <div class="tier-grid" id="tiers"></div>
    </section>
  `;
  const renderTiers = (items) => {
    document.getElementById("tiers").innerHTML = items.map(([name, price, features]) => `
      <article class="tier">
        <h2>${name}</h2>
        <div class="price">${price}<small>/mo</small></div>
        <ul>${features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
        <button class="btn">${price === "$0" ? tx("Start free", "Commencer gratuitement") : tx("Upgrade", "Passer au niveau superieur")}</button>
      </article>
    `).join("");
  };
  document.querySelectorAll("[data-audience]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-audience]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderTiers(button.dataset.audience === "traveller" ? traveller : business);
    });
  });
  renderTiers(traveller);
}

window.addEventListener("hashchange", route);
setupLanguageToggle();
route();
