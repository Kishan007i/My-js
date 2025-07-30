// Component creation functions

function createCategoryTab(category, isActive = false) {
  const tab = document.createElement('button');
  tab.className = `category-tab ${isActive ? 'active' : ''}`;
  tab.dataset.category = category.id;
  tab.innerHTML = `
    <span class="category-icon">
      <img src="${category.icon}" alt="${category.title} Icon">
    </span>
    <span class="category-name">${category.title}</span>
  `;
  return tab;
}
/* old  */
function createSubcategoryTab(subcategory, categoryId, isActive = false) {
  const tab = document.createElement('button');
  tab.className = `subcategory-tab ${isActive ? 'active' : ''}`;
  tab.dataset.subcategory = subcategory.id;
  tab.dataset.category = categoryId;
  tab.innerHTML = `
     <span class="subcategory-icon">
      <img src="${subcategory.icon}" alt="${subcategory.title} Icon">
    </span>
    <span class="subcategory-name">${subcategory.name}</span>
  `;
  return tab;
}

// Optional: Add intersection observer for scroll animations
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  });
  
  document.querySelectorAll('.subcategory-tab').forEach(tab => {
    tab.style.opacity = '0';
    tab.style.transform = 'translateY(20px)';
    observer.observe(tab);
  });
}
/* end */

