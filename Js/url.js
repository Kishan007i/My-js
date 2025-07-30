// તમારી વેબસાઇટના HEAD section માં આ JavaScript add કરો


// Function to find service by ID
function findServiceById(serviceId) {
  for (let category of serviceCategories) {
    if (category.services) {
      const service = category.services.find(s => s.id === serviceId);
      if (service) return service;
    }
  }
  return null;
}

// Function to show specific service card
function showServiceCard(serviceId) {
  const service = findServiceById(serviceId);
  
  if (!service) {
    console.log('Service not found:', serviceId);
    return false;
  }

  // Hide all other content
  const mainContent = document.querySelector('.services-grid, .service-categories, main');
  if (mainContent) {
    mainContent.style.display = 'none';
  }

  // Create service display container
  let serviceContainer = document.getElementById('direct-service-display');
  if (!serviceContainer) {
    serviceContainer = document.createElement('div');
    serviceContainer.id = 'direct-service-display';
    serviceContainer.style.cssText = `
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    `;
    document.body.appendChild(serviceContainer);
  }

  // Display the service
  serviceContainer.innerHTML = `
    <div class="direct-service-card">
      <div style="text-align: center; margin-bottom: 20px;">
        <button onclick="goBackToServices()" style="
          background: #6c757d;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          margin-bottom: 20px;
        ">← પાછા જાઓ</button>
      </div>
      
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #333; margin-bottom: 10px;">${service.titleHtml || service.title}</h1>
        <p style="font-size: 1.2rem; color: #666; margin-bottom: 15px;">${service.shortDescription}</p>
        <div style="font-size: 1.8rem; color: #e74c3c; font-weight: bold;">કિંમત: ₹${service.price}</div>
      </div>
      
      ${service.images ? `
        <div style="display: flex; gap: 15px; margin-bottom: 25px; overflow-x: auto; justify-content: center;">
          ${service.images.map(img => `
            <img src="${img}" alt="${service.title}" style="
              width: 200px;
              height: 150px;
              object-fit: cover;
              border-radius: 12px;
              flex-shrink: 0;
              border: 2px solid #eee;
            " onerror="this.style.display='none'">
          `).join('')}
        </div>
      ` : ''}
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
        ${service.longDescription || service.shortDescription}
      </div>
      
      <div style="text-align: center;">
        <a href="${service.visitLink}" target="_blank" style="
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: bold;
          transition: transform 0.3s;
        " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
          🚀 હવેજ બુક કરો WhatsApp પર
        </a>
      </div>
    </div>
  `;

  return true;
}

// Function to go back to main services
function goBackToServices() {
  const serviceContainer = document.getElementById('direct-service-display');
  if (serviceContainer) {
    serviceContainer.remove();
  }
  
  const mainContent = document.querySelector('.services-grid, .service-categories, main');
  if (mainContent) {
    mainContent.style.display = 'block';
  }

  // Update URL without service parameter
  const url = new URL(window.location);
  url.searchParams.delete('service');
  window.history.pushState({}, '', url);
}

// Main initialization function
function initializeServiceNavigation() {
  // Check URL for service parameter
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('service');
  
  if (serviceId) {
    console.log('Loading service:', serviceId);
    
    // Wait for page to load completely
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => showServiceCard(serviceId), 500);
      });
    } else {
      setTimeout(() => showServiceCard(serviceId), 500);
    }
  }
}

// Handle browser back/forward
window.addEventListener('popstate', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('service');
  
  if (serviceId) {
    showServiceCard(serviceId);
  } else {
    goBackToServices();
  }
});

// Initialize when script loads
initializeServiceNavigation();

// Export functions for global use
window.showServiceCard = showServiceCard;
window.goBackToServices = goBackToServices;
window.findServiceById = findServiceById;
//end
// Custom URL shortener with base64 encoding
        function encodeUrl(url) {
            // Remove localhost and common parts
            const cleanUrl = url.replace(/http:\/\/localhost:\d+\//, '').replace(/%20/g, ' ');
            
            // Simple base64 encoding with URL-safe characters
            const encoded = btoa(cleanUrl)
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');
            
            // Create short hash (first 8 characters + last 4)
            const shortHash = encoded.substring(0, 8) + encoded.slice(-4);
            
            return `${window.location.origin}/r/${shortHash}`;
        }

        // Decode function (for reference - would be needed on server)
        function decodeUrl(shortHash) {
            // This would typically be handled by server-side routing
            // For demo purposes, we'll store in localStorage
            const storedUrls = JSON.parse(localStorage.getItem('shortUrls') || '{}');
            return storedUrls[shortHash] || null;
        }

        function copyLink() {
            const copyBtn = document.querySelector('.copy-btn');
            const toast = document.getElementById('toast');
            
            // Get the original registration URL
            const originalUrl = window.location.href.replace(/\/[^\/]*$/, '/Registration/reg-page.html');
            
            // Create shortened URL
            const shortUrl = encodeUrl(originalUrl);
            
            // Store mapping in localStorage (in real app, this would be server-side)
            const shortHash = shortUrl.split('/r/')[1];
            const storedUrls = JSON.parse(localStorage.getItem('shortUrls') || '{}');
            storedUrls[shortHash] = originalUrl;
            localStorage.setItem('shortUrls', JSON.stringify(storedUrls));
            
            // Copy shortened URL to clipboard
            navigator.clipboard.writeText(shortUrl).then(function() {
                // Show success state
                copyBtn.classList.add('copied');
                toast.classList.add('show');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    toast.classList.remove('show');
                }, 2000);
            }).catch(function(err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = shortUrl;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show success state
                copyBtn.classList.add('copied');
                toast.classList.add('show');
                
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    toast.classList.remove('show');
                }, 2000);
            });
        }

        // URL redirect handler (add this to your main page)
        function handleShortUrl() {
            const path = window.location.pathname;
            if (path.startsWith('/r/')) {
                const shortHash = path.replace('/r/', '');
                const originalUrl = decodeUrl(shortHash);
                if (originalUrl) {
                    window.location.href = originalUrl;
                }
            }
        }

        // Check for short URL on page load
        document.addEventListener('DOMContentLoaded', handleShortUrl);
