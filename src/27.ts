function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

let index = 0;
while (true) {
  if (index % 10 === 0 && index >= 50 && index <= 99) {
    return `Your code here!`;
  }
  ++index;
}
