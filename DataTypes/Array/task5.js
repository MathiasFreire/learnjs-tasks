function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let elem of arr) {
        currentSum += elem;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
}