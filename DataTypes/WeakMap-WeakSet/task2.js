let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

// можно хранить в WeakMap (ключ - сообщение, значение - дата)
// аналогично при удалении сообщения удалится и информация о прочтении