function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) return "прямо сейчас";
    else if (diff < 60 * 1000) return `${diff / 1000} сек. назад`;
    else if (diff < 60 * 60 * 1000) return `${diff / 60000} мин. назад`;
    else {
        let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
        let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        let year = date.getFullYear().toString().slice(2, 5);
        return `${day}.${month}.${year} ${date.getHours()}:${date.getMinutes()}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );