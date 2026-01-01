// Интерактивность для Features секции
        document.addEventListener('DOMContentLoaded', function() {
            const featureCards = document.querySelectorAll('.features-section .feature-card');
            
            // Добавляем анимацию появления карточек при загрузке
            featureCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + index * 150);
            });
            
            // Добавляем дополнительный эффект при клике на карточку
            featureCards.forEach(card => {
                card.addEventListener('click', function() {
                    this.style.transform = 'translateY(-15px) scale(0.98)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1)';
                    }, 150);
                });
            });
            
            // Параллакс эффект для декоративных элементов при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
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
            });
        });