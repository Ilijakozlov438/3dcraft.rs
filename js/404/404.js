// Интерактивность для страницы 404
document.addEventListener('DOMContentLoaded', function() {
    
    // Анимация появления элементов
    const errorContent = document.querySelector('.error-content');
    if (errorContent) {
        errorContent.style.opacity = '0';
        errorContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            errorContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            errorContent.style.opacity = '1';
            errorContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Анимация цифр 404
    const digits = document.querySelectorAll('.digit');
    digits.forEach((digit, index) => {
        digit.style.opacity = '0';
        digit.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            digit.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            digit.style.opacity = '1';
            digit.style.transform = 'scale(1)';
        }, 500 + index * 200);
    });
    
    // Функциональность поиска
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    if (searchButton && searchInput) {
        // Поиск при нажатии кнопки
        searchButton.addEventListener('click', function() {
            performSearch();
        });
        
        // Поиск при нажатии Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Функция поиска
        function performSearch() {
            const searchTerm = searchInput.value.trim();
            
            if (!searchTerm) {
                // Анимация поля ввода при пустом запросе
                searchInput.style.borderColor = '#e74c3c';
                searchInput.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.2)';
                
                setTimeout(() => {
                    searchInput.style.borderColor = '#ddd';
                    searchInput.style.boxShadow = 'none';
                }, 1000);
                
                return;
            }
            
            // Анимация кнопки поиска
            searchButton.style.transform = 'scale(0.95)';
            searchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Претрага...';
            
            setTimeout(() => {
                searchButton.style.transform = 'scale(1)';
                searchButton.innerHTML = '<i class="fas fa-search"></i> Претрага';
                
                // В реальном проекте здесь был бы AJAX запрос
                // Пока просто показываем сообщение
                alert('У претрази за: "' + searchTerm + '"\n\nУ стварној апликацији бисте били преусмерени на резултате претраге.');
                
                // Очищаем поле
                searchInput.value = '';
            }, 800);
        }
    }
    
    // Интерактивность для кнопок
    const actionButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-tertiary');
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(5px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
        
        // Эффект при клике
        button.addEventListener('click', function(e) {
            // Для демонстрации - если это не реальная ссылка
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Анимация нажатия
                this.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    alert('У стварној апликацији бисте били преусмерени на одговарајућу страницу.');
                }, 150);
            }
        });
    });
    
    // Параллакс эффект для декоративных элементов при скролле
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const page404 = document.querySelector('.page-404');
        
        if (page404) {
            const decorElements = page404.querySelectorAll('.decor-element');
            decorElements.forEach((element, index) => {
                const speed = 0.03 * (index + 1);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
            });
        }
    });
    
    // Счетчик автоматического перенаправления (опционально)
    function setupAutoRedirect() {
        const redirectButton = document.querySelector('.btn-primary');
        const redirectUrl = redirectButton ? redirectButton.getAttribute('href') : 'index.html';
        const redirectTime = 30; // секунди до автоматического перенаправления
        
        // Создаем элемент для отображения таймера
        const timerElement = document.createElement('div');
        timerElement.className = 'auto-redirect-timer';
        timerElement.innerHTML = `
            <p><i class="fas fa-clock"></i> Бићете аутоматски преусмерени на почетну страницу за <span id="countdown">${redirectTime}</span> секунди</p>
        `;
        
        // Добавляем перед кнопками действий
        const errorActions = document.querySelector('.error-actions');
        if (errorActions) {
            errorActions.parentNode.insertBefore(timerElement, errorActions);
            
            // Запускаем таймер
            let timeLeft = redirectTime;
            const countdownElement = document.getElementById('countdown');
            const countdownInterval = setInterval(() => {
                timeLeft--;
                if (countdownElement) {
                    countdownElement.textContent = timeLeft;
                }
                
                if (timeLeft <= 0) {
                    clearInterval(countdownInterval);
                    window.location.href = redirectUrl;
                }
            }, 1000);
            
            // Останавливаем таймер если пользователь взаимодействует со страницей
            document.addEventListener('click', function() {
                clearInterval(countdownInterval);
                timerElement.style.opacity = '0.5';
                timerElement.innerHTML = '<p><i class="fas fa-info-circle"></i> Аутоматско преусмерење је отказано због корисничке активности</p>';
            });
        }
    }
    
    // Эффект для быстрых ссылок в блоке поиска
    const quickLinks = document.querySelectorAll('.quick-links a');
    quickLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Эффект для предложений
    const suggestionsItems = document.querySelectorAll('.error-suggestions li');
    suggestionsItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 800 + index * 100);
    });
});