// Интерактивность для Contact секции
        document.addEventListener('DOMContentLoaded', function() {
            const contactItems = document.querySelectorAll('.contact-section .contact-item');
            const contactLinks = document.querySelectorAll('.contact-section .contact-item a');
            
            // Анимация для контактных элементов
            contactItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 300 + index * 100);
            });
            
            // Эффект для ссылок при наведении
            contactLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(3px)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                });
                
                // Для внешних ссылок добавляем индикатор
                if (link.target === '_blank') {
                    link.addEventListener('click', function() {
                        console.log('Внешняя ссылка открыта: ' + this.href);
                    });
                }
            });
            
            // Параллакс эффект для декоративных кубов при скролле
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const contactSection = document.querySelector('.contact-section');
                
                if (contactSection) {
                    const decorCubes = contactSection.querySelectorAll('.decor-cube');
                    
                    decorCubes.forEach((cube, index) => {
                        if (cube) {
                            const speed = index === 0 ? 0.04 : 0.02;
                            cube.style.transform = `rotate(${scrolled * speed}deg)`;
                        }
                    });
                }
            });
            
            // Добавляем интерактивность для карточек контактов
            const contactInfos = document.querySelectorAll('.contact-section .contact-info');
            
            contactInfos.forEach(info => {
                info.addEventListener('click', function() {
                    this.style.transform = 'translateY(-10px) scale(0.99)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-10px) scale(1)';
                    }, 150);
                });
            });
        });