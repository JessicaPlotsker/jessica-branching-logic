import readline from "readline";

export class ReadLine {
  constructor() {
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getReadlineInput(question) {
    return new Promise((resolve) => {
      this.readline.question(question, (input) => {
        resolve(input);
        // Do not close here; allow multiple uses
      });
    });
  }

  close() {
    this.readline.close();
  }
}
