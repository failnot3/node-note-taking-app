const chalk = require("chalk");
/* Importing the validator module and the getNotes module. */
// const validator = require("validator");

const getNotes = require("./notes.js");
/* Importing the getNotes module and then logging the message to the console. */
const message = getNotes();
console.log("====================================");
console.log(message);
console.log("====================================");

/* Using the validator module to check if the string is a URL. */
// console.log(validator.isURL("https://google.com"));

/* Using the chalk module to print the string "Hello world!" in blue. */
console.log(chalk.blue("Hello world!"));
