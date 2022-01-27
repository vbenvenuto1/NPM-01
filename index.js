const chalk = require("chalk");
const moment = require("moment");

console.log(chalk.blue("hello world"));

const today = moment();
const friendlyDay = today.format("dddd, [the] Do MMM");
console.log(friendlyDay);
