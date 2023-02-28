function readNumber() {
    let num;
    do {
        num = prompt("Введите число");
    } while (!isFinite(num) && num != null && num !== "");

    return (num != null && num !== "" ? +num : null);
}

alert(readNumber());