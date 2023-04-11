var fs = require("fs");

console.log("file stream started");

fs.readFile("mybio.txt",function(err, data){
    if(!er){
        console.log(data.toString());
    }
    else{
        console.log(err);
    }
})
console.log("File Stream End");