const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(err,data);
});
console.log("This Is The Message");