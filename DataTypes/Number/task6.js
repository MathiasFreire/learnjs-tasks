function randomInteger (min, max) {
    let randInt;

    do {
        randInt = Math.trunc(Math.random() * (10 ** Math.ceil(Math.log10(max))));
    } while (randInt <= min || randInt > max );

    return randInt;
}

alert(randomInteger(1, 10));