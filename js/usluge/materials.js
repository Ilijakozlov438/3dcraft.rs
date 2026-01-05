// Интерактивность для Materials секции
        document.addEventListener('DOMContentLoaded', function() {
            const materialCards = document.querySelectorAll('.materials-section .material-card');
            const materialBadges = document.querySelectorAll('.materials-section .material-badge');
            const materialRequestBtn = document.querySelector('.materials-section .material-request-btn');
            
            // Анимация появления карточек с задержкой
            materialCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + index * 150);
            });
            
            // Эффект для бейджей при наведении
            materialBadges.forEach(badge => {
                badge.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1) rotate(5deg)';
                    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                });
                
                badge.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) rotate(0deg)';
                    this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
                });
            });
            
            // Эффект для кнопки запроса материалов
            if (materialRequestBtn) {
                materialRequestBtn.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(5px)';
                    }
                });
                
                materialRequestBtn.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            }
            
            // Параллакс эффект для декоративных сфер при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const materialsSection = document.querySelector('.materials-section');
                
                if (materialsSection) {
                    const decorSphere1 = materialsSection.querySelector('.decor-sphere-1');
                    const decorSphere2 = materialsSection.querySelector('.decor-sphere-2');
                    
                    if (decorSphere1) {
                        decorSphere1.style.transform = `translateY(${scrolled * 0.02}px) rotate(${scrolled * 0.02}deg)`;
                    }
                    
                    if (decorSphere2) {
                        decorSphere2.style.transform = `translateY(${scrolled * -0.01}px) rotate(${scrolled * -0.01}deg)`;
                    }
                }
            });
            
            // Добавляем интерактивность для карточек при клике
            materialCards.forEach(card => {
                card.addEventListener('click', function() {
                    this.style.transform = 'translateY(-15px) scale(0.98)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1)';
                    }, 150);
                });
            });
        });