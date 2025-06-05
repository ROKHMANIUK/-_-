// Встановлення цільової дати для зворотного відліку
const targetEventDate = new Date('2025-12-31T23:59:59'); // Змінена цільова дата

// Отримання посилань на елементи DOM для відображення часу
const timeDisplayElements = {
    days: document.getElementById("display-days"), // Новий ID
    hours: document.getElementById("display-hours"), // Новий ID
    minutes: document.getElementById("display-minutes"), // Новий ID
    seconds: document.getElementById("display-seconds") // Новий ID
};

// Функція оновлення таймера зворотного відліку
function updateCountdownTimer() {
    const now = new Date(); // Поточний час
    const timeLeft = targetEventDate - now; // Різниця в мілісекундах
    
    if (timeLeft < 0) {
        // Якщо подія вже настала
        clearInterval(countdownInterval); // Зупинити таймер
        document.getElementById("event-timer").innerText = "ПОДІЯ РОЗПОЧАЛАСЬ!"; // Змінений текст
        document.body.style.backgroundColor = "#ff7043"; // Зміна фону на помаранчевий
        document.getElementById("countdown-display").classList.add("animate-end-event"); // Новий клас анімації
        return; // Завершити виконання
    }

    // Розрахунок часу
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Оновлення тексту в DOM-елементах
    timeDisplayElements.days.innerText = days;
    timeDisplayElements.hours.innerText = hours;
    timeDisplayElements.minutes.innerText = minutes;
    timeDisplayElements.seconds.innerText = seconds;
}

// Перший виклик функції для негайного відображення
updateCountdownTimer();

// Встановлення інтервалу оновлення (кожна секунда)
const countdownInterval = setInterval(updateCountdownTimer, 1000);