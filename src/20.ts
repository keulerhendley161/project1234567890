function calculateSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
}

function getRandomInt(max): number {
    return Math.floor(Math.random() * max);
}
