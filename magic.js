// Mobile Menu Toggle - Fixed Version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu functionality
    initMobileMenu();
    initScrollEffects();
    initForms();
    initAnimations();
    initUtilities();
});

function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    // Check if mobile menu elements exist
    if (!mobileMenu || !navLinks) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Toggle menu function
    function toggleMenu() {
        const isActive = navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        mobileMenu.innerHTML = isActive ? 
            '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
        
        // Add/remove event listener for outside clicks
        if (!isActive) {
            document.addEventListener('click', handleOutsideClick);
            document.addEventListener('keydown', handleEscapeKey);
        } else {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }

    // Handle clicks outside the menu
    function handleOutsideClick(e) {
        if (!e.target.closest('.navbar') && !e.target.closest('.mobile-menu')) {
            closeMenu();
        }
    }

    // Handle escape key
    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    }

    // Close menu function
    function closeMenu() {
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Remove event listeners
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('keydown', handleEscapeKey);
    }

    // Mobile menu click event
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Prevent navbar clicks from closing menu
    if (navbar) {
        navbar.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

function initScrollEffects() {
    const header = document.getElementById('header');
    if (!header) return;

    // Header scroll effect
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            header.classList.toggle('scrolled', window.scrollY > 100);
        }, 10);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

function initForms() {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this, 'Hvala vam na vašoj poruci! Kontaktiraćemo vas u najkraćem roku.');
        });
    }

    // Modeling Form
    const modelingForm = document.getElementById('modelingForm');
    if (modelingForm) {
        modelingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this, 'Hvala vam na upitu! Poslaćemo vam ponudu u najkraćem roku.');
        });
    }

    // Form input enhancements
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Auto-resize textarea
        if (input.tagName === 'TEXTAREA') {
            input.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        }
    });
}

function handleFormSubmit(form, successMessage) {
    const formData = new FormData(form);
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    // Simple validation
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (!isValid) {
        showNotification('Molimo vas popunite sva obavezna polja.', 'error');
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const isModelingForm = form.id === 'modelingForm';
    
    submitBtn.innerHTML = isModelingForm ? 
        '<i class="fas fa-spinner fa-spin"></i> Slanje za ponudu...' : 
        '<i class="fas fa-spinner fa-spin"></i> Slanje...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showNotification(successMessage, 'success');
        
        // Reset textarea height
        const textarea = form.querySelector('textarea');
        if (textarea) {
            textarea.style.height = 'auto';
        }
    }, 2000);
}

function initAnimations() {
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .service-card, .portfolio-item').forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card,
        .service-card,
        .portfolio-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .feature-card.animate-in,
        .service-card.animate-in,
        .portfolio-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Staggered animation delays */
        .features-grid .feature-card:nth-child(1) { transition-delay: 0.1s; }
        .features-grid .feature-card:nth-child(2) { transition-delay: 0.2s; }
        .features-grid .feature-card:nth-child(3) { transition-delay: 0.3s; }
        
        .services-grid .service-card:nth-child(1) { transition-delay: 0.1s; }
        .services-grid .service-card:nth-child(2) { transition-delay: 0.2s; }
        .services-grid .service-card:nth-child(3) { transition-delay: 0.3s; }
        
        .portfolio-grid .portfolio-item:nth-child(1) { transition-delay: 0.1s; }
        .portfolio-grid .portfolio-item:nth-child(2) { transition-delay: 0.2s; }
        .portfolio-grid .portfolio-item:nth-child(3) { transition-delay: 0.3s; }
        
        /* Form error state */
        .form-control.error {
            border-color: #ef4444 !important;
        }
        
        /* Body loaded state */
        body.loaded * {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Add loaded class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

function initUtilities() {
    // Notification System
    window.showNotification = showNotification;

    // Current year for copyright
    const yearElement = document.querySelector('.copyright p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Prevent form resubmission on page refresh
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
        if (mobileMenu) {
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
    
    notification.addEventListener('click', (e) => {
        if (e.target === notification) {
            clearTimeout(autoRemove);
            removeNotification(notification);
        }
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    notification.style.opacity = '0';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    return icons[type] || 'fa-info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    return colors[type] || '#3b82f6';
}