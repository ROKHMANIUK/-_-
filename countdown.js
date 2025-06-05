const targetEventDate = new Date('2025-12-31T23:59:59'); // Дата, до якої буде відліковуватися час

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
    // --- Додаємо логування тут ---
    console.log('Оновлення таймера...');
    const currentTime = new Date(); // Поточний час
    const difference = targetEventDate - currentTime; // Різниця між цільовою датою і поточним часом

    if (difference < 0) {
        clearInterval(interval); // Зупинка таймера
        document.getElementById("event-timer").innerText = "ПОДІЯ НАСТАЛА!"; // Оновлення тексту
        document.body.style.backgroundColor = "#ffcc00"; // Зміна кольору фону
        document.querySelector('.hero-section').classList.add('event-ended'); // Додаємо клас для анімації/стилю
        console.log('Подія завершена!'); // Логування завершення
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

    // Додаткове логування поточних значень
    console.log(`Залишилось: ${time.days} днів, ${time.hours} годин, ${time.minutes} хвилин, ${time.seconds} секунд`);
}

// Виклик функції оновлення щосекунди
const interval = setInterval(updateCountdownTimer, 1000);

// Перший виклик функції, щоб уникнути затримки на 1 секунду
updateCountdownTimer();
