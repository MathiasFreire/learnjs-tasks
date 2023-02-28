let user = {
    name: "Jack",
    age: 18
}
function A() {
    return user;
}
function B() {
    return user;
}

let a = new A();
let b = new B();

alert( a == b ); // true