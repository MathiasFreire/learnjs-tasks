function pow(x, n) {
    return x ** n;
}
let x = +prompt();
let n = +prompt();
if (n >= 1 || n % 10 !== 0) {
    alert(pow(x, n))
} else alert("Степень должна быть натуральной");