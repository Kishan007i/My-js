function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = service.id; // ✅ add this line

  const carousel = createImageCarousel(service.images);

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

  setupCarouselEvents(carousel, service.images.length);
  setupCardEvents(card);

  return card;
}
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
