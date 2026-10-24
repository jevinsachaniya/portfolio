/**
 * Main Controller for Jevin Sachaniya's Developer Portfolio
 * Clean, Modern, Recruiter-Friendly, and Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  initFlagshipProject();
  initServices();
  initSkills();
  initCompetencies();
  initExperience();
  initProcess();
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

  // If user prefers reduced motion, reveal all immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. AliveRadar — Flagship Case Study Card
   DevsLoad Aesthetic, Clean White Studio, Zero Distortion
   ========================================================================== */
function initFlagshipProject() {
  const container = document.getElementById('selected-work-grid');
  if (!container || typeof portfolioData === 'undefined') return;

  const p = portfolioData.flagshipProject;

  container.innerHTML = `
    <div class="card-clean p-6 sm:p-8 bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300">
      <div class="flex flex-col gap-6">
        
        <!-- Top: Browser Preview Mockup (Full Natural Aspect Ratio - Never Cropped) -->
        <div class="w-full max-w-xl sm:max-w-2xl mx-auto flex flex-col justify-between">
          <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
            <!-- Top Browser Chrome Bar -->
            <div class="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
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

            <!-- Image Viewport (Full Image Visible, Natural Ratio) -->
            <div class="relative cursor-pointer bg-slate-50 group" onclick="openProjectModal('aliveradar')" role="button" tabindex="0" aria-label="Open AliveRadar Case Study">
              <img 
                src="${p.image}" 
                alt="${p.title}" 
                class="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-500" 
                loading="lazy" 
              />
            </div>
          </div>

          <!-- Bottom Meta Label -->
          <div class="flex justify-between items-center pt-2.5 text-[11px] text-slate-400 font-semibold">
            <span class="flex items-center gap-1.5 text-purple-600">
              <i class="fa-solid fa-satellite-dish text-xs"></i>
              <span>Production Web Application</span>
            </span>
            <button onclick="openProjectModal('aliveradar')" class="text-slate-500 hover:text-purple-600 flex items-center gap-1 transition-colors" aria-label="View AliveRadar Case Study">
              <span>View Case Study</span>
              <i class="fa-solid fa-expand text-[10px]"></i>
            </button>
          </div>
        </div>

        <!-- Bottom: Project Details & Structured Grids -->
        <div class="w-full space-y-4">
          
          <!-- Top Meta Row -->
          <div class="flex items-center justify-between text-xs">
            <span class="text-purple-600 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <i class="fa-solid fa-rocket text-xs"></i>
              FEATURED PLATFORM
            </span>
            <span class="text-slate-400 font-semibold text-[11px]">Personal Web Project</span>
          </div>

          <!-- Title Row with Live Link -->
          <div>
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2">
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">
                ${p.title}
              </h3>
              <i class="fa-solid fa-arrow-up-right-from-square text-sm text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"></i>
            </a>
          </div>

          <!-- Project Overview -->
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ${p.overview}
          </p>

          <!-- Problem Addressed & My Contribution (2 Columns Side-by-Side) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div class="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs flex flex-col justify-between">
              <div>
                <span class="font-bold text-purple-800 uppercase tracking-wider text-[10px] block mb-1">
                  <i class="fa-solid fa-circle-info mr-1"></i> Problem Addressed
                </span>
                <p class="text-slate-600 leading-relaxed">
                  ${p.problem}
                </p>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs flex flex-col justify-between">
              <div>
                <span class="font-bold uppercase tracking-wider text-slate-900 text-[10px] block mb-1">
                  <i class="fa-solid fa-code-commit text-purple-600 mr-1"></i> My Contribution
                </span>
                <p class="text-slate-600 leading-relaxed">
                  ${p.contributions[0]}
                </p>
              </div>
            </div>
          </div>

          <!-- Key Implemented Features (Grid - Concise Genuine Features) -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Key Implemented Features:</h4>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-slate-700">
              ${p.implementedFeatures.map(f => `
                <li class="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <i class="fa-solid fa-check text-purple-600 text-xs mt-0.5 shrink-0"></i>
                  <span class="text-[11px] font-medium leading-snug">${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Footer Row: Tech Stack & Action Buttons -->
          <div class="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 border-t border-slate-100">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="text-xs font-bold text-slate-400 mr-1 uppercase">Stack:</span>
              ${p.tags.map(t => `
                <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                  ${t}
                </span>
              `).join('')}
            </div>

            <div class="flex flex-wrap items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <div class="flex items-center gap-2 text-xs font-bold text-emerald-600">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Platform</span>
              </div>
              <div class="flex items-center gap-2">
                <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-4 sm:px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5">
                  <span>Visit Live</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
                <button onclick="openProjectModal('aliveradar')" class="px-3.5 sm:px-4 py-2.5 rounded-full border border-purple-200 hover:border-purple-600 text-purple-700 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5" aria-label="Open Full AliveRadar Case Study">
                  <i class="fa-solid fa-layer-group text-xs"></i>
                  <span>Case Study</span>
                </button>
              </div>
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

  container.innerHTML = portfolioData.services.map((s) => `
    <div class="card-clean p-6 flex flex-col justify-between group h-full">
      <div>
        <div class="w-12 h-12 rounded-xl ${s.color} flex items-center justify-center text-lg mb-4 group-hover:scale-105 transition-transform">
          <i class="${s.icon}"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1.5 leading-snug">
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
   5. Technical Skills (Safe Headings, No Clipped Text, Zero Fake Percentages)
   ========================================================================== */
function initSkills() {
  const categoriesContainer = document.getElementById('skills-categories-grid');
  const iconsContainer = document.getElementById('tech-icons-grid');
  if (!categoriesContainer || !iconsContainer || typeof portfolioData === 'undefined') return;

  // 4 Organized Skill Category Cards with guaranteed unclipped headings
  categoriesContainer.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="card-clean p-5 sm:p-6 flex flex-col justify-between border border-slate-100 hover:border-purple-200 transition-all bg-white h-full">
      <div>
        <div class="flex items-center gap-3 mb-4 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-purple-50 ${cat.color} flex items-center justify-center text-base shrink-0">
            <i class="${cat.icon}"></i>
          </div>
          <div class="min-w-0 flex-1">
            <h4 class="text-sm sm:text-base font-extrabold text-slate-900 leading-snug break-words">
              ${cat.category}
            </h4>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${cat.skills.map(s => `
            <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/60 leading-normal inline-block">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // 10 Tech Logo Cards
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
   6. Core Competencies Grid
   ========================================================================== */
function initCompetencies() {
  const container = document.getElementById('competencies-grid');
  if (!container || typeof portfolioData === 'undefined') return;

  container.innerHTML = portfolioData.coreCompetencies.map((c) => `
    <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center gap-3">
      <div class="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs shrink-0">
        <i class="fa-solid fa-check"></i>
      </div>
      <span class="text-xs font-bold text-slate-800">${c}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Dynamic Experience Duration Calculation & Responsibilities
   ========================================================================== */
function calculateTenure(startDateStr) {
  const start = new Date(startDateStr);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1;
  if (months <= 1) return '1 month';
  if (months < 12) return `${months} months`;
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  return remMonths > 0 ? `${years} yr ${remMonths} mos` : `${years} yr`;
}

function initExperience() {
  const container = document.getElementById('experience-points-grid');
  const durationBadge = document.getElementById('experience-duration-badge');
  const heroDurationText = document.getElementById('hero-experience-period');

  if (typeof portfolioData === 'undefined') return;

  const exp = portfolioData.experience;
  const tenure = calculateTenure(exp.startDate);

  if (durationBadge) {
    durationBadge.textContent = `${exp.period} (${tenure})`;
  }
  if (heroDurationText) {
    heroDurationText.textContent = `${exp.period} (${tenure})`;
  }

  if (container) {
    container.innerHTML = exp.responsibilities.map((pt) => `
      <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-purple-200 transition-colors">
        <i class="fa-solid fa-circle-check text-purple-600 mt-1 text-xs shrink-0"></i>
        <span>${pt}</span>
      </li>
    `).join('');
  }
}

/* ==========================================================================
   8. Process Steps (01 to 05)
   ========================================================================== */
function initProcess() {
  const container = document.getElementById('process-steps-container');
  if (!container || typeof portfolioData === 'undefined') return;

  container.innerHTML = portfolioData.processSteps.map((p) => `
    <div class="relative z-10 flex flex-col items-center text-center px-2 group">
      <div class="w-12 h-12 rounded-full bg-white border-2 border-purple-500 text-purple-600 font-extrabold text-xs flex items-center justify-center shadow-md mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
        ${p.step}
      </div>
      <h5 class="text-sm font-extrabold text-slate-900 mb-1 leading-snug">${p.title}</h5>
      <p class="text-[11px] text-slate-400 max-w-[170px] leading-relaxed">
        ${p.desc}
      </p>
    </div>
  `).join('');
}

/* ==========================================================================
   8. AliveRadar Case Study Modal
   ========================================================================== */
function openProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal || typeof portfolioData === 'undefined') return;

  const project = portfolioData.flagshipProject || portfolioData.project;
  if (!project) return;

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.category;
  
  const modalImage = document.getElementById('modal-image');
  const modalImageContainer = modalImage ? modalImage.parentElement : null;
  if (project.image) {
    modalImage.src = project.image;
    if (modalImageContainer) modalImageContainer.classList.remove('hidden');
  } else if (modalImageContainer) {
    modalImageContainer.classList.add('hidden');
  }

  document.getElementById('modal-desc').textContent = project.overview || project.description;
  document.getElementById('modal-problem').textContent = project.problem;

  // Architecture section
  const archBox = document.getElementById('modal-arch-box');
  const archText = document.getElementById('modal-arch');
  if (archText && archBox) {
    if (project.architecture) {
      archText.textContent = project.architecture;
      archBox.classList.remove('hidden');
    } else if (project.solution) {
      archText.textContent = project.solution;
      archBox.classList.remove('hidden');
    } else {
      archBox.classList.add('hidden');
    }
  }

  // Monitoring engine / telemetry
  const implBox = document.getElementById('modal-impl-box');
  const implText = document.getElementById('modal-tech-impl');
  if (implText && implBox) {
    if (project.technicalImplementation) {
      implText.textContent = project.technicalImplementation;
      implBox.classList.remove('hidden');
    } else {
      implBox.classList.add('hidden');
    }
  }

  // Implemented Features
  const featuresList = document.getElementById('modal-features');
  if (featuresList && project.implementedFeatures) {
    featuresList.innerHTML = project.implementedFeatures.map(f => `
      <li class="flex items-start gap-2 text-xs text-slate-700">
        <i class="fa-solid fa-circle-check text-emerald-600 mt-0.5 text-xs shrink-0"></i>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Planned Features (Hide cleanly if secondary project)
  const plannedBox = document.getElementById('modal-planned-box');
  const plannedList = document.getElementById('modal-planned');
  if (plannedList && plannedBox) {
    if (project.plannedFeatures && project.plannedFeatures.length > 0) {
      plannedBox.classList.remove('hidden');
      plannedList.innerHTML = project.plannedFeatures.map(f => `
        <li class="flex items-start gap-2 text-xs text-slate-500">
          <i class="fa-solid fa-clock-rotate-left text-purple-400 mt-0.5 text-xs shrink-0"></i>
          <span>${f} (Planned Roadmap)</span>
        </li>
      `).join('');
    } else {
      plannedBox.classList.add('hidden');
    }
  }

  // Contributions (Hide cleanly if not present)
  const contribBox = document.getElementById('modal-contrib-box');
  const contribList = document.getElementById('modal-contributions');
  if (contribList && contribBox) {
    if (project.contributions && project.contributions.length > 0) {
      contribBox.classList.remove('hidden');
      contribList.innerHTML = project.contributions.map(c => `
        <li class="flex items-start gap-2 text-xs text-slate-700">
          <i class="fa-solid fa-code-commit text-purple-600 mt-0.5 text-xs shrink-0"></i>
          <span>${c}</span>
        </li>
      `).join('');
    } else {
      contribBox.classList.add('hidden');
    }
  }

  // Tags
  const tagsContainer = document.getElementById('modal-tags');
  const tagList = project.tags || project.technologies || [];
  if (tagsContainer) {
    tagsContainer.innerHTML = tagList.map(t => `
      <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
        ${t}
      </span>
    `).join('');
  }

  // Action / Demo Button
  const liveBtn = document.getElementById('modal-live-btn');
  const liveBtnText = document.getElementById('modal-live-btn-text');
  if (liveBtn && liveBtnText) {
    if (project.liveUrl) {
      liveBtn.href = project.liveUrl;
      liveBtnText.textContent = 'Open Live Website (aliveradar.com)';
      liveBtn.classList.remove('hidden');
    } else if (project.githubUrl) {
      liveBtn.href = project.githubUrl;
      liveBtnText.textContent = 'View on GitHub Repository';
      liveBtn.classList.remove('hidden');
    } else {
      liveBtn.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.onclick = closeModal;
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
   10. Copy Email & Toast Notification
   ========================================================================== */
function initCopyEmail() {
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const email = (portfolioData && portfolioData.personal && portfolioData.personal.email) || 'jevinsachaniya@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold shadow-xl border bg-white border-purple-200 text-slate-800 transition-all duration-300 transform translate-y-3 opacity-0 pointer-events-auto`;
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
   11. Mobile Navigation & ScrollSpy
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
  const targetNavIds = ['hero', 'projects', 'about', 'experience', 'expertise', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('#mobile-drawer nav a');

  function updateActiveLink() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    let activeId = 'hero';

    // If near bottom of page, highlight Contact
    if (windowHeight + scrollPosition >= docHeight - 100) {
      activeId = 'contact';
    } else {
      const triggerPoint = 180;
      for (let i = 0; i < targetNavIds.length; i++) {
        const id = targetNavIds[i];
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            activeId = id;
          }
        }
      }
    }

    // Update desktop nav
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update mobile drawer links
    mobileLinks.forEach(link => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('text-purple-600', 'font-black');
        link.classList.remove('text-slate-600');
      } else {
        link.classList.remove('text-purple-600', 'font-black');
        link.classList.add('text-slate-600');
      }
    });
  }

  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  updateActiveLink();
  window.addEventListener('resize', updateActiveLink);
}
