let n = prompt("Введите число, до которого искать простые числа", "");

outer:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) continue outer;
        }
        alert(i);
    }