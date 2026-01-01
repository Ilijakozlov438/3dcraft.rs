// Интерактивность для Services секции
        document.addEventListener('DOMContentLoaded', function() {
            const serviceCards = document.querySelectorAll('.services-section .service-card');
            const serviceBtns = document.querySelectorAll('.services-section .service-btn');
            
            // Анимация появления карточек с задержкой
            serviceCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + index * 100);
            });
            
            // Эффект для кнопок при наведении
            serviceBtns.forEach(btn => {
                btn.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(8px)';
                    }
                });
                
                btn.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            });
            
            // Параллакс эффект для декоративных элементов при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
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