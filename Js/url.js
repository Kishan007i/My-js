    
        // Function to show toast messages
        function showToast(toastId, message) {
            const toast = document.getElementById(toastId);
            if (message) {
                toast.textContent = message;
            }
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // 1st Button - Open Service-X website
        function openServiceX() {
            showToast('serviceToast');
            window.open('https://service-x-re-page.netlify.app', '_blank');
        }

        // 2nd Button - Download APK
        function downloadAPK() {
            showToast('downloadToast');
            // Create a download link for the APK file
            const link = document.createElement('a');
            link.href = 'app/service-x.in.apk';
            link.download = 'service-x.in.apk';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // 3rd Button - Open Registration Page
        function openRegistration() {
            window.location.href = 'Registration/reg-page.html';
        }

        // 4th Button - Copy encrypted registration link
        function copyRegistrationLink() {
            // Create encrypted/shortened link - using base64 encoding for simplicity
            const originalLink = window.location.origin + '/Registration/reg-page.html';
            const encryptedPath = btoa('Registration/reg-page.html').replace(/[+=]/g, '').substring(0, 12);
            const shortLink = window.location.origin + '/r/' + encryptedPath;
            
            // Copy to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(shortLink).then(() => {
                    showToast('copyToast', 'Short link copied to clipboard!');
                }).catch(() => {
                    fallbackCopyTextToClipboard(shortLink);
                });
            } else {
                fallbackCopyTextToClipboard(shortLink);
            }
        }

        // Fallback copy function for older browsers
        function fallbackCopyTextToClipboard(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showToast('copyToast', 'Short link copied to clipboard!');
            } catch (err) {
                showToast('copyToast', 'Failed to copy link');
            }
            document.body.removeChild(textArea);
        }

        // Handle encrypted link routing (add this to your main page or create a router)
        function handleEncryptedRoute() {
            const path = window.location.pathname;
            if (path.startsWith('/r/')) {
                const encryptedCode = path.substring(3);
                // In a real implementation, you'd decode this properly
                // For demo purposes, any /r/ link redirects to registration
                window.location.href = '/Registration/reg-page.html';
            }
        }

        // Call on page load if needed
        window.addEventListener('load', handleEncryptedRoute);
    

