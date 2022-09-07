// call function from another file
const { Question, SaveData } = require("./Function");

// ----------------------------------------------------------------

const main = async () => {
  // call function question and insert variable string
  const name = await Question("What is your name? ");
  const phone = await Question("What is your mobile phone? ");
  const email = await Question("What is your email? ");

  // call function SaveData and insert variable
  SaveData(name, phone, email);
};

main();
