function getWeekDay(date) {
    let map = new Map([[0, "ВС"], [1, "ПН"], [2, "ВТ"], [3, "СР"], [4, "ЧТ"], [5, "ПТ"], [6, "СБ"]]);

    return map.get(date.getDay());
}