function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

//функции будут работать одинаково, т.к. все равно в первом случае
//если age > 18 вызывается return и ветка else не выполняется