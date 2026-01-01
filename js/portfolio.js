// Интерактивность для Portfolio секции
        document.addEventListener('DOMContentLoaded', function() {
            const portfolioCards = document.querySelectorAll('.portfolio-section .portfolio-card');
            const portfolioBtn = document.querySelector('.portfolio-section .portfolio-btn');
            
            // Эффект для кнопки при наведении
            if (portfolioBtn) {
                portfolioBtn.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(8px)';
                    }
                });
                
                portfolioBtn.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            }
            
            // Параллакс эффект для декоративных кубов при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
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
            });
            
            // Добавляем интерактивность для карточек при клике
            portfolioCards.forEach(card => {
                card.addEventListener('click', function() {
                    this.style.transform = 'translateY(-15px) scale(0.98)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1)';
                    }, 150);
                });
            });
        });