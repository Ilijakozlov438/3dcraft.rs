// Интерактивность для WhatsApp CTA
        document.addEventListener('DOMContentLoaded', function() {
            const whatsappBtn = document.querySelector('.whatsapp-cta-btn');
            
            // Добавляем счетчик кликов (для аналитики в реальном проекте)
            if (whatsappBtn) {
                whatsappBtn.addEventListener('click', function() {
                    // В реальном проекте здесь может быть отправка события в Google Analytics
                    console.log('WhatsApp CTA clicked');
                    
                    // Добавляем временный эффект "пульсации"
                    this.style.animation = 'none';
                    setTimeout(() => {
                        this.style.animation = '';
                    }, 10);
                });
            }
            
            // Плавное появление секции при загрузке
            const ctaSection = document.querySelector('.whatsapp-cta-section');
            if (ctaSection) {
                ctaSection.style.opacity = '0';
                ctaSection.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    ctaSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    ctaSection.style.opacity = '1';
                    ctaSection.style.transform = 'translateY(0)';
                }, 300);
            }
        });