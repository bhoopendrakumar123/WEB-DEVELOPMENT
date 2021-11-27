const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");

text = text.replace("Bhoopendra","Sumit");

console.log("The Content Of The File is:");
console.log(text);

console.log("Creating The New File Is:");
fs.writeFileSync("Rohan.txt",text);