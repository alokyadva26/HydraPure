document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle (basic implementation)
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      // For a real app, you'd toggle a class to show/hide the menu
      // Since it's a simple landing page without full mobile menu styles yet,
      // we'll just alert or do a simple toggle if styles were added.
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'white';
      navLinks.style.padding = '20px';
      navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Adjust for fixed navbar height
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Hide mobile menu if open
        if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
          navLinks.style.display = 'none';
        }
      }
    });
  });
});
