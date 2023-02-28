function shuffle(arr) {

    function compare() {
        return Math.random() * (-1) ** (Math.trunc(Math.random() * 100));
    }

    return arr.sort(compare);
}