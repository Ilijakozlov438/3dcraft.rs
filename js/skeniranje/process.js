 // Интерактивность для Scanning Process секции
    document.addEventListener('DOMContentLoaded', function() {
        const stepCards = document.querySelectorAll('.scanning-process-section .step-card');
        const summaryBtn = document.querySelector('.scanning-process-section .summary-btn');
        
        // Анимация для карточек шагов
        stepCards.forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                const number = this.querySelector('.step-number');
                if (number) {
                    number.style.transform = 'scale(1.2)';
                    number.style.color = 'rgba(39, 174, 96, 0.25)';
                }
                
                const icon = this.querySelector('.step-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                }
                
                // Анимация для пунктов списка
                const listItems = this.querySelectorAll('.step-details li');
                listItems.forEach((item, i) => {
                    setTimeout(() => {
                        item.style.transform = 'translateX(5px)';
                    }, i * 100);
                });
            });
            
            card.addEventListener('mouseleave', function() {
                const number = this.querySelector('.step-number');
                if (number) {
                    number.style.transform = 'scale(1)';
                    number.style.color = 'rgba(39, 174, 96, 0.1)';
                }
                
                const icon = this.querySelector('.step-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
                
                // Сбрасываем анимацию пунктов списка
                const listItems = this.querySelectorAll('.step-details li');
                listItems.forEach(item => {
                    item.style.transform = 'translateX(0)';
                });
            });
            
            // Клик по карточке
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-10px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1)';
                }, 150);
            });
        });
        
        // Анимация для кнопки
        if (summaryBtn) {
            summaryBtn.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'rotate(15deg) scale(1.2)';
                }
            });
            
            summaryBtn.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                }
            });
        }
        
        // Параллакс эффект для декоративных элементов
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const scanningSection = document.querySelector('.scanning-process-section');
            
            if (scanningSection) {
                const decorElements = scanningSection.querySelectorAll('.scan-decor');
                
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
        const section = document.querySelector('.scanning-process-section');
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