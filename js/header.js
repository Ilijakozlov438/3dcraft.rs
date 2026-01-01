 document.addEventListener('DOMContentLoaded', function() {
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
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
            
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
                    navLinks.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
            
            // Закрытие меню при изменении размера окна (если перешли с мобильного на десктоп)
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            
            // Добавляем эффект плавного появления для контента
            window.addEventListener('load', function() {
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.5s ease';
                
                setTimeout(function() {
                    document.body.style.opacity = '1';
                }, 100);
            });
        });