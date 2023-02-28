function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // ошибка, т.к. this будет брать название объекта,
//которому принадлежит функция makeUser, а такого объекта нет