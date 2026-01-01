// Интерактивность для Advantages секции
        document.addEventListener('DOMContentLoaded', function() {
            const advantageItems = document.querySelectorAll('.advantages-section .advantage-item');
            const advantagesBtn = document.querySelector('.advantages-section .advantages-btn');
            
            // Анимация появления элементов списка с задержкой
            advantageItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 300 + index * 100);
            });
            
            // Эффект для кнопки при наведении
            if (advantagesBtn) {
                advantagesBtn.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(8px)';
                    }
                });
                
                advantagesBtn.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            }
            
            // Параллакс эффект для декоративных кругов при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
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
            });
        });