var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();
app.use(cors());

app.use(express.urlencoded({
   extended:true
}));
app.use(express.json());

app.get("/", (req, res)=> {
   res.send("<h2>Welcome to API</h2>");
});

app.get("/products",(req, res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017").then(clientObj=>{
        var database = clientObj.db("ishop");
        database.collection("products").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
});


app.listen(2020);
console.log("Server Started : http://127.0.0.1:2020");
