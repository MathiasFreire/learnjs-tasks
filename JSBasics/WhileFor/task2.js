// цикл выведет 1,2,3,4
// так как i сначала увеличивается на 1, а потом сравнивается с 5
let i = 0;
while (++i < 5) alert(i);

//выведется 1-5 т.к. сначала происходит сравнение с 5, а потом увеличивается i
i = 0;
while (i++ < 5) alert(i);