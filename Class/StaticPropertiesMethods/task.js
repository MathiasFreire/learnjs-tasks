class Rabbit extends Object {
    constructor(name) {
        super(); // необходимо вызвать родительский конструктор
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') );