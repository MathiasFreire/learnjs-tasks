let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

alert( fruits.length ); // 4, т.к. обе переменные указывают на один массив