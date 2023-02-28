function getDateAgo(date, days) {
    return new Date(date.getMilliseconds() - (days - 1) * 24 * 3600 * 1000).getDate()
}