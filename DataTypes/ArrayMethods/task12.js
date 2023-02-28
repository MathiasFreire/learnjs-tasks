function unique(arr) {
    let uniqArr = arr.slice();

    for (let item of uniqArr) {
        let firstIndex = uniqArr.indexOf(item);
        let lastIndex = uniqArr.lastIndexOf(item);

        while (firstIndex != lastIndex) {
            uniqArr.splice(lastIndex, 1);
            lastIndex = uniqArr.lastIndexOf(item);
        }
    }

    return uniqArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O