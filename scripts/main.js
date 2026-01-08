// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-bar a');

function updateActiveNav() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all content sections
document.querySelectorAll('.content-section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Add copy to clipboard functionality for email
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const email = this.href.replace('mailto:', '');
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      // Show tooltip
      const tooltip = document.createElement('span');
      tooltip.textContent = '已复制!';
      tooltip.style.cssText = `
        position: absolute;
        background: var(--success);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        pointer-events: none;
        animation: fadeInUp 0.3s ease;
      `;
      
      this.style.position = 'relative';
      this.appendChild(tooltip);
      
      setTimeout(() => {
        tooltip.remove();
      }, 2000);
    });
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Add print styles functionality
function setupPrintStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      .nav-bar,
      footer,
      .theme-toggle {
        display: none !important;
      }
      
      .content-section {
        page-break-inside: avoid;
        box-shadow: none !important;
        border: 1px solid #ddd !important;
      }
      
      a {
        color: #000 !important;
        text-decoration: underline !important;
      }
      
      body {
        background: white !important;
        color: black !important;
      }
    }
  `;
  document.head.appendChild(style);
}

setupPrintStyles();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  // Press 'H' to go to top
  if (e.key === 'h' || e.key === 'H') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Press '?' to show keyboard shortcuts (future enhancement)
  if (e.key === '?') {
    console.log('Keyboard shortcuts: H - Go to top');
  }
});

// Performance: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Analytics placeholder (add your analytics code here)
function trackEvent(eventName, eventData) {
  // Example: Google Analytics
  // gtag('event', eventName, eventData);
  console.log('Event tracked:', eventName, eventData);
}

// Track navigation clicks
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('navigation_click', {
      section: link.getAttribute('href')
    });
  });
});

// Track external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('external_link_click', {
      url: link.href
    });
  });
});

console.log('🎉 Academic Homepage loaded successfully!');


