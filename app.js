const experiences = [
  {
    id: "masai-mara-migration",
    title: "Great Migration with a Maasai Naturalist",
    country: "Kenya",
    city: "Maasai Mara",
    category: "Wildlife",
    price: 185,
    duration: "Full day",
    rating: 4.9,
    reviews: 214,
    sponsored: true,
    x: 58,
    y: 54,
    image: "assets/scenes/savanna-sunset.jpg",
    guide: "Amara K.",
    languages: "English, Swahili, Maa",
    includes: ["Private guide", "Park route planning", "Picnic lunch", "Binoculars"],
    excludes: ["Park entrance fees", "Lodge transfers outside Narok"],
    description:
      "Track the migration routes with a licensed Maasai naturalist who reads the land through animal movement, grass patterns, and community memory."
  },
  {
    id: "marrakech-medina",
    title: "Marrakech Medina After Dark",
    country: "Morocco",
    city: "Marrakech",
    category: "Culture",
    price: 62,
    duration: "4 hours",
    rating: 4.8,
    reviews: 366,
    sponsored: false,
    x: 43,
    y: 28,
    image: "assets/scenes/marrakech-medina.jpg",
    guide: "Youssef B.",
    languages: "Arabic, French, English",
    includes: ["Licensed city guide", "Tea tasting", "Street food stops"],
    excludes: ["Souk purchases", "Hotel transfer"],
    description:
      "Move through spice alleys, rooftop views, artisan workshops, and food stalls with context that turns the medina from maze into living archive."
  },
  {
    id: "dakar-cooking",
    title: "Dakar Medina Cooking Table",
    country: "Senegal",
    city: "Dakar",
    category: "Food",
    price: 48,
    duration: "3.5 hours",
    rating: 4.9,
    reviews: 129,
    sponsored: true,
    x: 35,
    y: 45,
    image: "assets/scenes/zanzibar-beach.jpg",
    guide: "Fatou D.",
    languages: "Wolof, French, English",
    includes: ["Market walk", "Cooking class", "Shared meal", "Recipe notes"],
    excludes: ["Alcohol", "Private transport"],
    description:
      "Shop the market, learn the rhythm of thieboudienne, and eat with a Dakar host who links every flavour to family, coast, and migration."
  },
  {
    id: "accra-roots",
    title: "Accra Roots and Highlife Walk",
    country: "Ghana",
    city: "Accra",
    category: "History",
    price: 55,
    duration: "5 hours",
    rating: 4.7,
    reviews: 98,
    sponsored: false,
    x: 43,
    y: 52,
    image: "assets/scenes/victoria-falls.jpg",
    guide: "Kwame A.",
    languages: "English, Twi, Ga",
    includes: ["Museum entry", "Local guide", "Music history route"],
    excludes: ["Meals", "Ride share fares"],
    description:
      "Trace independence history, coastal memory, design studios, and highlife music through a route built for diaspora reconnection."
  },
  {
    id: "volcanoes-rwanda",
    title: "Rwanda Volcanoes Conservation Day",
    country: "Rwanda",
    city: "Musanze",
    category: "Adventure",
    price: 140,
    duration: "Full day",
    rating: 4.8,
    reviews: 172,
    sponsored: false,
    x: 56,
    y: 58,
    image: "assets/scenes/okavango-delta.jpg",
    guide: "Aline N.",
    languages: "Kinyarwanda, English, French",
    includes: ["Conservation briefing", "Village visit", "Trail snacks"],
    excludes: ["Gorilla permit", "Accommodation"],
    description:
      "Understand Rwanda's conservation model through foothill trails, local enterprise visits, and a practical briefing on responsible primate tourism."
  },
  {
    id: "cape-town-table",
    title: "Cape Town Table Mountain Photo Hike",
    country: "South Africa",
    city: "Cape Town",
    category: "Photography",
    price: 88,
    duration: "4.5 hours",
    rating: 4.9,
    reviews: 251,
    sponsored: true,
    x: 51,
    y: 83,
    image: "assets/scenes/cape-town-coast.jpg",
    guide: "Naledi M.",
    languages: "English, isiXhosa, Afrikaans",
    includes: ["Photo coaching", "Route guide", "Safety briefing"],
    excludes: ["Cable car ticket", "Camera equipment"],
    description:
      "A golden-hour route for travellers who want strong images, ecological context, and a guide who knows the mountain's changing weather."
  }
];

