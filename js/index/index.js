// Объединенный файл интерактивности для сайта
document.addEventListener('DOMContentLoaded', function() {
    // ========== HEADER ФУНКЦИОНАЛЬНОСТЬ ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const toggleMenuBtn = document.getElementById('toggleMenuBtn');
    
    // Функция для переключения мобильного меню
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        
        // Меняем иконку при открытии/закрытии меню
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Переключение мобильного меню по клику на бургер
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Кнопка для тестирования мобильного меню на ПК
    if (toggleMenuBtn) {
        toggleMenuBtn.addEventListener('click', function() {
            // Принудительно добавляем класс active к меню для демонстрации
            navLinks.classList.add('active');
            
            // Меняем иконку
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            
            // Через 3 секунды автоматически закрываем меню
            setTimeout(function() {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }, 3000);
        });
    }
    
    // Закрытие меню при клике на ссылку
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Закрытие меню при клике вне его области (только на мобильных)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('.navbar') && 
            navLinks && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Закрытие меню при изменении размера окна (если перешли с мобильного на десктоп)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // ========== HERO-СЕКЦИЯ ФУНКЦИОНАЛЬНОСТЬ ==========
    const heroSocialLinks = document.querySelectorAll('.hero-block .hero-social a');
    const heroSection = document.querySelector('.hero-block');
    
    // Эффект при наведении на социальные иконки в hero-секции
    heroSocialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Параллакс-эффект для фона при скролле
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        if (heroSection && scrolled < 800) {
            const rate = scrolled * 0.3;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
    
    // Добавляем дополнительные эффекты при загрузке для hero-секции
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-block .hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }
    }, 300);
    
    // ========== FOOTER ФУНКЦИОНАЛЬНОСТЬ ==========
    const footerLinks = document.querySelectorAll('.main-footer .footer-links a');
    const footerSocialLinks = document.querySelectorAll('.main-footer .social-links a');
    const footer = document.querySelector('.main-footer');
    
    // Анимация для ссылок футера
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(90deg)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Эффект для социальных иконок в футере
    footerSocialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Плавное появление футера при загрузке
    if (footer) {
        footer.style.opacity = '0';
        
        setTimeout(() => {
            footer.style.transition = 'opacity 0.8s ease';
            footer.style.opacity = '1';
        }, 500);
    }
    
    // ========== ОБЩАЯ ФУНКЦИОНАЛЬНОСТЬ ==========
    // Добавляем эффект плавного появления для контента
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(function() {
            document.body.style.opacity = '1';
        }, 100);
    });
});

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
    
    // ========== FAQ И MAP СЕКЦИИ (kontakti_page.js) ==========
    const faqItems = document.querySelectorAll('.faq-section .faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', function() {
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    item.classList.toggle('active');
                });
            }
        });
    }
    
    const mapBtn = document.querySelector('.map-section .map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) icon.style.transform = 'translateX(5px)';
        });
        
        mapBtn.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) icon.style.transform = 'translateX(0)';
        });
    }
    
    const contactPageSections = document.querySelectorAll('.map-section, .faq-section');
    if (contactPageSections.length > 0) {
        contactPageSections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 300 + index * 200);
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

// Интерактивность для Process секции
        document.addEventListener('DOMContentLoaded', function() {
            const processSteps = document.querySelectorAll('.process-section .process-step');
            
            // Добавляем интерактивность для шагов
            processSteps.forEach((step, index) => {
                // Эффект при клике
                step.addEventListener('click', function() {
                    this.style.transform = 'translateY(-15px) scale(0.98)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1)';
                    }, 150);
                    
                    // В реальном проекте здесь может быть дополнительная логика
                    console.log(`Кликнут шаг ${index + 1}: ${this.querySelector('h3').textContent}`);
                });
                
                // Добавляем эффект для уголка при наведении
                const stepCorner = step.querySelector('.step-corner');
                if (stepCorner) {
                    step.addEventListener('mouseenter', function() {
                        stepCorner.style.borderWidth = '0 50px 50px 0';
                        stepCorner.style.borderColor = 'transparent rgba(39, 174, 96, 0.2) transparent transparent';
                    });
                    
                    step.addEventListener('mouseleave', function() {
                        stepCorner.style.borderWidth = '0 40px 40px 0';
                        stepCorner.style.borderColor = 'transparent rgba(39, 174, 96, 0.1) transparent transparent';
                    });
                }
            });
            
            // Параллакс эффект для декоративных фигур при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const processSection = document.querySelector('.process-section');
                
                if (processSection) {
                    const decorShape1 = processSection.querySelector('.decor-shape-1');
                    const decorShape2 = processSection.querySelector('.decor-shape-2');
                    
                    if (decorShape1) {
                        decorShape1.style.transform = `translateY(${scrolled * 0.02}px) rotate(${15 + scrolled * 0.01}deg)`;
                    }
                    
                    if (decorShape2) {
                        decorShape2.style.transform = `translateY(${scrolled * -0.01}px) rotate(${scrolled * 0.005}deg)`;
                    }
                }
            });
            
            // Инициализация анимации появления шагов
            setTimeout(() => {
                processSteps.forEach((step, index) => {
                    step.style.animation = `fadeInUpProcess 0.6s ease forwards`;
                    step.style.animationDelay = `${0.1 + index * 0.1}s`;
                });
            }, 300);
            
            // Эффект для линии процесса
            const flowLine = document.querySelector('.process-section .flow-line');
            if (flowLine && window.innerWidth > 1200) {
                // Анимация появления линии
                flowLine.style.height = '0';
                setTimeout(() => {
                    flowLine.style.transition = 'height 1.5s ease';
                    flowLine.style.height = '100%';
                }, 500);
            }
        });