// core module
// file system
const fs = require("fs");
// input in console
const readline = require("readline");
// call function from anoter file
const { Question, SaveData } = require("./Function");

// ----------------------------------------------------------------

// input stream and output stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dir = "./data"; // directory name
const file = "./data/contacts.json"; // file name, inside dir

// check directory and file before input
// if directory not exist, create directory
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// if file not exist, create file
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "[]");
}

const main = async () => {

  // call function question and insert variable string
  const name = await Question("What is your name? ", rl);
  const phone = await Question("What is your mobile phone? ", rl);
  const email = await Question("What is your email? ", rl);

  // call function SaveData and insert variable
  SaveData(name, phone, email, fs);

  // close / stop program
  rl.close();
};

main();
