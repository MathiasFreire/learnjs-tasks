it("Возводит x в степень n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

// все тесты записаны в один блок, поэтому, если один из тестов провалится,
// мы не сможем получить точную информацию о том, что пошло не так