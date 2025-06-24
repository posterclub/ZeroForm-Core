export class ZeroForm {
  constructor(seed = "∆voidseed") {
    this.seed = seed;
    this.state = "Hybrid";
  }

  observe(input) {
    this.X = input;
    this.notX = `отсутствие ${input}`;
    this.hybrid = `наблюдение ${input} без оценки`;
  }

  result() {
    return {
      X: this.X,
      ¬X: this.notX,
      Hybrid: this.hybrid
    };
  }

  reset() {
    this.X = null;
    this.notX = null;
    this.hybrid = null;
  }
}