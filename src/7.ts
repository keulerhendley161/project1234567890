// Generated using TS Compiler (tsc)
class Calculator {
  constructor(private num1: number, private num2: number) {}

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) throw new Error("Cannot divide by zero");
    return this.num1 / this.num2;
  }
}
