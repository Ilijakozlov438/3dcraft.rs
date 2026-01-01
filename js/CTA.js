// Интерактивность для CTA секции
        document.addEventListener('DOMContentLoaded', function() {
            const ctaBtn = document.querySelector('.cta-section .cta-btn');
            
            // Эффект для кнопки при наведении
            if (ctaBtn) {
                ctaBtn.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(8px) rotate(5deg)';
                    }
                });
                
                ctaBtn.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0) rotate(0deg)';
                    }
                });
            }
            
            // Параллакс эффект для фона при скролле
            let lastScrollY = window.scrollY;
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const ctaSection = document.querySelector('.cta-section');
                
                if (ctaSection) {
                    // Меняем позицию фона для параллакс эффекта
                    const rate = scrolled * 0.3;
                    ctaSection.style.backgroundPosition = `center ${rate}px`;
                    
                    // Анимация декоративных элементов
                    const decorShapes = ctaSection.querySelectorAll('.decor-shape');
                    const decor3d = ctaSection.querySelectorAll('.decor-3d');
                    
                    decorShapes.forEach((shape, index) => {
                        const speed = index === 0 ? 0.1 : 0.05;
                        shape.style.transform = `translateY(${scrolled * speed}px)`;
                    });
                    
                    decor3d.forEach((cube, index) => {
                        const speed = index === 0 ? 0.15 : 0.1;
                        cube.style.transform = `rotate(${scrolled * speed}deg)`;
                    });
                    
                    lastScrollY = scrolled;
                }
            });
            
            // Плавное появление секции при загрузке
            const ctaSection = document.querySelector('.cta-section');
            if (ctaSection) {
                ctaSection.style.opacity = '0';
                ctaSection.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    ctaSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    ctaSection.style.opacity = '1';
                    ctaSection.style.transform = 'translateY(0)';
                }, 300);
            }
        });