/* voice */
// Prevent multiple initialization
if (!window.voicePlayerInitialized) {
    window.voicePlayerInitialized = true;

    class VoicePlayer {
        constructor() {
            this.currentAudio = null;
            this.currentButton = null;
            this.statusElement = document.getElementById('voiceStatus');
            this.clickHandler = null; // Store reference to avoid duplicates
            this.visibilityHandler = null;
            this.init();
        }

        init() {
            // Remove existing listeners first
            this.cleanup();
            
            // Create bound handler to avoid duplicates
            this.clickHandler = (e) => {
                if (e.target.closest('.voice-button')) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleVoiceClick(e.target.closest('.voice-button'));
                }
            };

            // Add event delegation listener
            document.addEventListener('click', this.clickHandler);
            
            // Visibility change handler
            this.visibilityHandler = () => {
                if (document.hidden && this.currentAudio && !this.currentAudio.paused) {
                    this.currentAudio.pause();
                }
            };
            document.addEventListener('visibilitychange', this.visibilityHandler);
        }

        // Clean up existing listeners
        cleanup() {
            if (this.clickHandler) {
                document.removeEventListener('click', this.clickHandler);
            }
            if (this.visibilityHandler) {
                document.removeEventListener('visibilitychange', this.visibilityHandler);
            }
        }

        // Method to refresh listeners (call this after DOM updates)
        refreshListeners() {
            // Event delegation handles new buttons automatically
            // No need to attach individual listeners
        }

        handleVoiceClick(button) {
            const voicePath = button.getAttribute('data-voice');
            
            if (!voicePath) {
                this.showStatus('Voice file path નથી મળી');
                return;
            }

            // If same button clicked while playing, stop it
            if (this.currentButton === button && this.currentAudio && !this.currentAudio.paused) {
                this.stopAudio();
                return;
            }

            // Stop current audio if playing
            if (this.currentAudio && !this.currentAudio.paused) {
                this.stopAudio();
            }

            this.playAudio(voicePath, button);
        }

        playAudio(voicePath, button) {
            this.currentButton = button;
            this.currentAudio = new Audio(voicePath);

            // Preload the audio
            this.currentAudio.preload = 'auto';

            // Add event listeners
            this.currentAudio.addEventListener('loadstart', () => {
                this.showStatus('Audio લોડ થઈ રહી છે...');
            });

            this.currentAudio.addEventListener('canplay', () => {
                this.showStatus('Audio તૈયાર છે');
            });

            this.currentAudio.addEventListener('play', () => {
                button.classList.add('playing');
                this.showStatus('Audio ચાલી રહી છે');
            });

            this.currentAudio.addEventListener('pause', (e) => {
                button.classList.remove('playing');
                // Store reference to audio before it might be set to null
                const audio = e.target;
                if (audio && typeof audio.currentTime === 'number' && typeof audio.duration === 'number' && audio.currentTime < audio.duration) {
                    this.showStatus('Audio પૌઝ થઈ');
                }
            });

            this.currentAudio.addEventListener('ended', () => {
                button.classList.remove('playing');
                this.showStatus('Audio પૂર્ણ થઈ');
                this.cleanupAudio();
            });

            this.currentAudio.addEventListener('error', (e) => {
                button.classList.remove('playing');
                this.showStatus(`Audio ફાઈલ લોડ નથી થઈ: ${voicePath}`);
                console.error('Audio Error Details:');
                console.error('Path:', voicePath);
                console.error('Error:', e);
                if (this.currentAudio) {
                    console.error('ReadyState:', this.currentAudio.readyState);
                    console.error('NetworkState:', this.currentAudio.networkState);
                    if (this.currentAudio.error) {
                        console.error('Error Code:', this.currentAudio.error.code);
                        console.error('Error Message:', this.currentAudio.error.message);
                    }
                }
                this.cleanupAudio();
            });

            // Better error handling for play() method
            const playPromise = this.currentAudio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Audio started successfully
                        console.log('Audio playing successfully:', voicePath);
                    })
                    .catch(error => {
                        console.error('Play failed:');
                        console.error('Error name:', error.name);
                        console.error('Error message:', error.message);
                        console.error('Path:', voicePath);
                        
                        button.classList.remove('playing');
                        
                        // Handle different types of errors
                        if (error.name === 'NotAllowedError') {
                            this.showStatus('Audio play કરવાની permission નથી');
                        } else if (error.name === 'NotSupportedError') {
                            this.showStatus('Audio format support નથી');
                        } else if (error.name === 'AbortError') {
                            this.showStatus('Audio લોડ થવામાં problem');
                        } else {
                            this.showStatus('Audio play નથી થઈ - ફાઈલ check કરો');
                        }
                        
                        this.cleanupAudio();
                    });
            } else {
                // Fallback for older browsers
                try {
                    this.currentAudio.play();
                } catch (error) {
                    console.error('Fallback play failed:', error);
                    this.showStatus('Browser audio support નથી');
                    this.cleanupAudio();
                }
            }
        }

        cleanupAudio() {
            this.currentButton = null;
            this.currentAudio = null;
        }

        stopAudio() {
            if (this.currentAudio) {
                // Store reference before setting to null
                const audio = this.currentAudio;
                const button = this.currentButton;
                
                // Set to null first to prevent event handlers from accessing null reference
                this.currentAudio = null;
                this.currentButton = null;
                
                // Now safely manipulate the audio
                try {
                    audio.pause();
                    if (typeof audio.currentTime === 'number') {
                        audio.currentTime = 0;
                    }
                } catch (e) {
                    console.error('Error stopping audio:', e);
                }
                
                if (button) {
                    button.classList.remove('playing');
                }
            }
            this.showStatus('Audio બંધ કરી');
        }

        showStatus(message) {
            if (this.statusElement) {
                this.statusElement.textContent = message;
                this.statusElement.classList.add('show');
                
                // Hide after 3 seconds
                setTimeout(() => {
                    if (this.statusElement) {
                        this.statusElement.classList.remove('show');
                    }
                }, 3000);
            }
        }

        // Method to completely destroy the instance
        destroy() {
            this.stopAudio();
            this.cleanup();
            this.statusElement = null;
        }
    }

    // Initialize when page loads
    const initVoicePlayer = () => {
        // Destroy existing instance if any
        if (window.voicePlayer && typeof window.voicePlayer.destroy === 'function') {
            window.voicePlayer.destroy();
        }
        window.voicePlayer = new VoicePlayer();
    };

    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVoicePlayer);
    } else {
        initVoicePlayer();
    }

    // Safe method to call after DOM updates
    window.initializeVoiceButtons = function() {
        if (window.voicePlayer && typeof window.voicePlayer.refreshListeners === 'function') {
            window.voicePlayer.refreshListeners();
        } else {
            initVoicePlayer();
        }
    };

    // Observer to detect DOM changes (with throttling)
    let observerTimeout;
    const observer = new MutationObserver((mutations) => {
        clearTimeout(observerTimeout);
        observerTimeout = setTimeout(() => {
            let hasVoiceButtons = false;
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1 && node.querySelector && node.querySelector('.voice-button')) {
                            hasVoiceButtons = true;
                        }
                    });
                }
            });
            
            if (hasVoiceButtons && window.voicePlayer) {
                window.voicePlayer.refreshListeners();
            }
        }, 100);
    });

    // Start observing DOM changes
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
}
/* end */
function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card fade-in-up';
  card.dataset.category = service.category;
  card.dataset.subcategory = service.subcategory;
  card.dataset.serviceId = service.id;

  // Create carousel
  const carousel = document.createElement('div');
  carousel.className = 'carousel-container';

  // Add images
  service.images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
    slide.innerHTML = `<img src="${image}" alt="${service.title} ${index + 1}" loading="lazy">`;
    carousel.appendChild(slide);
  });

  // Add navigation buttons
  const prevButton = document.createElement('button');
  prevButton.className = 'carousel-button prev';
  prevButton.innerHTML = '‹';
  prevButton.setAttribute('aria-label', 'Previous image');
  
  const nextButton = document.createElement('button');
  nextButton.className = 'carousel-button next';
  nextButton.innerHTML = '›';
  nextButton.setAttribute('aria-label', 'Next image');

  // Add dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'carousel-dots';
  
  service.images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to image ${index + 1}`);
    dot.addEventListener('click', () => showSlide(carousel, index));
    dotsContainer.appendChild(dot);
  });

  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);
  carousel.appendChild(dotsContainer);

  // Create content
const content = document.createElement('div');
content.className = 'card-content';
content.innerHTML = `
  <span class="voice">${service.voiceHtml}</span>
  <h2 class="card-title">${service.titleHtml || service.title}</h2>
  ${service.location ? `
    <div class="location-info">
      <svg class="location-icon" viewBox="0 0 24 24" width="14" height="14">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span class="location-text">${service.location}</span>
    </div>
  ` : ''}
  <p class="short-description">${service.shortDescription}</p>
  <div class="long-description">       
    <div class="long-description-content">
      ${service.longDescription}
      <p class="price">₹${service.price.toLocaleString()}</p>         
    </div>
  </div>
  <div class="button-container">
    <button class="btn btn-secondary view-more-btn">
      <span class="btn-text">View More ▽</span>
    </button>
    <a href="${service.visitLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span class="btn-text">Visit WhatsApp</span>
        </a>
  </div>
