let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary (salaries) {
    let topName = null;
    let topSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topName = name;
            topSalary = salary;
        }
    }

    return topName;
}

alert(topSalary(salaries));