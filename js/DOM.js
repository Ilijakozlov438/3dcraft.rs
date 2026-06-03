// Объединенный файл интерактивности для всех секций сайта
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ADVANTAGES СЕКЦИЯ ==========
    const advantageItems = document.querySelectorAll('.advantages-section .advantage-item');
    const advantagesBtn = document.querySelector('.advantages-section .advantages-btn');
    
    if (advantageItems.length > 0) {
        advantageItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 300 + index * 100);
        });
    }
    
    if (advantagesBtn) {
        advantagesBtn.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) icon.style.transform = 'translateX(8px)';
        });
        
        advantagesBtn.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) icon.style.transform = 'translateX(0)';
        });
    }
    
    // ========== CONTACT СЕКЦИЯ ==========
    const contactItems = document.querySelectorAll('.contact-section .contact-item');
    const contactLinks = document.querySelectorAll('.contact-section .contact-item a');
    
    if (contactItems.length > 0) {
        contactItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 300 + index * 100);
        });
    }
    
    if (contactLinks.length > 0) {
        contactLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(3px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
            
            if (link.target === '_blank') {
                link.addEventListener('click', function() {
                    console.log('Внешняя ссылка открыта: ' + this.href);
                });
            }
        });
    }
    
    const contactInfos = document.querySelectorAll('.contact-section .contact-info');
    if (contactInfos.length > 0) {
        contactInfos.forEach(info => {
            info.addEventListener('click', function() {
                this.style.transform = 'translateY(-10px) scale(0.99)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1)';
                }, 150);
            });
        });
    }
    
    // ========== FEATURES СЕКЦИЯ ==========
    const featureCards = document.querySelectorAll('.features-section .feature-card');
    
    if (featureCards.length > 0) {
        featureCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + index * 150);
        });
        
        featureCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-15px) scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-15px) scale(1)';
                }, 150);
            });
        });
    }
    
    // ========== PORTFOLIO СЕКЦИЯ ==========
    const portfolioCards = document.querySelectorAll('.portfolio-section .portfolio-card');
    const portfolioBtn = document.querySelector('.portfolio-section .portfolio-btn');
    
    if (portfolioBtn) {
        portfolioBtn.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) icon.style.transform = 'translateX(8px)';
        });
        
        portfolioBtn.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) icon.style.transform = 'translateX(0)';
        });
    }
    
    if (portfolioCards.length > 0) {
        portfolioCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-15px) scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-15px) scale(1)';
                }, 150);
            });
        });
    }
    
    // ========== SERVICES СЕКЦИЯ ==========
    const serviceCards = document.querySelectorAll('.services-section .service-card');
    const serviceBtns = document.querySelectorAll('.services-section .service-btn');
    
    if (serviceCards.length > 0) {
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + index * 100);
        });
    }
    
    if (serviceBtns.length > 0) {
        serviceBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) icon.style.transform = 'translateX(8px)';
            });
            
            btn.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) icon.style.transform = 'translateX(0)';
            });
        });
    }
    
    // ========== WHATSAPP FLOAT КНОПКА ==========
    const whatsappFloatBtn = document.querySelector('.whatsapp-float');
    
    if (whatsappFloatBtn) {
        whatsappFloatBtn.addEventListener('click', function() {
            console.log('WhatsApp button clicked');
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'float-pulse 3s ease-in-out infinite';
            }, 300);
        });
    }
    
    // ========== WHATSAPP CTA СЕКЦИЯ ==========
    const whatsappCtaBtn = document.querySelector('.whatsapp-cta-btn');
    const whatsappCtaSection = document.querySelector('.whatsapp-cta-section');
    
    if (whatsappCtaBtn) {
        whatsappCtaBtn.addEventListener('click', function() {
            console.log('WhatsApp CTA clicked');
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    }
    
    if (whatsappCtaSection) {
        whatsappCtaSection.style.opacity = '0';
        whatsappCtaSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            whatsappCtaSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            whatsappCtaSection.style.opacity = '1';
            whatsappCtaSection.style.transform = 'translateY(0)';
        }, 300);
    }

    // ========== ROUTE CHECK FOR INVALID PATHS ==========
    const validPaths = [
        '/',
        '/index.html',
        '/usluge.html',
        '/portfolio.html',
        '/modeliranje.html',
        '/skeniranje.html',
        '/kontakti.html',
        '/404.html'
    ];

    const currentPath = window.location.pathname.replace(/\/+$/g, '');
    const normalizedPath = currentPath === '' ? '/' : currentPath;

    if (!validPaths.includes(normalizedPath) && !window.location.pathname.startsWith('/404')) {
        window.location.replace('/404.html');
    }
    
    // ========== ОБЩИЕ ПАРАЛЛАКС ЭФФЕКТЫ ==========
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
    
    if (isMobileDevice()) {
        document.body.classList.add('mobile-device');
    }
    
    let isScrolling;
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // WhatsApp кнопка анимация
        if (whatsappFloatBtn) {
            whatsappFloatBtn.style.animationPlayState = 'paused';
            clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
                if (whatsappFloatBtn) whatsappFloatBtn.style.animationPlayState = 'running';
            }, 500);
        }
        
        // Advantages параллакс
        const advantagesSection = document.querySelector('.advantages-section');
        if (advantagesSection) {
            const decorCircle1 = advantagesSection.querySelector('.decor-circle-1');
            const decorCircle2 = advantagesSection.querySelector('.decor-circle-2');
            
            if (decorCircle1) {
                decorCircle1.style.transform = `rotate(${scrolled * 0.1}deg) translateX(${scrolled * 0.02}px)`;
            }
            
            if (decorCircle2) {
                decorCircle2.style.transform = `rotate(${scrolled * -0.08}deg) translateX(${scrolled * -0.02}px)`;
            }
        }
        
        // Contact параллакс
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            const decorCubes = contactSection.querySelectorAll('.decor-cube');
            decorCubes.forEach((cube, index) => {
                if (cube) {
                    const speed = index === 0 ? 0.04 : 0.02;
                    cube.style.transform = `rotate(${scrolled * speed}deg)`;
                }
            });
        }
        
        // Features параллакс
        const featuresSection = document.querySelector('.features-section');
        if (featuresSection) {
            const decor1 = featuresSection.querySelector('.decor-1');
            const decor2 = featuresSection.querySelector('.decor-2');
            
            if (decor1) {
                decor1.style.transform = `translateY(${scrolled * 0.05}px) rotate(${scrolled * 0.02}deg)`;
            }
            
            if (decor2) {
                decor2.style.transform = `translateY(${scrolled * 0.03}px) rotate(${scrolled * -0.015}deg)`;
            }
        }
        
        // Map параллакс
        const mapSection = document.querySelector('.map-section');
        if (mapSection) {
            const decor1 = mapSection.querySelector('.decor-1');
            if (decor1) {
                decor1.style.transform = `rotate(${scrolled * 0.05}deg) translateY(${scrolled * 0.02}px)`;
            }
        }
        
        // FAQ параллакс
        const faqSection = document.querySelector('.faq-section');
        if (faqSection) {
            const decor2 = faqSection.querySelector('.decor-2');
            if (decor2) {
                decor2.style.transform = `rotate(${scrolled * -0.04}deg) translateY(${scrolled * 0.01}px)`;
            }
        }
        
        // Portfolio параллакс
        const portfolioSection = document.querySelector('.portfolio-section');
        if (portfolioSection) {
            const decorCubes = portfolioSection.querySelectorAll('.decor-cube');
            decorCubes.forEach((cube, index) => {
                if (cube) {
                    const speed = index === 0 ? 0.05 : 0.03;
                    const direction = index === 0 ? 1 : -1;
                    cube.style.transform = `rotate(${scrolled * speed}deg) translateY(${scrolled * 0.02 * direction}px)`;
                }
            });
        }
        
        // Services параллакс
        const servicesSection = document.querySelector('.services-section');
        if (servicesSection) {
            const decor1 = servicesSection.querySelector('.decor-3d-1');
            const decor2 = servicesSection.querySelector('.decor-3d-2');
            
            if (decor1) {
                decor1.style.transform = `rotate(${scrolled * 0.05}deg) translateY(${scrolled * 0.02}px)`;
            }
            
            if (decor2) {
                decor2.style.transform = `rotate(${scrolled * -0.04}deg) translateY(${scrolled * 0.01}px)`;
            }
        }
    });
});