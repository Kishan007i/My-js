// Simple encryption function using Base64 encoding with custom transformation
function encryptLink(link) {
    // Add some random characters and encode
    const timestamp = Date.now().toString();
    const combined = link + '|' + timestamp;
    
    // Base64 encode and add some transformation
    let encrypted = btoa(combined);
    
    // Add some custom transformation to make it look more encrypted
    encrypted = encrypted.split('').reverse().join('');
    encrypted = 'ENC_' + encrypted + '_END';
    
    return encrypted;
}

// Decrypt function (for reference, but not used in this implementation)
function decryptLink(encryptedLink) {
    try {
        // Remove prefix and suffix
        let encrypted = encryptedLink.replace('ENC_', '').replace('_END', '');
        
        // Reverse the string
        encrypted = encrypted.split('').reverse().join('');
        
        // Base64 decode
        const decoded = atob(encrypted);
        const [originalLink] = decoded.split('|');
        
        return originalLink;
    } catch (error) {
        console.error('Decryption failed:', error);
        return null;
    }
}

// Main function to copy encrypted registration link
async function copyRegistrationLink() {
    const originalLink = 'https://service-x.in/Registration/reg-page.html';
    
    try {
        // Encrypt the link
        const encryptedLink = encryptLink(originalLink);
        
        // Copy to clipboard
        await navigator.clipboard.writeText(encryptedLink);
        
        // Show success message
        showSuccessMessage();
        
        console.log('Encrypted link copied:', encryptedLink);
        
    } catch (error) {
        console.error('Failed to copy link:', error);
        
        // Fallback for older browsers
        fallbackCopyToClipboard(encryptLink(originalLink));
    }
}

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showSuccessMessage();
        console.log('Encrypted link copied (fallback):', text);
    } catch (err) {
        console.error('Fallback copy failed:', err);
        alert('Failed to copy link. Please try again.');
    }
    
    document.body.removeChild(textArea);
}

// Show success message
function showSuccessMessage() {
    // Remove any existing success message
    const existingMessage = document.querySelector('.copy-success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create and show success message
    const message = document.createElement('div');
    message.className = 'copy-success-message';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    message.innerHTML = '✓ Encrypted registration link copied to clipboard!';
    
    document.body.appendChild(message);
    
    // Animate in
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 3000);
}

// Optional: Add some CSS for better button styling
const buttonStyles = `
<style>
.reg-containerr {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.reg-btn {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.reg-btn:hover {
    background: #0056b3;
}

.copy-btn {
    padding: 8px;
    background: #28a745;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.copy-btn:hover {
    background: #1e7e34;
}

.copy-btn svg {
    width: 16px;
    height: 16px;
}
</style>
`;

// Add styles to head if they don't exist
if (!document.querySelector('#copy-link-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'copy-link-styles';
    styleElement.textContent = buttonStyles.replace(/<\/?style>/g, '');
    document.head.appendChild(styleElement);
}
