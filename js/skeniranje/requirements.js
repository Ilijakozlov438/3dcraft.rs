// Интерактивность для секций 3D сканирования
    document.addEventListener('DOMContentLoaded', function() {
        // Pricing Section
        const pricingCards = document.querySelectorAll('.scanning-pricing-section .pricing-card');
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.pricing-btn i');
                if (icon) {
                    icon.style.transform = 'rotate(15deg) scale(1.2)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.pricing-btn i');
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                }
            });
        });
        
        // Applications Section
        const appCards = document.querySelectorAll('.scanning-applications-section .application-card');
        appCards.forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.application-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                }
                
                // Последовательная анимация тегов
                const tags = this.querySelectorAll('.example-tag');
                tags.forEach((tag, i) => {
                    setTimeout(() => {
                        tag.style.transform = 'translateY(-5px)';
                    }, i * 100);
                });
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.application-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
                
                // Сброс анимации тегов
                const tags = this.querySelectorAll('.example-tag');
                tags.forEach(tag => {
                    tag.style.transform = 'translateY(0)';
                });
            });
        });
        
        // Objects Section
        const objectCards = document.querySelectorAll('.scanning-objects-section .object-card');
        objectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const category = this.querySelector('.object-category');
                if (category) {
                    category.style.transform = 'translateY(-5px)';
                }
                
                const tags = this.querySelectorAll('.material-tag');
                tags.forEach((tag, i) => {
                    setTimeout(() => {
                        tag.style.transform = 'translateY(-3px)';
                    }, i * 100);
                });
            });
            
            card.addEventListener('mouseleave', function() {
                const category = this.querySelector('.object-category');
                if (category) {
                    category.style.transform = 'translateY(0)';
                }
                
                const tags = this.querySelectorAll('.material-tag');
                tags.forEach(tag => {
                    tag.style.transform = 'translateY(0)';
                });
            });
        });
        
        // Applications Button
        const appBtn = document.querySelector('.scanning-applications-section .applications-btn');
        if (appBtn) {
            appBtn.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(8px) rotate(10deg)';
                }
            });
            
            appBtn.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(0) rotate(0)';
                }
            });
        }
        
        // Параллакс эффект для декоративных элементов
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            // Pricing decor
            const pricingSection = document.querySelector('.scanning-pricing-section');
            if (pricingSection) {
                const decor1 = pricingSection.querySelector('.decor-1');
                const decor2 = pricingSection.querySelector('.decor-2');
                
                if (decor1) decor1.style.transform = `rotate(${scrolled * 0.05}deg) translateY(${scrolled * 0.02}px)`;
                if (decor2) decor2.style.transform = `rotate(${-scrolled * 0.03}deg) translateY(${-scrolled * 0.01}px)`;
            }
        });
        
        // Плавное появление секций
        const sections = document.querySelectorAll('.scanning-pricing-section, .scanning-applications-section, .scanning-objects-section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 300 + index * 200);
        });
    });