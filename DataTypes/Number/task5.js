function random (min, max) {
    let rand;

    do {
        rand = Math.random() * (10 ** Math.ceil(Math.log10(max)));
    } while (rand <= min || rand > max );

    return rand;
}

alert(random(9, 10));