// === ЛОГУВАННЯ: Привітання при завантаженні сайту ===
console.log('Привіт, програмісте! Сайт "Моментальний Таймер" успішно завантажено.');
console.log('----------------------------------------------------');


const targetEventDate = new Date('2025-12-31T23:59:59'); // Дата, до якої буде відліковуватися час (можете змінити для тестування)

// Збереження посилань на елементи таймера для зручності
const timerElements = {
    days: document.getElementById("display-days"),
    hours: document.getElementById("display-hours"),
    minutes: document.getElementById("display-minutes"),
    seconds: document.getElementById("display-seconds")
};

// Функція для додавання нуля на початку, якщо число менше 10
function addLeadingZero(value) {
    return value < 10 ? '0' + value : value;
}

// Функція оновлення таймера
function updateCountdownTimer() {
    // === ЛОГУВАННЯ: Повідомлення про виклик функції ===
    console.log('--> Функція updateCountdownTimer() викликана для оновлення.');

    const currentTime = new Date(); // Поточний час
    const difference = targetEventDate - currentTime; // Різниця між цільовою датою і поточним часом

    if (difference < 0) {
        clearInterval(interval); // Зупинка таймера
        document.getElementById("event-timer").innerText = "ПОДІЯ НАСТАЛА!"; // Оновлення тексту
        document.body.style.backgroundColor = "#ffcc00"; // Зміна кольору фону
        document.querySelector('.hero-section').classList.add('event-ended'); // Додаємо клас для анімації/стилю

        // === ЛОГУВАННЯ: Повідомлення про завершення події ===
        console.log('*** Подія зворотного відліку ЗАВЕРШИЛАСЯ! ***');
        console.log('----------------------------------------------------');
        return; // Завершення виконання функції
    }

    // Розрахунок днів, годин, хвилин і секунд
    const time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };

    // Оновлення елементів на сторінці
    timerElements.days.textContent = addLeadingZero(time.days);
    timerElements.hours.textContent = addLeadingZero(time.hours);
    timerElements.minutes.textContent = addLeadingZero(time.minutes);
    timerElements.seconds.textContent = addLeadingZero(time.seconds);

    // === ЛОГУВАННЯ: Поточні значення зворотного відліку ===
    console.log(`Поточний відлік: ${time.days} днів, ${time.hours} годин, ${time.minutes} хвилин, ${time.seconds} секунд`);
}

// Виклик функції оновлення щосекунди
const interval = setInterval(updateCountdownTimer, 1000);

// Перший виклик функції, щоб уникнути затримки на 1 секунду
updateCountdownTimer();
