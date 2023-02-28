let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if(!isNaN(obj[prop])) {
            obj[prop] *= 2;
        }
    }
}

multiplyNumeric(menu);