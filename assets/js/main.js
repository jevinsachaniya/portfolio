/**
 * Main Controller for Studio Portfolio Layout
 * Exact Match to DevsLoad Horizontal Browser Mockup Layout
 */

document.addEventListener('DOMContentLoaded', () => {
  initFlagshipProject();
  initServices();
  initSkills();
  initCompetencies();
  initExperience();
  initProcess();
  initContactForm();
  initCopyEmail();
  initMobileNav();
  initScrollSpy();
  initScrollAnimations();
});

/* ==========================================================================
   1. Scroll Reveal Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. AliveRadar — 2-Column Layout (Image Left, Content Right)
   Clean Studio White Aesthetic Matching the Website Theme
   ========================================================================== */
function initFlagshipProject() {
  const container = document.getElementById('selected-work-grid');
  if (!container || typeof portfolioData === 'undefined') return;

  const p = portfolioData.project;

  container.innerHTML = `
    <div class="card-clean p-6 sm:p-8 bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 reveal-on-scroll">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Column: Image Preview Mockup (lg:col-span-6) -->
        <div class="lg:col-span-6 flex flex-col justify-between">
          <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
            <!-- Top Mockup Bar -->
            <div class="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div class="flex items-center gap-1.5 shrink-0">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div class="bg-white border border-slate-200 rounded-md px-3 py-0.5 text-[11px] font-mono text-slate-500 flex items-center gap-1.5 flex-1 max-w-[240px] mx-2">
                <i class="fa-solid fa-lock text-[9px] text-emerald-500"></i>
                <span class="truncate">https://aliveradar.com</span>
              </div>
              <span class="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-600 font-bold shrink-0">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Live</span>
              </span>
            </div>

            <!-- Image Viewport -->
            <div class="relative overflow-hidden cursor-pointer bg-slate-50 group" onclick="openProjectModal('${p.id}')">
              <img 
                src="${p.image}" 
                alt="${p.title}" 
                class="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
          </div>

          <!-- Bottom Label -->
          <div class="flex justify-between items-center pt-2.5 text-[11px] text-slate-400 font-semibold">
            <span class="flex items-center gap-1 text-purple-600">
              <i class="fa-solid fa-shield-halved text-xs"></i>
              <span>Production Platform</span>
            </span>
            <button onclick="openProjectModal('${p.id}')" class="text-slate-500 hover:text-purple-600 flex items-center gap-1">
              <span>View Full Screenshot</span>
              <i class="fa-solid fa-expand text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Right Column: Content & Actions (lg:col-span-6) -->
        <div class="lg:col-span-6 space-y-4">
          
          <!-- Top Meta Row -->
          <div class="flex items-center justify-between text-xs">
            <span class="text-purple-600 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <i class="fa-solid fa-rocket text-xs"></i>
              FEATURED PLATFORM
            </span>
            <span class="text-slate-400 font-semibold text-[11px]">Independent Project</span>
          </div>

          <!-- Title Row with Arrow -->
          <div>
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2">
              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">
                AliveRadar — Website Uptime Platform
              </h3>
              <i class="fa-solid fa-arrow-up-right-from-square text-base text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
            </a>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Independently developed comprehensive website uptime monitoring platform offering real-time diagnostics for website availability, response times, SSL & DNS health, and public status pages.
          </p>

          <!-- Key Bullet Points with Green Checkmarks -->
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700">
            <li class="flex items-start gap-2.5">
              <i class="fa-solid fa-check text-purple-600 text-xs mt-1 shrink-0"></i>
              <span>Built automated checks for HTTP endpoints, response latency tracking, and downtime detection.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fa-solid fa-check text-purple-600 text-xs mt-1 shrink-0"></i>
              <span>Engineered with Python backend, Docker & Nginx containerized deployment, and real-time alert routing.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fa-solid fa-check text-purple-600 text-xs mt-1 shrink-0"></i>
              <span>Clean dashboard interface to review monitoring metrics, SSL/DNS health, and publish public status pages.</span>
            </li>
          </ul>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${p.tags.map(t => `
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                ${t}
              </span>
            `).join('')}
          </div>

          <!-- Action Buttons & Live Status -->
          <div class="pt-3 space-y-2">
            <div class="flex flex-wrap items-center gap-3">
              <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                <span>Visit Live Platform</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
              <button onclick="openProjectModal('${p.id}')" class="px-5 py-3 rounded-full border border-purple-200 hover:border-purple-600 text-purple-700 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2">
                <i class="fa-solid fa-layer-group text-xs"></i>
                <span>Quick Specs</span>
              </button>
            </div>

            <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 pt-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live & Operational &bull; aliveradar.com</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

/* ==========================================================================
   3. Services (What I Do)
   ========================================================================== */
function initServices() {
  const container = document.getElementById('services-grid');
  if (!container || typeof portfolioData === 'undefined') return;

  container.innerHTML = portfolioData.services.map((s, idx) => `
    <div class="card-clean p-6 flex flex-col justify-between group reveal-on-scroll delay-${(idx + 1) * 100}">
      <div>
        <div class="w-12 h-12 rounded-xl ${s.color} flex items-center justify-center text-lg mb-4 group-hover:scale-105 transition-transform">
          <i class="${s.icon}"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1.5">
          ${s.title}
        </h4>
        <p class="text-xs text-slate-500 leading-relaxed">
          ${s.desc}
        </p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Skills (Bars + 5x2 Tech Logo Grid)
   ========================================================================== */
function initSkills() {
  const barsContainer = document.getElementById('skill-bars-container');
  const iconsContainer = document.getElementById('tech-icons-grid');
  if (!barsContainer || !iconsContainer || typeof portfolioData === 'undefined') return;

  barsContainer.innerHTML = portfolioData.skillBars.map(b => `
    <div class="space-y-1.5">
      <div class="flex justify-between items-center text-xs font-bold text-slate-700">
        <span>${b.name}</span>
        <span class="text-purple-600 font-mono text-[11px]">${b.percent}%</span>
      </div>
      <div class="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div class="h-full rounded-full bg-purple-600 transition-all duration-1000" style="width: ${b.percent}%;"></div>
      </div>
    </div>
  `).join('');

  iconsContainer.innerHTML = portfolioData.techLogos.map(t => `
    <div class="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-purple-200 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group aspect-square">
      <div class="w-9 h-9 rounded-xl flex items-center justify-center text-2xl mb-1 group-hover:scale-110 transition-transform" style="color: ${t.color}">
        <i class="${t.icon}"></i>
      </div>
      <span class="text-[10px] font-bold text-slate-600">${t.name}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Core Competencies Grid
   ========================================================================== */
function initCompetencies() {
  const container = document.getElementById('competencies-grid');
  if (!container || typeof portfolioData === 'undefined') return;

  container.innerHTML = portfolioData.coreCompetencies.map((c) => `
    <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center gap-3 reveal-on-scroll">
      <div class="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs shrink-0">
        <i class="fa-solid fa-check"></i>
      </div>
      <span class="text-xs font-bold text-slate-800">${c}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Professional Experience Points (PHP Infosec)
   ========================================================================== */
function initExperience() {
  const container = document.getElementById('experience-points-grid');
  if (!container || typeof portfolioData === 'undefined') return;

  container.innerHTML = portfolioData.experience.points.map((pt) => `
    <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
      <i class="fa-solid fa-circle-check text-purple-600 mt-1 text-xs shrink-0"></i>
      <span>${pt}</span>
    </li>
  `).join('');
}

/* ==========================================================================
   7. Process Steps (01 to 05)
   ========================================================================== */
function initProcess() {
  const container = document.getElementById('process-steps-container');
  if (!container || typeof portfolioData === 'undefined') return;

  container.innerHTML = portfolioData.processSteps.map((p, idx) => `
    <div class="relative z-10 flex flex-col items-center text-center px-2 group reveal-on-scroll delay-${(idx + 1) * 100}">
      <div class="w-12 h-12 rounded-full bg-white border-2 border-purple-500 text-purple-600 font-extrabold text-xs flex items-center justify-center shadow-md mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
        ${p.step}
      </div>
      <h5 class="text-sm font-extrabold text-slate-900 mb-1">${p.title}</h5>
      <p class="text-[11px] text-slate-400 max-w-[170px] leading-relaxed">
        ${p.desc}
      </p>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Project Case Study Modal
   ========================================================================== */
function openProjectModal(id) {
  const modal = document.getElementById('project-modal');
  const project = portfolioData.project;
  if (!modal || !project) return;

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-desc').textContent = project.description;
  document.getElementById('modal-problem').textContent = project.problem;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = project.features.map(f => `
    <li class="flex items-start gap-2 text-xs text-slate-700">
      <i class="fa-solid fa-check text-purple-600 mt-0.5 text-xs shrink-0"></i>
      <span>${f}</span>
    </li>
  `).join('');

  const contribList = document.getElementById('modal-contributions');
  contribList.innerHTML = project.contributions.map(c => `
    <li class="flex items-start gap-2 text-xs text-slate-700">
      <i class="fa-solid fa-terminal text-purple-600 mt-0.5 text-xs shrink-0"></i>
      <span>${c}</span>
    </li>
  `).join('');

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
      ${t}
    </span>
  `).join('');

  const liveBtn = document.getElementById('modal-live-btn');
  if (project.liveUrl) {
    liveBtn.href = project.liveUrl;
    liveBtn.classList.remove('hidden');
  } else {
    liveBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeBtn.onclick = closeModal;
  if (backdrop) backdrop.onclick = closeModal;

  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/* ==========================================================================
   9. Contact Form & Copy Email
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value) {
      if (typeof confetti === 'function') {
        confetti({ particleCount: 65, spread: 60, origin: { y: 0.8 } });
      }
      showToast('Thank you! Your inquiry has been sent.', 'success');
      input.value = '';
    }
  });
}

function initCopyEmail() {
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'jevinsachaniya@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied: ' + email, 'success');
      });
    });
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold shadow-xl border bg-white border-purple-200 text-slate-800 transition-all duration-300 transform translate-y-3 opacity-0`;
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-purple-600 text-sm"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   10. Mobile Navigation & ScrollSpy
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const close = document.getElementById('mobile-drawer-close');
  if (!toggle || !drawer) return;

  toggle.onclick = () => drawer.classList.remove('hidden');
  if (close) close.onclick = () => drawer.classList.add('hidden');
  drawer.querySelectorAll('a').forEach(a => {
    a.onclick = () => drawer.classList.add('hidden');
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = 'hero';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
