// Интерактивность для Formats секции
    document.addEventListener('DOMContentLoaded', function() {
        const formatCards = document.querySelectorAll('.formats-section .format-card');
        const formatItems = document.querySelectorAll('.formats-section .format-item');
        
        // Анимация для карточек
        formatCards.forEach((card) => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.format-icon i');
                if (icon) {
                    icon.style.transform = 'rotate(15deg) scale(1.1)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.format-icon i');
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                }
            });
            
            // Клик по карточке
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-10px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1)';
                }, 150);
            });
        });
        
        // Анимация для элементов списка
        formatItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.format-item-icon i');
                if (icon) {
                    icon.style.transform = 'rotate(15deg) scale(1.2)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.format-item-icon i');
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                }
            });
        });
        
        // Параллакс эффект для декоративных элементов
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const formatsSection = document.querySelector('.formats-section');
            
            if (formatsSection) {
                const decorElements = formatsSection.querySelectorAll('.format-decor');
                
                decorElements.forEach((decor, index) => {
                    if (decor) {
                        const speed = index === 0 ? 0.05 : (index === 1 ? 0.03 : 0.04);
                        const direction = index === 0 ? 1 : (index === 1 ? -1 : 1);
                        decor.style.transform = `rotate(${scrolled * speed}deg) translateY(${scrolled * 0.02 * direction}px)`;
                    }
                });
            }
        });
        
        // Плавное появление секции
        const section = document.querySelector('.formats-section');
        if (section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 300);
        }
    });