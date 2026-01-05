// Интерактивность для FAQ секции
        document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-section .faq-item');
            
            // Обработчик клика на вопрос FAQ
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', function() {
                    // Закрываем все остальные вопросы
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Переключаем текущий вопрос
                    item.classList.toggle('active');
                });
            });
            
            // Интерактивность для кнопки карты
            const mapBtn = document.querySelector('.map-section .map-btn');
            if (mapBtn) {
                mapBtn.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(5px)';
                    }
                });
                
                mapBtn.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'translateX(0)';
                    }
                });
            }
            
            // Параллакс эффект для декоративных элементов
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                
                // Для Map секции
                const mapSection = document.querySelector('.map-section');
                if (mapSection) {
                    const decor1 = mapSection.querySelector('.decor-1');
                    if (decor1) {
                        decor1.style.transform = `rotate(${scrolled * 0.05}deg) translateY(${scrolled * 0.02}px)`;
                    }
                }
                
                // Для FAQ секции
                const faqSection = document.querySelector('.faq-section');
                if (faqSection) {
                    const decor2 = faqSection.querySelector('.decor-2');
                    if (decor2) {
                        decor2.style.transform = `rotate(${scrolled * -0.04}deg) translateY(${scrolled * 0.01}px)`;
                    }
                }
            });
            
            // Плавное появление секций при загрузке
            const sections = document.querySelectorAll('.map-section, .faq-section');
            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 300 + index * 200);
            });
        });