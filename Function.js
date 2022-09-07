// function question
const Question = (question, rl) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// function save data
const SaveData = (name, phone, email, fs) => {
  // array object
  const contact = { name, phone, email };
  // read file before write
  const file = fs.readFileSync("data/contacts.json", "utf8");
  // change data string to object
  const contacts = JSON.parse(file);
  // add items to variable contact
  contacts.push(contact);
  // change data object to sting and write items to file
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  // send respond when input success
  console.log(
    `Thank you for input your data! \nYour name is ${name}, your mobile phone is ${phone}, and your email is ${email}`
  );
};

module.exports = { Question, SaveData };
