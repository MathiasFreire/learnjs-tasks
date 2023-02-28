let userAnswer = prompt("Кто там?", "");
if (userAnswer === "Админ") {
    let password = prompt("Пароль?", "");
    if (password === "Я Главный") {
        alert("Здравствуйте!");
    } else if (password === "" || password == null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (userAnswer == null || userAnswer === "") {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}