`;
  card.appendChild(carousel);
  card.appendChild(content);

  // Add event listeners
  setupCarouselEvents(carousel, service.images.length);
  setupCardEvents(card);

  return card;
}

function setupCarouselEvents(carousel, imageCount) {
  let currentSlide = 0;
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.dot');
  const prevButton = carousel.querySelector('.carousel-button.prev');
  const nextButton = carousel.querySelector('.carousel-button.next');

  prevButton.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlide = (currentSlide - 1 + imageCount) % imageCount;
    showSlide(carousel, currentSlide);
  });

  nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlide = (currentSlide + 1) % imageCount;
    showSlide(carousel, currentSlide);
  });

  // Auto-slide
  let autoSlideInterval = setInterval(() => {
    if (document.contains(carousel)) {
      currentSlide = (currentSlide + 1) % imageCount;
      showSlide(carousel, currentSlide);
    } else {
      clearInterval(autoSlideInterval);
    }
  }, 5000);

  // Pause auto-slide on hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      if (document.contains(carousel)) {
        currentSlide = (currentSlide + 1) % imageCount;
        showSlide(carousel, currentSlide);
      }
    }, 5000);
  });

  // Touch events for mobile
  let startX, endX;
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', () => {
    if (startX > endX + 50) { // Swipe Left
      currentSlide = (currentSlide + 1) % imageCount;
      showSlide(carousel, currentSlide);
    } else if (startX < endX - 50) { // Swipe Right
      currentSlide = (currentSlide - 1 + imageCount) % imageCount;
      showSlide(carousel, currentSlide);
    }
  });
}

function setupCardEvents(card) {
  const viewMoreButton = card.querySelector('.view-more-btn');
  const longDescription = card.querySelector('.long-description');
  const btnText = viewMoreButton.querySelector('.btn-text');
  
  viewMoreButton.addEventListener('click', () => {
    const isExpanded = longDescription.classList.toggle('expanded');
    btnText.textContent = isExpanded ? 'View Less ∆' : 'View More ▽';
    
    // Smooth scroll to card if expanding
    if (isExpanded) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  });
}

function showSlide(carousel, index) {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.dot');
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[index]) slides[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
}

function createNoResultsMessage(searchTerm = '') {
  const noResults = document.createElement('div');
  noResults.className = 'no-results fade-in-up';
  noResults.id = 'no-results-message';
  
  if (searchTerm) {
    noResults.innerHTML = `
      <h3>No services found</h3>
      <p>No services found matching "${searchTerm}". Try searching with different keywords.</p>
    `;
  } else {
 noResults.innerHTML = `
  <h3>Coming Soon!</h3>
  <p>Exciting services are on the way in this category. Stay tuned!</p>
  
  <p>If you offer services in this category, click the button below to register as a partner.</p>
  <br>  
  
 <div class="reg-container2">  
  <a class="reg-btn2" href="Registration/reg-page.html">Registration As Partner</a>  
</div>  
`;
  }
  
  return noResults;
}

function createCategorySectionHeader(category) {
  const header = document.createElement('div');
  header.className = 'category-section-header fade-in-up';
  header.dataset.category = category.id;
  header.innerHTML = `
    <h2>${category.title}</h2>
    <p>${category.description}</p>
  `;
  return header;
}
