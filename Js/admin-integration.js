// Admin Integration Script
// This file integrates the admin panel data with the main website

// Function to load data from admin panel
function loadAdminData() {
    const adminCategories = localStorage.getItem('serviceCategories');
    const adminServices = localStorage.getItem('allServices');
    
    if (adminCategories) {
        try {
            const categories = JSON.parse(adminCategories);
            // Update the main website's serviceCategories
            window.serviceCategories = categories;
            console.log('Admin categories loaded:', categories.length);
        } catch (error) {
            console.error('Error loading admin categories:', error);
        }
    }
    
    if (adminServices) {
        try {
            const services = JSON.parse(adminServices);
            // Convert admin services to main website format
            updateMainWebsiteServices(services);
            console.log('Admin services loaded:', services.length);
        } catch (error) {
            console.error('Error loading admin services:', error);
        }
    }
}

// Function to convert admin services to main website format
function updateMainWebsiteServices(adminServices) {
    if (!window.serviceCategories) return;
    
    // Clear existing services from categories
    window.serviceCategories.forEach(category => {
        category.services = [];
    });
    
    // Add services from admin panel
    adminServices.forEach(service => {
        const category = window.serviceCategories.find(cat => cat.id === service.category);
        if (category) {
            // Convert admin service format to main website format
            const mainService = {
                id: service.id,
                title: service.title,
                titleHtml: service.titleHtml || service.title,
                shortDescription: service.shortDescription,
                longDescription: service.longDescription,
                price: service.price,
                images: service.images || [
                    'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
                ],
                visitLink: service.visitLink,
                category: service.category,
                subcategory: service.subcategory,
                keywords: service.keywords || []
            };
            
            category.services.push(mainService);
        }
    });
    
    // Refresh the main website display if the app is initialized
    if (window.ServiceApp && typeof window.ServiceApp.prototype.filterAndRenderServices === 'function') {
        // Find the ServiceApp instance and refresh
        const app = document.querySelector('.services');
        if (app) {
            // Trigger a refresh of the services display
            const event = new CustomEvent('adminDataUpdated');
            document.dispatchEvent(event);
        }
    }
}

// Function to sync data between admin and main website
function syncAdminData() {
    // Listen for storage changes (when admin panel updates data)
    window.addEventListener('storage', function(e) {
        if (e.key === 'serviceCategories' || e.key === 'allServices') {
            console.log('Admin data updated, refreshing main website...');
            loadAdminData();
            
            // Trigger refresh of main website
            if (typeof initializeCategorizedServices === 'function') {
                initializeCategorizedServices();
            }
        }
    });
    
    // Listen for custom events from admin panel
    document.addEventListener('adminDataUpdated', function() {
        console.log('Admin data updated via event');
        loadAdminData();
    });
}

// Initialize admin integration
document.addEventListener('DOMContentLoaded', function() {
    // Load admin data on page load
    loadAdminData();
    
    // Setup sync
    syncAdminData();
    
    // Add admin panel link to main website (for development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        addAdminLink();
    }
});

// Function to add admin panel link (for development)
function addAdminLink() {
    const adminLink = document.createElement('a');
    adminLink.href = 'admin/index.html';
    adminLink.textContent = '⚙️ Admin Panel';
    adminLink.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: linear-gradient(135deg, #6366f1 0%, #9333ea 50%, #db2777 100%);
        color: white;
        padding: 10px 15px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    adminLink.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });
    
    adminLink.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
    
    document.body.appendChild(adminLink);
}

// Export functions for use in other scripts
window.adminIntegration = {
    loadAdminData,
    updateMainWebsiteServices,
    syncAdminData
};