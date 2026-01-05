// Объединенный файл интерактивности для сайта
document.addEventListener('DOMContentLoaded', function() {
    // ========== HEADER ФУНКЦИОНАЛЬНОСТЬ ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const toggleMenuBtn = document.getElementById('toggleMenuBtn');
    
    // Функция для переключения мобильного меню
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        
        // Меняем иконку при открытии/закрытии меню
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Переключение мобильного меню по клику на бургер
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Кнопка для тестирования мобильного меню на ПК
    if (toggleMenuBtn) {
        toggleMenuBtn.addEventListener('click', function() {
            // Принудительно добавляем класс active к меню для демонстрации
            navLinks.classList.add('active');
            
            // Меняем иконку
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            
            // Через 3 секунды автоматически закрываем меню
            setTimeout(function() {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }, 3000);
        });
    }
    
    // Закрытие меню при клике на ссылку
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Закрытие меню при клике вне его области (только на мобильных)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('.navbar') && 
            navLinks && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Закрытие меню при изменении размера окна (если перешли с мобильного на десктоп)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // ========== HERO-СЕКЦИЯ ФУНКЦИОНАЛЬНОСТЬ ==========
    const heroSocialLinks = document.querySelectorAll('.hero-block .hero-social a');
    const heroSection = document.querySelector('.hero-block');
    
    // Эффект при наведении на социальные иконки в hero-секции
    heroSocialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Параллакс-эффект для фона при скролле
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        if (heroSection && scrolled < 800) {
            const rate = scrolled * 0.3;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
    
    // Добавляем дополнительные эффекты при загрузке для hero-секции
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-block .hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }
    }, 300);
    
    // ========== FOOTER ФУНКЦИОНАЛЬНОСТЬ ==========
    const footerLinks = document.querySelectorAll('.main-footer .footer-links a');
    const footerSocialLinks = document.querySelectorAll('.main-footer .social-links a');
    const footer = document.querySelector('.main-footer');
    
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
    
    // Эффект для социальных иконок в футере
    footerSocialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Плавное появление футера при загрузке
    if (footer) {
        footer.style.opacity = '0';
        
        setTimeout(() => {
            footer.style.transition = 'opacity 0.8s ease';
            footer.style.opacity = '1';
        }, 500);
    }
    
    // ========== ОБЩАЯ ФУНКЦИОНАЛЬНОСТЬ ==========
    // Добавляем эффект плавного появления для контента
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(function() {
            document.body.style.opacity = '1';
        }, 100);
    });
});