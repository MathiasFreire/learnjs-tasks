let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt("Введите первое число");
        this.b = +prompt("Введите второе число");
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );