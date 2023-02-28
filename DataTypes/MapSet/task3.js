let map = new Map();

map.set("name", "John");

// let keys = map.keys(); //возвращается объект а не массив
let keys = Array.from(map.keys());

keys.push("more");