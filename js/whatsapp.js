// Интерактивность для кнопки WhatsApp
        document.addEventListener('DOMContentLoaded', function() {
            const whatsappBtn = document.querySelector('.whatsapp-float');
            
            // Добавляем событие клика для аналитики (в реальном проекте можно отправлять в Google Analytics)
            if (whatsappBtn) {
                whatsappBtn.addEventListener('click', function() {
                    console.log('WhatsApp button clicked');
                    
                    // Временное изменение анимации для обратной связи
                    this.style.animation = 'none';
                    setTimeout(() => {
                        this.style.animation = 'float-pulse 3s ease-in-out infinite';
                    }, 300);
                });
            }
            
            // Изменяем анимацию при скролле для экономии ресурсов
            let isScrolling;
            window.addEventListener('scroll', function() {
                if (whatsappBtn) {
                    // При скролле останавливаем анимацию пульсации
                    whatsappBtn.style.animationPlayState = 'paused';
                    
                    // Очищаем таймер предыдущего скролла
                    clearTimeout(isScrolling);
                    
                    // Через 500 мс после остановки скролла возобновляем анимацию
                    isScrolling = setTimeout(function() {
                        whatsappBtn.style.animationPlayState = 'running';
                    }, 500);
                }
            });
            
            // Проверяем, открыта ли страница на мобильном устройстве
            function isMobileDevice() {
                return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
            }
            
            // Если устройство мобильное, добавляем дополнительный класс для оптимизации
            if (isMobileDevice()) {
                document.body.classList.add('mobile-device');
            }
        });