// Интерактивность для hero-секции
        document.addEventListener('DOMContentLoaded', function() {
            const socialLinks = document.querySelectorAll('.hero-block .hero-social a');
            const imageWrapper = document.querySelector('.hero-block .image-wrapper');
            
            // Эффект при наведении на социальные иконки
            socialLinks.forEach(link => {
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
                const heroSection = document.querySelector('.hero-block');
                
                if (heroSection && scrolled < 800) {
                    const rate = scrolled * 0.3;
                    heroSection.style.backgroundPosition = `center ${rate}px`;
                }
            });
            
            // Добавляем дополнительные эффекты при загрузке
            setTimeout(() => {
                const heroTitle = document.querySelector('.hero-block .hero-title');
                if (heroTitle) {
                    heroTitle.style.opacity = '1';
                    heroTitle.style.transform = 'translateY(0)';
                }
            }, 300);
        });