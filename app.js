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

function route() {
  const [page, id] = location.hash.replace("#/", "").split("/");
  const current = page || "";
  const routes = {
    "": renderHome,
    discover: renderDiscover,
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
  applyLogoVariation();
  app.focus({ preventScroll: true });
}

function card(item) {
  return `
    <article class="card">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="card-body">
        <div class="chips">
          <span class="badge green">${item.category}</span>
          ${item.sponsored ? '<span class="badge gold">Sponsored</span>' : ""}
        </div>
        <h3>${item.title}</h3>
        <p class="muted">${item.city}, ${item.country}</p>
        <div class="meta">
          <span>Rating ${item.rating} (${item.reviews})</span>
          <strong>${money.format(item.price)}</strong>
        </div>
        <div class="actions" style="margin-top: 14px">
          <a class="btn light" href="#/experience/${item.id}">View / Voir</a>
          <button class="btn light" data-save="${item.id}">Save / Enregistrer</button>
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
      button.textContent = "Saved / Enregistré";
    });
  });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-brand-pair" aria-label="Konian logo variations">
          <img src="assets/app-icon-cream.png" alt="Ivory Konian logo">
          <img src="assets/app-icon-bronze.png" alt="Bronze Konian logo">
        </div>
        <div class="eyebrow">Côte d'Ivoire first - français & English</div>
        <h1>Konian</h1>
        <p>Your path to falling in love with Côte d'Ivoire. Verified bilingual guides, hidden cultural moments and AI-planned journeys from Abidjan to Grand-Bassam, Assinie, Yamoussoukro and Man.</p>
        <div class="hero-search" role="search">
          <input type="search" placeholder="Where to? Abidjan, Bassam, Assinie..." aria-label="Search destinations">
          <a class="btn" href="#/discover">Explore / Explorer</a>
        </div>
        <div class="hero-actions">
          <a class="btn" href="#/plan">Plan my trip / Planifier</a>
          <a class="btn secondary" href="#/discover">Explore experiences / Explorer</a>
        </div>
      </div>
    </section>
    <section class="stats-band" aria-label="Konian platform statistics">
      <div class="stat"><strong>1</strong><span>Launch country: Côte d'Ivoire</span></div>
      <div class="stat"><strong>6</strong><span>Curated pilot experiences</span></div>
      <div class="stat"><strong>FR/EN</strong><span>Bilingual by design</span></div>
      <div class="stat"><strong>10%</strong><span>Guide-friendly commission</span></div>
    </section>
    <section class="luxury-rail" aria-label="Konian brand values">
      <span>Discovery</span>
      <span>Authenticity</span>
      <span>Culture</span>
      <span>Luxury</span>
      <span>Connection</span>
    </section>
    <section class="mobile-quick-actions" aria-label="Quick actions">
      <a href="#/discover"><strong>Find</strong><span>Explore / Explorer</span></a>
      <a href="#/plan"><strong>AI</strong><span>AI plan / Plan IA</span></a>
      <a href="#/map"><strong>Map</strong><span>Map</span></a>
      <a href="#/dashboard"><strong>Pro</strong><span>Guides</span></a>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>Start with places that have a pulse.</h2>
        <p>Featured launch places focus on Côte d'Ivoire with local context, cultural depth, and bilingual guide-led discovery.</p>
      </div>
      <div class="card-grid">
        ${destinations.map((item) => `
          <article class="card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-body">
              <span class="badge">${item.type}</span>
              <h3>${item.name}</h3>
              <p class="muted">${item.note}</p>
              <a class="btn light" href="#/discover">Explore / Explorer ${item.name}</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>Top-rated experiences</h2>
        <p>Seeded for the Côte d'Ivoire MVP: culture, food, heritage, lagoon escapes, adventure, and diaspora reconnection.</p>
      </div>
      <div class="card-grid">${experiences.slice(0, 3).map(card).join("")}</div>
    </section>
    <section class="section">
      <div class="section-title centered">
        <div class="eyebrow">How Konian works</div>
        <h2>From overwhelmed to on your way</h2>
      </div>
      <div class="steps-grid">
        <article class="step-card"><span>01</span><h3>Tell us your dream</h3><p class="muted">Share where in Côte d'Ivoire, how long, your budget, language preference and what moves you.</p></article>
        <article class="step-card"><span>02</span><h3>Get a living itinerary</h3><p class="muted">A day-by-day plan with verified guides, hidden cultural moments and honest costs.</p></article>
        <article class="step-card"><span>03</span><h3>Book with confidence</h3><p class="muted">Every guide is verified, every review is aggregated, and every booking is tracked in one place.</p></article>
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
        <h2>Discover Côte d'Ivoire / Découvrir la Côte d'Ivoire</h2>
        <p>Search by city, category, price, language and sponsored visibility.</p>
      </div>
      <div class="toolbar">
        <input class="search" id="search" type="search" placeholder="Search Abidjan, Bassam, food, heritage...">
        <select id="country"><option value="">All Côte d'Ivoire</option>${[...new Set(experiences.map((e) => e.country))].map((c) => `<option>${c}</option>`).join("")}</select>
        <select id="category"><option value="">All categories</option>${[...new Set(experiences.map((e) => e.category))].map((c) => `<option>${c}</option>`).join("")}</select>
        <select id="price"><option value="">Any price</option><option value="60">Under $60</option><option value="100">Under $100</option><option value="999">All premium</option></select>
      </div>
      <div class="card-grid" id="results"></div>
    </section>
  `;
  const controls = ["search", "country", "category", "price"].map((id) => document.getElementById(id));
  const update = () => {
    const [search, country, category, price] = controls.map((control) => control.value.toLowerCase());
    const filtered = experiences.filter((item) => {
      const text = `${item.title} ${item.country} ${item.city} ${item.category} ${item.guide}`.toLowerCase();
      return text.includes(search) && (!country || item.country.toLowerCase() === country) && (!category || item.category.toLowerCase() === category) && (!price || item.price <= Number(price));
    });
    document.getElementById("results").innerHTML = filtered.length ? filtered.map(card).join("") : '<div class="empty-state">No experiences match those filters yet.</div>';
    bindSaveButtons();
  };
  controls.forEach((control) => control.addEventListener("input", update));
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
        <h2>AI Trip Planner</h2>
        <p>Plan a Côte d'Ivoire journey from your starting point, in French or English, then let Konian rank the trip around what matters most.</p>
      </div>
      <div class="content-grid">
        <form class="panel" id="plannerForm">
          <div class="form-grid">
            <label>Destination<input name="destination" value="Abidjan, Grand-Bassam and Assinie" required></label>
            <label>Starting location<input name="origin" value="London, United Kingdom" required></label>
            <label>Days<input name="days" type="number" min="2" max="21" value="7" required></label>
            <label>Total budget<input name="totalBudget" type="number" min="150" step="50" value="1800" required></label>
            <label>Budget tier<select name="budget"><option>Budget</option><option selected>Mid-range</option><option>Luxury</option></select></label>
            <label>Style<select name="style"><option>Relaxed</option><option selected>Balanced</option><option>Packed</option></select></label>
          </div>
          <h3>Transport throughout</h3>
          <div class="option-grid">
            ${["Flight", "Train", "Coach", "Private driver", "Rental car", "Ferry", "Domestic flight", "Walking"].map((mode) => `<label><input type="checkbox" name="transport" value="${mode}" ${["Flight", "Private driver", "Domestic flight", "Walking"].includes(mode) ? "checked" : ""}>${mode}</label>`).join("")}
          </div>
          <h3>Design priority</h3>
          <div class="form-grid">
            <label>Most important<select name="priority1"><option selected>Budget</option><option>Country</option><option>Transport comfort</option><option>Time</option><option>Culture</option><option>Safety</option></select></label>
            <label>Second<select name="priority2"><option>Budget</option><option selected>Country</option><option>Transport comfort</option><option>Time</option><option>Culture</option><option>Safety</option></select></label>
            <label>Third<select name="priority3"><option>Budget</option><option>Country</option><option selected>Culture</option><option>Transport comfort</option><option>Time</option><option>Safety</option></select></label>
          </div>
          <h3>Interests</h3>
          <div class="option-grid">
            ${["Culture", "Food", "Heritage", "Lagoon", "Diaspora", "Nightlife", "Wellness", "Adventure"].map((interest) => `<label><input type="checkbox" name="interests" value="${interest}" ${["Culture", "Food", "Heritage"].includes(interest) ? "checked" : ""}>${interest}</label>`).join("")}
          </div>
          <div class="actions" style="margin-top: 18px"><button class="btn" type="submit">Generate itinerary</button></div>
        </form>
        <div class="panel" id="itinerary">
          <h2>Your itinerary will appear here</h2>
          <p class="muted">The MVP version uses structured local generation. A production build can connect this same flow to Claude, OpenAI, or another itinerary model.</p>
        </div>
      </div>
    </section>
  `;
  const plannerForm = document.getElementById("plannerForm");
  plannerForm.elements.destination.value = "Abidjan, Grand-Bassam and Assinie";
  plannerForm.elements.origin.closest("label").insertAdjacentHTML("afterend", '<label>Language / Langue<select name="language"><option selected>English</option><option>Français</option><option>Français + English</option></select></label>');
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
        <h1 style="font-size:2.6rem">Map Explorer</h1>
        <p class="muted">Prototype Côte d'Ivoire map view with category-coded experience markers.</p>
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
        <h2>My Bookings</h2>
        <p>Track upcoming, pending, completed, and cancelled bookings.</p>
      </div>
      <div class="card-grid">
        ${bookings.length ? bookings.map((booking, index) => `
          <article class="booking-card">
            <span class="badge green">${booking.status}</span>
            <h3>${booking.title}</h3>
            <p class="muted">${booking.date} · ${booking.guests} guests · ${booking.code}</p>
            <div class="meta"><strong>${money.format(booking.total)}</strong><button class="btn light" data-cancel="${index}">Cancel</button></div>
          </article>
        `).join("") : '<div class="empty-state">No bookings yet. Choose an experience and confirm a date.</div>'}
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
        <h2>Guide Dashboard</h2>
        <p>Business tools for Ivorian guides, cultural operators, boutique hotels, and restaurants.</p>
      </div>
      <div class="metric-grid">
        <div class="metric"><strong>6</strong><span class="muted">Active listings</span></div>
        <div class="metric"><strong>42</strong><span class="muted">Monthly bookings</span></div>
        <div class="metric"><strong>$8.7k</strong><span class="muted">Revenue</span></div>
        <div class="metric"><strong>4.8</strong><span class="muted">Average rating</span></div>
      </div>
      <div class="panel" style="margin-top:22px;overflow:auto">
        <h2>Listing management</h2>
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
        <h2>Traveller Profile</h2>
        <p>Premium status, saved places, booking history, and itinerary library.</p>
      </div>
      <div class="content-grid">
        <div class="panel">
          <span class="badge gold">Adventurer premium</span>
          <h2>Wilfried Konian</h2>
          <p class="muted">Founder profile preview - Côte d'Ivoire, UK - Building a Côte d'Ivoire-first travel operating system.</p>
          <a class="btn" href="#/pricing">Manage plan</a>
        </div>
        <div class="panel logo-variations">
          <div class="logo-current">
            <img data-current-logo src="${pickLogoVariation().src}" alt="Current Konian logo variation">
            <div>
              <h2>Logo mood rotation</h2>
              <p class="muted">Konian can use a different logo mood daily or weekly. Random mode reshuffles from the full variation library.</p>
            </div>
          </div>
          <div class="segmented logo-mode" style="margin: 16px 0">
            <button data-logo-mode="daily">Daily</button>
            <button data-logo-mode="weekly">Weekly</button>
            <button data-logo-mode="random">Random</button>
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
          <h2>Saved places</h2>
          ${saved.length ? saved.map((id) => {
            const item = experiences.find((experience) => experience.id === id);
            return item ? `<p><a href="#/experience/${item.id}">${item.title}</a></p>` : "";
          }).join("") : '<p class="muted">Saved experiences will appear here.</p>'}
          <h2>Saved itineraries</h2>
          ${plans.length ? plans.map((plan) => `<p>${plan.days} days in ${plan.destination} · ${plan.created}</p>`).join("") : '<p class="muted">Generated plans will appear here.</p>'}
        </div>
      </div>
    </section>
  `;
  document.querySelector(".content-grid .panel .muted").textContent = "Founder profile preview - Côte d'Ivoire, UK - Building a Côte d'Ivoire-first travel operating system.";
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
    ["Explorer", "$0", ["Basic discovery", "3 AI itineraries/month", "Standard booking"]],
    ["Adventurer", "$9", ["Unlimited AI itineraries", "Offline map previews", "Priority booking"]],
    ["Ambassador", "$19", ["Exclusive guide access", "Concierge support", "Community badge"]]
  ];
  const business = [
    ["Starter", "$0", ["1 listing", "Basic analytics", "10% commission"]],
    ["Professional", "$29", ["10 listings", "Advanced analytics", "8% commission"]],
    ["Enterprise", "$99", ["Unlimited listings", "API access", "6% commission"]]
  ];
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>Pricing</h2>
        <p>Dual-audience monetisation for travellers and Ivorian guides or businesses.</p>
      </div>
      <div class="segmented" style="margin-bottom:18px">
        <button class="active" data-audience="traveller">Traveller</button>
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
        <button class="btn">${price === "$0" ? "Start free" : "Upgrade"}</button>
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
route();
