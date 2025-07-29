//start
//end

// Main application logic
class ServiceApp {
  constructor() {
    this.currentLanguage = 'en';
    this.currentCategory = 'all';
    this.currentSubcategory = 'all';
    this.searchTerm = '';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeUI();
    this.setupLanguageToggle();
    this.setupTheme();
    this.setupTextAnimation();
  }

  setupEventListeners() {
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle?.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
      this.searchTerm = e.target.value.toLowerCase();
      this.filterAndRenderServices();
    });

    // Contact form
    const contactForm = document.getElementById('dataForm');
    contactForm?.addEventListener('submit', this.handleContactSubmit);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  initializeUI() {
    this.createCategoryTabs();
    this.renderAllServices();
  }

  createCategoryTabs() {
    const tabsContainer = document.getElementById('categoryTabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';

 // Create "All Services" tab
const allTab = document.createElement('button');
allTab.className = 'category-tab active';
allTab.dataset.category = 'all';
allTab.innerHTML = `
  <span class="category-icon">
    <img src="svg/icons/all.png" alt="All Services Icon">
  </span>
  <span class="category-name">All Services</span>
`;
tabsContainer.appendChild(allTab);

    // Create category tabs
    serviceCategories.forEach(category => {
      const tab = createCategoryTab(category);
      tabsContainer.appendChild(tab);
    });

    // Add event listeners to category tabs
    tabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.category-tab');
      if (!tab) return;

      // Update active tab
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      this.currentCategory = tab.dataset.category;
      this.currentSubcategory = 'all';
      
      this.createSubcategoryTabs();
      this.filterAndRenderServices();
    });
  }

  createSubcategoryTabs() {
    const subcategoryContainer = document.getElementById('subcategoryTabs');
    if (!subcategoryContainer) return;

    subcategoryContainer.innerHTML = '';

    if (this.currentCategory === 'all') {
      subcategoryContainer.style.display = 'none';
      return;
    }

    const category = serviceCategories.find(cat => cat.id === this.currentCategory);
    if (!category || !category.subcategories) {
      subcategoryContainer.style.display = 'none';
      return;
    }

    subcategoryContainer.style.display = 'flex';

    // Create "All" subcategory tab
    const allSubTab = document.createElement('button');
    allSubTab.className = 'subcategory-tab active';
    allSubTab.dataset.subcategory = 'all';
    allSubTab.innerHTML = `
  <span class="subcategory-icon">
    <img src="https://cdn-icons-png.freepik.com/256/6706/6706473.png?uid=R204865109&ga=GA1.1.59614169.1748877786&semt=ais_hybrid" alt="All Services Icon">
  </span>
      <span class="subcategory-name">All ${category.title}</span>
    `;
    subcategoryContainer.appendChild(allSubTab);

    // Create subcategory tabs
    category.subcategories.forEach(subcategory => {
      const tab = createSubcategoryTab(subcategory, category.id);
      subcategoryContainer.appendChild(tab);
    });

    // Add event listeners to subcategory tabs
    subcategoryContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.subcategory-tab');
      if (!tab) return;

      // Update active tab
      document.querySelectorAll('.subcategory-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      this.currentSubcategory = tab.dataset.subcategory;
      this.filterAndRenderServices();
    });
  }

  filterAndRenderServices() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;

    container.innerHTML = '';

    let filteredServices = [];

    // Get all services
    serviceCategories.forEach(category => {
      category.services.forEach(service => {
        filteredServices.push(service);
      });
    });

    // Apply category filter
    if (this.currentCategory !== 'all') {
      filteredServices = filteredServices.filter(service => 
        service.category === this.currentCategory
      );
    }

    // Apply subcategory filter
    if (this.currentSubcategory !== 'all') {
      filteredServices = filteredServices.filter(service => 
        service.subcategory === this.currentSubcategory
      );
    }

    // Apply search filter
    if (this.searchTerm) {
      filteredServices = filteredServices.filter(service => {
        const searchableText = [
          service.title,
          service.shortDescription,
          service.longDescription,
          ...(service.keywords || [])
        ].join(' ').toLowerCase();
        
        return searchableText.includes(this.searchTerm);
      });
    }

    // Render services
    if (filteredServices.length === 0) {
      const noResults = createNoResultsMessage(this.searchTerm);
      container.appendChild(noResults);
    } else {
      // Group by category if showing all services
      if (this.currentCategory === 'all' && !this.searchTerm) {
        this.renderServicesByCategory(container, filteredServices);
      } else {
        filteredServices.forEach(service => {
          const card = createServiceCard(service);
          container.appendChild(card);
        });
      }
    }
  }

  renderServicesByCategory(container, services) {
    serviceCategories.forEach(category => {
      const categoryServices = services.filter(service => service.category === category.id);
      
      if (categoryServices.length > 0) {
        // Add category header
        const header = createCategorySectionHeader(category);
        container.appendChild(header);

        // Add services
        categoryServices.forEach(service => {
          const card = createServiceCard(service);
          container.appendChild(card);
        });
      }
    });
  }

  renderAllServices() {
    this.filterAndRenderServices();
  }

  setupLanguageToggle() {
    const languageSelect = document.getElementById('languageSelect');
    if (!languageSelect) return;

    languageSelect.addEventListener('change', (e) => {
      this.currentLanguage = e.target.value;
      this.updateLanguage();
    });
  }

  updateLanguage() {
    const texts = translations[this.currentLanguage];
    if (!texts) return;

    // Update static text elements
    Object.keys(texts).forEach(key => {
      const elements = document.querySelectorAll(`[data-translate="${key}"]`);
      elements.forEach(element => {
        element.textContent = texts[key];
      });
    });

    // Update placeholder text
    const searchInput = document.getElementById('searchInput');
    if (searchInput && texts['Search services...']) {
      searchInput.placeholder = texts['Search services...'];
    }
  }

  setupTheme() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  setupTextAnimation() {
    const texts = [
      "Service.x में आपका स्वागत है",
      "Service.x માં આપનું સ્વાગત છે", 
      "Welcome to Service.x"
    ];
    
    let index = 0;
    const textElement = document.getElementById("text");
    
    if (!textElement) return;

    function changeText() {
      textElement.style.opacity = "0";
      setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
        textElement.style.opacity = "1";
      }, 1000);
    }

    setInterval(changeText, 3000);
  }

  async handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input[placeholder="Name"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const message = form.querySelector('textarea[placeholder="Message"]').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx7y66dxOoBgWKQcFQQMuxE10km5nuEHaNX2f7QB-DofEPRNeGdxIjdBgeSGMcs4wDL0g/exec', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();
      
      if (result.includes("success")) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  }
}

// Global functions for FAB menu
function toggleFabMenu() {
  const menu = document.querySelector('.fab-menu');
  menu?.classList.toggle('active');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function openWhatsApp() {
  const phoneNumber = "919157437847";
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ServiceApp();
});

// Handle navbar shrinking on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar?.classList.add('shrink');
  } else {
    navbar?.classList.remove('shrink');
  }
});

/* Sliding window  */

   document.addEventListener('DOMContentLoaded', function () {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.bg-image');
        const dots = document.querySelectorAll('.nav-dot');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        if (totalSlides > 0) {
            setInterval(nextSlide, 4000);
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('CTA button clicked');
            });
        }
    });
    