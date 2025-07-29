// Modern JavaScript Features for Service.X

// 1. Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Add floating animation to service cards
            if (entry.target.classList.contains('service-card')) {
                entry.target.classList.add('floating-element');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Observe all service cards and sections
    document.querySelectorAll('.service-card, .stat-item, .hero-content').forEach(el => {
        animateOnScroll.observe(el);
    });
});

// 2. Enhanced Search with Real-time Suggestions
class ModernSearch {
    constructor() {
        this.searchInput = document.querySelector('.search-container input');
        this.searchResults = this.createSearchResults();
        this.init();
    }

    createSearchResults() {
        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'search-results';
        resultsDiv.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            margin-top: 8px;
            max-height: 300px;
            overflow-y: auto;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: none;
        `;
        this.searchInput.parentElement.appendChild(resultsDiv);
        return resultsDiv;
    }

    init() {
        if (!this.searchInput) return;

        // Debounced search
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.parentElement.contains(e.target)) {
                this.hideResults();
            }
        });
    }

    performSearch(query) {
        if (query.length < 2) {
            this.hideResults();
            return;
        }

        // Mock search results - replace with your actual search logic
        const mockResults = [
            { title: 'આધાર PVC કાર્ડ', type: 'document', price: '₹299' },
            { title: 'PAN કાર્ડ અરજી', type: 'document', price: '₹199' },
            { title: 'દેવ DJ સેવા', type: 'dj', price: '₹19,999' },
            { title: 'મેકઅપ સેવા', type: 'makeup', price: '₹5,000' },
            { title: 'લગ્ન મંડપ', type: 'event', price: '₹25,000' }
        ];

        const filteredResults = mockResults.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        this.displayResults(filteredResults);
    }

    displayResults(results) {
        if (results.length === 0) {
            this.hideResults();
            return;
        }

        this.searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" style="
                padding: 12px 16px;
                cursor: pointer;
                transition: background 0.2s ease;
                border-bottom: 1px solid rgba(0,0,0,0.1);
            " onmouseover="this.style.background='rgba(99,102,241,0.1)'" 
               onmouseout="this.style.background='transparent'">
                <div style="font-weight: 600; margin-bottom: 4px;">${result.title}</div>
                <div style="font-size: 0.9rem; color: #666;">
                    ${result.type} • ${result.price}
                </div>
            </div>
        `).join('');

        this.searchResults.style.display = 'block';
    }

    hideResults() {
        this.searchResults.style.display = 'none';
    }
}

// Initialize modern search
new ModernSearch();

// 3. Smooth Page Transitions
class PageTransitions {
    constructor() {
        this.init();
    }

    init() {
        // Add loading overlay
        this.createLoadingOverlay();
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    createLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #6366f1, #9333ea);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        `;
        
        overlay.innerHTML = `
            <div style="text-align: center; color: white;">
                <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <h2 style="font-size: 2rem; margin: 0;">Service.X</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.8;">લોડ થઈ રહ્યું છે...</p>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        
        document.body.appendChild(overlay);
        
        // Hide overlay after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.remove();
                }, 500);
            }, 1000);
        });
    }
}

// Initialize page transitions
new PageTransitions();

// 4. Enhanced Voice Button Functionality
class VoiceManager {
    constructor() {
        this.currentAudio = null;
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.voice-button')) {
                e.preventDefault();
                const button = e.target.closest('.voice-button');
                const audioSrc = button.dataset.voice;
                this.playAudio(audioSrc, button);
            }
        });
    }

    playAudio(src, button) {
        // Stop current audio if playing
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            document.querySelectorAll('.voice-button').forEach(btn => {
                btn.classList.remove('playing');
            });
        }

        // Create and play new audio
        this.currentAudio = new Audio(src);
        button.classList.add('playing');

        this.currentAudio.play().catch(err => {
            console.log('Audio play failed:', err);
            button.classList.remove('playing');
        });

        this.currentAudio.addEventListener('ended', () => {
            button.classList.remove('playing');
            this.currentAudio = null;
        });

        this.currentAudio.addEventListener('error', () => {
            button.classList.remove('playing');
            this.currentAudio = null;
        });
    }
}

// Initialize voice manager
new VoiceManager();

// 5. Theme System Enhancement
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        
        // Theme toggle functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-btn')) {
                this.toggleTheme();
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}

// Initialize theme manager
new ThemeManager();

// 6. Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            // This would require importing web-vitals library
            // For now, just basic performance monitoring
        }

        // Basic performance logging
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Initialize performance monitor
new PerformanceMonitor();

// 7. Mobile Touch Gestures
class TouchGestures {
    constructor() {
        this.init();
    }

    init() {
        let startY = 0;
        let startX = 0;

        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
        });

        document.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endX = e.changedTouches[0].clientX;
            const diffY = startY - endY;
            const diffX = startX - endX;

            // Pull to refresh (swipe down at top)
            if (diffY < -100 && window.scrollY === 0) {
                this.refreshPage();
            }

            // Swipe gestures for service cards
            if (Math.abs(diffX) > 50 && Math.abs(diffY) < 100) {
                const target = e.target.closest('.service-card');
                if (target) {
                    if (diffX > 0) {
                        // Swipe left - maybe show more options
                        target.style.transform = 'translateX(-10px)';
                    } else {
                        // Swipe right - maybe bookmark
                        target.style.transform = 'translateX(10px)';
                    }
                    
                    setTimeout(() => {
                        target.style.transform = '';
                    }, 200);
                }
            }
        });
    }

    refreshPage() {
        // Add refresh animation
        const refreshIndicator = document.createElement('div');
        refreshIndicator.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-primary);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            z-index: 1000;
        `;
        refreshIndicator.textContent = 'Refreshing...';
        document.body.appendChild(refreshIndicator);

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

// Initialize touch gestures on mobile
if ('ontouchstart' in window) {
    new TouchGestures();
}