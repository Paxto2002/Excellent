document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    
    // Check if elements exist
    if (!mobileMenuButton || !mobileMenu || !closeMenu) {
      console.error('Mobile menu elements not found');
      return;
    }
    
    // Open menu
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
    
    // Close menu
    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
    
    // Close when clicking outside
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMenu.click();
      }
    });
    
    console.log('Mobile menu initialized');
  });
  