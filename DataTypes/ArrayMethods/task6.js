function Calculator() {

    this.operations = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }

    this.calculate = function (str) {
        let arr = str.split(" ");

        if (!isFinite(arr[0]) || !isFinite(arr[2]) || !(arr[1] in this.operations)) {
            return "there is no such operation or you entered a wrong number";
        }

        if (arr[1] == "+") {
            return +arr[0] + +arr[2];
        } else if (arr[1] == "-") {
            return +arr[0] - +arr[2];
        } else {
            return this.operations[arr[1]](+arr[0], +arr[2]);
        }
    }

    this.addMethod = function (name, func) {
        this.operations[name] = func;
    }
}

let calc = new Calculator();
alert(calc.calculate("3 - 7"));

let powerCalc = new Calculator();
alert(powerCalc.calculate("2 ** 3"));

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

alert(powerCalc.calculate("2 ** 3"));