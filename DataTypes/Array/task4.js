function sumInput() {
    let array = [];
    let buff;

    buff = prompt("Введите число");
    while (isFinite(buff) && buff !== "" && buff != null) {
        array.push(+buff);
        buff = prompt("Введите число");
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

alert(sumInput());