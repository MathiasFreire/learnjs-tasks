let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // выведет весь массив как объект: a, b, function(){...}