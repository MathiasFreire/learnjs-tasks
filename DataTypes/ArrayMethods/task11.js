function getAverageAge (users) {
    let res = users.reduce((sum, user) => sum + user.age, 0);
    return res / users.length;
}