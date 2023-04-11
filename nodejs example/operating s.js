var os = require("os");
console.log(os.cpus());
console.log(`total free memory on server ${os.freemem()}`);