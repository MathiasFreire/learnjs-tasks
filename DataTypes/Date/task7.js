function getSecondsToTomorrow() {
    let date = new Date();
    return (24 - date.getHours()) * 3600 - date.getMinutes() * 60 - date.getSeconds();
}