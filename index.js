const data = require("./person.js");
const fs = require("fs");
const catMe = require("cat-me");

const { age, name } = data.person;
const fileMsj = `Hola soy ${name} y tengo ${age}`;

console.log(catMe());

fs.writeFile("person.txt", fileMsj, () => {
  console.log("archivo 'person.txt' creado");
});
