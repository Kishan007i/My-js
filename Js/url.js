
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
