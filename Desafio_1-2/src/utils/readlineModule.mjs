import * as readline from "readline";

let vecUsers = [];
let appointmentVector = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export { rl, vecUsers, appointmentVector };
