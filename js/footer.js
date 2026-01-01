 // Интерактивность для футера
        document.addEventListener('DOMContentLoaded', function() {
            const footerLinks = document.querySelectorAll('.main-footer .footer-links a');
            const socialLinks = document.querySelectorAll('.main-footer .social-links a');
            
            // Анимация для ссылок футера
            footerLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'rotate(90deg)';
                    }
                });
                
                link.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('i');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
            
            // Эффект для социальных иконок
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.1)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            // Плавное появление футера при загрузке
            const footer = document.querySelector('.main-footer');
            if (footer) {
                footer.style.opacity = '0';
                
                setTimeout(() => {
                    footer.style.transition = 'opacity 0.8s ease';
                    footer.style.opacity = '1';
                }, 500);
            }
        });