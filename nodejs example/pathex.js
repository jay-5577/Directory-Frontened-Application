var path = require("path");

var yourFileExt = path.extname("D:\\public\images\acroom.jpg");

if(yourFileExt==".png"){
    console.log("file uploded successfully");
}else{
    console.log("you can upload only png file");
}