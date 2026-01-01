// Интерактивность для Requirements секции
    document.addEventListener('DOMContentLoaded', function() {
        const requirementCards = document.querySelectorAll('.requirements-section .requirement-card');
        const extraCard = document.querySelector('.requirements-section .extra-card');
        const uploadBtn = document.querySelector('.requirements-section .upload-btn');
        
        // Анимация для карточек требований
        requirementCards.forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                const number = this.querySelector('.requirement-number');
                if (number) {
                    number.style.transform = 'scale(1.2)';
                    number.style.color = 'rgba(39, 174, 96, 0.2)';
                }
                
                // Добавляем задержку для каждой иконки в деталях
                const icons = this.querySelectorAll('.detail i');
                icons.forEach((icon, i) => {
                    setTimeout(() => {
                        icon.style.transform = 'scale(1.2)';
                    }, i * 50);
                });
            });
            
            card.addEventListener('mouseleave', function() {
                const number = this.querySelector('.requirement-number');
                if (number) {
                    number.style.transform = 'scale(1)';
                    number.style.color = 'rgba(39, 174, 96, 0.1)';
                }
                
                // Сбрасываем анимацию иконок
                const icons = this.querySelectorAll('.detail i');
                icons.forEach(icon => {
                    icon.style.transform = 'scale(1)';
                });
            });
            
            // Клик по карточке
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-15px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-15px) scale(1)';
                }, 150);
            });
        });
        
        // Анимация для экстра карточки
        if (extraCard) {
            extraCard.addEventListener('mouseenter', function() {
                const tags = this.querySelectorAll('.format-tag');
                tags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'translateY(-3px)';
                    }, index * 100);
                });
            });
            
            extraCard.addEventListener('mouseleave', function() {
                const tags = this.querySelectorAll('.format-tag');
                tags.forEach(tag => {
                    tag.style.transform = 'translateY(0)';
                });
            });
        }
        
        // Анимация для кнопки загрузки
        if (uploadBtn) {
            uploadBtn.addEventListener('mouseenter', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'rotate(15deg) scale(1.2)';
                }
            });
            
            uploadBtn.addEventListener('mouseleave', function() {
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                }
            });
        }
        
        // Параллакс эффект для декоративных элементов
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const requirementsSection = document.querySelector('.requirements-section');
            
            if (requirementsSection) {
                const decorElements = requirementsSection.querySelectorAll('.requirement-decor');
                
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
        const section = document.querySelector('.requirements-section');
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