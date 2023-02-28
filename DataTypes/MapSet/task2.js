function aclean(arr) {
    let map = new Map();

    for (let item of arr) {
        let symbols = Array.from(item.toLowerCase()).sort().join("")
        if (!map.has(symbols)) map.set(symbols, item);
    }

    return Array.from(map.values());
}
