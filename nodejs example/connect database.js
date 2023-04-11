var mongoClient = require("mongodb").MongoClient;

var conString = "mongodb://127.0.0.1:27017";

mongoClient.connect(conString).then(function(clientObject){
   var database = clientObject.db("ishop");
   database.collection("products").find({category:"jewelery"}).toArray().then(function(document){
        console.log(document);
   }).catch(function(ex){
    console.log(ex);
})
})
.catch(function(ex){
    console.log(ex);
})