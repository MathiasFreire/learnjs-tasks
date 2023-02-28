function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

// instanceof проверяет только prototype, а не функции
alert( a instanceof B ); // true