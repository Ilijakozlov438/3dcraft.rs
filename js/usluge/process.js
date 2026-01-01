// Интерактивность для Process секции
        document.addEventListener('DOMContentLoaded', function() {
            const processSteps = document.querySelectorAll('.process-section .process-step');
            
            // Добавляем интерактивность для шагов
            processSteps.forEach((step, index) => {
                // Эффект при клике
                step.addEventListener('click', function() {
                    this.style.transform = 'translateY(-15px) scale(0.98)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-15px) scale(1)';
                    }, 150);
                    
                    // В реальном проекте здесь может быть дополнительная логика
                    console.log(`Кликнут шаг ${index + 1}: ${this.querySelector('h3').textContent}`);
                });
                
                // Добавляем эффект для уголка при наведении
                const stepCorner = step.querySelector('.step-corner');
                if (stepCorner) {
                    step.addEventListener('mouseenter', function() {
                        stepCorner.style.borderWidth = '0 50px 50px 0';
                        stepCorner.style.borderColor = 'transparent rgba(39, 174, 96, 0.2) transparent transparent';
                    });
                    
                    step.addEventListener('mouseleave', function() {
                        stepCorner.style.borderWidth = '0 40px 40px 0';
                        stepCorner.style.borderColor = 'transparent rgba(39, 174, 96, 0.1) transparent transparent';
                    });
                }
            });
            
            // Параллакс эффект для декоративных фигур при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const processSection = document.querySelector('.process-section');
                
                if (processSection) {
                    const decorShape1 = processSection.querySelector('.decor-shape-1');
                    const decorShape2 = processSection.querySelector('.decor-shape-2');
                    
                    if (decorShape1) {
                        decorShape1.style.transform = `translateY(${scrolled * 0.02}px) rotate(${15 + scrolled * 0.01}deg)`;
                    }
                    
                    if (decorShape2) {
                        decorShape2.style.transform = `translateY(${scrolled * -0.01}px) rotate(${scrolled * 0.005}deg)`;
                    }
                }
            });
            
            // Инициализация анимации появления шагов
            setTimeout(() => {
                processSteps.forEach((step, index) => {
                    step.style.animation = `fadeInUpProcess 0.6s ease forwards`;
                    step.style.animationDelay = `${0.1 + index * 0.1}s`;
                });
            }, 300);
            
            // Эффект для линии процесса
            const flowLine = document.querySelector('.process-section .flow-line');
            if (flowLine && window.innerWidth > 1200) {
                // Анимация появления линии
                flowLine.style.height = '0';
                setTimeout(() => {
                    flowLine.style.transition = 'height 1.5s ease';
                    flowLine.style.height = '100%';
                }, 500);
            }
        });