const destinations = [
  { name: "Kenya", type: "Safari", image: experiences[0].image, note: "Migration routes, conservancies, and community-led wildlife guiding." },
  { name: "Morocco", type: "Culture", image: experiences[1].image, note: "Medinas, desert roads, food traditions, and craft lineages." },
  { name: "Senegal", type: "Food", image: experiences[2].image, note: "Coastal kitchens, music, wrestling culture, and island memory." },
  { name: "Ghana", type: "Heritage", image: experiences[3].image, note: "Diaspora journeys, highlife, design, forts, and festivals." }
];

const app = document.querySelector("#app");
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

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
          <a class="btn light" href="#/experience/${item.id}">View</a>
          <button class="btn light" data-save="${item.id}">Save</button>
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
      button.textContent = "Saved";
    });
  });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <img class="hero-logo" src="assets/konian-lockup.png" alt="Konian - Your path to falling in love with Africa">
        <div class="eyebrow">54 nations - one endless road</div>
        <h1>Konian</h1>
        <p>Verified local guides, hidden cultural moments and AI-planned journeys across all 54 nations - the continent, as only locals can show you.</p>
        <div class="hero-search" role="search">
          <input type="search" placeholder="Where to? Kenya, Marrakech, Serengeti..." aria-label="Search destinations">
          <a class="btn" href="#/discover">Explore</a>
        </div>
        <div class="hero-actions">
          <a class="btn" href="#/plan">Plan my trip</a>
          <a class="btn secondary" href="#/discover">Explore experiences</a>
        </div>
      </div>
    </section>
    <section class="stats-band" aria-label="Konian platform statistics">
      <div class="stat"><strong>54</strong><span>African countries</span></div>
      <div class="stat"><strong>2.8k+</strong><span>Curated experiences</span></div>
      <div class="stat"><strong>50k+</strong><span>Traveller community</span></div>
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
      <a href="#/discover"><strong>Find</strong><span>Explore</span></a>
      <a href="#/plan"><strong>AI</strong><span>AI plan</span></a>
      <a href="#/map"><strong>Map</strong><span>Map</span></a>
      <a href="#/dashboard"><strong>Pro</strong><span>Guides</span></a>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>Start with places that have a pulse.</h2>
        <p>Featured launch destinations balance iconic travel with local context, cultural depth, and guide-led discovery.</p>
      </div>
      <div class="card-grid">
        ${destinations.map((item) => `
          <article class="card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-body">
              <span class="badge">${item.type}</span>
              <h3>${item.name}</h3>
              <p class="muted">${item.note}</p>
              <a class="btn light" href="#/discover">Explore ${item.name}</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-title">
        <h2>Top-rated experiences</h2>
        <p>Seeded from the MVP: safari, culture, food, photography, adventure, and diaspora reconnection.</p>
      </div>
      <div class="card-grid">${experiences.slice(0, 3).map(card).join("")}</div>
    </section>
    <section class="section">
      <div class="section-title centered">
        <div class="eyebrow">How Konian works</div>
        <h2>From overwhelmed to on your way</h2>
      </div>
      <div class="steps-grid">
        <article class="step-card"><span>01</span><h3>Tell us your dream</h3><p class="muted">Share where, how long, your budget and what moves you. Konian shapes the first route.</p></article>
        <article class="step-card"><span>02</span><h3>Get a living itinerary</h3><p class="muted">A day-by-day plan with verified guides, hidden cultural moments and honest costs.</p></article>
        <article class="step-card"><span>03</span><h3>Book with confidence</h3><p class="muted">Every guide is verified, every review is aggregated, and every booking is tracked in one place.</p></article>
      </div>
    </section>
    <section class="section">
      <div class="guide-band">
        <div class="eyebrow">For local guides</div>
        <h2>Your knowledge is the experience.</h2>
        <p>A professional storefront, booking calendar and analytics - built Africa-first, at a 10% commission, not 25%.</p>
        <a class="btn" href="#/dashboard">Become a Konian guide</a>
      </div>
    </section>
    <footer class="footer">
      <strong>Konian</strong>
      <span>Your path to falling in love with Africa</span>
      <small>54 nations - one endless road</small>
    </footer>
  `;
  bindSaveButtons();
}

function renderDiscover() {
  app.innerHTML = `
    <section class="section">
      <div class="section-title">
        <h2>Discover Africa</h2>
        <p>Search by country, city, category, price, and sponsored visibility.</p>
      </div>
      <div class="toolbar">
        <input class="search" id="search" type="search" placeholder="Search Kenya, food, Dakar, wildlife...">
        <select id="country"><option value="">All countries</option>${[...new Set(experiences.map((e) => e.country))].map((c) => `<option>${c}</option>`).join("")}</select>
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
          <span class="chip">${money.format(item.price)} per guest</span>
          <span class="chip">${item.languages}</span>
        </div>
        <h2>Experience</h2>
        <p class="muted">${item.description}</p>
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
        <h2>Book with ${item.guide}</h2>
        <form id="bookingForm">
          <label>Date<input name="date" type="date" required></label>
          <label>Guests<input name="guests" type="number" min="1" max="12" value="2" required></label>
          <label>Special requests<textarea name="requests" placeholder="Accessibility, dietary needs, pickup location..."></textarea></label>
          <button class="btn" type="submit">Confirm booking</button>
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
        <p>Plan from your starting point to your destination, then let Konian rank the trip around what matters most.</p>
      </div>
      <div class="content-grid">
        <form class="panel" id="plannerForm">
          <div class="form-grid">
            <label>Destination<input name="destination" value="Ghana and Côte d'Ivoire" required></label>
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
            ${["Wildlife", "Culture", "Food", "History", "Photography", "Wellness", "Nightlife", "Adventure"].map((interest) => `<label><input type="checkbox" name="interests" value="${interest}" ${["Culture", "Food", "History"].includes(interest) ? "checked" : ""}>${interest}</label>`).join("")}
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
  document.getElementById("plannerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const origin = data.get("origin");
    const destination = data.get("destination");
    const days = Math.min(Number(data.get("days")), 10);
    const totalBudget = Number(data.get("totalBudget"));
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
    document.getElementById("itinerary").innerHTML = `<h2>${days}-day route to ${destination}</h2><div class="route-summary"><div><span class="muted">From</span><strong>${origin}</strong></div><div><span class="muted">Budget</span><strong>${money.format(totalBudget)}</strong></div><div><span class="muted">Priority</span><strong>${priorities.join(" > ")}</strong></div></div><div class="chips">${interests.map((i) => `<span class="chip">${i}</span>`).join("")}</div><div class="transport-list">${transportPlan.map((item) => `<article><strong>${item.mode}</strong><span>${item.reason}</span><em>${money.format(item.estimate)}</em></article>`).join("")}</div><article class="day-card"><h3>Planning logic</h3><p>${priorityAdvice}</p></article><div style="display:grid;gap:12px;margin-top:14px">${plan}</div><button class="btn light" id="savePlan" style="margin-top:14px">Save itinerary</button>`;
    document.getElementById("savePlan").addEventListener("click", () => {
      setStore("konianPlans", [{ origin, destination, days, totalBudget, priorities, interests, created: new Date().toLocaleDateString() }, ...store("konianPlans", [])]);
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
    return `Konian anchors the journey around the countries you named first, then lets ${second} shape the pace, transport, and daily spend.`;
  }
  return `Konian ranks ${first} first, then ${second}, so the itinerary chooses transport, cities, and experiences in that order.`;
}

function renderMap() {
  app.innerHTML = `
    <section class="map-shell">
      <aside class="map-sidebar">
        <h1 style="font-size:2.6rem">Map Explorer</h1>
        <p class="muted">Prototype map view with category-coded experience markers across Africa.</p>
        <div class="chips">${[...new Set(experiences.map((e) => e.category))].map((c) => `<span class="chip">${c}</span>`).join("")}</div>
        <div style="display:grid;gap:12px;margin-top:18px">${experiences.map((item) => `<a class="booking-card" href="#/experience/${item.id}"><strong>${item.title}</strong><p class="muted">${item.city}, ${item.country} · ${money.format(item.price)}</p></a>`).join("")}</div>
      </aside>
      <div class="map-canvas" aria-label="Africa map with experience pins">
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
        <p>Business tools for guides, cultural operators, boutique hotels, and restaurants.</p>
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
          <p class="muted">Founder profile preview · Côte d'Ivoire, UK · Building the Africa-first travel operating system.</p>
          <a class="btn" href="#/pricing">Manage plan</a>
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
        <p>Dual-audience monetisation for travellers and African guides or businesses.</p>
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
