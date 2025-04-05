function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const secret = getRandomInt(100);

// Example usage of secret variable
console.log(`The random number generated is ${secret}`);
